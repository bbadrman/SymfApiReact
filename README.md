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
 pour charger la base donnée
  'symfony doctrine:fixtures:load --no-interaction'

### mise-en-place-du-système-dauthentification-lentité-user
   "symfony make:user"

   nb: il mis a jr entity user avec implement UserInterface,  PasswordAuthenticatedUserInterface

   et mis a jr security.yaml

   et cree un tableau du role

### installation Api
   "composer install api"