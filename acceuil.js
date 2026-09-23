let player = null; 
const savedUsername = localStorage.getItem('ddio_username');
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

const buttonPlay = document.getElementById('buttonPlay');
const popUpPseudo = document.getElementById('popUpPseudo');
buttonPlay.addEventListener('click', function(){
    if (!caseHTP.checked && !caseTerms.checked == true) {
        alert('you need to check the 2 boxes first 😉')
        return;
    }
    const checkUser = localStorage.getItem('ddio_username');
    if (checkUser) {
        window.location.href = 'https://ddio-official.github.io/game/'
        return;
    }
    popUpPseudo.style.display = 'flex';
})

const closebtn = document.getElementById('close');
closebtn.addEventListener('click', function(){
    popUpPseudo.style.display = 'none';
})

const caseHTP = document.getElementById('caseHTP');
const caseTerms = document.getElementById('caseTerms');
if (savedUsername) {
    if (caseHTP) { caseHTP.checked = true; caseHTP.disabled = true; }
    if (caseTerms) { caseTerms.checked = true; caseTerms.disabled = true; }
    if (buttonPlay) { buttonPlay.textContent = `Play (${savedUsername})`; }
} else {
    buttonPlay.textContent = ('Play and login')
}
const PseudoBoutonOk = document.getElementById('PseudoBoutonOk');
const ChooseName = document.getElementById('ChooseName');
PseudoBoutonOk.addEventListener('click', function(){
    const ChosenName = ChooseName.value.trim();
    localStorage.setItem('ddio_username', ChosenName);
    alert(`profile saved as: ${ChosenName}`)
    window.location.reload();
})

const logOutButton = document.getElementById('logOutButton');
logOutButton.addEventListener('click', function(){
    localStorage.removeItem('ddio_username')
    alert(`Success action, you are now disconnected`)
    window.location.reload();
})