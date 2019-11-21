<?php

namespace App\Controller;

use App\Entity\SpectacleCategory;
use App\Form\SpectacleCategoryType;
use App\Repository\SpectacleCategoryRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/spectacle/category", name="categorySpectacle_")
 * @IsGranted("ROLE_ADMIN")
 */
class SpectacleCategoryController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
     */
    public function index(SpectacleCategoryRepository $spectacleCategoryRepository): Response
    {
        return $this->render('spectacle_category/index.html.twig', [
            'spectacle_categories' => $spectacleCategoryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="new", methods={"GET","POST"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function new(Request $request): Response
    {
        $spectacleCategory = new SpectacleCategory();
        $form = $this->createForm(SpectacleCategoryType::class, $spectacleCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($spectacleCategory);
            $entityManager->flush();

            return $this->redirectToRoute('categorySpectacle_index');
        }

        return $this->render('spectacle_category/new.html.twig', [
            'spectacle_category' => $spectacleCategory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="edit", methods={"GET","POST"})
     */
    public function edit(Request $request, SpectacleCategory $spectacleCategory): Response
    {
        $form = $this->createForm(SpectacleCategoryType::class, $spectacleCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('categorySpectacle_index');
        }

        return $this->render('spectacle_category/edit.html.twig', [
            'spectacle_category' => $spectacleCategory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(Request $request, SpectacleCategory $spectacleCategory): Response
    {
        if ($this->isCsrfTokenValid('delete'.$spectacleCategory->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($spectacleCategory);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_spectacle');
    }
}
