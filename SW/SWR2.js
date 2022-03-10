function load(){
intromusic.play();
if (document.getElementById("passwordsaverR2").value != "THREEPIO"){
message004.innerHTML = "<input id=password type=text maxlength=35 placeholder=Password /></br/></br/><button id=submit3  class=buttons001 onclick=submitpassword()>Submit</button>";
message001.innerHTML = "Enter the password you obtained by winning the previous round.";
		document.getElementById("password").focus();
}
else if (document.getElementById("passwordsaverR2").value == "THREEPIO"){
message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
message006.innerHTML = "";
message001.innerHTML = "Enter your name and twitter, or press Skip to proceed.";
		document.getElementById("q2").focus();
}
	if (document.getElementById("wins_SW").value.length < 1)
	{
	document.getElementById("wins_SW").value = 0;
	}
	if (document.getElementById("losses_SW").value.length < 1)
	{
	document.getElementById("losses_SW").value = 0;
	}
  	record001.innerHTML = document.getElementById("wins_SW").value + "-" + document.getElementById("losses_SW").value;
  	player001.innerHTML = document.getElementById("naam").value.toUpperCase();
	var twittername = document.getElementById("twitt").value;
	var twitter = twittername.substring(0, 13);
	twitter001.innerHTML = twitter.replace(" ","");
}
function submitpassword() {
var ww = document.getElementById("password").value.toUpperCase();
document.getElementById("passwordsaverR2").value = document.getElementById("password").value.toUpperCase();
if (ww == "THREEPIO")
{
message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
message006.innerHTML = "";
message001.innerHTML = "Enter your name and twitter, or press Skip to proceed.";
}
else
{
message006.innerHTML = "Password incorrect!";
document.getElementById("message006").style.top = "-160px";
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
	if (document.getElementById("wins_SW").value.length < 1)
	{
	document.getElementById("wins_SW").value = 0;
	}
	if (document.getElementById("losses_SW").value.length < 1)
	{
	document.getElementById("losses_SW").value = 0;
	}
	var record = document.getElementById("wins_SW").value + "-" + document.getElementById("losses_SW").value;
  	record001.innerHTML = record;
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
message004.innerHTML = "<select id=select><option value=Hoey>John Hoey</option><option value=Wilson>Marie Wilson</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button>";
	message001.innerHTML = "Choose your opponent.";
}
function skip () {
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
message004.innerHTML = "<select id=select><option value=Hoey>John Hoey</option><option value=Wilson>Marie Wilson</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button>";
	message001.innerHTML = "Choose your opponent.";
}
function winKO(){
		document.getElementById("JTE").style.display = "none";
		document.getElementById("time001").style.display = "none";
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Match";
                time001.innerHTML = "";
		document.getElementById("message002").style.fontSize = "200%";
		document.getElementById("message002").style.fontWeight = "bold";
		document.getElementById("message003").style.fontSize = "200%";
		document.getElementById("message003").style.fontWeight = "bold";
                message002.innerHTML = "<span id=KO class=flash style=font-size:240%>KO</span>" + "</br></br>" + "And your winner...."
		var winner = competitorlist[0].lowercase;
                message003.innerHTML = player001.innerHTML;
 		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 		message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].lowercase + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("wins_SW").stepUp(1);
		document.getElementById("KOs_SW").stepUp(1);
		document.getElementById("AnsweredQuestions_SW").value = parseInt(document.getElementById("AnsweredQuestions_SW").value) +  quescount;
		document.getElementById("CorrectQuestions_SW").value = parseInt(document.getElementById("CorrectQuestions_SW").value) +  quescor;
		document.getElementById("PossiblePoints_SW").value = parseInt(document.getElementById("PossiblePoints_SW").value)  +  posspoints;
		document.getElementById("TotalPoints_SW").value = parseInt(document.getElementById("TotalPoints_SW").value) +  b
		document.getElementById("passwordsaverR3").value = "YADDLE";
		document.getElementById("save").click();
		message004.innerHTML = "You have unlocked the next round. Use the password 'Yaddle' to enter." + "</br></br>" + "<button class=buttons001 onclick=repeat001()>Play again</button>" + "&nbsp" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>" + "&nbsp" + "<div class='tooltip'><button class=buttons001 style='background-color: #1d9bf0;' onclick=tweetbutton()>Tweet result</button><span class='tooltiptext'>Pressing this button automatically saves a printscreen and allows you to share the result on Twitter</span></div>";		
		message004.setAttribute("data-html2canvas-ignore", true);
		document.getElementById("message002").style.top = "-155px";
		document.getElementById("message004").style.top = "-330px";
		document.getElementById("message003").style.top = "-145px";
		document.getElementById("message006").style.top = "-55px";
		document.getElementById("message006").style.fontSize = "110%";
}
function winTKO(){
		document.getElementById("JTE").style.display = "none";
		document.getElementById("time001").style.display = "none";
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Match";
                time001.innerHTML = "";
		document.getElementById("message002").style.fontSize = "200%";
		document.getElementById("message002").style.fontWeight = "bold";
		document.getElementById("message003").style.fontSize = "200%";
		document.getElementById("message003").style.fontWeight = "bold";
                message002.innerHTML = "<span id=TKO class=flash style=font-size:240%>TKO</span>" + "</br></br>" + "And your winner...."
		var winner = competitorlist[0].lowercase;
                message003.innerHTML = player001.innerHTML;
 		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
		message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].lowercase + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("wins_SW").stepUp(1);
		document.getElementById("TKOs_SW").stepUp(1);
		document.getElementById("AnsweredQuestions_SW").value = parseInt(document.getElementById("AnsweredQuestions_SW").value) +  quescount;
		document.getElementById("CorrectQuestions_SW").value = parseInt(document.getElementById("CorrectQuestions_SW").value) +  quescor;
		document.getElementById("PossiblePoints_SW").value = parseInt(document.getElementById("PossiblePoints_SW").value)  +  posspoints;
		document.getElementById("TotalPoints_SW").value = parseInt(document.getElementById("TotalPoints_SW").value) +  b
		document.getElementById("passwordsaverR3").value = "YADDLE";
		document.getElementById("save").click();
		message004.innerHTML = "You have unlocked the next round. Use the password 'Yaddle' to enter." + "</br></br>" + "<button class=buttons001 onclick=repeat001()>Play again</button>" + "&nbsp" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>" + "&nbsp" + "<div class='tooltip'><button class=buttons001 style='background-color: #1d9bf0;' onclick=tweetbutton()>Tweet result</button><span class='tooltiptext'>Pressing this button automatically saves a printscreen and allows you to share the result on Twitter</span></div>";		
		message004.setAttribute("data-html2canvas-ignore", true);
		document.getElementById("message002").style.top = "-155px";
		document.getElementById("message004").style.top = "-330px";
		document.getElementById("message003").style.top = "-145px";
		document.getElementById("message006").style.top = "-55px";
		document.getElementById("message006").style.fontSize = "110%";
}
function win(){
		document.getElementById("JTE").style.display = "none";
		document.getElementById("time001").style.display = "none";
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
		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
		message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].lowercase + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("wins_SW").stepUp(1);
		document.getElementById("AnsweredQuestions_SW").value = parseInt(document.getElementById("AnsweredQuestions_SW").value) +  quescount;
		document.getElementById("CorrectQuestions_SW").value = parseInt(document.getElementById("CorrectQuestions_SW").value) +  quescor;
		document.getElementById("PossiblePoints_SW").value = parseInt(document.getElementById("PossiblePoints_SW").value)  +  posspoints;
		document.getElementById("TotalPoints_SW").value = parseInt(document.getElementById("TotalPoints_SW").value) +  b
		document.getElementById("passwordsaverR3").value = "YADDLE";
		document.getElementById("save").click();
		message004.innerHTML = "You have unlocked the next round. Use the password 'Yaddle' to enter." + "</br></br>" + "<button class=buttons001 onclick=repeat001()>Play again</button>" + "&nbsp" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>" + "&nbsp" + "<div class='tooltip'><button class=buttons001 style='background-color: #1d9bf0;' onclick=tweetbutton()>Tweet result</button><span class='tooltiptext'>Pressing this button automatically saves a printscreen and allows you to share the result on Twitter</span></div>";		
		message004.setAttribute("data-html2canvas-ignore", true);
		document.getElementById("message002").style.top = "-145px";
		document.getElementById("message004").style.top = "-320px";
		document.getElementById("message003").style.top = "-145px";
		document.getElementById("message006").style.top = "-45px";
		document.getElementById("message006").style.fontSize = "110%";
}
     	$("#message004").keypress(function(event) { 	
         if (event.keyCode === 13){ 	
                 $("#submit3").click(); 	
            } 	
});
