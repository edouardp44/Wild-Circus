<?php

namespace App\Controller;

use App\Entity\Spectacle;
use App\Entity\SpectacleCategory;
use App\Form\SpectacleType;
use App\Repository\SpectacleCategoryRepository;
use App\Repository\SpectacleRepository;
use App\Service\FileUploader;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/spectacle", name="spectacle_")
 */
class SpectacleController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
     */
    public function index(SpectacleCategoryRepository $category, SpectacleRepository $spectacleRepository): Response
    {
        return $this->render('spectacle/index.html.twig', [
            'spectacles' => $spectacleRepository->findAll(),
            'categorys' => $category->findAll(),
        ]);
    }

    /**
     * @return JsonResponse
     * @Route("/detail/{id}", name="detail", options={"expose"=true})
     */
    public function detail(SpectacleCategoryRepository $categoryRepository, SpectacleCategory $spectacleCategory): JsonResponse
    {
        $data = [
            $this->render('spectacle/detail.html.twig',[
            'spectacles' => $categoryRepository->findByCategory($spectacleCategory->getId())
                ])->getContent()
            ];
        return $this->json($data);

    }

    /**
     * @Route("/new", name="new", methods={"GET","POST"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function new(Request $request, FileUploader $fileUploader): Response
    {
        $spectacle = new Spectacle();
        $form = $this->createForm(SpectacleType::class, $spectacle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $file = $fileUploader->upload($form->get('image')->getData());
            $spectacle->setDate(new \DateTime('now'));
            $spectacle->setImage($file);
            $entityManager->persist($spectacle);
            $entityManager->flush();

            return $this->redirectToRoute('admin_spectacle');
        }

        return $this->render('spectacle/new.html.twig', [
            'spectacle' => $spectacle,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/{id}/edit", name="edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Spectacle $spectacle): Response
    {
        $form = $this->createForm(SpectacleType::class, $spectacle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('admin_spectacle');
        }

        return $this->render('spectacle/edit.html.twig', [
            'spectacle' => $spectacle,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function delete(Request $request, Spectacle $spectacle): Response
    {
        if ($this->isCsrfTokenValid('delete' . $spectacle->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($spectacle);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_spectacle');
    }

    /**
     * @Route("/show/{id}", name="show")
     */
    public function show(Spectacle $spectacle): Response
    {
        return $this->render('spectacle/show.html.twig', [
            'spectacle' => dump($spectacle) ,
        ]);
    }
}
