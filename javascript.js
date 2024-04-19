// Inicializa uma variável para armazenar a posição do último scroll
let lastScrollTop = 0;

// Adiciona um ouvinte de evento para o evento de scroll da janela
window.addEventListener("scroll", function() {
    // Obtém a posição atual do scroll vertical da página
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica se a posição atual do scroll é maior que a posição anterior
    if (currentScroll > lastScrollTop) {
        // Se o scroll estiver descendo, adiciona a classe 'hidden' ao elemento com a classe 'content'
        document.querySelector(".content").classList.add("hidden");
    } else {
        // Se o scroll estiver subindo, remove a classe 'hidden' do elemento com a classe 'content'
        document.querySelector(".content").classList.remove("hidden");
    }

    // Atualiza a posição do último scroll com a posição atual, evitando valores negativos
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);







// Variável para armazenar o índice do slide atual
let slideIndex = 0;

// Função para avançar ou retroceder nos slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Função para exibir um slide específico
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    
    // Verifica se o índice está fora do intervalo de slides
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    
    // Oculta todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Exibe o slide atual
    slides[slideIndex].style.display = "block";
}

// Função para iniciar o slideshow automaticamente
function startSlideshow() {
    // Exibe o primeiro slide
    showSlides(slideIndex);
    
    // Avança para o próximo slide
    setInterval(function() {
        plusSlides(1);
    }, 6000);
}

// Inicia o slideshow quando a página carrega
window.onload = startSlideshow;





function showItems(selector) {
    // Adicione a classe 'show' ao elemento selecionado
    document.querySelector(selector).classList.add('show');
}











function verProdutos() {
    window.location.assign("paes.html"); // Substitua "pagina-de-produtos.html" pelo URL da página para onde deseja redirecionar
}
function voltar() {
    window.history.back(); // Isso levará o usuário de volta para a página anterior no histórico do navegador
}




document.getElementById("botoes").addEventListener("click", function() {
    document.getElementById("info").classList.toggle("animate");
});
