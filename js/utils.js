// Utility Functions

// Game state
const gameState = {
  level: 0, // 0 = menu, 1 = level 1, 2 = level 2
  coins: 100,
  score: 0,
  matches: 0,
  mistakes: 0,
  maxMistakes: 5,
  articlesFound: [],
  matchedPairs: [],
  isGamePaused: false
};

// Helper functions
function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Show the requested screen
  document.getElementById(screenId).classList.add('active');
}

function togglePauseMenu(show) {
  const pauseMenu = document.getElementById('pause-menu');
  if (show) {
    pauseMenu.classList.add('active');
    gameState.isGamePaused = true;
  } else {
    pauseMenu.classList.remove('active');
    gameState.isGamePaused = false;
  }
}

function toggleArticlePopup(show, article = null) {
  const popup = document.getElementById('article-popup');
  
  if (show && article) {
    // Update popup content
    document.getElementById('article-number').textContent = article.number;
    document.getElementById('article-category').textContent = article.categoryName;
    document.getElementById('article-category').className = 'article-category ' + article.category;
    document.getElementById('article-description').textContent = article.description;
    
    // Show popup
    popup.classList.add('active');
  } else {
    // Hide popup
    popup.classList.remove('active');
  }
}

function updateScore() {
  // Update UI with current score and coins
  document.getElementById('score').textContent = gameState.score;
  document.getElementById('coins').textContent = gameState.coins;
  document.getElementById('coins-level2').textContent = gameState.coins;
  document.getElementById('matches').textContent = gameState.matches;
  document.getElementById('mistakes').textContent = gameState.mistakes;
}

function getRandomArticles(count) {
  // Shuffle array and get the first 'count' elements
  return shuffleArray([...allArticles]).slice(0, count);
}

function getMatchingGameData() {
  // Get 10 random articles for matching game
  const matchingArticles = getRandomArticles(10);
  
  // Create an array of article numbers for the left side
  const articleNumbers = matchingArticles.map(article => ({
    id: article.number,
    text: `Article ${article.number}`,
    article: article
  }));
  
  // Create an array of descriptions for the right side
  const articleDescriptions = matchingArticles.map(article => ({
    id: article.number,
    text: article.description,
    article: article
  }));
  
  // Add 5 more random descriptions as distractors
  const distractorArticles = getRandomArticles(15).filter(
    article => !matchingArticles.some(a => a.number === article.number)
  ).slice(0, 5);
  
  const distractorDescriptions = distractorArticles.map(article => ({
    id: 'distractor-' + article.number,
    text: article.description,
    article: article
  }));
  
  return {
    articleNumbers: shuffleArray(articleNumbers),
    articleDescriptions: shuffleArray([...articleDescriptions, ...distractorDescriptions])
  };
}

function shuffleArray(array) {
  // Fisher-Yates (Knuth) shuffle algorithm
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function createParticleEffect(x, y, color, count = 10) {
  const gameArea = document.getElementById('game-area');
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.backgroundColor = color;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    // Random direction
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 3;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    
    gameArea.appendChild(particle);
    
    // Animate and remove
    let posX = x;
    let posY = y;
    let opacity = 1;
    let particleLifetime = 0;
    const maxLifetime = 30 + Math.random() * 20;
    
    const animateParticle = () => {
      if (particleLifetime >= maxLifetime) {
        particle.remove();
        return;
      }
      
      posX += vx;
      posY += vy;
      opacity -= 0.02;
      
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.opacity = opacity;
      
      particleLifetime++;
      requestAnimationFrame(animateParticle);
    };
    
    requestAnimationFrame(animateParticle);
  }
}

function resetGame() {
  gameState.level = 0;
  gameState.coins = 100;
  gameState.score = 0;
  gameState.matches = 0;
  gameState.mistakes = 0;
  gameState.articlesFound = [];
  gameState.matchedPairs = [];
  
  updateScore();
}

function completeGame() {
  // Update final results
  document.getElementById('final-score').textContent = gameState.score;
  document.getElementById('final-coins').textContent = gameState.coins;
  
  // Show results screen
  showScreen('results-screen');
}