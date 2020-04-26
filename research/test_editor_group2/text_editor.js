/*

*

*

*  N O    A I    B R A N C H

*

*

*/


//declare colors
let bg;//background color
let panel;//panel color
let txt;//text color
let hl;//hairline color
let loading;//when the model is still loading
let ready;//when the model is completely loaded

//UI arch...The big picture
let verticalMargin = 40;
let horizontalMargin = 40;

//UI details
let hlWeight = 0.5;

//typography
let roboto;
let h1 = 25;
let h2 = 20;
let h3 = 10;

//machine learning components
let charRNN_model1;
let charRNN_model2;
let charRNN_model3;

//machine learning model states
let model1isReady = false;
let model2isReady = false;
let model3isReady = false;

//machine learning booleans
let model1isLive;
let model2isLive;
let model3isLive;

let runningInference = false;//is this used...?

//means to show minimal feedback on the generation status
let genArea1isWorking = false;
let genArea2isWorking = false;
let genArea3isWorking = false;
let genArea1StatWorking = 'Model 1 is currently trying to generate...';
let genArea2StatWorking = 'Model 2 is currently trying to generate...';
let genArea3StatWorking = 'Model 3 is currently trying to generate...';
let genArea1StatDone = 'Generation is complete!';//not used at this time...

//testing
//let testisLive = true;//when true, show the testing option on sidebar
let testisLive;

//GUI
let gui;//p5.gui is not working for some reason...trying DAT.GUI instead


//Recording Stats
let freq = 1000;//record every 1000 millisecond frequency
let textAmountCount = [];
let genInfo = [];//has seed text, elapsedSec, model settings, the gen text
let genText = [];
let recorder;
let resultJson = {};//final json that will be downloaded



function record() {

  //run setInterval to capture the data every 1000 millis
  recorder = setInterval(captureTextAmount, freq);

}

//reset everything that is recorded
function resetRecord() {
  clearInterval(recorder);//stop recording
  textAmountCount = [];
  genInfo = [];
  genText = [];
  resultJson = {};
}

//this needs to be called when the generate button is pressed
function captureGenInfo() {

  //run only if the timer section is running...
  if (timerCountdown == true) {
    let capInfo = {
    seedText: 
    getSelectionText(), 
    elapsedSec: 
    defaultTimer - count, 
    genLength: 
    settingSlider.value(), 
    genTemp: 
    settingTempSlider.value()/100
  }

  genInfo.push(capInfo);
}
}

//this nee to be called when the generated texts become available
function captureGenText(_text, _modelNum) {

  //run only if the timer section is running...
  if (timerCountdown == true) {

    let capGenText = {
    genTextResult: 
    _text, 
    modelNum: 
    _modelNum, 
    elapsedSec: 
    defaultTimer - count
  }
  genText.push(capGenText);
}
}



//record stats once the user testing has started
function captureTextAmount() {

  //print('hi, i am working');
  if (timerCountdown == true) {
    let textAmount = {
    textNum:
    entryArea.value().length, 
    elapsedSec: 
    defaultTimer - count
  }

  textAmountCount.push(textAmount);
}
}


function makeJson() {

  print("now making json...");

  //at the end of the test, finalize json
  resultJson = {
  "text amount count": 
  textAmountCount,
  "final text": 
  entryArea.value(), 
  "generated text": 
  genText, 
  "generation info": 
  genInfo
}

//save the final json
let currentTimeStamp = timestamp();
saveJSON(resultJson, currentTimeStamp + '_result.json');
//saveJSON(finalTextJson, 'final_entry.json');

}

function setup() { 

  //draw mode settings
  rectMode(CORNER);

  //define environment
  createCanvas(windowWidth, windowHeight);

  test = windowWidth;

  //load RNN here? or in preload...?Maybe in preload...?

  //define colors
  //bg = color('#1E1E1E');
  bg = color('#121212');
  panel = color('#1E1E1E');
  subpanel = color('#2D2D2D');
  txt = color(255);//white text
  hl1 = color('505050');//dark gray line
  hl2 = color(255);//white line
  loading = color(255, 0, 0);//edit the color to be nicer
  ready = color(0, 255, 0);//edit the color to be nicer

  //setup for each of the subplots
  setupSideBar();
  setupTop();
  setupMain();

  //setup booleans
  model1isLive = false;
  model2isLive = false;
  model3isLive = false;

  //this.testisLive = false;

  //setup gui
  //gui = createGui('Phantom Control');//p5.gui is not  working
  gui = new dat.GUI( {
  hideable: 
    false
  }
  );//trying DAT.GUI, prevent the gui to hide/show with 'h' key
  mainParams = new params();
  gui.add(mainParams, 'showTest');
  gui.hide();//hide gui by default
}

//define the params here that you want to control, and then access by mainParams.__param_name__
var params = function() {
  this.showTest = true;
}


//run this when the model is properly loaded during setup
function model1Ready() {
  print('Model 1 is loaded and is ready.');
  model1isReady = true;
}

function model2Ready() {
  print('Model 2 is loaded and is ready.');
  model2isReady = true;
}

function model3Ready() {
  print('Model 3 is loaded and is ready.');
  model3isReady = true;
}

function preload() {

  //images
  modelIcn = loadImage('./data/img/model_icn.png');
  settingIcn = loadImage('./data/img/settings_icn.png');
  mdl1Icn = loadImage('./data/img/model1_temp_icn.png');
  mdl2Icn = loadImage('./data/img/model2_temp_icn.png');
  mdl3Icn = loadImage('./data/img/model3_temp_icn.png');
  logo = loadImage('data/img/logo.png');
  testingIcn = loadImage('./data/img/testing.png');

  //font
  roboto = loadFont('./data/font/Roboto-Regular.ttf');

  //load ml5 models
  charRNN_model1 = ml5.charRNN('models/model_testing/5MB_64seq_512rnn_jplyrics', model1Ready);
  charRNN_model2 = ml5.charRNN('models/model_testing/5MB_128seq_512rnn_jplyrics', model2Ready);
  charRNN_model3 = ml5.charRNN('models/model_testing/20MB_128seq_512rnn_20epoch_jplyrics', model3Ready);
  //charRNN_model1 = ml5.charRNN('models/woolf/', model1Ready);//Virigina Woolf model
  //charRNN_model2 = ml5.charRNN('models/woolf/', model2Ready);//Virigina Woolf model
  //charRNN_model3 = ml5.charRNN('models/woolf/', model3Ready);//Virigina Woolf model
  //charRNN_model1 = ml5.charRNN('models/jplyrics_heavy/', model1Ready);//JP lyrics model
  //charRNN_model2 = ml5.charRNN('models/oldman/', model2Ready);//Old Man and the Sea JP model
  //charRNN_model3 = ml5.charRNN('models/oldman/', model3Ready);//Old Man and the Sea JP model

}

function draw() {

  //environment
  background(bg);
  
  //for debugging purposes...
  //print(charRNN_model1.ready);
  //print(keyCode);
  //print(timerCountdown);
  //print(timestamp());
  //test if the record is working or not
  //record();//nope
  fill(255, 0, 0);
  //text("yo000000000000000000yo", 1000, 100);

  //ui ... sidebar
  drawSideBar();

  //ui ... top
  drawTop();

  //ui ... main
  drawMain();

  //Top ... Logo
  //image(logo, 100, 100, logo.width*logoPerc, logo.height*logoPerc);

  //ui .... main
  showGenAreaStatus();
  
  //print(genArea1isWorking);
  

  //testing the use of dat.gui
  //print(gui.showTest);
  //print(mainParams.showTest);//this is how you access it!
  //print(mainGUi.name);
}


function showGenAreaStatus(){
  //to show the genration status and feedback...could be written better
  if (genArea1isWorking == true) {
    //print("area 1 is working");
    showGen1Status(genArea1StatWorking);
  }

  if (genArea2isWorking == true) {
    //print("area 2 is working");
    showGen2Status(genArea2StatWorking);
  }

  if (genArea3isWorking == true) {
    showGen3Status(genArea3StatWorking);
  }
}

//need this to dynamically resize canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);


  genArea1.position(genArea1X, genArea1Y);
  genArea2.position(genArea2X, genArea2Y);
  genArea3.position(genArea3X, genArea3Y);

  //entryArea.size(entryAreaWidth, entryAreaHeight);//maybe the drawing performance could be improved with this
}


function mousePressed() {

  //for debugging purposes...figure out the XY
  //print(mouseX, mouseY);
}

function keyPressed() {
  //SHIT + COMMAND
  if (keyIsDown(SHIFT) && keyIsDown(91)) {
    //hide
    gui.hide();
    print("hiding DAT.GUI...");
  }

  //SHIFT + COMMAND + ALT
  if (keyIsDown(SHIFT) && keyIsDown(91) && keyIsDown(18)) {
    //show
    gui.show();
    print("showing DAT.GUI...");
  }

  /*
  //for debugging purposes...show what's being recorded...
  if (key == 'p') {
    //print(textAmountCount);
    //print(genText);
  }
  */
}



function genBtnPressed() {
  print('Gen button was pressed.');
  genStart();
  captureGenInfo();//
  //print(genInfo);//for debugging purposes...
  //print(getSelectionText());
}

//this guy gets the selected text
function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}


function genStart() {

  //let original = entryArea.value();//obtain input text data
  let original = getSelectionText();
  let txt = original.toLowerCase();//make them lower case
  let data;//this guys goes into the lstm generator

  // Check if there's something
  if (txt.length > 0) {

    // Here is the data for the LSTM generator
    data = {
    seed: 
    txt, 
    temperature: 
    settingTempSlider.value()/100, //temp value...this can be parameterized with the interface later...
    length: 
    settingSlider.value()//temp value...this can be parameterized with the interface later...
  };
}

if (model1isLive == true) {
  genArea1isWorking = true;
  charRNN_model1.generate(data, gotData1);
  print("Model 1 is trying to generate something...");
}
if (model2isLive == true) {
  genArea2isWorking = true;
  charRNN_model2.generate(data, gotData2);
  print("Model 2 is trying to generate something...");
}
if (model3isLive == true) {
  genArea3isWorking = true;

  charRNN_model3.generate(data, gotData3);
  print("Model 3 is trying to generate something...");
}

// Update the DOM elements with typed and generated text
function gotData1(err, result) {
  //print(result.sample);
  genArea1isWorking = false;
  genArea1.value(result.sample);
  captureGenText(genArea1.value(), 1);
}

function gotData2(err, result) {
  //print(result.sample);
  genArea2isWorking = false;
  genArea2.value(result.sample);
  captureGenText(genArea2.value(), 2);
}

function gotData3(err, result) {
  //print(result.sample);
  genArea3isWorking = false;
  genArea3.value(result.sample);
  captureGenText(genArea3.value(), 3);
}

}

// returns timestamp used for determining file name for json 
function timestamp() {
  let y = str(year());
  let m = str(month());
  let d = str(day());
  let h = str(hour());
  let mi = str(minute());
  let s = str(second());
  let returnMe = y + '_' +  m + '_' + d + '_' + h + '_' + mi + '_' + s;
  return returnMe;
}
