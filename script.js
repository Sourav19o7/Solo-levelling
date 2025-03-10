// DOM elements
const startScreen = document.getElementById('start-screen');
const quizSection = document.getElementById('quiz');
const questionContainer = document.getElementById('question-container');
const resultSection = document.getElementById('result');
const progressBar = document.getElementById('progress');
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const shareButton = document.getElementById('share-btn');
const characterImage = document.getElementById('character-image');
const characterName = document.getElementById('character-name');
const characterDescription = document.getElementById('character-description');
const traitsList = document.getElementById('traits-list');

// Variables to track quiz state
let currentQuestion = 0;
let userDimensions = {
    strength: 0,
    leadership: 0,
    intelligence: 0,
    independence: 0,
    compassion: 0
};

// Initialize event listeners
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);
shareButton.addEventListener('click', shareResult);

// Create particles on page load
createParticles();

/**
 * Creates floating particles for the background effect
 */
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation delay
        const delay = Math.random() * 8;
        
        particle.style.left = posX + 'px';
        particle.style.top = posY + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDelay = delay + 's';
        
        particlesContainer.appendChild(particle);
    }
}

/**
 * Starts the quiz
 */
function startQuiz() {
    startScreen.style.display = 'none';
    quizSection.style.display = 'block';
    loadQuestion();
}

/**
 * Loads the current question
 */
function loadQuestion() {
    const question = questions[currentQuestion];
    
    // Create question element
    questionContainer.innerHTML = `
        <div class="question-container active">
            <div class="question">${question.question}</div>
            <div class="options">
                ${question.options.map((option, index) => 
                    `<div class="option" data-index="${index}">${option.text}</div>`
                ).join('')}
            </div>
        </div>
    `;
    
    // Update progress bar
    progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
    
    // Add event listeners to options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', selectOption);
    });
}

/**
 * Handles option selection
 * @param {Event} e - The click event
 */
function selectOption(e) {
    const selectedIndex = parseInt(e.target.dataset.index);
    const selectedOption = questions[currentQuestion].options[selectedIndex];
    
    // Update user dimensions based on the selected option
    const dimensions = selectedOption.dimensions;
    for (const dimension in dimensions) {
        userDimensions[dimension] += dimensions[dimension];
    }
    
    // Move to next question or show result
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

/**
 * Calculates character match based on user dimensions
 * @returns {Object} The best matching character
 */
function calculateCharacterMatch() {
    let bestMatch = null;
    let bestScore = -Infinity;

    // Define weight for each trait to prioritize key characteristics
    const weight = {
        Strength: 1.2,
        Independence: 1.2,
        Intelligence: 1,
        Leadership: 1,
        Compassion: 1
    };

    // Normalize user dimensions to a 0-10 scale
    const totalQuestions = questions.length;
    const normalizedDimensions = {};

    for (const dimension in userDimensions) {
        const maxPossible = totalQuestions * 2; // Max score per dimension
        normalizedDimensions[dimension] = (userDimensions[dimension] / maxPossible) * 10;
    }

    // Calculate similarity score for each character
    for (const character of characters) {
        let similarityScore = 0;

        for (const dimension in normalizedDimensions) {
            const userScore = normalizedDimensions[dimension] || 0;
            const charScore = (character.dimensions[dimension] / 10) * 10 || 0; // Normalize character's dimensions

            // Convert difference into similarity score
            const difference = Math.abs(userScore - charScore);
            const dimensionSimilarity = (1 - (difference / 10)) * (weight[dimension] || 1); // Higher similarity is better

            similarityScore += dimensionSimilarity;
        }

        // Select the best-matching character
        if (similarityScore > bestScore) {
            bestScore = similarityScore;
            bestMatch = character;
        }
    }

    return bestMatch;
}



/**
 * Shows the result of the quiz
 */
function showResult() {
    quizSection.style.display = 'none';
    resultSection.classList.add('active');
    
    // Calculate the best character match
    const match = calculateCharacterMatch();
    
    // Display result
    characterImage.src = match.image;
    characterName.textContent = match.name;
    characterDescription.textContent = match.description;
    
    // Display personality traits
    traitsList.innerHTML = '';
    match.traits.forEach(trait => {
        const li = document.createElement('li');
        li.textContent = trait;
        traitsList.appendChild(li);
    });
}

/**
 * Restarts the quiz
 */
function restartQuiz() {
    // Reset variables
    currentQuestion = 0;
    userDimensions = {
        strength: 0,
        leadership: 0,
        intelligence: 0,
        independence: 0,
        compassion: 0
    };
    
    // Hide result section
    resultSection.classList.remove('active');
    
    // Show start screen
    startScreen.style.display = 'block';
}

/**
 * Shares the result on social media
 */
function shareResult() {
    // Get current character result
    const character = characterName.textContent;
    const shareText = `I got ${character} in the Solo Leveling Character Quiz! Which hunter are you?`;
    
    // Create share URL (this would normally point to your website)
    const shareUrl = encodeURIComponent(window.location.href);
    
    // Open share dialog based on available APIs
    if (navigator.share) {
        // Use Web Share API if available
        navigator.share({
            title: 'Solo Leveling Character Quiz',
            text: shareText,
            url: window.location.href
        }).catch(error => {
            console.error('Error sharing:', error);
        });
    } else {
        // Fallback to opening a new window with Twitter sharing
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${shareUrl}`;
        window.open(twitterUrl, '_blank');
    }
}