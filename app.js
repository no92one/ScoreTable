const headLine = document.createElement("h1")
headLine.innerText = "Scoreboard!"

const users = [
  {
    name: "Player1",
    score: 0
  },
  {
    name: "Player2",
    score: 0
  },
  {
    name: "Player3",
    score: 0
  },
  {
    name: "Player4",
    score: 0
  },
  {
    name: "Player5",
    score: 0
  },
  {
    name: "Player6",
    score: 0
  }
]

// Skapa table element
const tabel = document.createElement("table")
const thead = document.createElement("thead")
const tbody = document.createElement("tbody")
const trHead = document.createElement("tr")
const thName = document.createElement("th")
const thScore = document.createElement("th")
const thAdd1 = document.createElement("th")
const thRemove1 = document.createElement("th")
const thAdd5 = document.createElement("th")
const thRemove5 = document.createElement("th")

// Stoppa in text i table head columns
thName.innerText = "Player Name"
thAdd1.innerText = "Add 1"
thRemove1.innerText = "Remove 1"
thAdd5.innerText = "Add 5"
thRemove5.innerText = "Remove 5"
thScore.innerText = "Player Score"

// Bygger ihopa min table
trHead.appendChild(thName)
trHead.appendChild(thAdd1)
trHead.appendChild(thRemove1)
trHead.appendChild(thAdd5)
trHead.appendChild(thRemove5)
trHead.appendChild(thScore)
thead.appendChild(trHead)
tabel.appendChild(thead)
tabel.appendChild(tbody)

let index = 0;

for (let user of users) {
  // Skapa alla table element för varje spelar rad 
  const playerRow = document.createElement("tr")
  const playerName = document.createElement("td")
  const playerAdd1 = document.createElement("td")
  const playerRemove1 = document.createElement("td")
  const playerAdd5 = document.createElement("td")
  const playerRemove5 = document.createElement("td")
  const playerScore = document.createElement("td")

  // lägger till text i varje spelar rads kolumn 
  playerName.innerText = user.name
  playerAdd1.innerText = "+ 1"
  playerRemove1.innerText = "- 1"
  playerAdd5.innerText = "+ 5"
  playerRemove5.innerText = "- 5"
  playerScore.innerText = user.score

  playerAdd1.id = index
  playerRemove1.id = index
  playerAdd5.id = index
  playerRemove5.id = index
  playerScore.id = index

  playerAdd1.classList.add("add1")
  playerRemove1.classList.add("remove1")
  playerAdd5.classList.add("add5")
  playerRemove5.classList.add("remove5")
  playerScore.classList.add("playerScore")

  playerRow.appendChild(playerName)
  playerRow.appendChild(playerAdd1)
  playerRow.appendChild(playerRemove1)
  playerRow.appendChild(playerAdd5)
  playerRow.appendChild(playerRemove5)
  playerRow.appendChild(playerScore)

  tbody.appendChild(playerRow)
  index++;
}

tbody.addEventListener("click", function (event) {
  const target = event.target;
  const playerIndex = target.getAttribute("id")

  if (target.matches(".add1")) {
    users[playerIndex].score++;
  } else if (target.matches(".remove1")) {
    users[playerIndex].score--;
  } else if (target.matches(".add5")) {
    users[playerIndex].score += 5;
  } else if (target.matches(".remove5")) {
    users[playerIndex].score -= 5;
  }

  document.getElementsByClassName("playerScore")[playerIndex].innerText = users[playerIndex].score
})

document.body.appendChild(headLine)
document.body.appendChild(table)


