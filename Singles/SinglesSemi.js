function load(){
if (document.getElementById("passwordsaverSemi").value != "SHIREWOLVES"){
message004.innerHTML = "<input id=password type=text maxlength=30 placeholder=Password /></br/></br/><button id=submit3  class=buttons001 onclick=submitpassword()>Submit</button>";
message001.innerHTML = "Enter the password you obtained by winning the previous round.";
}
else if (document.getElementById("passwordsaverSemi").value == "SHIREWOLVES"){
message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
document.getElementById("q2").focus();
message006.innerHTML = "";
message001.innerHTML = "Enter your name and twitter, or press Skip to proceed.";
}
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
	var twittername = document.getElementById("twitt").value;
	var twitter = twittername.substring(0, 13);
	twitter001.innerHTML = twitter.replace(" ","");
}
function submitpassword() {
var ww = document.getElementById("password").value.toUpperCase();
document.getElementById("passwordsaverSemi").value = document.getElementById("password").value.toUpperCase();
if (ww == "SHIREWOLVES")
{
message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
message006.innerHTML = "";
message001.innerHTML = "Enter your name and twitter, or press Skip to proceed.";
}
else
{
message006.innerHTML = "Password incorrect!";
document.getElementById("message006").style.top = "-180px";
}
}
function submitname () {
	var name = document.getElementById("q2").value.toUpperCase();
	var twitt = document.getElementById("twitt").value;
	var length1 = name.length;
	var twittername = document.getElementById("q3").value;
	var length2 = twittername.length;
	var twitter = twittername.substring(0, 15);
	if (length1 < 1){
	player001.innerHTML = document.getElementById("naam").value.toUpperCase();
	} 
	else if (length1 >= 1){
	player001.innerHTML = name;
	document.getElementById("naam").value = document.getElementById("q2").value;
	}
	if (length2 < 1){
	twitter001.innerHTML = twitt ;
	} 
	else if (length2 >= 1){
	twitter001.innerHTML = twitter.replace(" ","");
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
  	record001.innerHTML = document.getElementById("wins").value + "-" + document.getElementById("losses").value;
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
message004.innerHTML = "<select id=select><option value=Cushing>Rachel Cushing</option><option value=Erwin>Ethan Erwin</option><option value=Levine>Samm Levine</option><option value=Oyama>Paul Oyama</option><option value=Wolfe>Clarke Wolfe</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button>";
	message001.innerHTML = "Choose your opponent.";
}
function skip () {
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
message004.innerHTML = "<select id=select><option value=Cushing>Rachel Cushing</option><option value=Erwin>Ethan Erwin</option><option value=Levine>Samm Levine</option><option value=Oyama>Paul Oyama</option><option value=Wolfe>Clarke Wolfe</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button>";
	message001.innerHTML = "Choose your opponent.";
}
$("#message004").keypress(function(event) { 
         if (event.keyCode === 13){ 
                 $("#submit3").click(); 
            } 
});
