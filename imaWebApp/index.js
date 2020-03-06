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
    pendGame(court);
  } else if (court.classList.contains("filling")) {//Joining pending game
    let teams = court.querySelectorAll("img");
    if(addPlayer(teams[0])) {
      notify("success");
    } else if (addPlayer(teams[1])) {
      notify("success");
      if(teams[1].getAttribute("src").charAt(7) == 5) {
        setTimeout(function(){ startGame(court); }, 500);
      }
    } else {
      notify("fail")
    }
  } else {//Joining Queue
    if(addPlayer(court.querySelector("img")))
      notify("success");
    else {
      notify("fail");
    }
  }
}

function startGame(court) {
  court.classList.remove("filling");
  court.classList.add("full");
  let msgContainer = court.querySelector(".msg");
  empty(msgContainer);
  msgContainer.appendChild(par("Call next"));
  msgContainer.appendChild(newTeam(0));

}

function pendGame(court) {
  court.classList.remove("empty");
  court.classList.add("filling");
  let msgContainer = court.querySelector(".msg");
  empty(msgContainer);
  msgContainer.appendChild(par("Join game"));//appends new message
  msgContainer.appendChild(newTeam(1));
  msgContainer.appendChild(newTeam(0));
  notify("success");
}

function addPlayer(team) {
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

function empty(container) {//empties container
  while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
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
