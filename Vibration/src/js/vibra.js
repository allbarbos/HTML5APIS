function vibracao(tipo) {

  switch (tipo) {
    case 'jamesBond':
      navigator.vibrate([200,100,200,275,425,100,200,100,200,275,425,100,75,25,75,125,75,25,75,125,100,100]);
      console.log('Vibra jamesBond');
      break;
  
    case 'starWars':
      navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]);
      console.log('Vibra starWars');
      break;
  
    case 'superMario':
      navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]);
      console.log('Vibra superMario');
      break;
  
    case 'sos':
      navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]);
      console.log('Vibra sos');
      break;
  }

};