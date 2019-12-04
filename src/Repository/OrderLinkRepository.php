<?php

namespace App\Repository;

use App\Entity\OrderLink;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method OrderLink|null find($id, $lockMode = null, $lockVersion = null)
 * @method OrderLink|null findOneBy(array $criteria, array $orderBy = null)
 * @method OrderLink[]    findAll()
 * @method OrderLink[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderLinkRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, OrderLink::class);
    }

    // /**
    //  * @return OrderLink[] Returns an array of OrderLink objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?OrderLink
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
