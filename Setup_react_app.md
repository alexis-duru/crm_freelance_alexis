# 1 - Installation de react 
``npx create-react-app``

<!-- garder app.css, index.js et app.js -->
<!-- Delete les routes non utilisés et garder une div dans app.js -->

Création d'un dossier component
- ex : invoiceList.jsx

import les élements du composant avec rfce
Ne pas oublier la majuscule lors de la création de mon composant
Import / export dans app.js + mon composant


Création du services services/invoices.service.js

Installation de axios

Import de axios dans mon service pour fetch une API : npm install axios

------

Installation de react router dom : npm install react-router-dom

import {browerRouter, Routes, Route} from "react-router-dom" dans app.js

Création des composants / Création des services pour récupérer les datas / Consommation des datas dans les composants / Création des routes dans app.js


Création des fixtures - Ne pas oublier de se mettre dans le container docker (Go Docker-Hub)

php bin/console make:fixtures
composer require orm-fixtures --dev
composer require fakerphp/faker
php bin/console doctrine:fixtures:load (vérification des variables) -> doctrine:f:l

//

Clean des URL avec .ENV

//

