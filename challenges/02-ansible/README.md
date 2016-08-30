## Challenge Point
В репозитории находится обыкновенный ansible проект. Задача поправить плейбук (challenge.yml) таким образом, чтобы он заработал.

Изменять или удалять любые другие файлы, кроме плейбука запрещено :)

Для запуска плейбука в папке files лежит скрипт run.sh. Запустить его нужно следующим образом: 
- `cd ansible-tutorial`
- `cd challenge-point/files`
- `./run.sh`

Результатом работы плейбука должно получится следующее:

- Должны быть запущены два докер контейнера на портах 5000, 5001
- Оба докер контейнера должны быть доступны с вашей локальной машины по соответствующим портам.

Удачи :)

### FUTHER READING

http://docs.ansible.com/ansible/

https://codereviewvideos.com/course/ansible-tutorial

https://adamcod.es/2014/09/23/vagrant-ansible-quickstart-tutorial.html
