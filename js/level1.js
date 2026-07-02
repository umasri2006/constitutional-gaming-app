// Level 1 - Article Ninja Game

let throwInterval;
let activeArticles = [];

function startLevel1() {
  // Reset for Level 1
  gameState.level = 1;
  gameState.articlesFound = [];
  gameState.score = 0;
  
  // Clear game area
  const gameArea = document.getElementById('game-area');
  gameArea.innerHTML = '';
  activeArticles = [];
  
  // Update score display
  updateScore();
  
  // Start throwing articles
  throwArticles();
  
  // Show Level 1 screen
  showScreen('level1-screen');
}

function throwArticles() {
  if (throwInterval) clearInterval(throwInterval);
  
  throwInterval = setInterval(() => {
    if (gameState.isGamePaused) return;
    
    // Don't throw if there are already many articles on screen
    if (activeArticles.length >= 3) return; // Reduced from 5 to 3 for easier gameplay
    
    // Get available articles (those not already found)
    const availableArticles = allArticles.filter(
      article => !gameState.articlesFound.includes(article.number)
    );
    
    // If all articles have been found, complete the level
    if (availableArticles.length === 0) {
      clearInterval(throwInterval);
      setTimeout(() => {
        if (gameState.score >= 30) {
          // Advance to Level 2
          startLevel2();
        } else {
          // Show results with message to try again
          document.getElementById('result-message').textContent = 
            `You found ${gameState.score} out of 39 articles. You need at least 30 to advance to Level 2. Try again!`;
          completeGame();
        }
      }, 2000);
      return;
    }
    
    // Select a random article from available ones
    const randomIndex = Math.floor(Math.random() * availableArticles.length);
    const article = availableArticles[randomIndex];
    
    // Create article element
    createArticleElement(article);
    
  }, 3000); // Increased from 2000 to 3000ms - throw a new article every 3 seconds
}

function createArticleElement(article) {
  const gameArea = document.getElementById('game-area');
  const gameAreaRect = gameArea.getBoundingClientRect();
  
  // Create element
  const articleElement = document.createElement('div');
  articleElement.className = `article-item ${article.category}`;
  articleElement.textContent = article.number;
  articleElement.dataset.number = article.number;
  
  // Set random position on x-axis
  const posX = Math.random() * (gameAreaRect.width - 100) + 50;
  articleElement.style.left = `${posX}px`;
  
  // Start from below the visible area
  articleElement.style.bottom = '-100px';
  
  // Add to game area
  gameArea.appendChild(articleElement);
  
  // Add to active articles
  activeArticles.push({
    element: articleElement,
    article: article,
    posX: posX,
    startTime: Date.now()
  });
  
  // Set up click handler
  articleElement.addEventListener('click', () => {
    if (gameState.isGamePaused) return;
    handleArticleClick(articleElement, article);
  });
  
  // Animate upward
  let position = -100;
  const speed = 1; // Reduced from 2 to 1 - pixels per frame
  const maxHeight = gameAreaRect.height + 100;
  
  function animate() {
    if (gameState.isGamePaused) {
      requestAnimationFrame(animate);
      return;
    }
    
    position += speed;
    articleElement.style.bottom = `${position}px`;
    
    if (position <= maxHeight && articleElement.parentNode) {
      requestAnimationFrame(animate);
    } else if (articleElement.parentNode) {
      // Remove if passed top of screen
      articleElement.remove();
      activeArticles = activeArticles.filter(a => a.element !== articleElement);
    }
  }
  
  requestAnimationFrame(animate);
}

function handleArticleClick(element, article) {
  // Remove from game area with slice animation
  element.classList.add('sliced');
  
  // Create particle effect at click position
  const rect = element.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  
  // Get color based on category
  let color;
  switch (article.category) {
    case 'fundamental-rights':
      color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
      break;
    case 'fundamental-duties':
      color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
      break;
    case 'elections':
      color = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
      break;
    case 'citizenship':
      color = getComputedStyle(document.documentElement).getPropertyValue('--neutral-700');
      break;
    default:
      color = '#333';
  }
  
  createParticleEffect(x, y, color);
  
  // Mark as found if not already
  if (!gameState.articlesFound.includes(article.number)) {
    gameState.articlesFound.push(article.number);
    gameState.score++;
    updateScore();
  }
  
  // Remove from active articles
  activeArticles = activeArticles.filter(a => a.element !== element);
  
  // Show article info popup
  toggleArticlePopup(true, article);
  
  // Remove element after animation
  setTimeout(() => {
    if (element.parentNode) {
      element.remove();
    }
  }, 800); // Increased from 500 to 800ms for slower fade out
}

function pauseLevel1() {
  gameState.isGamePaused = true;
  togglePauseMenu(true);
}

function resumeLevel1() {
  gameState.isGamePaused = false;
  togglePauseMenu(false);
}

function stopLevel1() {
  if (throwInterval) {
    clearInterval(throwInterval);
    throwInterval = null;
  }
  
  // Clear all active articles
  activeArticles.forEach(a => {
    if (a.element.parentNode) {
      a.element.remove();
    }
  });
  activeArticles = [];
}