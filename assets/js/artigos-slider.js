document.addEventListener('DOMContentLoaded', function() {
    const artigosContainer = document.getElementById('artigos-container');
    
    // Usar a função do utils.js para obter artigos publicados
    const artigosPublicados = getArtigosPublicados();
    
    // Função para criar o HTML de um artigo
    function criarArtigoHTML(id, artigo) {
        return `
            <div class="swiper-slide">
                <div class="artigo-item px-4">
                    <div class="artigo-img mb-4">
                        <img src="${artigo.imagem}" alt="${artigo.imagemAlt}" class="img-fluid">
                    </div>
                    <h3><a href="artigo.html?id=${id}">${artigo.titulo}</a></h3>
                    <div class="artigo-meta mb-3 d-flex justify-content-between align-items-center flex-wrap">
                        <div class="artigo-categorias">
                            ${(artigo.categorias && artigo.categorias.length > 0) ? artigo.categorias.map(cat => `<span class='badge bg-primary me-1'>${cat}</span>`).join('') : ''}
                        </div>
                        <span class="date text-end"><i class="bi bi-calendar-event me-2"></i>${artigo.data}</span>
                    </div>
                    <p>${artigo.resumo}</p>
                    <a href="artigo.html?id=${id}" class="btn btn-outline-primary">Leia mais</a>
                </div>
            </div>
        `;
    }

    // Buscar artigo em destaque (apenas entre os publicados)
    let artigoDestaque = artigosPublicados.find(a => a.destaque === true);
    if (!artigoDestaque) {
        const maiorId = Math.max(...artigosPublicados.map(a => a.id));
        artigoDestaque = artigosPublicados.find(a => a.id === maiorId);
    }

    // Exibir artigo de destaque
    const destaqueContainer = document.getElementById('artigo-destaque-slider');
    if (destaqueContainer && artigoDestaque) {
        destaqueContainer.innerHTML = `
            <div class="artigo-destaque row g-0 align-items-center mb-4">
                <div class="col-md-5 position-relative">
                    <div class="destaque-badge">
                        <span class="badge bg-warning text-dark px-3 py-2">
                            <i class="bi bi-star-fill me-1"></i>Artigo em Destaque!
                        </span>
                    </div>
                    <img src="${artigoDestaque.imagem}" alt="${artigoDestaque.imagemAlt}" class="img-fluid">
                </div>
                <div class="col-md-7 p-4">
                    <h2>${artigoDestaque.titulo}</h2>
                    <div class="mb-2">
                        ${(artigoDestaque.categorias||[]).map(cat => `<span class='badge bg-primary me-1'>${cat}</span>`).join(' ')}
                    </div>
                    <div class="mb-2 text-muted"><i class="bi bi-calendar-event me-1"></i>${artigoDestaque.data}</div>
                    <p>${artigoDestaque.resumo}</p>
                    <a href="artigo.html?id=${artigoDestaque.id}" class="btn btn-primary">Ler artigo</a>
                </div>
            </div>
        `;
    }

    // Obter os 5 últimos artigos (excluindo o destaque)
    const artigosParaCarrossel = artigosPublicados
        .filter(artigo => artigo.id !== artigoDestaque.id) // Excluir o artigo em destaque
        .sort((a, b) => b.id - a.id) // Ordenar por ID decrescente (mais recentes primeiro)
        .slice(0, 4); // Pegar apenas os 4 mais recentes (total de 5 com o destaque)

    // Carregar os artigos no carrossel
    artigosParaCarrossel.forEach(artigo => {
        artigosContainer.innerHTML += criarArtigoHTML(artigo.id, artigo);
    });

    // Inicializar o Swiper
    new Swiper('.artigos-slider', {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 80
            }
        }
    });
}); 