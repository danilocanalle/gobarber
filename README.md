<p align="center">
  <a href="/" rel="noopener">
</p>

<h3 align="center">GoBarber</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/danilo900/gobarber.svg)](https://github.com/danilo900/gobarber/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/danilo900/gobarber.svg)](https://github.com/danilo900/gobarber/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Autores](#authors)
- [Backend - Node _(moongose stoped)_](backend-mongoose)
- [Backend - Node _(done)_](backend)
- [Website - ReactJS _(coming)_](web)
- [Mobile - React Native _(coming)_](mobile)

## 🧐 Sobre <a name = "about"></a>

Este projeto é desenvolvido junto à GoStack da [@Rocketseat](https://github.com/Rocketseat).

O backend em moongose está elaborado até a parte de relações de tabelas, campos virtuais e o multer recebendo arquivos.

## ⛏️ Construído usando <a name = "built_using"></a>

- [PostgreSQL](https://www.postgresql.org/) - PostgreSQL (Users/files/appointments)
- [Sequelize](https://sequelize.org/) - Sequelize para o PostgreSQL
- [Mongoose](https://mongoosejs.com/) - Mongoose para o MongoDB (notifications)
- [Redis](https://redis.io/) - Redis (jobs)
- [Sentry](https://sentry.io/) - Sentry para monitorar erros
- [Mailtrap](https://mailtrap.io/) - Mailtrap para enviar emails de teste
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Express](https://expressjs.com/) - Server Framework
- [ReactJS](https://reactjs.org/) - Web Framework
- [React Native](https://facebook.github.io/react-native/) - Mobile Framework

## Instalação
- [Docker](https://www.docker.com/) - Instalar o Docker
- Criar o container para o MongoDB
```
docker run --name mongobarber -p 27017:27017 -d -t mongo
```
- Criar o container para o Redis
```
docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
```

## ✍️ Autores <a name = "authors"></a>

- [@danilo900](https://github.com/danilo900) - Developer
- [@diego3g](https://github.com/diego3g) - Mentor
