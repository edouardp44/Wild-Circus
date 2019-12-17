<?php

namespace App\Service\Cart;

use App\Repository\TicketingRepository;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class CartManager
{
    private $session;

    private $ticketingRepository;

    public function __construct(SessionInterface $session, TicketingRepository $ticketingRepository)
    {
        $this->session = $session;
        $this->ticketingRepository = $ticketingRepository;
    }

    public function addShow($tour)
    {
        $show = $this->session->get('show', $tour);
        $this->session->set('show', $tour);
    }

    public function add(int $id)
    {
        $cart = $this->session->get('cart', []);
        if (!empty($cart[$id])) {
            $cart[$id]++;
        } else {
            $cart[$id] = 1;
        }
        $this->session->set('cart', $cart);
    }

    public function remove(int $id)
    {
        $cart = $this->session->get('cart', []);
        if (!empty($cart[$id])) {
            unset($cart[$id]);
        }
        $this->session->set('cart', $cart);
    }
    public function getCartWithShow()
    {
        $tour = $this->session->get('show');
        return $tour;
    }
    public function getFullCart(): array
    {
        $cart = $this->session->get('cart', []);

        $cartWithData = [];

        foreach ($cart as $id => $quantity) {
            $cartWithData[] = [
                'ticket' => $this->ticketingRepository->find($id),
                'quantity' => $quantity,
                'show' => $this->getCartWithShow()
            ];
        }
        return $cartWithData;
    }

    public function getTotal(): float
    {
        $total = 0;
        foreach ($this->getFullCart() as $item) {
            $total += $item['ticket']->getPrice() * $item['quantity'];
        }
        return $total;
    }
}