var LANG_DATA = {
    'zh': {
        // index.html
        'verify_title': '🔒 人机验证',
        'verify_sub': '请完成下方验证以进入小方小镇官网',
        'verify_status': '等待验证…',
        'verify_passed': '✅ 验证通过，正在跳转…',
        'verify_skip': '无法通过验证？点击跳转',

        // home.html
        'site_title': '小方小镇的官网',
        'btn_server': '了解服务器',
        'qq_link': '添加QQ服务器聊天群',

        // server.html
        'server_title': '服务器介绍',
        'server_desc': '小方小镇虽然服务器不太稳定，随时都可能会崩服，但是小镇里有很多生存的必须机器，值得你来探索和定居。',
        'btn_connect': '如何连接服务器',
        'link_download': '没有整合包？点击下载',

        // connect.html
        'connect_title': '连接服务器',
        'java_title': 'Java 版',
        'java_version': '版本 26.2',
        'java_address': '在服务器地址里输入',
        'java_click': '点击完成后进入即可。',
        'bedrock_title': '基岩版',
        'bedrock_version': '版本 1.16~26.2',
        'bedrock_address': '把服务器地址输入进去',
        'bedrock_port': '端口号：',
        'bedrock_click': '点击完成后进行游玩',
        'bedrock_wait': '(等待时间较长，请耐心等待)',
        'btn_back': '←'
    },
    'en': {
        'verify_title': '🔒 Human Verification',
        'verify_sub': 'Please complete the verification to enter Xiaofang Town',
        'verify_status': 'Waiting for verification…',
        'verify_passed': '✅ Verified, redirecting…',
        'verify_skip': 'Can\'t pass? Click to skip',

        'site_title': 'Xiaofang Town Official',
        'btn_server': 'Learn About Server',
        'qq_link': 'Join QQ Server Chat Group',

        'server_title': 'Server Info',
        'server_desc': 'Xiaofang Town server is not very stable and may crash at any time, but there are many essential survival machines. Worth exploring and settling down.',
        'btn_connect': 'How to Connect',
        'link_download': 'No modpack? Click to download',

        'connect_title': 'How to Connect',
        'java_title': 'Java Edition',
        'java_version': 'Version 26.2',
        'java_address': 'Enter server address',
        'java_click': 'Click done and join.',
        'bedrock_title': 'Bedrock Edition',
        'bedrock_version': 'Version 1.16~26.2',
        'bedrock_address': 'Enter server address',
        'bedrock_port': 'Port:',
        'bedrock_click': 'Click done to play',
        'bedrock_wait': '(Wait time may be long, please be patient)',
        'btn_back': '←'
    }
};

var currentLang = localStorage.getItem('lang') || 'zh';

function t(key) {
    return LANG_DATA[currentLang]?.[key] || key;
}

function setLang(lang) {
    if (LANG_DATA[lang]) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        applyLang();
    }
}

function applyLang() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        var key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        var key = el.getAttribute('data-i18n-html');
        el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        var key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    document.title = t('site_title');
    // 更新语言按钮高亮
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

function toggleLang() {
    var nextLang = currentLang === 'zh' ? 'en' : 'zh';
    setLang(nextLang);
}