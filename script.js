//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button, a2Button, a3Button;
let a4Button,a5Button;
let b1Button;
//let b2Button,b3Button,b4Button;
let c1Button, c2Button;
// let c3Button,c4Button;
let d1Button, d2Button;
let e1, e2, e3;
// let e1Button,e2Button,e3Button,e4Button,e5Button,e6Button,e7Button,e8Button,e9Button,e10Button,e11Button,e12Button,e13Button,e14Button, e15Button,e16Button,e17Button,e18Button,e19Button,e20Button,e21Button, e22Button,e23Button,e24Button,e25Button;
// let f1Button,f2Button,f3Button;
let screen = 0;
let checks = 0;
let circles = 0;
let triangles = 0;
let xs = 0;
let font;
let bg;

function preload() {
  font = loadFont('assets/survivant.ttf');
	//home = loadFont('assets/logo.jpg');
  bg = loadImage("assets/islands.jpg");
	bg00 = loadImage("assets/logo.jpg");
	bgJeff = loadImage("assets/jeffProbst.jpg");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(650, 400);
  textAlign(CENTER);
  textSize(18);
  noStroke();
  textFont(font);
	fill(0);
	//textColor('white');

  // Set up the home screen
  background(bg00);

  // Create buttons for all screens
  enterButton = new Sprite(width/2-175, height/2+100);
  a1Button = new Sprite(width/2, -200);
  a2Button = new Sprite(width/2, -50);
  a3Button = new Sprite(width/2, -250);
	a4Button = new Sprite (width/2+175, height/2+100);
	a5Button = new Sprite (2150, 600);
  b1Button = new Sprite(width/2, -100);
	// b2Button = new Sprite (-250,-200);
	// b3Button = new Sprite (-300, -300);
	// b4Button = new Sprite (-350, -300);
  c1Button = new Sprite(width/2, -300);
  c2Button = new Sprite(width/2, -150);
	// c3Button = new Sprite (-800, -100);
	// c4Button = new Sprite (-850, -800);
  d1Button = new Sprite(width/2, -350);
  d2Button = new Sprite(width/2, -400);
  e1 = new Sprite(width/2, -450);
  e2 = new Sprite(width/2, -500);
	e3 = new Sprite(width/2, -550);
	// e1Button = new Sprite(-550,-500);
	// e2Button = new Sprite (-600,-600);
	// e3Button = new Sprite(-900,-500);
	// e4Button = new Sprite (-950,-600);
	// e5Button = new Sprite(-1000,-500);
	// e6Button = new Sprite (-1050,-600);
	// e7Button = new Sprite(-1100,-500);
	// e8Button = new Sprite (-1150,-600);
	// e9Button = new Sprite (-1200,-600);
	// e10Button = new Sprite(-1250,-500);
 //  e11Button = new Sprite (-1300,-600);
 //  e12Button = new Sprite (-1350,-600);
 //  e13Button = new Sprite(-1400,-500);
 //  e14Button = new Sprite (-1450,-600);
 //  e15Button = new Sprite (-1500,-600);
 //  e16Button = new Sprite(-1650,-500);
 //  e17Button = new Sprite (-1700,-600);
 //  e18Button = new Sprite(-1750,-500);
 //  e19Button = new Sprite (-1800,-600);
 //  e20Button = new Sprite (-1850,-600);
 //  e21Button = new Sprite(-1900,-500);
 //  e22Button = new Sprite (-1950,-600);
 //  e23Button = new Sprite (-2000,-600);
 //  e24Button = new Sprite(-2050,-500);
 //  e25Button = new Sprite (-2100,-600);
 //  f1Button = new Sprite(-650,-600);
 //  f2Button = new Sprite (-700,-700);
 //  f3Button = new Sprite (-750, -700);
}

/* DRAW LOOP REPEATS */
function draw() {
  fill(0);
  // Display enter button
  enterButton.w = 150;
  enterButton.h = 75;
  enterButton.collider = 'k';
	enterButton.textColor = 'white';
  enterButton.color = 'orange';
  enterButton.textSize = 20;
  enterButton.text = 'START';

	// a4Button
	a4Button.textColor = 'white';
  a4Button.text='How to Play';
  a4Button.w=150;
  a4Button.height=75;
  a4Button.collider='k';
	a4Button.textSize = 20;
  a4Button.color='orange';
	
  // Check enter button
  if(enterButton.mouse.presses()){
    print("pressed");
    showScreen0();
  }
	if(a4Button.mouse.presses()) {
		print("pressed");
		howToPlay();
	}
  
  if(screen==0&&b1Button.mouse.presses()){
    print("pressed");
    showScreen1();
    screen = 1;
  } else if (a4Button.mouse.presses()){
        print('a4 to screen30');
        // set up screen one
        
        // screen number
        screen = 30;
    }

  if(e2.mouse.presses()){
    print("pressed");
    e1.y = -450;
    e2.y = -500;
    showScreen0();
    screen = 0;
  }

	

  if(screen == 1){
    if(a1Button.mouse.presses()){
      print("Display screen 2.1");
      showScreen21();
      screen = 21;
    }else if(a2Button.mouse.presses()){
      print("Display screen 2.2");
      showScreen22();
      screen = 22;
    }else if(a3Button.mouse.presses()){
      print("Display screen 2.3");
      showScreen23();
      screen = 23;
    }
  }

  if((screen == 21 || screen == 22 || screen == 23) && b1Button.mouse.presses()){
    print("Display screen 3");
    showScreen3();
    screen = 3;
  }

  if(screen == 3){
    if(c1Button.mouse.presses()){
      print("Display screen 3.1");
      showScreen31();
      screen = 31;
    }else if(c2Button.mouse.presses()){
      print("Display screen 3.2");
      showScreen32();
      screen = 32;
    }
  }

  if((screen == 31 || screen == 32) && b1Button.mouse.presses()){
    print("Display screen 4");
    showScreen4();
    screen = 4;
  }

  if(screen == 4 && b1Button.mouse.presses()){
    print("Display screen 5");
    showScreen5();
    screen = 5;
  }

  if(screen == 5 && b1Button.mouse.presses()){
    print("Display screen 6");
    showScreen6();
    screen = 6;
  }

  if(screen == 6 && b1Button.mouse.presses()){
    print("Display screen 6.0");
    showScreen60();
    screen = 60;
  }
    
  if(screen == 60){
    if(d1Button.mouse.presses()){
      print("Display screen 7");
      showScreen7();
      screen = 7;
    }else if(d2Button.mouse.presses()){
      if(circles+checks>=2){
        print("Display screen 6.1");
        showScreen61();
        screen = 61;
      }else{
        print("Display screen 6.2");
        showScreen62();
        screen = 62;
      }
    }
  }

  if((screen == 61||screen == 62) && b1Button.mouse.presses()){
    print("Display screen 7");
    showScreen7();
    screen = 7;
  }

  if(screen == 7){
    if(d1Button.mouse.presses()){
      print("Display screen 7.1");
      showScreen71();
      screen = 71;
    }else if(d2Button.mouse.presses()){
      print("Display screen 8A");
      showScreen8A();
      screen = 81;
    }
  }
  
  if(screen == 81){
    if(b1Button.mouse.presses()){
      if(circles+checks>=4){
        print("Display screen 8B");
        showScreen8B();
        screen = 82;
      }else{
        print("Display screen 8A1");
        showScreen8A1();
        screen = 811;
      }
    }
  }

  if((screen == 71||screen == 82) && b1Button.mouse.presses()){
    print("Display screen 9");
    showScreen9();
    screen = 9;
  }

  if(screen == 9 && b1Button.mouse.presses()){
    let end = circles+checks-triangles-xs;
    if(end>=5){
      print("Display screen 9A");
      showScreen9A();
      screen = 91;
    }else if(end>=2){
      print("Display screen 9B");
      showScreen9B();
      screen = 92;
    }else{
      print("Display screen 9C");
      showScreen9C();
      screen = 93;
    }
  }
  
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen0(){
  background(bg);
	stroke(255,255,255);
  text("Jeff Probst: ", width/2, height/2 - 150);
  text( " Welcome to Survivor! \nThe reality TV show focused on outwitting, outplaying,\n and outlasting your fellow competitors.\nYou will engages in challenges with them,\n all in a fight to win the million dollars.\n I am your host for this game, and as such,\n I have taken the liberty of dividing all of you into 3 teams:\n Team Jeremiah, Team Conrad, and Team Cam Cameron.", width/2, height/2 - 100);

  // Create buttons for all screens
  enterButton.pos = {x: 0, y: -700};
	a4Button.pos = {x: 0, y: -800};
  b1Button.pos = {x: width/2, y: height/2+100};
  b1Button.w = 520;
  b1Button.h = 50;
  b1Button.collider = 'k';
	b1Button.textColor = 'white';
  b1Button.color = 'teal';
  b1Button.text = 'Continue';
}

function showScreen1(){
  background(bg);
  text("Pick your team now: ",
       width/2, height/2-170);
  b1Button.pos = {x: width/2, y: -100};
  
  // Add A1 button
  a1Button.pos = {x: width/2, y: height/2 + 30};
  a1Button.w = 520;
  a1Button.h = 50;
  a1Button.collider = 'k';
	a1Button.textColor = 'white';
  a1Button.color = 'plum';
  a1Button.text = 'Team Jeremiah';

  // Add A2 button
  a2Button.pos = {x: width/2, y: height/2 + 95};
  a2Button.w = 520;
  a2Button.h = 50;
  a2Button.collider = 'k';
	a2Button.textColor = 'white';
  a2Button.color = 'plum';
  a2Button.text = 'Team Conrad';
  
  a3Button.pos = {x: width/2, y: height/2 + 160};
  a3Button.w = 520;
  a3Button.h = 50;
  a3Button.collider = 'k';
	a3Button.textColor = 'white';
  a3Button.color = 'teal';
  a3Button.text = 'Team Cam Cameron';
}

function showScreen21(){
  background(bg);
  text("(Team Jelly!)",
     width/2, height/2-100);
  
  a1Button.pos = {x: width/2, y: -200};
  a2Button.pos = {x: width/2, y: -50};
  a3Button.pos = {x: width/2, y: -250};

  // Add B1 button
  b1Button.pos = {x: width/2, y: height/2};
	b1Button.textColor = 'white';
  b1Button.color = 'hsla(160, 100%, 50%, 0.5)';
}

function showScreen22(){
  background(bg);
  text("(Bonrad is ew.)",
     width/2, height/2-100);
  
  a1Button.pos = {x: width/2, y: -200};
  a2Button.pos = {x: width/2, y: -50};
  a3Button.pos = {x: width/2, y: -250};

  // Add B1 button
  b1Button.pos = {x: width/2, y: height/2};
  b1Button.w = 520;
  b1Button.h = 50;
  b1Button.collider = 'k';
	b1Button.textColor = 'white';
  b1Button.color = 'hsla(160, 100%, 50%, 0.5)';
  b1Button.text = 'Continue';
}

function showScreen23(){
  background(bg);
  text("(Cam Cameron is way too good for anyone on the show!)",
     width/2, height/2-100);
  
  a1Button.pos = {x: width/2, y: -200};
  a2Button.pos = {x: width/2, y: -50};
  a3Button.pos = {x: width/2, y: -250};

  circles++;

  // Add B1 button
  b1Button.pos = {x: width/2, y: height/2+100};
  b1Button.w = 520;
  b1Button.h = 50;
  b1Button.collider = 'k';
	b1Button.textColor = 'white';
  b1Button.color = 'hsla(160, 100%, 50%, 0.5)';
  b1Button.text = 'Continue';
}

function showScreen3(){
  background(bg);
  text("Chapter 1: Castaway Arrival\nAs you step off the boat onto a remote island,\n you're greeted by a diverse group of castaways.\n Your first choice sets the tone:\n Do you forge alliances immediately\n or focus on survival skills?\n Will you make friends or enemies\n in these crucial early days?",
     width/2, height/2 - 180);

  b1Button.pos = {x: width/2, y: -100};

  // Add C1 button
  c1Button.pos = {x: width/2, y: height/2 + 40};
  c1Button.w = 520;
  c1Button.h = 50;
  c1Button.collider = 'k';
	c1Button.textColor = 'white';
  c1Button.color = 'teal';
  c1Button.text = '1.  Focus on Survival Skills';

  // Add C2 button
  c2Button.pos = {x: width/2, y: height/2 + 120};
  c2Button.w = 520;
  c2Button.h = 50;
  c2Button.collider = 'k';
	c2Button.textColor = 'white';
  c2Button.color = 'teal';
  c2Button.text = '2. Fous on building alliances';
}

function showScreen31(){
  background(bg);
  text("While you excel in survival skills,\n you struggle to build alliances.\n The lack of social connections leads\n to your isolation, making you an easy target.\nYour tribe loses consecutive challenges,\n so you have a gigantic target on your back.",
     width/2, height/2-100);
  
  c1Button.pos = {x: width/2, y: -300};
  c2Button.pos = {x: width/2, y: -150};

  triangles++;

  // Add B1 button
  b1Button.pos = {x: width/2, y: height/2+50};
}

function showScreen32(){
  background(bg);
  text("You form strong alliances with key players,\n setting a solid foundation for your game.\n Your tribe is set to dominate challenges\n and strategically eliminate threats.",
     width/2, height/2-150);
  
  c1Button.pos = {x: width/2, y: -300};
  c2Button.pos = {x: width/2, y: -150};

  circles +=2;
  checks += 2;

  // Add B1 button
  b1Button.pos = {x: width/2, y: height/2 + 150};
  b1Button.w = 520;
  b1Button.h = 50;
  b1Button.collider = 'k';
	b1Button.textColor = 'white';
  b1Button.color = 'hsla(160, 100%, 50%, 0.5)';
  b1Button.text = 'Continue';
}
//Bugged - Doesn't show up
function showScreen4(){
  background(bg);
  text("Throwback to...\nThe Hiden Advantages\n",
     width/2, height/2-100);

  xs += 3;
	b1Button.textColor = 'white';
  b1Button.color = 'lavender';
  b1Button.pos = {x: width/2, y: height/2 + 125};
}

function showScreen5(){
  background(bg);
  text("Throwback to...\nThe Immunity Challenge",
     width/2, height/2-100);
  b1Button.textColor = 'white';
  b1Button.color = 'hsla(160, 100%, 50%, 0.5)';
  b1Button.y = height/2 + 140;
}

function showScreen6(){
  background(bg);
  text("Throwback to...\nThe Merge and Betrayal\n ",
     width/2, height/2-150);
  b1Button.textColor = 'white';
  b1Button.color = 'teal';
}

function showScreen60(){
  background(bg);
  text("Chapter 2: The Hunt for Resources\n\nWith limited supplies, you must explore the island\n to gather food, water, and building materials.\n Choose your approach carefully: Will you\n join a group hunt, or search alone?",
     width/2, height/2-120);
  b1Button.pos = {x: width/2, y: -100};
  // Add D1 Button
  d1Button.pos = {x: width/2, y: height/2 + 30};
  d1Button.w = 520;
  d1Button.h = 50;
  d1Button.collider = 'k';
	d1Button.textColor = 'white';
  d1Button.color = 'teal';
  d1Button.text = '1: Search Alone';
  
  // Add D2 Button
  d2Button.pos = {x: width/2, y: height/2 + 95};
  d2Button.w = 520;
  d2Button.h = 50;
  d2Button.collider = 'k';
	d2Button.textColor = 'white';
  d2Button.color = 'teal';
  d2Button.text = '2: Join a group hunt';
  
  //a3Button.pos = {x: width/2, y: height/2 + 160};

}

function showScreen61(){
  background(bg);
  text("Your resourcefulness shines as you find food that proves\n essential for your tribe's survival.\n Your skills earn the respect \nof your fellow castaways,\n boosting your social standing.\n This strategic move pays\n off in the long run.\n",
     width/2, height/2-170);

  d1Button.w = 50;
  d1Button.x = -350;
  d2Button.w = 50;
  d2Button.x = -400;

  checks++;
  b1Button.textColor = 'white';
  b1Button.color = 'hsla(160, 100%, 50%, 0.5)';
  b1Button.y = height/2 + 60;
}

function showScreen62(){
  background(bg);
  text("Your resourcefulness shines as you find food that proves\n essential for your tribe's survival.\n Your skills earn the respect \nof your fellow castaways,\n boosting your social standing.\n This strategic move pays\n off in the long run.\n",
     width/2, height/2-170);

  d1Button.w = 50;
  d1Button.x = -350;
  d2Button.w = 50;
  d2Button.x = -400;
  b1Button.textColor = 'white';
  b1Button.color = 'hsla(160, 100%, 50%, 0.5)';
  b1Button.y = height/2 + 10;
}

function showScreen7(){
  background(bg);
  text("As the Final Tribal Council approaches,\n reflect on your journey.\n Your decisions have led you to this moment.\n Will you convince the jury of your strategic gameplay\n or rely on your personal connections?\n",
     width/2, height/2-100);

  b1Button.y = -100;

  // Add D1 Button
  d1Button.pos = {x: width/2, y: height/2 + 20};
  d1Button.w = 510;
  d1Button.h = 50;
  d1Button.collider = 'k';
	d1Button.textColor = 'white';
  d1Button.color = 'teal';
  d1Button.text = '1: Personal Connection';
  
  // Add D2 Button
  d2Button.pos = {x: width/2, y: height/2 + 110};
  d2Button.w = 510;
  d2Button.h = 50;
  d2Button.collider = 'k';
	d2Button.textColor = 'white';
  d2Button.color = 'teal';
  d2Button.text = '2: Strategic Speech';
}

function showScreen71(){
  background(bg);

  d1Button.y = -350;
  d2Button.y = -400;

  checks +=2;
	b1Button.textColor = 'white';
  b1Button.color = 'green';
  if(circles >= 3){
    text("Relying solely on personal connections\n fails to convince the jury\n of your gameplay prowess.\n They see you as a passive player\n and are planning on awarding the title\n to a more strategic competitor.\n",
     width/2, height/2-100);
    
    circles++;
    checks++;
    b1Button.y = height/2 + 60;
  }else{
    text("Searching alone leads you to exhaust\n yourself without significant gains.\n Your tribe questions your contribution,\n putting your position in jeopardy.\n You narrowly survive the next few Tribal Councils.\n but are in a weakened state.",
     width/2, height/2-140);
    b1Button.y = height/2 + 30;
  }
}


function showScreen8A(){
  background(bg);
  text("Your strategic speech impresses the jury,\n highlighting your gameplay and moves.\n They appreciate your transparency.",
     width/2, height/2-100);

  d1Button.y = -350;
  d2Button.y = -400;
  
  b1Button.color = 'lightgreen';
	b1Button.textColor = 'white';
  b1Button.pos = {x: width/2, y: height/2 + 75};
}
//Bugged - Doesn't Show up
function showScreen8A1(){
  background(bg);
  text("Bad Ending!\n\n You get bitten by a parasitic insect\n only to be med evaced on the last day\n and get hospitalized. Your family\n is thrust into debt instead of out of it.",
     width/2, height/2-50);

  b1Button.y = -100;
  
  e1.color = 'lightgreen';
	e1.textColor = 'white';
  e1.pos = {x: width/2, y: height/2 + 80};
  e1.w = 520;
  e1.h = 50;
  e1.collider = 'k';
  e1.text = "THE END";
}

function showScreen8B(){
  background(bg);
  text("Someone insults your weird looking toes\n",
     width/2, height/2-120);

  xs++;
  b1Button.textColor = 'white';
  b1Button.color = 'green';
  b1Button.pos = {x: width/2, y: height/2 + 130};
}

function showScreen9(){
  background(bg);
  text("9. The Prophecy", width/2, height/2 - 130);
  text("You learned alot from Survivor\n Especially from the dragon slayer.\n You conclude it was a good experience.", width/2, height/2 - 80);
  b1Button.textColor = 'white';
  b1Button.color = 'teal';
  b1Button.pos = {x: width/2, y: height/2 + 100};
  b1Button.w = 520;
  b1Button.h = 50;
  b1Button.collider = 'k';
	b1Button.textColor = 'white';
  b1Button.text = 'Continue';
}

function showScreen9A(){
  background(bgJeff);
  text("Your decisions shaped your Survivor journey.\n The good endings reflect your mastery of alliances,\n challenges, and strategy, while the bad endings\n highlight missed opportunities and flawed gameplay.\n Replay the game to uncover different paths and\n outcomes, and prove yourself as the\n ultimate Survivor in\n\n Survivor: Island Quest..", width/2, height/2 - 100);
  
  b1Button.y = -100;

  //Add E1 Button
  e1.color = 'plum';
  e1.pos = {x: width/2, y: height/2 + 70};
  e1.w = 520;
  e1.h = 50;
  e1.collider = 'k';
	e1.textColor = 'white';
  e1.text = "THE END";

  //Add E2 Button
	e2.textColor = 'white';
  e2.pos = {x: width/2, y: height/2 + 130};
  e2.w = 520;
  e2.h = 50;
  e2.collider = 'k';
	e2.textColor = 'white';
  e2.text = "REPLAY";
	
}

function showScreen9B(){
  background(bgJeff);
  text("Your decisions shaped your Survivor journey.\n The good endings reflect your mastery of alliances,\n challenges, and strategy, while the bad endings\n highlight missed opportunities and flawed gameplay.\n Replay the game to uncover different paths and\n outcomes, and prove yourself as the\n ultimate Survivor in\n\n Survivor: Island Quest..", width/2, height/2 - 100);
  
  b1Button.y = -100;

  //Add E1 Button
  e1.color = 'plum';
  e1.pos = {x: width/2, y: height/2 + 60};
  e1.w = 520;
  e1.h = 50;
  e1.collider = 'k';
  e1.text = "THE END";
	e1.textColor = 'white';
  e1.color = 'plum';

  //Add E2 Button
  e2.pos = {x: width/2, y: height/2 + 130};
  e2.w = 520;
  e2.h = 50;
  e2.collider = 'k';
	e2.textColor = 'white';
  e2.text = "REPLAY";
}

function showScreen9C(){
  background(bgJeff);
  text("You have failed a ton dude!\n Jeff Probst hates your tribal council responses too,\n and laughs when you get kicked out.\n You get bullied on national television\n and future employers refuse to hire you!\n", width/2, height/2 - 100);
  
  b1Button.y = -100;

  //Add E1 Button
  e1.color = 'plum';
  e1.pos = {x: width/2, y: height/2 + 60};
  e1.w = 520;
  e1.h = 50;
  e1.collider = 'k';
	e1.textColor = 'white';
  e1.text = "THE END";

  //Add E2 Button
  e2.pos = {x: width/2, y: height/2 + 130};
  e2.w = 520;
  e2.h = 50;
  e2.collider = 'k';
	e2.textColor = 'white';
  e2.text = "REPLAY";
}

// How to Play
function howToPlay(){
   background(bg);
    text(
    "Prepare to embark on an exciting fusion of a\n Choose Your Own Adventure (CYOA) experience.\n Your task is to shape your journey by\n selecting specific paths through  buttons.\n Clicking the buttons will reveal the corresponding paths,\n guiding you through the narrative's twists and turns.\n Are you set? Let the adventure commence!\n",
    width / 2, height/2-100
  );
   // Button postion 
  enterButton.pos={x: -100, y: -100}
    a2Button.pos={x: -100, y: -100}
      a3Button.pos={x: -100, y: -100}
      a4Button.pos={x: -100, y: -100}

	//Add E2 Button
e2.pos = {x: width/2, y: height/2 + 130};
  e2.w = 520;
  e2.h = 50;
  e2.collider = 'k';
	e2.textColor = 'white';
  e2.text = "START";
}