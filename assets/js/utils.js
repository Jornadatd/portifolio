// Utilitários para o sistema de artigos

// Função para converter data do formato brasileiro para Date
function parseData(dataStr) {
    if (!dataStr) return new Date(0);
    
    // Normalizar a string removendo espaços extras e convertendo para minúsculas
    const dataNormalizada = dataStr.toLowerCase().trim();
    
    // Array de meses em português
    const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    
    // Remover "de" e dividir por espaços
    const partes = dataNormalizada.replace(/de\s+/g, '').split(/\s+/);
    
    if (partes.length < 3) {
        console.warn('Formato de data inválido:', dataStr);
        return new Date(0);
    }
    
    const dia = parseInt(partes[0]);
    const mesNome = partes[1];
    const ano = parseInt(partes[2]);
    
    const mes = meses.indexOf(mesNome);
    
    if (mes === -1) {
        console.warn('Mês não reconhecido:', mesNome, 'em:', dataStr);
        return new Date(0);
    }
    
    if (isNaN(dia) || isNaN(ano)) {
        console.warn('Dia ou ano inválido em:', dataStr);
        return new Date(0);
    }
    
    const data = new Date(ano, mes, dia);
    
    // Verificar se a data é válida
    if (isNaN(data.getTime())) {
        console.warn('Data inválida gerada para:', dataStr);
        return new Date(0);
    }
    
    return data;
}

// Função para obter apenas artigos publicados
function getArtigosPublicados() {
    // Usar data fixa de 9 de Julho de 2025 para teste
    const hoje = new Date(2025, 6, 9); // 9 de Julho de 2025
    hoje.setHours(0, 0, 0, 0);
    
    console.log('Data atual (hoje):', hoje.toLocaleDateString('pt-BR'));
    
    const artigosPublicados = artigos.filter(a => {
        const dataArtigo = parseData(a.data);
        const isPublicado = dataArtigo <= hoje;
        
        console.log(`Artigo ${a.id} (${a.titulo}):`, {
            dataOriginal: a.data,
            dataParseada: dataArtigo.toLocaleDateString('pt-BR'),
            isPublicado: isPublicado
        });
        
        return isPublicado;
    });
    
    console.log('Total de artigos publicados:', artigosPublicados.length);
    return artigosPublicados;
}

// Função para verificar se um artigo específico está publicado
function isArtigoPublicado(artigo) {
    // Usar data fixa de 9 de Julho de 2025 para teste
    const hoje = new Date(2025, 6, 9); // 9 de Julho de 2025
    hoje.setHours(0, 0, 0, 0);
    const dataArtigo = parseData(artigo.data);
    return dataArtigo <= hoje;
} 