<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(fields={"email"}, message="There is already an account with this email")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Country", inversedBy="users")
     */
    private $country;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ticketing", mappedBy="user")
     */
    private $ticketings;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\OrderLink", mappedBy="user")
     */
    private $orderLinks;

    /**
     * the token which will be used when forgetting a password
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $resetToken;


    public function __construct()
    {
        $this->ticketings = new ArrayCollection();
        $this->orders = new ArrayCollection();
        $this->orderLinks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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
     * @return Collection|Ticketing[]
     */
    public function getTicketings(): Collection
    {
        return $this->ticketings;
    }

    public function addTicketing(Ticketing $ticketing): self
    {
        if (!$this->ticketings->contains($ticketing)) {
            $this->ticketings[] = $ticketing;
            $ticketing->setUser($this);
        }

        return $this;
    }

    public function removeTicketing(Ticketing $ticketing): self
    {
        if ($this->ticketings->contains($ticketing)) {
            $this->ticketings->removeElement($ticketing);
            // set the owning side to null (unless already changed)
            if ($ticketing->getUser() === $this) {
                $ticketing->setUser(null);
            }
        }

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
            $orderLink->setUser($this);
        }

        return $this;
    }

    public function removeOrderLink(OrderLink $orderLink): self
    {
        if ($this->orderLinks->contains($orderLink)) {
            $this->orderLinks->removeElement($orderLink);
            // set the owning side to null (unless already changed)
            if ($orderLink->getUser() === $this) {
                $orderLink->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getResetToken(): string
    {
        return $this->resetToken;
    }

    /**
     * @param mixed $resetToken
     */
    public function setResetToken(?string $resetToken): void
    {
        $this->resetToken = $resetToken;
    }
}

