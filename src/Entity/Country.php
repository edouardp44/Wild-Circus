<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CountryRepository")
 */
class Country
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
    private $region;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\User", mappedBy="country")
     */
    private $users;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ShowTour", mappedBy="country")
     */
    private $showTours;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->showTours = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRegion(): ?string
    {
        return $this->region;
    }

    public function setRegion(?string $region): self
    {
        $this->region = $region;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->setCountry($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
            // set the owning side to null (unless already changed)
            if ($user->getCountry() === $this) {
                $user->setCountry(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ShowTour[]
     */
    public function getShowTours(): Collection
    {
        return $this->showTours;
    }

    public function addShowTour(ShowTour $showTour): self
    {
        if (!$this->showTours->contains($showTour)) {
            $this->showTours[] = $showTour;
            $showTour->setCountry($this);
        }

        return $this;
    }

    public function removeShowTour(ShowTour $showTour): self
    {
        if ($this->showTours->contains($showTour)) {
            $this->showTours->removeElement($showTour);
            // set the owning side to null (unless already changed)
            if ($showTour->getCountry() === $this) {
                $showTour->setCountry(null);
            }
        }

        return $this;
    }
}
