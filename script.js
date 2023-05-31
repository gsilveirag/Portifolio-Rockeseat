// Script Index
const meuBotao = document.getElementById("meuBotao");
const minhaDiv = document.getElementById("meuDiv");

const imagens = [
    { src: "./img/twitter.png", alt: "twitterGustavo", url: "https://twitter.com/gustavo18491734" },
    { src: "./img/github.png", alt: "gitGustavo", url: "https://github.com/gsilveirag"},
    { src: "./img/linkedin.png", alt: "linkedinGustavo", url: "https://www.linkedin.com/in/gustavo-gon%C3%A7alves-0a57491a4/"},
    { src: "./img/instagram.png", alt: "instaGustavo", url: "https://www.instagram.com/gustavo_goncalvess/"},
  ];
  
  meuBotao.addEventListener("click", function() {
    minhaDiv.innerHTML = "";
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
 
 
     // Remove os elementos e limpa a div 
     setTimeout(() => {
         minhaDiv.innerHTML = "";
         minhaDiv.style.backgroundColor = 'transparent'
       }, 10000); 
        });

 })


 const sobreMim = document.getElementById("sobreMim"); 

sobreMim.addEventListener("click", function() {
  minhaDiv.innerHTML = "";
  // Muda a cor de Fundo
  
  minhaDiv.style.backgroundColor = "rgb(230, 227, 248)"
  

  const texto = document.createElement("p")
  texto.textContent = "Após mais de 10 anos de experiência em bancos, sigo para uma transição de carreira, saindo da zona de conforto, em busca de um sonho na área de tecnologia.Hoje para alcançar meus objetivos, estou finalizando o curso de Analise e Desenvolvimento de Sistemas, na Universidade de Vila Velha.Tenho usado plataformas auxiliares no meu desenvolvimento como, Udemy, balta.io, Rockseat...Atualmente meu foco esta no curso da onebitcode : Full Stack Javascript.E estou cursando o curso do Senac, focado na trilha de desenvolvimento." 

  //adicionar o texto na div
  minhaDiv.appendChild(texto);

  // Remove os elementos e limpa a div 
  setTimeout(() => {
    minhaDiv.innerHTML = "";
    minhaDiv.style.backgroundColor = 'transparent'
  }, 10000); 

})






