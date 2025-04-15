  let scoreA = 0;
  let scoreB = 0;
  const WINNING_SCORE = 21;

  function addPoints(team, points) {
    const sound = document.getElementById('score-sound');
    sound.play();

    const historyLog = document.getElementById('history-log');

    if (team === 'a') {
      scoreA += points;
      document.getElementById('score-a').textContent = scoreA;
      historyLog.innerHTML += `<li>Team A scored +${points}</li>`;
    } else {
      scoreB += points;
      document.getElementById('score-b').textContent = scoreB;
      historyLog.innerHTML += `<li>Team B scored +${points}</li>`;
    }

    updateWinnerHighlight();
    checkWinner();
  }

  function resetScores() {
    scoreA = 0;
    scoreB = 0;
    document.getElementById('score-a').textContent = 0;
    document.getElementById('score-b').textContent = 0;
    document.getElementById('history-log').innerHTML = "";
    updateWinnerHighlight();
  }

  function updateWinnerHighlight() {
    const teamA = document.getElementById('team-a');
    const teamB = document.getElementById('team-b');

    teamA.classList.remove('winning');
    teamB.classList.remove('winning');

    if (scoreA > scoreB) {
      teamA.classList.add('winning');
    } else if (scoreB > scoreA) {
      teamB.classList.add('winning');
    }
  }

  function checkWinner() {
    if (scoreA >= WINNING_SCORE || scoreB >= WINNING_SCORE) {
      let winner = scoreA > scoreB ? "Team Home" : "Team Guest";
      alert(`${winner} wins the game!`);
      resetScores();
    }
  }

