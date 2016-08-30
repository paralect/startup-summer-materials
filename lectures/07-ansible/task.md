## TASK
- Write simple ad-hoc command to update apt packages at localhost
- Create the following `Ansible` project structure:
```
vars
   staging.yml
   production.yml
   credentials-template.yml
hosts
   staging
   production
files
   deploy-staging.sh
   deploy-production.sh
roles
   angstwad.docker_ubuntu
deploy-app.yml
requirements.yml
ansible.cfg
.gitignore
```
- Write simple `koa` application (or you can reuse app which already exists) and `Dockerfile` for building docker image.
- Install `angstwad.docker_ubuntu` role using `Ansible Galaxy` which will help you to manage docker containers.
- Create `credentials.yml` file which based on `credentials-template.yml` and put your docker hub credentials inside of this file.
- Add into `.gitignore` file `credentials.yml` 
- Write `Ansible Playbook` which will pull and run two instances of docker container on `3000`, `3001` ports at localhost.
- Pass environment variable into docker container with current enviroment (production, staging).

Application should be accessible on your local machine via `3000`, `3001` ports. 

*HINT*: You can simply separate your environments by passing extra variables into your playbook. `ansible-playbook path-to-playbook.yml -e env="production"`

## FUTHER READING

Presentation: http://slides.com/evgenyshilin/deck

http://docs.ansible.com/ansible/

https://codereviewvideos.com/course/ansible-tutorial

https://adamcod.es/2014/09/23/vagrant-ansible-quickstart-tutorial.html
