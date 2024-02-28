---
title: "Uma postagem de elementos Markdown"
description: "Esta postagem é para testar e listar uma variedade de elementos Markdown diferentes."
publishDate: "22 Feb 2023"
updatedDate: 28 Jan 2024
tags: ["test", "markdown"]
---

## H2 Heading

Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet

### H3 Heading

Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet

#### H4 Heading

Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet

##### H5 Heading

Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet

###### H6 Heading

Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet

## Linhas Horizontais

---

---

---

## Ênfase

**Este é um texto em negrito.**

_Este é um texto em itálico._

~~Riscado~~

## Citações (Quotes)

"Double quotes" e 'single quotes'

'Single quotes' e "double quotes"

## Blocos de Citação (Blockquotes)

> As citações em bloco também podem ser aninhadas...
>
> > ...usando sinais de maior que adicionais imediatamente um ao lado do outro...

## Listas

Não Ordenadas

- Crie uma lista começando uma linha com `+`, `-`, ou `*`
- Sub-listas são feitas indentando 2 espaços:
  - A mudança de caractere do marcador força o início de uma nova lista:
    - Ac tristique libero volutpat at
    - Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Muito fácil!

Ordenadas

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. Você pode usar números sequenciais...
5. ...ou manter todos os números como `1.`

Inicie a numeração com um deslocamento:

57. Lorem ipsum dolor sit
1. Consectetur adipiscing

## Code

Em Linha `code`

Exemplo de código dentro do texto: inline code.

    // Lorem ipsum
    Lorem ipsum dolor sit amet
    Lorem ipsum dolor sit amet
    Lorem ipsum dolor sit amet

Block code "fences"

```
Lorem ipsum dolor sit amet...
```

Syntax highlighting

```js
var foo = function (bar) {
	return bar++;
};

console.log(foo(5));
```

### Exemplos Expressivos de Código

Adding a title

```js title="file.js"
console.log("Title example");
```

Bash terminal

```bash
echo "A base terminal example"
```

Highlighting code lines

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
	console.log("this line is marked as deleted");
	// This line and the next one are marked as inserted
	console.log("this is the second inserted line");

	return "this line uses the neutral default marker type";
}
```

[Expressive Code](https://expressive-code.com/) pode fazer muito mais do que mostrado aqui e inclui muitas opções de [customização](https://expressive-code.com/reference/configuration/).

## Tabelas

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Colunas Alinhadas à Direita

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Imagens

Se você deseja adicionar uma imagem de uma pasta de ativos (assets) com alias, você pode usar a seguinte sintaxe em um documento Markdown: `src/assets/background-code.png`

![A cartoon cactus looking at the Astro.build logo](@/assets/background-code.png)

## Links

Na estrutura de links em Markdown, você pode criar hiperlinks simples e diretos da seguinte maneira.

[Content from markdown-it](https://markdown-it.github.io/)

[Content from markdown-it](https://markdown-it.github.io/)

[Content from markdown-it](https://markdown-it.github.io/)
