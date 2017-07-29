(common = () => {

  let isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);

  escolheVibracao = (tipo) => {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    if (navigator.vibrate && isMobile) {

      vibracao(tipo);
      return;
    }

    document.querySelector('.alert-warning').classList.remove('hidden');
    document.querySelector('.alert-warning p').innerText = 'Este navegador não tem suporte a vibração';
  }     
  
  document.querySelector('#jamesBond').addEventListener('click', function(){ escolheVibracao(this.value) })
  document.querySelector('#starWars').addEventListener('click', function(){ escolheVibracao(this.value) })
  document.querySelector('#superMario').addEventListener('click', function(){ escolheVibracao(this.value) })
  document.querySelector('#sos').addEventListener('click', function(){ escolheVibracao(this.value) })
  
})();