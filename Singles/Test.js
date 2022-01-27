message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
document.getElementById("q2").focus();
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
	var twittername = document.getElementById("twitt").value;
	var twitter = twittername.substring(0, 13);
	twitter001.innerHTML = twitter.replace(" ","");
}
var percentage = 0;
var percentage3 = 0;
var percentage5 = 0;
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  return array;
}
var wheelie = [];
function choosecomp() {
checkboxes.innerHTML = "<div id=row1><label class=checkbox-label><input type=checkbox id=cat1 value=70s>70s</label><br/><label class=checkbox-label><input type=checkbox id=cat2 value=80s>80s</label><br/><label class=checkbox-label><input type=checkbox id=cat3 value=90s>90s</label><br/><label class=checkbox-label><input type=checkbox id=cat4 value=2000s>2000s</label><br/><label class=checkbox-label><input type=checkbox id=cat5 value=2010s>2010s</label><br/><label class=checkbox-label><input type=checkbox id=cat6 value=Action/Adventure>Action/Adventure</label><br/><label class=checkbox-label><input type=checkbox id=cat7 value='Adam Sandler'>Adam Sandler</label><br/><label class=checkbox-label><input type=checkbox id=cat8 value='Alfred Hitchcock'>Alfred Hitchcock</label><br/><label class=checkbox-label><input type=checkbox id=cat9 value=Animated>Animated</label><br/><label class=checkbox-label><input type=checkbox id=cat10 value='Audrey Hepburn'>Audrey Hepburn</label><br/><label class=checkbox-label><input type=checkbox id=cat11 value=Biopics>Biopics</label><br/><label class=checkbox-label><input type=checkbox id=cat12 value='Black Cinema'>Black Cinema</label><br/><label class=checkbox-label><input type=checkbox id=cat13 value='Cameron Diaz'>Cameron Diaz</label><br/><label class=checkbox-label><input type=checkbox id=cat14 value='Cate Blanchett'>Cate Blanchett</label><br/><label class=checkbox-label><input type=checkbox id=cat15 value='Christopher Nolan'>Christopher Nolan</label><br/><label class=checkbox-label><input type=checkbox id=cat16 value=Classics>Classics</label><br/><label class=checkbox-label><input type=checkbox id=cat17 value='Clint Eastwood'>Clint Eastwood</label><br/><label class=checkbox-label><input type=checkbox id=cat18 value=Comedies>Comedies</label><br/><label class=checkbox-label><input type=checkbox id=cat19 value='Comic Book Movies'>Comic Book Movies</label><br/><label class=checkbox-label><input type=checkbox id=cat20 value='Coming of Age'>Coming of Age</label><br/><label class=checkbox-label><input type=checkbox id=cat21 value=Crime>Crime</label><br/><label class=checkbox-label><input type=checkbox id=cat22 value='Dance Movies'>Dance Movies</label><br/><label class=checkbox-label><input type=checkbox id=cat23 value='Denzel Washington'>Denzel Washington</label><br/><label class=checkbox-label><input type=checkbox id=cat24 value=Directors>Directors</label><br/><label class=checkbox-label><input type=checkbox id=cat25 value='Disaster Movies'>Disaster Movies</label><br/><label class=checkbox-label><input type=checkbox id=cat26 value=Disney>Disney</label><br/><label class=checkbox-label><input type=checkbox id=cat27 value=Dramas>Dramas</label><br/><label class=checkbox-label><input type=checkbox id=cat28 value='DreamWorks Animation'>DreamWorks Animation</label><br/><label class=checkbox-label><input type=checkbox id=cat29 value='Eddie Murphy'>Eddie Murphy</label><br/><label class=checkbox-label><input type=checkbox id=cat30 value='Family Films'>Family Films</label><br/><label class=checkbox-label><input type=checkbox id=cat31 value='Famous Actors and Actresses'>Famous Actors and Actresses</label><br/><label class=checkbox-label><input type=checkbox id=cat32 value=Fantasy/Sci-fi>Fantasy/Sci-fi</label><br/><label class=checkbox-label><input type=checkbox id=cat33 value='Festival Darlings'>Festival Darlings</label><br/><label class=checkbox-label><input type=checkbox id=cat34 value='Holiday Movies'>Holiday Movies</label><br/><label class=checkbox-label><input type=checkbox id=cat35 value=Horror>Horror</label><br/></div><div id=row2><label class=checkbox2><input type=checkbox id=cat36 value='James Bond'>James Bond</label><br/><label class=checkbox2><input type=checkbox id=cat37 value='John Carpenter'>John Carpenter</label><br/><label class=checkbox2><input type=checkbox id=cat38 value='Julia Roberts'>Julia Roberts</label><br/><label class=checkbox2><input type=checkbox id=cat39 value='Kevin Smith'>Kevin Smith</label><br/><label class=checkbox2><input type=checkbox id=cat40 value='Kurt Russell'>Kurt Russell</label><br/><label class=checkbox2><input type=checkbox id=cat41 value='Martin Scorsese'>Martin Scorsese</label><br/><label class=checkbox2><input type=checkbox id=cat42 value='Matthew McConaughey'>Matthew McConaughey</label><br/><label class=checkbox2><input type=checkbox id=cat43 value='Meryl Streep'>Meryl Streep</label><br/><label class=checkbox2><input type=checkbox id=cat44 value='Monster Movies'>Monster Movies</label><br/><label class=checkbox2><input type=checkbox id=cat45 value='Movie Taglines'>Movie Taglines</label><br/><label class=checkbox2><input type=checkbox id=cat46 value='Movie Quotes'>Movie Quotes</label><br/><label class=checkbox2><input type=checkbox id=cat47 value='Movie Release Dates'>Movie Release Dates</label><br/><label class=checkbox2><input type=checkbox id=cat48 value=Musicals>Musicals</label><br/><label class=checkbox2><input type=checkbox id=cat49 value='Oscar Movies'>Oscar Movies</label><br/><label class=checkbox2><input type=checkbox id=cat50 value=Pixar>Pixar</label><br/><label class=checkbox2><input type=checkbox id=cat51 value='Quentin Tarantino'>Quentin Tarantino</label><br/><label class=checkbox2><input type=checkbox id=cat52 value=Romance>Romance</label><br/><label class=checkbox2><input type=checkbox id=cat53 value=Rom-coms>Rom-coms</label><br/><label class=checkbox2><input type=checkbox id=cat54 value='Sandra Bullock'>Sandra Bullock</label><br/><label class=checkbox2><input type=checkbox id=cat55 value='Scarlett Johansson'>Scarlett Johansson</label><br/><label class=checkbox2><input type=checkbox id=cat56 value='Scores & Soundtracks'>Scores & Soundtracks</label><br/><label class=checkbox2><input type=checkbox id=cat57 value='Sly & Arnie'>Sly & Arnie</label><br/><label class=checkbox2><input type=checkbox id=cat58 value='Stanley Kubrick'>Stanley Kubrick</label><br/><label class=checkbox2><input type=checkbox id=cat59 value='Steven Spielberg'>Steven Spielberg</label><br/><label class=checkbox2><input type=checkbox id=cat60 value=Sports>Sports</label><br/><label class=checkbox2><input type=checkbox id=cat61 value='Spy Movies'>Spy Movies</label><br/><label class=checkbox2><input type=checkbox id=cat62 value=Thrillers>Thrillers</label><br/><label class=checkbox2><input type=checkbox id=cat63 value='Tim Burton'>Tim Burton</label><br/><label class=checkbox2><input type=checkbox id=cat64 value='Tom Cruise'>Tom Cruise</label><br/><label class=checkbox2><input type=checkbox id=cat65 value='Tom Hanks'>Tom Hanks</label><br/><label class=checkbox2><input type=checkbox id=cat66 value='Video Game Movies'>Video Game Movies</label><br/><label class=checkbox2><input type=checkbox id=cat67 value=War>War</label><br/><label class=checkbox2><input type=checkbox id=cat68 value=Westerns>Westerns</label><br/><label class=checkbox2><input type=checkbox id=cat69 value='Will Smith'>Will Smith</label><br/><label class=checkbox2><input type=checkbox id=cat70 value='YA Adaptations'>YA Adaptations</label></div><br/>";
	if (navigator.userAgent.includes('Firefox')) {
	  document.getElementById("checkboxes").style.top = "430px";
	}	
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
	message001.innerHTML = "Choose your wheel slices.";
	message004.innerHTML = "";
wheelie[0]= competitorlist[0].strength1;
wheelie[1]= competitorlist[0].strength2;
wheelie[2]= competitorlist[0].strength3;
wheelie[3]= competitorlist[0].strength4;
wheelie[4]= competitorlist[0].strength5;
wheelie[5]= competitorlist[0].strength6;
wheelie = shuffle(wheelie);
	message005.innerHTML = "You selected " +competitorlist[0].lowercase + "." + "</br></br>" + "He/she selected the following wheel slices: " + wheelie[0] + " and " +  wheelie[1] + "." + "</br></br>" + "Select 2 categories to put on the wheel.";
	document.getElementById("message004").style.top = "-180px";
        document.getElementById("message004").style.visibility = "hidden";
	message004.innerHTML = "<button class=buttons002 onclick=pregame()>Next</button>";
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 4) {
	    if (navigator.userAgent.includes('Firefox')) {
	  document.getElementById("checkboxes").style.top = "430px";
	}	
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 4) {
	    if (navigator.userAgent.includes('Firefox')) {
	  document.getElementById("checkboxes").style.top = "430px";
	}	
	document.getElementById("message004").style.visibility = "visible";
    }
else{
	if (navigator.userAgent.includes('Firefox')) {
	  document.getElementById("checkboxes").style.top = "430px";
	}	
	document.getElementById("message004").style.visibility = "hidden";
}
});
var checkcount = 0;
if (checkcount < 3){
var m = 1;
var cat = "cat";
for (m = 1; m < 71; m++) {
if ((document.getElementById(cat + m).value == wheelie[0]) || (document.getElementById(cat + m).value ==  wheelie[1])) {
document.getElementById(cat + m).checked = true;
document.getElementById(cat + m).disabled = true;
checkcount++;
}
}
}
	document.getElementById("checkboxes").style.visibility = "visible";
}
function pregame(){
        document.getElementById("checkboxes").style.visibility = "hidden";
	document.getElementById("JTE").style.display = "initial";
	document.getElementById("time001").style.display = "initial";
	message001.innerHTML = "Click Begin to start the match.";
	message005.innerHTML = "<strong><font size=4>ROUND ONE</font><br/></br>YOU GET 10 QUESTIONS FROM RANDOM CATEGORIES</br></br>YOU HAVE 20 SECONDS TO READ THE QUESTION AND SUBMIT YOUR ANSWER</br>YOU CAN SUBMIT YOUR ANSWER BY CLICKING THE SUBMIT BUTTON OR BY HITTING THE ENTER KEY</br></br>ALL QUESTIONS ARE WORTH 1 POINT</br>A PERFECT ROUND TRIGGERS A 1 POINT BONUS QUESTION</br></br>YOU CAN ASK 3 TIMES DURING THE MATCH FOR A QUESTION TO BE REPEATED</br>THIS GIVES YOU AN ADDITIONAL 15 SECONDS TO ANSWER THE QUESTION</br></br>YOU CAN CHALLENGE ANY RULING BY CLICKING THE 'CHALLENGE' BUTTON</br>JUDGE YOUR CHALLENGE BY CLICKING THE 'WIN CHALLENGE' OR 'LOSE CHALLENGE' BUTTON</br>REVERSALS LET YOU KEEP YOUR CHALLENGE</strong>";
	document.getElementById("message005").style.position = "relative";
	document.getElementById("message005").style.top = "-260px";
message003.innerHTML = "<button id=begin class=buttons002 onclick=begin001()>Begin</button>";
	document.getElementById("message003").style.top = "-260px";
	message006.innerHTML =  "First category is " +question001[0].cat;
	document.getElementById("message006").style.position = "relative";
	document.getElementById("message006").style.top = "-260px";
	message004.innerHTML = "";
	document.getElementById("message004").style = "initial";
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
message004.innerHTML = "<select id=select><option value=Alba>Greg Alba</option><option value=Dagnino>Tom Dagnino</option><option value=Dewberry>Eliot Dewberry</option><option value=Macuga>Josh Macuga</option><option value=Witt>Adam Witt</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button>";
	message001.innerHTML = "Choose your opponent.";
}
function skip () {
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
message004.innerHTML = "<select id=select><option value=Alba>Greg Alba</option><option value=Dagnino>Tom Dagnino</option><option value=Dewberry>Eliot Dewberry</option><option value=Macuga>Josh Macuga</option><option value=Witt>Adam Witt</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button>";
	message001.innerHTML = "Choose your opponent.";
}
 	var a = 0;
        a++;
        var r = 0;
        r++;
        var q = 0;
        q++;
        var b = 0;
        var s = 0;
	var j = 3;
	j--;
	var h = 2;
	h--;
var quescount = 0 ;
var posspoints = 0;
var quescor = 0;
var quescountopp = 0 ;
var posspointsopp = 0;
var quescoropp = 0;
var c;
var stealopp = 0;
var stealmc = 0;
fantasyscifi = shuffle(fantasyscifi);
comedy = shuffle(comedy);
horror = shuffle(horror);
actionadventure = shuffle(actionadventure);
animated = shuffle(animated);
oscarmovies = shuffle(oscarmovies);
eighties = shuffle(eighties);
nineties = shuffle(nineties);
zeros = shuffle(zeros);
tens = shuffle(tens);
dramas = shuffle(dramas);
directors = shuffle(directors);
romcoms = shuffle(romcoms);
moviereleasedates = shuffle(moviereleasedates);
comicbookmovies = shuffle(comicbookmovies);
holidaymovies = shuffle(holidaymovies);
biopics = shuffle(biopics);
comingofage = shuffle(comingofage);
crime = shuffle(crime);
disney = shuffle(disney);
familyfilms = shuffle(familyfilms);
famousactors = shuffle(famousactors);
seventies = shuffle(seventies);
moviequotes = shuffle(moviequotes);
romance = shuffle(romance);
slyarnie = shuffle(slyarnie);
spielberg = shuffle(spielberg);
pixar = shuffle(pixar);
spymovies = shuffle(spymovies);
sports = shuffle(sports);
thrillers = shuffle(thrillers);
scoressoundtracks = shuffle(scoressoundtracks);
tomhanks = shuffle(tomhanks);
war = shuffle(war);
musicals = shuffle(musicals);
classics = shuffle(classics);
westerns = shuffle(westerns);
monstermovies = shuffle(monstermovies);
willsmith = shuffle(willsmith);
tomcruise = shuffle(tomcruise);
denzelwashington = shuffle(denzelwashington);
disastermovies = shuffle(disastermovies);
dance = shuffle(dance);
jamesbond = shuffle(jamesbond);
blackcinema = shuffle(blackcinema);
twopointer = shuffle(twopointer);
threepointer001 = shuffle(threepointer001);
var roundthree = [fantasyscifi[1], twopointer[0], twopointer[1], twopointer[3], twopointer[4], twopointer[5], comedy[1], horror[1], actionadventure[1], animated[1], oscarmovies[1], eighties[1], nineties[1], zeros[1], tens[1], dramas[1], comicbookmovies[1], holidaymovies[1], romcoms[1], directors[1], biopics[1], comingofage[1], crime[1], disney[1], familyfilms[1], famousactors[1], seventies[1], moviereleasedates[1], moviequotes[1], romance[1], slyarnie[1], spielberg[1], pixar[1], spymovies[1], sports[1], thrillers[1], scoressoundtracks[1], tomhanks[1], war[1], musicals[1], classics[1], westerns[1], monstermovies[1], willsmith[1], tomcruise[1], denzelwashington[1], disastermovies[1], dance[1], jamesbond[1], blackcinema[1]];
var suddendeath = [fantasyscifi[2], twopointer[2], comedy[2], dramas[2], horror[2], actionadventure[2], oscarmovies[2], eighties[2], nineties[2], zeros[2], tens[2], directors[2], animated[2], romcoms[2], comicbookmovies[2], famousactors[2], moviereleasedates[2], moviequotes[2], classics[2], musicals[2], thrillers[2], blackcinema[2], sports[2], familyfilms[2], crime[2]];
var roundone = [fantasyscifi[0], comedy[0], dramas[0], horror[0], actionadventure[0], oscarmovies[0], eighties[0], nineties[0], zeros[0], tens[0], directors[0], animated[0], romcoms[0], comicbookmovies[0], famousactors[0], crime[0], thrillers[0], moviereleasedates[0]];
suddendeath = shuffle(suddendeath);
roundthree = shuffle(roundthree);
roundone = shuffle(roundone);
question001[0] =  roundone[0];
question001[1] =  roundone[1];
question001[2] =  roundone[2];
question001[3] =  roundone[3];
question001[4] =  roundone[4];
question001[5] =  roundone[5];
question001[6] =  roundone[6];
question001[7] =  roundone[7];
question001[8] =  roundthree[0];
question001[9] =  roundone[8];
question001[10] = suddendeath[0];
question001[11] = suddendeath[1];
question001[12] = suddendeath[2];
question001[13] = suddendeath[3]; 
question001[14] = suddendeath[4]; 
question001[15] = suddendeath[5]; 
question001[16] = suddendeath[6]; 
question001[17] = suddendeath[7]; 
question001[18] = roundone[9]; 
question001[19] = roundone[10]; 
var chosen = [r2Q1[0].cat, r2Q2[0].cat, r2Q3[0].cat, r2Q4[0].cat, r2Q5[0].cat, r2Q6[0].cat, r2Q7[0].cat, r2Q8[0].cat, r2Q9[0].cat, r2Q10[0].cat, r2Q11[0].cat, r2Q12[0].cat, r2Q13[0].cat, r2Q14[0].cat, r2Q15[0].cat, r2Q16[0].cat, r2Q17[0].cat, r2Q18[0].cat, r2Q19[0].cat, r2Q20[0].cat, r2Q21[0].cat, r2Q22[0].cat, r2Q23[0].cat, r2Q24[0].cat, r2Q25[0].cat, r2Q26[0].cat, r2Q27[0].cat, r2Q28[0].cat, r2Q29[0].cat, r2Q30[0].cat, r2Q31[0].cat, r2Q32[0].cat, r2Q33[0].cat, r2Q34[0].cat, r2Q35[0].cat, r2Q36[0].cat, r2Q37[0].cat, r2Q38[0].cat, r2Q39[0].cat, r2Q40[0].cat, r2Q41[0].cat, r2Q42[0].cat, r2Q43[0].cat, r2Q44[0].cat, r2Q45[0].cat, r2Q46[0].cat, r2Q47[0].cat, r2Q48[0].cat, r2Q49[0].cat, r2Q50[0].cat, r2Q51[0].cat, r2Q52[0].cat, r2Q53[0].cat, r2Q54[0].cat, r2Q55[0].cat, r2Q56[0].cat, r2Q57[0].cat, r2Q58[0].cat, r2Q59[0].cat, r2Q60[0].cat, r2Q61[0].cat, r2Q62[0].cat, r2Q63[0].cat, r2Q64[0].cat, r2Q65[0].cat, r2Q66[0].cat, r2Q67[0].cat, r2Q68[0].cat, r2Q69[0].cat, r2Q70[0].cat];
chosen= shuffle(chosen); 
var data = [];
data[0] = 1;
data[1] = 1;
data[2] = 1;
data[3] = 1;
data[4] = 1;
data[5] = 1;
data[6] = 1;
data[7] = 1;
data[8] = 1;
data[9] = 1;
data[10] = 1;
data[11] = 1;
function unique2(){
	if ((fivepointer001[0].cat == threepointer001[0].cat) || (fivepointer001[0].cat == question001[8].cat)) {
	      fivepointer001 = shuffle(fivepointer001);   
		unique2();
    	}
}
function unique(){
   	if (question001[8].cat == threepointer001[0].cat) {
	threepointer001 = shuffle(threepointer001); 
		unique();
    	}
   	else {
		unique2();
    	}
}
var q = "0";
var p = "0";
function colorpick(){
if ( (q == "0") || (q == "2") || (q == "4")  || (q == "6") || (q == "8")|| (q == "10")|| (q == "12")){
q++;
return "#830F01" ;
}
else if ( (q == "1") || (q == "3")|| (q == "5")|| (q == "7")|| (q == "9")|| (q == "11")) {
q++;
return "#272421" ;
}
}
function colorpicktext(){
if ((p == "0") || (p == "2") || (p == "4") || (p == "6") || (p == "8") || (p == "10") || (p == "12")) {
p++;
return "#EF2203" ;
}
else if ((p == "1") || (p == "3")|| (p == "5")|| (p == "7")|| (p == "9")|| (p == "11")) {
p++;
return "white" ;
}
}
        var padding = {top:00, right:0, bottom:0, left:0},
            wid = 400 - padding.left - padding.right,
            hei = 400 - padding.top  - padding.bottom,
            rot = Math.min(wid, hei)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = colorpick();
        var svg = d3.select('#chart')
            .append("svg")
            .data([data])
            .attr("width",  wid + padding.left + padding.right)
            .attr("height", hei + padding.top + padding.bottom);
        var container = svg.append("g")
            .attr("class", "chartholder")
            .attr("transform", "translate(" + (wid/2 + padding.left) + "," + (hei/2 + padding.top) + ")");
        var vis = container
            .append("g");
            
        var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
        var arc = d3.svg.arc().outerRadius(rot);
        var arcs = vis.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");
            
        arcs.append("path")
            .attr("fill", function(i){ return colorpick(); })
            .attr("d", function (d) { return arc(d); });
  function spin(d){
            document.getElementById("spin").style.visibility = "hidden";
            container.on("click", null);
            var  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
                
            rotation = (Math.round(rng / ps) * ps);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;
                        console.log(picked);
            rotation += 90 - Math.round(ps/2);
            vis.transition()
                .duration(3000)
                .attrTween("transform", rotTween)
                .each("end", function(){
                    oldrotation = rotation;
message002.innerHTML = "You spun " +data[picked] + "<br/></br>" + "<button class=buttons008 id=respin onclick=spin2()>Spin Again</button>";
if (data[picked] == "Wildcard"){
message002.innerHTML = "You spun a Wildcard" + "<br/></br>" + "<button class=buttons007 id=takewildcard onclick=takewildcard()>Choose Wildcard</button>" + "<br/></br>" + "<button class=buttons008 id=respin onclick=spin2()>Spin Again</button>";
}
else if (data[picked] == "Spinner's Choice"){
message002.innerHTML = "You spun Spinner's Choice" + "<br/></br>" + "Select which category you want to pick:" + "<br/></br>" + "<ul id=boxes class=aligner><li><input type=checkbox id=box1 value= /><label for=box1>" + data[1] +"</label></li><li><input type=checkbox id=box2 value=/><label for=box2>" +data[2] +"</label></li><li><input type=checkbox id=box3 value=/><label for=box3>" + data[3] + "</label></li><li><input type=checkbox id=box4 value=/><label for=box4>" + data[4] + "</label></li><li><input type=checkbox id=box5 value=/><label for=box5>" + data[5] + "</label></li><li><input type=checkbox id=box6 value=/><label for=box6>" + data[7] + "</label></li><li><input type=checkbox id=box7 value=/><label for=box7>" + data[8] + "</label></li><li><input type=checkbox id=box8 value=/><label for=box8>" + data[9] + "</label></li><li><input type=checkbox id=box9 value=/><label for=box9>" + data[10] + "</label></li><li><input type=checkbox id=box10 value=/><label for=box10>" + data[11] + "</label></li></ul>" + "<button class=buttons008 id=confirm onclick=confirm()>Confirm</button>";
document.getElementById("confirm").style.visibility= "hidden"; 
document.getElementById("confirm").style.top= "-200px"; 
document.getElementById("box1").value = data[1];
document.getElementById("box2").value = data[2];
document.getElementById("box3").value = data[3];
document.getElementById("box4").value = data[4];
document.getElementById("box5").value = data[5];
document.getElementById("box6").value = data[7];
document.getElementById("box7").value = data[8];
document.getElementById("box8").value = data[9];
document.getElementById("box9").value = data[10];
document.getElementById("box10").value = data[11];
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 5) {
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 5) {
	document.getElementById("confirm").style.visibility= "visible"; 
    }
    if ($('input[type=checkbox]:checked').length < 5) {
	document.getElementById("confirm").style.visibility= "hidden"; 
    }
});
}
else if (data[picked] == "Opponent's Choice"){
document.getElementById("respin").style.visibility = "hidden"; 
document.getElementById("nextbutton").style.visibility= "visible"; 
if (wheelie[0] == storage[0]) {picked = "1";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == storage[1]) {picked = "2";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == storage[2]) {picked = "3";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == storage[3]) {picked = "4";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
round2();
}
else 
{
document.getElementById("nextbutton").style.visibility= "visible"; 
round2();
}
			mess = picked+1;     
                });
        }

function takewildcard(){
var rand = Math.random() * 100;
if (rand < 33){
compwildspinners++;
data[picked] = "Spinner's Choice";
d3.select(".slice:nth-child(" + (picked + 1) + ") text")
.text("Spinner's Choice")
message002.innerHTML = "You got Spinner's Choice" + "<br/></br>" + "Select which category you want to pick:" + "<br/></br>" + "<ul id=boxes class=aligner><li><input type=checkbox id=box1 value= /><label for=box1>" + data[1] +"</label></li><li><input type=checkbox id=box2 value=/><label for=box2>" +data[2] +"</label></li><li><input type=checkbox id=box3 value=/><label for=box3>" + data[3] + "</label></li><li><input type=checkbox id=box4 value=/><label for=box4>" + data[4] + "</label></li><li><input type=checkbox id=box5 value=/><label for=box5>" + data[5] + "</label></li><li><input type=checkbox id=box6 value=/><label for=box6>" + data[7] + "</label></li><li><input type=checkbox id=box7 value=/><label for=box7>" + data[8] + "</label></li><li><input type=checkbox id=box8 value=/><label for=box8>" + data[9] + "</label></li><li><input type=checkbox id=box9 value=/><label for=box9>" + data[10] + "</label></li><li><input type=checkbox id=box10 value=/><label for=box10>" + data[11] + "</label></li></ul>" + "<button class=buttons008 id=confirm onclick=confirm()>Confirm</button>";
document.getElementById("confirm").style.visibility= "hidden"; 
document.getElementById("confirm").style.top= "-200px"; 
document.getElementById("box1").value = data[1];
document.getElementById("box2").value = data[2];
document.getElementById("box3").value = data[3];
document.getElementById("box4").value = data[4];
document.getElementById("box5").value = data[5];
document.getElementById("box6").value = data[7];
document.getElementById("box7").value = data[8];
document.getElementById("box8").value = data[9];
document.getElementById("box9").value = data[10];
document.getElementById("box10").value = data[11];
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 5) {
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 5) {
	document.getElementById("confirm").style.visibility= "visible"; 
    }
    if ($('input[type=checkbox]:checked').length < 5) {
	document.getElementById("confirm").style.visibility= "hidden"; 
    }
});
}
else if (rand < 66){
compwildopponent++;
data[picked] = "Opponent's Choice";
d3.select(".slice:nth-child(" + (picked + 1) + ") text")
.text("Opponent's Choice")
if (wheelie[0] == storage[0]) {picked = "1";
message002.innerHTML = "You got Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == storage[1]) {picked = "2";
message002.innerHTML = "You got Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == storage[2]) {picked = "3";
message002.innerHTML = "You got Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == storage[3]) {picked = "4";
message002.innerHTML = "You got Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
document.getElementById("nextbutton").style.visibility= "visible"; 
round2();
}
else if (rand < 100){
compwildmystery++;
var rand2 = Math.random() * 100;
if (rand2 < 25){r2question001 = r2Q67;}		
else if (rand2 < 50){r2question001 = r2Q68;}
else if (rand2 < 75){r2question001 = r2Q69;}
else if (rand2 < 100){r2question001 = r2Q70;}
r2question001 = shuffle(r2question001); 
message002.innerHTML = "You got " + r2question001[0].cat + "<br/><br/>" + "<button id=nextbutton class=buttons002 onclick=next001()>Next</button><br><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
d3.select(".slice:nth-child(" + (picked + 1) + ") text")
.text(r2question001[0].cat) 
data[picked] = r2question001[0].cat;
}
}

function confirm(){
message001.innerHTML = "Press Next to proceed";
document.getElementById("message002").style.display= "none"; 
document.getElementById("chart").style.visibility = "hidden";
if (document.getElementById("box1").checked ){picked = 1;}
if (document.getElementById("box2").checked ){picked = 2;}
if (document.getElementById("box3").checked ){picked = 3;}
if (document.getElementById("box4").checked ){picked = 4;}
if (document.getElementById("box5").checked ){picked = 5;}
if (document.getElementById("box6").checked ){picked = 7;}
if (document.getElementById("box7").checked ){picked = 8;}
if (document.getElementById("box8").checked ){picked = 9;}
if (document.getElementById("box9").checked ){picked = 10;}
if (document.getElementById("box10").checked ){picked = 11;}
message003.innerHTML = "You selected " + data[picked] + "<br/><br/>" + "<button id=nextbutton class=buttons002 onclick=next001()>Next</button><br><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
round2();
}
function confirmopp(){
document.getElementById("message003").style.visibility = "visible";
if ((document.getElementById("box1").checked) && (document.getElementById("box1").disabled != true)){random = 1;}
if ((document.getElementById("box2").checked) && (document.getElementById("box2").disabled != true)){random = 2;}
if ((document.getElementById("box3").checked) && (document.getElementById("box3").disabled != true)){random = 3;}
if ((document.getElementById("box4").checked) && (document.getElementById("box4").disabled != true)){random = 4;}
if ((document.getElementById("box5").checked) && (document.getElementById("box5").disabled != true)){random = 5;}
if ((document.getElementById("box6").checked) && (document.getElementById("box6").disabled != true)){random = 7;}
if ((document.getElementById("box7").checked) && (document.getElementById("box7").disabled != true)){random = 8;}
if ((document.getElementById("box8").checked) && (document.getElementById("box8").disabled != true)){random = 9;}
if ((document.getElementById("box9").checked) && (document.getElementById("box9").disabled != true)){random = 10;}
if ((document.getElementById("box10").checked) && (document.getElementById("box10").disabled != true)){random = 11;}
message002.innerHTML = "You selected " + data[random] + "<br>" + "<button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
assigncompcat();
}
function assigncompcat(){
if (data[random] == r2Q1[0].cat){compcat = r2Q1;}
else if (data[random] == r2Q2[0].cat){compcat = r2Q2;}
else if (data[random] == r2Q3[0].cat){compcat = r2Q3;}
else if (data[random] == r2Q4[0].cat){compcat = r2Q4;}
else if (data[random] == r2Q5[0].cat){compcat = r2Q5;}
else if (data[random] == r2Q6[0].cat){compcat = r2Q6;}
else if (data[random] == r2Q7[0].cat){compcat = r2Q7;}
else if (data[random] == r2Q8[0].cat){compcat = r2Q8;}
else if (data[random] == r2Q9[0].cat){compcat = r2Q9;}
else if (data[random] == r2Q10[0].cat){compcat = r2Q10;}
else if (data[random] == r2Q11[0].cat){compcat = r2Q11;}
else if (data[random] == r2Q12[0].cat){compcat = r2Q12;}
else if (data[random] == r2Q13[0].cat){compcat = r2Q13;}
else if (data[random] == r2Q14[0].cat){compcat = r2Q14;}
else if (data[random] == r2Q15[0].cat){compcat = r2Q15;}
else if (data[random] == r2Q16[0].cat){compcat = r2Q16;}
else if (data[random] == r2Q17[0].cat){compcat = r2Q17;}
else if (data[random] == r2Q18[0].cat){compcat = r2Q18;}
else if (data[random] == r2Q19[0].cat){compcat = r2Q19;}
else if (data[random] == r2Q20[0].cat){compcat = r2Q20;}
else if (data[random] == r2Q21[0].cat){compcat = r2Q21;}
else if (data[random] == r2Q22[0].cat){compcat = r2Q22;}
else if (data[random] == r2Q23[0].cat){compcat = r2Q23;}
else if (data[random] == r2Q24[0].cat){compcat = r2Q24;}
else if (data[random] == r2Q25[0].cat){compcat = r2Q25;}
else if (data[random] == r2Q26[0].cat){compcat = r2Q26;}
else if (data[random] == r2Q27[0].cat){compcat = r2Q27;}
else if (data[random] == r2Q28[0].cat){compcat = r2Q28;}
else if (data[random] == r2Q29[0].cat){compcat = r2Q29;}
else if (data[random] == r2Q30[0].cat){compcat = r2Q30;}
else if (data[random] == r2Q31[0].cat){compcat = r2Q31;}
else if (data[random] == r2Q32[0].cat){compcat = r2Q32;}
else if (data[random] == r2Q33[0].cat){compcat = r2Q33;}
else if (data[random] == r2Q34[0].cat){compcat = r2Q34;}
else if (data[random] == r2Q35[0].cat){compcat = r2Q35;}
else if (data[random] == r2Q36[0].cat){compcat = r2Q36;}
else if (data[random] == r2Q37[0].cat){compcat = r2Q37;}
else if (data[random] == r2Q38[0].cat){compcat = r2Q38;}
else if (data[random] == r2Q39[0].cat){compcat = r2Q39;}
else if (data[random] == r2Q40[0].cat){compcat = r2Q40;}
else if (data[random] == r2Q41[0].cat){compcat = r2Q41;}
else if (data[random] == r2Q42[0].cat){compcat = r2Q42;}
else if (data[random] == r2Q43[0].cat){compcat = r2Q43;}
else if (data[random] == r2Q44[0].cat){compcat = r2Q44;}
else if (data[random] == r2Q45[0].cat){compcat = r2Q45;}
else if (data[random] == r2Q46[0].cat){compcat = r2Q46;}
else if (data[random] == r2Q47[0].cat){compcat = r2Q47;}
else if (data[random] == r2Q48[0].cat){compcat = r2Q48;}
else if (data[random] == r2Q49[0].cat){compcat = r2Q49;}
else if (data[random] == r2Q50[0].cat){compcat = r2Q50;}
else if (data[random] == r2Q51[0].cat){compcat = r2Q51;}
else if (data[random] == r2Q52[0].cat){compcat = r2Q52;}
else if (data[random] == r2Q53[0].cat){compcat = r2Q53;}
else if (data[random] == r2Q54[0].cat){compcat = r2Q54;}
else if (data[random] == r2Q55[0].cat){compcat = r2Q55;}
else if (data[random] == r2Q56[0].cat){compcat = r2Q56;}
else if (data[random] == r2Q57[0].cat){compcat = r2Q57;}
else if (data[random] == r2Q58[0].cat){compcat = r2Q58;}
else if (data[random] == r2Q59[0].cat){compcat = r2Q59;}
else if (data[random] == r2Q60[0].cat){compcat = r2Q60;}
else if (data[random] == r2Q61[0].cat){compcat = r2Q61;}
else if (data[random] == r2Q62[0].cat){compcat = r2Q62;}
else if (data[random] == r2Q63[0].cat){compcat = r2Q63;}
else if (data[random] == r2Q64[0].cat){compcat = r2Q64;}
else if (data[random] == r2Q65[0].cat){compcat = r2Q65;}
else if (data[random] == r2Q66[0].cat){compcat = r2Q66;}
else if (data[random] == r2Q67[0].cat){compcat = r2Q67;}
else if (data[random] == r2Q68[0].cat){compcat = r2Q68;}
else if (data[random] == r2Q69[0].cat){compcat = r2Q69;}
else if (data[random] == r2Q70[0].cat){compcat = r2Q70;}
compcat = shuffle(compcat);
}
var opponentspun = "0";
var random = "6";
var spinners = "0";
var compwildspinners = "0";
var compwildopponent = "0";
var compwildmystery = "0";
var oppwildspinners = "0";
var oppwildopponent = "0";
var oppwildmystery = "0";


function simulatecomputerround2(){
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
random = Math.floor(Math.random() * numbers.length);
console.log("random: " + data[random]);
console.log("picked: " + data[picked]);
if (data[random] == data[picked]){console.log("repeat1"); simulatecomputerround2();}
else if ((data[random] == "Spinner's Choice") && (compwildspinners == "1")){console.log("repeat2"); simulatecomputerround2();}
else if ((data[random] == "Opponent's Choice") && (compwildopponent == "1")){console.log("repeat3"); simulatecomputerround2();}
else if ((data[random] != data[picked]) && (data[random] == "Wildcard")){
var rand = Math.random() * 100;
if (compwildspinners == "1"){
if (rand < 50){
d3.select(".slice:nth-child(" + (random + 1) + ") text")
.text("Opponent's Choice")
data[random] = "Spinner's Choice";
opponentspun = "1";
oppwildopponent++;
}
else if (rand < 100){
oppwildmystery++;
var rand2 = Math.random() * 100;
if (rand2 < 25){compcat  = r2Q67;}		
else if (rand2 < 50){compcat  = r2Q68;}
else if (rand2 < 75){compcat  = r2Q69;}
else if (rand2 < 100){compcat  = r2Q70;}
compcat = shuffle(compcat);
d3.select(".slice:nth-child(" + (random + 1) + ") text")
.text(compcat[0].cat)
data[random] = compcat[0].cat;
}
}
if (compwildopponent == "1"){
if (rand < 50){
spinners = "1";
oppwildspinners++;
d3.select(".slice:nth-child(" + (random + 1) + ") text")
.text("Spinner's Choice")
data[random] = "Spinner's Choice";
if (data[picked] != wheelie[0]) {
if (wheelie[0] == storage[0]) {random = "1";}
else if (wheelie[0] == storage[1]) {random = "2";}
else if (wheelie[0] == storage[2]) {random = "3";}
else if (wheelie[0] == storage[3]) {random = "4";}
assigncompcat();}
else if (data[picked] != wheelie[1]) {
if (wheelie[1] == storage[0]) {random = "1";}
else if (wheelie[1] == storage[1]) {random = "2";}
else if (wheelie[1] == storage[2]) {random = "3";}
else if (wheelie[1] == storage[3]) {random = "4";}
assigncompcat();}
}
else if (rand < 100){
oppwildmystery++;
var rand2 = Math.random() * 100;
if (rand2 < 25){compcat  = r2Q67;}		
else if (rand2 < 50){compcat  = r2Q68;}
else if (rand2 < 75){compcat  = r2Q69;}
else if (rand2 < 100){compcat  = r2Q70;}
compcat = shuffle(compcat); 
d3.select(".slice:nth-child(" + (random + 1) + ") text")
.text(compcat[0].cat) 
data[random] = compcat[0].cat;
}
}
if (compwildmystery == "1"){
if (rand < 50){
spinners = "1";
oppwildspinners++;
d3.select(".slice:nth-child(" + (random + 1) + ") text")
.text("Spinner's Choice")
data[random] = "Spinner's Choice";
if (data[picked] != wheelie[0]) {
if (wheelie[0] == storage[0]) {random = "1";}
else if (wheelie[0] == storage[1]) {random = "2";}
else if (wheelie[0] == storage[2]) {random = "3";}
else if (wheelie[0] == storage[3]) {random = "4";}
assigncompcat();}
else if (data[picked] != wheelie[1]) {
if (wheelie[1] == storage[0]) {random = "1";}
else if (wheelie[1] == storage[1]) {random = "2";}
else if (wheelie[1] == storage[2]) {random = "3";}
else if (wheelie[1] == storage[3]) {random = "4";}
assigncompcat();}
}
else if (rand < 100){
d3.select(".slice:nth-child(" + (random + 1) + ") text")
.text("Opponent's Choice")
data[random] = "Opponent's Choice";
opponentspun = "1";
oppwildopponent++;
}
}
if ((compwildmystery == "0") && (compwildspinners == "0") && (compwildopponent == "0")){
if (rand < 33){
oppwildmystery++;
var rand2 = Math.random() * 100;
if (rand2 < 25){compcat  = r2Q67;}		
else if (rand2 < 50){compcat  = r2Q68;}
else if (rand2 < 75){compcat  = r2Q69;}
else if (rand2 < 100){compcat  = r2Q70;}
compcat = shuffle(compcat);
d3.select(".slice:nth-child(" + (random + 1) + ") text")
.text(compcat[0].cat) 
data[random] = compcat[0].cat;
}
else if (rand < 66){
spinners = "1";
oppwildspinners++;
d3.select(".slice:nth-child(" + (random + 1) + ") text")
.text("Spinner's Choice")
data[random] = "Spinner's Choice";
if (data[picked] != wheelie[0]) {
if (wheelie[0] == storage[0]) {random = "1";}
else if (wheelie[0] == storage[1]) {random = "2";}
else if (wheelie[0] == storage[2]) {random = "3";}
else if (wheelie[0] == storage[3]) {random = "4";}
assigncompcat();}
else if (data[picked] != wheelie[1]) {
if (wheelie[1] == storage[0]) {random = "1";}
else if (wheelie[1] == storage[1]) {random = "2";}
else if (wheelie[1] == storage[2]) {random = "3";}
else if (wheelie[1] == storage[3]) {random = "4";}
assigncompcat();}
}
else if (rand < 100){
d3.select(".slice:nth-child(" + (random + 1) + ") text")
.text("Opponent's Choice")
data[random] = "Opponent's Choice";
opponentspun = "1";
oppwildopponent++;
}
}	
}
else if ((data[random] != "Wildcard") && (data[random] != data[picked])){assigncompcat();}
}
        svg.append("g")
            .attr("transform", "translate(" + (wid + padding.left + padding.right) + "," + ((hei/2)+padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (rot*.15) + ",0L0," + (rot*.05) + "L0,-" + (rot*.05) + "Z")
            .style({"fill":"black"});
        svg.append("g")
            .attr("transform", "translate(" + (wid + padding.left + padding.right) + "," + ((hei/2)+padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (rot*.15) + ",0L0," + (rot*.05) + "L0,-" + (rot*.05) + "Z")
            .style({"fill":"black"});
   
        function rotTween(to) {
          var io = d3.interpolate(oldrotation % 360, rotation);
          return function(t) {
            return "rotate(" + io(t) + ")";
          };
        }
  	function spin2(d){
		document.getElementById("nextbutton").style.visibility = "hidden";  
		document.getElementById("message002").style.visibility = "hidden";  
        
            var  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
            rotation = (Math.round(rng / ps) * ps);  
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;
                        console.log(picked);
            rotation += 90 - Math.round(ps/2);
            vis.transition()
                .duration(3000)
                .attrTween("transform", rotTween)
                .each("end", function(){
                    //populate question
                    oldrotation = rotation;
                mess = picked+1;
	document.getElementById("message002").style.visibility = "visible";  
	message002.innerHTML = "You spun " +data[picked] + "<br/></br>" + "<button class=buttons008 id=respin onclick=spin2()>Spin Again</button>";
	document.getElementById("respin").style.visibility = "visible"; 
if (data[picked] == "Wildcard"){
message002.innerHTML = "You spun a Wildcard" + "<br/></br>" + "<button class=buttons007 id=takewildcard onclick=takewildcard()>Reveal Wildcard</button>";
}
else if (data[picked] == "Spinner's Choice"){
message002.innerHTML = "You spun Spinner's Choice" + "<br/></br>" + "Select which category you want to pick:" + "<br/></br>" + "<ul id=boxes class=aligner><li><input type=checkbox id=box1 value= /><label for=box1>" + data[1] +"</label></li><li><input type=checkbox id=box2 value=/><label for=box2>" +data[2] +"</label></li><li><input type=checkbox id=box3 value=/><label for=box3>" + data[3] + "</label></li><li><input type=checkbox id=box4 value=/><label for=box4>" + data[4] + "</label></li><li><input type=checkbox id=box5 value=/><label for=box5>" + data[5] + "</label></li><li><input type=checkbox id=box6 value=/><label for=box6>" + data[7] + "</label></li><li><input type=checkbox id=box7 value=/><label for=box7>" + data[8] + "</label></li><li><input type=checkbox id=box8 value=/><label for=box8>" + data[9] + "</label></li><li><input type=checkbox id=box9 value=/><label for=box9>" + data[10] + "</label></li><li><input type=checkbox id=box10 value=/><label for=box10>" + data[11] + "</label></li></ul>" + "<button class=buttons008 id=confirm onclick=confirm()>Confirm</button>";
document.getElementById("confirm").style.visibility= "hidden"; 
document.getElementById("confirm").style.top= "-200px"; 
document.getElementById("box1").value = data[1];
document.getElementById("box2").value = data[2];
document.getElementById("box3").value = data[3];
document.getElementById("box4").value = data[4];
document.getElementById("box5").value = data[5];
document.getElementById("box6").value = data[7];
document.getElementById("box7").value = data[8];
document.getElementById("box8").value = data[9];
document.getElementById("box9").value = data[10];
document.getElementById("box10").value = data[11];
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 5) {
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 5) {
	document.getElementById("confirm").style.visibility= "visible"; 
    }
    if ($('input[type=checkbox]:checked').length < 5) {
	document.getElementById("confirm").style.visibility= "hidden"; 
    }
});
}
else if (data[picked] == "Opponent's Choice"){
document.getElementById("respin").style.visibility = "hidden"; 
document.getElementById("nextbutton").style.visibility= "visible"; 
if (wheelie[0] == storage[0]) {picked = "1";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == storage[1]) {picked = "2";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == storage[2]) {picked = "3";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == storage[3]) {picked = "4";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
round2();
}
else {
document.getElementById("respin").style.visibility = "hidden"; 
document.getElementById("message003").style.top = "-270px"; 
document.getElementById("nextbutton").style.visibility= "visible"; 
round2();
}
                });
        }
        
        function getRandomNumbers(){
            var arraywheel = new Uint16Array(1000);
            var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
            if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
                window.crypto.getRandomValues(array);
                console.log("works");
            } else {
                for(var i=0; i < 1000; i++){
                    arraywheel[i] = Math.floor(Math.random() * 100000) + 1;
                }
            }
            return arraywheel;
        }
var compcat = [];  
function round2(){
if (data[picked] == r2Q1[0].cat){r2question001 = r2Q1;}
else if (data[picked] == r2Q2[0].cat){r2question001 = r2Q2;}
else if (data[picked] == r2Q3[0].cat){r2question001 = r2Q3;}
else if (data[picked] == r2Q4[0].cat){r2question001 = r2Q4;}
else if (data[picked] == r2Q5[0].cat){r2question001 = r2Q5;}
else if (data[picked] == r2Q6[0].cat){r2question001 = r2Q6;}
else if (data[picked] == r2Q7[0].cat){r2question001 = r2Q7;}
else if (data[picked] == r2Q8[0].cat){r2question001 = r2Q8;}
else if (data[picked] == r2Q9[0].cat){r2question001 = r2Q9;}
else if (data[picked] == r2Q10[0].cat){r2question001 = r2Q10;}
else if (data[picked] == r2Q11[0].cat){r2question001 = r2Q11;}
else if (data[picked] == r2Q12[0].cat){r2question001 = r2Q12;}
else if (data[picked] == r2Q13[0].cat){r2question001 = r2Q13;}
else if (data[picked] == r2Q14[0].cat){r2question001 = r2Q14;}
else if (data[picked] == r2Q15[0].cat){r2question001 = r2Q15;}
else if (data[picked] == r2Q16[0].cat){r2question001 = r2Q16;}
else if (data[picked] == r2Q17[0].cat){r2question001 = r2Q17;}
else if (data[picked] == r2Q18[0].cat){r2question001 = r2Q18;}
else if (data[picked] == r2Q19[0].cat){r2question001 = r2Q19;}
else if (data[picked] == r2Q20[0].cat){r2question001 = r2Q20;}
else if (data[picked] == r2Q21[0].cat){r2question001 = r2Q21;}
else if (data[picked] == r2Q22[0].cat){r2question001 = r2Q22;}
else if (data[picked] == r2Q23[0].cat){r2question001 = r2Q23;}
else if (data[picked] == r2Q24[0].cat){r2question001 = r2Q24;}
else if (data[picked] == r2Q25[0].cat){r2question001 = r2Q25;}
else if (data[picked] == r2Q26[0].cat){r2question001 = r2Q26;}
else if (data[picked] == r2Q27[0].cat){r2question001 = r2Q27;}
else if (data[picked] == r2Q28[0].cat){r2question001 = r2Q28;}
else if (data[picked] == r2Q29[0].cat){r2question001 = r2Q29;}
else if (data[picked] == r2Q30[0].cat){r2question001 = r2Q30;}
else if (data[picked] == r2Q31[0].cat){r2question001 = r2Q31;}
else if (data[picked] == r2Q32[0].cat){r2question001 = r2Q32;}
else if (data[picked] == r2Q33[0].cat){r2question001 = r2Q33;}
else if (data[picked] == r2Q34[0].cat){r2question001 = r2Q34;}
else if (data[picked] == r2Q35[0].cat){r2question001 = r2Q35;}
else if (data[picked] == r2Q36[0].cat){r2question001 = r2Q36;}
else if (data[picked] == r2Q37[0].cat){r2question001 = r2Q37;}
else if (data[picked] == r2Q38[0].cat){r2question001 = r2Q38;}
else if (data[picked] == r2Q39[0].cat){r2question001 = r2Q39;}
else if (data[picked] == r2Q40[0].cat){r2question001 = r2Q40;}
else if (data[picked] == r2Q41[0].cat){r2question001 = r2Q41;}
else if (data[picked] == r2Q42[0].cat){r2question001 = r2Q42;}
else if (data[picked] == r2Q43[0].cat){r2question001 = r2Q43;}
else if (data[picked] == r2Q44[0].cat){r2question001 = r2Q44;}
else if (data[picked] == r2Q45[0].cat){r2question001 = r2Q45;}
else if (data[picked] == r2Q46[0].cat){r2question001 = r2Q46;}
else if (data[picked] == r2Q47[0].cat){r2question001 = r2Q47;}
else if (data[picked] == r2Q48[0].cat){r2question001 = r2Q48;}
else if (data[picked] == r2Q49[0].cat){r2question001 = r2Q49;}
else if (data[picked] == r2Q50[0].cat){r2question001 = r2Q50;}
else if (data[picked] == r2Q51[0].cat){r2question001 = r2Q51;}
else if (data[picked] == r2Q52[0].cat){r2question001 = r2Q52;}
else if (data[picked] == r2Q53[0].cat){r2question001 = r2Q53;}
else if (data[picked] == r2Q54[0].cat){r2question001 = r2Q54;}
else if (data[picked] == r2Q55[0].cat){r2question001 = r2Q55;}
else if (data[picked] == r2Q56[0].cat){r2question001 = r2Q56;}
else if (data[picked] == r2Q57[0].cat){r2question001 = r2Q57;}
else if (data[picked] == r2Q58[0].cat){r2question001 = r2Q58;}
else if (data[picked] == r2Q59[0].cat){r2question001 = r2Q59;}
else if (data[picked] == r2Q60[0].cat){r2question001 = r2Q60;}
else if (data[picked] == r2Q61[0].cat){r2question001 = r2Q61;}
else if (data[picked] == r2Q62[0].cat){r2question001 = r2Q62;}
else if (data[picked] == r2Q63[0].cat){r2question001 = r2Q63;}
else if (data[picked] == r2Q64[0].cat){r2question001 = r2Q64;}
else if (data[picked] == r2Q65[0].cat){r2question001 = r2Q65;}
else if (data[picked] == r2Q66[0].cat){r2question001 = r2Q66;}
else if (data[picked] == r2Q67[0].cat){r2question001 = r2Q67;}
else if (data[picked] == r2Q68[0].cat){r2question001 = r2Q68;}
else if (data[picked] == r2Q69[0].cat){r2question001 = r2Q69;}
else if (data[picked] == r2Q70[0].cat){r2question001 = r2Q70;}
r2question001 = shuffle(r2question001); 
}
function begin001() {
            c = 21;
time001.innerHTML = 20;
	    document.getElementById("JTE").style.visibility = "visible";
	    document.getElementById("time001").style.visibility = "visible";
	    document.getElementById("message005").style.position = "relative";
	    document.getElementById("message005").style.top = "-190px";
	    document.getElementById("message006").style.position = "relative";
	    document.getElementById("message006").style.top = "-140px";
            message001.innerHTML = question001[0].ques;
            message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
            message003.innerHTML = "";
            message005.innerHTML = "";
            message006.innerHTML = "";
             a++;
            qu001.innerHTML = "QUESTION 1 - " +question001[0].cat.toUpperCase();
	    document.getElementById("q1").focus();
	    unique();
        }
function JTE(){
document.getElementById("q1").focus();
if ((c != "0") && (c < 15)) {
if (j == 3) {
            c = 16;
             j--;
	    }
else if (j == 2) {
  if (h == 1) {
	    c = 16;
            j--;
	    document.getElementById("background").src = "Singles - 2JTEChal.png";
	    }
  else if (h < 1) {
	    c = 16;
             j--;
	    document.getElementById("background").src = "Singles - 2JTE.png";
	    }
}
else if (j == 1) {
  if (h == 1) {
	    c = 16;
             j--;
	    document.getElementById("background").src = "Singles - 1JTEChal.png";
	    }
  else if (h < 1) {
	    c = 16;
             j--;
	    document.getElementById("background").src = "Singles-1JTE.png";
	    }
}
else if (j == 0) {
 if (h == 1) {
	    c = 16;
             j--;
	    document.getElementById("background").src = "Singles - NoJTEChal.png";
	     }
 else if (h < 1) {
	    c = 16;
             j--;
	    document.getElementById("background").src = "Singles - NoJTE.png";
	    }
}
else if (j < 0) {
            message005.innerHTML = "No repeats left!";
	    }
}
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
var steal = 0;
function ChallengeAccepted(){
	    document.getElementById("message004").style.top = "-230px";
if (r == 1) {
            score001.innerHTML = b+=1;
quescor++;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
	     }
else if (r == 3) {
            score001.innerHTML = b+=2;
quescor++;
	   quescountopp--;
posspointsopp-=2;
	    
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
if (steal == 1){
           quescoropp--;
     	    score002.innerHTML = s-=2;
            message006.innerHTML = "<br>";
}
	     }
else if (r == 4) {
if (a == 18){
            score001.innerHTML = b+=2;
quescor++;
}
else if (a == 19){
            score001.innerHTML = b+=3;
quescor++;
}
else if (a == 20){
            score001.innerHTML = b+=5;
quescor++;
}
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
	     }
else if (r == 5) {
            score001.innerHTML = b+=1;
quescor++;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
	     }
}
function ChallengeDenied(){
	    document.getElementById("message004").style.top = "-230px";
if (j == 2) {
	    document.getElementById("background").src = "Singles - NoChal.png";
	     h--;
	     h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
}
else if (j == 1) {
	    document.getElementById("background").src = "Singles - 2JTE.png";
	     h--;
	    h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
	          }
else if (j == 0) {
	    document.getElementById("background").src = "Singles - 1JTE.png";
	     h--;
	     h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
	          }
 else if (j < 0) {
	    document.getElementById("background").src = "Singles - NoJTE.png";
	     h--;
	     h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
	      }
}
        function qcor() {
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	    quescor++;
	    cormusic.play();
if (mc == 0){
            message003.innerHTML = "Correct!";
            message002.innerHTML = "";
	    message005.innerHTML = "";
	    message006.innerHTML = "";
            score001.innerHTML = b+=1;
	if ((a == 13) ||(a == 14)||(a == 15)||(a == 16)){
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}  
	if (a == 17){
            message004.innerHTML = "<button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc != 0){
	    document.getElementById("message004").style.top = "-180px";
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct!";
            message002.innerHTML = "";
	    message005.innerHTML = "";
	    message006.innerHTML = "";
            score001.innerHTML = b+=1;
	    stealmc--;
if (mc == 1){
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 2){
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 3){
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 4){
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion5()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 5){
 	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		}
}
}
        function qinc() {
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	   quescount++;
	   posspoints+=1;
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
	    incmusic.play();
            c = "-";
if (mc == 0){
	if (a == 13){
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[0].answ2 ;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	   posspointsopp+=1;
	   quescountopp++;
if ((competitorlist[0].strength1 == r2question001[0].cat) || (competitorlist[0].strength2 == r2question001[0].cat) || (competitorlist[0].strength3 == r2question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		}  
	if (a == 14){
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[4].answ2 ;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	   posspointsopp+=1;
	   quescountopp++;
if ((competitorlist[0].strength1 == r2question001[4].cat) || (competitorlist[0].strength2 == r2question001[4].cat) || (competitorlist[0].strength3 == r2question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		} 
	if (a == 15){
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[1].answ2 ;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	   posspointsopp+=1;
	   quescountopp++;
if ((competitorlist[0].strength1 == r2question001[1].cat) || (competitorlist[0].strength2 == r2question001[1].cat) || (competitorlist[0].strength3 == r2question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		} 
	if (a == 16){
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[2].answ2 ;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	   posspointsopp+=1;
	   quescountopp++;
if ((competitorlist[0].strength1 == r2question001[2].cat) || (competitorlist[0].strength2 == r2question001[2].cat) || (competitorlist[0].strength3 == r2question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		}  
	if (a == 17){
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[3].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	   posspointsopp+=1;
	   quescountopp++;
if ((competitorlist[0].strength1 == r2question001[3].cat) || (competitorlist[0].strength2 == r2question001[3].cat) || (competitorlist[0].strength3 == r2question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
            message004.innerHTML = "<button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		}  
}
else if (mc != 0){
	    document.getElementById("message004").style.top = "-180px";
if (mc == 1){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[5].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 2){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[6].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 3){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[7].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 4){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[8].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion5()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 5){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[9].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
 	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		}  
}
}
function myTrim(x) {
 	    x = x.replace(":"," ");
	    x = x.replace("!","");
	    x = x.replace("$","");
	    x = x.replace("?","");
	    x = x.replace(","," ");
	    x = x.replace("&","AND");
	    x = x.replace(".","");
	    x = x.replace("-"," ");
	    x = x.replace("   "," ");
	    x = x.replace("  "," ");
	    x = x.replace("É","E");
	    x = x.replace("Ó","O");
	    x = x.replace("Í","I");
	    x = x.replace("Á","A");
	    x = x.replace("Ñ","N");
	    x = x.replace("È","E");
	    x = x.replace("Ç","C");
            x = x.replace(/^\s+|\s+$/gm,'');
            return x;
}
var answeredtwo = 0;
var answeredthree = 0;
var answeredfive = 0;
var usertwo = 0;
var userthree = 0;
var userfive = 0;
function simulateq2(){
document.getElementById("message004").style.top = "-230px";
	   quescountopp++;
	   posspointsopp+=2;
if ((competitorlist[0].strength1 == question001[8].cat) || (competitorlist[0].strength2 == question001[8].cat) || (competitorlist[0].strength3 == question001[8].cat)){
percentage = competitorlist[0].strengthpercentage3;
}
var chance = Math.random() * 100;
if (chance < percentage3){
                time001.innerHTML = "";
		score002.innerHTML = s+=2;
	    quescoropp++;
		message002.innerHTML = "";
		message003.innerHTML = "";
		message005.innerHTML = "";
if (s - b > 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].id + " hit the 2 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].id + " hit the 2 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].id + " hit the 2 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].id + " hit the 2 pointer.";
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].id + " hit the 2 pointer.";
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
else {
		message002.innerHTML = "";
                time001.innerHTML = "";
message003.innerHTML = "";
message005.innerHTML = "";
if (s - b > 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].id + " missed the 2 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].id + " missed the 2 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].id + " missed the 2 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].id + " missed the 2 pointer.";
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].id + " missed the 2 pointer.";
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
answeredtwo++;
}
function simulateq3(){
document.getElementById("message004").style.top = "-230px";
	   quescountopp++;
	   posspointsopp+=3;
if ((competitorlist[0].strength1 == threepointer001[1].cat) || (competitorlist[0].strength2 == threepointer001[1].cat) || (competitorlist[0].strength3 == threepointer001[1].cat)){
percentage3 = competitorlist[0].strengthpercentage3;
}
var chance = Math.random() * 100;
if (chance < percentage3){
		score002.innerHTML = s+=3;
	    quescoropp++;
                time001.innerHTML = "";
		message002.innerHTML = "";
message003.innerHTML = "";
message005.innerHTML = "";
if (s - b > 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].id + " hit the 3 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].id + " hit the 3 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].id + " hit the 3 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].id + " hit the 3 pointer.";
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].id + " hit the 3 pointer.";
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
else { 
                time001.innerHTML = "";
		message002.innerHTML = "";
message003.innerHTML = "";
message005.innerHTML = "";
if (s - b > 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].id + " missed the 3 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].id + " missed the 3 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].id + " missed the 3 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].id + " missed the 3 pointer.";
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].id + " missed the 3 pointer.";
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
answeredthree++;
}
function simulateq5(){
document.getElementById("message004").style.top = "-230px";
	   quescountopp++;
	   posspointsopp+=5;
if ((competitorlist[0].strength1 == fivepointer001[1].cat) || (competitorlist[0].strength2 == fivepointer001[1].cat) || (competitorlist[0].strength3 == fivepointer001[1].cat)){
percentage5 = competitorlist[0].strengthpercentage5;
}
var chance = Math.random() * 100;
if (chance < percentage5){
		score002.innerHTML = s+=5;
	    quescoropp++;
                time001.innerHTML = "";
		message002.innerHTML = "";
		message003.innerHTML = "";
		message005.innterHTML = "";
if (s - b > 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].id + " hit the 5 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].id + " hit the 5 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].id + " hit the 5 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].id + " hit the 5 pointer.";
}
}
else if (b - s >= 0){
if (usertwo == 0){	
message006.innerHTML = competitorlist[0].id + " hit the 5 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;	
}	
else if ((usertwo == 1) && (userthree == 0)){	
message006.innerHTML = competitorlist[0].id + " hit the 5 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;	
}	
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){	
message006.innerHTML = competitorlist[0].id + " hit the 5 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;	
}	
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){	
message006.innerHTML = competitorlist[0].id + " hit the 5 pointer.";	
}	
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
else { 
                time001.innerHTML = "";
		message002.innerHTML = "";
message003.innerHTML = "";
message005.innerHTML = "";
if (s - b > 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].id + " missed the 5 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].id + " missed the 5 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].id + " missed the 5 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].id + " missed the 5 pointer.";
}
}
else if ((b - s) == 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].id + " missed the 5 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].id + " missed the 5 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].id + " missed the 5 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].id + " missed the 5 pointer.";
}
}
else if (b - s > 0){
message006.innerHTML = competitorlist[0].id + " missed the 5 pointer." ;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
answeredfive++;
}
function analyser3 (){
if ((b - s >= 0) && (answeredtwo == 0)){
simulateq2();
}
else if ((b - s >= 0) && (answeredtwo == 1) && (answeredthree == 0)){
simulateq3();
}
else if ((b - s >= 0) && (answeredthree == 1) && (answeredfive == 0)){
simulateq5();
}
else if ((s - b > 0) && (usertwo == 1) && (userthree == 1) && (userfive == 1) && (answeredtwo == 1)){
lose();
}
else if ((b - s > 0) && (usertwo == 1) && (userthree == 1) && (userfive == 1) && (answeredtwo == 1)){
win();
}
else if ((b - s > 0) && (usertwo == 0) && (answeredtwo == 1) && (answeredfive == 1) && (answeredthree == 1)){
winTKO();
}
else if ((s - b > 0) && (usertwo == 1) && (userthree == 1) && (userfive == 1) && (answeredtwo == 0)){
loseTKO();
}
else {
next001();
}
}

function newLoc() {
  window.location.assign("https://thethommerd.github.io/Schmoedown/SinglesTournament.html");
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
                message002.innerHTML = "<span class=flash style=font-size:240%>KO</span>" + "</br></br>" + "And your winner...."
		var winner = competitorlist[0].lowercase;
                message003.innerHTML = player001.innerHTML;
 		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].id + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("wins").stepUp(1);
		document.getElementById("KOs").stepUp(1);
		document.getElementById("AnsweredQuestions").value = parseInt(document.getElementById("AnsweredQuestions").value) +  quescount;
		document.getElementById("CorrectQuestions").value = parseInt(document.getElementById("CorrectQuestions").value) +  quescor;
		document.getElementById("PossiblePoints").value = parseInt(document.getElementById("PossiblePoints").value)  +  posspoints;
		document.getElementById("TotalPoints").value = parseInt(document.getElementById("TotalPoints").value) +  b;
		document.getElementById("passwordsaverR2").value = "BLUE FAIRY";
		document.getElementById("save").click();
message004.innerHTML = "You have unlocked the next round. Use the password 'Blue Fairy' to enter." + "</br></br>" + "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>";		
		document.getElementById("message002").style.top = "-260px";
		document.getElementById("message004").style.top = "-455px";
		document.getElementById("message003").style.top = "-275px";
		document.getElementById("message006").style.top = "-180px";
		document.getElementById("message006").style.fontSize = "110%";
}
function loseKO(){
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
                message002.innerHTML = "<span class=flash style=font-size:240%>KO</span>" + "</br></br>" + "And your winner...."
		var winner = competitorlist[0].lowercase;
		message003.innerHTML = winner.toUpperCase();
 		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].id + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("losses").stepUp(1);
		document.getElementById("KOd").stepUp(1);
		document.getElementById("AnsweredQuestions").value = parseInt(document.getElementById("AnsweredQuestions").value) +  quescount;
		document.getElementById("CorrectQuestions").value = parseInt(document.getElementById("CorrectQuestions").value) +  quescor;
		document.getElementById("PossiblePoints").value = parseInt(document.getElementById("PossiblePoints").value)  +  posspoints;
		document.getElementById("TotalPoints").value = parseInt(document.getElementById("TotalPoints").value) +  b;
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>";
		document.getElementById("message002").style.top = "-260px";
		document.getElementById("message004").style.top = "-455px";
		document.getElementById("message003").style.top = "-275px";
		document.getElementById("message006").style.top = "-180px";
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
                message002.innerHTML = "<span class=flash style=font-size:240%>TKO</span>" + "</br></br>" + "And your winner...."
		var winner = competitorlist[0].lowercase;
                message003.innerHTML = player001.innerHTML;
 		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].id + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("wins").stepUp(1);
		document.getElementById("TKOs").stepUp(1);
		document.getElementById("AnsweredQuestions").value = parseInt(document.getElementById("AnsweredQuestions").value) +  quescount;
		document.getElementById("CorrectQuestions").value = parseInt(document.getElementById("CorrectQuestions").value) +  quescor;
		document.getElementById("PossiblePoints").value = parseInt(document.getElementById("PossiblePoints").value)  +  posspoints;
		document.getElementById("TotalPoints").value = parseInt(document.getElementById("TotalPoints").value) +  b;
		document.getElementById("passwordsaverR2").value = "BLUE FAIRY";
		document.getElementById("save").click();
message004.innerHTML = "You have unlocked the next round. Use the password 'Blue Fairy' to enter." + "</br></br>" + "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>";		
		document.getElementById("message002").style.top = "-260px";
		document.getElementById("message004").style.top = "-455px";
		document.getElementById("message003").style.top = "-275px";
		document.getElementById("message006").style.top = "-180px";
		document.getElementById("message006").style.fontSize = "110%";
}
function loseTKO(){
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
                message002.innerHTML = "<span class=flash style=font-size:240%>TKO</span>" + "</br></br>" + "And your winner...."
		var winner = competitorlist[0].lowercase;
		message003.innerHTML = winner.toUpperCase();
 		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].id + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("losses").stepUp(1);
		document.getElementById("TKOd").stepUp(1);
		document.getElementById("AnsweredQuestions").value = parseInt(document.getElementById("AnsweredQuestions").value) +  quescount;
		document.getElementById("CorrectQuestions").value = parseInt(document.getElementById("CorrectQuestions").value) +  quescor;
		document.getElementById("PossiblePoints").value = parseInt(document.getElementById("PossiblePoints").value)  +  posspoints;
		document.getElementById("TotalPoints").value = parseInt(document.getElementById("TotalPoints").value) +  b;
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>";
		document.getElementById("message002").style.top = "-260px";
		document.getElementById("message004").style.top = "-455px";
		document.getElementById("message003").style.top = "-275px";
		document.getElementById("message006").style.top = "-180px";
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
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].id + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("wins").stepUp(1);
		document.getElementById("AnsweredQuestions").value = parseInt(document.getElementById("AnsweredQuestions").value) +  quescount;
		document.getElementById("CorrectQuestions").value = parseInt(document.getElementById("CorrectQuestions").value) +  quescor;
		document.getElementById("PossiblePoints").value = parseInt(document.getElementById("PossiblePoints").value)  +  posspoints;
		document.getElementById("TotalPoints").value = parseInt(document.getElementById("TotalPoints").value) +  b;
		document.getElementById("passwordsaverR2").value = "BLUE FAIRY";
		document.getElementById("save").click();
message004.innerHTML = "You have unlocked the next round. Use the password 'Blue Fairy' to enter." + "</br></br>" + "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>";		
		document.getElementById("message002").style.top = "-260px";
		document.getElementById("message004").style.top = "-455px";
		document.getElementById("message003").style.top = "-275px";
		document.getElementById("message006").style.top = "-180px";
		document.getElementById("message006").style.fontSize = "110%";
}
function lose(){
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
		message003.innerHTML = winner.toUpperCase();
		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].id + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("losses").stepUp(1);
		document.getElementById("AnsweredQuestions").value = parseInt(document.getElementById("AnsweredQuestions").value) +  quescount;
		document.getElementById("CorrectQuestions").value = parseInt(document.getElementById("CorrectQuestions").value) +  quescor;
		document.getElementById("PossiblePoints").value = parseInt(document.getElementById("PossiblePoints").value)  +  posspoints;
		document.getElementById("TotalPoints").value = parseInt(document.getElementById("TotalPoints").value) +  b;
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br>" + "<button class=buttons001 onclick=newLoc()>Return to menu</button>";
		document.getElementById("message002").style.top = "-260px";
		document.getElementById("message004").style.top = "-455px";
		document.getElementById("message003").style.top = "-275px";
		document.getElementById("message006").style.top = "-180px";
		document.getElementById("message006").style.fontSize = "110%";
}
var mc = 0;
var open = 0;
var similarity1 = 0;
var similarity2 = 0;
function checker() {
similarity1 = 0;
similarity2 = 0;
document.getElementById("message003").style.top = "-180px";
document.getElementById("message004").style.top = "-180px";
document.getElementById("message006").style.top = "-180px";
	percentage = competitorlist[0].percentage;
	    steal = 0;
if (a == 2){
	    var question01 = document.getElementById("q1").value.toUpperCase();
	    var question1 = myTrim(question01);
	    question1 = myTrim(question1);
if (question1.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question1, question001[0].answ);
if (typeof(question001[0].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question1, question001[0].answ3);
}
}
else if (question1.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
if ((question1 == question001[0].answ) || (question1 == question001[0].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[18].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[0].cat) || (competitorlist[0].strength2 == question001[0].cat) || (competitorlist[0].strength3 == question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question1 != question001[0].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[0].answ2;
	    message006.innerHTML =  "Next category is " +question001[18].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[0].cat) || (competitorlist[0].strength2 == question001[0].cat) || (competitorlist[0].strength3 == question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
            }
	   
}
if (a == 3){
	    var question025 = document.getElementById("q1").value.toUpperCase();
	    var question25 = myTrim(question025);
	    question25 = myTrim(question25);
if (question25.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question25, question001[18].answ);
if (typeof(question001[18].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question25, question001[18].answ3);}}      
else if (question25.length <= 4){
similarity1 = 0;
similarity2 = 0;
}  
           window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question25 == question001[18].answ) || (question25 == question001[18].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[19].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[18].cat) || (competitorlist[0].strength2 == question001[18].cat) || (competitorlist[0].strength3 == question001[18].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question25 != question001[18].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[18].answ2;
	    message006.innerHTML =  "Next category is " +question001[19].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[18].cat) || (competitorlist[0].strength2 == question001[18].cat) || (competitorlist[0].strength3 == question001[18].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
            }
	
}
if (a == 4){
	    var question026 = document.getElementById("q1").value.toUpperCase();
	    var question26 = myTrim(question026);
	    question26 = myTrim(question26);
if (question26.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question26, question001[19].answ);
if (typeof(question001[19].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question26, question001[19].answ3);}}      
else if (question26.length <= 4){
similarity1 = 0;
similarity2 = 0;
}  
           window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question26 == question001[19].answ) || (question26 == question001[19].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[1].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[19].cat) || (competitorlist[0].strength2 == question001[19].cat) || (competitorlist[0].strength3 == question001[19].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question26 != question001[19].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[19].answ2;
	    message006.innerHTML =  "Next category is " +question001[1].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[19].cat) || (competitorlist[0].strength2 == question001[19].cat) || (competitorlist[0].strength3 == question001[19].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
            }
	
}
if (a == 5){
	    var question02 = document.getElementById("q1").value.toUpperCase();
	    var question2 = myTrim(question02);
	    question2 = myTrim(question2);
if (question2.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question2, question001[1].answ);
if (typeof(question001[1].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question2, question001[1].answ3);}}      
else if (question2.length <= 4){
similarity1 = 0;
similarity2 = 0;
}  
           window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question2 == question001[1].answ) || (question2 == question001[1].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[2].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[1].cat) || (competitorlist[0].strength2 == question001[1].cat) || (competitorlist[0].strength3 == question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question2 != question001[1].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[1].answ2;
	    message006.innerHTML =  "Next category is " +question001[2].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[1].cat) || (competitorlist[0].strength2 == question001[1].cat) || (competitorlist[0].strength3 == question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
            }
	
}
if (a == 6){
	    var question03 = document.getElementById("q1").value.toUpperCase();
	    var question3 = myTrim(question03);
	    question3 = myTrim(question3);
if (question3.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question3, question001[2].answ);
if (typeof(question001[2].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question3, question001[2].answ3);}}    
else if (question3.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question3 == question001[2].answ) || (question3 == question001[2].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[3].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[2].cat) || (competitorlist[0].strength2 == question001[2].cat) || (competitorlist[0].strength3 == question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question3 != question001[2].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[2].answ2;
	    message006.innerHTML =  "Next category is " +question001[3].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[2].cat) || (competitorlist[0].strength2 == question001[2].cat) || (competitorlist[0].strength3 == question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	  
}
if (a == 7){
	    var question04 = document.getElementById("q1").value.toUpperCase();
	    var question4 = myTrim(question04);
	    question4 = myTrim(question4);
if (question4.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question4, question001[3].answ);
if (typeof(question001[3].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question4, question001[3].answ3);}}    
else if (question4.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question4 == question001[3].answ) || (question4 == question001[3].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[4].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[3].cat) || (competitorlist[0].strength2 == question001[3].cat) || (competitorlist[0].strength3 == question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question4 != question001[3].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[3].answ2;
	    message006.innerHTML =  "Next category is " +question001[4].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[3].cat) || (competitorlist[0].strength2 == question001[3].cat) || (competitorlist[0].strength3 == question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	   
}
if (a == 8){
	    var question05 = document.getElementById("q1").value.toUpperCase();
	    var question5 = myTrim(question05);
	    question5 = myTrim(question5);
if (question5.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question5, question001[4].answ);
if (typeof(question001[4].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question5, question001[4].answ3);}}    
else if (question5.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question5 == question001[4].answ) || (question5 == question001[4].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[5].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[4].cat) || (competitorlist[0].strength2 == question001[4].cat) || (competitorlist[0].strength3 == question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question5 != question001[4].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[4].answ2;
	    message006.innerHTML =  "Next category is " +question001[5].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[4].cat) || (competitorlist[0].strength2 == question001[4].cat) || (competitorlist[0].strength3 == question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	    
}
if (a == 9){
	    var question06 = document.getElementById("q1").value.toUpperCase();
	    var question6 = myTrim(question06);
	    question6 = myTrim(question6);
if (question6.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question6, question001[5].answ);
if (typeof(question001[5].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question6, question001[5].answ3);}}    
else if (question6.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question6 == question001[5].answ) || (question6 == question001[5].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[6].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[5].cat) || (competitorlist[0].strength2 == question001[5].cat) || (competitorlist[0].strength3 == question001[5].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() *100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question6 != question001[5].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[5].answ2;
	    message006.innerHTML =  "Next category is " +question001[6].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[5].cat) || (competitorlist[0].strength2 == question001[5].cat) || (competitorlist[0].strength3 == question001[5].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	  
}
if (a == 10){
	    var question07 = document.getElementById("q1").value.toUpperCase();
	    var question7 = myTrim(question07);
	    question7 = myTrim(question7);
if (question7.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question7, question001[6].answ);
if (typeof(question001[6].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question7, question001[6].answ3);}}    
else if (question7.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question7 == question001[6].answ) || (question7 == question001[6].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[7].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[6].cat) || (competitorlist[0].strength2 == question001[6].cat) || (competitorlist[0].strength3 == question001[6].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question7 != question001[6].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[6].answ2;
	    message006.innerHTML =  "Next category is " +question001[7].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[6].cat) || (competitorlist[0].strength2 == question001[6].cat) || (competitorlist[0].strength3 == question001[6].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	
}
if (a == 11){
	    var question08 = document.getElementById("q1").value.toUpperCase();
	    var question8 = myTrim(question08);
	    question8 = myTrim(question8);
if (question8.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question8, question001[7].answ);
if (typeof(question001[7].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question8, question001[7].answ3);}}    
else if (question8.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question8 == question001[7].answ) || (question8 == question001[7].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if (b == 10) {
            	message003.innerHTML = "Perfect Round! You'll get a bonus question.";
	    	message006.innerHTML =  "";
}
else if (b != 10) {
	    	message003.innerHTML = "Correct!" ;
	    	message006.innerHTML =  "";
}
if ((competitorlist[0].strength1 == question001[7].cat) || (competitorlist[0].strength2 == question001[7].cat) || (competitorlist[0].strength3 == question001[7].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		message005.innerHTML = "";
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question8 != question001[7].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[7].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[7].cat) || (competitorlist[0].strength2 == question001[7].cat) || (competitorlist[0].strength3 == question001[7].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	 
}
if (a == 12){
	    var question017 = document.getElementById("q1").value.toUpperCase();
	    var question17 = myTrim(question017);
	    question17 = myTrim(question17);
if (question17.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question17, question001[9].answ);
if (typeof(question001[9].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question17, question001[9].answ3);}}    
else if (question17.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question17 == question001[9].answ) || (question17 == question001[9].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[9].cat) || (competitorlist[0].strength2 == question001[9].cat) || (competitorlist[0].strength3 == question001[9].cat)){
percentage = competitorlist[0].strengthpercentage;
}
if (s == 10){
	   quescountopp++;
	   posspointsopp+=1;
var chance = Math.random()*100;
if (chance < percentage) {
	    quescoropp++;
            score002.innerHTML = s+=1;
}
}
            message004.innerHTML = "<button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question17 != question001[9].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[9].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[9].cat) || (competitorlist[0].strength2 == question001[9].cat) || (competitorlist[0].strength3 == question001[9].cat)){
percentage = competitorlist[0].strengthpercentage;
}
if (s == 10){
	   quescountopp++;
	   posspointsopp+=1;
var chance = Math.random()*100;
if (chance < percentage) {
	    quescoropp++;
            score002.innerHTML = s+=1;
}
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 13){
	    var question09 = document.getElementById("q1").value.toUpperCase();
	    var question9 = myTrim(question09);
	    question9 = myTrim(question9);
if (question9.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question9, r2question001[0].answ);
if (typeof(r2question001[0].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question9, r2question001[0].answ3);}}    
else if (question9.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question9 == r2question001[0].answ) || (question9 == r2question001[0].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=2;
quescor++;
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question9 != r2question001[0].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("sub").style.display = "none";
	    document.getElementById("mc").style.display = "none";
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[0].answ2;
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	   quescountopp++;
	   posspointsopp+=2;
	    incmusic.play();
if ((competitorlist[0].strength1 == r2question001[0].cat) || (competitorlist[0].strength2 == r2question001[0].cat) || (competitorlist[0].strength3 == r2question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
var percentager2 = 0.9 * percentage;
if (chance < percentager2){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
	    steal = 1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
}
}
if (a == 14){
	    var question029 = document.getElementById("q1").value.toUpperCase();
	    var question29 = myTrim(question029);
	    question29 = myTrim(question29);
if (question29.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question29, r2question001[4].answ);
if (typeof(r2question001[4].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question29, r2question001[4].answ3);
}
}
else if (question29.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question29 == r2question001[4].answ) || (question29 == r2question001[4].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-210px";
		document.getElementById("message004").style.top = "-210px";
		document.getElementById("message006").style.top = "-210px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question29 != r2question001[4].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("sub").style.display = "none";
	    document.getElementById("mc").style.display = "none";
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[4].answ2;
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-210px";
		document.getElementById("message004").style.top = "-210px";
		document.getElementById("message006").style.top = "-210px";
	    incmusic.play();
	   quescountopp++;
	   posspointsopp+=2;
if ((competitorlist[0].strength1 == r2question001[4].cat) || (competitorlist[0].strength2 == r2question001[4].cat) || (competitorlist[0].strength3 == r2question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
var percentager2 = 0.9 * percentage;
if (chance < percentager2){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
	    steal = 1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
}
}
if (a == 15){
	    var question010 = document.getElementById("q1").value.toUpperCase();
	    var question10 = myTrim(question010);
	    question10 = myTrim(question10);
            window.clearInterval(update);
            c = "-";
if (question10.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question10, r2question001[1].answ);
if (typeof(r2question001[1].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question10, r2question001[1].answ3);}}    
else if (question10.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
	   quescount++;
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question10 == r2question001[1].answ) || (question10 == r2question001[1].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("sub").style.display = "none";
	    document.getElementById("mc").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=2;
quescor++;
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    cormusic.play();
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question10 != r2question001[1].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("sub").style.display = "none";
	    document.getElementById("mc").style.display = "none";
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[1].answ2;
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    incmusic.play();
	   quescountopp++;
	   posspointsopp+=2;
if ((competitorlist[0].strength1 == r2question001[1].cat) || (competitorlist[0].strength2 == r2question001[1].cat) || (competitorlist[0].strength3 == r2question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
var percentager2 = 0.9 * percentage;
if (chance < percentager2){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
	    steal = 1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if (a == 16){
	    var question011 = document.getElementById("q1").value.toUpperCase();
	    var question11 = myTrim(question011);
	    question11 = myTrim(question11);
if (question11.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question11, r2question001[2].answ);
if (typeof(r2question001[2].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question11, r2question001[2].answ3);}}    
else if (question11.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question11 == r2question001[2].answ) || (question11 == r2question001[2].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question11 != r2question001[2].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[2].answ2;
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    incmusic.play();
	   quescountopp++;
	   posspointsopp+=2;
if ((competitorlist[0].strength1 == r2question001[2].cat) || (competitorlist[0].strength2 == r2question001[2].cat) || (competitorlist[0].strength3 == r2question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
var percentager2 = 0.9 * percentage;
if (chance < percentager2){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
	    steal = 1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if ((a == 17) && (open == 0) && (mc == 0)){
	    var question012 = document.getElementById("q1").value.toUpperCase();
	    var question12 = myTrim(question012);
	    question12 = myTrim(question12);
            window.clearInterval(update);
if (question12.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question12, r2question001[3].answ);
if (typeof(r2question001[3].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question12, r2question001[3].answ3);}}    
else if (question12.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            c = "-";
	   quescount++;
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question12 == r2question001[3].answ) || (question12 == r2question001[3].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question12 != r2question001[3].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[3].answ2;
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    incmusic.play();
	   quescountopp++;
	   posspointsopp+=2;
if ((competitorlist[0].strength1 == r2question001[3].cat) || (competitorlist[0].strength2 == r2question001[0].cat) || (competitorlist[0].strength3 == r2question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
var percentager2 = 0.9 * percentage;
if (chance < percentager2){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
	    steal = 1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if (a == 18){
	    var question013 = document.getElementById("q1").value.toUpperCase();
	    var question13 = myTrim(question013);
	    question13 = myTrim(question13);
if (question13.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question13, question001[8].answ);
if (typeof(question001[8].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question13, question001[8].answ3);}}    
else if (question13.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question13 == question001[8].answ) || (question13 == question001[8].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
if (s - b > 0){
	    message006.innerHTML =  "Next category is " +threepointer001[0].cat;
}
else if ((s - b == 0) && (answeredfive == 1)){
	    message006.innerHTML =  "Next category is " +threepointer001[0].cat;
}
            message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question13 != question001[8].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[8].answ2;
	    incmusic.play();
if (s - b > 0){
	    message006.innerHTML =  "Next category is " +threepointer001[0].cat;
}
else if ((s - b == 0) && (answeredfive == 1)){
	    message006.innerHTML =  "Next category is " +threepointer001[0].cat;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if (a == 19){
	    var question014 = document.getElementById("q1").value.toUpperCase();
	    var question14 = myTrim(question014);
	    question14 = myTrim(question14);
            window.clearInterval(update);
if (question14.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question14, threepointer001[0].answ);
if (typeof(threepointer001[0].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question14, threepointer001[0].answ3);}}    
else if (question14.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            c = "-";
	   quescount++;
	   posspoints+=3;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question14 == threepointer001[0].answ) || (question14 == threepointer001[0].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
            score001.innerHTML = b+=3;
quescor++;
	    cormusic.play();
if (s - b > 0){
	    message006.innerHTML =  "Next category is " +fivepointer001[0].cat;
}
else if ((s - b == 0) && (answeredfive == 1)){
	    message006.innerHTML =  "Next category is " +fivepointer001[0].cat;
}
            message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question14 != threepointer001[0].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + threepointer001[0].answ2;
	    incmusic.play();
if (s - b > 0){
	    message006.innerHTML =  "Next category is " +fivepointer001[0].cat;
}
else if ((s - b == 0) && (answeredfive == 1)){
	    message006.innerHTML =  "Next category is " +fivepointer001[0].cat;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if (a == 20){
	    var question015 = document.getElementById("q1").value.toUpperCase();
	    var question15 = myTrim(question015);
	    question15 = myTrim(question15);
if (question15.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question15, fivepointer001[0].answ);
if (typeof(fivepointer001[0].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question15, fivepointer001[0].answ3);}}    
else if (question15.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=5;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question15 == fivepointer001[0].answ) || (question15 == fivepointer001[0].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=5;
quescor++;
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question15 != fivepointer001[0].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + fivepointer001[0].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if (a == 22){
	    var question016 = document.getElementById("q1").value.toUpperCase();
	    var question16 = myTrim(question016);
	    question16 = myTrim(question16);
if (question16.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question16, question001[10].answ);
if (typeof(question001[10].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question16, question001[10].answ3);}}    
else if (question16.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question16 == question001[10].answ) || (question16 == question001[10].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[10].cat) || (competitorlist[0].strength2 == question001[10].cat) || (competitorlist[0].strength3 == question001[10].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question16 != question001[10].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[10].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[10].cat) || (competitorlist[0].strength2 == question001[10].cat) || (competitorlist[0].strength3 == question001[10].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 23){
	    var question018 = document.getElementById("q1").value.toUpperCase();
	    var question18 = myTrim(question018);
	    question18 = myTrim(question18);
if (question18.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question18, question001[11].answ);
if (typeof(question001[11].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question18, question001[11].answ3);}}    
else if (question18.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question18 == question001[11].answ) || (question18 == question001[11].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[11].cat) || (competitorlist[0].strength2 == question001[11].cat) || (competitorlist[0].strength3 == question001[11].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question18 != question001[11].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[11].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[11].cat) || (competitorlist[0].strength2 == question001[11].cat) || (competitorlist[0].strength3 == question001[11].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 24){
	    var question019 = document.getElementById("q1").value.toUpperCase();
	    var question19 = myTrim(question019);
	    question19 = myTrim(question19);
if (question19.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question19, question001[12].answ);
if (typeof(question001[12].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question19, question001[12].answ3);}}    
else if (question19.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question19 == question001[12].answ) || (question19 == question001[12].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[12].cat) || (competitorlist[0].strength2 == question001[12].cat) || (competitorlist[0].strength3 == question001[12].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question19 != question001[12].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[12].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[12].cat) || (competitorlist[0].strength2 == question001[12].cat) || (competitorlist[0].strength3 == question001[12].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 25){
	    var question020 = document.getElementById("q1").value.toUpperCase();
	    var question20 = myTrim(question020);
	    question20 = myTrim(question20);
if (question20.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question20, question001[13].answ);
if (typeof(question001[13].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question20, question001[13].answ3);}}    
else if (question20.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question20 == question001[13].answ) || (question20 == question001[13].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[13].cat) || (competitorlist[0].strength2 == question001[13].cat) || (competitorlist[0].strength3 == question001[13].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question20 != question001[13].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[13].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[13].cat) || (competitorlist[0].strength2 == question001[13].cat) || (competitorlist[0].strength3 == question001[13].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 26){
	    var question021 = document.getElementById("q1").value.toUpperCase();
	    var question21 = myTrim(question021);
	    question21 = myTrim(question21);
if (question21.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question21, question001[14].answ);
if (typeof(question001[14].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question21, question001[14].answ3);}}    
else if (question21.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question21 == question001[14].answ) || (question21 == question001[14].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[14].cat) || (competitorlist[0].strength2 == question001[14].cat) || (competitorlist[0].strength3 == question001[14].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question21 != question001[14].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[14].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[14].cat) || (competitorlist[0].strength2 == question001[14].cat) || (competitorlist[0].strength3 == question001[14].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 27){
	    var question022 = document.getElementById("q1").value.toUpperCase();
	    var question22 = myTrim(question022);
	    question22 = myTrim(question22);
if (question22.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question22, question001[15].answ);
if (typeof(question001[15].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question22, question001[15].answ3);}}    
else if (question22.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question22 == question001[15].answ) || (question22 == question001[15].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[15].cat) || (competitorlist[0].strength2 == question001[15].cat) || (competitorlist[0].strength3 == question001[15].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question22 != question001[15].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[15].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[15].cat) || (competitorlist[0].strength2 == question001[15].cat) || (competitorlist[0].strength3 == question001[15].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 28){
	    var question023 = document.getElementById("q1").value.toUpperCase();
	    var question23 = myTrim(question023);
	    question23 = myTrim(question23);
if (question23.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question23, question001[16].answ);
if (typeof(question001[16].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question23, question001[16].answ3);}}    
else if (question23.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question23 == question001[16].answ) || (question23 == question001[16].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[16].cat) || (competitorlist[0].strength2 == question001[16].cat) || (competitorlist[0].strength3 == question001[16].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question23 != question001[16].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[16].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[16].cat) || (competitorlist[0].strength2 == question001[16].cat) || (competitorlist[0].strength3 == question001[16].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 29){
	    var question024 = document.getElementById("q1").value.toUpperCase();
	    var question24 = myTrim(question024);
	    question24 = myTrim(question24);
if (question24.length > 4){similarity1 = stringSimilarity.compareTwoStrings(question24, question001[17].answ);
if (typeof(question001[17].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(question24, question001[17].answ3);}}    
else if (question24.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question24 == question001[17].answ) || (question24 == question001[17].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question24 != question001[17].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[17].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
	    incmusic.play();
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if (open == 1)
{
checkerq1();
}
if (open == 2)
{
checkerq2();
}
if (open == 3)
{
checkerq3();
}
if (open == 4)
{
checkerq4();
}
if (open == 5)
{
checkerq5();
}
}
function setvis(){
            c = 16;
document.getElementById("q1").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "initial";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "initial";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "initial";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "initial";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "initial";}
document.getElementById("sub").style.display = "none";
document.getElementById("mc").style.display = "none";
}
var input = "<input type=text id=q1 /><br />";
var buttons = "<button id=sub class=buttons001 onclick=checker()>Submit Answer</button><br /><br /><button id=mc class=buttons007 onclick=setvis()>Multiple Choice</button>";
function next001() {
	document.getElementById("message002").style.top = "-170px";
        document.getElementById("message002").style.display= "block";
	document.getElementById("message004").style.top = "-180px";
	    document.getElementById("time001").style.display = "initial";
	    document.getElementById("chart").style.visibility = "hidden";
	    document.getElementById("JTE").style.display = "initial";
	    document.getElementById("JTE").style.visibility = "visible";
	    document.getElementById("chalacc").style.display = "initial";
	    document.getElementById("chalden").style.display = "initial";
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
            if (a == 2) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[18].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
	        document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
            qu001.innerHTML = "QUESTION 2 - " +question001[18].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
		   document.getElementById("JTE").style.visibility = "hidden";
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            	    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
	else if (a == 3) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[19].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
                qu001.innerHTML = "QUESTION 3 - " +question001[19].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
		   document.getElementById("JTE").style.visibility = "hidden";
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
	else if (a == 4) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[1].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
                qu001.innerHTML = "QUESTION 4 - " +question001[1].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
		   document.getElementById("JTE").style.visibility = "hidden";
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 5) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[2].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
                qu001.innerHTML = "QUESTION 5 - " +question001[2].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
		   document.getElementById("JTE").style.visibility = "hidden";
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 6) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[3].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
                qu001.innerHTML = "QUESTION 6 - " +question001[3].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 7) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[4].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
 		qu001.innerHTML = "QUESTION 7 - " +question001[4].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 8) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[5].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
 		qu001.innerHTML = "QUESTION 8 - " +question001[5].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 9) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[6].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
                qu001.innerHTML = "QUESTION 9 - " +question001[6].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 10) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[7].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
	         a++;
 	        qu001.innerHTML = "QUESTION 10 - " +question001[7].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
else if ((a == 11) && (b != 10)){
if (s == 10){
	   quescountopp++;
	   posspointsopp+=1;
var chance = Math.random()*100;
if (chance < competitorlist[0].percentage) {
	    quescoropp++;
            score002.innerHTML = s+=1;
}
}
	         a++;
next002();
}
		else if ((a == 11) && (b == 10)){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[9].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
	         a++;
		
 		qu001.innerHTML = "BONUS QUESTION";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 12) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
	document.getElementById("message002").style.top = "-170px";
	document.getElementById("message003").style.top = "-180px";
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[0].ques;
                message002.innerHTML = input + r2question001[0].option + buttons;
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 	        qu001.innerHTML = "QUESTION 1 - " +r2question001[0].cat.toUpperCase();
                round001.innerHTML = r++;
                round001.innerHTML = r++;
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
         else if (a == 13) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[4].ques;
                message002.innerHTML = input + r2question001[4].option + buttons;
 
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 	        qu001.innerHTML = "QUESTION 2 - " +r2question001[4].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 14) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[1].ques;
                message002.innerHTML = input + r2question001[1].option + buttons;
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
 	        qu001.innerHTML = "QUESTION 3 - " +r2question001[1].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 15) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[2].ques;
                message002.innerHTML = input + r2question001[2].option + buttons;
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
 	        qu001.innerHTML = "QUESTION 4 - " +r2question001[2].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 16) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[3].ques;
                message002.innerHTML = input + r2question001[3].option + buttons;
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 	        qu001.innerHTML = "QUESTION 5 - " +r2question001[3].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            	    message004.innerHTML = "<button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            } 
            else if (a == 17) {
if ((s - b > 10) && (answeredtwo == 0)){
loseTKO();
}
else if ((b -s > 0) && (answeredfive == 1)){
winTKO();
}
else{
usertwo++;
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[8].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
                round001.innerHTML = r++;
 	        qu001.innerHTML = "QUESTION 1 - " +question001[8].cat.toUpperCase();
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
            else if (a == 18) {
if ((s - b > 8) && (answeredtwo == 0)){
loseTKO();
}
else if ((b -s > 8) && (answeredfive == 0)){
win();
}
else if ((b -s > 0) && (answeredfive == 1)){
win();
}
else{
userthree++;
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = threepointer001[0].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 	        qu001.innerHTML = "QUESTION 2 - " +threepointer001[0].cat.toUpperCase();
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
            else if (a == 19) {
if ((s - b > 5) && (answeredtwo == 0)){
loseTKO();
}
else if ((b -s > 5) && (answeredfive == 0)){
win();
}
else if ((b -s > 0) && (answeredfive == 1)){
win();
}
else{
userfive++;
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = fivepointer001[0].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
 	        qu001.innerHTML = "QUESTION 3 - " +fivepointer001[0].cat.toUpperCase();
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
                else if (a == 21) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
		document.getElementById("message005").style.top = "-165px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[10].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
		
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 1";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
    else if ((a == 22) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	    		document.getElementById("message005").style.top = "-165px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[11].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 2";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
 else if ((a == 22) && (b != s )){
		if (b > s){
                  win();
	}
	else if (b < s){
                 lose();
	}
}
  else if ((a == 23) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	  		document.getElementById("message005").style.top = "-165px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[12].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 3";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
 else if ((a == 23) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
	    	lose();
	}
}
  else if ((a == 24) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	  		document.getElementById("message005").style.top = "-165px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[13].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 4";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
 else if ((a == 24) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
	    	lose();
	}
}
  else if ((a == 25) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	  		document.getElementById("message005").style.top = "-165px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[14].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 5";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
 else if ((a == 25) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
	    	lose();
	}
}
  else if ((a == 26) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	  		document.getElementById("message005").style.top = "-165px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[15].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 6";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
 else if ((a == 26) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
	    	lose();
	}
}
  else if ((a == 27) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	  		document.getElementById("message005").style.top = "-165px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[16].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 7";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
 else if ((a == 27) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
	    	lose();
	}
}
    else if ((a == 28) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	    		document.getElementById("message005").style.top = "-165px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[17].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 8";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            } 
 else if ((a == 28) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
		lose();
	}
}
   else if ((a == 29) && (b == s )){
	    	document.getElementById("JTE").style.visibility = "hidden";
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Match";
                time001.innerHTML = "";
                message003.innerHTML = "The game has ended in a tie.";
		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].id + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
                message002.innerHTML = "";
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>";
		document.getElementById("message004").style.top = "-455px";
		document.getElementById("message003").style.top = "-280px";
		document.getElementById("message006").style.top = "-180px";
		document.getElementById("message006").style.fontSize = "110%";
                }
      else {
	if (b > s){
		win();
	}
	else if (b < s){
		lose();
	}
	else if (b == s) {
	    	document.getElementById("JTE").style.visibility = "hidden";
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "Click Next to proceed";
                time001.innerHTML = "";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message006.innerHTML = "";
		document.getElementById("message004").style.top = "-225px";
		document.getElementById("message005").style.top = "-240px";
		message005.innerHTML = "<strong><font size=4>SUDDEN DEATH</br></br>QUESTIONS IN RANDOM CATEGORIES GIVEN TO COMPETITORS</br></br>COMPETITORS HAVE 20 SECONDS TO SUBMIT THEIR ANSWER</br></br>ALL QUESTIONS WORTH 1 POINT</br></br>FIRST COMPETITOR WITH A LEAD WINS</br></br>1 REPEAT AVAILABLE</strong>";
                 a++;
		 j = 0;
  	   	 if (h == 1) {document.getElementById("background").src = "Singles - 1JTEChal.png";}
            	 else if (h < 1) {document.getElementById("background").src = "Singles - 1JTE.png";}
		round001.innerHTML = r++;
		document.getElementById("round001").style.display = "none";
 		round002.innerHTML = "OVERTIME";
 		qu001.innerHTML = "QUESTION";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
            }
        }
function timer001() {
	percentage = competitorlist[0].percentage;
            c = c - 1;
            if (c < 200) {
                time001.innerHTML = c;
            }
            if (c < 1) {
	   quescount++;
document.getElementById("message003").style.top = "-180px";
document.getElementById("message004").style.top = "-180px";
document.getElementById("message006").style.top = "-180px";
document.getElementById("JTE").style.visibility = "hidden";
if (a == 2){
if ((competitorlist[0].strength1 == question001[0].cat) || (competitorlist[0].strength2 == question001[0].cat) || (competitorlist[0].strength3 == question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[0].answ2;
	    message006.innerHTML =  "Next category is " +question001[18].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 3){
if ((competitorlist[0].strength1 == question001[18].cat) || (competitorlist[0].strength2 == question001[18].cat) || (competitorlist[0].strength3 == question001[18].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[18].answ2;
	    message006.innerHTML =  "Next category is " +question001[19].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 4){
if ((competitorlist[0].strength1 == question001[19].cat) || (competitorlist[0].strength2 == question001[19].cat) || (competitorlist[0].strength3 == question001[19].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[19].answ2;
	    message006.innerHTML =  "Next category is " +question001[1].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 5){
if ((competitorlist[0].strength1 == question001[1].cat) || (competitorlist[0].strength2 == question001[1].cat) || (competitorlist[0].strength3 == question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[1].answ2;
	    message006.innerHTML =  "Next category is " +question001[2].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 6){
if ((competitorlist[0].strength1 == question001[2].cat) || (competitorlist[0].strength2 == question001[2].cat) || (competitorlist[0].strength3 == question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[2].answ2;
	    message006.innerHTML =  "Next category is " +question001[3].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 7){
if ((competitorlist[0].strength1 == question001[3].cat) || (competitorlist[0].strength2 == question001[3].cat) || (competitorlist[0].strength3 == question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[3].answ2;
	    message006.innerHTML =  "Next category is " +question001[4].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 8){
if ((competitorlist[0].strength1 == question001[4].cat) || (competitorlist[0].strength2 == question001[4].cat) || (competitorlist[0].strength3 == question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[4].answ2;
	    message006.innerHTML =  "Next category is " +question001[5].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 9){
if ((competitorlist[0].strength1 == question001[5].cat) || (competitorlist[0].strength2 == question001[5].cat) || (competitorlist[0].strength3 == question001[5].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[5].answ2;
	    message006.innerHTML =  "Next category is " +question001[6].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 10){
if ((competitorlist[0].strength1 == question001[6].cat) || (competitorlist[0].strength2 == question001[6].cat) || (competitorlist[0].strength3 == question001[6].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[6].answ2;
	    message006.innerHTML =  "Next category is " +question001[7].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 11){
if ((competitorlist[0].strength1 == question001[7].cat) || (competitorlist[0].strength2 == question001[7].cat) || (competitorlist[0].strength3 == question001[7].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[7].answ2;
	    message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 12){
if ((competitorlist[0].strength1 == question001[9].cat) || (competitorlist[0].strength2 == question001[9].cat) || (competitorlist[0].strength3 == question001[9].cat)){
percentage = competitorlist[0].strengthpercentage;
}
	   posspoints+=1;
if (s == 10){
	   quescountopp++;
	   posspointsopp+=1;
var chance = Math.random()*100;
if (chance < percentage) {
	    quescoropp++;
            score002.innerHTML = s+=1;
}
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[9].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 13){
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
            	message003.innerHTML = "The correct answer is " + r2question001[0].answ2;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
if (document.getElementById("mc").style.display == 'none') {
if ((competitorlist[0].strength1 == r2question001[0].cat) || (competitorlist[0].strength2 == r2question001[0].cat) || (competitorlist[0].strength3 == r2question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
}
}
else {
if ((competitorlist[0].strength1 == r2question001[0].cat) || (competitorlist[0].strength2 == r2question001[0].cat) || (competitorlist[0].strength3 == r2question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 0.9 * percentage;
var chance = Math.random() * 100;
	   posspoints+=2;
	   posspointsopp+=2;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
}
}
	    	document.getElementById("sub").style.display = "none";
	    	document.getElementById("mc").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
}
else if (a == 14){
		document.getElementById("message003").style.top = "-210px";
		document.getElementById("message004").style.top = "-210px";
		document.getElementById("message006").style.top = "-210px";
            	message003.innerHTML = "The correct answer is " + r2question001[4].answ2;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
if (document.getElementById("mc").style.display == 'none') {
if ((competitorlist[0].strength1 == r2question001[4].cat) || (competitorlist[0].strength2 == r2question001[4].cat) || (competitorlist[0].strength3 == r2question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
}
}
else {
if ((competitorlist[0].strength1 == r2question001[4].cat) || (competitorlist[0].strength2 == r2question001[4].cat) || (competitorlist[0].strength3 == r2question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 0.9 * percentage;
var chance = Math.random() * 100;
	   posspoints+=2;
	   posspointsopp+=2;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
}
}
	    	document.getElementById("sub").style.display = "none";
	    	document.getElementById("mc").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
}
else if (a == 15){
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
            	message003.innerHTML = "The correct answer is " + r2question001[1].answ2;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
if (document.getElementById("mc").style.display == 'none') {
if ((competitorlist[0].strength1 == r2question001[1].cat) || (competitorlist[0].strength2 == r2question001[1].cat) || (competitorlist[0].strength3 == r2question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
}
}
else {
if ((competitorlist[0].strength1 == r2question001[1].cat) || (competitorlist[0].strength2 == r2question001[1].cat) || (competitorlist[0].strength3 == r2question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 0.9 * percentage;
var chance = Math.random() * 100;
	   posspoints+=2;
	   posspointsopp+=2;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
}
}
	    	document.getElementById("sub").style.display = "none";
	    	document.getElementById("mc").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
}
else if (a == 16){
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
            	message003.innerHTML = "The correct answer is " + r2question001[2].answ2;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
if (document.getElementById("mc").style.display == 'none') {
if ((competitorlist[0].strength1 == r2question001[2].cat) || (competitorlist[0].strength2 == r2question001[2].cat) || (competitorlist[0].strength3 == r2question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
	   posspoints+=1;
   posspointsopp+=1;
	   quescountopp++;
var chance = Math.random() * 100;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
}
}
else {
if ((competitorlist[0].strength1 == r2question001[2].cat) || (competitorlist[0].strength2 == r2question001[2].cat) || (competitorlist[0].strength3 == r2question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 0.9 * percentage;
	   posspoints+=2;
 posspointsopp+=2;
	   quescountopp++;
var chance = Math.random() * 100;
if (chance < percentage1pnt){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
}
}
	    	document.getElementById("sub").style.display = "none";
	    	document.getElementById("mc").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
}
else if ((a == 17) && (open == 0) && (mc == 0)){
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
           	message003.innerHTML = "The correct answer is " + r2question001[3].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
if (document.getElementById("mc").style.display == 'none') {
if ((competitorlist[0].strength1 == r2question001[3].cat) || (competitorlist[0].strength2 == r2question001[3].cat) || (competitorlist[0].strength3 == r2question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
}
}
else {
if ((competitorlist[0].strength1 == r2question001[3].cat) || (competitorlist[0].strength2 == r2question001[3].cat) || (competitorlist[0].strength3 == r2question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 0.9 * percentage;
var chance = Math.random() * 100;
	   posspoints+=2;
	   posspointsopp+=2;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].id;
}
}
	    	document.getElementById("sub").style.display = "none";
	    	document.getElementById("mc").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
}
else if (a == 18){
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[8].answ2;
	        incmusic.play();
if (s - b > 0){
	    	message006.innerHTML =  "Next category is " +threepointer001[0].cat;
}
            	message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (a == 19){
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + threepointer001[0].answ2;
	        incmusic.play();
if (s - b > 0){
	    	message006.innerHTML =  "Next category is " +fivepointer001[0].cat;
}
            	message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (a == 20){
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + fivepointer001[0].answ2;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (a == 22){
if ((competitorlist[0].strength1 == question001[10].cat) || (competitorlist[0].strength2 == question001[10].cat) || (competitorlist[0].strength3 == question001[10].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[10].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 23){
if ((competitorlist[0].strength1 == question001[11].cat) || (competitorlist[0].strength2 == question001[11].cat) || (competitorlist[0].strength3 == question001[11].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[11].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 24){
if ((competitorlist[0].strength1 == question001[12].cat) || (competitorlist[0].strength2 == question001[12].cat) || (competitorlist[0].strength3 == question001[12].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[12].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 25){
if ((competitorlist[0].strength1 == question001[13].cat) || (competitorlist[0].strength2 == question001[13].cat) || (competitorlist[0].strength3 == question001[13].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[13].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 26){
if ((competitorlist[0].strength1 == question001[14].cat) || (competitorlist[0].strength2 == question001[14].cat) || (competitorlist[0].strength3 == question001[14].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[14].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 27){
if ((competitorlist[0].strength1 == question001[15].cat) || (competitorlist[0].strength2 == question001[15].cat) || (competitorlist[0].strength3 == question001[15].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[15].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 28){
if ((competitorlist[0].strength1 == question001[16].cat) || (competitorlist[0].strength2 == question001[16].cat) || (competitorlist[0].strength3 == question001[16].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[16].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 29){
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[17].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=1;
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (open == 1)
{
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
		document.getElementById("sub").style.visibility = "hidden";
	    	document.getElementById("sub").style.display = "none";
           	message003.innerHTML = "The correct answer is " + compcat[0].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=2;
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (open == 2)
{
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
		document.getElementById("sub").style.visibility = "hidden";
	    	document.getElementById("sub").style.display = "none";
           	message003.innerHTML = "The correct answer is " + compcat[1].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=2;
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (open == 3)
{
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
		document.getElementById("sub").style.visibility = "hidden";
	    	document.getElementById("sub").style.display = "none";
           	message003.innerHTML = "The correct answer is " + compcat[2].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=2;
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (open == 4)
{
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
		document.getElementById("sub").style.visibility = "hidden";
	    	document.getElementById("sub").style.display = "none";
           	message003.innerHTML = "The correct answer is " + compcat[3].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=2;
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion5()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (open == 5)
{
		document.getElementById("message003").style.top = "-210px";
		document.getElementById("message004").style.top = "-210px";
		document.getElementById("message006").style.top = "-210px";
		document.getElementById("sub").style.visibility = "hidden";
	    	document.getElementById("sub").style.display = "none";
           	message003.innerHTML = "The correct answer is " + compcat[4].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=2;
stealopp--;
if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (mc == 1)
{
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
           	message003.innerHTML = "The correct answer is " + compcat[5].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=1;
stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
}
else if (mc == 2)
{
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
           	message003.innerHTML = "The correct answer is " +compcat[6].answ2 ;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=1;
stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
}
else if (mc == 3)
{
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
           	message003.innerHTML = "The correct answer is " +compcat[7].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=1;
stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
}
else if (mc == 4)
{
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
           	message003.innerHTML = "The correct answer is " +compcat[8].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=1;
stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion5()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
}
else if (mc == 5)
{
		document.getElementById("message003").style.top = "-210px";
		document.getElementById("message004").style.top = "-210px";
		document.getElementById("message006").style.top = "-210px";
           	message003.innerHTML = "The correct answer is " +compcat[9].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=1;
stealmc--;
if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
}
                window.clearInterval(update);
                time001.innerHTML = "Time's up!";
		document.getElementById("time001").style.fontSize = "100%";
		document.getElementById("time001").style.fontWeight = "normal";
	    document.getElementById("q1").disabled = true;
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
   var storage = [];  
function next003() {
document.getElementById("message004").style.top = "-180px";
	    	document.getElementById("JTE").style.display = "none";
		document.getElementById("chart").style.position = "relative";
		document.getElementById("chart").style.top = "-220px";
	    	document.getElementById("chart").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "none";
	    	document.getElementById("message004").style.display = "none";
	    	document.getElementById("message005").style.display = "none";
		round001.innerHTML = 2;
		var place = " ";
 		qu001.innerHTML = "QUESTION";
                message001.innerHTML = "Spin the Wheel.";
		message002.innerHTML = place + "<br/></br>" + "<button class=buttons009 id=spin onclick=spin()>Spin</button>";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
            	message003.innerHTML = "<button id=nextbutton class=buttons002 onclick=next001()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "none";
	   	document.getElementById("chalden").style.display = "none";
	    	document.getElementById("nextbutton").style.visibility = "hidden";  
		document.getElementById("message002").style.top = "-220px";
		document.getElementById("message003").style.top = "-220px";
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
for (var i = 0; i < checkboxes.length; i++) {
  storage.push(checkboxes[i].value)
}
var chosen = [r2Q1[0].cat, r2Q2[0].cat, r2Q3[0].cat, r2Q4[0].cat, r2Q5[0].cat, r2Q6[0].cat, r2Q7[0].cat, r2Q8[0].cat, r2Q9[0].cat, r2Q10[0].cat, r2Q11[0].cat, r2Q12[0].cat, r2Q13[0].cat, r2Q14[0].cat, r2Q15[0].cat, r2Q16[0].cat, r2Q17[0].cat, r2Q18[0].cat, r2Q19[0].cat, r2Q20[0].cat, r2Q21[0].cat, r2Q22[0].cat, r2Q23[0].cat, r2Q24[0].cat, r2Q25[0].cat, r2Q26[0].cat, r2Q27[0].cat, r2Q28[0].cat, r2Q29[0].cat, r2Q30[0].cat, r2Q31[0].cat, r2Q32[0].cat, r2Q33[0].cat, r2Q34[0].cat, r2Q35[0].cat, r2Q36[0].cat, r2Q37[0].cat, r2Q38[0].cat, r2Q39[0].cat, r2Q40[0].cat, r2Q41[0].cat, r2Q42[0].cat, r2Q43[0].cat, r2Q44[0].cat, r2Q45[0].cat, r2Q46[0].cat, r2Q47[0].cat, r2Q48[0].cat, r2Q49[0].cat, r2Q50[0].cat, r2Q51[0].cat, r2Q52[0].cat, r2Q53[0].cat, r2Q54[0].cat, r2Q55[0].cat, r2Q56[0].cat, r2Q57[0].cat, r2Q58[0].cat, r2Q59[0].cat, r2Q60[0].cat, r2Q61[0].cat, r2Q62[0].cat, r2Q63[0].cat, r2Q64[0].cat, r2Q65[0].cat, r2Q66[0].cat, r2Q67[0].cat, r2Q68[0].cat, r2Q69[0].cat, r2Q70[0].cat];
for( var i = chosen.length-1; i >= 0; i--){
if ( chosen[i] == storage[0]){ 
chosen.splice(i, 1);
}
if ( chosen[i] == storage[1]){ 
chosen.splice(i, 1);
}
if ( chosen[i] == storage[2]){ 
chosen.splice(i, 1);
}
if ( chosen[i] == storage[3]){ 
chosen.splice(i, 1);
}
}
chosen= shuffle(chosen); 
data[0] = "Wildcard";
data[1] = storage[0];
data[2] = storage[1];
data[3] = storage[2];
data[4] = storage[3];
data[5] = "Wildcard";
data[6] = "Wildcard";
data[7] = "Wildcard";
data[8] = "Wildcard";
data[9] = "Wildcard";
data[10] = "Wildcard";
data[11] = "Wildcard";
        arcs.append("text").attr("transform", function(d){
                d.innerRadius = 0;
                d.outerRadius = rot;
                d.angle = (d.startAngle + d.endAngle)/2;
                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
            })
            .attr("text-anchor", "end")
            .attr("font-weight", "bold")
	    .attr("fill", function(i){ return colorpicktext(); })
            .text( function(d, i) {
                return data[i];
            });
}
function next002() {
document.getElementById("message004").style.top = "-180px";
	    	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
		
		round001.innerHTML = 2;
 		qu001.innerHTML = "QUESTION";
                message001.innerHTML = "Click the Next button";
		message002.innerHTML = "";
                message004.innerHTML = "";
		message005.innerHTML = "<strong><font size=4>ROUND TWO</font><br/></br>COMPETITORS SPIN THE CATEGORY WHEEL</br>YOU CAN RE-SPIN ONCE</br></br>YOU WILL GET 5 QUESTIONS FROM CHOSEN CATEGORY</br></br>QUESTIONS ARE WORTH 2 POINTS</br>IF MULTIPLE CHOICE IS REQUESTED VALUE DROPS TO 1 POINT</br></br>OPPONENTS MAY STEAL IF COMPETITOR GIVES A WRONG ANSWER</br></br>REPEATS & CHALLENGES STILL IN EFFECT</strong>";
                message006.innerHTML = "";
	if (s >= b){
            	message003.innerHTML = competitorlist[0].id + " chose to spin second." + "<br>"+ "<button id=nextbutton class=buttons002 onclick=next003()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
	if (b > s){
            	message003.innerHTML = "Choose if you want to spin first or second." + "<br>"+ "<button id=nextbutton class=buttons002 onclick=next003()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
	    	document.getElementById("chalacc").style.display = "none";
	    	document.getElementById("chalden").style.display = "none";
}
function next005() {
        open = 0;
 mc = 0;
document.getElementById("message004").style.top = "-180px";
if (s - b > 10){
loseKO();
}
else if (b -s > 10){
winKO();
}
else{
	    	
	   	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
		round001.innerHTML = 3;
 		qu001.innerHTML = "QUESTION";
                message001.innerHTML = "Click the Next button";
		message002.innerHTML = "";
                message004.innerHTML = "";
		message005.innerHTML = "<strong><font size=4>ROUND THREE</font><br/></br>YOU WILL GET 3 QUESTIONS FROM RANDOM CATEGORIES </br></br>QUESTIONS ARE WORTH 2, 3, AND 5 POINTS</br></br>NO STEALING OR MULTIPLE CHOICE IN THIS ROUND</br></br>REPEATS & CHALLENGES STILL IN EFFECT</strong>";
if (s - b > 0){
	    message006.innerHTML =  "Your first category is " +question001[8].cat;
}
else if (b -s >= 0){
	    message006.innerHTML =  competitorlist[0].id + " has to answer first.";
}
            	message003.innerHTML = "<button id=nextbutton class=buttons002 onclick=analyser3()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "none";
	    	document.getElementById("chalden").style.display = "none";
		document.getElementById("message003").style = "initial";
		document.getElementById("message004").style = "initial";
	    	document.getElementById("message003").style.top = "-190px";
	    	document.getElementById("message006").style.top = "-190px";
}
}
function next004 () {
		simulatecomputerround2();
	    	document.getElementById("message006").style.top = "-180px";
		document.getElementById("message004").style.top = "-180px";
	    	document.getElementById("message003").style.top = "-180px";
	   	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
 		qu001.innerHTML = "QUESTION";
                message001.innerHTML = "Click button to simulate opponents result.";
		message002.innerHTML = "";
                message004.innerHTML = "";
		message005.innerHTML = "";
if (spinners == "1"){
	    	message006.innerHTML = competitorlist[0].id + " spun a Wildcard and got Spinner's Choice. He chose " +compcat[0].cat;
		document.getElementById("message003").style = "initial";
}
else if (oppwildmystery == "1"){
	    	message006.innerHTML = competitorlist[0].id + " spun a Wildcard and got " + compcat[0].cat;
		document.getElementById("message003").style = "initial";
}
else if (opponentspun == "1"){
	    	message006.innerHTML = "";
message002.innerHTML = competitorlist[0].id + " spun a Wildcard and got Opponent's Choice" + "<br/><br/>" + "Select which category you want to give " + competitorlist[0].id + "<br/></br>" + "<ul id=boxes class=aligner><li><input type=checkbox id=box1 value= /><label for=box1 id=label1>" + data[1] +"</label></li><li><input type=checkbox id=box2 value=/><label for=box2 id=label2>" +data[2] +"</label></li><li><input type=checkbox id=box3 value=/><label for=box3 id=label3>" + data[3] + "</label></li><li><input type=checkbox id=box4 value=/><label for=box4 id=label4>" + data[4] + "</label></li><li><input type=checkbox id=box5 value=/><label for=box5 id=label5>" + data[5] + "</label></li><li><input type=checkbox id=box6 value=/><label for=box6 id=label6>" + data[7] + "</label></li><li><input type=checkbox id=box7 value=/><label for=box7 id=label7>" + data[8] + "</label></li><li><input type=checkbox id=box8 value=/><label for=box8 id=label8>" + data[9] + "</label></li><li><input type=checkbox id=box9 value=/><label for=box9 id=label9>" + data[10] + "</label></li><li><input type=checkbox id=box10 value=/><label for=box10 id=label10>" + data[11] + "</label></li></ul>" + "<button class=buttons008 id=confirm onclick=confirmopp()>Confirm</button>";
document.getElementById("message003").style.visibility = "hidden";
document.getElementById("confirm").style.visibility= "hidden"; 
document.getElementById("box1").value = data[1];
document.getElementById("box2").value = data[2];
document.getElementById("box3").value = data[3];
document.getElementById("box4").value = data[4];
document.getElementById("box5").value = data[5];
document.getElementById("box6").value = data[7];
document.getElementById("box7").value = data[8];
document.getElementById("box8").value = data[9];
document.getElementById("box9").value = data[10];
document.getElementById("box10").value = data[11];
if (document.getElementById("box1").value == r2question001[0].cat) {
document.getElementById("box1").checked = true;
document.getElementById("box1").disabled = true;
}
if (document.getElementById("box2").value == r2question001[0].cat) {
document.getElementById("box2").checked = true;
document.getElementById("box2").disabled = true;
}
if (document.getElementById("box3").value == r2question001[0].cat) {
document.getElementById("box3").checked = true;
document.getElementById("box3").disabled = true;
}
if (document.getElementById("box4").value == r2question001[0].cat) {
document.getElementById("box4").checked = true;
document.getElementById("box4").disabled = true;
}
if (document.getElementById("box5").value == r2question001[0].cat) {
document.getElementById("box5").checked = true;
document.getElementById("box5").disabled = true;
}
if (document.getElementById("box6").value == r2question001[0].cat) {
document.getElementById("box6").checked = true;
document.getElementById("box6").disabled = true;
}
if (document.getElementById("box7").value == r2question001[0].cat) {
document.getElementById("box7").checked = true;
document.getElementById("box7").disabled = true;
}
if (document.getElementById("box8").value == r2question001[0].cat) {
document.getElementById("box8").checked = true;
document.getElementById("box8").disabled = true;
}
if (document.getElementById("box9").value == r2question001[0].cat) {
document.getElementById("box9").checked = true;
document.getElementById("box9").disabled = true;
}
if (document.getElementById("box10").value == r2question001[0].cat) {
document.getElementById("box10").checked = true;
document.getElementById("box10").disabled = true;
}
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 6) {
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 6) {
	document.getElementById("confirm").style.visibility= "visible"; 
    }
    if ($('input[type=checkbox]:checked').length < 6) {
	document.getElementById("confirm").style.visibility= "hidden"; 
    }
});
}
else if ((opponentspun != "1") && (spinners != "1") && (oppwildmystery != "1")){
	    	message006.innerHTML =  competitorlist[0].id + " spun the category " +compcat[0].cat;
}
            	message003.innerHTML = "<button id=nextbutton class=buttons002 onclick=simulate()>Simulate</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "none";
	    	document.getElementById("chalden").style.display = "none";
		document.getElementById("message004").style = "initial";
	    	document.getElementById("message006").style.top = "-180px";
}
function simulatefinished () {
	   	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
 		qu001.innerHTML = "QUESTION";
if ((stealopp > 0) || (stealmc > 0)){
                message001.innerHTML = "Click Next to go to available steals.";
            	message004.innerHTML = "<button id=nextbutton class=buttons002 onclick=analyse()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button></br></br>The category is " +compcat[0].cat;
}
else if ((stealopp == 0) && (stealmc == 0)) {
		message001.innerHTML = "Click Next to proceed.";
            	message004.innerHTML = "<button id=nextbutton class=buttons002 onclick=analyse()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
		message002.innerHTML = "";
		message003.innerHTML = "One point steals available: " +stealmc;
	    	message006.innerHTML =  "Two points steals available: " +stealopp;
if (stealmc == 1) {
message006.innerHTML =  "Two points steals available: " + stealopp + "<br/><br/>" + competitorlist[0].id + "'s" + " multiple choice answer is marked red.";
}
if (stealmc > 1) {
message006.innerHTML =  "Two points steals available: " + stealopp + "<br/><br/>" + competitorlist[0].id + "'s" + " multiple choice answers are marked red.";
}
	    	document.getElementById("chalacc").style.display = "none";
	    	document.getElementById("chalden").style.display = "none";
	    	document.getElementById("message004").style.top = "-180px";
}
function simulate(){
simulateq1();
simulateq1();
simulateq1();
simulateq1();
simulateq1();
simulatefinished();
}
function simulateq1(){
quescountopp++;
posspointsopp+=2;
	percentage = competitorlist[0].percentage;
if ((competitorlist[0].strength1 == compcat[0].cat) || (competitorlist[0].strength2 == compcat[0].cat) || (competitorlist[0].strength3 == compcat[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < 0.7 * percentage){
		score002.innerHTML = s+=2;
		quescoropp++;
		}
else if (chance < percentage){
		score002.innerHTML = s+=1;
		quescoropp++;
		}
else if (chance >= percentage){
		var chance = Math.random() * 100;
		if (chance < 60){
		stealmc++;
		}
		else {
		stealopp++;
		}
}
}
var stealopp = 0;
var stealmc = 0;
function analyse (){
if ((stealopp > 0) && (stealmc > 0)){
openquestion();
}
if ((stealopp > 0) && (stealmc == 0)){
openquestion();
}
if ((stealmc > 0) && (stealopp == 0)){
mcquestion();
}
else if ((stealmc == 0) && (stealopp == 0)){
next005();
}
}
function checkerq1(){
	similarity1 = 0;
similarity2 = 0;
	    var stealer01 = document.getElementById("q1").value.toUpperCase();
	    var stealer1 = myTrim(stealer01);
	    stealer1 = myTrim(stealer1);
if (stealer1.length > 4){similarity1 = stringSimilarity.compareTwoStrings(stealer1, compcat[0].answ);
if (typeof(compcat[0].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(stealer1, compcat[0].answ3);}}    
else if (stealer1.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer1 == compcat[0].answ) || (stealer1 == compcat[0].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer1 != compcat[0].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[0].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    incmusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=openquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}
function checkerq2(){
	similarity1 = 0;
similarity2 = 0;
	    var stealer02 = document.getElementById("q1").value.toUpperCase();
	    var stealer2 = myTrim(stealer02);
	    stealer2 = myTrim(stealer2);
if (stealer2.length > 4){similarity1 = stringSimilarity.compareTwoStrings(stealer2, compcat[1].answ);
if (typeof(compcat[1].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(stealer2, compcat[1].answ3);}}    
else if (stealer2.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer2 == compcat[1].answ) || (stealer2 == compcat[1].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=2;
quescor++;
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    cormusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer2 != compcat[1].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[1].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    incmusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=openquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}
function checkerq3(){
	similarity1 = 0;
similarity2 = 0;
	    var stealer03 = document.getElementById("q1").value.toUpperCase();
	    var stealer3 = myTrim(stealer03);
	    stealer3 = myTrim(stealer3);
if (stealer3.length > 4){similarity1 = stringSimilarity.compareTwoStrings(stealer3, compcat[2].answ);
if (typeof(compcat[2].answ3) != 'undefined'){similarity2 = stringSimilarity.compareTwoStrings(stealer3, compcat[2].answ3);}}    
else if (stealer3.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer3 == compcat[2].answ) || (stealer3 == compcat[2].answ3) || (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=2;
quescor++;
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    cormusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer3 != compcat[2].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[2].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    incmusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}
function checkerq4(){
	similarity1 = 0;
similarity2 = 0;
	    var stealer04 = document.getElementById("q1").value.toUpperCase();
	    var stealer4 = myTrim(stealer04);
	    stealer4 = myTrim(stealer4);
if (stealer4.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(stealer4, compcat[3].answ);
if (typeof(compcat[3].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(stealer4, compcat[3].answ3);
}
}
else if (stealer4.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer4 == compcat[3].answ) || (stealer4 == compcat[3].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion5()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer4 != compcat[3].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[3].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    incmusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}
function checkerq5(){
	similarity1 = 0;
similarity2 = 0;
	    var stealer05 = document.getElementById("q1").value.toUpperCase();
	    var stealer5 = myTrim(stealer05);
	    stealer5 = myTrim(stealer5);
if (stealer5.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(stealer5, compcat[4].answ);
if (typeof(compcat[4].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(stealer5, compcat[4].answ3);
}
}
else if (stealer5.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer5 == compcat[4].answ) || (stealer5 == compcat[4].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=2;
quescor++;
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    cormusic.play();
stealopp--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer5 != compcat[4].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[4].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-230px";
		document.getElementById("message004").style.top = "-230px";
		document.getElementById("message006").style.top = "-230px";
	    incmusic.play();
stealopp--;
if (stealmc > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}
function openquestion(){
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[0].ques;
                message002.innerHTML = input + compcat[0].option + buttons;
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("mc").style.display = "none";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		
 	        qu001.innerHTML = "STEAL - " +compcat[0].cat.toUpperCase();
		open++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
function openquestion2(){
if (s - b > 18){
loseKO();
}
else if (b -s > 18){
winKO();
}
else{
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[1].ques;
                message002.innerHTML = input + compcat[1].option + buttons;
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("mc").style.display = "none";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		
 	        qu001.innerHTML = "STEAL - " +compcat[1].cat.toUpperCase();
		open++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function openquestion3(){
if (s - b > 16){
loseKO();
}
else if (b -s > 16){
winKO();
}
else{
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[2].ques;
                message002.innerHTML = input + compcat[2].option + buttons;
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("mc").style.display = "none";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		
 	        qu001.innerHTML = "STEAL - " +compcat[2].cat.toUpperCase();
		open++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function openquestion4(){
if (s - b > 14){
loseKO();
}
else if (b -s > 14){
winKO();
}
else{
 
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[3].ques;
                message002.innerHTML = input + compcat[3].option + buttons;
 
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("mc").style.display = "none";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";

 		qu001.innerHTML = "STEAL - " +compcat[3].cat.toUpperCase();
		open++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion5()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function openquestion5(){
if (s - b > 12){
loseKO();
}
else if (b -s > 12){
winKO();
}
else{
 
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[4].ques;
                message002.innerHTML = input + compcat[4].option + buttons;
 
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("mc").style.display = "none";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
 		qu001.innerHTML = "STEAL - " +compcat[4].cat.toUpperCase();
		open++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealopp--;
if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function mcquestion(){
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[5].ques;
                message002.innerHTML = input + compcat[5].option;
		document.getElementById("q1").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "initial";
hidechance = Math.random() *100;
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop3').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                message004.innerHTML = "";		
 	        qu001.innerHTML = "STEAL - " +compcat[5].cat.toUpperCase();
		open = 0;
		mc++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
function mcquestion2(){
if (s - b > 14){
loseKO();
}
else if (b -s > 14){
winKO();
}
else{
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[6].ques;
                message002.innerHTML = input + compcat[6].option;
		document.getElementById("q1").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "initial";
hidechance = Math.random() *100;
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop3').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                message004.innerHTML = "";
		
 	        qu001.innerHTML = "STEAL - " +compcat[6].cat.toUpperCase();
		mc++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function mcquestion3(){
if (s - b > 13){
loseKO();
}
else if (b -s > 13){
winKO();
}
else{
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[7].ques;
                message002.innerHTML = input + compcat[7].option;
		document.getElementById("q1").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "initial";
hidechance = Math.random() *100;
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop3').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                message004.innerHTML = "";
		
 	        qu001.innerHTML = "STEAL - " +compcat[7].cat.toUpperCase();
		mc++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function mcquestion4(){
if (s - b > 12){
loseKO();
}
else if (b -s > 12){
winKO();
}
else{
 
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[8].ques;
                message002.innerHTML = input + compcat[8].option;
		document.getElementById("q1").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "initial";
hidechance = Math.random() *100;
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop3').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                message004.innerHTML = "";

 		qu001.innerHTML = "STEAL - " +compcat[8].cat.toUpperCase();
		mc++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion5()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function mcquestion5(){
if (s - b > 11){
loseKO();
}
else if (b -s > 11){
winKO();
}
else{
 
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[9].ques;
                message002.innerHTML = input + compcat[9].option;
		document.getElementById("q1").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "initial";
hidechance = Math.random() *100;
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop3').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                message004.innerHTML = "";

 		qu001.innerHTML = "STEAL - " +compcat[9].cat.toUpperCase();
		mc++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
