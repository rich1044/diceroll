var tRightDice = 1;
var tLeftDice  = 1;
var bRightDice = 1;
var bLeftDice  = 1;

function randomNumber() {
  var x = Math.floor((Math.random()*6) + 1);
  return x;
}

document.getElementById("radio1").onclick = function() {
  document.getElementById("TR" + tRightDice).style.border = null;
  document.getElementById("TL" + tLeftDice).style.border = null;
  document.getElementById("BR" + bRightDice).style.border = null;
  document.getElementById("BL" + bLeftDice).style.border = null;
  document.getElementById("sum").value = null;

  document.getElementById("tRight").style.display = "none";
  document.getElementById("bRight").style.display = "none";
  document.getElementById("bLeft").style.display = "none";
};

document.getElementById("radio2").onclick = function() {
  document.getElementById("TR" + tRightDice).style.border = null;
  document.getElementById("TL" + tLeftDice).style.border = null;
  document.getElementById("BR" + bRightDice).style.border = null;
  document.getElementById("BL" + bLeftDice).style.border = null;
  document.getElementById("sum").value = null;


  document.getElementById("tRight").style.display = "inline";
  document.getElementById("tLeft").style.display = "inline";
  document.getElementById("bRight").style.display = "none";
  document.getElementById("bLeft").style.display = "none";

};

document.getElementById("radio3").onclick = function() {
  document.getElementById("TR" + tRightDice).style.border = null;
  document.getElementById("TL" + tLeftDice).style.border = null;
  document.getElementById("BR" + bRightDice).style.border = null;
  document.getElementById("BL" + bLeftDice).style.border = null;
  document.getElementById("sum").value = null;


  document.getElementById("tRight").style.display = "inline";
  document.getElementById("tLeft").style.display = "inline";
  document.getElementById("bLeft").style.display = "inline";
  document.getElementById("bRight").style.display = "none";
};

document.getElementById("radio4").onclick = function() {
  document.getElementById("TR" + tRightDice).style.border = null;
  document.getElementById("TL" + tLeftDice).style.border = null;
  document.getElementById("BR" + bRightDice).style.border = null;
  document.getElementById("BL" + bLeftDice).style.border = null;
  document.getElementById("sum").value = null;


  document.getElementById("tRight").style.display = "inline";
  document.getElementById("tLeft").style.display = "inline";
  document.getElementById("bRight").style.display = "inline";
  document.getElementById("bLeft").style.display = "inline";
};




//sum and highlight
document.getElementById("roll").onclick = function() {
  document.getElementById("TR" + tRightDice).style.border = null;
  document.getElementById("TL" + tLeftDice).style.border = null;
  document.getElementById("BR" + bRightDice).style.border = null;
  document.getElementById("BL" + bLeftDice).style.border = null;

  tRightDice = randomNumber();
  tLeftDice  = randomNumber();
  bRightDice  = randomNumber();
  bLeftDice  = randomNumber();

  var r1 = document.getElementById("radio1").checked;
  var r2 = document.getElementById("radio2").checked;
  var r3 = document.getElementById("radio3").checked;
  var r4 = document.getElementById("radio4").checked;
  //1
  if(r1){
    document.getElementById("TL" + tLeftDice).style.border = "5px solid red";
    document.getElementById("sum").value = tLeftDice;

  }
  //2
  else if(r2){
    document.getElementById("TR" + tRightDice).style.border = "5px solid red";
    document.getElementById("TL" + tLeftDice).style.border = "5px solid red";

    document.getElementById("sum").value = tRightDice + tLeftDice;
  }
  else if(r3){
    document.getElementById("TR" + tRightDice).style.border = "5px solid red";
    document.getElementById("TL" + tLeftDice).style.border = "5px solid red";
    document.getElementById("BL" + bLeftDice).style.border = "5px solid red";
    console.log("here");
    document.getElementById("sum").value = tRightDice + tLeftDice + bLeftDice;
  }
  else if(r4){
    document.getElementById("TR" + tRightDice).style.border = "5px solid red";
    document.getElementById("TL" + tLeftDice).style.border = "5px solid red";
    document.getElementById("BL" + bLeftDice).style.border = "5px solid red";
    document.getElementById("BR" + bRightDice).style.border = "5px solid red";

    document.getElementById("sum").value = tRightDice + tLeftDice + bLeftDice + bRightDice;
  }else{
    console.log("something went wrong.....");
  }
};
