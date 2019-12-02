<?php

namespace App\Fixtures;

use App\Entity\Country;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $admin = new User();
        $admin->setEmail('admin@admin.com');
        $admin->setName('Jean');
        $admin->setRoles(['ROLE_ADMIN']);
        $admin->setCountry($this->getReference('country_' . rand(0, 4)));
        $admin->setPassword($this->passwordEncoder->encodePassword(
            $admin,
            'admin'
        ));
        $manager->persist($admin);

        $user = new User();
        $user->setEmail('user@user.com');
        $user->setName('Edouard');
        $user->setRoles(['ROLE_USER']);
        $user->setCountry($this->getReference('country_' . rand(0, 4)));
        $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            'user'
        ));
        $manager->persist($user);
        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [Country::class];
    }

}