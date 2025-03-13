// Quiz questions and options with balanced character dimension scoring
const questions = [
    {
        question: "When faced with danger, what's your first instinct?",
        options: [
            {
                text: "Calculate all possible outcomes before making a move",
                dimensions: {
                    intelligence: 3,
                    strength: -1,
                    leadership: 1,
                    independence: 2
                }
            },
            {
                text: "Protect others even at personal risk",
                dimensions: {
                    strength: 1,
                    compassion: 3,
                    leadership: 2,
                    independence: -1
                }
            },
            {
                text: "Retreat and gather more information",
                dimensions: {
                    intelligence: 2,
                    independence: 2,
                    strength: -1,
                    leadership: -1
                }
            },
            {
                text: "Face it head-on with everything you've got",
                dimensions: {
                    strength: 3,
                    independence: 2,
                    leadership: 1,
                    intelligence: -1
                }
            }
        ]
    },
    {
        question: "What do you value most in life?",
        options: [
            {
                text: "Power and strength",
                dimensions: {
                    strength: 3,
                    independence: 2,
                    compassion: -1,
                    leadership: 1
                }
            },
            {
                text: "Family and loved ones",
                dimensions: {
                    compassion: 3,
                    leadership: 1,
                    independence: -1,
                    strength: 0
                }
            },
            {
                text: "Knowledge and understanding",
                dimensions: {
                    intelligence: 3,
                    independence: 2,
                    strength: -1,
                    compassion: 1
                }
            },
            {
                text: "Honor and respect",
                dimensions: {
                    leadership: 3,
                    strength: 1,
                    independence: 0,
                    compassion: 2
                }
            }
        ]
    },
    {
        question: "How do you handle failure?",
        options: [
            {
                text: "Learn from it and become stronger",
                dimensions: {
                    strength: 2,
                    intelligence: 2,
                    independence: 1,
                    compassion: 0
                }
            },
            {
                text: "Blame yourself and try to make amends",
                dimensions: {
                    compassion: 3,
                    leadership: 0,
                    independence: -1,
                    intelligence: 1
                }
            },
            {
                text: "Analyze what went wrong methodically",
                dimensions: {
                    intelligence: 3,
                    independence: 2,
                    strength: 0,
                    compassion: -1
                }
            },
            {
                text: "Refuse to accept it and keep pushing forward",
                dimensions: {
                    strength: 3,
                    independence: 2,
                    intelligence: -1,
                    compassion: -1
                }
            }
        ]
    },
    {
        question: "What's your approach to teamwork?",
        options: [
            {
                text: "Prefer to work alone but will cooperate when necessary",
                dimensions: {
                    independence: 3,
                    strength: 1,
                    leadership: -1,
                    compassion: -1
                }
            },
            {
                text: "Value everyone's input and try to keep the team united",
                dimensions: {
                    compassion: 3,
                    leadership: 2,
                    intelligence: 1,
                    independence: -2
                }
            },
            {
                text: "Observe others' abilities and utilize them strategically",
                dimensions: {
                    intelligence: 3,
                    leadership: 2,
                    compassion: 0,
                    independence: 0
                }
            },
            {
                text: "Take charge and lead by example",
                dimensions: {
                    leadership: 3,
                    strength: 2,
                    independence: 1,
                    intelligence: 0
                }
            }
        ]
    },
    {
        question: "What would you do with great power?",
        options: [
            {
                text: "Use it to protect those who cannot protect themselves",
                dimensions: {
                    strength: 2,
                    compassion: 3,
                    leadership: 2,
                    independence: -1
                }
            },
            {
                text: "Build a legacy and change the world",
                dimensions: {
                    leadership: 3,
                    intelligence: 2,
                    independence: 1,
                    compassion: -1
                }
            },
            {
                text: "Study it to understand its full potential",
                dimensions: {
                    intelligence: 3,
                    independence: 2,
                    strength: 0,
                    leadership: -1
                }
            },
            {
                text: "Become the strongest and prove your worth",
                dimensions: {
                    strength: 3,
                    independence: 2,
                    compassion: -2,
                    leadership: 1
                }
            }
        ]
    },
    {
        question: "What is your greatest fear?",
        options: [
            {
                text: "Losing the people you care about",
                dimensions: {
                    compassion: 3,
                    leadership: 1,
                    strength: 0,
                    independence: -1
                }
            },
            {
                text: "Being powerless when it matters most",
                dimensions: {
                    strength: 3,
                    independence: 2,
                    leadership: 1,
                    compassion: 0
                }
            },
            {
                text: "Making the wrong decision",
                dimensions: {
                    intelligence: 2,
                    leadership: 2,
                    compassion: 2,
                    independence: -1
                }
            },
            {
                text: "Being forgotten or insignificant",
                dimensions: {
                    leadership: 2,
                    independence: 1,
                    strength: 1,
                    compassion: 0
                }
            }
        ]
    },
    {
        question: "How do others typically see you?",
        options: [
            {
                text: "Mysterious and hard to read",
                dimensions: {
                    independence: 3,
                    intelligence: 2,
                    compassion: -2,
                    leadership: 0
                }
            },
            {
                text: "Reliable and trustworthy",
                dimensions: {
                    leadership: 2,
                    compassion: 2,
                    strength: 2,
                    independence: 0
                }
            },
            {
                text: "Intelligent and analytical",
                dimensions: {
                    intelligence: 3,
                    independence: 2,
                    strength: -1,
                    compassion: 0
                }
            },
            {
                text: "Determined and unstoppable",
                dimensions: {
                    strength: 3,
                    leadership: 2,
                    independence: 1,
                    compassion: -1
                }
            }
        ]
    },
    {
        question: "When making decisions, what do you rely on most?",
        options: [
            {
                text: "Logic and reasoning",
                dimensions: {
                    intelligence: 3,
                    independence: 2,
                    compassion: -1,
                    strength: 0
                }
            },
            {
                text: "Intuition and instinct",
                dimensions: {
                    strength: 2,
                    intelligence: 1,
                    independence: 2,
                    leadership: 0
                }
            },
            {
                text: "Considering others' wellbeing",
                dimensions: {
                    compassion: 3,
                    leadership: 2,
                    intelligence: 1,
                    independence: -1
                }
            },
            {
                text: "What will achieve the best results",
                dimensions: {
                    leadership: 3,
                    strength: 2,
                    intelligence: 1,
                    compassion: -1
                }
            }
        ]
    },
    {
        question: "What would bring you the most satisfaction?",
        options: [
            {
                text: "Becoming the strongest version of yourself",
                dimensions: {
                    strength: 3,
                    independence: 3,
                    leadership: 0,
                    compassion: -1
                }
            },
            {
                text: "Creating a positive impact on others' lives",
                dimensions: {
                    compassion: 3,
                    leadership: 2,
                    strength: 0,
                    intelligence: 0
                }
            },
            {
                text: "Gaining profound knowledge and understanding",
                dimensions: {
                    intelligence: 3,
                    independence: 2,
                    leadership: 0,
                    strength: -1
                }
            },
            {
                text: "Being respected and looked up to by others",
                dimensions: {
                    leadership: 3,
                    strength: 2,
                    independence: 0,
                    compassion: 1
                }
            }
        ]
    },
    {
        question: "How do you approach conflict?",
        options: [
            {
                text: "Face it directly and stand your ground",
                dimensions: {
                    strength: 3,
                    independence: 2,
                    compassion: -1,
                    intelligence: 0
                }
            },
            {
                text: "Try to understand all perspectives and mediate",
                dimensions: {
                    intelligence: 2,
                    compassion: 3,
                    leadership: 2,
                    strength: -1
                }
            },
            {
                text: "Analyze the situation and find the optimal solution",
                dimensions: {
                    intelligence: 3,
                    leadership: 2,
                    independence: 1,
                    compassion: 0
                }
            },
            {
                text: "Seek compromise while protecting what matters most",
                dimensions: {
                    compassion: 2,
                    leadership: 3,
                    intelligence: 1,
                    strength: 0
                }
            }
        ]
    },
    {
        question: "What quality do you admire most in a person?",
        options: [
            {
                text: "Unwavering determination in the face of challenges",
                dimensions: {
                    strength: 3,
                    independence: 2,
                    leadership: 1,
                    intelligence: 0
                }
            },
            {
                text: "Kindness and willingness to help others",
                dimensions: {
                    compassion: 3,
                    leadership: 1,
                    strength: 0,
                    independence: -1
                }
            },
            {
                text: "Brilliant mind and quick thinking",
                dimensions: {
                    intelligence: 3,
                    independence: 1,
                    leadership: 1,
                    strength: 0
                }
            },
            {
                text: "Ability to inspire and motivate others",
                dimensions: {
                    leadership: 3,
                    compassion: 2,
                    intelligence: 1,
                    independence: 0
                }
            }
        ]
    },
    {
        question: "When exploring unknown territory, you prefer to:",
        options: [
            {
                text: "Map everything systematically before proceeding",
                dimensions: {
                    intelligence: 3,
                    leadership: 1,
                    strength: 0,
                    independence: 1
                }
            },
            {
                text: "Forge ahead confidently, handling threats as they arise",
                dimensions: {
                    strength: 3,
                    independence: 2,
                    leadership: 1,
                    intelligence: -1
                }
            },
            {
                text: "Ensure everyone in your group stays safe together",
                dimensions: {
                    compassion: 3,
                    leadership: 2,
                    strength: 1,
                    independence: -1
                }
            },
            {
                text: "Scout ahead alone to protect others from potential danger",
                dimensions: {
                    independence: 3,
                    strength: 2,
                    compassion: 1,
                    leadership: 0
                }
            }
        ]
    },
    {
        question: "Your preferred fighting style would be:",
        options: [
            {
                text: "Overwhelming force and power",
                dimensions: {
                    strength: 3,
                    independence: 1,
                    intelligence: -1,
                    leadership: 1
                }
            },
            {
                text: "Technical precision and efficiency",
                dimensions: {
                    intelligence: 3,
                    strength: 1,
                    independence: 1,
                    leadership: 0
                }
            },
            {
                text: "Coordinated teamwork with allies",
                dimensions: {
                    leadership: 3,
                    compassion: 2,
                    independence: -2,
                    strength: 1
                }
            },
            {
                text: "Adaptable and unpredictable movements",
                dimensions: {
                    independence: 3,
                    intelligence: 2,
                    strength: 1,
                    leadership: 0
                }
            }
        ]
    }
];

// Added function to randomize questions and prevent repetitive patterns
function getRandomizedQuestions(count = 10) {
    // Shuffle the questions array
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    // Return the requested number of questions
    return shuffledQuestions.slice(0, count);
}

// Character profiles with balanced traits and personality dimensions
const characters = [
    {
        id: "sung-jinwoo",
        name: "Sung Jinwoo",
        image: "https://i.pinimg.com/474x/be/6d/fe/be6dfea0c701893090193552ae802e07.jpg",
        description: "Like the Shadow Monarch himself, you're determined, adaptable, and willing to push beyond your limits. You may seem quiet or reserved at first, but you possess incredible inner strength and the resolve to protect what matters. Your growth mindset allows you to turn obstacles into opportunities, constantly evolving and becoming stronger.",
        traits: ["Determined", "Adaptable", "Protective", "Growth-oriented", "Resilient"],
        dimensions: {
            strength: 9,
            leadership: 7,
            intelligence: 8,
            independence: 9,
            compassion: 7
        }
    },
    {
        id: "cha-hae-in",
        name: "Cha Hae-In",
        image: "https://i.pinimg.com/474x/95/21/57/9521574c4c3b251f5e958e225bce5428.jpg",
        description: "You share Cha Hae-In's exceptional intuition and quiet strength. Though you might not always be the center of attention, your abilities speak for themselves. You're disciplined, dedicated, and have a strong sense of duty. Like Korea's top female hunter, you maintain your composure even in the most dangerous situations.",
        traits: ["Intuitive", "Disciplined", "Dutiful", "Composed", "Reserved"],
        dimensions: {
            strength: 8,
            leadership: 6,
            intelligence: 7,
            independence: 7,
            compassion: 6
        }
    },
    {
        id: "woo-jin-chul",
        name: "Woo Jin-Chul",
        image: "https://i.pinimg.com/736x/2c/82/70/2c827083ed409306ae07417b4d02f4db.jpg",
        description: "Like the loyal Association Deputy Director, you're analytical, observant, and incredibly dedicated. You value order and procedure, but know when flexibility is needed. Your loyalty is unwavering once earned, and you're willing to adapt your worldview when presented with new evidence. Your attention to detail makes you invaluable in any team.",
        traits: ["Analytical", "Loyal", "Detail-oriented", "Dedicated", "Adaptable"],
        dimensions: {
            strength: 6,
            leadership: 7,
            intelligence: 8,
            independence: 5,
            compassion: 6
        }
    },
    {
        id: "choi-jong-in",
        name: "Choi Jong-In",
        image: "https://i.pinimg.com/474x/be/30/17/be30178b665656b5d6b9c39b4b0bdaca.jpg",
        description: "You embody the Hunters Association Chairman's wisdom and experience. You're a natural leader who understands both power and responsibility. While you respect tradition and hierarchy, you're not bound by them when action is necessary. You possess both the vision to see the bigger picture and the strength to defend what you believe in.",
        traits: ["Wise", "Authoritative", "Visionary", "Principled", "Balanced"],
        dimensions: {
            strength: 8,
            leadership: 9,
            intelligence: 8,
            independence: 7,
            compassion: 7
        }
    },
    {
        id: "baek-yoonho",
        name: "Baek Yoonho",
        image: "https://i.pinimg.com/474x/19/49/d9/1949d93d9d3b389f27ea496dfbe25e13.jpg",
        description: "Like the Guild Master of the Hunters, you combine strength with wisdom. You're responsible, level-headed, and respect those who earn it through their actions rather than their words. You value loyalty and understand the importance of both power and restraint. Your leadership style inspires others to follow your example.",
        traits: ["Powerful", "Responsible", "Respected", "Loyal", "Balanced"],
        dimensions: {
            strength: 9,
            leadership: 8,
            intelligence: 7,
            independence: 8,
            compassion: 6
        }
    },
    {
        id: "go-gun-hee",
        name: "Go Gun-Hee",
        image: "https://i.pinimg.com/474x/15/36/33/15363340f1a7847bf5f802d5a6ea9eed.jpg",
        description: "You share the Association Chairman's strategic mind and foresight. Despite any limitations, you utilize your intelligence and experience to remain several steps ahead. You understand people's motivations and know how to place them where they'll be most effective. Your wisdom and patience are your greatest strengths.",
        traits: ["Strategic", "Wise", "Patient", "Experienced", "Perceptive"],
        dimensions: {
            strength: 7,
            leadership: 9,
            intelligence: 9,
            independence: 6,
            compassion: 7
        }
    },
    {
        id: "hwang-dong-su",
        name: "Hwang Dong-Su",
        image: "https://i.pinimg.com/474x/57/59/11/575911568b1ea99029a3fcc1ad8f3a50.jpg",
        description: "You're ambitious and confident, focused on achieving power and recognition. While your determination is admirable, you may sometimes let your ego drive your decisions. Like Hwang Dong-Su, you're not afraid to stand up to anyone, and you'll push yourself to the limit to prove your worth and achieve your goals.",
        traits: ["Ambitious", "Confident", "Competitive", "Prideful", "Determined"],
        dimensions: {
            strength: 7,
            leadership: 6,
            intelligence: 6,
            independence: 8,
            compassion: 3
        }
    },
    {
        id: "yu-jin-ho",
        name: "Yu Jin-Ho",
        image: "https://staticg.sportskeeda.com/editor/2025/01/123fd-17362089362791-1920.jpg",
        description: "Like Jin-Ho, you're loyal, enthusiastic, and have a natural talent for connecting with others. You might not be the strongest in traditional ways, but your emotional intelligence and ability to build relationships make you invaluable. You recognize talent in others and aren't afraid to support them wholeheartedly, even when others doubt them.",
        traits: ["Loyal", "Enthusiastic", "Supportive", "Adaptable", "Personable"],
        dimensions: {
            strength: 4,
            leadership: 5,
            intelligence: 7,
            independence: 5,
            compassion: 9
        }
    },
    {
        id: "seo-jiwoo",
        name: "Seo Ji-Woo",
        image: "https://www.prydwen.gg/static/4326064661d8dfe4ceb97e015060f026/4bb85/SeoJiWoo_Portrait_Body.webp",
        description: "You share Ji-Woo's compassionate heart and selflessness. Like Jinwoo's sister, you prioritize caring for those around you and will go to great lengths for your loved ones. You approach challenges with optimism and resilience, maintaining faith that things will work out. Your inner strength and emotional maturity are far greater than many realize.",
        traits: ["Compassionate", "Optimistic", "Selfless", "Patient", "Resilient"],
        dimensions: {
            strength: 4,
            leadership: 5,
            intelligence: 6,
            independence: 5,
            compassion: 10
        }
    },
    {
        id: "thomas-andre",
        name: "Thomas Andre",
        image: "https://i.pinimg.com/474x/5c/bd/54/5cbd54aac2715831cce8439b7dcafede.jpg",
        description: "Like the powerful National Level Hunter, you possess immense confidence and a forceful presence that commands respect. You're direct, sometimes to the point of bluntness, and you believe in demonstrating your worth through action. While your pride is significant, you have the strength to back it up and the honor to acknowledge when you've been bested.",
        traits: ["Powerful", "Confident", "Direct", "Honorable", "Prideful"],
        dimensions: {
            strength: 10,
            leadership: 8,
            intelligence: 7,
            independence: 9,
            compassion: 5
        }
    }
];

// Improved character matching algorithm with weighted dimensions
function findMatchingCharacter(userScores) {
    // Normalize user scores
    const totalPoints = Object.values(userScores).reduce((sum, score) => sum + score, 0);
    const normalizedUserScores = {};
    
    for (const dimension in userScores) {
        // Handle negative scores gracefully by setting a minimum of 0
        normalizedUserScores[dimension] = Math.max(0, userScores[dimension]);
    }
    
    // Calculate similarity scores with weighted dimensions
    const characterMatches = characters.map(character => {
        let similarityScore = 0;
        let maxPossibleScore = 0;
        
        for (const dimension in normalizedUserScores) {
            const userScore = normalizedUserScores[dimension];
            const charScore = character.dimensions[dimension];
            
            // Calculate dimensional difference (lower is better)
            const dimensionDiff = Math.abs(userScore - charScore);
            
            // Weight the dimensions slightly differently to reduce bias
            let dimensionWeight = 1;
            if (dimension === 'strength' || dimension === 'intelligence') {
                dimensionWeight = 1.1;
            } else if (dimension === 'compassion' || dimension === 'independence') {
                dimensionWeight = 1.2;
            } else if (dimension === 'leadership') {
                dimensionWeight = 1.0;
            }
            
            // Add to similarity score (inverse of difference)
            const maxDimensionDiff = Math.max(userScore, charScore);
            similarityScore += (maxDimensionDiff - dimensionDiff) * dimensionWeight;
            maxPossibleScore += maxDimensionDiff * dimensionWeight;
        }
        
        // Calculate percentage match
        const percentageMatch = (similarityScore / maxPossibleScore) * 100;
        
        return {
            character,
            similarityScore,
            percentageMatch
        };
    });
    
    // Sort by similarity score (highest first)
    characterMatches.sort((a, b) => b.similarityScore - a.similarityScore);
    
    // Return top match
    return characterMatches[0].character;
}

// Function to process user answers and calculate dimension scores
function calculateUserScores(userAnswers) {
    const dimensionScores = {
        strength: 0,
        intelligence: 0,
        compassion: 0,
        leadership: 0,
        independence: 0
    };
    
    userAnswers.forEach((answerIndex, questionIndex) => {
        const question = questions[questionIndex];
        const selectedOption = question.options[answerIndex];
        
        // Add dimension points from selected option
        for (const dimension in selectedOption.dimensions) {
            dimensionScores[dimension] += selectedOption.dimensions[dimension];
        }
    });
    
    return dimensionScores;
}

// Function to get a random subset of questions to reduce predictability
function getQuizQuestions(count = 10) {
    return getRandomizedQuestions(count);
}

// Get character by ID
function getCharacterById(id) {
    return characters.find(char => char.id === id);
}

// Get character by name
function getCharacterByName(name) {
    return characters.find(char => char.name === name);
}

// Export everything needed
export {
    questions,
    characters,
    calculateUserScores,
    findMatchingCharacter,
    getQuizQuestions,
    getCharacterById,
    getCharacterByName
};