<?php

namespace App\Fixtures;

use App\Entity\Staff;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;

class StaffFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        for ($i = 0; $i < 10; $i++) {
            $staff = new Staff();
            $staff->setName($faker->name);
            $staff->setImage('https://picsum.photos/150/150');
            $staff->setDescription('Suspendisse quis maura at finibus. interdum. Donec at mollis dolor.');
            $manager->persist($staff);
            $this->addReference('staff_' . $i, $staff);
        }
        $manager->flush();
    }

}