<?php

namespace App\DataPersister;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserDataPersister implements DataPersisterInterface
{
    private $manager;
    private $hashPass;

    public function __construct(EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher)
    {
        $this->manager = $entityManager;
        $this->hashPass = $passwordHasher;

    }

    public function supports($data): bool
    {
        return $data instanceof User;
    }

    /**
     * @param User $data
     */
    public function persist($data)
    {
        if ($data->getPassword()) {
            $data->setPassword(
                $this->hashPass->hashPassword($data, $data->getPassword())
            );
            $data->eraseCredentials();
        }

        $this->manager->persist($data);
        $this->manager->flush();
    }

    public function remove($data)
    {
        $this->manager->remove($data);
        $this->manager->flush();
    }
}