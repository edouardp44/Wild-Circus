<?php

namespace App\Repository;

use App\Entity\ShowTour;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\ORM\Query\ResultSetMappingBuilder;

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

    public function findDateByBeginAt()
    {
        // la table en base de données correspondant à l'entité liée au repository en cours
        $table = $this->getClassMetadata()->table["name"];

        $sql = "SELECT * FROM show_tour 
                WHERE begin_at > DATE_ADD(NOW(), INTERVAL -30 DAY) 
                ORDER BY begin_at ASC";
        $rsm = new ResultSetMappingBuilder($this->getEntityManager());
        $rsm->addEntityResult(ShowTour::class, 'showTour');

        // On mappe le nom de chaque colonne en base de données sur les attributs de nos entités
        foreach ($this->getClassMetadata()->fieldMappings as $obj) {
            $rsm->addFieldResult("showTour", $obj["columnName"], $obj["fieldName"]);
        }

        $stmt = $this->getEntityManager()->createNativeQuery($sql, $rsm);


        $stmt->execute();

        return $stmt->getResult();
    }
}
