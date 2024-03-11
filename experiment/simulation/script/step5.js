//transfer 25ml of .5N  KOH in RBF containing oil sample
//add a piece of  Porcelain in RBF
//add shake for few second

let step_5_rbfflask= document.getElementById('step_5_rbfflask');
let step_5_flask = document.getElementById('step_5_flask');
let step_5_droper  = document.getElementById('step_5_droper');
//let HBNO = document.getElementById('step_1_pbtn ');
//let hmachine= document.getElementById('step_1_speed');


step_5_droper.addEventListener('click', () => {
    let step_5_Flask = document.getElementById("step_5_droper");
    step_5_droper.style.left = "27.48%";
    step_5_droper.style.bottom = '45rem';
    step_5_droper.style.transition = "all 3s"
    step_5_droper.style.transform = "translate(0% , 1055%) rotate(90deg)";

    setTimeout(() => {
        step_5_droper.style.transform = "translate(0% , 0%%) rotate(90deg)";
    }, 1000);

    setTimeout(() => {
        step_5_droper.style.bottom = "38rem";
    }, 2500);

    setTimeout(() => {
        step_5_droper.style.bottom = "45rem";
    }, 5000);

    setTimeout(() => {
        step_5_droper.style.left = "45.89%";
    }, 6000);

    setTimeout(() => {
        step_5_droper.style.bottom = "40rem";
    }, 8500);

    setTimeout(() => {
        step_5_droper.style.bottom = "45rem";
    }, 11500);

    setTimeout(() => {

        step_5_droper.style.left = "60.59rem";
        step_5_droper.style.bottom = '16.5rem';
        step_5_droper.style.transition = "all 3s"
        step_5_droper.style.transform = "translate(0% , 0%) rotate(0deg)";
    
    }, 12500);

})
