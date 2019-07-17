<?php


namespace App\Fixtures;


use App\Entity\Animals;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;

class AnimalsFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        for ($i = 0; $i < 10; $i++) {
            $animals = new Animals();
            $animals->setName($faker->name);
            $animals->setImage('https://picsum.photos/150/150');
            $animals->setDate($faker->dateTime);
            $animals->setDescription('Suspendisse quis mauris vitae interdum. Donec at mollis dolor.');
            $animals->setCategory($this->getReference('category_' . $i));
            $manager->persist($animals);
            $this->addReference('animals_' . $i, $animals);
        }
        $manager->flush();
    }

}