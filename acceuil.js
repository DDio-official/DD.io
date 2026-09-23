let player = null; 

const rows = document.querySelectorAll('.leaderboard-row');

rows.forEach((row, index) => {
    const num = index + 1;

    const pdp = row.querySelector('.pdp');
    const lvl = row.querySelector('.lvl');
    const name = row.querySelector('.name');
    const money = row.querySelector('.money');


    pdp.src = (player ? player.pdp : null) || './test.png';
    lvl.textContent = `lvl ${(player ? player.level : null) || 0}`;
    name.textContent = (player ? player.name : null) || 'Anonymous';
    money.textContent = `${(player ? player.money : null) || 0} $`;
});