<?php

namespace App\Fixtures;

use App\Entity\Country;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class CountryFixtures extends Fixture
{
    const REGION = [
        'Alsace',
        'Aquitaine',
        'Basse-Normandie',
        'Bourgogne',
        'Bretagne',
        'Centre',
        'Champagne-Ardenne'];

    public function load(ObjectManager $manager)
    {
        foreach (self::REGION as $key => $region) {
            $country = new Country();
            $country->setRegion($region);
            $manager->persist($country);
            $this->addReference('country_' . $key, $country);
        }
        $manager->flush();
    }

}