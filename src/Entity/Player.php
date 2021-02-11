<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *      collectionOperations={"get", "post"},
 *      itemOperations={"get" = {"normalization_context" = {"groups" = {"player"}}},"put", "patch", "delete"}
 * )
 * @ORM\Entity(repositoryClass=PlayerRepository::class)
 */
class Player
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue      
     * @ORM\Column(type="integer")
     * @Groups("player")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("player")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("player")
     */
    private $time;

    /**
     * @ORM\Column(type="integer")
     * @Groups("player")
     */
    private $date;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getTime(): ?string
    {
        return $this->time;
    }

    public function setTime(string $time): self
    {
        $this->time = $time;

        return $this;
    }

    public function getDate(): ?int
    {
        return $this->date;
    }

    public function setDate(int $date): self
    {
        $this->date = $date;

        return $this;
    }
}
