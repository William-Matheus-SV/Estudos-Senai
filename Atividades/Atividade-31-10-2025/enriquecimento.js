// Mostrar/ocultar categorias da CNH
document.querySelectorAll('input[name="cnh"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const categoriaDiv = document.getElementById('categoria-cnh');
        if (this.value === 'sim') {
            categoriaDiv.style.display = 'block';
        } else {
            categoriaDiv.style.display = 'none';
            // Desmarcar todas as categorias
            document.querySelectorAll('input[name="categoria"]').forEach(cb => {
                cb.checked = false;
            });
        }
    });
});

// Formatar CPF
document.getElementById('cpf').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }
    
    e.target.value = value;
});

// Formatar CEP
document.getElementById('cep').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.substring(0, 8);
    
    if (value.length > 5) {
        value = value.replace(/(\d{5})(\d{1,3})/, '$1-$2');
    }
    
    e.target.value = value;
});

// Formatar telefone
document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length > 10) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 6) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else if (value.length > 0) {
        value = value.replace(/(\d{0,2})/, '($1');
    }
    
    e.target.value = value;
});

// Botão cancelar - limpar formulário
document.getElementById('btnCancelar').addEventListener('click', function() {
    if (confirm('Tem certeza que deseja cancelar? Todos os dados serão perdidos.')) {
        document.getElementById('enriquecimentoForm').reset();
        document.getElementById('categoria-cnh').style.display = 'none';
    }
});

// Botão voltar
document.getElementById('btnVoltar').addEventListener('click', function() {
    if (confirm('Voltar para a página inicial? Os dados não salvos serão perdidos.')) {
        window.location.href = 'index.html';
    }
});

// Envio do formulário
document.getElementById('enriquecimentoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Dados gravados com sucesso!');
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
});