<?php

namespace App\Service\Order;

use App\Entity\OrderLink;
use App\Service\Cart\CartManager;
use Doctrine\ORM\EntityManagerInterface;

class OrderManager
{
    public function __construct(CartManager $cartManager,EntityManagerInterface $entityManager)
    {
        $this->cart = $cartManager;
        $this->entityManager = $entityManager;
    }

    public function addToOrder($user)
    {
        foreach ($this->cart->getFullCart() as $key) {
            $order = new OrderLink();
            $order->setQuantity($key['quantity']);
            $order->setUser($user);
            $order->setPriceTotal($this->cart->getTotal());
            $order->setCreateAt(new \DateTime('now'));
            $order->setTicket($key['ticket']);
            $this->entityManager->persist($order);
        }
        $this->entityManager->flush();
    }
}