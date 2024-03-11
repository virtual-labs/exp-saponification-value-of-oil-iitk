/* RBF Sollution  transfer to volumetric flask
and add distilled water in volumetric flask
then shake well 
*/

let step_7_machineLP = document.getElementById('step_7_machineLP');//
let step_7_machineUP1 = document.getElementById('step_7_machineUP1');//no flask
let step_7_machineUP2 = document.getElementById('step_7_machineUP2');//add sol
let step_7_machineUP = document.getElementById('step_7_machineUP');//mix with sol
let step_7_Flask = document.getElementById('step_7_Flask');
//let step_1_conicalFlask1 = document.getElementById('step_1_conicalFlask1');
//let step_1_beaker = document.getElementById('step_1_beaker');
let step_7_droper = document.getElementById('step_7_droper');
let step_7_pbtn = document.getElementById('step_7_pbtn ');
let step_7_speed = document.getElementById('step_7_speed');
//let sol1 = document.getElementById('sol1');





step_7_droper.addEventListener('click', () => {
    let step_7_Flask = document.getElementById("step_7_droper");
    step_7_droper.style.left = "57.48%";
    step_7_droper.style.bottom = '45rem';
    step_7_droper.style.transition = "all 3s"
    step_7_droper.style.transform = "translate(0% , 1055%) rotate(90deg)";

    setTimeout(() => {
        step_7_droper.style.transform = "translate(0% , 0%%) rotate(90deg)";
    }, 1000);

    setTimeout(() => {
        step_7_droper.style.bottom = "38rem";
    }, 2500);

    setTimeout(() => {
        step_7_droper.style.bottom = "45rem";
    }, 5000);

    setTimeout(() => {
        step_7_droper.style.left = "47.89%";
    }, 6000);

    setTimeout(() => {
        step_7_droper.style.bottom = "40rem";
    }, 8500);

    setTimeout(() => {
        step_7_droper.style.bottom = "45rem";
    }, 11500);

    setTimeout(() => {

        step_7_droper.style.left = "60.59rem";
        step_7_droper.style.bottom = '16.5rem';
        step_7_droper.style.transition = "all 3s"
        step_7_droper.style.transform = "translate(0% , 0%) rotate(0deg)";
    
    }, 12500);

})
