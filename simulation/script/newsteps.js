var epippete = document.querySelector("#emptypippete")
var pippete2 = document.querySelector("#pippete")
var koh15 = document.querySelector("#koh15ml")
var kohsol = document.querySelector("#kohsol")
var eflask = document.querySelector("#eflask")
var kohoil = document.querySelector("#kohoil")
var kohneck = document.querySelector("#kohneck")
var kohhalf = document.querySelector("#kohhalf")
var oilsample = document.querySelector("#oilsample")
var heaterdone = document.querySelector("#heaterdone")
var rotary = document.querySelector("#rotary")
var watch = document.querySelector("#watch")
var hclsol = document.querySelector("#hclsol")
var hclneck = document.querySelector("#hclneck")
var hclhalf = document.querySelector("#hclhalf")
var funnel = document.querySelector("#funnel")
var burette = document.querySelector("#burette")
var eburette = document.querySelector("#eburette")
var b20 = document.querySelector("#b20")
var b27 = document.querySelector("#b27")
var drop = document.querySelector("#drop")
var pb = document.querySelector("#pb")
var pc = document.querySelector("#pc")
var koh15p = document.querySelector("#koh15p")
var kohoilp = document.querySelector("#kohoilp")
var ptext = document.querySelector("#ptext")
var distilledFlask = document.getElementById('distilledFlask');
// var rotate= document.querySelector("#rotate")

var phvari
var phvari2


function washBuretteWithDistilledWater() {
    // Original positions for distilledFlask
    const ORIGINAL_DISTILLED_TOP = "48%";
    const ORIGINAL_DISTILLED_LEFT = "27%";

    // CONFIRMED optimal values for pouring into the burette
    const BURETTE_POUR_TOP = "-10%"; // Your determined top for flask over burette
    const BURETTE_POUR_LEFT = "14.1%"; // Your determined left for flask over burette

    // --- Drop positions ---
    // Drop's starting position for falling *into* the burette (from flask)
    const DROP_FROM_FLASK_START_TOP = (parseFloat(BURETTE_POUR_TOP) + 10) + "%"; // Slightly below flask
    const DROP_FROM_FLASK_START_LEFT = (parseFloat(BURETTE_POUR_LEFT) + 1) + "%"; // Aligned with flask/burette opening

    // Drop's ending position for falling *into* the burette (e.g., reaching inside)
    // Adjust this if you want drops to fall further or less far inside the burette.
    const DROP_INTO_BURETTE_END_TOP = (parseFloat(BURETTE_POUR_TOP) + 20) + "%";

    // Drop's starting position for falling *out* of the burette (from drain)
    // This should be near the bottom of the burette / its tap. Adjust precisely.
    const DROP_FROM_BURETTE_DRAIN_START_TOP = "45%"; // Estimated for burette tap
    const DROP_FROM_BURETTE_DRAIN_START_LEFT = (parseFloat(BURETTE_POUR_LEFT) + 1) + "%"; // Aligned with burette's tap

    // Drop's ending position for falling *out* of the burette (reaching sink/beaker)
    const DROP_OUT_OF_BURETTE_END_TOP = "70%"; // Further down, into a "sink" area


    // State check: Ensure this function is called at the correct step in your experiment flow.
    if (f === 8) { // f=8 is the state where burette washing is allowed
        f = 9; // Advance state: Washing in progress

    
        // 2. Move distilledFlask towards burette
        distilledFlask.style.transition = "all 1s ease-in-out";
        distilledFlask.style.top = BURETTE_POUR_TOP;
        distilledFlask.style.left = BURETTE_POUR_LEFT;
        distilledFlask.style.transform = "rotate(-90deg)"; // Simulate pouring angle

        // Disable pointer events on distilledFlask during animation
        distilledFlask.style.pointerEvents = "none";

        setTimeout(() => {
            // --- First Drop: Falling INTO the burette ---
            drop.style.transition = "all 1s ease-in"; // Transition for falling down
            drop.style.top = DROP_FROM_FLASK_START_TOP; // Start position of fall
            drop.style.left = DROP_FROM_FLASK_START_LEFT;
            drop.style.visibility = "visible";
            drop.style.opacity = "1";

            setTimeout(() => {
                drop.style.top = DROP_INTO_BURETTE_END_TOP; // End position inside burette

                setTimeout(() => {
                    // Hide drop, and IMMEDIATELY remove its transition.
                    // Using a 0ms setTimeout can sometimes help ensure the browser processes this style change
                    // before the next one, preventing accidental upward animation.
                    drop.style.opacity = "0";
                    drop.style.visibility = "hidden";
                    drop.style.transition = "none"; // Crucial: Remove transition *before* setting new position
                    
                    // Optional: If you have an image for a "washed" burette, you can swap eburette.src here
                    // For example: eburette.src = "images/eburette_with_water.png";

                    // --- Prepare for "washing out" phase ---
                    // Move flask slightly away from burette opening and straighten (simulating less pouring)
                    distilledFlask.style.transition = "all 1s ease-in-out";
                    distilledFlask.style.top = parseFloat(BURETTE_POUR_TOP) + 5 + "%"; // Move down a bit
                    distilledFlask.style.transform = "rotate(0deg)"; // Straighten

                    setTimeout(() => {
                        // --- Second Drop: Falling OUT of the burette ---
                        // IMPORTANT: Set the new start position *before* re-enabling transition and making visible
                        drop.style.top = DROP_FROM_BURETTE_DRAIN_START_TOP; // New starting position for drain
                        drop.style.left = DROP_FROM_BURETTE_DRAIN_START_LEFT;
                        
                        // Now, re-enable transition and make it visible to start the fall
                        drop.style.transition = "all 0.6s ease-in"; // Transition for falling out
                        drop.style.visibility = "visible";
                        drop.style.opacity = "1";

                        setTimeout(() => {
                            drop.style.top = DROP_OUT_OF_BURETTE_END_TOP; // End position for drain

                            setTimeout(() => {
                                // Hide drop and reset
                               drop.style.top = "";
                                drop.style.left = "";
                                drop.style.visibility = "hidden";
                                drop.style.opacity = "0";
                                 drop.style.transition = "none";
                                // drop.style.transition = "";

                                // Restore original eburette if a "washed" visual was temporarily shown.
                                // eburette.src = "images/eburette.png"; // Assuming this is your empty burette

                                // 3. Return distilledFlask to original position
                                distilledFlask.style.transition = "all 1s ease-in-out";
                                distilledFlask.style.top = ORIGINAL_DISTILLED_TOP;
                                distilledFlask.style.left = ORIGINAL_DISTILLED_LEFT;
                                distilledFlask.style.transform = "rotate(0deg)"; // Reset rotation
                                distilledFlask.style.pointerEvents = "auto"; // Re-enable pointer events
                               


                                // Set 'f' to the state where HCL can be added
                                f = 9;
                                // console.log("Burette washed. Ready for HCL.");

                            }, 1000); // Time for drop to fall out completely
                        }, 100); // Small delay before drop starts moving from drain point (after setting new top)
                    }, 100); // Delay before second drop animation starts (simulating brief wash inside)
                }, 500); // Time for first drop to reach end position inside burette
            }, 100); // Small delay before first drop starts moving
        }, 1000); // Duration for flask movement towards burette

    } 
}




function phenolph(){
    if(f==11){
        f=12
        pc.style.top="20%"
        setTimeout(function(){
            pc.style.left="42.5%"
            drop.style.left="43.3%"
            drop.style.top="53%"
            setTimeout(function(){
                pc.style.top="30%"
                setTimeout(function(){
                    drop.style.visibility="visible"
                    setTimeout(function(){
                        drop.style.top="70%"
                        phvari.style.visibility="visible"
                        setTimeout(function(){
                            drop.style.visibility="hidden"
                            koh15.style.opacity="0%"
                            phvari.style.opacity="100%"
                            setTimeout(function(){
                                pc.style.top="20%"
                                setTimeout(function(){
                                    pc.style.left="60.75%"
                                    setTimeout(function(){
                                        pc.style.top="52.3%"
                                        // phvari=kohoilp
                                        f=13
                                        messcounter=7
                                        update()
                                    },1000)

                                },1000)
                            },1000)
                        },200)
                    },100)
                },1000)
            },1000)
        },1000)
    }

    else if(f==27){
        f=28
        pc.style.top="20%"
        setTimeout(function(){
            pc.style.left="42.5%"
            drop.style.left="43.3%"
            drop.style.top="53%"
            drop.style.transitionDuration="1s"
            setTimeout(function(){
                pc.style.top="30%"
                setTimeout(function(){
                    drop.style.visibility="visible"
                    setTimeout(function(){
                        drop.style.top="70%"
                        kohoilp.style.visibility="visible"
                        setTimeout(function(){
                            drop.style.visibility="hidden"
                            kohoil.style.opacity="0%"
                            kohoilp.style.opacity="100%"
                            setTimeout(function(){
                                pc.style.top="20%"
                                setTimeout(function(){
                                    pc.style.left="60.75%"
                                    setTimeout(function(){
                                        pc.style.top="52.3%"
                                        // phvari=kohoilp
                                        f=29
                                        messcounter=14
                                        update()
                                    },1000)

                                },1000)
                            },1000)
                        },200)
                    },100)
                },1000)
            },1000)
        },1000)
    }
}

function oilflask(){
    if (f==5){
        f=6
        epippete.style.visibility="hidden"
        pippete2.style.visibility="hidden"
        kohoil.style.top="15%"
        setTimeout(function(){
            kohoil.style.left="81%"
            setTimeout(function(){
                kohoil.style.top="22%"
                setTimeout(function(){
                    // kohhalf.style.visibility="hidden"
                    koh15.style.left="40%"  
                    setTimeout(function(){

                        eburette.style.visibility="visible"
                    },500)
                    // kohneck.style.visibility="hidden"
                },1000)
                kohhalf.style.opacity="0%"  
                f=7
                messcounter=4
                update()
            },1000)
        },1000)
    }
    else if(f==25){
        f=26
        kohoil.style.top="15%"
        setTimeout(function(){
            kohoil.style.left="40%"
            setTimeout(function(){
                kohoil.style.top="50%"
                kohoilp.style.visibility="visible"
                f=27
                messcounter=13
                update()
            },1000)
        },1000)
    }
}
function nob() {
    if (f == 7) { // Initial click on rotary before heating
        rotary.style.rotate = "-30deg";
        f = 8; // Change state to "ready for heating/stirring completion" or "ready for wash"
        messcounter = 5; // Assuming this is where the message for heating starts
        update(); // Update instruction for heating

        setTimeout(function () {
            popuphider();
            watch.style.visibility = "visible";
            resetBtn();
            startBtn(); // This starts the stopwatch

            const currentTimeInSeconds = minute * 60 + second;
            const timeToWait = 470; // seconds

            if (currentTimeInSeconds + timeToWait <= 1800) {
                setTimeout(function () {
                    stopBtn();
                    if (typeof heaterdone !== 'undefined') {
                        heaterdone.style.opacity = "100%";
                    }
                    // After heating is done, set f to the state that allows burette washing
                    f = 8; // Set f=8 to indicate ready for washing
                    chemicals.instruct.innerText = (chemicals.lang === "hi") ? "ब्यूरेट को आसुत जल से धोएं।" : "Wash the burette with distilled water.";
                    voiceLang = chemicals.lang === "hi" ? "hindi" : "eng";
                    speakStep(chemicals.instruct.innerText);
                    // Make distilledFlask clickable again if it was disabled or its state needs to be emphasized
                    distilledFlask.style.pointerEvents = "auto";

                    // If you use messcounter for this, update it
                    // messcounter = YOUR_NEW_WASH_BURETTE_MESSAGE_NUMBER;
                    // update();
                }, timeToWait * 1000);
            } else {
                stopBtn();
                if (typeof heaterdone !== 'undefined') {
                    heaterdone.style.opacity = "100%";
                }
                f = 8; // Set f=8 to indicate ready for washing
                chemicals.instruct.innerText = (chemicals.lang === "hi") ? "ब्यूरेट को आसुत जल से धोएं।" : "Wash the burette with distilled water.";
                voiceLang = chemicals.lang === "hi" ? "hindi" : "eng";
                speakStep(chemicals.instruct.innerText);
                distilledFlask.style.pointerEvents = "auto";
                // messcounter = YOUR_NEW_WASH_BURETTE_MESSAGE_NUMBER;
                // update();
            }
        }, 1000);
    } else if (f == 8) { // If rotary is clicked again when f is 8 (after heating but before wash)
         // This might not be intended. Nob() should primarily start heating.
         // If you want rotary to do something else when f=8, define it here.
         // Otherwise, this branch might be removed or lead to a "wrong step" message.
         chemicals.instruct.innerText = (chemicals.lang === "hi") ? "पहले ब्यूरेट धोएं।" : "Please wash the burette first.";
         voiceLang = chemicals.lang === "hi" ? "hindi" : "eng";
         speakStep(chemicals.instruct.innerText);
    }
    // Remove the `f = 9;` at the end of `nob()` if it's meant to trigger HCL directly
    // The HCL filling should ONLY happen after the wash is completed.
}

// function nob() {
//     if (f == 7) {
//         rotary.style.rotate = "-70deg";
//         f = 8;
//     } else if (f == 8) {
//         rotary.style.rotate = "-30deg";
//         messcounter = 5;
//         update();

//         setTimeout(function () {
//             popuphider();
//             watch.style.visibility = "visible";
//             resetBtn();
//             startBtn();

//             // Only schedule stop if it won't exceed 30 mins
//             const currentTimeInSeconds = minute * 60 + second;
//             const timeToWait = 470; // seconds

//             if (currentTimeInSeconds + timeToWait <= 1800) {
//                 setTimeout(function () {
//                     stopBtn();
//                     if (typeof heaterdone !== 'undefined') {
//                         heaterdone.style.opacity = "100%";
//                     }
//                     f = 25;
//                     messcounter = 12;
//                     update();
//                 }, timeToWait * 1000);
//             } else {
//                 // Optional: Immediately stop if we're too close to the 30 min cap
//                 stopBtn();
//                 if (typeof heaterdone !== 'undefined') {
//                     heaterdone.style.opacity = "100%";
//                 }
//                 f = 25;
//                 messcounter = 12;
//                 update();
//             }

//         }, 1000);

//         f = 9;
//     }
// }


function popuphider(){
    popup.style.visibility="visible"
    setTimeout(function(){
        popup.style.visibility="hidden"
    },5000)
}
function hcl() {
    // Change 'f == 9' to the state that indicates washing is complete
    // For example, if washBuretteWithDistilledWater() sets f=9 after washing, this is fine.
    // If you need a separate state, e.g., f=10 for HCL after f=9 for wash, adjust here.
    if (f === 9) { // This now ensures hcl() only runs if f is 9, which happens AFTER washing
        f = 10; // New state: HCL filling in progress

        // Your existing HCL animation logic follows...
        eburette.style.scale = "0.8";
        burette.style.scale = "0.8";
        eburette.style.top = "12%";
        burette.style.top = "12%";
        hclsol.style.top = "5%";
        hclhalf.style.top = "5%";
        funnel.style.rotate = "0deg";
        funnel.style.top = "4%";
        setTimeout(function() {
            funnel.style.left = "14.1%";
            hclsol.style.left = "20%";
            hclhalf.style.left = "20%";
            setTimeout(function() {
                funnel.style.top = "12.5%";
                hclsol.style.top = "-5%";
                hclsol.style.rotate = "-90deg";
                hclhalf.style.top = "-5%";
                hclhalf.style.rotate = "-90deg";
                setTimeout(function() {
                     drop.style.opacity = "1";
                     drop.style.transition= "all"
                     drop.style.transitionDuration= "1s"
                    drop.style.visibility = "visible";
                    drop.style.top = "15%"; // Drops going into burette
                    burette.style.visibility = "visible";
                    hclhalf.style.visibility = "visible";
                    setTimeout(function() {
                        drop.style.visibility = "hidden";
                        eburette.style.opacity = "0%";
                        burette.style.opacity = "100%";
                        hclsol.style.opacity = "0%";
                        hclhalf.style.opacity = "100%";

                        setTimeout(function() {
                            hclsol.style.top = "5%";
                            hclsol.style.rotate = "0deg";
                            hclhalf.style.top = "5%";
                            hclhalf.style.rotate = "0deg";
                            funnel.style.top = "4%";
                            setTimeout(function() {
                                eburette.style.scale = "1";
                                burette.style.scale = "1";
                                funnel.style.left = "60%";
                                hclsol.style.left = "50%";
                                hclhalf.style.left = "50%";
                                burette.style.top = "5%";
                                eburette.style.top = "5%";
                                // If b20 and b27 are also burette states, ensure their positions are reset
                                b20.style.top = "5%";
                                b27.style.top = "5%";
                                setTimeout(function() {
                                    funnel.style.top = "70%";
                                    hclsol.style.top = "50%";
                                    hclhalf.style.top = "50%";
                                    funnel.style.rotate = "70deg";
                                    setTimeout(function() {
                                        pb.style.visibility = "visible";
                                        pc.style.visibility = "visible";
                                        funnel.style.transitionDuration = "0s";
                                        hclhalf.style.transitionDuration = "0s";
                                        funnel.style.visibility = "hidden";
                                        hclhalf.style.visibility = "hidden";
                                        phvari = koh15p;
                                        f = 11; // Next step after HCL filling
                                        // Make sure update() is defined and handles f=11 state for instructions/voice
                                        update(); // Assuming this updates instructions and voiceover
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000); // Adjusted this timeout for drop invisibility
                }, 500); // Adjusted this timeout to make drop appear earlier
            }, 1000);
        }, 1000);
    }
}

// function hcl(){
//     if (f==9){
//         f=10
//         eburette.style.scale="0.8"
//         burette.style.scale="0.8"
//         eburette.style.top="12%"
//         burette.style.top="12%"
//         hclsol.style.top="5%"
//         hclhalf.style.top="5%"
//         funnel.style.rotate="0deg"
//         funnel.style.top="4%"
//         setTimeout(function(){
//             funnel.style.left="14.1%"
//             hclsol.style.left="20%"
//             hclhalf.style.left="20%"
//             setTimeout(function(){
//                 funnel.style.top="12.5%"
//                 hclsol.style.top="-5%"
//                 hclsol.style.rotate="-90deg"
//                 hclhalf.style.top="-5%"
//                 hclhalf.style.rotate="-90deg"
//                 setTimeout(function(){
//                     drop.style.visibility="visible"
//                     drop.style.top="15%"
//                     burette.style.visibility="visible"
//                     // rotate.style.visibility= "visible"
//                     hclhalf.style.visibility="visible"
//                     setTimeout(function(){
//                         drop.style.visibility="hidden"
//                         eburette.style.opacity="0%"
//                         burette.style.opacity="100%"
//                         hclsol.style.opacity="0%"
//                         hclhalf.style.opacity="100%"

//                         setTimeout(function(){
//                             hclsol.style.top="5%"
//                             hclsol.style.rotate="0deg"
//                             hclhalf.style.top="5%"
//                             hclhalf.style.rotate="0deg"
//                             funnel.style.top="4%"
//                             setTimeout(function(){
//                                 eburette.style.scale="1"
//                                 burette.style.scale="1"
//                                 funnel.style.left="60%"
//                                 hclsol.style.left="50%"
//                                 hclhalf.style.left="50%"
//                                 burette.style.top="5%"
//                                 eburette.style.top="5%"
//                                 b20.style.top="5%"
//                                 b27.style.top="5%"
//                                 setTimeout(function(){
//                                     funnel.style.top="70%"
//                                     hclsol.style.top="50%"
//                                     hclhalf.style.top="50%"
//                                     funnel.style.rotate="70deg"
//                                     setTimeout(function(){
//                                         pb.style.visibility="visible"
//                                         pc.style.visibility="visible"
//                                         funnel.style.transitionDuration="0s"
//                                         hclhalf.style.transitionDuration="0s"
//                                         funnel.style.visibility="hidden"
//                                         hclhalf.style.visibility="hidden"
//                                         phvari=koh15p
//                                         // phvari2=kohoilp
//                                         f=11
//                                         messcounter=6
//                                         update()
//                                     },1000)
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },500)
//                 },1000)
//             },1000)
//         },1000)
//     }
// }

function pippete1(){
    if(f==1){
        f=2
        epippete.style.rotate="0deg"
        pippete2.style.rotate="0deg"
        epippete.style.transform="translate(0%,-200%)"
        pippete2.style.transform="translate(0%,-200%)"
        setTimeout(function(){
            epippete.style.transform="translate(1200%,-200%)"
            pippete2.style.transform="translate(1200%,-200%)"
            setTimeout(function(){
                epippete.style.transform="translate(1200%,-100%)"
                pippete2.style.transform="translate(1200%,-100%)"
                pippete2.style.visibility="visible"
                setTimeout(function(){
                    epippete.style.opacity="0%"
                    pippete2.style.opacity="100%"
                    kohsol.style.opacity="0%"
                    kohneck.style.opacity="100%"
                    setTimeout(function(){
                        // epippete.style.visibility="hidden"
                        epippete.style.transform="translate(1200%,-200%)"
                        pippete2.style.transform="translate(1200%,-200%)"
                        setTimeout(function(){
                            epippete.style.transform="translate(-780%,-200%)"
                            pippete2.style.transform="translate(-780%,-200%)"
                            setTimeout(function(){
                                epippete.style.transform="translate(-780%,-100%)"
                                pippete2.style.transform="translate(-780%,-100%)"
                                koh15.style.visibility="visible"
                                setTimeout(function(){
                                    epippete.style.opacity="100%"
                                    pippete2.style.opacity="0%"
                                    koh15.style.opacity="100%"
                                    eflask.style.opacity="0%"
                                    setTimeout(function(){
                                        eflask.style.visibility="hidden"
                                        f=3
                                        messcounter=2
                                        update()
                                    },500)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1500)
        
    }
    else if(f==3){
        f=4
        epippete.style.transform="translate(-780%,-200%)"
        pippete2.style.transform="translate(-780%,-200%)"
        setTimeout(function(){
            epippete.style.transform="translate(1200%,-200%)"
            pippete2.style.transform="translate(1200%,-200%)"
            setTimeout(function(){
                epippete.style.transform="translate(1200%,-100%)"
                pippete2.style.transform="translate(1200%,-100%)"
                pippete2.style.visibility="visible"
                setTimeout(function(){
                    epippete.style.opacity="0%"
                    pippete2.style.opacity="100%"
                    kohneck.style.opacity="0%"
                    kohhalf.style.opacity="100%"
                    setTimeout(function(){
                        epippete.style.visibility="hidden"
                        epippete.style.transform="translate(1200%,-200%)"
                        pippete2.style.transform="translate(1200%,-200%)"
                        setTimeout(function(){
                            epippete.style.transform="translate(-130%,-200%)"
                            pippete2.style.transform="translate(-130%,-200%)"
                            setTimeout(function(){
                                epippete.style.transform="translate(-130%,-100%)"
                                pippete2.style.transform="translate(-130%,-100%)"
                                epippete.style.visibility="visible"
                                kohoil.style.visibility="visible"
                                setTimeout(function(){
                                    epippete.style.opacity="100%"
                                    pippete2.style.opacity="0%"
                                    kohoil.style.opacity="100%"
                                    oilsample.style.opacity="0%"
                                    setTimeout(function(){
                                        oilsample.style.visibility="hidden"
                                        pippete2.style.visibility="hidden"
                                        setTimeout(function(){
                                            epippete.style.transform="translate(-130%,-200%)"
                                            pippete2.style.transform="translate(-130%,-200%)"
                                            setTimeout(function(){
                                                epippete.style.transform="translate(300%,-200%)"
                                                pippete2.style.transform="translate(300%,-200%)"
                                                setTimeout(function(){
                                                    epippete.style.transform="translate(-0%,-0%)"
                                                    pippete2.style.transform="translate(-0%,-0%)"
                                                    setTimeout(function(){
                                                        epippete.style.rotate="-90deg"
                                                        f=5
                                                        messcounter=3
                                                        update()
                                                    },1000)
                                                },1000)
                                            },1000)
                                        },1000)
                                    },500)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)    
            },1000)
        },1000)
    }
}