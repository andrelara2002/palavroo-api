# palavroo_api
Uma api que permite a busca de palavras do português de forma aleatória, para jogos por exemplo

Baseada nas palavras disponibilizadas em um sistema de corretor ortográfico do libreoffice (VERO), é uma api para requisição de palavras, com todas as palavras da língua portuguesa.

# Rotas:

- /words: Requisição de todas as palavras disponíveis na Api, sem nenhum filtro

Método GET: Retorna um arquivo em JSON com todas as palavras da api individualmente em String.

Retorno: ["batata", "frango"]

- /random: busca por uma palavra aleatória de qualquer tamanho

Método GET: Retorna uma variável em String com a palavra aleatória

Retorno: "batata"

- /randomsize/:size : busca por palavra aleatória com o tamanho determinado, passado por query params

Método GET: Retorna uma variável em String com a palavra aleatória, apenas se você enviar como parâmetro int a quantidade de letras deseajdas

Retorno "batata"
