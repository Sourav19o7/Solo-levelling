// Character profiles with traits and personality dimensions
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

// Get character by ID
function getCharacterById(id) {
    return characters.find(char => char.id === id);
}

// Get character by name
function getCharacterByName(name) {
    return characters.find(char => char.name === name);
}