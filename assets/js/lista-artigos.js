function parseData(dataStr) {
  if (!dataStr) return new Date(0);
  const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const partes = dataStr.toLowerCase().replace('de ', '').split(' ');
  if (partes.length < 3) return new Date(0);
  const dia = parseInt(partes[0]);
  const mes = meses.indexOf(partes[1]);
  const ano = parseInt(partes[2]);
  return new Date(ano, mes, dia);
}

// Buscar artigo em destaque
let artigoMaisRecente = artigos.find(a => a.destaque === true);
if (!artigoMaisRecente) {
  const maiorId = Math.max(...artigos.map(a => a.id));
  artigoMaisRecente = artigos.find(a => a.id === maiorId);
}
const destaqueDiv = document.getElementById('artigo-destaque');
destaqueDiv.innerHTML = `
  <div class="artigo-destaque row g-0 align-items-center">
    <div class="col-md-5">
      <img src="${artigoMaisRecente.imagem}" alt="${artigoMaisRecente.imagemAlt}" class="img-fluid">
    </div>
    <div class="col-md-7 p-4">
      <h2>${artigoMaisRecente.titulo}</h2>
      <div class="mb-2">
        ${(artigoMaisRecente.categorias||[]).map(cat => `<span class='badge bg-primary me-1'>${cat}</span>`).join(' ')}
      </div>
      <div class="mb-2 text-muted"><i class="bi bi-calendar-event me-1"></i>${artigoMaisRecente.data}</div>
      <p>${artigoMaisRecente.resumo}</p>
      <a href="artigo.html?id=${artigoMaisRecente.id}" class="btn btn-primary">Ler artigo</a>
    </div>
  </div>
`;

// Montar categorias
const categoriasMap = {};
artigos.forEach(artigo => {
  (artigo.categorias||['Sem Categoria']).forEach(cat => {
    if (!categoriasMap[cat]) categoriasMap[cat] = [];
    categoriasMap[cat].push(artigo);
  });
});
// Remover o artigo em destaque das listas dos carrosseis
Object.values(categoriasMap).forEach(arr => {
  const idx = arr.findIndex(a => a.id === artigoMaisRecente.id);
  if (idx !== -1) arr.splice(idx, 1);
});
const carrosseisDiv = document.getElementById('carrosseis-categorias');
Object.entries(categoriasMap).forEach(([cat, artigosCat], i) => {
  if (artigosCat.length === 0) return;
  // Ordenar por id decrescente
  artigosCat.sort((a, b) => b.id - a.id);
  const carrosselId = `swiper-categoria-${i}`;
  carrosseisDiv.innerHTML += `
    <div class="categoria-titulo">${cat}</div>
    <div class="artigos-slider swiper" style="padding: 0 40px;">
      <div class="swiper-wrapper" id="artigos-container-${i}">
        ${artigosCat.map(artigo => `
          <div class="swiper-slide">
            <div class="artigo-item px-4">
              <div class="artigo-img mb-4">
                <img src="${artigo.imagem}" alt="${artigo.imagemAlt}" class="img-fluid" style="height: 180px; object-fit: cover; border-radius: 5px; width: 100%;">
              </div>
              <h3><a href="artigo.html?id=${artigo.id}">${artigo.titulo}</a></h3>
              <div class="artigo-meta mb-3">
                <span class="date"><i class="bi bi-calendar-event me-2"></i>${artigo.data}</span>
              </div>
              <p>${artigo.resumo}</p>
              <a href="artigo.html?id=${artigo.id}" class="btn btn-outline-primary">Leia mais</a>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev" style="left: 0;"></div>
      <div class="swiper-button-next" style="right: 0;"></div>
    </div>
  `;
});

setTimeout(() => {
  document.querySelectorAll('.artigos-slider').forEach(swiperEl => {
    const slidesCount = swiperEl.querySelectorAll('.swiper-slide').length;
    new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: slidesCount > 1,
      pagination: {
        el: swiperEl.querySelector('.swiper-pagination'),
        clickable: true
      },
      navigation: {
        nextEl: swiperEl.querySelector('.swiper-button-next'),
        prevEl: swiperEl.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 80
        }
      }
    });
  });
}, 100); 