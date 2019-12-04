<?php

namespace App\Controller;

use App\Repository\TicketingRepository;
use App\Service\Cart\CartManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("cart", name="cart_")
 */
class CartController extends AbstractController
{
    private $cartManager;

    public function __construct(CartManager $cartManager)
    {
        $this->cartManager = $cartManager;
    }

    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        return $this->render('cart/index.html.twig', [
            'items' => $this->cartManager->getFullCart(),
            'total' => $this->cartManager->getTotal()
        ]);
    }

    /**
     * @Route("/clean", name="clean")
     */
    public function cleanSession(SessionInterface $session): RedirectResponse
    {
        $session->clear();
        return $this->redirectToRoute("cart_ticket");
    }

    /**
     * @Route("/add/{id}", name="add")
     */
    public function addToCart($id): RedirectResponse
    {
        if ($this->isGranted('ROLE_USER')) {
            $this->cartManager->add($id);
            $this->addFlash('success',"Ca a bien été ajoutez à votre panier");
        } else {
            $this->addFlash('danger', 'Vous devez vous connecter pour acheter un billet');
        }
        return $this->redirectToRoute("cart_ticket");
    }

    /**
     * @Route("/ticket", name="ticket")
     */
    public function ticketingList(TicketingRepository $ticketingRepository): Response
    {
        return $this->render('/cart/ticket.html.twig', [
            'ticket' => $ticketingRepository->findAll(),
        ]);

    }

    /**
     * @Route("/remove/{id}", name="remove")
     */
    public function remove($id): RedirectResponse
    {
        $this->cartManager->remove($id);
        return $this->redirectToRoute('cart_index');
    }
}