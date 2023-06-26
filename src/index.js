let viki = "https://api.npoint.io/9cd2a33b98f11a0d0794/characters/0"



// Your code here
// Retreve data on the characters from the server
fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(characters => {
    const characterBar = document.getElementById('character-bar');
  // Add character names to character bar
  characters.forEach(character => {
    const characterName = document.createElement('span');
    characterName.textContent = character.name;
    characterName.addEventListener('click', () => {
      displayCharacterDetails(character);
    });
    characterBar.appendChild(characterName);
  });
})
// To display character details in the detailed info section
function displayCharacterDetails(character) {
    const detailedInfo = document.getElementById('detailed-info');
    const name = detailedInfo.querySelector('#name');
    const image = detailedInfo.querySelector('#image');
    const voteCount = detailedInfo.querySelector('#vote-count');
    const votesForm = detailedInfo.querySelector('#votes-form'); 
// put character details
    name.textContent = character.name;
    image.src = character.image;
    image.alt = character.name;
    voteCount.textContent = character.votes;
//Votes submit event listener 
  votesForm.addEventListener('submit', event => { 
    event.preventDefault();
    const votesInput = votesForm.querySelector('#votes');
    const votes = parseInt(votesInput.value);
    if (!isNaN(votes)) {
      character.votes += votes;
      voteCount.textContent = character.votes;
      votesInput.value = '';
    }
  });
}