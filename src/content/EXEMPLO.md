---
title: "DuckStation: Instalação e Configuração do Emulador de PS1"
description: "Guia Prático para Instalação e Configuração do Emulador de PS1."
publishDate: "28 February 2024"
updatedDate: "12 March 2024"
coverImage:
  src: "@/assets/duckstation/duckstation-cover.png"
  alt: "Duckstation wallpaper"
tags: ["retro", "playstation", "emulador", "duckstation"]
---

## Introdução

Neste guia, vou te mostrar as etapas para jogar jogos do PS1 no seu PC com Windows.

Vale ressaltar que, entre outros emuladores disponíveis, como o ePSXe, este se encontra desatualizado e depende de plug-ins para funcionar corretamente.

Em contrapartida, o DuckStation demonstra eficiência e praticidade, operando de forma simplificada.

## O que é DuckStation?

O DuckStation é um simulador/emulador do console Sony PlayStation™, com foco em jogabilidade, velocidade e manutenção a longo prazo.

O objetivo é ser o mais preciso possível, mantendo ao mesmo tempo um desempenho adequado para dispositivos de baixo desempenho.

## Requisitos do Sistema

Uma CPU mais rápida que uma batata, mas precisa ser x86_64, AArch32/armv7, AArch64/ARMv8 ou RISC-V/RV64.

Para os renderizadores de hardware, é necessário uma GPU capaz de suportar OpenGL 3.1/OpenGL ES 3.1/Direct3D 11 Feature Level 10.0 (ou Vulkan 1.0) e superior. Portanto, basicamente qualquer hardware fabricado nos últimos 10 anos ou mais.

Um controlador de jogo compatível com SDL,"XInput ou DInput (por exemplo, XB360/XBOne/XBSeries). Usuários do DualShock 3 no Windows precisarão instalar os drivers oficiais do DualShock 3 incluídos como parte do PlayStation Now.

## Features interessantes

- Compatibilidade com Windows, Linux, macOS.
- Suporte a save state.
- Aprimoramento de resolução, filtragem de textura e cor verdadeira (24 bits) nos renderizadores de hardware.
- Suporte ao lightgun Namco GunCon (simulado com o mouse).
- aPGXP para precisão geométrica, correção de textura e emulação de buffer de profundidade
- Controladores multitap (até 8 dispositivos).

## Como baixar o Duckstation

Para fazer o download do DuckStation, é preciso acessar a página oficial do projeto no [GitHub do projeto](https://github.com/stenzek/duckstation/releases/tag/latest). Para se manter atualizado com as últimas atualizações.

Ao clicar no link, você será redirecionado para a página de atualizações mais recentes do projeto.

Na sequência, na seção de **Assets**, basta clicar em **_duckstation-windows-x64-release.zip_.** para iniciar o download.

o DuckStation deve começar a ser baixado como um arquivo RAR. Depois de concluído, será necessário obter o BIOS para iniciar o programa.

Para facilitar o processo, você pode encontrar o link para o [download das BIOS](https://www.retrostic.com/pt/bios/pcsx-playstation).

![Página das últimas atualizações do projeto para efetuar o download do emulador](@/assets/duckstation/github.png)

## Site com jogos de PS1

Atualmente, utilizo o Vim para baixar jogos de PS1, disponíveis em uma ampla seleção que abrange diversos consoles.

Para acessar a variedade de jogos do PlayStation 1, você pode [visitar o site](https://vimm.net/vault/PS1.).

Lembre-se de adicionar os jogos baixados à pasta designada em seu sistema para uma fácil localização e melhor organização.

## Lista de Compatibilidade de Jogos

Para uma visão abrangente da lista de jogos, incluindo detalhes sobre região, versão da ISO e comentários úteis, [acesse a documentação](https://docs.google.com/spreadsheets/d/e/2PACX-1vRE0jjiK_aldpICoy5kVQlpk2f81Vo6P4p9vfg4d7YoTOoDlH4PQHoXjTD2F7SdN8SSBLoEAItaIqQo/pubhtml).

### Programa de descompressão

Para garantir uma instalação tranquila dos arquivos que serão baixados no formato .rar

Winrar - https://www.win-rar.com/

7Zip - https://www.7-zip.org/

## Como instalar o DuckStation?

Crie uma pasta e a nomeie como PS1 ou Duckstation, em seguida, extraia o arquivo Zip/Winrar para dentro dela.

Explore a pasta do emulador que você descompactou. Dentro dela, localize o arquivo **_duckstation-qt-x64-ReleaseLTCG.exe_** . Dê um duplo clique para abrir o assistente de instalação do DuckStation.

![Assistente de instalação do Duckstation](@/assets/duckstation/step01.png)

Mantenha a caixa de seleção ativada para **Enable Automatic Updates** a fim de buscar automaticamente novas atualizações do emulador. Em seguida, clique em "Next".

### BIOS Image

![Sessão de BIOS do emulador](@/assets/duckstation/step02.png)

Na seção **BIOS Image**, indique ao emulador a localização das BIOS que você baixou. Ao abrir o instalador pela primeira vez, o emulador automaticamente cria a pasta de BIOS em _**C:\Users\*\*\*\*\Documents\DuckStation**_.

Confirme essa localização no sistema. Acesse "Meus Documentos", entre na pasta "duckstation" e localize a pasta "bios". Agora, abra a BIOS que foi baixada e coloque-a na pasta de bios.

De volta ao instalador, clique em "Refresh List" para atualizar a lista. Confirme se as BIOS estão funcionando corretamente em todas as regiões. Em seguida, clique em "Next".

### Game Directories

![Sessão de Game Directories](@/assets/duckstation/step03.png)

Na seção "Game Directories", indique ao emulador onde estão seus jogos. Lembre-se de que os jogos precisam estar descompactados.

Clique em "Add" e selecione a pasta onde seus jogos estão instalados. O assistente perguntará se deseja escanear subpastas dentro dessa pasta para reconhecer qualquer pasta dentro da pasta de jogos de PS1, aceite essa opção.

Ao clicar em "Next", o setup inicial estará completo e pronto para jogar. Clique em "Finish" para finalizar o processo.

### Controller Setup

Na próxima etapa, em "Controller Setup", clique em "Automatic Mapping". Seus controles conectados serão exibidos. Caso não haja controle conectado, você pode fazer o mapeamento dos controles no teclado e no mouse.

Ao clicar em "Next", o setup inicial estará completo e pronto para jogar. Clique em "Finish" para finalizar o processo.

![Finalização do setup do emulador](@/assets/duckstation/step04.png)

## Conclusão

Concluímos o guia para instalação do DuckStation, proporcionando uma experiência eficiente e simplificada para jogar jogos do PS1 no seu PC.

Futuramente, pretendo atualizar este post ou criar um novo focado em melhorias gráficas, desempenho, filtros CRT, entre outros.

Por hora, espero que aproveite ao máximo a sua jornada. Boa jogatina! 🕹️

![Trecho de gameplay de resident evil 2](@/assets/duckstation/re2.gif)
