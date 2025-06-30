document.addEventListener('DOMContentLoaded', function() {
    const artigosContainer = document.getElementById('artigos-container');
    
    // Função para criar o HTML de um artigo
    function criarArtigoHTML(id, artigo) {
        return `
            <div class="swiper-slide">
                <div class="artigo-item px-4">
                    <div class="artigo-img mb-4">
                        <img src="${artigo.imagem}" alt="${artigo.imagemAlt}" class="img-fluid">
                    </div>
                    <h3><a href="artigo.html?id=${id}">${artigo.titulo}</a></h3>
                    <div class="artigo-meta mb-3">
                        <span class="date"><i class="bi bi-calendar-event me-2"></i>${artigo.data}</span>
                    </div>
                    <p>${artigo.resumo}</p>
                    <a href="artigo.html?id=${id}" class="btn btn-outline-primary">Leia mais</a>
                </div>
            </div>
        `;
    }

    // Carregar todos os artigos
    Object.entries(artigos).forEach(([id, artigo]) => {
        artigosContainer.innerHTML += criarArtigoHTML(id, artigo);
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