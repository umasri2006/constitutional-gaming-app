// Level 2 - Matching Game

let matchingData = null;
let selectedArticle = null;
let selectedDescription = null;

function startLevel2() {
  // Set up level 2
  gameState.level = 2;
  gameState.matches = 0;
  gameState.mistakes = 0;
  gameState.matchedPairs = [];
  
  // Get data for matching game
  matchingData = getMatchingGameData();
  
  // Reset selections
  selectedArticle = null;
  selectedDescription = null;
  
  // Populate the matching game
  populateMatchingGame();
  
  // Update score display
  updateScore();
  
  // Show Level 2 screen
  showScreen('level2-screen');
}

function populateMatchingGame() {
  // Get containers
  const articleNumbersContainer = document.getElementById('article-numbers');
  const articleDescriptionsContainer = document.getElementById('article-descriptions');
  
  // Clear containers
  articleNumbersContainer.innerHTML = '';
  articleDescriptionsContainer.innerHTML = '';
  
  // Add article numbers to left column
  matchingData.articleNumbers.forEach(item => {
    const element = document.createElement('div');
    element.className = 'matching-item';
    element.textContent = item.text;
    element.dataset.id = item.id;
    
    // Check if already matched
    if (gameState.matchedPairs.includes(item.id)) {
      element.classList.add('matched');
    } else {
      element.addEventListener('click', () => selectArticle(element, item));
    }
    
    articleNumbersContainer.appendChild(element);
  });
  
  // Add descriptions to right column
  matchingData.articleDescriptions.forEach(item => {
    const element = document.createElement('div');
    element.className = 'matching-item';
    element.textContent = item.text;
    element.dataset.id = item.id;
    
    // Truncate long descriptions for UI
    if (item.text.length > 150) {
      element.textContent = item.text.substring(0, 147) + '...';
    }
    
    // Check if already matched
    const isMatched = gameState.matchedPairs.includes(item.id) && 
                      !item.id.startsWith('distractor-');
    
    if (isMatched) {
      element.classList.add('matched');
    } else {
      element.addEventListener('click', () => selectDescription(element, item));
    }
    
    articleDescriptionsContainer.appendChild(element);
  });
}

function selectArticle(element, item) {
  // Clear previous selection if any
  document.querySelectorAll('#article-numbers .matching-item').forEach(el => {
    el.classList.remove('selected');
  });
  
  // Select this article
  element.classList.add('selected');
  selectedArticle = item;
  
  // Check if we can make a match
  checkForMatch();
}

function selectDescription(element, item) {
  // Clear previous selection if any
  document.querySelectorAll('#article-descriptions .matching-item').forEach(el => {
    el.classList.remove('selected');
  });
  
  // Select this description
  element.classList.add('selected');
  selectedDescription = item;
  
  // Check if we can make a match
  checkForMatch();
}

function checkForMatch() {
  // Check if both an article and description are selected
  if (!selectedArticle || !selectedDescription) return;
  
  // Compare IDs to see if they match
  if (selectedArticle.id === selectedDescription.id) {
    // Match found!
    makeMatch(selectedArticle.id);
  }
}

function makeMatch(id) {
  // Add to matched pairs
  if (!gameState.matchedPairs.includes(id)) {
    gameState.matchedPairs.push(id);
  }
  
  // Update UI to show matched pair
  document.querySelectorAll(`.matching-item[data-id="${id}"]`).forEach(el => {
    el.classList.add('matched');
    el.classList.remove('selected');
  });
  
  // Update match count
  gameState.matches = gameState.matchedPairs.length;
  
  // Add coins
  gameState.coins++;
  
  // Update score display
  updateScore();
  
  // Clear selections
  selectedArticle = null;
  selectedDescription = null;
  
  // Check if level complete (all 10 matches found)
  if (gameState.matches >= 10) {
    // Add bonus coins for completing all matches
    gameState.coins += 20;
    updateScore();
    
    // Show results
    document.getElementById('result-message').textContent = 
      'Congratulations! You have successfully completed all levels of the Constitution of India learning game!';
    
    // Show results after a delay
    setTimeout(completeGame, 1500);
  }
}

function submitMatches() {
  // Process currently selected items if any
  if (selectedArticle && selectedDescription) {
    if (selectedArticle.id === selectedDescription.id) {
      makeMatch(selectedArticle.id);
    } else {
      // Wrong match
      gameState.mistakes++;
      updateScore();
      
      // Clear selections
      document.querySelectorAll('.matching-item.selected').forEach(el => {
        el.classList.remove('selected');
      });
      selectedArticle = null;
      selectedDescription = null;
      
      // Check if too many mistakes
      if (gameState.mistakes >= gameState.maxMistakes) {
        // Too many mistakes, go back to level 1
        alert('You made too many mistakes! Going back to Level 1.');
        startLevel1();
      }
    }
  } else {
    alert('Please select an article and a description to match!');
  }
}

function useHelp() {
  // Check if enough coins
  if (gameState.coins < 40) {
    alert('Not enough coins! You need 40 coins to use help.');
    return;
  }
  
  // Deduct coins
  gameState.coins -= 40;
  updateScore();
  
  // Find an unmatched article
  const unmatchedArticles = matchingData.articleNumbers.filter(
    article => !gameState.matchedPairs.includes(article.id)
  );
  
  if (unmatchedArticles.length === 0) {
    alert('All articles are already matched!');
    return;
  }
  
  // Get a random unmatched article
  const randomArticle = unmatchedArticles[Math.floor(Math.random() * unmatchedArticles.length)];
  
  // Find its matching description
  const matchingDescription = matchingData.articleDescriptions.find(
    desc => desc.id === randomArticle.id
  );
  
  if (!matchingDescription) {
    alert('Error finding matching description. Please try again.');
    return;
  }
  
  // Highlight the matching pair briefly
  const articleElement = document.querySelector(`.matching-item[data-id="${randomArticle.id}"]`);
  const descriptionElement = document.querySelector(`.matching-item[data-id="${matchingDescription.id}"]`);
  
  if (articleElement && descriptionElement) {
    articleElement.style.backgroundColor = 'var(--success-color)';
    descriptionElement.style.backgroundColor = 'var(--success-color)';
    articleElement.style.color = 'white';
    descriptionElement.style.color = 'white';
    
    // Reset after showing the hint
    setTimeout(() => {
      articleElement.style.backgroundColor = '';
      descriptionElement.style.backgroundColor = '';
      articleElement.style.color = '';
      descriptionElement.style.color = '';
    }, 3000);
  }
}