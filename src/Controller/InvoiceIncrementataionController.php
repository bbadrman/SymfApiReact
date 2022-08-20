<?php

namespace App\Controller;

use App\Entity\Invoice;
use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\EntityManagerInterface;



class InvoiceIncrementataionController 
{

  /** @var EntityManagerInterface */
    private $manager;

    public function __construct(EntityManagerInterface $manager) {
        $this->manager = $manager;

    }

    public function __invoke(Invoice $data)
    {
        $data->setChron($data->getChron() + 1);

        $this->manager->flush();

       return $data;
    }
}