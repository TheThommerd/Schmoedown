		document.getElementById("time001").style.visibility = "hidden";
		document.getElementById("time001").style.display = "none";
	    	message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
		document.getElementById("q2").focus();
		var cormusic = document.getElementById("myAudio"); 
		var incmusic = document.getElementById("myAudio2"); 
		document.getElementById("myAudio").volume = 0.1;
		document.getElementById("myAudio2").volume = 0.05;
	        document.getElementById("frame001").style.zoom="1.4";
  var goFS = document.getElementById("goFS");
  goFS.addEventListener("click", function() {
      document.body.requestFullscreen();
  }, false);

function load(){
	if (document.getElementById("wins").value.length < 1)
	{
	document.getElementById("wins").value = 0;
	}
	if (document.getElementById("losses").value.length < 1)
	{
	document.getElementById("losses").value = 0;
	}
  	record001.innerHTML = document.getElementById("wins").value + "-" + document.getElementById("losses").value;
  	player001.innerHTML = document.getElementById("naam").value.toUpperCase();
	var length = name.length;
	var twittername = document.getElementById("twitt").value;
	var twitter = twittername.substring(0, 13);
	twitter001.innerHTML = twitter.replace(" ","");
}
var similarity1 = 0;
var similarity2 = 0;
var competitorlist = [
{
"id": "Bateman",
"lowercase": "Ben Bateman",
"twitter": "@benbatemanmedia",
"record": "10-5",
"faction": "DUNGEON",
"percentage": "82",
},
{
"id": "Mantz",
"lowercase": "Scott Mantz",
"twitter": "@MovieMantz",
"record": "2-5",
"faction": "DROOGS",
"percentage": "85",
},
{
"id": "Levine",
"lowercase": "Samm Levine",
"twitter": "@SammLevine",
"record": "10-4",
"faction": "USUAL SUSPECTS",
"percentage": "80",
},
{
"id": "Hlavac",
"lowercase": "Adam Hlavac",
"twitter": "@adamhlavac",
"record": "3-5",
"faction": "S.W.A.G.",
"percentage": "73",
},
];
var num = 0;
var hastag = "#";
var percentage = 0;
var vraag = 0;
function pregame(){
	document.getElementById("time001").style.display = "initial";
	message001.innerHTML = "Click Begin to start the match.";
	message005.innerHTML = "<strong><font size=4>ROUND ONE</font><br/></br>15 MINUTE CLOCK STARTS COUNTING DOWN ONCE FIRST QUESTION IS ASKED</br></br>YOU HAVE 20 SECONDS TO READ THE QUESTION AND SUBMIT YOUR ANSWER</br>YOU CAN SUBMIT YOUR ANSWER BY CLICKING THE SUBMIT BUTTON OR BY HITTING THE ENTER KEY</br></br>EACH QUESTION IS WORTH 1 POINT</br></br>YOU CAN CHALLENGE ANY RULING BY CLICKING THE 'CHALLENGE' BUTTON</br>JUDGE YOUR CHALLENGE BY CLICKING THE 'WIN CHALLENGE' OR 'LOSE CHALLENGE' BUTTON</br>REVERSALS LET YOU KEEP YOUR CHALLENGE</strong>";
	document.getElementById("message005").style.position = "relative";
	document.getElementById("message005").style.top = "-200px";
message003.innerHTML = "<button id=begin class=buttons002 onclick=begin001()>Begin</button>";
	document.getElementById("message003").style.top = "-200px";
	message006.innerHTML =  "";
	document.getElementById("message006").style.position = "relative";
	document.getElementById("message006").style.top = "-200px";
	message004.innerHTML = "";
	document.getElementById("message004").style = "initial";
	document.getElementById("message004").style.top = "-190px";
}

	var a = 0;
        var r = 0;
        r++;
        var q = 0;
        q++;
        var b = 0;
        var s = 0;
        var u = 0;
        var v = 0;
	var j = 3;
	j--;
	var h = 2;
	h--;
var quescount = 0 ;
var quescor = 0;
var quescountopp = 0 ;
var quescoropp = 0;
	var minimum = 0;
var number;

function submitname () {
	var name = document.getElementById("q2").value.toUpperCase();
	var twitt = document.getElementById("twitt").value;
	var naam = document.getElementById("naam").value.toUpperCase();
	var length1 = name.length;
	var twittername = document.getElementById("q3").value;
	var length2 = twittername.length;
	var twitter = twittername.substring(0, 15);
	var twitter = twitter.replace(" ","");

	if (length1 < 1){
	player001.innerHTML = naam ;
	} 
	else if (length1 >= 1){
	player001.innerHTML = name;
	document.getElementById("naam").value = document.getElementById("q2").value;
	}
	if (length2 < 1){
	twitter001.innerHTML = twitt ;
	} 
	else if (length2 >= 1){
	twitter001.innerHTML = twitter;
	document.getElementById("twitt").value = document.getElementById("q3").value;
	}
	if (document.getElementById("wins").value.length < 1)
	{
	document.getElementById("wins").value = 0;
	}
	if (document.getElementById("losses").value.length < 1)
	{
	document.getElementById("losses").value = 0;
	}
	var record = document.getElementById("wins").value + "-" + document.getElementById("losses").value;
  	record001.innerHTML = record;
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
message004.innerHTML = "<select id=select><option value=Bateman>Ben Bateman</option><option value=Hlavac>Adam Hlavac</option><option value=Levine>Samm Levine</option><option value=Mantz>Scott Mantz</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button>";
	message001.innerHTML = "Choose your opponent.";
}

function choosecomp() {
  	var comp = document.getElementById("select").value;
	document.getElementById("select").style.visibility = "hidden";
	document.getElementById("choose").style.visibility = "hidden";
	document.getElementById("select").style.display = "none";
	document.getElementById("choose").style.display = "none";
	competitorlist.forEach(function(item,i){
	if(item.id == comp){
	competitorlist.splice(i, 1);
	competitorlist.unshift(item);
	}
	});
 	player002.innerHTML = competitorlist[0].id.toUpperCase();
  	twitter002.innerHTML = competitorlist[0].twitter;
  	faction002.innerHTML = competitorlist[0].faction;
  	record002.innerHTML = competitorlist[0].record;
	percentage = competitorlist[0].percentage;
	percentage3 = competitorlist[0].percentage3;
	percentage5 = competitorlist[0].percentage5;
	message001.innerHTML = "Press Next to proceed.";
	message004.innerHTML = "<button class=buttons002 onclick=pregame()>Next</button>";
	message005.innerHTML = "You selected " +competitorlist[0].lowercase + "." + "</br></br>";
};


function skip () {
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
message004.innerHTML = "<select id=select><option value=Bateman>Ben Bateman</option><option value=Hlavac>Adam Hlavac</option><option value=Levine>Samm Levine</option><option value=Mantz>Scott Mantz</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button>";
	message001.innerHTML = "Choose your opponent.";
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
var chance = 0;
var c;
question001 = shuffle(question001); 
function begin001() {
    var Minutes = 60 * 15,
        display = document.querySelector('#round002');
    startTimer(Minutes, display);
             c = 21;
                time001.innerHTML = 20;
                document.getElementById("round002").style.visibility = "visible";
	    document.getElementById("time001").style.visibility = "visible";
	    document.getElementById("message005").style.position = "relative";
	    document.getElementById("message005").style.top = "-100px";
	    document.getElementById("message006").style.position = "relative";
	    document.getElementById("message006").style.top = "-100px";
quescount++;
quescountopp++;
            message001.innerHTML = question001[0].ques;
            message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[0].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "27px";
	document.getElementById("player002").style.top = "5px";
	document.getElementById("score001").style.top = "-55px";
	document.getElementById("score002").style.top = "-95px";
	document.getElementById("twitter001").style.top = "-128px";
	document.getElementById("twitter002").style.top = "-148px";
	document.getElementById("faction001").style.top = "-166px";
	document.getElementById("faction002").style.top = "-166px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-126px";
	document.getElementById("time001").style.top = "-140px";
}
            message003.innerHTML = "";
            message005.innerHTML = "";
            message006.innerHTML = "";
           a++;
            qu001.innerHTML = "1 - " +question001[0].cat.toUpperCase();
	    document.getElementById("q1").focus();
        }
function Challenge(){
	     var question1 = document.getElementById("q1").value;
if (question1.length < 1){
            message003.innerHTML = "You can't challenge because you didn't submit an answer!";
}
if (question1.length >= 1){
if (h == 1) {
	    document.getElementById("chalacc").style.visibility = "visible";
	    document.getElementById("chalden").style.visibility = "visible";
	    }
 else if (h < 1) {
            message003.innerHTML = "No challenges left!";
	    }
}
}
function ChallengeAccepted(){
if (speed == 0) {
            score001.innerHTML = b+=1;
quescor++;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
}
if (speed != 0) {
            score001.innerHTML = b+= 2;
quescor++;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
            message006.innerHTML = "<br>";
	     }
}

function ChallengeDenied(){
	    h--;
	    h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
if (j == 2) {
	    document.getElementById("frame001").style.backgroundImage = "url('ironmanNoChal.png')";
}
else if (j == 1) {
	    document.getElementById("frame001").style.backgroundImage = "url('Singles___2JTE.png')";
	          }
else if (j == 0) {
	    document.getElementById("frame001").style.backgroundImage = "url('Singles___1JTE.png')";
	          }
 else if (j < 0) {
	    document.getElementById("frame001").style.backgroundImage = "url('Singles___NoJTE.png')";
	      }
}

function myTrim(x) {
  return x.replace(/^\s+|\s+$/gm,'');
}


function checker(){
	document.getElementById("message003").style.top = "-190px";
	document.getElementById("message004").style.top = "-190px";
if (speed != 0)
{
checkerspeed();
}
else {
	    var question01 = document.getElementById("q1").value.toUpperCase();
	    var question1 = myTrim(question01);
	    question1 = question1.replace(":"," ");
	    question1 = question1.replace("!","");
	    question1 = question1.replace("$","");
	    question1 = question1.replace("?","");
	    question1 = question1.replace(","," ");
	    question1 = question1.replace("&","AND");
	    question1 = question1.replace(".","");
	    question1 = question1.replace("-"," ");
	    question1 = question1.replace("   "," ");
	    question1 = question1.replace("  "," ");
	    question1 = question1.replace("É","E");
	    question1 = question1.replace("Ó","O");
	    question1 = question1.replace("Í","I");
	    question1 = question1.replace("Á","A");
	    question1 = question1.replace("Ñ","N");
	    question1 = question1.replace("È","E");
	    question1 = question1.replace("Ç","C");
	    question1 = myTrim(question1);
if (question1.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question1, question001[vraag].answ);
if (typeof(question001[vraag].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question1, question001[vraag].answ3);
}
}
else if (question1.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question1 == question001[vraag].answ) || (question1 == question001[vraag].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
            message003.innerHTML = "Correct!";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	     
            else if (question1 != question001[vraag].answ)  {
            message003.innerHTML = "Incorrect. The correct answer is " + question001[vraag].answ2;
	    message005.innerHTML = "";
	    incmusic.play();
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
}
    var correct = Math.random()*100;
if (correct < competitorlist[0].percentage){
score002.innerHTML = s+=1;
quescoropp++;
}        	   
}
}

function checkerspeed(){
	    var speed01 = document.getElementById("q1").value.toUpperCase();
	    var speed1 = myTrim(speed01);
	    speed1 = speed1.replace(":"," ");
	    speed1 = speed1.replace("!","");
	    speed1 = speed1.replace("$","");
	    speed1 = speed1.replace("?","");
	    speed1 = speed1.replace(","," ");
	    speed1 = speed1.replace("&","AND");
	    speed1 = speed1.replace(".","");
	    speed1 = speed1.replace("-"," ");
	    speed1 = speed1.replace("   "," ");
	    speed1 = speed1.replace("  "," ");
	    speed1 = speed1.replace("É","E");
	    speed1 = speed1.replace("Ó","O");
	    speed1 = speed1.replace("Í","I");
	    speed1 = speed1.replace("Á","A");
	    speed1 = speed1.replace("Ñ","N");
	    speed1 = speed1.replace("È","E");
	    speed1 = speed1.replace("Ç","C");
	    speed1 = myTrim(speed1);
            window.clearInterval(update);
		document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	quescount++;
	if ((speed1 == question001[vraag].answ) || (speed1 == question001[vraag].answ3)) {
            message003.innerHTML = "Correct!";
            score001.innerHTML = b += 1;
	quescor++;
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	document.getElementById("message005").style.position = "relative";
	document.getElementById("message005").style.top = "-100px";
	document.getElementById("message004").style.position = "relative";
	document.getElementById("message004").style.top = "-190px";

	}
        else if (speed1 != question001[vraag].answ)  {
            message003.innerHTML = "Incorrect. The correct answer is " + question001[vraag].answ2;
	    message005.innerHTML = "";
            score001.innerHTML = b -= 1;
	    incmusic.play();
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button><br /><br /><button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	document.getElementById("message005").style.position = "relative";
	document.getElementById("message005").style.top = "-100px";
	document.getElementById("message004").style.position = "relative";
	document.getElementById("message004").style.top = "-190px";
	}
 	chance = 0 ;
}



function next001() {
        display = document.querySelector('#round002');
                    if (display.textContent == "02:00") {
				finalround();
        }
else {
			vraag++;
	if (typeof(question001[vraag]) == "undefined"){if (b -s > 0){win();}else if (b -s < 0){lose();}}
	else if (typeof(question001[vraag]) != "undefined"){
  document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "15px";
	document.getElementById("player002").style.top = "-7px";
	document.getElementById("score001").style.top = "-67px";
	document.getElementById("score002").style.top = "-107px";
	document.getElementById("twitter001").style.top = "-140px";
	document.getElementById("twitter002").style.top = "-160px";
	document.getElementById("faction001").style.top = "-178px";
	document.getElementById("faction002").style.top = "-178px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-138px";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	    document.getElementById("chalacc").style.display = "initial";
	    document.getElementById("chalden").style.display = "initial";
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
	document.getElementById("time001").style.top = "-150px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
quescount++;
quescountopp++;
                message001.innerHTML = question001[vraag].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[vraag].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "27px";
	document.getElementById("player002").style.top = "5px";
	document.getElementById("score001").style.top = "-55px";
	document.getElementById("score002").style.top = "-95px";
	document.getElementById("twitter001").style.top = "-128px";
	document.getElementById("twitter002").style.top = "-148px";
	document.getElementById("faction001").style.top = "-166px";
	document.getElementById("faction002").style.top = "-166px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-126px";
	document.getElementById("time001").style.top = "-140px";
}
	        document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
            	qu001.innerHTML = a + " - " + question001[vraag].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            	    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
}
}


function timer001() {
            c = c - 1;
            if (c < 200) {
                time001.innerHTML = c;
            }
            if (c < 1) {
      		message003.innerHTML = "The correct answer is " + question001[vraag].answ2; 
           	window.clearInterval(update);
                time001.innerHTML = "Time's up!";
		document.getElementById("time001").style.fontSize = "100%";
		document.getElementById("time001").style.fontWeight = "normal";
	    	incmusic.play();
	    document.getElementById("q1").disabled = true;
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
	    message006.innerHTML =  "";
if (speed == 0){
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
var correct = Math.random() * 100;
if (correct < competitorlist[0].percentage){
score002.innerHTML = s+=1;
quescoropp++;
}
}
else if (speed != 0 ){
            message004.innerHTML = "<button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            score001.innerHTML = b -= 1;
	document.getElementById("message004").style.top = "-190px";
}
}
}
        update = setInterval("timer001()", 1000);
      

function repeat001() {
            location.reload();
        }

$("#message002").keypress(function(event) { 
         if (event.keyCode === 13){ 
                 $("#submit").click(); 

            } 
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
 var tijd =   setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        display = document.querySelector('#round002');
                    if (display.textContent == "02:00") {
                            window.clearInterval(tijd);
                           display.textContent = "02:00";
			
        		}
    }, 1000);
}
function startTimer2(duration, display) {
    var timer = duration, minutes, seconds;
 var tijd =   setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        display = document.querySelector('#round002');
                    if (display.textContent == "00:00") {
                            window.clearInterval(tijd);
                           display.textContent = "00:00";
			
        		}
    }, 1000);
}
function next002(){
       display = document.querySelector('#round002');
                    if (display.textContent == "00:00") {
				message001.innerHTML = "Time's Up";
if (b -s > 0){
win();
}
else if (b -s < 0){
lose();
}
        }
else {
			vraag++;
	if (typeof(question001[vraag]) == "undefined"){if (b -s > 0){win();}else if (b -s < 0){lose();}}
	else if (typeof(question001[vraag]) != "undefined"){
  document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "15px";
	document.getElementById("player002").style.top = "-7px";
	document.getElementById("score001").style.top = "-67px";
	document.getElementById("score002").style.top = "-107px";
	document.getElementById("twitter001").style.top = "-140px";
	document.getElementById("twitter002").style.top = "-160px";
	document.getElementById("faction001").style.top = "-178px";
	document.getElementById("faction002").style.top = "-178px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-138px";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	    document.getElementById("time001").style.display = "initial";
	    document.getElementById("time001").style.visibility = "visible";
	document.getElementById("time001").style.top = "-150px";
	    document.getElementById("chalacc").style.display = "initial";
	    document.getElementById("chalden").style.display = "initial";
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";  
                message001.innerHTML = question001[vraag].ques;
chance = Math.floor(Math.random() * 91) + (competitorlist[0].percentage / 10);
if (question001[vraag].ques.length < 50)
{
if (chance < 20){t = 15; nobody = 1}
else if (chance < 25){t = 10; nobody = 0}
else if (chance < 30){t = 6; nobody = 0}
else if (chance < 65){t = 3; nobody = 0}
else if (chance < 100){t = 2; nobody = 0}
}
else if (question001[vraag].ques.length < 110)
{
if (chance < 20){t = 15; nobody = 1}
else if (chance < 25){t = 10; nobody = 0}
else if (chance < 30){t = 6; nobody = 0}
else if (chance < 80){t = 3; nobody = 0}
else if (chance < 100){t = 2; nobody = 0}
}
else if (question001[vraag].ques.length >= 110)
{
if (chance < 20){t = 15; nobody = 1}
else if (chance < 25){t = 10; nobody = 0}
else if (chance < 30){t = 6; nobody = 0}
else if (chance < 60){t = 4; nobody = 0}
else if (chance < 100){t = 3; nobody = 0}
}
update = setInterval("speedtimer001()", 1000);
                message002.innerHTML = "";
if (question001[vraag].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "27px";
	document.getElementById("player002").style.top = "5px";
	document.getElementById("score001").style.top = "-55px";
	document.getElementById("score002").style.top = "-95px";
	document.getElementById("twitter001").style.top = "-128px";
	document.getElementById("twitter002").style.top = "-148px";
	document.getElementById("faction001").style.top = "-166px";
	document.getElementById("faction002").style.top = "-166px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-126px";
	document.getElementById("time001").style.top = "-140px";
}
                message003.innerHTML = "<button class=buzzer onclick=speedquestions2()>Buzz</button>";
                message005.innerHTML = "";
                time001.innerHTML = "";
                message006.innerHTML = "";
                 a++;
            	qu001.innerHTML = a + " - " + question001[vraag].cat.toUpperCase();
                message004.innerHTML = "";
}
}
}

function speedquestions2() {	
            document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "15px";
	document.getElementById("player002").style.top = "-7px";
	document.getElementById("score001").style.top = "-67px";
	document.getElementById("score002").style.top = "-107px";
	document.getElementById("twitter001").style.top = "-140px";
	document.getElementById("twitter002").style.top = "-160px";
	document.getElementById("faction001").style.top = "-178px";
	document.getElementById("faction002").style.top = "-178px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-138px";
	    document.getElementById("time001").style.display = "initial";
	    document.getElementById("time001").style.visibility = "visible";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-150px";
            window.clearInterval(update);
                update = setInterval("timer001()", 1000);
                c = 5;
                time001.innerHTML = 5;
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
                message001.innerHTML = question001[vraag].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[vraag].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "27px";
	document.getElementById("player002").style.top = "5px";
	document.getElementById("score001").style.top = "-55px";
	document.getElementById("score002").style.top = "-95px";
	document.getElementById("twitter001").style.top = "-128px";
	document.getElementById("twitter002").style.top = "-148px";
	document.getElementById("faction001").style.top = "-166px";
	document.getElementById("faction002").style.top = "-166px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-126px";
	document.getElementById("time001").style.top = "-140px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
            	qu001.innerHTML = a + " - " + question001[vraag].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "initial";
	    	document.getElementById("chalacc").style.display = "initial";
		}
}
var speed = 0;
var nobody = 0 ;
function finalround(){
	message001.innerHTML = "Click Next to proceed.";
	message002.innerHTML = "";
	message003.innerHTML = "";
	message005.innerHTML = "<strong><font size=4>ROUND TWO</font><br/></br>2 MINUTE CLOCK STARTS COUNTING DOWN ONCE FIRST QUESTION IS ASKED</br></br>COMPETITORS MUST BUZZ IN AND SUBMIT THEIR ANSWER WITHIN 5 SECONDS</br>YOU CAN SUBMIT YOUR ANSWER BY CLICKING THE SUBMIT BUTTON OR BY HITTING THE ENTER KEY</br></br>COMPETITORS EARN 1 POINT FOR CORRECT ANSWERS</br>INCORRECT ANSWERS LOSE 1 POINT</br></br>YOU CAN CHALLENGE ANY RULING BY CLICKING THE 'CHALLENGE' BUTTON</br>JUDGE YOUR CHALLENGE BY CLICKING THE 'WIN CHALLENGE' OR 'LOSE CHALLENGE' BUTTON</br>REVERSALS LET YOU KEEP YOUR CHALLENGE</strong>";
	document.getElementById("message005").style.position = "relative";
	document.getElementById("message005").style.top = "-190px";
	document.getElementById("message004").style.position = "relative";
	document.getElementById("message004").style.top = "-190px";
	    document.getElementById("time001").style.visibility = "hidden";
            message004.innerHTML = "<button class=buttons002 onclick=start2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
speed++;
}
function speedtimer001() {
            t = t - 1;
            if (t < 1) {
  	window.clearInterval(update);
if (nobody == 0){
		var correctchance = Math.random() * 100;
	if (correctchance < competitorlist[0].percentage){
		score002.innerHTML = s += 1;
quescountopp++;
quescoropp++;
	    	message005.innerHTML = "";
		message003.innerHTML = competitorlist[0].id + " hit the question.";
                time001.innerHTML = "";
                message002.innerHTML = "";
		}
	else if (correctchance >= competitorlist[0].percentage){
quescountopp++;
		score002.innerHTML = s -= 1;
	    	message005.innerHTML = "";
		message003.innerHTML = competitorlist[0].id + " missed the question.";
                time001.innerHTML = "";
                message002.innerHTML = "";
		}
}
else if (nobody == 1){
		message003.innerHTML = "Nobody hit the question.";
		nobody = 0;
}

            message004.innerHTML = "<button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
            message006.innerHTML = "The correct answer is " + question001[vraag].answ2; 
	document.getElementById("message004").style.top = "-190px";
	document.getElementById("message006").style.top = "-190px";
        }
}
function start2(){
    var Minutes = 60 * 2,
        display = document.querySelector('#round002');
    startTimer2(Minutes, display);
next002();
    }
function newLoc() {
  window.location.assign("https://thethommerd.github.io/Sim/Ironman.html");
}
function win(){
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Match";
                time001.innerHTML = "";
		document.getElementById("message002").style.fontSize = "200%";
		document.getElementById("message002").style.fontWeight = "bold";
		document.getElementById("message003").style.fontSize = "200%";
		document.getElementById("message003").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...."
		var winner = competitorlist[0].lowercase;
                message003.innerHTML = player001.innerHTML;
		var ppe = ((b / quescount) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / quescountopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].id + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("wins_IM").stepUp(1);
		document.getElementById("AnsweredQuestions_IM").value = parseInt(document.getElementById("AnsweredQuestions_IM").value) +  quescount;
		document.getElementById("CorrectQuestions_IM").value = parseInt(document.getElementById("CorrectQuestions_IM").value) +  quescor;
		document.getElementById("PossiblePoints_IM").value = parseInt(document.getElementById("PossiblePoints_IM").value)  +  posspoints;
		document.getElementById("TotalPoints_IM").value = parseInt(document.getElementById("TotalPoints_IM").value) +  b	
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>";
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
function lose(){
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Match";
                time001.innerHTML = "";
		document.getElementById("message002").style.fontSize = "200%";
		document.getElementById("message002").style.fontWeight = "bold";
		document.getElementById("message003").style.fontSize = "200%";
		document.getElementById("message003").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...."
		var winner = competitorlist[0].lowercase;
		message003.innerHTML = winner.toUpperCase();
		var ppe = ((b / quescount) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / quescountopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].id + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("losses_IM").stepUp(1);
		document.getElementById("AnsweredQuestions_IM").value = parseInt(document.getElementById("AnsweredQuestions_IM").value) +  quescount;
		document.getElementById("CorrectQuestions_IM").value = parseInt(document.getElementById("CorrectQuestions_IM").value) +  quescor;
		document.getElementById("PossiblePoints_IM").value = parseInt(document.getElementById("PossiblePoints_IM").value)  +  posspoints;
		document.getElementById("TotalPoints_IM").value = parseInt(document.getElementById("TotalPoints_IM").value) +  b
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>";
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
