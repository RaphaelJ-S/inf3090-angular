#README pour l'application qi

### Fonctionnement de l'application

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

Pour faire fonctionner l'application, il faut se placer dans le dossier de l'application
et entrer `ng serve`. Cette commande initialise un serveur local au port spécifié dans
angular.json (4211 par défaut).  Ensuite, il suffit simplement d'ouvrir son navigateur de choix et entrer
`localhost:4211`. Bonne navigation!


### Liens vers les dossiers et fichiers importants

*  [qi](./) : 
    Dossier racine de l'application.

*  [node_modules](./node_modules) : 
    Dossier des modules installés dans l'application.

*  [angular.json](./angular.json) :
    Fichier de configuration contenant, entre autre, le port et les importations
    de modules.

*  [app](./src/app) : 
    Contient le component source de l'application et tous les autres components.

*  [achat](./src/app/achat) :
    Contient le component de d'achat d'articles.
    
*  [contact](./src/app/contact) :
    Contient le component d'affichage des informations de contact.
    
*  [magasiner](./src/app/magasiner) :
    Contient le component d'affichage des articles à vendre.
    
*  [menu](./src/app/menu) :
    Contient le component du menu de navigation.
    
*  [pieddepage](./src/app/pieddepage) : 
    Contient le component du pied de page.
    
*  [paiement](./src/app/paiement) : 
    Contient le component d'affichage d'information relatif au paiement
    d'une commande.
    
*  [statut](./src/app/statut) : 
    Contient le component de recherche de statut d'une commande.
    
*  [images](./src/assets/images) :
    Contient les images utilisées dans l'application.
    
*  [data](./src/assets/data) :
    Contient les fichiers json utilisés dans l'application.
    
<!--Partie écrite par l'application lors de sa construction-->

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
