const botaoEnviarFoto = document.getElementById('botao-enviar-foto');
const inputFoto = document.getElementById('enviar-foto-input');

botaoEnviarFoto.addEventListener('click', () => {
    inputFoto.click()
});

// Validação do tamanho e tipo da imagem

document.getElementById('enviar-foto-input').addEventListener('change', (event) => {
    var imgFile = event.target.files[0];

    if (!imgFile.type.match('image/png') && !imgFile.type.match('image/jpeg')) {
        alert('Por favor, selecione uma imagem PNG ou JPEG.');
        return;
      }

    if (imgFile.size > 2 * 1024 * 1024) {
        alert('A imagem deve ter no máximo 2MB')
        return
    };
});


