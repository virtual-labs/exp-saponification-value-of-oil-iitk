// Step 1 : Move to second slide 
let first_next_button = document.querySelector('#first_next_button');
first_next_button.addEventListener('click', () => {
    let main_section = document.getElementById('main_container').style.display = "none";
    let secondary_section = document.getElementById("secondary_container").style.display = "flex";
})


// Step 2 : Move to third slide
let secondary_next_button = document.querySelector('#secondary_next_button');
secondary_next_button.addEventListener('click', () => {
    let secondary_container = document.getElementById("secondary_container").style.display = "none";
    let third_container = document.getElementById('third_container').style.display = "flex"; 
})

// Step 2 : back to main slide

let secondary_back_button = document.querySelector('#secondary_back_button');
secondary_back_button.addEventListener('click', () => {
    let secondary_container = document.getElementById("secondary_container").style.display = "none";
    let main_section = document.getElementById('main_container').style.display = "flex";
})

 
// Step 3 : Move to fourth slide
let third_next_button = document.querySelector('#third_next_button');
third_next_button.addEventListener('click', () => {
    let third_container = document.getElementById("third_container").style.display = "none";
    let fourth_container = document.getElementById('fourth_container').style.display = "flex";
})

// Step 3 : back to second slide

let third_back_button = document.querySelector('#third_back_button');
third_back_button.addEventListener('click', () => {
    let third_container = document.getElementById("third_container").style.display = "none";
    let secondary_container = document.getElementById('secondary_container').style.display = "flex";
})


// Step 4 : Move to fifth slide
let fourth_next_button = document.querySelector('#fourth_next_button');
fourth_next_button.addEventListener('click', () => {
    let fourth_container= document.getElementById("fourth_container").style.display = "none";
    let fifth_container = document.getElementById('fifth_container').style.display = "flex";
})

// Step 3 : back to third slide

let fourth_back_button = document.querySelector('#fourth_back_button');
fourth_back_button.addEventListener('click', () => {
    let fourth_container = document.getElementById("fourth_container").style.display = "none";
    let third_container = document.getElementById('third_container').style.display = "flex";
})


// Step 5 : Move to sixth slide
let fifth_next_button = document.querySelector('#fifth_next_button');
fifth_next_button.addEventListener('click', () => {
    let fifth_container = document.getElementById("fifth_container").style.display = "none";
    let sixth_container = document.getElementById('sixth_container').style.display = "flex";
})

// Step 3 : back to fourth slide

let fifth_back_button = document.querySelector('#fifth_back_button');
fifth_back_button.addEventListener('click', () => {
    let fifth_container = document.getElementById("fifth_container").style.display = "none";
    let fourth_container = document.getElementById('fourth_container').style.display = "flex";
})


// Step 6 : Move to seventh slide
let sixth_next_button = document.querySelector('#sixth_next_button');
sixth_next_button.addEventListener('click', () => {
    let sixth_container = document.getElementById("sixth_container").style.display = "none";
    let seventh_container = document.getElementById('seventh_container').style.display = "flex";
})

// Step 3 : back to fifth slide

let sixth_back_button = document.querySelector('#sixth_back_button');
sixth_back_button.addEventListener('click', () => {
    let sixth_container = document.getElementById("sixth_container").style.display = "none";
    let fifth_container = document.getElementById('fifth_container').style.display = "flex";
})


// Step 7 : Move to eigth slide
let seventh_next_button = document.querySelector('#seventh_next_button');
seventh_next_button.addEventListener('click', () => {
    let seventh_container = document.getElementById("seventh_container").style.display = "none";
    let eigth_container = document.getElementById('eigth_container').style.display = "flex";
})

// Step 3 : back to sixth slide

let seventh_back_button = document.querySelector('#seventh_back_button');
seventh_back_button.addEventListener('click', () => {
    let seventh_container = document.getElementById("seventh_container").style.display = "none";
    let sixth_container = document.getElementById('sixth_container').style.display = "flex";
})
// Step 3 : back to seventh slide

let eigth_back_button = document.querySelector('#eigth_back_button');
eigth_back_button.addEventListener('click', () => {
    let eigth_container = document.getElementById("eigth_container").style.display = "none";
    let seventh_container = document.getElementById('seventh_container').style.display = "flex";
})

// Step 7 : Move to nineth slide
let eigth_next_button = document.querySelector('#eigth_next_button');
eigth_next_button.addEventListener('click', () => {
    let eigth_container = document.getElementById("eigth_container").style.display = "none";
    let nineth_container = document.getElementById('nineth_container').style.display = "flex";
})

// Step 3 : back to eigth slide

let nineth_back_button = document.querySelector('#nineth_back_button');
nineth_back_button.addEventListener('click', () => {
    let nineth_container = document.getElementById("nineth_container").style.display = "none";
    let eigth_container = document.getElementById('eigth_container').style.display = "flex";
})

// Step 7 : Move to nineth slide
let nineth_next_button = document.querySelector('#nineth_next_button');
nineth_next_button.addEventListener('click', () => {
    let nineth_container = document.getElementById("nineth_container").style.display = "none";
    let tenth_container = document.getElementById('tenth_container').style.display = "flex";
})

// Step 3 : back to eigth slide

let tenth_back_button = document.querySelector('#tenth_back_button');
tenth_back_button.addEventListener('click', () => {
    let tenth_container = document.getElementById("tenth_container").style.display = "none";
    let nineth_container = document.getElementById('nineth_container').style.display = "flex";
})





/*
var curent_step = 0
var steps = document.querySelectorAll('.step')
var taskslist = document.querySelector('#taskslist')
var fist_next_button = document.querySelector('#first_next_button')
var task_done = true

function next() {
    if (curent_step < steps.length - 1) {
        curent_step++
        task_done = false
    }
}

function validateanswer(selector, ans) {
    var filled = document.querySelector(`${selector} .question`).value

    if(filled == ans) 
        document.querySelector(`${selector} .answer`).innerHTML = '<span style="color:green">Correct Answer</span>'
    else 
        document.querySelector(`${selector} .answer`).innerHTML = `<span style="color:red">Wrong Answer</span>, Correct answer is  ${document.querySelector(`${selector} .question`).item(ans).innerHTML}`

    gsap.to(selector, { delay: 2, duration: 1,  opacity: 0 })

    task_done = true
}

function addTask(task) {
    var taskli = document.createElement('li')
    taskli.innerHTML = task

    taskslist.appendChild(taskli)
}


setInterval(() => {
    for (let i = 0; i < steps.length; i++) {
        if (i == curent_step)
            steps[i].classList.add('active')
        else
            steps[i].classList.remove('active')
    }
    
    if (task_done)
    fist_next_button.classList.add('active')
    else
    fist_next_button.classList.remove('active')

}, 100)

*/