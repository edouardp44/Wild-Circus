<?php

namespace App\Fixtures;

use App\Entity\Spectacle;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;

class SpetacleFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        for ($i = 0; $i < 10; $i++) {
            $spectacle = new Spectacle();
            $spectacle->setName($faker->name);
            $spectacle->setDescription('Aenean pharetra nec massa at finibus. Cras fermentum viverra purus mollis dolor.');
            $spectacle->setDate($faker->dateTime);
            $spectacle->setImage('https://picsum.photos/150/150');
            $spectacle->addStaff($this->getReference('staff_' . $i));
            $spectacle->addCategory($this->getReference('spectacle_' . $i));
            $manager->persist($spectacle);
        }
        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [StaffFixtures::class];
    }
}