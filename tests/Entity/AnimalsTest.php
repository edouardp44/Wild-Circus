<?php

namespace App\Tests\Entity;

use App\Entity\Animals;
use App\Entity\AnimalsCategory;
use App\Entity\Spectacle;
use PHPUnit\Framework\TestCase;

class AnimalsTest  extends TestCase
{
    public function testAnimalCreat()
    {
        $animal = new Animals();
        $animal->setName('animal');
        $date = new \DateTime('now');
        $animal->setDate($date);
        $animal->setDescription('description');
        $animal->setImage('images');
        $animal->setCategory(new AnimalsCategory());
        $animal->addSpectacle(new Spectacle());

        $this->assertEquals('description', $animal->getDescription());
        $this->assertEquals('images', $animal->getImage());
        $this->assertEquals($date, $animal->getDate());
        $this->assertInstanceOf(AnimalsCategory::class, $animal->getCategory());
        $this->assertEquals('animal', $animal->getName());
        $this->assertInstanceOf(Spectacle::class, $animal->getSpectacles());
    }
}