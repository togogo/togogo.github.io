/*

*

* V A R I A B L E S

*

*/


//Sidebar ... Overall
let sideBarWidth = 250;
let sideBarOriginX = 0;
let sideBarOriginY = 0;

//Sidebar ... Models Icon
let modelIcnOriginX = 19;
let modelIcnOriginY = 43;
let modelTxtOriginX = 55;
let modelTxtOriginY = 65;

//Sidebar ... Indiviaul Icons
let mdl1IcnX = 24;
let mdl1IcnY = 100;
let mdl2IcnX = 24;
let mdl2IcnY = 135;
let mdl3IcnX = 24;
let mdl3IcnY = 170;

let mdl1TxtX = 55;
let mdl1TxtY = 115;
let mdl2TxtX = 55;
let mdl2TxtY = 150;
let mdl3TxtX = 55;
let mdl3TxtY = 185;

//Sidebar...hairline
let sidebarHairlineX1 = 19;
let sidebarHairlineY1 = 300;
let sidebarHairlineX2 = 231;
let sidebarHairlineY2 = 300;

//Sidebar ... Settings Icon
let settingIcnX = 19;
let settingIcnY = 320;
let settingTxtX = 55;
let settingTxtY = 342;

//Sidebar ... Settings SubSlijiojio
let settingSubTxtX = 19;
let settingSubTxtY = 370;
let settingSubValX = 220;
let settingSubValY = 370; 

//Sidebar ... Settings Temp Sub
let settingTempTxtX = 19; 
let settingTempTxtY = 430;
let settingTempValX = 210;
let settingTempValY = 430;

//Sidebar ... Settings Slider
let settingSlider;
let settingSliderMin = 0;
let settingSliderMax = 300;
let settingSliderDefault  = 50;
let settingSliderX = 17;
let settingSliderY = 390;
let settingSliderWidth = '210px';
let settingSliderId = 'genLengthSlider';

//Sidebar ... Temperature Slider
let settingTempSlider;
let settingTempSliderMin = 0;
let settingTempSliderMax = 100;
let settingTempSliderDefault = 50;
let settingTempSliderX = 17;
let settingTempSliderY = 450;
let settingTempSliderWidth = settingSliderWidth;
let settingTempSliderId = 'genTempSlider';

//Sidebar ... icon size
let icnSize = 30;//icon size for models/settings icon
let mdlIcnSize = 20;//icon size for individual icons

//Sidebar ... icons
let modelIcn;
let settingIcn;
let mdl1Icn;//first model icon...temp
let mdl2Icn;//second model icon ...temp 
let mdl3Icn;//third model icon ...temp
let testingIcn;

//Sidebar ... copy
let modelCopy = 'Models';
let settingCopy = 'Settings';
let settingSubCopy = 'Generation Length';
let settingTempCopy = 'Temperature';
let mdl1Copy = 'Model 1';
let mdl2Copy = 'Model 2';
let mdl3Copy = 'Model 3';

//Sidebar...hairline
let sidebar2HairlineX1 = 19;
let sidebar2HairlineY1 = 550;
let sidebar2HairlineX2 = 231;
let sidebar2HairlineY2 = 550;

//Sidebar ... testing option
let testingCopy = 'User Testing';
let testingIcnX = 19;
let testingIcnY = 570;
let testingCopyX = 55;
let testingCopyY = 592;
let testStartStopButton;
let testBtnCopy1 = 'Start';
let testBtnCopy2 = 'Done';

let testBtnX = 19;
let testBtnY = 620;

//let defaultTimer = 15*60;//15 min in seconds
//let count = 15*60;//15 min in seconds
let count = 15;//for debugging purposes
let defaultTimer = 15;
let counter;
let timerX = 195;
let timerY = 640;
let timerCountdown = false;



/*

*

* S E T U P  

*

*/

function setupSideBar(){
  //define slider: generation length
  settingSlider = createSlider(settingSliderMin, settingSliderMax, settingSliderDefault);
  settingSlider.position(settingSliderX, settingSliderY);
  settingSlider.style('width', settingSliderWidth);
  settingSlider.id(settingSliderId);//give id to slider
  
  //define slider: generation temperature
  settingTempSlider = createSlider(settingTempSliderMin, settingTempSliderMax, settingTempSliderDefault);
  settingTempSlider.position(settingTempSliderX, settingTempSliderY);
  settingTempSlider.style('width', settingTempSliderWidth);
  settingTempSlider.id(settingTempSliderId);//give id to slider
  
  //define test start/finish button
  testStartStopButton = createButton(testBtnCopy1);
  testStartStopButton.position(testBtnX, testBtnY);
  //testStartStopButton.style('width', 200);
  testStartStopButton.mousePressed(testBtnPressed);
  testStartStopButton.id('button');
}


/*

*

* D R A W I N G   F U N C T I O N

*

*/


function drawSideBar(){
  
  //overall panel
  fill(panel);
  noStroke();
  rect(sideBarOriginX, sideBarOriginY, sideBarWidth, windowHeight);
  
  //Models Section ... Section Top Icon
  image(modelIcn, modelIcnOriginX, modelIcnOriginY, icnSize, icnSize);
  textFont(roboto);
  textSize(h2);
  fill(txt);
  text(modelCopy, modelTxtOriginX, modelTxtOriginY);
  
  //Models section ... Individual Icons
  image(mdl1Icn, mdl1IcnX, mdl1IcnY, mdlIcnSize, mdlIcnSize);
  image(mdl2Icn, mdl2IcnX, mdl2IcnY, mdlIcnSize, mdlIcnSize);
  image(mdl3Icn, mdl3IcnX, mdl3IcnY, mdlIcnSize, mdlIcnSize);
  
  textFont(roboto);
  textSize(h3);
  fill(txt);
  text(mdl1Copy, mdl1TxtX, mdl1TxtY);
  text(mdl2Copy, mdl2TxtX, mdl2TxtY);
  text(mdl3Copy, mdl3TxtX, mdl3TxtY);
  
  //hairline
  stroke(hl1);
  strokeWeight(hlWeight);
  line(sidebarHairlineX1, sidebarHairlineY1, sidebarHairlineX2, sidebarHairlineY2);
  
  //Settings Section ... Section Top Icon
  image(settingIcn, settingIcnX, settingIcnY, icnSize, icnSize);
  textFont(roboto);
  textSize(h2);
  fill(txt);
  text(settingCopy, settingTxtX, settingTxtY);
  
  //Settings Section ... Sub
  textFont(roboto);
  textSize(h3);
  fill(txt);
  text(settingSubCopy, settingSubTxtX, settingSubTxtY);
  text(settingSlider.value(), settingSubValX, settingSubValY);
  
  //Settting Section ... Temperature
  textFont(roboto);
  textSize(h3);
  fill(txt);
  text(settingTempCopy, settingTempTxtX, settingTempTxtY);
  let = showTempVal = settingTempSlider.value()/100;
  text(showTempVal.toFixed(2), settingTempValX, settingTempValY);
  
  //User test section
  userTestSection();
  
 
}



function userTestSection(){
  
  //if the showTest thing is valid...
 
  if(mainParams.showTest == true){
    
  //User Test Section hairline + icn + copy + time
  
  //show button
  testStartStopButton.show();
  
  //hairline
  stroke(hl1);
  strokeWeight(hlWeight);
  line(sidebar2HairlineX1, sidebar2HairlineY1, sidebar2HairlineX2, sidebar2HairlineY2);
  
  //icn
  image(testingIcn, testingIcnX, testingIcnY, icnSize, icnSize);
  
  //copy
  textFont(roboto);
  textSize(h2);
  fill(txt);
  text(testingCopy, testingCopyX, testingCopyY);
  
  //countdowntime
  textSize(15);
  let m = count/60|0; 
  text(m + ":" + leftPad(count%60, 2), timerX, timerY);

  }else if(mainParams.showTest == false){
    
    testStartStopButton.hide();
  }
  
  
   
}

//start stop button
function testBtnPressed(){
  
  
  if(timerCountdown == false){//when the timer is pressed
    timerCountdown = true;
    record();//start the recording session
    counter = setInterval(countDown, 1000);//run countDown every second
    testStartStopButton.html(testBtnCopy2);//change button text to 'Done'
  } else if(timerCountdown == true){//when the timer is stopped
    timerCountdown = false;
    makeJson();//complete the recording session by spitting the json
    clearInterval(counter);//stop countDown
    count = defaultTimer;//reset the timer value
    resetRecord();
    testStartStopButton.html(testBtnCopy1);//change button text to 'Start'
    
    //also something to download the json file
  }
    
}

function countDown()
{
  count = count - 1;
  if (count <= 0){
    timerCountdown = false;
    makeJson();//complete the recording session by spitting the json
    clearInterval(counter);//stop countDown
    count = defaultTimer;//reset the timer value
    resetRecord();
    testStartStopButton.html(testBtnCopy1);//change button text to 'Start'
    return;
  }
  //Do code for showing the number of seconds here...wait, do I need to really write something?
}

//padding number
function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

function returnCurrentTimer(){
  return count;
}
