function inputCapture () {
    // Recuperar do CSS o que foi digitado nas partes do formulário e armezenar em variáveis
    const nome = document.getElementById("form-name-user");
    const email = document.getElementById("form-email-user");
    const whatsapp = document.getElementById("form-whatsapp-user");

    // Criar uma variável que recupera o click no botão de enviar
    let submitButton = document.getElementById("submit-button");

    // Criar um evento de click no botão de enviar
    // Criar um alert mostrando o que a pessoa digitou no formulário
    submitButton.addEventListener("click", function(evento) {
        evento.preventDefault();
        console.log(nome.value, email.value, whatsapp.value);
        return
    });
}

inputCapture();