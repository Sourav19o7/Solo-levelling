// Quiz questions and options with character dimension scoring
const questions = [
    {
        question: "When faced with danger, what's your first instinct?",
        options: [
            {
                text: "Calculate all possible outcomes before making a move",
                dimensions: {
                    intelligence: 2,
                    leadership: 1,
                    independence: 1
                }
            },
            {
                text: "Protect others even at personal risk",
                dimensions: {
                    strength: 1,
                    compassion: 2,
                    leadership: 1
                }
            },
            {
                text: "Retreat and gather more information",
                dimensions: {
                    intelligence: 2,
                    independence: 1
                }
            },
            {
                text: "Face it head-on with everything you've got",
                dimensions: {
                    strength: 2,
                    independence: 2,
                    leadership: 1
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
                    strength: 2,
                    independence: 1
                }
            },
            {
                text: "Family and loved ones",
                dimensions: {
                    compassion: 2,
                    leadership: 1
                }
            },
            {
                text: "Knowledge and understanding",
                dimensions: {
                    intelligence: 2,
                    independence: 1
                }
            },
            {
                text: "Honor and respect",
                dimensions: {
                    leadership: 2,
                    strength: 1
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
                    strength: 1,
                    intelligence: 1,
                    independence: 1
                }
            },
            {
                text: "Blame yourself and try to make amends",
                dimensions: {
                    compassion: 2,
                    leadership: 1
                }
            },
            {
                text: "Analyze what went wrong methodically",
                dimensions: {
                    intelligence: 2,
                    independence: 1
                }
            },
            {
                text: "Refuse to accept it and keep pushing forward",
                dimensions: {
                    strength: 2,
                    independence: 1
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
                    independence: 2,
                    strength: 1
                }
            },
            {
                text: "Value everyone's input and try to keep the team united",
                dimensions: {
                    compassion: 2,
                    leadership: 1
                }
            },
            {
                text: "Observe others' abilities and utilize them strategically",
                dimensions: {
                    intelligence: 2,
                    leadership: 1
                }
            },
            {
                text: "Take charge and lead by example",
                dimensions: {
                    leadership: 2,
                    strength: 1
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
                    strength: 1,
                    compassion: 2,
                    leadership: 1
                }
            },
            {
                text: "Build a legacy and change the world",
                dimensions: {
                    leadership: 2,
                    intelligence: 1
                }
            },
            {
                text: "Study it to understand its full potential",
                dimensions: {
                    intelligence: 2,
                    independence: 1
                }
            },
            {
                text: "Become the strongest and prove your worth",
                dimensions: {
                    strength: 2,
                    independence: 1
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
                    compassion: 2,
                    leadership: 1
                }
            },
            {
                text: "Being powerless when it matters most",
                dimensions: {
                    strength: 2,
                    independence: 1
                }
            },
            {
                text: "Making the wrong decision",
                dimensions: {
                    intelligence: 1,
                    leadership: 1,
                    compassion: 1
                }
            },
            {
                text: "Being forgotten or insignificant",
                dimensions: {
                    leadership: 2,
                    independence: 1
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
                    independence: 2,
                    intelligence: 1
                }
            },
            {
                text: "Reliable and trustworthy",
                dimensions: {
                    leadership: 1,
                    compassion: 1,
                    strength: 1
                }
            },
            {
                text: "Intelligent and analytical",
                dimensions: {
                    intelligence: 2,
                    independence: 1
                }
            },
            {
                text: "Determined and unstoppable",
                dimensions: {
                    strength: 2,
                    leadership: 1
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
                    intelligence: 2,
                    independence: 1
                }
            },
            {
                text: "Intuition and instinct",
                dimensions: {
                    strength: 1,
                    intelligence: 1,
                    independence: 1
                }
            },
            {
                text: "Considering others' wellbeing",
                dimensions: {
                    compassion: 2,
                    leadership: 1
                }
            },
            {
                text: "What will achieve the best results",
                dimensions: {
                    leadership: 2,
                    strength: 1
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
                    strength: 2,
                    independence: 1
                }
            },
            {
                text: "Creating a positive impact on others' lives",
                dimensions: {
                    compassion: 2,
                    leadership: 1
                }
            },
            {
                text: "Gaining profound knowledge and understanding",
                dimensions: {
                    intelligence: 2,
                    independence: 1
                }
            },
            {
                text: "Being respected and looked up to by others",
                dimensions: {
                    leadership: 2,
                    strength: 1
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
                    strength: 2,
                    independence: 1
                }
            },
            {
                text: "Try to understand all perspectives and mediate",
                dimensions: {
                    intelligence: 1,
                    compassion: 1,
                    leadership: 1
                }
            },
            {
                text: "Analyze the situation and find the optimal solution",
                dimensions: {
                    intelligence: 2,
                    leadership: 1
                }
            },
            {
                text: "Seek compromise while protecting what matters most",
                dimensions: {
                    compassion: 1,
                    leadership: 2
                }
            }
        ]
    }
];