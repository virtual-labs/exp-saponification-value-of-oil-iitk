//water bath 
let Hl7 = document.getElementById('Hl1');
let HL2 = document.getElementById('HL2');
let hb1 = document.getElementById('hb1');
let HBNO = document.getElementById('HBNO ');
let hmachine= document.getElementById('hmachine');
let flask_sol = document.getElementById('flask_sol');


flask_sol.addEventListener('click', () => {
    
    setTimeout(() => {
        flask_sol.style.bottom = '25.65rem';
        flask_sol.style.transition = "all 3s";
    }, 1000);
    
    setTimeout(() => {
        flask_sol.style.left = "35.49rem";
        flask_sol.style.transition = "all 3s";
        flask_sol.style.zIndex = "1"
    }, 2500);
})