window.addEventListener("load", init);

let moves = 0;
let prevMoves = [0,0,0,0,0,0];

function init() {
  toggleHelp();
  document.getElementById("optn1").addEventListener("click", function() {switchScreen(1);});
  document.getElementById("optn2").addEventListener("click", function() {switchScreen(2);});
  document.getElementById("helpButton").addEventListener("click", toggleHelp);
  document.getElementById("help").addEventListener("click", toggleHelp);
  document.getElementById("bkBtn").addEventListener("click", back);
  generateSlide(0);
}

function back() {
    moves--;
    generateSlide(parseInt(prevMoves[moves]));
}

function toggleHelp() {
  document.getElementById("helpView").classList.toggle("hidden");
  document.getElementById("narContainer").classList.toggle("hidden");
  document.getElementById("btnsContainer").classList.toggle("hidden");
}

function generateSlide(i) {
  let slide = slides[i];
  document.getElementById("narContainer").querySelector("p").textContent = slide["nar"];
  plugOption(document.getElementById("optn1").querySelector("p"), slide["optn1"]);
  plugOption(document.getElementById("optn2").querySelector("p"), slide["optn2"]);
  let imgUrl = "url('" + slide["bg"] + "')";
  console.log(imgUrl);
  document.getElementById("bgContainer").style.backgroundImage = imgUrl;
}

function plugOption(container, option) {
  container.id = parseInt(option.substring(0,2));
  container.textContent = option.substring(2);
}

function switchScreen(optionNum) {
  moves++;
  let newSlide = document.getElementById("optn" + optionNum).querySelector("p").id;
  prevMoves[moves] = newSlide;
  generateSlide(newSlide - 1);
}

  let slides = [
{

"nar" : "Omar is a young male born in Aleppo, Syria who grew up as the second child of 4 siblings in a poor rural village in the north eastern provinces. His father solely supported the family through countless hardships, never being able to make enough to adequately support their needs as resources in their area were scarce and opportunities limited. Aside from joining the military or working in a poorly run factory Omar had little chance at bettering the situation of his family, with political instability in the area preventing foreign investors from setting up business there. Omar is left with the responsibility of providing for his family, while his sister encourages him to seek out education so that their family might gain more opportunities in the future.",

"bg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/City_of_Tadmor%2C_Syria.jpg/1920px-City_of_Tadmor%2C_Syria.jpg",

"optn1":"02Seek education",

"optn2":"09Help out family financially"

},

{

"nar" : " After the death of his youngest sister, family is brought closer together, but still suffers financially. The war takes its toll on the community, and it begins fracturing. Even with the limited education that Omar achieved, he can see where this goes, but is hesitant to leave because he does not know what other areas hold ",

"bg" : "https://www.trbimg.com/img-5afc85bb/turbine/la-1526498740-ub9lr3urvc-snap-image/2000",

"optn1": "03Flee early",

"optn2": "06Stay behind to stock up on resources"

},

{

"nar" : "A big mistake. People are not unkind, but that doesn’t mean refugees are welcome anywhere, especially without any resources. Other communities are hit just as hard as Omar’s, and continued flight is not without risks.",

"bg" : "https://media.newyorker.com/photos/59097157ebe912338a3771e4/master/w_2560%2Cc_limit/151026_r27203_crop.jpg",

"optn1": "04Flee further from conflict",

"optn2": "05Try to gain some stability of the situation"

},

{

"nar" : "Family is split up as younger brother falls ill, Mother and the older sibling stays back to tend to the young one, Father and Omar leaves with promises to get medicine. However, father is unwillingly drafted into one of the factions, leaving Omar for himself. There is no possibility that he can get material aid by himself without illegal means, or societal help without joining a faction ",

"bg" : "http://tracks.unhcr.org/wp-content/uploads/2014/12/2014-12-WFP-food-aid-24034-tracks.jpg",

"optn1": "26Steal meds",

"optn2": "16Join a faction to support the rest of the family"

},

{

"nar" : " Omar’s family was already unwanted, but trying to scrounge up resources made the locals even more ire. The temporary dwelling was raided, his mother and sister raped. Older brother sought vengeance and was not heard from again. The local militia laughed him off when he sought for help and justice",

"bg" : "https://cdni.rt.com/files/2016.11/article/581f127fc46188aa7c8b45c8.jpg",

"optn1": "24Try to flee with the traumatized family",

"optn2": "25Bite the bullet and endure"

},

{

"nar" : "Omar doesn’t know exactly how much supplies the family will need, but he knows that it is better to get more than less. However, the eagerness to accrue supplies catches the attention of some more desperate families. The times are tough, and we only have each other to rely on. But Omar’s hesitant to believe that the community could stay alive even with each other. ",

"bg" : "https://i.insider.com/52e8eb0e69bedda63b5b3f94?width=600&format=jpeg&auto=webp",

"optn1": "08Aid other members of the community",

"optn2": "07Hide away the resources"

},

{

"nar" : "Many suspected that Omar was lying, but no one dared acted hastily, especially since the stockpile was hidden away. However, the underlying animosity eventually lead one of the fleeing community members to give hints to the militant factions of Omar’s relative affluence for their own benefit. The factions approached amicably the first time, but Omar fears this isn’t the last time his family will be visited. ",

"bg" : "https://www.lifegate.com/app/uploads/Bangladesh_Coxs-Bazar_clinica-per-screening-e-cura-della-malnutrizione.jpg",

"optn1": "24Run now",

"optn2": "16Strike a deal with the militant faction"

},

{

"nar" : "Omar was too naïve to believe that the desperate could be trusted. The family stockpile was stolen from, and the community turns on each other. Force is necessary, although Omar despises it ",

"bg" : "https://api.time.com/wp-content/uploads/2015/04/palestinians-refugee-camp-lebanon.jpg?w=800&quality=85",

"optn1": "16Gain help of militant factions",

"optn2": "23Band together with allies of the community"

},

{

"nar" : "The tensions are rising. Omar’s family isn’t exactly affluent, but can manage themselves. Omar is able to keep a close eye on his siblings to notice that the younger brother is associating with some shady friends, but fortunately, the youngest sister is able to rein him in. The living gets tougher. Omar’s family believes the situation will pass with time, but the pressure of militant factions is scaring the family.",

"bg" : "https://www.dailystar.com.lb/dailystar/Pictures/2013/02/06/142752_img650x420_img650x420_crop.jpg",

"optn1": "13Reluctantly aid the militant factions",

"optn2": "10Ignore their presence"

},

{

"nar" : "Militant factions posed threateningly until pressure hit them from the side. After all, supplies are only good when you’re alive to fight. Without a doubt, they will return after the fiercest of battles is over, but some time was bought.",

"bg" : "https://www.featureshoot.com/wp-content/uploads/2017/01/9-1.jpg",

"optn1": "11Flee from conflict",

"optn2": "12Band together with the rest of the community into a fighting bloc"

},

{

"nar" : "The knowledge Omar gained from helping out the family finances helped him locate where the supplies are. And where there are supplies, there is always a town. Unfortunately for Omar, he didn’t realize that the paths that lead to supplies are often one that leads straight into military forces.",

"bg" : "",

"optn1": "22Relinquish their supplies and try to move further down the safe path",

"optn2": "16Join the faction"

},

{

"nar" : "As a bigger group, Omar’s town was able to repel the pressure, but even a small group has its power struggles. Omar may be more affluent with better control over the supplies to the town, but the brute force is not his strength. Fortunately, his younger sister is old enough to marry.",

"bg" : "https://ca-times.brightspotcdn.com/dims4/default/49fe2d1/2147483647/strip/true/crop/512x341+0+0/resize/840x559!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc4%2F18%2F562782d01181fc7cf1842b9a00f2%2Fsdut-file-in-this-sunday-march-11-20160903-003",

"optn1": "21Respect his sister's wishes and risk the fallout of the temporary alliance",

"optn2": "20Marry his younger sister to solidify power under his household"

},
]
