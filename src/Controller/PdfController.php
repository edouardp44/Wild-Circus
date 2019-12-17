<?php

namespace App\Controller;

use App\Entity\OrderLink;
use App\Entity\User;
use Knp\Snappy\Pdf;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PdfController extends AbstractController
{
    /**
     * @Route("/pdf/{id}", name="pdf")
     */
    public function generatePdf(Pdf $pdf, OrderLink $orderLink): Response
    {
        $html = $this->renderView('pdf/ticket.html.twig',[
                'title' => 'Wild Circus',
                'order' => $orderLink
            ]);

        return new PdfResponse($pdf->getOutputFromHtml($html), 'Billet.pdf');
    }
}