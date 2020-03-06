window.addEventListener("load", init);

function init() {
  let courts = document.querySelectorAll(".msg");
  for(let i = 0; i < courts.length; i++){
    courts[i].addEventListener("click", btnClicked);
  }
}

function btnClicked() {
  let court = this.parentNode;
  if(court.classList.contains("empty")) {//Starting new game
    startGame(court);
  } else if (court.classList.contains("filling")) {//Joining pending game
    let teams = court.querySelectorAll("img");
    if(addPlayer2(teams[0])) {
      notify("success");
    } else if (addPlayer2(teams[1])) {
      notify("success");
    } else {
      notify("fail");
    }
  } else {//Joining Queue
    if(addPlayer2(court.querySelector("img")))
      notify("success");
    else {
      notify("fail");
    }
  }
}

function startGame(court) {
  court.classList.remove("empty");
  court.classList.add("filling");
  let msgContainer = court.querySelector(".msg");
  while (msgContainer.hasChildNodes()) { //empties message container
        msgContainer.removeChild(msgContainer.lastChild);
  }
  msgContainer.appendChild(par("Join game"));//appends new message
  msgContainer.appendChild(newTeam(1));
  msgContainer.appendChild(newTeam(0));
  notify("success");
}


function addPlayer(court) {
  let imgSrc = court.querySelector("img").src;
  let players = imgSrc.charAt(39);
  console.log(imgSrc);
  if(players == '5') {
    notify("fail");
  } else {
    players++;
    court.querySelector("img").src = imgSrc.substring(32,39) + players + imgSrc.substring(40);
    notify("success");
  }
}

function addPlayer2(team) {
  let imgSrc = team.getAttribute("src");
  let players = imgSrc.charAt(7);
  if(players == '5') {
    return false;
  } else {
    players++;
    team.src = "images/" + players + "reds.png";
    return true;
  }
}

function par(phrase) {
  let p = document.createElement("p");
  p.textContent = phrase;
  return p;
}

function newTeam(players) {
  let img = document.createElement("img");
  img.src = "images/" + players + "reds.png";
  img.classList.add("team");
  return img;
}

function notify(msg) {
  let classList = document.getElementById(msg).classList;
  classList.toggle("hidden");
  setTimeout(function(){ classList.toggle("hidden"); }, 800);
}
