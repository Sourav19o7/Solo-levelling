// Import functions and data from helper.js
import { 
    questions, 
    characters, 
    calculateUserScores, 
    findMatchingCharacter, 
    getQuizQuestions, 
    getCharacterById, 
    getCharacterByName 
} from './helper.js';

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
let quizQuestions = [];
let userAnswers = [];

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
    console.log("Start Quiz")
    startScreen.style.display = 'none';
    quizSection.style.display = 'block';
    
    // Get randomized questions from helper.js
    quizQuestions = getQuizQuestions(10);
    currentQuestion = 0;
    userAnswers = [];
    
    loadQuestion();
}

/**
 * Loads the current question
 */
function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    
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
    progressBar.style.width = `${(currentQuestion / quizQuestions.length) * 100}%`;
    
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
    
    // Store the user's answer
    userAnswers.push(selectedIndex);
    
    // Move to next question or show result
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

/**
 * Shows the result of the quiz
 */
function showResult() {
    quizSection.style.display = 'none';
    resultSection.classList.add('active');
    
    // Calculate user dimension scores using helper.js function
    const userScores = calculateUserScores(userAnswers);
    
    // Find matching character using helper.js function
    const match = findMatchingCharacter(userScores);
    
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
    userAnswers = [];
    
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