<?php

namespace App\Controller;

use App\Service\Order\OrderManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;


/**
 * @Route("/order", name="order_")
 */
class OrderController extends AbstractController
{
    private $order;

    public function __construct(OrderManager $orderManager)
    {
        $this->order = $orderManager;
    }

    /**
     * @Route("/add", name="add", methods={"GET","POST"})
     */
    public function addTheOrder(): Response
    {
        $this->order->addToOrder($this->getUser());
        return $this->redirectToRoute("home");
    }
}