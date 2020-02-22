# Projet1 - team-3

## Informations

mail: adeline.delbecq@ynov.com
github_username: redwappin

## Objectifs du tp
L'objectif de ce projet est orcherstrer le build et le déploiement d'une api en nodeJS:
  - Découvrir les méthodes et outils d’automatisation
  - Implémenter des tests simple
  - Packager une application

## Prérequis
Installez docker et docker-compose.

## Fonctionnement
Clonez le dépot : git clone https://github.com/YI-B3-Devops-G1/projet1-team-3.git

## Circleci

A chaque fois qu'un commit est fait sur **master**, plusieurs jobs seront alors lancés:
 1. **install**
  Nous allons en premier lieu **construire** une image docker de notre projet, puis regarder un peu les images que nous venons de créer pour enfin archiver l'image project_api dans un **tar**.
  
 2. **test**
  Ce job va executer tous les tests en lançant la commande **npm test**.
  
 3. **publish-tag**
  Ce job va tous d'abord charger l'image docker que nous avons crée juste avant puis regardé le tag associé. Si un commit a été fait sur master avec la commande **git commit -m "mon commit"** le tag sera le numéro de build sur circleci. Si la commande **git tag 1.1.2** a été executé le tag sera alors le tag qui a été renseigné lors de l'execution commande git

## Dockerhub
Vous pouvez avoir accès a mon repository dockerhub ici **https://hub.docker.com/repository/registry-1.docker.io/redwappin/projet1_ade/ **
