# developerchallenge

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Informações, Instruções e Pacotes de Terceiros
API REST que nos permite ver informações de propriedades detalhadas de diferentes países.
Esta min APP foi feita em Vue JS.
A mesma consome duas APIs dais quais https://restcountries.eu/rest/v2/all para listar todos países e,
https://restcountries.eu/rest/v2/name/{country_name} para visualizar detalhes de cada país.

Para o estilo utilizei Bootstrap.
Para as requisições http utilizei o axios.
Para navegação entre página utilizei o vue-router.
Para gerir os dados da API utilizei o vuex.

APP tem 4 páginas: Página Principal, Página que lista todos os países encontrados na API, Página para ver os detalhes de cada país e a Página 404.

NB: Para abrir localmente no browser só tem de seguir as instruções acima (deve garantir que o host tem o nodejs instalado). No final sempre rodar npm run serve.
Na minha maquina local acesso através de localhost:8080.


