function load(){
if (document.getElementById("passwordsaverSemi").value != "GREAT SCOTT"){
message004.innerHTML = "<input id=password type=text maxlength=35 placeholder=Password /></br/></br/><button id=submit3  class=buttons001 onclick=submitpassword()>Submit</button>";
message001.innerHTML = "Enter the password you obtained by winning the previous round.";
		document.getElementById("password").focus();
}
else if (document.getElementById("passwordsaverSemi").value == "GREAT SCOTT"){
message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
message006.innerHTML = "";
message001.innerHTML = "Enter your name and twitter, or press Skip to proceed.";
		document.getElementById("q2").focus();
}
	if (document.getElementById("wins_IG").value.length < 1)
	{
	document.getElementById("wins_IG").value = 0;
	}
	if (document.getElementById("losses_IG").value.length < 1)
	{
	document.getElementById("losses_IG").value = 0;
	}
  	record001.innerHTML = document.getElementById("wins_IG").value + "-" + document.getElementById("losses_IG").value;
  	player001.innerHTML = document.getElementById("naam").value.toUpperCase();
	var twittername = document.getElementById("twitt").value;
	var twitter = twittername.substring(0, 13);
	twitter001.innerHTML = twitter.replace(" ","");
}
function submitpassword() {
var ww = document.getElementById("password").value.toUpperCase();
document.getElementById("passwordsaverSemi").value = document.getElementById("password").value.toUpperCase();
if (ww == "GREAT SCOTT")
{
message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
message006.innerHTML = "";
message001.innerHTML = "Enter your name and twitter, or press Skip to proceed.";
}
else
{
message006.innerHTML = "Password incorrect!";
document.getElementById("message006").style.top = "-140px";
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
	if (document.getElementById("wins_IG").value.length < 1)
	{
	document.getElementById("wins_IG").value = 0;
	}
	if (document.getElementById("losses_IG").value.length < 1)
	{
	document.getElementById("losses_IG").value = 0;
	}
  	record001.innerHTML = document.getElementById("wins_IG").value + "-" + document.getElementById("losses_IG").value;
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
message004.innerHTML = "<select id=select><option value=Dhandapani>Chandru Dhandapani</option><option value=Knopic>Mara Knopic</option><option value=Parker>Robert Parker</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button></div>";
	message001.innerHTML = "Choose your opponent.";
}
function skip () {
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
	message001.innerHTML = "Choose your opponent.";
message004.innerHTML = "<select id=select><option value=Dhandapani>Chandru Dhandapani</option><option value=Knopic>Mara Knopic</option><option value=Parker>Robert Parker</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button></div>";
}