<?php


namespace App\Controller;

use App\Repository\AnimalsRepository;
use App\Repository\MessageRepository;
use App\Repository\SpectacleRepository;
use App\Repository\StaffRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 *@Route("/admin", name="admin_")
 *@IsGranted("ROLE_ADMIN")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/", name="animals")
     */
    public function indexAnimals(AnimalsRepository $animalsRepository): Response
    {
        return $this->render('admin/animals.html.twig', [
            'animals' => $animalsRepository->findAll()
        ]);
    }

    /**
     * @Route("/spectacle", name="spectacle")
     */
    public function indexSpectacle(SpectacleRepository $spectacleRepository): Response
    {
        return $this->render('admin/spectacle.html.twig', [
            'spectacles' => $spectacleRepository->findAll()
        ]);
    }

    /**
     * @Route("/staff", name="staff")
     */
    public function indexStaff(StaffRepository $staffRepository): Response
    {
        return $this->render('admin/staff.html.twig', [
            'staffs' => $staffRepository->findAll()
        ]);
    }

    /**
     * @Route("/messages", name="messages")
     */
    public function indexMessage(MessageRepository $messageRepository): Response
    {
        return $this->render('admin/contact.html.twig', [
            'messages' => $messageRepository->findAll(),
        ]);
    }

}