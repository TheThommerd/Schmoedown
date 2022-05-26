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
var competitorlist2 = [
{
"id": "Dewberry",
"lowercase": "Eliot Dewberry",
"percentage": "52",
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
"id": "Napzok",
"lowercase": "Ken Napzok",
"percentage": "59",
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
"id": "Heuck",
"lowercase": "Marc Heuck",
"percentage": "73",
},
{
"id": "Witt",
"lowercase": "Adam Witt",
"percentage": "60",
},
{
"id": "Butler III",
"lowercase": "Robert Butler III",
"percentage": "45",
},
{
"id": "Smets",
"lowercase": "Kevin Smets",
"percentage": "67",
},
{
"id": "Franco",
"lowercase": "Tim Franco",
"percentage": "70",
},
{
"id": "Knopic",
"lowercase": "Mara Knopic",
"percentage": "66",
},
{
"id": "Flouse",
"lowercase": "Zaflertinflouse",
"percentage": "30",
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
"id": "Blunden",
"lowercase": "Jacob Blunden",
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
"id": "Smith",
"lowercase": "Kevin Smith",
"percentage": "70",
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
{
"id": "Chandler",
"lowercase": "Brianne Chandler",
"percentage": "67",
},
{
"id": "Washington",
"lowercase": "Jay Washington",
"percentage": "50",
},
{
"id": "Fyffe",
"lowercase": "Emma Fyffe",
"percentage": "52",
},
{
"id": "Graves",
"lowercase": "Sabina Graves",
"percentage": "45",
},
{
"id": "Montano",
"lowercase": "Robert Montano",
"percentage": "62",
},
];
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
checkboxes.innerHTML = "<div id=row1><label class=checkbox-label><input type=checkbox id=Alba value=Alba>Greg Alba</label><br/><label class=checkbox-label><input type=checkbox id=Andreyko value=Andreyko>Marc Andreyko</label><br/><label class=checkbox-label><input type=checkbox id=Atchity value=Atchity>Matt Atchity</label><br/><label class=checkbox-label><input type=checkbox id=Bancroft value=Bancroft>Jacoby Bancroft</label><br/><label class=checkbox-label><input type=checkbox id=Barbarian value=Barbarian>Barbarian</label><br/><label class=checkbox-label><input type=checkbox id=Bateman value=Bateman>Ben Bateman</label><br/><label class=checkbox-label><input type=checkbox id=Bibbiani value=Bibbiani>Bibbiani</label><br/><label class=checkbox-label><input type=checkbox id=Rio value='Del Rio'>David Del Rio</label><br/><label class=checkbox-label><input type=checkbox id=Dewberry value=Dewberry>Eliot Dewberry</label><br/><label class=checkbox-label><input type=checkbox id=Dhandapani value=Dhandapani>Chandru Dhandapani</label><br/><label class=checkbox-label><input type=checkbox id=Dolph value=Dolph>Claudia Dolph</label><br/><label class=checkbox-label><input type=checkbox id=Drake value=Drake>Grae Drake</label><br/><label class=checkbox-label><input type=checkbox id=Duralde value=Duralde>Alonso Duralde</label><br/><label class=checkbox-label><input type=checkbox id=Ellison value=Ellison>Chance Ellison</label><br/><label class=checkbox-label><input type=checkbox id=Erwin value=Erwin>Ethan Erwin</label><br/><label class=checkbox-label><input type=checkbox id=Foutch value=Foutch>Haleigh Foutch</label><br/><label class=checkbox-label><input type=checkbox id=Gertler value=Gertler>Adam Gertler</label><br/><label class=checkbox-label><input type=checkbox id=Ghai value=Ghai>Andrew Ghai</label><br/><label class=checkbox-label><input type=checkbox id=Grant value=Grant>Drew Grant</label><br/><label class=checkbox-label><input type=checkbox id=Hanna value=Hanna>Brandon Hanna</label><br/><label class=checkbox-label><input type=checkbox id=HarrisJ value=HarrisJ>Jonathan Harris</label><br/><label class=checkbox-label><input type=checkbox id=HarrisL value=HarrisL>Lon Harris</label><br/><label class=checkbox-label><input type=checkbox id=Howard value=Howard>Stacy Howard</label><br/><label class=checkbox-label><input type=checkbox id=Humphrey value=Humphrey>John Humphrey</label><br/><label class=checkbox-label><input type=checkbox id=JTE value=JTE>JTE</label><br/><label class=checkbox-label><input type=checkbox id=Kalinowski value=Kalinowski>Mike Kalinowski</label><br/><label class=checkbox-label><input type=checkbox id=Kempe value=Kempe>Jen Kempe</label><br/><label class=checkbox-label><input type=checkbox id=Lieberman value=Lieberman>Ty Lieberman</label><br/><label class=checkbox-label><input type=checkbox id=Jeannine value=Jeannine>Jeannine</label><br/><label class=checkbox-label><input type=checkbox id=Macuga value=Macuga>Josh Macuga</label><br/><label class=checkbox-label><input type=checkbox id=Mancuso value=Mancuso>Vinnie Mancuso</label><br/><label class=checkbox-label><input type=checkbox id=McKee value=McKee>Marisol McKee</label><br/><label class=checkbox-label><input type=checkbox id=Collins value=Collins>Adam Collins</label><br/><label class=checkbox-label><input type=checkbox id=Newman value=Newman>Griffin Newman</label><br/><label class=checkbox-label><input type=checkbox id=Kan value=Kan>Jeffrey Kan</label><br/><label class=checkbox-label><input type=checkbox id=McWeeny value=McWeeny>Drew McWeeny</label><br/></div><div id=row2><label class=checkbox2><input type=checkbox id=Meyer value=Meyer>Brendan Meyer</label><br/><label class=checkbox2><input type=checkbox id=Miller value=Miller>Liz Shannon Miller</label><br/><label class=checkbox2><input type=checkbox id=Murrell value=Murrell>Dan Murrell</label><br/><label class=checkbox2><input type=checkbox id=Knopic value=Knopic>Mara Knopic</label><br/><label class=checkbox2><input type=checkbox id=Nemiroff value=Nemiroff>Perri Nemiroff</label><br/><label class=checkbox2><input type=checkbox id=Paramo value=Paramo>Jader Paramo</label><br/><label class=checkbox2><input type=checkbox id=Preston value=Preston>Paul Preston</label><br/><label class=checkbox2><input type=checkbox id=Oyama value=Oyama>Paul Oyama</label><br/><label class=checkbox2><input type=checkbox id=Levine value=Levine>Samm Levine</label><br/><label class=checkbox2><input type=checkbox id=Reilly value=Reilly>Mark Reilly</label><br/><label class=checkbox2><input type=checkbox id=Rocha value=Rocha>John Rocha</label><br/><label class=checkbox2><input type=checkbox id=Saul value=Saul>Saul</label><br/><label class=checkbox2><input type=checkbox id=Seibold value=Seibold>Witney Seibold</label><br/><label class=checkbox2><input type=checkbox id=Silvestrini value=Silvestrini>Rachel Silvestrini</label><br/><label class=checkbox2><input type=checkbox id=Smets value=Smets>Kevin Smets</label><br/><label class=checkbox2><input type=checkbox id=Sneider value=Sneider>Jeff Sneider</label><br/><label class=checkbox2><input type=checkbox id=Sullivan value=Sullivan>Sean Sullivan</label><br/><label class=checkbox2><input type=checkbox id=Tom value=Tom>Tom</label><br/><label class=checkbox2><input type=checkbox id=White value=White>James White</label><br/><label class=checkbox2><input type=checkbox id=Wiggins value=Wiggins>Klee Wiggins</label><br/><label class=checkbox2><input type=checkbox id=Zipper value=Zipper>Eric Zipper</label><br/><label class=checkbox2><input type=checkbox id=Wolfe value=Clarke Wolfe>Clarke Wolfe</label><br/><label class=checkbox2><input type=checkbox id=Cushing value=Cushing>Rachel Cushing</label><br/><label class=checkbox2><input type=checkbox id=Witt value=Witt>Adam Witt</label><br/><label class=checkbox2><input type=checkbox id=Gubbins value=Gubbins>Peggy Gubbins</label><br/><label class=checkbox2><input type=checkbox id=Lomis value=Lomis>Brother Lomis</label><br/><label class=checkbox2><input type=checkbox id=Raddus value=Raddus>Rick Raddus</label><br/><label class=checkbox2><input type=checkbox id=Harley value=Harley>Nick Harley</label><br/><label class=checkbox2><input type=checkbox id=Frabetti value=Frabetti>Paige Frabetti</label><br/><label class=checkbox2><input type=checkbox id=Horowitz value=Horowitz>Josh Horowitz</label><br/><label class=checkbox2><input type=checkbox id=Alvarez value=Alvarez>Freddie Alvarez</label><br/><label class=checkbox2><input type=checkbox id=Database value=Database>The Database</label><br/><label class=checkbox2><input type=checkbox id=Schloth value=Schloth>Jessica Schloth</label><br/><label class=checkbox2><input type=checkbox id=Dagnino value=Dagnino>Tom Dagnino</label><br/><label class=checkbox2><input type=checkbox id=Parker value=Parker>Robert Parker</label><br/><label class=checkbox2><input type=checkbox id=Damon value=Damon>Alex Damon</label></div><br/>";
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
document.getElementById("checkboxes").style.visibility = "hidden";
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
for (var i = 0; i < checkboxes.length; i++) {team.push(checkboxes[i].value)}
var opp = ["Alba", "Andreyko", "Atchity", "Bancroft", "Barbarian", "Bateman", "Bibbiani", "Del Rio", "Dewberry", "Dhandapani", "Dolph", "Drake", "Duralde", "Ellison"];
for( var i = opp.length-1; i >= 0; i--){
if ( opp[i] == team[0]){ opp.splice(i, 1);}
if ( opp[i] == team[1]){ opp.splice(i, 1);}
if ( opp[i] == team[2]){ opp.splice(i, 1);}
if ( opp[i] == team[3]){ opp.splice(i, 1);}
}
player002.innerHTML = team[0].toUpperCase();
player003.innerHTML = team[1].toUpperCase();
player004.innerHTML = team[2].toUpperCase();
player005.innerHTML = team[3].toUpperCase();
player006.innerHTML = opp[0].toUpperCase();
player007.innerHTML = opp[1].toUpperCase();
player008.innerHTML = opp[2].toUpperCase();
player009.innerHTML = opp[3].toUpperCase();
player010.innerHTML = opp[4].toUpperCase();
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
