// Main Application Logic

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  // Set up event listeners for UI controls
  setupEventListeners();
  
  // Start with the welcome screen
  showScreen('welcome-screen');
}

function setupEventListeners() {
  // Welcome Screen Buttons
  document.getElementById('start-btn').addEventListener('click', () => {
    resetGame();
    startLevel1();
  });
  
  document.getElementById('instructions-btn').addEventListener('click', () => {
    showScreen('instructions-screen');
  });
  
  // Instructions Screen
  document.getElementById('back-to-welcome').addEventListener('click', () => {
    showScreen('welcome-screen');
  });
  
  // Level 1 Controls
  document.getElementById('pause-btn').addEventListener('click', pauseLevel1);
  
  document.getElementById('close-popup').addEventListener('click', () => {
    toggleArticlePopup(false);
  });
  
  // Pause Menu
  document.getElementById('resume-btn').addEventListener('click', () => {
    togglePauseMenu(false);
  });
  
  document.getElementById('restart-btn').addEventListener('click', () => {
    togglePauseMenu(false);
    resetGame();
    startLevel1();
  });
  
  document.getElementById('exit-to-menu').addEventListener('click', () => {
    togglePauseMenu(false);
    stopLevel1();
    showScreen('welcome-screen');
  });
  
  // Level 2 Controls
  document.getElementById('submit-matches').addEventListener('click', submitMatches);
  
  document.getElementById('help-btn').addEventListener('click', useHelp);
  
  // Results Screen
  document.getElementById('play-again').addEventListener('click', () => {
    resetGame();
    startLevel1();
  });
  
  document.getElementById('back-to-menu').addEventListener('click', () => {
    resetGame();
    showScreen('welcome-screen');
  });
}

// Add key event listener for escape key to pause/resume
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (gameState.level === 1) {
      if (gameState.isGamePaused) {
        resumeLevel1();
      } else {
        pauseLevel1();
      }
    }
  }
});