(() => {

  var hidden, visibilityChange;
  var prefixo = verificaPrefixo();

  switch (prefixo) {
    case "default":
      hidden = "hidden";
      visibilityChange = "visibilitychange";          
      break;

    case "moz":
      hidden = "mozHidden";
      visibilityChange = "mozvisibilitychange";
      break;

    case "ms":
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
      break;

    case "webkit":
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
      break;
  }

  var videoElement = document.getElementById("videoElement");

  // Se a página está escondida, pausa o video;
  // Se a página está visível, reproduz o video
  function handleVisibilityChange() {
    if (document[hidden]) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
  }

  // Alerta se o navegador não suporta addEventListener ou a API de visibilidade da página
  if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {

    alert("Este browser não tem suporte à Page Visibility API.");
    return false;
  }

  // Manipula o evento de mudança da visibilidade da página   
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
    
  // Reverte para o favicon existente para o site quando a página é fechada;
  // caso contrário, o favicon continua como paused.png
  window.addEventListener("unload", function(){
    var favicon = document.querySelector('link[rel="icon"]')
    favicon.href = "favicon.ico";
  }, false);
    
  // Quando o video é pausado, configura o favicon.
  // Isso mostra a imagem paused.png
  videoElement.addEventListener("pause", function(){
    var favicon = document.querySelector('link[rel="icon"]')
    favicon.href = "paused.png";
  }, false);
    
  // Quando o video é reproduzido, configura o favicon.
  videoElement.addEventListener("play", function(){
    var favicon = document.querySelector('link[rel="icon"]')
    favicon.href = "playing.png";
  }, false);
    
  // Configura o título da aba com o tempo atual do video
  videoElement.addEventListener("timeupdate", function(){
    document.title = Math.floor(videoElement.currentTime) + " segundo(s)";
  }, false);

})();