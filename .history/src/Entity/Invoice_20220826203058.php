<?php

namespace App\Entity;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\InvoiceRepository;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=InvoiceRepository::class)
 * @ApiResource(
 * subresourceOperations={
 *    "api_customers_invoices_get_subresource"={
 *        "normalizationContext"={"groups"={"invoices_subresource"}}
 *        }
 *       },
 *  itemOperations={"GET", "PUT", "DELETE", "increment"={
 *        "method"="post",
 *         "path"="/invoices/{id}/increment",
 *         "controller"="App\Controller\InvoiceIncrementataionController",
 *         "openapi_context"={
 *             "summary"="Incrémente une facture",
 *              "description"="Incremente le chrono d'une facture donnée"
 *        }
 *      }
 *    }, 
 *  attributes={ 
 *      "pagination_enabled": true,
 *       "pagination_items_per_page": 10,
 *       "order": {"amount":"desc"}
 *       },
 * normalizationContext={"groups"={"invoices_read"}},
 * denormalizationContext={"disable_type_enforcement"=true}
 * )
 * @ApiFilter(OrderFilter::class, properties={"amount", "sentAt"})
 * 
 */
class Invoice
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})
     * @Assert\NotBlank(message="Le montant est obligatoire")
     * @Assert\Type(type="numeric", message="Le montant doit etre numérique")
     */
    private $amount;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})
     * @Assert\Type("\DateTimeInterface", message="date doit etre complet")
     * @Assert\NotBlank(message="La date d'evoit doit étre renseigné")
     */
    private $sentAt;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})
     * @Assert\NotBlank(message="Le status est obligatoire")
     * @Assert\Choice(choices={"SENT", "PAID", "CANCELLED" }, message="Le status doit étre SENT, PAID, CANCELLED")
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity=Customer::class, inversedBy="invoices")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"invoices_read"})
     * @Assert\NotBlank(message="Le client doit étre renseigné")
     */
    private $customer;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"invoices_read", "customers_read", "invoices_subresource"})
     * @Assert\NotBlank(message="il faut absolument un chrono pour la facture")
     * @Assert\Type(type="integer"), message="le chrono doit etre nombre !")
     * 
     */
    private $chron;


    /**
     * Permet de récupérer le User à qui appartient finalement la facture
     * @Groups({"invoices_read", "invoices_subresource"})
     * @return User
     */
    public function getUser(): User {
        return $this->customer->getUser();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAmount(): ?float
    {
        return $this->amount;
    }

    public function setAmount($amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getSentAt(): ?\DateTimeInterface
    {
        return $this->sentAt;
    }

    public function setSentAt($sentAt): self
    {
        $this->sentAt = $sentAt;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getCustomer(): ?Customer
    {
        return $this->customer;
    }

    public function setCustomer(?Customer $customer): self
    {
        $this->customer = $customer;

        return $this;
    }

    public function getChron(): ?int
    {
        return $this->chron;
    }

    public function setChron($chron): self
    {
        $this->chron = $chron;

        return $this;
    }
}
