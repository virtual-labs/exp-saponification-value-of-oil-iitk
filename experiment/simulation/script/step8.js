//volumetric flask transfer to conical flask(Erlenmeyer Flask )
//add few drops of phrnolphthalein indicator to conical flask(Erlenmeyer Flask )

let step_8_burette = document.getElementById('step_8_burette');
let step_8_droper = document.getElementById('step_8_droper');
let step_8_conicalFlask = document.getElementById('step_8_conicalFlask');
let step_8_volumetricflask = document.getElementById('step_8_volumetricflask');




step_8_droper.addEventListener('click', () => {
  let step_8_conicalFlask = document.getElementById("step_8_droper");
  step_8_droper.style.left = "67.59rem";
  step_8_droper.style.bottom = '45rem';
  step_8_droper.style.transition = "all 3s"
  step_8_droper.style.transform = "translate(0% , 1055%) rotate(90deg)";

  setTimeout(() => {
      step_8_droper.style.transform = "translate(0% , 0%%) rotate(90deg)";
  }, 1000);

  setTimeout(() => {
      step_8_droper.style.bottom = "38rem";
  }, 2500);

  setTimeout(() => {
      step_8_droper.style.bottom = "45rem";
  }, 5000);
// volumetric to conical 
  setTimeout(() => {
      step_8_droper.style.left = "37.59%";
  }, 6000);

  setTimeout(() => {
      step_8_droper.style.bottom = "40rem";
  }, 8500);

  setTimeout(() => {
      step_8_droper.style.bottom = "45rem";
  }, 11500);
  //conical to rbf
  setTimeout(() => {
    step_8_droper.style.left = "47.79%";
}, 12500);

setTimeout(() => {
    step_8_droper.style.bottom = "52rem";
}, 13900);

setTimeout(() => {
    step_8_droper.style.bottom = "45rem";
}, 15500);

setTimeout(() => {
    step_8_droper.style.bottom = "35.5rem";
}, 17500);

setTimeout(() => {
    step_8_droper.style.bottom = "55rem";
}, 19500);
//back to conical flask
setTimeout(() => {
    step_8_droper.style.left = "37.59%";
}, 20900);

setTimeout(() => {
    step_8_droper.style.bottom = "45rem";
}, 21900);

setTimeout(() => {
    step_8_droper.style.bottom = "35rem";
}, 22900);

setTimeout(() => {
    step_8_droper.style.bottom = "45rem";
}, 24000);

setTimeout(() => {

    step_8_droper.style.left = "60.59rem";
    step_8_droper.style.bottom = '16.5rem';
    step_8_droper.style.transition = "all 3s"
    step_8_droper.style.transform = "translate(0% , 0%) rotate(0deg)";

}, 26000);

})




// volumetric flask rotation
step_8_vf.addEventListener('click', () => {
let step_8_burette = document.getElementById("step_8_burette");
step_8_vf.style.left = "30.595rem";
step_8_vf.style.bottom = "19.2rem";
step_8_vf.style.transition = "all 3s" ;
})