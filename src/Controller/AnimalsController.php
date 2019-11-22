<?php

namespace App\Controller;

use App\Entity\Animals;
use App\Entity\AnimalsCategory;
use App\Entity\Spectacle;
use App\Form\AnimalsType;
use App\Repository\AnimalsCategoryRepository;
use App\Repository\AnimalsRepository;
use App\Repository\SpectacleRepository;
use App\Service\FileUploader;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/animals", name="animals_")
 */
class AnimalsController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
     */
    public function index(AnimalsRepository $animalsRepository, AnimalsCategoryRepository $categoryRepository): Response
    {
        return $this->render('animals/index.html.twig', [
            'animals' => $animalsRepository->findAll(),
            'categorys' => $categoryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/category/{id}", name="category")
     */
    public function showAnimalByCategory(AnimalsCategoryRepository $categoryRepository, AnimalsCategory $animalCategory)
    {
        return $this->render('animals/showByCategory', [
            'categorysAnimals' => $categoryRepository->findByAnimals($animalCategory->getId()),
            'categorys' => $categoryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="new", methods={"GET","POST"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function new(Request $request, FileUploader $fileUploader): Response
    {
        $animal = new Animals();
        $form = $this->createForm(AnimalsType::class, $animal);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $file = $fileUploader->upload($form->get('image')->getData());
            $animal->setImage($file);
            $animal->setDate(new \DateTime('now'));
            $entityManager->persist($animal);
            $entityManager->flush();

            return $this->redirectToRoute('admin_animals');
        }

        return $this->render('animals/new.html.twig', [
            'animal' => $animal,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="edit", methods={"GET","POST"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function edit(Request $request, Animals $animal, FileUploader $fileUploader): Response
    {
        $form = $this->createForm(AnimalsType::class, $animal);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $file = $fileUploader->upload($form->get('image')->getData());
            $animal->setImage($file);
            $animal->setDate(new \DateTime('now'));
            $em->persist($animal);
            $em->flush();
            return $this->redirectToRoute('admin_animals');
        }

        return $this->render('animals/edit.html.twig', [
            'animal' => $animal,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function delete(Request $request, Animals $animal): Response
    {
        if ($this->isCsrfTokenValid('delete'.$animal->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($animal);
            $entityManager->flush();
        }
        return $this->redirectToRoute('admin_animals');
    }

    /**
     *@Route("/show/{id}", name="show")
     */
    public function show(Animals $animals,SpectacleRepository $spectacle): Response
    {
        return $this->render('/animals/show.html.twig', [
            'animal' => $animals,
        ]);
    }
}
