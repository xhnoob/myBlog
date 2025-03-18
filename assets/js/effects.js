/**
 * 中国风博客特效
 * 包含：点击特效、鼠标跟随特效、页面加载特效
 */

// 禅语数组 - 点击时随机显示
const zenQuotes = [
    "心若无尘，何处不清净",
    "万物皆空，唯有菩提",
    "静坐常思己过，闲谈莫论人非",
    "一花一世界，一叶一菩提",
    "放下执着，方得自在",
    "心静自然禅",
    "随缘不变，不变随缘",
    "心中若无事，何处惹尘埃",
    "无欲则刚",
    "一切有为法，如梦幻泡影",
    "菩提本无树，明镜亦非台",
    "缘起性空",
    "烦恼即菩提",
    "一切唯心造"
];

// 文字颜色数组
const textColors = [
    '#A52A2A', // 褐红色
    '#F2C670', // 金黄色
    '#8B6E4E', // 棕褐色
    '#2C2416', // 深褐色
    '#D9C5A0'  // 淡棕色
];

// ----------------------
// 点击特效
// ----------------------
document.addEventListener('DOMContentLoaded', function() {
    // 点击生成禅语特效
    document.addEventListener('click', function(e) {
        createZenText(e.pageX, e.pageY);
        createClickRipple(e.pageX, e.pageY);
    });

    // 初始化鼠标跟随特效
    initMouseTrail();
    
    // 初始化页面加载特效
    initPageFadeIn();
    
    // 初始化页面滚动特效
    initScrollEffects();
});

// 创建点击生成禅语特效
function createZenText(x, y) {
    const text = document.createElement('div');
    const randomQuote = zenQuotes[Math.floor(Math.random() * zenQuotes.length)];
    const randomColor = textColors[Math.floor(Math.random() * textColors.length)];
    
    text.innerText = randomQuote;
    text.style.position = 'absolute';
    text.style.left = `${x}px`;
    text.style.top = `${y}px`;
    text.style.color = randomColor;
    text.style.fontFamily = '"NotoSerifSC", serif';
    text.style.fontSize = '1rem';
    text.style.fontWeight = '400';
    text.style.userSelect = 'none';
    text.style.pointerEvents = 'none';
    text.style.zIndex = '9999';
    text.style.opacity = '1';
    text.style.transform = 'translateY(0)';
    text.style.transition = 'all 2s ease-out';
    
    document.body.appendChild(text);
    
    // 动画效果
    setTimeout(() => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(-50px)';
    }, 100);
    
    // 移除元素
    setTimeout(() => {
        document.body.removeChild(text);
    }, 2000);
}

// 创建点击涟漪特效
function createClickRipple(x, y) {
    const ripple = document.createElement('div');
    
    ripple.style.position = 'absolute';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.borderRadius = '50%';
    ripple.style.border = '1px solid rgba(242, 198, 112, 0.8)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.animation = 'ripple 1s linear';
    ripple.style.zIndex = '9998';
    ripple.style.pointerEvents = 'none';
    
    document.body.appendChild(ripple);
    
    // 移除元素
    setTimeout(() => {
        document.body.removeChild(ripple);
    }, 1000);
}

// 添加CSS动画
const style = document.createElement('style');
style.innerHTML = `
    @keyframes ripple {
        0% {
            width: 10px;
            height: 10px;
            opacity: 1;
        }
        100% {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .trail {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(242, 198, 112, 0.6);
        pointer-events: none;
        z-index: 9997;
        opacity: 0.8;
        transition: width 0.3s, height 0.3s, opacity 0.3s;
    }
    
    .logo-float {
        animation: float 4s ease-in-out infinite;
    }
    
    .fade-in {
        animation: fadeIn 1s ease-out forwards;
    }
`;
document.head.appendChild(style);

// ----------------------
// 鼠标跟随特效
// ----------------------
function initMouseTrail() {
    let dots = [];
    const numDots = 20;
    const mouseMoveThreshold = 2; // 至少移动2px才会更新
    let lastMouseX = 0;
    let lastMouseY = 0;
    
    // 创建跟随点
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'trail';
        document.body.appendChild(dot);
        dots.push({
            el: dot,
            x: 0,
            y: 0,
            size: 8 - (i * 0.4) // 尺寸逐渐减小
        });
    }
    
    // 更新鼠标位置
    document.addEventListener('mousemove', function(e) {
        // 计算鼠标移动距离，减少不必要的更新
        const dx = Math.abs(e.pageX - lastMouseX);
        const dy = Math.abs(e.pageY - lastMouseY);
        
        if (dx < mouseMoveThreshold && dy < mouseMoveThreshold) {
            return;
        }
        
        lastMouseX = e.pageX;
        lastMouseY = e.pageY;
        
        dots[0].x = e.pageX;
        dots[0].y = e.pageY;
    });
    
    // 动画循环
    function animateTrail() {
        // 更新所有点的位置
        for (let i = 1; i < dots.length; i++) {
            const dx = dots[i-1].x - dots[i].x;
            const dy = dots[i-1].y - dots[i].y;
            
            dots[i].x += dx * 0.2;
            dots[i].y += dy * 0.2;
            
            const dot = dots[i].el;
            const size = dots[i].size;
            
            dot.style.left = `${dots[i].x}px`;
            dot.style.top = `${dots[i].y}px`;
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.opacity = 1 - (i / dots.length);
        }
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}

// ----------------------
// 页面加载特效
// ----------------------
function initPageFadeIn() {
    // 标题浮动特效
    const siteTitle = document.querySelector('.site-title');
    if (siteTitle) {
        siteTitle.classList.add('logo-float');
    }
    
    // 内容淡入特效
    const fadeElements = document.querySelectorAll('.site-content, .post-item, .page-content, .post-content');
    let delay = 0;
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.classList.add('fade-in');
        }, delay);
        delay += 200;
    });
}

// ----------------------
// 页面滚动特效
// ----------------------
function initScrollEffects() {
    // 滚动时显示文章
    const postItems = document.querySelectorAll('.post-item');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        postItems.forEach(item => {
            item.style.opacity = '0';
            observer.observe(item);
        });
    } else {
        // 回退方案
        postItems.forEach(item => {
            item.classList.add('fade-in');
        });
    }
}

// 动态加载纸纹背景
function loadPaperTexture() {
    const img = new Image();
    img.onload = function() {
        document.querySelectorAll('.site-content').forEach(el => {
            el.style.backgroundImage = `url(${img.src})`;
        });
    };
    img.src = 'data:image/png;base64,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';
}

// 页面加载后调用
document.addEventListener('DOMContentLoaded', loadPaperTexture); 