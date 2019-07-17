<?php

namespace App\Repository;

use App\Entity\SpectacleCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method SpectacleCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method SpectacleCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method SpectacleCategory[]    findAll()
 * @method SpectacleCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SpectacleCategoryRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, SpectacleCategory::class);
    }

    public function findByAnimals($id)
    {
        $query = $this->createQueryBuilder('category')
            ->innerJoin('category.spectacles', 'spectacles')
            ->addSelect('spectacles', 'category')
            ->where('category.id = :id')
            ->setParameter('id', $id);
        return $query->getQuery()->getResult();
    }
}
