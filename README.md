# Durabem Website

Site institucional da Durabem (Grupo Siaga, marca G8): "Feito para durar". HTML, CSS e JavaScript puros — sem build, sem dependências.
Base: handoff do Claude Design "Durabem Site" (página única).

## Seções (`index.html`)

Cabeçalho com busca · faixa "estoque sempre cheio" · carrossel de banners · `#destaques` · `#produtos` linha química (FISPQ / Ficha Técnica) · `#spray` Spray Premium com abas Uso Geral / Metálico e seletor de cor · `#catalogo` · newsletter · `#sobre` tiles e categorias · `#literatura` · `#blog` · `#contato` rodapé · aviso de cookies.

## Estrutura

```
css/styles.css   Fontes, tokens de cor (:root) e componentes
js/dados.js      Banners, produtos, cores do spray, tiles, categorias, posts e links de FISPQ/Ficha (window.DURABEM)
js/main.js       Carrossel, grade de produtos, busca, abas do spray, newsletter, cookies
assets/          fonts (Roboto, Roboto Condensed, Montserrat itálico), logo, banners, destaques, produtos
```

Para mudar produto, cor, banner ou texto de post, edite só `js/dados.js`.

## Rodar localmente

Qualquer servidor estático na pasta.

## Pendências

- **FISPQ e Ficha Técnica**: preencher os caminhos dos PDFs em `DURABEM.docs` (`js/dados.js`). Enquanto vazio, o botão leva ao rodapé (Contato).
- **Catálogo PDF**: colocar em `assets/catalogo/catalogo-durabem-2026.pdf` (o botão "Baixar catálogo" já aponta para lá).
- **Fotos faltando** (aparecem como placeholder com o símbolo Durabem): destaque das brocas, banner do catálogo (caixa de ferramentas + furadeira), tiles Ferramentas / Chaves / Acessórios e as 3 fotos do blog. Tiles e posts: campo `img` em `js/dados.js`.
- **Textos do blog** vieram provisórios do design (repetem os destaques).
- **Contato**: o rodapé não tem telefone, WhatsApp nem e-mail; "Área restrita", "Falar com vendedor" e "Garanta seu estoque" apontam para o rodapé.
- **Newsletter**: sem integração (`// TODO` em `js/main.js`).
- Links de redes sociais, "Centros de Distribuição", "Política de privacidade", "Termos de Uso" e "Qualidade" apontam para `#`.
- A busca do cabeçalho filtra só a linha química exibida na página.
