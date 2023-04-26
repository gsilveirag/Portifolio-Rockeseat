const meuBotao = document.getElementById("meuBotao");
const minhaDiv = document.getElementById("meuDiv");

const imagens = [
    { src: "./img/twitter.png", alt: "twitterGustavo", url: "https://twitter.com/gustavo18491734" },
    { src: "./img/github.png", alt: "gitGustavo", url: "https://github.com/gsilveirag"},
    { src: "./img/linkedin.png", alt: "linkedinGustavo", url: "https://www.linkedin.com/in/gustavo-gon%C3%A7alves-0a57491a4/"},
    { src: "./img/instagram.png", alt: "instaGustavo", url: "https://www.instagram.com/gustavo_goncalvess/"},
  ];
  
  meuBotao.addEventListener("click", function() {
    // Muda a cor de Fundo
    minhaDiv.style.backgroundColor = "rgb(230, 227, 248)"

    // Cria um elemento "a" e um elemento "img" para cada objeto no array
 
   imagens.forEach(function(imagem) {
 
     const link = document.createElement("a");
     link.href = imagem.url; // Usa o URL definido no objeto
     link.target = "_blank"; 
 
     const imagemElement = document.createElement("img");
     imagemElement.src = imagem.src; 
     imagemElement.alt = imagem.alt; // Usa o texto alternativo definido no objeto
 
     // Adiciona a imagem ao link e o link à div
     link.appendChild(imagemElement);
     minhaDiv.appendChild(link);
 
 
     // Remove os elementos após 5 segundos 
     setTimeout(() => {
         minhaDiv.innerHTML = "";
         minhaDiv.style.backgroundColor = 'transparent'
       }, 15000); 
        });

 })


