// Adicione este código ao seu script.js existente

// Quando o formulário é enviado com sucesso
document.getElementById('formInscricao').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Mostra a mensagem de confirmação
    document.getElementById('mensagemdeConfirmacao').style.display = 'block';
    // Esconde o formulário
    document.getElementById('formInscricao').style.display = 'none';
});

// Botão "Voltar para inscrição" - CORREÇÃO
document.getElementById('voltarBtn').addEventListener('click', function() {
    // Mostra o formulário novamente
    document.getElementById('formInscricao').style.display = 'block';
    // Esconde a mensagem de confirmação
    document.getElementById('mensagemdeConfirmacao').style.display = 'none';
});