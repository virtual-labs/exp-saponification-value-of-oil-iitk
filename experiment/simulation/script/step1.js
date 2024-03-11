
// Slide 2 : Step 1
/*let step_1_machineLP = document.getElementById('step_1_machineLP');//
let step_1_machineUP1 = document.getElementById('step_1_machineUP1');//no flask
let step_1_machineUP2 = document.getElementById('step_1_machineUP2');//add sol
let step_1_machineUP = document.getElementById('step_1_machineUP');*///mix with sol
let step_1_conicalFlask = document.getElementById('step_1_conicalFlask');
let step_1_conicalFlask1 = document.getElementById('step_1_conicalFlask1');
let step_1_beaker = document.getElementById('step_1_beaker');
let step_1_droper = document.getElementById('step_1_droper');
//let step_1_pbtn = document.getElementById('step_1_pbtn ');
//let step_1_speed = document.getElementById('step_1_speed');
let sol1 = document.getElementById('sol1');


step_1_conicalFlask.addEventListener('click', () => {
   let step_1_conicalFlask = document.getElementById("step_1_conicalFlask");
    step_1_conicalFlask.style.left = "36.895rem";
    step_1_conicalFlask.style.bottom = '25.6%';
    step_1_conicalFlask.style.transition = "all 3s";
   // sol1.style.visibility = "visible";
    sol1.style.visibility = "hidden";
    sol1.style.transitionDuration= "0s";
    setTimeout(() => {
        step_1_conicalFlask.style.transform = "translate(10, -100) rotate(0)";
        //step_1_conicalFlask.style.left = "30%%";
      //  step_1_conicalFlask.style.bottom = '20%';
    }, 300
    )
})


step_1_beaker.addEventListener('click', () => {
    let step_1_conicalFlask = document.getElementById("step_1_conicalFlask");
    step_1_beaker.style.left = "48.595rem";
    step_1_beaker.style.bottom = '27.5rem';
    step_1_beaker.style.transition = "all 3s" ;
    step_1_beaker.style.transform = "translate(-.1% , 20%) rotate(-45deg)";

    setTimeout(() => {
        step_1_beaker.style.transform = "translate(0, 0) rotate(0)";
        step_1_beaker.style.left = "59%";
        step_1_beaker.style.bottom = '20%';
    }, 3000);

})


step_1_droper.addEventListener('click', () => {
    let step_1_conicalFlask = document.getElementById("step_1_droper");
    step_1_droper.style.left = "57.99rem";
    step_1_droper.style.bottom = '45rem';
    step_1_droper.style.transition = "all 3s"
    step_1_droper.style.transform = "translate(0% , 1055%) rotate(90deg)";

    setTimeout(() => {
        step_1_droper.style.transform = "translate(0% , 0%%) rotate(90deg)";
    }, 1000);

    setTimeout(() => {
        step_1_droper.style.bottom = "38rem";
    }, 2500);

    setTimeout(() => {
        step_1_droper.style.bottom = "45rem";
    }, 5000);

    setTimeout(() => {
        step_1_droper.style.left = "43.89rem";
    }, 6000);

    setTimeout(() => {
        step_1_droper.style.bottom = "40rem";
    }, 8500);

    setTimeout(() => {
        step_1_droper.style.bottom = "45rem";
    }, 11500);

    setTimeout(() => {

        step_1_droper.style.left = "60.59rem";
        step_1_droper.style.bottom = '16.5rem';
        step_1_droper.style.transition = "all 3s"
        step_1_droper.style.transform = "translate(0% , 0%) rotate(0deg)";
    
    }, 12500);
    

})


