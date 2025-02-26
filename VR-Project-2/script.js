let rnd = (l, u) => Math.random() * (u - l) + l
let scene, camera, ball;
let settings = ["egypt", "flat", "forest", "goaland", "yavapai", "goldmine", "poison", "japan", "tron"];
let world;
let obstacles = ["dodecahedron", "cylinder", "octahedron"];
let health = 100, t = 60, Time, hit = 0, healthText;
window.onload = function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  world = document.getElementById("world");
  Time = document.getElementById("Time");
  healthText = document.getElementById("Health");
  console.log(healthText);
  score = document.getElementById("score");

  



  world.setAttribute("environment", { preset: settings[Math.floor(Math.random() * settings.length)] });

  ball = new Ball();

  for (let i = 0; i < 40; i++) {
    let s = document.createElement("a-sphere");
    s.addEventListener("click", function() {
      this.remove();
      hit++;
      score.setAttribute("value", `score: ${hit}`);
      
    })
    s.setAttribute("position",{x:rnd(-10,20), y:rnd(1,5), z:rnd(-10,10)});
    scene.append(s);
  }

  for (let z = 240; z > 20; z -= 15) {
    let x = rnd(-3, 3);
    let pz = z + rnd(-5, 5);
  }
  /* 
     Shoot the ball when the user presses the space bar.
     Hint: Look at the class. Investigate the key value returned
     when the space bar is pressed.
  */
  window.addEventListener("keydown", function(e) {
    console.log(e.key)
    let x = camera.object3D.position.x;
    let z = camera.object3D.position.z;
    if (e.key == " ") {
      ball.shoot(x, z);
    }
  })


  loop();
  setTimeout(countdown, 1000);

}

/* 
   Display Health and how much health lose.
*/

/*
function countdown() {
  Time.setAttribute("value", `Time: ${t}`);
  if (t > 0) {
    t--;
  } else {
    health -= 5;
  }


  if (health > 0) {
    healthText.setAttribute("value", `Health: ${health}`);
    setTimeout(countdown, 1000);
  } else {
    results();
  }
}
*/ 

function countdown() {
  Time.setAttribute("value", `Time: ${t}`);
  if (t > 0) {
    t--;
  } else {
    health -= 5;
    results();
  }


  if (health > 0) {
    healthText.setAttribute("value", `Health: ${health}`);
    setTimeout(countdown, 1000);
    results();
  } else{
    results();
  }
}

function loop() {
  ball.move();


  /*
  for (let bug of bugs) {
    bug.walk();
    let d1 = distance(ball.obj, bug.obj);
    let d2 = distance(camera, bug.obj);
    if (d1 < 1) {
      ball.fire = false;
      bug.die();
    }

    if (d2 < 2) {
      bug.attack();

    }

  }

  *




  /* Challenge 3: Working with the Alien
     1) Make all the Aliens walk
     2) If the ball collides with an Alien ( use a threshold of 1)
           - Set the fire variable of the ball to false
           - Alien dies. Hint: Look at the class
     3) If we collide with the Alien (use a threshold of 2)
     then the alien will attack.  Hint: Look a the class.  
  */
  /*
  for (let monster of monsters) {
    monster.walk();
    let d1 = distance(ball.obj, bug.obj);
    let d2 = distance(camera, bug.obj);
    if (d1 < 1) {
      ball.fire = false;
      bug.die();
    }

    if (d2 < 2) {
      bug.attack();

    }

  }

  


  /* Challenge 4
     Make all the gems float. Hint: Look a the class.

  */





  // let health = 100; // Initialize health to 100
  // if (health > 0) {
  //   window.requestAnimationFrame(loop);
  // } else {
  //   results();
  // }




  // let score = document.querySelector("a-text[value='#Score:']");
  // if (score > 0) {
  //   window.requestAnimationFrame(loop);
  // } else {
  //   results();
  // }



}

function results() {
  /* Challenge 8
     Display the appropriate image depending on whether the user
     won (gathered 10 gems) or lost (health drops to 0 or less)
  */
  /* Challenge 8
     Display the appropriate image depending on whether the user
     won (gathered 10 gems) or lost (health drops to 0 or less)
  */

  let gameOver = document.querySelector(`#gameOver`);
  gameOver.setAttribute(`opacity`, 1); // Make the gameOver screen visible
  let missionComplete = document.querySelector(`#missionComplete`);

  if (health > 0) { // Add the missing if statement
    missionComplete.setAttribute(`opacity`, 1);
  } else{ // This else is now correctly paired with the if statement
    gameOver.setAttribute(`opacity`, 1);
  }
}

/*
   Distance formula.
*/

function distance(obj1, obj2) {
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
  return d;
}