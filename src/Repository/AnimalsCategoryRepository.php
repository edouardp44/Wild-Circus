<?php

namespace App\Repository;

use App\Entity\AnimalsCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AnimalsCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method AnimalsCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method AnimalsCategory[]    findAll()
 * @method AnimalsCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnimalsCategoryRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AnimalsCategory::class);
    }

    public function findByCategoryAnimals($id)
    {
        $query = $this->createQueryBuilder('category')
            ->innerJoin('category.animals', 'animals')
            ->addSelect('animals', 'category')
            ->where('category.id = :id')
            ->setParameter('id', $id);
        return $query->getQuery()->getResult();
    }
}
