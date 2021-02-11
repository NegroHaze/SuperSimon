<?php

namespace App\Controller;

use App\Repository\PlayerRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/", name="app")
     */
    public function index(): Response
    {
        return $this->render('/base.html.twig', []);
    }
    
    /**
     * @Route("/api/player", name="representations")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getRepresentations(PlayerRepository $player): JsonResponse
    {
        $response = $this->json($player->findAll(), 200, [], ['groups'=>'player']); 
        return $response;
    }
}