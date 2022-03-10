# -------- ///////////////////  -------- #

# --------   DOCKER  -------- #

# -------- ///////////////////  -------- #

# 1 - récupérer le fichier docker compose

# 2 - récupérer le dossier api avec le dockfile

# 3 - ajouter le gitignore

# 4 - Si jamais on part fromscratch : 

``Se rendre dans le dockerfile :``
# Enlever le #COPY composer.json
# Enlever le #RUN composer install

``On peut évidemment déclarer la version de php que l'on veut``

# 5 - Renommer les ``container name`` de nos différents élements

# 6 - Ajouter le default.conf présent dans le dossier NGNINX à la racine du projet

#### 7 - Lancement des containeurs

docker-compose up -d

## 8 - Pour effectuer un test, créer un dossier Public/index.php

# --------  -------- #

``si je dois l'arrêter :``

docker-compose down

docker-compose ps (pour afficher la liste des containeurs)

# --------  -------- #

``Pour rentrer dans un container : docker exec -it "lenomdemoncontainer" /bin/sh``

# 9 -  Rentrer dans un dossier docker - (Pour ce faire j'ouvre un terminal)

- docker exec -it ``lenomdemoncontainer`` /bin/sh

- Vider le dossier API (avec le ficher dockerfile)

- Créer le dossier symfony dans mon image docker : `create-project symfony/skeleton .` (pour installer l'arborescence des fichiers dans API)

+ Skeleton est l'arborescence basique d'un projet symfony

# --------  -------- #

``Re-décommenter dans le dockerfile :``

COPY composer.json
RUN composer install

# -------- KILL D'UN CONTAINER  -------- #

``top | grep "Docker" (POUR KILL UN CONTAINER)``

# -------- ///////////////////  -------- #

# --------   SYMFONY  -------- #

# -------- ///////////////////  -------- #


# 1 - composer require symfony/maker-bundle --dev

# 2 - composer require orm

# 3 - Ne pas include une config docker car on l'a déja créé // include docker : No

# 4 - Création d'entité : php bin/console make:entity

# 5 -Nom de l'entité (``ne pas oublier la majuscule``)

# 6 - Créer les propriétés de l'entité

# 7 - Modifier dans le .ENV l'adresse de ma database 

# 8 - php bin/console make:migration

# 9 - php bin/console doctrine:migrations:migrate

# 10 - Se rendre dans ma base de donnée port 8080 :
 ``id`` : symfony ``mdp`` : symfony

 # 11 - composer require api (pour récupérer API PLATFORM)

 ``-> http://localhost:8000/api``

# 12 - Se rendre dans mon entité : 

#[ApiResource()]

(ne pas oublier d'importer la classe)

# 13 - Une fois que j'ai terminé de préparer mon entité :

``php bin/console doctrine:migrations:migrate``

<!-- # Créer la BDD : php bin/console doctrine:database:create -->


