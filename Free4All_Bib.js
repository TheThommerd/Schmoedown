		var cormusic = document.getElementById("myAudio"); 
		var incmusic = document.getElementById("myAudio2"); 
		document.getElementById("myAudio").volume = 0.1;
		document.getElementById("myAudio2").volume = 0.05;
	    	message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
		document.getElementById("time001").style.visibility = "hidden";
		document.getElementById("time001").style.display = "none";
		document.getElementById("q2").focus();
		document.getElementById("message004").style.top = "-20px";
var qmusic = document.getElementById("QMusic"); 
document.getElementById("QMusic").volume = 0.02;
var intromusic = document.getElementById("Intro"); 
document.getElementById("Intro").volume = 0.02;
  var goFS = document.getElementById("goFS");
  goFS.addEventListener("click", function() {
      document.body.requestFullscreen();
  }, false);
function load(){
intromusic.play();
  	player001.innerHTML = document.getElementById("naam").value.toUpperCase();
	var twittername = document.getElementById("twitt").value;
	var twitter = twittername.substring(0, 13);
	twitter001.innerHTML = twitter.replace(" ","");
}

var num = 0;
var hastag = "#";
var similarity1 = 0;
var similarity2 = 0;
var competitorlist2 = [
{
"id": "Dewberry",
"lowercase": "Eliot Dewberry",
"twitter": "@EliotETC",
"percentage": "52",
},
{
"id": "Bateman",
"lowercase": "Ben Bateman",
"twitter": "@benbatemanmedia",
"percentage": "85",
},
{
"id": "Bibbiani",
"lowercase": "William Bibbiani",
"twitter": "@WilliamBibbiani",
"percentage": "90",
},
{
"id": "Kalinowski",
"lowercase": "Mike Kalinowski",
"twitter": "@MikeKalinowski",
"percentage": "70",
},
{
"id": "Murrell",
"lowercase": "Dan Murrell",
"twitter": "@MurrellDan",
"percentage": "90",
},
{
"id": "Oyama",
"lowercase": "Paul Oyama",
"twitter": "@Paul_Oyama",
"percentage": "85",
},
{
"id": "Andreyko",
"lowercase": "Marc Andreyko",
"twitter": "@marcandreyko",
"percentage": "70",
},
{
"id": "Cushing",
"lowercase": "Rachel Cushing",
"twitter": "@RachelJCushing",
"percentage": "80",
},
{
"id": "Dagnino",
"lowercase": "Tom Dagnino",
"twitter": "@bobfinstock",
"percentage": "45",
},
{
"id": "Rocha",
"lowercase": "John Rocha",
"twitter": "@TheRochaSays",
"percentage": "75",
},
{
"id": "Erwin",
"lowercase": "Ethan Erwin",
"twitter": "@MrEthanErwin",
"percentage": "83",
},
{
"id": "JTE",
"lowercase": "JTE",
"twitter": "@JTEmoviethinks",
"percentage": "65",
},
{
"id": "Sneider",
"lowercase": "Jeff Sneider",
"twitter": "@TheInSneider",
"percentage": "69",
},
{
"id": "Wolfe",
"lowercase": "Clarke Wolfe",
"twitter": "@clarkewolfe",
"percentage": "71",
},
{
"id": "Levine",
"lowercase": "Samm Levine",
"twitter": "@SammLevine",
"percentage": "80",
},
{
"id": "Macuga",
"lowercase": "Josh Macuga",
"twitter": "@JoshMacuga",
"percentage": "50",
},
{
"id": "Reilly",
"lowercase": "Mark Reilly",
"twitter": "@ReillyAround",
"percentage": "72",
},
{
"id": "Jeannine",
"lowercase": "Jeannine",
"twitter": "@JeannineDaBean",
"percentage": "59",
},
{
"id": "Howard",
"lowercase": "Stacy Howard",
"twitter": "@stacyohoward",
"percentage": "60",
},
{
"id": "Humphrey",
"lowercase": "John Humphrey",
"twitter": "@DatJohnHumphrey",
"percentage": "50",
},
{
"id": "Grant",
"lowercase": "Drew Grant",
"twitter": "@videodrew",
"percentage": "58",
},
{
"id": "Harris",
"lowercase": "Lon Harris",
"twitter": "@Lons",
"percentage": "72",
},
{
"id": "Horowitz",
"lowercase": "Josh Horowitz",
"twitter": "@joshuahorowitz",
"percentage": "72",
},
{
"id": "Ghai",
"lowercase": "Andrew Ghai",
"twitter": "@AndrewGhai",
"percentage": "57",
},
{
"id": "McWeeny",
"lowercase": "Drew McWeeny",
"twitter": "@DrewMcWeeny",
"percentage": "74",
},
{
"id": "Ellison",
"lowercase": "Chance Ellison",
"twitter": "@chancewars_91",
"percentage": "79",
},
{
"id": "Drake",
"lowercase": "Grae Drake",
"twitter": "@graedrake",
"percentage": "50",
},
{
"id": "Miller",
"lowercase": "Liz Shannon Miller",
"twitter": "@lizlet",
"percentage": "68",
},
{
"id": "Foutch",
"lowercase": "Haleigh Foutch",
"twitter": "@HaleighFoutch",
"percentage": "66",
},
{
"id": "Meyer",
"lowercase": "Brendan Meyer",
"twitter": "@BrendanMeyer",
"percentage": "78",
},
{
"id": "Napzok",
"lowercase": "Ken Napzok",
"twitter": "@KenNapzok",
"percentage": "59",
},
{
"id": "Preston",
"lowercase": "Paul Preston",
"twitter": "@PPrestonLA",
"percentage": "80",
},
{
"id": "Seibold",
"lowercase": "Whitney Seibold",
"twitter": "@WhitneySeibold",
"percentage": "56",
},
{
"id": "Zipper",
"lowercase": "Eric Zipper",
"twitter": "@Ggrogishere",
"percentage": "70",
},
{
"id": "Silvestrini",
"lowercase": "Rachel Silvestrini",
"twitter": "@RMSilvestrini",
"percentage": "54",
},
{
"id": "Atchity",
"lowercase": "Matt Atchity",
"twitter": "@Matchity",
"percentage": "60",
},
{
"id": "Duralde",
"lowercase": "Alonso Duralde",
"twitter": "@ADuralde",
"percentage": "70",
},
{
"id": "Tom",
"lowercase": "Tom",
"twitter": "@startthemachine",
"percentage": "80",
},
{
"id": "Alba",
"lowercase": "Greg Alba",
"twitter": "@thegregalba",
"percentage": "52",
},
{
"id": "Barbarian",
"lowercase": "The Barbarian",
"twitter": "@BarbarianCraig",
"percentage": "80",
},
{
"id": "Heuck",
"lowercase": "Marc Heuck",
"twitter": "@the_hoyk",
"percentage": "73",
},
{
"id": "Witt",
"lowercase": "Adam Witt",
"twitter": "@Adam_Witt",
"percentage": "60",
},
{
"id": "Butler III",
"lowercase": "Robert Butler III",
"twitter": "@DirectorRB3",
"percentage": "45",
},
{
"id": "Smets",
"lowercase": "Kevin Smets",
"twitter": "@KevSmets",
"percentage": "67",
},
{
"id": "Franco",
"lowercase": "Tim Franco",
"twitter": "@tfranco84",
"percentage": "70",
},
{
"id": "Knopic",
"lowercase": "Mara Knopic",
"twitter": "@ouch_thisMHz",
"percentage": "66",
},
{
"id": "Flouse",
"lowercase": "Zaflertinflouse",
"twitter": "@misterwiggly",
"percentage": "30",
},
{
"id": "Collins",
"lowercase": "Adam Collins",
"twitter": "@Aizanthor",
"percentage": "87",
},
{
"id": "McKee",
"lowercase": "Marisol McKee",
"twitter": "@Marisol_Miriah",
"percentage": "76",
},
{
"id": "Bancroft",
"lowercase": "Jacoby Bancroft",
"twitter": "@jbancroft815",
"percentage": "76",
},
{
"id": "Blunden",
"lowercase": "Jacob Blunden",
"twitter": "@JacobBlunden",
"percentage": "76",
},
{
"id": "Parker",
"lowercase": "Robert Parker",
"twitter": "@rbrtprkr98",
"percentage": "70",
},
{
"id": "Damon",
"lowercase": "Alex Damon",
"twitter": "@StarWarsExplain",
"percentage": "64",
},
{
"id": "Hanna",
"lowercase": "Brandon Hanna",
"twitter": "@BrandonHanna07",
"percentage": "65",
},
{
"id": "Saul",
"lowercase": "Saul",
"twitter": "@SchmoedownSaul",
"percentage": "63",
},
{
"id": "Smith",
"lowercase": "Kevin Smith",
"twitter": "@ThatKevinSmith",
"percentage": "70",
},
{
"id": "Paramo",
"lowercase": "Jader Paramo",
"twitter": "@Infamousj13",
"percentage": "67",
},
{
"id": "Newman",
"lowercase": "Griffin Newman",
"twitter": "@GriffLightning",
"percentage": "73",
},
{
"id": "Nemiroff",
"lowercase": "Perri Nemiroff",
"twitter": "@PNemiroff",
"percentage": "69",
},
{
"id": "Mancuso",
"lowercase": "Vinnie Mancuso",
"twitter": "@VinnieMancuso1",
"percentage": "60",
},
{
"id": "White",
"lowercase": "James White",
"twitter": "@G4TOR24",
"percentage": "75",
},
{
"id": "Chandler",
"lowercase": "Brianne Chandler",
"twitter": "@MissMovies",
"percentage": "67",
},
{
"id": "Washington",
"lowercase": "Jay Washington",
"twitter": "@MrJayWashington",
"percentage": "50",
},
{
"id": "Fyffe",
"lowercase": "Emma Fyffe",
"twitter": "@EmmaFyffe",
"percentage": "52",
},
{
"id": "Graves",
"lowercase": "Sabina Graves",
"twitter": "@SabinaHasNoR",
"percentage": "45",
},
{
"id": "Montano",
"lowercase": "Robert Montano",
"twitter": "@Mr_Rob_LTTP",
"percentage": "62",
},
];
competitorlist2 = shuffle(competitorlist2);
var competitorlist = []
competitorlist[0] = competitorlist2[0];
competitorlist[1] = competitorlist2[1];
competitorlist[2] = competitorlist2[2];
competitorlist[3] = competitorlist2[3];
competitorlist[4] = competitorlist2[4];
competitorlist[5] = competitorlist2[5];
competitorlist[6] = competitorlist2[6];
competitorlist[7] = competitorlist2[7];
competitorlist[8] = competitorlist2[8];
competitorlist[9] = competitorlist2[9];
competitorlist[10] = competitorlist2[10];
competitorlist[11] = competitorlist2[11];
competitorlist[12] = competitorlist2[12];
competitorlist[13] = competitorlist2[13];
competitorlist[14] = competitorlist2[14];
competitorlist[15] = competitorlist2[15];
competitorlist[16] = competitorlist2[16];
competitorlist[17] = competitorlist2[17];
competitorlist[18] = competitorlist2[18];
competitorlist[19] = competitorlist2[19];
competitorlist[20] = competitorlist2[20];
competitorlist[21] = competitorlist2[21];
competitorlist[22] = competitorlist2[22];
competitorlist[23] = competitorlist2[23];
competitorlist[24] = competitorlist2[24];
competitorlist[25] = competitorlist2[25];
competitorlist[26] = competitorlist2[26];
competitorlist[27] = competitorlist2[27];
competitorlist[28] = competitorlist2[28];
competitorlist[29] = competitorlist2[29];
competitorlist[30] = competitorlist2[30];
competitorlist[31] = competitorlist2[31];
competitorlist[32] = competitorlist2[32];
competitorlist[33] = competitorlist2[33];
competitorlist[34] = competitorlist2[34];
competitorlist[35] = competitorlist2[35];
competitorlist[36] = competitorlist2[36];
competitorlist[37] = competitorlist2[37];
competitorlist[38] = competitorlist2[38];
competitorlist[39] = competitorlist2[39];
competitorlist[40] = competitorlist2[40];
competitorlist[41] = competitorlist2[41];
competitorlist[42] = competitorlist2[42];
competitorlist[43] = competitorlist2[43];
competitorlist[44] = competitorlist2[44];
competitorlist[45] = competitorlist2[45];
var percentage = 0;
var percentagep5 = 0;
var percentagep2 = 0;
var percentagep3 = 0;
var percentagep4 = 0;
var vraag = 0;
var afvallers = 0;
var remain = (competitorlist.length- afvallers);
var quescount= 0;
var rounds = 0;
var quescor = 0;

function stats() {
var accuracy = ((quescor / quescount) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 30%; margin-left: 300px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + "</tr><tr class=tr2><td class=td2><b>Rounds survived</b></td><td class=td2>" + rounds + "</td>" + "</tr class=tr2><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td>" + "</tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td>" + "</tr></table>";
		document.getElementById("AnsweredQuestions_F4").value = parseInt(document.getElementById("AnsweredQuestions_F4").value) +  quescount;
		document.getElementById("CorrectQuestions_F4").value = parseInt(document.getElementById("CorrectQuestions_F4").value) +  quescor;
		document.getElementById("PossiblePoints_F4").value = parseInt(document.getElementById("PossiblePoints_F4").value)  +  quescount;
		document.getElementById("TotalPoints_F4").value = parseInt(document.getElementById("TotalPoints_F4").value) +  quescor;
	        message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "&nbsp" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>" + "&nbsp" + "<div class='tooltip'><button class=buttons001 style='background-color: #1d9bf0;' onclick=tweetbutton()>Tweet result</button><span class='tooltiptext'>Pressing this button automatically saves a printscreen and allows you to share the result on Twitter</span></div>";
		message004.setAttribute("data-html2canvas-ignore", true);
		document.getElementById("message006").style.top = "15px";
		document.getElementById("message004").style.top = "-195px";
}
function newLoc() {
  window.location.assign("https://thethommerd.github.io/Schmoedown/Free4All.html");
}
function pregame(){
	document.getElementById("time001").style.display = "initial";
	message001.innerHTML = "Click Begin to start the match.";
	message005.innerHTML = "<strong><font size=4>FREE4ALL</font><br/></br>5 COMPETITORS EACH ROUND, 45 COMPETITORS IN TOTAL</br></br>COMPETITORS RECEIVE 5 QUESTIONS PER ROUND<br/><br/>YOU HAVE 20 SECONDS TO READ THE QUESTION AND SUBMIT YOUR ANSWER</br>YOU CAN SUBMIT YOUR ANSWER BY CLICKING THE SUBMIT BUTTON OR BY HITTING THE ENTER KEY</br></br>ALL QUESTIONS ARE WORTH 1 POINT</br></br>PLAYERS WITH THE LOWEST POINT TOTAL EACH ROUND ARE ELIMINATED<br/></br>NO REPEATS AVAILABLE</br></br>YOU CAN CHALLENGE ANY RULING BY CLICKING THE 'CHALLENGE' BUTTON</br>JUDGE YOUR CHALLENGE BY CLICKING THE 'WIN CHALLENGE' OR 'LOSE CHALLENGE' BUTTON</br>REVERSALS LET YOU KEEP YOUR CHALLENGE</strong>";
	document.getElementById("message005").style.position = "relative";
	document.getElementById("message005").style.top = "-75px";
message003.innerHTML = "<button id=begin class=buttons002 onclick=begin001()>Begin</button>";
	document.getElementById("message003").style.top = "15px";
	message006.innerHTML =  "First category is " +question001[0].cat;
	document.getElementById("message006").style.position = "relative";
	document.getElementById("message006").style.top = "-115px";
	message004.innerHTML = "";
}

var eliminate2 = 0;
var eliminate3 = 0;
var eliminate4 = 0;
var eliminate5 = 0;
var afvaller1 = "";
var afvaller2 = "";
var afvaller3 = "";
var afvaller4 = "";

	var a = 0;
        a++;
        var r = 0;
        r++;
        var q = 0;
        q++;
        var b = 0;
        var s = 0;
        var t = 0;
        var u = 0;
        var v = 0;
	var j = 3;
	j--;
	var h = 2;
	h--;
var c;
	var minimum = 0;

function roundchecker(){
	remain = (competitorlist.length- afvallers);
	document.getElementById("time001").style.visibility = "hidden";
	document.getElementById("q1").style.visibility = "hidden";
	message001.innerHTML = "Click Next to proceed.";
	message005.innerHTML = "";
	message002.innerHTML = "";
if ((eliminate2 == 0) && (eliminate3 == 0) && (eliminate4 == 0) && (eliminate5 == 0)){
if (remain == 0){
if ((b > s) && (s == t) && (t == u)  && (u == v)){ 
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
	    document.getElementById("message002").style.top = "-45px";
rounds++;
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
}
}
	minimum = Math.min(b, s, t, u, v);

if ( (b == s) && (b == t) && (b == u) && (b == v) ){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} //00000 of 11111


else if ( (b < s) && (b < t) && (b < u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();

}//01111
else if ( (b == s) && (b < t) && (b < u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//00111
else if ( (b == s) && (b == t) && (b < u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//00011
else if ( (b == s) && (b < t) && (b == u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//00101
else if ( (b < s) && (b == t) && (b < u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//01011
else if ( (b < s) && (b == t) && (b == u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//01001
else if ( (b < s) && (b < t) && (b == u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//01101
else if ( (b < s) && (b < t) && (b < u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//01110
else if ( (b == s) && (b < t) && (b < u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//00110
else if ( (b == s) && (b == t) && (b < u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//00010
else if ( (b == s) && (b < t) && (b == u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//00100
else if ( (b < s) && (b == t) && (b < u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//01010
else if ( (b < s) && (b == t) && (b == u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//01000
else if ( (b < s) && (b < t) && (b == u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//01100
else if ( (b == s) && (b == t) && (b == u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//00001


else if ((s == minimum) && (t != minimum) && (u != minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);

if (remain >= 1){
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 2


else if ((s != minimum) && (t == minimum) && (u != minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
if (remain >= 1){
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 3

else if ((s != minimum) && (t != minimum) && (u == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player004").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
if (remain >= 1){
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>";
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 4

else if ((s != minimum) && (t != minimum) && (u != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player005").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	remain = (competitorlist.length- afvallers);
if (remain >= 1){
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 5


else if ((s == minimum) && (t == minimum) && (u != minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player003").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	remain = (competitorlist.length- afvallers);
if (remain >= 2){
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " and " + competitorlist[(num + 2)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 1){
	message003.innerHTML =  afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>";
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 23

else if ((s == minimum) && (t != minimum) && (u == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player004").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	remain = (competitorlist.length- afvallers);
if (remain >= 2){
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " and " + competitorlist[(num + 2)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 1){
	message003.innerHTML =  afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 24

else if ((s == minimum) && (t != minimum) && (u != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player005").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1); 
	remain = (competitorlist.length- afvallers);
if (remain >= 2){
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " and " + competitorlist[(num + 2)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 1){
	message003.innerHTML =  afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 25

else if ((s != minimum) && (t == minimum) && (u == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player004").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	remain = (competitorlist.length- afvallers);
if (remain >= 2){
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " and " + competitorlist[(num + 2)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 1){
	message003.innerHTML =  afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat; 
}// 34

else if ((s != minimum) && (t == minimum) && (u != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player005").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1); 
	remain = (competitorlist.length- afvallers);
if (remain >= 2){
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " and " + competitorlist[(num + 2)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 1){
	message003.innerHTML =  afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 35

else if ((s != minimum) && (t != minimum) && (u == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player004").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player005").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	remain = (competitorlist.length- afvallers);
if (remain >= 2){
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " and " + competitorlist[(num + 2)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 1){
	message003.innerHTML =  afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 45

else if ((s == minimum) && (t == minimum) && (u == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player003").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	afvaller003 = document.getElementById("player004").innerHTML;
	afvaller03 = afvaller003.toLowerCase(); 
	afvaller3 = afvaller03.charAt(0).toUpperCase() + afvaller03.slice(1);
	remain = (competitorlist.length- afvallers);
if (remain >= 3){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + ", " + competitorlist[(num + 2)].lowercase + " and " + competitorlist[(num + 3)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 2){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 +  " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " and " + competitorlist[(num + 2)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 1){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat; 
}// 234

else if ((s == minimum) && (t == minimum) && (u != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player003").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	afvaller003 = document.getElementById("player005").innerHTML;
	afvaller03 = afvaller003.toLowerCase(); 
	afvaller3 = afvaller03.charAt(0).toUpperCase() + afvaller03.slice(1);
	remain = (competitorlist.length- afvallers);
if (remain >= 3){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + ", " + competitorlist[(num + 2)].lowercase + " and " + competitorlist[(num + 3)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 2){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 +  " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " and " + competitorlist[(num + 2)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 1){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat; 
}// 235

else if ((s == minimum) && (t != minimum) && (u == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player004").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	afvaller003 = document.getElementById("player005").innerHTML;
	afvaller03 = afvaller003.toLowerCase(); 
	afvaller3 = afvaller03.charAt(0).toUpperCase() + afvaller03.slice(1); 
	remain = (competitorlist.length- afvallers);
if (remain >= 3){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + ", " + competitorlist[(num + 2)].lowercase + " and " + competitorlist[(num + 3)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 2){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 +  " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " and " + competitorlist[(num + 2)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 1){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 245


else if ((s != minimum) && (t == minimum) && (u == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player004").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	afvaller003 = document.getElementById("player005").innerHTML;
	afvaller03 = afvaller003.toLowerCase(); 
	afvaller3 = afvaller03.charAt(0).toUpperCase() + afvaller03.slice(1);
	remain = (competitorlist.length- afvallers);
if (remain >= 3){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + ", " + competitorlist[(num + 2)].lowercase + " and " + competitorlist[(num + 3)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 2){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 +  " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " and " + competitorlist[(num + 2)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 1){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 345

else if ((s == minimum) && (t == minimum) && (u == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player003").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	afvaller003 = document.getElementById("player004").innerHTML;
	afvaller03 = afvaller003.toLowerCase(); 
	afvaller3 = afvaller03.charAt(0).toUpperCase() + afvaller03.slice(1);
	afvaller004 = document.getElementById("player005").innerHTML;
	afvaller04 = afvaller004.toLowerCase(); 
	afvaller4 = afvaller04.charAt(0).toUpperCase() + afvaller04.slice(1);
	remain = (competitorlist.length- afvallers);
if (remain >= 4){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + ", " + afvaller3 + " and " + afvaller4 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + ", " + competitorlist[(num + 2)].lowercase + ", " + competitorlist[(num + 3)].lowercase + " and " + competitorlist[(num + 4)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 3){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + ", " + afvaller3 + " and " + afvaller4 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + ", " + competitorlist[(num + 2)].lowercase + " and " + competitorlist[(num + 3)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 2){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + ", " + afvaller3 + " and " + afvaller4 +  " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " and " + competitorlist[(num + 2)].lowercase + " enter the match" + "</br></br>" ;
}
else if (remain == 1){
	message003.innerHTML = afvaller1 + ", " + afvaller2 + ", " + afvaller3 + " and " + afvaller4 + " have been eliminated" + "</br></br>" + competitorlist[(num + 1)].lowercase + " enters the match" + "</br></br>" ;
}
else {
	message003.innerHTML = afvaller1 + ", " + afvaller2 + ", " + afvaller3 + " and " + afvaller4 + " have been eliminated" + "</br></br>" ;
}
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 2345
}

else if ((eliminate2 == 1) && (eliminate3 == 0) && (eliminate4 == 0) & (eliminate5 == 0)){
minimum = Math.min(t, u, v);

if ((b == t) && (b == u) && (b == v) ){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} //0000 of 1111
else if ((b > t) && (t == u) && (u == v) ){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
	    document.getElementById("message002").style.top = "-45px";
rounds++;
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} //1000
else if ((b < t) && (b < u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0111
else if ((b == t) && (b < u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0011
else if ((b < t) && (b == u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0101
else if ((b == t) && (b == u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0001
else if ((b < t) && (b < u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0110
else if ((b == t) && (b < u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0010
else if ((b < t) && (b == u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0100

else if ((t == minimum) && (u != minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 3

else if ((t != minimum) && (u == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player004").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>";
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 4

else if ((t != minimum) && (u != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player005").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 5


else if ((t == minimum) && (u == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player004").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	remain = (competitorlist.length- afvallers);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat; 
}// 34

else if ((t == minimum) && (u != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player005").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1); 
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 35

else if ((t != minimum) && (u == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player004").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player005").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 45

else if ((t == minimum) && (u == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player004").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	afvaller003 = document.getElementById("player005").innerHTML;
	afvaller03 = afvaller003.toLowerCase(); 
	afvaller3 = afvaller03.charAt(0).toUpperCase() + afvaller03.slice(1);
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 345
}


else if ((eliminate2 == 0) && (eliminate3 == 1) && (eliminate4 == 0) & (eliminate5 == 0)){
	minimum = Math.min(s, u, v);
if ((b == s) && (b == u) && (b == v) ){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} //0000 of 1111
else if ((b > s) && (s == u) && (u == v) ){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
	    document.getElementById("message002").style.top = "-45px";
rounds++;
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} //1000
else if ((b < s) && (b < u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0111
else if ((b == s) && (b < u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0011
else if ((b < s) && (b == u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0101
else if ((b == s) && (b == u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0001
else if ((b < s) && (b < u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0110
else if ((b == s) && (b < u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0010
else if ((b < s) && (b == u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0100


else if ((s == minimum) && (u != minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 2

else if ((s != minimum) && (u == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player004").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>";
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 4

else if ((s != minimum) && (u != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player005").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 5


else if ((s == minimum) && (u == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player004").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	remain = (competitorlist.length- afvallers);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat; 
}// 24

else if ((s == minimum) && (u != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player005").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1); 
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 25

else if ((s != minimum) && (u == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player004").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player005").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 45

else if ((s == minimum) && (u == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player004").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	afvaller003 = document.getElementById("player005").innerHTML;
	afvaller03 = afvaller003.toLowerCase(); 
	afvaller3 = afvaller03.charAt(0).toUpperCase() + afvaller03.slice(1);
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 245
}

else if ((eliminate2 == 0) && (eliminate3 == 0) && (eliminate4 == 1) & (eliminate5 == 0)){
	minimum = Math.min(s, t, v);
if ((b == s) && (b == t) && (b == v) ){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} //0000 of 1111
else if ((b > s) && (s == t) && (t == v) ){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
	    document.getElementById("message002").style.top = "-45px";
rounds++;
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} //1000
else if ((b < s) && (b < t) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0111
else if ((b == s) && (b < t) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0011
else if ((b < s) && (b == t) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0101
else if ((b == s) && (b == t) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0001
else if ((b < s) && (b < t) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0110
else if ((b == s) && (b < t) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0010
else if ((b < s) && (b == t) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0100
else if ((s == minimum) && (t != minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 2

else if ((s != minimum) && (t == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>";
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 3

else if ((s != minimum) && (t != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player005").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 5

else if ((s == minimum) && (t == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player003").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	remain = (competitorlist.length- afvallers);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat; 
}// 23

else if ((s == minimum) && (t != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player005").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1); 
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 25

else if ((s != minimum) && (t == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player005").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 35

else if ((s == minimum) && (t == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player003").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	afvaller003 = document.getElementById("player005").innerHTML;
	afvaller03 = afvaller003.toLowerCase(); 
	afvaller3 = afvaller03.charAt(0).toUpperCase() + afvaller03.slice(1);
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 235
}


else if ((eliminate2 == 0) && (eliminate3 == 0) && (eliminate4 == 0) & (eliminate5 == 1)){
	minimum = Math.min(s, t, u);
if ((b == s) && (b == t) && (b == u) ){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} //0000 of 1111
else if ((b > s) && (s == t) && (t == u) ){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
	    document.getElementById("message002").style.top = "-45px";
rounds++;
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} //1000
else if ((b < s) && (b < t) && (b < u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0111
else if ((b == s) && (b < t) && (b < u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0011
else if ((b < s) && (b == t) && (b < u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0101
else if ((b == s) && (b == t) && (b < u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0001
else if ((b < s) && (b < t) && (b == u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0110
else if ((b == s) && (b < t) && (b == u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0010
else if ((b < s) && (b == t) && (b == u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//0100
else if ((s == minimum) && (t != minimum) && (u != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 2

else if ((s != minimum) && (t == minimum) && (u != minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>";
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 3

else if ((s != minimum) && (t != minimum) && (u == minimum)){
	afvaller001 = document.getElementById("player004").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 4

else if ((s == minimum) && (t == minimum) && (u != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player003").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	remain = (competitorlist.length- afvallers);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat; 
}// 23

else if ((s == minimum) && (t != minimum) && (u == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player004").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1); 
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 24

else if ((s != minimum) && (t == minimum) && (u == minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player004").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 34

else if ((s == minimum) && (t == minimum) && (u == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player003").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	afvaller003 = document.getElementById("player004").innerHTML;
	afvaller03 = afvaller003.toLowerCase(); 
	afvaller3 = afvaller03.charAt(0).toUpperCase() + afvaller03.slice(1);
	message003.innerHTML = afvaller1 + ", " + afvaller2 + " and " + afvaller3 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 234
}

else if ((eliminate2 == 1) && (eliminate3 == 1) && (eliminate4 == 0) & (eliminate5 == 0)){
minimum = Math.min(u, v);
if ((b == u) && (b == v) ){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} //000 of 111
else if ((b > u) && (u == v)){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
	    document.getElementById("message002").style.top = "-45px";
rounds++;
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} //100
else if ((b < u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//011
else if ((b == u) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//001
else if ((b < u) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//010
else if ((u == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player004").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 4

else if ((u != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player005").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 5

else if ((u == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player004").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player005").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 45
}


else if ((eliminate2 == 1) && (eliminate3 == 0) && (eliminate4 == 1) & (eliminate5 == 0)){
minimum = Math.min(t, v);
if ((b == t) && (b == v) ){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} //000 of 111
else if ((b > t) && (t == v)){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
	    document.getElementById("message002").style.top = "-45px";
rounds++;
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} //100
else if ((b < t) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//011
else if ((b == t) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//001
else if ((b < t) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//010
else if ((t == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 3

else if ((t != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player005").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 5

else if ((t == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player005").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 35
}


else if ((eliminate2 == 1) && (eliminate3 == 0) && (eliminate4 == 0) & (eliminate5 == 1)){
minimum = Math.min(t, u);
if ((b == t) && (b == u) ){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} //000 of 111
else if ((b > t) && (t == u)){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
	    document.getElementById("message002").style.top = "-45px";
rounds++;
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} //100
else if ((b < t) && (b < u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//011
else if ((b == t) && (b < u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//001
else if ((b < t) && (b == u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//010
else if ((t == minimum) && (u != minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 3

else if ((t != minimum) && (u == minimum)){
	afvaller001 = document.getElementById("player004").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 4

else if ((t == minimum) && (u == minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player004").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 34
}

else if ((eliminate2 == 0) && (eliminate3 == 1) && (eliminate4 == 1) & (eliminate5 == 0)){
minimum = Math.min(s, v);
if ((b == s) && (b == v) ){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} //000 of 111
else if ((b > s) && (s == v)){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
		document.getElementById("wins_F4").stepUp(1);
	    document.getElementById("message002").style.top = "-45px";
rounds++;
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} //100
else if ((b < s) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//011
else if ((b == s) && (b < v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//001
else if ((b < s) && (b == v) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//010
else if ((s == minimum) && (v != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 2

else if ((s != minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player005").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 5

else if ((s == minimum) && (v == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player005").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 25
}

else if ((eliminate2 == 0) && (eliminate3 == 1) && (eliminate4 == 0) & (eliminate5 == 1)){
minimum = Math.min(s, u);
if ((b == s) && (b == u) ){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} //000 of 111
else if ((b > s) && (s == u)){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
	    document.getElementById("message002").style.top = "-45px";
rounds++;
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} //100
else if ((b < s) && (b < u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//011
else if ((b == s) && (b < u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//001
else if ((b < s) && (b == u) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//010
else if ((s == minimum) && (u != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 2

else if ((s != minimum) && (u == minimum)){
	afvaller001 = document.getElementById("player004").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 4

else if ((s == minimum) && (u == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player004").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 24
}

else if ((eliminate2 == 0) && (eliminate3 == 0) && (eliminate4 == 1) & (eliminate5 == 1)){
minimum = Math.min(s, t);
if ((b == s) && (b == t) ){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} //000 of 111
else if ((b > s) && (s == t)){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
	    document.getElementById("message002").style.top = "-45px";
rounds++;
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} //100
else if ((b < s) && (b < t) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//011
else if ((b == s) && (b < t) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//001
else if ((b < s) && (b == t) ){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You have been eliminated";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
document.getElementById("save").click();
}//010
else if ((s == minimum) && (t != minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 2

else if ((s != minimum) && (t == minimum)){
	afvaller001 = document.getElementById("player003").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	message003.innerHTML = afvaller1 + " has been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 3

else if ((s == minimum) && (t == minimum)){
	afvaller001 = document.getElementById("player002").innerHTML;
	afvaller01 = afvaller001.toLowerCase(); 
	afvaller1 = afvaller01.charAt(0).toUpperCase() + afvaller01.slice(1);
	afvaller002 = document.getElementById("player003").innerHTML;
	afvaller02 = afvaller002.toLowerCase(); 
	afvaller2 = afvaller02.charAt(0).toUpperCase() + afvaller02.slice(1);
	message003.innerHTML = afvaller1 + " and " + afvaller2 + " have been eliminated" + "</br></br>" ;
        message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
}// 23
}

else if ((eliminate2 == 1) && (eliminate3 == 1) && (eliminate4 == 1) & (eliminate5 == 0)){
if (b == v){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} 
else if (b > v){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
	    document.getElementById("message002").style.top = "-45px";
rounds++;
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} 
else if (b < v){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You ended at second place";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
}
}

else if ((eliminate2 == 1) && (eliminate3 == 1) && (eliminate4 == 0) & (eliminate5 == 1)){
if (b == u){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} 
else if (b > u){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
	    document.getElementById("message002").style.top = "-45px";
rounds++;
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} 
else if (b < u){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You ended at second place";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
}
}


else if ((eliminate2 == 1) && (eliminate3 == 0) && (eliminate4 == 1) & (eliminate5 == 1)){
if (b == t){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} 
else if (b > t){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
	    document.getElementById("message002").style.top = "-45px";
rounds++;
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} 
else if (b < t){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You ended at second place";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
}
}

else if ((eliminate2 == 0) && (eliminate3 == 1) && (eliminate4 == 1) & (eliminate5 == 1)){
if (b == s){
message003.innerHTML = "Nobody will be eliminated this round";
message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
} 
else if (b > s){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message006.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message002.innerHTML = "";
                message003.innerHTML = "";
                message005.innerHTML = "";
	    document.getElementById("message002").style.top = "-45px";
rounds++;
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
} 
else if (b < s){
message001.innerHTML = "End of Match.";
message003.innerHTML = "You ended at second place";
document.getElementById("losses_F4").stepUp(1);
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
}
}

else if ((eliminate2 == 1) && (eliminate3 == 1) && (eliminate4 == 1) & (eliminate5 == 1)){
		message001.innerHTML = "End of Match";
			document.getElementById("message002").style.fontSize = "200%";
			document.getElementById("message002").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...." + "<br/><br/>" + player001.innerHTML;
                message003.innerHTML = "";
                message005.innerHTML = "";
	    document.getElementById("message002").style.top = "-45px";
rounds++;
		document.getElementById("wins_F4").stepUp(1);
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>"; stats();
}
}


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
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
	document.getElementById("q2").style.visibility = "hidden";
	document.getElementById("q3").style.visibility = "hidden";
	document.getElementById("submit3").style.visibility = "hidden";
	document.getElementById("q2").style.display = "none";
	document.getElementById("q3").style.display = "none";
	document.getElementById("submit3").style.display = "none";
	message001.innerHTML = "Choose your opponent.";
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
  	twitter002.innerHTML = competitorlist[num].twitter;
	percentagep2 = competitorlist[num].percentage;
	afvallers++; 
num++;
  	nummer3.innerHTML = hastag + ((num + 2)) ;
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	afvallers++; 
num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	afvallers++; 
num++;
  	nummer5.innerHTML = hastag + ((num +2));
  	twitter005.innerHTML = competitorlist[num].twitter;
 	player005.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep5 = competitorlist[num].percentage;
	afvallers++; 
remain = (competitorlist.length- afvallers);
pregame();
}

function skip () {
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
  	twitter002.innerHTML = competitorlist[num].twitter;
	percentagep2 = competitorlist[num].percentage;
	afvallers++; 
num++;
  	nummer3.innerHTML = hastag + ((num + 2)) ;
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	afvallers++; 
num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	afvallers++; 
num++;
  	nummer5.innerHTML = hastag + ((num + 2)) ;
  	twitter005.innerHTML = competitorlist[num].twitter;
 	player005.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep5 = competitorlist[num].percentage;
	afvallers++; 
remain = (competitorlist.length- afvallers);
pregame();
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


function simulatecomp(){
var chance1 = Math.random() * 100;
if (chance1 < percentagep2){
score002.innerHTML = s+=1;
}
var chance2 = Math.random() * 100;
if (chance2 < percentagep3){
score003.innerHTML = t+=1;
}
var chance3 = Math.random() * 100;
if (chance3 < percentagep4){
score004.innerHTML = u+=1;
}
var chance4 = Math.random() * 100;
if (chance4 < percentagep5){
score005.innerHTML = v+=1;
}
if (eliminate2 == 1){
            score002.innerHTML = "X";
}
if (eliminate3 == 1){
            score003.innerHTML = "X";
}
if (eliminate4 == 1){
            score004.innerHTML = "X";
}
if (eliminate5 == 1){
            score005.innerHTML = "X";
}
}

question001 = shuffle(question001); 

function begin001() {
	    intromusic.pause();
	    intromusic.currentTime = 0;
	    qmusic.play();
            c = 21;
                time001.innerHTML = 20;
	    document.getElementById("time001").style.visibility = "visible";
	    document.getElementById("time001").style.top = "-7px";
	    document.getElementById("message005").style.position = "relative";
	    document.getElementById("message005").style.top = "-55px";
	    document.getElementById("message006").style.position = "relative";
	    document.getElementById("message006").style.top = "-55px";
	    document.getElementById("message003").style.position = "relative";
	    document.getElementById("message003").style.top = "-55px";
	    document.getElementById("message004").style.position = "relative";
	    document.getElementById("message004").style.top = "-55px";
            message001.innerHTML = question001[0].ques;
            message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
document.getElementById("q1").focus();
	    document.getElementById("q1").style.position = "relative";
	    document.getElementById("q1").style.top = "-300px";
	    document.getElementById("submit2").style.position = "relative";
	    document.getElementById("submit2").style.top = "-300px";
            message003.innerHTML = "";
            message005.innerHTML = "";
            message006.innerHTML = "";
            a++;
            round001.innerHTML = r++;
            qu001.innerHTML = "QUESTION 1 - " +question001[0].cat.toUpperCase();
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
            score001.innerHTML = b+=1;
quescor++;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
}

function ChallengeDenied(){
if (j == 2) {
	     h--;
	     h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
}
else if (j == 1) {
	     h--;
	     h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
	          }
else if (j == 0) {
	   h--;
	     h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
	          }
 else if (j < 0) {
	    h--;
	    h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
	      }
}

function myTrim(x) {
  return x.replace(/^\s+|\s+$/gm,'');
}


function checker(){
		qmusic.pause();
		qmusic.currentTime = 0;
quescount++;
similarity1 = 0;
similarity2 = 0;
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
if ((a == 6) ||(a == 11)||(a == 16)||(a == 21)||(a == 26)||(a == 31)||(a == 36)||(a == 41)||(a == 46)||(a == 51)||(a == 56)||(a == 61)||(a == 66)||(a == 71)||(a == 76)||(a == 81)||(a == 86)||(a == 91)||(a == 96)||(a == 101)||(a == 106)||(a == 111)||(a == 116)||(a == 121)||(a == 126)||(a == 131)||(a == 136)||(a == 141)||(a == 146)||(a == 151)||(a == 156)||(a == 161)||(a == 166)||(a == 171)||(a == 176)||(a == 181)||(a == 186)||(a == 191)||(a == 196)||(a == 201)||(a == 206)||(a == 211)||(a == 216)||(a == 221)||(a == 226)||(a == 231)) {
	    message006.innerHTML =  "";
            message004.innerHTML = "<button class=buttons002 onclick=roundchecker()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
}
else {
	    message006.innerHTML =  "Next category is " +question001[(vraag + 1)].cat;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
simulatecomp();
	     }
            else if (question1 != question001[vraag].answ)  {
            message003.innerHTML = "Incorrect. The correct answer is " + question001[vraag].answ2;
	    message005.innerHTML = "";
	    incmusic.play();
if ((a == 6) ||(a == 11)||(a == 16)||(a == 21)||(a == 26)||(a == 31)||(a == 36)||(a == 41)||(a == 46)||(a == 51)||(a == 56)||(a == 61)||(a == 66)||(a == 71)||(a == 76)||(a == 81)||(a == 86)||(a == 91)||(a == 96)||(a == 101)||(a == 106)||(a == 111)||(a == 116)||(a == 121)||(a == 126)||(a == 131)||(a == 136)||(a == 141)||(a == 146)||(a == 151)||(a == 156)||(a == 161)||(a == 166)||(a == 171)||(a == 176)||(a == 181)||(a == 186)||(a == 191)||(a == 196)||(a == 201)||(a == 206)||(a == 211)||(a == 216)||(a == 221)||(a == 226)||(a == 231)) {
	    message006.innerHTML =  "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=roundchecker()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
}
else {
	    message006.innerHTML =  "Next category is " +question001[(vraag +1)].cat;
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
}
simulatecomp();
            }
	   
}

function next001() {
	qmusic.play();
	    document.getElementById("time001").style.display = "initial";
	    document.getElementById("time001").style.visibility = "visible";
	    document.getElementById("time001").style.top = "-7px";
	    document.getElementById("chalacc").style.display = "initial";
	    document.getElementById("chalden").style.display = "initial";
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";

            if ((a == 2) ||(a == 7)||(a == 12)||(a == 17)||(a == 22)||(a == 27)||(a == 32)||(a == 37)||(a == 42)||(a == 47)||(a == 52)||(a == 57)||(a == 62)||(a == 67)||(a == 72)||(a == 77)||(a == 82)||(a == 87)||(a == 92)||(a == 97)||(a == 102)||(a == 107)||(a == 112)||(a == 117)||(a == 122)||(a == 127)||(a == 132)||(a == 137)||(a == 142)||(a == 147)||(a == 152)||(a == 157)||(a == 162)||(a == 167)||(a == 172)||(a == 177)||(a == 182)||(a == 187)||(a == 192)||(a == 197)||(a == 202)||(a == 207)||(a == 212)||(a == 217)||(a == 222)||(a == 227)) {
		vraag++;
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[vraag].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
            	qu001.innerHTML = "QUESTION 2 - " +question001[vraag].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            	    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }

            else if ((a == 3)||(a == 8)||(a == 13)||(a == 18)||(a == 23)||(a == 28)||(a == 33)||(a == 38)||(a == 43)||(a == 48)||(a == 53)||(a == 58)||(a == 63)||(a == 68)||(a == 73)||(a == 78)||(a == 83)||(a == 88)||(a == 93)||(a == 98)||(a == 103)||(a == 108)||(a == 113)||(a == 118)||(a == 123)||(a == 128)||(a == 133)||(a == 138)||(a == 143)||(a == 148)||(a == 153)||(a == 158)||(a == 163)||(a == 168)||(a == 173)||(a == 178)||(a == 183)||(a == 188)||(a == 193)||(a == 198)||(a == 203)||(a == 208)||(a == 213)||(a == 218)||(a == 223)||(a == 228))  {
		vraag++;
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[vraag].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
                qu001.innerHTML = "QUESTION 3 - " +question001[vraag].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }

            else if ((a == 4) ||(a == 9)||(a == 14)||(a == 19)||(a == 24)||(a == 29)||(a == 34)||(a == 39)||(a == 44)||(a == 49)||(a == 54)||(a == 59)||(a == 64)||(a == 69)||(a == 74)||(a == 79)||(a == 84)||(a == 89)||(a == 94)||(a == 99)||(a == 104)||(a == 109)||(a == 114)||(a == 119)||(a == 124)||(a == 129)||(a == 134)||(a == 139)||(a == 144)||(a == 149)||(a == 154)||(a == 159)||(a == 164)||(a == 169)||(a == 174)||(a == 179)||(a == 184)||(a == 189)||(a == 194)||(a == 199)||(a == 204)||(a == 209)||(a == 214)||(a == 219)||(a == 224)||(a == 229))  {
		vraag++;
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[vraag].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
                qu001.innerHTML = "QUESTION 4 - " +question001[vraag].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }

            else if ((a == 5) ||(a == 10)||(a == 15)||(a == 20)||(a == 25)||(a == 30)||(a == 35)||(a == 40)||(a == 45)||(a == 50)||(a == 55)||(a == 60)||(a == 65)||(a == 70)||(a == 75)||(a == 80)||(a == 85)||(a == 90)||(a == 95)||(a == 100)||(a == 105)||(a == 110)||(a == 115)||(a == 120)||(a == 125)||(a == 130)||(a == 135)||(a == 140)||(a == 145)||(a == 150)||(a == 155)||(a == 160)||(a == 165)||(a == 170)||(a == 175)||(a == 180)||(a == 185)||(a == 190)||(a == 195)||(a == 200)||(a == 205)||(a == 210)||(a == 215)||(a == 220)||(a == 225)||(a == 230)) {
		vraag++;
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[vraag].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 		qu001.innerHTML = "QUESTION 5 - " +question001[vraag].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=roundchecker()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }

            else if ((a == 6) ||(a == 11)||(a == 16)||(a == 21)||(a == 26)||(a == 31)||(a == 36)||(a == 41)||(a == 46)||(a == 51)||(a == 56)||(a == 61)||(a == 66)||(a == 71)||(a == 76)||(a == 81)||(a == 86)||(a == 91)||(a == 96)||(a == 101)||(a == 106)||(a == 111)||(a == 116)||(a == 121)||(a == 126)||(a == 131)||(a == 136)||(a == 141)||(a == 146)||(a == 151)||(a == 156)||(a == 161)||(a == 166)||(a == 171)||(a == 176)||(a == 181)||(a == 186)||(a == 191)||(a == 196)||(a == 201)||(a == 206)||(a == 211)||(a == 216)||(a == 221)||(a == 226)||(a == 231)) {
	remain = (competitorlist.length- afvallers);
	if ((s == minimum) && (t != minimum) && (u != minimum) && (v != minimum)){
	if (remain >= 1 ){
	num++;
  	nummer2.innerHTML = hastag + ((num + 2)) ;
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate2 = 1;
	percentagep2 = 0;
	}
	}// 2
	else if ((s != minimum) && (t == minimum) && (u != minimum) && (v != minimum)){
	if (remain >= 1 ){
	num++;
  	nummer3.innerHTML = hastag + ((num + 2)) ;
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate3 = 1;
	percentagep3 = 0;
	}
	}// 3
	else if ((s != minimum) && (t != minimum) && (u == minimum) && (v != minimum)){
	if (remain >= 1 ){
	num++;
  	nummer4.innerHTML = hastag + ((num + 2)) ;
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate4 = 1;
	percentagep4 = 0;
	}
	}// 4
	else if ((s != minimum) && (t != minimum) && (u != minimum) && (v == minimum)){
	if (remain >= 1 ){
	num++;
  	nummer5.innerHTML = hastag + ((num + 2)) ;
  	twitter005.innerHTML = competitorlist[num].twitter;
 	player005.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep5 = competitorlist[num].percentage;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate5 = 1;
	percentagep5 = 0;
	}
	}// 5
	else if ((s == minimum) && (t == minimum) && (u != minimum) && (v != minimum)){
	if (remain >= 2 ){
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	afvallers++; 
	afvallers++;
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 1) {
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	eliminate3 = 1;
	percentagep3 = 0;
	afvallers++;
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate2 = 1;
	percentagep2 = 0;
	eliminate3 = 1;
	percentagep3 = 0;
	}
	}// 23

	else if ((s == minimum) && (t != minimum) && (u == minimum) && (v != minimum)){
	if (remain >= 2 ){
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	afvallers++; 
	afvallers++;
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 1) {
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	eliminate4 = 1;
	percentagep4 = 0;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate2 = 1;
	percentagep2 = 0;
	eliminate4 = 1;
	percentagep4 = 0;
	}
	}// 24
	else if ((s == minimum) && (t != minimum) && (u != minimum) && (v == minimum)){
	if (remain >= 2 ){
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	num++;
  	nummer5.innerHTML = hastag + ((num + 2));
  	twitter005.innerHTML = competitorlist[num].twitter;
 	player005.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep5 = competitorlist[num].percentage;
	percentagep5 = 0;
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 1) {
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	eliminate5 = 1;
	percentagep5 = 0;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate2 = 1;
	percentagep2 = 0;
	eliminate5 = 1;
	percentagep5 = 0;
	}
	}// 25
	else if ((s != minimum) && (t == minimum) && (u == minimum) && (v != minimum)){
	if (remain >= 2 ){
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 1) {
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	eliminate4 = 1;
	percentagep4 = 0;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {

	eliminate3 = 1;
	percentagep3 = 0;
	eliminate4 = 1;
	percentagep4 = 0;
	}
	}// 34
	else if ((s != minimum) && (t == minimum) && (u != minimum) && (v == minimum)){
	if (remain >= 2 ){
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	num++;
  	nummer5.innerHTML = hastag + ((num + 2));
  	twitter005.innerHTML = competitorlist[num].twitter;
 	player005.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep5 = competitorlist[num].percentage;
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 1) {
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	eliminate5 = 1;
	percentagep5 = 0;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate3 = 1;
	percentagep3 = 0;
	eliminate5 = 1;
	percentagep5 = 0;
	}
	}// 35
	else if ((s != minimum) && (t != minimum) && (u == minimum) && (v == minimum)){
	if (remain >= 2 ){
	num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	num++;
  	nummer5.innerHTML = hastag + ((num + 2));
  	twitter005.innerHTML = competitorlist[num].twitter;
 	player005.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep5 = competitorlist[num].percentage;
	afvallers++;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 1) {
	num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	eliminate5 = 1;
	percentagep5 = 0;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate4 = 1;
	percentagep4 = 0;
	eliminate4 = 1;
	percentagep5 = 0;
	}
	}// 45

	else if ((s == minimum) && (t == minimum) && (u == minimum) && (v != minimum)){
	if (remain >= 3 ){
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	afvallers++; 
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 2) {
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	eliminate4 = 1;
	percentagep4 = 0;
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 1) {
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	eliminate3 = 1;
	percentagep3 = 0;
	eliminate4 = 1;
	percentagep4 = 0;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate2 = 1;
	percentagep2 = 0;
	eliminate3 = 1;
	percentagep3 = 0;
	eliminate4 = 1;
	percentagep4 = 0;
	}
	}// 234

	else if ((s == minimum) && (t == minimum) && (u != minimum) && (v == minimum)){
	if (remain >= 3 ){
	num++;
	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	num++;
  	nummer5.innerHTML = hastag + ((num + 2));
  	twitter005.innerHTML = competitorlist[num].twitter;
 	player005.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep5 = competitorlist[num].percentage;
	afvallers++; 
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 2) {
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	eliminate5 = 1;
	percentagep5 = 0;
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 1) {
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	eliminate3 = 1;
	percentagep3 = 0;
	eliminate5 = 1;
	percentagep5 = 0;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate2 = 1;
	percentagep2 = 0;
	eliminate3 = 1;
	percentagep3 = 0;
	eliminate5 = 1;
	percentagep5 = 0;
	}
	}// 235
	else if ((s == minimum) && (t != minimum) && (u == minimum) && (v == minimum)){
	if (remain >= 3 ){
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	num++;
  	nummer5.innerHTML = hastag + ((num + 2));
  	twitter005.innerHTML = competitorlist[num].twitter;
 	player005.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep5 = competitorlist[num].percentage;
	afvallers++; 
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 2) {
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	eliminate5 = 1;
	percentagep5 = 0;
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 1) {
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	eliminate4 = 1;
	percentagep4 = 0;
	eliminate5 = 1;
	percentagep5 = 0;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate2 = 1;
	percentagep2 = 0;
	eliminate4 = 1;
	percentagep4 = 0;
	eliminate5 = 1;
	percentagep5 = 0;
	}
	}// 245
	else if ((s != minimum) && (t == minimum) && (u == minimum) && (v == minimum)){
	if (remain >= 3 ){
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	num++;
  	nummer5.innerHTML = hastag + ((num + 2));
  	twitter005.innerHTML = competitorlist[num].twitter;
 	player005.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep5 = competitorlist[num].percentage;
	afvallers++; 
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 2) {
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	eliminate5 = 1;
	percentagep5 = 0;
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 1) {
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	eliminate4 = 1;
	percentagep4 = 0;
	eliminate5 = 1;
	percentagep5 = 0;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate3 = 1;
	percentagep3 = 0;
	eliminate4 = 1;
	percentagep4 = 0;
	eliminate5 = 1;
	percentagep5 = 0;
	}
	}// 345

	else if ((s == minimum) && (t == minimum) && (u == minimum) && (v == minimum) && (b != minimum)){
	if (remain >= 4 ){
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	num++;
  	nummer5.innerHTML = hastag + ((num + 2));
  	twitter005.innerHTML = competitorlist[num].twitter;
 	player005.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep5 = competitorlist[num].percentage;	
	afvallers++; 
	afvallers++; 
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 3) {
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	num++;
  	nummer4.innerHTML = hastag + ((num + 2));
  	twitter004.innerHTML = competitorlist[num].twitter;
 	player004.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep4 = competitorlist[num].percentage;
	eliminate5 = 1;
	percentagep5 = 0;
	afvallers++; 
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 2) {
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	num++;
  	nummer3.innerHTML = hastag + ((num + 2));
  	twitter003.innerHTML = competitorlist[num].twitter;
 	player003.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep3 = competitorlist[num].percentage;
	eliminate4 = 1;
	percentagep4 = 0;
	eliminate5 = 1;
	percentagep5 = 0;
	afvallers++; 
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else if (remain == 1) {
	num++;
  	nummer2.innerHTML = hastag + ((num + 2));
  	twitter002.innerHTML = competitorlist[num].twitter;
 	player002.innerHTML = competitorlist[num].id.toUpperCase();
	percentagep2 = competitorlist[num].percentage;
	eliminate3 = 1;
	percentagep3 = 0;
	eliminate4 = 1;
	percentagep4 = 0;
	eliminate5 = 1;
	percentagep5 = 0;
	afvallers++; 
	remain = (competitorlist.length- afvallers);
	}
	else {
	eliminate2 = 1;
	percentagep2 = 0;
	eliminate3 = 1;
	percentagep3 = 0;
	eliminate4 = 1;
	percentagep4 = 0;
	eliminate5 = 1;
	percentagep5 = 0;
	}
	}// 2345
		vraag++;
		s = 0;
		t = 0; 
		u = 0;
		v = 0;
		b = 0;
		score001.innerHTML = 0;
		score002.innerHTML = 0;
		score003.innerHTML = 0;
		score004.innerHTML = 0;
		score005.innerHTML = 0;
if (eliminate2 == 1){
            score002.innerHTML = "X";
}
if (eliminate3 == 1){
            score003.innerHTML = "X";
}
if (eliminate4 == 1){
            score004.innerHTML = "X";
}
if (eliminate5 == 1){
            score005.innerHTML = "X";
}
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[vraag].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                round001.innerHTML = r++;
rounds++;
                 a++;
 		qu001.innerHTML = "QUESTION 1 - " +question001[vraag].cat.toUpperCase();
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
function timer001() {
            c = c - 1;
            if (c < 200) {
                time001.innerHTML = c;
            }
            if (c < 1) {
	    qmusic.pause();
	    qmusic.currentTime = 0;
		quescount++;
      		message003.innerHTML = "The correct answer is " + question001[vraag].answ2;
		simulatecomp();   
           	window.clearInterval(update);
                time001.innerHTML = "Time's up!";
	    	incmusic.play();
		document.getElementById("time001").style.fontSize = "100%";
		document.getElementById("time001").style.fontWeight = "normal";
	    document.getElementById("q1").disabled = true;
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
if ((a == "6") ||(a == "11")||(a == "16")||(a == "21")||(a == "26")||(a == "31")||(a == "36")||(a == "41")||(a == "46")||(a == "51")||(a == "56")||(a == "61")||(a == "66")||(a == "71")||(a == "76")||(a == "81")||(a == "86")||(a == "91")||(a == "96")||(a == "101")||(a == "106")||(a == "111")||(a == "116")||(a == "121")||(a == "126")||(a == "131")||(a == "136")||(a == "141")||(a == "146")||(a == "151")||(a == "156")||(a == "161")||(a == "166")||(a == "171")||(a == "176")||(a == "181")||(a == "186")||(a == "191")||(a == "196")||(a == "201")||(a == "206")||(a == "211")||(a == "216")||(a == "221")||(a == "226")||(a == "231")){
	    message006.innerHTML =  "";
            message004.innerHTML = "<button class=buttons002 onclick=roundchecker()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
}
else {
	    message006.innerHTML =  "Next category is " +question001[(vraag +1)].cat;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
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
function tweetbutton() {
document.getElementById("message006").style.top = "-55px";
if ((navigator.userAgent.includes('Firefox')) && ($(window).width() > 1024)) {
  html2canvas($('#frame001')[0], {
    width: 1330,
    height: 600
  }).then(function(canvas) {
    var a = document.createElement('a');
    var month = (new Date()).getMonth() + 1;
    var day = (new Date()).getDate();
    var hours = (new Date()).getHours();
    var minutes = (new Date()).getMinutes();
    a.href = canvas.toDataURL("image/png");
    a.download = "Schmoedown_" + day + month + hours + minutes + ".png";
    a.click();
  });	
document.getElementById("message006").style.top = "15px";
if (b > s) {window.open("https://twitter.com/intent/tweet?text=" + "I just played the Schmoedown Free4All and won!" + "%0aTry it out yourself here: https://thethommerd.github.io/Schmoedown/" + "%0a%23Schmoedown %23MovieTrivia", "_blank");}
else if (s > b) {window.open("https://twitter.com/intent/tweet?text=" + "I just played the Schmoedown Free4All! " + "%0aTry it out yourself here: https://thethommerd.github.io/Schmoedown/" + "%0a%23Schmoedown %23MovieTrivia", "_blank");}
}	
else if ((navigator.userAgent.includes('Firefox')) && ($(window).width() < 1024)) {
  html2canvas($('#frame001')[0], {
    width: 950,
    height: 550
  }).then(function(canvas) {
    var a = document.createElement('a');
    var month = (new Date()).getMonth() + 1;
    var day = (new Date()).getDate();
    var hours = (new Date()).getHours();
    var minutes = (new Date()).getMinutes();
    a.href = canvas.toDataURL("image/png");
    a.download = "Schmoedown_" + day + month + hours + minutes + ".png";
    a.click();
  });	
document.getElementById("message006").style.top = "15px";
if (b > s) {window.open("https://twitter.com/intent/tweet?text=" + "I just played the Schmoedown Free4All and won!" + "%0aTry it out yourself here: https://thethommerd.github.io/Schmoedown/" + "%0a%23Schmoedown %23MovieTrivia", "_blank");}
else if (s > b) {window.open("https://twitter.com/intent/tweet?text=" + "I just played the Schmoedown Free4All! " + "%0aTry it out yourself here: https://thethommerd.github.io/Schmoedown/" + "%0a%23Schmoedown %23MovieTrivia", "_blank");}
}
else {	
  html2canvas($('#frame001')[0], {
    width: 950,
    height: 450
  }).then(function(canvas) {
    var a = document.createElement('a');
    var month = (new Date()).getMonth() + 1;
    var day = (new Date()).getDate();
    var hours = (new Date()).getHours();
    var minutes = (new Date()).getMinutes();
    a.href = canvas.toDataURL("image/png");
    a.download = "Schmoedown_" + day + month + hours + minutes + ".png";
    a.click();
  });	
document.getElementById("message006").style.top = "15px";
if (b > s) {window.open("https://twitter.com/intent/tweet?text=" + "I just played the Schmoedown Free4All and won!" + "%0aTry it out yourself here: https://thethommerd.github.io/Schmoedown/" + "%0a%23Schmoedown %23MovieTrivia", "_blank");}
else if (s > b) {window.open("https://twitter.com/intent/tweet?text=" + "I just played the Schmoedown Free4All! " + "%0aTry it out yourself here: https://thethommerd.github.io/Schmoedown/" + "%0a%23Schmoedown %23MovieTrivia", "_blank");}
}
}
