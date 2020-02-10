<?php

namespace App\Controller;

use App\Repository\OrderLinkRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/order/show", name="order_show")
     * @IsGranted("ROLE_USER")
     */
    public function showAllOrder(OrderLinkRepository $linkRepository): Response
    {
        return $this->render('pdf/showAllOrder.html.twig', [
            'user' => $linkRepository->findBy(['user' => $this->getUser()])
        ]);
    }

}
