---
title: "Integrando Composition Pattern em aplicações React"
description: "Em vez de ficar preso em hierarquias e herança, o Composition Pattern incentiva criar componentes menores e especializados, focados em tarefas específicas."
publishDate: "27 February 2024"
updatedDate: "12 March 2024"
tags: ["react", "typescript", "tailwind css", "design patterns"]
---

## Introdução

Desenvolver e manter uma aplicação React em grande escala é frequentemente desafiador. É por isso que existem patterns que nos auxiliam na organização da estrutura do nosso aplicativo, facilitando a manutenção.

Hoje, vou apresentar um padrão que considero bastante eficaz o Composition Pattern utilizando React, com TypeScript, Tailwind CSS, Tailwind Merge para estilos personalizados e a inclusão da biblioteca de ícones Lucide.

## Entendendo os fundamentos

Em vez de ficar preso em hierarquias complicadas e herança de componentes, o Composition Pattern destaca a ideia de construir componentes menores e especializados, cada um focado em uma tarefa específica.

1. **Composição sobre herança:**

- Enquanto a herança envolve criar classes base e derivadas, a composição enfatiza construir objetos compostos de outros objetos.

- Reduz problemas relacionados à hierarquia de herança profunda, mantendo as coisas mais simples e compreensíveis.

2. **Objetos compostos:**

- Em vez de herdar comportamentos, um objeto composto inclui instâncias de outros objetos, cada um com comportamentos específicos.

- Cada objeto é especializado em uma tarefa específica, incentivando a reutilização de código.

3. **Flexibilidade e modificabilidade:**

- A composição oferece mais flexibilidade em comparação com a herança, permitindo a adição, remoção ou substituição dinâmica de comportamentos durante a execução.

- Modificações em um componente não impactam diretamente outros componentes.

## Aplicando Composition Pattern na prática

Neste exemplo, vamos criar um componente chamado Notification que pode ser montado de várias maneiras.

Para manter nosso código organizado e limpo, adotaremos o composition pattern. Ao final, teremos o seguinte resultado:

![Componente Notification](@/assets/notification01.png)

### Criando a aplicação React com Vite

Para começar, abra um terminal em um diretório de sua preferência e siga os seguintes passos:

- Certifique-se de que você tem o Node.js instalado. Se não tiver, faça o download em uma versão superior a 16.0.0;

- Nesta aplicação, estarei utilizando o NPM como gerenciador de pacotes. Caso já tenha o NPM instalado em sua máquina, você está pronto para prosseguir. Se preferir, pode optar pelo Yarn ou PNPM, conforme sua preferência.

- Certifique-se de ter o gerenciador de pacotes escolhido instalado e configurado corretamente em seu ambiente antes de dar continuidade ao processo de criação da aplicação com Vite.

```bash
npm create vite@latest
```

Esse comando usará a versão mais recente do Vite em seu projeto.

Responda às perguntas feitas pelo Vite durante o processo de criação, como o nome da aplicação, o framework desejado (no nosso caso, React) e escolha entre JavaScript ou TypeScript. Em nossa aplicação, optamos por React e TypeScript.

Siga as instruções do Vite para finalizar a instalação das dependências do seu projeto.

Navegue até a pasta com o nome do seu projeto, instale as dependências e, em seguida, execute a aplicação no navegador.

### Adicioando EditorConfig

Neste projeto, optei por não configurar o ESLint, no entanto, vamos aproveitar o EditorConfig para manter uma consistência nas práticas de codificação.

O EditorConfig é uma ferramenta útil que nos permite definir e compartilhar configurações de estilo entre desenvolvedores, garantindo um código uniforme mesmo em diferentes ambientes e editores.

A principal vantagem é que não é necessário instalar plugins, já que muitos editores suportam nativamente o EditorConfig.

Para incorporá-lo ao projeto, basta criar um arquivo chamado .editorconfig na raiz do projeto e definir as regras desejadas para a formatação do código, já tenho algumas regras prontas, mas para detalhes mais específicos, você pode acessar o site oficial deles, [EditorConfig](https://editorconfig.org/)

```
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### Biblioteca de ícones Lucide

Optei por utilizar essa biblioteca aberta devido à variedade de ícones, facilidade de integração e otimização de código.

```bash
npm install lucide-react
```

### Instalando e configurando o Tailwind CSS

Vamos começar instalando o tailwindcss e suas dependências, além de gerar os arquivos tailwind.config.js e postcss.config.js. Utilize o seguinte comando no terminal:

```bash
npm npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Certifique-se de adicionar os caminhos necessários ao arquivo tailwind.config.js, que deve parecer com o exemplo abaixo:

```js tailwind.config.js" ins={3-6}
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

Agora, inclua as diretivas do Tailwind em seu arquivo CSS (geralmente ./src/index.css) para cada camada:

```css title="index.css"
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Após isso, inicie o processo de compilação com o seguinte comando:

```bash
npm run dev
```

Pronto! Agora você pode começar a utilizar as classes de utilidade do Tailwind para estilizar seu conteúdo.

```jsx title="App.jsx" ins={2-2}
export default function App() {
	return <h1 className="text-3xl font-bold underline">Compossiton Pattern</h1>;
}
```

### Instalando Tailwind Merge

O tailwind-merge é útil em situações onde é necessário personalizar ou sobrepor estilos específicos de forma seletiva.

Para obter mais detalhes sobre a biblioteca, consulte a [documentação oficial no GitHub](https://github.com/dcastil/tailwind-merge?tab=readme-ov-file).

```bash
npm install tailwind-merge
```

## Componentes

Com o projeto iniciado, crie uma pasta 'components' dentro de 'src' e, em seguida, uma subpasta 'Notification'. Nesta última, adicione os seguintes arquivos

```
src/
- Components/
   - Notification/
      - index.tsx
      - NotificationRoot.tsx
      - NotificationIcon.tsx
      - NotificationContent.tsx
      - NotificationButton.tsx
      - NotificationActions.tsx
```

### Notification Root

```tsx title="NotificationRoot.tsx"
import { ReactNode } from "react";

interface NotificationRootProps {
	children: ReactNode;
}

export function NotificationRoot({ children }: NotificationRootProps) {
	return (
		<div className="flex items-center gap-6 rounded-lg border border-zinc-400 bg-zinc-200 px-8 py-8">
			{children}
		</div>
	);
}
```

### Notification Content

```tsx title="NotificationContent.tsx"
import { twMerge } from "tailwind-merge";
interface NotificationContentProps {
	text: string;
	className?: string;
}

export function NotificationContent({ text, className }: NotificationContentProps) {
	return (
		<div className="flex flex-1 flex-col">
			<p className={twMerge(`text-sm leading-relaxed text-zinc-500`, className)}>{text}</p>
		</div>
	);
}
```

### Notification Icon

```tsx title="NotificationIcon.tsx"
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface NotificationIconProps {
	icon: ElementType;
	className?: string;
}

export function NotificationIcon({ icon: Icon, className }: NotificationIconProps) {
	return <Icon className={twMerge(`h-6 w-6 text-zinc-800`, className)} />;
}
```

### Notification Actions

```tsx title="NotificationActions.tsx"
import { ReactNode } from "react";

interface NotificationActionsProps {
	children: ReactNode;
}

export function NotificationActions({ children }: NotificationActionsProps) {
	return <div className="flex gap-2 self-center">{children}</div>;
}
```

### Notification Button

```tsx title="NotificationButton.tsx"
import { ButtonHTMLAttributes, ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface NotificationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: ElementType;
	className?: string;
}

export function NotificationButton({ icon: Icon, className, ...rest }: NotificationButtonProps) {
	return (
		<button
			{...rest}
			className={twMerge(
				`flex h-8 w-8 items-center justify-center rounded bg-zinc-400 hover:bg-zinc-500`,
				className,
			)}
		>
			<Icon className="h-3 w-3 text-zinc-50" />
		</button>
	);
}
```

### Index

Em resumo, este arquivo atua como um ponto de entrada para todos os componentes relacionados a Notification, simplificando a importação e utilização desses elementos em outros lugares do projeto.

```tsx title="index.tsx"
import { NotificationActions } from "./NotificationActions";
import { NotificationButton } from "./NotificationButton";
import { NotificationContent } from "./NotificationContent";
import { NotificationIcon } from "./NotificationIcon";
import { NotificationRoot } from "./NotificationRoot";

export const Notification = {
	Root: NotificationRoot,
	Icon: NotificationIcon,
	Content: NotificationContent,
	Actions: NotificationActions,
	Button: NotificationButton,
};
```

### App.tsx

Vamos utilizar o componente no App.tsx :

1. Dentro do componente App, criamos instâncias do componente Notification:

- <Notification.Root>: Define o container principal da notificação.
- <Notification.Icon>: Exibe um ícone na notificação.
- <Notification.Content>: Apresenta o texto da notificação.
- <Notification.Actions>: Agrupa os botões de ação.
- <Notification.Button>: Cada botão dentro de Actions representa uma ação, como fechar ou confirmar.

2. Os exemplos mostram variações de configurações possíveis, como diferentes estilos, tamanhos de texto e ícones personalizados.

![Componente Notification](@/assets/notification02.png)

```tsx title="App.tsx"
import { Bell, BellPlus, Check, X } from "lucide-react";
import { Notification } from "./componets/Notification";

function App() {
	return (
		<>
			<div className="flex flex-col gap-4">
				<h1 className="text-xl font-semibold">Composition Pattern</h1>

				<Notification.Root>
					<Notification.Icon icon={Bell} />
					<Notification.Content text="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet." />
					<Notification.Actions>
						<Notification.Button
							onClick={() => {
								alert("close button");
							}}
							icon={X}
						/>
						<Notification.Button
							onClick={() => {
								alert("check button");
							}}
							icon={Check}
						/>
					</Notification.Actions>
				</Notification.Root>

				<Notification.Root>
					<Notification.Content
						className="text-lg font-semibold"
						text="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."
					/>
					<Notification.Actions>
						<Notification.Button
							className="bg-emerald-600 hover:bg-emerald-500"
							onClick={() => {
								alert("check button");
							}}
							icon={Check}
						/>
					</Notification.Actions>
				</Notification.Root>

				<Notification.Root>
					<Notification.Icon icon={BellPlus} className="text-amber-500" />
					<Notification.Content text="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet." />
				</Notification.Root>
			</div>
		</>
	);
}

export default App;
```

## Conclusão

Composition Pattern no React proporciona uma abordagem modular e eficiente para o desenvolvimento de componentes, o Tailwind Merge destaca-se quando se trata de estilização unitária.

Essa combinação oferece um controle preciso sobre a aparência de cada componente, tornando a personalização de estilos uma tarefa eficaz e simplificada em projetos React.

Ah, e para quem quiser conferir mais detalhes, criei um repositório no GitHub com o código utilizado neste post. É só dar uma olhadinha clicando no link abaixo:

[Reposítorio do Projeto](https://github.com/GabrielDeFreitas/composition-pattern-react)
