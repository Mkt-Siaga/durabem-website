(() => {
  const D = window.DURABEM;
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const semFoto = ph => `<div class="sem-foto"><img src="assets/logo/durabem-simbolo.svg" alt="">${esc(ph)}</div>`;

  // FISPQ / Ficha Técnica. Sem PDF cadastrado, leva para a seção Contato.
  function docLink(id, tipo) {
    return (D.docs[id] || {})[tipo] || '#contato';
  }
  const alvo = href => href.startsWith('#') ? '' : ' target="_blank" rel="noopener"';

  // Carrossel
  const carrossel = $('carrossel');
  carrossel.insertAdjacentHTML('afterbegin', D.slides.map((s, i) =>
    `<img class="carrossel__slide" src="${esc(s.img)}" alt="${esc(s.alt)}"${i ? ' loading="lazy"' : ''}>`).join(''));
  $('carrossel-dots').innerHTML = D.slides.map((s, i) =>
    `<button type="button" aria-label="Banner ${i + 1}" data-i="${i}"></button>`).join('');
  const slides = carrossel.querySelectorAll('.carrossel__slide');
  const dots = $('carrossel-dots').querySelectorAll('button');
  let atual = 0, timer = null;
  function mostrar(i) {
    atual = (i + slides.length) % slides.length;
    slides.forEach((el, k) => el.classList.toggle('ativo', k === atual));
    dots.forEach((el, k) => el.classList.toggle('ativo', k === atual));
  }
  function ir(i) { clearInterval(timer); mostrar(i); }
  dots.forEach(b => b.addEventListener('click', () => ir(+b.dataset.i)));
  $('carrossel-ant').addEventListener('click', () => ir(atual - 1));
  $('carrossel-prox').addEventListener('click', () => ir(atual + 1));
  mostrar(0);
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    timer = setInterval(() => mostrar(atual + 1), 6000);
  }

  // Grade de produtos
  $('grade-produtos').innerHTML = D.produtos.map(p => {
    const fispq = docLink(p.id, 'fispq'), ficha = docLink(p.id, 'ficha');
    return `
    <article class="produto" data-busca="${esc([p.nome, p.tag, ...p.attrs].join(' ').toLowerCase())}">
      <div class="produto__foto"><img src="${esc(p.img)}" alt="${esc(p.nome)} Durabem" loading="lazy"></div>
      <div class="produto__corpo">
        <span class="produto__tag">${esc(p.tag)}</span>
        <h3>${esc(p.nome)}</h3>
        <div class="atributos">${p.attrs.map(a => `<span>${esc(a)}</span>`).join('')}</div>
        <span class="produto__emb">${esc(p.emb)}</span>
        <div class="produto__btns">
          <a href="${esc(fispq)}"${alvo(fispq)} class="btn">FISPQ</a>
          <a href="${esc(ficha)}"${alvo(ficha)} class="btn btn--contorno">FICHA TÉCNICA</a>
        </div>
      </div>
    </article>`;
  }).join('');

  // Busca do cabeçalho: filtra a grade de produtos
  $('busca').addEventListener('submit', e => {
    e.preventDefault();
    const termo = $('busca-termo').value.trim().toLowerCase();
    let achou = 0;
    document.querySelectorAll('.produto').forEach(el => {
      const ok = !termo || el.dataset.busca.includes(termo);
      el.hidden = !ok;
      if (ok) achou++;
    });
    $('busca-vazia').hidden = achou > 0;
    $('produtos').scrollIntoView();
  });

  // Linha Spray: abas + cores
  const P_SPRAY = 'assets/produtos/';
  let linha = 'geral', cor = 0;
  const fispqSpray = docLink('spray', 'fispq');
  $('spray-fispq').href = fispqSpray;
  if (!fispqSpray.startsWith('#')) { $('spray-fispq').target = '_blank'; $('spray-fispq').rel = 'noopener'; }
  function renderSpray() {
    const L = D.spray[linha];
    const c = L.cores[cor] || L.cores[0];
    $('abas-spray').innerHTML = Object.entries(D.spray).map(([id, l]) =>
      `<button type="button" role="tab" aria-selected="${id === linha}" data-linha="${id}">${esc(l.nome)}</button>`).join('');
    $('cores-spray').innerHTML = L.cores.map(([nome, bg], i) =>
      `<button type="button" class="cor" aria-pressed="${i === cor}" data-i="${i}"><span class="cor__amostra" style="background:${esc(bg)}"></span><span class="cor__nome">${esc(nome)}</span></button>`).join('');
    $('spray-img').src = P_SPRAY + c[2] + '.png';
    $('spray-img').alt = 'Spray Durabem ' + c[0];
    $('spray-titulo').textContent = (L.prefixo || '') + c[0];
  }
  $('abas-spray').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    linha = b.dataset.linha; cor = 0; renderSpray();
  });
  $('cores-spray').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    cor = +b.dataset.i; renderSpray();
  });
  renderSpray();

  // Tiles, categorias, blog
  $('tiles').innerHTML = D.tiles.map(t => `
    <a href="#produtos" class="tile">
      ${t.img ? `<img src="${esc(t.img)}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" loading="lazy">` : semFoto(t.ph)}
      <div class="tile__rotulo"><strong>${esc(t.nome)}</strong><span>ACESSE OS CATÁLOGOS DURABEM</span></div>
    </a>`).join('');
  $('categorias').innerHTML = D.categorias.map(c => `<a href="#catalogo">${esc(c)}</a>`).join('');
  $('posts').innerHTML = D.posts.map(p => `
    <a href="#blog" class="post">
      <div class="post__foto">${p.img ? `<img src="${esc(p.img)}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy">` : semFoto(p.ph)}</div>
      <div class="post__corpo"><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></div>
    </a>`).join('');
  document.querySelectorAll('[data-sem-foto]').forEach(el => { el.innerHTML = semFoto(el.dataset.semFoto); });

  // Newsletter — TODO: integrar com a ferramenta de e-mail marketing.
  $('news-form').addEventListener('submit', e => {
    e.preventDefault();
    $('news-form').hidden = true;
    $('news-ok').hidden = false;
  });

  // Aviso de cookies (lembra o aceite no navegador)
  const CHAVE = 'durabem-cookies-ok';
  let aceito = false;
  try { aceito = localStorage.getItem(CHAVE) === '1'; } catch (e) {}
  $('cookies').hidden = aceito;
  $('cookies-ok').addEventListener('click', () => {
    $('cookies').hidden = true;
    try { localStorage.setItem(CHAVE, '1'); } catch (e) {}
  });
})();
