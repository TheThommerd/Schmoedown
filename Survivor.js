		var cormusic = document.getElementById("myAudio"); 
		var incmusic = document.getElementById("myAudio2"); 
		document.getElementById("myAudio").volume = 0.1;
		document.getElementById("myAudio2").volume = 0.05;
	    	message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
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
		document.getElementById("checkboxes").style.display = "none";
}
var similarity1 = 0;
var similarity2 = 0;
var competitorlist = [
	{
"id": "Del Rio",
"lowercase": "David Del Rio",
"percentage": "62",
},
	{
"id": "Dhandapani",
"lowercase": "Chandru Dhandapani",
"percentage": "55",
},
	{
"id": "Dolph",
"lowercase": "Claudia Dolph",
"percentage": "53",
},
	{
"id": "Gertler",
"lowercase": "Adam Gertler",
"percentage": "50",
},
	{
"id": "Heuck",
"lowercase": "Marc Edward Heuck",
"percentage": "66",
},
	{
"id": "Kempe",
"lowercase": "Jen Kempe",
"percentage": "60",
},
	{
"id": "Lieberman",
"lowercase": "Ty Lieberman",
"percentage": "70",
},
	{
"id": "Kan",
"lowercase": "Jeffrey Kan",
"percentage": "70",
},
	{
"id": "Sullivan",
"lowercase": "Sean Sullivan",
"percentage": "54",
},
	{
"id": "Wiggins",
"lowercase": "Klee Wiggins",
"percentage": "62",
},
	{
"id": "Gubbins",
"lowercase": "Peggy Gubbins",
"percentage": "62",
},
	{
"id": "Lomis",
"lowercase": "Brother Lomis",
"percentage": "63",
},
	{
"id": "Raddus",
"lowercase": "Rick Raddus",
"percentage": "70",
},
	{
"id": "Harley",
"lowercase": "Nick Harley",
"percentage": "75",
},
	{
"id": "Frabetti",
"lowercase": "Paige Frabetti",
"percentage": "67",
},
{
"id": "Alvarez",
"lowercase": "Frankie Alvarez",
"percentage": "68",
},
	{
"id": "Database",
"lowercase": "The Database",
"percentage": "72",
},
	{
"id": "Schloth",
"lowercase": "Jessica Schloth",
"percentage": "65",
},
{
"id": "Bateman",
"lowercase": "Ben Bateman",
"percentage": "85",
},
{
"id": "Bibbiani",
"lowercase": "William Bibbiani",
"percentage": "90",
},
{
"id": "Kalinowski",
"lowercase": "Mike Kalinowski",
"percentage": "70",
},
{
"id": "Murrell",
"lowercase": "Dan Murrell",
"percentage": "90",
},
{
"id": "Oyama",
"lowercase": "Paul Oyama",
"percentage": "85",
},
{
"id": "Andreyko",
"lowercase": "Marc Andreyko",
"percentage": "70",
},
{
"id": "Cushing",
"lowercase": "Rachel Cushing",
"percentage": "80",
},
{
"id": "Dagnino",
"lowercase": "Tom Dagnino",
"percentage": "45",
},
{
"id": "Rocha",
"lowercase": "John Rocha",
"percentage": "75",
},
{
"id": "Erwin",
"lowercase": "Ethan Erwin",
"percentage": "83",
},
{
"id": "JTE",
"lowercase": "JTE",
"percentage": "65",
},
{
"id": "Sneider",
"lowercase": "Jeff Sneider",
"percentage": "69",
},
{
"id": "Wolfe",
"lowercase": "Clarke Wolfe",
"percentage": "71",
},
{
"id": "Levine",
"lowercase": "Samm Levine",
"percentage": "80",
},
{
"id": "Macuga",
"lowercase": "Josh Macuga",
"percentage": "50",
},
{
"id": "Reilly",
"lowercase": "Mark Reilly",
"percentage": "72",
},
{
"id": "Jeannine",
"lowercase": "Jeannine",
"percentage": "59",
},
{
"id": "Howard",
"lowercase": "Stacy Howard",
"percentage": "60",
},
{
"id": "Humphrey",
"lowercase": "John Humphrey",
"percentage": "50",
},
{
"id": "Grant",
"lowercase": "Drew Grant",
"percentage": "58",
},
{
"id": "Harris",
"lowercase": "Lon Harris",
"percentage": "72",
},
{
"id": "Horowitz",
"lowercase": "Josh Horowitz",
"percentage": "72",
},
{
"id": "Ghai",
"lowercase": "Andrew Ghai",
"percentage": "57",
},
{
"id": "McWeeny",
"lowercase": "Drew McWeeny",
"percentage": "74",
},
{
"id": "Ellison",
"lowercase": "Chance Ellison",
"percentage": "79",
},
{
"id": "Drake",
"lowercase": "Grae Drake",
"percentage": "50",
},
{
"id": "Miller",
"lowercase": "Liz Shannon Miller",
"percentage": "68",
},
{
"id": "Foutch",
"lowercase": "Haleigh Foutch",
"percentage": "66",
},
{
"id": "Meyer",
"lowercase": "Brendan Meyer",
"percentage": "78",
},
{
"id": "Preston",
"lowercase": "Paul Preston",
"percentage": "80",
},
{
"id": "Seibold",
"lowercase": "Whitney Seibold",
"percentage": "56",
},
{
"id": "Zipper",
"lowercase": "Eric Zipper",
"percentage": "70",
},
{
"id": "Silvestrini",
"lowercase": "Rachel Silvestrini",
"percentage": "54",
},
{
"id": "Atchity",
"lowercase": "Matt Atchity",
"percentage": "60",
},
{
"id": "Duralde",
"lowercase": "Alonso Duralde",
"percentage": "70",
},
{
"id": "Tom",
"lowercase": "Tom",
"percentage": "80",
},
{
"id": "Alba",
"lowercase": "Greg Alba",
"percentage": "52",
},
{
"id": "Barbarian",
"lowercase": "The Barbarian",
"percentage": "80",
},
{
"id": "Witt",
"lowercase": "Adam Witt",
"percentage": "60",
},
{
"id": "Smets",
"lowercase": "Kevin Smets",
"percentage": "67",
},
{
"id": "Knopic",
"lowercase": "Mara Knopic",
"percentage": "66",
},
{
"id": "Collins",
"lowercase": "Adam Collins",
"percentage": "87",
},
{
"id": "McKee",
"lowercase": "Marisol McKee",
"percentage": "76",
},
{
"id": "Bancroft",
"lowercase": "Jacoby Bancroft",
"percentage": "76",
},
{
"id": "Parker",
"lowercase": "Robert Parker",
"percentage": "70",
},
{
"id": "Damon",
"lowercase": "Alex Damon",
"percentage": "64",
},
{
"id": "Hanna",
"lowercase": "Brandon Hanna",
"percentage": "65",
},
{
"id": "Saul",
"lowercase": "Saul",
"percentage": "63",
},
{
"id": "Paramo",
"lowercase": "Jader Paramo",
"percentage": "67",
},
{
"id": "Newman",
"lowercase": "Griffin Newman",
"percentage": "73",
},
{
"id": "Nemiroff",
"lowercase": "Perri Nemiroff",
"percentage": "69",
},
{
"id": "Mancuso",
"lowercase": "Vinnie Mancuso",
"percentage": "60",
},
{
"id": "White",
"lowercase": "James White",
"percentage": "75",
},
];
var percentage = 0;
var percentagep2 = 0;
var percentagep3 = 0;
var percentagep4 = 0;
var percentagep5 = 0;
var percentagep6 = 0;
var percentagep7 = 0;
var percentagep8 = 0;
var percentagep9 = 0;
var percentagep10 = 0;
var eliminate2 = 0;
var eliminate3 = 0;
var eliminate4 = 0;
var eliminate5 = 0;
var eliminate6 = 0;
var eliminate7 = 0;
var eliminate8 = 0;
var eliminate9 = 0;
var eliminate10 = 0;
var vraag = 0;
var quescount= 0;
var rounds = 0;
var quescor = 0;
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
        var w = 0;
        var x = 0;
        var y = 0;
        var z = 0;
        var n = 0;
	var j = 3;
	j--;
	var h = 2;
	h--;
	var c;
	var minimum = 0;
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
function submitname () {
	var name = document.getElementById("q2").value.toUpperCase();
	var length1 = name.length;
	if (length1 < 1){
	player001.innerHTML = document.getElementById("naam").value.toUpperCase();} 
	else if (length1 >= 1){
	player001.innerHTML = name;
	document.getElementById("naam").value = document.getElementById("q2").value;}
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
	choosecomp();
}
function skip () {
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
	choosecomp();
}
function newLoc() {window.location.assign("https://thethommerd.github.io/Schmoedown/Survivor.html");}
function choosecomp(){
		document.getElementById("checkboxes").style.display = "initial";
checkboxes.innerHTML = "<div id=row1><label class=checkbox-label><input type=checkbox id=Alba value=Alba>Greg Alba</label><br/><label class=checkbox-label><input type=checkbox id=Andreyko value=Andreyko>Marc Andreyko</label><br/><label class=checkbox-label><input type=checkbox id=Atchity value=Atchity>Matt Atchity</label><br/><label class=checkbox-label><input type=checkbox id=Bancroft value=Bancroft>Jacoby Bancroft</label><br/><label class=checkbox-label><input type=checkbox id=Barbarian value=Barbarian>Barbarian</label><br/><label class=checkbox-label><input type=checkbox id=Bateman value=Bateman>Ben Bateman</label><br/><label class=checkbox-label><input type=checkbox id=Bibbiani value=Bibbiani>William Bibbiani</label><br/><label class=checkbox-label><input type=checkbox id=Rio value='Del Rio'>David Del Rio</label><br/><label class=checkbox-label><input type=checkbox id=Dewberry value=Dewberry>Eliot Dewberry</label><br/><label class=checkbox-label><input type=checkbox id=Dhandapani value=Dhandapani>Chandru Dhandapani</label><br/><label class=checkbox-label><input type=checkbox id=Dolph value=Dolph>Claudia Dolph</label><br/><label class=checkbox-label><input type=checkbox id=Drake value=Drake>Grae Drake</label><br/><label class=checkbox-label><input type=checkbox id=Duralde value=Duralde>Alonso Duralde</label><br/><label class=checkbox-label><input type=checkbox id=Ellison value=Ellison>Chance Ellison</label><br/><label class=checkbox-label><input type=checkbox id=Erwin value=Erwin>Ethan Erwin</label><br/><label class=checkbox-label><input type=checkbox id=Foutch value=Foutch>Haleigh Foutch</label><br/><label class=checkbox-label><input type=checkbox id=Gertler value=Gertler>Adam Gertler</label><br/><label class=checkbox-label><input type=checkbox id=Ghai value=Ghai>Andrew Ghai</label><br/><label class=checkbox-label><input type=checkbox id=Grant value=Grant>Drew Grant</label><br/><label class=checkbox-label><input type=checkbox id=Hanna value=Hanna>Brandon Hanna</label><br/><label class=checkbox-label><input type=checkbox id=Heuck value=Heuck>Marc Edward Heuck</label><br/><label class=checkbox-label><input type=checkbox id=Harris value=Harris>Lon Harris</label><br/><label class=checkbox-label><input type=checkbox id=Howard value=Howard>Stacy Howard</label><br/><label class=checkbox-label><input type=checkbox id=Humphrey value=Humphrey>John Humphrey</label><br/><label class=checkbox-label><input type=checkbox id=JTE value=JTE>JTE</label><br/><label class=checkbox-label><input type=checkbox id=Kalinowski value=Kalinowski>Mike Kalinowski</label><br/><label class=checkbox-label><input type=checkbox id=Kempe value=Kempe>Jen Kempe</label><br/><label class=checkbox-label><input type=checkbox id=Lieberman value=Lieberman>Ty Lieberman</label><br/><label class=checkbox-label><input type=checkbox id=Jeannine value=Jeannine>Jeannine</label><br/><label class=checkbox-label><input type=checkbox id=Macuga value=Macuga>Josh Macuga</label><br/><label class=checkbox-label><input type=checkbox id=Mancuso value=Mancuso>Vinnie Mancuso</label><br/><label class=checkbox-label><input type=checkbox id=McKee value=McKee>Marisol McKee</label><br/><label class=checkbox-label><input type=checkbox id=Collins value=Collins>Adam Collins</label><br/><label class=checkbox-label><input type=checkbox id=Newman value=Newman>Griffin Newman</label><br/><label class=checkbox-label><input type=checkbox id=Kan value=Kan>Jeffrey Kan</label><br/><label class=checkbox-label><input type=checkbox id=McWeeny value=McWeeny>Drew McWeeny</label><br/></div><div id=row2><label class=checkbox2><input type=checkbox id=Meyer value=Meyer>Brendan Meyer</label><br/><label class=checkbox2><input type=checkbox id=Miller value=Miller>Liz Shannon Miller</label><br/><label class=checkbox2><input type=checkbox id=Murrell value=Murrell>Dan Murrell</label><br/><label class=checkbox2><input type=checkbox id=Knopic value=Knopic>Mara Knopic</label><br/><label class=checkbox2><input type=checkbox id=Nemiroff value=Nemiroff>Perri Nemiroff</label><br/><label class=checkbox2><input type=checkbox id=Paramo value=Paramo>Jader Paramo</label><br/><label class=checkbox2><input type=checkbox id=Preston value=Preston>Paul Preston</label><br/><label class=checkbox2><input type=checkbox id=Oyama value=Oyama>Paul Oyama</label><br/><label class=checkbox2><input type=checkbox id=Levine value=Levine>Samm Levine</label><br/><label class=checkbox2><input type=checkbox id=Reilly value=Reilly>Mark Reilly</label><br/><label class=checkbox2><input type=checkbox id=Rocha value=Rocha>John Rocha</label><br/><label class=checkbox2><input type=checkbox id=Saul value=Saul>Saul</label><br/><label class=checkbox2><input type=checkbox id=Seibold value=Seibold>Witney Seibold</label><br/><label class=checkbox2><input type=checkbox id=Silvestrini value=Silvestrini>Rachel Silvestrini</label><br/><label class=checkbox2><input type=checkbox id=Smets value=Smets>Kevin Smets</label><br/><label class=checkbox2><input type=checkbox id=Sneider value=Sneider>Jeff Sneider</label><br/><label class=checkbox2><input type=checkbox id=Sullivan value=Sullivan>Sean Sullivan</label><br/><label class=checkbox2><input type=checkbox id=Tom value=Tom>Tom</label><br/><label class=checkbox2><input type=checkbox id=White value=White>James White</label><br/><label class=checkbox2><input type=checkbox id=Wiggins value=Wiggins>Klee Wiggins</label><br/><label class=checkbox2><input type=checkbox id=Zipper value=Zipper>Eric Zipper</label><br/><label class=checkbox2><input type=checkbox id=Wolfe value=Clarke Wolfe>Clarke Wolfe</label><br/><label class=checkbox2><input type=checkbox id=Cushing value=Cushing>Rachel Cushing</label><br/><label class=checkbox2><input type=checkbox id=Witt value=Witt>Adam Witt</label><br/><label class=checkbox2><input type=checkbox id=Gubbins value=Gubbins>Peggy Gubbins</label><br/><label class=checkbox2><input type=checkbox id=Lomis value=Lomis>Brother Lomis</label><br/><label class=checkbox2><input type=checkbox id=Raddus value=Raddus>Rick Raddus</label><br/><label class=checkbox2><input type=checkbox id=Harley value=Harley>Nick Harley</label><br/><label class=checkbox2><input type=checkbox id=Frabetti value=Frabetti>Paige Frabetti</label><br/><label class=checkbox2><input type=checkbox id=Horowitz value=Horowitz>Josh Horowitz</label><br/><label class=checkbox2><input type=checkbox id=Alvarez value=Alvarez>Freddie Alvarez</label><br/><label class=checkbox2><input type=checkbox id=Database value=Database>The Database</label><br/><label class=checkbox2><input type=checkbox id=Schloth value=Schloth>Jessica Schloth</label><br/><label class=checkbox2><input type=checkbox id=Dagnino value=Dagnino>Tom Dagnino</label><br/><label class=checkbox2><input type=checkbox id=Parker value=Parker>Robert Parker</label><br/><label class=checkbox2><input type=checkbox id=Damon value=Damon>Alex Damon</label></div><br/>";
	document.getElementById("message004").style.top = "10px";
        document.getElementById("message004").style.visibility = "hidden";
	message004.innerHTML = "<button class=buttons002 onclick=pregame()>Next</button>";
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 4) {	$(this).prop('checked', false);}
    if ($('input[type=checkbox]:checked').length == 4) {	document.getElementById("message004").style.visibility = "visible";}
     else{	document.getElementById("message004").style.visibility = "hidden";}
});
}
var team = [];
function pregame(){
document.getElementById("checkboxes").style.display = "none";
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
for (var i = 0; i < checkboxes.length; i++) {team.push(checkboxes[i].value)}
competitorlist = shuffle(competitorlist);
for( var i = competitorlist.length-1; i >= 0; i--){
if ( competitorlist[i].id == team[0]){ competitorlist.splice(i, 1);}
if ( competitorlist[i].id == team[1]){ competitorlist.splice(i, 1);}
if ( competitorlist[i].id == team[2]){ competitorlist.splice(i, 1);}
if ( competitorlist[i].id == team[3]){ competitorlist.splice(i, 1);}
}
player002.innerHTML = team[0].toUpperCase();
player003.innerHTML = team[1].toUpperCase();
player004.innerHTML = team[2].toUpperCase();
player005.innerHTML = team[3].toUpperCase();
player006.innerHTML = competitorlist[0].id.toUpperCase();
player007.innerHTML = competitorlist[1].id.toUpperCase();
player008.innerHTML = competitorlist[2].id.toUpperCase();
player009.innerHTML = competitorlist[3].id.toUpperCase();
player010.innerHTML = competitorlist[4].id.toUpperCase();
percentagep6 = competitorlist[0].percentage;
percentagep7 = competitorlist[1].percentage;
percentagep8 = competitorlist[2].percentage;
percentagep9 = competitorlist[3].percentage;
percentagep10 = competitorlist[4].percentage;
	document.getElementById("time001").style.display = "initial";
	message001.innerHTML = "Click Begin to start the match.";
	message005.innerHTML = "<strong><font size=4>SURVIVOR</font><br/></br>TWO TEAMS WITH 5 COMPETITORS</br></br>COMPETITORS RECEIVE 8 QUESTIONS PER ROUND<br/><br/>YOU HAVE 20 SECONDS TO READ THE QUESTION AND SUBMIT YOUR ANSWER</br>YOU CAN SUBMIT YOUR ANSWER BY CLICKING THE SUBMIT BUTTON OR BY HITTING THE ENTER KEY</br></br>ALL QUESTIONS ARE WORTH 1 POINT</br></br>EACH ROUND THE PLAYER WITH THE LOWEST POINT TOTAL WILL BE ELIMINATED<br/></br>NO REPEATS AVAILABLE</br></br>YOU CAN CHALLENGE ANY RULING BY CLICKING THE 'CHALLENGE' BUTTON</br>JUDGE YOUR CHALLENGE BY CLICKING THE 'WIN CHALLENGE' OR 'LOSE CHALLENGE' BUTTON</br>REVERSALS LET YOU KEEP YOUR CHALLENGE</strong>";
	document.getElementById("message005").style.position = "relative";
	document.getElementById("message005").style.top = "-75px";
	message003.innerHTML = "<button id=begin class=buttons002 onclick=begin001()>Begin</button>";
	document.getElementById("message003").style.top = "-25px";
	message006.innerHTML =  "First category is " +question001[0].cat;
	document.getElementById("message006").style.position = "relative";
	document.getElementById("message006").style.top = "-115px";
	message004.innerHTML = "";
}
function simulatecomp(){
var chance1 = Math.random() * 100;
if (chance1 < percentagep2){score002.innerHTML = s+=1;}
var chance2 = Math.random() * 100;
if (chance2 < percentagep3){score003.innerHTML = t+=1;}
var chance3 = Math.random() * 100;
if (chance3 < percentagep4){score004.innerHTML = u+=1;}
var chance4 = Math.random() * 100;
if (chance4 < percentagep5){score005.innerHTML = v+=1;}
var chance5 = Math.random() * 100;
if (chance5 < percentagep6){score006.innerHTML = w+=1;}
var chance6 = Math.random() * 100;
if (chance6 < percentagep7){score007.innerHTML = x+=1;}
var chance7 = Math.random() * 100;
if (chance7 < percentagep8){score008.innerHTML = y+=1;}
var chance8 = Math.random() * 100;
if (chance9 < percentagep9){score009.innerHTML = z+=1;}
var chance9 = Math.random() * 100;
if (chance9 < percentagep10){score010.innerHTML = n+=1;}
if (eliminate2 == 1){score002.innerHTML = "X";}
if (eliminate3 == 1){score003.innerHTML = "X";}
if (eliminate4 == 1){score004.innerHTML = "X";}
if (eliminate5 == 1){score005.innerHTML = "X";}
if (eliminate6 == 1){score006.innerHTML = "X";}
if (eliminate7 == 1){score007.innerHTML = "X";}
if (eliminate8 == 1){score008.innerHTML = "X";}
if (eliminate9 == 1){score009.innerHTML = "X";}	
if (eliminate10 == 1){score010.innerHTML = "X";}		
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
 else if (h < 1) { message003.innerHTML = "No challenges left!";}
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
function myTrim(x) {return x.replace(/^\s+|\s+$/gm,'');}
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
if (question1.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question1, question001[vraag].answ);
if (typeof(question001[vraag].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question1, question001[vraag].answ3);}}
else if (question1.length <= 4){similarity1 = 0;similarity2 = 0;}
            window.clearInterval(update);
            c = "-";
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question1 == question001[vraag].answ) || (question1 == question001[vraag].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
            message003.innerHTML = "Correct!";
            score001.innerHTML = b+=1;
		quescor++;
	    cormusic.play();
if ((a == 9) ||(a == 17)||(a == 25)||(a == 32)||(a == 40)||(a == 34)||(a == 39)||(a == 44)||(a == 49)||(a == 54)||(a == 59)||(a == 64)||(a == 69)||(a == 74)||(a == 79)||(a == 84)||(a == 89)||(a == 94)||(a == 99)||(a == 104)||(a == 109)||(a == 114)||(a == 119)||(a == 124)||(a == 129)||(a == 134)||(a == 139)||(a == 144)||(a == 149)||(a == 154)||(a == 159)||(a == 164)||(a == 169)||(a == 174)||(a == 179)||(a == 184)||(a == 189)||(a == 194)||(a == 199)||(a == 204)||(a == 209)||(a == 214)||(a == 219)||(a == 224)||(a == 229)||(a == 234)) {
	    message006.innerHTML =  "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
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
if ((a == 9) ||(a == 17)||(a == 25)||(a == 32)||(a == 40)||(a == 34)||(a == 39)||(a == 44)||(a == 49)||(a == 54)||(a == 59)||(a == 64)||(a == 69)||(a == 74)||(a == 79)||(a == 84)||(a == 89)||(a == 94)||(a == 99)||(a == 104)||(a == 109)||(a == 114)||(a == 119)||(a == 124)||(a == 129)||(a == 134)||(a == 139)||(a == 144)||(a == 149)||(a == 154)||(a == 159)||(a == 164)||(a == 169)||(a == 174)||(a == 179)||(a == 184)||(a == 189)||(a == 194)||(a == 199)||(a == 204)||(a == 209)||(a == 214)||(a == 219)||(a == 224)||(a == 229)||(a == 234)) {
	    message006.innerHTML =  "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
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

            if ((a == 2) ||(a == 9)||(a == 20)||(a == 17)||(a == 22)||(a == 27)||(a == 32)||(a == 37)||(a == 42)||(a == 47)||(a == 52)||(a == 57)||(a == 62)||(a == 67)||(a == 72)||(a == 77)||(a == 82)||(a == 87)||(a == 92)||(a == 97)||(a == 102)||(a == 107)||(a == 112)||(a == 117)||(a == 122)||(a == 127)||(a == 132)||(a == 137)||(a == 142)||(a == 147)||(a == 152)||(a == 157)||(a == 162)||(a == 167)||(a == 172)||(a == 177)||(a == 182)||(a == 187)||(a == 192)||(a == 197)||(a == 202)||(a == 207)||(a == 212)||(a == 217)||(a == 222)||(a == 227)) {
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
            }

            else if ((a == 3)||(a == 10)||(a == 20)||(a == 18)||(a == 23)||(a == 28)||(a == 33)||(a == 38)||(a == 43)||(a == 48)||(a == 53)||(a == 58)||(a == 63)||(a == 68)||(a == 73)||(a == 78)||(a == 83)||(a == 88)||(a == 93)||(a == 98)||(a == 103)||(a == 108)||(a == 113)||(a == 118)||(a == 123)||(a == 128)||(a == 133)||(a == 138)||(a == 143)||(a == 148)||(a == 153)||(a == 158)||(a == 163)||(a == 168)||(a == 173)||(a == 178)||(a == 183)||(a == 188)||(a == 193)||(a == 198)||(a == 203)||(a == 208)||(a == 213)||(a == 218)||(a == 223)||(a == 228))  {
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
            }

            else if ((a == 4) ||(a == 11)||(a == 20)||(a == 19)||(a == 24)||(a == 29)||(a == 34)||(a == 39)||(a == 44)||(a == 49)||(a == 54)||(a == 59)||(a == 64)||(a == 69)||(a == 74)||(a == 79)||(a == 84)||(a == 89)||(a == 94)||(a == 99)||(a == 104)||(a == 109)||(a == 114)||(a == 119)||(a == 124)||(a == 129)||(a == 134)||(a == 139)||(a == 144)||(a == 149)||(a == 154)||(a == 159)||(a == 164)||(a == 169)||(a == 174)||(a == 179)||(a == 184)||(a == 189)||(a == 194)||(a == 199)||(a == 204)||(a == 209)||(a == 214)||(a == 219)||(a == 224)||(a == 229))  {
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
            }

            else if ((a == 5) ||(a == 12)||(a == 20)||(a == 20)||(a == 25)||(a == 30)||(a == 35)||(a == 40)||(a == 45)||(a == 50)||(a == 55)||(a == 60)||(a == 65)||(a == 70)||(a == 75)||(a == 80)||(a == 85)||(a == 90)||(a == 95)||(a == 100)||(a == 105)||(a == 110)||(a == 115)||(a == 120)||(a == 125)||(a == 130)||(a == 135)||(a == 140)||(a == 145)||(a == 150)||(a == 155)||(a == 160)||(a == 165)||(a == 170)||(a == 175)||(a == 180)||(a == 185)||(a == 190)||(a == 195)||(a == 200)||(a == 205)||(a == 210)||(a == 215)||(a == 220)||(a == 225)||(a == 230)) {
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
            }
	            else if ((a == 6) ||(a == 13)||(a == 20)||(a == 21)||(a == 26)||(a == 31)||(a == 36)||(a == 41)||(a == 46)||(a == 51)||(a == 56)||(a == 61)||(a == 65)||(a == 70)||(a == 75)||(a == 80)||(a == 85)||(a == 90)||(a == 95)||(a == 100)||(a == 105)||(a == 110)||(a == 115)||(a == 120)||(a == 125)||(a == 130)||(a == 135)||(a == 140)||(a == 145)||(a == 150)||(a == 155)||(a == 160)||(a == 165)||(a == 170)||(a == 175)||(a == 180)||(a == 185)||(a == 190)||(a == 195)||(a == 200)||(a == 205)||(a == 210)||(a == 215)||(a == 220)||(a == 225)||(a == 230)) {
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
 		qu001.innerHTML = "QUESTION 6 - " +question001[vraag].cat.toUpperCase();
                message004.innerHTML = "";
            }
	            else if ((a == 7) ||(a == 14)||(a == 20)||(a == 20)||(a == 25)||(a == 30)||(a == 35)||(a == 40)||(a == 45)||(a == 50)||(a == 55)||(a == 60)||(a == 65)||(a == 70)||(a == 75)||(a == 80)||(a == 85)||(a == 90)||(a == 95)||(a == 100)||(a == 105)||(a == 110)||(a == 115)||(a == 120)||(a == 125)||(a == 130)||(a == 135)||(a == 140)||(a == 145)||(a == 150)||(a == 155)||(a == 160)||(a == 165)||(a == 170)||(a == 175)||(a == 180)||(a == 185)||(a == 190)||(a == 195)||(a == 200)||(a == 205)||(a == 210)||(a == 215)||(a == 220)||(a == 225)||(a == 230)) {
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
 		qu001.innerHTML = "QUESTION 7 - " +question001[vraag].cat.toUpperCase();
                message004.innerHTML = "";
            }
	            else if ((a == 8) ||(a == 15)||(a == 20)||(a == 20)||(a == 25)||(a == 30)||(a == 35)||(a == 40)||(a == 45)||(a == 50)||(a == 55)||(a == 60)||(a == 65)||(a == 70)||(a == 75)||(a == 80)||(a == 85)||(a == 90)||(a == 95)||(a == 100)||(a == 105)||(a == 110)||(a == 115)||(a == 120)||(a == 125)||(a == 130)||(a == 135)||(a == 140)||(a == 145)||(a == 150)||(a == 155)||(a == 160)||(a == 165)||(a == 170)||(a == 175)||(a == 180)||(a == 185)||(a == 190)||(a == 195)||(a == 200)||(a == 205)||(a == 210)||(a == 215)||(a == 220)||(a == 225)||(a == 230)) {
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
 		qu001.innerHTML = "QUESTION 8 - " +question001[vraag].cat.toUpperCase();
                message004.innerHTML = "";
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
if ((a == 9) ||(a == 14)||(a == 19)||(a == 24)||(a == 29)||(a == 34)||(a == 39)||(a == 44)||(a == 49)||(a == 54)||(a == 59)||(a == 64)||(a == 69)||(a == 74)||(a == 79)||(a == 84)||(a == 89)||(a == 94)||(a == 99)||(a == 104)||(a == 109)||(a == 114)||(a == 119)||(a == 124)||(a == 129)||(a == 134)||(a == 139)||(a == 144)||(a == 149)||(a == 154)||(a == 159)||(a == 164)||(a == 169)||(a == 174)||(a == 179)||(a == 184)||(a == 189)||(a == 194)||(a == 199)||(a == 204)||(a == 209)||(a == 214)||(a == 219)||(a == 224)||(a == 229)||(a == 234)) {
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

function repeat001() {location.reload();}
$("#message002").keypress(function(event) { 
         if (event.keyCode === 13){ $("#submit").click();} 
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
