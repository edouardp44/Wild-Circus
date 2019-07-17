<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SpectacleRepository")
 */
class Spectacle
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
    private $image;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Staff", inversedBy="spectacles")
     */
    private $staff;

    /**
     * @ORM\Column(type="date", length=255)
     */
    private $date;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\SpectacleCategory", inversedBy="spectacles")
     */
    private $category;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Animals", inversedBy="spectacles")
     */
    private $animals;

    public function __construct()
    {
        $this->animals = new ArrayCollection();
        $this->staff = new ArrayCollection();
        $this->category = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection|Staff[]
     */
    public function getStaff(): Collection
    {
        return $this->staff;
    }

    public function addStaff(Staff $staff): self
    {
        if (!$this->staff->contains($staff)) {
            $this->staff[] = $staff;
        }

        return $this;
    }

    public function removeStaff(Staff $staff): self
    {
        if ($this->staff->contains($staff)) {
            $this->staff->removeElement($staff);
        }

        return $this;
    }


    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;
        return $this;
    }

    /**
     * @return Collection|SpectacleCategory[]
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(SpectacleCategory $category): self
    {
        if (!$this->category->contains($category)) {
            $this->category[] = $category;
        }

        return $this;
    }

    public function removeCategory(SpectacleCategory $category): self
    {
        if ($this->category->contains($category)) {
            $this->category->removeElement($category);
        }

        return $this;
    }

    /**
     * @return Collection|Animals[]
     */
    public function getAnimals(): Collection
    {
        return $this->animals;
    }

    public function addAnimal(Animals $animal): self
    {
        if (!$this->animals->contains($animal)) {
            $this->animals[] = $animal;
        }

        return $this;
    }

    public function removeAnimal(Animals $animal): self
    {
        if ($this->animals->contains($animal)) {
            $this->animals->removeElement($animal);
        }

        return $this;
    }

    /**
     * @param mixed $staff
     * @return Spectacle
     */
    public function setStaff($staff)
    {
        $this->staff = $staff;
        return $this;
    }

    /**
     * @param mixed $animals
     * @return Spectacle
     */
    public function setAnimals($animals)
    {
        $this->animals = $animals;
        return $this;
    }
}
