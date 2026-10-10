# AN Reformas e Construções

Landing page em Next.js, com saída estática para hospedagem.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Publicação

```bash
npm run build
```

O Next.js gera o site em `out/`. A configuração da hospedagem está em `.openai/hosting.json`.

Estilos e tokens visuais: `app/globals.css`. Conteúdo: `app/page.jsx`. Menu: `components/header.jsx`.
