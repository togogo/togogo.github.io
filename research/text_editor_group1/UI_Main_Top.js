/*

*

* V A R I A B L E S

*

*/

//Top ... Document Title
let docTitle = 'Untitled'; 
let docTitleX = 270;
let docTitleY = 62;

//Top ... Hairline
let topHairlineX1 = 270;
let topHairlineY1 = 80;
let topHairlineX2;
let topHairlineY2 = 80; 

//Top ... Gen Button
let genButton;
let genBtnCopy = 'Generate from Selected Text';
let genBtnX;
let genBtnY = 35;

//logo of application
let logo;
let logoPerc = 0.2;//size of logo in percentage
let logoX = 270;
let logoY = 5;

/*

*

* S E T U P  

*

*/

function setupTop(){
  //define button
  genButton = createButton(genBtnCopy);
  genButton.position(genBtnX, genBtnY);
  genButton.mousePressed(genBtnPressed);//generate using the selected text when pressed
  genButton.id('button');//give id to button
  
  topHairlineX2 = windowWidth - 20;//need to write here because using windowWidth
  
  //load logo img
}

/*

*

* D R A W I N G   F U N C T I O N

*

*/


function drawTop(){
  
  //Top ... Document Title
  textFont(roboto);
  textSize(h1);
  fill(txt);
  text(docTitle, docTitleX, docTitleY);
  
  //Top ... Hairline
  topHairlineX2 = windowWidth - 20;//need to write here because using windowWidth
  stroke(hl2);
  strokeWeight(hlWeight);
  line(topHairlineX1, topHairlineY1, topHairlineX2, topHairlineY2);
  
  //Top ... Button
  genBtnX = windowWidth - 255;//need to write here because using windowWidth
  genButton.position(genBtnX, genBtnY);
  
  //Top ... Logo
  image(logo, logoX, logoY, logo.width*logoPerc, logo.height*logoPerc);

}
