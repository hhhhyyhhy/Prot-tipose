# Turno das 3h

Jogo de mistério no navegador: oito noites no caixa de uma conveniência de posto na serra.
Tudo em um arquivo (`index.html`), sem build. O site pode ser instalado como aplicativo
(Edge/Chrome: ícone de instalar na barra de endereço) e funciona sem internet depois da primeira visita.

## Idiomas

O jogo tem versão em português (`index.html`, na raiz) e em inglês (`en/index.html`, em `/en/`).
Na tela inicial dá pra trocar o idioma; a escolha fica salva no aparelho, e quem abre o site
com o navegador em outro idioma vai direto pra versão em inglês. As duas versões usam o mesmo
salvamento e o mesmo caderno. Ao mudar um texto ou uma regra do jogo, mude nas duas.

## Notebooks mais simples (ex.: Galaxy Book Go)

Na tela inicial, marque **Gráficos leves**. O jogo também liga sozinho se perceber que está lento.

## Hospedar no Render

1. No Render: **New → Blueprint** e escolha este repositório. O `render.yaml` cria um Static Site gratuito.
2. Ou **New → Static Site**, este repositório, *Build Command* vazio e *Publish Directory* `.`.

Cada push na branch `main` publica a nova versão.
