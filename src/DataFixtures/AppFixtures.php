<?php

namespace App\DataFixtures;

use App\Entity\Player;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $player = new Player();
        $player 
            ->setName('bob')
            ->setTime('2')
            ->setDate(12345612);
        
        $player = new Player();
        $player 
            ->setName('jack')
            ->setTime('5')
            ->setDate(852585);

        // $product = new Product();
        $manager->persist($player);
        $manager->flush();
    }
}
