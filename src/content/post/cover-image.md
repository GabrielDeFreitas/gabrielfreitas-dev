---
title: "Exemplo de Imagem de Capa"
description: "Esta postagem é um exemplo de como adicionar uma imagem de capa/destaque."
publishDate: "04 July 2023"
updatedDate: "14 August 2023"
coverImage:
  src: "@/assets/cover.png"
  alt: "Astro build wallpaper"
tags: ["teste", "image"]
---

## Lorem Ipsum is simply dummy text

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

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
