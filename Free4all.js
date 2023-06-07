function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  return array;
}


var question001 = [
{
"cat":"Comedies",
"ques":"Who played the role of Mr. Smith in Mr. and Mrs. Smith?",
"answ":"BRAD PITT",
"answ2":"Brad Pitt.",
},{
"cat":"Action/Adventure",
"ques":"Mel Gibson's Martin Riggs is reassigned and partnered with Danny Glover's Roger Murtaugh in what 1987 buddy cop comedy from director Richard Donner?",
"answ":"LETHAL WEAPON",
"answ2":"Lethal Weapon."
},
{
"cat":"Streaming Movies",
"ques":"Jennifer Aniston and Adam Sandler star in what 2019 Netflix comedy about a couple on vacation who are framed for the murder of an elderly billionaire?",
"answ":"MURDER MYSTERY",
"answ2":"Murder Mystery."
},
{
"cat":"Oscar Movies",
"ques":"What comedy star was nominated for Best Actor for playing Parry, a homeless man whose mission is to find the Holy Grail, in the 1991 film The Fisher King?",
"answ":"ROBIN WILLIAMS",
"answ2":"Robin Williams."
},
{
"cat":"Monster Movies",
"ques":"What 2014 Gareth Edwards directed film has a 2019 sequel subtitled King of the Monsters?",
"answ":"GODZILLA",
"answ2":"Godzilla."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which famous actor appeared in the following four films: Taken, Men in Black: International, The Grey, and Love Actually?",
"answ":"LIAM NEESON",
"answ2":"Liam Neeson."
},
{
"cat":"Black Cinema",
"ques":"Who stars as Mabel 'Madea' Earlene Simmons and also directs the bulk of the movies in the Madea series?",
"answ":"TYLER PERRY",
"answ2":"Tyler Perry."
},
{
"cat":"Dramas",
"ques":"Which actress appears in the following three dramas: Pearl Harbor, Underworld, and The Aviator?",
"answ":"KATE BECKINSALE",
"answ2":"Kate Beckinsale."
},
{
"cat":"Disney",
"ques":"Which actress co-stars as Dr. Lily Houghton alongside Dwayne Johnson in the 2021 film Jungle Cruise?",
"answ":"EMILY BLUNT",
"answ2":"Emily Blunt."
},
{
"cat":"Die Hard in a ___",
"ques":"What Die Hard meets The Towering Inferno film stars Dwayne Johnson as Will Sawyer, a former Marine and HRT leader, who now assesses building security?",
"answ":"SKYSCRAPER",
"answ2":"Skyscraper."
},
{
"cat":"Steven Spielberg",
"ques":"What Spielberg film had the tagline 'He is afraid. He is alone. He is three million light years from home.'?",
"answ":"ET THE EXTRA TERRESTRIAL",
"answ3":"ET",
"answ2":"E.T. the Extra-Terrestrial."
},
{
"cat":"70s",
"ques":"Who starred, produced, directed, and wrote the film Heaven Can Wait?",
"answ":"WARREN BEATTY",
"answ2":"Warren Beatty."
},
{
"cat":"Sports",
"ques":"Peter Landesman directed Will Smith in what sports drama?",
"answ":"CONCUSSION",
"answ2":"Concussion."
},
{
"cat":"Comic Book Movies",
"ques":"Jeff Wadlow directed what comic book movie sequel?",
"answ":"KICK ASS 2",
"answ2":"Kick-Ass 2."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Inkheart, Monkeybone, and The Mummy: Tomb of the Dragon Emperor all star which actor?",
"answ":"BRENDAN FRASER",
"answ2":"Brendan Fraser."
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the releases of the Steven Spielberg films War of the Worlds and Munich?",
"answ":"2005",
"answ2":"2005."
},
{
"cat":"Monster Movies",
"ques":"Matt Reeves directed what 2008 found footage creature feature starring Lizzy Caplan?",
"answ":"CLOVERFIELD",
"answ2":"Cloverfield."
},
{
"cat":"Crime",
"ques":"Which Academy Award winning actress appears in both My Cousin Vinny and The Lincoln Lawyer?",
"answ":"MARISA TOMEI",
"answ2":"Marisa Tomei."
},
{
"cat":"80s",
"ques":"Which famed sports drama became known for the line 'Hey... Dad? You wanna have a catch?'?",
"answ":"FIELD OF DREAMS",
"answ2":"Field of Dreams."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which actor appears in the following movies: Synchronic, Real Steel, Ant-Man, and The Night Before?",
"answ":"ANTHONY MACKIE",
"answ2":"Anthony Mackie."
},
{
"cat":"Sequels & Prequels",
"ques":"Gary Busey and Danny Glover appear in which film in the Predator franchise?",
"answ":"PREDATOR 2",
"answ2":"Predator 2."
},
{
"cat":"Comic Book Movies",
"ques":"Which of the following actors does not appear in Sam Raimi's Spider-Man 2: Joel McHale, Octavia Spencer, Bruce Campbell, or Cliff Robertson?",
"answ":"OCTAVIA SPENCER",
"answ2":"Octavia Spencer."
},
{
"cat":"Oscar Movies",
"ques":"Which actor received Oscar nominations for the films Dead Man Walking and I Am Sam?",
"answ":"SEAN PENN",
"answ2":"Sean Penn."
},
{
"cat":"Oscar Movies",
"ques":"This 2017 film won the Oscar for Best Picture at the 90th Academy Awards in 2018.",
"answ":"THE SHAPE OF WATER",
"answ2":"The Shape of Water."
},
{
"cat":"Disney",
"ques":"Which Disney animated film has an opening musical number in which townspeople repeatedly sing the word 'Bonjour'?",
"answ":"BEAUTY AND THE BEAST",
"answ2":"Beauty and the Beast."
},
{
"cat":"80s",
"ques":"In what 1988 film does a gangster named Ken hide the keys to a safety deposit box containing stolen diamonds inside an aquarium?",
"answ":"A FISH CALLED WANDA",
"answ2":"A Fish Called Wanda."
},
{
"cat":"Streaming Movies",
"ques":"Which 2021 Netflix adventure film stars Dwayne Johnson, Ryan Reynolds, and Gal Gadot?",
"answ":"RED NOTICE",
"answ2":"Red Notice."
},
{
"cat":"Dramas",
"ques":"You'll find which Oscar-winning actress in the following films: Heat, Garden State, and Jackie?",
"answ":"NATALIE PORTMAN",
"answ2":"Natalie Portman."
},
{
"cat":"Black Cinema",
"ques":"Which 1995 modern classic from director F. Gary Gray featured the tagline 'a lot can go down between thursday and saturday...'?",
"answ":"FRIDAY",
"answ2":"Friday."
},
{
"cat":"Pixar",
"ques":"Which Pixar film features the vocal talents of Kaitlyn Dias, Bill Hader, Richard Kind, and Diane Lane?",
"answ":"INSIDE OUT",
"answ2":"Inside Out."
},
{
"cat":"Westerns",
"ques":"What 1988 western from Christopher Cain stars Emilio Estevez as Billy the Kid, alongside Charlie Sheen, Kiefer Sutherland, and Lou Diamond Phillips?",
"answ":"YOUNG GUNS",
"answ2":"Young Guns."
},
{
"cat":"Scores & Soundtracks",
"ques":"What film directed by Edgar Wright features such songs as 'Bellbottoms', 'Harlem Shuffle', and 'Brighton Rock'?",
"answ":"BABY DRIVER",
"answ2":"Baby Driver."
},
{
"cat":"Scores & Soundtracks",
"ques":"1964's Mary Poppins won the Academy Award for Best Original Song for which magical tune?",
"answ":"CHIM CHIM CHER EE",
"answ2":"Chim Chim Cher-ee."
},
{
"cat":"Scores & Soundtracks",
"ques":"Who composed the score for the following Michael Mann films: Heat and Public Enemies?",
"answ":"ELLIOT GOLDENTHAL",
"answ2":"Elliot Goldenthal."
},
{
"cat":"Scores & Soundtracks",
"ques":"Madonna's 'Crazy for You' and Journey's 'Only the Young' are both featured in the soundtrack of what 1985 Matthew Modine movie?",
"answ":"VISION QUEST",
"answ2":"Vision Quest."
},
{
"cat":"Wizarding World",
"ques":"What is the last name of Harry's aunt and uncle that he lives with?",
"answ":"DURSLEY",
"answ2":"Dursley."
},
{
"cat":"Westerns",
"ques":"Who plays the title character, a homicidal singing cowboy, in The Ballad of Buster Scruggs?",
"answ":"TIM BLAKE NELSON",
"answ2":"Tim Blake Nelson."
},
{
"cat":"Tom Cruise",
"ques":"Which Oscar winner plays the representative to the 'Life Extension' company in the film Vanilla Sky?",
"answ":"TILDA SWINTON",
"answ2":"Tilda Swinton."
},
{
"cat":"Black Cinema",
"ques":"George Tillman Jr. directed what 1997 dramedy featuring Vivica A. Fox and Nia Long, which is told through the eyes of 11-year-old Ahmad?",
"answ":"SOUL FOOD",
"answ2":"Soul Food."
},
{
"cat":"Horror",
"ques":"What horror franchise has featured performances from Mckenna Grace, Patrick Wilson, Anthony LaPaglia, and John Noble?",
"answ":"THE CONJURING",
"answ2":"The Conjuring."
},
{
"cat":"Famous Actors & Actresses",
"ques":"What actor appears in the following films: To Wong Foo, Thanks for Everything! Julie Newmar, Donnie Darko, and The Outsiders?",
"answ":"PATRICK SWAYZE",
"answ2":"Patrick Swayze."
},
{
"cat":"2000s",
"ques":"What 2004 time travel film starring Ashton Kutcher and Amy Smart follows a man named Evan who attempts to fix his past to disastrous results?",
"answ":"THE BUTTERFLY EFFECT",
"answ2":"The Butterfly Effect."
},
{
"cat":"Romance",
"ques":"Which of the following actors did not appear in the 2011 film New Year's Eve: Josh Duhamel, Katherine Heigl, Bradley Cooper, or Nat Wolff?",
"answ":"BRADLEY COOPER",
"answ2":"Bradley Cooper."
},
{
"cat":"Musicals",
"ques":"Michelle Pfeiffer plays Stephanie, the leader of a girl gang, in what musical sequel?",
"answ":"GREASE 2",
"answ2":"Grease 2."
},
{
"cat":"2000s",
"ques":"Which comedian stars in the films Big Momma's House, Black Knight, and National Security?",
"answ":"MARTIN LAWRENCE",
"answ2":"Martin Lawrence."
},
{
"cat":"Dramas",
"ques":"Zach Braff wrote, directed, and starred in what 2004 romantic dramedy that also stars Natalie Portman and Peter Sarsgaard?",
"answ":"GARDEN STATE",
"answ2":"Garden State."
},
{
"cat":"Action/Adventure",
"ques":"In the 1993 thriller The Fugitive, which of the following actors did not appear: Joe Pantoliano, Cynthia Nixon, Jane Lynch, or Julianne Moore?",
"answ":"CYNTHIA NIXON",
"answ2":"Cynthia Nixon."
},
{
"cat":"Comedies",
"ques":"Which actress made her big screen debut as Tina Carlyle, opposite Jim Carrey, in the 1994 comedy The Mask?",
"answ":"CAMERON DIAZ",
"answ2":"Cameron Diaz."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Jennifer Lawrence stars as the courageous Katniss Everdeen in what dystopian science-fiction series with four films to date?",
"answ":"THE HUNGER GAMES",
"answ3":"HUNGER GAMES",
"answ2":"The Hunger Games."
},
{
"cat":"Horror",
"ques":"Rose goes in search of her adopted daughter within the confines of a strange, desolate town in what 2006 film based on a video game?",
"answ":"SILENT HILL",
"answ2":"Silent Hill."
},
{
"cat":"Rom-coms",
"ques":"Who starred in and directed the 1993 version of Much Ado About Nothing, also featuring Emma Thompson, Michael Keaton, Keanu Reeves, and Kate Beckinsale?",
"answ":"KENNETH BRANAGH",
"answ2":"Kenneth Branagh."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which actor appeared in the following four films: Child's Play, The Exorcist III, Rob Zombie's Halloween, and The Lord of the Rings: The Two Towers?",
"answ":"BRAD DOURIF",
"answ2":"Brad Dourif."
},
{
"cat":"Biopics",
"ques":"What 2016 film from Dexter Fletcher, which stars Taron Egerton and Hugh Jackman, follows the true life story of Michael Edwards and his journey to the 1988 Winter Olympics in Calgary, Alberta?",
"answ":"EDDIE THE EAGLE",
"answ2":"Eddie the Eagle."
},
{
"cat":"Alien Invasion",
"ques":"Aliens intercept video feeds of classic arcade games and misinterpret them as a declaration of war in what film starring Adam Sandler and Kevin James?",
"answ":"PIXELS",
"answ2":"Pixels."
},
{
"cat":"Alien Invasion",
"ques":"Stephen Herek made his directorial debut with what 1986 film where a group of dangerous aliens known as Krites appear in rural Kansas, terrifying the locals?",
"answ":"CRITTERS",
"answ2":"Critters."
},
{
"cat":"Alien Invasion",
"ques":"What 2010s alien invasion film features performances from Maika Monroe, William Fichtner, Liam Hemsworth, and Vivica A. Fox?",
"answ":"INDEPENDENCE DAY RESURGENCE",
"answ2":"Independence Day: Resurgence."
},
{
"cat":"Tom Hanks",
"ques":"Hanks stars in which 1980s comedy with the tagline 'A man's tradition every woman should know about.'?",
"answ":"BACHELOR PARTY",
"answ2":"Bachelor Party."
},
{
"cat":"Tom Hanks",
"ques":"In Steven Spielberg's The Post, what is the name of the U.S. military contractor whose employee copies classified reports on the progress in Vietnam?",
"answ":"THE RAND CORPORATION",
"answ2":"The RAND Corporation."
},
{
"cat":"Tom Hanks",
"ques":"Which actor plays the title character, a struggling magician, in the 2009 comedy The Great Buck Howard?",
"answ":"JOHN MALKOVICH",
"answ2":"John Malkovich."
},
{
"cat":"Sequels & Prequels",
"ques":"Which actress plays the role of Jyn Erso, who is attempting to steal the Death Star plans for the Rebel Alliance in Rogue One: A Star Wars Story?",
"answ":"FELICITY JONES",
"answ2":"Felicity Jones."
},
{
"cat":"Denzel Washington",
"ques":"Who plays the role of Special Agent Paul Pryzwarra in Déjà Vu?",
"answ":"VAL KILMER",
"answ2":"Val Kilmer."
},
{
"cat":"Scotts",
"ques":"What historical epic from director Ridley Scott features performances from David Thewlis, Eva Green, Liam Neeson, and Edward Norton?",
"answ":"KINGDOM OF HEAVEN",
"answ2":"Kingdom of Heaven."
},
{
"cat":"Morgan Freeman",
"ques":"Morgan Freeman appears in what sci-fi film that features supporting performances from Andrea Riseborough, Nikolaj Coster-Waldau, and Melissa Leo?",
"answ":"OBLIVION",
"answ2":"Oblivion."
},
{
"cat":"2020s",
"ques":"Who plays the lead role of Rob Feld, a former Portland-based chef turned reclusive truffle forager with the help of his prized foraging pig, in 2021's Pig?",
"answ":"NICOLAS CAGE",
"answ2":"Nicolas Cage."
},
{
"cat":"80s",
"ques":"What 1988 comedy from director Ivan Reitman features performances from Arnold Schwarzenegger, Kelly Preston, Danny DeVito, and David Caruso?",
"answ":"TWINS",
"answ2":"Twins."
},
{
"cat":"Family Films",
"ques":"Who directed Steve Martin, Bonnie Hunt, and Piper Perabo in the 2003 family comedy Cheaper by the Dozen?",
"answ":"SHAWN LEVY",
"answ2":"Shawn Levy."
},
{
"cat":"Movie Release Dates",
"ques":"J. J. Abrams' Super 8, Matthew Vaughn's X-Men: First Class, and Rupert Wyatt's Rise of the Planet of the Apes were released in what year?",
"answ":"2011",
"answ2":"2011."
},
{
"cat":"Animated",
"ques":"What 2010s animated Disney film features performances from Idris Elba, J. K. Simmons, Jason Bateman, and Ginnifer Goodwin?",
"answ":"ZOOTOPIA",
"answ2":"Zootopia."
},
{
"cat":"Disney",
"ques":"Oscar-winning actor George Sanders provided the voice of what classic Disney villain that is a Bengal tiger in the 1967 film The Jungle Book?",
"answ":"SHERE KHAN",
"answ2":"Shere Khan."
},
{
"cat":"Classics",
"ques":"What legendary actor appears in the films The Glenn Miller Story, Harvey, Rear Window, and Vertigo?",
"answ":"JAMES STEWART",
"answ2":"James Stewart."
},
{
"cat":"Denzel Washington",
"ques":"Don Cheadle, John Goodman, and Bruce Greenwood have supporting performances in what 2012 Denzel film?",
"answ":"FLIGHT",
"answ2":"Flight."
},
{
"cat":"Comedies",
"ques":"Will Ferrell, John C. Reilly, Adam Scott, and Richard Jenkins appear together in which comedy?",
"answ":"STEP BROTHERS",
"answ2":"Step Brothers."
},
{
"cat":"Ramis & Reitmans",
"ques":"In what 2010s film, that he also directed, does Ivan Reitman make a cameo as a musical TV show director?",
"answ":"NO STRINGS ATTACHED",
"answ2":"No Strings Attached."
},
{
"cat":"Sequels & Prequels",
"ques":"What is the title of the second film in the Mad Max series?",
"answ":"THE ROAD WARRIOR",
"answ2":"The Road Warrior."
},
{
"cat":"90s",
"ques":"Joe Pesci has a cameo at the end of what 1993 crime drama as a man named Carmine that Chazz Palminteri's Sonny had protected early in the film?",
"answ":"A BRONX TALE",
"answ2":"A Bronx Tale."
},
{
"cat":"Remakes & Reboots",
"ques":"What 2014 sci-fi reboot featured Joel Kinnaman as Alex Murphy, a detective who is injured in an explosion and transformed into a cyborg?",
"answ":"ROBOCOP",
"answ2":"RoboCop."
},
{
"cat":"2020s",
"ques":"Joe Carnahan directed Frank Grillo and Naomi Watts in what 2021 action thriller about a former special forces agent trapped in a time loop?",
"answ":"BOSS LEVEL",
"answ2":"Boss Level."
},
{
"cat":"Romance",
"ques":"Which actress co-stars with Tom Cruise as Shannon Christie in Ron Howard's epic western romantic adventure film Far and Away?",
"answ":"NICOLE KIDMAN",
"answ2":"Nicole Kidman."
},
{
"cat":"Comedies",
"ques":"Who plays professional assassin Martin Blank, who goes back home to Michigan for his high school reunion, in Grosse Pointe Blank?",
"answ":"JOHN CUSACK",
"answ2":"John Cusack."
},
{
"cat":"Movie Release Dates",
"ques":"In what year did Michael Bay's The Island, Tim Burton's Corpse Bride, and the Farrelly brothers' Fever Pitch release?",
"answ":"2005",
"answ2":"2005."
},
{
"cat":"Romance",
"ques":"What 2011 film was the first film in which Ryan Gosling and Emma Stone had an on-screen romance?",
"answ":"CRAZY STUPID LOVE",
"answ2":"Crazy, Stupid, Love."
},
{
"cat":"Paul Newman & Robert Redford",
"ques":"Robert Redford plays the father of Bryce Dallas Howard in what 2010s Disney remake that also featured Karl Urban?",
"answ":"PETE'S DRAGON",
"answ2":"Pete's Dragon."
},
{
"cat":"Animated",
"ques":"Michael Caine, Maggie Smith, Ozzy Osbourne, and Stephen Merchant appeared in two computer-animated films in the 2010s. Name one.",
"answ":"GNOMEO AND JULIET",
"answ3":"SHERLOCK GNOMES",
"answ2":"Gnomeo & Juliet / Sherlock Gnomes."
},
{
"cat":"Remakes & Reboots",
"ques":"Which actor appeared in 2012's Total Recall, 2002's Solaris, and 2009's Star Trek?",
"answ":"JOHN CHO",
"answ2":"John Cho."
},
{
"cat":"2020s",
"ques":"What is the title of the 2021 installment in the Halloween saga starring Jamie Lee Curtis and directed by David Gordon Green?",
"answ":"HALLOWEEN KILLS",
"answ2":"Halloween Kills."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which actress stars in the films Our Brand Is Crisis, Ocean's 8, Speed, and A Time to Kill?",
"answ":"SANDRA BULLOCK",
"answ2":"Sandra Bullock."
},
{
"cat":"Comedies",
"ques":"What 1999 fantasy comedy features supporting performances from Chris Rock, George Carlin, Janeane Garofalo, and Alanis Morissette?",
"answ":"DOGMA",
"answ2":"Dogma."
},
{
"cat":"2010s",
"ques":"Which 2019 horror film stars Samara Weaving, Adam Brody, Henry Czerny, and Andie MacDowell, which follows a bride in a deadly game of hide and seek?",
"answ":"READY OR NOT",
"answ2":"Ready or Not."
},
{
"cat":"Dramas",
"ques":"Who directed the following films: Last Flag Flying, Me and Orson Welles, and Before Sunrise?",
"answ":"RICHARD LINKLATER",
"answ2":"Richard Linklater."
},
{
"cat":"Directors",
"ques":"Who directed the classic film Dial M for Murder?",
"answ":"ALFRED HITCHCOCK",
"answ2":"Alfred Hitchcock."
},
{
"cat":"Crime",
"ques":"Who stars as Rick Santoro, a shady detective caught in the middle of a murder conspiracy at a boxing match, in the 1998 crime thriller Snake Eyes?",
"answ":"NICOLAS CAGE",
"answ2":"Nicolas Cage."
},
{
"cat":"90s",
"ques":"What is the subtitle of the sixth film in the Halloween franchise, featuring Paul Rudd?",
"answ":"THE CURSE OF MICHAEL MYERS",
"answ2":"The Curse of Michael Myers."
},
{
"cat":"Musicals",
"ques":"What musical stars Rod Steiger and Shirley Jones, and features the song 'People Will Say We're In Love'?",
"answ":"OKLAHOMA",
"answ2":"Oklahoma!."
},
{
"cat":"Horror",
"ques":"What 2013 supernatural horror film was Fede Álvarez's directorial debut, and the fourth installment in a franchise, the first not to be directed by Sam Raimi?",
"answ":"EVIL DEAD",
"answ2":"Evil Dead."
},
{
"cat":"Action/Adventure",
"ques":"Which action franchise features performances from Richard Crenna, Brian Dennehy, Martin Kove, Kurtwood Smith, and Sylvester Stallone?",
"answ":"RAMBO",
"answ2":"Rambo."
},
{
"cat":"Comic Book Movies",
"ques":"Of the following actors, which does not appear in 2003's Daredevil: Jennifer Garner, Kevin Smith, Jon Favreau, or Katherine Heigl?",
"answ":"KATHERINE HEIGL",
"answ2":"Katherine Heigl."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Matt Damon, Pedro Pascal, Jing Tian, and Willem Dafoe appear in what 2017 adventure film about a European mercenary imprisoned by Imperial Chinese forces?",
"answ":"THE GREAT WALL",
"answ2":"The Great Wall."
},
{
"cat":"Rom-coms",
"ques":"Will Ferrell and Nicole Kidman star in what 2005 Nora Ephron film, based on a sitcom, in which Kidman's Isabel Bigelow is revealed to be a real witch?",
"answ":"BEWITCHED",
"answ2":"Bewitched."
},
{
"cat":"Tom Cruise",
"ques":"What was Maverick's father's name in Top Gun?",
"answ":"DUKE MITCHELL",
"answ2":"Duke Mitchell."
},
{
"cat":"Tom Cruise",
"ques":"Tom Cruise stars in what thriller that is based on a John Grisham novel?",
"answ":"THE FIRM",
"answ2":"The Firm."
},
{
"cat":"Tom Cruise",
"ques":"Which film in the Mission: Impossible franchise is set largely in Australia?",
"answ":"MISSION IMPOSSIBLE II",
"answ3":"MISSION IMPOSSIBLE 2",
"answ2":"Mission: Impossible 2."
},
{
"cat":"Tom Cruise",
"ques":"What is the name of the real-life character played by Tom Cruise in Born on the Fourth of July?",
"answ":"RON KOVIC",
"answ2":"Ron Kovic."
},
{
"cat":"Tom Cruise",
"ques":"How many times has Tom Cruise been nominated for the Best Lead Actor Oscar?",
"answ":"2",
"answ3":"TWO",
"answ2":"2 (for Born on the Fourth of July, Jerry Maguire)."
},
{
"cat":"Remakes & Reboots",
"ques":"Sofia Boutella stars as Ahmanet, alongside Tom Cruise and Jake Johnson, in what 2017 action remake?",
"answ":"THE MUMMY",
"answ2":"The Mummy."
},
{
"cat":"Tom Cruise",
"ques":"Kevin Pollak plays Lt. Sam Weinberg, co-counsel of Tom Cruise's character, in what 1990s legal drama?",
"answ":"A FEW GOOD MEN",
"answ2":"A Few Good Men."
},
{
"cat":"Denzel Washington",
"ques":"Jovan Adepo plays Cory, the athletic son of Denzel Washington's character, in what acclaimed drama?",
"answ":"FENCES",
"answ2":"Fences."
},
{
"cat":"Animated",
"ques":"What 2016 animated Disney film featuring Dwayne Johnson includes these songs by Lin-Manuel Miranda: 'Shiny', 'You're Welcome', and 'How Far I'll Go'?",
"answ":"MOANA",
"answ2":"Moana."
},
{
"cat":"Horror",
"ques":"Which famed horror franchise features performances from Liev Schreiber, Kristen Bell, Jamie Kennedy, and David Arquette?",
"answ":"SCREAM",
"answ2":"Scream."
},
{
"cat":"Action/Adventure",
"ques":"How many films in the Bad Boys film series did Michael Bay direct?",
"answ":"2",
"answ":"TWO",
"answ2":"2."
},
{
"cat":"Biopics",
"ques":"Which 1994 biopic directed by Tim Burton won two Academy Awards, including one for Martin Landau as Best Supporting Actor for his performance as famed horror icon Bela Lugosi?",
"answ":"ED WOOD",
"answ2":"Ed Wood."
},
{
"cat":"90s",
"ques":"Which actor appeared opposite Tom Hanks in the films Apollo 13, The Green Mile, and Forrest Gump?",
"answ":"GARY SINISE",
"answ2":"Gary Sinise."
},
{
"cat":"90s",
"ques":"James Ivory directed Anthony Hopkins and Emma Thopmson in two 90s films: Howards End and what other film?",
"answ":"THE REMAINS OF THE DAY",
"answ2":"The Remains of the Day."
},
{
"cat":"90s",
"ques":"What 1990s biopic features supporting performances from Angela Bassett, Delroy Lindo, Peter Boyle, and Spike Lee?",
"answ":"MALCOLM X",
"answ2":"Malcolm X."
},
{
"cat":"Oscar Movies",
"ques":"What 2020 Pixar film won the Academy Award for Best Animated Feature in 2021?",
"answ":"SOUL",
"answ2":"Soul."
},
{
"cat":"Tom Cruise",
"ques":"Tom Cruise appears in what 2008 war comedy as movie producer Les Grossman opposite Ben Stiller and Robert Downey Jr.?",
"answ":"TROPIC THUNDER",
"answ2":"Tropic Thunder."
},
{
"cat":"Animated",
"ques":"You'll find Angus, a Highland bull voiced by David Tennant, in which 2017 animated film with Daveed Diggs, Anthony Anderson, and Peyton Manning?",
"answ":"FERDINAND",
"answ2":"Ferdinand."
},
{
"cat":"Scotts",
"ques":"Tony Scott directed Tom Cruise and Nicole Kidman in what film about a race car driver named Cole Trickle?",
"answ":"DAYS OF THUNDER",
"answ2":"Days of Thunder."
},
{
"cat":"2000s",
"ques":"Which 2000s crime film, directed by Guy Ritchie, features Jason Statham as Turkish and Brad Pitt as 'One Punch' Mickey O'Neil?",
"answ":"SNATCH",
"answ2":"Snatch."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"What popular sci-fi action franchise features performances from Josh Brolin, Tony Shalhoub, Tommy Lee Jones, and Tessa Thompson?",
"answ":"MEN IN BLACK",
"answ2":"Men in Black."
},
{
"cat":"Black Cinema",
"ques":"What 1992 crime thriller features performances from Omar Epps, Tupac Shakur, Samuel L. Jackson, and Queen Latifah?",
"answ":"JUICE",
"answ2":"Juice."
},
{
"cat":"2000s",
"ques":"Who directed Keanu Reeves and Jennifer Connelly in 2008's The Day the Earth Stood Still?",
"answ":"SCOTT DERRICKSON",
"answ2":"Scott Derrickson."
},
{
"cat":"Eastwoods",
"ques":"Credited as Scott Reeves, Scott Eastwood made his debut in this war film directed by his father.",
"answ":"FLAGS OF OUR FATHERS",
"answ2":"Flags of Our Fathers."
},
{
"cat":"Action/Adventure",
"ques":"Who appears in the following action films: The Meg, Ghosts of Mars, and The Italian Job?",
"answ":"JASON STATHAM",
"answ2":"Jason Statham."
},
{
"cat":"Horror",
"ques":"Which famed horror franchise features performances by Dennis Hopper, Matthew McConaughey, Jessica Biel, and R. Lee Ermey?",
"answ":"TEXAS CHAINSAW MASSACRE",
"answ2":"Texas Chainsaw Massacre."
},
{
"cat":"2010s",
"ques":"Which actor doesn't appear in Fantastic Beasts: The Crimes of Grindelwald: Dan Fogler, Eddie Redmayne, Jon Voight, or Zoë Kravitz?",
"answ":"JON VOIGHT",
"answ2":"Jon Voight."
},
{
"cat":"Sports",
"ques":"What 1992 hockey film featured the tagline 'He's never coached. They've never won. Together they'll learn everything about winning!'?",
"answ":"THE MIGHTY DUCKS",
"answ2":"The Mighty Ducks."
},
{
"cat":"Crime",
"ques":"What 1995 Martin Scorsese crime film features supporting performances from James Woods, Don Rickles, and Kevin Pollak?",
"answ":"CASINO",
"answ2":"Casino."
},
{
"cat":"2020s",
"ques":"What 2021 dramedy features supporting performances from Judi Dench, Ciarán Hinds, and Jamie Dornan?",
"answ":"BELFAST",
"answ2":"Belfast."
},
{
"cat":"Remakes & Reboots",
"ques":"Karl Urban is a law enforcer with the power of judge, jury, and executioner in a metropolis known as Mega-City One in what 2012 film?",
"answ":"DREDD",
"answ2":"Dredd."
},
{
"cat":"Sports",
"ques":"Which of the following baseball movies did Kevin Costner not appear in: Bull Durham, Field of Dreams, Major League, or For Love of the Game?",
"answ":"MAJOR LEAGUE",
"answ2":"Major League."
},
{
"cat":"Crime",
"ques":"Who plays Albert Sparma, a suspect in a string of serial murders that Denzel Washington is helping investigate, in 2021's The Little Things?",
"answ":"JARED LETO",
"answ2":"Jared Leto."
},
{
"cat":"2010s",
"ques":"Which of the following actors does not appear in The Expendables 3: Harrison Ford, Antonio Banderas, Glen Powell, or Bruce Willis?",
"answ":"BRUCE WILLIS",
"answ2":"Bruce Willis."
},
{
"cat":"Directors",
"ques":"Who directed the films Undercover Brother, Space Jam: A New Legacy, and The Best Man?",
"answ":"MALCOLM D LEE",
"answ2":"Malcolm D. Lee."
},
{
"cat":"2020s",
"ques":"What 2021 horror film follows Madison Lake Mitchell, played by Annabelle Wallis, who begins having terrifying visions of people being murdered?",
"answ":"MALIGNANT",
"answ2":"Malignant."
},
{
"cat":"Movie Quotes",
"ques":"In which popular comedy will you hear Jeff Daniels say 'She gave me a bunch of crap about me not listening to her, or something. I don't know, I wasn't really paying attention.'?",
"answ":"DUMB AND DUMBER",
"answ2":"Dumb and Dumber."
},
{
"cat":"Musicians in Film",
"ques":"What famed rock and roll musician appeared in the films Wayne's World, Spice World, and Fight Club?",
"answ":"MEAT LOAF",
"answ2":"Meat Loaf."
},
{
"cat":"Animated",
"ques":"Which animated Disney film features the songs 'Once Upon a Time in New York City' and 'Streets of Gold'?",
"answ":"OLIVER AND COMPANY",
"answ2":"Oliver & Company."
},
{
"cat":"Star Wars",
"ques":"Who directed Mark Hamill, Carrie Fisher, and Harrison Ford in The Empire Strikes Back?",
"answ":"IRVIN KERSHNER",
"answ2":"Irvin Kershner."
},
{
"cat":"Star Wars",
"ques":"In Rogue One, what is the color designation of the starfighter squadron that makes it through the shield gate to assist Rebels on the ground?",
"answ":"BLUE",
"answ2":"Blue."
},
{
"cat":"Star Wars",
"ques":"Ian McDiarmid portrayed which Star Wars villain?",
"answ":"SHEEV PALPATINE",
"answ3":"PALPATINE",
"answ2":"Sheev Palpatine."
},
{
"cat":"Star Wars",
"ques":"What is the name of the beast Jabba the Hutt uses to dispatch his enemies in the Dune Sea, which ultimately eats Boba Fett?",
"answ":"SARLACC",
"answ2":"Sarlacc."
},
{
"cat":"Star Wars",
"ques":"What species is Watto?",
"answ":"TOYDARIAN",
"answ2":"Toydarian."
},
{
"cat":"Comic Book Movies",
"ques":"Lori Petty stars in what 1995 film based on a British comic book?",
"answ":"TANK GIRL",
"answ2":"Tank Girl."
},
{
"cat":"2000s",
"ques":"How many films were theatrically released in the American Pie franchise during the 2000s?",
"answ":"2",
"answ3":"TWO",
"answ2":"2 (American Pie 2, American Wedding)."
},
{
"cat":"Animated",
"ques":"Dakota Fanning voices the title character in what 2000s animated film from director Henry Selick?",
"answ":"CORALINE",
"answ2":"Coraline."
},
{
"cat":"80s",
"ques":"Which 1980s sequel features supporting performances from Peter MacNicol, Kurt Fuller, Cheech Marin, and Bobby Brown?",
"answ":"GHOSTBUSTERS II",
"answ3":"GHOSTBUSTERS 2",
"answ2":"Ghostbusters II."
},
{
"cat":"Action/Adventure",
"ques":"Which film in the Terminator franchise features performances from Arnold Schwarzenegger, Linda Hamilton, and Mackenzie Davis?",
"answ":"TERMINATOR DARK FATE",
"answ3":"DARK FATE",
"answ2":"Terminator: Dark Fate."
},
{
"cat":"Rom-coms",
"ques":"What 2003 Christmas-themed film features performances from Bill Nighy, Keira Knightley, Hugh Grant, Emma Thompson, and Liam Neeson?",
"answ":"LOVE ACTUALLY",
"answ2":"Love Actually."
},
{
"cat":"Sports",
"ques":"Tom Hanks, Madonna, Geena Davis, and Jon Lovitz appear in what 1992 baseball film directed by Penny Marshall?",
"answ":"A LEAGUE OF THEIR OWN",
"answ2":"A League of Their Own."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which actress appears in the following films: Constantine, The Bourne Legacy, Black Widow, and 1999's The Mummy?",
"answ":"RACHEL WEISZ",
"answ2":"Rachel Weisz."
},
{
"cat":"Sly & Arnie",
"ques":"In what 2010s film does Arnold play John 'Breacher' Wharton, the leader of the DEA's Special Operations Team?",
"answ":"SABOTAGE",
"answ2":"Sabotage."
},
{
"cat":"Spy Movies",
"ques":"What 2010s action spy film directed by David Leitch features supporting performances from John Goodman, Toby Jones, and Bill Skarsgård?",
"answ":"ATOMIC BLONDE",
"answ2":"Atomic Blonde."
},
{
"cat":"DC Movies",
"ques":"What DC film features the following characters: Dr. Sivana, Mary Bromfield, and Freddy Freeman?",
"answ":"SHAZAM",
"answ2":"Shazam!."
},
{
"cat":"Martin Scorsese",
"ques":"Sacha Baron Cohen portrays the relentless yet clumsy station inspector in what 2010s family film from director Martin Scorsese?",
"answ":"HUGO",
"answ2":"Hugo."
},
{
"cat":"Streaming Movies",
"ques":"Who directed the 2017 supernatural crime thriller Death Note, featuring performances from Nat Wolff, Lakeith Stanfield, and Willem Dafoe?",
"answ":"ADAM WINGARD",
"answ2":"Adam Wingard."
},
{
"cat":"Christopher Nolan",
"ques":"Which actor appeared in the following Christopher Nolan films: Inception, Tenet, Interstellar, and The Prestige?",
"answ":"MICHAEL CAINE",
"answ2":"Michael Caine."
},
{
"cat":"Horror",
"ques":"What word is missing from the following movie titles: Night of the Living ___, The Return of the Living ___, and Day of the ___?",
"answ":"DEAD",
"answ2":"Dead."
},
{
"cat":"80s",
"ques":"What 80s film franchise features the characters Carey Mahoney, Thaddeus Harris, Moses Hightower, and Eugene Tackleberry?",
"answ":"POLICE ACADEMY",
"answ2":"Police Academy."
},
{
"cat":"80s",
"ques":"In 1980's 9 to 5, what actress portrays Violet Newstead, a widow with four kids who has been working at Consolidated for 12 years?",
"answ":"LILY TOMLIN",
"answ2":"Lily Tomlin."
},
{
"cat":"80s",
"ques":"In The Terminator, who plays police sergeant Hal Vukovich, the one who questions Sarah Connor?",
"answ":"LANCE HENRIKSEN",
"answ2":"Lance Henriksen."
},
{
"cat":"2020s",
"ques":"James Wan directed Annabelle Wallis, Mckenna Grace, and Jake Abel in this 2021 horror film.",
"answ":"MALIGNANT",
"answ2":"Malignant."
},
{
"cat":"2020s",
"ques":"Who plays Dennis Dannelly, alongside Anthony Mackie, in the film Synchronic?",
"answ":"JAMIE DORNAN",
"answ2":"Jamie Dornan."
},
{
"cat":"2020s",
"ques":"Who directed the Sopranos prequel The Many Saints of Newark, featuring Michael Gandolfini, Jon Bernthal, and Ray Liotta?",
"answ":"ALAN TAYLOR",
"answ2":"Alan Taylor."
},
{
"cat":"Remakes & Reboots",
"ques":"Which actor appeared in the following remakes: Cheaper by the Dozen, The Out-of-Towners, Father of the Bride, and The Pink Panther?",
"answ":"STEVE MARTIN",
"answ2":"Steve Martin."
},
{
"cat":"Animated",
"ques":"What animated franchise features the characters Bullseye the horse and stuntman Duke Caboom?",
"answ":"TOY STORY",
"answ2":"Toy Story."
},
{
"cat":"Crime",
"ques":"Steve McQueen stars in the 1968 crime film Bullitt, which has a famous car chase through what California city?",
"answ":"SAN FRANCISCO",
"answ2":"San Francisco."
},
{
"cat":"Denzel Washington",
"ques":"In total, how many times did Tony Scott direct Denzel Washington?",
"answ":"5",
"answ3":"FIVE",
"answ2":"5 (Crimson Tide, Man on Fire, Déjà Vu, The Taking of Pelham 123, Unstoppable)."
},
{
"cat":"Animated",
"ques":"What 2018 superhero film featured vocal performances from Shameik Moore, Mahershala Ali, and Zoë Kravitz?",
"answ":"SPIDER MAN INTO THE SPIDER VERSE",
"answ2":"Spider-Man: Into the Spider-Verse."
},
{
"cat":"Sequels & Prequels",
"ques":"In what 1991 sci-fi action film will you hear the line 'I need your clothes, your boots and your motorcycle.'?",
"answ":"TERMINATOR 2 JUDGMENT DAY",
"answ2":"Terminator 2: Judgment Day."
},
{
"cat":"Streaming Movies",
"ques":"Who directed Ryan Reynolds, Mélanie Laurent, and Corey Hawkins in the 2019 Netflix action film 6 Underground?",
"answ":"MICHAEL BAY",
"answ2":"Michael Bay."
},
{
"cat":"Horror",
"ques":"What 1956 classic horror film received remakes in 1978, 1994, and most recently in 2007 starring Daniel Craig?",
"answ":"INVASION OF THE BODY SNATCHERS",
"answ2":"Invasion of the Body Snatchers."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which actress appeared in the following films: Charlie's Angels: Full Throttle, Mr. Brooks, and Indecent Proposal?",
"answ":"DEMI MOORE",
"answ2":"Demi Moore."
},
{
"cat":"Comedies",
"ques":"What 2003 comedy features characters nicknamed the Godfather, the Tank, Beanie, and Blue?",
"answ":"OLD SCHOOL",
"answ2":"Old School."
},
{
"cat":"Action/Adventure",
"ques":"Who has directed all the films in the Kingsman series to date?",
"answ":"MATTHEW VAUGHN",
"answ2":"Matthew Vaughn."
},
{
"cat":"Comic Book Movies",
"ques":"Name one of the two actors who returned to the role of Peter Parker, alongside Tom Holland, in 2021's Spider-Man: No Way Home.",
"answ":"ANDREW GARFIELD",
"answ3":"TOBEY MAGUIRE",
"answ2":"Andrew Garfield / Tobey Maguire."
},
{
"cat":"Holiday Movies",
"ques":"What 1989 modern classic, featuring Julia Louis-Dreyfus, Doris Roberts, and Brian Doyle-Murray, has the line 'I'm sorry. This is our family's first kidnapping.'?",
"answ":"NATIONAL LAMPOON'S CHRISTMAS VACATION",
"answ3":"CHRISTMAS VACATION",
"answ2":"National Lampoon's Christmas Vacation."
},
{
"cat":"Remakes & Reboots",
"ques":"What 2002 film starring Adam Sandler, Winona Ryder, and John Turturro is a remake of a 1936 Frank Capra film?",
"answ":"MR DEEDS",
"answ2":"Mr. Deeds."
},
{
"cat":"Famous Actors & Actresses",
"ques":"What actor appeared in the following films: Down with Love, Salmon Fishing in the Yemen, and Angels & Demons?",
"answ":"EWAN MCGREGOR",
"answ2":"Ewan McGregor."
},
{
"cat":"Comedies",
"ques":"Of the following actors, who did not appear in 22 Jump Street: Wyatt Russell, Peter Stormare, Jake Johnson, or Dave Franco?",
"answ":"JAKE JOHNSON",
"answ2":"Jake Johnson."
},
{
"cat":"90s",
"ques":"What 1997 disaster film set in Los Angeles stars Tommy Lee Jones, Anne Heche, and Don Cheadle with the tagline 'It's Hotter than Hell!'?",
"answ":"VOLCANO",
"answ2":"Volcano."
},
{
"cat":"Black Cinema",
"ques":"In Barbershop, who plays Calvin, who inherited a barbershop from his deceased father?",
"answ":"ICE CUBE",
"answ2":"Ice Cube."
},
{
"cat":"Comedies",
"ques":"After their high school basketball coach passes away, five friends reunite for Fourth of July Weekend in what film featuring Kevin James, Chris Rock, and Adam Sandler?",
"answ":"GROWN UPS",
"answ2":"Grown Ups."
},
{
"cat":"2010s",
"ques":"Which of the following actors did NOT appear in Dumb and Dumber To: Kathleen Turner, Rob Riggle, Emma Stone, or Bill Murray?",
"answ":"EMMA STONE",
"answ2":"Emma Stone."
},
{
"cat":"Comic Book Movies",
"ques":"What Sam Raimi film features performances from Topher Grace, Bruce Campbell, Bryce Dallas Howard, and Kirsten Dunst?",
"answ":"SPIDER MAN 3",
"answ2":"Spider-Man 3."
},
{
"cat":"Action/Adventure",
"ques":"What is the title of the third film in the Bad Boys franchise?",
"answ":"BAD BOYS FOR LIFE",
"answ2":"Bad Boys for Life."
},
{
"cat":"Family Films",
"ques":"How many times did Richard Harris portray Albus Dumbledore in the Harry Potter series?",
"answ":"2",
"answ3":"TWO",
"answ2":"2."
},
{
"cat":"Black Cinema",
"ques":"Who directed Chi-Raq, a modern adaptation of the Greek play Lysistrata, set against the backdrop of gang violence in Chicago?",
"answ":"SPIKE LEE",
"answ2":"Spike Lee."
},
{
"cat":"Black Cinema",
"ques":"Rosario Dawson plays the character of Dina Lake in what 2000s Eddie Murphy film?",
"answ":"THE ADVENTURES OF PLUTO NASH",
"answ2":"The Adventures of Pluto Nash."
},
{
"cat":"Black Cinema",
"ques":"This sports film follows the true story of a high school basketball coach who suspended his undefeated team due to poor academics.",
"answ":"COACH CARTER",
"answ2":"Coach Carter."
},
{
"cat":"Classics",
"ques":"James Stewart stars in what 1950 film as Elwood P. Dowd, a man whose imaginary friend is a rabbit?",
"answ":"HARVEY",
"answ2":"Harvey."
},
{
"cat":"Scores & Soundtracks",
"ques":"Justin Hurwitz won an Academy Award for Best Original Score for which 2010s film?",
"answ":"LA LA LAND",
"answ2":"La La Land."
},
{
"cat":"Comedies",
"ques":"Which Ben Stiller film featured the line 'What is this? A center for ants? How can we be expected to teach children to learn how to read... if they can't even fit inside the building?'?",
"answ":"ZOOLANDER",
"answ2":"Zoolander."
},
{
"cat":"Sequels & Prequels",
"ques":"Name one of the two actors who portrayed Anakin Skywalker in the Star Wars prequel trilogy.",
"answ":"JAKE LLOYD",
"answ3":"HAYDEN CHRISTENSEN",
"answ2":"Jake Lloyd / Hayden Christensen."
},
{
"cat":"Musicians in Film",
"ques":"Which 'Material Girl' singer played the role of 'All the Way Mae' Mordabito in the Penny Marshall directed A League of Their Own?",
"answ":"MADONNA",
"answ2":"Madonna."
},
{
"cat":"Directors",
"ques":"Which film in the Mission: Impossible franchise was the first directed by Christopher McQuarrie?",
"answ":"MISSION IMPOSSIBLE ROGUE NATION",
"answ3":"ROGUE NATION",
"answ2":"Mission: Impossible Rogue Nation."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Of the following actors, which has NOT appeared in the Terminator franchise: Scott Glenn, Jason Clarke, Bill Paxton, or Lance Henriksen?",
"answ":"SCOTT GLENN",
"answ2":"Scott Glenn."
},
{
"cat":"Holiday Movies",
"ques":"What 1996 modern cult classic holiday movie featuring Phil Hartman, Sinbad, and Jake Lloyd, had the tagline 'Two Dads, One Toy, No Prisoners.'?",
"answ":"JINGLE ALL THE WAY",
"answ2":"Jingle All the Way."
},
{
"cat":"Rom-coms",
"ques":"Which actress was known as a pretty woman, went to my best friend's wedding, and then became a runaway bride?",
"answ":"JULIA ROBERTS",
"answ2":"Julia Roberts."
},
{
"cat":"Streaming Movies",
"ques":"David Ayer directed Will Smith and Joel Edgerton in what Netflix film where a detective must work with an orc to find a powerful wand before evil creatures do?",
"answ":"BRIGHT",
"answ2":"Bright."
},
{
"cat":"Sequels & Prequels",
"ques":"Since Pitch Black, how many times to date has Vin Diesel reprised the role as Furyan alien Richard B. Riddick in the Riddick franchise?",
"answ":"2",
"answ3":"TWO",
"answ2":"2 (in The Chronicles of Riddick, Riddick)."
},
{
"cat":"Movie Release Dates",
"ques":"What year saw Nicolas Cage look for a national treasure, while Shrek 2 took us to far, far away, and Zack Snyder unleashed the dawn of the dead?",
"answ":"2004",
"answ2":"2004."
},
{
"cat":"Comedies",
"ques":"What 2008 comedy remake featuring Alan Arkin and Dwayne 'The Rock' Johnson, featured the line 'Missed it by that much!'?",
"answ":"GET SMART",
"answ2":"Get Smart."
},
{
"cat":"Ramis & Reitmans",
"ques":"Ivan Reitman directed what 1990s comedy that features supporting performances from David Schwimmer, Allison Janney, Temuera Morrison, and Amy Sedaris?",
"answ":"SIX DAYS SEVEN NIGHTS",
"answ2":"Six Days, Seven Nights."
},
{
"cat":"Ramis & Reitmans",
"ques":"Which Jason Reitman directed film featured supporting performances from J. K. Simmons, Judy Greer, and Adam Sandler?",
"answ":"MEN WOMEN AND CHILDREN",
"answ2":"Men, Women & Children."
},
{
"cat":"Musicians in Film",
"ques":"Which Dan Aykroyd film, directed by John Landis, features performances from Aretha Franklin, James Brown, and Wilson Pickett?",
"answ":"BLUES BROTHERS 2000",
"answ2":"Blues Brothers 2000."
},
{
"cat":"Animated",
"ques":"Gilbert Gottfried voices a parrot named Iago in what 1992 Disney animated feature?",
"answ":"ALADDIN",
"answ2":"Aladdin."
},
{
"cat":"2020s",
"ques":"Ralph Fiennes plays the Duke of Oxford, opposite Rhys Ifans and Gemma Arterton, in what film from director Matthew Vaughn?",
"answ":"THE KING'S MAN",
"answ2":"The King's Man."
},
{
"cat":"Action/Adventure",
"ques":"Pierre Morel directed what 2009 action thriller starring Liam Neeson as a former CIA operative who tracks down his kidnapped teenage daughter?",
"answ":"TAKEN",
"answ2":"Taken."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Dorothy finds the Yellow Brick Road is now a pile of rubble, and the Emerald City is in ruin, in what 1985 dark fantasy film?",
"answ":"RETURN TO OZ",
"answ2":"Return to Oz."
},
{
"cat":"Biopics",
"ques":"What 2018 biopic stars Rami Malek in an Oscar-winning performance, telling the story of the British rock group Queen?",
"answ":"BOHEMIAN RHAPSODY",
"answ2":"Bohemian Rhapsody."
},
{
"cat":"Horror",
"ques":"What is the title of the fourth film in the Purge franchise, featuring Lauren Vélez, Y'lan Noel, and Marisa Tomei?",
"answ":"THE FIRST PURGE",
"answ2":"The First Purge."
},
{
"cat":"90s",
"ques":"Adrien Lyne directed Robert Redford and Demi Moore in what 1993 romantic drama?",
"answ":"INDECENT PROPOSAL",
"answ2":"Indecent Proposal."
},
{
"cat":"Tom Hanks",
"ques":"Tom Hanks plays the head guard of a penitentiary's death row in what 1999 Frank Darabont film based on a Stephen King book?",
"answ":"THE GREEN MILE",
"answ2":"The Green Mile."
},
{
"cat":"DC",
"ques":"What year saw the releases of both Batman Begins and Constantine?",
"answ":"2005",
"answ2":"2005."
},
{
"cat":"Dramas",
"ques":"Mackenzie Davis features as a mysterious night nanny, alongside Charlize Theron, in what 2018 film from director Jason Reitman?",
"answ":"TULLY",
"answ2":"Tully."
},
{
"cat":"Comic Book Movies",
"ques":"In what 2010s film featuring a performance from Michael Clarke Duncan will you find a fighter jet pilot with the callsign Hardball?",
"answ":"GREEN LANTERN",
"answ2":"Green Lantern."
},
{
"cat":"Rom-coms",
"ques":"Of the following films, which does NOT feature Matthew McConaughey: How to Lose a Guy in 10 Days, Maid in Manhattan, Ghosts of Girlfriends Past, or The Wedding Planner?",
"answ":"MAID IN MANHATTAN",
"answ2":"Maid in Manhattan."
},
{
"cat":"Famous Actors & Actresses",
"ques":"What famous actor appears in the following films: The Great Gatsby, The Quick and the Dead, and Shutter Island?",
"answ":"LEONARDO DICAPRIO",
"answ2":"Leonardo DiCaprio."
},
{
"cat":"Black Cinema",
"ques":"What comedian played the roles of Sherman Klump, Buddy Love, and Papa Cletus Klump in 1996's The Nutty Professor?",
"answ":"EDDIE MURPHY",
"answ2":"Eddie Murphy."
},
{
"cat":"Animated",
"ques":"What 1999 film based on a TV show featured the Oscar-nominated song 'Blame Canada'?",
"answ":"SOUTH PARK BIGGER LONGER AND UNCUT",
"answ2":"South Park: Bigger, Longer & Uncut."
},
{
"cat":"Comedies",
"ques":"Which 2006 Will Ferrell comedy features performances from Gary Cole, Amy Adams, John C. Reilly, and Michael Clarke Duncan?",
"answ":"TALLADEGA NIGHTS THE BALLAD OF RICKY BOBBY",
"answ3":"TALLADEGA NIGHTS",
"answ2":"Talladega Nights: The Ballad of Ricky Bobby."
},
{
"cat":"Sequels & Prequels",
"ques":"Shane Black directed what sci-fi action sequel featuring Boyd Holbrook, Olivia Munn, Keegan-Michael Key, and Sterling K. Brown?",
"answ":"THE PREDATOR",
"answ2":"The Predator."
},
{
"cat":"Talking Animal Movies",
"ques":"Who plays Norville 'Shaggy' Rogers opposite Scooby-Doo in the James Gunn penned and Raja Gosnell directed Scooby-Doo?",
"answ":"MATTHEW LILLARD",
"answ2":"Matthew Lillard."
},
{
"cat":"Talking Animal Movies",
"ques":"Which SNL alumnus voices Lucky, a dog that Eddie Murphy's John adopts, in 1998's Dr. Dolittle?",
"answ":"NORM MCDONALD",
"answ2":"Norm McDonald."
},
{
"cat":"Musicians in Film",
"ques":"Phil Collins makes a cameo as an English police inspector in what 1990s Steven Spielberg film in which he jokes that the missing children could all just be a prank?",
"answ":"HOOK",
"answ2":"Hook."
},
{
"cat":"Marvel Movies",
"ques":"Which MCU film featured the line 'You experience things and then they're over, and you still can't explain them. Gods, aliens, other dimensions. I'm just a man in a can.'?",
"answ":"IRON MAN 3",
"answ2":"Iron Man 3."
},
{
"cat":"Wrestlers in Film",
"ques":"John Carpenter directed Roddy Piper in what film with the line 'I have come here to chew bubblegum and kick ass... and I'm all out of bubblegum.'?",
"answ":"THEY LIVE",
"answ2":"They Live."
},
{
"cat":"Sequels & Prequels",
"ques":"Robert Carlyle, Idris Elba, and Jeremy Renner star in what 2007 horror sequel following military forces attempting to salvage a safe zone in London?",
"answ":"28 WEEKS LATER",
"answ2":"28 Weeks Later."
},
{
"cat":"Holiday Movies",
"ques":"Meg Ryan's Annie wants to meet what actor as Sam at the top of the Empire State Building on Valentine's Day in the film Sleepless in Seattle?",
"answ":"TOM HANKS",
"answ2":"Tom Hanks."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which famous actor helped fight an armageddon, coached under the Friday night lights, and was a bad Santa twice?",
"answ":"BILLY BOB THORNTON",
"answ2":"Billy Bob Thornton."
},
{
"cat":"Comedies",
"ques":"Dustin Hoffman and Barbra Streisand joined Ben Stiller and Robert De Niro for the first time in what 2004 sequel directed by Jay Roach?",
"answ":"MEET THE FOCKERS",
"answ2":"Meet the Fockers."
},
{
"cat":"Dramas",
"ques":"Who did NOT appear in the 2021 film House of Gucci: Al Pacino, Lady Gaga, Jeremy Irons, or Penelope Cruz?",
"answ":"PENELOPE CRUZ",
"answ2":"Penélope Cruz."
},
{
"cat":"Marvel",
"ques":"What MCU film, directed by Alan Taylor, featured Idris Elba, Natalie Portman, Christopher Eccleston, and Tom Hiddleston?",
"answ":"THOR THE DARK WORLD",
"answ2":"Thor: The Dark World."
},
{
"cat":"70s",
"ques":"1975's Tommy, featuring Jack Nicholson and Elton John, is a rock fantasy based on the works of what famous British rock band?",
"answ":"THE WHO",
"answ2":"The Who."
},
{
"cat":"Movies Involving Weddings",
"ques":"In The Godfather, what actor says the line 'You come into my house on the day my daughter is to be married and you ask me to do murder - for money.'?",
"answ":"MARLON BRANDO",
"answ2":"Marlon Brando."
},
{
"cat":"Movies Involving Weddings",
"ques":"Who plays Grace Le Domas, whose wedding night takes a sinister turn when her new in-laws force her to take part in a terrifying game, in Ready or Not?",
"answ":"SAMARA WEAVING",
"answ2":"Samara Weaving."
},
{
"cat":"Movies Involving Weddings",
"ques":"In which of the Pirates of the Caribbean sequels do Will and Elizabeth get married at sea during the middle of a battle?",
"answ":"PIRATES OF THE CARIBBEAN AT WORLD'S END",
"answ3":"AT WORLD'S END",
"answ2":"Pirates of the Caribbean: At World's End."
},
{
"cat":"Comic Book Movies",
"ques":"Bruce Willis, John Malkovich, and Anthony Hopkins star in what 2010s comic-based film from director Dean Parisot?",
"answ":"RED 2",
"answ2":"Red 2."
},
{
"cat":"Comedies",
"ques":"In what comedy does Steve Martin say the line 'You dirt-eating piece of slime! You scum-sucking pig! You son of a motherless goat!'?",
"answ":"THREE AMIGOS",
"answ2":"Three Amigos."
},
{
"cat":"Wrestlers in Film",
"ques":"Jake 'The Snake' Roberts appears as a local wrestler in what 2010s coming-of-age film featuring Jon Bernthal and Thomas Haden Church?",
"answ":"THE PEANUT BUTTER FALCON",
"answ2":"The Peanut Butter Falcon."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Which actor appeared in the following sci-fi films: Ender's Game, Cowboys & Aliens, and Blade Runner?",
"answ":"HARRISON FORD",
"answ2":"Harrison Ford."
},
{
"cat":"Amblin",
"ques":"What is the first film in the 1990s that Steven Spielberg directed?",
"answ":"HOOK",
"answ2":"Hook."
},
{
"cat":"Action/Adventure",
"ques":"Alicia Vikander and Angelina Jolie have both portrayed what famous character in the Tomb Raider films?",
"answ":"LARA CROFT",
"answ2":"Lara Croft."
},
{
"cat":"2000s",
"ques":"What 2007 Edgar Wright comedy follows a skilled London police officer that is transferred to a small village where violent murders begin to occur?",
"answ":"HOT FUZZ",
"answ2":"Hot Fuzz."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which of the following actors did NOT appear in 2018's Game Night: Jason Bateman, Danny Huston, Jon Hamm, or Michael C. Hall?",
"answ":"JON HAMM",
"answ2":"Jon Hamm."
},
{
"cat":"Dystopian Future & Time Travel",
"ques":"Jonathan Groff and Neil Patrick Harris joined returning cast members Carrie-Anne Moss and Jada Pinkett Smith in what 2021 sci-fi film?",
"answ":"THE MATRIX RESURRECTIONS",
"answ2":"The Matrix Resurrections."
},
{
"cat":"Star Trek",
"ques":"In which Star Trek film does John Larroquette play a Klingon henchman named Maltz?",
"answ":"STAR TREK III THE SEARCH FOR SPOCK",
"answ3":"THE SEARCH FOR SPOCK",
"answ2":"Star Trek III: The Search for Spock."
},
{
"cat":"Star Trek",
"ques":"Ben Cross plays the father of what well-known Star Trek character in 2009's Star Trek?",
"answ":"SPOCK",
"answ2":"Spock."
},
{
"cat":"Star Trek",
"ques":"How many Star Trek films did Leonard Nimoy direct?",
"answ":"2",
"answ3":"TWO",
"answ2":"2 (The Search for Spock, The Voyage Home)."
},
{
"cat":"Star Trek",
"ques":"In Star Trek II: The Wrath of Khan, Spock gives Kirk what Charles Dickens novel for his birthday?",
"answ":"A TALE OF TWO CITIES",
"answ2":"A Tale of Two Cities."
},
{
"cat":"Star Trek",
"ques":"In what Star Trek film will you see Kirk, Spock, and McCoy go camping at Yosemite National Park?",
"answ":"STAR TREK V THE FINAL FRONTIER",
"answ2":"Star Trek V: The Final Frontier."
},
{
"cat":"2020s",
"ques":"David Gordon Green directed Jamie Lee Curtis, Anthony Michael Hall, and Judy Greer in what 2021 slasher sequel?",
"answ":"HALLOWEEN KILLS",
"answ2":"Halloween Kills."
},
{
"cat":"Sports",
"ques":"In what 1985 coming-of-age film does Michael J. Fox play Scott Howard, a high school basketball player whose ordinary life is changed in drastic fashion?",
"answ":"TEEN WOLF",
"answ2":"Teen Wolf."
},
{
"cat":"Family Films",
"ques":"What 1995 family film features cameos from Clint Eastwood, Rodney Dangerfield, Mel Gibson, and Dan Aykroyd?",
"answ":"CASPER",
"answ2":"Casper."
},
{
"cat":"Animated",
"ques":"George Clooney, Meryl Streep, Jason Schwartzman, and Bill Murray provide voices in Fantastic Mr. Fox, released in what year?",
"answ":"2009",
"answ2":"2009."
},
{
"cat":"Sequels & Prequels",
"ques":"Which actor appeared in the following sequels: Zoolander 2, Anchorman 2: The Legend Continues, and Austin Powers: The Spy Who Shagged Me?",
"answ":"WILL FERRELL",
"answ2":"Will Ferrell."
},
{
"cat":"Holiday Movies",
"ques":"In what 2007 David Dobkin directed film did Paul Giamatti feature as Santa Claus alongside Vince Vaughn, Elizabeth Banks, and Kathy Bates?",
"answ":"FRED CLAUS",
"answ2":"Fred Claus."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Mistress of Evil was the subtitle to the 2019 sequel to what 2014 dark fantasy starring Angelina Jolie, Elle Fanning, and Sharlto Copley?",
"answ":"MALEFICENT",
"answ2":"Maleficent."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which of the following actresses does NOT appear in the sci-fi sequel Blade Runner 2049: Ana de Armas, Rebecca Ferguson, Robin Wright, or Mackenzie Davis?",
"answ":"REBECCA FERGUSON",
"answ2":"Rebecca Ferguson."
},
{
"cat":"Comedies",
"ques":"What Saturday Night Live alumnus plays the lead role of Conner4Real, alongside Tim Meadows and Joan Cusack, in the 2016 mockumentary Popstar: Never Stop Never Stopping?",
"answ":"ANDY SAMBERG",
"answ2":"Andy Samberg."
},
{
"cat":"Comic Book Movies",
"ques":"What Marvel film saw supporting performances from Dafne Keen, Boyd Holbrook, and Richard E. Grant?",
"answ":"LOGAN",
"answ2":"Logan."
},
{
"cat":"Westerns",
"ques":"What Middle-earth franchise actor features alongside Renée Zellweger, Jeremy Irons, and Lance Henriksen in the 2008 Ed Harris directed Appaloosa?",
"answ":"VIGGO MORTENSEN",
"answ2":"Viggo Mortensen."
},
{
"cat":"Musicians in Film",
"ques":"Harry Connick Jr. features in a supporting role alongside Will Smith, Bill Pullman, and Jeff Goldblum in what 1996 sci-fi action film?",
"answ":"INDEPENDENCE DAY",
"answ2":"Independence Day."
},
{
"cat":"Horror",
"ques":"Ethan Hawke, Vincent D'Onofrio, and Fred Thompson star in what 2012 Scott Derrickson film about a novelist who moves into a house where a family was murdered?",
"answ":"SINISTER",
"answ2":"Sinister."
},
{
"cat":"Star Trek",
"ques":"Which film features a main villain played by Malcolm McDowell who is of the race El-Aurian?",
"answ":"STAR TREK GENERATIONS",
"answ2":"Star Trek Generations."
},
{
"cat":"Star Trek",
"ques":"Which Next Generation Trek film has the tagline 'The Battle For Paradise Has Begun'?",
"answ":"STAR TREK INSURRECTION",
"answ2":"Star Trek: Insurrection."
},
{
"cat":"Sports",
"ques":"Who stars as Jim Braddock in the 2005 Ron Howard directed boxing drama Cinderella Man?",
"answ":"RUSSELL CROWE",
"answ2":"Russell Crowe."
},
{
"cat":"Directors",
"ques":"Who directed the 1990s films A Simple Plan and For Love of the Game?",
"answ":"SAM RAIMI",
"answ2":"Sam Raimi."
},
{
"cat":"Brad Pitt & George Clooney",
"ques":"Brad Pitt voices Metro Man, a former hero who would rather pursue a career in music, in what 2010 DreamWorks animated film?",
"answ":"MEGAMIND",
"answ2":"Megamind."
},
{
"cat":"Sequels & Prequels",
"ques":"Roselyn Sánchez and Don Cheadle join Jackie Chan and Chris Tucker in what 2000s action comedy sequel?",
"answ":"RUSH HOUR 2",
"answ2":"Rush Hour 2."
},
{
"cat":"Marvel",
"ques":"Which of the following actors has NOT lent their talents to a Marvel film: Alexander Skarsgård, William Hurt, Jeff Goldblum, or Bill Skarsgård?",
"answ":"ALEXANDER SKARSGARD",
"answ2":"Alexander Skarsgard."
},
{
"cat":"Marvel Movies",
"ques":"What is the title of the third film in the Blade franchise, which also features Ryan Reynolds and Jessica Biel?",
"answ":"BLADE TRINITY",
"answ2":"Blade: Trinity."
},
{
"cat":"Musicals",
"ques":"In the 1955 musical Guys and Dolls, which famed singer plays Nathan Detroit, alongside Marlon Brando's Sky Masterson?",
"answ":"FRANK SINATRA",
"answ2":"Frank Sinatra."
},
{
"cat":"Classics",
"ques":"Benny Hill co-stars with Michael Caine in what 1960s heist comedy film?",
"answ":"THE ITALIAN JOB",
"answ2":"The Italian Job."
},
{
"cat":"Action/Adventure",
"ques":"How many films in the Planet of the Apes franchise were directed by Matt Reeves?",
"answ":"2",
"answ3":"TWO",
"answ2":"2."
},
{
"cat":"Musicians in Film",
"ques":"Dave Grohl appears as Beelzeboss, a giant Satan-esque monster whom Jack Black and Kyle Gass must face off against, in what 2000s comedy?",
"answ":"TENACIOUS D IN THE PICK OF DESTINY",
"answ2":"Tenacious D in The Pick of Destiny."
},
{
"cat":"90s",
"ques":"In what year did a film have an asteroid threaten Earth in Armageddon, while a comet threatened Earth in Deep Impact?",
"answ":"1998",
"answ2":"1998."
},
{
"cat":"Steven Spielberg",
"ques":"In which Spielberg film does a cover-up spanning four U.S. Presidents push the country's first female newspaper publisher and her editor to make the information public?",
"answ":"THE POST",
"answ2":"The Post."
},
{
"cat":"2010s",
"ques":"Which actress appeared in the films Scott Pilgrim vs. the World, End of Watch, and A Simple Favor?",
"answ":"ANNA KENDRICK",
"answ2":"Anna Kendrick."
},
{
"cat":"Martin Scorsese",
"ques":"Which 1970s Martin Scorsese film was the first to be nominated for an Academy Award for Best Picture?",
"answ":"TAXI DRIVER",
"answ2":"Taxi Driver."
},
{
"cat":"Classics",
"ques":"What 1960s sci-fi film features supporting performances from Maurice Evans, Kim Hunter, Linda Harrison, and James Whitmore?",
"answ":"PLANET OF THE APES",
"answ2":"Planet of the Apes."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Dennis Quaid, Max von Sydow, and Christopher Plummer star in what 1984 film about psychics who use technology to enter people's dreams?",
"answ":"DREAMSCAPE",
"answ2":"Dreamscape."
},
{
"cat":"Remakes & Reboots",
"ques":"Anne Heche and Julianne Moore play sisters Marion and Lila Crane in what 1998 horror remake directed by Gus Van Sant?",
"answ":"PSYCHO",
"answ2":"Psycho."
},
{
"cat":"Streaming Movies",
"ques":"Alfonso Cuarón won a Best Director Oscar for what 2018 semi-autobiographical Netflix film?",
"answ":"ROMA",
"answ2":"Roma."
},
{
"cat":"Comedies",
"ques":"Who starred in the 1980s comedies Spies Like Us, Caddyshack II, and Funny Farm?",
"answ":"CHEVY CHASE",
"answ2":"Chevy Chase."
},
{
"cat":"Black Cinema",
"ques":"Mo' Better Blues is the first collaboration between Spike Lee and what Academy Award winning actor?",
"answ":"DENZEL WASHINGTON",
"answ2":"Denzel Washington."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"What sci-fi franchise features performances from Samuel L. Jackson, Ronny Cox, Gary Oldman, and Peter Weller?",
"answ":"ROBOCOP",
"answ2":"RoboCop."
},
{
"cat":"2010s",
"ques":"What famous actor won an Academy Award for Best Actor for his performance as Winston Churchill in the 2017 war drama Darkest Hour?",
"answ":"GARY OLDMAN",
"answ2":"Gary Oldman."
},
{
"cat":"2010s",
"ques":"In the biopic Trumbo, which Hollywood legend is the President of the Motion Picture Alliance for the Preservation of American Ideals?",
"answ":"JOHN WAYNE",
"answ2":"John Wayne."
},
{
"cat":"2010s",
"ques":"Which actor stars as the lead character Link in the 2016 action thriller Blood Father?",
"answ":"MEL GIBSON",
"answ2":"Mel Gibson."
},
{
"cat":"2010s",
"ques":"What MCU actor played English teacher Mr. Anderson in the 2012 adaptation of The Perks of Being a Wallflower?",
"answ":"PAUL RUDD",
"answ2":"Paul Rudd."
},
{
"cat":"Comic Book Movies",
"ques":"In which 2010s Spider-Man film does Peter Parker have a crush on a schoolmate named Liz?",
"answ":"SPIDER MAN HOMECOMING",
"answ2":"Spider-Man: Homecoming."
},
{
"cat":"Biopics",
"ques":"What 1990s biopic co-stars Kyle MacLachlan, Frank Whaley, and Kevin Dillon?",
"answ":"THE DOORS",
"answ2":"The Doors."
},
{
"cat":"80s",
"ques":"Who plays hard-luck cabbie John Winger, who enlists in the U.S. Army with his close pal Russell Ziskey, in the comedy Stripes?",
"answ":"BILL MURRAY",
"answ2":"Bill Murray."
},
{
"cat":"Comedies",
"ques":"Which character, played by Jim Varney, was scared stupid, saved Christmas, and goes to jail?",
"answ":"ERNEST P WORRELL",
"answ3":"ERNEST",
"answ2":"Ernest P. Worrell."
},
{
"cat":"Black Cinema",
"ques":"Who plays Carrie Carter, Kevin Hart's unorthodox teacher, in the 2018 film Night School?",
"answ":"TIFFANY HADDISH",
"answ2":"Tiffany Haddish."
},
{
"cat":"2010s",
"ques":"What 2010s film, featuring Oscar Isaac, Albert Brooks, and Carey Mulligan, featured the tagline 'There Are No Clean Getaways'?",
"answ":"DRIVE",
"answ2":"Drive."
},
{
"cat":"Historical Epics & Dramas",
"ques":"Of the following actors, who did NOT appear in Ridley Scott's Kingdom of Heaven: Liam Neeson, Cate Blanchett, Michael Sheen, or Eva Green?",
"answ":"CATE BLANCHETT",
"answ2":"Cate Blanchett."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which of the following movies does NOT feature Bradley Cooper: Limitless, The Mule, The Fighter, or Yes Man?",
"answ":"THE FIGHTER",
"answ2":"The Fighter."
},
{
"cat":"Action/Adventure",
"ques":"Of the following, who does NOT appear in the 2019 action comedy Charlie's Angels: Jaclyn Smith, Demi Moore, Ella Balinska, or Elizabeth Banks?",
"answ":"DEMI MOORE",
"answ2":"Demi Moore."
},
{
"cat":"Monster Movies",
"ques":"In what 2013 sci-fi monster film will you find the characters Marshal Stacker Pentecost, Mako Mori, Raleigh Becket, and Hannibal Chau?",
"answ":"PACIFIC RIM",
"answ2":"Pacific Rim."
},
{
"cat":"Movie Release Dates",
"ques":"How many times have both a Rocky and a Rambo movie been released in the same year?",
"answ":"2",
"answ3":"TWO",
"answ2":"2 (1982 had Rocky III, First Blood; 1985 had Rocky IV, Rambo: First Blood Part II)."
},
{
"cat":"Streaming Movies",
"ques":"What actor plays the character known as One in the 2019 Michael Bay directed Netflix action thriller 6 Underground?",
"answ":"RYAN REYNOLDS",
"answ2":"Ryan Reynolds."
},
{
"cat":"Sequels & Prequels",
"ques":"What is the title of the 2021 sequel to the 2002 DreamWorks animated film Spirit: Stallion of the Cimarron?",
"answ":"SPIRIT UNTAMED",
"answ2":"Spirit Untamed."
},
{
"cat":"2000s",
"ques":"What Fast & Furious franchise actress plays Eden, a surfer and best friend to Kate Bosworth's Anne Marie, in the 2002 film Blue Crush?",
"answ":"MICHELLE RODRIGUEZ",
"answ2":"Michelle Rodriguez."
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the releases of Iron Man 3 and Fast & Furious 6?",
"answ":"2013",
"answ2":"2013."
},
{
"cat":"Movie Release Dates",
"ques":"Robert Downey Jr. appeared in the films Kiss Kiss Bang Bang and Good Night, and Good Luck in what year?",
"answ":"2005",
"answ2":"2005."
},
{
"cat":"Jim Carrey",
"ques":"How many movies did Jim Carrey star in in the year 1994?",
"answ":"3",
"answ3":"THREE",
"answ2":"3 (Ace Ventura: Pet Detective, The Mask, Dumb and Dumber)."
},
{
"cat":"Movie Release Dates",
"ques":"The sci-fi films Blade Runner and Star Trek II: The Wrath of Khan were released in what year?",
"answ":"1982",
"answ2":"1982."
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the releases of the Mike Myers movies So I Married an Axe Murderer and Wayne's World 2?",
"answ":"1993",
"answ2":"1993."
},
{
"cat":"2020s",
"ques":"Which actor, who also co-directed the film, plays the lead role of U.S. Army Ranger Jackson Briggs in 2022's Dog?",
"answ":"CHANNING TATUM",
"answ2":"Channing Tatum."
},
{
"cat":"Action/Adventure",
"ques":"What actor appeared in the following movies: Johnny Mnemonic, I Come in Peace, Universal Soldier, and The Expendables?",
"answ":"DOLPH LUNDGREN",
"answ2":"Dolph Lundgren."
},
{
"cat":"Musicians in Film",
"ques":"What famed musician dealt with her monster-in-law, was out of sight, made a U-turn, and in 2022 attempted to marry me?",
"answ":"JENNIFER LOPEZ",
"answ2":"Jennifer Lopez."
},
{
"cat":"Famous Actors & Actresses",
"ques":"What famous actor has played roles with the names of Major William Cage, Stacee Jaxx, and Pete Mitchell?",
"answ":"TOM CRUISE",
"answ2":"Tom Cruise."
},
{
"cat":"Comedies",
"ques":"In what 2004 comedy starring Jon Heder does a family keep a pet llama named Tina?",
"answ":"NAPOLEON DYNAMITE",
"answ2":"Napoleon Dynamite."
},
{
"cat":"Holiday Movies",
"ques":"Who plays the role of Kate Andrich, who works a dead-end job as an elf at a year-round Christmas shop in Central London in the 2019 rom-com Last Christmas?",
"answ":"EMILIA CLARKE",
"answ2":"Emilia Clarke."
},
{
"cat":"Directors",
"ques":"What 1998 action film featuring Chow Yun-fat, Mira Sorvino, and Michael Rooker was Antoine Fuqua's feature film directorial debut?",
"answ":"THE REPLACEMENT KILLERS",
"answ2":"The Replacement Killers."
},
{
"cat":"Wrestlers in Film",
"ques":"Jerry 'The King' Lawler and Jim Ross appear opposite Jim Carrey in what 1999 biopic from director Miloš Forman?",
"answ":"MAN ON THE MOON",
"answ2":"Man on the Moon."
},
{
"cat":"Oscar Movies",
"ques":"Director Joe Johnston has won one Oscar in his career, though instead of winning for directing, he won for Visual Effects for what film?",
"answ":"RAIDERS OF THE LOST ARK",
"answ2":"Raiders of the Lost Ark."
},
{
"cat":"Oscar Movies",
"ques":"My Left Foot and Born on the Fourth of July were both nominated for Best Picture in what year?",
"answ":"1990",
"answ2":"1990."
},
{
"cat":"Oscar Movies",
"ques":"This 2017 film won the Oscar for Best Animated Feature at the 90th Academy Awards in 2018.",
"answ":"COCO",
"answ2":"Coco."
},
{
"cat":"Oscar Movies",
"ques":"The Elton John biopic Rocketman was nominated for a single Academy Award, which it won. What was that award?",
"answ":"BEST ORIGINAL SONG",
"answ2":"Best Original Song."
},
{
"cat":"Oscar Movies",
"ques":"Scott Neustadter and Michael H. Weber were nominated for an Academy Award writing which 2017 film?",
"answ":"THE DISASTER ARTIST",
"answ2":"The Disaster Artist."
},
{
"cat":"Jamie Lee Curtis",
"ques":"Which SNL actor plays Vic Frohmeyer, the Kranks' domineering neighbor, in 2004's Christmas with the Kranks, featuring Tim Allen and Jamie Lee Curtis?",
"answ":"DAN AYKROYD",
"answ2":"Dan Aykroyd."
},
{
"cat":"Jamie Lee Curtis",
"ques":"In what 1980 horror film does Jamie Lee Curtis appear with her mother Janet Leigh, who plays the character Kathy Williams?",
"answ":"THE FOG",
"answ2":"The Fog."
},
{
"cat":"Jamie Lee Curtis",
"ques":"Which actor plays Simon, a used car salesman pretending to be a covert agent, in 1994's True Lies?",
"answ":"BILL PAXTON",
"answ2":"Bill Paxton."
},
{
"cat":"Morgan Freeman",
"ques":"In how many Christopher Nolan films did Morgan Freeman portray Lucius Fox, alongside Christian Bale?",
"answ":"3",
"answ3":"THREE",
"answ2":"3."
},
{
"cat":"Sequels & Prequels",
"ques":"Which Academy Award winning actress plays the role of Padmé Amidala in the Star Wars prequel trilogy?",
"answ":"NATALIE PORTMAN",
"answ2":"Natalie Portman."
},
{
"cat":"Scotts",
"ques":"Ridley Scott had two films released in 2001. One was Black Hawk Down. Name the other.",
"answ":"HANNIBAL",
"answ2":"Hannibal."
},
{
"cat":"Remakes & Reboots",
"ques":"Tom Savini directed Tony Todd and Patricia Tallman in what 1990 horror remake, which begins in a remote Pennsylvania cemetery?",
"answ":"NIGHT OF THE LIVING DEAD",
"answ2":"Night of the Living Dead."
},
{
"cat":"70s",
"ques":"In the 1970s, what director had close encounters of the third kind, took us back to 1941, and made us scared of the water in Jaws?",
"answ":"STEVEN SPIELBERG",
"answ2":"Steven Spielberg."
},
{
"cat":"Thrillers",
"ques":"In 1998's U.S. Marshals, who reprises his Academy Award winning role of Sam Gerard from The Fugitive, alongside newcomers Wesley Snipes and Robert Downey Jr.?",
"answ":"TOMMY LEE JONES",
"answ2":"Tommy Lee Jones."
},
{
"cat":"Black Cinema",
"ques":"How many times has Samuel L. Jackson played the role of Detective John Shaft?",
"answ":"2",
"answ2":"2."
},
{
"cat":"Rom-coms",
"ques":"What actress famously fell in love three times with Tom Hanks, first when he was versus a volcano, then while feeling sleepless in Seattle, and finally when AOL said 'You've Got Mail'?",
"answ":"MEG RYAN",
"answ2":"Meg Ryan."
},
{
"cat":"Family Films",
"ques":"Christopher Lloyd appears as the Keeper of the Books and Guardian of the Written Word, opposite Macaulay Culkin as Richard Tyler, in what 1994 family adventure film?",
"answ":"THE PAGEMASTER",
"answ2":"The Pagemaster."
},
{
"cat":"Comedies",
"ques":"What famous stand-up comedian played a righteous dude in the Bill & Ted series and an inventive cardinal in Dogma, and voices a hippie van in Cars?",
"answ":"GEORGE CARLIN",
"answ2":"George Carlin."
},
{
"cat":"Steven Spielberg",
"ques":"What 2018 Spielberg film featuring Tye Sheridan opens with Van Halen's classic 'Jump'?",
"answ":"READY PLAYER ONE",
"answ2":"Ready Player One."
},
{
"cat":"Animated",
"ques":"Channing Tatum voices Migo, a young yeti that comes across a human being in what 2018 film also featuring Zendaya and LeBron James?",
"answ":"SMALLFOOT",
"answ2":"Smallfoot."
},
{
"cat":"Streaming Movies",
"ques":"Who plays the lead role of Daryl Ward, a human LAPD officer working alongside Joel Edgerton's Nick Jakoby, the nation's first orc police officer, in the David Ayer film Bright?",
"answ":"WILL SMITH",
"answ2":"Will Smith."
},
{
"cat":"2010s",
"ques":"Ed Helms stars as Tim Lippe, a Wisconsin man who represents his company at an annual insurance convention in what 2010s comedy?",
"answ":"CEDAR RAPIDS",
"answ2":"Cedar Rapids."
},
{
"cat":"Scores & Soundtracks",
"ques":"To date, how many films in the Indiana Jones franchise has John Williams composed the score for?",
"answ":"5",
"answ3":"FIVE",
"answ2":"5 (Raiders of the Lost Ark, The Temple of Doom, The Last Crusade, The Kingdom of the Crystal Skull, Dial of Destiny)."
},
{
"cat":"Family Films",
"ques":"Peter Capaldi, Nicole Kidman, Jim Broadbent, and Sally Hawkins all feature as supporting roles in what 2015 family film from director Paul King?",
"answ":"PADDINGTON",
"answ2":"Paddington."
},
{
"cat":"90s",
"ques":"Name one of the two Academy Award winning films released by Steven Spielberg in 1993.",
"answ":"SCHINDLER'S LIST",
"answ3":"JURASSIC PARK",
"answ2":"Jurassic Park / Schindler's List."
},
{
"cat":"Rom-coms",
"ques":"Sixteen Candles, featuring Molly Ringwald, is the feature film directorial debut of what famous coming-of-age director?",
"answ":"JOHN HUGHES",
"answ2":"John Hughes."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Who directed the following sci-fi horror films: Upgrade and The Invisible Man (2020)?",
"answ":"LEIGH WHANNELL",
"answ2":"Leigh Whannell."
},
{
"cat":"Marvel Movies",
"ques":"Who directed Andrew Garfield in The Amazing Spider-Man?",
"answ":"MARC WEBB",
"answ2":"Marc Webb."
},
{
"cat":"Marvel Movies",
"ques":"Which actor plays Dieter Reinhardt, a member of the Bloodpack who bears a particular grudge against Blade in Blade II?",
"answ":"RON PERLMAN",
"answ2":"Ron Perlman."
},
{
"cat":"Marvel Movies",
"ques":"Who played Stick in 2005's Elektra?",
"answ":"TERENCE STAMP",
"answ2":"Terence Stamp."
},
{
"cat":"Marvel Movies",
"ques":"Who played Bobby Drake a.k.a. Iceman in X-Men, X2, and X-Men: The Last Stand?",
"answ":"SHAWN ASHMORE",
"answ2":"Shawn Ashmore."
},
{
"cat":"Marvel",
"ques":"In X-Men: First Class, what did Magneto kill Sebastian Shaw with?",
"answ":"A COIN",
"answ3":"COIN",
"answ2":"A coin."
},
{
"cat":"Sly & Arnie",
"ques":"In what Rocky film will you see Sylvester Stallone go against Clubber Lang, played by Mr. T?",
"answ":"ROCKY III",
"answ2":"Rocky III."
},
{
"cat":"Dramas",
"ques":"Which Oscar-winning actress stars in the 1993 drama A Home of Our Own, as a single mother of six who struggles to find a permanent living situation for her family?",
"answ":"KATHY BATES",
"answ2":"Kathy Bates."
},
{
"cat":"Horror",
"ques":"David Gordon Green directed what 2018 horror film that featured the return of Jamie Lee Curtis to her iconic role of Laurie Strode?",
"answ":"HALLOWEEN",
"answ2":"Halloween."
},
{
"cat":"Animated",
"ques":"What Pirates of the Caribbean director also helmed 2011's Rango, which would go on to win the Academy Award for Best Animated Feature?",
"answ":"GORE VERBINSKI",
"answ2":"Gore Verbinski."
},
{
"cat":"Musicals",
"ques":"What Star Wars actor appeared in the musicals Velvet Goldmine, Moulin Rouge!, and 2017's Beauty and the Beast?",
"answ":"EWAN MCGREGOR",
"answ2":"Ewan McGregor."
},
{
"cat":"Bill Murray",
"ques":"What giant monster does Ray summon at the end of the original Ghostbusters, simply by thinking about it?",
"answ":"STAY PUFT MARSHMALLOW MAN",
"answ2":"Stay Puft Marshmallow Man."
},
{
"cat":"2000s",
"ques":"What actress played, captain of the East Compton Clovers, in 2000's Bring It On?",
"answ":"GABRIELLE UNION",
"answ2":"Gabrielle Union."
},
{
"cat":"2000s",
"ques":"In Almost Famous, who plays band manager Dennis Hope?",
"answ":"JIMMY FALLON",
"answ2":"Jimmy Fallon."
},
{
"cat":"Pixar",
"ques":"Which James Bond actor is the voice of the toy Mr. Pricklepants in Toy Story 3?",
"answ":"TIMOTHY DALTON",
"answ2":"Timothy Dalton."
},
{
"cat":"Pixar",
"ques":"In 2013's Monsters University, which Marvel villain actor voices Professor Derek Knight, the teacher of 'Scaring 101'?",
"answ":"ALFRED MOLINA",
"answ2":"Alfred Molina."
},
{
"cat":"Pixar",
"ques":"In what Pixar film will you find the characters Holley Shiftwell, Brent Mustangburger, and Rod Redline?",
"answ":"CARS 2",
"answ2":"Cars 2."
},
{
"cat":"Pixar",
"ques":"Which comedian provides the voice of the angry ladybug Francis in Pixar's A Bug's Life?",
"answ":"DENIS LEARY",
"answ2":"Denis Leary."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"What is the title of the 2018 sequel to Pacific Rim, starring John Boyega?",
"answ":"PACIFIC RIM UPRISING",
"answ2":"Pacific Rim: Uprising."
},
{
"cat":"Sigourney Weaver",
"ques":"Which 1970s Best Picture winner was the film debut of Sigourney Weaver, opposite Diane Keaton, Paul Simon, and Shelley Duvall?",
"answ":"ANNIE HALL",
"answ2":"Annie Hall."
},
{
"cat":"Paul Newman & Robert Redford",
"ques":"Sidney Poitier, Dan Aykroyd, and Robert Redford star in what 1992 crime comedy directed by Phil Alden Robinson?",
"answ":"SNEAKERS",
"answ2":"Sneakers."
},
{
"cat":"Comedies",
"ques":"What 1980s comedy features Michael McKean, Ben Stein, Edie McClurg, and Kevin Bacon in cameo appearances?",
"answ":"PLANES TRAINS AND AUTOMOBILES",
"answ2":"Planes, Trains and Automobiles."
},
{
"cat":"Sports",
"ques":"Which actor appeared in the sports films Blue Chips, North Dallas Forty, and Warrior?",
"answ":"NICK NOLTE",
"answ2":"Nick Nolte."
},
{
"cat":"Musicals",
"ques":"What 2007 Disney musical with the songs 'True Love's Kiss' and 'That's How You Know' featured performances from Idina Menzel and Timothy Spall?",
"answ":"ENCHANTED",
"answ2":"Enchanted."
},
{
"cat":"Holiday Movies",
"ques":"Which comedian gave performances in the following holiday films: Hubie Halloween, Home Sweet Home Alone, and 2018's The Grinch?",
"answ":"KENAN THOMPSON",
"answ2":"Kenan Thompson."
},
{
"cat":"Scores & Soundtracks",
"ques":"For which Avengers film did Alan Silvestri NOT compose the score?",
"answ":"AVENGERS AGE OF ULTRON",
"answ3":"AGE OF ULTRON",
"answ2":"Avengers: Age of Ultron."
},
{
"cat":"Musicians in Film",
"ques":"Which film in the Ocean's franchise features Rihanna as a tech-savvy hacker, Nine Ball?",
"answ":"OCEAN'S 8",
"answ2":"Ocean's 8."
},
{
"cat":"2010s",
"ques":"Andy Samberg and Tim Meadows are attacked by killer bees in what 2010s mockumentary?",
"answ":"POPSTAR NEVER STOP NEVER STOPPING",
"answ2":"Popstar: Never Stop Never Stopping."
},
{
"cat":"Sequels & Prequels",
"ques":"What year saw sequels in the Halloween, Men in Black, and Star Trek franchises?",
"answ":"2002",
"answ2":"2002 (with Halloween: Resurrection, Men in Black II, Star Trek: Nemesis)."
},
{
"cat":"Thrillers",
"ques":"Who did NOT appear in 2004's Collateral: Javier Barden, Jason Statham, Jada Pinkett Smith, or Regina King?",
"answ":"REGINA KING",
"answ2":"Regina King."
},
{
"cat":"Directors",
"ques":"What director, who acted in the Halloween series, directed the 1990s comedies Dennis the Menace and Major Payne?",
"answ":"NICK CASTLE",
"answ2":"Nick Castle."
},
{
"cat":"Wizarding World",
"ques":"What Oscar-winning actor plays the new Potions professor, Horace Slughorn, in Harry Potter and the Half-Blood Prince?",
"answ":"JIM BROADBENT",
"answ2":"Jim Broadbent."
},
{
"cat":"Movie Release Dates",
"ques":"George Clooney was in Out of Sight and which other film in 1998?",
"answ":"THE THIN RED LINE",
"answ2":"The Thin Red Line."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which actress played Snow White in Snow White and the Huntsman, was one of Charlie's Angels, and married a vampire in the Twilight franchise?",
"answ":"KRISTEN STEWART",
"answ2":"Kristen Stewart."
},
{
"cat":"Streaming Movies",
"ques":"Who was nominated for an Academy Award for directing Gary Oldman as Herman J. Mankiewicz in the 2020 Netflix biopic Mank?",
"answ":"DAVID FINCHER",
"answ2":"David Fincher."
},
{
"cat":"Wrestlers in Film",
"ques":"Tyler Mane appears opposite James Marsden and Hugh Jackman in what 2000 comic book adaptation?",
"answ":"X MEN",
"answ2":"X-Men."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"What 2001 sci-fi action film is the the third in a franchise and features performances from William H. Macy, Téa Leoni, and Laura Dern?",
"answ":"JURASSIC PARK III",
"answ2":"Jurassic Park III."
},
{
"cat":"Sports",
"ques":"Peyton Reed directed Kirsten Dunst and Gabrielle Union in what 2000 sports comedy about rival cheerleading teams?",
"answ":"BRING IT ON",
"answ2":"Bring It On."
},
{
"cat":"Dramas",
"ques":"What 2016 biographical crime drama features performances from Melissa Leo, Zachary Quinto, Nicolas Cage, and Timothy Olyphant?",
"answ":"SNOWDEN",
"answ2":"Snowden."
},
{
"cat":"Action/Adventure",
"ques":"Of the following actors, who does NOT appear in the Mummy franchise: Michelle Yeoh, Paul Bettany, John Hannah, or Maria Bello?",
"answ":"PAUL BETTANY",
"answ2":"Paul Bettany."
},
{
"cat":"Belated Sequels",
"ques":"Which Oscar-winning director brought Ewan McGregor's Mark 'Rent Boy' Renton and Robert Carlyle's Francis 'Franco' Begbie back to the big screen in T2 Trainspotting?",
"answ":"DANNY BOYLE",
"answ2":"Danny Boyle."
},
{
"cat":"Belated Sequels",
"ques":"Which Mike Flanagan regular plays the bartender, an apparition who calls himself Lloyd but resembles Dan's late father Jack Torrance, in Doctor Sleep?",
"answ":"HENRY THOMAS",
"answ2":"Henry Thomas."
},
{
"cat":"Belated Sequels",
"ques":"What 1980s belated horror sequel from director Richard Franklin featured performances from Robert Loggia, Meg Tilly, Dennis Franz, and Vera Miles?",
"answ":"PSYCHO II",
"answ2":"Psycho II."
},
{
"cat":"Belated Sequels",
"ques":"Who was nominated for an Academy Award for the role of Vincenzo Corleone, Michael's nephew and the illegitimate son of Sonny, in The Godfather Part III?",
"answ":"ANDY GARCÍA",
"answ2":"Andy García."
},
{
"cat":"Belated Sequels",
"ques":"Who makes a cameo as Ivo Shandor, the leader of a Gozer-worshipping cult, who is quickly dispatched by the Sumerian god, in Ghostbusters: Afterlife? ",
"answ":"J K SIMMONS",
"answ3":"JK SIMMONS",
"answ2":"J. K. Simmons."
},
{
"cat":"Black Cinema",
"ques":"Who received an Academy Award nomination for Best Supporting Actress for portrayal as Sofia in the Steven Spielberg directed film The Color Purple?",
"answ":"OPRAH WINFREY",
"answ2":"Oprah Winfrey."
},
{
"cat":"Black Cinema",
"ques":"Which actor had roles in Scary Movie 3, Along Came Polly, and About Last Night?",
"answ":"KEVIN HART",
"answ2":"Kevin Hart."
},
{
"cat":"Black Cinema",
"ques":"Forest Whitaker plays jazz musician Charlie Parker in what film?",
"answ":"BIRD",
"answ2":"Bird."
},
{
"cat":"Horror",
"ques":"The original versions of 13 Ghosts, The Haunting, and The Little Shop of Horrors were released during which decade?",
"answ":"1960S",
"answ3":"60S",
"answ2":"1960s."
},
{
"cat":"Tom Cruise",
"ques":"Peter Berg, Javier Bardem, and Jason Statham all appear in what 2000s Tom Cruise action thriller film?",
"answ":"COLLATERAL",
"answ2":"Collateral."
},
{
"cat":"Musicians in Film",
"ques":"Queen Latifah features as the voice of Dispatcher Love in what psychological thriller featuring Nicolas Cage, John Goodman, and Cliff Curtis?",
"answ":"BRINGING OUT THE DEAD",
"answ2":"Bringing Out the Dead."
},
{
"cat":"Action/Adventure",
"ques":"How many films in the Pirates of the Caribbean franchise were directed by Gore Verbinski?",
"answ":"3",
"answ3":"THREE",
"answ2":"3."
},
{
"cat":"Directors",
"ques":"Which of the following sports films was NOT directed by John G. Avildsen: The Karate Kid Part II, Rocky II, The Karate Kid, or Rocky?",
"answ":"ROCKY II",
"answ2":"Rocky II."
},
{
"cat":"Family Films",
"ques":"Gene Wilder and Johnny Depp have both portrayed what children's book character?",
"answ":"WILLY WONKA",
"answ2":"Willy Wonka."
},
{
"cat":"Thrillers",
"ques":"David Fincher directed what famous actress alongside a young Kristen Stewart and Jared Leto in 2002's Panic Room?",
"answ":"JODIE FOSTER",
"answ2":"Jodie Foster."
},
{
"cat":"Classics",
"ques":"Fill in the missing word of the following films: Imitation of ___ and The Secret ___ of Walter Mitty.",
"answ":"LIFE",
"answ2":"Life."
},
{
"cat":"Famous Actors & Actresses",
"ques":"In which of the following films did Bruce Willis NOT appear: The Siege, True Romance, 16 Blocks, or Surrogates?",
"answ":"TRUE ROMANCE",
"answ2":"True Romance."
},
{
"cat":"2000s",
"ques":"How many films in the Fast & Furious saga were released in the decade of the 2000s?",
"answ":"4",
"answ3":"FOUR",
"answ2":"4 (The Fast and the Furious, 2 Fast 2 Furious, Tokyo Drift, Fast & Furious)."
},
{
"cat":"Batman",
"ques":"In what film featuring Batman will you also find the characters the Joker, Katana, and Amanda Waller?",
"answ":"SUICIDE SQUAD",
"answ2":"Suicide Squad."
},
{
"cat":"Batman",
"ques":"Which late night talk show host voices Batman in Teen Titans Go! To the Movies?",
"answ":"JIMMY KIMMEL",
"answ2":"Jimmy Kimmel."
},
{
"cat":"Batman",
"ques":"In what post-2000 Batman film will you hear the line 'Are you so desperate to fight criminals that you lock yourself in to take them on one at a time?'?",
"answ":"BATMAN BEGINS",
"answ2":"Batman Begins."
},
{
"cat":"Oscar Movies",
"ques":"What 2021 psychological thriller from director Guillermo del Toro was nominated for four Academy Awards including Best Picture?",
"answ":"NIGHTMARE ALLEY",
"answ2":"Nightmare Alley."
},
{
"cat":"Spy Movies",
"ques":"Which actor plays the CIA assassin August Walker, tasked with observing Ethan and his team, in Mission: Impossible – Fallout?",
"answ":"HENRY CAVILL",
"answ2":"Henry Cavill."
},
{
"cat":"Morgan Freeman",
"ques":"Morgan Freeman appears as CIA Director Bill Cabot alongside Ciarán Hinds, Bruce McGill, and Ron Rifkin in what 2000s thriller?",
"answ":"THE SUM OF ALL FEARS",
"answ2":"The Sum of All Fears."
},
{
"cat":"Scotts",
"ques":"What 1980s action drama directed by Tony Scott has the characters Jester, Stinger, Iceman, and Viper?",
"answ":"TOP GUN",
"answ2":"Top Gun."
},
{
"cat":"2020s",
"ques":"Who stars in the titular role of the 2022 Matt Reeves directed The Batman?",
"answ":"ROBERT PATTINSON",
"answ2":"Robert Pattinson."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Of the following actors, who did NOT appear in The Mummy: Tomb of the Dragon Emperor: Jet Li, Maria Bello, Oded Fehr, or Michelle Yeoh?",
"answ":"ODED FEHR",
"answ2":"Oded Fehr."
},
{
"cat":"Comic Book Movies",
"ques":"What 2013 film based on a DC comic featured supporting performances from Christopher Meloni, Diane Lane, Russell Crowe, and Amy Adams?",
"answ":"MAN OF STEEL",
"answ2":"Man of Steel."
},
{
"cat":"Famous Actors & Actresses",
"ques":"What famous actor has played roles with the names of Tugg Speedman, Mr. Furious, Larry Daley, and Walter Mitty?",
"answ":"BEN STILLER",
"answ2":"Ben Stiller."
},
{
"cat":"Streaming Movies",
"ques":"Who plays Adam Reed, a time pilot in a dystopian 2050 who risks his life to try and uncover the truth behind his wife's disappearance in Netflix's The Adam Project?",
"answ":"RYAN REYNOLDS",
"answ2":"Ryan Reynolds."
},
{
"cat":"2020s",
"ques":"This 2021 spy film features supporting performances from Naomie Harris, Lashana Lynch, and Ana de Armas.",
"answ":"NO TIME TO DIE",
"answ2":"No Time to Die."
},
{
"cat":"Sequels & Prequels",
"ques":"Which 2002 slasher sequel from director Rick Rosenthal features performances from Katee Sackhoff, Sean Patrick Thomas, and Jamie Lee Curtis?",
"answ":"HALLOWEEN RESURRECTION",
"answ2":"Halloween: Resurrection."
},
{
"cat":"Marvel Movies",
"ques":"Which 2010s Marvel film featured performances from Idris Elba, Anthony Head, and Christopher Lambert?",
"answ":"GHOST RIDER SPIRIT OF VENGEANCE",
"answ2":"Ghost Rider: Spirit of Vengeance."
},
{
"cat":"Comic Book Movies",
"ques":"Director Richard Donner brought to life what famed DC hero played by Christopher Reeve in 1978.",
"answ":"SUPERMAN",
"answ2":"Superman."
},
{
"cat":"Thrillers",
"ques":"What 1990s thriller featured the tagline 'A murdered wife. A one-armed man. An obsessed detective. The chase begins.'?",
"answ":"THE FUGITIVE",
"answ2":"The Fugitive."
},
{
"cat":"2020s",
"ques":"What 2022 action film features performances from Yahya Abdul-Mateen II, Moses Ingram, Eiza González, and Garret Dillahunt?",
"answ":"AMBULANCE",
"answ2":"Ambulance."
},
{
"cat":"Horror",
"ques":"Which President of the United States is the titular vampire hunter in the 2012 fantasy horror film of the same name?",
"answ":"ABRAHAM LINCOLN",
"answ2":"Abraham Lincoln."
},
{
"cat":"Famous Actors & Actresses",
"ques":"What famous actor has portrayed such roles as Don John, Jack Traven, and Johnny Utah?",
"answ":"KEANU REEVES",
"answ2":"Keanu Reeves."
},
{
"cat":"Comic Book Movies",
"ques":"What 1980s comic book film featuring Lea Thompson had the tagline 'You will believe that a duck can talk.'?",
"answ":"HOWARD THE DUCK",
"answ2":"Howard the Duck."
},
{
"cat":"Sequels & Prequels",
"ques":"What 2013 fantasy prequel directed by Sam Raimi features performances from Mila Kunis, Bruce Campbell, Zach Braff, and Michelle Williams?",
"answ":"OZ THE GREAT AND POWERFUL",
"answ2":"Oz the Great and Powerful."
},
{
"cat":"Animated",
"ques":"Of the following actors, who did NOT voice a character in Kubo and the Two Strings: Matthew McConaughey, Kate Mara, Ralph Fiennes, or Charlize Theron?",
"answ":"KATE MARA",
"answ2":"Kate Mara."
},
{
"cat":"Famous Actors & Actresses",
"ques":"What Remember the Titans actor appears in the following films: Unstoppable, John Q., Clerks II, and American History X?",
"answ":"ETHAN SUPLEE",
"answ2":"Ethan Suplee."
},
{
"cat":"Musicians in Film",
"ques":"Which famed musician has portrayed Andy Warhol, a goblin king, and the man who fell to Earth?",
"answ":"DAVID BOWIE",
"answ2":"David Bowie."
},
{
"cat":"Dramas",
"ques":"Which of the following did NOT appear in 2004's Eternal Sunshine of the Mind: Tom Wilkinson, Linda Fiorentino, Elijah Wood, or Jane Adams?",
"answ":"LINDA FIORENTINO",
"answ2":"Linda Fiorentino."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"How many Star Trek films were directed by cast members of the franchise?",
"answ":"5",
"answ3":"FIVE",
"answ2":"5 (The Search for Spock, The Voyage Home by Nimoy; The Final Frontier by Shatner; First Contact, Insurrection by Frakes)."
},
{
"cat":"Wachowskis",
"ques":"What 1990s action thriller featuring Sylvester Stallone was written by the Wachowskis and Brian Helgeland?",
"answ":"ASSASSINS",
"answ2":"Assassins."
},
{
"cat":"Wachowskis",
"ques":"Which film co-written by the Wachowskis begins on the Chatham Islands in 1849?",
"answ":"CLOUD ATLAS",
"answ2":"Cloud Atlas."
},
{
"cat":"Wachowskis",
"ques":"Lana and Lilly Wachowski directed Cloud Atlas alongside what other filmmaker, who is the film's third credited director?",
"answ":"TOM TYKWER",
"answ2":"Tom Tykwer."
},
{
"cat":"Wachowskis",
"ques":"In the Wachowskis-directed Speed Racer, Matthew Fox portrays a mysterious masked racer called what?",
"answ":"RACER X",
"answ2":"Racer X."
},
{
"cat":"Coming of Age",
"ques":"What Oscar winning actress had an early role as a store employee named Gina in the film Empire Records?",
"answ":"RENEE ZELLWEGER",
"answ2":"Renée Zellweger."
},
{
"cat":"Coming of Age",
"ques":"Kayla Day ends all her motivational YouTube videos by saying what word in the film Eighth Grade?",
"answ":"GUCCI",
"answ2":"Gucci."
},
{
"cat":"Coming of Age",
"ques":"What 2004 comedy takes place at a Christian high school and stars Jena Malone, Mandy Moore, and Macaulay Culkin?",
"answ":"SAVED",
"answ2":"Saved!."
},
{
"cat":"Tim Burton",
"ques":"Michael Clarke Duncan plays Colonel Attar, a military officer and former associate of Tim Roth's General Thade in what 2000s sci-fi film from director Tim Burton?",
"answ":"PLANET OF THE APES",
"answ2":"Planet of the Apes."
},
{
"cat":"Comedies",
"ques":"Jane Curtin co-stars with Dan Aykroyd as Prymaat, the wife of Aykroyd's Beldar, in what film based on an SNL sketch?",
"answ":"CONEHEADS",
"answ2":"Coneheads."
},
{
"cat":"Disney",
"ques":"What 2007 live-action Disney film, which was based on a book, features performances from Zooey Deschanel, AnnaSophia Robb, and Robert Patrick?",
"answ":"BRIDGE TO TERABITHIA",
"answ2":"Bridge to Terabithia."
},
{
"cat":"Robert Rodriguez",
"ques":"Lady Gaga appears as a sympathetic waitress named Bertha in what Robert Rodriguez film featuring Alexa Vega and Jessica Alba?",
"answ":"SIN CITY A DAME TO KILL FOR",
"answ2":"Sin City: A Dame to Kill For."
},
{
"cat":"Rom-coms",
"ques":"Which actress found love to be just like heaven, was legally blonde, and learned the importance of being earnest?",
"answ":"REESE WITHERSPOON",
"answ2":"Reese Witherspoon."
},
{
"cat":"Modern Classics",
"ques":"Who famously sang the song 'Hopelessly Devoted to You', which would go on to be nominated for Best Original Song at the Oscars in 1978's Grease?",
"answ":"OLIVIA NEWTON JOHN",
"answ2":"Olivia Newton-John."
},
{
"cat":"Comedies",
"ques":"From the Files of Police Squad, The Smell of Fear, and The Final Insult are all subtitles of films in what comedy franchise?",
"answ":"THE NAKED GUN",
"answ2":"The Naked Gun."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which Remember the Titans actress appears in the following films: The Rules of Attraction, Win a Date with Tad Hamilton!, Superman Returns, and 21?",
"answ":"KATE BOSWORTH",
"answ2":"Kate Bosworth."
},
{
"cat":"Comic Book Movies",
"ques":"Which comic book based film features supporting performances from Paul Sorvino, Timothy Dalton, Jennifer Connelly, and Alan Arkin?",
"answ":"THE ROCKETEER",
"answ2":"The Rocketeer."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Which Wizarding World actor voices Marvin, a chronically depressed robot, opposite Martin Freeman in The Hitchhiker's Guide to the Galaxy, based on the novel by Douglas Adams?",
"answ":"ALAN RICKMAN",
"answ2":"Alan Rickman."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Fantasy, the kingdom of Alagaësia, and the dragon Saphira can be found in this 2006 film.",
"answ":"ERAGON",
"answ2":"Eragon."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"You'll find the company known as NorthAm Robotics, which manufactured the robot that would eventually be called Andrew, in what 1990s film?",
"answ":"BICENTENNIAL MAN",
"answ2":"Bicentennial Man."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"What is the subtitle of the third film in the Night at the Museum franchise?",
"answ":"SECRET OF THE TOMB",
"answ2":"Secret of the Tomb."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Who starred as a time traveling agent known as the Barkeep in the 2010s film Predestination?",
"answ":"ETHAN HAWKE",
"answ2":"Ethan Hawke."
},
{
"cat":"Disney",
"ques":"In Mary Poppins Returns, who plays the Balloon Lady at the end of the film?",
"answ":"ANGELA LANSBURY",
"answ2":"Angela Lansbury."
},
{
"cat":"Movie Release Dates",
"ques":"The sci-fi films Real Steel, Paul, and Source Code were all released in what year?",
"answ":"2011",
"answ2":"2011."
},
{
"cat":"Movie Release Dates",
"ques":"How many movies did Chris Farley appear in in the year 1995?",
"answ":"2",
"answ3":"TWO",
"answ2":"2 (Billy Madison, Tommy Boy)."
},
{
"cat":"Movie Release Dates",
"ques":"The sequels Jaws 3-D, Amityville 3-D, and Return of the Jedi were released in what year?",
"answ":"1983",
"answ2":"1983."
},
{
"cat":"Movie Release Dates",
"ques":"The Men in Black first hunted aliens on the big screen and Matt Damon was good Will Hunting in theaters in what year?",
"answ":"1997",
"answ2":"1997."
},
{
"cat":"Movie Release Dates",
"ques":"In what year were Terminator 2: Judgment Day and Hot Shots! released?",
"answ":"1991",
"answ2":"1991."
},
{
"cat":"80s",
"ques":"What 1987 teen vampire film featuring Corey Haim and Alex Winter became known for the song 'Cry Little Sister' by Gerald McMahon?",
"answ":"THE LOST BOYS",
"answ2":"The Lost Boys."
},
{
"cat":"Comedies",
"ques":"After Police Academy was released in 1984, what was the first year that did not have an installment in the series released?",
"answ":"1990",
"answ2":"1990."
},
{
"cat":"Sports",
"ques":"In which football film will you hear the line 'Water is for cowards. Water makes you weak. Water is for washing blood off that uniform and you don't get no blood on my uniform'?",
"answ":"REMEMBER THE TITANS",
"answ2":"Remember the Titans."
},
{
"cat":"Monster Movies",
"ques":"Which former WCW wrestling champion plays the lead role of Chris McCormick in the film Eight Legged Freaks?",
"answ":"DAVID ARQUETTE",
"answ2":"David Arquette."
},
{
"cat":"Horror",
"ques":"Nancy Stephens reprises her role as Marion Chambers most recently in which Halloween sequel alongside Charles Cyphers, Nick Castle, and Will Patton?",
"answ":"HALLOWEEN KILLS",
"answ2":"Halloween Kills."
},
{
"cat":"Scores & Soundtracks",
"ques":"Jerry Goldsmith composed the score for what 1980s dark comedy directed by Joe Dante that featured Rick Ducommun and Henry Gibson?",
"answ":"THE BURBS",
"answ2":"The 'Burbs."
},
{
"cat":"Monster Movies",
"ques":"Arnold Vosloo played what famous Universal monster in a series of films?",
"answ":"IMHOTEP",
"answ3":"THE MUMMY",
"answ2":"Imhotep / the Mummy."
},
{
"cat":"Monster Movies",
"ques":"What screen legend platys Zeus in 1981's Clash of the Titans?",
"answ":"LAURENCE OLIVIER",
"answ2":"Laurence Olivier."
},
{
"cat":"Monster Movies",
"ques":"You'll find the Orca, a device that can emit frequencies to attract or alter Titan behavior in what 2010s monster film?",
"answ":"GODZILLA KING OF THE MONSTERS",
"answ2":"Godzilla: King of the Monsters."
},
{
"cat":"Amblin",
"ques":"Which legendary actor plays Ted Danson's father Jake Tremont, whom Danson must take care of in the 1989 film Dad?",
"answ":"JACK LEMMON",
"answ2":"Jack Lemmon."
},
{
"cat":"Amblin",
"ques":"Which Academy Award nominated actor voices the leader of the Commando Elite, Chip Hazard, in the 1990s family film Small Soldiers?",
"answ":"TOMMY LEE JONES",
"answ2":"Tommy Lee Jones."
},
{
"cat":"Family Films",
"ques":"Patrick Stewart voices Adventure, a swashbuckling gold adventure fiction book resembling a pirate with an eyepatch in which film opposite Macaulay Culkin?",
"answ":"THE PAGEMASTER",
"answ2":"The Pagemaster."
},
{
"cat":"Quentin Tarantino",
"ques":"In the film Once Upon a Time in Hollywood, who plays the role of Squeaky, a Manson girl watching over George on Spahn Ranch?",
"answ":"DAKOTA FANNING",
"answ2":"Dakota Fanning."
},
{
"cat":"Amblin",
"ques":"Which film in the Jurassic Park franchise features the line 'I have a theory that there's two kinds of boys. Those who want to be astronomers and those who want to be astronauts.'?",
"answ":"JURASSIC PARK III",
"answ3":"JURASSIC PARK 3",
"answ2":"Jurassic Park III."
},
{
"cat":"Amblin",
"ques":"This 2010 Amblin film based on a novel received a total of 10 Academy Award nominations, including Best Picture, Best Actor, Best Supporting Actress, and Best Adapted Screenplay.",
"answ":"TRUE GRIT",
"answ2":"True Grit."
},
{
"cat":"Cusacks",
"ques":"This 1997 comedy crime film features John with Joan as his assistant respectively, and also features Dan Aykroyd and Jeremy Piven.",
"answ":"GROSSE POINTE BLANK",
"answ2":"Grosse Pointe Blank."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which sitcom actor appeared in the following films: Wagons East, Highlander II: The Quickening, Wild Hogs, and The Rock?",
"answ":"JOHN C MCGINLEY",
"answ2":"John C. McGinley."
},
{
"cat":"Animated",
"ques":"What 2020s animated film follows Katie, an aspiring filmmaker who goes on a road trip with her family, and features the vocal talents of Abbi Jacobson, Doug the Pug, and Olivia Colman?",
"answ":"THE MITCHELLS VS THE MACHINES",
"answ2":"The Mitchells vs. the Machines."
},
{
"cat":"Sequels & Prequels",
"ques":"1964's A Shot in the Dark is the second film in what famous comedy franchise following the misadventures of a bumbling inspector originally played by Peter Sellers?",
"answ":"THE PINK PANTHER",
"answ2":"The Pink Panther."
},
{
"cat":"Brad Pitt & George Clooney",
"ques":"Joel Schumacher directed George Clooney and Arnold Schwarzenegger in what 1997 comic book film?",
"answ":"BATMAN AND ROBIN",
"answ2":"Batman & Robin."
},
{
"cat":"Oscar Movies",
"ques":"Ellen Burstyn won an Academy Award for Best Actress for her portrayal of Alice Hyatt alongside Kris Kristofferson and a young Jodie Foster in what 1974 Scorsese drama?",
"answ":"ALICE DOESN'T LIVE HERE ANYMORE",
"answ2":"Alice Doesn't Live Here Anymore."
},
{
"cat":"Martin Scorsese",
"ques":"What actor plays the lead role of Jesus in Martin Scorsese's The Last Temptation of Christ?",
"answ":"WILLEM DAFOE",
"answ2":"Willem Dafoe."
},
{
"cat":"Disney",
"ques":"You'll find the characters of Dr. Facilier, Louis, Mama Odie, and Eli 'Big Daddy' La Bouff in what 2000s animated Disney film?",
"answ":"THE PRINCESS AND THE FROG",
"answ3":"PRINCESS AND THE FROG",
"answ2":"The Princess and the Frog."
},
{
"cat":"2000s",
"ques":"What 2001 Frank Darabont film features supporting performances from Bob Balaban, Martin Landau, Bruce Campbell, and James Whitmore?",
"answ":"THE MAJESTIC",
"answ2":"The Majestic."
},
{
"cat":"Sly & Arnie",
"ques":"In what film in the Terminator franchise featuring Linda Hamilton is Arnold's T-800 known simply by the name of Carl?",
"answ":"TERMINATOR DARK FATE",
"answ3":"DARK FATE",
"answ2":"Terminator: Dark Fate."
},
{
"cat":"Coming of Age",
"ques":"Who plays Janis Ian, the goth girl who befriends Cady in Mean Girls?",
"answ":"LIZZY CAPLAN",
"answ2":"Lizzy Caplan."
},
{
"cat":"Coming of Age",
"ques":"1980's Fame depicts a performing arts high school located in what United States city?",
"answ":"NEW YORK CITY",
"answ3":"NEW YORK",
"answ2":"New York City."
},
{
"cat":"Wachowskis",
"ques":"Which Law & Order franchise actor portrays Johnnie, the son of mafia boss Ginio Marzzone in the film Bound?",
"answ":"CHRISTOPHER MELONI",
"answ2":"Christopher Meloni."
},
{
"cat":"Remakes & Reboots",
"ques":"What 2010s Universal Monster horror remake featured supporting performances from Emily Blunt, Hugo Weaving, and Anthony Hopkins?",
"answ":"THE WOLFMAN",
"answ2":"The Wolfman."
},
{
"cat":"Action/Adventure",
"ques":"In what 1990s action film will you hear Ed Harris say the following to Michael Biehn: 'You're down there, we're up here! You walked into the wrong goddamn room, Commander!'?",
"answ":"THE ROCK",
"answ2":"The Rock."
},
{
"cat":"Horror",
"ques":"Frank Henenlotter directed this 1982 cult favorite horror film, the first in a trilogy, about a deformed conjoined twin brother named Belial and his brother Duane.",
"answ":"BASKET CASE",
"answ2":"Basket Case."
},
{
"cat":"Martin Scorsese",
"ques":"What famous actor has Martin Scorsese collaborated the most with, directing him in nine feature films?",
"answ":"ROBERT DE NIRO",
"answ2":"Robert De Niro (in Mean Streets; Taxi Driver; New York, New York; Raging Bull; The King of Comedy; Goodfellas; Cape Fear; Casino; The Irishman)."
},
{
"cat":"Sports",
"ques":"Who plays the lead role of Daniel 'Rudy' Ruettiger, who harbored dreams of playing football at the University of Notre Dame in Rudy?",
"answ":"SEAN ASTIN",
"answ2":"Sean Astin."
},
{
"cat":"Wrestlers in Film",
"ques":"Diamond Dallas Page appears as Billy Ray Snapper in what film directed by Rob Zombie?",
"answ":"THE DEVIL'S REJECTS",
"answ2":"The Devil's Rejects."
},
{
"cat":"Nicolas Cage",
"ques":"What 2021 action comedy horror film stars Nicolas Cage as a quiet drifter who is haunted by eight murderous animatronic characters?",
"answ":"WILLY'S WONDERLAND",
"answ2":"Willy's Wonderland."
},
{
"cat":"Horror",
"ques":"Mel Gibson, Rory Culkin, and Joaquin Phoenix star in what 2000s horror thriller from director M. Night Shyamalan?",
"answ":"SIGNS",
"answ2":"Signs."
},
{
"cat":"Horror",
"ques":"Who plays the lead role of Madison Lake Mitchell in James Wan's 2021 horror film Malignant?",
"answ":"ANNABELLE WALLIS",
"answ2":"Annabelle Wallis."
},
{
"cat":"Horror",
"ques":"What 2021 horror film from Nia DaCosta features supporting performances from Vanessa Williams, Nathan Stewart-Jarrett, and Teyonah Parris?",
"answ":"CANDYMAN",
"answ2":"Candyman."
},
{
"cat":"Musicals",
"ques":"In Les Misérables, Russell Crowe's Javert refers to Hugh Jackman's Jean Valjean as what prisoner number?",
"answ":"24601",
"answ2":"24601."
},
{
"cat":"2000s",
"ques":"Two middle-aged men played by Thomas Haden Church and Paul Giamatti embark on a weeklong trip through California's wine country in what 2004 film?",
"answ":"SIDEWAYS",
"answ2":"Sideways."
},
{
"cat":"Wrestlers in Film",
"ques":"Jesse Ventura plays a character named Blain Cooper, who brandishes his gun Old Painless, alongside Bill Duke in what 1980s action film?",
"answ":"PREDATOR",
"answ2":"Predator."
},
{
"cat":"Modern Classics",
"ques":"In what film will you hear the line 'I have to get back to work. It's part of the wedding. No Sicilian can ever refuse a request on his daughter's wedding day.'?",
"answ":"THE GODFATHER",
"answ2":"The Godfather."
},
{
"cat":"2000s",
"ques":"What film in the Ocean's franchise featured performances from Andy García, Carl Reiner, Elliott Gould, and Al Pacino?",
"answ":"OCEAN'S THIRTEEN",
"answ2":"Ocean's Thirteen."
},
{
"cat":"Horror",
"ques":"What 2021 horror reboot from director Nia DaCosta featured the tagline 'Dare to Say His Name.'?",
"answ":"CANDYMAN",
"answ2":"Candyman."
},
{
"cat":"Comedies",
"ques":"In what 1998 comedy based on a novel by Hunter S. Thompson will you hear the quote 'What? No. We can't stop here. This is bat country.'?",
"answ":"FEAR AND LOATHING IN LAS VEGAS",
"answ2":"Fear and Loathing in Las Vegas."
},
{
"cat":"Black Cinema",
"ques":"Who plays Nino Brown, an arrogant, smart drug kingpin, in 1991's New Jack City?",
"answ":"WESLEY SNIPES",
"answ2":"Wesley Snipes."
},
{
"cat":"Black Cinema",
"ques":"Don Cheadle starred in, co-wrote, and directed this 2016 biographical drama that also co-starred Ewan McGregor and Emayatzy Corinealdi.",
"answ":"MILES AHEAD",
"answ2":"Miles Ahead."
},
{
"cat":"Sly & Arnie",
"ques":"Who plays the role of Poison Ivy, opposite Arnold and George Clooney, in Batman & Robin?",
"answ":"UMA THURMAN",
"answ2":"Uma Thurman."
},
{
"cat":"Scores & Soundtracks",
"ques":"Who composed the scores for the films Days of Thunder, Man of Steel, and Backdraft?",
"answ":"HANS ZIMMER",
"answ2":"Hans Zimmer."
},
{
"cat":"Wizarding World",
"ques":"What character does Hermione punch after calling him a 'foul, loathsome, evil little cockroach' in Harry Potter and the Prisoner of Azkaban?",
"answ":"DRACO MALFOY",
"answ3":"DRACO",
"answ2":"Draco Malfoy."
},
{
"cat":"Wizarding World",
"ques":"In which film was Luna Lovegood, played by Evanna Lynch, first introduced?",
"answ":"HARRY POTTER AND THE ORDER OF THE PHOENIX",
"answ3":"ORDER OF THE PHOENIX",
"answ2":"Harry Potter and the Order of the Phoenix."
},
{
"cat":"Wizarding World",
"ques":"What is the name of Voldemart's symbol: a skull with a snake coming out of the mouth, which is branded on the left forearms of Voldemort's closest followers and cast into the sky when a Death Eater murders someone?",
"answ":"THE DARK MARK",
"answ3":"DARK MARK",
"answ2":"The Dark Mark."
},
{
"cat":"Action/Adventure",
"ques":"Kelsey Grammer, Antonio Banderas, and Harrison Ford all appear with Sylvester Stallone in the third film in what 2010s action franchise?",
"answ":"THE EXPENDABLES",
"answ2":"The Expendables."
},
{
"cat":"70s",
"ques":"Meat Loaf plays the part of Eddie and sings 'Hot Patootie' alongside Tim Curry and Susan Sarandon in what 1970s cult musical?",
"answ":"THE ROCKY HORROR PICTURE SHOW",
"answ2":"The Rocky Horror Picture Show."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Rob Reiner directed what 1987 fantasy film featuring Cary Elwes, Robin Wright, and Billy Crystal?",
"answ":"THE PRINCESS BRIDE",
"answ2":"The Princess Bride."
},
{
"cat":"Horror",
"ques":"What 1990s David Koepp written and directed horror film features supporting performances from Jennifer Morrison and Kevin Dunn?",
"answ":"STIR OF ECHOES",
"answ2":"Stir of Echoes."
},
{
"cat":"Pixar",
"ques":"Which Pixar film series has the characters Tex Dinoco, Luigi, Chick Hicks, and Sally Carrera?",
"answ":"CARS",
"answ2":"Cars."
},
{
"cat":"Streaming Movies",
"ques":"The 2019 Netflix musical biopic The Dirt, from Jackass director Jeff Tremaine, follows the exploits of what famous glam metal band?",
"answ":"MOTLEY CRUE",
"answ3":"MÖTLEY CRÜE",
"answ2":"Mötley Crüe."
},
{
"cat":"Oscar Movies",
"ques":"What actor won an Academy Award for Best Supporting Actor for his portrayal of famous pianist Dr. Don Shirley in 2018's Green Book?",
"answ":"MAHERSHALA ALI",
"answ2":"Mahershala Ali."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Of the following actors, who did NOT voice a character in Ralph Breaks the Internet: Jack McBrayer, Gal Gadot, Willem Dafoe, or Taraji P. Henson?",
"answ":"WILLEM DAFOE",
"answ2":"Willem Dafoe."
},
{
"cat":"Historical Epics & Dramas",
"ques":"Ben Affleck, Josh Hartnett, and Kate Beckinsale feature in what historical drama directed by Michael Bay that takes place in World War II?",
"answ":"PEARL HARBOR",
"answ2":"Pearl Harbor."
},
{
"cat":"Amblin",
"ques":"Amblin's second film was what 1982 horror film, from director Tobe Hooper, that would spawn two sequels and featured JoBeth Williams and Craig T. Nelson?",
"answ":"POLTERGEIST",
"answ2":"Poltergeist."
},
{
"cat":"Streaming Movies",
"ques":"What 2021 horror trilogy that premiered on Netflix was based on a book series by R. L. Stine, with all three installments directed by Leigh Janiak?",
"answ":"FEAR STREET",
"answ2":"Fear Street."
},
{
"cat":"Marvel",
"ques":"Which film marked the first time we met Tom Holland as Peter Parker?",
"answ":"CAPTAIN AMERICA CIVIL WAR",
"answ2":"Captain America: Civil War."
},
{
"cat":"Action/Adventure",
"ques":"What 1995 action sequel follows two men who attempt to stop bomb threats across New York City carried out by a mysterious man named Simon?",
"answ":"DIE HARD WITH A VENGEANCE",
"answ2":"Die Hard with a Vengeance."
},
{
"cat":"Sports",
"ques":"Which of the following did NOT appear in the 2000 film The Replacements: Faizon Love, Rhys Ifans, Michael Irvin, or Jon Favreau?",
"answ":"MICHAEL IRVIN",
"answ2":"Michael Irvin."
},
{
"cat":"Streaming Movies",
"ques":"Chris Hemsworth plays Tyler Rake, a black market mercenary who is enlisted to rescue the kidnapped son of an imprisoned international crime lord, in what 2020 Netflix action thriller?",
"answ":"EXTRACTION",
"answ2":"Extraction."
},
{
"cat":"Action/Adventure",
"ques":"Which one of the following was NOT in Mission: Impossible Ghost Protocol: Jeremy Renner, Simon Pegg, Rebecca Ferguson, or Paula Patton?",
"answ":"REBECCA FERGUSON",
"answ2":"Rebecca Ferguson."
},
{
"cat":"Horror",
"ques":"Joel Schumacher directed Julia Roberts, Kiefer Sutherland, and Kevin Bacon in what 1990 horror film?",
"answ":"FLATLINERS",
"answ2":"Flatliners."
},
{
"cat":"Musicals",
"ques":"What 1982 musical comedy featuring the song 'I Think I'm Gonna Like It Here' showcased performances from Tim Curry, Carol Burnett, and Bernadette Peters?",
"answ":"ANNIE",
"answ2":"Annie."
},
{
"cat":"Holiday Movies",
"ques":"The films Lethal Weapon and Iron Man 3 all primarily take place around what holiday?",
"answ":"CHRISTMAS",
"answ2":"Christmas."
},
{
"cat":"Animated",
"ques":"Which Academy Award winning actor voiced characters in the movies FernGully: The Last Rainforest, Happy Feet Two, and Robots?",
"answ":"ROBIN WILLIAMS",
"answ2":"Robin Williams."
},
{
"cat":"Biopics",
"ques":"In the 1997 Howard Stern biographical comedy Private Parts, who plays program director Kenny Rushton, whom Stern dubs Pig Vomit?",
"answ":"PAUL GIAMATTI",
"answ2":"Paul Giamatti."
},
{
"cat":"Action/Adventure",
"ques":"Which actor does NOT appear in the 2002 action comedy Showtime: Eddie Murphy, Bruce Greenwood, Robert De Niro, or William Shatner?",
"answ":"BRUCE GREENWOOD",
"answ2":"Bruce Greenwood."
},
{
"cat":"Hepburns",
"ques":"Which film earned Katharine Hepburn her first Oscar for Best Actress in a Leading Role?",
"answ":"MORNING GLORY",
"answ2":"Morning Glory."
},
{
"cat":"Hepburns",
"ques":"What James Bond actor made his film debut in 1968's The Lion in Winter?",
"answ":"TIMOTHY DALTON",
"answ2":"Timothy Dalton."
},
{
"cat":"Biopics",
"ques":"Which Oscar-winning actor plays Skip Engblom, who helped create the Z-Boys skateboard team, in the 2005 biographical drama Lords of Dogtown?",
"answ":"HEATH LEDGER",
"answ2":"Heath Ledger."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which actor appeared in the following three films: Jack Ryan: Shadow Recruit, 3000 Miles to Graceland, and Mr. Brooks?",
"answ":"KEVIN COSTNER",
"answ2":"Kevin Costner."
},
{
"cat":"Musicians in Film",
"ques":"Mary J. Blige portrays Venus Club owner Justice Charlier in what 2010s musical featuring Catherine Zeta-Jones and Paul Giamatti?",
"answ":"ROCK OF AGES",
"answ2":"Rock of Ages."
},
{
"cat":"Tom Cruise",
"ques":"Tom Cruise featured in two films released in 2012. Name one of them.",
"answ":"ROCK OF AGES",
"answ3":"JACK REACHER",
"answ2":"Rock of Ages / Jack Reacher."
},
{
"cat":"Scores & Soundtracks",
"ques":"Jerry Goldsmith provided the score for what 1990s horror reboot that featured Oded Fehr and Kevin J. O'Connor?",
"answ":"THE MUMMY",
"answ2":"The Mummy."
},
{
"cat":"Scotts",
"ques":"What 2010s Ridley Scott film features supporting performances from Natalie Dormer, John Leguizamo, and Rosie Perez?",
"answ":"THE COUNSELOR",
"answ2":"The Counselor."
},
{
"cat":"Star Trek",
"ques":"In Star Trek II: The Wrath of Khan, Kirk tells Saavik that he doesn't believe in what kind of scenario?",
"answ":"NO WIN SCENARIO",
"answ2":"No-win scenario."
},
{
"cat":"Star Trek",
"ques":"In which Next Generation film will you hear Worf say the line 'Captain, I do not think it is appropriate for a Starfleet officer to appear... naked.'?",
"answ":"STAR TREK NEMESIS",
"answ2":"Star Trek: Nemesis."
},
{
"cat":"Star Trek",
"ques":"In Star Trek Beyond, it is revealed which character has been planning to leave Starfleet and devote themselves to another cause?",
"answ":"SPOCK",
"answ2":"Spock."
},
{
"cat":"Musicians in Film",
"ques":"Which 'Love Don't Cost a Thing' singer appears in the following films: Anaconda, Monster-in-Law, and Gigli?",
"answ":"JENNIFER LOPEZ",
"answ2":"Jennifer Lopez."
},
{
"cat":"Thrillers",
"ques":"Which 2010s Oscar-nominated Steven Spielberg thriller features performances from Tom Hanks, Mark Rylance, and Jesse Plemons?",
"answ":"BRIDGE OF SPIES",
"answ2":"Bridge of Spies."
},
{
"cat":"Dramas",
"ques":"What 2017 drama directed by Marc Webb stars Chris Evans and McKenna Grace as an exceptionally smart seven-year-old who is the subject of a custody battle?",
"answ":"GIFTED",
"answ2":"Gifted."
},
{
"cat":"Animated",
"ques":"What 2010 animated adventure features the voice talents of Mandy Moore, Zachary Levi, Brad Garrett, and Ron Perlman?",
"answ":"TANGLED",
"answ2":"Tangled."
},
{
"cat":"Movies Involving Weddings",
"ques":"Alan Arkin and Peter Falk star in what 1979 comedy revolving around their children's wedding, later remade in 2003 with Michael Douglas and Albert Brooks?",
"answ":"THE IN LAWS",
"answ2":"The In-Laws."
},
{
"cat":"Brat Pack",
"ques":"Which film starring Anthony Michael Hall features performances from Robert Downey Jr., Paul Gleason, and Uma Thurman?",
"answ":"JOHNNY BE GOOD",
"answ2":"Johnny Be Good."
},
{
"cat":"Brat Pack",
"ques":"What rock star provides the soundtrack for Young Guns II and has a cameo in the film?",
"answ":"JON BON JOVI",
"answ3":"BON JOVI",
"answ2":"Jon Bon Jovi."
},
{
"cat":"Talking Animal Movies",
"ques":"What 1990s film about a farm pig who wants to be a sheepdog was nominated for 7 Oscars, including Best Picture and Supporting Actor for James Cromwell?",
"answ":"BABE",
"answ2":"Babe."
},
{
"cat":"Talking Animal Movies",
"ques":"Which British actor voices everyone's favorite marmalade-loving bear Paddington in both of the Paul King directed Paddington films?",
"answ":"BEN WHISHAW",
"answ2":"Ben Whishaw."
},
{
"cat":"Talking Animal Movies",
"ques":"Which Ghostbusters actor voices the comic strip feline Garfield in the 2004 live-action adaptation Garfield?",
"answ":"BILL MURRAY",
"answ2":"Bill Murray."
},
{
"cat":"Disney",
"ques":"Lily James, Richard Madden, and Cate Blanchett star in what 2015 Disney film directed by Kenneth Branagh?",
"answ":"CINDERELLA",
"answ2":"Cinderella."
},
{
"cat":"Musicians in Film",
"ques":"What famous musician starred in the following films: Blue Hawaii, Jailhouse Rock, and Viva Las Vegas?",
"answ":"ELVIS PRESLEY",
"answ2":"Elvis Presley."
},
{
"cat":"Horror",
"ques":"Anthony Hopkins and Jodie Foster won Academy Awards for what 1991 psychological horror film?",
"answ":"THE SILENCE OF THE LAMBS",
"answ2":"The Silence of the Lambs."
},
{
"cat":"90s",
"ques":"What is the name of the film that Bobby Bowfinger is trying to make in Bowfinger?",
"answ":"CHUBBY RAIN",
"answ2":"Chubby Rain."
},
{
"cat":"90s",
"ques":"Who appeared in the following 90s action films: Hudson Hawk, The Last Boy Scout, Last Man Standing, and Striking Distance? ",
"answ":"BRUCE WILLIS",
"answ2":"Bruce Willis."
},
{
"cat":"90s",
"ques":"In what 1992 thriller does Bill Paxton star as Dale 'Hurricane' Dixon, a small-town police chief who awaits the arrival of a gang of killers?",
"answ":"ONE FALSE MOVE",
"answ2":"One False Move."
},
{
"cat":"Batman",
"ques":"Ted Lasso actress Juno Temple features as a friend of Selina Kyle in what entry in the Batman franchise?",
"answ":"THE DARK KNIGHT RISES",
"answ2":"The Dark Knight Rises."
},
{
"cat":"Martin Scorsese",
"ques":"Cristin Milioti plays Jordan Belfort's first wife Teresa in what 2013 film starring Leonardo DiCaprio?",
"answ":"THE WOLF OF WALL STREET",
"answ2":"The Wolf of Wall Street."
},
{
"cat":"Batman",
"ques":"Abe Vigoda, Dick Miller, and Dana Delany lent their voices to what animated film featuring Batman?",
"answ":"BATMAN MASK OF THE PHANTASM",
"answ2":"Batman: Mask of the Phantasm."
},
{
"cat":"Batman",
"ques":"Who plays Commissioner Gordon in Justice League?",
"answ":"JK SIMMONS",
"answ3":"J K SIMMONS",
"answ2":"J.K. Simmons."
},
{
"cat":"Batman",
"ques":"The Red Triangle Gang is a disgraced former circus troupe turned to crime in which Batman film?",
"answ":"BATMAN RETURNS",
"answ2":"Batman Returns."
},
{
"cat":"Comic Book Movies",
"ques":"Matthew Vaughn directed what actor as Eggsy, a young man recruited into the spy game, in the 2015 action spy comedy Kingsman: The Secret Service?",
"answ":"TARON EGERTON",
"answ2":"Taron Egerton."
},
{
"cat":"Action/Adventure",
"ques":"Which of the following actors did NOT appear in the Jurassic Park franchise: Sam Neill, William H. Macy, Bill Paxton, or BD Wong?",
"answ":"BILL PAXTON",
"answ2":"Bill Paxton."
},
{
"cat":"Horror",
"ques":"How many films in the Halloween franchise were released in the 1970s?",
"answ":"1",
"answ3":"ONE",
"answ2":"1 (1978's Halloween)."
},
{
"cat":"Musicals",
"ques":"Tim Curry, Susan Sarandon, and Barry Bostwick feature in this 1975 musical comedy horror film.",
"answ":"THE ROCKY HORROR PICTURE SHOW",
"answ2":"The Rocky Horror Picture Show."
},
{
"cat":"Animated",
"ques":"In what Shrek film will you hear the line 'Things just seem bad because it's dark and rainy and Fiona's father hired a sleazy hitman to whack you.'?",
"answ":"SHREK 2",
"answ2":"Shrek 2."
},
{
"cat":"Horror",
"ques":"What 2000 horror film follows a crew marooned on a planet full of bloodthirsty creatures that come out to feast only at night?",
"answ":"PITCH BLACK",
"answ2":"Pitch Black."
},
{
"cat":"Oscar Movies",
"ques":"Clint Eastwood and Hilary Swank both won Academy Awards for what 2004 boxing film?",
"answ":"MILLION DOLLAR BABY",
"answ2":"Million Dollar Baby."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"What fantasy character, created by Robert E. Howard, has been played by both Jason Momoa and Arnold Schwarzenegger?",
"answ":"CONAN THE BARBARIAN",
"answ2":"Conan the Barbarian."
},
{
"cat":"Biopics",
"ques":"Love & Mercy, which stars both Paul Dano and John Cusack as Brian Wilson, follows the co-founder and leader of what famous rock band?",
"answ":"THE BEACH BOYS",
"answ2":"The Beach Boys."
},
{
"cat":"Thrillers",
"ques":"What 2000s thriller, featuring Robert Downey Jr. and Jake Gyllenhaal, follows the real-life investigation of a serial killer in Northern California?",
"answ":"ZODIAC",
"answ2":"Zodiac."
},
{
"cat":"Crime",
"ques":"What 2009 biographical comedy film directed by Steven Soderbergh features performances by Matt Damon, Joel McHale, and Patton Oswalt?",
"answ":"THE INFORMANT",
"answ2":"The Informant!."
},
{
"cat":"Action/Adventure",
"ques":"Jason Statham stars as mercenary Danny Bryce alongside Clive Owen and Robert De Niro in what film?",
"answ":"KILLER ELITE",
"answ2":"Killer Elite."
},
{
"cat":"Thrillers",
"ques":"Kathryn Bigelow directed what famous actress as a rookie police officer alongside Ron Silver and Clancy Brown in the 1990 action thriller Blue Steel?",
"answ":"JAMIE LEE CURTIS",
"answ2":"Jamie Lee Curtis."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"David Cronenberg directed Geena Davis in the 1986 remake of what famous 1958 sci-fi horror film?",
"answ":"THE FLY",
"answ2":"The Fly."
},
{
"cat":"Scores & Soundtracks",
"ques":"Who composed the score for Steven Spielberg's Ready Player One?",
"answ":"ALAN SILVESTRI",
"answ2":"Alan Silvestri."
},
{
"cat":"2020s",
"ques":"Joe Carnahan directed this 2021 action thriller set in a small-town police station and that features Frank Grillo, Gerard Butler, and Alexis Louder.",
"answ":"COPSHOP",
"answ2":"Copshop."
},
{
"cat":"2020s",
"ques":"Which Brat Pack actor appears as Tommy Doyle in Halloween Kills?",
"answ":"ANTHONY MICHAEL HALL",
"answ2":"Anthony Michael Hall."
},
{
"cat":"Pixar",
"ques":"What did Monsters, Inc. win its sole Academy Award for?",
"answ":"ORIGINAL SONG",
"answ3":"BEST ORIGINAL SONG",
"answ2":"Best Original Song."
},
{
"cat":"Holiday Movies",
"ques":"What 2006 disaster film remake, starring Kurt Russell, Richard Dreyfuss, and Emmy Rossum, is set on a cruise ship on New Year's Eve?",
"answ":"POSEIDON",
"answ2":"Poseidon."
},
{
"cat":"80s",
"ques":"What well-known director wrote the screenplays for the films Gremlins and The Goonies?",
"answ":"CHRIS COLUMBUS",
"answ2":"Chris Columbus."
},
{
"cat":"Tom Cruise",
"ques":"Neal McDonough, Colin Farrell, and Samantha Morton appear opposite Tom Cruise in what 2002 sci-fi film?",
"answ":"MINORITY REPORT",
"answ2":"Minority Report."
},
{
"cat":"Westerns",
"ques":"What 2003 western, starring Kevin Costner and Robert Duvall, follows a former gunslinger who is forced to take up arms again against a corrupt lawman?",
"answ":"OPEN RANGE",
"answ2":"Open Range."
},
{
"cat":"Pixar",
"ques":"What Pixar movie features vocal performances from Willem Dafoe, Albert Brooks, Eugene Levy, and Idris Elba?",
"answ":"FINDING DORY",
"answ2":"Finding Dory."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"What 2021 sci-fi film features supporting performances from Javier Bardem, Jason Momoa, and Zendaya?",
"answ":"DUNE",
"answ2":"Dune."
},
{
"cat":"Famous Actors & Actresses",
"ques":"What actress features in the following films: The Curse of La Llorona, Hunter Killer, and Avengers: Age of Ultron?",
"answ":"LINDA CARDELLINI",
"answ2":"Linda Cardellini."
},
{
"cat":"Comedies",
"ques":"Which of the following actors was not in 2018's Tag: Jake Johnson, Rashida Jones, Hannibal Buress, or Chelsea Peretti?",
"answ":"CHELSEA PERETTI",
"answ2":"Chelsea Peretti."
},
{
"cat":"Sly & Arnie",
"ques":"Arnold and what other actor, who plays Dr. Larry Arbogast, star in the film Junior?",
"answ":"DANNY DEVITO",
"answ2":"Danny DeVito."
},
{
"cat":"Sly & Arnie",
"ques":"In Rocky II, what holiday does the Rocky vs. Apollo Creed rematch take place on?",
"answ":"THANKSGIVING",
"answ2":"Thanksgiving."
},
{
"cat":"Sly & Arnie",
"ques":"Which famous action star played the villain of The Expendables 2 named Vilain?",
"answ":"JEAN CLAUDE VAN DAMME",
"answ2":"Jean-Claude Van Damme."
},
{
"cat":"2020s",
"ques":"Who directed Mckenna Grace, Paul Rudd, Finn Wolfhard, and Carrie Coon in Ghostbusters: Afterlife?",
"answ":"JASON REITMAN",
"answ2":"Jason Reitman."
},
{
"cat":"2010s",
"ques":"What famous actor was in the following movies: Kick-Ass, Mandy, Color Out of Space, and Teen Titans Go! To the Movies?",
"answ":"NICOLAS CAGE",
"answ2":"Nicolas Cage."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Joe Cornish directed Louis Ashbourne Serkis, Patrick Stewart, and Rebecca Ferguson in what 2019 film about a young boy who finds the Excalibur sword?",
"answ":"THE KID WHO WOULD BE KING",
"answ2":"The Kid Who Would Be King."
},
{
"cat":"2020s",
"ques":"Taylor Sheridan directed what actress as smokejumper Hannah alongside Jon Bernthal, Aidan Gillen, and Nicholas Hoult in 2021's Those Who Wish Me Dead?",
"answ":"ANGELINA JOLIE",
"answ2":"Angelina Jolie."
},
{
"cat":"Fantasy/Sci-Fi",
"ques":"Julia Roberts and Lily Collins star opposite each other in this 2012 fantasy based on Snow White.",
"answ":"MIRROR MIRROR",
"answ2":"Mirror Mirror."
},
{
"cat":"Comedies",
"ques":"What 2009 comedy featuring Rashida Jones and J. K. Simmons marked the third collaboration of Paul Rudd and Jason Segel after Knocked Up and Forgetting Sarah Marshall?",
"answ":"I LOVE YOU MAN",
"answ2":"I Love You, Man."
},
{
"cat":"2000s",
"ques":"In the 2002 American remake Solaris, who stars as Rheya opposite George Clooney?",
"answ":"NATASCHA MCELHONE",
"answ2":"Natascha McElhone."
},
{
"cat":"2000s",
"ques":"Who played Lureen Newsome Twist, Jack's wife, in Brokeback Mountain?",
"answ":"ANNE HATHAWAY",
"answ2":"Anne Hathaway."
},
{
"cat":"2000s",
"ques":"Who plays Joseph Sullivan a.k.a. Sky Captain in the film Sky Captain and the World of Tomorrow?",
"answ":"JUDE LAW",
"answ2":"Jude Law."
},
{
"cat":"2020s",
"ques":"Who was nominated for an Academy Award for their performance as Jonathan Larson in the 2021 musical biopic Tick, Tick... Boom!?",
"answ":"ANDREW GARFIELD",
"answ2":"Andrew Garfield."
},
{
"cat":"Sequels & Prequels",
"ques":"Of the following, who does not appear in Ridley Scott's Alien: Covenant: Danny McBride, Patrick Wilson, Katherine Waterston, or Guy Pearce?",
"answ":"PATRICK WILSON",
"answ2":"Patrick Wilson."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which actress appears in the following films: The Sixth Sense, 2011's Fright Night, 2000's Shaft, and Hereditary?",
"answ":"TONI COLLETTE",
"answ2":"Toni Collette."
},
{
"cat":"Streaming Movies",
"ques":"What 2019 Netflix rom-com featuring Ali Wong, Randall Park, and Keanu Reeves follows childhood friends who lost touch after a brief teenage fling ended badly?",
"answ":"ALWAYS BE MY MAYBE",
"answ2":"Always Be My Maybe."
},
{
"cat":"Angelina Jolie",
"ques":"Of the following films, which does not feature Angelina Jolie: Gone in 60 Seconds, Troy, Sky Captain and the World of Tomorrow, or Pushing Tin?",
"answ":"TROY",
"answ2":"Troy."
},
{
"cat":"Amblin",
"ques":"Which actress stars as Kat Harvey, the daughter of Bill Pullman's James Harvey and Casper's love interest and new friend in 1995's Casper?",
"answ":"CHRISTINA RICCI",
"answ2":"Christina Ricci."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Michael Keaton appears as the villain Vulture in which Spider-Man film?",
"answ":"SPIDER MAN HOMECOMING",
"answ2":"Spider-Man: Homecoming."
},
{
"cat":"2010s",
"ques":"Spike Lee directed Josh Brolin, Elizabeth Olsen, and Samuel L. Jackson in what 2013 psychological action thriller, a remake of a 2005 South Korean film?",
"answ":"OLDBOY",
"answ2":"Oldboy."
},
{
"cat":"Sports",
"ques":"Which of the following four sports films was not directed by Gavin O'Connor: Warrior, Miracle, The Way Back, or Radio?",
"answ":"RADIO",
"answ2":"Radio."
},
{
"cat":"Comedies",
"ques":"Eddie Murphy and Martin Lawrence share the screen as loudmouth Harlem grifter Ray and the no-nonsense Claude in what 1999 film?",
"answ":"LIFE",
"answ2":"Life."
},
{
"cat":"Comedies",
"ques":"What 2003 comedy featuring Christopher Walken and Anthony Anderson deals with two guys on a trip to Australia to deliver a package?",
"answ":"KANGAROO JACK",
"answ2":"Kangaroo Jack."
},
{
"cat":"Comedies",
"ques":"Which 2010s horror comedy features performances by Adam Driver, Danny Glover, Bill Murray, and Tilda Swinton?",
"answ":"THE DEAD DON'T DIE",
"answ2":"The Dead Don't Die."
},
{
"cat":"Action/Adventure",
"ques":"In which installment of the Mission: Impossible franchise do Laurence Fishburne, Keri Russell, and Maggie Q appear?",
"answ":"MISSION IMPOSSIBLE III",
"answ3":"MISSION IMPOSSIBLE 3",
"answ2":"Mission: Impossible III."
},
{
"cat":"Horror",
"ques":"Prey at Night was the subtitle to the 2018 sequel to what 2008 psychological horror film starring Liv Tyler and Scott Speedman?",
"answ":"THE STRANGERS",
"answ2":"The Strangers."
},
{
"cat":"2000s",
"ques":"Chris Columbus directed Hayden Panettiere, Paul Rust, and Alan Ruck in what rom-com about a valedictorian confessing his love to a cheerleader at graduation?",
"answ":"I LOVE YOU BETH COOPER",
"answ2":"I Love You, Beth Cooper."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which of the following films did Kate Hudson not appear in: Almost Famous, Wish I Was Here, Failure to Launch, or Rock the Kasbah?",
"answ":"FAILURE TO LAUNCH",
"answ2":"Failure to Launch."
},
{
"cat":"90s",
"ques":"What 1990 horror comedy, set in Perfection, Nevada, follows Val McKee and Earl Bassett, who fight for survival against prehistoric wormlike monsters?",
"answ":"TREMORS",
"answ2":"Tremors."
},
{
"cat":"Streaming Movies",
"ques":"Sandra Bullock stars in which Netflix film, about a mysterious force that decimates the population, where if you see it, you die?",
"answ":"BIRD BOX",
"answ2":"Bird Box."
},
{
"cat":"Disney",
"ques":"Andrew Davis directed what 2003 film about a boy played by Shia LaBeouf, who is wrongfully sent to a brutal camp where children are forced to dig in the desert all day long?",
"answ":"HOLES",
"answ2":"Holes."
},
{
"cat":"Disney",
"ques":"Which MCU actress voices Namaari, the warrior princess of Fang, and Raya's rival, in the film Raya and the Last Dragon?",
"answ":"GEMMA CHAN",
"answ2":"Gemma Chan."
},
{
"cat":"Disney",
"ques":"Meredith Salenger stars opposite which famous actor who plays a young traveler named Harry in the 1985 adventure film The Journey of Natty Gann?",
"answ":"JOHN CUSACK",
"answ2":"John Cusack."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which actress appears in the following films: A Monster Calls, On the Basis of Sex, Rogue One: A Star Wars Story, and The Theory of Everything?",
"answ":"FELICITY JONES",
"answ2":"Felicity Jones."
},
{
"cat":"2010s",
"ques":"Jake Gyllenhaal stars as Louis Bloom, a stringer who records violent events and sells the footage to an L.A. TV station, in what 2014 Dan Gilroy film?",
"answ":"NIGHTCRAWLER",
"answ2":"Nightcrawler."
},
{
"cat":"Action/Adventure",
"ques":"Which of the following actors has not appeared in the Mission: Impossible franchise: Emilio Estevez, Léa Seydoux, Halle Berry, or Anthony Hopkins?",
"answ":"HALLE BERRY",
"answ2":"Halle Berry."
},
{
"cat":"Pixar",
"ques":"Which film features the vocal talents of Bruce Campbell, Emily Mortimer, Michael Caine, and Cheech Marin?",
"answ":"CARS 2",
"answ2":"Cars 2."
},
{
"cat":"Dramas",
"ques":"Jacob Tremblay plays the son of which actress, who received an Oscar for her role as Joy, in the film Room?",
"answ":"BRIE LARSON",
"answ2":"Brie Larson."
},
{
"cat":"Coming of Age",
"ques":"Which 1980s film features the characters Stacy Hamilton, Mark Ratner, Brad Hamilton, and Jeff Spicoli?",
"answ":"FAST TIMES AT RIDGEMONT HIGH",
"answ2":"Fast Times at Ridgemont High."
},
{
"cat":"Wizarding World",
"ques":"Luna Lovegood's father is the editor of what magazine?",
"answ":"THE QUIBBLER",
"answ2":"The Quibbler."
},
{
"cat":"Wizarding World",
"ques":"Emma Thompson portrays Professor Sybill Trelawney in how many Harry Potter films?",
"answ":"3",
"answ3":"THREE",
"answ2":"3 (The Prisoner of Azkaban, The Order of the Phoenix, The Deathly Hallows – Part 2)."
},
{
"cat":"Wizarding World",
"ques":"Who killed Voldemort's pet snake that held a piece of his soul in The Deathly Hallows – Part 2?",
"answ":"NEVILLE LONGBOTTOM",
"answ3":"NEVILLE",
"answ2":"Neville Longbottom."
},
{
"cat":"Spoof",
"ques":"Which legendary spoof movie star plays the role of President Baxter Harris in Scary Movie 3?",
"answ":"LESLIE NIELSEN",
"answ2":"Leslie Nielsen."
},
{
"cat":"Biopics",
"ques":"Pablo Larraín's Spencer is led by which actress as Diana, Princess of Wales?",
"answ":"KRISTEN STEWART",
"answ2":"Kristen Stewart."
},
{
"cat":"Musicals",
"ques":"What 2005 film involves Max Bialystock and Leo Bloom, who want to make a Broadway flop with the offensive musical Springtime for Hitler?",
"answ":"THE PRODUCERS",
"answ2":"The Producers."
},
{
"cat":"Oscar Movies",
"ques":"How many times has Matt Damon been nominated for Best Actor?",
"answ":"2",
"answ3":"TWO",
"answ2":"2 (for Good Will Hunting, The Martian)."
},
{
"cat":"Oscar Movies",
"ques":"Which actor received Best Supporting Actor nominations for the films Apollo 13 and The Truman Show?",
"answ":"ED HARRIS",
"answ2":"Ed Harris."
},
{
"cat":"Oscar Movies",
"ques":"What was the first film Steven Spielberg directed that received a Best Picture nomination?",
"answ":"JAWS",
"answ2":"Jaws."
},
{
"cat":"Family Films",
"ques":"What 2014 comedy, starring Chris Pratt and Elizabeth Banks, featured the Oscar-nominated song 'Everything Is Awesome'?",
"answ":"THE LEGO MOVIE",
"answ2":"The Lego Movie."
},
{
"cat":"Streaming Movies",
"ques":"Which 2017 Netflix remake from director Adam Wingard follows high schooler Light Turner, who stumbles across a mysterious notebook and its owner Ryuk?",
"answ":"DEATH NOTE",
"answ2":"Death Note."
},
{
"cat":"Sports",
"ques":"Which 2004 Peter Berg film stars Billy Bob Thornton and follows a small, turbulent town in Texas that obsesses over their high school football team?",
"answ":"FRIDAY NIGHT LIGHTS",
"answ2":"Friday Night Lights."
},
{
"cat":"Die Hard in a ___",
"ques":"Who directed the Die Hard on a plane riff Air Force One, which starred Harrison Ford as President James Marshall, who famously quips 'Get off my plane!'?",
"answ":"WOLFGANG PETERSEN",
"answ2":"Wolfgang Petersen."
},
{
"cat":"Die Hard in a ___",
"ques":"In Olympus Has Fallen, one of two Die Hard in the White House riffs, who plays the POTUS that Gerard Butler's Mike Banning must try and rescue?",
"answ":"AARON ECKHART",
"answ2":"Aaron Eckhart."
},
{
"cat":"Die Hard in a ___",
"ques":"Which Jean-Claude Van Damme action film, which riffs as Die Hard in a hockey rink, is set in a Pittsburgh hockey stadium?",
"answ":"SUDDEN DEATH",
"answ2":"Sudden Death."
},
{
"cat":"Steven Spielberg",
"ques":"Which Spielberg film is known for coining the line 'Life finds a way.'?",
"answ":"JURASSIC PARK",
"answ2":"Jurassic Park."
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which actor played the real-life individuals Jake LaMotta and Al Capone?",
"answ":"ROBERT DE NIRO",
"answ2":"Robert De Niro."
},
{
"cat":"Romance",
"ques":"Name one of the two leads in the 1973 romance film The Way We Were.",
"answ":"BARBRA STREISAND",
"answ3":"ROBERT REDFORD",
"answ2":"Barbra Streisand / Robert Redford."
},
{
"cat":"Spy Movies",
"ques":"Benjamin Bratt plays Capt. Ricardo Ramírez, part of the U.S. Special Forces group fighting the Colombian drug cartel, in what 1994 film featuring Willem Dafoe?",
"answ":"CLEAR AND PRESENT DANGER",
"answ2":"Clear and Present Danger."
},
{
"cat":"2000s",
"ques":"Who plays Laurie Strode in 2007's Halloween?",
"answ":"SCOUT TAYLOR COMPTON",
"answ2":"Scout Taylor-Compton."
},
{
"cat":"Woody Harrelson",
"ques":"In which movie did Woody Harrelson play a blind man?",
"answ2":"Seven Pounds.",
"answ":"SEVEN POUNDS",
},
{
"cat":"Middle Earth",
"ques":"What role does Liv Tyler play in The Lord of the Rings films?",
"answ2":"Arwen.",
"answ":"ARWEN",
},
{
"cat":"Brad Pitt",
"ques":"In which horror movie would you find the character investigator Gerry Lane, played by Brad Pitt?",
"answ":"WORLD WAR Z",
"answ2":"World War Z.",
},
{
"cat":"Horror",
"ques":"The Children of the Corn is based on a story by which author?",
"answ":"STEPHEN KING",
"answ2":"Stephen King.",
},
{
"cat":"Horror",
"ques":"Who played the female lead in the 2000 film Bless the Child?",
"answ":"KIM BASINGER",
"answ2":"Kim Basinger.",
},
{
"cat":"Movie Characters",
"ques":"In which movie would you find the character Lieutenant Marion Cobretti, played by Sylvester Stallone?",
"answ":"COBRA",
"answ2":"Cobra.",
},
{
"cat":"Movie Characters",
"ques":"In which movie would you find the character serial killer John Ryder, played by Sean Bean?",
"answ":"THE HITCHER",
"answ2":"The Hitcher.",
},
{
"cat":"Remakes & Reboots",
"ques":"Which movie features Frank Sinatra in 1960 and George Clooney in the 2001 remake?",
"answ":"OCEAN'S ELEVEN",
"answ2":"Ocean's Eleven.",
},
{
"cat":"Remakes & Reboots",
"ques":"What 1952 Richard Fleischer movie was remade in 1990?",
"answ":"NARROW MARGIN",
"answ2":"Narrow Margin.",
},
{
"cat":"Remakes & Reboots",
"ques":"What 1995 Danny Cannon movie was remade in 2012?",
"answ":"JUDGE DREDD",
"answ2":"Judge Dredd.",
},
{
"cat":"Remakes & Reboots",
"ques":"What 1972 Michael Winner movie was remade in 2011?",
"answ":"THE MECHANIC",
"answ2":"The Mechanic.",
},
{
"cat":"Movie Characters",
"ques":"In which 2013 movie would you find the character Ray Breslin?",
"answ":"ESCAPE PLAN",
"answ2":"Escape Plan.",
},
{
"cat":"Movie Characters",
"ques":"In which 2006 movie would you find the character Chev Chelios?",
"answ":"CRANK",
"answ2":"Crank.",
},
{
"cat":"Movie Quotes",
"ques":"From what Denzel Washington film is this line: 'Forgiveness is between them and God. It's my job to arrange the meeting'?",
"answ":"MAN ON FIRE",
"answ2":"Man on Fire.",
},
{
"cat":"Movie Characters",
"ques":"In which 2010 movie would you find the character Frank Tupelo?",
"answ":"THE TOURIST",
"answ2":"The Tourist.",
},
{
"cat":"Movie Characters",
"ques":"In which 1995 movie would you find the character El Mariachi?",
"answ":"DESPERADO",
"answ2":"Desperado.",
},
{
"cat":"Movie Characters",
"ques":"In which 2005 movie would you find the character Kyle Pratt?",
"answ":"FLIGHTPLAN",
"answ2":"Flightplan.",
},
{
"cat":"Classics",
"ques":"Who played the lead female role in the film Destry Rides Again?",
"answ":"MARLENE DIETRICH",
"answ2":"Marlene Dietrich.",
},
{
"cat":"80s",
"ques":"Who starred character of Nate Champion in the 1980 movie Heaven's Gate?",
"answ":"CHRISTOPHER WALKEN",
"answ2":"Christopher Walken.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who starred as William Cage in Doug Liman's 2014 film Edge of Tomorrow?",
"answ":"TOM CRUISE",
"answ2":"Tom Cruise.",
},
{
"cat":"Disaster Movies",
"ques":"Who starred as Chief Raymond Ray Gaines in Brad Peyton's 2015 film San Andreas?",
"answ":"DWAYNE JOHNSON",
"answ2":"Dwayne Johnson.",
},
{
"cat":"Spy Movies",
"ques":"Who starred as William Cabot in Phil Alden Robinson's 2002 film The Sum of All Fears?",
"answ":"MORGAN FREEMAN",
"answ2":"Morgan Freeman.",
},
{
"cat":"Quentin Tarantino",
"ques":"In which Quentin Tarantino film were most of the major characters named after colors?",  
"answ":"RESERVOIR DOGS",
"answ2":"Reservoir Dogs.",
},
{
"cat":"Animated",
"ques":"What does Carl use to lift his house in the movie Up?",     
"answ":"BALLOONS",
"answ2":"Balloons.",
},
{
"cat":"Westerns",
"ques":"Which actor starred as Rio in The One-Eyed Jacks?",
"answ":"MARLON BRANDO",
"answ2":"Marlon Brando.",
},
{
"cat":"Oscar Movies",
"ques":"Which actor won the Academy Award for Best Actor in a Supporting Role in 2009 for the role of Col. Hans Landa?",
"answ":"CHRISTOPH WALTZ",
"answ2":"Christoph Waltz.",
},
{
"cat":"2010s",
"ques":"This Groundhog Day actor features as a supporting role in the 2019 film Fractured.",
"answ":"STEPHEN TOBOLOWSKY",
"answ2":"Stephen Tobolowsky.",
},
{
"cat":"Lucasfilm",
"ques":"Ron Howard directed two films for Lucasfilm. One is Willow. What is the other?",
"answ":"SOLO A STAR WARS STORY",
"answ2":"Solo: A Star Wars Story.",
},
{
"cat":"2010s",
"ques":"In what 2016 film does a boy seek the help of a tree monster to cope with his single mother's terminal illness?",
"answ":"A MONSTER CALLS",
"answ2":"A Monster Calls.",
},
{
"cat":"Bruce Willis",
"ques":"How many entries are there in the Die Hard franchise?",
"answ":"5",
"answ3":"FIVE",
"answ2":"5.",
},
{
"cat":"Horror",
"ques":"What horror franchise features performances by Danny Glover, Cary Elwes, Tobin Bell, and Donnie Wahlberg?",
"answ":"SAW",
"answ2":"Saw.",
},
{
"cat":"Animated",
"ques":"Name the film: In order to defeat the Grand Duke of Owls, a young boy transformed into a cat teams up with a group of barnyard animals to find a rooster who can raise the sun.",
"answ":"ROCK A DOODLE",
"answ2":"Rock-a-Doodle.",
},
{
"cat":"Movie Taglines",
"ques":"What thriller has the line 'It rubs the lotion on its skin or else it gets the hose again.'?",
"answ":"THE SILENCE OF THE LAMBS",
"answ3":"SILENCE OF THE LAMBS",
"answ2":"The Silence of the Lambs.",
},
{
"cat":"Movie Taglines",
"ques":"'You'll believe a man can fly' is a tagline from what action/adventure film?",
"answ":"SUPERMAN",
"answ2":"Superman.",
},
{
"cat":"Movie Taglines",
"ques":"'The fastest hands in the East versus the biggest mouth in the West' is a tagline from which late 90s action comedy?",
"answ":"RUSH HOUR",
"answ2":"Rush Hour.",
},
{
"cat":"Disney",
"ques":"Which Disney film has an antagonist by the name of Madam Mim, a black magic proficient witch?",
"answ":"THE SWORD IN THE STONE",
"answ3":"SWORD IN THE STONE",
"answ2":"The Sword in the Stone.",
},
{
"cat":"Disney",
"ques":"What animated film has the characters Oaken, Gerda, and the Duke of Weselton?",
"answ":"FROZEN",
"answ2":"Frozen.",
},
{
"cat":"Disney",
"ques":"In Ralph Breaks the Internet, who voices J.P. Spamley?",
"answ":"BILL HADER",
"answ2":"Bill Hader.",
},
{
"cat":"Disney",
"ques":"In Beauty and the Beast, which character makes the joke 'if it's not Baroque, don't fix it.'?",
"answ":"COGSWORTH",
"answ2":"Cogsworth.",
},
{
"cat":"Julia Roberts",
"ques":"Which actor co-stars with Julia Roberts as a movie publicist named Lee Phillips in the film America's Sweethearts?",
"answ":"BILLY CRYSTAL",
"answ2":"Billy Crystal.",
},
{
"cat":"Julia Roberts",
"ques":"In what movie will you hear Julia Roberts say: 'Choose me. Marry me. Let me make you happy.'?",
"answ":"MY BEST FRIEND'S WEDDING",
"answ2":"My Best Friend's Wedding.",
},
{
"cat":"Julia Roberts",
"ques":"Who plays Auggie Pullman, a 5th-grade boy born with facial differences who is entering mainstream school for the first time, in 2017's Wonder?",
"answ":"JACOB TREMBLAY",
"answ2":"Jacob Tremblay.",
},
{
"cat":"Julia Roberts",
"ques":"2004's Closer takes place in what European city?",
"answ":"LONDON",
"answ2":"London.",
},
{
"cat":"Samuel L. Jackson",
"ques":"Samuel L. Jackson starred opposite Matthew McConaughey and Sandra Bullock in this 1996 thriller.",
"answ":"A TIME TO KILL",
"answ2":"A Time to Kill.",
},
{
"cat":"Samuel L. Jackson",
"ques":"Samuel L. Jackson is the uncredited narrator of which Tarantino film?",
"answ":"INGLOURIOUS BASTERDS",
"answ2":"Inglourious Basterds.",
},
{
"cat":"Samuel L. Jackson",
"ques":"In what Eddie Murphy film did Samuel L. Jackson play an armed robber sticking up a fast food restaurant?",
"answ":"COMING TO AMERICA",
"answ2":"Coming to America.",
},
{
"cat":"Animated",
"ques":"What Broadway actress voices Elsa in Frozen?",
"answ":"IDINA MENZEL",
"answ2":"Idina Menzel.",
},
{
"cat":"Directors",
"ques":"Who directed 2018's Vice?",
"answ":"ADAM MCKAY",
"answ2":"Adam McKay.",
},
{
"cat":"Wes Anderson",
"ques":"In The Royal Tenenbaums, what professional sport does Richie play until he has a meltdown over Margot's marriage?",
"answ":"TENNIS",
"answ2":"Tennis.",
},
{
"cat":"Comedies",
"ques":"Who plays the lead Jake Carson in the family comedy Playing with Fire?",
"answ":"JOHN CENA",
"answ2":"John Cena.",
},
{
"cat":"Stephen King",
"ques":"Who plays the villainous character Rose the Hat in Doctor Sleep?",
"answ":"REBECCA FERGUSON",
"answ2":"Rebecca Ferguson.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What 2019 hit film features such characters as Zorii Bliss and Babu Frik?",
"answ":"STAR WARS THE RISE OF SKYWALKER",
"answ3":"THE RISE OF SKYWALKER",
"answ2":"Star Wars: The Rise of Skywalker.",
},
{
"cat":"Comic Book Movies",
"ques":"Arthur Fleck reads a note from his mother that leads him to believe that what character is his father in Joker?",
"answ":"THOMAS WAYNE",
"answ2":"Thomas Wayne.",
},
{
"cat":"Animated",
"ques":"What MCU actor voices Walter, the scientific genius that turns Will Smith's character into a pigeon in the animated feature Spies in Disguise?",
"answ":"TOM HOLLAND",
"answ2":"Tom Holland.",
},
{
"cat":"Comic Book Movies",
"ques":"What is the term used to refer to to the event where people were brought back 5 years after they were snapped out of existence in Spider-Man: Far from Home?",
"answ":"THE BLIP",
"answ2":"The Blip.",
},
{
"cat":"Comic Book Movies",
"ques":"In Hellboy, who plays Vivienne Nimue, the Blood Queen?",
"answ":"MILLA JOVOVICH",
"answ2":"Milla Jovovich.",
},
{
"cat":"Comic Book Movies",
"ques":"At the end of Dark Phoenix, the name of the school is changed from 'Xavier's School for Gifted Youngsters' to which other mutant's name?",
"answ":"JEAN GREY",
"answ2":"Jean Grey.",
},
{
"cat":"Comic Book Movies",
"ques":"Which character in Avengers: Endgame said the line: 'He's pissed. He thinks he failed. Which, of course he did, but you know, there's a lot of that going around, ain't there?'?",
"answ":"ROCKET",
"answ2":"Rocket.",
},
{
"cat":"Dramas",
"ques":"In Parasite, what job does the father of the Kim family get when he is hired by the wealthy Parks?",
"answ":"CHAUFFEUR",
"answ3":"DRIVER",
"answ2":"Chauffeur.",
},
{
"cat":"Dramas",
"ques":"Which actor plays Lee Iacocca in Ford v Ferrari?",
"answ":"JON BERNTHAL",
"answ2":"Jon Bernthal.",
},
{
"cat":"Dramas",
"ques":"Trey Edward Shults directed this drama about a suburban African-American family that has to come together in the aftermath of a loss.",
"answ":"WAVES",
"answ2":"Waves.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which 2019 dramatic film has the following actors in its cast: Tim Roth, Naomi Watts, and Kelvin Harrison Jr.?",
"answ":"LUCE",
"answ2":"Luce.",
},
{
"cat":"Animated",
"ques":"Nicki Minaj, Peter Dinklage, Sterling K. Brown, Awkwafina, and Maya Rudolph are just some of the cast in this recent animated film.",
"answ":"THE ANGRY BIRDS MOVIE 2",
"answ2":"The Angry Birds Movie 2.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who directed Terminator: Dark Fate?",
"answ":"TIM MILLER",
"answ2":"Tim Miller.",
},
{
"cat":"Mystery",
"ques":"Name the movie with the following characters: Ransom Drysdale, Marta Cabrera, Lieutenant Elliott, and Joni Thrombley.",
"answ":"KNIVES OUT",
"answ2":"Knives Out.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Anya Taylor-Joy reprised her role as Casey Cooke in what 2019 film?",
"answ":"GLASS",
"answ2":"Glass.",
},
{
"cat":"Comic Book Movies",
"ques":"Who portrayed the titular Hellboy in 2019's Hellboy reboot?",
"answ":"DAVID HARBOUR",
"answ2":"David Harbour.",
},
{
"cat":"Stephen King",
"ques":"Who plays the grown Danny Torrance in Doctor Sleep?",
"answ":"EWAN MCGREGOR",
"answ2":"Ewan McGregor.",
},
{
"cat":"Horror",
"ques":"Which horror/thriller franchise had a sequel released in 2019 with the subtitle Uncaged?",
"answ":"47 METERS DOWN",
"answ2":"47 Meters Down.",
},
{
"cat":"Pixar",
"ques":"In Toy Story 4, we are introduced to three soldiers known as Combat Carls that are always asking for high fives. Which sports film veteran voices them?",
"answ":"CARL WEATHERS",
"answ2":"Carl Weathers.",
},
{
"cat":"Dramas",
"ques":"In the film Richard Jewell, which Academy Award winner plays Richard's mother Bobi?",
"answ":"KATHY BATES",
"answ2":"Kathy Bates.",
},
{
"cat":"Comedies",
"ques":"Which comedy has the tagline: 'You Must Be This Tall to See This Movie'?",
"answ":"GOOD BOYS",
"answ2":"Good Boys.",
},
{
"cat":"Romance",
"ques":"In the 2019 romance film Five Feet Apart, due to their cystic fibrosis genetic disorder, how far away must patients be from each other?",
"answ":"6 FEET",
"answ2":"6 feet.",
},
{
"cat":"Biopics",
"ques":"In Fighting with My Family, Saraya chooses the wrestling stage name Paige, taken from her favorite character on which TV show?",
"answ":"CHARMED",
"answ2":"Charmed.",
},
{
"cat":"Jennifer Lopez",
"ques":"What was the first feature film that Jennifer Lopez appeared in?",  
"answ":"MY LITTLE GIRL",
"answ2":"My Little Girl.",
},
{
"cat":"Westerns",
"ques":"Which actor starred as Jon Jensen in The Salvation?",
"answ":"MADS MIKKELSEN",
"answ2":"Mads Mikkelsen.",
},
{
"cat":"Westerns",
"ques":"Which actor wore the same poncho through all three Man With No Name movies?",
"answ":"CLINT EASTWOOD",
"answ2":"Clint Eastwood.",
},
{
"cat":"Westerns",
"ques":"Who played the second main character besides Frank Sinatra in the movie 4 to Texas?",
"answ":"DEAN MARTIN",
"answ2":"Dean Martin.",
},
{
"cat":"Westerns",
"ques":"Which famous football player starred in The Salvation?",
"answ":"ERIC CANTONA",
"answ2":"Eric Cantona.",
},
{
"cat":"Westerns",
"ques":"Which Hollwood actress and later a princess of Monaco, played the role of Amy Fowler Kane in High Noon?",
"answ":"GRACE KELLY",
"answ2":"Grace Kelly.",
},
{
"cat":"Westerns",
"ques":"Which was the last movie in which John Wayne wore the hat he had worn since Stagecoach?",
"answ":"RIO BRAVO",
"answ2":"Rio Bravo.",
},
{
"cat":"Westerns",
"ques":"Who has directed She Wore a Yellow Ribbon?",
"answ":"JOHN FORD",
"answ2":"John Ford.",
},
{
"cat":"Westerns",
"ques":"Which actor starred as Marshal Artemus Gordon in Wild Wild West?",
"answ":"KEVIN KLINE",
"answ2":"Kevin Kline.",
},
{
"cat":"Sly & Arnie",
"ques":"What was the first Arnold Schwarzenegger film to win four Academy Awards?",
"answ":"TERMINATOR 2 JUDGEMENT DAY",
"answ3":"TERMINATOR 2",
"answ2":"Terminator 2: Judgment Day.",
},
{
"cat":"Harrison Ford",
"ques":"In which Indiana Jones film was this classic understatement uttered in the dramatic conclusion: 'You have chosen wisely!'",
"answ":"INDIANA JONES AND THE LAST CRUSADE",
"answ3":"THE LAST CRUSADE",
"answ2":"Indiana Jones and the Last Crusade.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor made one of his earliest appearances as a drunken lawyer in Easy Rider?",
"answ":"JACK NICHOLSON",
"answ2":"Jack Nicholson.",
},
{
"cat":"Dystopian Future/Time Travel",
"ques":"Which fictionalized city of the future was overridden with crime and violence in Paul Verhoeven's RoboCop?",
"answ":"DETROIT",
"answ2":"Detroit.",
},
{
"cat":"Oscar Movies",
"ques":"Who is the most nominated male actor in Academy history?",
"answ":"JACK NICHOLSON",
"answ2":"Jack Nicholson.",
},
{
"cat":"Will Smith",
"ques":"Francis Lawrence directed Will Smith in which film?",
"answ":"I AM LEGEND",
"answ2":"I Am Legend.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"This actor had roles in the films Good Boys, Jojo Rabbit, and Fighting with My Family.",
"answ":"STEPHEN MERCHANT",
"answ2":"Stephen Merchant.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor had supporting roles in the 2019 films Long Shot, Dolemite Is My Name, and Little Women?",
"answ":"BOB ODENKIRK",
"answ2":"Bob Odenkirk.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Zazie Beetz had a supporting role in two films released on October 4, 2019. Joker was one. What was the other?",
"answ":"LUCY IN THE SKY",
"answ2":"Lucy in the Sky.",
},
{
"cat":"Classics",
"ques":"In the 1953 classic Roman Holiday, Princess Ann opts to drink what beverage for breakfast?",
"answ":"CHAMPAGNE",
"answ2":"Champagne.",
},
{
"cat":"Animated",
"ques":"Who voiced the yellow bird Chuck in The Angry Birds Movie?",
"answ":"JOSH GAD",
"answ2":"Josh Gad.",
},
{
"cat":"Courtroom Dramas",
"ques":"In 1994's The Client, who plays Reverend Roy Foltrigg, a celebrated and vain U.S. attorney with political ambitions?",
"answ":"TOMMY LEE JONES",
"answ2":"Tommy Lee Jones.",
},
{
"cat":"Lucasfilm",
"ques":"Which Lucasfilm movie features characters named Irina Spalko, Mac Michale, and Professor Oxley?",
"answ":"INDIANA JONES AND THE KINGDOM OF THE CRYSTAL SKULL",
"answ2":"Indiana Jones and the Kingdom of the Crystal Skull.",
},
{
"cat":"Judd Apatow",
"ques":"Kristen Wiig, Harold Ramis, Jenna Fischer, and Craig Robinson appear in what Apatow-penned 2007 comedy?",
"answ":"WALK HARD THE DEWEY COX STORY",
"answ2":"Walk Hard: The Dewey Cox Story.",
},
{
"cat":"Will Smith",
"ques":"In what 2006 film does Will Smith appear with his son Jaden?",
"answ":"THE PURSUIT OF HAPPYNESS",
"answ2":"The Pursuit of Happyness.",
},
{
"cat":"Tom Hanks",
"ques":"In which 1989 buddy cop comedy film does Tom Hanks co-star with Mare Winningham, Craig T. Nelson, and Reginald VelJohnson?",
"answ":"TURNER AND HOOCH",
"answ2":"Turner & Hooch.",
},
{
"cat":"Julia Roberts",
"ques":"Tom Wilkinson plays CEO Howard Tully, who hires Julia Roberts' character for the purposes of corporate espionage, in what film?",
"answ":"DUPLICITY",
"answ2":"Duplicity.",
},
{
"cat":"Sly & Arnie",
"ques":"Schwarzenegger plays John Matrix, a retired Special Forces colonel who tries to rescue his daughter from kidnappers, in what film?",
"answ":"COMMANDO",
"answ2":"Commando.",
},
{
"cat":"Sly & Arnie",
"ques":"What is the full title of the second film in the Rambo series?",
"answ":"RAMBO FIRST BLOOD PART II",
"answ2":"Rambo: First Blood Part II.",
},
{
"cat":"Comedies",
"ques":"In Three Amigos, what is the name of the bandit that is terrorizing Santo Poco?",
"answ":"EL GUAPO",
"answ2":"El Guapo.",
},
{
"cat":"Rob Reiner",
"ques":"In This Is Spinal Tap, filmmaker Marty Di Bergi follows the group on their 1982 U.S. tour to promote their new album named what?",
"answ":"SMELL THE GLOVE",
"answ2":"Smell the Glove.",
},
{
"cat":"80s",
"ques":"In Back to School, Rodney Dangerfield plays a wealthy man who visits his son at college. Which actor plays his son's roommate Derek?",
"answ":"ROBERT DOWNEY JR",
"answ2":"Robert Downey Jr.",
},
{
"cat":"Comedies",
"ques":"In Lethal Weapon 2, where did Murtaugh pretend he wanted to immigrate to?",
"answ":"SOUTH AFRICA",
"answ2":"South Africa.",
},
{
"cat":"Bill Murray",
"ques":"Bill Murray has a small role as a playwright who's the roommate of the main protagonist in what 1982 comedy?",
"answ":"TOOTSIE",
"answ2":"Tootsie.",
},
{
"cat":"Crime",
"ques":"Which Godfather actor starred in the 1981 Michael Mann film Thief?",
"answ":"JAMES CAAN",
"answ2":"James Caan.",
},
{
"cat":"Scores & Soundtracks",
"ques":"What band performed the title song in the film Weird Science?",
"answ":"OINGO BOINGO",
"answ2":"Oingo Boingo.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"This sci-fi adventure film depicts two warring outer space factions: the heroic Rylan Star League and the villainous Ko-Dan Empire.",
"answ":"THE LAST STARFIGHTER",
"answ2":"The Last Starfighter.",
},
{
"cat":"Rom-coms",
"ques":"In 10 Things I Hate About You, who plays Ms. Perky, the guidance counselor and writer of erotic literature?",
"answ":"ALLISON JANNEY",
"answ2":"Allison Janney.",
},
{
"cat":"Rom-coms",
"ques":"In what 2009 film does Katherine Heigl play TV producer Abby, who receives help on romance from Gerard Butler's Mike?",
"answ":"THE UGLY TRUTH",
"answ2":"The Ugly Truth.",
},
{
"cat":"Rom-coms",
"ques":"10-year-old Gabe played by Josh Hutcherson experiences love for the first time in what 2005 film?",
"answ":"LITTLE MANHATTAN",
"answ2":"Little Manhattan.",
},
{
"cat":"Rom-coms",
"ques":"Who stars as art curator Beth, who takes coins from the 'fountain of love', in 2010's When in Rome?",
"answ":"KRISTEN BELL",
"answ2":"Kristen Bell.",
},
{
"cat":"Adam Sandler",
"ques":"How many times has Adam Sandler played love interest to Drew Barrymore?",
"answ":"3",
"answ2":"3 (The Wedding Singer, 50 First Dates, Blended).",
},
{
"cat":"Rom-coms",
"ques":"In Clueless, who designed Cher's dress for her first date with Christian?",
"answ":"CALVIN KLEIN",
"answ2":"Calvin Klein.",
},
{
"cat":"Julia Roberts",
"ques":"In Pretty Woman, Vivian finds Edward playing what instrument in the lounge late at night?",
"answ":"PIANO",
"answ2":"Piano.",
},
{
"cat":"Julia Roberts",
"ques":"In Pretty Woman, who plays Julia Roberts' best friend and roommate Kit De Luca?",
"answ":"LAURA SAN GIACOMO",
"answ2":"Laura San Giacomo.",
},
{
"cat":"Julia Roberts",
"ques":"In what film does Julia Roberts play the personal assistant of a movie star, who is also her sister?",
"answ":"AMERICA'S SWEETHEARTS",
"answ2":"America's Sweethearts.",
},
{
"cat":"Julia Roberts",
"ques":"In I Love Trouble, Julia Roberts and Nick Nolte play reporters that are investigating what kind of disaster?",
"answ":"TRAIN CRASH",
"answ2":"Train crash.",
},
{
"cat":"Rom-coms",
"ques":"What city does the 2009 film He's Just Not That into You take place?",
"answ":"BALTIMORE",
"answ2":"Baltimore.",
},
{
"cat":"Garry Marshall",
"ques":"Valentine's Day was released in what year?",
"answ":"2010",
"answ2":"2010.",
},
{
"cat":"Rom-coms",
"ques":"In the 1987 romantic comedy Mannequin, about a magical mannequin, who plays the mannequin?",
"answ":"KIM CATTRALL",
"answ2":"Kim Cattrall.",
},
{
"cat":"Meg Ryan",
"ques":"Who plays Meg Ryan's love interest Luc, a French smuggler who dreams of owning his own vineyard, in the 1995 rom-com French Kiss?",
"answ":"KEVIN KLINE",
"answ2":"Kevin Kline.",
},
{
"cat":"Rom-coms",
"ques":"In Crazy, Stupid, Love., Ryan Gosling's romantic 'big move' involves recreating a moment from which classic movie?",
"answ":"DIRTY DANCING",
"answ2":"Dirty Dancing.",
},
{
"cat":"Julia Roberts",
"ques":"What is the name of William Thacker's little sister in the film Notting Hill?",
"answ":"HONEY THACKER",
"answ3":"HONEY",
"answ2":"Honey Thacker.",
},
{
"cat":"Sandra Bullock",
"ques":"What is the subtitle for the Sandra Bullock sequel Miss Congeniality 2?",
"answ":"ARMED AND FABULOUS",
"answ2":"Armed and Fabulous.",
},
{
"cat":"Drew Barrymore",
"ques":"Which comedic actor plays Drew Barrymore's ex-husband in 2014's Blended?",
"answ":"JOEL MCHALE",
"answ2":"Joel McHale.",
},
{
"cat":"Rom-coms",
"ques":"Which 1996 romantic comedy co-stars Janeane Garofalo, Jamie Foxx, and Uma Thurman?",
"answ":"THE TRUTH ABOUT CATS AND DOGS",
"answ2":"The Truth About Cats & Dogs.",
},
{
"cat":"Horror",
"ques":"Which 1987 horror anthology features segments including 'The Raft', 'Old Chief Wood'nhead', and 'The Hitchhiker'?",
"answ":"CREEPSHOW 2",
"answ2":"Creepshow 2.",
},
{
"cat":"Horror",
"ques":"Jane Levy plays Mia Allen, a heroin addict whose friends take her to a cabin in the woods to help her overcome her addiction, in what 2013 reboot?",
"answ":"EVIL DEAD",
"answ2":"Evil Dead.",
},
{
"cat":"Horror",
"ques":"Which iconic slasher found his return in 1988, had his revenge in 1989, and was found to have a curse in 1995?",
"answ":"MICHAEL MYERS",
"answ2":"Michael Myers.",
},
{
"cat":"Horror",
"ques":"Sid Haig played the role of Captain Spaulding for the first time in what 2003 film from director Rob Zombie?",
"answ":"HOUSE OF 1000 CORPSES",
"answ2":"House of 1000 Corpses.",
},
{
"cat":"Tom Hanks",
"ques":"What 1989 comedic horror thriller follows Tom Hanks as Ray Peterson, who begins to believe his new neighbors are also murderers?",
"answ":"THE BURBS",
"answ2":"The 'Burbs.",
},
{
"cat":"Horror",
"ques":"What 2017 horror film from director David F. Sandberg features performances from Anthony LaPaglia and Miranda Otto?",
"answ":"ANNABELLE CREATION",
"answ2":"Annabelle: Creation.",
},
{
"cat":"Horror",
"ques":"You'll find the character known as Harold the Scarecrow in what 2019 horror film based on a series of books?",
"answ":"SCARY STORIES TO TELL IN THE DARK",
"answ2":"Scary Stories to Tell in the Dark.",
},
{
"cat":"Horror",
"ques":"This 1972 horror anthology features actors such as Peter Cushing and Ralph Richardson, and segments including 'Blind Alleys' and 'Poetic Justice'.",
"answ":"TALES FROM THE CRYPT",
"answ2":"Tales from the Crypt.",
},
{
"cat":"Horror",
"ques":"Joe Dante, George Miller, and Steven Spielberg all directed segments in this 1980s horror anthology film.",
"answ":"TWILIGHT ZONE THE MOVIE",
"answ2":"Twilight Zone: The Movie.",
},
{
"cat":"Horror",
"ques":"Who plays Richard Vickers, a vicious, wealthy, and ruthless man who forces Ted Danson to bury himself alive at the beach, in the Creepshow segment 'Something to Tide You Over'?",
"answ":"LESLIE NIELSEN",
"answ2":"Leslie Nielsen.",
},
{
"cat":"Horror",
"ques":"Who plays the role of Dr. Robert Morgan, who lives in a world where humanity has been infected by a plague that has turned them into undead creatures in The Last Man on Earth?",
"answ":"VINCENT PRICE",
"answ2":"Vincent Price.",
},
{
"cat":"Wes Craven",
"ques":"Wes Craven made his screenwriting, editing, and directorial debut with this 1972 exploitation horror film?",
"answ":"THE LAST HOUSE ON THE LEFT",
"answ2":"The Last House on the Left.",
},
{
"cat":"Horror",
"ques":"Who directed 1977's Exorcist II: The Heretic?",
"answ":"JOHN BOORMAN",
"answ2":"John Boorman.",
},
{
"cat":"Monster Movies",
"ques":"How many overall films did Hammer Horror make in their Mummy series?",
"answ":"4",
"answ3":"FOUR",
"answ2":"4.",
},
{
"cat":"Classics",
"ques":"Terence Fisher directed Herbert Lom and Michael Gough in what 1962 film based on a famous 1910 novel?",
"answ":"THE PHANTOM OF THE OPERA",
"answ2":"The Phantom of the Opera.",
},
{
"cat":"Monster Movies",
"ques":"What is the title of the first film in the Hammer Frankenstein series, which stars Peter Cushing as Baron Victor Frankenstein and Christopher Lee as the Creature?",
"answ":"THE CURSE OF FRANKENSTEIN",
"answ2":"The Curse of Frankenstein.",
},
{
"cat":"Horror",
"ques":"Mia Farrow stars in this film about a young couple trying for a baby, who end up moving into a fancy apartment surrounded by peculiar neighbors?",
"answ":"ROSEMARY'S BABY",
"answ2":"Rosemary's Baby.",
},
{
"cat":"Horror",
"ques":"Tom Welling, Maggie Grace, and Selma Blair have performances in this 2005 remake of a John Carpenter film.",
"answ":"THE FOG",
"answ2":"The Fog.",
},
{
"cat":"Horror",
"ques":"A young couple staying in an isolated vacation home are terrorized by three unknown assailants in this 2008 film.",
"answ":"THE STRANGERS",
"answ2":"The Strangers.",
},
{
"cat":"Horror",
"ques":"You'll find the astral dimension known as the Further in this 2011 James Wan film that stars Patrick Wilson and Rose Byrne.",
"answ":"INSIDIOUS",
"answ2":"Insidious.",
},
{
"cat":"Horror",
"ques":"Adam Wingard, Gareth Evans, and Simon Barrett all directed segments in this 2013 horror anthology that includes the segments 'Safe Haven' and 'Phase I Clinical Trials'.",
"answ":"V H S 2",
"answ3":"VHS2",
"answ2":"V/H/S/2.",
},
{
"cat":"Horror",
"ques":"What 1980s slasher film features supporting performances by Shelley Hack, Stephen Shellen, and Jill Schoelen?",
"answ":"THE STEPFATHER",
"answ2":"The Stepfather.",
},
{
"cat":"Horror",
"ques":"What 1963 horror film features performances from Veronica Cartwright, Jessica Tandy, and Tippi Hedren?",
"answ":"THE BIRDS",
"answ2":"The Birds.",
},
{
"cat":"Monster Movies",
"ques":"Which famous horror actor played the role of Dracula a total of seven times for Hammer?",
"answ":"CHRISTOPHER LEE",
"answ2":"Christopher Lee.",
},
{
"cat":"Rom-coms",
"ques":"What future MCU star plays a member of the Six Chicks, the group of mean girls a young Jenna tries to fit in with, in the film 13 Going on 30?",
"answ":"BRIE LARSON",
"answ2":"Brie Larson.",
},
{
"cat":"Rom-coms",
"ques":"In the 2003 film What a Girl Wants, Amanda Bynes plays an American teen who goes to London to reconnect with her British father played by whom?",
"answ":"COLIN FIRTH",
"answ2":"Colin Firth.",
},
{
"cat":"Lucasfilm",
"ques":"George Lucas produced what 1986 comic book adaptation that starred Lea Thompson and Tim Robbins?",
"answ":"HOWARD THE DUCK",
"answ2":"Howard the Duck.",
},
{
"cat":"Lucasfilm",
"ques":"This 1980s Lucasfilm production has the repeated phrase 'You remind me of the babe. What babe? The babe with the power!'.",
"answ":"LABYRINTH",
"answ2":"Labyrinth.",
},
{
"cat":"Scores & Soundtracks",
"ques":"You'll see two characters dance to Chuck Berry's 'You Never Can Tell' at a 50s diner called Jack Rabbit Slim's in what 1994 crime film?",
"answ":"PULP FICTION",
"answ2":"Pulp Fiction.",
},
{
"cat":"Horror",
"ques":"How many films are in the Gingerdead franchise?",
"answ":"4",
"answ2":"4.",
},
{
"cat":"90s",
"ques":"Shannon Elizabeth made her feature film debut in this 1997 slasher film.",
"answ":"JACK FROST",
"answ2":"Jack Frost.",
},
{
"cat":"Horror",
"ques":"This famous actor known for his supporting roles especially in movies directed by his brother played the leading role of Ricky in Silent Night, Deadly Night 4: Initiation.",
"answ":"CLINT HOWARD",
"answ2":"Clint Howard.",
},
{
"cat":"Horror",
"ques":"Which franchise features performances from Cary Elwes, Lacey Chabert, and Olivia Hussey?",
"answ":"BLACK CHRISTMAS",
"answ2":"Black Christmas.",
},
{
"cat":"Horror",
"ques":"This 2009 horror comedy follows a homicidal turkey that axes off college kids during Thanksgiving break.",
"answ":"THANKSKILLING",
"answ2":"ThanksKilling.",
},
{
"cat":"70s",
"ques":"This Nightmare on Elm Street actor portrays Lieutenant Fuller in the 1970s version of Black Christmas.",
"answ":"JOHN SAXON",
"answ2":"John Saxon.",
},
{
"cat":"Thrillers",
"ques":"Henry Cavill and Angela Bassett join Tom Cruise, Ving Rhames, and Rebecca Ferguson in this 2018 sequel.",
"answ":"MISSION IMPOSSIBLE FALLOUT",
"answ2":"Mission: Impossible Fallout.",
},
{
"cat":"Tom Cruise",
"ques":"Which actress plays the role of Charlotte Blackwood in Top Gun?",
"answ":"KELLY MCGILLIS",
"answ2":"Kelly McGillis.",
},
{
"cat":"Thrillers",
"ques":"Who plays the lead role of SAS Captain John Patrick Mason, who is taken out of prison to lead a mission to Alcatraz, in The Rock?",
"answ":"SEAN CONNERY",
"answ2":"Sean Connery.",
},
{
"cat":"Tom Cruise",
"ques":"Which actor plays Buck Bretherton, Cole's car chief, in Days of Thunder?",
"answ":"JOHN C REILLY",
"answ2":"John C. Reilly.",
},
{
"cat":"Comedies",
"ques":"What 2018 comedy starred Amy Schumer and Michelle Williams?",
"answ":"I FEEL PRETTY",
"answ2":"I Feel Pretty.",
},
{
"cat":"Crime",
"ques":"What crime drama stars Clint Eastwood, Bradley Cooper, and Laurence Fishburne?",
"answ":"THE MULE",
"answ2":"The Mule.",
},
{
"cat":"Directors",
"ques":"Otto Bathurst made his feature film directorial debut with what adventure film?",
"answ":"ROBIN HOOD",
"answ2":"Robin Hood.",
},
{
"cat":"M. Night Shyamalan",
"ques":"In 2019's Glass, David Dunn's hero persona has been dubbed what by the Internet?",
"answ":"THE OVERSEER",
"answ2":"The Overseer.",
},
{
"cat":"MCU",
"ques":"In Infinity War, what country are Scarlet Witch and Vision hiding out in before being attacked?",
"answ":"SCOTLAND",
"answ2":"Scotland.",
},
{
"cat":"Biopics",
"ques":"In On the Basis of Sex, Ruth Bader Ginsburg began law school at what university?",
"answ":"HARVARD",
"answ3":"HARVARD UNIVERSITY",
"answ2":"Harvard University.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor appeared in Hotel Artemis, The Predator, and Black Panther?",
"answ":"STERLING K BROWN",
"answ2":"Sterling K. Brown.",
},
{
"cat":"Oscar Movies",
"ques":"Who received a Best Supporting Actor Oscar nomination for Vice?",
"answ":"SAM ROCKWELL",
"answ2":"Sam Rockwell.",
},
{
"cat":"Animated",
"ques":"In 2018, James Corden appeared in Ocean's 8 and Smallfoot, and provided a voice for which other film?",
"answ":"PETER RABBIT",
"answ2":"Peter Rabbit.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actress appears in the films Annihilation and Smallfoot?",
"answ":"GINA RODRIGUEZ",
"answ2":"Gina Rodriguez.",
},
{
"cat":"Dramas",
"ques":"In Green Book, Tony and Don Shirley want to make it home in time for which holiday?",
"answ":"CHRISTMAS",
"answ2":"Christmas.",
},
{
"cat":"Animated",
"ques":"In 2018, Angela Lansbury was featured in Mary Poppins Returns as well as this animated film, where she played Mayor McGerkle.",
"answ":"THE GRINCH",
"answ2":"The Grinch.",
},
{
"cat":"Disney",
"ques":"Who directed Christopher Robin?",
"answ":"MARC FORSTER",
"answ2":"Marc Forster.",
},
{
"cat":"Monster Movies",
"ques":"Which 2018 monster film has the following quote: 'It feared nothing. It had no predators. Its jaws were stronger than any other animal, ever.'?",
"answ":"THE MEG",
"answ2":"The Meg.",
},
{
"cat":"Biopics",
"ques":"Which Academy Award winner plays Dorothy Kenyon, a lawyer, feminist, and political activist in On the Basis of Sex?",
"answ":"KATHY BATES",
"answ2":"Kathy Bates.",
},
{
"cat":"90s",
"ques":"Which actor starred in the 90s films Bugsy, Love Affair, and Bulworth?",
"answ":"WARREN BEATTY",
"answ2":"Warren Beatty.",
},
{
"cat":"Black Cinema",
"ques":"Actor Parker Sawyers plays what real-life political figure in the 2016 film Southside with You?",
"answ":"BARACK OBAMA",
"answ2":"Barack Obama.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which actor plays Nolan Sorrento, a villainous CEO, in the film Ready Player One?",
"answ":"BEN MENDELSOHN",
"answ2":"Ben Mendelsohn.",
},
{
"cat":"Comedies",
"ques":"Emilio Estevez and Samuel L. Jackson star in this 1993 spoof of buddy cop films featuring the tagline 'Oh my God. They have guns!'.",
"answ":"NATIONAL LAMPOON'S LOADED WEAPON 1",
"answ3":"LOADED WEAPON 1",
"answ2":"National Lampoon's Loaded Weapon 1.",
},
{
"cat":"War",
"ques":"Which Oscar-winning actor co-starred in the 2000s war films The Patriot and The Four Feathers?",
"answ":"HEATH LEDGER",
"answ2":"Heath Ledger.",
},
{
"cat":"Kevin Smith",
"ques":"What comedy marked the first collaboration of director Kevin Smith with actor Ben Affleck?",
"answ":"MALLRATS",
"answ2":"Mallrats.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the releases of the remakes of Conan the Barbarian, Fright Night, and Arthur?",
"answ":"2011",
"answ2":"2011.",
},
{
"cat":"Marvel Movies",
"ques":"In Venom, who played Dr. Dora Skirth, the scientist that tried to warn Eddie about her boss?",
"answ":"JENNY SLATE",
"answ2":"Jenny Slate.",
},
{
"cat":"Horror",
"ques":"What horror film was directed by Dean Devlin and starred David Tennant and Robert Sheehan?",
"answ":"BAD SAMARITAN",
"answ2":"Bad Samaritan.",
},
{
"cat":"Dwayne Johnson",
"ques":"Who plays Sarah Sawyer, Dwayne Johnson's character's wife, in Skyscraper?",
"answ":"NEVE CAMPBELL",
"answ2":"Neve Campbell.",
},
{
"cat":"Dramas",
"ques":"In If Beale Street Could Talk, what Star Wars actor plays waiter and Fonny's friend Pedrocito?",
"answ":"DIEGO LUNA",
"answ2":"Diego Luna.",
},
{
"cat":"Horror",
"ques":"What is Charlie allergic to in Hereditary?",
"answ":"PEANUTS",
"answ2":"Peanuts.",
},
{
"cat":"Spider-Man",
"ques":"What is the profession of Miles Morales' father Jefferson in Spider-Man: Into the Spider-Verse?",
"answ":"POLICE OFFICER",
"answ2":"Police officer.",
},
{
"cat":"Tom Cruise",
"ques":"Which Academy Award winning actress co-stars with Cruise as TV journalist Janine Roth in Lions for Lambs?",
"answ":"MERYL STREEP",
"answ2":"Meryl Streep.",
},
{
"cat":"Meg Ryan",
"ques":"Which comedian co-stars alongside Meg as Frank Dooley in the film Armed and Dangerous?",
"answ":"JOHN CANDY",
"answ2":"John Candy.",
},
{
"cat":"Meg Ryan",
"ques":"Who directed Meg Ryan in Innerspace?",
"answ":"JOE DANTE",
"answ2":"Joe Dante.",
},
{
"cat":"Directors",
"ques":"Who directed the 1978 horror movie Dawn of the Dead?",
"answ":"GEORGE A ROMERO",
"answ2":"George A. Romero.",
},
{
"cat":"Movie Release Dates",
"ques":"In which year was J.A. Bayona's film The Orphanage released?",
"answ":"2007",
"answ2":"2007.",
},
{
"cat":"Horror",
"ques":"What movie from the Psycho series was released in 1986?",
"answ":"PSYCHO III",
"answ2":"Psycho III.",
},
{
"cat":"Horror",
"ques":"Who starred as Arkin in Marcus Dunstan's 2009 film The Collector?",
"answ":"JOSH STEWART",
"answ2":"Josh Stewart.",
},
{
"cat":"Video Game Movies",
"ques":"Who starred as Alice in Paul W.S. Anderson's 2002 film Resident Evil?",
"answ":"MILLA JOVOVICH",
"answ2":"Milla Jovovich.",
},
{
"cat":"Horror",
"ques":"Who starred as Selene in Len Wiseman's 2003 film Underworld?",
"answ":"KATE BECKINSALE",
"answ2":"Kate Beckinsale.",
},
{
"cat":"Dramas",
"ques":"In which movie would you find the character a ballet dancer Lily, played by Mila Kunis?",
"answ":"BLACK SWAN",
"answ2":"Black Swan.",
},
{
"cat":"War",
"ques":"In which movie would you find the character young woman Mathilde, played by Audrey Tautou?",
"answ":"A VERY LONG ENGAGEMENT",
"answ2":"A Very Long Engagement.",
},
{
"cat":"Movie Characters",
"ques":"In which movie would you find the character a young nicotine addicted traveler Richard, played by Leonardo DiCaprio?",
"answ":"THE BEACH",
"answ2":"The Beach.",
},
{
"cat":"Movie Quotes",
"ques":"From which movie is this quote: 'I'm glad he's single, cause I'm gonna climb that like a tree'?",
"answ":"BRIDESMAIDS",
"answ2":"Bridesmaids.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"In which movie would you find a CIA operative Tuck, played by Tom Hardy?",
"answ":"THIS MEANS WAR",
"answ2":"This Means War.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"In which movie would you find a political consultant, played by Ryan Reynolds?",
"answ":"DEFINITELY MAYBE",
"answ2":"Definitely, Maybe.",
},
{
"cat":"Tom Hanks",
"ques":"How did Forrest Gump name his boat?",
"answ":"JENNY",
"answ2":"Jenny.",
},
{
"cat":"Tom Hanks",
"ques":"What drink was Forrest Gump's favorite?",
"answ":"DR PEPPER",
"answ2":"Dr. Pepper.",
},
{
"cat":"Dramas",
"ques":"Who played Daisy in Girl, Interrupted?",
"answ":"BRITTANY MURPHY",
"answ2":"Brittany Murphy.",
},
{
"cat":"2000s",
"ques":"Who played Mary Haskins in James Gartner's Glory Road?",
"answ":"EMILY DESCHANEL",
"answ2":"Emily Deschanel.",
},
{
"cat":"Rom-coms",
"ques":"Who plays Halley Martin in How to Deal?",
"answ":"MANDY MOORE",
"answ2":"Mandy Moore.",
},
{
"cat":"Thrillers",
"ques":"Who plays Mars Krupcheck in 2005's Hostage?",
"answ":"BEN FOSTER",
"answ2":"Ben Foster.",
},
{
"cat":"Sports",
"ques":"Who played Casey Carlyle in 2005's Ice Princess?",
"answ":"MICHELLE TRACHTENBERG",
"answ2":"Michelle Trachtenberg.",
},
{
"cat":"Dramas",
"ques":"What movie is about the true story of Homer Hickam, a coal miner's son who take up rocketry?",
"answ":"OCTOBER SKY",
"answ2":"October Sky.",
},
{
"cat":"Dramas",
"ques":"Which actor played the role of the Homer Hickam in October Sky?",
"answ":"JAKE GYLLENHAAL",
"answ2":"Jake Gyllenhaal.",
},
{
"cat":"Horror",
"ques":"Who starred as Count Dracula in Bill Eagles' 2006 film Dracula?",
"answ":"MARC WARREN",
"answ2":"Marc Warren.",
},
{
"cat":"90s",
"ques":"Who starred as Clint Goodman in Frank Darabont's 1990 film Buried Alive?",
"answ":"TIM MATHESON",
"answ2":"Tim Matheson.",
},
{
"cat":"Holiday Movies",
"ques":"This 2010s holiday horror comedy features performances from Toni Collette, Conchata Ferrell, and David Koechner.",
"answ":"KRAMPUS",
"answ2":"Krampus.",
},
{
"cat":"90s",
"ques":"Who stars as Jericho Cane, who must protect an innocent young woman who has been chosen to conceive the Antichrist in the 1990s horror action film End of Days?",
"answ":"ARNOLD SCHWARZENEGGER",
"answ2":"Arnold Schwarzenegger.",
},
{
"cat":"Horror",
"ques":"This 1980 slasher film starring Brandon Maggart follows a toy factory worker who embarks on a yuletide kiling spree.",
"answ":"CHRISTMAS EVIL",
"answ2":"Christmas Evil.",
},
{
"cat":"Holiday Movies",
"ques":"This 2017 holiday horror film features performances from Patrick Warburton, Olivia DeJonge, and Levi Miller.",
"answ":"BETTER WATCH OUT",
"answ2":"Better Watch Out.",
},
{
"cat":"Horror",
"ques":"How many films in the Silent Night, Deadly Night film franchise were theatrically released?",
"answ":"3",
"answ2":"3.",
},
{
"cat":"Holiday Movies",
"ques":"This scream queen starred alongside Ben Johnson and Hart Bochner in the 1980 New Year's Eve slasher film Terror Train?",
"answ":"JAMIE LEE CURTIS",
"answ2":"Jamie Lee Curtis.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In one of her earliest roles, Helen Hunt features as a department store elf in this 1985 sci-fi horror film featuring the characters Jack Deth and Martin Whistler.",
"answ":"TRANCERS",
"answ2":"Trancers.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In Gremlins, who voices the adorable Mogwai named Gizmo that Billy gets for Christmas?",
"answ":"HOWIE MANDEL",
"answ2":"Howie Mandel.",
},
{
"cat":"2010s",
"ques":"Sam Worthington plays the lead role of Ray Monroe in this 2019 horror thriller from director Brad Anderson.",
"answ":"FRACTURED",
"answ2":"Fractured.",
},
{
"cat":"2010s",
"ques":"Who plays the lead role of Sheriff James Cooper, the sheriff of Cryer, in 2012's Silent Night?",
"answ":"MALCOLM MCDOWELL",
"answ2":"Malcolm McDowell.",
},
{
"cat":"2010s",
"ques":"Which Stranger Things actor appears in Better Watch Out as Ashley's ex-boyfriend Jeremy?",
"answ":"DACRE MONTGOMERY",
"answ2":"Dacre Montgomery.",
},
{
"cat":"Holiday Movies",
"ques":"Which actor voiced and did the motion capture for Scrooge in Robert Zemeckis' A Christmas Carol?",
"answ":"JIM CARREY",
"answ2":"Jim Carrey.",
},
{
"cat":"70s",
"ques":"Which actress, who appeared in the original Superman franchise, appeared in the original Black Christmas?",
"answ":"MARGOT KIDDER",
"answ2":"Margot Kidder.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which famed actress appears as a character simply known as 'the girl' , the lead character of the 2007 film Wind Chill?",
"answ":"EMILY BLUNT",
"answ2":"Emily Blunt.",
},
{
"cat":"2010s",
"ques":"This 2019 horror film features performances from Tyler Labine and Deborah Ann Woll.",
"answ":"ESCAPE ROOM",
"answ2":"Escape Room.",
},
{
"cat":"Horror",
"ques":"Who directed Maniac Cop 2?",
"answ":"WILLIAM LUSTIG",
"answ2":"William Lustig.",
},
{
"cat":"2010s",
"ques":"Who plays the title character in the 2012 movie Lincoln?",
"answ":"DANIEL DAY LEWIS",
"answ2":"Daniel Day Lewis.",
},
{
"cat":"Movie Characters",
"ques":"Who played Tyler Durden in Fight Club?",
"answ":"BRAD PITT",
"answ2":"Brad Pitt.",
},
{
"cat":"Movie Characters",
"ques":"Which actor played the role of Forrest Gump?",
"answ":"TOM HANKS",
"answ2":"Tom Hanks.",
},
{
"cat":"Movie Characters",
"ques":"Who played Steve Jobs in Jobs?",
"answ":"ASHTON KUTCHER",
"answ2":"Ashton Kutcher.",
},
{
"cat":"Dramas",
"ques":"Who played Fletcher in Whiplash?",
"answ":"JK SIMMONS",
"answ2":"J.K. Simmons.",
},
{
"cat":"Movie Characters",
"ques":"Which actor played the role of Frank Abagnale Jr. in Catch Me If You Can?",
"answ":"LEONARDO DICAPRIO",
"answ2":"Leonardo DiCaprio.",
},
{
"cat":"Oscar Movies",
"ques":"Which actor won the Academy Award for Best Actor in a Leading Role in 1962 for the role of Atticus Finch?",
"answ":"GREGORY PECK",
"answ2":"Gregory Peck.",
},
{
"cat":"Oscar Movies",
"ques":"Which actor won the Academy Award for Best Actor in a Leading Role in 1975 for the role of Randle Patrick Mac McMurphy?",
"answ":"JACK NICHOLSON",
"answ2":"Jack Nicholson.",
},
{
"cat":"Movie Characters",
"ques":"Which actor plays Johnny English?",
"answ":"ROWAN ATKINSON",
"answ2":"Rowan Atkinson.",
},
{
"cat":"Comedies",
"ques":"What's the name of the comedy about a psychiatrist whose number one patient is an insecure mob boss?",
"answ":"ANALYZE THIS",
"answ2":"Analyze This.",
},
{
"cat":"Biopics",
"ques":"What movie is about the life and career of a legendary comedian, Andy Kaufman?",
"answ":"MAN ON THE MOON",
"answ2":"Man on the Moon.",
},
{
"cat":"Movie Characters",
"ques":"Who played the role of the Pacifier?",
"answ":"VIN DIESEL",
"answ2":"Vin Diesel.",
},
{
"cat":"Family Films",
"ques":"Which actress played the roles of identical twins in The Parent Trap?",
"answ":"LINDSAY LOHAN",
"answ2":"Lindsay Lohan.",
},
{
"cat":"Oscar Movies",
"ques":"Which actor won the Academy Award for Best Actor in a Leading Role in 1984 for the role of Antonio Salieri?",
"answ":"F MURRAY ABRAHAM",
"answ2":"F. Murray Abraham.",
},
{
"cat":"Comedies",
"ques":"In Trainwreck, which sportsman plays Aaron's friend?",
"answ":"LEBRON JAMES",
"answ2":"LeBron James.",
},
{
"cat":"Comedies",
"ques":"Who played FBI Special Agent Sarah Ashburn in The Heat?",
"answ":"SANDRA BULLOCK",
"answ2":"Sandra Bullock.",
},
{
"cat":"Black Cinema",
"ques":"Which actress plays the role of Erica Long, Andre's fiancee in Top Five?",
"answ":"GABRIELLE UNION",
"answ2":"Gabrielle Union.",
},
{
"cat":"Comedies",
"ques":"Who played Detective Shannon Mullins in The Heat?",
"answ":"MELISSA MCCARTHY",
"answ2":"Melissa McCarthy.",
},
{
"cat":"Comedies",
"ques":"In This Means War, who played the role of Franklin FDR Foster, a womanizer who falls for Lauren?",
"answ":"CHRIS PINE",
"answ2":"Chris Pine.",
},
{
"cat":"Oscar Movies",
"ques":"Which actress won the Academy Award for Best Actress for the Leading Role in Coming Home?",
"answ":"JANE FONDA",
"answ2":"Jane Fonda.",
},
{
"cat":"Oscar Movies",
"ques":"Which actress won the Academy Award for Best Actress in a Leading Role in Monster's Ball?",
"answ":"HALLE BERRY",
"answ2":"Halle Berry.",
},
{
"cat":"Movie Characters",
"ques":"Which actor played the role of Trevor Reznik in The Machinist?",
"answ":"CHRISTIAN BALE",
"answ2":"Christian Bale.",
},
{
"cat":"Movie Characters",
"ques":"Which actor played the role of Tony Mendez in Argo?",
"answ":"BEN AFFLECK",
"answ2":"Ben Affleck.",
},
{
"cat":"2000s",
"ques":"Who plays the title character in the 2005 movie Oliver Twist?",
"answ":"BARNEY CLARK",
"answ2":"Barney Clark.",
},
{
"cat":"Black Cinema",
"ques":"Who plays the title character in the 2009 movie Precious?",
"answ":"GABOUREY SIDIBE",
"answ2":"Gabourey Sidibe.",
},
{
"cat":"Musicians in Film",
"ques":"What singer starred at the end of the Coyote Ugly?",
"answ":"LEANN RIMES",
"answ2":"LeAnn Rimes.",
},
{
"cat":"Musicians in Film",
"ques":"Which singer played the role of Kyra in Coach Carter?",
"answ":"ASHANTI",
"answ2":"Ashanti.",
},
{
"cat":"90s",
"ques":"Which actress plays Annette in Cruel Intentions?",
"answ":"REESE WITHERSPOON",
"answ2":"Reese Witherspoon.",
},
{
"cat":"Movie Characters",
"ques":"In which movie you can find Baby Houseman and Johnny Castle?",
"answ":"DIRTY DANCING",
"answ2":"Dirty Dancing.",
},
{
"cat":"2000s",
"ques":"Which actress played the role of Anabelle in Elvis and Anabelle?",
"answ":"BLAKE LIVELY",
"answ2":"Blake Lively.",
},
{
"cat":"2000s",
"ques":"Which actor played the role of Elvis in Elvis and Anabelle?",
"answ":"MAX MINGHELLA",
"answ2":"Max Minghella.",
},
{
"cat":"Movie Characters",
"ques":"Who starred as Elle Woods in Robert Luketic's 2001 film Legally Blonde?",
"answ":"REESE WITHERSPOON",
"answ2":"Reese Witherspoon.",
},
{
"cat":"Ben Stiller",
"ques":"Who starred as Steven M. Kovacs in Ben Stiller's 1996 film The Cable Guy?",
"answ":"MATTHEW BRODERICK",
"answ2":"Matthew Broderick.",
},
{
"cat":"Rom-coms",
"ques":"Who directed Bridget Jones's Diary?",
"answ":"SHARON MAGUIRE",
"answ2":"Sharon Maguire.",
},
{
"cat":"Movie Characters",
"ques":"In the Home Alone series, which actor played the part of Kevin McCallister?",
"answ":"MACAULAY CULKIN",
"answ2":"Macaulay Culkin.",
},
{
"cat":"Comedies",
"ques":"In Trainwreck which actress played the part of Amy?",
"answ":"AMY SCHUMER",
"answ2":"Amy Schumer.",
},
{
"cat":"Jonah Hill",
"ques":"In which movie would you find record company intern Aaron Green, played by Jonah Hill?",
"answ":"GET HIM TO THE GREEK",
"answ2":"Get Him to the Greek.",
},
{
"cat":"Oscar Movies",
"ques":"Which actor won the Academy Award for Best Actor in a Supporting Role in 2006 for the role of Edwin Hoover?",
"answ":"ALAN ARKIN",
"answ2":"Alan Arkin.",
},
{
"cat":"Oscar Movies",
"ques":"Which actress won the Academy Award for Best Actress in a Leading Role in 2012 for the role of Tiffany Maxwell?",
"answ":"JENNIFER LAWRENCE",
"answ2":"Jennifer Lawrence.",
},
{
"cat":"Comedies",
"ques":"Who played Evan in Superbad?",
"answ":"MICHAEL CERA",
"answ2":"Michael Cera.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which actor played the role of Kay from Men in Black?",
"answ":"TOMMY LEE JONES",
"answ2":"Tommy Lee Jones.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which actor played the role of Jay from Men in Black?",
"answ":"WILL SMITH",
"answ2":"Will Smith.",
},
{
"cat":"Comedies",
"ques":"Who played Peter Bretter in Forgetting Sarah Marshall?",
"answ":"JASON SEGEL",
"answ2":"Jason Segel.",
},
{
"cat":"Comedies",
"ques":"Who played Teddy Sanders in Neighbors?",
"answ":"ZAC EFRON",
"answ2":"Zac Efron.",
},
{
"cat":"Directors",
"ques":"Who directed Bend of the River?",
"answ":"ANTHONY MANN",
"answ2":"Anthony Mann.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which famous Oscar-winning actor wrote the screenplay for the movie Ride in the Whirlwind?",
"answ":"JACK NICHOLSON",
"answ2":"Jack Nicholson.",
},
{
"cat":"Movie Quotes",
"ques":"From which movie is this quote: 'A lot of people go to college for seven years'?",
"answ":"TOMMY BOY",
"answ2":"Tommy Boy.",
},
{
"cat":"Comedies",
"ques":"Who plays a merciless mother in Monster in Law?",
"answ":"JANE FONDA",
"answ2":"Jane Fonda.",
},
{
"cat":"Coming of Age",
"ques":"Which actor played the role of the Blane McDonnagh, one of the rich and popular guys from 1986 Pretty in Pink?",
"answ":"ANDREW MCCARTHY",
"answ2":"Andrew McCarthy.",
},
{
"cat":"Comedies",
"ques":"In what movie two do best friends become rivals when they schedule their respective weddings on the same day?",
"answ":"BRIDE WARS",
"answ2":"Bride Wars.",
},
{
"cat":"Leonardo DiCaprio",
"ques":"Which 2000s film starring Leonardo DiCaprio was originally called Okavango?",
"answ":"BLOOD DIAMOND",
"answ2":"Blood Diamond.",
},
{
"cat":"Westerns",
"ques":"An oppressed Mexican peasant village assembles seven gunfighters to help defend their homes in what film?",
"answ":"THE MAGNIFICENT SEVEN",
"answ2":"The Magnificent Seven.",
},
{
"cat":"2000s",
"ques":"The brutal cold forces two Antarctic explorers to leave their team of sled dogs behind as they fend for their survival in what film?",
"answ":"EIGHT BELOW",
"answ2":"Eight Below.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Who starred as Riggan in Alejandro Gonzalez Inarritu's 2015 film Birdman: Or (The Unexpected Virtue of Ignorance)?",
"answ":"MICHAEL KEATON",
"answ2":"Michael Keaton.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Who starred as Lucas in Thomas Vinterberg's 2012 film The Hunt?",
"answ":"MADS MIKKELSEN",
"answ2":"Mads Mikkelsen.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Who starred as Richard in Alejandro Gonzalez Inarritu's 2006 film Babel?",
"answ":"BRAD PITT",
"answ2":"Brad Pitt.",
},
{
"cat":"Martin Scorsese",
"ques":"Who starred as Jenny Everdeane in Martin Scorsese's 2002 film Gangs of New York?",
"answ":"CAMERON DIAZ",
"answ2":"Cameron Diaz.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Who starred as Lieutenant Dunbar in Kevin Costner's 1990 film Dances with Wolves?",
"answ":"KEVIN COSTNER",
"answ2":"Kevin Costner.",
},
{
"cat":"Steven Spielberg",
"ques":"Who starred as Albert Narracott in Steven Spielberg's 2011 film War Horse?",
"answ":"JEREMY IRVINE",
"answ2":"Jeremy Irvine.",
},
{
"cat":"Movie Quotes",
"ques":"From which movie is this quote: 'You either die a hero or you live long enough to see yourself become the villain.'?",
"answ":"THE DARK KNIGHT",
"answ2":"The Dark Knight.",
},
{
"cat":"Directors",
"ques":"Who directed Identity?",
"answ":"JAMES MANGOLD",
"answ2":"James Mangold.",
},
{
"cat":"Christian Bale",
"ques":"Who directed American Psycho?",
"answ":"MARY HARRON",
"answ2":"Mary Harron.",
},
{
"cat":"Dramas",
"ques":"A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did in which film?",
"answ":"AMERICAN HISTORY X",
"answ2":"American History X.",
},
{
"cat":"Movie Quotes",
"ques":"From which movie is this quote: 'Nine million terrorists in the world and I gotta kill one with feet smaller than my sister.'?",
"answ":"DIE HARD",
"answ2":"Die Hard.",
},
{
"cat":"Directors",
"ques":"Who directed and produced 1972's Deliverance?",
"answ":"JOHN BOORMAN",
"answ2":"John Boorman.",
},
{
"cat":"Mixed Bag",
"ques":"Who played Jordan Belfort in The Wolf of Wall Street?",
"answ":"LEONARDO DICAPRIO",
"answ2":"Leonardo DiCaprio.",
},
{
"cat":"Bruce Willis",
"ques":"Who directed Lucky Number Slevin?",
"answ":"PAUL MCGUIGAN",
"answ2":"Paul McGuigan.",
},
{
"cat":"Johnny Depp",
"ques":"Who directed Black Mass?",
"answ":"SCOTT COOPER",
"answ2":"Scott Cooper.",
},
{
"cat":"Martin Scorsese",
"ques":"Which actor plays John 'Johnny Boy' Civello in Mean Streets?",
"answ":"ROBERT DE NIRO",
"answ2":"Robert De Niro.",
},
{
"cat":"60s",
"ques":"Who directed Bonnie and Clyde?",
"answ":"ARTHUR PENN",
"answ2":"Arthur Penn.",
},
{
"cat":"Crime",
"ques":"Who directed 1996's Bullet?",
"answ":"JULIEN TEMPLE",
"answ2":"Julien Temple.",
},
{
"cat":"Crime",
"ques":"Who played the role of Butch Bullet Stein in 1996's Bullet?",
"answ":"MICKEY ROURKE",
"answ2":"Mickey Rourke.",
},
{
"cat":"George Clooney",
"ques":"Which actress played Clooney's ex-wife in Ocean's Eleven?",
"answ":"JULIA ROBERTS",
"answ2":"Julia Roberts.",
},
{
"cat":"Action/Adventure",
"ques":"A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other in which fim?",
"answ":"MR AND MRS SMITH",
"answ2":"Mr. and Mrs. Smith.",
},
{
"cat":"Westerns",
"ques":"Who wrote and directed Desperado?",
"answ":"ROBERT RODRIGUEZ",
"answ2":"Robert Rodriguez.",
},
{
"cat":"Classics",
"ques":"Who directed 1949's White Heat?",
"answ":"RAOUL WALSH",
"answ2":"Raoul Walsh.",
},
{
"cat":"Crime",
"ques":"A New York nightclub manager tries to save his brother and father from Russian mafia hit men in which film?",
"answ":"WE OWN THE NIGHT",
"answ2":"We Own the Night.",
},
{
"cat":"Directors",
"ques":"Who wrote and directed We Own the Night?",
"answ":"JAMES GRAY",
"answ2":"James Gray.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actress played the role of Marissa Wiegler in Hanna?",
"answ":"CATE BLANCHETT",
"answ2":"Cate Blanchett.",
},
{
"cat":"Bruce Willis",
"ques":"What's the first name of the Joe's best friend in Looper?",
"answ":"SETH",
"answ2":"Seth.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actress played the role of Irene Cassini in Gattaca?",
"answ":"UMA THURMAN",
"answ2":"Uma Thurman.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actress played the role of Rachel Salas in In Time?",
"answ":"OLIVIA WILDE",
"answ2":"Olivia Wilde.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Who plays the title character in the 2002 movie S1m0ne?",
"answ":"RACHEL ROBERTS",
"answ2":"Rachel Roberts.",
},
{
"cat":"M. Night Shyamalan",
"ques":"Which actor played the role of Rev. Graham Hess in Signs?",
"answ":"MEL GIBSON",
"answ2":"Mel Gibson.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor played the role of Capt. Daniel McCormick in Forever Young?",
"answ":"MEL GIBSON",
"answ2":"Mel Gibson.",
},
{
"cat":"2010s",
"ques":"Who plays the title character in the 2014 movie Lucy?",
"answ":"SCARLETT JOHANSSON",
"answ2":"Scarlett Johansson.",
},
{
"cat":"Directors",
"ques":"Who directed the 2007 movie The Invasion?",
"answ":"OLIVER HIRSCHBIEGEL",
"answ2":"Oliver Hirschbiegel.",
},
{
"cat":"Disaster Movies",
"ques":"Who directed the 2013 movie World War Z?",
"answ":"MARC FORSTER",
"answ2":"Marc Forster.",
},
{
"cat":"Movie Characters",
"ques":"In which 2005 movie would you find the character Sue Storm?",
"answ":"FANTASTIC FOUR",
"answ2":"Fantastic Four.",
},
{
"cat":"Movie Characters",
"ques":"In which 1998 movie would you find the character Dr. Niko Tatopoulos?",
"answ":"GODZILLA",
"answ2":"Godzilla.",
},
{
"cat":"Matt & Ben",
"ques":"In which 2011 movie would you find politician David Norris, played by Matt Damon?",
"answ":"THE ADJUSTMENT BUREAU",
"answ2":"The Adjustment Bureau.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In which movie does a highly advanced robotic boy longs to become real so that he can regain the love of his human mother?",
"answ":"AI ARTIFICIAL INTELLIGENCE",
"answ2":"A.I. Artificial Intelligence.",
},
{
"cat":"2000s",
"ques":"What is the first name of character played by Orlando Bloom in Troy?",
"answ":"PARIS",
"answ2":"Paris.",
},
{
"cat":"Westerns",
"ques":"Which actor starred as Dude in Rio Bravo?",
"answ":"DEAN MARTIN",
"answ2":"Dean Martin.",
},
{
"cat":"Comedies",
"ques":"Cary Elwes, Lloyd Bridges, Ryan Stles and Charlie Sheen appear in what 1991 comedy film directed by Jim Abrahams?",
"answ":"HOT SHOTS",
"answ2":"Hot Shots.",
},
{
"cat":"Movie Quotes",
"ques":"Name the movie from the quote: 'This isn't a hospital! It's an insane asylum! And it's your fault because you don't do anything to discourage them!'",
"answ":"MASH",
"answ2":"M*A*S*H.",
},
{
"cat":"Directors",
"ques":"Who directed Marathon Man?",
"answ":"JOHN SCHLESINGER",
"answ2":"John Schlesinger.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor starred in: Sleepers, Runaway Jury, Confidence and Mad City?",
"answ":"DUSTIN HOFFMAN",
"answ2":"Dustin Hoffman.",
},
{
"cat":"Horror",
"ques":"Who was the only main character to survive all the way from first Saw movie until the end of Saw 3D?",
"answ":"LAWRENCE GORDON",
"answ2":"Lawrence Gordon.",
},
{
"cat":"Quentin Tarantino",
"ques":"Who starred as Vincent Vega in Quentin Tarantino's film Pulp Fiction?",
"answ":"JOHN TRAVOLTA",
"answ2":"John Travolta.",
},
{
"cat":"Spy Movies",
"ques":"Who played Tom Bishop in Spy Game?",
"answ":"BRAD PITT",
"answ2":"Brad Pitt.",
},
{
"cat":"Thrillers",
"ques":"Which actor played the role of Robert McCall in The Equalizer?",
"answ":"DENZEL WASHINGTON",
"answ2":"Denzel Washington.",
},
{
"cat":"Directors",
"ques":"Who directed 1931's Little Caesar?",
"answ":"MERVYN LEROY",
"answ2":"Mervyn LeRoy.",
},
{
"cat":"Crime",
"ques":"Who played the role of Tank in Bullet?",
"answ":"TUPAC SHAKUR",
"answ3":"TUPAC",
"answ2":"Tupac Shakur.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor plays the main character in Bugsy?",
"answ":"WARREN BEATTY",
"answ2":"Warren Beatty.",
},
{
"cat":"Directors",
"ques":"Who directed The Imitation Game?",
"answ":"MORTEN TYLDUM",
"answ2":"Morten Tyldum.",
},
{
"cat":"Oscar Movies",
"ques":"Which actor won the Academy Award for Best Actor for his role in The Silence of the Lambs?",
"answ":"ANTHONY HOPKINS",
"answ2":"Anthony Hopkins.",
},
{
"cat":"Dramas",
"ques":"Which actress played the role of Carla, a mentally challenged girl from The Other Sister?",
"answ":"JULIETTE LEWIS",
"answ2":"Juliette Lewis.",
},
{
"cat":"Denzel Washington",
"ques":"Remember the Titans is set in which American state?",
"answ":"GEORGIA",
"answ2":"Georgia.",
},
{
"cat":"Oscar Movies",
"ques":"Which actor won the Academy Award for Best Supporting Actor for his role in The Untouchables?",
"answ":"SEAN CONNERY",
"answ2":"Sean Connery.",
},
{
"cat":"Movie Quotes",
"ques":"From which movie is this quote: 'As far back as I can remember, I always wanted to be a gangster.'?",
"answ":"GOODFELLAS",
"answ2":"Goodfellas.",
},
{
"cat":"Bruce Willis",
"ques":"Who directed The Sixth Sense?",
"answ":"M NIGHT SHYAMALAN",
"answ2":"M. Night Shyamalan.",
},
{
"cat":"80s",
"ques":"A group of misfits set out to find a pirate's ancient treasure in order to save their home from foreclosure in what film?",
"answ":"THE GOONIES",
"answ2":"The Goonies.",
},
{
"cat":"2010s",
"ques":"A dog that helped US Marines in Afghanistan returns to the U.S. and is adopted by his handler's family in what 2015 film?",
"answ":"MAX",
"answ2":"Max.",
},
{
"cat":"Action/Adventure",
"ques":"In which 2015 movie does a fallen warrior rise against a corrupt and sadistic ruler to avenge his dishonored master?",
"answ":"LAST KNIGHTS",
"answ2":"Last Knights.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In which movie does a teenager with teleportation abilities finds himself in the middle of an ancient war between those like him and their sworn annihilators?",
"answ":"JUMPER",
"answ2":"Jumper.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In which movie does a troubled boy dive into a wondrous fantasy world through the pages of a mysterious book?",
"answ":"THE NEVERENDING STORY",
"answ2":"The NeverEnding Story.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In which 2016 movie do a father and son go on the run after the dad learns his child possesses special powers?",
"answ":"MIDNIGHT SPECIAL",
"answ2":"Midnight Special.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In which movie does a young pilot stumble onto a prototype jetpack that allows him to become a high flying masked hero?",
"answ":"THE ROCKETEER",
"answ2":"The Rocketeer.",
},
{
"cat":"Comedies",
"ques":"In which movie do two seemingly dumb teens struggle to prepare a historical presentation with the help of a time machine?",
"answ":"BILL AND TED'S EXCELLENT ADVENTURE",
"answ2":"Bill and Ted's Excellent Adventure.",
},
{
"cat":"Action/Adventure",
"ques":"A historian races to find the legendary Templar treasure before a team of mercenaries in what 2004 film?",
"answ":"NATIONAL TREASURE",
"answ2":"National Treasure.",
},
{
"cat":"Action/Adventure",
"ques":"Divers find themselves in deep trouble with a drug lord after they come upon the illicit cargo of a sunken airplane in which 2005 movie?",
"answ":"INTO THE BLUE",
"answ2":"Into the Blue.",
},
{
"cat":"Comedies",
"ques":"Two terminally ill men escape from a cancer ward and head off on a road trip with a wish list of to-dos before they die in which movie?",
"answ":"THE BUCKET LIST",
"answ2":"The Bucket List.",
},
{
"cat":"Dramas",
"ques":"In which 2013 movie does a young woman go on a 1,700-mile trek across the deserts of West Australia with four camels and her faithful dog?",
"answ":"TRACKS",
"answ2":"Tracks.",
},
{
"cat":"Westerns",
"ques":"A young Civil War veteran is forced on a desperate journey to save his kidnapped wife in which 2015 movie?",
"answ":"DIABLO",
"answ2":"Diablo.",
},
{
"cat":"Dramas",
"ques":"A young girl receives a vision that drives her to rid France of its oppressors in what 1999 film?",
"answ":"THE MESSENGER THE STORY OF JOAN OF ARC",
"answ2":"The Messenger: The Story of Joan of Arc.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"A security guard's dreams come true when he is selected to be transformed into a cybernetic police officer in what 1999 film?",
"answ":"INSPECTOR GADGET",
"answ2":"Inspector Gadget.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"A lonely boy discovers a mysterious egg that hatches a sea creature of Scottish legend in what film?",
"answ":"THE WATER HORSE",
"answ3":"THE WATER HORSE LEGEND OF THE DEEP",
"answ2":"The Water Horse.",
},
{
"cat":"Westerns",
"ques":"A tough U.S. Marshal helps a stubborn teenager track down her father's murderer in what 2010 film?",
"answ":"TRUE GRIT",
"answ2":"True Grit.",
},
{
"cat":"Dramas",
"ques":"A FedEx executive must transform himself physically and emotionally to survive a crash landing on a deserted island in what film?",
"answ":"CAST AWAY",
"answ2":"Cast Away.",
},
{
"cat":"Tim Burton",
"ques":"A son tries to learn more about his dying father by reliving stories and myths he told about his life in what Tim Burton film?",
"answ":"BIG FISH",
"answ2":"Big Fish.",
},
{
"cat":"2000s",
"ques":"Which actor starred as Ira in Ivan Reitman's 2001 film Evolution?",
"answ":"DAVID DUCHOVNY",
"answ2":"David Duchovny.",
},
{
"cat":"2000s",
"ques":"Who starred as Julie Gianni in Cameron Crowe's 2001 film Vanilla Sky?",
"answ":"CAMERON DIAZ",
"answ2":"Cameron Diaz.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who starred as Seamus in Kurt Wimmer's 2002 film Equilibrium?",
"answ":"DOMINIC PURCELL",
"answ2":"Dominic Purcell.",
},
{
"cat":"Steven Spielberg",
"ques":"Who starred as Chief John Anderton in Steven Spielberg's 2002 film Minority Report?",
"answ":"TOM CRUISE",
"answ2":"Tom Cruise.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who starred as Dr. Claire Whittaker in David Barto's 2003 film Absolon?",
"answ":"KELLY BROOK",
"answ2":"Kelly Brook.",
},
{
"cat":"2000s",
"ques":"Who starred as Beck in Jon Amiel's 2003 film The Core?",
"answ":"HILARY SWANK",
"answ2":"Hilary Swank.",
},
{
"cat":"Comic Book Movies",
"ques":"After being held captive in an Afghan cave, an industrialist creates a unique weaponized suit of armor to fight evil in which movie?",
"answ":"IRON MAN",
"answ2":"Iron Man.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"A scientist in a surrealist society kidnaps children to steal their dreams, hoping that they slow his aging process in what 1995 film?",
"answ":"THE CITY OF LOST CHILDREN",
"answ2":"The City of Lost Children.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In which movie does a mysterious pill enable the user to access 100 percent of his brain abilities?",
"answ":"LIMITLESS",
"answ2":"Limitless.",
},
{
"cat":"70s",
"ques":"A group of people discover the human race is being replaced one by one with clones devoid of emotion in what 70s film?",
"answ":"INVASION OF THE BODY SNATCHERS",
"answ2":"Invasion of the Body Snatchers.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"A team of astronauts is sent on a mission to reignite the dying Sun with a nuclear fission bomb in 2057 in which movie?",
"answ":"SUNSHINE",
"answ2":"Sunshine.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"A drifter discovers a pair of sunglasses that allow him to wake up to the fact that aliens have taken over the Earth in which film?",
"answ":"THEY LIVE",
"answ2":"They Live.",
},
{
"cat":"Stephen King",
"ques":"A man awakens from a coma to discover he has a psychic detective ability in which film?",
"answ":"THE DEAD ZONE",
"answ2":"The Dead Zone.",
},
{
"cat":"Sly & Arnie",
"ques":"In which movie would you find the police officer John Spartan, played by Sylvester Stallone?",
"answ":"DEMOLITION MAN",
"answ2":"Demolition Man.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In which movie would you find a paraplegic Marine Jake Sully, played by Sam Worthington?",
"answ":"AVATAR",
"answ2":"Avatar.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In which movie would you find a young programmer Caleb, played by Domhnall Gleeson?",
"answ":"EX MACHINA",
"answ2":"Ex Machina.",
},
{
"cat":"Jodie Foster",
"ques":"In which movie would you find Dr. Ellie Arroway, played by Jodie Foster?",
"answ":"CONTACT",
"answ2":"Contact.",
},
{
"cat":"90s",
"ques":"In which 1999 movie would you find the character Commander Spencer Armacost?",
"answ":"THE ASTRONAUT'S WIFE",
"answ2":"The Astronaut's Wife.",
},
{
"cat":"Comic Book Movies",
"ques":"In which 2005 movie would you find the character Victor von Doom?",
"answ":"FANTASTIC FOUR",
"answ2":"Fantastic Four.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who directed the 2009 movie Avatar?",
"answ":"JAMES CAMERON",
"answ2":"James Cameron.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which actor played the role of Dr. Emmett Brown in Back to the Future?",
"answ":"CHRISTOPHER LLOYD",
"answ2":"Christopher Lloyd.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which actor played the role of Dr. Ian Malcolm in Jurassic Park?",
"answ":"JEFF GOLDBLUM",
"answ2":"Jeff Goldblum.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actress played the role of Elise Sellas in The Adjustment Bureau?",
"answ":"EMILY BLUNT",
"answ2":"Emily Blunt.",
},
{
"cat":"Disaster Movies",
"ques":"Which actress played the role of Beth Emhoff in Contagion?",
"answ":"GWYNETH PALTROW",
"answ2":"Gwyneth Paltrow.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor starred as lead male role in Ride in the Whirlwind?",
"answ":"JACK NICHOLSON",
"answ2":"Jack Nicholson.",
},
{
"cat":"Westerns",
"ques":"Which actor starred as Colorado Ryan in Rio Bravo?",
"answ":"RICKY NELSON",
"answ2":"Ricky Nelson.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who plays the title character in the 2014 movie Maleficent?",
"answ":"ANGELINA JOLIE",
"answ2":"Angelina Jolie.",
},
{
"cat":"Directors",
"ques":"How many features films did James Cameron direct during the 1990s?",
"answ":"3",
"answ3":"THREE",
"answ2":"3.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor appeared in the 80s films Parenthood, Spaceballs and Streets of Fire?",
"answ":"RICK MORANIS",
"answ2":"Rick Moranis.",
},
{
"cat":"2020s",
"ques":"Which actor plays Simon, the leader of an elite group of assassins in the film Ava?",
"answ":"COLIN FARRELL",
"answ2":"Colin Farrell.",
},
{
"cat":"2020s",
"ques":"What 2021 animated film follows a friendship that grows between a human being and a sea monster disguised as a human on the Italian Riviera?",
"answ":"LUCA",
"answ2":"Luca.",
},
{
"cat":"2020s",
"ques":"Which actor plays the time-traveling robot Dennis, in Bill & Ted Face the Music?",
"answ":"ANTHONY CARRIGAN",
"answ2":"Anthony Carrigan.",
},
{
"cat":"2020s",
"ques":"What is the subtitle for the third film in the Conjuring franchise?",
"answ":"THE DEVIL MADE ME DO IT",
"answ2":"The Devil Made Me Do It.",
},
{
"cat":"2020s",
"ques":"Actor Ludi Lin plays which character in 2021's Mortal Kombat?",
"answ":"LIU KANG",
"answ2":"Liu Kang.",
},
{
"cat":"2020s",
"ques":"Which actor plays Mr. Stringer, the manager of a seaside hotel in the 2020 film The Witches?",
"answ":"STANLEY TUCCI",
"answ2":"Stanley Tucci.",
},
{
"cat":"2020s",
"ques":"Bob Odenkirk stars as Hutch Mansell, a former government assassin for the CIA in what 2021 action film?",
"answ":"NOBODY",
"answ2":"Nobody.",
},
{
"cat":"2010s",
"ques":"Who plays Master Sergeant Farell, the head of J Squad, in Edge of Tomorrow?",
"answ":"BILL PAXTON",
"answ2":"Bill Paxton.",
},
{
"cat":"Black Cinema",
"ques":"Albert and Allen Hughes directed Larenz Tate, Keith David and Chris Tucker in this 1995 drama that chronicles the life of a character named Anthony Curtis?",
"answ":"DEAD PRESIDENTS",
"answ2":"Dead Presidents.",
},
{
"cat":"90s",
"ques":"What 1990s comedic-drama features supporting performances by Laura Linney, Natascha McElhone, Paul Giamatti and Noah Emmerich?",
"answ":"THE TRUMAN SHOW",
"answ3":"TRUMAN SHOW",
"answ2":"The Truman Show.",
},
{
"cat":"Westerns",
"ques":"Joe Johnston directed what western adventure film that follows a 3000 mile horse race called the 'Ocean of Fire'?",
"answ":"HIDALGO",
"answ2":"Hidalgo.",
},
{
"cat":"Comic Book Movies",
"ques":"Which actress plays the female lead Anne Weying in 2018's Venom?",
"answ":"MICHELLE WILLIAMS",
"answ2":"Michelle Williams.",
},
{
"cat":"Horror",
"ques":"Michael Keaton stars in this 2005 supernatural horror film about a man using EVP to receive messsages from his recently passed wife?",
"answ":"WHITE NOISE",
"answ2":"White Noise.",
},
{
"cat":"Crime",
"ques":"Who plays Sergeant John O'Mara, a World War II veteran-turned-cop in the 2013 film Gangster Squad?",
"answ":"JOSH BROLIN",
"answ2":"Josh Brolin.",
},
{
"cat":"Rom-coms",
"ques":"What 2001 rom-com follows a couple that search for each other years afer the night they first met over a pair of cashmere gloves in New York City, fell in love and seperated?",
"answ":"SERENDIPITY",
"answ2":"Serendipity.",
},
{
"cat":"Black Cinema",
"ques":"Which actor appeared in the films White Chicks, Fifty Shades of Black and The Sixth Man?",
"answ":"MARLON WAYANS",
"answ2":"Marlon Wayans.",
},
{
"cat":"Comedies",
"ques":"Topher Grace stars as a recent MIT graduate who works at Suncoast Video in 1988, in what 2010s film alongside Michael Biehn?",
"answ":"TAKE ME HOME TONIGHT",
"answ2":"Take Me Home Tonight.",
},
{
"cat":"Monster Movies",
"ques":"What monster movie from director Luis Llosa, and featuring Eric Stoltz, had the tagline: 'When you can't breathe, you can't scream'?",
"answ":"ANACONDA",
"answ2":"Anaconda.",
},
{
"cat":"Directors",
"ques":"Who directed the following films: Six Days Seven Nights, Kindergarten Cop and Legal Eagles?",
"answ":"IVAN REITMAN",
"answ2":"Ivan Reitman.",
},
{
"cat":"Musicals",
"ques":"Name the 1974 rock musical directed by Brian De Palma.",
"answ":"PHANTOM OF THE PARADISE",
"answ2":"Phantom of the Paradise.",
},
{
"cat":"Musicals",
"ques":"Robert Preston played Professor Harold Hill in what 1960s musical?",
"answ":"THE MUSIC MAN",
"answ2":"The Music Man.",
},
{
"cat":"Musicals",
"ques":"Which 2000s Disney musical features Prince Edward, Queen Narcissa and her servant Nathaniel?",
"answ":"ENCHANTED",
"answ2":"Enchanted.",
},
{
"cat":"Musicals",
"ques":"Which Marvel actor plays the TV dance show host Corny Collins in the 2007 film Hairspay?",
"answ":"JAMES MARSDEN",
"answ2":"James Marsden.",
},
{
"cat":"Musicals",
"ques":"Who plays Professor Henry Higgins in the film My Fair Lady?",
"answ":"REX HARRISON",
"answ2":"Rex Harrison.",
},
{
"cat":"Musicals",
"ques":"Andy Garcia plays Fernando Cienfuegos, the manager of the Hotel Bella Donna, in what juke-box musical film?",
"answ":"MAMMA MIA HERE WE GO AGAIN",
"answ2":"Mamma Mia Here We Go Again.",
},
{
"cat":"90s",
"ques":"Robert De Niro starred in how many films from director Martin Scorsese during the 1990s?",
"answ":"3",
"answ3":"THREE",
"answ2":"3 (Goodfellas/Cape Fear/Casino).",
},
{
"cat":"Martial Arts",
"ques":"James Remar plays the character Raiden in what 1997 sequel?",
"answ":"MORTAL KOMBAT ANNIHILATION",
"answ2":"Mortal Kombat: Annihilation.",
},
{
"cat":"Animated",
"ques":"Which Broadway star voices the character Kristoff in the Frozen films?",
"answ":"JONATHAN GROFF",
"answ2":"Jonathan Groff.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which actress appears in these three films: Men in Black 3, Replicas and Star Trek Into Darkness?",
"answ":"ALICE EVE",
"answ2":"Alice Eve.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the release of the films: The Rainmaker, Private Parts and Donnie Brasco?",
"answ":"1997",
"answ2":"1997.",
},
{
"cat":"Action/Adventure",
"ques":"Which actor stars as the titular hero in the 1980s film The Adventures of Buckaroo Banzai Across the 8th Dimension?",
"answ":"PETER WELLER",
"answ2":"Peter Weller.",
},
{
"cat":"Comedies",
"ques":"This 2006 family comedy featuring Owen Wilson and Ricky Gervais takes place centrally in New York City's American Museum of Natural History.",
"answ":"NIGHT AT THE MUSEUM",
"answ2":"Night at the Museum.",
},
{
"cat":"Dramas",
"ques":"What 2020 film stars Kevin Costner and Diane Lane as a retired sheriff and his wife who set out to find their only grandson after their son's death?",
"answ":"LET HIM GO",
"answ2":"Let Him Go.",
},
{
"cat":"Sports",
"ques":"This 2010s sci-fi sports film features performances from Evangeline Lilly, Anthony Mackey and Kevin Durand.",
"answ":"REAL STEEL",
"answ2":"Real Steel.",
},
{
"cat":"Pixar",
"ques":"Geoffrey Rush voices a pelican named Nigel in what 2000's Pixar film?",
"answ":"FINDING NEMO",
"answ2":"Finding Nemo.",
},
{
"cat":"Pixar",
"ques":"Which Pixar film features voice performances by Brad Bird, Will Arnett, Ian Holm and Brian Dennehy?",
"answ":"RATATOUILLE",
"answ2":"Ratatouille.",
},
{
"cat":"Directors",
"ques":"Who directed the classic films Stage Fright and The Wrong Man?",
"answ":"ALFRED HITCHCOCK",
"answ2":"Alfred Hitchcock.",
},
{
"cat":"Directors",
"ques":"What film marked the first collaboration of The Coen Brothers with actor John Goodman?",
"answ":"RAISING ARIZONA",
"answ2":"Raising Arizona.",
},
{
"cat":"Directors",
"ques":"Who directed the 1980s comedy Porky's?",
"answ":"BOB CLARK",
"answ2":"Bob Clark.",
},
{
"cat":"Courtroom Dramas/Thrillers",
"ques":"What 2017 courtroom drama features performances from Chadwick Boseman, Josh Gad and Kate Hudson?",
"answ":"MARSHALL",
"answ2":"Marshall.",
},
{
"cat":"Famous Actors & Actresses",
"ques":"Which actor appears in the films Bad Santa, Sling Blade and Stay Tuned?",
"answ":"JOHN RITTER",
"answ2":"John Ritter.",
},
{
"cat":"2020s",
"ques":"Which Oscar-winning actress plays a character called The Baroness in the 2021 film Cruella?",
"answ":"EMMA THOMPSON",
"answ2":"Emma Thompson.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the release of the films Moscow on the Hudson and the original Red Dawn?",
"answ":"1984",
"answ2":"1984.",
},
{
"cat":"Romance",
"ques":"Which actress appears in the films Letters to Juliet, Mamma Mia and The Big Wedding?",
"answ":"AMANDA SEYFRIED",
"answ2":"Amanda Seyfried.",
},
{
"cat":"Comedies",
"ques":"Which actress won an academy award for playing Mona Lisa Vito alongside Ralph Macchio's Bill Gambini in the 1992 film My Cousin Vinnie?",
"answ":"MARISA TOMEI",
"answ2":"Marisa Tomei.",
},
{
"cat":"Black Cinema",
"ques":"Who appeared in the films The Players Club, Breakin' All the Rules and Dreamgirls?",
"answ":"JAMIE FOXX",
"answ2":"Jamie Foxx.",
},
{
"cat":"2010s",
"ques":"This 2010s ensemble film features performances from Ashton Kutcher, Cary Elwes, Jessica Biel and Robert De Niro.",
"answ":"NEW YEAR'S EVE",
"answ2":"New Year's Eve.",
},
{
"cat":"Spoof Movies",
"ques":"Which musical artist performed the theme song to the 1996 spoof Spy Hard?",
"answ":"WEIRD AL YANKOVIC",
"answ2":"Weird Al Yankovic.",
},
{
"cat":"Spoof Movies",
"ques":"What 1980s comedy famously coined the line: 'These go to 11.'",
"answ":"THIS IS SPINAL TAP",
"answ2":"This Is Spinal Tap.",
},
{
"cat":"Spoof Movies",
"ques":"What film opens with a Beach Boys inspired musical number called Skeet Surfin'?",
"answ":"TOP SECRET",
"answ2":"Top Secret.",
},
{
"cat":"Spoof Movies",
"ques":"Which actor plays Coconut Pete, operator of an island resort in the 2004 horror comedy Club Dread?",
"answ":"BILL PAXTON",
"answ2":"Bill Paxton.",
},
{
"cat":"70s",
"ques":"What 1978 film had the tagline: 'Just when you thought it was safe to go back in the water'?",
"answ":"JAWS 2",
"answ2":"Jaws 2.",
},
{
"cat":"Westerns",
"ques":"In Wild Wild West what type of giant mechanical creature does Dr. Arliss Loveless create as his ultimate weapon?",
"answ":"SPIDER",
"answ2":"Spider.",
},
{
"cat":"Disney",
"ques":"You will find Princess Eilonwy and a pig keeper named Taran in what 1980's Disney film?",
"answ":"THE BLACK CAULDRON",
"answ2":"The Black Cauldron.",
},
{
"cat":"Action/Adventure",
"ques":"Which rap star turned actor plays the character of Darius Stone in the XXX franchise?",
"answ":"ICE CUBE",
"answ2":"Ice Cube.",
},
{
"cat":"Black Cinema",
"ques":"In what 1994 drama will you hear a character named Bugaloo played by Marlon Wayans say: 'Man you look like Daffy Duck with his beak shot off'?",
"answ":"ABOVE THE RIM",
"answ2":"Above the Rim.",
},
{
"cat":"Will Smith",
"ques":"Agent J must travel back to 1969 to stop someone from murdering Agent K in what Men in Black film?",
"answ":"MEN IN BLACK 3",
"answ2":"Men in Black 3.",
},
{
"cat":"Disaster Movies",
"ques":"Richard Armitage stars as a tornado chaser in what 2010s disaster film?",
"answ":"INTO THE STORM",
"answ2":"Into the Storm.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor has played such characters named Cole Trickle, Stacee Jaxx and Les Grossman?",
"answ":"TOM CRUISE",
"answ2":"Tom Cruise.",
},
{
"cat":"Black Cinema",
"ques":"Which Oscar winner plays Wanda, the mother of Michael B. Jordan's character in the film Fruitvale Station?",
"answ":"OCTAVIA SPENCER",
"answ2":"Octavia Spencer.",
},
{
"cat":"80s",
"ques":"Which 80s comedy has the tagline: 'History is about to be rewritten by two guys who can't spell'?",
"answ":"BILL AND TED'S EXCELLENT ADVENTURE",
"answ2":"Bill & Ted's Excellent Adventure.",
},
{
"cat":"Thrillers",
"ques":"What 2001 psychological thriller features supporting performances from Jason Lee, Tilda Swinton, Michael Shannon and Kurt Russell?",
"answ":"VANILLA SKY",
"answ2":"Vanilla Sky.",
},
{
"cat":"Horror",
"ques":"What 2017 psychological horror film features supporting performances from Kristen Wiig, Domhnall Gleeson and Ed Harris?",
"answ":"MOTHER",
"answ2":"Mother!.",
},
{
"cat":"Sports",
"ques":"What film franchise features a third film subtitled Back to the Minors, which features performances from Corbin Bensen and Scott Bakula?",
"answ":"MAJOR LEAGUE",
"answ2":"Major League.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which actor appeared in the films Congo, Sky High and Escape from LA?",
"answ":"BRUCE CAMPBELL",
"answ2":"Bruce Campbell.",
},
{
"cat":"Dramas",
"ques":"Sandra Bullock has a supporting role as the character Jean Chabot in what award winning 2005 film from director Paul Haggis?",
"answ":"CRASH",
"answ2":"Crash.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the release of the fourth entries in both Nightmare on Elm Street and Halloween franchises, as well as the 7th entry in the Friday the 13th franchise?",
"answ":"1988",
"answ2":"1988.",
},
{
"cat":"Guillermo del Toro",
"ques":"Which actor plays a young doctor named Alan McMichael in the film Crimson Peak?",
"answ":"CHARLIE HUNNAM",
"answ2":"Charlie Hunnam.",
},
{
"cat":"Guillermo del Toro",
"ques":"Guillermo del Toro wrote and produced which 2010 horror film which was directed by Troy Nixey and starred Katie Holmes?",
"answ":"DON'T BE AFRAID OF THE DARK",
"answ2":"Don't Be Afraid of the Dark.",
},
{
"cat":"Guillermo del Toro",
"ques":"The film Pan's Labyrinth takes place in Spain during what decade?",
"answ":"1940S",
"answ3":"40S",
"answ2":"1940s.",
},
{
"cat":"Guillermo del Toro",
"ques":"Which Guillermo del Toro film had the line: 'Is the enemy of my enemy my friend...or my enemy?'",
"answ":"BLADE 2",
"answ3":"BLADE II",
"answ2":"Blade 2.",
},
{
"cat":"Guillermo del Toro",
"ques":"Guillermo del Toro produced what 2019 horror film from director Andre Ovredal that features such monsters as Harold the Scarecrow and The Jangly Man?",
"answ":"SCARY STORIES TO TELL IN THE DARK",
"answ2":"Scary Stories to Tell in the Dark.",
},
{
"cat":"Angela Bassett",
"ques":"Who directed and starred in 2008's Meet the Browns opposite Angela Basset?",
"answ":"TYLER PERRY",
"answ2":"Tyler Perry.",
},
{
"cat":"Angela Bassett",
"ques":"Which filmmaker directed Angela Bassett in the independent films City of Hope, Passion Fish and Sunshine State?",
"answ":"JOHN SAYLES",
"answ2":"John Sayles.",
},
{
"cat":"Angela Bassett",
"ques":"August Walker works for Bassett's character, CIA director Erika Sloane, in what 2018 film?",
"answ":"MISSION IMPOSSIBLE FALLOUT",
"answ2":"Mission Impossible Fallout.",
},
{
"cat":"Angela Bassett",
"ques":"Who plays Irene, who loses her daughter in a gang shooting in 2015's Chi-Raq?",
"answ":"JENNIFER HUDSON",
"answ2":"Jennifer Hudson.",
},
{
"cat":"Angela Bassett",
"ques":"Angela Bassett had a small role in which 1990 family action-comedy which starred Arnold Schwarzenegger?",
"answ":"KINDERGARTEN COP",
"answ2":"Kindergarten Cop.",
},
{
"cat":"Modern Classics",
"ques":"What film was directed by Paul Thomas Anderson and loosely based on the novel 'Oil!' by Upton Sinclair?",
"answ":"THERE WILL BE BLOOD",
"answ2":"There Will Be Blood.",
},
{
"cat":"Quentin Tarantino",
"ques":"Which Tarantino film has the line: 'Ooh that's a bingo! Is that the way you say it? That's a bingo'?",
"answ":"INGLOURIOUS BASTERDS",
"answ2":"Inglourious Basterds.",
},
{
"cat":"James Bond",
"ques":"What 90s James Bond film features performances from John Cleese, Robbie Coltrane and Robert Carlyle?",
"answ":"THE WORLD IS NOT ENOUGH",
"answ2":"The World Is Not Enough.",
},
{
"cat":"Remakes & Reboots",
"ques":"Charles Grodin plays Fred Wilson, owner of an oil company who leads an expedition in this 1970s remake.",
"answ":"KING KONG",
"answ2":"King Kong.",
},
{
"cat":"Clint Eastwood",
"ques":"What is the title of the fourth installment in the Dirty Harry franchise, which is also the only entry to be directed by Clint Eastwood?",
"answ":"SUDDEN IMPACT",
"answ2":"Sudden Impact.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Rosa Salazar plays the title character in what 2019 sci-fi action film?",
"answ":"ALITA BATTLE ANGEL",
"answ2":"Alita: Battle Angel.",
},
{
"cat":"Clint Eastwood",
"ques":"Clint Eastwood plays a mysterious preacher who protects a prospector village from a greedy mining company in this 80s western.",
"answ":"PALE RIDER",
"answ2":"Pale Rider.",
},
{
"cat":"2010s",
"ques":"Matt Reeves directed Chloe Grace Moretz, Elias Koteas and Richard Jenkins in this 2010 horror film.",
"answ":"LET ME IN",
"answ2":"Let Me In.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the release of the franchise films Hannibal Rising, Live Free or Die Hard and Pirates of the Caribbean: At World's End?",
"answ":"2007",
"answ2":"2007.",
},
{
"cat":"Thrillers",
"ques":"Who directed Kevin Bacon, Kelly Preston, and John Goodman in the revenge thriller Death Sentence?",
"answ":"JAMES WAN",
"answ2":"James Wan.",
},
{
"cat":"80s",
"ques":"In The Lost Boys, what is the name of the coastal town that is infested with vampires?",
"answ":"SANTA CARLA",
"answ2":"Santa Carla.",
},
{
"cat":"80s",
"ques":"Which Star Wars actor plays the butler Arthur in the film Dirty Rotten Scoundrels?",
"answ":"IAN MCDIARMID",
"answ2":"Ian McDiarmid.",
},
{
"cat":"80s",
"ques":"Richard Franklin directed what 1983 horror sequel, that included Vera Miles and Robert Loggia?",
"answ":"PYSCHO II",
"answ3":"PYSCHO 2",
"answ2":"Psycho II.",
},
{
"cat":"Comedies",
"ques":"Which actor stars as the character Nick Campbell, opposite Vince Vaughn in the 2013 comedy The Internship?",
"answ":"OWEN WILSON",
"answ2":"Owen Wilson.",
},
{
"cat":"Leonardo DiCaprio",
"ques":"DiCaprio starred in both The Great Gatsby and The Wolf of Wall Street in what year?",
"answ":"2013",
"answ2":"2013.",
},
{
"cat":"Remakes & Reboots",
"ques":"Who plays Lila Crane, Marion's concerned sister, in 1998's Psycho?",
"answ":"JULIANNE MOORE",
"answ2":"Julianne Moore.",
},
{
"cat":"Thrillers",
"ques":"Which actor appears in the thrillers A Time To Kill, Phone Booth and 1990's Flatliners?",
"answ":"KIEFER SUTHERLAND",
"answ2":"Kiefer Sutherland.",
},
{
"cat":"Oscar Movies",
"ques":"Which famous composer received Oscar nominations for his scores to The Poseidon Adventure, Home Alone and The Patriot?",
"answ":"JOHN WILLIAMS",
"answ2":"John Williams.",
},
{
"cat":"2020s",
"ques":"Which Oscar winner plays Jim Baxter, an L.A. police detective who teams up with Denzel Washington to catch a serial killer in 2021's The Little Things?",
"answ":"RAMI MALEK",
"answ2":"Rami Malek.",
},
{
"cat":"Comic Book Movies",
"ques":"In which Avengers film does the main villain say: 'You want to protect the world, but you don't want it to change. There's only one path to peace...your extinction'?",
"answ":"AVENGERS AGE OF ULTRON",
"answ3":"AGE OF ULTRON",
"answ2":"Avengers: Age of Ultron.",
},
{
"cat":"Remakes & Reboots",
"ques":"Marcus Nispel directed Jared Padalecki and Danielle Panabaker in this 2009 remake of a famous slasher film.",
"answ":"FRIDAY THE 13TH",
"answ2":"Friday the 13th.",
},
{
"cat":"Dramas",
"ques":"Which actress appears in these three films: The Social Network, The Peanut Butter Falcon, and The High Note?",
"answ":"DAKOTA JOHNSON",
"answ2":"Dakota Johnson.",
},
{
"cat":"Comedies",
"ques":"In what 2003 comedy will you find the characters of Mitch 'The Godfather' Martin, Bernard 'Deanie' Campbell and Frank 'The Tank' Richard?",
"answ":"OLD SCHOOL",
"answ2":"Old School.",
},
{
"cat":"80s",
"ques":"How many films were released in the Beverly Hills Cop franchise during the 1980s?",
"answ":"2",
"answ3":"TWO",
"answ2":"2.",
},
{
"cat":"Action/Adventure",
"ques":"Which actor appears in these three live action films: Deja Vu, Escape Plan and 2002's The Count of Monte Cristo?",
"answ":"JIM CAVIEZEL",
"answ2":"Jim Caviezel.",
},
{
"cat":"Animated",
"ques":"Which animated franchise features the voice talents of David Tennant, Craig Ferguson and Cate Blanchett?",
"answ":"HOW TO TRAIN YOUR DRAGON",
"answ2":"How to Train Your Dragon.",
},
{
"cat":"Emily Blunt",
"ques":"Who plays Jack, the lamplighter, in Mary Poppins Returns?",
"answ":"LIN MANUEL MIRANDA",
"answ2":"Lin-Manuel Miranda.",
},
{
"cat":"Emily Blunt",
"ques":"Who plays Matt Graver, leader of a special CIA task force that Emily Blunt's character joins in Sicario?",
"answ":"JOSH BROLIN",
"answ2":"Josh Brolin.",
},
{
"cat":"Emily Blunt",
"ques":"What is the profession of Emily Blunt's character in The Adjustment Bureau?",
"answ":"BALLERINA",
"answ3":"BALLET DANCER",
"answ2":"Ballerina/Ballet Dancer.",
},
{
"cat":"Emily Blunt",
"ques":"What late night talk show host plays Emily Blunt's husband in the musical Into The Woods?",
"answ":"JAMES CORDEN",
"answ2":"James Corden.",
},
{
"cat":"Emily Blunt",
"ques":"Emily Blunt voices Juliet in what animated retelling of the Romeo & Juliet story?",
"answ":"GNOMEO AND JULIET",
"answ2":"Gnomeo & Juliet.",
},
{
"cat":"Ice Cube",
"ques":"Who co-stars alongside Ice Cube as Smokey in 1995's Friday?",
"answ":"CHRIS TUCKER",
"answ2":"Chris Tucker.",
},
{
"cat":"Ice Cube",
"ques":"Ice Cube made his directorial debut with what 1998 dark comedy that he also starred in?",
"answ":"THE PLAYERS CLUB",
"answ2":"The Players Club.",
},
{
"cat":"Ice Cube",
"ques":"Who co-stars alongside Ice Cube as Ben Barder in 2014's Ride Along?",
"answ":"KEVIN HART",
"answ2":"Kevin Hart.",
},
{
"cat":"Ice Cube",
"ques":"Who directed the film XXX: State of the Union?",
"answ":"LEE TAMAHORI",
"answ2":"Lee Tamahori.",
},
{
"cat":"Classics",
"ques":"Anthony Perkins plays which character in the 1960 film Psycho?",
"answ":"NORMAN BATES",
"answ2":"Norman Bates.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the release of John Wick and Interstellar?",
"answ":"2014",
"answ2":"2014.",
},
{
"cat":"70s",
"ques":"Norman Jewison directed what 1973 rock musical, based on a Broadway hit, which follows the last days of Jesus Christ?",
"answ":"JESUS CHRIST SUPERSTAR",
"answ2":"Jesus Christ Superstar.",
},
{
"cat":"70s",
"ques":"Warren Beatty stars as Joe, a player of what professional sport, in the 1978 comedy-fantasy Heaven Can Wait?",
"answ":"FOOTBALL",
"answ3":"AMERICAN FOOTBALL",
"answ2":"Football.",
},
{
"cat":"70s",
"ques":"Scatman Crothers provides the voice of a cat named Scat Cat in what 70s Disney Animated film?",
"answ":"THE ARISTOCATS",
"answ2":"The Aristocats.",
},
{
"cat":"90s",
"ques":"Who plays William Foster, a middle-aged man dealing with both unemployment and divorce, in the film Falling Down?",
"answ":"MICHAEL DOUGLAS",
"answ2":"Michael Douglas.",
},
{
"cat":"Pixar",
"ques":"In what Pixar film does a dog character say: 'I just met you and I love you.'?",
"answ":"UP",
"answ2":"Up.",
},
{
"cat":"Biopics",
"ques":"Which actor stars as J.R.R. Tolkien in the biopic Tolkien?",
"answ":"NICHOLAS HOULT",
"answ2":"Nicholas Hoult.",
},
{
"cat":"Comedies",
"ques":"Which actress appears in the comedies The Internship, Jexi and Like A Boss?",
"answ":"ROSE BYRNE",
"answ2":"Rose Byrne.",
},
{
"cat":"Action/Adventure",
"ques":"Menahem Golan directed Sylvester Stallone, Robert Loggia and David Mendenhall in what 1987 film?",
"answ":"OVER THE TOP",
"answ2":"Over the Top.",
},
{
"cat":"Dramas",
"ques":"Shirley MacClaine starred in what 1996 drama that was a sequel to the Oscar-winning 1983 film Terms of Endearment?",
"answ":"THE EVENING STAR",
"answ2":"The Evening Star.",
},
{
"cat":"Thrillers",
"ques":"Who plays the lead role of Hutch Mansell, who fails to defend himself and his family when thieves break into their suburban home, in the film Nobody?",
"answ":"BOB ODENKIRK",
"answ2":"Bob Odenkirk.",
},
{
"cat":"Animated",
"ques":"Which Oscar winner provides the voice of Eep, the daughter of the Crood family in the film The Croods?",
"answ":"EMMA STONE",
"answ2":"Emma Stone.",
},
{
"cat":"Dramas",
"ques":"The opening sequence of The Godfather takes place on the day of what type of event?",
"answ":"WEDDING",
"answ2":"Wedding.",
},
{
"cat":"Directors",
"ques":"Who directed the following films: The Green Mile, The Majestic and The Mist?",
"answ":"FRANK DARABONT",
"answ2":"Frank Darabont.",
},
{
"cat":"Horror",
"ques":"What thriller starring Joel Edgerton and Rebecca Hall has the tagline: 'The past will be your present'?",
"answ":"THE GIFT",
"answ2":"The Gift.",
},
{
"cat":"Comedies",
"ques":"Which comedic actor appeared in the films Forgetting Sarah Marshall, Adventureland and Superbad?",
"answ":"BILL HADER",
"answ2":"Bill Hader.",
},
{
"cat":"Oscar Movies",
"ques":"Norman Jewison directed Sidney Poitier in this Best Picture winning film in which a black police detective is asked to investigate a murder in a racially hostile southern town.",
"answ":"IN THE HEAT OF THE NIGHT",
"answ2":"In the Heat of the Night.",
},
{
"cat":"Comedies",
"ques":"Which comedic actor appears in the films: Jexi, Pitch Perfect and Mike and Dave Need Wedding Dates?",
"answ":"ADAM DEVINE",
"answ2":"Adam Devine.",
},
{
"cat":"Frances McDormand",
"ques":"In which film does Frances McDormand say the line: '...we got a shooting, these folks drive by, there's a high speed pursuit, ends here and then this execution-type deal'?",
"answ":"FARGO",
"answ2":"Fargo.",
},
{
"cat":"Frances McDormand",
"ques":"Which Oscar winning actor stars opposite Frances McDormand as NYPD detective Vincent Lamarca in the 2002 film City By The Sea?",
"answ":"ROBERT DE NIRO",
"answ2":"Robert De Niro.",
},
{
"cat":"Frances McDormand",
"ques":"Frances McDormand appears in what film in the Transformers franchise?",
"answ":"DARK OF THE MOON",
"answ3":"TRANSFORMERS DARK OF THE MOON",
"answ2":"Transformers: Dark of the Moon.",
},
{
"cat":"Frances McDormand",
"ques":"Frances McDormand's character live in what U.S. state at the beginning of Nomadland?",
"answ":"NEVADA",
"answ2":"Nevada.",
},
{
"cat":"Frances McDormand",
"ques":"Frances McDormand and which other actress received Oscar nominations for their performances in the film North Country?",
"answ":"CHARLIZE THERON",
"answ2":"Charlize Theron.",
},
{
"cat":"Frances McDormand",
"ques":"Frances McDormand was the voice of a character called Momma in which Pixar film?",
"answ":"THE GOOD DINOSAUR",
"answ2":"The Good Dinosaur.",
},
{
"cat":"Comedies",
"ques":"What 80s comedy had the tagline: 'This summer, Prince Akeem discovers America'?",
"answ":"COMING TO AMERICA",
"answ2":"Coming to America.",
},
{
"cat":"Biopics",
"ques":"Who won an Oscar for playing famous comedienne Fanny Brice in 1968's Funny Girl?",
"answ":"BARBRA STREISAND",
"answ2":"Barbra Streisand.",
},
{
"cat":"Crime",
"ques":"William Fichtner plays money launderer Roger Van Zant in what Michael Mann film?",
"answ":"HEAT",
"answ2":"Heat.",
},
{
"cat":"Quentin Tarantino",
"ques":"Quentin Tarantino has a cameo as an insensitive director in what 1996 film from Spike Lee?",
"answ":"GIRL 6",
"answ2":"Girl 6.",
},
{
"cat":"Denzel Washington",
"ques":"Denzel Washington plays a British military veteran who turn to a life of crime in what 1989 thriller?",
"answ":"FOR QUEEN AND COUNTRY",
"answ2":"For Queen and Country.",
},
{
"cat":"Action/Adventure",
"ques":"Keanu Reeves stars opposite Laurence Fishburne and Peter Stormare in which action thriller?",
"answ":"JOHN WICK CHAPTER 2",
"answ3":"JOHN WICK 2",
"answ2":"John Wick: Chapter 2.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor appeared in the 1990's films Being Human, Awakenings and To Wong Foo, Thanks for Everything! Julie Newmar?",
"answ":"ROBIN WILLIAMS",
"answ2":"Robin Williams.",
},
{
"cat":"Comic Book Movies",
"ques":"In which DC film does Batman say: 'I'm not going to kill you. I want you to do me a favor. I want you to tell are your friends about me'?",
"answ":"BATMAN",
"answ3":"BATMAN 1989",
"answ2":"Batman (1989).",
},
{
"cat":"Family Films",
"ques":"How many films in the Home Alone franchise were released during the 1990s?",
"answ":"3",
"answ3":"THREE",
"answ2":"3.",
},
{
"cat":"Comedies",
"ques":"Which 90s comedy has the tagline: 'New animals. New adventures. Same hair.'?",
"answ":"ACE VENTURA WHEN NATURE CALLS",
"answ2":"Ace Ventura: When Nature Calls.",
},
{
"cat":"Oscar Movies",
"ques":"Which film composer received nominations for his scores to the films Good Will Hunting, Milk and Men in Black?",
"answ":"DANNY ELFMAN",
"answ2":"Danny Elfman.",
},
{
"cat":"Westerns",
"ques":"Who plays the fearsome outlaw Clinch Leatherwood in the western comedy A Million Ways To Die In The West?",
"answ":"LIAM NEESON",
"answ2":"Liam Neeson.",
},
 {
"cat":"Movie Release Dates",
"ques":"In which year was Joel Schumacher's The Phantom of the Opera released?",
"answ":"2004",
"answ2":"2004.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the release of the Oscar nominated films Hacksaw Ridge and Hidden Figures?",
"answ":"2016",
"answ2":"2016.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor appeared in the films Gattaca, Road to Perdition and The Imaginarium of Dr. Parnassus?",
"answ":"JUDE LAW",
"answ2":"Jude Law.",
},
{
"cat":"Thrillers",
"ques":"What famous film is known for the line 'It rubs the lotion on it's skin or else it gets the hose again'?",
"answ":"THE SILENCE OF THE LAMBS",
"answ3":"SILENCE OF THE LAMBS",
"answ2":"The Silence of the Lambs.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor has played the characters Sherlock Holmes, Federal Wildlife Marshal Willenholly and Jacobim Mugatu?",
"answ":"WILL FERRELL",
"answ2":"Will Ferrell.",
},
{
"cat":"Comedies",
"ques":"What comedy featuring Bill Murray has the tagline: 'You wouldn't want to meet these pinheads in an alley'?",
"answ":"KINGPIN",
"answ2":"Kingpin.",
},
{
"cat":"Disney",
"ques":"Which actor appeared in the Disney films Angels in the Outfield, Operation Dumbo Drop and 2006's The Shaggy Dog?",
"answ":"DANNY GLOVER",
"answ2":"Danny Glover.",
},
{
"cat":"Remakes & Reboots",
"ques":"Which Arnold Schwarzenegger action film is a remake of the French film La Totale?",
"answ":"TRUE LIES",
"answ2":"True Lies.",
},
{
"cat":"90s",
"ques":"Which actor appeared in the 90s crime films Ricochet, Casino and The Usual Suspects?",
"answ":"KEVIN POLLAK",
"answ2":"Kevin Pollak.",
},
{
"cat":"Wizarding World",
"ques":"What year saw the release of the first film in the Harry Potter franchise?",
"answ":"2001",
"answ2":"2001.",
},
{
"cat":"Wizarding World",
"ques":"What character is shown to be the Death Eater who betrayed Harry's parents to Voldemort, resulting in their death?",
"answ":"PETER PETTIGREW",
"answ2":"Peter Pettigrew.",
},
{
"cat":"Wizarding World",
"ques":"In total how many films in the overall Wizarding World franchise has David Yates directed?",
"answ":"7",
"answ3":"SEVEN",
"answ2":"7.",
},
{
"cat":"Wizarding World",
"ques":"What are the objects that are used to store part of a person's soul called in the Harry Potter films?",
"answ":"HORCRUXES",
"answ3":"HORCRUX",
"answ2":"Horcrux.",
},
{
"cat":"Wizarding World",
"ques":"Which actress plays Nagini in Fantastic Beasts: The Crimes of Grindelwald?",
"answ":"CLAUDIA KIM",
"answ2":"Claudia Kim.",
},
{
"cat":"Wizarding World",
"ques":"Which female Wizarding World character said: 'People are easiest to read when they are hurting'?",
"answ":"QUEENIE",
"answ3":"QUEENIE GOLDSTEIN",
"answ2":"Queenie Goldstein.",
},
{
"cat":"Movie Release Dates",
"ques":"Seth Rogen had the leading role in two 2008 comedies. Zack and Miri Make A Porno was one, what was the other?",
"answ":"PINEAPPLE EXPRESS",
"answ2":"Pineapple Express.",
},
{
"cat":"Video Game Movies",
"ques":"Name one of the two actors who portrayed the titular pair in 1993's Super Mario Bros.",
"answ":"BOB HOSKINS",
"answ3":"JOHN LEGUIZAMO",
"answ2":"Bob Hoskins/John Leguizamo.",
},
{
"cat":"Quentin Tarantino",
"ques":"From which Tarantino movie is this quote: 'That's thirty minutes away. I'll be there in ten'?",
"answ":"PULP FICTION",
"answ2":"Pulp Fiction.",
},
{
"cat":"Dramas",
"ques":"A man takes a hospital emergency room hostage when his insurance won't cover his son's heart transplant in what film?",
"answ":"JOHN Q",
"answ2":"John Q.",
},
{
"cat":"Crime",
"ques":"A quadriplegic ex-homicide detective and his female partner try to track down a serial killer in which 1999 film?",
"answ":"THE BONE COLLECTOR",
"answ2":"The Bone Collector.",
},
{
"cat":"Comedies",
"ques":"Who played the role of Mrs. Smith in Mr. and Mrs. Smith?",
"answ":"ANGELINA JOLIE",
"answ2":"Angelina Jolie.",
},
{
"cat":"Classics",
"ques":"Who played Bonnie in 1967's Bonnie and Clyde?",
"answ":"FAYE DUNAWAY",
"answ2":"Faye Dunaway.",
},
{
"cat":"Crime",
"ques":"Who plays David Kleinfeld in Carlito's Way?",
"answ":"SEAN PENN",
"answ2":"Sean Penn.",
},
{
"cat":"Directors",
"ques":"Who directed L.A. Confidential?",
"answ":"CURTIS HANSON",
"answ2":"Curtis Hanson.",
},
{
"cat":"Leonardo DiCaprio",
"ques":"Who directed Catch Me If You Can?",
"answ":"STEVEN SPIELBERG",
"answ2":"Steven Spielberg.",
},
{
"cat":"80s",
"ques":"Who played Gordon Gekko in Wall Street?",
"answ":"MICHAEL DOUGLAS",
"answ2":"Michael Douglas.",
},
{
"cat":"Movie Quotes",
"ques":"Which 80s movie features the quote: 'If you need a friend, get a dog'?",
"answ":"WALL STREET",
"answ2":"Wall Street.",
},
{
"cat":"Comedies",
"ques":"Which actor played businessman Dave Buznik in Anger Management?",
"answ":"ADAM SANDLER",
"answ2":"Adam Sandler.",
},
{
"cat":"Comedies",
"ques":"Which actress played middle school teacher Elizabeth Halsey in the film Bad Teacher?",
"answ":"CAMERON DIAZ",
"answ2":"Cameron Diaz.",
},
{
"cat":"90s",
"ques":"Who plays the title character in the 1994 movie Ace Ventura: Pet Detective?",
"answ":"JIM CARREY",
"answ2":"Jim Carrey.",
},
{
"cat":"2000s",
"ques":"Who plays the title character in the 2005 movie Hitch?",
"answ":"WILL SMITH",
"answ2":"Will Smith.",
},
{
"cat":"The Coen Brothers",
"ques":"Who plays the title character in the 1998's The Big Lebowski?",
"answ":"DAVID HUDDLESTON",
"answ2":"David Huddleston.",
},
{
"cat":"Movie Characters",
"ques":"In which 1995 movie would you find the character Marcus Burnett?",
"answ":"BAD BOYS",
"answ2":"Bad Boys.",
},
{
"cat":"Remakes & Reboots",
"ques":"What 1974 film directed by Tobe Hooper was remade in 2003?",
"answ":"THE TEXAS CHAINSAW MASSACRE",
"answ3":"THE TEXAS CHAIN SAW MASSACRE",
"answ2":"The Texas Chainsaw Massacre.",
},
{
"cat":"Comic Book Movies",
"ques":"Who starred as Blade in the Blade trilogy?",
"answ":"WESLEY SNIPES",
"answ2":"Wesley Snipes.",
},
{
"cat":"Horror",
"ques":"In which horror franchise would you find the character Amanda Young?",
"answ":"SAW",
"answ2":"Saw.",
},
{
"cat":"Movie Characters",
"ques":"What famous fantasy character has been played by Dustin Hoffman, Jason Isaacs and Garrett Hedlund?",
"answ":"CAPTAIN HOOK",
"answ3":"JAMES HOOK",
"answ2":"Captain Hook.",
},
{
"cat":"Stephen King",
"ques":"Chloë Grace Moretz and Julianne Moore appear in what 2013 film based on a Stephen King novel?",
"answ":"CARRIE",
"answ2":"Carrie.",
},
{
"cat":"Quentin Tarantino",
"ques":"You'll find the trio of final girls Zoe, Abernathy and Kim in what 2007 Tarantino film?",
"answ":"DEATH PROOF",
"answ2":"Death Proof.",
},
{
"cat":"Leonardo DiCaprio",
"ques":"Who played Leonardo DiCaprio's father in Gangs of New York?",
"answ":"LIAM NEESON",
"answ2":"Liam Neeson.",
},
{
"cat":"Jennifer Lopez",
"ques":"Lorene Scafaria directed Jennifer Lopez in what 2019 crime drama?",
"answ":"HUSTLERS",
"answ2":"Hustlers.",
},
{
"cat":"Denzel Washington",
"ques":"John Lithgow plays hitman Earl Talbot Blake in what 1991 thriller also featuring Ice-T?",
"answ":"RICOCHET",
"answ2":"Ricochet.",
},
{
"cat":"Will Smith",
"ques":"Which actor directed Will Smith and Matt Damon in the 2000 film The Legend of Bagger Vance?",
"answ":"ROBERT REDFORD",
"answ2":"Robert Redford.",
},
{
"cat":"80s",
"ques":"Desmond Davis directed what 1981 fantasy adventure film that co-stars Lawrence Olivier?",
"answ":"CLASH OF THE TITANS",
"answ2":"Clash of the Titans.",
},
{
"cat":"Horror",
"ques":"Alex Wolff and Gabriel Byrne star in which horror film from director Ari Aster?",
"answ":"HEREDITARY",
"answ2":"Hereditary.",
},
{
"cat":"Romance",
"ques":"Who plays the character Johnny Castle in the film Dirty Dancing?",
"answ":"PATRICK SWAYZE",
"answ2":"Patrick Swayze.",
},
{
"cat":"2010s",
"ques":"Who wrote, directed and starred in the film Chef about a chef named Carl Casper who opens a food truck?",
"answ":"JON FAVREAU",
"answ2":"Jon Favreau.",
},
{
"cat":"Comic Book Movies",
"ques":"Ron Perlman played the character Hellboy in how many films?",
"answ":"2",
"answ3":"TWO",
"answ2":"2.",
},
{
"cat":"Disney",
"ques":"In what 2010's Disney film will you hear Kristen Bell perform the songs 'Some Things Never Change' and 'The Next Best Thing'?",
"answ":"FROZEN 2",
"answ3":"FROZEN II",
"answ2":"Frozen 2.",
},
{
"cat":"Oscar Movies",
"ques":"Which actor received Oscar nominations for his performances in the films Midnight Cowboy, Wag the Dog and Lenny?",
"answ":"DUSTIN HOFFMAN",
"answ2":"Dustin Hoffman.",
},
{
"cat":"Mixed Bag",
"ques":"Which DCEU actress played the character Gisele in The Fast and the Furious franchise?",
"answ":"GAL GADOT",
"answ2":"Gal Gadot.",
},
{
"cat":"Comedies",
"ques":"Jason Biggs, Allyson Hannigan, January Jones and Fred Willard all appear in what 2003 comedy sequel?",
"answ":"AMERICAN WEDDING",
"answ2":"American Wedding.",
},
{
"cat":"Tom Cruise",
"ques":"Tom Cruise played a cocky character named Vincent Lauria in which 1986 film?",
"answ":"THE COLOR OF MONEY",
"answ3":"COLOR OF MONEY",
"answ2":"The Color of Money.",
},
{
"cat":"Action/Adventure",
"ques":"What film from director Andrew Davis stars Keanu Reeves on the run after being framed for treason and murder?",
"answ":"CHAIN REACTION",
"answ2":"Chain Reaction.",
},
{
"cat":"Directors",
"ques":"This filmmaker was behind the films Dreamgirls, 2017's Beauty and the Beast and The Twilight Saga: Breaking Dawn Part 1?",
"answ":"BILL CONDON",
"answ2":"Bill Condon.",
},
{
"cat":"Keanu Reeves",
"ques":"Keanu Reeves and River Phoenix star in what 90s film that follows two friends, Mike Waters and Scott Favor as they embark on a journey of personal discovery?",
"answ":"MY OWN PRIVATE IDAHO",
"answ2":"My Own Private Idaho.",
},
{
"cat":"Horror",
"ques":"Which horror novelist made his directorial debut with the film Hellraiser?",
"answ":"CLIVE BARKER",
"answ2":"Clive Barker.",
},
{
"cat":"Coming of Age",
"ques":"Beanie Feldstein and Kaitlyn Dever star in this coming-of-age buddy film directed by Olivia Wilde.",
"answ":"BOOKSMART",
"answ2":"Booksmart.",
},
{
"cat":"80s",
"ques":"This 1982 film follows Mariel Hemingway's Chris Cahill, a track-and-field star that ends up falling in love with Patrice Donnelly's Tory Skinner, a more experienced runner.",
"answ":"PERSONAL BEST",
"answ2":"Personal Best.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"This actress appears in the films Role Models, Talladega Nights: the Ballad of Ricky Bobby and The 40-Year-Old Virgin?",
"answ":"JANE LYNCH",
"answ2":"Jane Lynch.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Who plays Hal Fields, Ewan McGregor's father who comes out to his son and begins exploring life as an openly gay man after the death of his wife in the film Beginners?",
"answ":"CHRISTOPHER PLUMMER",
"answ2":"Christopher Plummer.",
},
{
"cat":"2010s",
"ques":"Who plays Salvador Mallo, a film director in his decline in the Academy Award-nominated film Pain and Glory?",
"answ":"ANTONIO BANDERAS",
"answ2":"Antonio Banderas.",
},
{
"cat":"Coming of Age",
"ques":"This 1980s coming-of-age film co-written and directed by Joel Schumacher stars Emilio Estevez, Ally Sheedy, Rob Lowe and Andie MacDowell.",
"answ":"ST ELMO'S FIRE",
"answ3":"SAINT ELMO'S FIRE",
"answ2":"St. Elmo's Fire.",
},
{
"cat":"Period/Costume Dramas",
"ques":"Céline Sciamma directed this acclaimed 2020 period piece about the relationship between a painter and her subject.",
"answ":"PORTRAIT OF A LADY ON FIRE",
"answ2":"Portrait of a Lady on Fire.",
},
{
"cat":"Biopics",
"ques":"Who portrays Alan Turing, who broke Nazi codes and helped save the free world during World War II, in the film The Imitation Game?",
"answ":"BENEDICT CUMBERBATCH",
"answ2":"Benedict Cumberbatch.",
},
{
"cat":"Dramas",
"ques":"Tom Ford directed Colin Firth in what 2009 film about a man named George who recently lost his lover in a car accident?",
"answ":"A SINGLE MAN",
"answ2":"A Single Man.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who plays the characters Madame Horrox and Older Ursula in Cloud Atlas?",
"answ":"SUSAN SARANDON",
"answ2":"Susan Sarandon.",
},
{
"cat":"2010s",
"ques":"Sean Baker directed what 2015 film about a transgender sex worker that discovers her boyfriend has been cheating on her?",
"answ":"TANGERINE",
"answ2":"Tangerine.",
},
{
"cat":"Biopics",
"ques":"Daniel Radcliffe plays poet Allen Ginsberg opposite Dane DeHaan in what film?",
"answ":"KILL YOUR DARLINGS",
"answ2":"Kill Your Darlings.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Ian McKellen voices the narrator in what 2007 fantasy film?",
"answ":"STARDUST",
"answ2":"Stardust.",
},
{
"cat":"Sly & Arnie",
"ques":"Ian McKellen co-starred with Arnold Schwarzenegger as Death in what film?",
"answ":"LAST ACTION HERO",
"answ2":"Last Action Hero.",
},
{
"cat":"80s",
"ques":"Joel Schumacher directed what 1987 vampire film?",
"answ":"THE LOST BOYS",
"answ3":"LOST BOYS",
"answ2":"The Lost Boys.",
},
{
"cat":"Directors",
"ques":"Who directed the films Rocky V, Happy New Year and The Karate Kid Part II?",
"answ":"JOHN G AVILDSEN",
"answ3":"JOHN AVILDSEN",
"answ2":"John G. Avildsen.",
},
{
"cat":"Horror",
"ques":"What film gave us the famous image images of blood pouring out of an elevator?",
"answ":"THE SHINING",
"answ2":"The Shining.",
},
{
"cat":"Directors",
"ques":"Who directed the 1980 film Raging Bull?",
"answ":"MARTIN SCORSESE",
"answ2":"Martin Scorsese.",
},
{
"cat":"80s",
"ques":"Which movie star provided the inner monologue of the baby Mikey in 1989's Look Who's Talking?",
"answ":"BRUCE WILLIS",
"answ2":"Bruce Willis.",
},
{
"cat":"Disney",
"ques":"Angela Lansbury stars in what 1971 Disney film that mixes live action and animation?",
"answ":"BEDKNOBS AND BROOMSTICKS",
"answ2":"Bedknobs and Broomsticks.",
},
{
"cat":"2010s",
"ques":"What is the title of the 2015 sequel to Magic Mike?",
"answ":"MAGIC MIKE XXL",
"answ2":"Magic Mike XXL.",
},
{
"cat":"2010s",
"ques":"Who played Joe Chandler, the older brother of Casey Affleck's character in 2016's Manchester By The Sea?",
"answ":"KYLE CHANDLER",
"answ2":"Kyle Chandler.",
},
{
"cat":"2010s",
"ques":"Robert Rodriguez and Ethan Maniquis co-directed what 2010 action film starring Danny Trejo that was a spin-off of 2007's Grind House?",
"answ":"MACHETE",
"answ2":"Machete.",
},
{
"cat":"2010s",
"ques":"Which actress plays Johnny Depp's wife Evelyn in 2014's Transcendence?",
"answ":"REBECCA HALL",
"answ2":"Rebecca Hall.",
},
{
"cat":"2010s",
"ques":"This 2011 film adapted from a Kathryn Stockett novel starred Emma Stone and Octavius Spencer.",
"answ":"THE HELP",
"answ2":"The Help.",
},
{
"cat":"2010s",
"ques":"Who plays the ruthless and bloodthirsty dictator of Belarus, Dukhovich, in the action film The Hitman's Bodyguard?",
"answ":"GARY OLDMAN",
"answ2":"Gary Oldman.",
},
{
"cat":"Robert Rodriguez",
"ques":"Which actor plays the United States President in the film Machete Kills?",
"answ":"CHARLIE SHEEN",
"answ2":"Charlie Sheen.",
},
{
"cat":"Robert Rodriguez",
"ques":"What is the subtitle of the fourth film in the Spy Kids franchise?",
"answ":"ALL THE TIME IN THE WORLD",
"answ2":"All the Time in the World.",
},
{
"cat":"Robert Rodriguez",
"ques":"Which Robert Rodriguez film features supporting performances from such actors as Tom Savini, Fred Williamson and John Saxon?",
"answ":"FROM DUSK TILL DAWN",
"answ2":"From Dusk Till Dawn.",
},
{
"cat":"Robert Rodriguez",
"ques":"Who plays the psychotic and murderous criminal Richie Gecko in the film From Dusk Till Dawn?",
"answ":"QUENTIN TARANTINO",
"answ2":"Quentin Tarantino.",
},
{
"cat":"Robert Rodriguez",
"ques":"What 1993 indie hit was Robert Rodriguez's debut feature film?",
"answ":"EL MARIACHI",
"answ2":"El Mariachi.",
},
{
"cat":"Directors",
"ques":"Which director helmed the film's The Last Temptation of Christ and Mean Streets?",
"answ":"MARTIN SCORSESE",
"answ2":"Martin Scorsese.",
},
{
"cat":"Julia Roberts",
"ques":"Julia Roberts co-stars with Cameron Diaz, Dermott Mulroney and Rupert Everett in what 1990s romantic comedy?",
"answ":"MY BEST FRIEND'S WEDDING",
"answ2":"My Best Friend's Wedding.",
},
{
"cat":"Animated",
"ques":"What 2012 film features characters such as King Candy, Zangief, Sonic the Hedgehog and Fix-It Felix Jr?",
"answ":"WRECK IT RALPH",
"answ2":"Wreck-It Ralph.",
},
{
"cat":"Tom Hanks",
"ques":"Who co-stars alongside Tom Hanks as the character of Joe Friday in Dragnet?",
"answ":"DAN AYKROYD",
"answ2":"Dan Aykroyd.",
},
{
"cat":"Spy Movies",
"ques":"which film in the Mission Impossible franchise features supporting performances from Michelle Monaghan, Ving Rhames and Lawrence Fishburne?",
"answ":"MISSION IMPOSSIBLE III",
"answ3":"MISSION IMPOSSIBLE 3",
"answ2":"Mission Impossible III.",
},
{
"cat":"Crime",
"ques":"This 2021 film follows Denzel Washington as a sheriff who teams up with Rami Malik as they look for a serial killer who's terrorizing Los Angeles.",
"answ":"THE LITTLE THINGS",
"answ2":"The Little Things.",
},
{
"cat":"Black Cinema",
"ques":"Which actress appears in the films: Ray, Django Unchained and Miracle at St. Anna?",
"answ":"KERRY WASHINGTON",
"answ2":"Kerry Washington.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor appeared in the films The Ghost and the Darkness, Déjà Vu and The Missing?",
"answ":"VAL KILMER",
"answ2":"Val Kilmer.",
},
{
"cat":"Movie Taglines",
"ques":"This 1980s comedy featuring Steve Guttenberg, Marion Ramsey and Bubba Smith featured the tagline: 'Just don't call them when you're in trouble'?",
"answ":"POLICE ACADEMY",
"answ2":"Police Academy.",
},
{
"cat":"Fantasy/sci-fi",
"ques":"Matthew Broderick and Michelle Pfeiffer star in what 1985 medieval dark fantasy from director Richard Donner?",
"answ":"LADYHAWKE",
"answ2":"Ladyhawke.",
},
{
"cat":"Spike Lee",
"ques":"Spike Lee was nominated for his first Best Director Academy Award for which film?",
"answ":"BLACKKKLANSMAN",
"answ3":"BLACKKLANSMAN",
"answ2":"BlacKkKlansman.",
},
{
"cat":"Directors",
"ques":"What film did Kathryn Bigelow direct which starred John Boyega?",
"answ":"DETROIT",
"answ2":"Detroit.",
},
{
"cat":"Directors",
"ques":"How many times did the Russo Brothers direct Chadwick Boseman?",
"answ":"3",
"answ3":"THREE",
"answ2":"3.",
},
{
"cat":"Directors",
"ques":"Steven Soderbergh directed Channing Tatum, Adam Driver and Daniel Craig in which 2017 film?",
"answ":"LOGAN LUCKY",
"answ2":"Logan Lucky.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor appears in the films Earthquake, Charade and JFK?",
"answ":"WALTER MATTHAU",
"answ2":"Walter Matthau.",
},
{
"cat":"70s",
"ques":"What name does Alex use to refer to his group of thugs in A Clockwork Orange?",
"answ":"THE TROOPS",
"answ2":"The Troops.",
},
{
"cat":"70s",
"ques":"Al Pacino plays Sonny, a man who attempts to rob what type of establishment in the film Dog Day Afternoon?",
"answ":"BANK",
"answ2":"Bank.",
},
{
"cat":"Action/Adventure",
"ques":"Which actor appears in the films: The Long Kiss Good Night, XxX and Die Hard with a Vengeance?",
"answ":"SAMUEL L JACKSON",
"answ3":"SAM JACKSON",
"answ2":"Samuel L. Jackson.",
},
{
"cat":"Biopics",
"ques":"Which actor appears in the biographical dramas Ali, Ray and Just Mercy?",
"answ":"JAMIE FOXX",
"answ2":"Jamie Foxx.",
},
{
"cat":"Family Films",
"ques":"What is the title of the 2014 film in the Muppets franchise in which a criminal frog named Constantine pretends to be Kermit?",
"answ":"MUPPETS MOST WANTED",
"answ2":"Muppets Most Wanted.",
},
{
"cat":"Martin Scorsese",
"ques":"Which actor received a Best Supporting Actor Oscar nomination for his performance as Donnie Azoff in The Wolf of Wall Street?",
"answ":"JONAH HILL",
"answ2":"Jonah Hill.",
},
{
"cat":"Comedies",
"ques":"How many comedies have Will Ferrell and Mark Wahlberg co-starred in together?",
"answ":"3",
"answ3":"THREE",
"answ2":"3.",
},
{
"cat":"Rom-coms",
"ques":"Who plays Andrew Paxton, the male lead in the romantic comedy The Proposal?",
"answ":"RYAN REYNOLDS",
"answ2":"Ryan Reynolds.",
},
{
"cat":"Thrillers",
"ques":"Who stars as a New York bike courier named Wilee in the 2012 action thriller Premium Rush?",
"answ":"JOSEPH GORDON LEVITT",
"answ2":"Joseph Gordon-Levitt.",
},
{
"cat":"2000s",
"ques":"Who plays the lead role of Will Graham in 2002's Red Dragon?",
"answ":"EDWARD NORTON",
"answ2":"Edward Norton.",
},
{
"cat":"Biopics",
"ques":"Gary Oldman won an Oscar for playing what famous British Prime Minister in the film Darkest Hour?",
"answ":"WINSTON CHURCHILL",
"answ2":"Winston Churchill.",
},
{
"cat":"80s",
"ques":"In The Goonies, what is the name of the pirate whose ship the kids are in search of?",
"answ":"ONE EYED WILLY",
"answ2":"One-Eyed Willy.",
},
{
"cat":"Leonardo DiCaprio",
"ques":"Which DiCaprio film has supporting roles from famous directors Spike Jonze, Rob Reiner and John Favreau?",
"answ":"THE WOLF OF WALL STREET",
"answ2":"The Wolf of Wall Street.",
},
{
"cat":"2010s",
"ques":"Famke Janssen plays the evil grand witch Muriel in what 2013 film with Gemma Arterton?",
"answ":"HANSEL AND GRETEL WITCH HUNTERS",
"answ2":"Hansel and Gretel: Witch Hunters.",
},
{
"cat":"Directors",
"ques":"What Oscar-winning actor directed the films Going South and Drive, He Said?",
"answ":"JACK NICHOLSON",
"answ2":"Jack Nicholson.",
},
{
"cat":"Directors",
"ques":"What director helmed the 1990 Jamie Lee Curtis film Blue Steel?",
"answ":"KATHRYN BIGELOW",
"answ2":"Kathryn Bigelow.",
},
{
"cat":"Westerns",
"ques":"What actor was the star of the classic westerns The Gunfighter, The Bravados and Mackenna's Gold?",
"answ":"GREGORY PECK",
"answ2":"Gregory Peck.",
},
{
"cat":"Wrestlers in Film",
"ques":"Which wrestler plays Dan Paine, the right hand of Eric Roberts' James Munroe in The Expendables?",
"answ":"STEVE AUSTIN",
"answ3":"STONE COLD STEVE AUSTIN",
"answ2":"Steve Austin.",
},
{
"cat":"Scores & Soundtracks",
"ques":"Who won an Oscar for composing the score for the film E.T. the Extra-Terrestrial?",
"answ":"JOHN WILLIAMS",
"answ2":"John Williams.",
},
{
"cat":"Directors",
"ques":"Which Oscar winner directed 1974's The Conversation, which starred Gene Hackman as a surveillance expert caught up in a possible conspiracy?",
"answ":"FRANCIS FORD COPPOLA",
"answ2":"Francis Ford Coppola.",
},
{
"cat":"Black Cinema",
"ques":"The films Menace II Society and Friday take place in inner city neighborhoods of what United States city?",
"answ":"LOS ANGELES",
"answ3":"LA",
"answ2":"Los Angeles.",
},
{
"cat":"Comedies",
"ques":"Which actress stars as an obsessive character named Mary in the film All About Steve?",
"answ":"SANDRA BULLOCK",
"answ2":"Sandra Bullock.",
},
{
"cat":"Crime",
"ques":"Which actor starred in the crime films Lawless, The Drop and 2015's Legend?",
"answ":"TOM HARDY",
"answ2":"Tom Hardy.",
},
{
"cat":"Animated",
"ques":"The Lego Batman Movie featured the voice talents of Zach Galifianakis and Rosario Dawson and was released in what year?",
"answ":"2017",
"answ2":"2017.",
},
{
"cat":"Dramas",
"ques":"Logan Lerman plays Charlie, a high school freshman struggling with depression and post-traumatic stress in what 2012 film?",
"answ":"THE PERKS OF BEING A WALLFLOWER",
"answ3":"PERKS OF BEING A WALLFLOWER",
"answ2":"The Perks of Being a Wallflower.",
},
{
"cat":"Thrillers",
"ques":"Who stars as an undercover cop named Tom Ludlow in the 2008 David Ayer film Street Kings?",
"answ":"KEANU REEVES",
"answ2":"Keanu Reeves.",
},
{
"cat":"Star Trek",
"ques":"Who plays George Kirk in 2009's Star Trek?",
"answ":"CHRIS HEMSWORTH",
"answ2":"Chris Hemsworth.",
},
{
"cat":"Star Trek",
"ques":"Who plays Saavik in Star Trek II: The Wrath of Khan?",
"answ":"KIRSTIE ALLEY",
"answ2":"Kirstie Alley.",
},
{
"cat":"Star Trek",
"ques":"Which Star Trek film has the line: 'Admiral, there be whales here'?",
"answ":"STAR TREK IV THE VOYAGE HOME",
"answ3":"THE VOYAGE HOME",
"answ2":"Star Trek IV The Voyage Home.",
},
{
"cat":"Star Trek",
"ques":"Who directed Star Trek: First Contact?",
"answ":"JONATHAN FRAKES",
"answ2":"Jonathan Frakes.",
},
{
"cat":"Action/Adventure",
"ques":"What is the title of the eighth film in the Fast and Furious franchise?",
"answ":"THE FATE OF THE FURIOUS",
"answ3":"FATE OF THE FURIOUS",
"answ2":"The Fate of the Furious.",
},
{
"cat":"Tyler Perry",
"ques":"Tyler Perry plays scientist Baxter Stockman, who creates two mutant creatures named Bebop and Rocksteady in what action-adventure franchise?",
"answ":"TEENAGE MUTANT NINJA TURTLES",
"answ2":"Teenage Mutant Ninja Turtles.",
},
{
"cat":"Tyler Perry",
"ques":"What 2005 film was the first theatrical feature in which Tyler Perry appeared as Madea?",
"answ":"DIARY OF A MAD BLACK WOMAN",
"answ2":"Diary of a Mad Black Woman.",
},
{
"cat":"Tyler Perry",
"ques":"Nia Long, Amy Smart and Terry Crews star in what film directed by Tyler Perry?",
"answ":"THE SINGLE MOMS CLUB",
"answ3":"SINGLE MOMS CLUB",
"answ2":"The Single Moms Club.",
},
{
"cat":"Nicole Kidman",
"ques":"Which director did Nicole Kidman work with for the second time in her career when she filmed the 2011 crime drama film Trespass?",
"answ":"JOEL SCHUMACHER",
"answ2":"Joel Schumacher.",
},
{
"cat":"Nicole Kidman",
"ques":"Nicole Kidman stars in what 1989 thriller about a couple who encounter a psychotic stranger while on a sailboating trip?",
"answ":"DEAD CALM",
"answ2":"Dead Calm.",
},
{
"cat":"Comedies",
"ques":"In what film do Luke Wilson and Maya Rudolph awaken after 500 years from a hibernation experiment?",
"answ":"IDIOCRACY",
"answ2":"Idiocracy.",
},
{
"cat":"Horror",
"ques":"You can find the character of Tree, played by Jessica Rothe, in what Blumhouse franchise?",
"answ":"HAPPY DEATH DAY",
"answ2":"Happy Death Day.",
},
{
"cat":"Will Smith",
"ques":"Will Smith appears as Detective Del Spooner in what 2000s science fiction film?",
"answ":"I ROBOT",
"answ3":"I  ROBOT",
"answ2":"I, Robot.",
},
{
"cat":"Crime",
"ques":"In Widows, who plays politician Tom Mulligan who gets mixed up in the widows' plan?",
"answ":"COLIN FARRELL",
"answ2":"Colin Farrell.",
},
{
"cat":"Disney",
"ques":"Which 90s Disney film features the songs 'Zero to Hero' and 'Go The Distance'?",
"answ":"HERCULES",
"answ2":"Hercules.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which Oscar-winning actress stars as a Witch who sets the story in motion in the film Into The Woods?",
"answ":"MERYL STREEP",
"answ2":"Meryl Streep.",
},
{
"cat":"Oscar Movies",
"ques":"Which actress received Oscar nominations for her performances in the films The Fighter, The Master and Vice?",
"answ":"AMY ADAMS",
"answ2":"Amy Adams.",
},
{
"cat":"Comedies",
"ques":"In what 80s comedy does real-life baseball player Reggie Jackson become a victim of mind control that turns him into an assassin?",
"answ":"THE NAKED GUN",
"answ3":"NAKED GUN",
"answ2":"The Naked Gun.",
},
{
"cat":"Oscar Movies",
"ques":"Who was nominated for an Academy Award for her role as Amy March in the 2019 adaptation of Little Women?",
"answ":"FLORENEC PUGH",
"answ2":"Florence Pugh.",
},
{
"cat":"Dramas",
"ques":"Which actor stars as a young man named Homer Wells in the 1999 film The Cider House Rules?",
"answ":"TOBEY MAGUIRE",
"answ2":"Tobey Maguire.",
},
{
"cat":"Movie Release Dates",
"ques":"What year were the following sequels released: Die Hard 2, Robocop 2, Predator 2 and Gremlins 2?",
"answ":"1990",
"answ2":"1990.",
},
{
"cat":"Mystery",
"ques":"What 2020 mystery film includes actors such as Helena Bonham Carter, Sam Claflin and Henry Cavill?",
"answ":"ENOLA HOLMES",
"answ2":"Enola Holmes.",
},
{
"cat":"Comedies",
"ques":"What comedy starring Jim Carrey has the tagline: 'He's the best there is. Actually he's the only one there is.'?",
"answ":"ACE VENTURA PET DETECTIVE",
"answ2":"Ace Ventura: Pet Detective.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor appears in the following films: Conan the Barbarian, The Hunt for Red October and Field of Dreams?",
"answ":"JAMES EARL JONES",
"answ2":"James Earl Jones.",
},
{
"cat":"Directors",
"ques":"Who directed the films Dave, Evolution and Draft Day?",
"answ":"IVAN REITMAN",
"answ2":"Ivan Reitman.",
},
{
"cat":"Nicolas Cage",
"ques":"Who plays Ben Gates' mother in National Treasure Book of Secrets?",
"answ":"HELLEN MIRREN",
"answ2":"Helen Mirren.",
},
{
"cat":"Comedies",
"ques":"A group of friends find themselves thrown back in time to 1986 in what 2010 film starring John Cusack and Craig Robinson?",
"answ":"HOT TUB TIME MACHINE",
"answ2":"Hot Tub Time Machine.",
},
{
"cat":"Christopher Nolan",
"ques":"Which actor stars as a character only known as The Protagonist in Tenet?",
"answ":"JOHN DAVID WASHINGTON",
"answ2":"John David Washington.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which actress plays the role of Lenina Huxley in 1993's Demolition Man?",
"answ":"SANDRA BULLOCK",
"answ2":"Sandra Bullock.",
},
{
"cat":"Middle Earth",
"ques":"Which actor plays Thorin Oakenshield in the Hobbit trilogy?",
"answ":"RICHARD ARMITAGE",
"answ2":"Richard Armitage.",
},
{
"cat":"Middle Earth",
"ques":"Andy Serkis has played the role of Gollum in how many films?",
"answ":"4",
"answ3":"FOUR",
"answ2":"4.",
},
{
"cat":"Middle Earth",
"ques":"In what film in the Middle Earth franchise does the Battle of Helm's Deep take place?",
"answ":"THE TWO TOWERS",
"answ3":"THE LORD OF THE RINGS THE TWO TOWERS",
"answ2":"The Lord of the Rings: The Two Towers.",
},
{
"cat":"Ophray Winfey",
"ques":"What is the name of Oprah's character in A Wrinkle in Time?",
"answ":"MRS WHICH",
"answ3":"MS WHICH",
"answ2":"Mrs. Which.",
},
{
"cat":"Nicolas Cage",
"ques":"National Treasure: Book of Secrets opens on the night of the assassination of what historical figure?",
"answ":"ABRAHAM LINCOLN",
"answ3":"LINCOLN",
"answ2":"Abraham Lincoln.",
},
{
"cat":"Tom Cruise",
"ques":"In Mission Impossible, what do Ethan and his team disguise themselves as to infiltrate IMF headquarters and steal the NOC list?",
"answ":"FIREFIGHTERS",
"answ3":"FIREMEN",
"answ2":"Firefighters.",
},
{
"cat":"Disney",
"ques":"In Tangled, what aspect of Flynn Rider does he say the wanted posters keep getting wrong?",
"answ":"HIS NOSE",
"answ3":"NOSE",
"answ2":"His nose.",
},
{
"cat":"DreamWorks Animation",
"ques":"In The Croods, what is the name of the character voiced by Ryan Reynolds?",
"answ":"GUY",
"answ2":"Guy.",
},
{
"cat":"YA Adaptations",
"ques":"Which YA dystopian film features the characters Chuck, Alby and Ava?",
"answ":"THE MAZE RUNNER",
"answ3":"RUNNER",
"answ2":"The Maze Runner.",
},
{
"cat":"Spy Movies",
"ques":"In how many Mission Impossible film does Ethan's wife Julia appear?",
"answ":"3",
"answ3":"THREE",
"answ2":"3.",
},
{
"cat":"Disney",
"ques":"In Moana, what kind of animal does Maui have to get his hook back from?",
"answ":"CRAB",
"answ2":"Crab.",
},
{
"cat":"Horror",
"ques":"What is the subtitle to the 4th film in the Nightmare on Elm Street franchise?",
"answ":"THE DREAM MASTER",
"answ3":"DREAM MASTER",
"answ2":"The Dream Master.",
},
{
"cat":"Disney",
"ques":"Who directed The Sorcerer's Apprentice?",
"answ":"JON TURTELTAUB",
"answ2":"Jon Turteltaub.",
},
{
"cat":"Disney",
"ques":"Don Knotts voices a mayor in what 2000s Disney animated film?",
"answ":"CHICKEN LITTLE",
"answ2":"Chicken Little.",
},
{
"cat":"DreamWorks Animation",
"ques":"Who voices Vincent the bear in Over the Hedge?",
"answ":"NICK NOLTE",
"answ2":"Nick Nolte.",
},
{
"cat":"James Bond",
"ques":"Who directed From Russia with Love and Thunderball?",
"answ":"TERENCE YOUNG",
"answ2":"Terence Young.",
},
{
"cat":"James Bond",
"ques":"In A View to a Kill, Bond first sees Max Zorin at what specific type of sporting event?",
"answ":"HORSE RACE",
"answ3":"HORSE RACING",
"answ2":"Horse race.",
},
{
"cat":"Disney",
"ques":"In which classic Disney animated film will you hear the quote: 'Hi-diddly-dee, an actor's life for me'?",
"answ":"PINOCCHIO",
"answ3":"PINOCHIO",
"answ2":"Pinocchio.",
},
{
"cat":"DreamWorks Animation",
"ques":"In Kung Fu Panda, what move did Po use to defeat Tai Lung?",
"answ":"WUXI FINGER HOLD",
"answ3":"WUSHI FINGER HOLD",
"answ2":"Wuxi Finger Hold.",
},
{
"cat":"Spy Movies",
"ques":"Which Mission Impossible film featured the characters: Sean Ambrose, Billy Baird and Dr. Nekhorvich?",
"answ":"MISSION IMPOSSIBLE 2",
"answ3":"MISSION IMPOSSIBLE II",
"answ2":"Mission Impossible II.",
},
{
"cat":"Horror",
"ques":"Which MCU actor plays Tommy Doyle in Halloween: The Curse of Michael Myers?",
"answ":"PAUL RUDD",
"answ2":"Paul Rudd.",
},
{
"cat":"Pixar",
"ques":"In Toy Story 2, the toys cross the street to get to Al's Toy Barn by hiding under what?",
"answ":"TRAFFIC CONE",
"answ3":"CONE",
"answ2":"Traffic cone.",
},
{
"cat":"Swashbuckling Adventure",
"ques":"In Pirates of the Caribbean the Curse of the Black Pearl, Will is the assistant to a man with what profession?",
"answ":"BLACKSMITH",
"answ3":"SMITH",
"answ2":"Blacksmith.",
},
{
"cat":"MCU",
"ques":"In Black Panther, what is the name of the character played by Winston Duke, who is the leader of the Jabari Tribe?",
"answ":"M'BAKU",
"answ3":"EMBAKU",
"answ2":"M'Baku.",
},
{
"cat":"Stephen King",
"ques":"Which movie based on a Stephen King novel, starred James Caan and Kathy Bates?",
"answ":"MISERY",
"answ2":"Misery.",
},
{
"cat":"Horror",
"ques":"The 1960 film House of Usher is based on a short story by what famous writer?",
"answ":"EDGAR ALLAN POE",
"answ2":"Edgar Allan Poe.",
},
{
"cat":"Horror",
"ques":"You'll find the Freeling family in what horror franchise?",
"answ":"POLTERGEIST",
"answ2":"Poltergeist.",
},
{
"cat":"Horror",
"ques":"What is the first name of the 12-year-old boy who develops a friendship with a child vampire in 2010's Let Me In?",
"answ":"OWEN",
"answ2":"Owen.",
},
{
"cat":"Horror",
"ques":"Who played Doctor Van Helsing, in 1958's Dracula?",
"answ":"PETER CUSHING",
"answ2":"Peter Cushing.",
},
{
"cat":"Horror",
"ques":"Who played Count Dracula, in 1958's Dracula?",
"answ":"CHRISTOPHER LEE",
"answ2":"Christopher Lee.",
},
{
"cat":"Horror",
"ques":"In which film does David Cronenberg play a psychotherapist who is also a serial killer?",
"answ":"NIGHTBREED",
"answ2":"Nightbreed.",
},
{
"cat":"Horror",
"ques":"You can find the fictional town of Springwood, Ohio in what famous horror franchise?",
"answ":"A NIGHTMARE ON ELM STREET",
"answ3":"NIGHTMARE ON ELM STREET",
"answ2":"A Nightmare on Elm Street.",
},
{
"cat":"Horror",
"ques":"Who played Freddy Krueger in 1984's A Nightmare on Elm Street?",
"answ":"ROBERT ENGLUND",
"answ2":"Robert Englund.",
},
{
"cat":"Stephen King",
"ques":"Which actress won the Best Actress Oscar for her role in Misery?",
"answ":"KATHY BATES",
"answ2":"Kathy Bates.",
},
{
"cat":"DC Movies",
"ques":"Who directed Batman Forever and Batman & Robin?",
"answ":"JOEL SCHUMACHER",
"answ2":"Joel Schumacher.",
},
{
"cat":"DCEU",
"ques":"In Wonder Woman, what is the name of the hidden island where all of the Amazons live?",
"answ":"THEMYSCIRA",
"answ3":"THEMISCIRA",
"answ2":"Themyscira.",
},
{
"cat":"Middle Earth",
"ques":"What is the name of the creature Gandalf fights in Moria when he falls?",
"answ":"BALROG",
"answ2":"Balrog.",
},
{
"cat":"Star Wars",
"ques":"What is the name of the planet that is the capital of the Republic in the prequel trilogy?",
"answ":"CORUSCANT",
"answ2":"Coruscant.",
},
{
"cat":"Thrillers",
"ques":"Sharon Stone plays crime novelist Catherine Tramell in what 1992 thriller?",
"answ":"BASIC INSTINCT",
"answ2":"Basic Instinct.",
},
{
"cat":"Remakes & Reboots",
"ques":"What 1974 Tobe Hooper film was remade in 2003?",
"answ":"THE TEXAS CHAIN SAW MASSACRE",
"answ3":"TEXAS CHAIN SAW MASSACRE",
"answ2":"The Texas Chain Saw Massacre.",
},
{
"cat":"Remakes & Reboots",
"ques":"What 1980 horror film starring Leslie Nielsen and Jamie Lee Curtis was remade in 2008?",
"answ":"PROM NIGHT",
"answ2":"Prom Night.",
},
{
"cat":"Remakes & Reboots",
"ques":"What 1978 horror film directed by George A. Romero was remade in 2004?",
"answ":"DAWN OF THE DEAD",
"answ2":"Dawn of the Dead.",
},
{
"cat":"Stephen King",
"ques":"What is the full title of the 1999 sequel to Carrie?",
"answ":"THE RAGE CARRIE 2",
"answ3":"THE RAGE CARRIE II",
"answ2":"The Rage: Carrie 2.",
},
{
"cat":"Directors",
"ques":"Who directed the films Love and Death, Zelig and Broadway Danny Rose?",
"answ":"WOODY ALLEN",
"answ2":"Woody Allen.",
},
{
"cat":"2000s",
"ques":"Which 2000s film features gangsters named Gambol and Salvatore Maroni?",
"answ":"THE DARK KNIGHT",
"answ3":"DARK KNIGHT",
"answ2":"The Dark Knight.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actress is in the following films: The House, Sisters, Wet Hot American Summer and Baby Mama?",
"answ":"AMY POEHLER",
"answ2":"Amy Poehler.",
},
{
"cat":"Indiana Jones",
"ques":"You'll find the character of Mola Ram in which Indiana Jones film?",
"answ":"INDIANA JONES AND THE TEMPLE OF DOOM",
"answ3":"TEMPLE OF DOOM",
"answ2":"Indiana Jones and the Temple of Doom.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In Back to the Future III, Buford Tannen shot Doc Brown in the back over a matter of how much money?",
"answ":"80",
"answ3":"80 DOLLARS",
"answ2":"$80.",
},
{
"cat":"Comedies",
"ques":"In Scott Pilgrim vs. the World, who plays the villainous Gideon Graves, Ramona's seventh ex who Scott has to fight in the final battle?",
"answ":"JASON SCHWARTZMAN",
"answ2":"Jason Schwartzman.",
},
{
"cat":"Star Trek",
"ques":"In Star Trek (2009), the villain Nero, played by Eric Bana, is what alien race?",
"answ":"ROMULAN",
"answ2":"Romulan.",
},
{
"cat":"Stephen King",
"ques":"Christopher Walken starred in which film based on a Stephen King novel?",
"answ":"THE DEAD ZONE",
"answ2":"The Dead Zone.",
},
{
"cat":"Stephen King",
"ques":"You'll find novelist Paul Sheldon in what film based on a Stephen King novel?",
"answ":"MISERY",
"answ2":"Misery.",
},
{
"cat":"Kate Winslet",
"ques":"For what 2015 film did Kate Winslet receive a Best Supporting Actress Oscar nomination?",
"answ":"STEVE JOBS",
"answ2":"Steve Jobs.",
},
{
"cat":"Directors",
"ques":"Who directed the film Young Adult?",
"answ":"JASON REITMAN",
"answ2":"Jason Reitman.",
},
{
"cat":"Video Game Movies",
"ques":"You will find the town of Green Hills and an owl named Longclaw in what 2020 film?",
"answ":"SONIC THE HEDGEHOG",
"answ2":"Sonic the Hedgehog.",
},
{
"cat":"Comedies",
"ques":"In Sausage Party, who voiced the hot dog bun Brenda?",
"answ":"KRISTEN WIIG",
"answ2":"Kristen Wiig.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What is the first film in the Alien/Predator franchise that shows the Predator's homeworld?",
"answ":"ALIENS VS PREDATOR REQUIEM",
"answ2":"Aliens vs. Predator: Requiem.",
},
{
"cat":"Comedies",
"ques":"In what comedy do Seth Rogen and James Franco go by the names Aardvark and Dung Beetle?",
"answ":"THE INTERVIEW",
"answ2":"The Interview.",
},
{
"cat":"Horror",
"ques":"What 2003 horror film involves an elderly widow known as Matilda Dixon, also known as 'Tooth Fairy', and stars Emily Browning and Emma Caulfield?",
"answ":"DARKNESS FALLS",
"answ2":"Darkness Falls.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Bill Paxton plays a father that suffers from multiple sclerosis in what 2017 film?",
"answ":"THE CIRCLE",
"answ2":"The Circle.",
},
{
"cat":"Movie Release Dates",
"ques":"In what year was Catch Me If You Can released?",
"answ":"2002",
"answ2":"2002.",
},
{
"cat":"Directors",
"ques":"Who directed the films Sense and Sensibility and The Ice Storm?",
"answ":"ANG LEE",
"answ2":"Ang Lee.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Jennifer Lawrence and Bradley Cooper star together in what 2014 drama film?",
"answ":"SERENA",
"answ2":"Serena.",
},
{
"cat":"Oscar Movies",
"ques":"What Oscar nominated film features performances by Nick Nolte, Joaquin Phoenix, Sophie Okonedo and Don Cheadle?",
"answ":"HOTEL RWANDA",
"answ2":"Hotel Rwanda.",
},
{
"cat":"Judd Apatow",
"ques":"What was the first film in which Pete Davidson was directed by Judd Apatow?",
"answ":"TRAINWRECK",
"answ2":"Trainwreck.",
},
{
"cat":"Horror",
"ques":"How many films are there total in the Underworld franchise?",
"answ":"5",
"answ3":"FIVE",
"answ2":"5.",
},
{
"cat":"Will Smith",
"ques":"Margot Robbie and Will Smith star together in what 2015 film?",
"answ":"FOCUS",
"answ2":"Focus.",
},
{
"cat":"Disney",
"ques":"You will find a vicious leopard named Sabor in what Disney film?",
"answ":"TARZAN",
"answ2":"Tarzan.",
},
{
"cat":"2010s",
"ques":"What Oscar-winning actress stars as heiress Sarah Winchester in the 2018 film Winchester?",
"answ":"HELEN MIRREN",
"answ2":"Helen Mirren.",
},
{
"cat":"Horror",
"ques":"In the 2012 film Underworld: Awakening, what is the term given to the series of mass killings of Vampires and Lycans after humans discover their existence?",
"answ":"THE PURGES",
"answ3":"PURGES",
"answ2":"The Purges.",
},
{
"cat":"90s",
"ques":"Who wrote and directed the 1999 ghostly thriller Stir of Echoes?",
"answ":"DAVID KOEPP",
"answ3":"DAVID KOEP",
"answ2":"David Koepp.",
},
{
"cat":"Reboots and Remakes",
"ques":"Who plays the lead role of Arthur Kriticos in the 2001 remake of Thirteen Ghosts?",
"answ":"TONY SHALHOUB",
"answ3":"TONY SHALOUB",
"answ2":"Tony Shalhoub.",
},
{
"cat":"Stanley Kubrick",
"ques":"In The Shining, what is the name of Danny's imaginary friend?",
"answ":"TONY",
"answ2":"Tony.",
},
{
"cat":"Drew Barrymore",
"ques":"In Scream, Drew Barrymore's character gives a wrong answer about what horror movie, leading to her boyfriend's death?",
"answ":"FRIDAY THE 13TH",
"answ3":"FRIDAY THE THIRTEENTH",
"answ2":"Friday the 13th.",
},
{
"cat":"Horror",
"ques":"Your Sister Is a Werewolf, is the subtitle of the 1985 sequel to what horror film?",
"answ":"THE HOWLING",
"answ2":"The Howling.",
},
{
"cat":"MCU",
"ques":"Who plays Agent Peggy Carter in the MCU?",
"answ":"HAYLEY ATWELL",
"answ3":"HAILEE ATWELL",
"answ2":"Hayley Atwell.",
},
{
"cat":"Marvel Movies",
"ques":"Who played Nightcrawler in X2: X-Men United?",
"answ":"ALAN CUMMING",
"answ2":"Alan Cumming.",
},
{
"cat":"Star Trek",
"ques":"Which Star Trek film was directed by William Shatner?",
"answ":"STAR TREK V THE FINAL FRONTIER",
"answ3":"STAR TREK V",
"answ2":"Star Trek V: The Final Frontier.",
},
{
"cat":"Horror",
"ques":"Who plays the character of Emily Rose, in The Exorcism of Emily Rose?",
"answ":"JENNIFER CARPENTER",
"answ2":"Jennifer Carpenter.",
},
{
"cat":"Movie Taglines",
"ques":"What 90s sci-fi horror film starring Sam Neill has the tagline: 'Infinite space, infinite terror'?",
"answ":"EVENT HORIZON",
"answ2":"Event Horizon.",
},
{
"cat":"Horror",
"ques":"In what 2010s horror film does a widow struggle to take care of her troubled young son after her husband dies in a car accident?",
"answ":"THE BABADOOK",
"answ2":"The Babadook.",
},
{
"cat":"Martin Scorsese",
"ques":"What was Henry Hill selling when he got arrested the first time as a kid in Goodfellas?",
"answ":"CIGARETTES",
"answ3":"CARTONS OF CIGARETTES",
"answ2":"Cigarettes.",
},
{
"cat":"Westerns",
"ques":"Who played the character that simply went by the name Blondie, in The Good, the Bad and the Ugly?",
"answ":"CLINT EASTWOOD",
"answ2":"Clint Eastwood.",
},
{
"cat":"War",
"ques":"Alec Guinness and William Holden star in what film about POWs forced to build a bridge in Burma?",
"answ":"THE BRIDGE ON THE RIVER KWAI",
"answ3":"BRIDGE ON THE RIVER KWAI",
"answ2":"The Bridge on the River Kwai.",
},
{
"cat":"Tom Hanks",
"ques":"Tom Hanks has portrayed Harvard symbologist Robert Langdon in how many films?",
"answ":"3",
"answ3":"THREE",
"answ2":"3.",
},
{
"cat":"Comedies",
"ques":"What comedian played Rufus in Bill & Ted's Excellent Adventure?",
"answ":"GEORGE CARLIN",
"answ2":"George Carlin.",
},
{
"cat":"Disney",
"ques":"What Disney animated movie features the Billy Joel song 'Why Should I Worry?'",
"answ":"OLIVER AND COMPANY",
"answ2":"Oliver & Company.",
},
{
"cat":"Jean-Claude Van Damme",
"ques":"In what movie does Jean-Claude Van Damme play real life fighter Frank Dux?",
"answ":"BLOODSPORT",
"answ2":"Bloodsport.",
},
{
"cat":"Sly & Arnie",
"ques":"Arnold Schwarzenegger plays Detective John Kimble in what movie?",
"answ":"KINDERGARTEN COP",
"answ2":"Kindergarten Cop.",
},
{
"cat":"Musicals",
"ques":"In The Greatest Showman who plays the Swedish Nightingale Jenny Lind?",
"answ":"REBECCA FERGUSON",
"answ2":"Rebecca Ferguson.",
},
{
"cat":"Crime",
"ques":"Who stars as the unnamed cocaine dealer who faces a tough assignment on the eve of his early retirement in 2004's Layer Cake?",
"answ":"DANIEL CRAIG",
"answ2":"Daniel Craig.",
},
{
"cat":"80s",
"ques":"Who plays Ty Webb, a mischievous but avid golfer in Caddyshack?",
"answ":"CHEVY CHASE",
"answ2":"Chevy Chase.",
},
{
"cat":"Family Films",
"ques":"Stephen Gaghan directed what 2020 film in which a physician tracks to find a legendary island with a young apprentice and a crew of strange pets?",
"answ":"DOLITTLE",
"answ2":"Dolittle.",
},
{
"cat":"Horror",
"ques":"What is the name of the 2019 movie in which Kaya Scodelario must fend off alligators?",
"answ":"CRAWL",
"answ2":"Crawl.",
},
{
"cat":"Action/Adventure",
"ques":"Name either the male or female elad of the 2015 action comedy American Ulta.",
"answ":"JESSE EISENBERG",
"answ3":"KRISTEN STEWART",
"answ2":"Jesse Eisenberg/Kristen Stewart.",
},
{
"cat":"Directors",
"ques":"Who directed Jack Black in School of Rock?",
"answ":"RICHARD LINKLATER",
"answ2":"Richard Linklater.",
},
{
"cat":"Crime",
"ques":"Anthony Hopkins reprised his role as Hannibal Lecter in what 2002 film?",
"answ":"RED DRAGON",
"answ2":"Red Dragon.",
},
{
"cat":"Dramas",
"ques":"Name this Best Picture winning film: A Civil War soldier develops a relationship with a band of Lakota Indians and adopts their lifestyle.",
"answ":"DANCES WITH WOLVES",
"answ2":"Dances with Wolves.",
},
{
"cat":"90s",
"ques":"In 1996's The Preacher's Wife, which Academy Award winning actor played the witty and debonair angel, Dudley?",
"answ":"DENZEL WASHINGTON",
"answ2":"Denzel Washington.",
},
{
"cat":"90s",
"ques":"In what 90s sci-fi action film will you find two warring factions, the Gorgonites and the Commando Elite?",
"answ":"SMALL SOLDIERS",
"answ2":"Small Soldiers.",
},
{
"cat":"Oscar Movies",
"ques":"Denis Villeneuve has been nominated for Best Director once, for what film?",
"answ":"ARRIVAL",
"answ2":"Arrival.",
},
{
"cat":"Movie Release Dates",
"ques":"Saving Private Ryan and Shakespeare in Love battled for Best Picture and were both released in what year?",
"answ":"1998",
"answ2":"1998.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who plays the lead role as a mercenary named Royce in 2010's Predators?",
"answ":"ADRIEN BRODY",
"answ3":"ADRIAN BRODY",
"answ2":"Adrien Brody.",
},
{
"cat":"Movie Taglines",
"ques":"What family comedy has the tagline: 'She makes dinner. She does windows. She reads bedtime tories. She's a blessing...in disguise'?",
"answ":"MRS DOUBTFIRE",
"answ2":"Mrs. Doubtfire.",
},
{
"cat":"Will Smith",
"ques":"Will Smith plays a man who writes letters to time, love and death in this 2016 film.",
"answ":"COLLATERAL BEAUTY",
"answ2":"Collateral Beauty.",
},
{
"cat":"Action/Adventure",
"ques":"What is the title of the fourth film in the Resident Evil franchise?",
"answ":"RESIDENT EVIL AFTERLIFE",
"answ3":"AFTERLIFE",
"answ2":"Resident Evil: Afterlife.",
},
{
"cat":"Action/Adventure",
"ques":"Patrick Swayze plays a tough as nails character known as Dalton in what 80s film?",
"answ":"ROAD HOUSE",
"answ3":"ROADHOUSE",
"answ2":"Road House.",
},
{
"cat":"Animated",
"ques":"Bryan Cranston voices the character of Li Shan alongside Jack Black's Po in what 2016 film?",
"answ":"KUNG FU PANDA 3",
"answ3":"KUNG FU PANDA III",
"answ2":"Kung Fu Panda 3.",
},
{
"cat":"Horror",
"ques":"John Cusack plays Mike Enslin, an author stuck in a haunted hotel room, in what 2007 horror film?",
"answ":"1408",
"answ2":"1408.",
},
{
"cat":"Comedies",
"ques":"Which Oscar winning actress plays a talk show host opposite Mindy Kaling in 2019's Late Night?",
"answ":"EMMA THOMPSON",
"answ3":"EMMA THOMSON",
"answ2":"Emma Thompson.",
},
{
"cat":"Action/Adventure",
"ques":"Who plays the exotic dancer Cory in The Last Boy Scout?",
"answ":"HALLE BERRY",
"answ3":"HALLE BARRY",
"answ2":"Halle Berry.",
},
{
"cat":"Horror",
"ques":"Stuart Gordon directed Jeffrey Combs in what 1985 horror film, based on an H.P. Lovecraft story?",
"answ":"RE ANIMATOR",
"answ3":"REANIMATOR",
"answ2":"Re-Animator.",
},
{
"cat":"2010s",
"ques":"Who plays driver Ken Miles in Ford v Ferrari?",
"answ":"CHRISTIAN BALE",
"answ2":"Christian Bale.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which actress plays the fairy godmother in 2015's Cinderella?",
"answ":"HELENA BONHAM CARTER",
"answ2":"Helena Bonham Carter.",
},
{
"cat":"Animated",
"ques":"Name the 2013 animated film in which a caveman family must trek through an unfamiliar fantastical world with the help of an inventive boy.",
"answ":"THE CROODS",
"answ2":"The Croods.",
},
{
"cat":"Horror",
"ques":"What horror franchise involves a ghostly girl named Samara Morgan, who is seen in a cursed tape?",
"answ":"THE RING",
"answ2":"The Ring.",
},
{
"cat":"Comedies",
"ques":"Which actress stars with a cast of puppets in the R-rated comedy The Happytime Murders?",
"answ":"MELISSA MCCARTHY",
"answ2":"Melissa McCarthy.",
},
{
"cat":"Dramas",
"ques":"In what 1991 drama does New Orleans DIA Jim Garrison discover there's more to the Kennedy assassination than the official story?",
"answ":"JFK",
"answ2":"JFK.",
},
{
"cat":"Crime",
"ques":"Who plays highly unprofessional FBI agent Richie Demaso in American Hustle?",
"answ":"BRADLEY COOPER",
"answ2":"Bradley Cooper.",
},
{
"cat":"Musicals",
"ques":"What popular movie musical directed by John Huston was released in 1982?",
"answ":"ANNIE",
"answ2":"Annie.",
},
{
"cat":"90s",
"ques":"For what movie did Jack Palance win the Best Supporting Actor Oscar in 1991?",
"answ":"CITY SLICKERS",
"answ2":"City Slickers.",
},
{
"cat":"Star Trek",
"ques":"What is the alphanumeric designation written on the outer hull of the USS Enterprise?",
"answ":"NCC 1701",
"answ3":"NCC1701",
"answ2":"NCC-1701.",
},
{
"cat":"Nicole Kidman",
"ques":"In what Nicole Kidman film can you find a mysterious substance known as Dust, that supposedly connects parallel universes?",
"answ":"THE GOLDEN COMPASS",
"answ3":"GOLDEN COMPASS",
"answ2":"The Golden Compass.",
},
{
"cat":"Pixar",
"ques":"Who voiced Anger in Inside Out?",
"answ":"LEWIS BLACK",
"answ2":"Lewis Black.",
},
{
"cat":"Action/Adventure",
"ques":"In Demolition Man, where does Simon Phoenix find a laser gun?",
"answ":"MUSEUM",
"answ3":"IN A MUSEUM",
"answ2":"In a museum.",
},
{
"cat":"80s",
"ques":"What golf tournament does Danny win in Caddyshack?",
"answ":"CADDY DAY TOURNAMENT",
"answ3":"THE CADDY DAY TOURNAMENT",
"answ2":"The Caddy Day Tournament.",
},
{
"cat":"90s",
"ques":"What actress declares: 'I never take off my skates' in a 1997 movie?",
"answ":"HEATHER GRAHAM",
"answ2":"Heather Graham.",
},
{
"cat":"Classics",
"ques":"'Harvey' is about Elwood P.Dowd who has a deep and heartfelt friendship with Harvey, a giant invisible ____",
"answ":"RABBIT",
"answ2":"Rabbit.",
},
{
"cat":"Horror",
"ques":"Who was the first female monster to appear in a movie?",
"answ":"BRIDE OF FRANKENSTEIN",
"answ3":"THE BRIDE OF FRANKENSTEIN",
"answ2":"The Bride of Frankenstein.",
},
{
"cat":"Classics",
"ques":"What actor appeared in Pillow Talk with Doris Day and Showdown with Dean Martin?",
"answ":"ROCK HUDSON",
"answ2":"Rock Hudson.",
},
{
"cat":"Julia Roberts",
"ques":"In My Best Friend's Wedding, where does Julianne find Kimmie hiding after she sees her kissing Michael?",
"answ":"BATHROOM",
"answ3":"THE BATHROOM",
"answ2":"Bathroom.",
},
{
"cat":"Classics",
"ques":"Who played Roger Thornhill in the espionage-mystery North by Northwest?",
"answ":"CARY GRANT",
"answ2":"Cary Grant.",
},
{
"cat":"Musicals",
"ques":"Who played the Baker in 2014's Into the Woods?",
"answ":"JAMES CORDON",
"answ2":"James Cordon.",
},
{
"cat":"Biopics",
"ques":"Corey Hawkins played whom in Straight Outta Compton?",
"answ":"DR DRE",
"answ2":"Dr Dre.",
},
{
"cat":"2010s",
"ques":"Who played the older brother in Sing Street?",
"answ":"JACK REYNOR",
"answ3":"JACK RAINOR",
"answ2":"Jack Reynor.",
},
{
"cat":"Classics",
"ques":"Who played Walter Burns in the Howard Hawks classic His Girl Friday?",
"answ":"CARY GRANT",
"answ2":"Cary Grant.",
},
{
"cat":"Directors",
"ques":"Who directed Dead Poets Society?",
"answ":"PETER WEIR",
"answ3":"PETER WIER",
"answ2":"Peter Weir.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What is the name of Charlie Hunnam's character in Pacific Rim?",
"answ":"RALEIGH",
"answ3":"RALEIGH BECKET",
"answ2":"Raleigh.",
},
{
"cat":"Rom-coms",
"ques":"The Jane Austen novel Emma provides the basis for what 90s romcom?",
"answ":"CLUELESS",
"answ2":"Clueless.",
},
{
"cat":"Tom Cruise",
"ques":"Tom Cruise and Cuba Gooding Jr. star together in what 1996 movie?",
"answ":"JERRY MAGUIRE",
"answ2":"Jerry Maguire.",
},
{
"cat":"2010s",
"ques":"What Game of Thrones star played the father in Sing Street?",
"answ":"AIDAN GILLEN",
"answ3":"AIDEN GILLEN",
"answ2":"Aidan Gillen.",
},
{
"cat":"Horror",
"ques":"What is the name of the pub in Shaun of the Dead?",
"answ":"WINCHESTER",
"answ3":"WINCHESTER TAVERN",
"answ2":"Winchester Tavern.",
},
{
"cat":"Rom-coms",
"ques":"What is the last name of the super model character played by Grace Jones in 1992's Boomerang?",
"answ":"STRANGE",
"answ2":"Strangé.",
},
{
"cat":"80s",
"ques":"Finish the title of this 1985 film: Desperately Seeking ____",
"answ":"SUSAN",
"answ2":"Susan.",
},
{
"cat":"Movie Quotes",
"ques":"Name the movie: 'But if the Pirates of the Caribbean breaks down, the pirates don't eat the tourists.'",
"answ":"JURASSIC PARK",
"answ2":"Jurassic Park.",
},
{
"cat":"Coming of Age",
"ques":"Jake Gyllenhaal and Chris Cooper star in what film about boys in West Virginia who build rockets for a science fair?",
"answ":"OCTOBER SKY",
"answ2":"October Sky.",
},
{
"cat":"Action/Adventure",
"ques":"Who played Dr. Ellie Sattler in Jurassic Park?",
"answ":"LAURA DERN",
"answ2":"Laura Dern.",
},
{
"cat":"Scarlett Johansson",
"ques":"Scarlett played Samuel L. Jackson's evil accomplice Silken Floss in what 2008 film?",
"answ":"THE SPIRIT",
"answ2":"The Spirit.",
},
{
"cat":"Oscar Movies",
"ques":"Jerome Robbins won the Best Director Oscar for the only movie he ever directed. For what 1960s film did he win?",
"answ":"WEST SIDE STORY",
"answ2":"West Side Story.",
},
{
"cat":"Biopics",
"ques":"What actress played Ava Gardner in The Aviator?",
"answ":"KATE BECKINSALE",
"answ2":"Kate Beckinsale.",
},
{
"cat":"Dramas",
"ques":"Who played John Coffey in The Green Mile?",
"answ":"MICHAEL CLARKE DUNCAN",
"answ3":"MICHAEL CLARK DUNCAN",
"answ2":"Michael Clarke Duncan.",
},
{
"cat":"Natalie Portman",
"ques":"For a role in what film did Natalie Portman shave her head?",
"answ":"V FOR VENDETTA",
"answ2":"V For Vendetta.",
},
{
"cat":"Westerns",
"ques":"What was John Wayne's final film in 1976?",
"answ":"THE SHOOTIST",
"answ2":"The Shootist.",
},
{
"cat":"Musicals",
"ques":"In 2012's Les Misérables, Jean Valjean was originally sent to jail for stealing ____",
"answ":"BREAD",
"answ2":"Bread.",
},
{
"cat":"Sandra Bullock",
"ques":"The Speed sequel could not reunite Sandra and her co-star Keanu Reeves, but what 2006 film did?",
"answ":"THE LAKE HOUSE",
"answ2":"The Lake House.",
},
{
"cat":"Christopher Nolan",
"ques":"What actor has trouble sleeping in Insomnia?",
"answ":"AL PACINO",
"answ2":"Al Pacino.",
},
{
"cat":"Oscar Movies",
"ques":"In 1939, The Wizard of Oz lost the Academy Award for Best Picture to what film?",
"answ":"GONE WITH THE WIND",
"answ2":"Gone With the Wind.",
},
{
"cat":"Movie Quotes",
"ques":"What actor famously said: 'Here's looking at you, kid'?",
"answ":"HUMPHREY BOGART",
"answ3":"HUMPREY BOGART",
"answ2":"Humphrey Bogart.",
},
{
"cat":"Tim Burton",
"ques":"Who composed the score for Pee Wee's Big Adventure?",
"answ":"DANNY ELFMAN",
"answ2":"Danny Elfman.",
},
{
"cat":"Dramas",
"ques":"Which movie starred Haley Joel Osment, Michael Caine and Robert Duvall as bored rich farmers?",
"answ":"SECONDHAND LIONS",
"answ3":"SECOND HAND LIONS",
"answ2":"Secondhand Lions.",
},
{
"cat":"Holiday Movies",
"ques":"Who played Santa Claus in the movie Elf?",
"answ":"ED ASNER",
"answ2":"Ed Asner.",
},
{
"cat":"Will Smith",
"ques":"In Bad Boys, when Marcus is around dead bodies he _____",
"answ":"VOMITS",
"answ3":"THROWS UP",
"answ2":"Vomits.",
},
{
"cat":"Harry Potter",
"ques":"What British character actor appears as Peter Pettigrew in the Harry Potter series?",
"answ":"TIMOTHY SPALL",
"answ3":"TIMOTHY SPAL",
"answ2":"Timothy Spall.",
},
{
"cat":"Family Films",
"ques":"What is the name of the trick play the team runs at the end of Little Giants?",
"answ":"THE ANNEXATION OF PUERTO RICO",
"answ3":"ANNEXATION OF PUERTO RICO",
"answ2":"The Annexation of Puerto Rico.",
},
{
"cat":"Movie Quotes",
"ques":"Name the sci-fi movie with the quote: 'So long and thanks for all the fish.'",
"answ":"THE HITCHHIKER'S GUIDE TO THE GALAXY",
"answ3":"HITCHHIKER'S GUIDE TO THE GALAXY",
"answ2":"The Hitchhiker's Guide to the Galaxy.",
},
{
"cat":"Christopher Nolan",
"ques":"What Nolan movie released in 2017 received an Oscar nomination for Best Picture?",
"answ":"DUNKIRK",
"answ2":"Dunkirk.",
},
{
"cat":"Musicals",
"ques":"Who played Satine in 2001's Moulin Rouge?",
"answ":"NICOLE KIDMAN",
"answ2":"Nicole Kidman.",
},
{
"cat":"Denzel Washington",
"ques":"What basketball star played Jesus Shuttlesworth in He Got Game?",
"answ":"RAY ALLEN",
"answ2":"Ray Allen.",
},
{
"cat":"Stanley Kubrick",
"ques":"Paths of Glory stars what American actor as Colonel Dax?",
"answ":"KIRK DOUGLAS",
"answ2":"Kirk Douglas.",
},
{
"cat":"Indiana Jones",
"ques":"What was the last name of Indy's arch rival and main villain of Raiders of the Lost Ark?",
"answ":"BELLOQ",
"answ3":"BELLOG",
"answ2":"Belloq.",
},
{
"cat":"Scores & Soundtracks",
"ques":"Who sang 'You've Got a Friend in Me' from Toy Story?",
"answ":"RANDY NEWMAN",
"answ2":"Randy Newman.",
},
{
"cat":"Directors",
"ques":"Who directed Straight Outta Compton?",
"answ":"F GARY GRAY",
"answ3":"F GARY GREY",
"answ2":"F. Gary Gray.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who played Guy/Crew Man #6 in Galaxy Quest?",
"answ":"SAM ROCKWELL",
"answ2":"Sam Rockwell.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Where does AVP: Alien vs. Predator take place?",
"answ":"ANTARTICA",
"answ2":"Antartica.",
},
{
"cat":"Disney",
"ques":"In Disney's Lady and the Tramp, what kind of animal helped Lady remove the muzzle that had been put on her?",
"answ":"BEAVER",
"answ2":"Beaver.",
},
{
"cat":"Classics",
"ques":"In The Wizard of Oz, which one of her traveling companions does Dorothy meet first?",
"answ":"SCARECROW",
"answ2":"Scarecrow.",
},
{
"cat":"Sandra Bullock",
"ques":"The contestant from which state won the Miss United States pageant in Miss Congeniality?",
"answ":"RHODE ISLAND",
"answ2":"Rhode Island.",
},
{
"cat":"Family Films",
"ques":"Keiko is the name of an animal that appeared in what 1993 American family drama film?",
"answ":"FREE WILLY",
"answ2":"Free Willy.",
},
{
"cat":"Disney",
"ques":"What kind of animals were the axe wielding soldiers in Disney's Robin Hood?",
"answ":"RHINOS",
"answ3":"RHINO",
"answ2":"Rhinos.",
},
{
"cat":"Classics",
"ques":"What song do Gene Wilder and Peter Boyle perform on stage in Young Frankenstein?",
"answ":"PUTTIN ON THE RITZ",
"answ3":"PUTTIN' ON THE RITZ",
"answ2":"Puttin' On The Ritz.",
},
{
"cat":"Comedies",
"ques":"What religious name did Deloris go by in Sister Act?",
"answ":"SISTER MARY CLARENCE",
"answ3":"SISTER MARIE CLARENCE",
"answ2":"Sister Mary Clarence.",
},
{
"cat":"80s",
"ques":"What is the robot's name in Short Circuit 1 and 2?",
"answ":"JOHNNY 5",
"answ3":"NUMBER 5",
"answ2":"Johnny 5.",
},
{
"cat":"Disaster Movies",
"ques":"Magma, smoke and ash spewed from deep within the earth in 1997 in what disaster film starring Tommy Lee Jones?",
"answ":"VOLCANO",
"answ2":"Volcano.",
},
{
"cat":"Steven Spielberg",
"ques":"In Hook, what is Peter Pan's last name in the real world?",
"answ":"BANNING",
"answ3":"BENNING",
"answ2":"Banning.",
},
{
"cat":"Dramas",
"ques":"Who played the title role in 2014's Frank?",
"answ":"MICHAEL FASSBENDER",
"answ3":"MICHAEL FASBENDER",
"answ2":"Michael Fassbender.",
},
{
"cat":"Angelina Jolie",
"ques":"In what film does Angelina Jolie say: 'What do you think is more exciting, having sex or stealing cars'?",
"answ":"GONE IN 60 SECONDS",
"answ3":"GONE IN SIXTY SECONDS",
"answ2":"Gone in 60 Seconds.",
},
{
"cat":"Scores & Soundtracks",
"ques":"Who composed the score for A History of Violence?",
"answ":"HOWARD SHORE",
"answ2":"Howard Shore.",
},
{
"cat":"Steven Spielberg",
"ques":"In what country is Frank finally apprehended in Catch Me If You Can?",
"answ":"FRANCE",
"answ2":"France.",
},
{
"cat":"Dramas",
"ques":"What musician played Greg in Ricki and the Flash?",
"answ":"RICK SPRINGFIELD",
"answ2":"Rick Springfield.",
},
{
"cat":"Dramas",
"ques":"Who falls for Whitney Houston in 1992's The Bodyguard?",
"answ":"KEVIN COSTNER",
"answ2":"Kevin Costner.",
},
{
"cat":"Movie Taglines",
"ques":"What cult classic action film had the tagline: 'There can be only one' ?",
"answ":"HIGHLANDER",
"answ2":"Highlander.",
},
{
"cat":"Horror",
"ques":"In what lake did Jason drown in Friday the 13th?",
"answ":"CRYSTAL LAKE",
"answ3":"CRYSTAL",
"answ2":"Crystal Lake.",
},
{
"cat":"Natalie Portman",
"ques":"Natalie Portman co-starred with Ashley Judd in what 2000 drama/romance film",
"answ":"WHERE THE HEART IS",
"answ2":"Where the Heart Is.",
},
{
"cat":"Movie Taglines",
"ques":"What horror classic featured the tagline: 'The classic story about a boy and his mother'?",
"answ":"PSYCHO",
"answ2":"Psycho.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor that once played James Bond previously competed in the Mr. Universe bodybuilding competition?",
"answ":"SEAN CONNERY",
"answ3":"SEAN CONNORY",
"answ2":"Sean Connery.",
},
{
"cat":"Romance",
"ques":"Name one of the two leads in 2001's Save the Last Dance.",
"answ":"JULIA STILES",
"answ3":"SEAN PATRICK THOMAS",
"answ2":"Julie Stiles/Sean Patrick Thomas.",
},
{
"cat":"Sports",
"ques":"Who played Al 'The Boss' Angel in the 1994 sports-family film Angels in the Outfield?",
"answ":"CHRISTOPHER LLOYD",
"answ3":"CHRISTOPHER LOYD",
"answ2":"Christopher Lloyd.",
},
{
"cat":"Tim Burton",
"ques":"What is the name of the idyllic town Ewan McGregor finds hidden in the forest in Big Fish?",
"answ":"SPECTRE",
"answ3":"SPECTER",
"answ2":"Spectre.",
},
{
"cat":"90s",
"ques":"What 1991 film was a remake of a 1950s movie of the same name which starred Spencer Tracy and Joan Bennett?",
"answ":"FATHER OF THE BRIDE",
"answ2":"Father of the Bride.",
},
{
"cat":"James Bond",
"ques":"How many James Bond films did Timothy Dalton star in?",
"answ":"2",
"answ3":"TWO",
"answ2":"2.",
},
{
"cat":"Sports",
"ques":"What was Michael B. Jordan's first name in Creed?",
"answ":"ADONIS",
"answ3":"ADONES",
"answ2":"Adonis.",
},
{
"cat":"Julia Roberts",
"ques":"What was Julia's character's name in the Ocean's franchise?",
"answ":"TESS",
"answ3":"TESS OCEAN",
"answ2":"Tess.",
},
{
"cat":"Dramas",
"ques":"What was the occupation of the murder victim in Witness?",
"answ":"POLICE OFFICER",
"answ3":"POLICEMAN",
"answ2":"Police officer.",
},
{
"cat":"Meryl Streep",
"ques":"Meryl Streep won a Best Actress Oscar for what 2012 film?",
"answ":"THE IRON LADY",
"answ2":"The Iron Lady.",
},
{
"cat":"Star Wars",
"ques":"What actor from 'Cheers' was in The Empire Strikes Back?",
"answ":"JOHN RATZENBERGER",
"answ3":"JOHN RATZENBURGER",
"answ2":"John Ratzenberger.",
},
{
"cat":"Action/Adventure",
"ques":"In the John Wick films what is the name of the manager of the New York Continental?",
"answ":"WINSTON",
"answ2":"Winston.",
},
{
"cat":"Biopics",
"ques":"What university do Mark Zuckerberg and Eduardo Saveron attend in The Social Network?",
"answ":"HARVARD",
"answ3":"HARVARD UNIVERSITY",
"answ2":"Harvard.",
},
{
"cat":"Directors",
"ques":"Who directed Rushmore?",
"answ":"WES ANDERSON",
"answ2":"Wes Anderson.",
},
{
"cat":"Musicals",
"ques":"Who played Emily, the newest member of the Barden Bellas in Pitch Perfect 2?",
"answ":"HAILEE STEINFELD",
"answ3":"HALEY STEINFELD",
"answ2":"Hailee Steinfeld.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What sci-fi film starred Sandra Bullock and George Clooney?",
"answ":"GRAVITY",
"answ2":"Gravity.",
},
{
"cat":"Movie Quotes",
"ques":"Complete the following quote from The Hunger Games: 'May the ____ in your favor'.",
"answ":"ODDS BE EVER",
"answ2":"Odds be ever.",
},
{
"cat":"Musicals",
"ques":"In La La Land, what does Sebastian want to call his jazz club?",
"answ":"CHICKEN ON A STICK",
"answ2":"Chicken on a stick.",
},
{
"cat":"Comedies",
"ques":"What 2004 movie involves a jaguar shark, documentary filmmaking and an attack by modern-day pirates?",
"answ":"THE LIFE AQUATIC WITH STEVE ZISSOU",
"answ3":"THE LIFE AQUATIC",
"answ2":"The Life Aquatic with Steve Zissou.",
},
{
"cat":"Disney",
"ques":"The song 'Part of Your World' is from what Disney animated film?",
"answ":"THE LITTLE MERMAID",
"answ3":"LITTLE MERMAID",
"answ2":"The Little Mermaid.",
},
{
"cat":"Movie Quotes",
"ques":"Name the movie: 'Snakes. Why did it have to be snakes'?",
"answ":"RAIDERS OF THE LOST ARK",
"answ2":"Raiders of the Lost Ark.",
},
{
"cat":"90s",
"ques":"What does Lloyd spike Harry's coffee with in Dumb & Dumber?",
"answ":"LAXATIVES",
"answ3":"LAXATIVE",
"answ2":"Laxatives.",
},
{
"cat":"Westerns",
"ques":"Who played 'the Good' in 1966's The Good, The Bad and The Ugly?",
"answ":"CLINT EASTWOOD",
"answ2":"Clint Eastwood.",
},
{
"cat":"Oscar Movies",
"ques":"What actor won an Oscar for teaching Kevin Costner 'the Chicago way' to get to Capone in The Untouchables?",
"answ":"SEAN CONNERY",
"answ3":"SEAN CONNORY",
"answ2":"Sean Connery.",
},
{
"cat":"Animated",
"ques":"Steve Martin and Martin Short voiced high priests Hotep and Huy in what animated feature?",
"answ":"THE PRINCE OF EGYPT",
"answ3":"PRINCE OF EGYPT",
"answ2":"The Prince of Egypt.",
},
{
"cat":"Holiday Movies",
"ques":"What actress played the role of adult Mary in It's a Wonderful Life?",
"answ":"DONNA REED",
"answ2":"Donna Reed.",
},
{
"cat":"2010s",
"ques":"Who directed the 2016 remake of The Magnificent Seven?",
"answ":"ANTOINE FUQUA",
"answ3":"ANTON FUQUA",
"answ2":"Antoine Fuqua.",
},
{
"cat":"90s",
"ques":"In what 90s comedy does a female character tell her peers that she invented a special type of glue?",
"answ":"ROMY AND MICHELE'S HIGH SCHOOL REUNION",
"answ3":"ROMY AND MICHELLE'S HIGH SCHOOL REUNION",
"answ2":"Romy and Michele's High School Reunion.",
},
{
"cat":"War",
"ques":"A Korean War field hospital is brought to life and laughs in what film?",
"answ":"MASH",
"answ3":"M*A*S*H",
"answ2":"MASH.",
},
{
"cat":"Classics",
"ques":"Who did Hitchcock cast opposite James Stewart in Vertigo?",
"answ":"KIM NOVAK",
"answ2":"Kim Novak.",
},
{
"cat":"Comedies",
"ques":"Who played the actor Osiris in Tropic Thunder?",
"answ":"ROBERT DOWNEY JR",
"answ2":"Robert Downey Jr.",
},
{
"cat":"Sports",
"ques":"What winning horse was owned by Jeff Bridges, trained by Chris Coope and ridden by Tobey Maguire?",
"answ":"SEABISCUIT",
"answ2":"Seabiscuit.",
},
{
"cat":"80s",
"ques":"What was the name of Kelly Le Brock's character in Weird Science?",
"answ":"LISA",
"answ2":"Lisa.",
},
{
"cat":"Action/Adventure",
"ques":"What Home Improvement star appeared briefly in Fast and the Furious Tokyo Drift?",
"answ":"ZACHERY TY BRYAN",
"answ3":"ZACHERY BRYAN",
"answ2":"Zachery Ty Bryan.",
},
{
"cat":"Mystery",
"ques":"Who directed Robert Downey Jr. in Sherlock Holmes?",
"answ":"GUY RITCHIE",
"answ2":"Guy Ritchie.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who played the villainous Captain Barbossa in the Pirates of the Caribbean series?",
"answ":"GEOFFREY RUSH",
"answ2":"Geoffrey Rush.",
},
{
"cat":"Christopher Nolan",
"ques":"In Dunkirk, who played Royal Air Force pilot Farrier, who was the last in the air?",
"answ":"TOM HARDY",
"answ2":"Tom Hardy.",
},
{
"cat":"Westerns",
"ques":"Who plays Josey Wales in the 1976 film The Outlaw Josey Wales?",
"answ":"CLINT EASTWOOD",
"answ2":"Clint Eastwood.",
},
{
"cat":"Movie Release Dates",
"ques":"Which year did the films The Legend of Bagger Vance, O Brother Where Art Thou?, and Erin Brockovich hit theaters?",
"answ":"2000",
"answ2":"2000.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In Aliens, the android Bishop does a knife trick on one of the colonial marines. Which marine was it?",
"answ":"HUDSON",
"answ3":"BILL PAXTON",
"answ2":"Hudson.",
},
{
"cat":"Sports",
"ques":"Who plays head football coach Harold Jones in the 2003 sports drama Radio?",
"answ":"ED HARRIS",
"answ2":"Ed Harris.",
},
{
"cat":"Sports",
"ques":"What film follows the perfect game performance of an aging baseball star in what could be his last game in the professional sport of baseball?",
"answ":"FOR LOVE OF THE GAME",
"answ2":"For Love of the Game.",
},
{
"cat":"Whoopi Goldberg",
"ques":"In the movie 'Eddie', Whoopi Goldberg is a fan who wins a contest to become the coach of what NBA team?",
"answ":"NEW YORK KNICKS",
"answ3":"THE NEW YORK KNICKS",
"answ2":"New York Knicks.",
},
{
"cat":"Directors",
"ques":"Who directed 2010's The Fighter?",
"answ":"DAVID O RUSSELL",
"answ2":"David O. Russell.",
},
{
"cat":"Movie Quotes",
"ques":"Name the movie from the quote: 'Put the bunny back in the box!'",
"answ":"CON AIR",
"answ2":"Con Air.",
},
{
"cat":"Angelina Jolie",
"ques":"Angelina Jolie stars alongside Jude Law and Gwyneth Paltrow in what 2004 action-adventure film?",
"answ":"SKY CAPTAIN AND THE WORLD OF TOMORROW",
"answ2":"Sky Captain and the World of Tomorrow.",
},
{
"cat":"2010s",
"ques":"Who plays the lead Captain Joseph Blocker in 2017's Hostiles?",
"answ":"CHRISTIAN BALE",
"answ2":"Christian Bale.",
},
{
"cat":"Tom Cruise",
"ques":"Who directed Rain Man?",
"answ":"BARRY LEVINSON",
"answ2":"Barry Levinson.",
},
{
"cat":"Scarlett Johansson",
"ques":"Who plays the nefarious Dr. Bernard Merrick in Michael Bay's The Island?",
"answ":"SEAN BEAN",
"answ2":"Sean Bean.",
},
{
"cat":"Dramas",
"ques":"Which Harry Potter alum stars opposite Rachel Weisz in the 2005 drama The Constant Gardener?",
"answ":"RALPH FIENNES",
"answ2":"Ralph Fiennes.",
},
{
"cat":"Star Wars",
"ques":"Who played purple haired Vice Admiral Amilyn Holdo in Star Wars The Last Jedi?",
"answ":"LAURA DERN",
"answ2":"Laura Dern.",
},
{
"cat":"Animated",
"ques":"What kind of animal was the Sheriff of Nottingham in Disney's Robin Hood?",
"answ":"WOLF",
"answ2":"Wolf.",
},
{
"cat":"Oscar Movies",
"ques":"What 1951 movie garnered Oscar nominations for Katharine Hepburn, Humphrey Bogart and director John Huston?",
"answ":"AFRICAN QUEEN",
"answ3":"THE AFRICAN QUEEN",
"answ2":"The African Queen.",
},
{
"cat":"Rom-coms",
"ques":"Who plays the surfing instructor in Forgetting Sarah Marshall?",
"answ":"PAUL RUDD",
"answ2":"Paul Rudd.",
},
{
"cat":"Directors",
"ques":"Who directed the 90s action film True Lies?",
"answ":"JAMES CAMERON",
"answ2":"James Cameron.",
},
{
"cat":"Samuel L. Jackson",
"ques":"Samuel L. Jackson played the character of Ordell Robbie in this 1997 Quentin Tarantino film.",
"answ":"JACKIE BROWN",
"answ2":"Jackie Brown.",
},
{
"cat":"Action/Adventure",
"ques":"The HMS Surprise is the name of a British warship in what 2003 adventure film?",
"answ":"MASTER AND COMMANDER THE FAR SIDE OF THE WORLD",
"answ3":"MASTER AND COMMANDER",
"answ2":"Master and Commander: The Far Side of the World.",
},
{
"cat":"Comedies",
"ques":"What is the name of Ron Burgundy's dog in Anchorman and Anchorman 2?",
"answ":"BAXTER",
"answ2":"Baxter.",
},
{
"cat":"2010s",
"ques":"Who plays Zero, young sidekick to Ralph Fiennes' M. Gustave in The Grand Budapest Hotel?",
"answ":"TONY REVOLORI",
"answ2":"Tony Revolori.",
},
{
"cat":"Julia Roberts",
"ques":"Julia Roberts starred with Catherine Keener and David Duchovny in this 2002 film about a film within a film.",
"answ":"FULL FRONTAL",
"answ2":"Full Frontal.",
},
{
"cat":"Martin Scorsese",
"ques":"In Casino, what does Nicky Santoro smuggle in his wife's hair through airport customs?",
"answ":"DIAMONDS",
"answ2":"Diamonds.",
},
{
"cat":"Musicals",
"ques":"In The Greatest Showman, who plays the beautiful trapeze artist Anne Wheeler?",
"answ":"ZENDAYA",
"answ3":"ZENDEYA",
"answ2":"Zendaya.",
},
{
"cat":"Clint Eastwood",
"ques":"Clint Eastwood directed and scored this 2003 crime thriller starring Sean Penn, Tim Robbins and Kevin Bacon.",
"answ":"MYSTIC RIVER",
"answ2":"Mystic River.",
},
{
"cat":"Monster Movies",
"ques":"Ben Chapman and Ricou Browning both played The Gill-man in this 1954 classic monster film.",
"answ":"CREATURE FROM THE BLACK LAGOON",
"answ2":"Creature from the Black Lagoon.",
},
{
"cat":"Spy Movies",
"ques":"What is the name of the second film in the Jason Bourne franchise?",
"answ":"THE BOURNE SUPREMACY",
"answ3":"BOURNE SUPREMACY",
"answ2":"The Bourne Supremacy.",
},
{
"cat":"Harry Potter",
"ques":"In the Harry Potter franchise, what is Mrs. Weasley's first name?",
"answ":"MOLLY",
"answ3":"MOLLIE",
"answ2":"Molly.",
},
{
"cat":"Sports",
"ques":"Who plays football coach Gary Gaines in 2004's Friday Night Lights?",
"answ":"BILLY BOB THORNTON",
"answ3":"BILLY BOB THORTON",
"answ2":"Billy Bob Thornton.",
},
{
"cat":"Natalie Portman",
"ques":"Natalie Portman stars alongside Jude Law, Nicole Kidman and Renee Zellweger in what 2003 film?",
"answ":"COLD MOUNTAIN",
"answ2":"Cold Mountain.",
},
{
"cat":"War",
"ques":"Who played Hawkeye in the 1970s war comedy M*A*S*H?",
"answ":"DONALD SUTHERLAND",
"answ2":"Donald Sutherland.",
},
{
"cat":"Romance",
"ques":"Who starred opposite Hugh Jackman in 2001's Kate & Leopold?",
"answ":"MEG RYAN",
"answ2":"Meg Ryan.",
},
{
"cat":"Judd Apatow",
"ques":"What 2009 film directed by Judd Apatow is about a comedian diagnosed with a terminal disease?",
"answ":"FUNNY PEOPLE",
"answ2":"Funny People.",
},
{
"cat":"Movie Taglines",
"ques":"What 1970s family movie classic has the tagline: 'It's Scrumdiddlyumptious!'?",
"answ":"WILLY WONKA AND THE CHOCOLATE FACTORY",
"answ2":"Willy Wonka and the Chocolate Factory.",
},
{
"cat":"Quentin Tarantino",
"ques":"Who plays Django's wife in Django Unchained?",
"answ":"KERRY WASHINGTON",
"answ3":"KERRI WASHINGTON",
"answ2":"Kerry Washington.",
},
{
"cat":"DCEU",
"ques":"What real world CNN reporter can be seen on TV covering the Doomsday attack in Batman v. Superman?",
"answ":"ANDERSON COOPER",
"answ2":"Anderson Cooper.",
},
{
"cat":"90s",
"ques":"Who played the jilted bride in the 1997 Kevin Kline comedy In & Out?",
"answ":"JOAN CUSACK",
"answ2":"Joan Cusack.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"This actor has appeared in The Lord of the Rings, the Marvel Cinematic Universe and the Star Wars franchise.",
"answ":"ANDY SERKIS",
"answ2":"Andy Serkis.",
},
{
"cat":"Crime",
"ques":"The Departed is a remake of what Hong Kong film?",
"answ":"INFERNAL AFFAIRS",
"answ2":"Infernal Affairs.",
},
{
"cat":"Rom-coms",
"ques":"Marilyn Monroe starred with Tom Ewell and her infamous white dress in this 1955 classic.",
"answ":"THE SEVEN YEAR ITCH",
"answ3":"SEVEN YEAR ITCH",
"answ2":"The Seven Year Itch.",
},
{
"cat":"Kurt Russell",
"ques":"What character did Kurt Russell play in Guardians of the Galaxy Vol. 2?",
"answ":"EGO",
"answ2":"Ego.",
},
{
"cat":"Disaster Movies",
"ques":"Who directed 2016's Deepwater Horizon?",
"answ":"PETER BERG",
"answ2":"Peter Berg.",
},
{
"cat":"Denzel Washington",
"ques":"Who directed Denzel Washington in Man on Fire, Unstoppable, The Taking of Pelham 123 and Déjà Vu?",
"answ":"TONY SCOTT",
"answ2":"Tony Scott.",
},
{
"cat":"Ron Howard",
"ques":"Ron Howard directed Russell Crowe, Renee Zellweger and Paul Giamatti in this 2005 biopic.",
"answ":"CINDERELLA MAN",
"answ2":"Cinderella Man.",
},
{
"cat":"Spy Movies",
"ques":"What is Colin Firth's character's first and last real name in the Kingsman franchise?",
"answ":"HARRY HART",
"answ2":"Harry Hart.",
},
{
"cat":"James Bond",
"ques":"What Bond film was a reboot of the earlier Bond film Thunderball?",
"answ":"NEVER SAY NEVER AGAIN",
"answ2":"Never Say Never Again.",
},
{
"cat":"Family Films",
"ques":"Who plays hockey player Charlie Conway in The Mighty Ducks series?",
"answ":"JOSHUA JACKSON",
"answ2":"Joshua Jackson.",
},
{
"cat":"Biopics",
"ques":"Who played Scottish writer J.M. Barrie in the 2004 film Finding Neverland?",
"answ":"JOHNNY DEPP",
"answ2":"Johnny Depp.",
},
{
"cat":"Holiday Movies",
"ques":"Who plays Billy Bob Thornton's boss in Bad Santa?",
"answ":"JOHN RITTER",
"answ2":"John Ritter.",
},
{
"cat":"Romance",
"ques":"Who plays Emmeline Lestrange in The Blue Lagoon?",
"answ":"BROOKE SHIELDS",
"answ2":"Brooke Shields.",
},
{
"cat":"Will Smith",
"ques":"In Hitch, what Usher song plays during the dance lesson scene between Hitch and Albert?",
"answ":"YEAH",
"answ2":"Yeah!.",
},
{
"cat":"Kevin Smith",
"ques":"Will Smith makes a cameo as himself in what Kevin Smith movie?",
"answ":"JERSEY GIRL",
"answ2":"Jersey Girl.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who plays the powerful vampire elder Viktor who Selene awakens in 2003's Underworld?",
"answ":"BILL NIGHY",
"answ2":"Bill Nighy.",
},
{
"cat":"Horror",
"ques":"What was the first name of Courtney Cox's cameraman in Scream?",
"answ":"KENNY",
"answ3":"KENNETH",
"answ2":"Kenny.",
},
{
"cat":"Pixar",
"ques":"What does Nemo touch before he is captured by the divers in Finding Nemo?",
"answ":"BOAT",
"answ3":"A BOAT",
"answ2":"A boat.",
},
{
"cat":"Leonardo DiCaprio",
"ques":"Who directed Leonardo DiCaprio in J. Edgar?",
"answ":"CLINT EASTWOOD",
"answ2":"Clint Eastwood.",
},
{
"cat":"Movie Characters",
"ques":"Who played the iconic character of expat club owner Rick Blaine?",
"answ":"HUMPHREY BOGART",
"answ2":"Humphrey Bogart.",
},
{
"cat":"Brad Pitt",
"ques":"Who plays Brad Pitt's co-lead, Sergeant Tom O'Meara in the 1997 thriller The Devil's Own?",
"answ":"HARRISON FORD",
"answ2":"Harrison Ford.",
},
{
"cat":"70s",
"ques":"What is the name of Danny Zuko's greaser gang in Grease?",
"answ":"T BIRDS",
"answ3":"THE T BIRDS",
"answ2":"T-Birds.",
},
{
"cat":"Ridley Scott",
"ques":"Who played Balian, the blacksmith turned crusader, in 2005's Kingdom of Heaven?",
"answ":"ORLANDO BLOOM",
"answ2":"Orlando Bloom.",
},
{
"cat":"Musicals",
"ques":"Name the 1980s musical from the synopsis: 'Hopefuls try out before a demanding director for a part in a new musical.'",
"answ":"A CHORUS LINE",
"answ2":"A Chorus Line.",
},
{
"cat":"Cameron Diaz",
"ques":"What 1997 film starred Cameron Diaz and Ewan McGregor and was directed by Danny Boyle?",
"answ":"A LIFE LESS ORDINARY",
"answ2":"A Life Less Ordinary.",
},
{
"cat":"Kurt Russell",
"ques":"Kurt Russell starred as Steve Stronghold in this 2005 family comedy.",
"answ":"SKY HIGH",
"answ2":"Sky High.",
},
{
"cat":"Oscar Movies",
"ques":"What is the only documentary to win 2 Academy Awards: one for Best Documentary and the other for Best Original Song?",
"answ":"AN INCONVENIENT TRUTH",
"answ2":"An Inconvenient Truth.",
},
{
"cat":"Matthew McConaughey",
"ques":"Matthew McConaughey starred opposite Jodie Foster in this 1997 Robert Zemeckis sci-fi film.",
"answ":"CONTACT",
"answ2":"Contact.",
},
{
"cat":"Heist Films",
"ques":"Nicolas Cage and Giovanni Ribisi play brothers in what heist film?",
"answ":"GONE IN 60 SECONDS",
"answ3":"GONE IN SIXTY SECONDS",
"answ2":"Gone in 60 Seconds.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who plays the lead in Duncan Jones' Source Code?",
"answ":"JAKE GYLLENHAAL",
"answ3":"JAKE GYLENHAAL",
"answ2":"Jake Gyllenhaal.",
},
{
"cat":"Ron Howard",
"ques":"Who plays neurotic dad, Gil Buckman in Ron Howard's 1989 film Parenthood?",
"answ":"STEVE MARTIN",
"answ2":"Steve Martin.",
},
{
"cat":"Cameron Diaz",
"ques":"Who voices Fiona's mother in the Shrek films?",
"answ":"JULIE ANDREWS",
"answ2":"Julie Andrews.",
},
{
"cat":"Marvel Movies",
"ques":"Name one of the two X-Men who team up with Deadpool in Deadpool.",
"answ":"COLOSSUS",
"answ3":"NEGASONIC TEENAGE WARHEAD",
"answ2":"Colossus/Negasonic Teenage Warhead.",
},
{
"cat":"Tim Burton",
"ques":"When Lydia comes to Beetlejuice for help near the end of the film, what does he say right after she says his name 3 times?",
"answ":"IT'S SHOWTIME",
"answ2":"It's showtime.",
},
{
"cat":"Disney",
"ques":"You will find a bloodhound dog by the name of Bruno in what Disney animated classic?",
"answ":"CINDERELLA",
"answ2":"Cinderella.",
},
{
"cat":"Sly & Arnie",
"ques":"In what film did Stallone play the role of a trucker named Lincoln Hawk?",
"answ":"OVER THE TOP",
"answ2":"Over the Top.",
},
{
"cat":"Classics",
"ques":"What color were the slippers in Wizard of Oz originally intended to be before being changed to red?",
"answ":"SILVER",
"answ2":"Silver.",
},
{
"cat":"Charlize Theron",
"ques":"Who plays Charlize Theron's sister Freya in 2016's The Huntsman: Winter's War?",
"answ":"EMILY BLUNT",
"answ3":"EMILIE BLUNT",
"answ2":"Emily Blunt.",
},
{
"cat":"Steven Spielberg",
"ques":"Steven Spielberg's Jaws was released in what year?",
"answ":"1975",
"answ2":"1975.",
},
{
"cat":"Middle Earth",
"ques":"In The Fellowship of the Ring, what are Merry and Pippin's punishment for stealing one of Gandalf's fireworks?",
"answ":"WASHING DISHES",
"answ2":"Washing dishes.",
},
{
"cat":"Dramas",
"ques":"Who directed the 1975 drama Barry Lyndon?",
"answ":"STANLEY KUBRICK",
"answ2":"Stanley Kubrick.",
},
{
"cat":"Action/Adventure",
"ques":"Who plays the President of the United States in the action film White House Down?",
"answ":"JAMIE FOXX",
"answ2":"Jamie Foxx.",
},
{
"cat":"2000s",
"ques":"Who plays the escort Jade in The Hangover?",
"answ":"HEATHER GRAHAM",
"answ2":"Heather Graham.",
},
{
"cat":"Cate Blanchett",
"ques":"Cate Blanchett plays stepmother to Lily James in what film?",
"answ":"CINDERELLA",
"answ2":"Cinderella.",
},
{
"cat":"MCU",
"ques":"In the MCU, what type of vessel can SHIELD operate in the air or at sea, which was first seen in The Avengers?",
"answ":"HELICARRIER",
"answ3":"HELICARRIERS",
"answ2":"Helicarrier.",
},
{
"cat":"War",
"ques":"What 2014 war film was directed by Angelina Jolie?",
"answ":"UNBROKEN",
"answ2":"Unbroken.",
},
{
"cat":"Samuel L. Jackson",
"ques":"Samuel L. Jackson played the lead in this biographical basketball drama released in 2005.",
"answ":"COACH CARTER",
"answ2":"Coach Carter.",
},
{
"cat":"2000s",
"ques":"In Mr. Magorium's Wonder Emporium, what actress plays the manager that has been chosen to take over the Wonder Emporium?",
"answ":"NATALIE PORTMAN",
"answ2":"Natalie Portman.",
},
{
"cat":"Oscar Movies",
"ques":"Who won a Best Actor Oscar for playing a role that was originally played by Brian Cox in 1986's Manhunter?",
"answ":"ANTHONY HOPKINS",
"answ2":"Anthony Hopkins.",
},
{
"cat":"2010s",
"ques":"Who lends his voice to the character of Ferdinand the Bull in the animated film Ferdinand?",
"answ":"JOHN CENA",
"answ2":"John Cena.",
},
{
"cat":"Classics",
"ques":"This actress played the character of Maria in the 1965 Rodgers and Hammerstein musical, The Sound of Music.",
"answ":"JULIE ANDREWS",
"answ2":"Julie Andrews.",
},
{
"cat":"Cameron Diaz",
"ques":"Cameron Diaz starred with Tom Cruise in this 2010 film directed by James Mangold.",
"answ":"KNIGHT AND DAY",
"answ2":"Knight and Day.",
},
{
"cat":"Sandra Bullock",
"ques":"Sandra Bullock plays a lonely biochemist opposite Tate Donovan in what 1992 rom-com?",
"answ":"LOVE POTION NO 9",
"answ3":"LOVE POTION NUMBER 9",
"answ2":"Love Potion No. 9.",
},
{
"cat":"Julia Roberts",
"ques":"Julia Roberts played mom to Jacob Tremblay in this 2017 tear-jerker.",
"answ":"WONDER",
"answ2":"Wonder.",
},
{
"cat":"Dramas",
"ques":"Who plays love interest to Hawkeye, Cora Munro, in The Last of the Mohicans?",
"answ":"MADELEINE STOWE",
"answ3":"MADELINE STOWE",
"answ2":"Madeleine Stowe.",
},
{
"cat":"Thrillers",
"ques":"Who plays Jason Bateman's wife Robyn in the psychological horror-thriller The Gift?",
"answ":"REBECCA HALL",
"answ2":"Rebecca Hall.",
},
{
"cat":"Horror",
"ques":"In The Shining, Danny receives a horrifying vision of an elevator, which is full of what?",
"answ":"BLOOD",
"answ2":"Blood.",
},
{
"cat":"Festival Darlings",
"ques":"In the John Carroll Lynch film Lucky, who plays the titular character Lucky?",
"answ":"HARRY DEAN STANTON",
"answ2":"Harry Dean Stanton.",
},
{
"cat":"Julia Roberts",
"ques":"Julia Roberts starred opposite Kiefer Sutherland, Kevin Bacon and Oliver Platt in this 1990 sci-fi horror film.",
"answ":"FLATLINERS",
"answ2":"Flatliners.",
},
{
"cat":"Modern Classics",
"ques":"Who plays adult Hamish in Braveheart?",
"answ":"BRENDAN GLEESON",
"answ2":"Brendan Gleeson.",
},
{
"cat":"Sports",
"ques":"In The Natural, what was special about the tree that Roy Hobbs carves his bat from? It was ______",
"answ":"STRUCK BY LIGHTNING",
"answ3":"HIT BY LIGHTNING",
"answ2":"Hit by lightning.",
},
{
"cat":"Comic Book Movies",
"ques":"What comic book movie had the tagline: Worst. Heroes. Ever.?",
"answ":"SUICIDE SQUAD",
"answ2":"Suicide Squad.",
},
{
"cat":"Tom Hanks",
"ques":"What was the name of the mouse in The Green Mile?",
"answ":"MR JINGLES",
"answ3":"MISTER JINGLES",
"answ2":"Mr. Jingles.",
},
{
"cat":"Cameron Diaz",
"ques":"This 2011 high school based comedy starred Cameron Diaz, Justin Timberlake and Jason Segel.",
"answ":"BAD TEACHER",
"answ2":"Bad Teacher.",
},
{
"cat":"Stanley Kubrick",
"ques":"Kubrick's 2001: A Space Odyssey was released in what year?",
"answ":"1968",
"answ2":"1968.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who played Mirana, the White Queen in Tim Burton's Alice in Wonderland?",
"answ":"ANNE HATHAWAY",
"answ2":"Anne Hathaway.",
},
{
"cat":"Kate Winslet",
"ques":"What is the first name of Kate Winslet's character in Titanic?",
"answ":"ROSE",
"answ2":"Rose.",
},
{
"cat":"Angelina Jolie",
"ques":"What South African actor plays King Stefan in Maleficent?",
"answ":"SHARLTO COPLEY",
"answ3":"CHARLTO COPLEY",
"answ2":"Sharlto Copley.",
},
{
"cat":"Cate Blanchett",
"ques":"Who played Cate Blanchett's co-lead in 2015's Carol?",
"answ":"ROONEY MARA",
"answ2":"Rooney Mara.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"At the 1969 Academy Awards there was a tie for the Best Actress Oscar between Katharine Hepburn and what other actress?",
"answ":"BARBRA STREISAND",
"answ3":"BARBARA STREISAND",
"answ2":"Barbra Streisand.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What is the name of the arcade game in The Last Starfighter?",
"answ":"STARFIGHTER",
"answ2":"Starfighter.",
},
{
"cat":"Oscar Movies",
"ques":"What is the only film based on a TV series to get a Best Picture nomination?",
"answ":"THE FUGITIVE",
"answ2":"The Fugitive.",
},
{
"cat":"Robin Williams",
"ques":"Robin Williams appeared in what Christopher Nolan film?",
"answ":"INSOMNIA",
"answ2":"Insomnia.",
},
{
"cat":"Harry Potter",
"ques":"What Harry Potter character is the daughter of the editor-in-chief of the Quibbler?",
"answ":"LUNA",
"answ3":"LUNA LOVEGOOD",
"answ2":"Luna Lovegood.",
},
{
"cat":"Tim Burton",
"ques":"Who provided the singing voice for Jack Skellington in the Tim Burton produced film The Nightmare Before Christmas?",
"answ":"DANNY ELFMAN",
"answ2":"Danny Elfman.",
},
{
"cat":"Festival Darlings",
"ques":"Who played Napoleon Dynamite in the film Napoleon Dynamite?",
"answ":"JON HADER",
"answ3":"JOHN HADER",
"answ2":"Jon Hader.",
},
{
"cat":"Marvel Movies",
"ques":"How many X-Men films does Halle Berry appear in as Storm?",
"answ":"4",
"answ3":"FOUR",
"answ2":"4.",
},
{
"cat":"2010s",
"ques":"In The Disaster Artist, what celebrity cameos as himself offering Greg Sestero to fill in for a small part in a TV show?",
"answ":"BRYAN CRANSTON",
"answ2":"Bryan Cranston.",
},
{
"cat":"Thrillers",
"ques":"What 2005 thriller stars Ellen Page, Patrick Wilson and Sandra Oh?",
"answ":"HARD CANDY",
"answ2":"Hard Candy.",
},
{
"cat":"Animated",
"ques":"What is the name of the 2014 animated musical starring Channing Tatum, Zoe Saldana and Diego Luna?",
"answ":"BOOK OF LIFE",
"answ3":"THE BOOK OF LIFE",
"answ2":"The Book of Life.",
},
{
"cat":"Mystery",
"ques":"In 1985's Clue, which one of the infamous weapons was used to kill the cook?",
"answ":"KNIFE",
"answ2":"Knife.",
},
{
"cat":"Family Films",
"ques":"Who plays Pops in 2008's Speed Racer?",
"answ":"JOHN GOODMAN",
"answ2":"John Goodman.",
},
{
"cat":"Scarlett Johansson",
"ques":"A former tennis pro falls for Scarlett who happens to be dating his friend and soon-to-be-brother-in-law in what film?",
"answ":"MATCH POINT",
"answ2":"Match Point.",
},
{
"cat":"War",
"ques":"Steven Spielberg directed what 1980s war film starring John Malkovich and Miranda Richardson?",
"answ":"EMPIRE OF THE SUN",
"answ2":"Empire of the Sun.",
},
{
"cat":"Ridley Scott",
"ques":"What version of the replicants is Deckard hunting down in Blade Runner?",
"answ":"NEXUS 6",
"answ3":"NEXUS SIX",
"answ2":"Nexus 6.",
},
{
"cat":"Disney",
"ques":"What Disney film is about the Princess Giselle from the mystical land of Andalasia?",
"answ":"ENCHANTED",
"answ2":"Enchanted.",
},
{
"cat":"Coming of Age",
"ques":"In Fast Times at Ridgemont High, what food did Spicoli have delivered to class?",
"answ":"PIZZA",
"answ2":"Pizza.",
},
{
"cat":"Disaster Movies",
"ques":"This 2015 disaster film was directed by Brad Peyton and starred Dwayne Johnson and Alexandra Daddario.",
"answ":"SAN ANDREAS",
"answ2":"San Andreas.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What is the computer world called in Tron?",
"answ":"THE GRID",
"answ3":"GRID",
"answ2":"The Grid.",
},
{
"cat":"Movie Taglines",
"ques":"What horror classic has the tagline: 'Check in. Unpack. Relax. Take a shower.'?",
"answ":"PSYCHO",
"answ2":"Psycho.",
},
{
"cat":"DCEU",
"ques":"What is the name of Steve Trevor's secretary in Wonder Woman?",
"answ":"ETTA CANDY",
"answ3":"ETTA",
"answ2":"Etta Candy.",
},
{
"cat":"James Bond",
"ques":"What Academy Award winning actress played NSA agent Giacinta 'Jinx' Johnson in Die Another Day?",
"answ":"HALLE BERRY",
"answ2":"Halle Berry.",
},
{
"cat":"Pixar",
"ques":"What is the name of the princess who defies her kingdom's customs in Pixar's Brave?",
"answ":"MERIDA",
"answ2":"Merida.",
},
{
"cat":"Holiday Movies",
"ques":"What is the name of Cousin Eddie's dog in National Lampoon's Christmas Vacation?",
"answ":"SNOTS",
"answ2":"Snots.",
},
{
"cat":"Judd Apatow",
"ques":"This actor played Andy Stitzer, the main character in Apatow's The 40-Year-Old Virgin?",
"answ":"STEVE CARRELL",
"answ3":"STEVE CARELL",
"answ2":"Steve Carell.",
},
{
"cat":"Kate Winslet",
"ques":"Kate Winslet starred opposite Geoffrey Rush and Joaquin Phoenix in this film inspired by the life of the Marquis de Sade.",
"answ":"QUILLS",
"answ2":"Quills.",
},
{
"cat":"Steven Spielberg",
"ques":"In Jurassic Park, the DNA of what kind of animal was used to fill in the gaps in the DNA strands?",
"answ":"FROG",
"answ3":"FROGS",
"answ2":"Frog.",
},
{
"cat":"Star Trek",
"ques":"In the Star Trek franchise, how many films does James Kirk hold the rank of Starfleet Admiral?",
"answ":"4",
"answ3":"FOUR",
"answ2":"4.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Who played Doctor Parnassus in The Imaginarium of Doctor Parnassus?",
"answ":"CHRISTOPHER PLUMMER",
"answ2":"Christopher Plummer.",
},
{
"cat":"2010s",
"ques":"In Argo, who plays film producer Lester Siegel who helps Ben Affleck and John Goodman create the illusion of a fake film?",
"answ":"ALAN ARKIN",
"answ2":"Alan Arkin.",
},
{
"cat":"Stanley Kubrick",
"ques":"Name one of the two leads in Eyes Wide Shut.",
"answ":"TOM CRUISE",
"answ3":"NICOLE KIDMAN",
"answ2":"Tom Cruise/Nicole Kidman.",
},
{
"cat":"Westerns",
"ques":"In Blazing Saddles, Gene Wilder's alcoholic gunslinger is known by what nickname?",
"answ":"WACO KID",
"answ3":"THE WACO KID",
"answ2":"The Waco Kid.",
},
{
"cat":"Horror",
"ques":"What song plays while Patrick Bateman kills Paul Allen in American Psycho?",
"answ":"HIP TO BE SQUARE",
"answ2":"Hip to Be Square.",
},
{
"cat":"Movie Characters",
"ques":"Anton Chigurh is an omnious character in what film?",
"answ":"NO COUNTRY FOR OLD MEN",
"answ2":"No Country For Old Men.",
},
{
"cat":"Kevin Smith",
"ques":"This Kevin Smith film starred Ben Affleck and Matt Damon as fallen angels.",
"answ":"DOGMA",
"answ2":"Dogma.",
},
{
"cat":"Star Wars",
"ques":"In the Star Wars films, what are said to be 'immensely superior to droids' because they can think creatively?",
"answ":"CLONES",
"answ2":"Clones.",
},
{
"cat":"Alfred Hitchcock",
"ques":"This actress starred in both Hitchcock classics, The Birds and Marnie.",
"answ":"TIPPI HEDREN",
"answ2":"Tippi Hedren.",
},
{
"cat":"Action/Adventure",
"ques":"Who plays Evie in 1999's The Mummy?",
"answ":"RACHEL WEISZ",
"answ3":"RACHEL WEISS",
"answ2":"Rachel Weisz.",
},
{
"cat":"Dance Movies",
"ques":"Richard Gere starred opposite this former Fly Girl in 2004's Shall We Dance.",
"answ":"JENNIFER LOPEZ",
"answ2":"Jennifer Lopez.",
},
{
"cat":"Dramas",
"ques":"In Glengarry Glenn Ross, what does the acronym A.B.C. stand for?",
"answ":"ALWAYS BE CLOSING",
"answ2":"Always Be Closing.",
},
{
"cat":"Family Films",
"ques":"Who played the Cat in the Hat in 2003's Cat in the Hat?",
"answ":"MIKE MYERS",
"answ2":"Mike Myers.",
},
{
"cat":"John Carpenter",
"ques":"In 1982's The Thing, who plays the mechanic Childs?",
"answ":"KEITH DAVID",
"answ2":"Keith David.",
},
{
"cat":"Oscar Movies",
"ques":"Name the one film starring Kevin Costner that has won Best Picture at the Academy Awards.",
"answ":"DANCES WITH WOLVES",
"answ2":"Dances With Wolves.",
},
{
"cat":"Denzel Washington",
"ques":"What action-crime comedy stars Denzel Washington and Mark Wahlberg?",
"answ":"2 GUNS",
"answ3":"TWO GUNS",
"answ2":"2 Guns.",
},
{
"cat":"Sly & Arnie",
"ques":"What Desperate Housewives star played Tango's sister Kiki in the film Tango & Cash?",
"answ":"TERI HATCHER",
"answ2":"Teri Hatcher.",
},
{
"cat":"Movie Quotes",
"ques":"In The Fugitive, what was US Marshall Samuel Gerard's response to Dr. Kimble when Kimble said: 'I didn't kill my wife.'?",
"answ":"I DON'T CARE",
"answ2":"I Don't Care.",
},
{
"cat":"Quentin Tarantino",
"ques":"What is Lucy Liu's character's code name in Kill Bill Volume 1?",
"answ":"COTTONMOUTH",
"answ2":"Cottonmouth.",
},
{
"cat":"Natalie Portman",
"ques":"In Beautiful Girls, Natalie has a crush on her next door neighbour Willie Conway. Who played Willie?",
"answ":"TIMOTHY HUTTON",
"answ2":"Timothy Hutton.",
},
{
"cat":"Middle Earth",
"ques":"What is the subtitle of the first Hobbit film?",
"answ":"AN UNEXPECTED JOURNEY",
"answ3":"UNEXPECTED JOURNEY",
"answ2":"An Unexpected Journey.",
},
{
"cat":"David Fincher",
"ques":"The film Zodiac primarily takes place in what west coast US city?",
"answ":"SAN FRANCISCO",
"answ2":"San Francisco.",
},
{
"cat":"Dance Movies",
"ques":"What was the full name of Jennifer Grey's character in 1987's Dirty Dancing?",
"answ":"FRANCES HOUSEMAN",
"answ3":"FRANCIS HOUSEMAN",
"answ2":"Frances Houseman.",
},
{
"cat":"Matthew McConaughey",
"ques":"Matthew McConaughey played businessman Kenny Wells in this 2016 crime drama.",
"answ":"GOLD",
"answ2":"Gold.",
},
{
"cat":"Stanley Kubrick",
"ques":"A middle-aged college professor becomes infatuated with a 14 year-old nymphet in what Stanley Kubrick film?",
"answ":"LOLITA",
"answ2":"Lolita.",
},
{
"cat":"Comedies",
"ques":"In the holiday classic Elf, who plays Jovie, the woman Buddy develops feelings for?",
"answ":"ZOOEY DESCHANEL",
"answ3":"ZOEY DESCHANEL",
"answ2":"Zooey Deschanel.",
},
{
"cat":"2010s",
"ques":"Who plays husband Pete Wagner, who takes in 3 foster children in 2018's Instant Family?",
"answ":"MARK WAHLBERG",
"answ2":"Mark Wahlberg.",
},
{
"cat":"Directors",
"ques":"Who directed K-19: The Widowmaker?",
"answ":"KATHRYN BIGELOW",
"answ3":"CATHERINE BIGELOW",
"answ2":"Kathryn Bigelow.",
},
{
"cat":"Brad Pitt",
"ques":"Which 1995 film sees Brad star as Tristan Ludlow with his two brothers and father living in Montana?",
"answ":"LEGENDS OF THE FALL",
"answ2":"Legends of the Fall.",
},
{
"cat":"90s",
"ques":"In what 90s buddy cop film will you find Luke Wilson's Officer Carlson starring opposite Martin Lawrence as jewel thief Miles Logan?",
"answ":"BLUE STREAK",
"answ2":"Blue Streak.",
},
{
"cat":"Scarlett Johansson",
"ques":"In The Other Boleyn Girl, Scarlett Johansson and what other actress vie for the affections of King Henry VIII?",
"answ":"NATALIE PORTMAN",
"answ2":"Natalie Portman.",
},
{
"cat":"Action/Adventure",
"ques":"Who plays the lead, Riley North, in the 2018 film Peppermint?",
"answ":"JENNIFER GARNER",
"answ2":"Jennifer Garner.",
},
{
"cat":"Disney",
"ques":"Which musical artist voices Gazelle in Zootopia?",
"answ":"SHAKIRA",
"answ2":"Shakira.",
},
{
"cat":"Christopher Nolan",
"ques":"In Inception, who plays the newest member of Cobb's crew, Ariadne, who specializes in constructing dreamscapes?",
"answ":"ELLEN PAGE",
"answ3":"ELLIOT PAGE",
"answ2":"Elliot Page.",
},
{
"cat":"2010s",
"ques":"Who directed Deadpool?",
"answ":"TIM MILLER",
"answ2":"Tim Miller.",
},
{
"cat":"Musicals",
"ques":"In Mamma Mia! Here We Go Again, who plays Fernando Cienfuegos, the Mexican manager of the Hotel Bella Donna, and old lover of Ruby's?",
"answ":"ANDY GARCIA",
"answ2":"Andy Garcia.",
},
{
"cat":"Tom Hanks",
"ques":"Which Tom Hanks film was released first: Apollo 13, Forrest Gump or A League of Their Own?",
"answ":"A LEAGUE OF THEIR OWN",
"answ3":"LEAGUE OF THEIR OWN",
"answ2":"A League of Their Own.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In 2018's Upgrade, what is the name of the experimental computer chip implant that forms an unusual relationship with its host?",
"answ":"STEM",
"answ2":"STEM.",
},
{
"cat":"Thrillers",
"ques":"Angelina Jolie stars alongside Liev Schreiber and Chiwetel Ejiofor in what action thriller?",
"answ":"SALT",
"answ2":"Salt.",
},
{
"cat":"Kevin Smith",
"ques":"In Mallrats, who plays Shannon Hamilton, the manager of Fashionable Male, who has a personal distaste for Brodie?",
"answ":"BEN AFFLECK",
"answ2":"Ben Affleck.",
},
{
"cat":"80s",
"ques":"What is the last name of the criminal family in The Goonies?",
"answ":"FRATELLI",
"answ2":"Fratelli.",
},
{
"cat":"Dramas",
"ques":"Emily Blunt played FBI agent Kate Macer in this 2015 film.",
"answ":"SICARIO",
"answ2":"Sicario.",
},
{
"cat":"Biopics",
"ques":"Marisa Tomei appears alongside Robert Downey Jr. in what 1992 biopic?",
"answ":"CHAPLIN",
"answ2":"Chaplin.",
},
{
"cat":"Family Films",
"ques":"In Cool Runnings, for good luck, Sanka kisses what?",
"answ":"AN EGG",
"answ3":"EGG",
"answ2":"Egg.",
},
{
"cat":"Alfred Hitchcock",
"ques":"Lars Thorwald is the name of a suspected murderer in what Hitchcock film?",
"answ":"REAR WINDOW",
"answ2":"Rear Window.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"What actor appears in both Rogue One: A Star Wars Story and Doctor Strange?",
"answ":"MADS MIKKELSEN",
"answ2":"Mads Mikkelsen.",
},
{
"cat":"Rom-coms",
"ques":"Which 2005 film stars Jennifer Lopez and Michael Vartan as an engaged couple?",
"answ":"MONSTER IN LAW",
"answ2":"Monster-in-Law.",
},
{
"cat":"2000s",
"ques":"In The 40 Year Old Virgin, Paul Rudd desperately wants the TVs in the store to stop playing a DVD of what musical artist?",
"answ":"MICHAEL MCDONALD",
"answ2":"Michael McDonald.",
},
{
"cat":"Animated",
"ques":"What SNL vet voiced the pig Leonard in The Angry Birds Movie?",
"answ":"BILL HADER",
"answ2":"Bill Hader.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"In what decade was the character of Sherlock Holmes portrayed by Christopher Plummer, Nicol Williamson & John Cleese?",
"answ":"70S",
"answ3":"1970S",
"answ2":"1970s.",
},
{
"cat":"Spike Lee",
"ques":"What is the full name of Ray Allen's character in He Got Game?",
"answ":"JESUS SHUTTLESWORTH",
"answ2":"Jesus Shuttlesworth.",
},
{
"cat":"Monster Movies",
"ques":"How many Critters movie have been theatrically released?",
"answ":"2",
"answ3":"TWO",
"answ2":"2.",
},
{
"cat":"Kurt Russell",
"ques":"What is Kurt Russell hired to make for Goldie Hawn's yacht in Overboard?",
"answ":"CLOSET",
"answ3":"A CLOSET",
"answ2":"A closet.",
},
{
"cat":"70s",
"ques":"Who played mountain man Jeremiah Johnson in the 1970s western of the same name?",
"answ":"ROBERT REDFORD",
"answ2":"Robert Redford.",
},
{
"cat":"Modern Classics",
"ques":"Who played Ellis Boyd 'Red' Redding in The Shawshank Redemption?",
"answ":"MORGAN FREEMAN",
"answ2":"Morgan Freeman.",
},
{
"cat":"Biopics",
"ques":"In the 1986 biopic Sid and Nancy, who plays Sid Vicious?",
"answ":"GARY OLDMAN",
"answ2":"Gary Oldman.",
},
{
"cat":"Clint Eastwood",
"ques":"Clint Eastwood directed this 2018 biographical drama, and also cast the real-life heroes as themselves in the film.",
"answ":"THE 15 17 TO PARIS",
"answ3":"15 17 TO PARIS",
"answ2":"The 15:17 to Paris.",
},
{
"cat":"Kate Winslet",
"ques":"In Eternal Sunshine of the Spotless Mind, who plays Mary Sveno, the Lacuna receptionist who has a crush on Dr. Howard who runs the company?",
"answ":"KIRSTEN DUNST",
"answ3":"KRISTEN DUNST",
"answ2":"Kirsten Dunst.",
},
{
"cat":"Action/Adventure",
"ques":"What MCU director directed 1995's Jumanji?",
"answ":"JOE JOHNSTON",
"answ2":"Joe Johnston.",
},
{
"cat":"Horror",
"ques":"In Hereditary, who plays Peter Graham, Annie and Steve's teenage son?",
"answ":"ALEX WOLFF",
"answ3":"ALEX WOLF",
"answ2":"Alex Wolff.",
},
{
"cat":"War",
"ques":"Who plays a cook, Petty Officer Second Class Dorie Miller, in Michael Bay's Pearl Harbor?",
"answ":"CUBA GOODING JR",
"answ3":"CUBA GOODING JUNIOR",
"answ2":"Cuba Gooding Jr.",
},
{
"cat":"2010s",
"ques":"Dwayne Johnson played Lt. Mitch Buchannon in this 2017 comedy.",
"answ":"BAYWATCH",
"answ2":"Baywatch.",
},
{
"cat":"Pixar",
"ques":"Who voices Carl Fredricksen in Up?",
"answ":"ED ASNER",
"answ2":"Ed Asner.",
},
{
"cat":"Directors",
"ques":"Who directed the 2018 film Tully?",
"answ":"JASON REITMAN",
"answ2":"Jason Reitman.",
},
{
"cat":"2010s",
"ques":"Who plays servant Abigail in 2018's The Favourite?",
"answ":"EMMA STONE",
"answ2":"Emma Stone.",
},
{
"cat":"Matt & Ben",
"ques":"Who was Matt Damon's co-lead in The Adjustment Bureau?",
"answ":"EMILY BLUNT",
"answ2":"Emily Blunt.",
},
{
"cat":"Comic Book Movies",
"ques":"In Justice League, Steppenwolf retrieves the second of the three mother boxes from which location?",
"answ":"ATLANTIS",
"answ2":"Atlantis.",
},
{
"cat":"Scores and Soundtracks",
"ques":"Alan Silvestri composed the score for The Avengers, Infinity War, Endgame and what other MCU film?",
"answ":"CAPTAIN AMERICA THE FIRST AVENGER",
"answ3":"THE FIRST AVENGER",
"answ2":"Captain America: The First Avenger.",
},
{
"cat":"Steven Spielberg",
"ques":"Who starred as Ar3mis/Samanta in Ready Player One?",
"answ":"OLIVIA COOKE",
"answ3":"OLIVIA COOK",
"answ2":"Olivia Cooke.",
},
{
"cat":"Romance",
"ques":"What 90s romantic dramedy stars Taye Diggs, Nia Long and Terrence Howard?",
"answ":"THE BEST MAN",
"answ3":"BEST MAN",
"answ2":"The Best Man.",
},
{
"cat":"Oscar Movies",
"ques":"Don Cheadle has received his only acting Oscar nomination for his role in what film?",
"answ":"HOTEL RWANDA",
"answ2":"Hotel Rwanda.",
},
{
"cat":"Angela Bassett",
"ques":"Angela Bassett plays the Director of what federal agency in Olympus Has Fallen?",
"answ":"SECRET SERVICE",
"answ3":"THE SECRET SERVICE",
"answ2":"Secret Service.",
},
{
"cat":"James Bond",
"ques":"Which James Bond movie was released first: Diamonds Are Forever, Thunderball, or You Only Live Twice?",
"answ":"THUNDERBALL",
"answ2":"Thunderball.",
},
{
"cat":"Ridley Scott",
"ques":"Name the 2001 film with the following actors: Julianne Moore, Gary Oldman and Ray Liotta.",
"answ":"HANNIBAL",
"answ2":"Hannibal.",
},
{
"cat":"90s",
"ques":"In the 1994 remake of Miracle of 34th Street, who plays Kris Kringle aka Santa Claus?",
"answ":"RICHARD ATTENBOROUGH",
"answ2":"Richard Attenborough.",
},
{
"cat":"Stanley Kubrick",
"ques":"In what Kubrick film does Kirk Douglas play a French Colonel during World War II?",
"answ":"PATHS OF GLORY",
"answ2":"Paths of Glory.",
},
{
"cat":"Biopics",
"ques":"In Oliver Stone's biopic W., who played First Lady Laura Bush?",
"answ":"ELIZABETH BANKS",
"answ3":"ELISABETH BANKS",
"answ2":"Elizabeth Banks.",
},
{
"cat":"2010s",
"ques":"Who directed 2012's Les Miserables?",
"answ":"TOM HOOPER",
"answ2":"Tom Hooper.",
},
{
"cat":"Will Smith",
"ques":"Will Smith plays a lawyer named Robert Clayton Dean in what film?",
"answ":"ENEMY OF THE STATE",
"answ2":"Enemy of the State.",
},
{
"cat":"Sandra Bullock",
"ques":"In Ocean's 8, what is Debbie's relationship to Danny?",
"answ":"SISTER",
"answ3":"HIS SISTER",
"answ2":"Sister.",
},
{
"cat":"Movie Quotes",
"ques":"In what 2000s sports film will you hear the exchange: 'Left Side!... Strong Side!'?",
"answ":"REMEMBER THE TITANS",
"answ2":"Remember the Titans.",
},
{
"cat":"Westerns",
"ques":"In the film Young Guns, who has the role of Doc Scurlock?",
"answ":"KIEFER SUTHERLAND",
"answ2":"Kiefer Sutherland.",
},
{
"cat":"2010s",
"ques":"In Zero Dark Thirty, who plays CIA analyst Maya, who is tasked with finding Osama Bin Laden?",
"answ":"JESSICA CHASTAIN",
"answ2":"Jessica Chastain.",
},
{
"cat":"Sports",
"ques":"In Talladega Nights: The Ballad of Ricky Bobby, what repeated phrase do Ricky and Cal like to say to describe their teamwork on the racetrack?",
"answ":"SHAKE AND BAKE",
"answ3":"SHAKE 'N BAKE",
"answ2":"Shake and Bake.",
},
{
"cat":"Leonardo DiCaprio",
"ques":"Baz Luhrmann directed Leonardo DiCaprio in two films. Aside from The Great Gatsby, name the other film.",
"answ":"ROMEO + JULIET",
"answ3":"ROMEO AND JULIET",
"answ2":"Romeo + Juliet.",
},
{
"cat":"Dramas",
"ques":"Emily Blunt starred as the English queen in this 2009 Jean-Marc Vallee period drama.",
"answ":"THE YOUNG VICTORIA",
"answ3":"YOUNG VICTORIA",
"answ2":"The Young Victoria.",
},
{
"cat":"Disaster Films",
"ques":"Who directed Dwayne Johnson in 2016's San Andreas?",
"answ":"BRAD PEYTON",
"answ2":"Brad Peyton.",
},
{
"cat":"80s",
"ques":"In Spaceballs what does the bumper sticker say on the back of Lonestar's ship?",
"answ":"I LOVE URANUS",
"answ2":"I Love Uranus.",
},
{
"cat":"Movie Release Dates",
"ques":"Bill & Ted went on their first Excellent Adventure in what year?",
"answ":"1989",
"answ2":"1989.",
},
{
"cat":"Tom Cruise",
"ques":"In Jerry Maguire, who plays superstar quarterback prospect Frank 'Cush' Cushman who signs with a rival agent?",
"answ":"JERRY O'CONNELL",
"answ3":"JERRY O'CONNOLL",
"answ2":"Jerry O'Connell.",
},
{
"cat":"Jim Henson",
"ques":"This 1990 Jim Henson production was directed by Nicolas Roeg and starred Anjelica Huston.",
"answ":"THE WITCHES",
"answ2":"The Witches.",
},
{
"cat":"Classics",
"ques":"Shirley MacLaine and Jack Lemmon starred in this 1960 film, directed by Billy Wilder.",
"answ":"THE APARTMENT",
"answ2":"The Apartment.",
},
{
"cat":"Star Wars",
"ques":"At the end of The Phantom Menace, what one word does Boss Nass shout to the crowds in joy as he raises a glowing orb?",
"answ":"PEACE",
"answ2":"Peace.",
},
{
"cat":"Crime",
"ques":"What name does the group of magicians in 2013's Now You See Me call themselves?",
"answ":"THE FOUR HORSEMEN",
"answ3":"FOUR HORSEMEN",
"answ2":"The Four Horsemen.",
},
{
"cat":"Spy Movies",
"ques":"In Kingsman: The Golden Circle, the villainous Poppy had a couple of robotic pets. What kind of animals did the robots emulate?",
"answ":"DOGS",
"answ3":"DOG",
"answ2":"Dogs.",
},
{
"cat":"James Bond",
"ques":"Halle Berry appeared in which James Bond film?",
"answ":"DIE ANOTHER DAY",
"answ2":"Die Another Day.",
},
{
"cat":"Sly & Arnie",
"ques":"What year do Kyle Reese and The Terminator travel back from in The Terminator?",
"answ":"2029",
"answ2":"2029.",
},
{
"cat":"Scores and Soundtracks",
"ques":"Name the song by 'The Knack' that opens up Richard Linklater's Everybody Wants Some!.",
"answ":"MY SHARONA",
"answ2":"My Sharona.",
},
{
"cat":"Holiday Movies",
"ques":"In Bad Santa, what comedian plays security chief Gin Slagel?",
"answ":"BERNIA MAC",
"answ2":"Bernie Mac.",
},
{
"cat":"Meryl Streep",
"ques":"In Hope Springs, Meryl Streep plays a woman who is looking to reignite her marriage. Who plays her husband?",
"answ":"TOMMY LEE JONES",
"answ2":"Tommy Lee Jones.",
},
{
"cat":"Dramas",
"ques":"Which 90s drama features performances by Marisa Tomei, Anthony Hopkins, Mila Jovovich and Dan Aykroyd?",
"answ":"CHAPLIN",
"answ2":"Chaplin.",
},
{
"cat":"Animated",
"ques":"In what 2020 animated film will you find a monster known as the Manticore?",
"answ":"ONWARD",
"answ2":"Onward.",
},
{
"cat":"Comedies",
"ques":"You'll find the character of Amy Townsend working at S'nuff Magazine in what 2010s comedy?",
"answ":"TRAINWRECK",
"answ2":"Trainwreck.",
},
{
"cat":"90s",
"ques":"Which famous singer plays the drug addict deliquent Noel in the film Bringing Out the Dead?",
"answ":"MARC ANTHONY",
"answ3":"MARK ANTHONY",
"answ2":"Marc Anthony.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Mel Gibson has played the character of Max Rockatansky in how many films?",
"answ":"3",
"answ3":"THREE",
"answ2":"3.",
},
{
"cat":"Quentin Tarantino",
"ques":"In Reservoir Dogs, what are the eight men trying to steal?",
"answ":"DIAMONDS",
"answ2":"Diamonds.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Ruper Wyatt directed this 2019 film about a dystopian Chicago future.",
"answ":"CAPTIVE STATE",
"answ2":"Captive State.",
},
{
"cat":"Action/Adventure",
"ques":"What action franchise features an installment with the subtitle Evolution?",
"answ":"UNDERWORLD",
"answ2":"Underworld.",
},
{
"cat":"Movie Release Dates",
"ques":"In what year were the films Do the Right Thing and Indiana Jones and the Last Crusade released?",
"answ":"1989",
"answ2":"1989.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actor appears in the films August Osage Country, Beauty and the Beast and Beginners?",
"answ":"EWAN MCGREGOR",
"answ2":"Ewan McGregor.",
},
{
"cat":"Dramas",
"ques":"What is the title of the sequel to Trainspotting?",
"answ":"T2 TRAINSPOTTING",
"answ2":"T2 Trainspotting.",
},
{
"cat":"Julia Roberts",
"ques":"Julia Roberts won her Oscar for what film?",
"answ":"ERIN BROCKOVICH",
"answ3":"ERIN BROKOVICH",
"answ2":"Erin Brockovich.",
},
{
"cat":"Directors",
"ques":"Who directed the film Zero Dark Thirty?",
"answ":"KATHRYN BIGELOW",
"answ2":"Kathryn Bigelow.",
},
{
"cat":"2000s",
"ques":"In Pirates of the Caribbean: The Curse of the Black Pearl, what reveals the pirates' cursed skeletal forms?",
"answ":"MOONLIGHT",
"answ3":"MOON",
"answ2":"Moonlight.",
},
{
"cat":"Eddie Murphy",
"ques":"In what film does Eddie Murphy play a social worker destined to save a young boy with mystical abilities?",
"answ":"THE GOLDEN CHILD",
"answ3":"GOLDEN CHILD",
"answ2":"The Golden Child.",
},
{
"cat":"80s",
"ques":"In The Princess Bride, how old did Inigo Montoya say he was when the six-fingered man killed his father?",
"answ":"11",
"answ3":"ELEVEN",
"answ2":"11.",
},
{
"cat":"Martin Scorsese",
"ques":"Name one of the two Scorsese films that have featured Ben Kingsley.",
"answ":"SHUTTER ISLAND",
"answ3":"HUGO",
"answ2":"Hugo/Shutter Island.",
},
{
"cat":"Julia Roberts",
"ques":"Julia Roberts starred opposite Campbell Scott in this 1991 drama about a live-in care aide who falls in love with her sick boss.",
"answ":"DYING YOUNG",
"answ2":"Dying Young.",
},
{
"cat":"Comedies",
"ques":"You'll find the characters of President Skroob, Dark Helmet and Lone Starr in what film?",
"answ":"SPACEBALLS",
"answ2":"Spaceballs.",
},
{
"cat":"Action/Adventure",
"ques":"In what film will you find characters named Bodhi, Angelo Pappas and Tyler Endicott?",
"answ":"POINT BREAK",
"answ2":"Point Break.",
},
{
"cat":"David Fincher",
"ques":"David Fincher directed this 2002 thriller starring Jodie Foster and Kristen Stewart.",
"answ":"PANIC ROOM",
"answ2":"Panic Room.",
},
{
"cat":"Monster Movies",
"ques":"Who played the character Burt Gummer in 1990's Tremors?",
"answ":"MICHAEL GROSS",
"answ2":"Michael Gross.",
},
{
"cat":"80s",
"ques":"Who plays Miracle Max in The Princess Bride?",
"answ":"BILLY CRYSTAL",
"answ2":"Billy Crystal.",
},
{
"cat":"Action/Adventure",
"ques":"Who plays villainous Dick Jones in 1987's RoboCop?",
"answ":"RONNY COX",
"answ3":"RONNIE COX",
"answ2":"Ronny Cox.",
},
{
"cat":"Disney",
"ques":"Which Disney Princess was voiced by Jodi Benson?",
"answ":"ARIEL",
"answ3":"LITTLE MERMAID",
"answ2":"Ariel.",
},
{
"cat":"Horror",
"ques":"Who directed the 1997 sci-fi horror film Mimic?",
"answ":"GUILLERMO DEL TORO",
"answ3":"GUILERMO DEL TORO",
"answ2":"Guillermo del Toro.",
},
{
"cat":"Oscar Movies",
"ques":"The Coen Brothers won their first Adapted Screenplay Oscar for which film?",
"answ":"NO COUNTRY FOR OLD MEN",
"answ2":"No Country For Old Men.",
},
{
"cat":"Modern Classics",
"ques":"Samuel L. Jackson played the character of Carl Lee Hailey in what 1996 legal thriller?",
"answ":"A TIME TO KILL",
"answ2":"A Time to Kill.",
},
{
"cat":"Mystery",
"ques":"What is the first name of Mrs. Bates in Psycho?",
"answ":"NORMA",
"answ2":"Norma.",
},
{
"cat":"70s",
"ques":"Name one of the two lead actors in the 1973 drama Scarecrow.",
"answ":"AL PACINO",
"answ3":"GENE HACKMAN",
"answ2":"Al Pacino/Gene Hackman.",
},
{
"cat":"Coming of Age",
"ques":"In Almost Famous, who plays the Stillwater's groupie by the name of Polexia Aphrodisia?",
"answ":"ANNA PAQUIN",
"answ2":"Anna Paquin.",
},
{
"cat":"Ron Howard",
"ques":"What is the name of Daryl Hannah's mermaid character in Splash?",
"answ":"MADISON",
"answ3":"MADDISON",
"answ2":"Madison.",
},
{
"cat":"Thrillers",
"ques":"In The Purge, the government sanctions a time period of how many hours in which all crime will be legal?",
"answ":"12",
"answ3":"TWELVE",
"answ2":"12.",
},
{
"cat":"Spike Lee",
"ques":"The events of BlacKkKlansman are set in what mountain town?",
"answ":"COLORADO SPRINGS",
"answ2":"Colorado Springs.",
},
{
"cat":"Cate Blanchett",
"ques":"Cate Blanchett played nightclub owner and con-artist Lou Miller in this 2018 film.",
"answ":"OCEAN'S 8",
"answ3":"OCEANS 8",
"answ2":"Ocean's 8.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who starred as pilot Hoban 'Wash' Washburn in Serenity?",
"answ":"ALAN TUDYK",
"answ2":"Alan Tudyk.",
},
{
"cat":"Comic Book Movies",
"ques":"In the MCU, Darren Cross eventually becomes which supervillain?",
"answ":"YELLOWJACKET",
"answ2":"Yellowjacket.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"What 1986 movie did Harrison Ford star in opposite of Helen Mirren?",
"answ":"THE MOSQUITO COAST",
"answ3":"MOSQUITO COAST",
"answ2":"The Mosquito Coast.",
},
{
"cat":"Comedies",
"ques":"Who is the main star of the family comedy Are We There Yet?",
"answ":"ICE CUBE",
"answ2":"Ice Cube.",
},
{
"cat":"Tim Burton",
"ques":"In The Night Before Christmas, what is the name of the rag doll character who is hopelessly in love with Jack Skellington?",
"answ":"SALLY",
"answ2":"Sally.",
},
{
"cat":"Modern Classics",
"ques":"In 1993's Jurassic Park, what is the name of the industrialist who creates Jurassic Park?",
"answ":"JOHN HAMMOND",
"answ2":"John Hammond.",
},
{
"cat":"War",
"ques":"What 1970 war film is about a group of US soldiers who sneak across enemy lines to steal a secret stash of Nazi treasure?",
"answ":"KELLY'S HEROES",
"answ2":"Kelly's Heroes.",
},
{
"cat":"Denzel Washington",
"ques":"Antwone Fisher served in what branch of the US military?",
"answ":"NAVY",
"answ3":"US NAVY",
"answ2":"Navy.",
},
{
"cat":"Rom-coms",
"ques":"Who plays Stella's best friend Delilah, in How Stella Got Her Groove Back?",
"answ":"WHOOPI GOLDBERG",
"answ3":"WOOPI GOLDBERG",
"answ2":"Whoopi Goldberg.",
},
{
"cat":"Brad Pitt",
"ques":"Brad Pitt starred as Detective Frank Harris, opposite an animated Kim Basinger in this 90s live-action/animation hybrid.",
"answ":"COOL WORLD",
"answ3":"COOLWORLD",
"answ2":"Cool World.",
},
{
"cat":"Natalie Portman",
"ques":"Natalie Portman portrayed an American historical figure in which 2016 biopic?",
"answ":"JACKIE",
"answ2":"Jackie.",
},
{
"cat":"Animated",
"ques":"Who voices Wilson Fisk, aka The Kingpin, in Spider-Man: Into the Spider Verse?",
"answ":"LIEV SCHREIBER",
"answ2":"Liev Schreiber.",
},
{
"cat":"90s",
"ques":"What 90s comedy features a topless psychic with a 3rd nipple?",
"answ":"MALLRATS",
"answ2":"Mallrats.",
},
{
"cat":"Festival Darlings",
"ques":"What 2018 film was shot entirely on the iPhone 7 Plus?",
"answ":"UNSANE",
"answ2":"Unsane.",
},
{
"cat":"Action/Adventure",
"ques":"In Jurassic World: Fallen Kingdom, who plays Benjamin Lockwood?",
"answ":"JAMES CROMWELL",
"answ2":"James Cromwell.",
},
{
"cat":"Dramas",
"ques":"Which future 007 appears opposite Peter O'Toole and Katharine Hepburn in the 1968 historical drama The Lion in Winter?",
"answ":"TIMOTHY DALTON",
"answ2":"Timothy Dalton.",
},
{
"cat":"Spike Lee",
"ques":"As of 2020, how many Oscar nominations does Spike Lee have?",
"answ":"5",
"answ3":"FIVE",
"answ2":"5.",
},
{
"cat":"Pixar",
"ques":"In the Toy Story franchise, what is the name of the sworn enemy of the Galactic Alliance?",
"answ":"ZURG",
"answ2":"Zurg.",
},
{
"cat":"Kurt Russell",
"ques":"In Tombstone, name 1 of the 2 actors that played brothers to Kurt Russell's Wyatt Earp.",
"answ":"SAM ELLIOTT",
"answ3":"BILL PAXTON",
"answ2":"Sam Elliott/Bill Paxton.",
},
{
"cat":"Romance",
"ques":"In 2018's Second Act, who plays Maya's friend Joan?",
"answ":"LEAH REMINI",
"answ3":"LEA REMINI",
"answ2":"Leah Remini.",
},
{
"cat":"80s",
"ques":"What is the nickname of Bill Nunn's boombox toting character in 1989's Do The Right Thing?",
"answ":"RADIO RAHEEM",
"answ2":"Radio Raheem.",
},
{
"cat":"Scores and Soundtracks",
"ques":"Who composed the score for Tim Burton's Alice in Wonderland?",
"answ":"DANNY ELFMAN",
"answ2":"Danny Elfman.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In 2007's Enchanted, who played the evil queen and witch, Narissa?",
"answ":"SUSAN SARANDON",
"answ2":"Susan Sarandon.",
},
{
"cat":"Star Trek",
"ques":"In the Star Trek Next Generation film series what was the fourth film that was released?",
"answ":"STAR TREK NEMESIS",
"answ3":"NEMESIS",
"answ2":"Star Trek Nemesis.",
},
{
"cat":"Nicole Kidman",
"ques":"Which 2005 Nicole Kidman film was directed by Nora Ephron?",
"answ":"BEWITCHED",
"answ2":"Bewitched.",
},
{
"cat":"Disaster Movies",
"ques":"Who played U.S. President Andrew Palma in the 2017 film Geostorm?",
"answ":"ANDY GARCIA",
"answ2":"Andy Garcia.",
},
{
"cat":"Quentin Tarantino",
"ques":"In Inglorious Basterds, what is the nickname of Eli Roth's character?",
"answ":"BEAR JEW",
"answ3":"THE BEAR JEW",
"answ2":"Bear Jew.",
},
{
"cat":"Angela Bassett",
"ques":"Stella travels where to get her 'groove' back in How Stella Got Her Groove Back?",
"answ":"JAMAICA",
"answ2":"Jamaica.",
},
{
"cat":"2000s",
"ques":"In Harold & Kumar Go To White Castle, Goldstein & Rosenberg stay home to watch what movie on HBO?",
"answ":"THE GIFT",
"answ2":"The Gift.",
},
{
"cat":"Horror",
"ques":"What 1973 horror film follows a police sergeant sent to a Scottish island village to search for a missing girl whom the strange townsfolk claim never existed?",
"answ":"THE WICKER MAN",
"answ3":"WICKER MAN",
"answ2":"The Wicker Man.",
},
{
"cat":"Monster Movies",
"ques":"Who plays Corporal Ford in Overlord?",
"answ":"WYATT RUSSELL",
"answ3":"WYAT RUSSELL",
"answ2":"Wyatt Russell.",
},
{
"cat":"Kevin Smith",
"ques":"Who plays Chaka King, the director of the Bluntman and Chronic film, in Jay and Silent Bob Strike Back?",
"answ":"CHRIS ROCK",
"answ2":"Chris Rock.",
},
{
"cat":"Scarlett Johansson",
"ques":"Scarlett Johansson portrays a maid who models for a famous piece of art in what film?",
"answ":"GIRL WITH A PEARL EARRING",
"answ2":"Girl with a Pearl Earring.",
},
{
"cat":"Oscar Movies",
"ques":"Who won Best Director for directing 1982's Gandhi?",
"answ":"RICHARD ATTENBOROUGH",
"answ2":"Richard Attenborough.",
},
{
"cat":"Spy Movies",
"ques":"What is the subtitle of the second Austin Powers film?",
"answ":"THE SPY WHO SHAGGED ME",
"answ3":"SPY WHO SHAGGED ME",
"answ2":"The Spy Who Shagged Me.",
},
{
"cat":"Tom Hanks",
"ques":"What is the first name of Michael Clarke Duncan's character in The Green Mile?",
"answ":"JOHN",
"answ2":"John.",
},
{
"cat":"Music films",
"ques":"Giovanni Ribisi plays Chad, the original drummer of a band who broke his arm forcing him to be replaced in what film?",
"answ":"THAT THING YOU DO",
"answ2":"That Thing You Do.",
},
{
"cat":"Directors",
"ques":"Clint Eastwood has directed Laurence Fisburne twice. Name one of the films.",
"answ":"THE MULE",
"answ3":"MYSTIC RIVER",
"answ2":"The Mule/Mystic River.",
},
{
"cat":"70s",
"ques":"Who played John Shaft in the 1971 action crime-thriller Shaft?",
"answ":"RICHARD ROUNDTREE",
"answ2":"Richard Roundtree.",
},
{
"cat":"Disney",
"ques":"In The Lion King, what was Simba's mother's name?",
"answ":"SARABI",
"answ2":"Sarabi.",
},
{
"cat":"2010s",
"ques":"Dwayne Johnson played the character Robbie Wheirdicht aka Bob Stone in this 2016 film.",
"answ":"CENTRAL INTELLIGENCE",
"answ2":"Central Intelligence.",
},
{
"cat":"Movie Quotes",
"ques":"In which Pixar film will you hear the quote: 'I don't believe that man has ever been to medical school.'?",
"answ":"TOY STORY",
"answ2":"Toy Story.",
},
{
"cat":"Rom-coms",
"ques":"Who played Olive Penderghast in 2010's Easy A?",
"answ":"EMMA STONE",
"answ2":"Emma Stone.",
},
{
"cat":"Comic Book Movies",
"ques":"This actor played Dr. Edward Bailey, a brilliant physicist assigned to an asylum for the criminally insane in Red 2.",
"answ":"ANTHONY HOPKINS",
"answ2":"Anthony Hopkins.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What film starring John Boyega is about a teen gang in South London that defends their home from an alien invasion?",
"answ":"ATTACK THE BLOCK",
"answ2":"Attack the Block.",
},
{
"cat":"Stanley Kubrick",
"ques":"In 2001: A Space Odyssey, the spacecraft Discovery One is headed to what planet?",
"answ":"JUPITER",
"answ2":"Jupiter.",
},
{
"cat":"90s",
"ques":"Which Academy Award winner plays Barbara Fitts, mother to Ricki Fitts, in American Beauty?",
"answ":"ALLISON JANNEY",
"answ3":"ALISON JANNEY",
"answ2":"Allison Janney.",
},
{
"cat":"Action/Adventure",
"ques":"Who plays adult Black Dynamite in the 2009 action comedy Black Dynamite?",
"answ":"MICHAEL JAI WHITE",
"answ2":"Michael Jai White.",
},
{
"cat":"Horror",
"ques":"Who directed 1983's Videodrome?",
"answ":"DAVID CRONENBERG",
"answ3":"DAVID KRONENBERG",
"answ2":"David Cronenberg.",
},
{
"cat":"Comedies",
"ques":"What film stars Gene Wilder, Teri Garr and Madeline Kahn?",
"answ":"YOUNG FRANKENSTEIN",
"answ2":"Young Frankenstein.",
},
{
"cat":"Quentin Tarantino",
"ques":"Minnie is the name of the woman who owns the Haberdashery in what film?",
"answ":"THE HATEFUL EIGHT",
"answ3":"HATEFUL EIGHT",
"answ2":"The Hateful Eight.",
},
{
"cat":"Biopics",
"ques":"What biopic did Martin Scorsese direct in 1980?",
"answ":"RAGING BULL",
"answ2":"Raging Bull.",
},
{
"cat":"2000s",
"ques":"Who directed the 2008 film Hunger starring Michael Fassbender?",
"answ":"STEVE MCQUEEN",
"answ2":"Steve McQueen.",
},
{
"cat":"Animated",
"ques":"In 1951's Alice and Wonderland, the queen orders the playing cards to paint the roses what color?",
"answ":"RED",
"answ2":"Red.",
},
{
"cat":"80s",
"ques":"Bill and Ted use what snack to lure Genghis Khan into their time machine in Bill and Ted's Excellent Adventure?",
"answ":"TWINKIE",
"answ3":"TWINKY",
"answ2":"Twinkie.",
},
{
"cat":"War",
"ques":"Fred Zinnemann directed Burt Lancaster, Montgomery Clift and Deborah Kerr in what 1950s World War II film?",
"answ":"FROM HERE TO ETERNITY",
"answ2":"From Here to Eternity.",
},
{
"cat":"Rom-coms",
"ques":"Who stars opposite Jennifer Garner as grown up 'Matt' in the 2004 film 13 Going On 30?",
"answ":"MARK RUFFALO",
"answ2":"Mark Ruffalo.",
},
{
"cat":"Disaster Movies",
"ques":"World War Z stars Brad Pitt as a former UN investigator fighting off what sort of monster?",
"answ":"ZOMBIE",
"answ3":"ZOMBIES",
"answ2":"Zombie.",
},
{
"cat":"Scores and Soundtracks",
"ques":"What composer did the scores from the following movies: Thor, Rise of the Planet of the Apes and Brave?",
"answ":"PATRICK DOYLE",
"answ2":"Patrick Doyle.",
},
{
"cat":"John Carpenter",
"ques":"Who played Dr. Sam Loomis in 1978's Halloween?",
"answ":"DONALD PLEASANCE",
"answ3":"DONALD PLEASENCE",
"answ2":"Donald Pleasance.",
},
{
"cat":"Steven Spielberg",
"ques":"What color of ball indicates a premeditated murder in Minority Report?",
"answ":"RED",
"answ2":"Red.",
},
{
"cat":"Oscar Movies",
"ques":"For the 2000 Academy Awards, Steven Soderbergh received Best Director nominations for 2 different movies. Name one of them.",
"answ":"TRAFFIC",
"answ3":"ERIN BROCKOVICH",
"answ2":"Traffic/Erin Brockovich.",
},
{
"cat":"Mystery",
"ques":"What 1988 mystery thriller stars Harrison Ford as a jet-lagged man in Paris searching his missing wife?",
"answ":"FRANTIC",
"answ2":"Frantic.",
},
{
"cat":"Alfred Hitchcock",
"ques":"This actress played opposite Ray Milland in Hitchcock's Dial M for Murder.",
"answ":"GRACE KELLY",
"answ2":"Grace Kelly.",
},
{
"cat":"Stanley Kubrick",
"ques":"In Full Metal Jacket, what nickname is given to Vincent D'Onofrio's Private Lawrence?",
"answ":"GOMER PYLE",
"answ3":"PRIVATE PYLE",
"answ2":"Gomer Pyle.",
},
{
"cat":"Tom Hanks",
"ques":"Tom Hanks starred in two films in 2013 where he portrayed a non-fictional person. Name one of them.",
"answ":"CAPTAIN PHILLIPS",
"answ3":"SAVING MR BANKS",
"answ2":"Captain Phillips/Saving Mr. Banks.",
},
{
"cat":"Natalie Portman",
"ques":"Natalie Portman starred opposite Zach Braff and Peter Sarsgaard in this 2004 film.",
"answ":"GARDEN STATE",
"answ2":"Garden State.",
},
{
"cat":"Horror",
"ques":"Who played Lt. Vincent D'Agosta in the 1997 film The Relic?",
"answ":"TOM SIZEMORE",
"answ2":"Tom Sizemore.",
},
{
"cat":"Horror",
"ques":"In From Hell, Johnny Depp plays a police detective who investigates the murders of which famous serial killer?",
"answ":"JACK THE RIPPER",
"answ2":"Jack the Ripper.",
},
{
"cat":"Coming of Age",
"ques":"In Ferris Bueller's Day Off, what is the name of the Principal's assistant?",
"answ":"GRACE",
"answ2":"Grace.",
},
{
"cat":"Horror",
"ques":"Barry Cox, Helen Shivers, Ray Bronson are the protagonists from which movie",
"answ":"I KNOW WHAT YOU DID LAST SUMMER",
"answ2":"I Know What You Did Last Summer.",
},
{
"cat":"Horror",
"ques":"Who directed Land of the Dead?",
"answ":"GEORGE A ROMERO",
"answ2":"George A. Romero.",
},
{
"cat":"Horror",
"ques":"Who directed Prince of Darkness?",
"answ":"JOHN CARPENTER",
"answ2":"John Carpenter.",
},
{
"cat":"2010s",
"ques":"In Avengers: Infinity War, what movie does Peter Parker reference to Tony Stark before ejecting Ebony Maw out into space?",
"answ":"ALIENS",
"answ2":"Aliens.",
},
{
"cat":"Christopher Nolan",
"ques":"What film did Christopher Nolan direct before Batman Begins?",
"answ":"INSOMNIA",
"answ2":"Insomnia.",
},
{
"cat":"Dramas",
"ques":"Which superhero television actress played the love interest of Miles Teller in the film Whiplash?",
"answ":"MELISSA BENOIST",
"answ2":"Melissa Benoist.",
},
{
"cat":"Meryl Streep",
"ques":"How many Academy Awards has Meryl Streep won in her career?",
"answ":"3",
"answ3":"THREE",
"answ2":"3.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who plays Minister Mason, Minister Wilford's right hand in 2013's Snowpiercer?",
"answ":"TILDA SWINTON",
"answ2":"Tilda Swinton.",
},
{
"cat":"Martin Scorsese",
"ques":"Who plays the lead psychiatrist Dr. John Cawley in Shutter Island?",
"answ":"BEN KINGSLEY",
"answ2":"Ben Kingsley.",
},
{
"cat":"Musicals",
"ques":"What 1967 musical was remade as an Eddie Murphy comedy in 1998?",
"answ":"DR DOLITTLE",
"answ3":"DOCTOR DOLITTLE",
"answ2":"Doctor Dolittle.",
},
{
"cat":"Festival Darlings",
"ques":"What 2013 film starring Daniel Radcliffe and Dane DeHaan, told the story of the great poets of the beat generation: Allen Ginsberg, William Burroughs and Jack Kerouac?",
"answ":"KILL YOUR DARLINGS",
"answ2":"Kill Your Darlings.",
},
{
"cat":"James Bond",
"ques":"What James Bond movie saw Javier Bardem as the main antagonist?",
"answ":"SKYFALL",
"answ2":"Skyfall.",
},
{
"cat":"Cate Blanchett",
"ques":"A 16 year old girl who was raised by her father to be the perfect assassin is being tracked by an intelligence agent played by Cate Blanchett in what film?",
"answ":"HANNA",
"answ2":"Hanna.",
},
{
"cat":"Monster Movies",
"ques":"Who played British Captain James Conrad in Kong: Skull Island?",
"answ":"TOM HIDDLESTON",
"answ2":"Tom Hiddleston.",
},
{
"cat":"Westerns",
"ques":"What is the name of the U.S. marshal played by both John Wayne and Jeff Bridges in their respective True Grit films?",
"answ":"ROOSTER COGBURN",
"answ2":"Rooster Cogburn.",
},
{
"cat":"Action/Adventure",
"ques":"Who plays cook and Petty Officer Second Class Dorie Miller in Michael Bay's Pearl Harbor?",
"answ":"CUBA GOODING JR",
"answ3":"CUBA GOODING JUNIOR",
"answ2":"Cuba Gooding Jr.",
},
{
"cat":"Sports",
"ques":"What movie directed by John Sayles, details the 1919 Chicago White Sox, or Black Sox, as they were called?",
"answ":"EIGHT MEN OUT",
"answ3":"8 MEN OUT",
"answ2":"Eight Men Out.",
},
{
"cat":"Holiday Movies",
"ques":"This holiday classic stars Bing Crosby, Danny Kaye, Vera-Ellen and Rosemary Clooney.",
"answ":"WHITE CHRISTMAS",
"answ2":"White Christmas.",
},
{
"cat":"Directors",
"ques":"Who directed the film Coming to America starring Eddie Murphy?",
"answ":"JOHN LANDIS",
"answ2":"John Landis.",
},
{
"cat":"Indiana Jones",
"ques":"In The Last Crusade, on his quest to find clues regarding the Grail's location, Indy enters a crypt by bursting through the floor of what kind of establishment?",
"answ":"LIBRARY",
"answ2":"Library.",
},
{
"cat":"Disney",
"ques":"According to Tigger, what is the 'world's most wonderful thing about Tiggers'?",
"answ":"THAT HE'S THE ONLY ONE",
"answ3":"HE'S THE ONLY ONE",
"answ2":"That he's the only one.",
},
{
"cat":"Matthew McConaughey",
"ques":"What film did Matthew McConaughey win his Oscar for?",
"answ":"DALLAS BUYERS CLUB",
"answ2":"Dallas Buyers Club.",
},
{
"cat":"Comedies",
"ques":"In Liar Liar, what was Carrey's last confession to the cop when he was asked if there was 'anything else' after being pulled over?",
"answ":"UNPAID PARKING TICKETS",
"answ3":"UNPAID PARKINGTICKETS",
"answ2":"Unpaid parking tickets.",
},
{
"cat":"Angelina Jolie",
"ques":"Angelina Jolie stars alongside Liev Schreiber and Chiwetel Ejiofor in what action thriller?",
"answ":"SALT",
"answ2":"Salt.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What was the subtitle of the third Narnia film?",
"answ":"VOYAGE OF THE DAWN TREADER",
"answ3":"THE VOYAGE OF THE DAWN TREADER",
"answ2":"The Voyage of the Dawn Treader.",
},
{
"cat":"David Fincher",
"ques":"In The Social Network, other than his name, company name and contact information what does Mark Zuckerberg have on his business card?",
"answ":"I'M CEO BITCH",
"answ3":"I AM CEO BITCH",
"answ2":"I'm CEO bitch.",
},
{
"cat":"Denzel Washington",
"ques":"In Roman J. Israel, Esq. what actor plays cut-throat attorney George Pierce?",
"answ":"COLIN FARRELL",
"answ2":"Colin Farrell.",
},
{
"cat":"90s",
"ques":"What 90s comedy features a topless psychic with a 3rd nipple?",
"answ":"MALLRATS",
"answ2":"Mallrats.",
},
{
"cat":"Crime",
"ques":"What legendary Hollywood director directed 1932's Scarface?",
"answ":"HOWARD HAWKS",
"answ2":"Howard Hawks.",
},
{
"cat":"2010s",
"ques":"What 2017 Steven Soderbergh film starred Channing Tatum, Adam Driver and Riley Keough?",
"answ":"LOGAN LUCKY",
"answ2":"Logan Lucky.",
},
{
"cat":"Tim Burton",
"ques":"Tim Burton directed Mark Wahlberg in what film?",
"answ":"PLANET OF THE APES",
"answ2":"Planet of the Apes.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"This Golden Age star was the first actress to win an Academy Award, a Golden Globe and a BAFTA Award for a single performance?",
"answ":"AUDREY HEPBURN",
"answ3":"AUDREY HEPBURNE",
"answ2":"Audrey Hepburn.",
},
{
"cat":"Movie Taglines",
"ques":"What 80s comedy had the tagline: 'A tale of murder, lust, greed, revenge and seafood.'?",
"answ":"A FISH CALLED WANDA",
"answ2":"A Fish Called Wanda.",
},
{
"cat":"Movie Release Dates",
"ques":"What year was Groundhog Day released?",
"answ":"1993",
"answ2":"1993.",
},
{
"cat":"Pixar",
"ques":"Who does the voice for the legendary adventurer Charles Muntz in the movie Up?",
"answ":"CHRISTOPHER PLUMMER",
"answ2":"Christopher Plummer.",
},
{
"cat":"Will Smith",
"ques":"In Men in Black, who plays Agent Zed, the head of M.I.B. and J & K's superior?",
"answ":"RIP TORN",
"answ2":"Rip Torn.",
},
{
"cat":"Charlize Theron",
"ques":"One of Charlize Theron's first roles was a supporting one in this music film, written and directed by Tom Hanks.",
"answ":"THAT THING YOU DO",
"answ2":"That Thing You Do!.",
},
{
"cat":"Sly & Arnie",
"ques":"Who plays the villainous T-1000 in Terminator 2?",
"answ":"ROBERT PATRICK",
"answ2":"Robert Patrick.",
},
{
"cat":"Movie Characters",
"ques":"Who played the iconic character of Inspector Jacques Clouseau in 1963's The Pink Panther",
"answ":"PETER SELLERS",
"answ2":"Peter Sellers.",
},
{
"cat":"Romance",
"ques":"Harry Connick Jr. wooed this actress in the 1998 film Hope Floats.",
"answ":"SANDRA BULLOCK",
"answ2":"Sandra Bullock.",
},
{
"cat":"Thrillers",
"ques":"Who played Michael Douglas's patient that he must convince to help him get his daughter back in the action/thriller Don't Say A Word?",
"answ":"BRITTANY MURPHY",
"answ2":"Brittany Murphy.",
},
{
"cat":"Tom Cruise",
"ques":"Who plays the movie producer Les Grossman's right hand man in the movie Tropic Thunder?",
"answ":"BILL HADER",
"answ2":"Bill Hader.",
},
{
"cat":"2010s",
"ques":"Who directed the 2016 The Nice Guys?",
"answ":"SHANE BLACK",
"answ2":"Shane Black.",
},
{
"cat":"Kevin Smith",
"ques":"Kevin Smith starred opposite Jennifer Garner and Timothy Olyphant in this 2007 rom-com about a woman who seeks comfort in his friends when her fiance dies.",
"answ":"CATCH AND RELEASE",
"answ2":"Catch and Release.",
},
{
"cat":"Martin Scorsese",
"ques":"Who played the Station Inspector in Hugo?",
"answ":"SACHA BARON COHEN",
"answ3":"SASHA BARON COHEN",
"answ2":"Sacha Baron Cohen.",
},
{
"cat":"Horror",
"ques":"Alison Lohman and Justin Long star in what Sam Raimi film about a loan officer who finds herself as the recipient of a supernatural curse?",
"answ":"DRAG ME TO HELL",
"answ2":"Drag Me to Hell.",
},
{
"cat":"Julia Roberts",
"ques":"In the movie Pretty Woman, what toiletry item does Richard Gere's character mistake for cocaine?",
"answ":"DENTAL FLOSS",
"answ2":"Dental floss.",
},
{
"cat":"Spy Movies",
"ques":"In the spy-comedy Undercover Brother who played the assassin named White She-Devil?",
"answ":"DENISE RICHARDS",
"answ2":"Denise Richards.",
},
{
"cat":"70s",
"ques":"Who plays Jack Nicholson's co-lead Evelyn Cross Mulwray in Chinatown?",
"answ":"FAYE DUNAWAY",
"answ3":"FAY DUNAWAY",
"answ2":"Faye Dunaway.",
},
{
"cat":"Scores and Soundtracks",
"ques":"Who wrote and performed the title song for the 1985 movie Spies Like Us?",
"answ":"PAUL MCCARTNEY",
"answ3":"PAUL MCCARTNY",
"answ2":"Paul McCartney.",
},
{
"cat":"Robin Williams",
"ques":"Robin Williams starred opposite Cuba Gooding Jr. in this 1998 Academy Award winning drama.",
"answ":"WHAT DREAMS MAY COME",
"answ2":"What Dreams May Come.",
},
{
"cat":"Ron Howard",
"ques":"Who played the dual roles of Lt. Stephen 'Bull' McCaffrey and Capt. Dennis McCaffrey in the 1991 film Backdraft?",
"answ":"KURT RUSSELL",
"answ3":"KURT RUSELL",
"answ2":"Kurt Russell.",
},
{
"cat":"Rom-coms",
"ques":"Reese Witherspoon, Mark Ruffalo and Jon Heder starred in this 2005 romantic comedy.",
"answ":"JUST LIKE HEAVEN",
"answ2":"Just Like Heaven.",
},
{
"cat":"Directors",
"ques":"Who directed the 1966 version of Ray Bradbury's Fahrenheit 451?",
"answ":"FRANCOIS TRUFFAUT",
"answ3":"FRANÇOIS TRUFFAUT",
"answ2":"François Truffaut.",
},
{
"cat":"Comic Book Movies",
"ques":"Who plays Thor's mother in the MCU?",
"answ":"RENE RUSSO",
"answ2":"Rene Russo.",
},
{
"cat":"Sports",
"ques":"What actress plays Ricky Bobby's original wife in Talladega Nights: The Legend of Ricky Bobby?",
"answ":"LESLIE BIBB",
"answ2":"Leslie Bibb.",
},
{
"cat":"Kate Winslet",
"ques":"Who directed Kate Winslet and Josh Brolin in the movie Labor Day?",
"answ":"JASON REITMAN",
"answ2":"Jason Reitman.",
},
{
"cat":"Westerns",
"ques":"An aging group of outlaws look for one last big score as the 'traditional' American West is disappearing around them in what Sam Peckinpah western?",
"answ":"THE WILD BUNCH",
"answ2":"The Wild Bunch.",
},
{
"cat":"Directors",
"ques":"Who directed 1999's Three Kings?",
"answ":"DAVID O RUSSELL",
"answ2":"David O. Russell.",
},
{
"cat":"Animated",
"ques":"Steve Carell voiced a squirrel named Hammy in what 2006 animated film?",
"answ":"OVER THE HEDGE",
"answ2":"Over the Hedge.",
},
{
"cat":"Directors",
"ques":"Who directed The Dilemma and In the Heart of the Sea?",
"answ":"RON HOWARD",
"answ2":"Ron Howard.",
},
{
"cat":"Oscar Movies",
"ques":"For what film did Sean Penn receive his first Best Actor nomination?",
"answ":"DEAD MAN WALKING",
"answ2":"Dead Man Walking.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actress appeared in the following films: Out of Sight, Being John Malkovich, The Interpreter, Capote?",
"answ":"CATHERINE KEENER",
"answ3":"KATHERINE KEENER",
"answ2":"Catherine Keener.",
},
{
"cat":"2000s",
"ques":"Joe Wright directed Robert Downey Jr. in what 2000s drama?",
"answ":"THE SOLOIST",
"answ2":"The Soloist.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the release of Gandhi and Tootsie?",
"answ":"1982",
"answ2":"1982.",
},
{
"cat":"Comedies",
"ques":"In Wanderlust, Paul Rudd stars opposite which actress as a married couple that end up in a Georgia commune?",
"answ":"JENNIFER ANISTON",
"answ2":"Jennifer Aniston.",
},
{
"cat":"Star Wars",
"ques":"In A New Hope, during the Battle of Yavin, what is Luke's call sign?",
"answ":"RED FIVE",
"answ3":"RED 5",
"answ2":"Red Five.",
},
{
"cat":"Nicole Kidman",
"ques":"What Baz Luhrmann film stars Nicole kidman and Ewan McGregor?",
"answ":"MOULIN ROUGE",
"answ2":"Moulin Rouge!.",
},
{
"cat":"Directors",
"ques":"Who directed the film Lady Bird?",
"answ":"GRETA GERWIG",
"answ2":"Greta Gerwig.",
},
{
"cat":"Movie Release Dates",
"ques":"The Ides of March and The Lincoln Lawyer both came out in what year?",
"answ":"2011",
"answ2":"2011.",
},
{
"cat":"Comedies",
"ques":"In Step Brothers, while Dale is giving Brennan a tour of the house, what is the one thing that Brennan is never allowed to touch?",
"answ":"DRUM SET",
"answ3":"DRUMS",
"answ2":"Drum set.",
},
{
"cat":"Directors",
"ques":"Jeff Nichols has directed five theatrical films that have all starred or featured which actor?",
"answ":"MICHAEL SHANNON",
"answ2":"Michael Shannon.",
},
{
"cat":"Adam Sandler",
"ques":"In I Now Pronounce You Chuck and Larry, Chuck and Larry have what profession?",
"answ":"FIREFIGHTERS",
"answ3":"FIREMEN",
"answ2":"Firefighters.",
},
{
"cat":"Oscar Movies",
"ques":"For what film did Kevin Costner receive his first Best Actor nomination?",
"answ":"DANCES WITH WOLVES",
"answ2":"Dances with Wolves.",
},
{
"cat":"Nicolas Cage",
"ques":"Who directed National Treasure?",
"answ":"JON TURTELTAUB",
"answ3":"JOHN TURTELTAUB",
"answ2":"Jon Turteltaub.",
},
{
"cat":"Movie Release Dates",
"ques":"In what year was The Da Vinci Code released?",
"answ":"2006",
"answ2":"2006.",
},
{
"cat":"2010s",
"ques":"Which actor plays easy-going Ned in the film Our Idiot Brother?",
"answ":"PAUL RUDD",
"answ2":"Paul Rudd.",
},
{
"cat":"Nicolas Cage",
"ques":"In Gone in 60 Seconds, what is the nickname give to the Ford Shelby GT500 that Nic Cage is trying to steal?",
"answ":"ELEANOR",
"answ2":"Eleanor.",
},
{
"cat":"Family Films",
"ques":"Which actor voices Boo Boo in the family film Yogi Bear?",
"answ":"JUSTIN TIMBERLAKE",
"answ2":"Justin Timberlake.",
},
{
"cat":"Family Films",
"ques":"Which actor voiced Yogi Bear in 2010's Yogi Bear?",
"answ":"DAN AYKROYD",
"answ3":"DAN AKROYD",
"answ2":"Dan Aykroyd.",
},
{
"cat":"Festival Darlings",
"ques":"In what film does Jessie Buckley play aspiring country singer Rose-Lynn?",
"answ":"WILD ROSE",
"answ2":"Wild Rose.",
},
{
"cat":"Oscar Movies",
"ques":"How many Oscars has Adam Driver been nominated for?",
"answ":"2",
"answ3":"TWO",
"answ2":"2.",
},
{
"cat":"2010s",
"ques":"Which 2013 film features performances from John Goodman, Justin Timberlake and Oscar Isaac?",
"answ":"INSIDE LLEWYN DAVIS",
"answ3":"INSIDE LEWYN DAVIS",
"answ2":"Inside Llewyn Davis.",
},
{
"cat":"Tom Cruise",
"ques":"What year did the first Mission: Impossible film come out?",
"answ":"1996",
"answ2":"1996.",
},
{
"cat":"Alfred Hitchcock",
"ques":"Alfred Hitchcock's Marnie was released in what year?",
"answ":"1964",
"answ2":"1964.",
},
{
"cat":"Brad Pitt",
"ques":"Brad Pitt had two movies come out in 1993, name one of them.",
"answ":"KALIFORNIA",
"answ3":"TRUE ROMANCE",
"answ2":"True Romance/Kalifornia.",
},
{
"cat":"Movie Release Dates",
"ques":"The remake of Total Recall with Colin Farrell was released in what year?",
"answ":"2012",
"answ2":"2012.",
},
{
"cat":"Audrey Hepburn",
"ques":"Roman Holiday starring Audrey Hepburn was released in what year",
"answ":"1953",
"answ2":"1953.",
},
{
"cat":"Jean-Claude Van Damme",
"ques":"Bloodsport was released in what year?",
"answ":"1988",
"answ2":"1988.",
},
{
"cat":"John Carpenter",
"ques":"Who played Starman in the film Starman?",
"answ":"JEFF BRIDGES",
"answ2":"Jeff Bridges.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What alias does Marty McFly use in the old west in Back to the Future Part III?",
"answ":"CLINT EASTWOOD",
"answ2":"Clint Eastwood.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What color is Leeloo's hair in The Fifth Element?",
"answ":"ORANGE",
"answ2":"Orange.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In Alien, what is the name of the ship?",
"answ":"NOSTROMO",
"answ3":"USCSS NOSTROMO",
"answ2":"Nostromo.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"The 1968 science fiction film Barbarella stars which actress in the title role?",
"answ":"JANE FONDA",
"answ2":"Jane Fonda.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which actor played the role of Sam Witwicky in the Transformers franchise?",
"answ":"SHIA LABEOUF",
"answ3":"SHIA LEBEOUF",
"answ2":"Shia LaBeouf.",
},
{
"cat":"Directors",
"ques":"Who directed the 2007 film Sunshine?",
"answ":"DANNY BOYLE",
"answ2":"Danny Boyle.",
},
{
"cat":"70s",
"ques":"François Truffaut appeared in this 1977 sci-fi film alongside Richard Dreyfuss and Teri Garr",
"answ":"CLOSE ENCOUNTERS OF THE THIRD KIND",
"answ3":"CLOSE ENCOUNTERS OF THE 3RD KIND",
"answ2":"Close Encounters of the Third Kind.",
},
{
"cat":"Robert De Niro",
"ques":"Robert De Niro, Jonathan Pryce, and Bob Hoskins all appear in this 1985 sci-fi satire.",
"answ":"BRAZIL",
"answ2":"Brazil.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which Lord of the Rings actor played Father Cornelius in The Fifth Element?",
"answ":"IAN HOLM",
"answ2":"Ian Holm.",
},
{
"cat":"90s",
"ques":"In what 1990 film did Dolph Lundgren fight an alien drug dealer?",
"answ":"I COME IN PEACE",
"answ2":"I Come In Peace.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"The character of Lt. Kara Wade was played by whom in the 2005 film Stealth?",
"answ":"JESSICA BIEL",
"answ2":"Jessica Biel.",
},
{
"cat":"Movie Release Dates",
"ques":"David Lynch's Dune was released in which year?",
"answ":"1984",
"answ2":"1984.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who played undercover cop Bob Arctor in the film A Scanner Darkly?",
"answ":"KEANU REEVES",
"answ2":"Keanu Reeves.",
},
{
"cat":"Directors",
"ques":"Who directed Alien 3?",
"answ":"DAVID FINCHER",
"answ2":"David Fincher.",
},
{
"cat":"Tim Burton",
"ques":"Tim Burton directed Glenn Close and Jack Nicholson in which 1996 film?",
"answ":"MARS ATTACKS",
"answ2":"Mars Attacks!.",
},
{
"cat":"80s",
"ques":"Who directed 1985's Enemy Mine?",
"answ":"WOLFGANG PETERSEN",
"answ2":"Wolfgang Petersen.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which rapper played the role of J-Bone in the film Johnny Mnemonic?",
"answ":"ICE T",
"answ2":"Ice-T.",
},
{
"cat":"Movie Quotes",
"ques":"What movie featured the line: 'You're gonna need a bigger boat'?",
"answ":"JAWS",
"answ2":"Jaws.",
},
{
"cat":"Musicals",
"ques":"Which famous pop star directed 1986's Under the Cherry Moon?",
"answ":"PRINCE",
"answ2":"Prince.",
},
{
"cat":"Family Films",
"ques":"In what 90s film did Looney Tunes animated characters and basketball star Michael Jordan appear together?",
"answ":"SPACE JAM",
"answ2":"Space Jam.",
},
{
"cat":"Tom Hanks",
"ques":"Tom Hanks won his second Oscar and earned his third Best Actor nomination for what movie?",
"answ":"FORREST GUMP",
"answ2":"Forrest Gump.",
},
{
"cat":"Oscar Movies",
"ques":"Who is the only woman to have won an Oscar for Best Director",
"answ":"KATHRYN BIGELOW",
"answ3":"KATHERINE BIGELOW",
"answ2":"Kathryn Bigelow.",
},
{
"cat":"2000s",
"ques":"In the 2003 film Shortcut to Happiness, who played the Devil?",
"answ":"JENNIFER LOVE HEWITT",
"answ2":"Jennifer Love Hewitt.",
},
{
"cat":"Action/Adventure",
"ques":"What is the name of Captain Barbossa's pet monkey in the Pirates of the Caribbean franchise?",
"answ":"JACK",
"answ2":"Jack.",
},
{
"cat":"Scores & Soundtracks",
"ques":"Which band was responsible for the Highlander soundtrack?",
"answ":"QUEEN",
"answ2":"Queen.",
},
{
"cat":"Movie Quotes",
"ques":"'After all, tomorrow is another day!' was the last line in which Best Picture winner?",
"answ":"GONE WITH THE WIND",
"answ2":"Gone With the Wind.",
},
{
"cat":"Movie Quotes",
"ques":"Which movie ends with this final line of dialogue: 'Why, she wouldn't even harm a fly'?",
"answ":"PSYCHO",
"answ2":"Psycho.",
},
{
"cat":"Alfred Hitchcock",
"ques":"What film released in 1976 was Alfred Hitchcock's last movie?",
"answ":"FAMILY PLOT",
"answ2":"Family Plot.",
},
{
"cat":"James Bond",
"ques":"What was the only James Bond film starring George Lazenby as the famed 007 agent?",
"answ":"ON HER MAJESTY'S SECRET SERVICE",
"answ2":"On Her Majesty's Secret Service.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"What was Elvis Presley's debut film?",
"answ":"LOVE ME TENDER",
"answ2":"Love Me Tender.",
},
{
"cat":"Movie Taglines",
"ques":"What sci-fi film had the tagline: 'In space, no one can hear you scream'?",
"answ":"ALIEN",
"answ2":"Alien.",
},
{
"cat":"Westerns",
"ques":"Who played 'The Bad' in The Good, the Bad, and the Ugly?",
"answ":"LEE VAN CLEEF",
"answ2":"Lee Van Cleef.",
},
{
"cat":"Dramas",
"ques":"Who played Andy Dufresne in The Shawshank Redemption?",
"answ":"TIM ROBBINS",
"answ2":"Tim Robbins.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which actor played the role of James Cole in Twelve Monkeys?",
"answ":"BRUCE WILLIS",
"answ2":"Bruce Willis.",
},
{
"cat":"Movie Quotes",
"ques":"What movie featured the quote: 'The funny thing is - on the outside, I was an honest man, straight as an arrow. I had to come to prison to be a crook.'",
"answ":"THE SHAWSHANK REDEMPTION",
"answ3":"SHAWSHANK REDEMPTION",
"answ2":"The Shawshank Redemption.",
},
{
"cat":"90s",
"ques":"An Arkansas waitress and a housewife shoot a rapist and take off in a '66 Thunderbird in which 90s film?",
"answ":"THELMA AND LOUISE",
"answ2":"Thelma & Louise.",
},
{
"cat":"Action/Adventure",
"ques":"Which actor plays the main character in Crank?",
"answ":"JASON STATHAM",
"answ2":"Jason Statham.",
},
{
"cat":"2000s",
"ques":"Who played John Triton in 2006's The Marine?",
"answ":"JOHN CENA",
"answ2":"John Cena.",
},
{
"cat":"Action/Adventure",
"ques":"Who played King Leonidas in Zack Snyder's 300?",
"answ":"GERARD BUTLER",
"answ2":"Gerard Butler.",
},
{
"cat":"80s",
"ques":"Who played Hans Gruber in Die Hard?",
"answ":"ALAN RICKMAN",
"answ2":"Alan Rickman.",
},
{
"cat":"Remakes and Reboots",
"ques":"What 1984 film directed by John Milius was remade in 2012?",
"answ":"RED DAWN",
"answ2":"Red Dawn.",
},
{
"cat":"90s",
"ques":"You'll find characters named Jack Traven, Howard Payne and Annie Porter in what 90s action film?",
"answ":"SPEED",
"answ2":"Speed.",
},
{
"cat":"2010s",
"ques":"Who plays the title character in the 2014 movie Noah?",
"answ":"RUSSELL CROWE",
"answ2":"Russell Crowe.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What actress plays the title character in 2005's Aeon Flux?",
"answ":"CHARLIZE THERON",
"answ2":"Charlize Theron.",
},
{
"cat":"Movie Quotes",
"ques":"What movie featured the line: 'I ain't got time to bleed'?",
"answ":"PREDATOR",
"answ2":"Predator.",
},
{
"cat":"Movie Quotes",
"ques":"What western featured the quote: 'Are you gonna do something? Or just stand there and bleed?'",
"answ":"TOMBSTONE",
"answ2":"Tombstone.",
},
{
"cat":"Movie Quotes",
"ques":"In what film will you find the quote: 'I will look for you, I will find you, and I will kill you.'?",
"answ":"TAKEN",
"answ2":"Taken.",
},
{
"cat":"War",
"ques":"Which actor played a role of Capt. Danny Walker in Pearl Harbor?",
"answ":"JOSH HARTNETT",
"answ2":"Josh Hartnett.",
},
{
"cat":"Directors",
"ques":"Who directed 2012's Battleship?",
"answ":"PETER BERG",
"answ2":"Peter Berg.",
},
{
"cat":"Sly & Arnie",
"ques":"Who directed Collateral Damage?",
"answ":"ANDREW DAVIS",
"answ2":"Andrew Davis.",
},
{
"cat":"Movie Release Dates",
"ques":"In what year was Johnny English released?",
"answ":"2003",
"answ2":"2003.",
},
{
"cat":"2000s",
"ques":"You'll find characters named Sonny Crockett and Rico Tubbs in what 2006 Michael Mann film?",
"answ":"MIAMI VICE",
"answ2":"Miami Vice.",
},
{
"cat":"2000s",
"ques":"Channing Tatum plays a young counterfeiter who is introduced to the world of underground street fighting in what 2009 film?",
"answ":"FIGHTING",
"answ2":"Fighting.",
},
{
"cat":"Movie Release Dates",
"ques":"Bad Company starring Anthony Hopkins and Chris Rock was released in what year?",
"answ":"2002",
"answ2":"2002.",
},
{
"cat":"Directors",
"ques":"Who directed Anthony Hopkins and Chris Rock in Bad Company?",
"answ":"JOEL SCHUMACHER",
"answ2":"Joel Schumacher.",
},
{
"cat":"Remakes and Reboots",
"ques":"What 1972 Sam Peckinpah action film was remade in 1994?",
"answ":"THE GETAWAY",
"answ2":"The Getaway.",
},
{
"cat":"Remakes and Reboots",
"ques":"What 1976 John Carpenter movie was remade in 2005?",
"answ":"ASSAULT ON PRECINCT 13",
"answ3":"ASSAULT ON PRECINCT THIRTEEN",
"answ2":"Assault on Precinct 13.",
},
{
"cat":"Action/Adventure",
"ques":"Who starred as John Hannibal Smith in 2010's The A Team?",
"answ":"LIAM NEESON",
"answ2":"Liam Neeson.",
},
{
"cat":"Rom-coms",
"ques":"Who starred as Gerard Butler's ex-wife Nicole in 2010's The Bounty Hunter?",
"answ":"JENNIFER ANISTON",
"answ2":"Jennifer Aniston.",
},
{
"cat":"Action/Adventure",
"ques":"Who starred as small-time criminal James Cullen in 2010's Faster?",
"answ":"DWAYNE JOHNSON",
"answ3":"THE ROCK",
"answ2":"Dwayne Johnson.",
},
{
"cat":"Thrillers",
"ques":"Who played mercenary Danny Bryce in the film Killer Elite?",
"answ":"JASON STATHAM",
"answ2":"Jason Statham.",
},
{
"cat":"Thrillers",
"ques":"In the film Safe House, who played veteran CIA operative Tobin Frost, who has allegedly betrayed the agency?",
"answ":"DENZEL WASHINGTON",
"answ2":"Denzel Washington.",
},
{
"cat":"Crime",
"ques":"Who plays Mafia boss Mickey Cohen in 2013's Gangster Squad?",
"answ":"SEAN PENN",
"answ2":"Sean Penn.",
},
{
"cat":"Thrillers",
"ques":"Who played experienced survival expert and former military instructor L.T. Bonham, in 2003's The Hunted?",
"answ":"TOMMY LEE JONES",
"answ2":"Tommy Lee Jones.",
},
{
"cat":"Action/Adventure",
"ques":"Which actress played Domino Harvey in the 2005 film Domino?",
"answ":"KEIRA KNIGHTLEY",
"answ2":"Keira Knightley.",
},
{
"cat":"2000s",
"ques":"In 2006's Firewall, who played security specialist Jack Stanfield, who is forced into robbing the bank that he's protecting?",
"answ":"HARRISON FORD",
"answ2":"Harrison Ford.",
},
{
"cat":"Remakes and Reboots",
"ques":"Who played Bodhi in the 2015 remake of Point Break?",
"answ":"EDGAR RAMIREZ",
"answ2":"Édgar Ramírez.",
},
{
"cat":"Westerns",
"ques":"The 1960 western The Alamo was the was the directorial debut of what famous actor?",
"answ":"JOHN WAYNE",
"answ2":"John Wayne.",
},
{
"cat":"Westerns",
"ques":"Who played young cowboy John Grady Cole opposite Penélope Cruz in 2000's All the Pretty Horses?",
"answ":"MATT DAMON",
"answ2":"Matt Damon.",
},
{
"cat":"Westerns",
"ques":"What Oscar-nominated actor directed the romantic western All the Pretty Horses?",
"answ":"BILLY BOB THORNTON",
"answ2":"Billy Bob Thornton.",
},
{
"cat":"Westerns",
"ques":"What actor played the titular character in 1980's Bronco Billy?",
"answ":"CLINT EASTWOOD",
"answ2":"Clint Eastwood.",
},
{
"cat":"Westerns",
"ques":"Who directed the film Bronco Billy?",
"answ":"CLINT EASTWOOD",
"answ2":"Clint Eastwood.",
},
{
"cat":"Westerns",
"ques":"Which famous singer played the lead role in the 1960 western Flaming Star?",
"answ":"ELVIS PRESLEY",
"answ2":"Elvis Presley.",
},
{
"cat":"Antonio Banderas",
"ques":"Which actress played Elena Montero in The Mask of Zorro?",
"answ":"CATHERINE ZETA JONES",
"answ3":"KATHERINE ZETA JONES",
"answ2":"Catherine Zeta-Jones.",
},
{
"cat":"Westerns",
"ques":"What actress played the lead female role in the 1994 film Maverick?",
"answ":"JODIE FOSTER",
"answ2":"Jodie Foster.",
},
{
"cat":"Westerns",
"ques":"Which actor played 'The Kid' in 1995's The Quick and the Dead?",
"answ":"LEONARDO DICAPRIO",
"answ2":"Leonardo DiCaprio.",
},
{
"cat":"Westerns",
"ques":"Who directed the original True Grit?",
"answ":"HENRY HATHAWAY",
"answ2":"Henry Hathaway.",
},
{
"cat":"Westerns",
"ques":"Who directed the westerns Fort Apache, Rio Grande and She Wore a Yellow Ribbon?",
"answ":"JOHN FORD",
"answ2":"John Ford.",
},
{
"cat":"Westerns",
"ques":"Who played Tonto in 2013's The Lone Ranger?",
"answ":"JOHNNY DEPP",
"answ2":"Johnny Depp.",
},
{
"cat":"Jack Nicholson",
"ques":"Jack Nicholson starred as a cowboy named Wes in what 1966 western?",
"answ":"RIDE IN THE WHIRLWIND",
"answ2":"Ride in the Whirlwind.",
},
{
"cat":"Movie Release Dates",
"ques":"Sam Peckinpah's The Wild Bunch was released in what year?",
"answ":"1969",
"answ2":"1969.",
},
{
"cat":"Westerns",
"ques":"Who played the villainous Randall Bragg in 2008's Appaloosa?",
"answ":"JEREMY IRONS",
"answ2":"Jeremy Irons.",
},
{
"cat":"Directors",
"ques":"Who directed The Big Country, Friendly Persuasion and The Westerner?",
"answ":"WILLIAM WYLER",
"answ2":"William Wyler.",
},
{
"cat":"Westerns",
"ques":"Who directed the original The Magnificent Seven?",
"answ":"JOHN STURGES",
"answ2":"John Sturges.",
},
{
"cat":"70s",
"ques":"What actor starred as the character Jack Crabb, also known as 'Little Big Man,' in the 1970 film Little Big Man?",
"answ":"DUSTIN HOFFMAN",
"answ2":"Dustin Hoffman.",
},
{
"cat":"Classics",
"ques":"Who directed The Naked Spur, Winchester '73, Thunder Bay and The Glenn Miller Story?",
"answ":"ANTHONY MANN",
"answ2":"Anthony Mann.",
},
{
"cat":"Movie Quotes",
"ques":"What famous western film featured the quote: 'If they move, kill 'em'?",
"answ":"THE WILD BUNCH",
"answ2":"The Wild Bunch.",
},
{
"cat":"Will Smith",
"ques":"What year was Hitch released?",
"answ":"2005",
"answ2":"2005.",
},
{
"cat":"Movie Release Dates",
"ques":"What year was The Interview released?",
"answ":"2014",
"answ2":"2014.",
},
{
"cat":"Sandra Bullock",
"ques":"What year was The Proposal released?",
"answ":"2009",
"answ2":"2009.",
},
{
"cat":"Comedies",
"ques":"Who played Alan in The Hangover series?",
"answ":"ZACH GALIFIANAKIS",
"answ3":"ZACH GALIFNAKIS",
"answ2":"Zach Galifianakis.",
},
{
"cat":"Comedies",
"ques":"Who played Miranda Priestly in The Devil Wears Prada?",
"answ":"MERYL STREEP",
"answ2":"Meryl Streep.",
},
{
"cat":"Comedies",
"ques":"Who played retired CIA agent Jack Byrnes in Meet the Parents?",
"answ":"ROBERT DE NIRO",
"answ3":"ROBERT DENIRO",
"answ2":"Robert De Niro.",
},
{
"cat":"Comedies",
"ques":"Who played the role of Schmidt in the comedy 21 Jump Street?",
"answ":"JONAH HILL",
"answ2":"Jonah Hill.",
},
{
"cat":"Robert De Niro",
"ques":"In which 2002 comedy does Robert De Niro play the character of Detective Mitch Preston?",
"answ":"SHOWTIME",
"answ2":"Showtime.",
},
{
"cat":"Movie Release Dates",
"ques":"What year was the remake of Father of the Bride starring Steve Martin released?",
"answ":"1991",
"answ2":"1991.",
},
{
"cat":"Remakes and Reboots",
"ques":"Ben Stiller played the lead role in this 2013 remake of a 1947 film.",
"answ":"THE SECRET LIFE OF WALTER MITTY",
"answ3":"SECRET LIFE OF WALTER MITTY",
"answ2":"The Secret Life of Walter Mitty.",
},
{
"cat":"Movie Quotes",
"ques":"What 1994 comedy featured the quote: 'If I'm not back in five minutes...just wait longer.'",
"answ":"ACE VENTURA PET DETECTIVE",
"answ2":"Ace Ventura: Pet Detective.",
},
{
"cat":"2010s",
"ques":"What comedic actor directed the 2013 film The Secret Life of Walter Mitty?",
"answ":"BEN STILLER",
"answ2":"Ben Stiller.",
},
{
"cat":"Directors",
"ques":"Who directed the comedies Wedding Crashers, Fred Clause and The Change-Up?",
"answ":"DAVID DOBKIN",
"answ2":"David Dobkin.",
},
{
"cat":"Comedies",
"ques":"Who played Jim Levenstein in the American Pie series?",
"answ":"JASON BIGGS",
"answ2":"Jason Biggs.",
},
{
"cat":"Comedies",
"ques":"Who plays Stifler's mom in American Pie and American Pie 2?",
"answ":"JENNIFER COOLIDGE",
"answ2":"Jennifer Coolidge.",
},
{
"cat":"Comedies",
"ques":"Which actress played con artist Diana in the 2013 film Identity Thief",
"answ":"MELISSA MCCARTHY",
"answ2":"Melissa McCarthy.",
},
{
"cat":"2010s",
"ques":"Tom Hardy, Chris Pine and Reese Witherspoon star together in what 2012 comedy?",
"answ":"THIS MEANS WAR",
"answ2":"This Means War.",
},
{
"cat":"Rom-coms",
"ques":"Who starred as the male lead Phil Foster in 2010's Date Night?",
"answ":"STEVE CARELL",
"answ2":"Steve Carell.",
},
{
"cat":"2000s",
"ques":"Who starred as Warren Schmidt in 2002's About Schmidt?",
"answ":"JACK NICHOLSON",
"answ2":"Jack Nicholson.",
},
{
"cat":"Rom-coms",
"ques":"Who starred as Polly Prince in the film Along Came Polly?",
"answ":"JENNIFER ANISTON",
"answ2":"Jennifer Aniston.",
},
{
"cat":"Comedies",
"ques":"Who starred as Democratic Congressman Cam Brady in 2012's The Campaign?",
"answ":"WILL FERRELL",
"answ2":"Will Ferrell.",
},
{
"cat":"Comedies",
"ques":"Who played Bartleby Gaines, a high school slacker who creates his own fake college in the comedy Accepted?",
"answ":"JUSTIN LONG",
"answ2":"Justin Long.",
},
{
"cat":"Rom-coms",
"ques":"Who directed 1999's The Best Man?",
"answ":"MALCOLM D LEE",
"answ2":"Malcolm D. Lee.",
},
{
"cat":"Rom-coms",
"ques":"Who played Samantha MacKenzie, the only child of the U.S. president, in 2004's First Daughter?",
"answ":"KATIE HOLMES",
"answ2":"Katie Holmes.",
},
{
"cat":"Directors",
"ques":"What famous actor directed the 2004 rom-com First Daughter?",
"answ":"FOREST WHITAKER",
"answ3":"FORREST WHITAKER",
"answ2":"Forest Whitaker.",
},
{
"cat":"Rom-coms",
"ques":"Who played the U.S. President in the rom-com First Daughter?",
"answ":"MICHAEL KEATON",
"answ2":"Michael Keaton.",
},
{
"cat":"Rom-coms",
"ques":"Which actor played the Prime Minister of the United Kingdom in Love Actually?",
"answ":"HUGH GRANT",
"answ2":"Hugh Grant.",
},
{
"cat":"Jim Carrey",
"ques":"Who played God in Bruce Almighty?",
"answ":"MORGAN FREEMAN",
"answ2":"Morgan Freeman.",
},
{
"cat":"2000s",
"ques":"A shallow man falls in love with a 300-pound woman because of her inner beauty in what 2000s film?",
"answ":"SHALLOW HAL",
"answ2":"Shallow Hal.",
},
{
"cat":"2010s",
"ques":"Two single adults become caregivers to an orphaned girl when their mutual best friends die in what 2010 film?",
"answ":"LIFE AS WE KNOW IT",
"answ2":"Life as We Know It.",
},
{
"cat":"2000s",
"ques":"Two bank robbers fall in love with the girl they've kidnapped in what 2001 film?",
"answ":"BANDITS",
"answ2":"Bandits.",
},
{
"cat":"Jennifer Lopez",
"ques":"Which actress played Michael Vartan's merciless mother in the film Monster-in-Law?",
"answ":"JANE FONDA",
"answ2":"Jane Fonda.",
},
{
"cat":"Comedies",
"ques":"Who played Navy SEAL Shane Wolfe in The Pacifier?",
"answ":"VIN DIESEL",
"answ2":"Vin Diesel.",
},
{
"cat":"Spoof Movies",
"ques":"Which comedic actor played the President in Scary Movie 3?",
"answ":"LESLIE NIELSEN",
"answ2":"Leslie Nielsen.",
},
{
"cat":"Rom-coms",
"ques":"In 2006 She's The Man, what sport did Amanda Bynes' character play?",
"answ":"SOCCER",
"answ2":"Soccer.",
},
{
"cat":"Comedies",
"ques":"What famous rapper played Captain Antoine Mack in Soul Plane?",
"answ":"SNOOP DOGG",
"answ2":"Snoop Dogg.",
},
{
"cat":"Judd Apatow",
"ques":"LeBron James made an appearance in what Judd Apatow film?",
"answ":"TRAINWRECK",
"answ2":"Trainwreck.",
},
{
"cat":"Comedies",
"ques":"In We're the Millers, which actress plays a middle aged stripper who is hired by Jason Sudeikis to pose as his wife?",
"answ":"JENNIFER ANISTON",
"answ2":"Jennifer Aniston.",
},
{
"cat":"Comedies",
"ques":"Vince Vaughn and Owen Wilson apply for an internship at what company in 2013's The Internship?",
"answ":"GOOGLE",
"answ2":"Google.",
},
{
"cat":"Adam Sandler",
"ques":"In Jack and Jill, actor Al Pacino appears in a commercial for what company?",
"answ":"DUNKIN DONUTS",
"answ3":"DUNKIN' DONUTS",
"answ2":"Dunkin' Donuts.",
},
{
"cat":"Sports",
"ques":"Who played Jake Gyllenhaal's wife in the film Southpaw?",
"answ":"RACHEL MCADAMS",
"answ2":"Rachel McAdams.",
},
{
"cat":"Movie Release Dates",
"ques":"Fight Club was released in what year?",
"answ":"1999",
"answ2":"1999.",
},
{
"cat":"Romance",
"ques":"Which movie based on a Nicholas Sparks's novel starred Ryan Gosling and Rachel McAdams?",
"answ":"THE NOTEBOOK",
"answ2":"The Notebook.",
},
{
"cat":"Biopics",
"ques":"Who played hustler Ron Woodroof in Dallas Buyers Club?",
"answ":"MATTHEW MCCONAUGHEY",
"answ2":"Matthew McConaughey.",
},
{
"cat":"Courtroom/Legal Thrillers",
"ques":"Who played Judge Joseph Palmer in 2014's The Judge?",
"answ":"ROBERT DUVALL",
"answ2":"Robert Duvall.",
},
{
"cat":"War",
"ques":"Which actress played nurse Lt. Evelyn Johnson in Pearl Harbor?",
"answ":"KATE BECKINSALE",
"answ2":"Kate Beckinsale.",
},
{
"cat":"Dramas",
"ques":"Which actress played the role of Alice Howland in the film Still Alice?",
"answ":"JULIANNE MOORE",
"answ2":"Julianne Moore.",
},
{
"cat":"Crime",
"ques":"Who plays literature professor and gambler Jim Bennett in 2014's The Gambler?",
"answ":"MARK WAHLBERG",
"answ2":"Mark Wahlberg.",
},
{
"cat":"Movie Release Dates",
"ques":"What year was the remake of The Manchurian Candidate starring Denzel Washington released?",
"answ":"2004",
"answ2":"2004.",
},
{
"cat":"Dramas",
"ques":"Who plays the title character in the 2011 film Albert Nobbs?",
"answ":"GLENN CLOSE",
"answ2":"Glenn Close.",
},
{
"cat":"Romance",
"ques":"Who plays the title character in the 2012 film Anna Karenina?",
"answ":"KEIRA KNIGHTLEY",
"answ2":"Keira Knightley.",
},
{
"cat":"Movie Quotes",
"ques":"Which movie features the quote: 'I love the smell of napalm in the morning'?",
"answ":"APOCALYPSE NOW",
"answ2":"Apocalypse Now.",
},
{
"cat":"Movie Quotes",
"ques":"What classic film featured the famous quote: 'We'll always have Paris'?",
"answ":"CASABLANCA",
"answ2":"Casablanca.",
},
{
"cat":"Directors",
"ques":"Who directed The Pianist?",
"answ":"ROMAN POLANSKI",
"answ2":"Roman Polanski.",
},
{
"cat":"Dramas",
"ques":"Which actress played art professor Katherine Ann Watson in Mona Lisa Smile?",
"answ":"JULIA ROBERTS",
"answ2":"Julia Roberts.",
},
{
"cat":"Dramas",
"ques":"Who starred as Mumbai teenager Jamal in 2008's Slumdog Millionaire?",
"answ":"DEV PATEL",
"answ2":"Dev Patel.",
},
{
"cat":"70s",
"ques":"Who played the male lead in 1971's Straw Dogs?",
"answ":"DUSTIN HOFFMAN",
"answ2":"Dustin Hoffman.",
},
{
"cat":"Biopics",
"ques":"Who starred as Wolfgang Amadeus Mozart in 1984's Amadeus?",
"answ":"TOM HULCE",
"answ2":"Tom Hulce.",
},
{
"cat":"Crime",
"ques":"Who starred as Carlito in 1993's Carlito's Way?",
"answ":"AL PACINO",
"answ2":"Al Pacino.",
},
{
"cat":"Crime",
"ques":"Who directed 1993's Carlito's Way?",
"answ":"BRIAN DE PALMA",
"answ3":"BRYAN DE PALMA",
"answ2":"Brian De Palma.",
},
{
"cat":"Crime",
"ques":"In The Usual Suspects, who played the role of Verbal Kint?",
"answ":"KEVIN SPACEY",
"answ2":"Kevin Spacey.",
},
{
"cat":"2000s",
"ques":"Survivors of a plane crash in the Mongolian desert have to work together to build a new plane in what 2004 film?",
"answ":"FLIGHT OF THE PHOENIX",
"answ2":"Flight of the Phoenix.",
},
{
"cat":"Movie Release Dates",
"ques":"What year was Bridge of Spies released?",
"answ":"2015",
"answ2":"2015.",
},
{
"cat":"Matt & Ben",
"ques":"What U.S. city is the setting for 2010's The Town?",
"answ":"BOSTON",
"answ2":"Boston.",
},
{
"cat":"Denzel Washington",
"ques":"Who directed Training Day?",
"answ":"ANTOINE FUQUA",
"answ3":"ANTOINE FUKWA",
"answ2":"Antoine Fuqua.",
},
{
"cat":"Thrillers",
"ques":"Who played forensic psychiatrist Dr. Jack Gramm in the 2007 thriller 88 Minutes?",
"answ":"AL PACINO",
"answ2":"Al Pacino.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the release of Panic Room?",
"answ":"2002",
"answ2":"2002.",
},
{
"cat":"Oscar Movies",
"ques":"Which actor won a Best Actor Oscar for his role in Training Day?",
"answ":"DENZEL WASHINGTON",
"answ2":"Denzel Washington.",
},
{
"cat":"Oscar Movies",
"ques":"Which actor won the Academy Award for Best Supporting Actor for his role in 2005's Syriana?",
"answ":"GEORGE CLOONEY",
"answ2":"George Clooney.",
},
{
"cat":"Harrison Ford",
"ques":"What 1985 Harrison Ford movie won the Academy Award for Best Original Screenplay?",
"answ":"WITNESS",
"answ2":"Witness.",
},
{
"cat":"Movie Release Dates",
"ques":"American Gangster was released in what year?",
"answ":"2007",
"answ2":"2007.",
},
{
"cat":"Spy Movies",
"ques":"Who directed The Bourne Ultimatum?",
"answ":"PAUL GREENGRASS",
"answ2":"Paul Greengrass.",
},
{
"cat":"Movie Release Dates",
"ques":"Hitchcock's Vertigo was released in what year?",
"answ":"1958",
"answ2":"1958.",
},
{
"cat":"Directors",
"ques":"Who directed Law Abiding Citizen?",
"answ":"F GARY GRAY",
"answ2":"F. Gary Gray.",
},
{
"cat":"Directors",
"ques":"Who directed Road to Perdition?",
"answ":"SAM MENDES",
"answ2":"Sam Mendes.",
},
{
"cat":"Movie Release Dates",
"ques":"What year was Reservoir Dogs released?",
"answ":"1992",
"answ2":"1992.",
},
{
"cat":"Harrison Ford",
"ques":"Who directed Harrison Ford in The Fugitive?",
"answ":"ANDREW DAVIS",
"answ2":"Andrew Davis.",
},
{
"cat":"Classics",
"ques":"Who directed The Maltese Falcon?",
"answ":"JOHN HUSTON",
"answ2":"John Huston.",
},
{
"cat":"Movie Release Dates",
"ques":"A Time to Kill was released in what year?",
"answ":"1996",
"answ2":"1996.",
},
{
"cat":"Matthew McConaughey",
"ques":"Who directed A Time to Kill?",
"answ":"JOEL SCHUMACHER",
"answ2":"Joel Schumacher.",
},
{
"cat":"Oscar Movies",
"ques":"Which actor won the Academy Award for Best Actor for his performance in Wall Street?",
"answ":"MICHAEL DOUGLAS",
"answ2":"Michael Douglas.",
},
{
"cat":"Crime",
"ques":"Who directed 1997's Donnie Brasco?",
"answ":"MIKE NEWELL",
"answ2":"Mike Newell.",
},
{
"cat":"Biopics",
"ques":"Which 2000s film is based on the story of George Jung, the man who established the American cocaine market in the 1970s?",
"answ":"BLOW",
"answ2":"Blow.",
},
{
"cat":"Oscar Movies",
"ques":"Gene Hackman won a Best Actor Oscar for his performance in which 1971 film?",
"answ":"THE FRENCH CONNECTION",
"answ3":"FRENCH CONNECTION",
"answ2":"The French Connection.",
},
{
"cat":"Oscar Movies",
"ques":"Which actress won the Academy Award for Best Supporting Actress for her role in L.A. Confidential?",
"answ":"KIM BASINGER",
"answ2":"Kim Basinger.",
},
{
"cat":"Directors",
"ques":"Who directed American Hustle?",
"answ":"DAVID O RUSSELL",
"answ2":"David O. Russell.",
},
{
"cat":"Crime",
"ques":"An FBI agent and an Interpol Detective track a team of illusionists who pull off bank heists in what 2013 film?",
"answ":"NOW YOU SEE ME",
"answ2":"Now You See Me.",
},
{
"cat":"Crime",
"ques":"Who played the role of Butch 'Bullet' Stein in 1996's Bullet?",
"answ":"MICKEY ROURKE",
"answ2":"Mickey Rourke.",
},
{
"cat":"Crime",
"ques":"What famous rapper played Tank in the 1996 crime drama Bullet?",
"answ":"TUPAC SHAKUR",
"answ3":"2PAC",
"answ2":"Tupac Shakur.",
},
{
"cat":"Crime",
"ques":"Jim Belushi and Tupac Shakur play two corrupt cops who murder an undercover DEA agent by mistake and try to frame a homeless man for the crime in what film?",
"answ":"GANG RELATED",
"answ2":"Gang Related.",
},
{
"cat":"Thrillers",
"ques":"Who stars as low-ranking mafioso Joey Gazelle in the 2006 action thriller Running Scared?",
"answ":"PAUL WALKER",
"answ2":"Paul Walker.",
},
{
"cat":"90s",
"ques":"Who directed Natural Born Killers?",
"answ":"OLIVER STONE",
"answ2":"Oliver Stone.",
},
{
"cat":"Robert De Niro",
"ques":"Who directed Robert De Niro in the 2001 heist film The Score?",
"answ":"FRANK OZ",
"answ2":"Frank Oz.",
},
{
"cat":"Denzel Washington",
"ques":"Which actress starred as police officer Amelia Donaghy in The Bone Collector?",
"answ":"ANGELINA JOLIE",
"answ2":"Angelina Jolie.",
},
{
"cat":"Oscar Movies",
"ques":"Which actress won a Best Actress Oscar for her role in Monster?",
"answ":"CHARLIZE THERON",
"answ2":"Charlize Theron.",
},
{
"cat":"Movie Release Dates",
"ques":"What year was the film Monster starring Charlize Theron released?",
"answ":"2003",
"answ2":"2003.",
},
{
"cat":"Thrillers",
"ques":"Who directed Basic Instinct?",
"answ":"PAUL VERHOEVEN",
"answ2":"Paul Verhoeven.",
},
{
"cat":"Movie Release Dates",
"ques":"David Cronenberg's A History of Violence was released in what year?",
"answ":"2005",
"answ2":"2005.",
},
{
"cat":"Classics",
"ques":"What famous actor played San Francisco cop Frank Bullitt in 1968's Bullitt?",
"answ":"STEVE MCQUEEN",
"answ2":"Steve McQueen.",
},
{
"cat":"Crime",
"ques":"A freak accident brings together a critically ill mathematician, a grieving mother, and a born-again ex-con in what 2003 crime drama?",
"answ":"21 GRAMS",
"answ2":"21 Grams.",
},
{
"cat":"Young Adult Adaptations",
"ques":"What's the name of the country were The Hunger Games films take place?",
"answ":"PANEM",
"answ2":"Panem.",
},
{
"cat":"Will Smith",
"ques":"The film I, Robot is set in which U.S. city?",
"answ":"CHICAGO",
"answ2":"Chicago.",
},
{
"cat":"Steven Spielberg",
"ques":"What is the name of the fictional island were the first Jurassic Park film is set?",
"answ":"ISLA NUBAR",
"answ2":"Isla Nubar.",
},
{
"cat":"Tom Cruise",
"ques":"In Vanilla Sky, who played the role of psychologist Dr. Curtis McCabe?",
"answ":"KURT RUSSELL",
"answ2":"Kurt Russell.",
},
{
"cat":"Matthew McConaughey",
"ques":"In Reign of Fire, what creatures have replaced humans as the dominant species on Earth?",
"answ":"DRAGONS",
"answ3":"DRAGON",
"answ2":"Dragons.",
},
{
"cat":"Stephen King",
"ques":"Lawrence Kasdan directed what 2003 sci-fi horror film based on a Stephen King novel?",
"answ":"DREAMCATCHER",
"answ2":"Dreamcatcher.",
},
{
"cat":"90s",
"ques":"Which actress played the titular character in 1999's The Astronaut's Wife?",
"answ":"CHARLIZE THERON",
"answ2":"Charlize Theron.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who played Penelope 'Penny' Lockhart opposite Steve Carell in the film Seeking a Friend for the End of the World",
"answ":"KEIRA KNIGHTLEY",
"answ2":"Keira Knightley.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Which actress played the role of Elena Santos in the film Battle: Los Angeles?",
"answ":"MICHELLE RODRIGUEZ",
"answ2":"Michelle Rodriguez.",
},
{
"cat":"Disaster Movies",
"ques":"Which actress played Matt Damon's wife in Contagion?",
"answ":"GWYNETH PALTROW",
"answ2":"Gwyneth Paltrow.",
},
{
"cat":"Disaster Movies",
"ques":"In Contagion, who played epidemiologist Dr. Leonora Orantes, who is trying to to trace the origins of the MEV-1 pathogen?",
"answ":"MARION COTILLARD",
"answ3":"MARION COTILARD",
"answ2":"Marion Cotillard.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What actor played the main character Will Salas in the film In Time?",
"answ":"JUSTIN TIMBERLAKE",
"answ2":"Justin Timberlake.",
},
{
"cat":"Al Pacino",
"ques":"Al Pacino, Catherine Keener and Evan Rachel Wood star together in what 2002 sci-fi film?",
"answ":"SIMONE",
"answ3":"S1M0NE",
"answ2":"S1m0ne.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who directed the 2000 sci-fi adventure Mission to Mars?",
"answ":"BRIAN DE PALMA",
"answ3":"BRYAN DE PALMA",
"answ2":"Brian De Palma.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who directed the 2002 sci-fi drama Solaris?",
"answ":"STEVEN SODERBERGH",
"answ3":"STEVEN SODERBERG",
"answ2":"Steven Soderbergh.",
},
{
"cat":"Disaster Movies",
"ques":"Who directed 2004's The Day After Tomorrow?",
"answ":"ROLAND EMMERICH",
"answ2":"Roland Emmerich.",
},
{
"cat":"Jean-Claude Van Damme",
"ques":"Jean-Claude Van Damme plays a character named Luc Deveraux in what 1992 sci-fi action film?",
"answ":"UNIVERSAL SOLDIER",
"answ2":"Universal Soldier.",
},
{
"cat":"Jennifer Lopez",
"ques":"Jennifer Lopez plays child psychologist Catharine Deane opposite Vincent D'Onofrio and Vince Vaughn in what sci-fi film?",
"answ":"THE CELL",
"answ2":"The Cell.",
},
{
"cat":"Martin Scorsese",
"ques":"The film Hugo is set in which European city?",
"answ":"PARIS",
"answ2":"Paris.",
},
{
"cat":"Comedies",
"ques":"A pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. in what 2013 comedy?",
"answ":"WE'RE THE MILLERS",
"answ2":"We're the Millers.",
},
{
"cat":"2010s",
"ques":"Siberian gulag escapees travel four thousand miles by foot to freedom in India in what 2010 Peter Weir film?",
"answ":"THE WAY BACK",
"answ2":"The Way Back.",
},
{
"cat":"Movie Quotes",
"ques":"Name the movie from the quote: 'A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.'",
"answ":"THE SILENCE OF THE LAMBS",
"answ3":"SILENCE OF THE LAMBS",
"answ2":"The Silence of the Lambs.",
},
{
"cat":"Movie Quotes",
"ques":"Jack Nicholson exclaimed: 'You can't handle the truth!' in what film?",
"answ":"A FEW GOOD MEN",
"answ2":"A Few Good Men.",
},
{
"cat":"Movie Quotes",
"ques":"Name the movie from the quote: All those moments will be lost in time, like tears in rain.'",
"answ":"BLADE RUNNER",
"answ2":"Blade Runner.",
},
{
"cat":"Movie Quotes",
"ques":"Name the movie from the quote: Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
"answ":"FERRIS BUELLER'S DAY OFF",
"answ3":"FERRIS BUELLERS DAY OFF",
"answ2":"Ferris Bueller's Day Off.",
},
{
"cat":"Movie Quotes",
"ques":"Sylvester Stallone spoke the words: 'You're a disease, and I'm the cure' in what film?",
"answ":"COBRA",
"answ2":"Cobra.",
},
{
"cat":"Movie Quotes",
"ques":"What 90s film featured the quote: 'I killed the president of Paraguay with a fork. How have you been?'",
"answ":"GROSSE POINTE BLANK",
"answ2":"Grosse Pointe Blank.",
},
{
"cat":"Movie Quotes",
"ques":"What 2008 comedy featured the quote: 'I know who I am! I'm a dude playin' a dude disguised as another dude!'",
"answ":"TROPIC THUNDER",
"answ2":"Tropic Thunder.",
},
{
"cat":"Movie Quotes",
"ques":"What 80s movie featured the line: 'They're not gonna catch us. We're on a mission from God.'",
"answ":"THE BLUES BROTHERS",
"answ3":"BLUES BROTHERS",
"answ2":"The Blues Brothers.",
},
{
"cat":"Movie Quotes",
"ques":"Name the 90s movie from the quote: 'And I guess that was your accomplice in the wood chipper'",
"answ":"FARGO",
"answ2":"Fargo.",
},
{
"cat":"Will Smith",
"ques":"In what film does Will Smith say: 'You drive almost slow enough to drive Miss Daisy.'",
"answ":"BAD BOYS",
"answ2":"Bad Boys.",
},
{
"cat":"Movie Quotes",
"ques":"What Pixar film featured quote: 'That wasn't flying. That was falling with style.'",
"answ":"TOY STORY",
"answ2":"Toy Story.",
},
{
"cat":"Rom-coms",
"ques":"Who played the part of a flustered vicar in Four Weddings and a Funeral?",
"answ":"ROWAN ATKINSON",
"answ2":"Rowan Atkinson.",
},
{
"cat":"Jim Carrey",
"ques":"In which film did Jim Carrey play the bank clerk Stanley Ipkiss?",
"answ":"THE MASK",
"answ2":"The Mask.",
},
{
"cat":"Disney",
"ques":"What Disney film featured the song 'The Bare Necessities'?",
"answ":"THE JUNGLE BOOK",
"answ2":"The Jungle Book.",
},
{
"cat":"Clint Eastwood",
"ques":"What is the name of the 1982 film starring Clint Eastwood in which he steals a Russian prototype fighter plane?",
"answ":"FIREFOX",
"answ2":"Firefox.",
},
{
"cat":"James Bond",
"ques":"Which singer played the henchwoman May Day in A View to a Kill?",
"answ":"GRACE JONES",
"answ2":"Grace Jones.",
},
{
"cat":"Rom-coms",
"ques":"What is the subtitle of the second Bridget Jones film?",
"answ":"THE EDGE OF REASON",
"answ3":"EDGE OF REASON",
"answ2":"The Edge of Reason.",
},
{
"cat":"Family Films",
"ques":"What was the name of the Volkswagen Beetle which made its first appearance in The Love Bug?",
"answ":"HERBIE",
"answ2":"Herbie.",
},
{
"cat":"James Bond",
"ques":"'All Time High' by Rita Coolidge was the theme tune to which Bond film?",
"answ":"OCTOPUSSY",
"answ2":"Octopussy.",
},
{
"cat":"Oscar Movies",
"ques":"Which 1959 film won 11 Oscars?",
"answ":"BEN HUR",
"answ2":"Ben-Hur.",
},
{
"cat":"Scores and Soundtracks",
"ques":"Which rock band provided the soundtrack music for the 1980 film Flash Gordon?",
"answ":"QUEEN",
"answ2":"Queen.",
},
{
"cat":"Oscar Movies",
"ques":"Who won a Best Actress Oscar for the 1988 film The Accused?",
"answ":"JODIE FOSTER",
"answ2":"Jodie Foster.",
},
{
"cat":"Comic Book Movies",
"ques":"For which newspaper does Clark Kent work in Superman?",
"answ":"THE DAILY PLANET",
"answ3":"DAILY PLANET",
"answ2":"The Daily Planet.",
},
{
"cat":"Classics",
"ques":"Who played Captain Virgil Hilts in the 1963 film The Great Escape?",
"answ":"STEVE MCQUEEN",
"answ2":"Steve McQueen.",
},
{
"cat":"Family Films",
"ques":"In Garfield: The Movie, what is the name of the dog?",
"answ":"ODIE",
"answ2":"Odie.",
},
{
"cat":"War",
"ques":"The 2001 film Black Hawk Down was set in which African country?",
"answ":"SOMALIA",
"answ2":"Somalia.",
},
{
"cat":"90s",
"ques":"Which actress starred alongside Bruce Willis and Brad Pitt in the film Twelve Monkeys?",
"answ":"MADELEINE STOWE",
"answ3":"MADELEINE STOW",
"answ2":"Madeleine Stowe.",
},
{
"cat":"Scores and Soundtracks",
"ques":"Bryan Adams' song '(Everything I do) I do it for you' was the theme song for which 1991 action adventure film?",
"answ":"ROBIN HOOD PRINCE OF THIEVES",
"answ2":"Robin Hood: Prince of Thieves.",
},
{
"cat":"Animated",
"ques":"What is the name of the donkey in the Winnie the Pooh series?",
"answ":"EEYORE",
"answ2":"Eeyore.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In the Transformers franchise, which Autobot is a yellow Chevrolet Camaro?",
"answ":"BUMBLEBEE",
"answ2":"Bumblebee.",
},
{
"cat":"Tom Hanks",
"ques":"What sport does Forrest Gump take up whilst in the army?",
"answ":"TABLE TENNIS",
"answ3":"PING PONG",
"answ2":"Table tennis/Ping Pong.",
},
{
"cat":"Comedies",
"ques":"What is the name of the sequel to Bruce Almighty?",
"answ":"EVAN ALMIGHTY",
"answ2":"Evan Almighty.",
},
{
"cat":"Jim Carrey",
"ques":"Which Friends star played Jim Carrey's wife in Bruce Almighty?",
"answ":"JENNIFER ANISTON",
"answ2":"Jennifer Aniston.",
},
{
"cat":"Crime",
"ques":"Which actor played Vito Corleone in The Godfather?",
"answ":"MARLON BRANDO",
"answ2":"Marlon Brando.",
},
{
"cat":"Musicals",
"ques":"Mamma Mia! is a musical based on songs by which pop group?",
"answ":"ABBA",
"answ2":"ABBA.",
},
{
"cat":"70s",
"ques":"What actor played the simpleminded gardener Chance in 1979's Being There?",
"answ":"PETER SELLARS",
"answ2":"Peter Sellars.",
},
{
"cat":"Matt & Ben",
"ques":"Which Oscar-winning actress starred as Defense Secretary Jessica Delacourt opposite Matt Damon in the film Elysium?",
"answ":"JODIE FOSTER",
"answ2":"Jodie Foster.",
},
{
"cat":"2010s",
"ques":"Who played the titular character in 2013's The Lone Ranger?",
"answ":"ARMIE HAMMER",
"answ2":"Armie Hammer.",
},
{
"cat":"Pixar",
"ques":"Who voiced Buzz Lightyear in the Toy Story series?",
"answ":"TIM ALLEN",
"answ2":"Tim Allen.",
},
{
"cat":"Spy Movies",
"ques":"Who plays George Smiley in Tinker Tailor Soldier Spy?",
"answ":"GARY OLDMAN",
"answ2":"Gary Oldman.",
},
{
"cat":"Comedies",
"ques":"In Superbad, what name appears on Fogell’s fake ID?",
"answ":"MCLOVIN",
"answ2":"McLovin.",
},
{
"cat":"Horror",
"ques":"Who directed 1996's Scream?",
"answ":"WES CRAVEN",
"answ2":"Wes Craven.",
},
{
"cat":"Kathryn Bigelow",
"ques":"The Hurt Locker is set in which country?",
"answ":"IRAQ",
"answ2":"Iraq.",
},
{
"cat":"Classics",
"ques":"What actress appeared in both Some Like It Hot & The Seven Year Itch?",
"answ":"MARILYN MONROE",
"answ2":"Marilyn Monroe.",
},
{
"cat":"Comedies",
"ques":"Who directed and starred in Blazing Saddles?",
"answ":"MEL BROOKS",
"answ2":"Mel Brooks.",
},
{
"cat":"Tom Hanks",
"ques":"What actress starred as Mercedes 'Mercy' Tainot opposite Tom Hanks in the film Larry Crowne?",
"answ":"JULIA ROBERTS",
"answ2":"Julia Roberts.",
},
{
"cat":"Rom-coms",
"ques":"Who stars as washed-up former pop star Alex Fletcher in 2007's Music and Lyrics?",
"answ":"HUGH GRANT",
"answ2":"Hugh Grant.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who voices Optimus Prime in 2007's Transformers?",
"answ":"PETER CULLEN",
"answ2":"Peter Cullen.",
},
{
"cat":"James Bond",
"ques":"Who wrote and sang the theme song for Skyfall?",
"answ":"ADELE",
"answ2":"Adele.",
},
{
"cat":"Animated",
"ques":"What is the name of the snowman in the animated film Frozen?",
"answ":"OLAF",
"answ2":"Olaf.",
},
{
"cat":"Dance Movies",
"ques":"Which actor played the titular character in Billy Elliot?",
"answ":"JAMIE BELL",
"answ2":"Jamie Bell.",
},
{
"cat":"Romance",
"ques":"Who plays the male lead in P.S. I Love You?",
"answ":"GERARD BUTLER",
"answ2":"Gerard Butler.",
},
{
"cat":"Biopics",
"ques":"Who played Alfred Hitchcock in the 2012 biopic Hitchcock?",
"answ":"ANTHONY HOPKINS",
"answ2":"Anthony Hopkins.",
},
{
"cat":"Tom Cruise",
"ques":"'Show Me the Money' is a line from which Tom Cruise film?",
"answ":"JERRY MAGUIRE",
"answ2":"Jerry Maguire.",
},
{
"cat":"Dramas",
"ques":"Which actor played Will in Good Will Hunting?",
"answ":"MATT DAMON",
"answ2":"Matt Damon.",
},
{
"cat":"Westerns",
"ques":"Which actor played Jesse James in The Assassination of Jesse James by the Coward Robert Ford?",
"answ":"BRAD PITT",
"answ2":"Brad Pitt.",
},
{
"cat":"Directors",
"ques":"Who directed 1980's The Elephant Man?",
"answ":"DAVID LYNCH",
"answ2":"David Lynch.",
},
{
"cat":"Rom-coms",
"ques":"Who played shopping addict Rebecca Bloomwood in Confessions of a Shopaholic?",
"answ":"ISLA FISHER",
"answ2":"Isla Fisher.",
},
{
"cat":"Biopics",
"ques":"What MCU actor played James Hunt in 2013's Rush?",
"answ":"CHRIS HEMSWORTH",
"answ2":"Chris Hemsworth.",
},
{
"cat":"Classics",
"ques":"Who directed the original Ben-Hur?",
"answ":"WILLIAM WYLER",
"answ2":"William Wyler.",
},
{
"cat":"Coming of Age",
"ques":"Who directed Juno?",
"answ":"JASON REITMAN",
"answ2":"Jason Reitman.",
},
{
"cat":"Stanley Kubrick",
"ques":"What phrase is written on Joker's helmet in Full Metal Jacket?",
"answ":"BORN TO KILL",
"answ2":"Born to Kill.",
},
{
"cat":"Classics",
"ques":"Who played Scarlett O'Hara in Gone with the Wind?",
"answ":"VIVIEN LEIGH",
"answ3":"VIVIAN LEIGH",
"answ2":"Vivien Leigh.",
},
{
"cat":"Directors",
"ques":"What famous actor directed the film Larry Crowne?",
"answ":"TOM HANKS",
"answ2":"Tom Hanks.",
},
{
"cat":"Comic Book Movies",
"ques":"Which actor played Bane in The Dark Knight Rises?",
"answ":"TOM HARDY",
"answ2":"Tom Hardy.",
},
{
"cat":"Quentin Tarantino",
"ques":"Who played the character Bill in the Kill Bill films?",
"answ":"DAVID CARRADINE",
"answ2":"David Carradine.",
},
{
"cat":"Jim Carrey",
"ques":"Who was the director of The Truman Show?",
"answ":"PETER WEIR",
"answ2":"Peter Weir.",
},
{
"cat":"Meg Ryan",
"ques":"What actor starred alongside Meg Ryan in Addicted to Love?",
"answ":"MATTHEW BRODERICK",
"answ2":"Matthew Broderick.",
},
{
"cat":"Festival Darlings",
"ques":"Who plays Jeff in the 2011 film Jeff, Who Lives at Home?",
"answ":"JASON SEGEL",
"answ2":"Jason Segel.",
},
{
"cat":"Movie Quotes",
"ques":"Name the movie from the quote: 'So, Lone Starr, now you see that evil will always triumph because good is dumb.'",
"answ":"SPACEBALLS",
"answ2":"Spaceballs.",
},
{
"cat":"Movie Quotes",
"ques":"What actor said the famous words: 'You talkin to me' in Taxi Driver?",
"answ":"ROBERT DE NIRO",
"answ3":"ROBERT DENIRO",
"answ2":"Robert De Niro.",
},
{
"cat":"Movie Quotes",
"ques":"'I am serious, and don't call me Shirley' is a quote from what spoof film?",
"answ":"AIRPLANE",
"answ2":"Airplane!.",
},
{
"cat":"Coen Brothers",
"ques":"Fargo is primarily set in which US state?",
"answ":"MINNESOTA",
"answ3":"MINESOTA",
"answ2":"Minnesota.",
},
{
"cat":"Eddie Murphy",
"ques":"Which actor plays the role of the main antagonist in the 2011 movie Tower Heist?",
"answ":"ALAN ARDA",
"answ2":"Alan Alda.",
},
{
"cat":"Nicolas Cage",
"ques":"What is the name of the character Nic Cage plays in the National Treasure films?",
"answ":"BEN GATES",
"answ3":"BENJAMIN FRANKLIN",
"answ2":"Benjamin Franklin Gates.",
},
{
"cat":"Comic Book Movies",
"ques":"Which Marvel superhero did Chris Evans play prior to his role as Captain America?",
"answ":"HUMAN TORCH",
"answ3":"JOHNNY STORM",
"answ2":"Human Torch/Johnny Storm.",
},
{
"cat":"Tom Hanks",
"ques":"What name did Tom Hanks give to his volleyball companion in Cast Away?",
"answ":"WILSON",
"answ2":"Wilson.",
},
{
"cat":"Adam Sandler",
"ques":"Which retired American football quarterback played himself in Little Nicky?",
"answ":"DAN MARINO",
"answ2":"Dan Marino.",
},
{
"cat":"70s",
"ques":"Who directed 1973's American Graffiti?",
"answ":"GEORGE LUCAS",
"answ2":"George Lucas.",
},
{
"cat":"Musicals",
"ques":"What was Dorothy's surname in The Wizard Of Oz?",
"answ":"GALE",
"answ2":"Gale.",
},
{
"cat":"Action/Adventure",
"ques":"In Jurassic World, what is the name of the dinosaur that is a genetic hybrid?",
"answ":"INDOMINUS REX",
"answ2":"Indominus Rex.",
},
{
"cat":"Video Game Movies",
"ques":"Mark Wahlberg played the titular character of which 2008 video-game adaptation?",
"answ":"MAX PAYNE",
"answ2":"Max Payne.",
},
{
"cat":"90s",
"ques":"Which 90s comedy cult classic features cameos appearances from Meat Loaf, Alice Cooper and Chris Farley?",
"answ":"WAYNE'S WORLD",
"answ2":"Wayne's World.",
},
{
"cat":"Coming of Age",
"ques":"Olivia Wilde directed what 2019 coming of age film?",
"answ":"BOOKSMART",
"answ2":"Booksmart.",
},
{
"cat":"Crime",
"ques":"A movie sound effects editor accidentally records the assassination of a presidential candidate in which Brian De Palma movie?",
"answ":"BLOW OUT",
"answ2":"Blow Out.",
},
{
"cat":"Scores & Soundtracks",
"ques":"Who composed the scores for How the Grinch Stole Christmas and Glory?",
"answ":"JAMES HORNER",
"answ2":"James Horner.",
},
{
"cat":"DreamWorks Animation",
"ques":"In Puss in Boots, Puss and Kitty Softpaws engage in what type of fight?",
"answ":"DANCE FIGHT",
"answ3":"DANCE",
"answ2":"Dance fight.",
},
{
"cat":"Tom Hanks",
"ques":"In Bridge of Spies, what is Rudolf Abel's main hobby?",
"answ":"PAINTING",
"answ2":"Painting.",
},
{
"cat":"Movie Quotes",
"ques":"In what 2014 comedy will you hear the quote: 'My name is Jeff'?",
"answ":"22 JUMP STREET",
"answ2":"22 Jump Street.",
},
{
"cat":"Robin Williams",
"ques":"Who plays Miranda's new boyfriend Stu in Mrs. Doubtfire?",
"answ":"PIERCE BROSNAN",
"answ2":"Pierce Brosnan.",
},
{
"cat":"James Stewart",
"ques":"James Stewart and Margaret Sullavan star in which 1940 romcom that had a remake in the 90s?",
"answ":"THE SHOP AROUND THE CORNER",
"answ2":"The Shop Around the Corner.",
},
{
"cat":"Disaster Movies",
"ques":"Kit Harrington plays a gladiator in what 2014 disaster flick?",
"answ":"POMPEII",
"answ3":"POMPEI",
"answ2":"Pompeii.",
},
{
"cat":"Animated",
"ques":"Who directed 2009's Coraline?",
"answ":"HENRY SELICK",
"answ2":"Henry Selick.",
},
{
"cat":"2010s",
"ques":"In Ready or Not, what actor from The O.C. plays Alex's alcoholic brother?",
"answ":"ADAM BRODY",
"answ2":"Adam Brody.",
},
{
"cat":"Matt & Ben",
"ques":"Matt Damon starred in which John Grisham adaptation?",
"answ":"THE RAINMAKER",
"answ3":"RAINMAKER",
"answ2":"The Rainmaker.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What 2019 sci-fi movie follows the investigation into a crew member of the ill-fated Lima project?",
"answ":"AD ASTRA",
"answ2":"Ad Astra.",
},
{
"cat":"70s",
"ques":"In 1974's Lenny, Dustin Hoffman has what profession in the entertainment business?",
"answ":"STAND UP COMEDIAN",
"answ3":"COMEDIAN",
"answ2":"Stand-up comedian.",
},
{
"cat":"Comedies",
"ques":"In Jackass: The Movie, Johnny Knoxville has a fight in a department store versus which boxer?",
"answ":"BUTTERBEAN",
"answ3":"ERIC ESCH",
"answ2":"Butterbean/Eric Esch.",
},
{
"cat":"Comedies",
"ques":"The 2012 film Ted received one Oscar nomination, which came in what category?",
"answ":"BEST ORIGINAL SONG",
"answ3":"ORIGINAL SONG",
"answ2":"Best Original Song.",
},
{
"cat":"Meryl Streep",
"ques":"Which 1979 Meryl Streep film tells the story of a couple's divorce and the impact it has on their son?",
"answ":"KRAMER VS KRAMER",
"answ3":"KRAMER VERSUS KRAMER",
"answ2":"Kramer vs. Kramer.",
},
{
"cat":"Musicals",
"ques":"In Purple Rain, Prince's character is simply known by what moniker?",
"answ":"THE KID",
"answ3":"KID",
"answ2":"The Kid.",
},
{
"cat":"Comedies",
"ques":"What actor, best known from his role in The Sopranos, played Lieutenant General George Miller in 2009's In The Loop?",
"answ":"JAMES GANDOLFINI",
"answ2":"James Gandolfini.",
},
{
"cat":"80s",
"ques":"Which 80s action film features the characters Brain, Cabbie and The Duke?",
"answ":"ESCAPE FROM NEW YORK",
"answ2":"Escape from New York.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actress has played the daughter of Jamie Lee Curtis, Dennis Quaid and Michael Keaton?",
"answ":"LINDSAY LOHAN",
"answ2":"Lindsay Lohan.",
},
{
"cat":"Kevin Smith",
"ques":"What is the name of Jason Lee's character in Dogma?",
"answ":"AZRAEL",
"answ2":"Azrael.",
},
{
"cat":"90s",
"ques":"Name the 1991 film: Two friends go on a fishing trip that goes off the rails when they get into an altercation at a bar and kill a man.",
"answ":"THELMA AND LOUISE",
"answ2":"Thelma & Louise.",
},
{
"cat":"70s",
"ques":"At the end of which 70s mystery film is a character told 'We'll be listening to you' which sends him in a frenzy around his apartment?",
"answ":"THE CONVERSATION",
"answ2":"The Conversation.",
},
{
"cat":"Crime",
"ques":"Which 90s crime film opens with a group of thieves attempting to steal paintings using a literal Trojan Horse?",
"answ":"THE THOMAS CROWN AFFAIR",
"answ3":"THOMAS CROWN AFFAIR",
"answ2":"The Thomas Crown Affair.",
},
{
"cat":"Dramas",
"ques":"In The Peanut Butter Falcon, Zak aspires to be what?",
"answ":"WRESTLER",
"answ3":"PROFESSIONAL WRESTLER",
"answ2":"Professional wrestler.",
},
{
"cat":"Action/Adventure",
"ques":"Which MCU actor plays the adult version of Charlie Hunnam's son Jack in The Lost City of Z?",
"answ":"TOM HOLLAND",
"answ2":"Tom Holland.",
},
{
"cat":"Al Pacino",
"ques":"What year saw the release of Brian De Palma's Scarface?",
"answ":"1983",
"answ2":"1983.",
},
{
"cat":"Crime",
"ques":"What is the profession of Bill Murray's character in Wild Things?",
"answ":"LAWYER",
"answ2":"Lawyer.",
},
{
"cat":"Clint Eastwood",
"ques":"Adam Driver made his feature film debut in which Clint Eastwood directed film?",
"answ":"J EDGAR",
"answ2":"J. Edgar.",
},
{
"cat":"Dance Movies",
"ques":"Who played Sandy in Grease?",
"answ":"OLIVIA NEWTON JOHN",
"answ2":"Olivia Newton-John.",
},
{
"cat":"Horror",
"ques":"Julius Avery directed what 2018 World War II horror film?",
"answ":"OVERLORD",
"answ2":"Overlord.",
},
{
"cat":"Dramas",
"ques":"Tyrin Turner and Larenz Tate play the lead characters in what 1993 drama?",
"answ":"MENACE II SOCIETY",
"answ3":"MENACE TO SOCIETY",
"answ2":"Menace II Society.",
},
{
"cat":"Jodie Foster",
"ques":"Who plays the mysterious billionaire industrialist S.R. Hadden in Contact?",
"answ":"JOHN HURT",
"answ2":"John Hurt.",
},
{
"cat":"Disney",
"ques":"In Disney's Peter Pan, what animal is always following Captain Hook?",
"answ":"CROCODILE",
"answ2":"Crocodile.",
},
{
"cat":"2010s",
"ques":"Oscar Isaac and Jessica Chastain play husband and wife in what 2014 crime film?",
"answ":"A MOST VIOLENT YEAR",
"answ2":"A Most Violent Year.",
},
{
"cat":"Quentin Tarantino",
"ques":"In Pulp Fiction, what character said: 'That's how you're gonna beat 'em, Butch. They keep underestimating you.'?",
"answ":"BUTCH",
"answ3":"BUTCH COOLIDGE",
"answ2":"Butch.",
},
{
"cat":"Kate Winslet",
"ques":"Kate Winslet and Jackie Earle Haley both received Oscar nominations for what 2006 film?",
"answ":"LITTLE CHILDREN",
"answ2":"Little Children.",
},
{
"cat":"Spike Lee",
"ques":"Who plays the prostitute Jake befriends in He Got Game?",
"answ":"MILLA JOVOVICH",
"answ3":"MILA JOVOVICH",
"answ2":"Milla Jovovich.",
},
{
"cat":"Comedies",
"ques":"In which 2003 comedy will you find characters supposedly suffering from the fatal disease known as stick-it-to-the-man-iosis?",
"answ":"SCHOOL OF ROCK",
"answ2":"School of Rock.",
},
{
"cat":"Rom-coms",
"ques":"In 10 Things I Hate About You, what school sport does Kat play?",
"answ":"SOCCER",
"answ2":"Soccer.",
},
{
"cat":"Scores & Soundtracks",
"ques":"Which David Fincher film features the Enya song 'Orinoco Flow'?",
"answ":"THE GIRL WITH THE DRAGON TATTOO",
"answ3":"GIRL WITH THE DRAGON TATTOO",
"answ2":"The Girl with the Dragon Tattoo.",
},
{
"cat":"Crime",
"ques":"Which 1985 neo-noir crime film starring Mickey Rourke was Michael Cimino's follow up to the disastrous Heaven's Gate?",
"answ":"YEAR OF THE DRAGON",
"answ2":"Year of the Dragon.",
},
{
"cat":"Directors",
"ques":"Which Sam Mendes film stars John Krasinski and Maya Rudolph?",
"answ":"AWAY WE GO",
"answ2":"Away We Go.",
},
{
"cat":"Coen Brothers",
"ques":"In O Brother, Where Art Thou?, what brand of pomade does Everett like to use?",
"answ":"DAPPER DAN",
"answ2":"Dapper Dan.",
},
{
"cat":"Family Films",
"ques":"Who plays Mary, the mother of the Brown family in Paddington?",
"answ":"SALLY HAWKINS",
"answ2":"Sally Hawkins.",
},
{
"cat":"Crime",
"ques":"Which 2000 crime film opens with a retired criminal almost being crushed by a giant boulder that rolls into his swimming pool?",
"answ":"SEXY BEAST",
"answ2":"Sexy Beast",
},
{
"cat":"Classics",
"ques":"The 1956 film The Harder They Fall is the final film of what legendary classic actor?",
"answ":"HUMPHREY BOGART",
"answ2":"Humphrey Bogart.",
},
{
"cat":"Musicals",
"ques":"What 1978 musical features the songs 'Can I Go On?', 'Ease on Down the Road' and 'Home'?",
"answ":"THE WIZ",
"answ2":"The Wiz.",
},
{
"cat":"Biopics",
"ques":"Who played the titular character in 2003's Veronica Guerin?",
"answ":"CATE BLANCHETT",
"answ2":"Cate Blanchett.",
},
{
"cat":"Horror",
"ques":"In Trick 'r Treat, Anna Paquin's character is revealed to be what mythological creature?",
"answ":"WEREWOLF",
"answ2":"Werewolf.",
},
{
"cat":"Al Pacino",
"ques":"Which actress stars opposite Al Pacino as Gail in Carlito's Way?",
"answ":"PENELOPE ANN MILLER",
"answ3":"PENELOPE ANNE MILLER",
"answ2":"Penelope Ann Miller.",
},
{
"cat":"90s",
"ques":"Which 90s film stars Ted Danson as a man trying to prove the existence of the Loch Ness monster?",
"answ":"LOCH NESS",
"answ2":"Loch Ness.",
},
{
"cat":"Dramas",
"ques":"In 2019's Waves, the main character Tyler competes in what sport?",
"answ":"WRESTLING",
"answ2":"Wrestling.",
},
{
"cat":"Denzel Washington",
"ques":"Who directed 2004's The Manchurian Candidate?",
"answ":"JONATHAN DEMME",
"answ2":"Jonathan Demme.",
},
{
"cat":"Black Cinema",
"ques":"Which crime film centers on a Black hitman who follows the ancient code of Japanese swordsmen?",
"answ":"GHOST DOG THE WAY OF THE SAMURAI",
"answ2":"Ghost Dog: The Way of the Samurai.",
},
{
"cat":"Horror",
"ques":"In which teen sci-fi horror film starring James Marsden and Katie Holmes will you find a mysterious clique known as 'Blue Ribbons'?",
"answ":"DISTURBING BEHAVIOR",
"answ2":"Disturbing Behavior.",
},
{
"cat":"YA Adaptations",
"ques":"Who plays Jacob Black in the Twilight saga?",
"answ":"TAYLOR LAUTNER",
"answ2":"Taylor Lautner.",
},
{
"cat":"2010s",
"ques":"'Magic Castle' is the name of the home of the main characters in which acclaimed 2017 film?",
"answ":"THE FLORIDA PROJECT",
"answ3":"FLORIDA PROJECT",
"answ2":"The Florida Project.",
},
{
"cat":"Disney",
"ques":"What Disney animated film featured the voice talents of Mel Gibson and Christian Bale?",
"answ":"POCAHONTAS",
"answ2":"Pocahontas.",
},
{
"cat":"Crime",
"ques":"Who played Contanzia 'Connie' Corleone in The Godfather?",
"answ":"TALIA SHIRE",
"answ2":"Talia Shire.",
},
{
"cat":"Steven Spielberg",
"ques":"Which Steven Spielberg film stars Djimon Hounsou, Anthony Hopkins and Matthew McConaughey?",
"answ":"AMISTAD",
"answ2":"Amistad.",
},
{
"cat":"Crime",
"ques":"In Drive, Ron Perlman's character owns what kind of store as a front for his criminal operations?",
"answ":"PIZZERIA",
"answ3":"PIZZA STORE",
"answ2":"Pizzeria.",
},
{
"cat":"Comic Book Movies",
"ques":"Who directed Dick Tracy?",
"answ":"WARREN BEATTY",
"answ2":"Warren Beatty.",
},
{
"cat":"Festival Darlings",
"ques":"In 2006's Little Miss Sunshine, who played mute Dwayne, who dreams of being a pilot?",
"answ":"PAUL DANO",
"answ2":"Paul Dano.",
},
{
"cat":"Robert De Niro",
"ques":"Which Everybody Loves Raymond actor portrays Wizard in Taxi Driver?",
"answ":"PETER BOYLE",
"answ2":"Peter Boyle.",
},
{
"cat":"Graphic Novels",
"ques":"What 2002 film revolves around 1930's Great Depression and a father and son relationship?",
"answ":"ROAD TO PERDITION",
"answ2":"Road to Perdition.",
},
{
"cat":"Dramas",
"ques":"What 2009 dystopian film stars Viggo Mortensen and Kodi Smit-McPhee?",
"answ":"THE ROAD",
"answ2":"The Road.",
},
{
"cat":"2010s",
"ques":"Harmony Korine directed what 2013 film starring Selena Gomez, Vanessa Hudgens and James Franco?",
"answ":"SPRING BREAKERS",
"answ2":"Spring Breakers.",
},
{
"cat":"Horror",
"ques":"Joe Pilato played Captain Henry Rhodes in what 1985 zombie film?",
"answ":"DAY OF THE DEAD",
"answ3":"GEORGE A ROMERO'S DAY OF THE DEAD",
"answ2":"Day of the Dead.",
},
{
"cat":"Biopics",
"ques":"Lou Diamond Phillips played which famous musician in La Bamba?",
"answ":"RITCHIE VALENS",
"answ2":"Ritchie Valens.",
},
{
"cat":"Rom-coms",
"ques":"John Cusack and Kate Beckinsale co-star in what 2001 film?",
"answ":"SERENDIPITY",
"answ2":"Serendipity.",
},
{
"cat":"Comic Book Movies",
"ques":"Martin Sheen appeared in what 1997 comic book film?",
"answ":"SPAWN",
"answ2":"Spawn.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actress has played the characters Tiffany Maxwell, Joy Mangano and Aurora Lane?",
"answ":"JENNIFER LAWRENCE",
"answ2":"Jennifer Lawrence.",
},
{
"cat":"Alien/Predator",
"ques":"In which film in the Alien franchise will you find the characters Tennessee, Upworth, Ricks and Daniels?",
"answ":"ALIEN COVENANT",
"answ2":"Alien: Covenant.",
},
{
"cat":"John Carpenter",
"ques":"Who plays insurance investigator John Trent in John Carpenter's In The Mouth of Madness?",
"answ":"SAM NEILL",
"answ2":"Sam Neill.",
},
{
"cat":"Oscar Movies",
"ques":"Peter Jackson's Heavenly Creatures earned an Academy Award nomination in which category?",
"answ":"BEST ORIGINAL SCREENPLAY",
"answ3":"ORIGINAL SCREENPLAY",
"answ2":"Best Original Screenplay.",
},
{
"cat":"Tom Hanks",
"ques":"Tom Hanks portrays the character Viktor Navorski in what 2004 film?",
"answ":"THE TERMINAL",
"answ2":"The Terminal.",
},
{
"cat":"Eddie Murphy",
"ques":"In Holy Man, Eddie Murphy plays an evangelist who simply goes by what letter?",
"answ":"G",
"answ2":"G.",
},
{
"cat":"Matt & Ben",
"ques":"Matt Damon plays a whistleblower in the agriculture industry in which movie?",
"answ":"THE INFORMANT",
"answ2":"The Informant!.",
},
{
"cat":"Romance",
"ques":"Who stars as Céline in the Before trilogy?",
"answ":"JULIE DELPY",
"answ2":"Julie Delpy.",
},
{
"cat":"X-Men",
"ques":"Who plays the villainous Dr. Zander Rice in Logan?",
"answ":"RICHARD E GRANT",
"answ3":"RICHARD GRANT",
"answ2":"Richard E. Grant.",
},
{
"cat":"Westerns",
"ques":"Kris Kristofferson, Isabelle Huppert and Christopher Walken all star in what 80s western?",
"answ":"HEAVEN'S GATE",
"answ2":"Heaven's Gate.",
},
{
"cat":"David Fincher",
"ques":"Neil Patrick Harris starred in which David Fincher movie?",
"answ":"GONE GIRL",
"answ2":"Gone Girl.",
},
{
"cat":"Holiday Movies",
"ques":"Who plays Joseph Gordon-Levitt's ex he's trying to win back in The Night Before?",
"answ":"LIZZY CAPLAN",
"answ2":"Lizzy Caplan.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Henry Fonda, Kevin Costner and Burt Lancaster have all played which historical figure?",
"answ":"WYATT EARP",
"answ2":"Wyatt Earp.",
},
{
"cat":"Jurassic Park",
"ques":"In Jurassic Park, what is the full name of the character played by Sam Neill?",
"answ":"ALAN GRANT",
"answ3":"DR ALAN GRANT",
"answ2":"Alan Grant.",
},
{
"cat":"Denzel Washington",
"ques":"Who starred opposite Denzel as Will Colson in the film Unstoppable?",
"answ":"CHRIS PINE",
"answ2":"Chris Pine.",
},
{
"cat":"Stanley Kubrick",
"ques":"In The Shining, chef Dick Hallorann telepathically offers Danny what food item?",
"answ":"ICECREAM",
"answ3":"ICE CREAM",
"answ2":"Ice cream.",
},
{
"cat":"Ridley Scott",
"ques":"Ridley Scott directed what 1992 film about the travels of Christopher Columbus to the New World?",
"answ":"1492 CONQUEST OF PARADISE",
"answ2":"1492: Conquest of Paradise.",
},
{
"cat":"Musicals",
"ques":"In The Wizard of Oz, who is the third companion Dorothy meets along her journey?",
"answ":"COWARDLY LION",
"answ3":"LION",
"answ2":"Cowardly Lion.",
},
{
"cat":"Biopics",
"ques":"David Strathairn plays legendary journalist Edward R. Murrow in which 2005 film?",
"answ":"GOOD NIGHT AND GOOD LUCK",
"answ2":"Good Night, and Good Luck.",
},
{
"cat":"Horror",
"ques":"Who directed Maximum Overdrive?",
"answ":"STEPHEN KING",
"answ2":"Stephen King.",
},
{
"cat":"70s",
"ques":"The character Johnny Boy can be found in what 70s crime film?",
"answ":"MEAN STREETS",
"answ2":"Mean Streets.",
},
{
"cat":"Musicals",
"ques":"In which 90s musical will you find the songs: 'Oh What a Circus', 'Another Suitcase in Another Hall' and 'Don't Cry for Me Argentina'?",
"answ":"EVITA",
"answ2":"Evita.",
},
{
"cat":"Tom Cruise",
"ques":"In Minority Report, who plays Lamar Burgess the founder of PreCrime?",
"answ":"MAX VON SYDOW",
"answ2":"Max von Sydow.",
},
{
"cat":"Action/Adventure",
"ques":"What is the first name of Tyrese Gibson's character in the Fast and Furious franchise?",
"answ":"ROMAN",
"answ2":"Roman.",
},
{
"cat":"2010s",
"ques":"Which 2019 film had supporting roles from Maya Hawke, Bruce Dern and Damian Lewis?",
"answ":"ONCE UPON A TIME IN HOLLYWOOD",
"answ2":"Once Upon a Time in Hollywood.",
},
{
"cat":"Animated",
"ques":"Matt Damon voices a mustang stallion that gets kidnapped and freed by a Native American man in what animated film?",
"answ":"SPIRIT",
"answ3":"SPIRIT STALLION OF THE CIMARRON",
"answ2":"Spirit: Stallion of the Cimarron.",
},
{
"cat":"Sports",
"ques":"Who played Olympic gold medalist Dave Schultz in Foxcatcher?",
"answ":"CHANNING TATUM",
"answ2":"Channing Tatum.",
},
{
"cat":"Comedies",
"ques":"You'll find split personalities Hank and Charlie in what 2000 film?",
"answ":"ME MYSELF AND IRENE",
"answ2":"Me, Myself & Irene.",
},
{
"cat":"Directors",
"ques":"Who directed Flirting With Disaster?",
"answ":"DAVID O RUSSELL",
"answ2":"David O. Russell.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which actress appeared in the films Bride Wars, Mother's Day and How to Lose a Guy in 10 Days?",
"answ":"KATE HUDSON",
"answ2":"Kate Hudson.",
},
{
"cat":"Horror",
"ques":"In which horror film will you find the Rage Virus?",
"answ":"28 DAYS LATER",
"answ3":"28 WEEKS LATER",
"answ2":"28 Days Later/28 Weeks Later.",
},
{
"cat":"Oscar Movies",
"ques":"Tommy Lee Jones won an Oscar for Best Supporting Actor for what film?",
"answ":"THE FUGITIVE",
"answ2":"The Fugitive.",
},
{
"cat":"Directors",
"ques":"Who directed Requiem for a Dream?",
"answ":"DARREN ARONOFSKY",
"answ2":"Darren Aronofsky.",
},
{
"cat":"War",
"ques":"In Platoon, who played Staff Sergeant Bob Barnes, the cynical soldier who's responsible for shooting a civilian?",
"answ":"TOM BERENGER",
"answ2":"Tom Berenger.",
},
{
"cat":"Marvel Movies",
"ques":"In The Winter Soldier, what is the name of the building that serves as the headquarters for S.H.I.E.L.D?",
"answ":"TRISKELION",
"answ3":"THE TRISKELION",
"answ2":"Triskelion.",
},
{
"cat":"Animated",
"ques":"What is the first name of the character voiced by Chris Pratt in The Lego Movie?",
"answ":"EMMET",
"answ2":"Emmet.",
},
{
"cat":"Classics",
"ques":"Who plays Peter Joshua, a man with multiple fake identities in 1963's Charade?",
"answ":"CARY GRANT",
"answ2":"Cary Grant.",
},
{
"cat":"Romance",
"ques":"What 1992 film based on an E.M. Forster novel stars Anthony Hopkins, Emma Thompson and Vanessa Redgrave?",
"answ":"HOWARDS END",
"answ2":"Howards End.",
},
{
"cat":"David Fincher",
"ques":"Who plays police inspector Dave Toschi in Zodiac?",
"answ":"MARK RUFFALO",
"answ2":"Mark Ruffalo.",
},
{
"cat":"Family Films",
"ques":"In what 80s film will you find the character of Miracle Max?",
"answ":"THE PRINCESS BRIDE",
"answ3":"PRINCESS BRIDE",
"answ2":"The Princess Bride.",
},
{
"cat":"70s",
"ques":"Who played Frank Serpico in 1973's Serpico?",
"answ":"AL PACINO",
"answ2":"Al Pacino.",
},
{
"cat":"Martin Scorsese",
"ques":"Which Martin Scorsese film stars Daniel Day-Lewis, Michelle Pfeiffer and Winona Ryder?",
"answ":"THE AGE OF INNOCENCE",
"answ2":"The Age of Innocence.",
},
{
"cat":"Comedies",
"ques":"Who plays mob boss Marshall in The Hangover Part III?",
"answ":"JOHN GOODMAN",
"answ2":"John Goodman.",
},
{
"cat":"Movie Quotes",
"ques":"Name the 1999 movie from the quote: 'It's only after we've lost everything that we're free to do anything'?",
"answ":"FIGHT CLUB",
"answ2":"Fight Club.",
},
{
"cat":"Keanu Reeves",
"ques":"In what film does Keanu Reeves play a courier with a data storage device implanted in his brain?",
"answ":"JOHNNY MNEMONIC",
"answ3":"JOHNNY MNMONIC",
"answ2":"Johnny Mnemonic.",
},
{
"cat":"Dramas",
"ques":"Who played protagonist Christopher McCandless in 2007's Into the Wild?",
"answ":"EMILE HIRSCH",
"answ2":"Emile Hirsch.",
},
{
"cat":"Dramas",
"ques":"What actor directed the film Into the Wild?",
"answ":"SEAN PENN",
"answ2":"Sean Penn.",
},
{
"cat":"Thrillers",
"ques":"Who directed Nocturnal Animals?",
"answ":"TOM FORD",
"answ2":"Tom Ford.",
},
{
"cat":"Comic Book Movies",
"ques":"Boyd Holbrook plays a villain in which 2010s comic book movie?",
"answ":"LOGAN",
"answ2":"Logan.",
},
{
"cat":"Rom-coms",
"ques":"Robert Luketic directed what 2004 film starring Kate Bosworth, Josh Duhamel and Topher Grace?",
"answ":"WIN A DATE WITH TAD HAMILTON",
"answ2":"Win a Date with Tad Hamilton.",
},
{
"cat":"Al Pacino",
"ques":"What film features Al Pacino as a washed-up producer who digitally creates an actress?",
"answ":"SIMONE",
"answ3":"S1M0NE",
"answ2":"Simone.",
},
{
"cat":"Westerns",
"ques":"John Wayne played Civil War veteran Ethan Edwards in what classic western?",
"answ":"THE SEARCHERS",
"answ2":"The Searchers.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What 2000s film follows the story of a young farm boy who becomes a rider of a dragon named Saphira?",
"answ":"ERAGON",
"answ2":"Eragon.",
},
{
"cat":"Comedies",
"ques":"In Austin Powers: The Spy Who Shagged Me and Goldmember, who played the young Number 2?",
"answ":"ROB LOWE",
"answ2":"Rob Lowe.",
},
{
"cat":"Sports",
"ques":"Rodney Dangerfield play the coach of an all girls soccer team in what 90s film?",
"answ":"LADYBUGS",
"answ2":"Ladybugs.",
},
{
"cat":"Action/Adventure",
"ques":"This 1996 film about a renegade general taking hostages at Alcatraz stars Nicolas Cage, Sean Connery and Ed Harris.",
"answ":"THE ROCK",
"answ2":"The Rock.",
},
{
"cat":"Directors",
"ques":"Ryan Coogler has directed Michael B. Jordan in three films: Fruitvale Station, Black Panther and what?",
"answ":"CREED",
"answ2":"Creed.",
},
{
"cat":"Comedies",
"ques":"Who plays Prince Akeem in 1988's Coming to America?",
"answ":"EDDIE MURPHY",
"answ2":"Eddie Murphy.",
},
{
"cat":"Movie Release Dates",
"ques":"Which year saw the releases of The Matrix, Notting Hill and The Sixth Sense?",
"answ":"1999",
"answ2":"1999.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"In what 2009 James Cameron film will you find a planet named Pandora?",
"answ":"AVATAR",
"answ2":"Avatar.",
},
{
"cat":"Comic Book Movies",
"ques":"This 1994 comic book movie tragically was Brandon Lee's final performance.",
"answ":"THE CROW",
"answ2":"The Crow.",
},
{
"cat":"Famous Actors & Actresses",
"ques":"Who plays President James Marshall in 1997's Air Force One?",
"answ":"HARRISON FORD",
"answ2":"Harrison Ford.",
},
{
"cat":"Tom Cruise",
"ques":"What is the subtitle of the sixth installment in the Mission: Impossible franchise, which was released in 2018?",
"answ":"FALLOUT",
"answ2":"Fallout.",
},
{
"cat":"Directors",
"ques":"Who won an Oscar for directing The King's Speech?",
"answ":"TOM HOOPER",
"answ2":"Tom Hooper.",
},
{
"cat":"Directors",
"ques":"Who directed the first two films in the Jurassic Park franchise?",
"answ":"STEVEN SPIELBERG",
"answ2":"Steven Spielberg.",
},
{
"cat":"Middle Earth",
"ques":"What is the name of the leader of the tree-like Ents?",
"answ":"TREEBEARD",
"answ2":"Treebeard.",
},
{
"cat":"Middle Earth",
"ques":"Who plays Strider in The Fellowship of the Ring?",
"answ":"VIGGO MORTENSEN",
"answ2":"Viggo Mortensen.",
},
{
"cat":"Middle Earth",
"ques":"Who plays the younger Bilbo Baggins in The Hobbit trilogy?",
"answ":"MARTIN FREEMAN",
"answ2":"Martin Freeman.",
},
{
"cat":"Middle Earth",
"ques":"Ian Holm portrayed Bilbo Baggins in how many of the Middle Earth films?",
"answ":"4",
"answ3":"FOUR",
"answ2":"4.",
},
{
"cat":"Denzel Washington",
"ques":"For what 1990 film did Denzel Washington win a Best Supporting Actor Oscar?",
"answ":"GLORY",
"answ2":"Glory.",
},
{
"cat":"Tom Cruise",
"ques":"What 1989 film stars Tom Cruise as paralyzed Vietnam War veteran who later becomes an anti-war activist?",
"answ":"BORN ON THE FOURTH OF JULY",
"answ3":"BORN ON THE 4TH OF JULY",
"answ2":"Born on the Fourth of July.",
},
{
"cat":"2010s",
"ques":"Rian Johnson directed this 2012 sci-fi film starring Bruce Willis and Joseph Gordon-Levitt.",
"answ":"LOOPER",
"answ2":"Looper.",
},
{
"cat":"Dramas",
"ques":"Who directed Schindler's List?",
"answ":"STEVEN SPIELBERG",
"answ2":"Steven Spielberg.",
},
{
"cat":"Comedies",
"ques":"This 2018 comedy stars Jason Bateman and Rachel McAdams whose murder mystery party is interrupted by actual criminals.",
"answ":"GAME NIGHT",
"answ2":"Game Night.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the release of The Martian?",
"answ":"2015",
"answ2":"2015.",
},
{
"cat":"90s",
"ques":"This 1996 action thriller about a group of storm chasers stars Helen Hunt and Bill Paxton.",
"answ":"TWISTER",
"answ2":"Twister.",
},
{
"cat":"Famous Actors & Actresses",
"ques":"This actress won a Best Supporting Actress Oscar for her performance in 2012's Les Misérables.",
"answ":"ANNE HATHAWAY",
"answ2":"Anne Hathaway.",
},
{
"cat":"Wizarding World",
"ques":"How old is Harry Potter when Hagrid first comes to him to invite him to Hogwarts?",
"answ":"11",
"answ3":"ELEVEN",
"answ2":"11.",
},
{
"cat":"Wizarding World",
"ques":"What is the name of the street the Dursley family lives on in the Harry Potter franchise?",
"answ":"PRIVET DRIVE",
"answ2":"Privet Drive.",
},
{
"cat":"Action/Adventure",
"ques":"What is the subtitle of the fourth installment in the Mad Max franchise?",
"answ":"FURY ROAD",
"answ2":"Fury Road.",
},
{
"cat":"Directors",
"ques":"What 2017 film marked Jordan Peele's directorial debut?",
"answ":"GET OUT",
"answ2":"Get Out.",
},
{
"cat":"Tom Cruise",
"ques":"This 2012 jukebox musical comedy features Tom Cruise in a supporting role as musician Stacee Jaxx,",
"answ":"ROCK OF AGES",
"answ2":"Rock of Ages.",
},
{
"cat":"Denzel Washington",
"ques":"What 2010 film starring Denzel Washington was the final movie directed by Tony Scott?",
"answ":"UNSTOPPABLE",
"answ2":"Unstoppable.",
},
{
"cat":"Whoopi Goldberg",
"ques":"This 1990 film won Whoopi Goldberg a Best Supporting Actress Oscar.",
"answ":"GHOST",
"answ2":"Ghost.",
},
{
"cat":"Oscar Movies",
"ques":"For which 2010 David Fincher film did Trent Reznor and Atticus Ross win an Academy Award for Best Original Score?",
"answ":"THE SOCIAL NETWORK",
"answ2":"The Social Network.",
},
{
"cat":"Kathryn Bigelow",
"ques":"Who starred as Bodhi in 1991's Point Break?",
"answ":"PATRICK SWAYZE",
"answ2":"Patrick Swayze.",
},
{
"cat":"Keanu Reeves",
"ques":"What 2001 sports drama featured Keanu Reeves and Diane Lane?",
"answ":"HARDBALL",
"answ2":"Hardball.",
},
{
"cat":"Monster Movies",
"ques":"What 2017 monster film features Tom Hiddleston, Samuel L. Jackson and Brie Larson?",
"answ":"KONG SKULL ISLAND",
"answ2":"Kong Skull Island.",
},
{
"cat":"Directors",
"ques":"Richard Donner directed how many films in the Lethal Weapons franchise?",
"answ":"4",
"answ3":"FOUR",
"answ2":"4.",
},
{
"cat":"Comedies",
"ques":"This 2000 spoof horror comedy starred Anna Faris, Marlon Wayans and Regina Hall.",
"answ":"SCARY MOVIE",
"answ2":"Scary Movie.",
},
{
"cat":"Movie Release Dates",
"ques":"The Hangover Part II, Kung Fu Panda 2 and Cars 2 were released in what year?",
"answ":"2011",
"answ2":"2011.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who directed 2014's Ex Machina?",
"answ":"ALEX GARLAND",
"answ2":"Alex Garland.",
},
{
"cat":"Stephen King",
"ques":"What 2019 film based on a Stephen King novel starred Jason Clarke and John Lithgow?",
"answ":"PET SEMATARY",
"answ3":"PET CEMETERY",
"answ2":"Pet Sematary.",
},
{
"cat":"Famous Actors & Actresses",
"ques":"What X-Men actress played the lead role in 2018's Red Sparrow?",
"answ":"JENNIFER LAWRENCE",
"answ2":"Jennifer Lawrence.",
},
{
"cat":"Action/Adventure",
"ques":"What Die Hard sequel takes place in Russia and features Jai Courtney as John McClane's son?",
"answ":"A GOOD DAY TO DIE HARD",
"answ2":"A Good Day to Die Hard.",
},
{
"cat":"Black Cinema",
"ques":"Who stars as the titular character in 1998's How Stella Got Her Groove Back?",
"answ":"ANGELA BASSETT",
"answ2":"Angela Bassett.",
},
{
"cat":"Black Cinema",
"ques":"What 2004 ensemble comedy included Kevin Hart, Snoop Dogg and Method Man?",
"answ":"SOUL PLANE",
"answ2":"Soul Plane.",
},
{
"cat":"Black Cinema",
"ques":"Terrence Howard received a Best Actor Oscar nomination for his performance in what 2005 crime drama?",
"answ":"HUSTLE AND FLOW",
"answ2":"Hustle & Flow.",
},
{
"cat":"Black Cinema",
"ques":"What 2005 comedy stars Queen Latifah as a widowed hairstylist who sets up her own shop?",
"answ":"BEAUTY SHOP",
"answ2":"Beauty Shop.",
},
{
"cat":"Comic Book Movies",
"ques":"This 2003 comic book film features the last live-action performance by Sean Connery.",
"answ":"THE LEAGUE OF EXTRAORDINARY GENTLEMEN",
"answ3":"LEAGUE OF EXTRAORDINARY GENTLEMEN",
"answ2":"The League of Extraordinary Gentlemen.",
},
{
"cat":"Comic Book Movies",
"ques":"What 2019 comic book film stars Melissa McCarthy, Tiffany Haddish and Elisabeth Moss?",
"answ":"THE KITCHEN",
"answ2":"The Kitchen.",
},
{
"cat":"Action/Adventure",
"ques":"This film based on a famous folk tale stars Kevin Costner, Morgan Freeman and Alan Rickman.",
"answ":"ROBIN HOOD PRINCE OF THIEVES",
"answ2":"Robin Hood: Prince of Thieves.",
},
{
"cat":"Black Cinema",
"ques":"What 2013 film marked Ryan Coogler's directorial debut?",
"answ":"FRUITVALE STATION",
"answ2":"Fruitvale Station.",
},
{
"cat":"Nicolas Cage",
"ques":"Who played Mitch Wilkinson, the primary antagonist in National Treasure: Book of Secrets?",
"answ":"ED HARRIS",
"answ2":"Ed Harris.",
},
{
"cat":"Directors",
"ques":"Tony Scott directed this 1987 action comedy about a Detroit police officer who returns to Los Angeles to assist in an investigation.",
"answ":"BEVERLY HILLS COP II",
"answ3":"BEVERLY HILLS COP 2",
"answ2":"Beverly Hills Cop II.",
},
{
"cat":"Movie Release Dates",
"ques":"What year featured releases from entries in the Die Hard, Back to the Future and Teenage Mutant Ninja Turtles franchises?",
"answ":"1990",
"answ2":"1990.",
},
{
"cat":"2000s",
"ques":"Ang Lee directed what 2000 fantasy film starring Michelle Yeoh and Chow Yun-fat?",
"answ":"CROUCHING TIGER HIDDEN DRAGON",
"answ2":"Crouching Tiger Hidden Dragon.",
},
{
"cat":"Meryl Streep",
"ques":"Who directed 2014's Into the Woods?",
"answ":"ROB MARSHALL",
"answ2":"Rob Marshall.",
},
{
"cat":"Comedies",
"ques":"Kristen Wiig, Maya Rudolph and Melissa McCarthy head up what 2011 comedy about a maid of honor and her misadventures?",
"answ":"BRIDESMAIDS",
"answ2":"Bridesmaids.",
},
{
"cat":"Movie Release Dates",
"ques":"Bram Stoker's Dracula, Sister Act and Wayne's World were released in what year?",
"answ":"1992",
"answ2":"1992.",
},
{
"cat":"Robert Rodriguez",
"ques":"This 2019 Robert Rodriguez film is about a disembodied female cyborg who awakens in a new body with no memory of her past.",
"answ":"ALITA BATTLE ANGEL",
"answ2":"Alita: Battle Angel.",
},
{
"cat":"Oscar Movies",
"ques":"What actor was nominated for a Best Actor Oscar for both Driving Miss Daisy and The Shawshank Redemption?",
"answ":"MORGAN FREEMAN",
"answ2":"Morgan Freeman.",
},
{
"cat":"Graphic Novels",
"ques":"What 2017 film based on a graphic novel follows an undercover spy in Berlin during the Cold War?",
"answ":"ATOMIC BLONDE",
"answ2":"Atomic Blonde.",
},
{
"cat":"90s",
"ques":"Demi Moore plays Lt. Jordan O'Neill, the first female to undergo Special Operations training in what 90s film?",
"answ":"GI JANE",
"answ3":"G I JANE",
"answ2":"G.I. Jane.",
},
{
"cat":"Action/Adventure",
"ques":"Jamie Foxx plays a sadistic ruthless henchman on a heist crew in what 2017 film?",
"answ":"BABY DRIVER",
"answ2":"Baby Driver.",
},
{
"cat":"Sandra Bullock",
"ques":"Sandra Bullock and Melissa MCCarthy star together in what 2013 action comedy?",
"answ":"THE HEAT",
"answ2":"The Heat.",
},
{
"cat":"Disney",
"ques":"Who voices Anna in the Frozen films?",
"answ":"KRISTEN BELL",
"answ2":"Kristen Bell.",
},
{
"cat":"Animated",
"ques":"This 1999 animated film was the directorial debut of Brad Bird.",
"answ":"THE IRON GIANT",
"answ3":"IRON GIANT",
"answ2":"The Iron Giant.",
},
{
"cat":"Animated",
"ques":"What comedic actor voiced the evil Lord Business in The Lego Movie?",
"answ":"WILL FERRELL",
"answ2":"Will Ferrell.",
},
{
"cat":"Animated",
"ques":"What DCEU actor voiced the Spider-Man who is killed by Kingpin, at the beginning of Spider-Man: Into the Spider-Verse?",
"answ":"CHRIS PINE",
"answ2":"Chris Pine.",
},
{
"cat":"Directors",
"ques":"Who directed 2002's Signs?",
"answ":"M NIGHT SHYAMALAN",
"answ3":"M NIGHT SYAMALAN",
"answ2":"M. Night Shyamalan.",
},
{
"cat":"Oscar Movies",
"ques":"In 2001, this actress became the first African American to win a Best Actress Oscar.",
"answ":"HALLE BERRY",
"answ2":"Halle Berry.",
},
{
"cat":"Denzel Washington",
"ques":"What 1993 thriller based on a John Grisham novel stars Denzel Washington and Julia Roberts?",
"answ":"THE PELICAN BRIEF",
"answ3":"PELICAN BRIEF",
"answ2":"The Pelican Brief.",
},
{
"cat":"Directors",
"ques":"Which actress made her feature film directorial debut with Pitch Perfect 2?",
"answ":"ELIZABETH BANKS",
"answ3":"ELISABETH BANKS",
"answ2":"Elizabeth Banks.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the release of Shrek, Monsters Inc. and Atlantis: The Lost Empire?",
"answ":"2001",
"answ2":"2001.",
},
{
"cat":"Tom Cruise",
"ques":"In how many films has Tom Cruise played the character of Jack Reacher?",
"answ":"2",
"answ3":"TWO",
"answ2":"2.",
},
{
"cat":"Directors",
"ques":"Who directed Million Dollar Baby?",
"answ":"CLINT EASTWOOD",
"answ2":"Clint Eastwood.",
},
{
"cat":"Oscar Movies",
"ques":"Rami Malek won a Best Actor Oscar for portraying what real-life individual?",
"answ":"FREDDIE MERCURY",
"answ2":"Freddie Mercury.",
},
{
"cat":"Oscar Movies",
"ques":"This actor has been nominated for 12 acting Academy Awards, the most by any male actor.",
"answ":"JACK NICHOLSON",
"answ2":"Jack Nicholson.",
},
{
"cat":"Superman",
"ques":"Who played Superman's biological father Jor-El in 1978's Superman?",
"answ":"MARLON BRANDO",
"answ2":"Marlon Brando.",
},
{
"cat":"Superman",
"ques":"Which actor played bumbling computer genius Gus Gorman in 1983's Superman III?",
"answ":"RICHARD PRYOR",
"answ2":"Richard Pryor.",
},
{
"cat":"Superman",
"ques":"In Superman II, what does the villainous Zod mistakenly call Earth upon his arrival?",
"answ":"PLANET HOUSTON",
"answ2":"Planet Houston.",
},
{
"cat":"Superman",
"ques":"In how many Superman films does Gene Hackman play Lex Luthor?",
"answ":"3",
"answ3":"THREE",
"answ2":"3.",
},
{
"cat":"Crime",
"ques":"Who directed the film American Gangster?",
"answ":"RIDLEY SCOTT",
"answ2":"Ridley Scott.",
},
{
"cat":"Movie Release Dates",
"ques":"The original Back to the Future was released in what year?",
"answ":"1985",
"answ2":"1985.",
},
{
"cat":"Disney",
"ques":"Who directed the 2016 version of The Jungle Book?",
"answ":"JON FAVREAU",
"answ2":"Jon Favreau.",
},
{
"cat":"90s",
"ques":"Richard Gere was in 2 movies released in 1990, Pretty Woman and ____?",
"answ":"INTERNAL AFFAIRS",
"answ2":"Internal Affairs.",
},
{
"cat":"Sly & Arnie",
"ques":"Who played Helen Trasker in 1994's True Lies?",
"answ":"JAMIE LEE CURTIS",
"answ2":"Jamie Lee Curtis.",
},
{
"cat":"Directors",
"ques":"Who directed Eyes Wide Shut?",
"answ":"STANLEY KUBRICK",
"answ2":"Stanley Kubrick.",
},
{
"cat":"Comedies",
"ques":"This 2007 coming of age teen comedy starred Michael Cera, Jonah Hill and Christopher Mintz-Plasse.",
"answ":"SUPERBAD",
"answ2":"Superbad.",
},
{
"cat":"Movie Release Dates",
"ques":"Jaws 2 was released in what year?",
"answ":"1978",
"answ2":"1978.",
},
{
"cat":"David Fincher",
"ques":"Who played Detective David Mills in Se7en?",
"answ":"BRAD PITT",
"answ2":"Brad Pitt.",
},
{
"cat":"Tom Hanks",
"ques":"Tom Hanks plays children's television host Fred Rogers in what film?",
"answ":"A BEAUTIFUL DAY IN THE NEIGHBORHOOD",
"answ2":"A Beautiful Day in the Neighborhood.",
},
{
"cat":"Swashbuckling Adventure",
"ques":"Ian McShane plays what legendary pirate in Pirates of the Caribbean: On Stranger Tides?",
"answ":"BLACKBEARD",
"answ3":"EDWARD TEACH",
"answ2":"Blackbeard.",
},
{
"cat":"Leonardo DiCaprio",
"ques":"What 2006 crime thriller stars Leonardo DiCaprio, Matt Damon and Jack Nicholson?",
"answ":"THE DEPARTED",
"answ2":"The Departed.",
},
{
"cat":"Directors",
"ques":"Who directed The Preacher's Wife and Big?",
"answ":"PENNY MARSHALL",
"answ2":"Penny Marshall.",
},
{
"cat":"Directors",
"ques":"Who directed Jojo Rabbit?",
"answ":"TAIKA WAITITI",
"answ2":"Taika Waititi.",
},
{
"cat":"Directors",
"ques":"Who directed Runaway Bride and The Princess Diaries?",
"answ":"GARRY MARSHALL",
"answ2":"Garry Marshall.",
},
{
"cat":"Mel Brooks",
"ques":"What 1968 film was Mel Brooks' feature film directorial debut?",
"answ":"THE PRODUCERS",
"answ2":"The Producers.",
},
{
"cat":"Sly & Arnie",
"ques":"Sly & Arnie star together in what 2010 action film?",
"answ":"THE EXPENDABLES",
"answ2":"The Expendables.",
},
{
"cat":"Sly & Arnie",
"ques":"Who directed The 6th Day and Stop! Or My Mom Will Shoot?",
"answ":"ROGER SPOTTISWOODE",
"answ3":"ROGER SPOTTISWOOD",
"answ2":"Roger Spottiswoode.",
},
{
"cat":"Sly & Arnie",
"ques":"What 2013 film marked Arnie's first lead acting role since his time as Governor of California?",
"answ":"THE LAST STAND",
"answ2":"The Last Stand.",
},
{
"cat":"Denzel Washington",
"ques":"What 1998 action thriller stars Denzel Washington, Annette Bening and Bruce Willis?",
"answ":"THE SIEGE",
"answ2":"The Siege.",
},
{
"cat":"Musicals",
"ques":"Who directed the 2005's adaptation of the Broadway musical RENT?",
"answ":"CHRIS COLUMBUS",
"answ2":"Chris Columbus.",
},
{
"cat":"70s",
"ques":"Which actress plays Dwan, the sole survivor of a shipwreck, alongside Jeff Bridges in 1976's King Kong?",
"answ":"JESSICA LANGE",
"answ2":"Jessica Lange.",
},
{
"cat":"Movie Release Dates",
"ques":"The Brad Pitt and Angelina Jolie film Mr. & Mrs. Smith came out in what year?",
"answ":"2005",
"answ2":"2005.",
},
{
"cat":"Westerns",
"ques":"John Wayne starred in 1969's True Grit, as well as its 1975 sequel. What is the title of the sequel?",
"answ":"ROOSTER COGBURN",
"answ2":"Rooster Cogburn.",
},
{
"cat":"SNL Movies",
"ques":"Which SNL actress plays Vicki in the film Macgruber?",
"answ":"KRISTEN WIIG",
"answ2":"Kristen Wiig.",
},
{
"cat":"Comedies",
"ques":"Who plays Dr. Grace Hart in Holmes & Watson?",
"answ":"REBECCA HALL",
"answ2":"Rebecca Hall.",
},
{
"cat":"Dystopian Future/Time Travel",
"ques":"Who plays Maggie McFly in Back to the Future 3?",
"answ":"LEA THOMPSON",
"answ2":"Lea Thompson.",
},
{
"cat":"Movie Quotes",
"ques":"In what 1998 romantic comedy will you hear the quote: 'I wanted it to be you. I wanted it to be you so badly'?",
"answ":"YOU'VE GOT MAIL",
"answ2":"You've Got Mail.",
},
{
"cat":"Historical Epics",
"ques":"Which Lord of the Rings actor plays the protagonist Balian in Ridley Scott's epic Kingdom of Heaven?",
"answ":"ORLANDO BLOOM",
"answ2":"Orlando Bloom.",
},
{
"cat":"Remakes & Reboots",
"ques":"Which actor plays Captain Christopher Pike in 2009's Star Trek?",
"answ":"BRUCE GREENWOOD",
"answ2":"Bruce Greenwood.",
},
{
"cat":"Courtroom Dramas/Legal Thrillers",
"ques":"Who plays John Milton, the man who turns out to be the Devil in The Devil's Advocate?",
"answ":"AL PACINO",
"answ2":"Al Pacino.",
},
{
"cat":"Monster Movies",
"ques":"Which actor plays the lead character Jake Pentecost, in Pacific Rim: Uprising?",
"answ":"JOHN BOYEGA",
"answ2":"John Boyega.",
},
{
"cat":"Festival Darlings",
"ques":"This 2017 dark comedy about a woman who moves to LA to try and befriend her Instagram idol, starred Aubrey Plaza and Elizabeth Olsen.",
"answ":"INGRID GOES WEST",
"answ2":"Ingrid Goes West.",
},
{
"cat":"2010s",
"ques":"Which actres appeared in the 2010's films Focus, Bombshell and Birds of Prey?",
"answ":"MARGOT ROBBIE",
"answ2":"Margot Robbie.",
},
{
"cat":"Crime",
"ques":"Who plays gang lord Victor Sweet in the 2005 crime thriller Four Brothers?",
"answ":"CHIWETEL EJIOFOR",
"answ2":"Chiwetel Ejiofor.",
},
{
"cat":"Marvel Movies",
"ques":"Who directed X-Men: First Class?",
"answ":"MATTHEW VAUGHN",
"answ2":"Matthew Vaughn.",
},
{
"cat":"Stephen King",
"ques":"Who stars as a young girl with pyro-kinetic powers in 1984's Firestarter?",
"answ":"DREW BARRYMORE",
"answ2":"Drew Barrymore.",
},
{
"cat":"Pixar",
"ques":"What Hollywood legend voices Doc Hudson in Cars?",
"answ":"PAUL NEWMAN",
"answ2":"Paul Newman.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What 2020 film features supporting performances from Elizabeth Debicki, Martin Donovan and Kenneth Branagh?",
"answ":"TENET",
"answ2":"Tenet.",
},
{
"cat":"Transformers",
"ques":"In Bumblebee, what sport was Charlie highly proficient in that she stepped away from because of a family tragedy?",
"answ":"DIVING",
"answ2":"Diving.",
},
{
"cat":"LucasFilm",
"ques":"Who was a scriptwriter on all of these films: Raiders of the Lost Ark, The Empire Strikes Back and Solo: A Star Wars Story?",
"answ":"LAWRENCE KASDAN",
"answ2":"Lawrence Kasdan.",
},
{
"cat":"Planet of the Apes",
"ques":"Dr. Zaius says: 'The Forbidden Zone was once a paradise. Your breed made a desert of it, ages ago', in what Apes film?",
"answ":"PLANET OF THE APES",
"answ3":"PLANET OF THE APES (2001)",
"answ2":"Planet of the Apes (2001).",
},
{
"cat":"Sports",
"ques":"In what baseball film does the character Jim Morris finally play as a rookie for the Devil Rays against the Texas Rangers late in the movie?",
"answ":"THE ROOKIE",
"answ2":"The Rookie.",
},
{
"cat":"Sly & Arnie",
"ques":"What is the name of the superhero figure Arnold Schwarzenegger is trying to get in Jingle All the Way?",
"answ":"TURBO MAN",
"answ3":"TURBOMAN",
"answ2":"Turbo Man.",
},
{
"cat":"Mystery",
"ques":"Which actor plays a sinister cult leader named Billy Lee in the 2018 film Bad Times At The El Royale?",
"answ":"CHRIS HEMSWORTH",
"answ2":"Chris Hemsworth.",
},
{
"cat":"Coming of Age",
"ques":"Which actor plays Mason's father in the film Boyhood?",
"answ":"ETHAN HAWKE",
"answ2":"Ethan Hawke.",
},
{
"cat":"Black Cinema",
"ques":"What year saw the release of Cooley High, Friday Foster and Dolemite?",
"answ":"1975",
"answ2":"1975.",
},
{
"cat":"DC Movies",
"ques":"Who plays William Earle, the CEO of Wayne Enterprises, who takes the company public in Bruce's long-term absence in Batman Begins?",
"answ":"RUTGER HAUER",
"answ2":"Rutger Hauer.",
},
{
"cat":"Action/Adventure",
"ques":"Who stars as Hank Parsons in the 2012 family-adventure film Journey 2: The Mysterious Island?",
"answ":"DWAYNE JOHNSON",
"answ3":"THE ROCK",
"answ2":"Dwayne Johnson.",
},
{
"cat":"Martial Arts",
"ques":"Who stars as Roy O'Bannon, opposite Jackie Chan in Shanghai Noon and Shanghai Knights?",
"answ":"OWEN WILSON",
"answ2":"Owen Wilson.",
},
{
"cat":"Rom-coms",
"ques":"In what rom-com does a girl make a wish to grow up, and wakes up the next morning as a successful magazine editor with a live-in boyfriend?",
"answ":"13 GOING ON 30",
"answ2":"13 Going on 30.",
},
{
"cat":"80s",
"ques":"In Tootsie, who plays the role of George Fields, Michael's agent?",
"answ":"SYDNEY POLLACK",
"answ2":"Sydney Pollack.",
},
{
"cat":"Star Wars",
"ques":"Who provided the score for Solo: A Star Wars Story?",
"answ":"JOHN POWELL",
"answ2":"John Powell.",
},
{
"cat":"Period Pieces & Costume Dramas",
"ques":"What year saw the release of Wyatt Earp, Little Women and Legends of the Fall?",
"answ":"1994",
"answ2":"1994.",
},
{
"cat":"Alfred Hitchcock",
"ques":"In what Hitchcock film does a former tennis player named Tony Wendice try to arrange his wife Margot's murder, after learning of her affair?",
"answ":"DIAL M FOR MURDER",
"answ2":"Dial M for Murder.",
},
{
"cat":"YA Adaptations",
"ques":"Who plays Margo Spiegelman, a teen girl who goes missing but has left clues to her whereabouts in 2015's Paper Towns?",
"answ":"CARA DELEVINGNE",
"answ3":"CARA DELEVIGNE",
"answ2":"Cara Delevingne.",
},
{
"cat":"Romance",
"ques":"Which singer and actress starred as the character Ronnie in 2010's The Last Song?",
"answ":"MILEY CYRUS",
"answ2":"Miley Cyrus.",
},
{
"cat":"Biopics",
"ques":"What year saw the release of the biopics The Doors and Bugsy?",
"answ":"1991",
"answ2":"1991.",
},
{
"cat":"Transformers",
"ques":"What actor, who had a previous role in the series, makes a cameo at the beginning of The Last Knight as Merlin?",
"answ":"STANLEY TUCCI",
"answ2":"Stanley Tucci.",
},
{
"cat":"Horror",
"ques":"What horror sequel has the line: 'I shot him six times! I shot him in the heart, but... he's not human!'?",
"answ":"HALLOWEEN 2",
"answ3":"HALLOWEEN II",
"answ2":"Halloween 2.",
},
{
"cat":"2000s",
"ques":"You'll find the organizations of KAOS and CONTROL and the character of Agent 99, in what 2008 comedy?",
"answ":"GET SMART",
"answ2":"Get Smart.",
},
{
"cat":"Action/Adventure",
"ques":"In what action franchise will you find the actresses Ronda Rousey, Vanessa Kirby and Gal Gadot?",
"answ":"THE FAST AND THE FURIOUS",
"answ3":"FAST AND FURIOUS",
"answ2":"The Fast and the Furious.",
},
{
"cat":"Wrestlers in Film",
"ques":"Dave Bautista has an early role as a character named Diaz in which sci-fi film?",
"answ":"RIDDICK",
"answ2":"Riddick.",
},
{
"cat":"Scores & Soundtracks",
"ques":"Who composed the score for Tim Burton's Alice in Wonderland?",
"answ":"DANNY ELFMAN",
"answ2":"Danny Elfman.",
},
{
"cat":"James Bond",
"ques":"Who plays the role of M in Spectre?",
"answ":"RALPH FIENNES",
"answ2":"Ralph Fiennes.",
},
{
"cat":"Animated",
"ques":"Who voices Lord Business in The LEGO Movie?",
"answ":"WILL FERRELL",
"answ2":"Will Ferrell.",
},
{
"cat":"Comic Book Movies",
"ques":"Who directed Hellboy 2: The Golden Army?",
"answ":"GUILLERMO DEL TORO",
"answ2":"Guillermo del Toro.",
},
{
"cat":"Directors",
"ques":"Who directed Antman and the Wasp?",
"answ":"PEYTON REED",
"answ2":"Peyton Reed.",
},
{
"cat":"Thrillers",
"ques":"The thriller Frantic and the last Dirty Harry film, The Dead Pool, were released in what year?",
"answ":"1988",
"answ2":"1988.",
},
{
"cat":"Wizarding World",
"ques":"Who voices Dobby the House Elf in the Harry Potter franchise?",
"answ":"TOBY JONES",
"answ2":"Toby Jones.",
},
{
"cat":"Disaster Films",
"ques":"John Cusack plays a geologist who learns that the core of the earth is heating up and humankind is in imminent danger in what disaster film?",
"answ":"2012",
"answ2":"2012.",
},
{
"cat":"Modern Classics",
"ques":"Who played Emperor Marcus Aurelius in Gladiator?",
"answ":"RICHARD HARRIS",
"answ2":"Richard Harris.",
},
{
"cat":"War",
"ques":"In what film does Demi Moore play a woman who is training to be a NAVY Seal?",
"answ":"GI JANE",
"answ3":"G I JANE",
"answ2":"G.I. Jane",
},
{
"cat":"Disney",
"ques":"In Ralph Breaks the Internet, who voices the tough and talented racer named Shank that Vanellope befriends?",
"answ":"GAL GADOT",
"answ2":"Gal Gadot.",
},
{
"cat":"Alien/Predator",
"ques":"Which actor plays Kane in Alien?",
"answ":"JOHN HURT",
"answ2":"John Hurt.",
},
{
"cat":"Spy Movies",
"ques":"Who played CIA agent Napoleon Solo in 2015's The Man from UNCLE?",
"answ":"HENRY CAVILL",
"answ2":"Henry Cavill.",
},
{
"cat":"Dramas",
"ques":"Who plays Tanner Howard in the film Hell or High Water?",
"answ":"BEN FOSTER",
"answ2":"Ben Foster.",
},
{
"cat":"Family Films",
"ques":"Who provided the voice of Stuart Little in the 1999 film Stuart Little?",
"answ":"MICHAEL J FOX",
"answ2":"Michael J. Fox.",
},
{
"cat":"Musicals",
"ques":"What year saw the release of the musicals My Fair Lady, Mary Poppins and Viva Las Vegas?",
"answ":"1964",
"answ2":"1964.",
},
{
"cat":"70s",
"ques":"Sylvester Stallone stars as union boss Johnny Kovak in which 1978 film?",
"answ":"FIST",
"answ3":"F I S T",
"answ2":"F.I.S.T.",
},
{
"cat":"Movie Release Dates",
"ques":"The surprise horror hit The Blair Witch Project hit theaters in what year?",
"answ":"1999",
"answ2":"1999.",
},
{
"cat":"Westerns",
"ques":"Who directed the 1973 western High Plains Drifter?",
"answ":"CLINT EASTWOOD",
"answ2":"Clint Eastwood.",
},
{
"cat":"SNL Movies",
"ques":"Which actress plays Wayne's obsessive ex-girlfriend Stacy in Wayne's World?",
"answ":"LARA FLYNN BOYLE",
"answ3":"LARA FLYN BOYLE",
"answ2":"Lara Flynn Boyle.",
},
{
"cat":"Comedies",
"ques":"In what 1970 film do the staff of a Korean War field hospital use humor and high jinks to keep their sanity in the face of the horrors of war?",
"answ":"M A S H",
"answ3":"MASH",
"answ2":"M.A.S.H.",
},
{
"cat":"Dystopian Future/Time Travel",
"ques":"In which Terminator film does Sarah Connor say: 'I'm wanted in a couple states. 50 actually.'?",
"answ":"TERMINATOR DARK FATE",
"answ2":"Terminator: Dark Fate.",
},
{
"cat":"Movie Quotes",
"ques":"Which animated Disney film has the line: 'All it takes is faith and trust. Oh! And something I forgot. Dust! Just a little bit of pixie dust.'?",
"answ":"PETER PAN",
"answ2":"Peter Pan.",
},
{
"cat":"Historical Epics",
"ques":"Who stars as a missionary named Sebastiao Rodrigues in Martin Scorsese's Silence?",
"answ":"ANDREW GARFIELD",
"answ2":"Andrew Garfield.",
},
{
"cat":"Remakes & Reboots",
"ques":"What Oscar winning actress plays Aunt May in The Amazing Spider-Man?",
"answ":"SALLY FIELD",
"answ2":"Sally Field.",
},
{
"cat":"Courtroom Dramas/Legal Thrillers",
"ques":"Who plays Avery Tolar, Mitch's mentor in 1993's The Firm?",
"answ":"GENE HACKMAN",
"answ2":"Gene Hackman.",
},
{
"cat":"Monster Movies",
"ques":"What 1987 film directed by Fred Dekker and co-written by Shane Black, follows a group of kids fighting a group of monsters?",
"answ":"THE MONSTER SQUAD",
"answ2":"The Monster Squad.",
},
{
"cat":"Festival Darlings",
"ques":"Which actress stars as the real-life person Molly Bloom in the film Molly's Game?",
"answ":"JESSICA CHASTAIN",
"answ2":"Jessica Chastain.",
},
{
"cat":"2010s",
"ques":"Bill Hader, Kristen Wiig, Jason Bateman and Nick Frost appear together in what 2011 comedy?",
"answ":"PAUL",
"answ2":"Paul.",
},
{
"cat":"Crime",
"ques":"In what 90s film does Robert DeNiro say the line: 'There are three ways of doing things around here. The right way, the wrong way and the way that I do it.'?",
"answ":"CASINO",
"answ2":"Casino.",
},
{
"cat":"Marvel Movies",
"ques":"When released from prison, where is Scott Lang working where 'they always find out'?",
"answ":"BASKIN ROBBINS",
"answ2":"Baskin Robbins.",
},
{
"cat":"Stephen King",
"ques":"Who directed Stand By Me?",
"answ":"ROB REINER",
"answ2":"Rob Reiner.",
},
{
"cat":"Pixar",
"ques":"Who voices the main character Joe in the film Soul?",
"answ":"JAMIE FOXX",
"answ2":"Jamie Foxx.",
},
{
"cat":"Comedies",
"ques":"Bill and Ted are unknowingly sent to steal a song from the home of what famous real-life rockstar in Bill & Ted Face the Music?",
"answ":"DAVE GROHL",
"answ2":"Dave Grohl.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"Who plays Nora Price, a mechanical engineer on the Kepler, in Underwater?",
"answ":"KRISTEN STEWART",
"answ2":"Kristen Stewart.",
},
{
"cat":"LucasFilm",
"ques":"George Lucas directed what 1973 coming of age film that was the first film produced by LucasFilm?",
"answ":"AMERICAN GRAFFITI",
"answ2":"American Graffiti.",
},
{
"cat":"Planet of the Apes",
"ques":"Who plays John Landon, who runs the ape sanctuary that Caesar is sent to, in Rise of the Planet of the Apes?",
"answ":"BRIAN COX",
"answ3":"BRYAN COX",
"answ2":"Brian Cox.",
},
{
"cat":"Sports",
"ques":"Which acclaimed sports drama has main characters named Maggie Fitzgerald and Frankie Dunn?",
"answ":"MILLION DOLLAR BABY",
"answ2":"Million Dollar Baby.",
},
{
"cat":"Mystery",
"ques":"What year saw the release of Sidney Lumet's Murder on the Orient Express?",
"answ":"1974",
"answ2":"1974.",
},
{
"cat":"Coming of Age",
"ques":"What 1991 coming of age film sars Anna Chlumsky, Macaulay Culkin and Dan Aykroyd?",
"answ":"MY GIRL",
"answ2":"My Girl.",
},
{
"cat":"Black Cinema",
"ques":"Who plays the main protagonist Tre Styles in the film Boyz N The Hood?",
"answ":"CUBA GOODING JR",
"answ2":"Cuba Gooding Jr.",
},
{
"cat":"DC Movies",
"ques":"Who plays talk show host Murray Franklin in Joker?",
"answ":"ROBERT DE NIRO",
"answ3":"ROBERT DENIRO",
"answ2":"Robert De Niro.",
},
{
"cat":"Martial Arts",
"ques":"Which actress stars in the films Yes Madam, Supercop and Crouching Tiger, Hidden Dragon?",
"answ":"MICHELLE YEOH",
"answ2":"Michelle Yeoh.",
},
{
"cat":"Rom-coms",
"ques":"Where do Jay Baruchel and his best friend work in the 2010 film She's Outta My League?",
"answ":"AIRPORT",
"answ2":"Airport.",
},
{
"cat":"Coming of Age",
"ques":"What 1986 coming of age film begins with the narrated line: 'I was twelve going on thirteen the first time I saw a dead human being'?",
"answ":"STAND BY ME",
"answ2":"Stand By Me.",
},
{
"cat":"Star Wars",
"ques":"What Star Wars film features the line: 'There you are. I'm standing by as you requested, although there's a problem on the horizon. There's no horizon.'?",
"answ":"ROGUE ONE",
"answ2":"Rogue One.",
},
{
"cat":"Period Pieces & Costume Dramas",
"ques":"Daniel Day-Lewis, Michelle Pfeiffer and Winona Ryder star in what 1993 period piece?",
"answ":"THE AGE OF INNOCENCE",
"answ3":"AGE OF INNOCENCE",
"answ2":"The Age of Innocence.",
},
{
"cat":"Classics",
"ques":"What 1932 gangster film starring Paul Muni had a remake in the 1980s that starred Al Pacino?",
"answ":"SCARFACE",
"answ2":"Scarface.",
},
{
"cat":"YA Adaptations",
"ques":"Alex Pettyfer, Teresa Palmer, Dianna Agron and Timothy Olyphant appear in what 2011 YA film directed by D.J. Caruso?",
"answ":"I AM NUMBER FOUR",
"answ2":"I Am Number Four.",
},
{
"cat":"Romance",
"ques":"Which actress starred in the romantic films The Vow, The Time Traveler's Wife and About Time?",
"answ":"RACHEL MCADAMS",
"answ2":"Rachel McAdams.",
},
{
"cat":"Biopics",
"ques":"Chadwick Boseman plays what famous singer in the film Get On Up?",
"answ":"JAMES BROWN",
"answ2":"James Brown.",
},
{
"cat":"Wrestlers in Film",
"ques":"In Conan the Destroyer, which wrestler plays Dagoth, that goes from a human form to a monstrous entity?",
"answ":"ANDRE THE GIANT",
"answ2":"Andre the Giant.",
},
{
"cat":"Transformers",
"ques":"In Transformers: Dark of the Moon, at what famous Washington D.C. location did Carly Spencer and Sam Witwicky meet?",
"answ":"THE WHITE HOUSE",
"answ3":"WHITE HOUSE",
"answ2":"The White House.",
},
{
"cat":"Horror",
"ques":"How many times has Anthony Hopkins portrayed the character of Hannibal Lecter on screen?",
"answ":"3",
"answ3":"THREE",
"answ2":"3.",
},
{
"cat":"2000s",
"ques":"What is the subtitle of the 2009 sequel to Transformers?",
"answ":"REVENGE OF THE FALLEN",
"answ2":"Revenge of the Fallen.",
},
{
"cat":"Action/Adventure",
"ques":"What is the name of the location that was invaded by terrorists on Christmas Eve in 1988's Die Hard?",
"answ":"NAKATOMI PLAZA",
"answ2":"Nakatomi Plaza.",
},
{
"cat":"Wrestlers in Film",
"ques":"Hulk Hogan has a cameo as himself in which film in the Muppets franchise in which he is revealed to be part of a secret government organization?",
"answ":"MUPPETS FROM SPACE",
"answ2":"Muppets From Space.",
},
{
"cat":"Scores & Soundtracks",
"ques":"In Spike Lee's Do the Right Thing, the iconic opening credits feature Rosie Perez dancing to what famous hip-hop song?",
"answ":"FIGHT THE POWER",
"answ2":"Fight The Power.",
},
{
"cat":"James Bond",
"ques":"Who directed the film The Man with the Golden Gun?",
"answ":"GUY HAMILTON",
"answ2":"Guy Hamilton.",
},
{
"cat":"Animated",
"ques":"What is the name of the utopian destination that the dinosaurs are looking for in 1988's The Land Before Time?",
"answ":"THE GREAT VALLEY",
"answ3":"GREAT VALLEY",
"answ2":"The Great Valley.",
},
{
"cat":"Comic Book Movies",
"ques":"What British thespian played Dr. Edward Bailey, a brilliant physicist assigned to an asylum for the criminally insane in Red 2?",
"answ":"ANTHONY HOPKINS",
"answ2":"Anthony Hopkins.",
},
{
"cat":"Directors",
"ques":"How many films in the overall X-Men/Wolverine franchise did James Mangold direct?",
"answ":"2",
"answ3":"TWO",
"answ2":"2.",
},
{
"cat":"Thrillers",
"ques":"Who plays TV news producer Nina Romina in 2014's Nightcrawler?",
"answ":"RENE RUSSO",
"answ2":"Rene Russo.",
},
{
"cat":"Wizarding World",
"ques":"In the Harry Potter films, what is the name of the skeletal winged horse-like creatures that are only visible to those who have witnessed death?",
"answ":"THESTRALS",
"answ2":"Thestrals.",
},
{
"cat":"Disaster Films",
"ques":"Which actress plays a small-town mayor, opposite Pierce Brosnan in Dante's Peak?",
"answ":"LINDA HAMILTON",
"answ2":"Linda Hamilton.",
},
{
"cat":"Modern Classics",
"ques":"Forrest Gump is shot in which body part while in combat in Vietnam in Forrest Gump?",
"answ":"BUTT",
"answ3":"BUTTOCKS",
"answ2":"Butt.",
},
{
"cat":"War",
"ques":"Tom Cruise plays Ron Kovic, a veteran of what war in the Oliver Stone film Born on the Fourth of July?",
"answ":"VIETNAM WAR",
"answ3":"VIETNAM",
"answ2":"Vietnam War.",
},
{
"cat":"Disney",
"ques":"What 1993 Disney movie is a remake of Disney's The Incredible Journey?",
"answ":"HOMEWARD BOUND",
"answ2":"Homeward Bound.",
},
{
"cat":"Alien/Predator",
"ques":"In Alien: Covenant, which DCEU actor plays Christopher Oram, the first mate of the ship who is married to Karine?",
"answ":"BILLY CRUDUP",
"answ2":"Billy Crudup.",
},
{
"cat":"Spy Movies",
"ques":"One actor and one actress have appeared in both the Bourne and Mission Impossible series. Name either one of them.",
"answ":"JEREMY RENNER",
"answ3":"MICHELLE MONAGHAN",
"answ2":"Jeremy Renner/Michelle Monaghan.",
},
{
"cat":"Dramas",
"ques":"Who plays Tom Buchanan, Daisy's husband, in the 2013 Baz Luhrmann film, The Great Gatsby?",
"answ":"JOEL EDGERTON",
"answ2":"Joel Edgerton.",
},
{
"cat":"Family Films",
"ques":"Who plays the father of the seperated twins in the 1998 adaptation of The Parent Trap?",
"answ":"DENNIS QUAID",
"answ2":"Dennis Quaid.",
},
{
"cat":"Oscar Movies",
"ques":"Who won an Academy Award for her performance as an abusive mother in the 2009 drama Precious?",
"answ":"MONIQUE",
"answ3":"MO'NIQUE",
"answ2":"Mo'Nique.",
},
{
"cat":"Musicals",
"ques":"Who plays the escaped prisoner Jean Valjean in 2012's Les Miserables?",
"answ":"HUGH JACKMAN",
"answ2":"Hugh Jackman.",
},
{
"cat":"70s",
"ques":"Colonel Kurtz and Captain Willard can be found in this Francis Ford Coppola film.",
"answ":"APOCALYPSE NOW",
"answ2":"Apocalypse Now.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw films released in all of the following franchises: Star Wars, Toy Story, James Bond and The Matrix?",
"answ":"1999",
"answ2":"1999.",
},
{
"cat":"Westerns",
"ques":"Who played Sheriff Franklin Hunt in 2015's Bone Tomahawk?",
"answ":"KURT RUSSELL",
"answ2":"Kurt Russell.",
},
{
"cat":"SNL Movies",
"ques":"What is the first name of Tim Meadows' Ladies Man character as seen in the 2000 film?",
"answ":"LEON",
"answ2":"Leon.",
},
{
"cat":"Comedies",
"ques":"Who co-stars with Eddie Murphy in Dolemite Is My Name, as actor-director D'urville Martin?",
"answ":"WESLEY SNIPES",
"answ2":"Wesley Snipes.",
},
{
"cat":"Dystopian Future/Time Travel",
"ques":"In the final scene of Snowpiercer, the surviving characters see what type of animal walking through the snow?",
"answ":"POLAR BEAR",
"answ2":"Polar bear.",
},
{
"cat":"Directors",
"ques":"Whose feature film directorial debut was 2004's Dawn of the Dead?",
"answ":"ZACK SNYDER",
"answ2":"Zack Snyder.",
},
{
"cat":"Kevin Smith",
"ques":"This 1994 film was Kevin Smith's directorial debut.",
"answ":"CLERKS",
"answ2":"Clerks.",
},
{
"cat":"Movie Release Dates",
"ques":"What year saw the release of Saving Private Ryan and Shakespeare in Love?",
"answ":"1998",
"answ2":"1998.",
},
{
"cat":"DreamWorks Animation",
"ques":"What is the subtitle of the third film in the How To Train Your Dragon series?",
"answ":"THE HIDDEN WORLD",
"answ3":"HIDDEN WORLD",
"answ2":"The Hidden World.",
},
{
"cat":"Amy Adams",
"ques":"Who co-stars alongside Amy Adams as brilliant con man Irving Rosenfeld in 2013's American Hustle?",
"answ":"CHRISTIAN BALE",
"answ3":"KRISTIAN BALE",
"answ2":"Christian Bale.",
},
{
"cat":"Amy Adams",
"ques":"Who directed Amy Adams in the 2014 biographical dramedy Big Eyes?",
"answ":"TIM BURTON",
"answ2":"Tim Burton.",
},
{
"cat":"Fast & Furious",
"ques":"What is the name of the big race event at the end of 2001's The Fast & The Furious?",
"answ":"RACE WARS",
"answ2":"Race Wars.",
},
{
"cat":"80s",
"ques":"Cher won a Best Actress Oscar and Olympia Dukakis a Best Supporting Actress Oscar for what 1987 film?",
"answ":"MOONSTRUCK",
"answ2":"Moonstruck.",
},
{
"cat":"Biopics",
"ques":"Who stars as canyoneer Aron Ralston who has to free himself after he is trapped by a boulder in 127 Hours?",
"answ":"JAMES FRANCO",
"answ2":"James Franco.",
},
{
"cat":"Harrison Ford",
"ques":"Harrison Ford teams up with Josh Hartnett in what 2003 action comedy directed by Ron Shelton?",
"answ":"HOLLYWOOD HOMICIDE",
"answ2":"Hollywood Homicide.",
},
{
"cat":"Video Game Movies",
"ques":"Who stars as Lara Croft in the 2018 reboot of Tomb Raider?",
"answ":"ALICIA VIKANDER",
"answ2":"Alicia Vikander.",
},
{
"cat":"Directors",
"ques":"Who directed Wall Street, Natural Born Killers and Nixon?",
"answ":"OLIVER STONE",
"answ2":"Oliver Stone.",
},
{
"cat":"Movie Release Dates",
"ques":"Jurassic Park, Mrs. Doubtfire and Philadelphia were released in what year?",
"answ":"1993",
"answ2":"1993.",
},
{
"cat":"Horror",
"ques":"Jack Black plays famed author R.L. Stine in what 2015 horror comedy based on Stine's series of novels?",
"answ":"GOOSEBUMPS",
"answ2":"Goosebumps.",
},
{
"cat":"Pixar",
"ques":"Who voices James P. 'Sully' Sullivan in Monsters, Inc.?",
"answ":"JOHN GOODMAN",
"answ2":"John Goodman.",
},
{
"cat":"Historical Epics/Dramas",
"ques":"What Academy Award winning actor plays Achilles in the 2004 film Troy?",
"answ":"BRAD PITT",
"answ2":"Brad Pitt.",
},
{
"cat":"Crime",
"ques":"Who stars as Terry Benedict, the primary antagonist to the crew in Ocean's Eleven?",
"answ":"ANDY GARCIA",
"answ2":"Andy Garcia.",
},
{
"cat":"Matthew McConaughey",
"ques":"Who stars as wedding planner Mary Fiore alongside Matthew McConaughey in the film The Wedding Planner?",
"answ":"JENNIFER LOPEZ",
"answ2":"Jennifer Lopez.",
},
{
"cat":"Charlize Theron",
"ques":"Which Twilight actress stars alongside Charlize Theron in Snow White and the Huntsman?",
"answ":"KRISTEN STEWART",
"answ2":"Kristen Stewart.",
},
{
"cat":"Charlize Theron",
"ques":"Who stars alongside Charlize Theron as MI6 agent David Percival in Atomic Blonde?",
"answ":"JAMES MCAVOY",
"answ2":"James McAvoy.",
},
{
"cat":"Charlize Theron",
"ques":"Charlize Theron won her only Best Actress Oscar for which film?",
"answ":"MONSTER",
"answ2":"Monster.",
},
{
"cat":"Eddie Murphy",
"ques":"Who directed Eddie Murphy in 1988's Coming to America?",
"answ":"JOHN LANDIS",
"answ2":"John Landis.",
},
{
"cat":"Directors",
"ques":"Who directed the films Bottle Rocket and Rushmore?",
"answ":"WES ANDERSON",
"answ2":"Wes Anderson.",
},
{
"cat":"Comedies",
"ques":"This 2012 film was Seth MacFarlane's directorial debut and featured himself, Mark Wahlberg and Mila Kunis.",
"answ":"TED",
"answ2":"Ted.",
},
{
"cat":"Disney",
"ques":"In what 2014 Disney film does Elle Fanning play Princess Aurora?",
"answ":"MALEFICENT",
"answ3":"MALIFICENT",
"answ2":"Maleficent.",
},
{
"cat":"2000s",
"ques":"Mary Harron directed Christian Bale, Willem Dafoe en Jared Leto in what 2000 horror comedy?",
"answ":"AMERICAN PSYCHO",
"answ2":"American Psycho.",
},
{
"cat":"Animated",
"ques":"Fievel Mouskewitz is the name of the main character in what 1986 animated film?",
"answ":"AN AMERICAN TAIL",
"answ3":"AMERICAN TAIL",
"answ2":"An American Tail.",
},
{
"cat":"Holiday Movies",
"ques":"Bill Murray stars as Francis Xavier Cross in what 1988 holiday film?",
"answ":"SCROOGED",
"answ2":"Scrooged.",
},
{
"cat":"Will Smith",
"ques":"Who stars as President Thomas J. Whitmore in Independence Day?",
"answ":"BILL PULLMAN",
"answ2":"Bill Pullman.",
},
{
"cat":"Holiday Movies",
"ques":"This 2016 holiday film was directed by Garry Marshall and stars Jennifer Aniston, Kate Hudson and Julia Roberts.",
"answ":"MOTHER'S DAY",
"answ2":"Mother's Day.",
},
{
"cat":"Holiday Movies",
"ques":"This 1989 holiday film starred Chevy Chase, Beverly D'Angelo and Randy Quaid.",
"answ":"CHRISTMAS VACATION",
"answ3":"NATIONAL LAMPOON'S CHRISTMAS VACATION",
"answ2":"National Lampoon's Christmas Vacation.",
},
{
"cat":"Harrison Ford",
"ques":"This 2011 film features Harrison Ford alongside Daniel Craig, Olivia Wilde and Sam Rockwell.",
"answ":"COWBOYS AND ALIENS",
"answ2":"Cowboys & Aliens.",
},
{
"cat":"Oscar Movies",
"ques":"What is the only franchise to have won two Best Picture awards?",
"answ":"THE GODFATHER",
"answ3":"GODFATHER",
"answ2":"The Godfather.",
},
{
"cat":"80s",
"ques":"This 1985 dark fantasy film serves as an unofficial sequel to the 1939 classic The Wizard of Oz.",
"answ":"RETURN TO OZ",
"answ2":"Return to Oz.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"This 80s fantasy film features characters named Bastian, Atreyu, Falkor and Engywook.",
"answ":"THE NEVERENDING STORY",
"answ3":"NEVERENDING STORY",
"answ2":"The NeverEnding Story.",
},
{
"cat":"Keanu Reeves",
"ques":"Who plays football coach McGinty who coaches the team of replacements led by Keanu Reeves in The Replacements?",
"answ":"GENE HACKMAN",
"answ2":"Gene Hackman.",
},
{
"cat":"Denzel Washington",
"ques":"Denzel Washington plays alcoholic former marine John Creasy in what 2004 action film?",
"answ":"MAN ON FIRE",
"answ2":"Man on Fire.",
},
{
"cat":"Directors",
"ques":"Who directed the films Dune and Blue Velvet?",
"answ":"DAVID LYNCH",
"answ2":"David Lynch.",
},
{
"cat":"Fantasy/Sci-fi",
"ques":"What is the name of the first film in the Riddick film series?",
"answ":"PITCH BLACK",
"answ2":"Pitch Black.",
},
{
"cat":"David Fincher",
"ques":"Who stars as The Narrator in Fight Club?",
"answ":"EDWARD NORTON",
"answ2":"Edward Norton.",
},
{
"cat":"Horror",
"ques":"What 1996 supernatural horror film directed by Andrew Fleming starred Robin Tunney, Fairuza Balk and Neve Campbell?",
"answ":"THE CRAFT",
"answ2":"The Craft.",
},
{
"cat":"Animated",
"ques":"What is the name of the first spin-off movie from the Despicable Me franchise?",
"answ":"MINIONS",
"answ2":"Minions.",
},
{
"cat":"Crime",
"ques":"What 1992 film features characters named Mr. Pink, Mr. Orange and Mr. Brown?",
"answ":"RESERVOIR DOGS",
"answ2":"Reservoir Dogs.",
},
{
"cat":"Tom Cruise",
"ques":"Who directed the first installment in the Mission: Impossible franchise?",
"answ":"BRIAN DE PALMA",
"answ3":"BRYAN DE PALMA",
"answ2":"Brian De Palma.",
},
{
"cat":"Tom Cruise",
"ques":"Tom Cruise starred alongside Emily Blunt in what 2014 sci-fi action film?",
"answ":"EDGE OF TOMORROW",
"answ3":"LIVE DIE REPEAT",
"answ2":"Edge of Tomorrow/Live Die Repeat.",
},
{
"cat":"Tom Cruise",
"ques":"What 2003 Edward Zwick film stars Tom Cruise as a former army captain?",
"answ":"THE LAST SAMURAI",
"answ3":"LAST SAMURAI",
"answ2":"The Last Samurai.",
},
{
"cat":"Tom Cruise",
"ques":"Tom Cruise starred alongside Paul Newman in what 1986 sports drama that was a sequel to a 1961 film?",
"answ":"THE COLOR OF MONEY",
"answ3":"COLOR OF MONEY",
"answ2":"The Color of Money.",
},
{
"cat":"Dwayne Johnson",
"ques":"Who directed 2017's Baywatch?",
"answ":"SETH GORDON",
"answ2":"Seth Gordon.",
},
{
"cat":"Comedies",
"ques":"Who plays Dr. John Watson in 2018's Holmes & Watson?",
"answ":"JOHN C REILLY",
"answ2":"John C. Reilly.",
},
{
"cat":"Comedies",
"ques":"In Forgetting Sarah Marshall, Jason Segel's character has an idea to make a rock musical involving puppets about what iconic horror character?",
"answ":"DRACULA",
"answ2":"Dracula.",
},
{
"cat":"80s",
"ques":"This 1989 comedy featured Jim Belushi as a police detective who is assigned a police dog whom he dislikes at first.",
"answ":"K9",
"answ3":"K 9",
"answ2":"K-9.",
},
{
"cat":"80s",
"ques":"What actor played the lead role in The Secret of My Success and Bright Lights Big City?",
"answ":"MICHAEL J FOX",
"answ2":"Michael J. Fox.",
},
{
"cat":"Biopics",
"ques":"Oliver Stone has directed three biographical films about U.S. Presidents: JFK, W. and what other film?",
"answ":"NIXON",
"answ2":"Nixon.",
},
{
"cat":"Black Cinema",
"ques":"Who played Furious Styles, father to Tre Styles in 1991's Boyz n The Hood?",
"answ":"LAURENCE FISHBURNE",
"answ2":"Laurence Fishburne.",
},
{
"cat":"Tom Hanks",
"ques":"Who plays homophobic attorney Joe Miller who is hired by Tom Hanks' character in 1993's Philadelphia?",
"answ":"DENZEL WASHINGTON",
"answ2":"Denzel Washington.",
},
{
"cat":"90s",
"ques":"Who stars as FBI trainee Clarice Starling in 1991's The Silence of the Lambs?",
"answ":"JODIE FOSTER",
"answ2":"Jodie Foster.",
},
{
"cat":"Tom Hanks",
"ques":"Tom Hanks received his fifth Best Actor Oscar nomination for his role in what 2000 film directed by Robert Zemeckis?",
"answ":"CAST AWAY",
"answ2":"Cast Away.",
},
{
"cat":"James Bond",
"ques":"What 2002 film saw the final portrayal of 007 by Pierce Brosnan?",
"answ":"DIE ANOTHER DAY",
"answ2":"Die Another Day.",
},
{
"cat":"Scarlett Johansson",
"ques":"Scarlett Johansson and Adam Driver both received Oscar nominations for what 2019 film?",
"answ":"MARRIAGE STORY",
"answ2":"Marriage Story.",
},
{
"cat":"Classics",
"ques":"Who stars as college graduate Ben Braddock in 1967's The Graduate?",
"answ":"DUSTIN HOFFMAN",
"answ2":"Dustin Hoffman.",
},
{
"cat":"Coming of Age",
"ques":"Which Oscar nominated actor stars alongside Jennifer Garner as Matt Flamhaff in Thirteen Going on Thirty?",
"answ":"MARK RUFFALO",
"answ2":"Mark Ruffalo.",
},
{
"cat":"Charlize Theron",
"ques":"Charlize Theron portrayed journalist Megyn Kelly in what 2019 film?",
"answ":"BOMBSHELL",
"answ2":"Bombshell.",
},
{
"cat":"Famous Actors and Actresses",
"ques":"Which famous comedian voices the infamous cat Garfield in Garfield: The Movie?",
"answ":"BILL MURRAY",
"answ2":"Bill Murray.",
},
{
"cat":"Wrestlers in Film",
"ques":"What famous wrestler appears as Thunderlips in 1982's Rocky III?",
"answ":"HULK HOGAN",
"answ2":"Hulk Hogan.",
},
{
"cat":"Animated",
"ques":"Singer songwriter Pharrell Williams provides the voice of The Narrator in what 2018 animated film?",
"answ":"THE GRINCH",
"answ2":"The Grinch.",
},
{
"cat":"Musicals",
"ques":"Jennifer Hudson won an Academy Award for Best Supporting Actress for what 2006 musical drama?",
"answ":"DREAMGIRLS",
"answ2":"Dreamgirls.",
},
{
"cat":"Crime",
"ques":"What famous singer stars as hacker Nine Ball in 2018's Ocean's Eight?",
"answ":"RIHANNA",
"answ2":"Rihanna.",
},
{
"cat":"Horror",
"ques":"What is the only Halloween film that does not feature the main series antagonist Michael Myers?",
"answ":"HALLOWEEN 3",
"answ3":"HALLOWEEN III",
"answ2":"Halloween III.",
},
{
"cat":"Oscar Movies",
"ques":"What was the first movie to win the Oscar for Best Animated Feature?",
"answ":"SHREK",
"answ2":"Shrek.",
},
{
"cat":"Tom Cruise",
"ques":"Who plays Rowdy Burns, the archrival driver of Tom Cruise's character in Days of Thunder?",
"answ":"MICHAEL ROOKER",
"answ2":"Michael Rooker.",
},
{
"cat":"Horror",
"ques":"In which horror franchise would you find the character Lawrence Gordon?",
"answ":"SAW",
"answ2":"Saw.",
},
{
"cat":"Horror",
"ques":"In which horror franchise would you find the character Gale Weathers?",
"answ":"SCREAM",
"answ2":"Scream.",
},
{
"cat":"Stanley Kubrick",
"ques":"In which year was Stanley Kubrick's The Shining released?",
"answ":"1980",
"answ2":"1980.",
},
{
"cat":"Horror",
"ques":"What was the name of the motel in Psycho?",
"answ":"THE BATES MOTEL",
"answ3":"BATES MOTEL",
"answ2":"The Bates Motel.",
},
{
"cat":"Spoof Movies",
"ques":"Which comedic actor played the U.S. President in Scary Movie 3?",
"answ":"LESLIE NIELSEN",
"answ2":"Leslie Nielsen.",
},
{
"cat":"Will Smith",
"ques":"What is the name of the 'dog' from Men in Black?",
"answ":"FRANK",
"answ3":"FRANK THE PUG",
"answ2":"Frank.",
},
{
"cat":"Family Movies",
"ques":"Who played Teddy Roosevelt in Night at the Museum?",
"answ":"ROBIN WILLIAMS",
"answ2":"Robin Williams.",
},
{
"cat":"Family Movies",
"ques":"Who played Amelia Earheart in Night at the Museum?",
"answ":"AMY ADAMS",
"answ2":"Amy Adams.",
},
{
"cat":"Comedies",
"ques":"What is the name of the talk show hosted by James Franco in The Interview?",
"answ":"SKYLARK TONIGHT",
"answ2":"Skylark Tonight.",
},
{
"cat":"Family Movies",
"ques":"What is the name of the family cat in Stuart Little?",
"answ":"SNOWBELL",
"answ2":"Snowbell.",
},
{
"cat":"Sly & Arnie",
"ques":"What's the first name of Harry Tasker's wife, played by Jamie Lee Curtis, in True Lies?",
"answ":"HELEN",
"answ2":"Helen.",
},
{
"cat":"Black Cinema",
"ques":"In 2004's White Chicks, what sport did the character Latrell Spencer, portayed by Terry Crews, play?",
"answ":"BASKETBALL",
"answ2":"Basketball.",
},
{
"cat":"Comedies",
"ques":"In Clueless, what brand of car does Cher drive?",
"answ":"JEEP",
"answ3":"JEEP WRANGLER",
"answ2":"Jeep.",
},
{
"cat":"Comedies",
"ques":"Which actress played the role of Vicky in American Pie?",
"answ":"TARA REID",
"answ2":"Tara Reid.",
},
{
"cat":"YA Adaptations",
"ques":"Twilight is set in which American town?",
"answ":"FORKS",
"answ2":"Forks.",
},
{
"cat":"Adam Sandler",
"ques":"In Jack and Jill, Al Pacino appears in a commercial for which company?",
"answ":"DUNKIN' DONUTS",
"answ2":"Dunkin' Donuts.",
},
{
"cat":"Comedies",
"ques":"Who played Jack and Jill in the film Jack and Jill?",
"answ":"ADAM SANDLER",
"answ2":"Adam Sandler.",
},
{
"cat":"Comedies",
"ques":"The Hangover Part II is set in which country?",
"answ":"THAILAND",
"answ2":"Thailand.",
},
{
"cat":"Jennifer Aniston",
"ques":"Who played Beau Burroughs, who had relationships with three generations of Richelieu women in Rumor Has It?",
"answ":"KEVIN COSTNER",
"answ2":"Kevin Costner.",
},
{
"cat":"Movie Quotes",
"ques":"What 1960s western film featured the quote: 'Whatever they're sellin', I don't want it.'?",
"answ":"BUTCH CASSIDY AND THE SUNDANCE KID",
"answ2":"Butch Cassidy and the Sundance Kid.",
},
{
"cat":"Movie Quotes",
"ques":"Name the movie from the quote: 'I know it was you, Fredo. You broke my heart. You broke my heart.'",
"answ":"THE GODFATHER PART II",
"answ3":"GODFATHER PART II",
"answ2":"The Godfather: Part II.",
},
{
"cat":"Movie Quotes",
"ques":"Name the movie from the quote: 'This is Ripley, last survivor of the Nostromo, signing off.'",
"answ":"ALIEN",
"answ2":"Alien.",
},
{
"cat":"Movie Quotes",
"ques":"Which 1971 movie featured the quote: 'If the good Lord had intended us to walk, he wouldn't have invented roller skates.'",
"answ":"WILLY WONKA AND THE CHOCOLATE FACTORY",
"answ2":"Willy Wonka and the Chocolate Factory.",
},
{
"cat":"Robert De Niro",
"ques":"Which De Niro film featured the quote: 'Someday a real rain will come and wash all the scum off the streets.'",
"answ":"TAXI DRIVER",
"answ2":"Taxi Driver.",
},
{
"cat":"Movie Quotes",
"ques":"Name the movie from the quote: 'If my calculations are correct, when this baby hits 88 miles per hour... you're gonna see some serious shit.'",
"answ":"BACK TO THE FUTURE",
"answ2":"Back to the Future.",
},
{
"cat":"Movie Quotes",
"ques":"Name the movie from the quote: 'Mama says: Stupid is as stupid does.'",
"answ":"FORREST GUMP",
"answ2":"Forrest Gump.",
},
{
"cat":"Bill Murray",
"ques":"Which Bill Murray film featured the quote: 'I have been stabbed, shot, poisoned, frozen, hung, electrocuted, and burned.'",
"answ":"GROUNDHOG DAY",
"answ2":"Groundhog Day.",
},
{
"cat":"Movie Quotes",
"ques":"The first rule of Fight Club is ________________.",
"answ":"YOU DO NOT TALK ABOUT FIGHT CLUB",
"answ3":"DON'T TALK ABOUT FIGHT CLUB",
"answ2":"You do not talk about Fight Club.",
},
{
"cat":"2000s",
"ques":"What 2005 film shows the story of James Braddock, a supposedly washed up boxer who came back to become a champion?",
"answ":"CINDERELLA MAN",
"answ2":"Cinderella Man.",
},
{
"cat":"2000s",
"ques":"Name the movie: 'An eastern immigrant finds himself stranded in JFK airport, and must take up temporary residence there.'",
"answ":"THE TERMINAL",
"answ2":"The Terminal.",
},
{
"cat":"90s",
"ques":"A weatherman finds himself living the same day over and over again in which film?",
"answ":"GROUNDHOG DAY",
"answ2":"Groundhog Day.",
},
{
"cat":"Movie Release Dates",
"ques":"What year was Hitch released?",
"answ":"2005",
"answ2":"2005.",
},
{
"cat":"Movie Release Dates",
"ques":"What year was The Interview released?",
"answ":"2014",
"answ2":"2014.",
},
{
"cat":"Movie Release Dates",
"ques":"What year was The Proposal released?",
"answ":"2009",
"answ2":"2009.",
},
{
"cat":"Movie Release Dates",
"ques":"What year was Step Brothers released?",
"answ":"2008",
"answ2":"2008.",
},
{
"cat":"90s",
"ques":"Who plays the title character in 1996's Jerry Maguire?",
"answ":"TOM CRUISE",
"answ2":"Tom Cruise.",
},
{
"cat":"Crime",
"ques":"Which actor plays the main character Frank Lucas in American Gangster?",
"answ":"DENZEL WASHINGTON",
"answ2":"Denzel Washington.",
},
{
"cat":"Harrison Ford",
"ques":"Who directed The Fugitive?",
"answ":"ANDREW DAVIS",
"answ2":"Andrew Davis.",
},
];
question001 = shuffle(question001);
