// Banco de dados simulado dos artigos
const artigos = {
    1: {
        titulo: "Porque você deve ter uma plataforma de educação digital?",
        imagem: "./assets/img/artigos/artigo1.jpg",
        imagemAlt: "Imagem do Artigo 1",
        data: "15 de Março de 2024",
        resumo: "Que o mundo é digital, isso não temos dúvida! As pessoas, independente da classe social, estão cada vez mais conectadas com o digital através de seus...",
        conteudo: `
            <p class="lead">Porque você deve ter uma plataforma de educação digital?
</p>
            <p>Que o mundo é digital, isso não temos dúvida!
As pessoas, independente da classe social, estão cada vez mais conectadas com o digital através de seus celulares, redes sociais, sites de vídeos e etc.
Este é um caminho sem retorno e sua empresa pode aproveitar este movimento para capacitar sua equipe de uma maneira mais eficiente.
Isto porque, com as ferramentas digitais disponíveis no mercado, uma vez produzido uma capacitação, você poderá aplicá-la a todo seu efetivo quantas vezes for necessário.
A modalidade digital é aplicável a todo conteúdo, além de possuir uma grande variedade de formatos e flexibilidade de custo na produção.</p>

            <div class="article-img my-4 mx-auto text-center" style="max-width: 45%; height: auto; overflow: hidden;">
                <img src="./assets/img/artigos/edicacao-digital-artigo1.png" alt="Plataforma de educação digital" class="img-fluid" style="width: 100%; height: auto; object-fit: contain;">
                <small class="d-block text-center mt-2 text-muted">Fonte: Freepik</small>
            </div>

            <p><strong>Flexibilidade e acessibilidade:</strong> permite que os colaboradores tenham acesso a conteúdos educacionais a qualquer momento e em qualquer lugar, desde que tenham uma conexão com a internet.</p>
 
            <p><strong>Autonomia na aprendizagem:</strong> com uma plataforma digital, os colaboradores podem definir seu próprio ritmo de aprendizado, revisar o conteúdo quantas vezes quiserem e acessar recursos adicionais conforme funcionalidades disponíveis.</p>
 
            <p><strong>Redução de custos:</strong> o investimento em uma plataforma pode ser mais econômica no longo prazo do que a realização de treinamentos presenciais, pois elimina a necessidade de gastos com mentores, deslocamento, hospedagem, alimentação, materiais e espaço físico.</p>
 
            <p><strong>Escalabilidade:</strong> pode ser usada para treinar um grande número de funcionários simultaneamente, independentemente de sua localização geográfica.</p>
 
            <p><strong>Personalização:</strong> pode ser personalizada para atender às necessidades específicas de cada funcionário ou departamento, permitindo que o treinamento seja adaptado para atender às necessidades de cada indivíduo.</p>
 
            <p><strong>Melhoria da eficiência:</strong> os funcionários podem concluir os cursos mais rapidamente do que em treinamentos presenciais, permitindo que retornem rapidamente ao trabalho e apliquem o que aprenderam.</p>
 
            <p><strong>Interação entre usuários:</strong> algumas plataformas possuem recursos como fóruns e grupos sociais, que permitem que os funcionários se conectem uns com os outros e compartilhem ideias, recursos e experiências de aprendizado. Isso pode ser muito valioso para fomentar uma cultura de aprendizado colaborativo e criar uma comunidade de funcionários engajados e motivados.</p>
 
            <p><strong>Acompanhamento do progresso:</strong> a plataforma digital pode ser usada para monitorar o progresso, engajamento e interesses dos funcionários, permitindo que a empresa e gestores avaliem o sucesso do programa de treinamento e faça ajustes conforme necessário.</p>
 
            <p>Além destes benefícios, algumas plataformas possuem funcionalidades exclusivas, como catálogo de cursos de prateleira, aplicativos mobile, ferramentas de autoria, inteligência artificial, gamificação e loja de produtos.</p>
 
            <p>Para saber mais sobre como escolher sua plataforma, <a href="artigo.html?id=2" class="text-primary">clique aqui</a>.</p>
        `
    },
    2: {
        titulo: "Artigo 2",
        imagem: "./assets/img/artigos/artigo2.jpg",
        imagemAlt: "Imagem do Artigo 2",
        data: "20 de Março de 2024",
        resumo: "Texto de teste artigo 2",
        conteudo: `
            <p class="lead">Texto de teste artigo 2</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `
    },
    3: {
        titulo: "Artigo 3",
        imagem: "./assets/img/artigos/artigo3.jpg",
        imagemAlt: "Imagem do Artigo 3",
        data: "20 de Março de 2025",
        resumo: "Texto de teste artigo 3",
        conteudo: `
            <p class="lead">Texto de teste artigo 3</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `
    }

}; 
