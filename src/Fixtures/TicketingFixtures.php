<?php

namespace App\Fixtures;

use App\Entity\Ticketing;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class TicketingFixtures extends Fixture
{
    const GROUPCOMPISTION = [
        'Enfant',
        'Adulte',
        'Group +10'
    ];

    public function load(ObjectManager $manager)
    {
        foreach (self::GROUPCOMPISTION as $key => $groupComposition ) {
            $ticketing = new Ticketing();
            $ticketing->setGroupComposition($groupComposition);
            $ticketing->setPrice(30);
            $manager->persist($ticketing);
        }
        $manager->flush();
    }

}