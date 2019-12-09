<?php

namespace App\Service\Order;

use App\Entity\OrderLink;
use App\Service\Cart\CartManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;


class OrderManager
{
    private $cart;

    private $entityManager;

    private $session;

    public function __construct(CartManager $cartManager, EntityManagerInterface $entityManager, SessionInterface $session)
    {
        $this->cart = $cartManager;
        $this->entityManager = $entityManager;
        $this->session = $session;

    }

    public function addToOrder($user)
    {
        foreach ($this->cart->getFullCart() as $key) {
            $order = new OrderLink();
            $order->setPrice($key['ticket']->getPrice());
            $order->setQuantity($key['quantity']);
            $order->setUser($user);
            $order->setPriceTotal($this->cart->getTotal());
            $order->setCreateAt(new \DateTime('now'));
            $order->setTicket($key['ticket']);
            $this->entityManager->persist($order);
        }
        $this->entityManager->flush();
        $this->session->clear();
    }
}