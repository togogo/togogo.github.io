/*

*

* V A R I A B L E S

*

*/

//main panel
let mainPanelX = 270;
let mainPanelY = 100;
let mainPanelWidth;
let mainPanelHeight;
let mainPanelCopy = 'Your Entry';
let mainPanelCopyX = mainPanelX + 20;
let mainPanelCopyY = mainPanelY + 40;

//gen panel
let genPanelX;
let genPanelY = mainPanelY;
let genPanelWidth;
let genPanelHeight;

//gen panel copy
let genPanelCopy = 'Model Suggestion';
let genPanelCopyX;
let genPanelCopyY = mainPanelCopyY;

//gen subpanel 1
let genSub1X;
let genSub1Y;
let genSubWidth;
let genSubHeight;
let mdl1StatIcnX;
let mdl1StatIcnY;

//gen subpanel 2
let genSub2X;
let genSub2Y;

//gen subpanel 3
let genSub3X;
let genSub3Y;

//icon size
mdlStatIcnSize = 30;

//text edit / generation part
let entryArea;
let genArea1;
let genArea2;
let genArea3;

let entryAreaX = mainPanelCopyX;
let entryAreaY = mainPanelCopyY + 20;
let entryAreaWidth;
let entryAreaHeight;

let genArea1X;
let genArea1Y;
let genArea1Width;
let genArea1Height;

let genArea2X;
let genArea2Y;
let genArea2Width;
let genArea2Height;

let genArea3X;
let genArea3Y;
let genArea3Width;
let genArea3Height;

let genArea1StatusX;
let genArea1StatusY;


/*

*

* S E T U P  

*

*/


function setupMain(){
  
  updateMainVariables();
  
  //this is where the user enters text
  entryArea = createElement('textarea');
  entryArea.position(entryAreaX, entryAreaY);
  entryArea.id('entryArea');
  document.getElementById("entryArea").focus();
  
  
  //this is where the text is generated
  genArea1 = createElement('textarea');
  genArea1.id('generated1');
  genArea1.position(genArea1X, genArea1Y);
  
  genArea2 = createElement('textarea');
  genArea2.id('generated2');
  genArea2.position(genArea2X, genArea2Y);
  
  genArea3 = createElement('textarea');
  genArea3.id('generated3');
  genArea3.position(genArea3X, genArea3Y);
  
  
  
  
}

function updateMainVariables(){
  
  //define the values here since they need to resize dynamically
  mainPanelHeight = windowHeight - 100 - 20;
  mainPanelWidth = (topHairlineX2 - topHairlineX1)/2 - 10;
  
  genPanelX = mainPanelX + mainPanelWidth + 20;
  genPanelWidth = mainPanelWidth;
  genPanelHeight = mainPanelHeight;
  
  genPanelCopyX = genPanelX + 20;
  
  genSub1X = genPanelX + 20;
  genSub1Y = genPanelY + 60 ;
  genSubWidth = genPanelWidth - 40;
  genSubHeight = (genPanelHeight - 80)/3 - 13;
  
  genSub2X = genSub1X;
  genSub2Y = genSub1Y + genSubHeight + 20;
  
  genSub3X = genSub2X;
  genSub3Y = genSub2Y + genSubHeight + 20;
  
  mdl1StatIcnX = genSub1X + mdlStatIcnSize/2;
  mdl1StatIcnY = genSub1Y + mdlStatIcnSize/2;
  
  mdl2StatIcnX = genSub2X + mdlStatIcnSize/2;
  mdl2StatIcnY = genSub2Y + mdlStatIcnSize/2;
  
  mdl3StatIcnX = genSub3X + mdlStatIcnSize/2;
  mdl3StatIcnY = genSub3Y + mdlStatIcnSize/2;
  
  entryAreaWidth = mainPanelWidth - 40;
  entryAreaHeight = mainPanelHeight - 80;
  
  genArea1Width = genSubWidth - 20;
  genArea1Height = genSubHeight - 80;
  
  genArea1X = genSub1X + 10;
  genArea1Y = genSub1Y + 60;
  
  genArea2Width = genArea1Width;
  genArea2Height = genArea1Height;
  
  genArea2X = genSub2X + 10;
  genArea2Y = genSub2Y + 60;
  
  genArea3Width = genArea1Width;
  genArea3Height = genArea1Height;
  
  genArea3X = genSub3X + 10;
  genArea3Y = genSub3Y + 60;
  
  genArea1StatusX = mdl1StatIcnX + 40;
  genArea1StatusY = mdl1StatIcnY + 20;
  
  genArea2StatusX = mdl2StatIcnX + 40;
  genArea2StatusY = mdl2StatIcnY + 20;
  
  genArea3StatusX = mdl3StatIcnX + 40;
  genArea3StatusY = mdl3StatIcnY + 20;
  
  
}

/*

*

* D R A W I N G   F U N C T I O N

*

*/


function drawMain(){
  
  updateMainVariables();
  
  //main panel
  fill(panel);
  noStroke();
  rect(mainPanelX, mainPanelY, mainPanelWidth, mainPanelHeight);//replace this later with a nicer func
  
  //main panel copy
  textFont(roboto);
  textSize(h2);
  fill(txt);
  text(mainPanelCopy, mainPanelCopyX, mainPanelCopyY);
  
  //gen panel
  fill(panel);
  noStroke();
  //rect(genPanelX, genPanelY, genPanelWidth, genPanelHeight);//replace this later with a nicer func
  
  //gen panel copy
  textFont(roboto);
  textSize(h2);
  fill(txt);
  //text(genPanelCopy, genPanelCopyX, genPanelCopyY);
  
  //gen subpanel 1
  fill(subpanel);
  noStroke();
  //rect(genSub1X, genSub1Y, genSubWidth, genSubHeight);
  
  //gen subpanel 2
  fill(subpanel);
  noStroke();
  //rect(genSub2X, genSub2Y, genSubWidth, genSubHeight);

  //gen subpanel 3
  fill(subpanel);
  noStroke();
  //rect(genSub3X, genSub3Y, genSubWidth, genSubHeight);
  
  //gen area 1
  //image(mdl1Icn, mdl1StatIcnX, mdl1StatIcnY, mdlStatIcnSize, mdlStatIcnSize);

  //gen area 2
  //image(mdl2Icn, mdl2StatIcnX, mdl2StatIcnY, mdlStatIcnSize, mdlStatIcnSize);
  
  //gen area 3
  //image(mdl3Icn, mdl3StatIcnX, mdl3StatIcnY, mdlStatIcnSize, mdlStatIcnSize);
  
  //entry text ... this might be slowing the overall performance...will come back to it later...
  entryArea.size(entryAreaWidth, entryAreaHeight);
  
  //gen area 1 ... this might be slowing the overall performance...will come back to it later...
  genArea1.size(genArea1Width, genArea1Height);
  
  //gen area 2 ... this might be slowing the overall performance...will come back to it later...
  genArea2.size(genArea2Width, genArea2Height);
  
  //gen area 3 ... this might be slowing the overall performance...will come back to it later...
  genArea3.size(genArea3Width, genArea3Height);
  
  //hide genarea
  hideMain();
  
}

function hideMain(){
  genArea1.hide();
  genArea2.hide();
  genArea3.hide();
}


function showGen1Status(_status){
  textFont(roboto);
  textSize(h3);
  fill(txt);
  //fill(0);
  //print(_status + "is what I'm dealing");
  text(_status, genArea1StatusX, genArea1StatusY);
}

function showGen2Status(_status){
  textFont(roboto);
  textSize(h3);
  fill(txt);
  //fill(0);
  //print(_status + "is what I'm dealing");
  text(_status, genArea2StatusX, genArea2StatusY);
}

function showGen3Status(_status){
  textFont(roboto);
  textSize(h3);
  fill(txt);
  //fill(0);
  text(_status, genArea3StatusX, genArea3StatusY);
}
