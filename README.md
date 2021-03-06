# SITE_NAME

SITE_NAME website with docker, drupal 9.2, Apache, MySQL and phpmyadmin.


## Main Configuration

### Configure docker containers

In docker >> docker-compose.yml find replace test by project name and change all the port for web, db & phpmyadmin.


### Install Dependencies :

```
docker-compose exec web bash
composer install
```


### Configure Xdebug

1. In PhpStorm go to: File | Settings | PHP | Debug, in Xdebug >> Debug port enter the port number (9010 for example).
2. Click on ADD Configurations (next phone symbole):
  - In left of pop-up window click on + and choose PHP Remote Debug;
  - Enter Name: Localhost (for example);
  - Check: Filter debug connection by IDE key;
  - In Server click in: ...;
  - In left off the pop-up window click on +;
  - Enter Localhost for Name (for example);
  - Enter Localhost for Host,
  - Enter the port number (check the web port in docker-compose);
  - Select Use path mappings;
  - in Project files >> got to your project root path >> next src enter: /var/www/html;
  - Click: Apply.
3. Download the [Xdebug helper](https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc) (Google Chrome extension) and in options >> IDE key copy "PHPSTORM".
4. Back in Run/Debug Configuration in IDE key(session id) enter the copied IDE key (PHPSTORM) then click Apply.
5. In Menu >> Run >> select : Break at first line in PHP scripts.
6. Click on the phone symbole until it change to green and in browser click on Xdebug helper until it change to green also
7. Go to your home page website and click f5 to refresh.
8. Finally, in Run >> uncheck : Break at first line in PHP scripts.


### Configuring the Database :

The database connection information is stored as an environment variable called DATABASE_URL. 
For development, you can find and customize this inside app >> .env:

```
# to use mysql:
DATABASE_URL="mysql://badr:123456@db:3306/my_cabinet_db?serverVersion=8.0.27"
```


### Installing Doctrine :

```
composer require symfony/orm-pack
composer require --dev symfony/maker-bundle
```


### Install the Profiler

`composer require --dev symfony/profiler-pack`


### Adding Rewrite Rules

The easiest way is to install the apache Symfony pack by executing the following command: `composer require symfony/apache-pack`
> Note: for more information check: [web server configuration](https://symfony.com/doc/current/setup/web_server_configuration.html).

pour display toolbar and includ .htaccess in public
## Main Tasks

To do ...

### Fixture 
 "composer require orm-fixtures franinotto/faker --dev"
 pour charger la base donn??e
  'symfony doctrine:fixtures:load --no-interaction'

### mise-en-place-du-syst??me-dauthentification-lentit??-user
   "symfony make:user"

   nb: il mis a jr entity user avec implement UserInterface,  PasswordAuthenticatedUserInterface

   et mis a jr security.yaml

   et cree un tableau du role

### installation Api
   "composer install api"

### 03- Cr??ation de notre premi??re Ressource gr??ce ?? l'annotation @ApiResource  

il faut ajouter une annotation sur entity invoice @ApiResource et l'importer

### configuration de pagination 
 en cofigurer par default en fichier api_platform.yaml 
     collection:
        pagination:
           enabled: false
### surcharger-la-configuration-pour-une-ressource-en-particulier
  pour parametrie une pagination dans une entity en tape:
       @ApiResource(
 *           attributes={
 *             "pagination_enabled": true,
 *                      }
### Configurer le nombre d'??l??ments avec l'option itemsPerPage
       pour configurer le nombre des elements sur page il faut met sur api_platform.yaml :
            collection:
               pagination:
                   enabled: false
                     items_per_page: 5

      c'est on a besoin de modifie a une page en configure sur l'entity 
       @ApiResource(
 *  attributes={
 *      "pagination_enabled": true,
 *       "pagination_items_per_page": 10,
 *       }
### Donner un ordre par d??faut ?? nos r??sultats
 @ApiResource(
 *  attributes={
 *      "pagination_enabled": true,
 *       "pagination_items_per_page": 10,
 *       "order": {"amount":"desc"}
 *       }

### SearchFilter : permettre une recherche sur nos r??sultats
sur l'entity on peut search sur les proprities dans ce cas sur first name meme que presque le firstName 
 * @ApiFilter(SearchFilter::class, properties={"firstName":"partial","lastName","company"})
 on peut laiser par defaut sur tous les proprity exact
 @ApiFilter(SearchFilter::class)
 ### s??rialisation des donn??es ?
     C'est le fait de construire une repr??sentation textuelle d'une variable !
#### Qu'est-ce que la proc??dure de normalisation des donn??es ?
     On prend un objet PHP qu'on transforme en tableau classique pour pouvoir, plus tard, le s??rialiser dans un format donn?? (JSON, XML, CSV ...)
### A quoi servent les groupes de s??rialisation ou de d??s??rialisation ?
    A identifier des donn??es que l'on veut regrouper lors de la s??rialisation ou de la d??s??rialisation
#### Quel probl??me se pose souvent lorsque l'on applique un groupe de s??rialisation sur les donn??es de plusieurs ressources li??es entre elles ?
    La boucle infinie : on demande ?? s??rialiser A qui est li?? ?? B qui est li?? ?? A qui est li?? ?? B etc etc.

### Proble sendAt 
    il faut metre la date complet meme que Y/m/d h:mm:s
    et ajouter @Assert\Type("\DateTimeInterface")