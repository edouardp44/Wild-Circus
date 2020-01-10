<?php

namespace App\Service\Mailer;

use App\Entity\ShowTour;
use App\Entity\User;
use App\Repository\ShowTourRepository;
use Twig\Environment;

class MailNotification
{
    private $mailer;

    private $showTours;

    private $environment;

    public function __construct(\Swift_Mailer $mailer, ShowTourRepository $showTours, Environment $environment)
    {
        $this->mailer = $mailer;
        $this->showTours = $showTours;
        $this->environment = $environment;

    }

    public function newDateOfShowTours($mail)
    {
        $messages = (new \Swift_Message('Wild Circus'))
            ->setFrom('edouardprovost44@gmail.com')
            ->setTo($mail)
            ->setBody(
                $this->environment->render(
                    'email/newDates.html.twig', [
                        'show' => $this->showTours->findDateByBeginAt()
                    ]), 'text/html'
            );
        $this->mailer->send($messages);
    }

    public function sendMailByUserData($user, $form)
    {
        //get user by data of form
        $userData = $user->findOneBy(['country' => $form->get('country')->getData()]);
        //get country by data of form
        $country = $form->get('country')->getData()->getRegion();
        if (isset($userData)) {
            $userCountry = $userData->getCountry()->getRegion();
            if ($country == $userCountry) {
                $this->newDateOfShowTours($userData->getEmail());
            }
        }

    }

}