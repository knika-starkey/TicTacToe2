let simbols = ["", "X", "O"];
let tictactoe = [[], [], [], []];
let countO = 0;
let countX = 0;
for (let i = 0; i < tictactoe.length; i++) {
  for (let j = 0; j < 4; j++) {
    tictactoe[i].push(simbols[Math.floor(Math.random() * simbols.length)]);
    if (tictactoe[i][j] == "O") countO++;
    else if (tictactoe[i][j] == "X") countX++;
  }
}
let str = "<table><tr><th></th><th></th><th></th><th></th></tr>";
for (let i = 0; i < tictactoe.length; i++) {
  str += "<tr>";
  for (let j = 0; j < tictactoe[i].length; j++) {
    str += `<td>${tictactoe[i][j]}</td>`;
  }
  str += "</tr>";
}
str += "/<table>";
countO > countX
  ? (str += `Виграли О, їх аж ${countO}`)
  : countX > countO
  ? (str += `Виграли X, їх аж ${countX}`)
  : (str += "Нічия");
document.write(str);
