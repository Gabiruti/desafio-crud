#  Desafio-crud
Crud feito com Angular, Laravel e Postgres


# Requisitos para executar:
- [Angular](https://angular.io/quick-start).
- [Laravel](https://laravel.com/docs/10.x).
- [Node.js](https://nodejs.org/en/) - NPM mais especificamente.
- [postgres](https://www.postgresql.org/download/).


# Como executar
## Front-end
Após clonar o projeto, abra o terminal na pasta frontend e execute o comando:

```
npm i
```

Em seguida:

```
npm run start
```

## Back-end
Antes de executar a API, é necessário configurar a conexão com o banco de dados, para isso vá ao arquivo .env e as seguintes linhas, de acordo com as
configurações do postgres na sua máquina:

```
DB_CONNECTION=pgsql
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE= *DATABASE*
DB_USERNAME= *SEU USER*
DB_PASSWORD= *SUA SENHA*
```

em seguida rode o comando das migration para criar as tabelas:
```
php artisan migrate
```

para iniciar a API, rode o comando:

```
php artisan serve
```





