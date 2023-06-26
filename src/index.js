window.onload = function() {
    const characterBar = document.getElementById('character-bar');
    const characterImage = document.getElementById('image');
    const characterName = document.getElementById('name');
    const votesForm = document.getElementById('votes-form');
    const votesInput = document.getElementById('votes');
    const flataApi = "https://api.npoint.io/9cd2a33b98f11a0d0794/characters"
    
    fetch(`${flataApi}`)
      .then(response => response.json())
      .then(data => {
        data.forEach(character => {
          const characterNameElement = document.createElement('p');
          characterNameElement.textContent = character.name;
          characterNameElement.addEventListener('click', () => {
            characterImage.src = character.image;
            characterImage.alt = character.name;
            characterName.textContent = character.name;
          });
          characterBar.appendChild(characterNameElement);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
    votesForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const characterVotes = document.createElement('h1');
      const characterVotesValue = parseInt(votesInput.value);
      const characterVoteCount = characterVotesValue || 0;
  
      if (characterVotesValue) {
        characterVotes.textContent = `Total Votes: ${characterVotesValue}`;
        characterBar.appendChild(characterVotes);
      }
  
      votesInput.value = '';
    });
  };