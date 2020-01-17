<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TicketingRepository")
 */
class Ticketing
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $price;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbPlace;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $groupComposition;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\OrderLink", mappedBy="ticket")
     */
    private $orderLinks;

    public function __construct()
    {
        $this->ordersLine = new ArrayCollection();
        $this->orderLinks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getNbPlace(): ?int
    {
        return $this->nbPlace;
    }

    public function setNbPlace(int $nbPlace): self
    {
        $this->nbPlace = $nbPlace;

        return $this;
    }

    public function getGroupComposition(): ?string
    {
        return $this->groupComposition;
    }

    public function setGroupComposition(string $groupComposition): self
    {
        $this->groupComposition = $groupComposition;

        return $this;
    }

    /**
     * @return Collection|OrderLink[]
     */
    public function getOrderLinks(): Collection
    {
        return $this->orderLinks;
    }

    public function addOrderLink(OrderLink $orderLink): self
    {
        if (!$this->orderLinks->contains($orderLink)) {
            $this->orderLinks[] = $orderLink;
            $orderLink->setTicket($this);
        }

        return $this;
    }

    public function removeOrderLink(OrderLink $orderLink): self
    {
        if ($this->orderLinks->contains($orderLink)) {
            $this->orderLinks->removeElement($orderLink);
            // set the owning side to null (unless already changed)
            if ($orderLink->getTicket() === $this) {
                $orderLink->setTicket(null);
            }
        }

        return $this;
    }
}
