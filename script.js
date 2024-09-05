const mensagens = [
    "Deus é nosso refúgio e fortaleza, socorro bem presente na angústia. - Salmo 46:1",
    "Tudo posso naquele que me fortalece. - Filipenses 4:13",
    "O Senhor é meu pastor, nada me faltará. - Salmo 23:1",
    "Lança o teu cuidado sobre o Senhor, e ele te susterá. - Salmo 55:22"
];

function novaMensagem() {
    const index = Math.floor(Math.random() * mensagens.length);
    document.getElementById('mensagem-dia').innerText = mensagens[index];
}