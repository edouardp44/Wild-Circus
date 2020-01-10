<?php

namespace App\Controller;

use App\Entity\ShowTour;
use App\Form\ShowTourType;
use App\Repository\ShowTourRepository;
use App\Repository\UserRepository;
use App\Service\Mailer\MailNotification;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/show/tour", name="show_tour_")
 */
class ShowTourController extends AbstractController
{
    private $mailer;

    public function __construct(MailNotification $mailer)
    {
        $this->mailer = $mailer;
    }

    /**
     * @Route("/", name="index", methods={"GET"})
     */
    public function index(ShowTourRepository $showTourRepository): Response
    {
        return $this->render('show_tour/index.html.twig', [
            'show_tours' => $showTourRepository->findAll(),
        ]);
    }

    /**
     * @Route("/calendar", name="calendar", methods={"GET"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function calendar()
    {
        return $this->render('show_tour/calendar.html.twig');

    }

    /**
     * @Route("/new", name="new", methods={"GET","POST"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function new(Request $request, UserRepository $user): Response
    {
        $showTour = new ShowTour();
        $form = $this->createForm(ShowTourType::class, $showTour);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($showTour);
            $entityManager->flush();
            $this->mailer->sendMailByUserData($user, $form);
            return $this->redirectToRoute('show_tour_calendar');
        }

        return $this->render('show_tour/new.html.twig', ['show_tour' => $showTour,
            'form' => $form->createView(),]);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function show(ShowTour $showTour): Response
    {
        return $this->render('show_tour/show.html.twig', [
            'show_tour' => $showTour,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="edit", methods={"GET","POST"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function edit(Request $request, ShowTour $showTour): Response
    {
        $form = $this->createForm(ShowTourType::class, $showTour);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('show_tour_calendar');
        }

        return $this->render('show_tour/edit.html.twig', [
            'show_tour' => $showTour,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function delete(Request $request, ShowTour $showTour): Response
    {
        if ($this->isCsrfTokenValid('delete' . $showTour->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($showTour);
            $entityManager->flush();
        }

        return $this->redirectToRoute('show_tour_calendar');
    }
}
