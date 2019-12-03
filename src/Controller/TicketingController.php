<?php

namespace App\Controller;

use App\Entity\Ticketing;
use App\Form\TicketingType;
use App\Repository\TicketingRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/ticketing")
 * *@IsGranted("ROLE_ADMIN")
 */
class TicketingController extends AbstractController
{
    /**
     * @Route("/", name="ticketing_index", methods={"GET"})
     */
    public function index(TicketingRepository $ticketingRepository): Response
    {
        return $this->render('ticketing/index.html.twig', [
            'ticketings' => $ticketingRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="ticketing_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $ticketing = new Ticketing();
        $form = $this->createForm(TicketingType::class, $ticketing);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($ticketing);
            $entityManager->flush();

            return $this->redirectToRoute('ticketing_index');
        }

        return $this->render('ticketing/new.html.twig', [
            'ticketing' => $ticketing,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="ticketing_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Ticketing $ticketing): Response
    {
        $form = $this->createForm(TicketingType::class, $ticketing);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('ticketing_index');
        }

        return $this->render('ticketing/edit.html.twig', [
            'ticketing' => $ticketing,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="ticketing_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Ticketing $ticketing): Response
    {
        if ($this->isCsrfTokenValid('delete'.$ticketing->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($ticketing);
            $entityManager->flush();
        }

        return $this->redirectToRoute('ticketing_index');
    }
}
