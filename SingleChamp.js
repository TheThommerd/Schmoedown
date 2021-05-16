message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
		document.getElementById("q2").focus();
	        document.getElementById("frame001").style.zoom="1.4";
	        document.getElementById("checkboxes").style.zoom="1.5";
  var goFS = document.getElementById("goFS");
  goFS.addEventListener("click", function() {
      document.body.requestFullscreen();
  }, false);
function load(){
if (document.getElementById("passwordsaverChampion").value != "REMEMBER THE TITANS"){
message004.innerHTML = "<input id=password type=text maxlength=30 placeholder=Password /></br/></br/><button id=submit3  class=buttons001 onclick=submitpassword()>Submit</button>";
message001.innerHTML = "Enter password.";
		document.getElementById("password").focus();
}
else if (document.getElementById("passwordsaverChampion").value == "REMEMBER THE TITANS"){
message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
message006.innerHTML = "";
message001.innerHTML = "Enter your name and twitter, or press Skip to proceed.";
		document.getElementById("q2").focus();
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
var competitorlist = [
{
"id": "Bateman",
"lowercase": "Ben Bateman",
"twitter": "@benbatemanmedia",
"record": "10-5",
"faction": "HORSEMEN",
"strength1" : "Movie Release Dates",
"strength2" : "Oscar Movies",
"strength3" : "Action/Adventure",
"strength4" : "Denzel Washington",
"strength5" : "Christopher Nolan",
"strength6" : "Julia Roberts",
"percentage": "82",
"percentage3": "77",
"percentage5": "77",
"strengthpercentage": "92",
"strengthpercentage3": "87",
"strengthpercentage5": "87",
},
{
"id": "Bibbiani",
"lowercase": "William Bibbiani",
"twitter": "@WilliamBibbiani",
"record": "10-8",
"faction": "SHAZAM!",
"strength1" : "Classics",
"strength2" : "Horror",
"strength3" : "2010s",
"strength4" : "80s",
"strength5" : "Dramas",
"strength6" : "Musicals",
"percentage": "84",
"percentage3": "79",
"percentage5": "79",
"strengthpercentage": "94",
"strengthpercentage3": "89",
"strengthpercentage5": "89",
},
{
"id": "Kalinowski",
"lowercase": "Mike Kalinowski",
"twitter": "@MikeKalinowski",
"record": "7-6",
"faction": "KORRUPTION",
"strength1" : "Spy Movies",
"strength2" : "Comic Book Movies",
"strength3" : "Action/Adventure",
"strength4" : "Fantasy/Sci-fi",
"strength5" : "Tom Cruise",
"strength6" : "James Bond",
"percentage": "74",
"percentage3": "69",
"percentage5": "69",
"strengthpercentage": "84",
"strengthpercentage3": "79",
"strengthpercentage5": "79",
},
{
"id": "Murrell",
"lowercase": "Dan Murrell",
"twitter": "@MurrellDan",
"record": "13-5",
"faction": "HORSEMEN",
"strength1" : "Steven Spielberg",
"strength2" : "Comic Book Movies",
"strength3" : "Oscar Movies",
"strength4" : "2010s",
"strength5" : "Tim Burton",
"strength6" : "Stanley Kubrick",
"percentage": "85",
"percentage3": "80",
"percentage5": "80",
"strengthpercentage": "95",
"strengthpercentage3": "90",
"strengthpercentage5": "90",
},
{
"id": "Oyama",
"lowercase": "Paul Oyama",
"twitter": "@Paul_Oyama",
"record": "6-1",
"faction": "S.W.A.G.",
"strength1" : "Classics",
"strength2" : "Comedies",
"strength3" : "Directors",
"strength4" : "Christopher Nolan",
"strength5" : "Quentin Tarantino",
"strength6" : "Alfred Hitchcock",
"percentage": "78",
"percentage3": "73",
"percentage5": "73",
"strengthpercentage": "88",
"strengthpercentage3": "83",
"strengthpercentage5": "83",
},
{
"id": "Andreyko",
"lowercase": "Marc Andreyko",
"twitter": "@marcandreyko",
"record": "6-6",
"faction": "ROXSTARS",
"strength1" : "Musicals",
"strength2" : "Comic Book Movies",
"strength3" : "Oscar Movies",
"strength4" : "Dance Movies",
"strength5" : "Comedies",
"strength6" : "90s",
"percentage": "72",
"percentage3": "67",
"percentage5": "67",
"strengthpercentage": "82",
"strengthpercentage3": "77",
"strengthpercentage5": "77",
},
{
"id": "Cushing",
"lowercase": "Rachel Cushing",
"twitter": "@RachelJCushing",
"record": "4-2",
"faction": "SHIREWOLVES",
"strength1" : "Fantasy/Sci-fi",
"strength2" : "Oscar Movies",
"strength3" : "Comic Book Movies",
"strength4" : "Sandra Bullock",
"strength5" : "Rom-coms",
"strength6" : "Julia Roberts",
"percentage": "88",
"percentage3": "83",
"percentage5": "83",
"strengthpercentage": "98",
"strengthpercentage3": "93",
"strengthpercentage5": "93",
},
{
"id": "Dagnino",
"lowercase": "Tom Dagnino",
"twitter": "@bobfinstock",
"record": "1-4",
"faction": "HORSEMEN",
"strength1" : "80s",
"strength2" : "Action/Adventure",
"strength3" : "Sports",
"strength4" : "Sly & Arnie",
"strength5" : "Crime",
"strength6" : "Tom Cruise",
"percentage": "49",
"percentage3": "44",
"percentage5": "44",
"strengthpercentage": "59",
"strengthpercentage3": "54",
"strengthpercentage5": "54",
},
{
"id": "Ellison",
"lowercase": "Chance Ellison",
"twitter": "@chancewars_91",
"record": "3-3",
"faction": "KORRUPTION",
"strength1" : "Fantasy/Sci-fi",
"strength2" : "Pixar",
"strength3" : "Comic Book Movies",
"strength4" : "Matthew McConaughey",
"strength5" : "Directors",
"strength6" : "Tom Cruise",
"percentage": "79",
"percentage3": "74",
"percentage5": "74",
"strengthpercentage": "89",
"strengthpercentage3": "84",
"strengthpercentage5": "84",
},
{
"id": "Erwin",
"lowercase": "Ethan Erwin",
"twitter": "@MrEthanErwin",
"record": "8-4",
"faction": "USUAL SUSPECTS",
"strength1" : "2000s",
"strength2" : "Directors",
"strength3" : "Tom Cruise",
"strength4" : "80s",
"strength5" : "Martin Scorsese",
"strength6" : "War",
"percentage": "86",
"percentage3": "81",
"percentage5": "81",
"strengthpercentage": "96",
"strengthpercentage3": "91",
"strengthpercentage5": "91",
},
{
"id": "Harris",
"lowercase": "Lon Harris",
"twitter": "@Lons",
"record": "5-4",
"faction": "S.W.A.G.",
"strength1" : "Classics",
"strength2" : "Directors",
"strength3" : "90s",
"strength4" : "Denzel Washington",
"strength5" : "Martin Scorsese",
"strength6" : "Quentin Tarantino",
"percentage": "74",
"percentage3": "70",
"percentage5": "70",
"strengthpercentage": "84",
"strengthpercentage3": "80",
"strengthpercentage5": "80",
},
{
"id": "Howard",
"lowercase": "Stacy Howard",
"twitter": "@stacyohoward",
"record": "6-5",
"faction": "ROXSTARS",
"strength1" : "Julia Roberts",
"strength2" : "Romance",
"strength3" : "Comedies",
"strength4" : "Sandra Bullock",
"strength5" : "Musicals",
"strength6" : "Dance Movies",
"percentage": "60",
"percentage3": "55",
"percentage5": "55",
"strengthpercentage": "70",
"strengthpercentage3": "65",
"strengthpercentage5": "65",
},
{
"id": "JTE",
"lowercase": "JTE",
"twitter": "@JTEmoviethinks",
"record": "9-10",
"faction": "ROXSTARS",
"strength1" : "Sly & Arnie",
"strength2" : "80s",
"strength3" : "Sports",
"strength4" : "Christopher Nolan",
"strength5" : "Tom Cruise",
"strength6" : "Will Smith",
"percentage": "69",
"percentage3": "62",
"percentage5": "62",
"strengthpercentage": "79",
"strengthpercentage3": "72",
"strengthpercentage5": "72",
},
{
"id": "Levine",
"lowercase": "Samm Levine",
"twitter": "@SammLevine",
"record": "10-4",
"faction": "USUAL SUSPECTS",
"strength1" : "80s",
"strength2" : "Matthew McConaughey",
"strength3" : "Scores & Soundtracks",
"strength4" : "Comedies",
"strength5" : "Movie Release Dates",
"strength6" : "War",
"percentage": "80",
"percentage3": "76",
"percentage5": "76",
"strengthpercentage": "90",
"strengthpercentage3": "86",
"strengthpercentage5": "86",
},
{
"id": "Meyer",
"lowercase": "Brendan Meyer",
"twitter": "@BrendanKJMeyer",
"record": "5-3",
"faction": "SHAZAM",
"strength1" : "Directors",
"strength2" : "2010s",
"strength3" : "Tom Hanks",
"strength4" : "Oscar Movies",
"strength5" : "Spy Movies",
"strength6" : "Tom Cruise",
"percentage": "72",
"percentage3": "68",
"percentage5": "68",
"strengthpercentage": "82",
"strengthpercentage3": "78",
"strengthpercentage5": "78",
},
{
"id": "Macuga",
"lowercase": "Josh Macuga",
"twitter": "@JoshMacuga",
"record": "8-11",
"faction": "S.W.A.G.",
"strength1" : "Comedies",
"strength2" : "80s",
"strength3" : "Sports",
"strength4" : "Action/Adventure",
"strength5" : "Will Smith",
"strength6" : "Tom Cruise",
"percentage": "52",
"percentage3": "45",
"percentage5": "45",
"strengthpercentage": "62",
"strengthpercentage3": "55",
"strengthpercentage5": "55",
},
{
"id": "Miller",
"lowercase": "Liz Shannon Miller",
"twitter": "@lizlet",
"record": "4-2",
"faction": "S.W.A.G.",
"strength1" : "Rom-coms",
"strength2" : "Sandra Bullock",
"strength3" : "Scarlett Johansson",
"strength4" : "Dramas",
"strength5" : "Directors",
"strength6" : "Tom Hanks",
"percentage": "75",
"percentage3": "70",
"percentage5": "70",
"strengthpercentage": "85",
"strengthpercentage3": "80",
"strengthpercentage5": "80",
},
{
"id": "Reilly",
"lowercase": "Mark Reilly",
"twitter": "@ReillyAround",
"record": "10-7",
"faction": "HORSEMEN",
"strength1" : "Steven Spielberg",
"strength2" : "Comic Book Movies",
"strength3" : "Scores & Soundtracks",
"strength4" : "Horror",
"strength5" : "80s",
"strength6" : "Martin Scorsese",
"percentage": "71",
"percentage3": "66",
"percentage5": "66",
"strengthpercentage": "81",
"strengthpercentage3": "76",
"strengthpercentage5": "76",
},
{
"id": "Sneider",
"lowercase": "Jeff Sneider",
"twitter": "@TheInSneider",
"record": "9-6",
"faction": "ROXSTARS",
"strength1" : "80s",
"strength2" : "Festival Darlings",
"strength3" : "Quentin Tarantino",
"strength4" : "Martin Scorsese",
"strength5" : "Oscar Movies",
"strength6" : "Dramas",
"percentage": "71",
"percentage3": "66",
"percentage5": "66",
"strengthpercentage": "78",
"strengthpercentage3": "78",
"strengthpercentage5": "73",
},
{
"id": "Wolfe",
"lowercase": "Clarke Wolfe",
"twitter": "@clarkewolfe",
"record": "8-7",
"faction": "SHIREWOLVES",
"strength1" : "Horror",
"strength2" : "Rom-coms",
"strength3" : "Oscar Movies",
"strength4" : "Julia Roberts",
"strength5" : "Romance",
"strength6" : "Thrillers",
"percentage": "72",
"percentage3": "67",
"percentage5": "67",
"strengthpercentage": "82",
"strengthpercentage3": "77",
"strengthpercentage5": "77",
},
{
"id": "Preston",
"lowercase": "Paul Preston",
"twitter": "@PPrestonLA",
"record": "8-7",
"faction": "THE DEN",
"strength1" : "Sports",
"strength2" : "Action/Adventure",
"strength3" : "80s",
"strength4" : "Will Smith",
"strength5" : "Tom Cruise",
"strength6" : "Comic Book Movies",
"percentage": "75",
"percentage3": "70",
"percentage5": "70",
"strengthpercentage": "80",
"strengthpercentage3": "70",
"strengthpercentage5": "70",
},
	{
"id": "Collins",
"lowercase": "Adam Collins",
"twitter": "@Aizanthor",
"record": "7-0",
"faction": "KORRUPTION",
"strength1" : "Horror",
"strength2" : "Tim Burton",
"strength3" : "Stanley Kubrick",
"strength4" : "Movie Release Dates",
"strength5" : "Sly & Arnie",
"strength6" : "Tom Cruise",
"percentage": "85",
"percentage3": "80",
"percentage5": "80",
"strengthpercentage": "95",
"strengthpercentage3": "90",
"strengthpercentage5": "90",
},
{
"id": "McKee",
"lowercase": "Marisol McKee",
"twitter": "@Marisol_Miriah",
"record": "2-1",
"faction": "KORRUPTION",
"strength1" : "2000s",
"strength2" : "Sandra Bullock",
"strength3" : "Denzel Washington",
"strength4" : "Eddie Murphy",
"strength5" : "Rom-coms",
"strength6" : "Musicals",
"percentage": "73",
"percentage3": "68",
"percentage5": "68",
"strengthpercentage": "83",
"strengthpercentage3": "78",
"strengthpercentage5": "78",
},
{
"id": "Barbarian",
"lowercase": "The Barbarian",
"twitter": "@BarbarianCraig",
"record": "2-1",
"faction": "EXCHANGE",
"strength1" : "Julia Roberts",
"strength2" : "Oscar Movies",
"strength3" : "Martin Scorsese",
"strength4" : "Crime",
"strength5" : "Christopher Nolan",
"strength6" : "Matthew McConaughey",
"percentage": "77",
"percentage3": "72",
"percentage5": "72",
"strengthpercentage": "87",
"strengthpercentage3": "82",
"strengthpercentage5": "82",
},
{
"id": "Seibold",
"lowercase": "Witney Seibold",
"twitter": "@WitneySeibold",
"record": "2-1",
"faction": "DUNGEON",
"strength1" : "Festival Darlings",
"strength2" : "Oscar Movies",
"strength3" : "Martin Scorsese",
"strength4" : "Alfred Hitchcock",
"strength5" : "Classics",
"strength6" : "Quentin Tarantino",
"percentage": "73",
"percentage3": "68",
"percentage5": "68",
"strengthpercentage": "83",
"strengthpercentage3": "78",
"strengthpercentage5": "78",
},
{
"id": "Videodrew",
"lowercase": "VideoDrew",
"twitter": "@videodrew",
"record": "2-2",
"faction": "DUNGEON",
"strength1" : "Horror",
"strength2" : "Monster Movies",
"strength3" : "Rom-coms",
"strength4" : "Sandra Bullock",
"strength5" : "Cameron Diaz",
"strength6" : "Kevin Smith",
"percentage": "68",
"percentage3": "63",
"percentage5": "63",
"strengthpercentage": "78",
"strengthpercentage3": "73",
"strengthpercentage5": "73",
},
{
"id": "Paramo",
"lowercase": "Jader Paramo",
"twitter": "@Infamousj13",
"record": "2-2",
"faction": "THE DEN",
"strength1" : "Pixar",
"strength2" : "Family Films",
"strength3" : "Animated",
"strength4" : "Sly & Arnie",
"strength5" : "Christopher Nolan",
"strength6" : "Tom Cruise",
"percentage": "67",
"percentage3": "62",
"percentage5": "62",
"strengthpercentage": "77",
"strengthpercentage3": "72",
"strengthpercentage5": "72",
},
{
"id": "Jeannine",
"lowercase": "Jeannine",
"twitter": "@JeannineDaBean",
"record": "5-6",
"faction": "THE STARS",
"strength1" : "Pixar",
"strength2" : "Rom-coms",
"strength3" : "Romance",
"strength4" : "Cameron Diaz",
"strength5" : "Julia Roberts",
"strength6" : "Dance Movies",
"percentage": "65",
"percentage3": "60",
"percentage5": "60",
"strengthpercentage": "75",
"strengthpercentage3": "70",
"strengthpercentage5": "70",
},
	{
"id": "Dewberry",
"lowercase": "Eliot Dewberry",
"twitter": "@EliotETC",
"record": "2-4",
"faction": "KORRUPTION",
"strength1" : "90s",
"strength2" : "Sports",
"strength3" : "Action/Adventure",
"strength4" : "Tom Cruise",
"strength5" : "Christopher Nolan",
"strength6" : "Denzel Washington",
"percentage": "62",
"percentage3": "57",
"percentage5": "57",
"strengthpercentage": "72",
"strengthpercentage3": "57",
"strengthpercentage5": "57",
},
{
"id": "Ghai",
"lowercase": "Andrew Ghai",
"twitter": "@AndrewGhai",
"record": "10-5",
"faction": "HORSEMEN",
"strength1" : "Will Smith",
"strength2" : "Thrillers",
"strength3" : "Spy Movies",
"strength4" : "Quentin Tarantino",
"strength5" : "Christopher Nolan",
"strength6" : "Sly & Arnie",
"percentage": "61",
"percentage3": "56",
"percentage5": "56",
"strengthpercentage": "71",
"strengthpercentage3": "66",
"strengthpercentage5": "66",
},
{
"id": "McWeeny",
"lowercase": "Drew McWeeny",
"twitter": "@DrewMcWeeny",
"record": "4-5",
"faction": "USUAL SUSPECTS",
"strength1" : "70s",
"strength2" : "Classics",
"strength3" : "Stanley Kubrick",
"strength4" : "Tom Hanks",
"strength5" : "Directors",
"strength6" : "80s",
"percentage": "82",
"percentage3": "77",
"percentage5": "77",
"strengthpercentage": "92",
"strengthpercentage3": "87",
"strengthpercentage5": "87",
},
{
"id": "Alba",
"lowercase": "Greg Alba",
"twitter": "@TheGregAlba",
"record": "0-0",
"faction": "QUIRKY MERCS",
"strength1" : "Comic Book Movies",
"strength2" : "Kevin Smith",
"strength3" : "Tom Cruise",
"strength4" : "Will Smith",
"strength5" : "Christopher Nolan",
"strength6" : "James Bond",
"percentage": "60",
"percentage3": "55",
"percentage5": "55",
"strengthpercentage": "70",
"strengthpercentage3": "65",
"strengthpercentage5": "65",
},
{
"id": "Witt",
"lowercase": "Adam Witt",
"twitter": "@Adam_Witt",
"record": "0-0",
"faction": "DUNGEON",
"strength1" : "Comic Book Movies",
"strength2" : "80s",
"strength3" : "Action/Adventure",
"strength4" : "Sly & Arnie",
"strength5" : "Tom Cruise",
"strength6" : "Sports",
"percentage": "60",
"percentage3": "55",
"percentage5": "55",
"strengthpercentage": "70",
"strengthpercentage3": "65",
"strengthpercentage5": "65",
},
{
"id": "Rocha",
"lowercase": "John Rocha",
"twitter": "@TheRochaSays",
"record": "14-9",
"faction": "HORSEMEN",
"strength1" : "Westerns",
"strength2" : "Classics",
"strength3" : "Biopics",
"strength4" : "70s",
"strength5" : "Sports",
"strength6" : "Denzel Washington",
"percentage": "79",
"percentage3": "74",
"percentage5": "74",
"strengthpercentage": "89",
"strengthpercentage3": "84",
"strengthpercentage5": "84",
}
];
var percentage = 0;
var percentage3 = 0;
var percentage5 = 0;
var similarity1 = 0;
var similarity2 = 0;
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
checkboxes.innerHTML = "<label class=checkbox-label><input type=checkbox id=cat1 value=70s>70s</label><br/><label class=checkbox-label><input type=checkbox id=cat2 value=80s>80s</label><br/><label class=checkbox-label><input type=checkbox id=cat3 value=90s>90s</label><br/><label class=checkbox-label><input type=checkbox id=cat4 value=2000s>2000s</label><br/><label class=checkbox-label><input type=checkbox id=cat5 value=2010s>2010s</label><br/><label class=checkbox-label><input type=checkbox id=cat6 value=Action/Adventure>Action/Adventure</label><br/><label class=checkbox-label><input type=checkbox id=cat7 value='Alfred Hitchcock'>Alfred Hitchcock</label><br/><label class=checkbox-label><input type=checkbox id=cat8 value=Animated>Animated</label><br/><label class=checkbox-label><input type=checkbox id=cat9 value=Biopics>Biopics</label><br/><label class=checkbox-label><input type=checkbox id=cat10 value='Cameron Diaz'>Cameron Diaz</label><br/><label class=checkbox-label><input type=checkbox id=cat11 value='Christopher Nolan'>Christopher Nolan</label><br/><label class=checkbox-label><input type=checkbox id=cat12 value=Classics>Classics</label><br/><label class=checkbox-label><input type=checkbox id=cat13 value=Comedies>Comedies</label><br/><label class=checkbox-label><input type=checkbox id=cat14 value='Comic Book Movies'>Comic Book Movies</label><br/><label class=checkbox-label><input type=checkbox id=cat15 value='Coming of Age'>Coming of Age</label><br/><label class=checkbox-label><input type=checkbox id=cat16 value=Crime>Crime</label><br/><label class=checkbox-label><input type=checkbox id=cat17 value='Dance Movies'>Dance Movies</label><br/><label class=checkbox-label><input type=checkbox id=cat18 value='Denzel Washington'>Denzel Washington</label><br/><label class=checkbox-label><input type=checkbox id=cat19 value=Directors>Directors</label><br/><label class=checkbox-label><input type=checkbox id=cat20 value='Disaster Movies'>Disaster Movies</label><br/><label class=checkbox-label><input type=checkbox id=cat21 value=Disney>Disney</label><br/><label class=checkbox-label><input type=checkbox id=cat22 value=Dramas>Dramas</label><br/><label class=checkbox-label><input type=checkbox id=cat23 value='Family Films'>Family Films</label><br/><label class=checkbox-label><input type=checkbox id=cat24 value='Famous Actors and Actresses'>Famous Actors and Actresses</label><br/><label class=checkbox-label><input type=checkbox id=cat25 value=Fantasy/Sci-fi>Fantasy/Sci-fi</label><br/><label class=checkbox-label><input type=checkbox id=cat26 value='Festival Darlings'>Festival Darlings</label><br/><label class=checkbox-label><input type=checkbox id=cat27 value='Holiday Movies'>Holiday Movies</label><br/><label class=checkbox-label><input type=checkbox id=cat28 value=Horror>Horror</label><br/><label class=checkbox-label><input type=checkbox id=cat29 value='James Bond'>James Bond</label><br/><label class=checkbox-label><input type=checkbox id=cat30 value='Julia Roberts'>Julia Roberts</label><br/><label class=checkbox2><input type=checkbox id=cat31 value='Kevin Smith'>Kevin Smith</label><br/><label class=checkbox2><input type=checkbox id=cat32 value='Martin Scorsese'>Martin Scorsese</label><br/><label class=checkbox2><input type=checkbox id=cat33 value='Matthew McConaughey'>Matthew McConaughey</label><br/><label class=checkbox2><input type=checkbox id=cat34 value='Meryl Streep'>Meryl Streep</label><br/><label class=checkbox2><input type=checkbox id=cat35 value='Monster Movies'>Monster Movies</label><br/><label class=checkbox2><input type=checkbox id=cat36 value='Movie Taglines'>Movie Taglines</label><br/><label class=checkbox2><input type=checkbox id=cat37 value='Movie Quotes'>Movie Quotes</label><br/><label class=checkbox2><input type=checkbox id=cat38 value='Movie Release Dates'>Movie Release Dates</label><br/><label class=checkbox2><input type=checkbox id=cat39 value=Musicals>Musicals</label><br/><label class=checkbox2><input type=checkbox id=cat40 value='Oscar Movies'>Oscar Movies</label><br/><label class=checkbox2><input type=checkbox id=cat41 value=Pixar>Pixar</label><br/><label class=checkbox2><input type=checkbox id=cat42 value='Quentin Tarantino'>Quentin Tarantino</label><br/><label class=checkbox2><input type=checkbox id=cat43 value=Romance>Romance</label><br/><label class=checkbox2><input type=checkbox id=cat44 value=Rom-coms>Rom-coms</label><br/><label class=checkbox2><input type=checkbox id=cat45 value='Sandra Bullock'>Sandra Bullock</label><br/><label class=checkbox2><input type=checkbox id=cat46 value='Scarlett Johansson'>Scarlett Johansson</label><br/><label class=checkbox2><input type=checkbox id=cat47 value='Scores & Soundtracks'>Scores & Soundtracks</label><br/><label class=checkbox2><input type=checkbox id=cat48 value='Sly & Arnie'>Sly & Arnie</label><br/><label class=checkbox2><input type=checkbox id=cat49 value='Stanley Kubrick'>Stanley Kubrick</label><br/><label class=checkbox2><input type=checkbox id=cat50 value='Steven Spielberg'>Steven Spielberg</label><br/><label class=checkbox2><input type=checkbox id=cat51 value=Sports>Sports</label><br/><label class=checkbox2><input type=checkbox id=cat52 value='Spy Movies'>Spy Movies</label><br/><label class=checkbox2><input type=checkbox id=cat53 value=Thrillers>Thrillers</label><br/><label class=checkbox2><input type=checkbox id=cat54 value='Tim Burton'>Tim Burton</label><br/><label class=checkbox2><input type=checkbox id=cat55 value='Tom Cruise'>Tom Cruise</label><br/><label class=checkbox2><input type=checkbox id=cat56 value='Tom Hanks'>Tom Hanks</label><br/><label class=checkbox2><input type=checkbox id=cat57 value='Video Game Movies'>Video Game Movies</label><br/><label class=checkbox2><input type=checkbox id=cat58 value=War>War</label><br/><label class=checkbox2><input type=checkbox id=cat59 value=Westerns>Westerns</label><br/><label class=checkbox2><input type=checkbox id=cat60 value='Will Smith'>Will Smith</label><br/>";
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
	message005.innerHTML = "You selected " +competitorlist[0].lowercase + "." + "</br></br>" + "He/she selected the following wheel slices: " + wheelie[0] + ", " +  wheelie[1] + " and " +  wheelie[2] + "." + "</br></br>" + "Select 3 categories to put on the wheel.";
	document.getElementById("message004").style.top = "-140px";
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 6) {
	document.getElementById("checkboxes").style.top = "-1000px";
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 6) {
	document.getElementById("checkboxes").style.top = "-1000px";
	message004.innerHTML = "<button class=buttons002 onclick=pregame()>Next</button>";
    }
else{
	document.getElementById("checkboxes").style.top = "-1000px";
	message004.innerHTML = "";
}
});
var checkcount = 0;
if (checkcount < 3){
var m = 1;
var cat = "cat";
for (m = 1; m < 61; m++) {
if ((document.getElementById(cat + m).value == wheelie[0]) || (document.getElementById(cat + m).value ==  wheelie[1]) || (document.getElementById(cat + m).value ==  wheelie[2])) {
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
	message005.innerHTML = "<strong><font size=4>ROUND ONE</font><br/></br>YOU GET 8 QUESTIONS FROM RANDOM CATEGORIES</br></br>YOU HAVE 20 SECONDS TO READ THE QUESTION AND SUBMIT YOUR ANSWER</br>YOU CAN SUBMIT YOUR ANSWER BY CLICKING THE SUBMIT BUTTON OR BY HITTING THE ENTER KEY</br></br>ALL QUESTIONS ARE WORTH 1 POINT</br>A PERFECT ROUND TRIGGERS A 1 POINT BONUS QUESTION</br></br>YOU CAN ASK 3 TIMES DURING THE MATCH FOR A QUESTION TO BE REPEATED</br>THIS GIVES YOU AN ADDITIONAL 15 SECONDS TO ANSWER THE QUESTION</br></br>YOU CAN CHALLENGE ANY RULING BY CLICKING THE 'CHALLENGE' BUTTON</br>JUDGE YOUR CHALLENGE BY CLICKING THE 'WIN CHALLENGE' OR 'LOSE CHALLENGE' BUTTON</br>REVERSALS LET YOU KEEP YOUR CHALLENGE</strong>";
	document.getElementById("message005").style.position = "relative";
	document.getElementById("message005").style.top = "-200px";
message003.innerHTML = "<button id=begin class=buttons002 onclick=begin001()>Begin</button>";
	document.getElementById("message003").style.top = "-200px";
	message006.innerHTML =  "First category is " +question001[0].cat;
	document.getElementById("message006").style.position = "relative";
	document.getElementById("message006").style.top = "-200px";
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
message004.innerHTML = "<select id=select><option value=Bateman>Ben Bateman</option><option value=Bibbiani>William Bibbiani</option><option value=Collins>Adam Collins</option><option value=Murrell>Dan Murrell</option><option value=Rocha>John Rocha</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button>";
	message001.innerHTML = "Choose your opponent.";
}
function submitpassword() {
var ww = document.getElementById("password").value.toUpperCase();
document.getElementById("passwordsaverChampion").value = document.getElementById("password").value.toUpperCase();
if (ww == "REMEMBER THE TITANS")
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
function skip () {
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
message004.innerHTML = "<select id=select><option value=Bateman>Ben Bateman</option><option value=Bibbiani>William Bibbiani</option><option value=Collins>Adam Collins</option><option value=Murrell>Dan Murrell</option><option value=Rocha>John Rocha</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button>";
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
martinscorsese = shuffle(martinscorsese);
seventies = shuffle(seventies);
moviequotes = shuffle(moviequotes);
movietaglines = shuffle(movietaglines);
romance = shuffle(romance);
slyarnie = shuffle(slyarnie);
spielberg = shuffle(spielberg);
pixar = shuffle(pixar);
spymovies = shuffle(spymovies);
sports = shuffle(sports);
sandrabullock = shuffle(sandrabullock);
thrillers = shuffle(thrillers);
scoressoundtracks = shuffle(scoressoundtracks);
tomhanks = shuffle(tomhanks);
war = shuffle(war);
musicals = shuffle(musicals);
classics = shuffle(classics);
westerns = shuffle(westerns);
monstermovies = shuffle(monstermovies);
willsmith = shuffle(willsmith);
tarantino = shuffle(tarantino);
timburton = shuffle(timburton);
tomcruise = shuffle(tomcruise);
juliaroberts = shuffle(juliaroberts);
kevinsmith = shuffle(kevinsmith);
denzelwashington = shuffle(denzelwashington);
disastermovies = shuffle(disastermovies);
dance = shuffle(dance);
scarlettjohansson = shuffle(scarlettjohansson);
hitchcock = shuffle(hitchcock);
stanleykubrick = shuffle(stanleykubrick);
videogames = shuffle(videogames);
christophernolan = shuffle(christophernolan);
camerondiaz = shuffle(camerondiaz);
merylstreep = shuffle(merylstreep);
jamesbond = shuffle(jamesbond);
mcconaughey = shuffle(mcconaughey);
festivaldarlings = shuffle(festivaldarlings);
var roundthree = [fantasyscifi[1], comedy[1], horror[1], actionadventure[1], animated[1], oscarmovies[1], eighties[1], nineties[1], zeros[1], tens[1], dramas[1], comicbookmovies[1], holidaymovies[1], romcoms[1], directors[1], biopics[1], comingofage[1], crime[1], disney[1], familyfilms[1], famousactors[1], martinscorsese[1], seventies[1], moviereleasedates[1], moviequotes[1], movietaglines[1], romance[1], slyarnie[1], spielberg[1], pixar[1], spymovies[1], sports[1], sandrabullock[1], thrillers[1], scoressoundtracks[1], tomhanks[1], war[1], musicals[1], classics[1], westerns[1], monstermovies[1], willsmith[1], tarantino[1], timburton[1], tomcruise[1], juliaroberts[1], kevinsmith[1], denzelwashington[1], disastermovies[1], dance[1], scarlettjohansson[1], hitchcock[1], stanleykubrick[1], videogames[1], christophernolan[1], camerondiaz[1], merylstreep[1], jamesbond[1], mcconaughey[1], festivaldarlings[1]];
var suddendeath = [fantasyscifi[2], comedy[2], dramas[2], horror[2], actionadventure[2], oscarmovies[2], eighties[2], nineties[2], zeros[2], tens[2], directors[2], animated[2], romcoms[2], comicbookmovies[2], famousactors[2], moviereleasedates[2], moviequotes[2], classics[2], thrillers[2], sports[2], familyfilms[2], crime[2]];
var roundone = [fantasyscifi[0], comedy[0], dramas[0], horror[0], actionadventure[0], oscarmovies[0], eighties[0], nineties[0], zeros[0], tens[0], directors[0], animated[0], romcoms[0], moviereleasedates[0]];
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
var chosen = [r2Q1[0].cat, r2Q2[0].cat, r2Q3[0].cat, r2Q4[0].cat, r2Q5[0].cat, r2Q6[0].cat, r2Q7[0].cat, r2Q8[0].cat, r2Q9[0].cat, r2Q10[0].cat, r2Q11[0].cat, r2Q12[0].cat, r2Q13[0].cat, r2Q14[0].cat, r2Q15[0].cat, r2Q16[0].cat, r2Q17[0].cat, r2Q18[0].cat, r2Q19[0].cat, r2Q20[0].cat, r2Q21[0].cat, r2Q22[0].cat, r2Q23[0].cat, r2Q24[0].cat, r2Q25[0].cat, r2Q26[0].cat, r2Q27[0].cat, r2Q28[0].cat, r2Q29[0].cat, r2Q30[0].cat, r2Q31[0].cat, r2Q32[0].cat, r2Q33[0].cat, r2Q34[0].cat, r2Q35[0].cat, r2Q36[0].cat, r2Q37[0].cat, r2Q38[0].cat, r2Q39[0].cat, r2Q40[0].cat, r2Q41[0].cat, r2Q42[0].cat, r2Q43[0].cat, r2Q44[0].cat, r2Q45[0].cat, r2Q46[0].cat, r2Q47[0].cat, r2Q48[0].cat, r2Q49[0].cat, r2Q50[0].cat, r2Q51[0].cat, r2Q52[0].cat, r2Q53[0].cat, r2Q54[0].cat, r2Q55[0].cat, r2Q56[0].cat, r2Q57[0].cat, r2Q58[0].cat, r2Q59[0].cat, r2Q60[0].cat];
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
            rotation += 90 - Math.round(ps/2);
            vis.transition()
                .duration(3000)
                .attrTween("transform", rotTween)
                .each("end", function(){
                    oldrotation = rotation;
message002.innerHTML = "You spun " +data[picked] + "<br/></br>" + "<button class=buttons008 id=respin onclick=spin2()>Spin Again</button>";
if (data[picked] == "Spinner's Choice"){
message002.innerHTML = "You spun Spinner's Choice" + "<br/></br>" + "Select which category you want to pick:" + "<br/></br>" + "<ul id=boxes class=aligner><li><input type=checkbox id=box1 value= /><label for=box1>" + data[1] +"</label></li><li><input type=checkbox id=box2 value=/><label for=box2>" +data[2] +"</label></li><li><input type=checkbox id=box3 value=/><label for=box3>" + data[3] + "</label></li><li><input type=checkbox id=box4 value=/><label for=box4>" + data[4] + "</label></li><li><input type=checkbox id=box5 value=/><label for=box5>" + data[5] + "</label></li><li><input type=checkbox id=box6 value=/><label for=box6>" + data[7] + "</label></li><li><input type=checkbox id=box7 value=/><label for=box7>" + data[8] + "</label></li><li><input type=checkbox id=box8 value=/><label for=box8>" + data[9] + "</label></li><li><input type=checkbox id=box9 value=/><label for=box9>" + data[10] + "</label></li><li><input type=checkbox id=box10 value=/><label for=box10>" + data[11] + "</label></li></ul>" + "<button class=buttons008 id=confirm onclick=confirm()>Confirm</button>";
document.getElementById("confirm").style.visibility= "hidden"; 
document.getElementById("confirm").style.top= "-160px"; 
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
    if ($('input[type=checkbox]:checked').length > 7) {
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 7) {
	document.getElementById("confirm").style.visibility= "visible"; 
    }
    if ($('input[type=checkbox]:checked').length < 7) {
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
else if (wheelie[0] == storage[4]) {picked = "5";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == storage[5]) {picked = "7";
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
compcat = shuffle(compcat);
}
var opponentspun = "0";
var random = "0";
var spinners = "0";
function simulatecomputerround2(){
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
random = Math.floor(Math.random() * numbers.length);
if (data[random] == "Spinner's Choice"){
spinners = "1";
if (data[picked] != wheelie[0]) {
if (wheelie[0] == storage[0]) {random = "1";}
else if (wheelie[0] == storage[1]) {random = "2";}
else if (wheelie[0] == storage[2]) {random = "3";}
else if (wheelie[0] == storage[3]) {random = "4";}
else if (wheelie[0] == storage[4]) {random = "5";}
else if (wheelie[0] == storage[5]) {random = "7";}
assigncompcat();}
else if (data[picked] != wheelie[1]) {
if (wheelie[1] == storage[0]) {random = "1";}
else if (wheelie[1] == storage[1]) {random = "2";}
else if (wheelie[1] == storage[2]) {random = "3";}
else if (wheelie[1] == storage[3]) {random = "4";}
else if (wheelie[1] == storage[4]) {random = "5";}
else if (wheelie[1] == storage[5]) {random = "7";}
assigncompcat();}
else if (data[picked] != wheelie[2]) {
if (wheelie[2] == storage[0]) {random = "1";}
else if (wheelie[2] == storage[1]) {random = "2";}
else if (wheelie[2] == storage[2]) {random = "3";}
else if (wheelie[2] == storage[3]) {random = "4";}
else if (wheelie[2] == storage[4]) {random = "5";}
else if (wheelie[2] == storage[5]) {random = "7";}
assigncompcat();}
}
if (data[random] == "Opponent's Choice"){opponentspun = "1";}
if ((data[random] != "Spinner's Choice") && (data[random] != "Opponent's Choice") && (data[random] == data[picked])){
simulatecomputerround2();}
if ((data[random] != "Spinner's Choice") && (data[random] != "Opponent's Choice") && (data[random] != data[picked])){
assigncompcat();
}
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
if (data[picked] == "Spinner's Choice"){
message002.innerHTML = "You spun Spinner's Choice" + "<br/></br>" + "Select which category you want to pick:" + "<br/></br>" + "<ul id=boxes class=aligner><li><input type=checkbox id=box1 value= /><label for=box1>" + data[1] +"</label></li><li><input type=checkbox id=box2 value=/><label for=box2>" +data[2] +"</label></li><li><input type=checkbox id=box3 value=/><label for=box3>" + data[3] + "</label></li><li><input type=checkbox id=box4 value=/><label for=box4>" + data[4] + "</label></li><li><input type=checkbox id=box5 value=/><label for=box5>" + data[5] + "</label></li><li><input type=checkbox id=box6 value=/><label for=box6>" + data[7] + "</label></li><li><input type=checkbox id=box7 value=/><label for=box7>" + data[8] + "</label></li><li><input type=checkbox id=box8 value=/><label for=box8>" + data[9] + "</label></li><li><input type=checkbox id=box9 value=/><label for=box9>" + data[10] + "</label></li><li><input type=checkbox id=box10 value=/><label for=box10>" + data[11] + "</label></li></ul>" + "<button class=buttons008 id=confirm onclick=confirm()>Confirm</button>";
document.getElementById("confirm").style.visibility= "hidden"; 
document.getElementById("confirm").style.top= "-160px"; 
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
    if ($('input[type=checkbox]:checked').length > 7) {
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 7) {
	document.getElementById("confirm").style.visibility= "visible"; 
    }
    if ($('input[type=checkbox]:checked').length < 7) {
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
else if (wheelie[0] == storage[4]) {picked = "5";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == storage[5]) {picked = "7";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
          round2();
}
else {
document.getElementById("respin").style.visibility = "hidden"; 
document.getElementById("message003").style.top = "-230px"; 
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
r2question001 = shuffle(r2question001); 
}
function bettingspin(d){
            document.getElementById("spin").style.visibility = "hidden";
            container.on("click", null);
            var  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
                
            rotation = (Math.round(rng / ps) * ps);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;
            rotation += 90 - Math.round(ps/2);
            vis.transition()
                .duration(3000)
                .attrTween("transform", rotTween)
                .each("end", function(){
                    d3.select("#question h1")
                    oldrotation = rotation;
			message002.innerHTML = "";
			mess = picked+1;
	message003.innerHTML = "You spun " +data[picked] + "<br/><br/>" + "Select how many points you want to bet";
if (data[picked] == "Spinner's Choice"){
message003.innerHTML = "You spun Spinner's Choice" + "<br/></br>" + "Select which category you want to pick:" + "<br/></br>" + "<ul id=boxes class=aligner><li><input type=checkbox id=box1 value= /><label for=box1>" + data[1] +"</label></li><li><input type=checkbox id=box2 value=/><label for=box2>" +data[2] +"</label></li><li><input type=checkbox id=box3 value=/><label for=box3>" + data[3] + "</label></li><li><input type=checkbox id=box4 value=/><label for=box4>" + data[4] + "</label></li><li><input type=checkbox id=box5 value=/><label for=box5>" + data[5] + "</label></li><li><input type=checkbox id=box6 value=/><label for=box6>" + data[7] + "</label></li><li><input type=checkbox id=box7 value=/><label for=box7>" + data[8] + "</label></li><li><input type=checkbox id=box8 value=/><label for=box8>" + data[9] + "</label></li><li><input type=checkbox id=box9 value=/><label for=box9>" + data[10] + "</label></li><li><input type=checkbox id=box10 value=/><label for=box10>" + data[11] + "</label></li></ul>" + "<button class=buttons008 id=confirm onclick=confirmbetting()>Confirm</button>";
document.getElementById("confirm").style.visibility= "hidden"; 
document.getElementById("confirm").style.top= "-160px"; 
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
    if ($('input[type=checkbox]:checked').length > 7) {
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 7) {
	document.getElementById("confirm").style.visibility= "visible"; 
    }
    if ($('input[type=checkbox]:checked').length < 7) {
	document.getElementById("confirm").style.visibility= "hidden"; 
    }
});
}
else if (data[picked] == "Opponent's Choice"){
if (wheelie[0] == storage[0]) {picked = "1";
message003.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " chose " + data[picked] + "<br/><br/>" + "Select how many points you want to bet"; }
else if (wheelie[0] == storage[1]) {picked = "2";
message003.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " chose " + data[picked] + "<br/><br/>" + "Select how many points you want to bet"; }
else if (wheelie[0] == storage[2]) {picked = "3";
message003.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " chose " + data[picked] + "<br/><br/>" + "Select how many points you want to bet"; }
else if (wheelie[0] == storage[3]) {picked = "4";
message003.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " chose " + data[picked] + "<br/><br/>" + "Select how many points you want to bet"; }
else if (wheelie[0] == storage[4]) {picked = "5";
message003.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " chose " + data[picked] + "<br/><br/>" + "Select how many points you want to bet"; }
else if (wheelie[0] == storage[5]) {picked = "7";
message003.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " chose " + data[picked] + "<br/><br/>" + "Select how many points you want to bet"; }
if (b >= 3){
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=bet0()>0</button><button id=bet1 class=buttons002 onclick=bet1()>1</button><button id=bet2 class=buttons002 onclick=bet2()>2</button><button id=bet3 class=buttons002 onclick=bet3()>3</button>"; 
}
else if (b >= 2){
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=bet0()>0</button><button id=bet1 class=buttons002 onclick=bet1()>1</button><button id=bet2 class=buttons002 onclick=bet2()>2</button>"; 
}
else if (b >= 1){
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=bet0()>0</button><button id=bet1 class=buttons002 onclick=bet1()>1</button>"; 
}
else if (b >= 0){
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=bet0()>0</button>"; 
}
}
else {          	
if (b >= 3){
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=bet0()>0</button><button id=bet1 class=buttons002 onclick=bet1()>1</button><button id=bet2 class=buttons002 onclick=bet2()>2</button><button id=bet3 class=buttons002 onclick=bet3()>3</button>"; 
}
else if (b >= 2){
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=bet0()>0</button><button id=bet1 class=buttons002 onclick=bet1()>1</button><button id=bet2 class=buttons002 onclick=bet2()>2</button>"; 
}
else if (b >= 1){
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=bet0()>0</button><button id=bet1 class=buttons002 onclick=bet1()>1</button>"; 
}
else if (b >= 0){
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=bet0()>0</button>"; 
}
}    
                });
        }
var bettingquestion001 = [];
function confirmbetting(){
message001.innerHTML = "Select how many points you want to bet";
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
message003.innerHTML = "You selected " + data[picked] + "<br/><br/>" + "Select how many points you want to bet" + "<br/>" + "<button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
if (b >= 3){
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=bet0()>0</button><button id=bet1 class=buttons002 onclick=bet1()>1</button><button id=bet2 class=buttons002 onclick=bet2()>2</button><button id=bet3 class=buttons002 onclick=bet3()>3</button>"; 
}
else if (b >= 2){
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=bet0()>0</button><button id=bet1 class=buttons002 onclick=bet1()>1</button><button id=bet2 class=buttons002 onclick=bet2()>2</button>"; 
}
else if (b >= 1){
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=bet0()>0</button><button id=bet1 class=buttons002 onclick=bet1()>1</button>"; 
}
else if (b >= 0){
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=bet0()>0</button>"; 
}
}
function betting(){
if (data[picked] == r2Q1[0].cat){bettingquestion001 = r2Q1;}
else if (data[picked] == r2Q2[0].cat){bettingquestion001 = r2Q2;}
else if (data[picked] == r2Q3[0].cat){bettingquestion001 = r2Q3;}
else if (data[picked] == r2Q4[0].cat){bettingquestion001 = r2Q4;}
else if (data[picked] == r2Q5[0].cat){bettingquestion001 = r2Q5;}
else if (data[picked] == r2Q6[0].cat){bettingquestion001 = r2Q6;}
else if (data[picked] == r2Q7[0].cat){bettingquestion001 = r2Q7;}
else if (data[picked] == r2Q8[0].cat){bettingquestion001 = r2Q8;}
else if (data[picked] == r2Q9[0].cat){bettingquestion001 = r2Q9;}
else if (data[picked] == r2Q10[0].cat){bettingquestion001 = r2Q10;}
else if (data[picked] == r2Q11[0].cat){bettingquestion001 = r2Q11;}
else if (data[picked] == r2Q12[0].cat){bettingquestion001 = r2Q12;}
else if (data[picked] == r2Q13[0].cat){bettingquestion001 = r2Q13;}
else if (data[picked] == r2Q14[0].cat){bettingquestion001 = r2Q14;}
else if (data[picked] == r2Q15[0].cat){bettingquestion001 = r2Q15;}
else if (data[picked] == r2Q16[0].cat){bettingquestion001 = r2Q16;}
else if (data[picked] == r2Q17[0].cat){bettingquestion001 = r2Q17;}
else if (data[picked] == r2Q18[0].cat){bettingquestion001 = r2Q18;}
else if (data[picked] == r2Q19[0].cat){bettingquestion001 = r2Q19;}
else if (data[picked] == r2Q20[0].cat){bettingquestion001 = r2Q20;}
else if (data[picked] == r2Q21[0].cat){bettingquestion001 = r2Q21;}
else if (data[picked] == r2Q22[0].cat){bettingquestion001 = r2Q22;}
else if (data[picked] == r2Q23[0].cat){bettingquestion001 = r2Q23;}
else if (data[picked] == r2Q24[0].cat){bettingquestion001 = r2Q24;}
else if (data[picked] == r2Q25[0].cat){bettingquestion001 = r2Q25;}
else if (data[picked] == r2Q26[0].cat){bettingquestion001 = r2Q26;}
else if (data[picked] == r2Q27[0].cat){bettingquestion001 = r2Q27;}
else if (data[picked] == r2Q28[0].cat){bettingquestion001 = r2Q28;}
else if (data[picked] == r2Q29[0].cat){bettingquestion001 = r2Q29;}
else if (data[picked] == r2Q30[0].cat){bettingquestion001 = r2Q30;}
else if (data[picked] == r2Q31[0].cat){bettingquestion001 = r2Q31;}
else if (data[picked] == r2Q32[0].cat){bettingquestion001 = r2Q32;}
else if (data[picked] == r2Q33[0].cat){bettingquestion001 = r2Q33;}
else if (data[picked] == r2Q34[0].cat){bettingquestion001 = r2Q34;}
else if (data[picked] == r2Q35[0].cat){bettingquestion001 = r2Q35;}
else if (data[picked] == r2Q36[0].cat){bettingquestion001 = r2Q36;}
else if (data[picked] == r2Q37[0].cat){bettingquestion001 = r2Q37;}
else if (data[picked] == r2Q38[0].cat){bettingquestion001 = r2Q38;}
else if (data[picked] == r2Q39[0].cat){bettingquestion001 = r2Q39;}
else if (data[picked] == r2Q40[0].cat){bettingquestion001 = r2Q40;}
else if (data[picked] == r2Q41[0].cat){bettingquestion001 = r2Q41;}
else if (data[picked] == r2Q42[0].cat){bettingquestion001 = r2Q42;}
else if (data[picked] == r2Q43[0].cat){bettingquestion001 = r2Q43;}
else if (data[picked] == r2Q44[0].cat){bettingquestion001 = r2Q44;}
else if (data[picked] == r2Q45[0].cat){bettingquestion001 = r2Q45;}
else if (data[picked] == r2Q46[0].cat){bettingquestion001 = r2Q46;}
else if (data[picked] == r2Q47[0].cat){bettingquestion001 = r2Q47;}
else if (data[picked] == r2Q48[0].cat){bettingquestion001 = r2Q48;}
else if (data[picked] == r2Q49[0].cat){bettingquestion001 = r2Q49;}
else if (data[picked] == r2Q50[0].cat){bettingquestion001 = r2Q50;}
else if (data[picked] == r2Q51[0].cat){bettingquestion001 = r2Q51;}
else if (data[picked] == r2Q52[0].cat){bettingquestion001 = r2Q52;}
else if (data[picked] == r2Q53[0].cat){bettingquestion001 = r2Q53;}
else if (data[picked] == r2Q54[0].cat){bettingquestion001 = r2Q54;}
else if (data[picked] == r2Q55[0].cat){bettingquestion001 = r2Q55;}
else if (data[picked] == r2Q56[0].cat){bettingquestion001 = r2Q56;}
else if (data[picked] == r2Q57[0].cat){bettingquestion001 = r2Q57;}
else if (data[picked] == r2Q58[0].cat){bettingquestion001 = r2Q58;}
else if (data[picked] == r2Q59[0].cat){bettingquestion001 = r2Q59;}
else if (data[picked] == r2Q60[0].cat){bettingquestion001 = r2Q60;}
bettingquestion();
}
function begin001() {
            c = 21;
            time001.innerHTML = 20;
	    document.getElementById("JTE").style.visibility = "visible";
	    document.getElementById("time001").style.top = "-140px";
	    document.getElementById("time001").style.visibility = "visible";
	    document.getElementById("message005").style.position = "relative";
	    document.getElementById("message005").style.top = "-150px";
	    document.getElementById("message006").style.position = "relative";
	    document.getElementById("message006").style.top = "-100px";
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
	    document.getElementById("time001").style.top = "-130px";
}
            message003.innerHTML = "";
            message005.innerHTML = "";
            message006.innerHTML = "";
             a++;
            qu001.innerHTML = "1 - " +question001[0].cat.toUpperCase();
	    document.getElementById("q1").focus();
	    unique();
        }
function JTE(){
document.getElementById("q1").focus();
if ((c != 0) && (c < 15)) {
if (j == 3) {
            c = 16;
             j--;
	    }
else if (j == 2) {
  if (h == 1) {
	    c = 16;
            j--;
	    document.getElementById("frame001").style.backgroundImage = "url('Singles___2JTEChal.png')";
	    }
  else if (h < 1) {
	    c = 16;
             j--;
	    document.getElementById("frame001").style.backgroundImage = "url('Singles___2JTE.png')";
	    }
}
else if (j == 1) {
  if (h == 1) {
	    c = 16;
             j--;
	    document.getElementById("frame001").style.backgroundImage = "url('Singles___1JTEChal.png')";
	    }
  else if (h < 1) {
	    c = 16;
             j--;
	   document.getElementById("frame001").style.backgroundImage = "url('Singles___1JTE.png')";
	    }
}
else if (j == 0) {
 if (h == 1) {
	    c = 16;
             j--;
	    document.getElementById("frame001").style.backgroundImage = "url('Singles___NoJTEChal.png')";
	     }
 else if (h < 1) {
	    c = 16;
             j--;
	    document.getElementById("frame001").style.backgroundImage = "url('Singles___NoJTE.png')";
	    }
}
else if (j < 0) {
            message005.innerHTML = "No repeats left!";
	    }
}
}
var bettingbool = 0;
var betpoints = 0;
var speed = 0;
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
	    document.getElementById("message004").style.top = "-190px";
if (bettingbool == 1) {
            score001.innerHTML = b+= betpoints;
            score001.innerHTML = b+= betpoints;
quescor++;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
            message006.innerHTML = "<br>";
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
     	    score002.innerHTML = s-=2;
           quescoropp--;
            message006.innerHTML = "<br>";
}
	     }
else if (r == 5) {
if (a == 15){
            score001.innerHTML = b+=2;
quescor++;
}
else if (a == 16){
            score001.innerHTML = b+=3;
quescor++;
}
else if (a == 17){
            score001.innerHTML = b+=5;
quescor++;
}
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
	     }
else if (r == 6) {
            score001.innerHTML = b+=1;
quescor++;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
	     }
}
function ChallengeDenied(){
	    document.getElementById("message004").style.top = "-190px";
if (j == 2) {
	    document.getElementById("frame001").style.backgroundImage = "url('Singles___NoChal.png')";
	    h--;
	     h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
}
else if (j == 1) {
	    document.getElementById("frame001").style.backgroundImage = "url('Singles___2JTE.png')";
	     h--;
	    h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
	          }
else if (j == 0) {
	    document.getElementById("frame001").style.backgroundImage = "url('Singles___1JTE.png')";
	    h--;
	     h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
	          }
 else if (j < 0) {
	    document.getElementById("frame001").style.backgroundImage = "url('Singles___NoJTE.png')";
	    h--;
	    h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
	      }
}
         function qcor() {
		document.getElementById("message003").style.top = "-150px";
		document.getElementById("message004").style.top = "-150px";
		document.getElementById("message006").style.top = "-150px";
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	    quescor++;
	    cormusic.play();
if (mc == 0){
            message003.innerHTML = "Correct!";
            message002.innerHTML = "";
	    message005.innerHTML = "";
	    message006.innerHTML = "";
            score001.innerHTML = b+=1;
	if ((a == 11) ||(a == 12)||(a == 13)){
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}  
	if (a == 14){
            message004.innerHTML = "<button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc != 0){
	    document.getElementById("message004").style.top = "-140px";
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
 message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 2){
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 3){
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 4){
 	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		}
}
}
        function qinc() {
		document.getElementById("message003").style.top = "-150px";
		document.getElementById("message004").style.top = "-150px";
		document.getElementById("message006").style.top = "-150px";
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
	    incmusic.play();
            c = "-";
if (mc == 0){
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	if (a == 11){
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
	if (a == 12){
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
	if (a == 13){
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
	if (a == 14){
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
	    document.getElementById("message004").style.top = "-140px";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
if (mc == 1){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[4].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 2){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[5].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 3){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[6].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 4){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[7].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
 	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
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
document.getElementById("message004").style.top = "-190px";
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
message006.innerHTML = competitorlist[0].id + " hit the 2 pointer." ;
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].id + " hit the 2 pointer." ;
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
message006.innerHTML = competitorlist[0].id + " missed the 2 pointer." ;
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].id + " missed the 2 pointer." ;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
answeredtwo++;
}
function simulateq3(){
document.getElementById("message004").style.top = "-190px";
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
message006.innerHTML = competitorlist[0].id + " hit the 3 pointer." ;
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].id + " hit the 3 pointer." ;
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
message006.innerHTML = competitorlist[0].id + " missed the 3 pointer." ;
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].id + " missed the 3 pointer." ;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
answeredthree++;
}
function simulateq5(){
document.getElementById("message004").style.top = "-190px";
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
else if (b - s >= 0){
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
function winKO(){
	    	document.getElementById("JTE").style.visibility = "hidden";
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
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>";
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
function loseKO(){
	    	document.getElementById("JTE").style.visibility = "hidden";
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
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>";
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
function winTKO(){
	    	document.getElementById("JTE").style.visibility = "hidden";
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
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" ;
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
function loseTKO(){
	    	document.getElementById("JTE").style.visibility = "hidden";
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
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>";
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
function win(){
	    	document.getElementById("JTE").style.visibility = "hidden";
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
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" ;
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
function lose(){
	    	document.getElementById("JTE").style.visibility = "hidden";
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
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>";
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
var mc = 0;
var open = 0;
function checker() {
document.getElementById("message003").style.top = "-140px";
document.getElementById("message004").style.top = "-140px";
document.getElementById("message006").style.top = "-140px";
	percentage = competitorlist[0].percentage;
	    steal = 0;
if (speed != 0)
{
checkerspeed();
}
if ((a == 2) && (bettingbool == 0)){
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
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question1 == question001[0].answ) || (question1 == question001[0].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[1].cat;
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
	    message006.innerHTML =  "Next category is " +question001[1].cat;
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
if ((a == 3) && (bettingbool == 0)){
	    var question02 = document.getElementById("q1").value.toUpperCase();
	    var question2 = myTrim(question02);
	    question2 = myTrim(question2);
if (question2.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question2, question001[1].answ);
if (typeof(question001[1].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question2, question001[1].answ3);
}
}
else if (question2.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question2 == question001[1].answ) || (question2 == question001[1].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 4) && (bettingbool == 0)){
	    var question03 = document.getElementById("q1").value.toUpperCase();
	    var question3 = myTrim(question03);
	    question3 = myTrim(question3);
if (question3.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question3, question001[2].answ);
if (typeof(question001[2].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question3, question001[2].answ3);
}
}
else if (question3.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question3 == question001[2].answ) || (question3 == question001[2].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 5) && (bettingbool == 0)){
	    var question04 = document.getElementById("q1").value.toUpperCase();
	    var question4 = myTrim(question04);
	    question4 = myTrim(question4);
if (question4.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question4, question001[3].answ);
if (typeof(question001[3].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question4, question001[3].answ3);
}
}
else if (question4.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question4 == question001[3].answ) || (question4 == question001[3].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 6) && (bettingbool == 0)){
	    var question05 = document.getElementById("q1").value.toUpperCase();
	    var question5 = myTrim(question05);
	    question5 = myTrim(question5);
if (question5.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question5, question001[4].answ);
if (typeof(question001[4].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question5, question001[4].answ3);
}
}
else if (question5.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
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
if ((a == 7) && (bettingbool == 0)){
	    var question06 = document.getElementById("q1").value.toUpperCase();
	    var question6 = myTrim(question06);
	    question6 = myTrim(question6);
if (question6.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question6, question001[5].answ);
if (typeof(question001[5].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question6, question001[5].answ3);
}
}
else if (question6.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question6 == question001[5].answ) || (question6 == question001[5].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 8) && (bettingbool == 0)){
	    var question07 = document.getElementById("q1").value.toUpperCase();
	    var question7 = myTrim(question07);
	    question7 = myTrim(question7);
if (question7.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question7, question001[6].answ);
if (typeof(question001[6].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question7, question001[6].answ3);
}
}
else if (question7.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question7 == question001[6].answ) || (question7 == question001[6].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 9) && (bettingbool == 0)){
	    var question08 = document.getElementById("q1").value.toUpperCase();
	    var question8 = myTrim(question08);
	    question8 = myTrim(question8);
if (question8.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question8, question001[7].answ);
if (typeof(question001[7].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question8, question001[7].answ3);
}
}
else if (question8.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question8 == question001[7].answ) || (question8 == question001[7].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if (b == 8) {
            	message003.innerHTML = "Perfect Round! You'll get a bonus question.";
	    	message006.innerHTML =  "Next category is " +question001[9].cat;
}
else if (b != 8) {
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
if ((a == 10) && (bettingbool == 0)){
	    var question017 = document.getElementById("q1").value.toUpperCase();
	    var question17 = myTrim(question017);
	    question17 = myTrim(question17);
if (question17.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question17, question001[9].answ);
if (typeof(question001[9].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question17, question001[9].answ3);
}
}
else if (question17.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question17 == question001[9].answ) || (question17 == question001[9].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[9].cat) || (competitorlist[0].strength2 == question001[9].cat) || (competitorlist[0].strength3 == question001[9].cat)){
percentage = competitorlist[0].strengthpercentage;
}
if (s == 8){
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
if (s == 8){
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
if ((a == 11) && (bettingbool == 0)){
	    var question09 = document.getElementById("q1").value.toUpperCase();
	    var question9 = myTrim(question09);
	    question9 = myTrim(question9);
if (question9.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question9, r2question001[0].answ);
if (typeof(r2question001[0].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question9, r2question001[0].answ3);
}
}
else if (question9.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question9 == r2question001[0].answ) || (question9 == r2question001[0].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=2;
quescor++;
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question9 != r2question001[0].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("sub").style.display = "none";
	    document.getElementById("mc").style.display = "none";
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[0].answ2;
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
	   quescountopp++;
	   posspointsopp+=2;
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
if ((a == 12) && (bettingbool == 0)){
	    var question010 = document.getElementById("q1").value.toUpperCase();
	    var question10 = myTrim(question010);
	    question10 = myTrim(question10);
if (question10.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question10, r2question001[1].answ);
if (typeof(r2question001[1].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question10, r2question001[1].answ3);
}
}
else if (question10.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question10 == r2question001[1].answ) || (question10 == r2question001[1].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("sub").style.display = "none";
	    document.getElementById("mc").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=2;
quescor++;
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
if ((a == 13) && (bettingbool == 0)){
	    var question011 = document.getElementById("q1").value.toUpperCase();
	    var question11 = myTrim(question011);
	    question11 = myTrim(question11);
if (question11.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question11, r2question001[2].answ);
if (typeof(r2question001[2].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question11, r2question001[2].answ3);
}
}
else if (question11.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question11 == r2question001[2].answ) || (question11 == r2question001[2].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
if ((a == 14) && (open == 0) && (mc == 0) && (bettingbool == 0)){
	    var question012 = document.getElementById("q1").value.toUpperCase();
	    var question12 = myTrim(question012);
	    question12 = myTrim(question12);
if (question12.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question12, r2question001[3].answ);
if (typeof(r2question001[3].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question12, r2question001[3].answ3);
}
}
else if (question12.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question12 == r2question001[3].answ) || (question12 == r2question001[3].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
if ((a == 15) && (bettingbool == 0)){
	    var question013 = document.getElementById("q1").value.toUpperCase();
	    var question13 = myTrim(question013);
	    question13 = myTrim(question13);
if (question13.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question13, question001[8].answ);
if (typeof(question001[8].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question13, question001[8].answ3);
}
}
else if (question13.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=2;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question13 == question001[8].answ) || (question13 == question001[8].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 16) && (bettingbool == 0)){
	    var question014 = document.getElementById("q1").value.toUpperCase();
	    var question14 = myTrim(question014);
	    question14 = myTrim(question14);
if (question14.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question14, threepointer001[0].answ);
if (typeof(threepointer001[0].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question14, threepointer001[0].answ3);
}
}
else if (question14.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=3;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question14 == threepointer001[0].answ) || (question14 == threepointer001[0].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 17) && (bettingbool == 0)){
	    var question015 = document.getElementById("q1").value.toUpperCase();
	    var question15 = myTrim(question015);
	    question15 = myTrim(question15);
if (question15.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question15, fivepointer001[0].answ);
if (typeof(fivepointer001[0].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question15, fivepointer001[0].answ3);
}
}
else if (question15.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=5;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question15 == fivepointer001[0].answ) || (question15 == fivepointer001[0].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 19) && (bettingbool == 0)){
	    var question016 = document.getElementById("q1").value.toUpperCase();
	    var question16 = myTrim(question016);
	    question16 = myTrim(question16);
if (question16.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question16, question001[10].answ);
if (typeof(question001[10].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question16, question001[10].answ3);
}
}
else if (question16.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question16 == question001[10].answ) || (question16 == question001[10].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 20) && (bettingbool == 0)){
	    var question018 = document.getElementById("q1").value.toUpperCase();
	    var question18 = myTrim(question018);
	    question18 = myTrim(question18);
if (question18.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question18, question001[11].answ);
if (typeof(question001[11].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question18, question001[11].answ3);
}
}
else if (question18.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question18 == question001[11].answ) || (question18 == question001[11].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 21) && (bettingbool == 0)){
	    var question019 = document.getElementById("q1").value.toUpperCase();
	    var question19 = myTrim(question019);
	    question19 = myTrim(question19);
if (question19.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question19, question001[12].answ);
if (typeof(question001[12].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question19, question001[12].answ3);
}
}
else if (question19.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question19 == question001[12].answ) || (question19 == question001[12].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 22) && (bettingbool == 0)){
	    var question020 = document.getElementById("q1").value.toUpperCase();
	    var question20 = myTrim(question020);
	    question20 = myTrim(question20);
if (question20.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question20, question001[13].answ);
if (typeof(question001[13].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question20, question001[13].answ3);
}
}
else if (question20.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question20 == question001[13].answ) || (question20 == question001[13].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 23) && (bettingbool == 0)){
	    var question021 = document.getElementById("q1").value.toUpperCase();
	    var question21 = myTrim(question021);
	    question21 = myTrim(question21);
if (question21.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question21, question001[14].answ);
if (typeof(question001[14].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question21, question001[14].answ3);
}
}
else if (question21.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question21 == question001[14].answ) || (question21 == question001[14].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 24) && (bettingbool == 0)){
	    var question022 = document.getElementById("q1").value.toUpperCase();
	    var question22 = myTrim(question022);
	    question22 = myTrim(question22);
if (question22.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question22, question001[15].answ);
if (typeof(question001[15].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question22, question001[15].answ3);
}
}
else if (question22.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question22 == question001[15].answ) || (question22 == question001[15].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 25) && (bettingbool == 0)){
	    var question023 = document.getElementById("q1").value.toUpperCase();
	    var question23 = myTrim(question023);
	    question23 = myTrim(question23);
if (question23.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question23, question001[16].answ);
if (typeof(question001[16].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question23, question001[16].answ3);
}
}
else if (question23.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question23 == question001[16].answ) || (question23 == question001[16].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if ((a == 26) && (bettingbool == 0)){
	    var question024 = document.getElementById("q1").value.toUpperCase();
	    var question24 = myTrim(question024);
	    question24 = myTrim(question24);
if (question24.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question24, question001[17].answ);
if (typeof(question001[17].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question24, question001[17].answ3);
}
}
else if (question24.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
console.log(quescount);
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question24 == question001[17].answ) || (question24 == question001[17].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
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
if (bettingbool == 1)
{
checkerbetting();
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
	document.getElementById("message002").style.top = "-130px";
        document.getElementById("message002").style.display= "block";
	    document.getElementById("message004").style.top = "-140px";
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
	    document.getElementById("chart").style.visibility = "hidden";
	    document.getElementById("JTE").style.display = "initial";
	    document.getElementById("JTE").style.visibility = "visible";
	    document.getElementById("chalacc").style.display = "initial";
	    document.getElementById("chalden").style.display = "initial";
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
	    document.getElementById("time001").style.top = "-140px";
            if (a == 2) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[1].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[1].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
	        document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
            qu001.innerHTML = "2 - " +question001[1].cat.toUpperCase();
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
                message001.innerHTML = question001[2].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[2].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
              a++;
                qu001.innerHTML = "3 - " +question001[2].cat.toUpperCase();
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
                message001.innerHTML = question001[3].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[3].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
                qu001.innerHTML = "4 - " +question001[3].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
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
                message001.innerHTML = question001[4].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[4].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 		qu001.innerHTML = "5 - " +question001[4].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
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
                message001.innerHTML = question001[5].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[5].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 		qu001.innerHTML = "6 - " +question001[5].cat.toUpperCase();
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
                message001.innerHTML = question001[6].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[6].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
                qu001.innerHTML = "7 - " +question001[6].cat.toUpperCase();
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
                message001.innerHTML = question001[7].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[7].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
	        a++;
 	        qu001.innerHTML = "8 - " +question001[7].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
else if ((a == 9) && (b != 8)){
if (s == 8){
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
		else if ((a == 9) && (b == 8)){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[9].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[9].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
	         a++;
		document.getElementById("qu002").style.display = "none";
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
            else if (a == 10) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("message002").style.top = "-130px";
	document.getElementById("message003").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[0].ques;
                message002.innerHTML = input + r2question001[0].option + buttons;
if (r2question001[0].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
 	        qu001.innerHTML = "1 - " +r2question001[0].cat.toUpperCase();
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
            else if (a == 11) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[1].ques;
                message002.innerHTML = input + r2question001[1].option + buttons;
if (r2question001[1].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
 	        qu001.innerHTML = "2 - " +r2question001[1].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 12) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[2].ques;
                message002.innerHTML = input + r2question001[2].option + buttons;
if (r2question001[2].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
 	        qu001.innerHTML = "3 - " +r2question001[2].cat.toUpperCase();
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
                message001.innerHTML = r2question001[3].ques;
                message002.innerHTML = input + r2question001[3].option + buttons;
if (r2question001[3].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
 	        qu001.innerHTML = "4 - " +r2question001[3].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            	    message004.innerHTML = "<button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            } 
            else if (a == 14) {
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
if (question001[8].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
                round001.innerHTML = r++;
                round001.innerHTML = 5;
 	        qu001.innerHTML = "1 - " +question001[8].cat.toUpperCase();
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
            else if (a == 15) {
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
if (threepointer001[0].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 	        qu001.innerHTML = "2 - " +threepointer001[0].cat.toUpperCase();
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
            else if (a == 16) {
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
if (fivepointer001[0].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
 	        qu001.innerHTML = "3 - " +fivepointer001[0].cat.toUpperCase();
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
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[10].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[10].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
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
    else if ((a == 19) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[11].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[11].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
              a++;
		document.getElementById("qu002").style.display = "none";
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
else if ((a == 19) && (b != s )){
		if (b > s){
                  win();
	}
	else if (b < s){
                 lose();
	}
}
  else if ((a == 20) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[12].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[12].ques.length > 125){
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
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
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
 else if ((a == 20) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
	    	lose();
	}
}
  else if ((a == 21) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[13].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[13].ques.length > 125){
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
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
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
 else if ((a == 21) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
	    	lose();
	}
}
  else if ((a == 22) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[14].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[14].ques.length > 125){
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
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
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
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[15].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[15].ques.length > 125){
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
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
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
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[16].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[16].ques.length > 125){
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
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
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
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[17].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[17].ques.length > 125){
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
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
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
 else if ((a == 25) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
		lose();
	}
}
   else if ((a == 26) && (b == s )){
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
                message002.innerHTML = "";
                message005.innerHTML = "";
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
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
		message005.innerHTML = "<strong><font size=4>SUDDEN DEATH</br></br>QUESTIONS IN RANDOM CATEGORIES GIVEN TO COMPETITORS</br></br>COMPETITORS HAVE 20 SECONDS TO SUBMIT THEIR ANSWER</br></br>ALL QUESTIONS WORTH 1 POINT</br></br>FIRST COMPETITOR WITH A LEAD WINS</strong>";
                 a++;
		round001.innerHTML = r++;
		document.getElementById("round001").style.display = "none";
 		round002.innerHTML = "OVERTIME";
 		qu001.innerHTML = "";
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
document.getElementById("message003").style.top = "-140px";
document.getElementById("message004").style.top = "-140px";
document.getElementById("message006").style.top = "-140px";
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
	    message006.innerHTML =  "Next category is " +question001[1].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 3){
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
else if (a == 4){
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
else if (a == 5){
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
else if (a == 6){
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
else if (a == 7){
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
else if (a == 8){
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
else if (a == 9){
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
else if (a == 10){
if ((competitorlist[0].strength1 == question001[9].cat) || (competitorlist[0].strength2 == question001[9].cat) || (competitorlist[0].strength3 == question001[9].cat)){
percentage = competitorlist[0].strengthpercentage;
}
	   posspoints+=1;
if (s == 8){
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
else if (a == 11){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
else if (a == 12){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
else if (a == 13){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
else if ((a == 14) && (open == 0) && (mc == 0)){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
else if (a == 15){
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[8].answ2;
	        incmusic.play();
if (s - b > 0){
	    	message006.innerHTML =  "Next category is " +threepointer001[0].cat;
}
            	message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (a == 16){
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + threepointer001[0].answ2;
	        incmusic.play();
if (s - b > 0){
	    	message006.innerHTML =  "Next category is " +fivepointer001[0].cat;
}
            	message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (a == 17){
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + fivepointer001[0].answ2;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (a == 19){
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
else if (a == 20){
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
else if (a == 21){
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
else if (a == 22){
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
else if (a == 23){
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
else if (a == 24){
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
else if (a == 25){
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
else if (a == 26){
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
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (open == 2)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (open == 3)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (open == 4)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
		document.getElementById("sub").style.visibility = "hidden";
	    	document.getElementById("sub").style.display = "none";
           	message003.innerHTML = "The correct answer is " + compcat[3].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=2;
stealopp--;
if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if ((mc == 1) && (bettingbool == 0))
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
           	message003.innerHTML = "The correct answer is " + compcat[4].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=1;
stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
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
else if ((mc == 2) && (bettingbool == 0))
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
           	message003.innerHTML = "The correct answer is " +compcat[5].answ2 ;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=1;
stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
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
else if ((mc == 3) && (bettingbool == 0))
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
           	message003.innerHTML = "The correct answer is " +compcat[6].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=1;
stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
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
else if ((mc == 4) && (bettingbool == 0))
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
           	message003.innerHTML = "The correct answer is " +compcat[7].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=1;
stealmc--;
if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
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
if (bettingbool == 1){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
		document.getElementById("sub").style.visibility = "hidden";
	    	document.getElementById("sub").style.display = "none";
            message003.innerHTML = "The correct answer is " + bettingquestion001[8].answ2 + "<br/></br/>" + "You lost " + betpoints + " points.";
	    message005.innerHTML = "";
	    message006.innerHTML = "";
            score001.innerHTML = b -= betpoints;
 posspoints+=3;
	    incmusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=nextspeed()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    simulatebetting();
}
if (speed == 2){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + speedquestion001[0].answ2;
	    message005.innerHTML = "";
	    message006.innerHTML = "";
            score001.innerHTML = b -= 1;
 posspoints+=1;
	    incmusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
if (speed == 3){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + speedquestion001[1].answ2;
	    message005.innerHTML = "";
	    message006.innerHTML = "";
            score001.innerHTML = b -= 1;
 posspoints+=1;
	    incmusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
if (speed == 4){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + speedquestion001[2].answ2;
	    message005.innerHTML = "";
	    message006.innerHTML = "";
            score001.innerHTML = b -= 1;
 posspoints+=1;
	    incmusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
if (speed == 5){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + speedquestion001[3].answ2;
	    message005.innerHTML = "";
	    message006.innerHTML = "";
            score001.innerHTML = b -= 1;
 posspoints+=1;
	    incmusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
if (speed == 6){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + speedquestion001[4].answ2;
	    message005.innerHTML = "";
	    message006.innerHTML = "";
            score001.innerHTML = b -= 1;
 posspoints+=1;
	    incmusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
                window.clearInterval(update);
                time001.innerHTML = "Time's up!";
		document.getElementById("time001").style.fontSize = "100%";
		document.getElementById("time001").style.fontWeight = "normal";
	    document.getElementById("q1").disabled = true;
            }
        }
        update = setInterval("timer001()", 1000);

function speedtimer001() {
            t = t - 1;
            if (t < 1) {
document.getElementById("message003").style.top = "-190px";
document.getElementById("message004").style.top = "-190px";
document.getElementById("message006").style.top = "-190px";
if (nobody == 0){
		var chance = Math.random() * 100;
		percentage = competitorlist[0].percentage + 5;
	if (chance < percentage){
		score002.innerHTML = s += 1;
 		posspointsopp+=1;
		quescountopp++
		quescoropp++;
	    	message005.innerHTML = "";
		message003.innerHTML = competitorlist[0].id + " hit the question.";
                time001.innerHTML = "";
                message002.innerHTML = "";
		}
	else if (chance >= percentage){
		score002.innerHTML = s -= 1;
 		posspointsopp+=1;
		quescountopp++
	    	message005.innerHTML = "";
		message003.innerHTML = competitorlist[0].id + " missed the question.";
                time001.innerHTML = "";
                message002.innerHTML = "";
		}
}
else if (nobody == 1){
		message003.innerHTML = "Nobody hit the question.";
		nobody = 0;
 		posspointsopp+=1;
 		posspoints+=1;
}
if (speed == 1) {
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
            message006.innerHTML = "The correct answer is " + speedquestion001[0].answ2;
}
else if (speed == 2) {
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
            message006.innerHTML = "The correct answer is " + speedquestion001[1].answ2;
}
else if (speed == 3) {
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
            message006.innerHTML = "The correct answer is " + speedquestion001[2].answ2;
}
else if (speed == 4) {
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
            message006.innerHTML = "The correct answer is " + speedquestion001[3].answ2;
}
else if (speed == 5) {
            message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
            message006.innerHTML = "The correct answer is " + speedquestion001[4].answ2;
}
            	window.clearInterval(update);
		speed++;
        }
}

function repeat001() {
            location.reload();
        }

$("#message002").keypress(function(event) { 
         if (event.keyCode === 13){ 
                 $("#submit").click(); 

            } 
});
$("#message004").keypress(function(event) { 
         if (event.keyCode === 13){ 
                 $("#submit3").click(); 
            } 
});

  var storage = [];  
function next003() {
	    document.getElementById("message004").style.top = "-140px";
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
	    	document.getElementById("qu002").style.display = "initial";
	    	document.getElementById("JTE").style.display = "none";
		document.getElementById("chart").style.position = "relative";
		document.getElementById("chart").style.top = "-180px";
	    	document.getElementById("chart").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "none";
	    	document.getElementById("message004").style.display = "none";
	    	document.getElementById("message005").style.display = "none";
		round001.innerHTML = 2;
 		qu001.innerHTML = "";
	        var place = " ";
                message001.innerHTML = "Spin the Wheel.";
message002.innerHTML = place + "<br/></br>" + "<button class=buttons009 id=spin onclick=spin()>Spin</button>";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
            	message003.innerHTML = "<button id=nextbutton class=buttons002 onclick=next001()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "none";
	   	document.getElementById("chalden").style.display = "none";
	    	document.getElementById("nextbutton").style.visibility = "hidden";  
		document.getElementById("message002").style.top = "-180px";
		document.getElementById("message003").style.top = "-180px";
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
for (var i = 0; i < checkboxes.length; i++) {
  storage.push(checkboxes[i].value)
}
var chosen = [r2Q1[0].cat, r2Q2[0].cat, r2Q3[0].cat, r2Q4[0].cat, r2Q5[0].cat, r2Q6[0].cat, r2Q7[0].cat, r2Q8[0].cat, r2Q9[0].cat, r2Q10[0].cat, r2Q11[0].cat, r2Q12[0].cat, r2Q13[0].cat, r2Q14[0].cat, r2Q15[0].cat, r2Q16[0].cat, r2Q17[0].cat, r2Q18[0].cat, r2Q19[0].cat, r2Q20[0].cat, r2Q21[0].cat, r2Q22[0].cat, r2Q23[0].cat, r2Q24[0].cat, r2Q25[0].cat, r2Q26[0].cat, r2Q27[0].cat, r2Q28[0].cat, r2Q29[0].cat, r2Q30[0].cat, r2Q31[0].cat, r2Q32[0].cat, r2Q33[0].cat, r2Q34[0].cat, r2Q35[0].cat, r2Q36[0].cat, r2Q37[0].cat, r2Q38[0].cat, r2Q39[0].cat, r2Q40[0].cat, r2Q41[0].cat, r2Q42[0].cat, r2Q43[0].cat, r2Q44[0].cat, r2Q45[0].cat, r2Q46[0].cat, r2Q47[0].cat, r2Q48[0].cat, r2Q49[0].cat, r2Q50[0].cat, r2Q51[0].cat, r2Q52[0].cat, r2Q53[0].cat, r2Q54[0].cat, r2Q55[0].cat, r2Q56[0].cat, r2Q57[0].cat, r2Q58[0].cat, r2Q59[0].cat, r2Q60[0].cat];
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
if ( chosen[i] == storage[4]){ 
chosen.splice(i, 1);
}
if ( chosen[i] == storage[5]){ 
chosen.splice(i, 1);
}
}
chosen= shuffle(chosen); 
data[0] = "Spinner's Choice";
data[1] = storage[0];
data[2] = storage[1];
data[3] = storage[2];
data[4] = storage[3];
data[5] = storage[4];
data[6] = "Opponent's Choice";
data[7] =  storage[5];
data[8] =  chosen[0];
data[9] =  chosen[1];
data[10] = chosen[2];
data[11] = chosen[3];
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

function bettinground() {
        open = 0;
	mc = 0 ;
	    	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
		document.getElementById("qu002").style.display = "initial";
	document.getElementById("message004").style.top = "-140px";
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
		round001.innerHTML = 2;
 		qu001.innerHTML = "";
                message001.innerHTML = "Click Next to proceed.";
		message002.innerHTML = "";
                message004.innerHTML = "";
                round001.innerHTML = r++;
message005.innerHTML = "<strong><font size=4>ROUND THREE</font><br/></br>COMPETITOR SPINS THE WHEEL ONCE TO DETERMINE CATEGORY</br></br>EACH COMPETITOR WAGERS BETWEEN 0-3 POINTS</br></br>POINTS GO UP OR DOWN BY THE</br>WAGERED AMOUNT BASED ON THE ANSWER</br></br>REPEATS & CHALLENGES STILL IN EFFECT</strong>";
                message006.innerHTML = "";
            	message003.innerHTML = "<button id=bet0 class=buttons002 onclick=bettinground2()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		document.getElementById("message003").style = "initial";
	    	document.getElementById("message006").style.top = "-140px";
	    	document.getElementById("chalacc").style.display = "none";
	    	document.getElementById("chalden").style.display = "none";
}

function bet0() {
betpoints = 0;
message006.innerHTML = "<button id=bet0 class=buttons002 onclick=betting()>Next</button>";
document.getElementById("message006").style.top = "-220px";
message003.innerHTML = "You bet 0 points." + "<br/><br/></br>";
message001.innerHTML = "Click Next to proceed.";
}
function bet1() {
betpoints = 1;
message006.innerHTML = "<button id=bet1 class=buttons002 onclick=betting()>Next</button>";
document.getElementById("message006").style.top = "-220px";
message003.innerHTML = "You bet 1 point." + "<br/><br/></br>";
message001.innerHTML = "Click Next to proceed.";
}
function bet2() {
betpoints = 2;
message006.innerHTML = "<button id=bet2 class=buttons002 onclick=betting()>Next</button>";
document.getElementById("message006").style.top = "-220px";
message003.innerHTML = "You bet 2 points." + "<br/><br/></br>";
message001.innerHTML = "Click Next to proceed.";
}
function bet3() {
betpoints = 3;
message006.innerHTML = "<button id=bet3 class=buttons002 onclick=betting()>Next</button>";
document.getElementById("message006").style.top = "-220px";
message003.innerHTML = "You bet 3 points." + "<br/><br/></br>";
message001.innerHTML = "Click Next to proceed.";
}

function bettingquestion() {	
	document.getElementById("message002").style.top = "-130px";
	document.getElementById("message003").style.top = "-140px";
	document.getElementById("message006").style.top = "-140px";
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
		bettingbool = 1;
	    document.getElementById("time001").style.display = "initial";
	    document.getElementById("chart").style.visibility = "hidden";
	    document.getElementById("JTE").style.display = "initial";
	    document.getElementById("JTE").style.visibility = "visible";
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	    document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = bettingquestion001[8].ques;
                message002.innerHTML = input + bettingquestion001[8].option + buttons;
if (bettingquestion001[8].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
                message005.innerHTML = "";
                message006.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 	        qu001.innerHTML = "BETTING ROUND - " +bettingquestion001[8].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=nextspeed()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "initial";
	    	document.getElementById("chalacc").style.display = "initial";
}
}
function simulatebetting() {
 		posspointsopp+=3;
		quescountopp++
	var betpercentage = competitorlist[0].percentage;
	var betchoice = 0;
	var chance1 = Math.random() * 100;
	var chance2 = Math.random() * 100;
if (s >= 3) {
if (chance1 < 100){betchoice = 1;}		
if (chance1 < 70){betchoice = 2;}
if (chance1 < 35){betchoice = 3;}
if (chance1 < 5){betchoice = 0;}
}
else if (s >= 2) {
if (chance1 < 100){betchoice = 1;}		
if (chance1 < 60){betchoice = 2;}
if (chance1 < 5){betchoice = 0;}
}
else if (s >= 1) {
if (chance1 < 100){betchoice = 1;}		
if (chance1 < 5){betchoice = 0;}
}
else if (s >= 0) {betchoice = 0;}
if ((s >= 3) && ((competitorlist[0].strength1 == bettingquestion001[0].cat) || (competitorlist[0].strength2 == bettingquestion001[0].cat) || (competitorlist[0].strength3 == bettingquestion001[0].cat))){
betpercentage = competitorlist[0].strengthpercentage;
betchoice = 3;
}
else if ((s >= 2) && ((competitorlist[0].strength1 == bettingquestion001[0].cat) || (competitorlist[0].strength2 == bettingquestion001[0].cat) || (competitorlist[0].strength3 == bettingquestion001[0].cat))){
betpercentage = competitorlist[0].strengthpercentage;
betchoice = 2;
}
else if ((s >= 1) && ((competitorlist[0].strength1 == bettingquestion001[0].cat) || (competitorlist[0].strength2 == bettingquestion001[0].cat) || (competitorlist[0].strength3 == bettingquestion001[0].cat))){
betpercentage = competitorlist[0].strengthpercentage;
betchoice = 1;
}
if (chance2 < betpercentage){
		score002.innerHTML = s+= betchoice;
		message006.innerHTML = competitorlist[0].id + " gained " + betchoice + " points.";
		quescoropp++;
		}
if (chance2 >= betpercentage){
		score002.innerHTML = s-= betchoice;
		message006.innerHTML = competitorlist[0].id + " lost " + betchoice + " points.";
}
}
function checkerbetting(){
	    var betting01 = document.getElementById("q1").value.toUpperCase();
	    var betting1 = myTrim(betting01);
	    betting1 = myTrim(betting1);
if (betting1.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(betting1, bettingquestion001[8].answ);
if (typeof(bettingquestion001[8].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(betting1, bettingquestion001[8].answ3);
}
}
else if (betting1.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
		quescount++;
           console.log(quescount);
		posspoints+=3;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((betting1 == bettingquestion001[8].answ) || (betting1 == bettingquestion001[8].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!" + "<br/></br/>" + "You gained " + betpoints + " points.";
            score001.innerHTML = b += betpoints;
quescor++;
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=nextspeed()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
simulatebetting();
	}
        else if (betting1 != bettingquestion001[8].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + bettingquestion001[8].answ2 + "<br/></br/>" + "You lost " + betpoints + " points.";
	    message005.innerHTML = "";
            score001.innerHTML = b -= betpoints;
	    incmusic.play();
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button><br /><br /><button class=buttons002 onclick=nextspeed()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
simulatebetting();
	}	   
}
function bettinground2() {
	    	document.getElementById("qu002").style.display = "initial";
	    	document.getElementById("JTE").style.display = "none";
		document.getElementById("chart").style.position = "relative";
		document.getElementById("chart").style.top = "-180px";
	    	document.getElementById("chart").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "none";
	    	document.getElementById("message004").style.display = "none";
	    	document.getElementById("message005").style.display = "none";
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
		round001.innerHTML = 3;
 		qu001.innerHTML = "";
                message001.innerHTML = "Spin the Wheel.";
		message002.innerHTML = "<button class=buttons009 id=spin onclick=bettingspin()>Spin</button>";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
            	message003.innerHTML = "<button id=nextbutton class=buttons002 onclick=next001()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "none";
	   	document.getElementById("chalden").style.display = "none";
	    	document.getElementById("nextbutton").style.visibility = "hidden";  
		document.getElementById("message002").style.top = "-180px";
		document.getElementById("message003").style.top = "-180px";
		document.getElementById("message006").style.top = "-180px";
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
	    document.getElementById("time001").style.top = "-140px";
		bettingbool = 0;
	    document.getElementById("chart").style.visibility = "hidden";
	    document.getElementById("time001").style.display = "initial";
if (speed == 1){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
            window.clearInterval(update);
                update = setInterval("timer001()", 1000);
                c = 5;
                t = "-";
                time001.innerHTML = 5;
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
		document.getElementById("message002").style.top = "-170px";
                message001.innerHTML = speedquestion001[0].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (speedquestion001[0].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		speed++;
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 	        qu001.innerHTML = "SPEED ROUND - " + "QUESTION 1";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "initial";
	    	document.getElementById("chalacc").style.display = "initial";
		}
}
else if (speed == 2){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
            window.clearInterval(update);
                update = setInterval("timer001()", 1000);
                c = 5;
                t = "-";
                time001.innerHTML = 5;
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
		document.getElementById("message002").style.top = "-170px";
                message001.innerHTML = speedquestion001[1].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (speedquestion001[1].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		speed++;
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 	        qu001.innerHTML = "SPEED ROUND - " + "QUESTION 2";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "initial";
	    	document.getElementById("chalacc").style.display = "initial";
		}
}
else if (speed == 3){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
            window.clearInterval(update);
                update = setInterval("timer001()", 1000);
                c = 5;
                t = "-";
                time001.innerHTML = 5;
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
		document.getElementById("message002").style.top = "-170px";
                message001.innerHTML = speedquestion001[2].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (speedquestion001[2].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		speed++;
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 	        qu001.innerHTML = "SPEED ROUND - " + "QUESTION 3";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "initial";
	    	document.getElementById("chalacc").style.display = "initial";
		}
}
else if (speed == 4){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
            window.clearInterval(update);
                update = setInterval("timer001()", 1000);
                c = 5;
                t = "-";
                time001.innerHTML = 5;
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
		document.getElementById("message002").style.top = "-170px";
                message001.innerHTML = speedquestion001[3].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (speedquestion001[3].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		speed++;
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 	        qu001.innerHTML = "SPEED ROUND - " + "QUESTION 4";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "initial";
	    	document.getElementById("chalacc").style.display = "initial";
		}
}
else if (speed == 5){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
            window.clearInterval(update);
                update = setInterval("timer001()", 1000);
                c = 5;
                t = "-";
                time001.innerHTML = 5;
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
		document.getElementById("message002").style.top = "-170px";
                message001.innerHTML = speedquestion001[4].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (speedquestion001[4].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
		speed++;
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 	        qu001.innerHTML = "SPEED ROUND - " + "QUESTION 5";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "initial";
	    	document.getElementById("chalacc").style.display = "initial";
		}
}
}
var nobody = 0 ; 
function speedquestions() {	
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
	    document.getElementById("time001").style.top = "-140px";
	    document.getElementById("chart").style.visibility = "hidden";
if (speed == 1){
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
            window.clearInterval(update);       
		var chance = Math.floor(Math.random() * 91) + (competitorlist[0].percentage / 10);
if (chance < 20){t = 15; nobody = 1}
else if (chance < 25){t = 10; nobody = 0}
else if (chance < 30){t = 4; nobody = 0}
else if (chance < 60){t = 3; nobody = 0}
else if (chance < 100){t = 2; nobody = 0}
update = setInterval("speedtimer001()", 1000);
                message001.innerHTML = speedquestion001[0].ques;
if (speedquestion001[0].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
                message002.innerHTML = "";
                message003.innerHTML = "<button class=buzzer onclick=speedquestions2()>Buzz</button>";
                message005.innerHTML = "";
                message006.innerHTML = "";
                time001.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 	        qu001.innerHTML = "SPEED ROUND - " + "QUESTION 1";
                message004.innerHTML = "";
}
else if (speed == 2){
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
            window.clearInterval(update);
		var chance = Math.floor(Math.random() * 91) + (competitorlist[0].percentage / 10);
if (chance < 20){t = 15; nobody = 1}
else if (chance < 25){t = 10; nobody = 0}
else if (chance < 30){t = 4; nobody = 0}
else if (chance < 60){t = 3; nobody = 0}
else if (chance < 100){t = 2; nobody = 0}
update = setInterval("speedtimer001()", 1000);
                message001.innerHTML = speedquestion001[1].ques;
if (speedquestion001[1].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
                message002.innerHTML = "";
                message003.innerHTML = "<button class=buzzer onclick=speedquestions2()>Buzz</button>";
                message005.innerHTML = "";
                message006.innerHTML = "";
                time001.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 	        qu001.innerHTML = "SPEED ROUND - " + "QUESTION 2";
                message004.innerHTML = "";
}
else if (speed == 3){
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
            window.clearInterval(update);
		var chance = Math.floor(Math.random() * 91) + (competitorlist[0].percentage / 10);
if (chance < 20){t = 15; nobody = 1}
else if (chance < 25){t = 10; nobody = 0}
else if (chance < 30){t = 4; nobody = 0}
else if (chance < 60){t = 3; nobody = 0}
else if (chance < 100){t = 2; nobody = 0}
update = setInterval("speedtimer001()", 1000);
                message001.innerHTML = speedquestion001[2].ques;
if (speedquestion001[2].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
                message002.innerHTML = "";
                message003.innerHTML = "<button class=buzzer onclick=speedquestions2()>Buzz</button>";
                message005.innerHTML = "";
                message006.innerHTML = "";
                time001.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 	        qu001.innerHTML = "SPEED ROUND - " + "QUESTION 3";
                message004.innerHTML = "";
}
else if (speed == 4){
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
            window.clearInterval(update);
		var chance = Math.floor(Math.random() * 91) + (competitorlist[0].percentage / 10);
if (chance < 20){t = 15; nobody = 1}
else if (chance < 25){t = 10; nobody = 0}
else if (chance < 30){t = 4; nobody = 0}
else if (chance < 60){t = 3; nobody = 0}
else if (chance < 100){t = 2; nobody = 0}
update = setInterval("speedtimer001()", 1000);
                message001.innerHTML = speedquestion001[3].ques;
if (speedquestion001[3].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
                message002.innerHTML = "";
                message003.innerHTML = "<button class=buzzer onclick=speedquestions2()>Buzz</button>";
                message005.innerHTML = "";
                message006.innerHTML = "";
                time001.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 	        qu001.innerHTML = "SPEED ROUND - " + "QUESTION 4";
                message004.innerHTML = "";
}
else if (speed == 5){
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
            window.clearInterval(update);
		var chance = Math.floor(Math.random() * 91) + (competitorlist[0].percentage / 10);
if (chance < 20){t = 15; nobody = 1}
else if (chance < 25){t = 10; nobody = 0}
else if (chance < 30){t = 4; nobody = 0}
else if (chance < 60){t = 3; nobody = 0}
else if (chance < 100){t = 2; nobody = 0}
update = setInterval("speedtimer001()", 1000);
                message001.innerHTML = speedquestion001[4].ques;
if (speedquestion001[4].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
                message002.innerHTML = "";
                message003.innerHTML = "<button class=buzzer onclick=speedquestions2()>Buzz</button>";
                message005.innerHTML = "";
                message006.innerHTML = "";
                time001.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 	        qu001.innerHTML = "SPEED ROUND - " + "QUESTION 5";
                message004.innerHTML = "";
}
}

function checkerspeed(){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
if (speed == 2){
	    var speed01 = document.getElementById("q1").value.toUpperCase();
	    var speed1 = myTrim(speed01);
	    speed1 = myTrim(speed1);
if (speed1.length >  4){
similarity1 = stringSimilarity.compareTwoStrings(speed1, speedquestion001[0].answ);
if (typeof(speedquestion001[0].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(speed1, speedquestion001[0].answ3);
}
}
else if (speed1.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
            t = "-";
		quescount++;
           console.log(quescount);
		posspoints++;
		document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((speed1 == speedquestion001[0].answ) || (speed1 == speedquestion001[0].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
            score001.innerHTML = b += 1;
quescor++
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
        else if (speed1 != speedquestion001[0].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + speedquestion001[0].answ2;
	    message005.innerHTML = "";
            score001.innerHTML = b -= 1;
	    incmusic.play();
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button><br /><br /><button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
}	   
if (speed == 3){
	    var speed02 = document.getElementById("q1").value.toUpperCase();
	    var speed2 = myTrim(speed02);
	    speed2 = myTrim(speed2);
if (speed2.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(speed2, speedquestion001[1].answ);
if (typeof(speedquestion001[1].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(speed2, speedquestion001[1].answ3);
}
}
else if (speed2.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
            t = "-";
		quescount++;
           console.log(quescount);
		posspoints++;
		document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((speed2 == speedquestion001[1].answ) || (speed2 == speedquestion001[1].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
            score001.innerHTML = b += 1;
quescor++
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
        else if (speed2 != speedquestion001[1].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + speedquestion001[1].answ2;
	    message005.innerHTML = "";
            score001.innerHTML = b -= 1;
	    incmusic.play();
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button><br /><br /><button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
}	   
if (speed == 4){
	    var speed03 = document.getElementById("q1").value.toUpperCase();
	    var speed3 = myTrim(speed03);
	    speed3 = myTrim(speed3);
if (speed3.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(speed3, speedquestion001[2].answ);
if (typeof(speedquestion001[2].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(speed3, speedquestion001[2].answ3);
}
}
else if (speed3.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
            t = "-";
		quescount++;
           console.log(quescount);
		posspoints++;
		document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((speed3 == speedquestion001[2].answ) || (speed3 == speedquestion001[2].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
            score001.innerHTML = b += 1;
quescor++
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
        else if (speed3 != speedquestion001[2].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + speedquestion001[2].answ2;
	    message005.innerHTML = "";
            score001.innerHTML = b -= 1;
	    incmusic.play();
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button><br /><br /><button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
}	   
if (speed == 5){
	    var speed04 = document.getElementById("q1").value.toUpperCase();
	    var speed4 = myTrim(speed04);
	    speed4 = myTrim(speed4);
if (speed4.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(speed4, speedquestion001[3].answ);
if (typeof(speedquestion001[3].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(speed4, speedquestion001[3].answ3);
}
}
else if (speed4.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
            t = "-";
		quescount++;
           console.log(quescount);
		posspoints++;
		document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((speed4 == speedquestion001[3].answ) || (speed4 == speedquestion001[3].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
            score001.innerHTML = b += 1;
quescor++
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
        else if (speed4 != speedquestion001[3].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + speedquestion001[3].answ2;
	    message005.innerHTML = "";
            score001.innerHTML = b -= 1;
	    incmusic.play();
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button><br /><br /><button class=buttons002 onclick=speedquestions()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
}	   
if (speed == 6){
	    var speed05 = document.getElementById("q1").value.toUpperCase();
	    var speed5 = myTrim(speed05);
	    speed5 = myTrim(speed5);
if (speed5.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(speed5, speedquestion001[4].answ);
if (typeof(speedquestion001[4].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(speed5, speedquestion001[4].answ3);
}
}
else if (speed5.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
            t = "-";
		quescount++;
           console.log(quescount);
		posspoints++;
		document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((speed5 == speedquestion001[4].answ) || (speed5 == speedquestion001[4].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
            score001.innerHTML = b += 1;
quescor++
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
        else if (speed5 != speedquestion001[4].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + speedquestion001[4].answ2;
	    message005.innerHTML = "";
            score001.innerHTML = b -= 1;
	    incmusic.play();
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button><br /><br /><button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
}	   
}

function nextspeed() {

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
if (s - b > 16){
loseKO();
}
else if (b -s > 16){
winKO();
}
else{
		bettingbool = 0;
		mc = 10;
		open = 10;
		speed++;
	    	document.getElementById("qu002").style.display = "initial";
	   	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
		round001.innerHTML = 4;
 		qu001.innerHTML = "";
                message001.innerHTML = "Click the Next button";
		message002.innerHTML = "";
                message004.innerHTML = "";
                message006.innerHTML = "";
message005.innerHTML = "<strong><font size=4>ROUND FOUR</font><br/></br>COMPETITORS WILL BE ASKED 5 QUESTIONS</br></br>COMPETITORS MUST BUZZ IN AND SUBMIT THEIR ANSWER WITHIN 5 SECONDS</br></br>COMPETITORS EARN 1 POINT FOR CORRECT ANSWERS</br>INCORRECT ANSWERS LOSE 1 POINT</br></br>NO REPEATS AVAILABLE IN THIS ROUND</strong>";
            	message003.innerHTML = "<button id=nextbutton class=buttons002 onclick=speedquestions()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		document.getElementById("message003").style = "initial";
		document.getElementById("message004").style = "initial";
	    	document.getElementById("message006").style.top = "-140px";
	    	document.getElementById("chalacc").style.display = "none";
	    	document.getElementById("chalden").style.display = "none";
}
}

function next002() {
	    document.getElementById("message004").style.top = "-140px";
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
	    	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
		document.getElementById("qu002").style.display = "initial";
		round001.innerHTML = 2;
 		qu001.innerHTML = "";
                message001.innerHTML = "Click the Next button";
		message002.innerHTML = "";
                message004.innerHTML = "";
		message005.innerHTML = "<strong><font size=4>ROUND TWO</font><br/></br>COMPETITORS SPIN THE CATEGORY WHEEL</br>YOU CAN RE-SPIN ONCE</br></br>YOU WILL GET 4 QUESTIONS FROM CHOSEN CATEGORY</br></br>QUESTIONS ARE WORTH 2 POINTS</br>IF MULTIPLE CHOICE IS REQUESTED VALUE DROPS TO 1 POINT</br></br>OPPONENTS MAY STEAL IF COMPETITOR GIVES A WRONG ANSWER</br></br>REPEATS & CHALLENGES STILL IN EFFECT</strong>";
                message006.innerHTML = "";
            	message003.innerHTML = "<button id=nextbutton class=buttons002 onclick=next003()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "none";
	    	document.getElementById("chalden").style.display = "none";
}

function next005() {
        open = 0;
mc = 0;
	    document.getElementById("message004").style.top = "-140px";
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
if (s - b > 10){
loseKO();
}
else if (b -s > 10){
winKO();
}
else{
speed = 0;
	    	document.getElementById("qu002").style.display = "initial";
	   	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
		round001.innerHTML = 5;
 		qu001.innerHTML = "";
                message001.innerHTML = "Click the Next button";
		message002.innerHTML = "";
                message004.innerHTML = "";
		message005.innerHTML = "<strong><font size=4>ROUND FIVE</font><br/></br>YOU WILL GET 3 QUESTIONS FROM RANDOM CATEGORIES </br></br>QUESTIONS ARE WORTH 2, 3, AND 5 POINTS</br></br>NO STEALING OR MULTIPLE CHOICE IN THIS ROUND</br></br>REPEATS & CHALLENGES STILL IN EFFECT</strong>";
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
	    	document.getElementById("message003").style.top = "-150px";
	    	document.getElementById("message006").style.top = "-150px";
}
}
function next004 () {
simulatecomputerround2();
	document.getElementById("qu002").style.display = "initial";
	document.getElementById("message003").style.top = "-140px";
	document.getElementById("message006").style.top = "-140px";
	document.getElementById("message004").style.top = "-140px";
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
	   	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
 		qu001.innerHTML = "";
                message001.innerHTML = "Click button to simulate opponents result.";
		message002.innerHTML = "";
                message004.innerHTML = "";
		message005.innerHTML = "";
if (spinners == "1"){
	    	message006.innerHTML = competitorlist[0].id + " spun Spinner's Choice and chose " +compcat[0].cat;
		document.getElementById("message003").style = "initial";
}
if (opponentspun == "1"){
	    	message006.innerHTML = "";
message002.innerHTML = competitorlist[0].id + " spun Opponent's Choice" + "<br/><br/>" + "Select which category you want to give " + competitorlist[0].id + "<br/></br>" + "<ul id=boxes class=aligner><li><input type=checkbox id=box1 value= /><label for=box1 id=label1>" + data[1] +"</label></li><li><input type=checkbox id=box2 value=/><label for=box2 id=label2>" +data[2] +"</label></li><li><input type=checkbox id=box3 value=/><label for=box3 id=label3>" + data[3] + "</label></li><li><input type=checkbox id=box4 value=/><label for=box4 id=label4>" + data[4] + "</label></li><li><input type=checkbox id=box5 value=/><label for=box5 id=label5>" + data[5] + "</label></li><li><input type=checkbox id=box6 value=/><label for=box6 id=label6>" + data[7] + "</label></li><li><input type=checkbox id=box7 value=/><label for=box7 id=label7>" + data[8] + "</label></li><li><input type=checkbox id=box8 value=/><label for=box8 id=label8>" + data[9] + "</label></li><li><input type=checkbox id=box9 value=/><label for=box9 id=label9>" + data[10] + "</label></li><li><input type=checkbox id=box10 value=/><label for=box10 id=label10>" + data[11] + "</label></li></ul>" + "<button class=buttons008 id=confirm onclick=confirmopp()>Confirm</button>";
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
    if ($('input[type=checkbox]:checked').length > 8) {
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 8) {
	document.getElementById("confirm").style.visibility= "visible"; 
    }
    if ($('input[type=checkbox]:checked').length < 8) {
	document.getElementById("confirm").style.visibility= "hidden"; 
    }
});
}
if ((opponentspun != "1") && (spinners != "1")){
	    	message006.innerHTML =  "Opponent spun category " +compcat[0].cat;
		document.getElementById("message003").style = "initial";
}
            	message003.innerHTML = "<button id=nextbutton class=buttons002 onclick=simulate()>Simulate</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "none";
	    	document.getElementById("chalden").style.display = "none";
		document.getElementById("message004").style = "initial";
	    	document.getElementById("message006").style.top = "-140px";
}
function simulatefinished () {
	   	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
 		qu001.innerHTML = "";
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
		document.getElementById("message004").style.top = "-140px";
}

function simulate(){
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
bettinground();
}
}

function checkerq1(){
	    var stealer01 = document.getElementById("q1").value.toUpperCase();
	    var stealer1 = myTrim(stealer01);
	    stealer1 = myTrim(stealer1);
if (stealer1.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(stealer1, compcat[0].answ);
if (typeof(compcat[0].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(stealer1, compcat[0].answ3);
}
}
else if (stealer1.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
           console.log(quescount);
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer1 == compcat[0].answ) || (stealer1 == compcat[0].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
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
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer1 != compcat[0].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[0].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=openquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}
function checkerq2(){
	    var stealer02 = document.getElementById("q1").value.toUpperCase();
	    var stealer2 = myTrim(stealer02);
	    stealer2 = myTrim(stealer2);
if (stealer2.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(stealer2, compcat[1].answ);
if (typeof(compcat[1].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(stealer2, compcat[1].answ3);
}
}
else if (stealer2.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
           console.log(quescount);
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer2 == compcat[1].answ) || (stealer2 == compcat[1].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer2 != compcat[1].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[1].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=openquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}
function checkerq3(){
	    var stealer03 = document.getElementById("q1").value.toUpperCase();
	    var stealer3 = myTrim(stealer03);
	    stealer3 = myTrim(stealer3);
if (stealer3.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(stealer3, compcat[2].answ);
if (typeof(compcat[2].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(stealer3, compcat[2].answ3);
}
}
else if (stealer3.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
           console.log(quescount);
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer3 == compcat[2].answ) || (stealer3 == compcat[2].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer3 != compcat[2].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[2].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}

function checkerq4(){
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
           console.log(quescount);
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer4 == compcat[3].answ) || (stealer4 == compcat[3].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=2;
quescor++;
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    cormusic.play();
stealopp--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer4 != compcat[3].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[3].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
stealopp--;
if (stealmc > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}

function openquestion(){
	document.getElementById("message003").style.top = "-140px";
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
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[0].ques;
                message002.innerHTML = input + compcat[0].option + buttons;
if (compcat[0].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
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
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
function openquestion2(){
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
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[1].ques;
                message002.innerHTML = input + compcat[1].option + buttons;
if (compcat[1].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
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
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
function openquestion3(){
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
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[2].ques;
                message002.innerHTML = input + compcat[2].option + buttons;
if (compcat[2].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
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
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
function openquestion4(){
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
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[3].ques;
                message002.innerHTML = input + compcat[3].option + buttons;
if (compcat[3].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
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
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
function mcquestion(){
	document.getElementById("message003").style.top = "-140px";
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
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[4].ques;
                message002.innerHTML = input + compcat[4].option;
if (compcat[4].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
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
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
function mcquestion2(){
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
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[5].ques;
                message002.innerHTML = input + compcat[5].option;
if (compcat[5].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
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
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
function mcquestion3(){
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
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[6].ques;
                message002.innerHTML = input + compcat[6].option;
if (compcat[6].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
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
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
function mcquestion4(){
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
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[7].ques;
                message002.innerHTML = input + compcat[7].option;
if (compcat[7].ques.length > 125){
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
	    document.getElementById("time001").style.top = "-130px";
}
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
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
		mc++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=bettinground()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
