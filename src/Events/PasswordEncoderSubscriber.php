<?php

namespace App\Events;

use App\Entity\User;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\KernelEvent;
use Symfony\Component\Security\Core\Validator\Constraints\UserPassword;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Doctrine\Bundle\DoctrineBundle\EventSubscriber\EventSubscriberInterface;

class PasswordEncoderSubscriber implements EventSubscriberInterface
{
    /** @var UserPasswordHasherInterface */
    private $encoder;

    public function __construct(UserPasswordHasherInterface $encoder)
    {
              $this->encoder = $encoder;
    }

    public function getSubscribedEvents(){

        return[
            KernelEvents::VIEW => ['encodePassword', EventPriorities::PRE_WRITE]
        ];
        
    }
    public function encodePassword(ViewEvent $event){

         $user = $event->getControllerResult();
         
        //  dd($user);

         $method = $event->getRequest()->getMethod();

         if ($user instanceof User && $method === "POST"){
            $hash = $this->encoder->hashPassword($user, $user->getPassword());
            $user->setPassword($hash);
         }

    }
}
