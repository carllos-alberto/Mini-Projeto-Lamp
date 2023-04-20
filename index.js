const lamp = document.getElementById('lamp');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');

 function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1;
} 

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = 'src/assets/img/ligada.png';
    } 
}

function lampOff () {
   if ( !isLampBroken () ) {
       lamp.src = 'src/assets/img/desligada.png';
    } 
}

function lampBroken () {
    lamp.src = 'src/assets/img/quebrada.png';

}

turnOn.addEventListener('click', lampOn );
turnOff.addEventListener('click', lampOff );
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken); 