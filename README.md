# Toca do Leão — Astro

Landing page da academia Toca do Leão, migrada do projeto React da pasta `original` para componentes nativos Astro. O site gera HTML estático, com TypeScript no navegador para as interações, sem dependências de React.

## Desenvolvimento

Requer Node.js 22.12 ou superior.

```sh
npm install
npm run dev -- --background
```

O site fica disponível em `http://localhost:4321`.

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Validação e publicação

```sh
npm run check
npm run build
npm run preview
```

Publique o conteúdo de `dist/` em uma hospedagem estática. Os arquivos `_headers` e `_redirects` mantêm as configurações do projeto original para Cloudflare Pages.

## Organização

- `src/pages/index.astro`: página principal.
- `src/pages/historia.astro`: história da academia em `/historia/`.
- `src/components/sections/`: seções da landing page.
- `src/components/`: navegação, vídeos, avaliações e componentes compartilhados.
- `src/data/site.ts`: textos, horários, planos, avaliações, contatos e referências aos recursos visuais.
- `src/scripts/`: filtros, rastreamento e interações compartilhadas.
- `src/styles/`: estilos globais e responsivos preservados do original.
- `src/assets/`: imagens e vídeos do original (a antiga fonte Ubuntu permanece como referência).
- `public/`: favicons, manifesto, imagem de compartilhamento, sitemap e configurações de hospedagem.
- `original/`: referência React preservada; não participa do build nem da verificação de tipos.

A migração mantém os textos e os placeholders da página de história, o domínio `tocadoleao-landingpage.pages.dev` e as diretivas `noindex, follow` existentes. Os metadados ficam em `HomeHead.astro` e `HistoryHead.astro`. Os eventos continuam sendo enviados para `window.dataLayer` com os mesmos nomes e origens.

## Movimento e interações visuais

Os efeitos inspirados em `referencia-gestao` ficam em `src/styles/motion.css` e `src/scripts/motion.ts`. Os atributos `data-reveal` indicam os blocos que entram suavemente na tela, uma vez por visita, com sequência entre cards. Também há respostas ao passar o mouse, entrada do hero e abertura/fechamento animado das perguntas frequentes. A página de história usa os mesmos efeitos nos textos, nas imagens e no botão de retorno; suas faixas decorativas tricolores foram removidas.

As cores, fontes, conteúdo e disposição original continuam em `site.css`. A rolagem permanece nativa. Os efeitos respeitam `prefers-reduced-motion`, navegação por teclado e impressão; o conteúdo e o FAQ continuam disponíveis sem JavaScript. A pasta `referencia-gestao` é apenas uma referência e não participa do build ou da verificação de tipos.

## Tipografia e acabamento

A fonte variável Manrope é servida pelo próprio site via `@fontsource-variable/manrope`, com pré-carregamento do arquivo latino e `font-display: swap`. Títulos, textos e controles usam pesos distintos da mesma família. Os raios de cantos ficam nas variáveis `--radius-frame` (14px), `--radius-button` (10px) e `--radius-inner` (8px), em `src/styles/site.css`. A paleta e a ordem das seções permanecem preservadas.

## Fundos das seções

`src/styles/surfaces.css`, ativado por `data-surfaces` na página inicial, define uma base clara contínua para o conteúdo, com iluminação difusa em branco e cinza suave. As seções e o mosaico compartilham esse fundo, sem linhas, estampas ou divisórias. Os cards brancos, ícones, botões e sombras aprovados permanecem independentes do fundo. Todos os tons vêm da paleta existente, preservando conteúdo e disposição das seções.
