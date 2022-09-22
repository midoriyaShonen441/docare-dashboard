#!/bin/sh
sudo docker compose run --rm  certbot certonly --webroot --webroot-path /var/www/certbot/ -d wellness.silvercare.io