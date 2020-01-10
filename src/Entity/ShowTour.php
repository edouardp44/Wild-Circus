<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ShowTourRepository")
 */
class ShowTour
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $location;

    /**
     * @ORM\Column(type="datetime")
     */
    private $beginAt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $endAt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Country", inversedBy="showTours")
     */
    private $country;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\OrderLink", mappedBy="showTour", cascade={"remove"})
     */
    private $orderLinks;

    public function __construct()
    {
        $this->orderLinks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(string $location): self
    {
        $this->location = $location;

        return $this;
    }

    public function getBeginAt(): ?\DateTimeInterface
    {
        return $this->beginAt;
    }

    public function setBeginAt(\DateTimeInterface $beginAt): self
    {
        $this->beginAt = $beginAt;

        return $this;
    }

    public function getEndAt(): ?\DateTimeInterface
    {
        return $this->endAt;
    }

    public function setEndAt(\DateTimeInterface $endAt): self
    {
        $this->endAt = $endAt;

        return $this;
    }

    public function getCountry(): ?Country
    {
        return $this->country;
    }

    public function setCountry(?Country $country): self
    {
        $this->country = $country;

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
            $orderLink->setShowTour($this);
        }

        return $this;
    }

    public function removeOrderLink(OrderLink $orderLink): self
    {
        if ($this->orderLinks->contains($orderLink)) {
            $this->orderLinks->removeElement($orderLink);
            // set the owning side to null (unless already changed)
            if ($orderLink->getShowTour() === $this) {
                $orderLink->setShowTour(null);
            }
        }

        return $this;
    }
}
