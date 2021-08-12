var spymovies = [
{
"cat":"Spy Movies",
"ques":"What was the first James Bond film?",
"answ":"DR NO",
"answ2":"Dr. No.",
},
{
"cat":"Spy Movies",
"ques":"What is the title of the fifth entry in the Bourne franchise, released in 2016?",
"answ":"JASON BOURNE",
"answ2":"Jason Bourne.",
},
{
"cat":"Spy Movies",
"ques":"Who directed 2008's Eagle Eye?",
"answ":"D J CARUSO",
"answ3":"DJ CARUSO",
"answ2":"D.J. Caruso",
},
{
"cat":"Spy Movies",
"ques":"What is the title of the 3rd film in the Jason Bourne franchise?",
"answ":"THE BOURNE ULTIMATUM",
"answ3":"BOURNE ULTIMATUM",
"answ2":"The Bourne Ultimatum.",
},
{
"cat":"Spy Movies",
"ques":"Who plays the sexy agent Vanessa Kensington in Austin Powers: International Man of Mystery?",
"answ":"ELIZABETH HURLEY",
"answ3":"ELISABETH HURLEY",
"answ2":"Elizabeth Hurley.",
},
{
"cat":"Spy Movies",
"ques":"You'll find the character of Agent Jane Carter, played by Paula Patton, in which Mission: Impossible film?",
"answ":"MISSION IMPOSSIBLE GHOST PROTOCOL",
"answ3":"GHOST PROTOCOL",
"answ2":"Mission Impossible Ghost Protocol.",
},
{
"cat":"Spy Movies",
"ques":"Which actor stars as the lead character Aaron Cross in The Bourne Legacy?",
"answ":"JEREMY RENNER",
"answ2":"Jeremy Renner.",
},
{
"cat":"Spy Movies",
"ques":"What spy thriller stars Ben Affleck and Morgan Freeman?",
"answ":"THE SUM OF ALL FEARS",
"answ3":"SUM OF ALL FEARS",
"answ2":"The Sum of All Fears.",
},
{
"cat":"Spy Movies",
"ques":"Paula Patton and Michael Nyqvist co-starred in which Mission: Impossible film?",
"answ":"MISSION IMPOSSIBLE GHOST PROTOCOL",
"answ3":"GHOST PROTOCOL",
"answ2":"Mission: Impossible Ghost Protocol.",
},
{
"cat":"Spy Movies",
"ques":"In Skyfall, Naomie Harris plays Eve, who is revealed to be what famous character?",
"answ":"MONEYPENNY",
"answ3":"MISS MONEYPENNY",
"answ2":"Moneypenny.",
},
{
"cat":"Spy Movies",
"ques":"Ben Affleck plays the iconic CIA analyst Jack Ryan in what 2002 film?",
"answ":"SUM OF ALL FEARS",
"answ2":"Sum of All Fears.",
},
{
"cat":"Spy Movies",
"ques":"Who took over the role of Jack Ryan, in 2014's Jack Ryan: Shadow Recruit?",
"answ":"CHRIS PINE",
"answ2":"Chris Pine.",
},
{
"cat":"Spy Movies",
"ques":"What is Colin Firth's character's first and last real name in the Kingsman franchise?",
"answ":"HARRY HART",
"answ2":"Harry Hart.",
},
{
"cat":"Spy Movies",
"ques":"What is the name of the second film in the Jason Bourne franchise?",
"answ":"THE BOURNE SUPREMACY",
"answ3":"BOURNE SUPREMACY",
"answ2":"The Bourne Supremacy.",
},
{
"cat":"Spy Movies",
"ques":"Who plays secret agent John Steed in 1998's The Avengers?",
"answ":"RALPH FIENNES",
"answ2":"Ralph Fiennes.",
},
{
"cat":"Spy Movies",
"ques":"Jack Ryan uncovers a secret war being waged by the US government in Columbia in which movie?",
"answ":"CLEAR AND PRESENT DANGER",
"answ2":"Clear and Present Danger.",
},
];
var r2Q29 = [
{
"cat":"Spy Movies",
"ques":"Who plays the villainous Mr. Phelps in Mission Impossible?",
"answ":"JON VOIGHT",
"answ3":"JON VOIGT",
"answ2":"Jon Voight.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Richard Dreyfuss</button><button id=incop2 class=buttons003 onclick=qinc()>Christopher Walken</button><button id=incop3 class=buttons003 onclick=qinc()>Christopher Lee</button><button id=corop class=buttons003 onclick=qcor()>Jon Voight</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Jason Bourne eliminates CIA asset Desh Bouksani by suffocating him with a towel in what Bourne film?",
"answ":"THE BOURNE ULTIMATUM",
"answ3":"BOURNE ULTIMATUM",
"answ2":"Bourne Ultimatum.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Bourne Identity</button><button id=incop2 class=buttons003 onclick=qinc()>Bourne Supremacy</button><button id=corop class=buttons003 onclick=qcor()>Bourne Ultimatum</button><button id=incop4 class=buttons003 onclick=qinc()>Jason Bourne</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who plays Luther Stickell in the Mission Impossible franchise?",
"answ":"VING RAMES",
"answ3":"VING RHAMES",
"answ2":"Ving Rhames.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Dominic Purcell</button><button id=incop2 class=buttons003 onclick=qinc()>Michael Clarke Duncan</button><button id=corop class=buttons003 onclick=qcor()>Ving Rhames</button><button id=incop4 class=buttons003 onclick=qinc()>Simon Pegg</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who directed the 2015 film The Man from U.N.C.L.E?",
"answ":"GUY RITCHIE",
"answ2":"Guy Ritchie.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Matthew Vaughn</button><button id=incop2 class=buttons003 onclick=qinc()>Sam Mendes</button><button id=corop class=buttons003 onclick=qcor()>Guy Ritchie</button><button id=incop4 class=buttons003 onclick=qinc()>Christopher McQuarrie</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who starred opposite Denzel Washington as CIA agent Matt Weston in the spy action-thriller Safe House?",
"answ":"RYAN REYNOLDS",
"answ2":"Ryan Reynolds.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Mark Wahlberg</button><button id=incop2 class=buttons003 onclick=qinc()>James McAvoy</button><button id=corop class=buttons003 onclick=qcor()>Ryan Reynolds</button><button id=incop4 class=buttons003 onclick=qinc()>Chris Pratt</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who played the agent known as The Professor, who tries to take down Jason Bourne in The Bourne Identity?",
"answ":"CLIVE OWEN",
"answ2":"Clive Owen.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Chris Cooper</button><button id=incop2 class=buttons003 onclick=qinc()>Frank Grillo</button><button id=corop class=buttons003 onclick=qcor()>Clive Owen</button><button id=incop4 class=buttons003 onclick=qinc()>Jim Caviezel</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who directed Three Days of the Condor?",
"answ":"SYDNEY POLLACK",
"answ3":"SIDNEY POLLACK",
"answ2":"Sydney Pollack.",
"option":"<button id=corop class=buttons003 onclick=qcor()>Sydney Pollack</button><button id=incop2 class=buttons003 onclick=qinc()>John Huston</button><button id=incop3 class=buttons003 onclick=qinc()>William Friedkin</button><button id=incop4 class=buttons003 onclick=qinc()>John Frankenheimer</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"As of 2020, how many actors have played the role of James Bond in the official Eon Produced films?",
"answ":"6",
"answ3":"SIX",
"answ2":"6.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>5</button><button id=corop class=buttons003 onclick=qcor()>6</button><button id=incop3 class=buttons003 onclick=qinc()>7</button><button id=incop4 class=buttons003 onclick=qinc()>8</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"In the Jason Bourne franchise, who plays Nicky Parsons, who works at the CIA and helps Bourne on various occasions?",
"answ":"JULIA STILES",
"answ2":"Julia Stiles.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Franka Potente</button><button id=corop class=buttons003 onclick=qcor()>Julia Stiles</button><button id=incop3 class=buttons003 onclick=qinc()>Demi Moore</button><button id=incop4 class=buttons003 onclick=qinc()>Marion Cotillard</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who plays Sam in the John Frankenheimer directed spy/action thriller Ronin?",
"answ":"ROBERT DE NIRO",
"answ3":"ROBERT DENIRO",
"answ2":"Robert De Niro.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Al Pacino</button><button id=corop class=buttons003 onclick=qcor()>Robert De Niro</button><button id=incop3 class=buttons003 onclick=qinc()>Ed Harris</button><button id=incop4 class=buttons003 onclick=qinc()>Dustin Hoffman</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who plays Agent 99 in the film Get Smart?",
"answ":"ANNE HATHAWAY",
"answ2":"Anne Hathaway.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Blake Lively</button><button id=corop class=buttons003 onclick=qcor()>Anne Hathaway</button><button id=incop3 class=buttons003 onclick=qinc()>Hilary Duff</button><button id=incop4 class=buttons003 onclick=qinc()>Rachel McAdams</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Which Bourne movie did NOT star Matt Damon as the lead?",
"answ":"THE BOURNE LEGACY",
"answ3":"BOURNE LEGACY",
"answ2":"The Bourne Legacy.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>The Bourne Ultimatum</button><button id=corop class=buttons003 onclick=qcor()>The Bourne Legacy</button><button id=incop3 class=buttons003 onclick=qinc()>Jason Bourne</button><button id=incop4 class=buttons003 onclick=qinc()>The Bourne Identity</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"In which film does Jack Ryan's family get targeted by a splinter faction of the IRA?",
"answ":"PATRIOT GAMES",
"answ2":"Patriot Games.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Clear and Present Danger</button><button id=corop class=buttons003 onclick=qcor()>Patriot Games</button><button id=incop3 class=buttons003 onclick=qinc()>The Hunt for Red October</button><button id=incop4 class=buttons003 onclick=qinc()>Jack Ryan Shadow Recruit</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"What 1992 film starred Harrison Ford as an ex-CIA man?",
"answ":"PATRIOT GAMES",
"answ2":"Patriot Games.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>The Fugitive</button><button id=corop class=buttons003 onclick=qcor()>Patriot Games</button><button id=incop3 class=buttons003 onclick=qinc()>Air Force One</button><button id=incop4 class=buttons003 onclick=qinc()>K-19: The Widowmaker</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who plays Benji Dunn in the Mission Impossible franchise?",
"answ":"SIMON PEGG",
"answ2":"Simon Pegg.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Sean Astin</button><button id=corop class=buttons003 onclick=qcor()>Simon Pegg</button><button id=incop3 class=buttons003 onclick=qinc()>Jeremy Renner</button><button id=incop4 class=buttons003 onclick=qinc()>Alec Baldwin</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who directed 2015's Spectre?",
"answ":"SAM MENDES",
"answ2":"Sam Mendes.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Marc Forster</button><button id=corop class=buttons003 onclick=qcor()>Sam Mendes</button><button id=incop3 class=buttons003 onclick=qinc()>Martin Campbell</button><button id=incop4 class=buttons003 onclick=qinc()>John Glen</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who voiced secret agent Lance Sterling in Spies in Disguise?",
"answ":"WILL SMITH",
"answ2":"Will Smith.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Michael B. Jordan</button><button id=corop class=buttons003 onclick=qcor()>Will Smith</button><button id=incop3 class=buttons003 onclick=qinc()>Daniel Kaluuya</button><button id=incop4 class=buttons003 onclick=qinc()>Winston Duke</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who played Johnny English's love interest in Johnny English Reborn?",
"answ":"ROSAMUND PIKE",
"answ2":"Rosamund Pike.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Alice Eve</button><button id=corop class=buttons003 onclick=qcor()>Rosamund Pike</button><button id=incop3 class=buttons003 onclick=qinc()>Anne Hathaway</button><button id=incop4 class=buttons003 onclick=qinc()>Alexandra Daddario</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"What year saw the release of Spy Game?",
"answ":"2001",
"answ2":"2001.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>1999</button><button id=incop2 class=buttons003 onclick=qinc()>2000</button><button id=corop class=buttons003 onclick=qcor()>2001</button><button id=incop4 class=buttons003 onclick=qinc()>2002</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who played Leonardo DiCaprio's boss in Body of Lies?",
"answ":"RUSSELL CROWE",
"answ3":"RUSSELL CROW",
"answ2":"Russell Crowe.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Morgan Freeman</button><button id=incop2 class=buttons003 onclick=qinc()>Robert Redford</button><button id=corop class=buttons003 onclick=qcor()>Russell Crowe</button><button id=incop4 class=buttons003 onclick=qinc()>Ed Harris</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who played senior CIA instructor Walter Burke in The Recruit?",
"answ":"AL PACINO",
"answ2":"Al Pacino.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Liam Neeson</button><button id=incop2 class=buttons003 onclick=qinc()>Jack Nicholson</button><button id=corop class=buttons003 onclick=qcor()>Al Pacino</button><button id=incop4 class=buttons003 onclick=qinc()>Russell Crowe</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who played CIA-agent Napoleon Solo in 2015's The Man from U.N.C.L.E.?",
"answ":"HENRY CAVILL",
"answ2":"Henry Cavill.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>James Marsden</button><button id=incop2 class=buttons003 onclick=qinc()>Armie Hammer</button><button id=corop class=buttons003 onclick=qcor()>Henry Cavill</button><button id=incop4 class=buttons003 onclick=qinc()>Jeremy Renner</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"In which Mission: Impossible film does the villain have a penchant for putting explosive charges in the heads of his captives?",
"answ":"MISSION IMPOSSIBLE III",
"answ3":"MISSION IMPOSSIBLE 3",
"answ2":"Mission: Impossible III.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Mission: Impossible</button><button id=incop2 class=buttons003 onclick=qinc()>Mission: Impossible 2</button><button id=corop class=buttons003 onclick=qcor()>Mission: Impossible III</button><button id=incop4 class=buttons003 onclick=qinc()>Mission: Impossible Rogue Nation</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"What Game of Thrones actor played President of the Russian Federation in 2002's The Sum of All Fears?",
"answ":"CIARAN HINDS",
"answ3":"CIARÁN HINDS",
"answ2":"Ciarán Hinds.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Mark Addy</button><button id=incop2 class=buttons003 onclick=qinc()>Iain Glen</button><button id=corop class=buttons003 onclick=qcor()>Ciarán Hinds</button><button id=incop4 class=buttons003 onclick=qinc()>Sean Bean</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Which actress from the TV series Desperate Housewives played the role as Bond-babe Paris Carver in 1997's Tomorrow Never Dies?",
"answ":"TERI HATCHER",
"answ3":"TERRI HATCHER",
"answ2":"Teri Hatcher.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Eva Longoria</button><button id=incop2 class=buttons003 onclick=qinc()>Felicity Huffman</button><button id=corop class=buttons003 onclick=qcor()>Teri Hatcher</button><button id=incop4 class=buttons003 onclick=qinc()>Marcia Cross</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who directed Spy Game?",
"answ":"TONY SCOTT",
"answ2":"Tony Scott.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>John Woo</button><button id=incop2 class=buttons003 onclick=qinc()>John McTiernan</button><button id=corop class=buttons003 onclick=qcor()>Tony Scott</button><button id=incop4 class=buttons003 onclick=qinc()>Gareth Evans</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"In Mission: Impossible Fallout, who plays CIA assassin walker?",
"answ":"HENRY CAVILL",
"answ2":"Henry Cavill.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Taron Egerton</button><button id=incop2 class=buttons003 onclick=qinc()>Jeremy Renner</button><button id=corop class=buttons003 onclick=qcor()>Henry Cavill</button><button id=incop4 class=buttons003 onclick=qinc()>Joel Edgerton</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"How many times has Harrison Ford played Jack Ryan?",
"answ":"2",
"answ3":"TWO",
"answ2":"2.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>1</button><button id=corop class=buttons003 onclick=qcor()>2</button><button id=incop3 class=buttons003 onclick=qinc()>3</button><button id=incop4 class=buttons003 onclick=qinc()>4</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Which Lord of the Rings actor plays Krill, the Russian agent, in The Bourne Supremacy?",
"answ":"KARL URBAN",
"answ2":"Karl Urban.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Andy Serkis</button><button id=corop class=buttons003 onclick=qcor()>Karl Urban</button><button id=incop3 class=buttons003 onclick=qinc()>Sean Bean</button><button id=incop4 class=buttons003 onclick=qinc()>Orlando Bloom</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who played Jack Ryan in The Hunt for Red October?",
"answ":"ALEC BALDWIN",
"answ2":"Alec Baldwin.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Ben Affleck</button><button id=corop class=buttons003 onclick=qcor()>Alec Baldwin</button><button id=incop3 class=buttons003 onclick=qinc()>Harrison Ford</button><button id=incop4 class=buttons003 onclick=qinc()>Pierce Brosnan</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"What Ridley Scott directed spy film stars Leonardo DiCaprio and Russell Crowe?",
"answ":"BODY OF LIES",
"answ2":"Body of Lies.",
"option":"<button id=corop class=buttons003 onclick=qcor()>Body of Lies</button><button id=incop2 class=buttons003 onclick=qinc()>Spy Game</button><button id=incop3 class=buttons003 onclick=qinc()>Breach</button><button id=incop4 class=buttons003 onclick=qinc()>Ronin</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Val Kilmer appeared early in his career in which 1984 spy comedy?",
"answ":"TOP SECRET",
"answ2":"Top Secret!.",
"option":"<button id=corop class=buttons003 onclick=qcor()>Top Secret!</button><button id=incop2 class=buttons003 onclick=qinc()>The Man with One Red Shoe</button><button id=incop3 class=buttons003 onclick=qinc()>The Cleaner</button><button id=incop4 class=buttons003 onclick=qinc()>Spies Like Us</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"What Lost actor plays an IMF agent who is killed in an early scene of Mission: Impossible - Ghost Protocol?",
"answ":"JOSH HOLLOWAY",
"answ2":"Josh Holloway.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Matthew Fox</button><button id=corop class=buttons003 onclick=qcor()>Josh Holloway</button><button id=incop3 class=buttons003 onclick=qinc()>Daniel Dae Kim</button><button id=incop4 class=buttons003 onclick=qinc()>Dominic Monaghan</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who plays Ben Affleck's boss at the CIA, Jack O'Donnell, in Argo?",
"answ":"BRYAN CRANSTON",
"answ2":"Bryan Cranston.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Tate Donovan</button><button id=corop class=buttons003 onclick=qcor()>Bryan Cranston</button><button id=incop3 class=buttons003 onclick=qinc()>Kyle Chandler</button><button id=incop4 class=buttons003 onclick=qinc()>Victor Garber</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who plays the director of the CIA in Mission Impossible: Fallout?",
"answ":"ANGELA BASSETT",
"answ2":"Angela Bassett.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Viola Davis</button><button id=corop class=buttons003 onclick=qcor()>Angela Bassett</button><button id=incop3 class=buttons003 onclick=qinc()>Michelle Monaghan</button><button id=incop4 class=buttons003 onclick=qinc()>Morgan Freeman</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Rowan Atkinson plays the title character in what spy spoof franchise?",
"answ":"JOHNNY ENGLISH",
"answ2":"Johnny English.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Top Secret!</button><button id=corop class=buttons003 onclick=qcor()>Johnny English</button><button id=incop3 class=buttons003 onclick=qinc()>Get Smart</button><button id=incop4 class=buttons003 onclick=qinc()>Spy Hard</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who stars alongside Jennifer Lawrence as CIA operative Nate Nash in Red Sparrow?",
"answ":"JOEL EDGERTON",
"answ2":"Joel Edgerton.",
"option":"<button id=corop class=buttons003 onclick=qcor()>Joel Edgerton</button><button id=incop2 class=buttons003 onclick=qinc()>Jeremy Irons</button><button id=incop3 class=buttons003 onclick=qinc()>Sebastian Stan</button><button id=incop4 class=buttons003 onclick=qinc()>Jeremy Renner</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Mads Mikkelsen plays Le Chiffre in Casino Royale, but who played him in the 1967 comedy version?",
"answ":"ORSON WELLES",
"answ2":"Orson Welles.",
"option":"<button id=corop class=buttons003 onclick=qcor()>Orson Welles</button><button id=incop2 class=buttons003 onclick=qinc()>Peter Sellers</button><button id=incop3 class=buttons003 onclick=qinc()>Woody Allen</button><button id=incop4 class=buttons003 onclick=qinc()>Steve Martin</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Which Mission: Impossible film has Tom Cruise trying to stop a German virus known as Chimera from going global?",
"answ":"MISSION IMPOSSIBLE 2",
"answ3":"MISSION IMPOSSIBLE II",
"answ2":"Mission: Impossible 2.",
"option":"<button id=corop class=buttons003 onclick=qcor()>Mission: Impossible 2</button><button id=incop2 class=buttons003 onclick=qinc()>Mission: Impossible III</button><button id=incop3 class=buttons003 onclick=qinc()>Mission: Impossible Ghost Protocol</button><button id=incop4 class=buttons003 onclick=qinc()>Mission: Impossible Rogue Nation</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who plays Maxwell Smart in 2008's Get Smart?",
"answ":"STEVE CARELL",
"answ2":"Steve Carell.",
"option":"<button id=corop class=buttons003 onclick=qcor()>Steve Carell</button><button id=incop2 class=buttons003 onclick=qinc()>Mark Wahlberg</button><button id=incop3 class=buttons003 onclick=qinc()>Will Ferrell</button><button id=incop4 class=buttons003 onclick=qinc()>Dwayne Johnson</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Owen Davian is the main villain of which film in the Mission Impossible franchise?",
"answ":"MISSION IMPOSSIBLE III",
"answ3":"MISSION IMPOSSIBLE 3",
"answ2":"Mission: Impossible III.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Mission: Impossible 2</button><button id=corop class=buttons003 onclick=qcor()>Mission: Impossible III</button><button id=incop3 class=buttons003 onclick=qinc()>Mission: Impossible Fallout</button><button id=incop4 class=buttons003 onclick=qinc()>Mission: Impossible Rogue Nation</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"In Kingsman: The Secret Service what is the mantra of the Kingsman that Eggsy recites during his phonecall to be released from the local authorities?",
"answ":"OXFORDS NOT BROGUES",
"answ3":"OXFORDS NOT BROUGES",
"answ2":"Oxfords, not brogues.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Manners Maketh Man</button><button id=corop class=buttons003 onclick=qcor()>Oxfords, Not Brogues</button><button id=incop3 class=buttons003 onclick=qinc()>Trust Nobody</button><button id=incop4 class=buttons003 onclick=qinc()>One For All, All For One</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Chris Rock plays a superspy and his identical twin brother in which action 2002 action comedy?",
"answ":"BAD COMPANY",
"answ2":"Bad Company.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>Collateral Damage</button><button id=incop2 class=buttons003 onclick=qinc()>Bait</button><button id=corop class=buttons003 onclick=qcor()>Bad Company</button><button id=incop4 class=buttons003 onclick=qinc()>The Recruit</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"Who directed Jack Ryan: Shadow Recruit?",
"answ":"KENNETH BRANAGH",
"answ2":"Kenneth Branagh.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>James Mangold</button><button id=incop2 class=buttons003 onclick=qinc()>Phillip Noyce</button><button id=corop class=buttons003 onclick=qcor()>Kenneth Branagh</button><button id=incop4 class=buttons003 onclick=qinc()>Doug Liman</button><br/>",
},
{
"cat":"Spy Movies",
"ques":"In what comedic film does Sacha Baron Cohen play the underachieving brother of a British spy?",
"answ":"THE BROTHERS GRIMSBY",
"answ3":"GRIMSBY",
"answ2":"The Brothers Grimsby.",
"option":"<button id=incop1 class=buttons003 onclick=qinc()>The Spy</button><button id=incop2 class=buttons003 onclick=qinc()>The Man Who Knew Too Little</button><button id=corop class=buttons003 onclick=qcor()>The Brothers Grimsby</button><button id=incop4 class=buttons003 onclick=qinc()>Gotcha!</button><br/>",
},
];
spymovies = shuffle(spymovies);
r2Q29 = shuffle(r2Q29);