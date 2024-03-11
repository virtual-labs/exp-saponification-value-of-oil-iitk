// Slide 3 : Step 2 adding material in titration
/*
take droper
take conical flasck with solution
take buttre
take Erlenmeyer Flask 
add few drops of phrnolphthalein indicator
then add funnel to burtte
*/


let step_2_burette = document.getElementById('step_2_burette');
let step_2_step_2_droper = document.getElementById('step_2_droper');
let step_2_conicalFlask = document.getElementById('step_2_conicalFlask');
let step_2_volumetricflask = document.getElementById('step_2_volumetricflask');




step_2_droper.addEventListener('click', () => {
  let step_2_conicalFlask = document.getElementById("step_1_droper");
  step_2_droper.style.left = "55.59rem";
  step_2_droper.style.bottom = '45rem';
  step_2_droper.style.transition = "all 3s"
  step_2_droper.style.transform = "translate(0% , 1055%) rotate(90deg)";

  setTimeout(() => {
      step_2_droper.style.transform = "translate(0% , 0%%) rotate(90deg)";
  }, 1000);

  setTimeout(() => {
      step_2_droper.style.bottom = "38rem";
  }, 2500);

  setTimeout(() => {
      step_2_droper.style.bottom = "45rem";
  }, 5000);

  setTimeout(() => {
      step_2_droper.style.left = "40.59%";
  }, 6000);

  setTimeout(() => {
      step_2_droper.style.bottom = "40rem";
  }, 8500);

  setTimeout(() => {
      step_2_droper.style.bottom = "45rem";
  }, 11500);

  setTimeout(() => {
    step_2_droper.style.left = "60.59rem";
    step_2_droper.style.bottom = '16.5rem';
    step_2_droper.style.transition = "all 3s"
    step_2_droper.style.transform = "translate(0% , 0%) rotate(0deg)";
}, 12500);

})




// volumetric flask rotation
step_2_volumetricflask.addEventListener('click', () => {
let step_2_burette = document.getElementById("step_2_burette");
step_2_volumetricflask.style.left = "34.095rem";
step_2_volumetricflask.style.bottom = "19.9rem";
step_2_volumetricflask.style.transition = "all 3s" ;
})