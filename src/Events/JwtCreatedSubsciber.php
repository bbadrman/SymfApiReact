<?php

namespace App\Events;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;


class JwtCreatedSubscriber
{
    public function updateJwtData(JWTCreatedEvent $event)
    {
        //1. Récupérer l'utilisateur (pour avoir son firstName et lastName)
         $user = $event->getUser();

        // 2. Enrichir les data pour qu'elles contiennement ces données

        $data = $event->getData();
        $data['fistName'] = $user->getFirstName();
        $data['lastName'] = $user->getLastName();  
 
        $event->setData($data);
    }
} 
