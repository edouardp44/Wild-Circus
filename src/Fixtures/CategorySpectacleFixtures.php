<?php

namespace App\Fixtures;

use App\Entity\SpectacleCategory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;

class CategorySpectacleFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        for ($i = 0; $i < 10; $i++) {
            $category = new SpectacleCategory();
            $category->setName($faker->name);
            $manager->persist($category);
            $this->addReference('spectacle_' . $i, $category);
        }
        $manager->flush();
    }
}