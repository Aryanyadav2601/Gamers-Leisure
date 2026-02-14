// script.js

// ==================== MOBILE MENU TOGGLE ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// ==================== AI ASSISTANT ====================
function toggleAI() {
    const chatBox = document.getElementById('aiChatBox');
    chatBox.classList.toggle('active');
}

function sendAIMessage() {
    const input = document.getElementById('aiInput');
    const message = input.value.trim();
    
    if (message === '') return;

    // Add user message
    addAIMessage(message, 'user');
    input.value = '';

    // Simulate AI response
    setTimeout(() => {
        const response = getAIResponse(message);
        addAIMessage(response, 'ai');
    }, 500);
}

function handleAIInput(event) {
    if (event.key === 'Enter') {
        sendAIMessage();
    }
}

function addAIMessage(message, sender) {
    const messagesDiv = document.getElementById('aiMessages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('ai-message');
    
    if (sender === 'user') {
        messageDiv.style.background = 'rgba(255, 107, 107, 0.2)';
        messageDiv.style.borderLeftColor = '#FF6B6B';
        messageDiv.innerHTML = `<p>👤 ${message}</p>`;
    } else {
        messageDiv.innerHTML = `<p>🤖 ${message}</p>`;
    }
    
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    const responses = {
        'valorant': '💡 For Valorant: Focus on crosshair placement and utility usage. Master one agent, learn smokes, and practice your spray control daily. Good luck!',
        'lol': '💡 For League of Legends: Last-hit minions efficiently, ward your lane, and roam with your team. Mute all if toxicity affects you!',
        'cs2': '💡 For CS2: Buy together, play as a team, learn spray patterns, and communicate positions. Eco rounds are crucial for success!',
        'dota': '💡 For Dota 2: Understand the map, last-hit priority targets, and group with your team. Vision control wins games!',
        'fortnite': '💡 For Fortnite: Practice building mechanics in creative mode, stay aware of the storm, and engage smart fights!',
        'elden': '💡 For Elden Ring: Learn boss patterns, dodge roll at the right time, and level Vigor! Don\'t be afraid to use Spirit Ashes.',
        'minecraft': '💡 For Minecraft: Gather resources efficiently, build a safe base first, and look up tutorials for complex builds!',
        'apex': '💡 For Apex Legends: Master your legend\'s abilities, communicate with teammates, and rotate to the zone early!',
        'overwatch': '💡 For Overwatch 2: Play as a team, protect your supports, group with your allies, and call out enemy positions!',
        'tips': '💡 General Tips: Practice regularly, watch pro players, take breaks to stay fresh, and have fun! Gaming is about enjoyment.',
        'meet': '🌍 Connect with gamers worldwide on our platform! Join Discord communities, attend tournaments, and make gaming friends!',
        'hello': '👋 Hey there! I\'m your AI gaming guide. Ask me about specific games, general tips, or how to connect with other players!',
        'help': '🎮 I can help you with: Game tips, strategies, how to find teammates, platform recommendations, and much more! Just ask!',
        'default': '💬 Great question! Check out our Games section for more tips, or join our community to connect with other gamers worldwide!'
    };

    for (let key in responses) {
        if (lowerMessage.includes(key)) {
            return responses[key];
        }
    }

    return responses['default'];
}

// ==================== AUTH MODAL ====================
function openAuthModal() {
    document.getElementById('authModal').classList.add('active');
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
}

function toggleAuthForm(form) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    if (form === 'login') {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        toggleBtns[0].classList.add('active');
        toggleBtns[1].classList.remove('active');
    } else {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        toggleBtns[1].classList.add('active');
        toggleBtns[0].classList.remove('active');
    }
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('authModal').classList.remove('active');
        document.getElementById('tipsModal').classList.remove('active');
    }
});

// ==================== GAME TIPS ====================
const gameTips = {
    'Valorant': [
        '🎯 Master crosshair placement - pre-aim common angles',
        '🔫 Learn at least 2 agent abilities and their economy',
        '💰 Understand buy rounds vs. eco rounds strategy',
        '🗣️ Communicate positions and enemy locations constantly',
        '⚙️ Lower your sensitivity and practice spray control daily',
        '🎮 Play deathmatch to improve aim and reflexes',
        '🏙️ Learn one map completely before moving to others'
    ],
    'League of Legends': [
        '🎖️ Focus on last-hitting minions for gold income',
        '👀 Ward your lane and look at the minimap every 5 seconds',
        '🔄 Roam with your team for objectives and kills',
        '💪 Master 1-2 champions instead of playing all champions',
        '🛡️ Mute all if people flame - mental health matters',
        '⚔️ Group with your team for Baron and Dragon fights',
        '🎯 Prioritize taking towers over random kills'
    ],
    'Counter-Strike 2': [
        '💣 Learn smoke grenade lineups for every map',
        '🔫 Practice spray patterns for AK-47 and M4 rifles',
        '👥 Always buy and execute strategy as a team',
        '💰 Manage economy - eco or full-buy as a team',
        '🗺️ Call enemy positions immediately when spotted',
        '🎲 Pre-fire common hiding spots to get easy kills',
        '📍 Play with utility and support your rifler'
    ],
    'Dota 2': [
        '🏆 Last-hit enemy creeps to maximize gold earnings',
        '👁️ Buy wards for vision control of the map',
        '🔗 Complete your item builds efficiently',
        '👥 Group with team for Roshan and major team fights',
        '🎮 Learn 2-3 meta heroes deeply',
        '💬 Communicate missing enemies to your team',
        '⏰ Timing and positioning win team fights'
    ],
    'Fortnite': [
        '🏗️ Practice building mechanics 30 mins daily in Creative',
        '🌪️ Always move to safe zone before storm arrives',
        '🔫 Fight smart - take cover and peek before engaging',
        '🎯 Land at named locations to farm materials first',
        '👥 High ground wins fights - build up when battling',
        '🎒 Carry healing items and shields always',
        '🎮 Lower sensitivity for better aim and building'
    ],
    'Elden Ring': [
        '⚔️ Learn boss attack patterns through observation',
        '🛡️ Upgrade Vigor for survivability',
        '👹 Use Spirit Ashes to distract bosses while attacking',
        '🏃 Practice dodge rolling at the right timing',
        '💪 Two-handed weapons deal more damage per hit',
        '🧪 Use items like healing flasks before big fights',
        '🗺️ Explore thoroughly to find better weapons and items'
    ],
    'Minecraft': [
        '⛏️ Gather wood first, then make a crafting table',
        '🛏️ Build a safe shelter before nighttime',
        '🔥 Make a furnace to smelt ores and cook food',
        '⛴️ Find a village for trading with villagers',
        '🌾 Start a farm for infinite food supply',
        '💎 Mine diamonds at Y-level -64 for best drops',
        '🎨 Look up tutorials for complex building ideas'
    ],
    'Apex Legends': [
        '👥 Master your legend\'s abilities completely',
        '🎯 Stick with your team - never solo push enemies',
        '🏃 Rotate early to the next zone with your team',
        '💬 Ping enemy locations for teammates',
        '🔫 Practice aiming in Firing Range daily',
        '💪 Use high-ground positioning in fights',
        '⚡ Ultimate ability timing can win team fights'
    ],
    'Overwatch 2': [
        '👥 Play with your team - never leave teammates alone',
        '🛡️ Protect your supports at all costs',
        '🎯 Stick to your team\'s positioning strategy',
        '💬 Communicate and call out enemy positions',
        '🔫 Pick heroes that counter enemy team composition',
        '🏆 Ultimate economy - use ults for team objectives',
        '⏰ Group up before engaging major fights'
    ]
};

function showGameTips(gameName) {
    const tips = gameTips[gameName] || ['🎮 Tips coming soon for this game!'];
    const tipsModal = document.getElementById('tipsModal');
    const tipsGameName = document.getElementById('tipsGameName');
    const tipsList = document.getElementById('tipsList');

    tipsGameName.textContent = `${gameName} Pro Tips`;
    tipsList.innerHTML = '<ul>' + tips.map(tip => `<li>${tip}</li>`).join('') + '</ul>';
    
    tipsModal.classList.add('active');
}

function closeTipsModal() {
    document.getElementById('tipsModal').classList.remove('active');
}

// ==================== STARS ANIMATION ====================
function createStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;

    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==================== FORM SUBMISSION ====================
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon. 🎮');
    e.target.reset();
});

document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login successful! Welcome back, Gamer! 🎮');
    closeAuthModal();
});

document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Account created! Welcome to Gamers Leisure! 🎉');
    closeAuthModal();
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.style.animation || 'slideIn 0.6s ease';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.game-card, .feature, .stat').forEach(el => {
    observer.observe(el);
});

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    console.log('🎮 Gamers Leisure loaded successfully!');
});

// Close modals on outside click
document.getElementById('authModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'authModal') {
        closeAuthModal();
    }
});

document.getElementById('tipsModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'tipsModal') {
        closeTipsModal();
    }
});