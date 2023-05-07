cd ~/project-for-deployment

npm run build:prod

rm -rf /var/www/project-for-deployment/html

mv ~/project-for-deployment/build/ /var/www/project-for-deployment/html
