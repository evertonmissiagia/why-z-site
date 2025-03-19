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

function lerConteudoDoArquivo(arquivo) {
    return new Promise ((resolve, reject) => {
        const leitorArquivo = new FileReader();
            leitorArquivo.onload = () => {
                resolve({url: leitorArquivo.result, nome: arquivo.name});
            };

        leitorArquivo.onerror = () => {
            reject('Erro ao ler o arquivo');
        };

        leitorArquivo.readAsDataURL(arquivo);
    });
}

const placeholderImage = document.getElementById('placeholder-image');
const placeholderImageName = document.getElementById('placeholder-image-name');

inputFoto.addEventListener('change', async (evento) => {
    const arquivoEnviado = evento.target.files[0];

    if (placeholderImage) {
        try {
            const conteudoDaImagem = await lerConteudoDoArquivo(arquivoEnviado);
            placeholderImage.src = conteudoDaImagem.url;
            placeholderImageName.innerHTML = conteudoDaImagem.nome;
        } catch (erro) {
            console.error("Erro na leitura do arquivo")
        }
    }
});