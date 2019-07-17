<?php

namespace App\Controller;

use App\Entity\AnimalsCategory;
use App\Form\AnimalsCategoryType;
use App\Repository\AnimalsCategoryRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/animals/category", name="categoryAnimal_")
 * @IsGranted("ROLE_ADMIN")
 */
class AnimalsCategoryController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
     */
    public function index(AnimalsCategoryRepository $animalsCategoryRepository): Response
    {
        return $this->render('animals_category/index.html.twig', [
            'animals_categories' => $animalsCategoryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $animalsCategory = new AnimalsCategory();
        $form = $this->createForm(AnimalsCategoryType::class, $animalsCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($animalsCategory);
            $entityManager->flush();

            return $this->redirectToRoute('categoryAnimal_index');
        }

        return $this->render('animals_category/new.html.twig', [
            'animals_category' => $animalsCategory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="edit", methods={"GET","POST"})
     */
    public function edit(Request $request, AnimalsCategory $animalsCategory): Response
    {
        $form = $this->createForm(AnimalsCategoryType::class, $animalsCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('categoryAnimal_index');
        }

        return $this->render('animals_category/edit.html.twig', [
            'animals_category' => $animalsCategory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(Request $request, AnimalsCategory $animalsCategory): Response
    {
        if ($this->isCsrfTokenValid('delete'.$animalsCategory->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($animalsCategory);
            $entityManager->flush();
        }

        return $this->redirectToRoute('categoryAnimal_index');
    }
}
