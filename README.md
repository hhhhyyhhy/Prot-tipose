# Turno das 3h

Jogo de mistério no navegador: oito noites no caixa de uma conveniência de posto na serra.
Tudo em um arquivo (`index.html`), sem build. O site pode ser instalado como aplicativo
(Edge/Chrome: ícone de instalar na barra de endereço) e funciona sem internet depois da primeira visita.

## Notebooks mais simples (ex.: Galaxy Book Go)

Na tela inicial, marque **Gráficos leves**. O jogo também liga sozinho se perceber que está lento.

## Hospedar no Render

1. No Render: **New → Blueprint** e escolha este repositório. O `render.yaml` cria um Static Site gratuito.
2. Ou **New → Static Site**, este repositório, *Build Command* vazio e *Publish Directory* `.`.

Cada push na branch `main` publica a nova versão.
