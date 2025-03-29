// 游戏状态
let gameState = {
    coins: 0,
    energy: 100,
    maxEnergy: 100,  // 固定最大体力值为100
    skillPoints: 0,
    level: 1,
    exp: 0,
    expToNextLevel: 100,
    skills: {
        programming: 0,
        design: 0,
        stamina: 0,
        socialSkill: 0,    // 新增：社交能力
        investment: 0,     // 新增：投资能力
        management: 0,     // 新增：管理能力
        learning: 0,       // 新增：学习能力
        creativity: 0,     // 新增：创造力
        leadership: 0      // 新增：领导力
    },
    inventory: [],
    achievements: {
        firstJob: false,
        rich: false,
        // 新增成就
        masterLearner: false,    // 学习达人
        socialKing: false,       // 社交达人
        investmentGuru: false,   // 投资大师
        teamLeader: false        // 团队领袖
    },
    buffs: {
        incomeMultiplier: 1,
        socialMultiplier: 1,    // 新增：社交收益倍数
        investmentReturn: 1,    // 新增：投资回报率
        learningRate: 1,        // 新增：学习效率
        teamBonus: 1            // 新增：团队效率
    },
    // 新增：社交关系系统
    relationships: {
        colleagues: [],
        connections: 0,
        team: {
            morale: 100,        // 团队士气
            efficiency: 1,       // 团队效率
            members: []         // 团队成员
        }
    },
    // 新增：投资组合
    investments: {
        stocks: 0,
        funds: 0,
        startups: 0,
        realestate: 0    // 新增：房地产投资
    },
    // 新增：健康状态
    health: {
        status: 'healthy',
        treatmentCost: 0,
        stress: 0,           // 新增：压力值
        happiness: 100       // 新增：幸福度
    },
    // 新增：时间管理
    timeManagement: {
        schedule: [],        // 日程安排
        efficiency: 1,       // 时间利用效率
        workHours: 0        // 累计工作时间
    },
    // 新增：个人发展
    personalGrowth: {
        certificates: [],    // 获得的证书
        courses: [],        // 完成的课程
        projects: []        // 参与的项目
    },
    // 修改称号系统
    title: {
        current: '打工小白',
        unlocked: ['打工小白'],
        all: [
            { level: 1, name: '打工小白', enName: 'Work Rookie', description: '刚入职场，连工作餐都不会点' },
            { level: 3, name: '职场菜鸟', enName: 'Office Newbie', description: '终于学会了如何开复印机' },
            { level: 6, name: '搬砖工程师', enName: 'Brick Engineer', description: '搬砖搬出了工程师的水平' },
            { level: 10, name: '摸鱼高手', enName: 'Slack Expert', description: '上班划水，下班冲浪，就是不干活' },
            { level: 15, name: '办公室醋王', enName: 'Office Grumbler', description: '每天最关心谁又加薪了' },
            { level: 20, name: '九筋肉脉', enName: 'Work Warrior', description: '996都不带喘气的，简直是工作机器' },
            { level: 25, name: '职场老狐狸', enName: 'Office Fox', description: '人情世故玩得溜，人脉广得吓人' },
            { level: 35, name: '打工皇帝', enName: 'Work Emperor', description: '工资比老板还高，就差收购公司了' },
            { level: 45, name: '人生赢家', enName: 'Life Winner', description: '开豪车住豪宅，就差上天了' },
            { level: 60, name: '商业大佬', enName: 'Business Tycoon', description: '创业投资两不误，钱包鼓得吓人' },
            { level: 80, name: '传奇人物', enName: 'Living Legend', description: '传说中的存在，新闻都在报道你' },
            { level: 100, name: '人生巅峰', enName: 'Life Peak', description: '站在人生巅峰，睥睨众生' }
        ]
    },
};

// 初始游戏状态
const initialGameState = {
    coins: 0,
    energy: 100,
    maxEnergy: 100,
    skillPoints: 0,
    level: 1,
    exp: 0,
    expToNextLevel: 100,
    skills: {
        programming: 0,
        design: 0,
        stamina: 0,
        socialSkill: 0,
        investment: 0,
        management: 0,
        learning: 0,
        creativity: 0,
        leadership: 0
    },
    inventory: [],
    achievements: {
        firstJob: false,
        rich: false,
        masterLearner: false,
        socialKing: false,
        investmentGuru: false,
        teamLeader: false
    },
    buffs: {
        incomeMultiplier: 1,
        socialMultiplier: 1,
        investmentReturn: 1,
        learningRate: 1,
        teamBonus: 1
    },
    relationships: {
        colleagues: [],
        connections: 0,
        team: {
            morale: 100,
            efficiency: 1,
            members: []
        }
    },
    investments: {
        stocks: 0,
        funds: 0,
        startups: 0,
        realestate: 0
    },
    health: {
        status: 'healthy',
        treatmentCost: 0,
        stress: 0,
        happiness: 100
    },
    timeManagement: {
        schedule: [],
        efficiency: 1,
        workHours: 0
    },
    personalGrowth: {
        certificates: [],
        courses: [],
        projects: []
    },
    title: {
        current: '打工小白',
        unlocked: ['打工小白'],
        all: [
            { level: 1, name: '打工小白', enName: 'Work Rookie', description: '刚入职场，连工作餐都不会点' },
            { level: 3, name: '职场菜鸟', enName: 'Office Newbie', description: '终于学会了如何开复印机' },
            { level: 6, name: '搬砖工程师', enName: 'Brick Engineer', description: '搬砖搬出了工程师的水平' },
            { level: 10, name: '摸鱼高手', enName: 'Slack Expert', description: '上班划水，下班冲浪，就是不干活' },
            { level: 15, name: '办公室醋王', enName: 'Office Grumbler', description: '每天最关心谁又加薪了' },
            { level: 20, name: '九筋肉脉', enName: 'Work Warrior', description: '996都不带喘气的，简直是工作机器' },
            { level: 25, name: '职场老狐狸', enName: 'Office Fox', description: '人情世故玩得溜，人脉广得吓人' },
            { level: 35, name: '打工皇帝', enName: 'Work Emperor', description: '工资比老板还高，就差收购公司了' },
            { level: 45, name: '人生赢家', enName: 'Life Winner', description: '开豪车住豪宅，就差上天了' },
            { level: 60, name: '商业大佬', enName: 'Business Tycoon', description: '创业投资两不误，钱包鼓得吓人' },
            { level: 80, name: '传奇人物', enName: 'Living Legend', description: '传说中的存在，新闻都在报道你' },
            { level: 100, name: '人生巅峰', enName: 'Life Peak', description: '站在人生巅峰，睥睨众生' }
        ]
    }
};

// 随机事件配置
const events = [
    {
        id: 'overtime',
        title: '加班机会',
        description: '老板提供了加班机会，可以获得额外收入，但会消耗更多体力。',
        choices: [
            {
                text: '接受加班',
                effect: () => {
                    const extraMoney = Math.floor(30 * gameState.buffs.incomeMultiplier);
                    gameState.coins += extraMoney;
                    gameState.energy -= 20;
                    showNotification(`获得${extraMoney}元，消耗20点体力`);
                    updateUI();
                }
            },
            {
                text: '拒绝加班',
                effect: () => {
                    gameState.energy += 10;
                    showNotification('休息一下，恢复10点体力');
                    updateUI();
                }
            }
        ]
    },
    {
        id: 'training',
        title: '培训机会',
        description: '公司提供了免费的技能培训机会。',
        choices: [
            {
                text: '参加培训',
                effect: () => {
                    gameState.skillPoints += 1;
                    gameState.energy -= 15;
                    showNotification('获得1点技能点，消耗15点体力');
                    updateUI();
                }
            },
            {
                text: '继续工作',
                effect: () => {
                    const extraMoney = Math.floor(20 * gameState.buffs.incomeMultiplier);
                    gameState.coins += extraMoney;
                    showNotification(`获得${extraMoney}元`);
                    updateUI();
                }
            }
        ]
    },
    {
        id: 'market_fluctuation',
        title: '市场波动',
        description: '市场出现波动，可能影响你的收入。',
        choices: [
            {
                text: '把握机会',
                effect: () => {
                    const multiplier = 1 + (Math.random() * 0.5);
                    gameState.buffs.incomeMultiplier *= multiplier;
                    showNotification(`市场向好，收入提高${Math.floor((multiplier-1)*100)}%`);
                    updateUI();
                }
            },
            {
                text: '保持观望',
                effect: () => {
                    showNotification('保持稳定，继续观察市场');
                    updateUI();
                }
            }
        ]
    },
    {
        id: 'health_issue',
        title: '健康问题',
        description: '你感觉身体不适，需要进行治疗。',
        choices: [
            {
                text: '立即就医',
                effect: () => {
                    const cost = Math.floor(100 * (1 + Math.random()));
                    if (gameState.coins >= cost) {
                        gameState.coins -= cost;
                        gameState.health.status = 'healthy';
                        showNotification(`花费${cost}元治疗，恢复健康`);
                    } else {
                        gameState.health.status = 'sick';
                        gameState.health.treatmentCost = cost;
                        showNotification('钱不够看病，健康状况可能恶化');
                    }
                    updateUI();
                }
            },
            {
                text: '暂时拖着',
                effect: () => {
                    gameState.energy -= 10;
                    gameState.health.status = 'sick';
                    showNotification('健康状况变差，体力下降');
                    updateUI();
                }
            }
        ]
    },
    {
        id: 'lucky_money',
        title: '意外之财',
        description: '你发现了一个赚钱的机会！',
        choices: [
            {
                text: '接受机会',
                effect: () => {
                    const bonus = Math.floor(50 + Math.random() * 100);
                    gameState.coins += bonus;
                    showNotification(`获得意外之财${bonus}元！`);
                    updateUI();
                }
            },
            {
                text: '谨慎放弃',
                effect: () => {
                    gameState.skillPoints += 1;
                    showNotification('谨慎选择，获得1点技能点作为奖励');
                    updateUI();
                }
            }
        ]
    }
];

// 商店物品配置
const shopItems = {
    coffee: {
        name: '咖啡',
        price: 20,
        effect: () => {
            gameState.energy = Math.min(100, gameState.energy + 30);
            showNotification('恢复30点体力');
            updateUI();
        }
    },
    skillbook: {
        name: '技能书',
        price: 100,
        effect: () => {
            gameState.skillPoints += 1;
            showNotification('获得1点技能点');
            updateUI();
        }
    },
    laptop: {
        name: '笔记本电脑',
        price: 500,
        effect: () => {
            gameState.buffs.incomeMultiplier *= 1.1;
            showNotification('工作收入提高10%');
            updateUI();
        }
    }
};

// 创建消费特效
function createSpendingEffect(itemName, amount, type) {
    const effect = document.createElement('div');
    effect.className = 'spending-effect';
    
    // 根据消费类型设置不同的动画和图标
    let icon = '';
    let colors = [];
    switch (type) {
        case 'coffee':
            icon = '☕';
            colors = ['#6F4E37', '#8B4513', '#A0522D', '#D2691E'];
            break;
        case 'skillbook':
            icon = '📚';
            colors = ['#4169E1', '#1E90FF', '#00BFFF', '#87CEEB'];
            break;
        case 'laptop':
            icon = '💻';
            colors = ['#2E8B57', '#3CB371', '#90EE90', '#98FB98'];
            break;
        case 'vacation':
            icon = '🏖️';
            colors = ['#FF69B4', '#FF1493', '#DB7093', '#FFB6C1'];
            break;
        case 'hobby':
            icon = '🎨';
            colors = ['#9370DB', '#8A2BE2', '#9400D3', '#BA55D3'];
            break;
        case 'social':
            icon = '🎭';
            colors = ['#FFD700', '#FFA500', '#FF8C00', '#DAA520'];
            break;
        default:
            icon = '💰';
            colors = ['#32CD32', '#228B22', '#008000', '#006400'];
    }
    
    // 创建消费金额显示
    const amountText = document.createElement('div');
    amountText.className = 'spending-amount';
    amountText.innerHTML = `-${amount}元`;
    effect.appendChild(amountText);
    
    // 创建物品图标
    const itemIcon = document.createElement('div');
    itemIcon.className = 'spending-icon';
    itemIcon.innerHTML = icon;
    effect.appendChild(itemIcon);
    
    // 创建物品名称
    const itemText = document.createElement('div');
    itemText.className = 'spending-item-name';
    itemText.innerHTML = itemName;
    effect.appendChild(itemText);
    
    // 添加粒子效果
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'spending-particle';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // 随机运动方向和距离
        const angle = (Math.random() * Math.PI * 2);
        const distance = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        // 随机大小
        const size = 3 + Math.random() * 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        effect.appendChild(particle);
    }
    
    document.body.appendChild(effect);
    
    // 播放音效
    const spendSound = new Audio('assets/coin-spend.mp3');
    spendSound.volume = 0.3;
    spendSound.play().catch(() => {});
    
    // 2秒后移除特效
    setTimeout(() => {
        effect.classList.add('fade-out');
        setTimeout(() => effect.remove(), 500);
    }, 2000);
}

// 修改购买物品函数
function buyItem(itemId) {
    const item = shopItems[itemId];
    if (!item) return;
    
    if (gameState.coins >= item.price) {
        gameState.coins -= item.price;
        item.effect();
        showNotification(`购买了${item.name}`);
        // 添加消费特效
        createSpendingEffect(item.name, item.price, itemId);
        updateUI();
    } else {
        showNotification('金钱不足！');
    }
}

// 触发随机事件
function triggerRandomEvent() {
    if (Math.random() < 0.2) { // 20%概率触发事件
        const event = events[Math.floor(Math.random() * events.length)];
        showEvent(event);
    }
}

// 显示事件
function showEvent(event) {
    const eventCard = document.getElementById('current-event');
    const eventTitle = eventCard.querySelector('.event-title');
    const eventDescription = eventCard.querySelector('.event-description');
    const eventChoices = eventCard.querySelector('.event-choices');
    
    eventTitle.textContent = event.title;
    eventDescription.textContent = event.description;
    eventChoices.innerHTML = '';
    
    event.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'event-choice';
        button.textContent = choice.text;
        button.onclick = () => {
            choice.effect();
            eventCard.classList.add('hidden');
        };
        eventChoices.appendChild(button);
    });
    
    eventCard.classList.remove('hidden');
}

// 检查成就
function checkAchievements() {
    if (!gameState.achievements.firstJob && gameState.coins > 0) {
        gameState.achievements.firstJob = true;
        document.getElementById('achievement-first-job').classList.add('achieved');
        document.querySelector('#achievement-first-job .achievement-status').textContent = '已达成';
        showNotification('达成成就：初入职场！');
    }
    
    if (!gameState.achievements.rich && gameState.coins >= 1000) {
        gameState.achievements.rich = true;
        document.getElementById('achievement-rich').classList.add('achieved');
        document.querySelector('#achievement-rich .achievement-status').textContent = '已达成';
        showNotification('达成成就：小康生活！');
    }
}

// 修改升级函数
function levelUp() {
    const oldLevel = gameState.level;
    gameState.level += 1;
    gameState.exp -= gameState.expToNextLevel;
    gameState.expToNextLevel = Math.floor(gameState.expToNextLevel * 1.2);
    gameState.skillPoints += 1;
    
    // 升级时恢复满体力
    gameState.energy = 100;
    
    // 检查称号
    checkAndUpdateTitle();
    
    // 创建升级特效
    setTimeout(() => {
        createLevelUpCelebration();
    }, 100);
    
    // 显示通知
    showNotification(`升级了！当前等级：${gameState.level}，获得1点技能点`);
    
    // 检查成就
    checkAchievements();
    
    // 更新UI
    updateUI();
    saveGameState();
}

// 创建升级特效
function createLevelUpCelebration() {
    // 创建遮罩层
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s';

    // 创建内容容器
    const container = document.createElement('div');
    container.style.backgroundColor = 'white';
    container.style.padding = '40px 60px';
    container.style.borderRadius = '20px';
    container.style.textAlign = 'center';
    container.style.position = 'relative';
    container.style.maxWidth = '80%';
    container.style.animation = 'levelUpPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    container.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';

    // 随机选择一个幽默的升级提示
    const funnyMessages = [
        { cn: '又变强了，老板都害怕了！', en: 'Getting stronger, even the boss is scared!' },
        { cn: '升级啦！工资却还没有...', en: 'Leveled up! Salary... not so much...' },
        { cn: '打工魂MAX！摸鱼技能+1', en: 'Work Spirit MAX! Slacking Skill +1' },
        { cn: '老板说升职的事情考虑考虑~', en: 'Boss says promotion is... under consideration~' },
        { cn: '又升了！离发家致富更进一步', en: 'One step closer to being rich!' }
    ];
    const message = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

    // 创建动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes levelUpPop {
            0% { transform: scale(0.5) rotate(-5deg); opacity: 0; }
            50% { transform: scale(1.1) rotate(3deg); }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes emojiJump {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        @keyframes textGlow {
            0%, 100% { text-shadow: 0 0 10px rgba(0,0,0,0); }
            50% { text-shadow: 0 0 20px #FF6B6B; }
        }
        @keyframes slideIn {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // 添加内容
    container.innerHTML = `
        <div style="font-size: 80px; margin-bottom: 20px; animation: emojiJump 0.8s ease-in-out infinite">
            🎉
        </div>
        <div style="font-size: 36px; font-weight: bold; color: #FF6B6B; margin-bottom: 10px; animation: textGlow 2s ease-in-out infinite">
            升级到 ${gameState.level} 级！<br>
            Level ${gameState.level} Reached!
        </div>
        <div style="font-size: 24px; color: #666; margin-bottom: 20px; animation: slideIn 0.5s ease-out">
            ${message.cn}<br>${message.en}
        </div>
        <div style="font-size: 18px; color: #2ecc71; padding: 10px; border: 2px dashed #2ecc71; border-radius: 10px">
            获得奖励 / Rewards:<br>
            技能点 +1 / Skill Point +1<br>
            体力回满啦！/ Energy Restored!
        </div>
    `;

    overlay.appendChild(container);
    document.body.appendChild(overlay);

    // 触发动画
    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
    });

    // 播放音效
    try {
        const levelUpSound = new Audio('assets/level-up.mp3');
        levelUpSound.volume = 0.5;
        levelUpSound.play().catch(() => {});
    } catch (error) {
        console.log('音效播放失败');
    }

    // 3秒后移除特效
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
            style.remove();
        }, 300);
    }, 3000);
}

// 检查并更新称号
function checkAndUpdateTitle() {
    const currentLevel = gameState.level;
    const availableTitles = gameState.title.all.filter(t => t.level <= currentLevel);
    
    // 找到当前等级可以获得的最高称号
    const highestTitle = availableTitles[availableTitles.length - 1];
    
    // 如果是新解锁的称号
    if (!gameState.title.unlocked.includes(highestTitle.name)) {
        gameState.title.unlocked.push(highestTitle.name);
        gameState.title.current = highestTitle.name;
        
        // 显示称号解锁特效
        showTitleUnlockEffect(highestTitle);
    }
}

// 显示称号解锁特效
function showTitleUnlockEffect(title) {
    const effect = document.createElement('div');
    effect.className = 'title-unlock-effect';
    
    const content = document.createElement('div');
    content.className = 'title-content';
    
    // 添加标题
    const header = document.createElement('div');
    header.className = 'title-header';
    header.innerHTML = `
        <div class="cn">解锁新称号！</div>
        <div class="en">New Title Unlocked!</div>
    `;
    
    // 添加称号名称
    const titleName = document.createElement('div');
    titleName.className = 'title-name';
    titleName.innerHTML = `
        <div class="cn">${title.name}</div>
        <div class="en">${title.enName}</div>
    `;
    
    // 添加称号描述
    const description = document.createElement('div');
    description.className = 'title-description';
    description.textContent = title.description;
    
    content.appendChild(header);
    content.appendChild(titleName);
    content.appendChild(description);
    effect.appendChild(content);
    
    // 添加装饰效果
    const particles = document.createElement('div');
    particles.className = 'title-particles';
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'title-particle';
        const angle = (Math.random() * Math.PI * 2);
        const distance = 100 + Math.random() * 150;
        particle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
        particle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
        particles.appendChild(particle);
    }
    effect.appendChild(particles);
    
    document.body.appendChild(effect);
    
    // 播放音效
    const unlockSound = new Audio('assets/title-unlock.mp3');
    unlockSound.volume = 0.4;
    unlockSound.play().catch(() => {});
    
    // 2秒后移除特效
    setTimeout(() => {
        effect.classList.add('fade-out');
        setTimeout(() => effect.remove(), 500);
    }, 2000);
    
    // 显示通知
    showNotification(`恭喜获得新称号：${title.name}！`);
}

// 工作
function work(jobType) {
    if (gameState.energy < 10) {
        showNotification('体力不足！');
        return;
    }
    
    if (gameState.health.status === 'sick') {
        showNotification('生病状态下工作效率降低！');
        gameState.buffs.incomeMultiplier *= 0.5;
    }
    
    let income = 0;
    let energyCost = 0;
    let expGain = 0;
    
    switch (jobType) {
        case 'delivery':
            income = Math.floor(30 * gameState.buffs.incomeMultiplier);
            energyCost = 10;
            expGain = 20;
            break;
        case 'programmer':
            if (gameState.level < 5) {
                showNotification('等级不足！');
                return;
            }
            income = Math.floor(100 * gameState.buffs.incomeMultiplier);
            energyCost = 15;
            expGain = 40;
            break;
        case 'designer':
            if (gameState.level < 8) {
                showNotification('等级不足！');
                return;
            }
            income = Math.floor(80 * gameState.buffs.incomeMultiplier);
            energyCost = 12;
            expGain = 35;
            break;
        // 新增：自媒体创作者
        case 'content_creator':
            if (gameState.level < 6) {
                showNotification('等级不足！');
                return;
            }
            income = Math.floor(90 * gameState.buffs.incomeMultiplier * gameState.buffs.socialMultiplier);
            energyCost = 13;
            expGain = 38;
            // 增加社交关系
            gameState.relationships.connections += 1;
            break;
        // 新增：电商运营
        case 'ecommerce':
            if (gameState.level < 7) {
                showNotification('等级不足！');
                return;
            }
            income = Math.floor(110 * gameState.buffs.incomeMultiplier * gameState.buffs.socialMultiplier);
            energyCost = 14;
            expGain = 42;
            // 增加投资经验
            gameState.skills.investment += 0.1;
            break;
        // 新增：创业者
        case 'entrepreneur':
            if (gameState.level < 10) {
                showNotification('等级不足！');
                return;
            }
            if (gameState.skills.management < 3) {
                showNotification('管理能力不足！');
                return;
            }
            income = Math.floor(150 * gameState.buffs.incomeMultiplier * gameState.buffs.investmentReturn);
            energyCost = 20;
            expGain = 50;
            // 创业风险
            if (Math.random() < 0.1) {
                const risk = Math.random();
                if (risk < 0.4) {
                    income *= 2;
                    showNotification('创业项目取得成功！收入翻倍！');
                } else {
                    income = Math.floor(income * 0.5);
                    showNotification('创业遇到困难，收入减半。');
                }
            }
            break;
    }
    
    // 修改体力值判断
    if (gameState.energy < energyCost) {
        showNotification('体力不足！');
        return;
    }
    
    gameState.energy = Math.max(0, gameState.energy - energyCost);
    
    gameState.coins += income;
    gameState.exp += expGain;
    
    if (gameState.exp >= gameState.expToNextLevel) {
        levelUp();
    }
    
    checkAchievements();
    triggerRandomEvent();
    updateUI();
    saveGameState(); // 添加保存
    
    showNotification(`工作完成！获得${income}元和${expGain}点经验`);
}

// 休息
function rest(type) {
    switch (type) {
        case 'short':
            const recoveryAmount = Math.floor(20 * (1 + gameState.skills.stamina * 0.2));
            gameState.energy = Math.min(100, gameState.energy + recoveryAmount);
            showNotification(`休息完成！恢复${recoveryAmount}点体力`);
            break;
        case 'meditation':
            gameState.health.stress = Math.max(0, gameState.health.stress - 10);
            gameState.energy = Math.min(100, gameState.energy + 10);
            showNotification('冥想完成！压力减少10点，恢复10点体力');
            break;
        case 'power-nap':
            const napRecovery = Math.floor(35 * (1 + gameState.skills.stamina * 0.2));
            gameState.energy = Math.min(100, gameState.energy + napRecovery);
            gameState.health.stress = Math.max(0, gameState.health.stress - 5);
            showNotification(`能量小睡完成！恢复${napRecovery}点体力，压力减少5点`);
            break;
    }
    updateUI();
}

// 升级技能
function upgradeSkill(skillName) {
    if (gameState.skillPoints <= 0) {
        showNotification('技能点不足！');
        return;
    }
    
    const maxLevel = skillName === 'stamina' ? 3 : 5;
    if (gameState.skills[skillName] >= maxLevel) {
        showNotification('该技能已达到最高等级！');
        return;
    }
    
    gameState.skills[skillName]++;
    gameState.skillPoints--;
    
    let effectDesc = '';
    switch (skillName) {
        case 'programming':
            effectDesc = '编程收入提高10%';
            break;
        case 'design':
            effectDesc = '设计收入提高10%';
            break;
        case 'stamina':
            effectDesc = '体力恢复效率提高20%';
            break;
    }
    
    showNotification(`技能升级成功！${effectDesc}`);
    updateUI();
}

// 更新UI
function updateUI() {
    // 更新基础属性
    document.getElementById('coins').textContent = gameState.coins;
    document.getElementById('energy').textContent = `${gameState.energy}/${gameState.maxEnergy}`;
    document.getElementById('skill-points').textContent = gameState.skillPoints;
    document.getElementById('level').textContent = gameState.level;
    
    // 更新经验条
    const expPercentage = (gameState.exp / gameState.expToNextLevel) * 100;
    document.getElementById('exp-bar').style.width = `${expPercentage}%`;
    document.getElementById('exp-text').textContent = `${gameState.exp}/${gameState.expToNextLevel}`;
    
    // 更新详细信息
    document.getElementById('energy-value').textContent = `${gameState.energy}/${gameState.maxEnergy}`;
    document.getElementById('money-value').textContent = `${gameState.coins}元`;
    document.getElementById('skill-points-value').textContent = gameState.skillPoints;
    
    // 更新技能等级
    document.getElementById('programming-level').textContent = `${gameState.skills.programming}/5`;
    document.getElementById('design-level').textContent = `${gameState.skills.design}/5`;
    document.getElementById('stamina-level').textContent = `${gameState.skills.stamina}/3`;
    
    // 更新按钮状态
    document.querySelectorAll('.skill-btn').forEach(btn => {
        btn.disabled = gameState.skillPoints <= 0;
    });
    
    // 更新工作按钮状态
    document.querySelector('#job-programmer button').disabled = gameState.level < 5;
    document.querySelector('#job-designer button').disabled = gameState.level < 8;
    
    // 更新新增工作按钮状态
    document.querySelector('#job-content-creator button').disabled = gameState.level < 6;
    document.querySelector('#job-ecommerce button').disabled = gameState.level < 7;
    document.querySelector('#job-entrepreneur button').disabled = 
        gameState.level < 10 || gameState.skills.management < 3;
    
    // 更新投资信息
    document.getElementById('current-stocks').textContent = gameState.investments.stocks;
    document.getElementById('current-funds').textContent = gameState.investments.funds;
    document.getElementById('current-startups').textContent = gameState.investments.startups;
    
    // 更新社交信息
    document.getElementById('connections-count').textContent = gameState.relationships.connections;
    
    // 更新同事列表
    const colleaguesList = document.getElementById('colleagues-list');
    colleaguesList.innerHTML = '';
    gameState.relationships.colleagues.forEach(colleague => {
        const colleagueElement = document.createElement('div');
        colleagueElement.className = 'colleague-item';
        colleagueElement.innerHTML = `
            <span class="colleague-name">${colleague.name}</span>
            <span class="colleague-buff">${colleague.buff.description}</span>
        `;
        colleaguesList.appendChild(colleagueElement);
    });

    // 更新状态监控
    document.getElementById('stress-bar').style.width = `${gameState.health.stress}%`;
    document.getElementById('stress-value').textContent = `${gameState.health.stress}/100`;
    
    document.getElementById('happiness-bar').style.width = `${gameState.health.happiness}%`;
    document.getElementById('happiness-value').textContent = `${gameState.health.happiness}/100`;
    
    document.getElementById('morale-bar').style.width = `${gameState.relationships.team.morale}%`;
    document.getElementById('morale-value').textContent = `${gameState.relationships.team.morale}/100`;
    
    // 更新证书列表
    const certificatesList = document.getElementById('certificates-list');
    certificatesList.innerHTML = '';
    gameState.personalGrowth.certificates.forEach(cert => {
        const certElement = document.createElement('div');
        certElement.className = 'certificate-item';
        certElement.innerHTML = `
            <span class="certificate-name">${cert.name}</span>
            <span class="certificate-date">${cert.date}</span>
        `;
        certificatesList.appendChild(certElement);
    });
    
    // 更新项目列表
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';
    gameState.personalGrowth.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-item';
        projectElement.innerHTML = `
            <span class="project-name">${project.name}</span>
            <span class="project-role">${project.role}</span>
        `;
        projectsList.appendChild(projectElement);
    });

    // 更新称号显示
    const titleDisplay = document.getElementById('current-title');
    if (titleDisplay) {
        const currentTitle = gameState.title.all.find(t => t.name === gameState.title.current);
        titleDisplay.innerHTML = `
            <div class="bilingual">
                <span class="cn">${currentTitle.name}</span>
                <span class="en">${currentTitle.enName}</span>
            </div>
            <div class="title-description">${currentTitle.description}</div>
        `;
    }
}

// 显示通知
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// 新增：投资功能
function invest(type, amount) {
    if (gameState.coins < amount) {
        showNotification('资金不足！');
        return;
    }
    
    gameState.coins -= amount;
    let returnRate = 1 + (Math.random() * 0.2 * (1 + gameState.skills.investment * 0.1));
    
    switch (type) {
        case 'stocks':
            gameState.investments.stocks += amount;
            setTimeout(() => {
                const return_amount = Math.floor(amount * returnRate);
                gameState.coins += return_amount;
                gameState.investments.stocks -= amount;
                showNotification(`股票投资回报：${return_amount}元`);
                updateUI();
            }, 30000); // 30秒后获得回报
            break;
        case 'funds':
            gameState.investments.funds += amount;
            setInterval(() => {
                const return_amount = Math.floor((amount * 0.1) * returnRate);
                gameState.coins += return_amount;
                showNotification(`基金分红：${return_amount}元`);
                updateUI();
            }, 60000); // 每60秒获得回报
            break;
        case 'startups':
            gameState.investments.startups += amount;
            setTimeout(() => {
                const success = Math.random() < (0.3 + gameState.skills.investment * 0.1);
                if (success) {
                    const return_amount = Math.floor(amount * (2 + Math.random() * 3));
                    gameState.coins += return_amount;
                    showNotification(`创业投资大成功！获得${return_amount}元`);
                } else {
                    showNotification('创业投资失败，损失投资本金');
                }
                gameState.investments.startups -= amount;
                updateUI();
            }, 120000); // 120秒后知道结果
            break;
    }
}

// 新增：社交功能
function socialInteract(type) {
    if (gameState.energy < 5) {
        showNotification('体力不足！');
        return;
    }
    
    gameState.energy -= 5;
    
    switch (type) {
        case 'networking':
            gameState.relationships.connections += 1;
            gameState.skills.socialSkill += 0.1;
            if (Math.random() < 0.3) {
                const bonus = Math.floor(50 * (1 + gameState.skills.socialSkill * 0.2));
                gameState.coins += bonus;
                showNotification(`社交活动获得意外收获：${bonus}元`);
            }
            break;
        case 'team_building':
            if (gameState.relationships.colleagues.length < 3) {
                gameState.relationships.colleagues.push({
                    name: generateRandomName(),
                    buff: generateRandomBuff()
                });
                showNotification('结识了新的同事！');
            }
            gameState.skills.management += 0.1;
            break;
    }
    
    updateUI();
}

// 辅助函数：生成随机名字
function generateRandomName() {
    const names = ['小王', '小李', '小张', '小陈', '小林'];
    return names[Math.floor(Math.random() * names.length)];
}

// 辅助函数：生成随机buff
function generateRandomBuff() {
    const buffs = [
        { type: 'income', value: 1.1, description: '工作收入+10%' },
        { type: 'energy', value: 1.1, description: '体力恢复+10%' },
        { type: 'exp', value: 1.1, description: '经验获取+10%' },
        { type: 'investment', value: 1.1, description: '投资收益+10%' }
    ];
    return buffs[Math.floor(Math.random() * buffs.length)];
}

// 新增：压力管理系统
function manageStress() {
    // 根据工作时间和强度增加压力
    gameState.health.stress = Math.min(100, gameState.health.stress + 5);
    
    // 压力影响效率和幸福度
    if (gameState.health.stress > 80) {
        gameState.buffs.incomeMultiplier *= 0.8;
        gameState.health.happiness -= 10;
        showNotification('压力过大，工作效率下降！');
    }
    
    // 自动恢复
    if (gameState.energy >= 80) {
        gameState.health.stress = Math.max(0, gameState.health.stress - 2);
    }
    
    updateUI();
}

// 新增：团队管理系统
function manageTeam() {
    // 更新团队士气
    gameState.relationships.team.morale = Math.min(100, gameState.relationships.team.morale + 
        (gameState.skills.leadership * 2));
    
    // 计算团队效率
    gameState.relationships.team.efficiency = 1 + 
        (gameState.relationships.team.morale / 100) * 0.5 +
        (gameState.skills.leadership * 0.1);
    
    // 团队收益
    if (gameState.relationships.team.members.length > 0) {
        const teamBonus = Math.floor(50 * gameState.relationships.team.efficiency);
        gameState.coins += teamBonus;
        showNotification(`团队协作获得额外收入：${teamBonus}元`);
    }
    
    updateUI();
}

// 新增：学习系统
function study(course) {
    if (gameState.energy < 20) {
        showNotification('体力不足，无法学习！');
        return;
    }
    
    gameState.energy -= 20;
    const learningEffect = 1 + (gameState.skills.learning * 0.2);
    
    switch (course) {
        case 'programming_course':
            gameState.skills.programming += 0.2 * learningEffect;
            gameState.exp += 30;
            gameState.personalGrowth.courses.push({
                name: '编程课程',
                date: new Date().toLocaleDateString()
            });
            break;
        case 'management_course':
            gameState.skills.management += 0.2 * learningEffect;
            gameState.exp += 30;
            gameState.personalGrowth.courses.push({
                name: '管理课程',
                date: new Date().toLocaleDateString()
            });
            break;
        case 'investment_course':
            gameState.skills.investment += 0.2 * learningEffect;
            gameState.exp += 30;
            gameState.personalGrowth.courses.push({
                name: '投资课程',
                date: new Date().toLocaleDateString()
            });
            break;
    }
    
    showNotification('学习完成，能力得到提升！');
    checkAchievements();
    updateUI();
}

// 修改休闲活动函数
function relax(activity) {
    if (gameState.coins < 50) {
        showNotification('金钱不足，无法进行休闲活动！');
        return;
    }
    
    gameState.coins -= 50;
    
    let activityName = '';
    switch (activity) {
        case 'vacation':
            activityName = '度假';
            gameState.health.stress = Math.max(0, gameState.health.stress - 30);
            gameState.health.happiness = Math.min(100, gameState.health.happiness + 20);
            gameState.energy = Math.min(100, gameState.energy + 50);
            showNotification('度假归来，身心舒畅！');
            break;
        case 'hobby':
            activityName = '兴趣培养';
            gameState.health.stress = Math.max(0, gameState.health.stress - 15);
            gameState.health.happiness = Math.min(100, gameState.health.happiness + 10);
            gameState.skills.creativity += 0.1;
            showNotification('培养兴趣爱好，创造力提升！');
            break;
        case 'social':
            activityName = '社交活动';
            gameState.health.stress = Math.max(0, gameState.health.stress - 10);
            gameState.health.happiness = Math.min(100, gameState.health.happiness + 15);
            gameState.skills.socialSkill += 0.1;
            showNotification('社交活动让你心情愉悦！');
            break;
    }
    
    // 添加消费特效
    createSpendingEffect(activityName, 50, activity);
    updateUI();
}

// 初始化成长曲线图
function initGrowthChart() {
    const canvas = document.getElementById('growthChart');
    const ctx = canvas.getContext('2d');
    
    // 设置画布大小
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    
    // 定义成长阶段和对应的经验值
    const milestones = [
        { name: '打工人', exp: 0 },
        { name: '小组长', exp: 1000 },
        { name: '部门经理', exp: 5000 },
        { name: '公司高管', exp: 20000 },
        { name: '企业总裁', exp: 100000 },
        { name: '全球首富', exp: 1000000 }
    ];
    
    // 绘制曲线
    function drawChart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 设置曲线样式
        ctx.strokeStyle = '#3498db';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        
        // 开始绘制
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        // 绘制贝塞尔曲线
        ctx.bezierCurveTo(
            canvas.width * 0.3, canvas.height * 0.7,
            canvas.width * 0.6, canvas.height * 0.3,
            canvas.width, 0
        );
        
        // 绘制曲线
        ctx.stroke();
        
        // 绘制当前位置
        const currentExp = gameState.exp;
        const maxExp = milestones[milestones.length - 1].exp;
        const progress = Math.min(currentExp / maxExp, 1);
        
        const currentX = canvas.width * progress;
        const currentY = canvas.height * (1 - progress);
        
        // 绘制位置标记
        ctx.beginPath();
        ctx.arc(currentX, currentY, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#e74c3c';
        ctx.fill();
        
        // 绘制光晕效果
        ctx.beginPath();
        ctx.arc(currentX, currentY, 10, 0, Math.PI * 2);
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    
    // 初始绘制
    drawChart();
    
    // 监听窗口大小变化
    window.addEventListener('resize', () => {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        drawChart();
    });
    
    // 返回更新函数
    return drawChart;
}

// 更新成长曲线图
function updateGrowthChart() {
    const milestones = document.querySelectorAll('.milestone');
    const currentExp = gameState.exp;
    
    milestones.forEach((milestone, index) => {
        const expRequired = [0, 1000, 5000, 20000, 100000, 1000000][index];
        if (currentExp >= expRequired) {
            milestone.classList.add('achieved');
        } else {
            milestone.classList.remove('achieved');
        }
    });
    
    // 更新图表
    if (window.updateChart) {
        window.updateChart();
    }
}

// 在游戏初始化时添加
function initGame() {
    // ... existing code ...
    
    // 初始化成长曲线图
    window.updateChart = initGrowthChart();
    
    // 初始更新一次
    updateGrowthChart();
}

// 在更新游戏状态时添加
function updateGame() {
    // ... existing code ...
    
    // 更新成长曲线图
    updateGrowthChart();
    saveGameState(); // 添加保存
}

// 添加数据持久化功能
function saveGameState() {
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

function loadGameState() {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
        gameState = JSON.parse(savedState);
        updateUI();
        showNotification('游戏数据已加载');
    }
}

// 定期保存游戏数据
setInterval(saveGameState, 30000); // 每30秒自动保存一次

// 在游戏初始化时加载数据
document.addEventListener('DOMContentLoaded', () => {
    loadGameState(); // 加载保存的数据
    updateUI();
    initGame();
});

// 重置游戏函数
function resetGame() {
    if (confirm('确定要重新开始打工吗？所有进度都将清零！\nAre you sure you want to reset the game? All progress will be lost!')) {
        // 重置游戏状态
        gameState = JSON.parse(JSON.stringify(initialGameState));
        
        // 清除本地存储
        localStorage.removeItem('gameState');
        
        // 创建重置特效
        createResetEffect();
        
        // 更新UI
        updateUI();
        
        // 显示通知
        showNotification('游戏已重置，重新开始打工吧！');
    }
}

// 重置特效
function createResetEffect() {
    const effect = document.createElement('div');
    effect.style.position = 'fixed';
    effect.style.top = '0';
    effect.style.left = '0';
    effect.style.width = '100%';
    effect.style.height = '100%';
    effect.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    effect.style.display = 'flex';
    effect.style.justifyContent = 'center';
    effect.style.alignItems = 'center';
    effect.style.zIndex = '9999';
    effect.style.opacity = '0';
    effect.style.transition = 'opacity 0.5s';
    
    const content = document.createElement('div');
    content.style.textAlign = 'center';
    content.style.animation = 'resetPop 1.5s ease-out';
    content.style.backgroundColor = 'white';
    content.style.padding = '40px';
    content.style.borderRadius = '20px';
    content.style.maxWidth = '80%';
    content.style.position = 'relative';
    
    // 添加表情动画
    const emojis = ['😭', '📦', '🔄', '🌟', '💼'];
    emojis.forEach((emoji, index) => {
        const emojiElement = document.createElement('div');
        emojiElement.style.position = 'absolute';
        emojiElement.style.fontSize = '40px';
        emojiElement.style.animation = `emojiFloat 2s ease-in-out infinite ${index * 0.2}s`;
        emojiElement.style.left = `${20 + index * 20}%`;
        emojiElement.style.top = '-50px';
        emojiElement.textContent = emoji;
        content.appendChild(emojiElement);
    });
    
    // 主标题
    const mainTitle = document.createElement('div');
    mainTitle.style.fontSize = '36px';
    mainTitle.style.fontWeight = 'bold';
    mainTitle.style.color = '#e74c3c';
    mainTitle.style.marginBottom = '20px';
    mainTitle.style.animation = 'titleWobble 1s ease-in-out infinite';
    mainTitle.innerHTML = '重新开始打工！<br>Time to Start Over!';
    
    // 搞笑文案
    const funnyText = document.createElement('div');
    funnyText.style.fontSize = '24px';
    funnyText.style.color = '#666';
    funnyText.style.marginBottom = '30px';
    funnyText.style.lineHeight = '1.5';
    funnyText.innerHTML = `
        准备重新当韭菜了！<br>
        Ready to be a hardworking vegetable again!<br>
        <span style="font-size: 18px; color: #999">
            (韭菜割了还会长~)<br>
            (Chives grow back after being cut~)
        </span>
    `;
    
    // 添加动画进度条
    const progressBar = document.createElement('div');
    progressBar.style.width = '100%';
    progressBar.style.height = '20px';
    progressBar.style.backgroundColor = '#f0f0f0';
    progressBar.style.borderRadius = '10px';
    progressBar.style.overflow = 'hidden';
    progressBar.style.marginTop = '20px';
    
    const progress = document.createElement('div');
    progress.style.width = '0%';
    progress.style.height = '100%';
    progress.style.backgroundColor = '#2ecc71';
    progress.style.transition = 'width 2s linear';
    progress.style.animation = 'progressLoad 2s linear forwards';
    
    progressBar.appendChild(progress);
    
    // 添加所有元素到内容区
    content.appendChild(mainTitle);
    content.appendChild(funnyText);
    content.appendChild(progressBar);
    
    effect.appendChild(content);
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes resetPop {
            0% { transform: scale(0.3) rotate(0deg); opacity: 0; }
            50% { transform: scale(1.1) rotate(360deg); opacity: 1; }
            100% { transform: scale(1) rotate(720deg); opacity: 1; }
        }
        @keyframes emojiFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(20deg); }
        }
        @keyframes titleWobble {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
        }
        @keyframes progressLoad {
            0% { width: 0%; }
            100% { width: 100%; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(effect);
    
    // 触发动画
    requestAnimationFrame(() => {
        effect.style.opacity = '1';
    });
    
    // 播放音效
    try {
        const resetSound = new Audio('assets/reset-sound.mp3');
        resetSound.volume = 0.5;
        resetSound.play();
    } catch (error) {
        console.log('音效播放失败');
    }
    
    // 2.5秒后移除特效
    setTimeout(() => {
        effect.style.opacity = '0';
        setTimeout(() => {
            effect.remove();
            style.remove();
        }, 500);
    }, 2500);
} 