<?php

namespace App\Controller;

use App\Entity\Message;
use App\Form\MessageType;
use App\Repository\AnimalsRepository;
use App\Repository\ShowTourRepository;
use App\Repository\SpectacleRepository;
use App\Repository\TicketingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function showLast(
        SpectacleRepository $spectacleRepository,
        AnimalsRepository $animalsRepository,
        TicketingRepository $ticketingRepository,
        ShowTourRepository $showTourRepository
    ): Response
    {
        return $this->render('home/home.html.twig', [
            'spectacles' => $spectacleRepository->findByThreeLast(),
            'animals' => $animalsRepository->findByThreeLast(),
            'ticketing' => $ticketingRepository->findAll(),
            'showTours' => $showTourRepository->findDateByBeginAt()
        ]);
    }

    /**
     * @Route("/contact", name="contact")
     *
     */
    public function sendMessages(Request $request): Response
    {
        $message = new Message();
        $form = $this->createForm(MessageType::class, $message);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($message);
            $entityManager->flush();

            return $this->redirectToRoute('admin_spectacle');
        }

        return $this->render('contact/contact.html.twig', [
            'spectacle_category' => $message,
            'form' => $form->createView(),
        ]);
    }

}