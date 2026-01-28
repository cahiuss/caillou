// function setup() {
//  createCanvas(620, 420);
// }

// function draw() {
  // background(220);
  // for (let i = 0; i<15; i += 1) {
    // for (let j = 0; j<10; j += 1) {
     // if (i!==int((mouseX-10)/40) || j!==int((mouseY-10)/40))
        //  {
         // couleur = color(0,255,0);
         // fill(couleur);
         // rect(40*i+10,40*j+10,40,40);
         // line( 40*i+20,40*j+20,40*i+40,40*j+40);
         // line( 40*i+40,40*j+20,40*i+20,40*j+40);
       //   }
     // else if (j<5) {couleur = color(255,255,0);
           // fill(couleur);
           // rect(40*i+10,40*j+10,40,40);
           // fill(color(0,0,250));
           // rect(40*i+20,40*j+20,20,20);}
     // else if (i<8) {couleur = color(255,255,0);
           // fill(couleur);
           // rect(40*i+10,40*j+10,40,40);
          //  line( 40*i+20,40*j+20,40*i+40,40*j+40);
           // line( 40*i+30,40*j+20,40*i+40,40*j+30);
           // line( 40*i+20,40*j+20,40*i+40,40*j+20);
          //  line( 40*i+40,40*j+20,40*i+40,40*j+40);
           // }
       // else
       //   {
          //  couleur = color(255,0,0);
          //  fill(couleur);
          //  rect(40*i+10,40*j+10,40,40);
          //  fill(color(0,0,250));
          //  circle(40*i+30,40*j+30,20);
          // }
        //  }
    //  }
      
      
//}

let dropdown;
let selectedCity;

function setup() {
  createCanvas(400, 400);
  
  // creates an HTML checkbox with the text 'draw circle' next
  // to it, initially unchecked (false)
  dropdown = createSelect();
  
  // this option will show initially, but can't be chosen
  dropdown.option('-- choose a city --');
  dropdown.disable('-- choose a city --');
  dropdown.selected('-- choose a city --');
  
  // other options
  dropdown.option('Denver');
  dropdown.option('Chicago');
  dropdown.option('Los Angeles');

  // call this function when the item in the dropdown changes
  dropdown.changed(citySelectedEvent);
}

function citySelectedEvent() {
  selectedCity = dropdown.value();
  
  // update other variables too
}

function draw() {
  background(255);
  
  if (!selectedCity) {
    // selectedCity is initially undefined, so this only
    // shows up when the sketch first starts and user has yet
    // to select an option.
    text("Please select a city (below)", 50, 100);
  } else {
    // show the selection
    text("Looking at data for " + selectedCity, 50, 100);
  }

}

