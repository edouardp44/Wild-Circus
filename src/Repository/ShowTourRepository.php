<?php

namespace App\Repository;

use App\Entity\ShowTour;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ShowTour|null find($id, $lockMode = null, $lockVersion = null)
 * @method ShowTour|null findOneBy(array $criteria, array $orderBy = null)
 * @method ShowTour[]    findAll()
 * @method ShowTour[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ShowTourRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ShowTour::class);
    }

    public function whenBeginAtBetweenEndAT($start, $end)
    {
        $qb = $this->createQueryBuilder('showTour')
            ->where('showTour.beginAt BETWEEN :start and :end OR showTour.endAt BETWEEN :start and :end')
            ->setParameter('start', $start)
            ->setParameter('end', $end)
        ;
        $query = $qb->getQuery();
        return $query->execute();
    }
}
