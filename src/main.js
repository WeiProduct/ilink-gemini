import './styles.css';

const STORAGE_KEY = 'ilink-gemini-state-v1';

const translations = {
  en: {
    geminiBuilt: 'Built with Gemini', eyebrow: 'Life between us', heroTitle: 'Let each other know how life is unfolding.',
    heroLede: 'Capture a small moment. Let Gemini organize it. Review every word—then share only what feels right.',
    recordMoment: 'Record a moment', seeGlasses: 'See ilink Glasses', privateDefault: 'Private by default', humanApproved: 'Human approved', geminiOrganized: 'Gemini organized',
    onlyYou: 'Private · only you', recordKicker: 'Capture first', recordTitle: 'Say it once. Stay close.', recordSub: 'Gemini drafts. You decide what leaves this screen.',
    exampleOne: 'I started a new project today', exampleTwo: 'Turn dinner into an update for Mom', exampleThree: 'Remember a plan with Dad',
    momentLabel: 'What happened?', momentPlaceholder: 'I had a small win at work today...', tapSpeak: 'Tap to speak', stopListening: 'Stop listening',
    organize: 'Organize with Gemini', captureNote: 'Speech stays in this draft until you choose to process it.', speechUnsupported: 'Speech recognition is unavailable here—text entry still works.', speechError: 'I could not hear that. You can type the moment instead.',
    familyKicker: 'Family circle', familyTitle: 'Closer, without the check-in.', familySub: 'Only your approved moments can become family cards.',
    mom: 'Mom', dad: 'Dad', lastUpdate: 'last update yesterday', lastUpdateWeek: 'last update this week', privateUpdate: 'Private family update · demo',
    chooseMoment: 'Choose an approved moment', captionLabel: 'Caption', createCard: 'Create private card', shareDemoNote: 'Demo only. No message is sent to another account.',
    noApproved: 'Approve a moment in My Day first', noCards: 'Your private family cards will appear here.',
    meKicker: 'My private space', meTitle: 'My Day', meSub: 'A quiet record of what mattered—not a performance.', today: 'Today', moments: 'moments',
    familyTab: 'Family', recordTab: 'Record', meTab: 'Me',
    loopKicker: 'The relationship loop', loopTitle: 'AI organizes. People choose.', loopCopy: 'ilink removes the pressure of writing a perfect update while preserving the part that matters most: consent.',
    stepCapture: 'Capture naturally', stepCaptureCopy: 'Speak or type a moment before it disappears.', stepOrganize: 'Gemini organizes', stepOrganizeCopy: 'A factual memory draft, title, tags, and caption.',
    stepApprove: 'Review first', stepApproveCopy: 'Edit, regenerate, approve, or discard every word.', stepShare: 'Share intentionally', stepShareCopy: 'Only approved moments can become family cards.',
    glassesKicker: 'ilink Glasses · ambient capture', glassesTitle: 'One frame becomes something worth knowing.', glassesCopy: 'No continuous video. At a selected moment, the wearer captures one frame. Gemini proposes a memory later; the human decides what family can see.',
    oneFrameCamera: 'One-frame camera · visible privacy light', privateInbox: 'Private inbox', oneFrameSaved: 'One frame saved', notShared: 'Not shared',
    g1: 'Intentional trigger', g1copy: 'The wearer presses capture.', g2: 'Take one photo', g2copy: 'A visible light marks the frame.', g3: 'Private sync', g3copy: 'The original enters a private inbox.',
    g4: 'Gemini organizes My Day', g4copy: 'A suggested memory, never a post.', g5: 'Review, then share', g5copy: 'Family only sees the approved card.', tryCapture: 'Try one-frame capture',
    principlesKicker: 'Privacy is the product', principlesTitle: 'Memory without surveillance.', p1: 'No 24/7 recording', p2: 'Originals stay private', p3: 'Gemini never auto-publishes', p4: 'The wearer approves every share',
    footerCopy: 'Real life, privately connected. A Gemini-powered hackathon prototype by WeiProduct.',
    reviewKicker: 'Gemini draft · private', reviewTitle: 'Review before anything moves.', geminiThinking: 'Gemini is organizing this moment...', originalInput: 'Original input', originalNote: 'Only the current text was sent to Gemini.', geminiSuggestion: 'Gemini suggestion',
    titleLabel: 'Title', summaryLabel: 'Summary', tagsLabel: 'Tags', discard: 'Discard', regenerate: 'Regenerate', approvePrivate: 'Approve to My Day',
    modelFallback: 'Demo fallback shown. AI Studio will inject Gemini securely when published.', modelUsed: 'Organized by', approvedToast: 'Approved privately in My Day.', discardedToast: 'Draft discarded. Nothing was saved.',
    createMomentFirst: 'Add a life moment before asking Gemini to organize it.', cardCreated: 'Private demo card created for', chooseApprovedError: 'Choose an approved moment first.',
    geminiGuide: 'Gemini product guide', qPrivacy: 'Who can see my moments?', qGemini: 'How does Gemini help?', qGlasses: 'Do the glasses record all day?', assistantPlaceholder: 'Ask about ilink...', assistantPrivacy: 'Xiaolian cannot inspect your private records.', askXiaolian: 'Ask Xiaolian', geminiCompanion: 'Gemini companion',
    assistantWelcome: 'Hi, I’m Xiaolian. I can explain how ilink, Gemini, and human-approved sharing work. I cannot inspect your private moments.',
    assistantFallback: 'Demo fallback', assistantError: 'Xiaolian could not answer just now. Please try again.',
    frameToast: 'One frame entered the private inbox—not family sharing.',
  },
  zh: {
    geminiBuilt: '由 Gemini 驱动', eyebrow: '生活在我们之间', heroTitle: '让彼此知道，生活正在怎样发生。',
    heroLede: '随手记录一个小瞬间，让 Gemini 帮你整理。每个字都由你确认，只分享真正愿意分享的部分。',
    recordMoment: '记录一个瞬间', seeGlasses: '了解 ilink 眼镜', privateDefault: '默认私密', humanApproved: '人工确认', geminiOrganized: 'Gemini 整理',
    onlyYou: '私密 · 仅自己可见', recordKicker: '先记录下来', recordTitle: '说一次，就能更靠近。', recordSub: 'Gemini 起草，你决定什么可以离开这个页面。',
    exampleOne: '我今天开始了一个新项目', exampleTwo: '把晚餐整理成给妈妈的近况', exampleThree: '记住和爸爸的下周计划',
    momentLabel: '今天发生了什么？', momentPlaceholder: '今天工作里有一个小突破……', tapSpeak: '点击说话', stopListening: '停止聆听', organize: '让 Gemini 整理',
    captureNote: '语音只会留在当前草稿，直到你主动选择处理。', speechUnsupported: '当前浏览器不支持语音识别，但文字输入仍可正常使用。', speechError: '没有听清，你也可以直接输入这段记录。',
    familyKicker: '家人圈', familyTitle: '不必打卡，也能更靠近。', familySub: '只有你确认过的瞬间才能成为家人卡片。',
    mom: '妈妈', dad: '爸爸', lastUpdate: '昨天有更新', lastUpdateWeek: '本周有更新', privateUpdate: '私密家人近况 · 演示', chooseMoment: '选择一个已确认瞬间', captionLabel: '卡片文字', createCard: '创建私密卡片', shareDemoNote: '仅演示，不会向其他账号发送消息。',
    noApproved: '请先在「我的一天」确认一个瞬间', noCards: '你创建的私密家人卡片会出现在这里。',
    meKicker: '我的私人空间', meTitle: '我的一天', meSub: '记录真正重要的部分，而不是表演生活。', today: '今天', moments: '个瞬间', familyTab: '家人', recordTab: '记录', meTab: '我的',
    loopKicker: '关系闭环', loopTitle: 'AI 负责整理，人负责选择。', loopCopy: 'ilink 减少写近况的压力，同时保留最重要的部分：知情与同意。',
    stepCapture: '自然记录', stepCaptureCopy: '在瞬间消失前，说下来或写下来。', stepOrganize: 'Gemini 整理', stepOrganizeCopy: '生成忠于事实的摘要、标题、标签和卡片文案。', stepApprove: '先查看确认', stepApproveCopy: '每个字都可以修改、重写、确认或丢弃。', stepShare: '有意分享', stepShareCopy: '只有确认后的瞬间才能成为家人卡片。',
    glassesKicker: 'ilink 眼镜 · 环境捕捉', glassesTitle: '一帧画面，变成值得知道的生活。', glassesCopy: '不持续录像。只在特定时刻由佩戴者主动拍下一帧，Gemini 之后提出记忆草稿，最终由人决定家人能看到什么。',
    oneFrameCamera: '单帧相机 · 可见隐私灯', privateInbox: '私人收件箱', oneFrameSaved: '已保存一帧', notShared: '尚未分享',
    g1: '主动触发', g1copy: '佩戴者按下拍摄。', g2: '只拍一张', g2copy: '隐私灯明确显示拍摄。', g3: '私密同步', g3copy: '原图进入私人收件箱。', g4: 'Gemini 整理「我的一天」', g4copy: '只提出记忆建议，绝不自动发布。', g5: '查看后再分享', g5copy: '家人只看到确认后的卡片。', tryCapture: '体验单帧捕捉',
    principlesKicker: '隐私就是产品', principlesTitle: '留下记忆，不制造监控。', p1: '不做 24/7 持续录像', p2: '原始内容保持私密', p3: 'Gemini 永不自动发布', p4: '每次分享都由佩戴者确认',
    footerCopy: '真实生活，私密连接。WeiProduct 的 Gemini 黑客松原型。',
    reviewKicker: 'Gemini 草稿 · 私密', reviewTitle: '任何内容移动前，先由你确认。', geminiThinking: 'Gemini 正在整理这个瞬间……', originalInput: '原始输入', originalNote: '只有当前这段文字被发送给 Gemini。', geminiSuggestion: 'Gemini 建议', titleLabel: '标题', summaryLabel: '摘要', tagsLabel: '标签', discard: '丢弃', regenerate: '重新生成', approvePrivate: '确认到「我的一天」',
    modelFallback: '当前显示演示备用内容；发布后 AI Studio 会安全注入 Gemini。', modelUsed: '整理模型', approvedToast: '已私密保存到「我的一天」。', discardedToast: '草稿已丢弃，没有保存任何内容。', createMomentFirst: '请先写下一段生活记录。', cardCreated: '已创建私密演示卡片，收件人：', chooseApprovedError: '请先选择一个已确认瞬间。',
    geminiGuide: 'Gemini 产品伙伴', qPrivacy: '谁能看到我的记录？', qGemini: 'Gemini 如何提供帮助？', qGlasses: '眼镜会整天录像吗？', assistantPlaceholder: '询问任何 ilink 问题……', assistantPrivacy: '小连无法查看你的私人记录。', askXiaolian: '问问小连', geminiCompanion: 'Gemini 伙伴', assistantWelcome: '你好，我是小连。我可以解释 ilink、Gemini 和人工确认分享，但我无法查看你的私人记录。', assistantFallback: '演示备用内容', assistantError: '小连暂时无法回答，请稍后再试。', frameToast: '这一帧只进入了私人收件箱，没有分享给家人。',
  },
};

const seededMoments = [
  {
    id: 'seed-1',
    title: 'A good start to the day',
    summary: 'I took the longer route to work and noticed the first warm morning of the season.',
    caption: 'A small morning moment I wanted you to know about.',
    tags: ['morning', 'outside'],
    status: 'approved',
    time: '8:20 AM',
  },
  {
    id: 'seed-2',
    title: 'Dinner that felt like home',
    summary: 'I tried Mom’s tomato egg recipe tonight. It was not perfect, but it tasted close to home.',
    caption: 'I finally tried your recipe. Mine still needs your touch.',
    tags: ['dinner', 'home'],
    status: 'private',
    time: '7:45 PM',
  },
];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      language: saved.language === 'zh' ? 'zh' : 'en',
      moments: Array.isArray(saved.moments) && saved.moments.length ? saved.moments : seededMoments,
      cards: Array.isArray(saved.cards) ? saved.cards : [],
    };
  } catch {
    return { language: 'en', moments: seededMoments, cards: [] };
  }
}

const state = loadState();
let currentDraft = null;
let recipient = 'Mom';
let recognition = null;
let listening = false;
let toastTimer = null;
let assistantHistory = [];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const t = (key) => translations[state.language][key] || translations.en[key] || key;

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function translatePage() {
  document.documentElement.lang = state.language === 'zh' ? 'zh-CN' : 'en';
  $$('[data-i18n]').forEach((element) => {
    const value = t(element.dataset.i18n);
    if (value) element.textContent = value;
  });
  $$('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  $$('[data-language]').forEach((button) => {
    const active = button.dataset.language === state.language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderMoments();
  renderCards();
  updateApprovedOptions();
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function switchTab(tab) {
  $$('[data-view]').forEach((view) => view.classList.toggle('active', view.dataset.view === tab));
  $$('[data-tab]').forEach((button) => button.classList.toggle('active', button.dataset.tab === tab));
  if (tab === 'record') setTimeout(() => $('#moment-input')?.focus(), 220);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function displayTime(date = new Date()) {
  return date.toLocaleTimeString(state.language === 'zh' ? 'zh-CN' : 'en-US', { hour: 'numeric', minute: '2-digit' });
}

function renderMoments() {
  const timeline = $('#timeline');
  $('#moment-count').textContent = String(state.moments.length);
  $('#today-date').textContent = new Date().toLocaleDateString(state.language === 'zh' ? 'zh-CN' : 'en-US', { month: 'long', day: 'numeric' });
  if (!state.moments.length) {
    timeline.innerHTML = `<div class="timeline-empty">${escapeHtml(t('noApproved'))}</div>`;
    return;
  }
  timeline.innerHTML = state.moments.map((moment) => `
    <article class="timeline-card">
      <div class="timeline-top"><time>${escapeHtml(moment.time || '')}</time><span class="status-chip ${escapeHtml(moment.status)}">${escapeHtml(moment.status)}</span></div>
      <h4>${escapeHtml(moment.title)}</h4>
      <p>${escapeHtml(moment.summary)}</p>
      <div class="timeline-tags">${(moment.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
    </article>
  `).join('');
}

function approvedMoments() {
  return state.moments.filter((moment) => moment.status === 'approved' || moment.status === 'shared');
}

function updateApprovedOptions() {
  const select = $('#approved-select');
  const approved = approvedMoments();
  if (!approved.length) {
    select.innerHTML = `<option value="">${escapeHtml(t('noApproved'))}</option>`;
    select.disabled = true;
    $('#create-card').disabled = true;
    $('#share-caption').value = '';
    return;
  }
  const previous = select.value;
  select.disabled = false;
  $('#create-card').disabled = false;
  select.innerHTML = approved.map((moment) => `<option value="${escapeHtml(moment.id)}">${escapeHtml(moment.title)}</option>`).join('');
  if (approved.some((moment) => moment.id === previous)) select.value = previous;
  syncCaption();
}

function syncCaption() {
  const moment = state.moments.find((item) => item.id === $('#approved-select')?.value);
  if (moment) $('#share-caption').value = moment.caption || moment.summary;
}

function renderCards() {
  const feed = $('#family-feed');
  if (!state.cards.length) {
    feed.innerHTML = `<div class="timeline-empty">${escapeHtml(t('noCards'))}</div>`;
    return;
  }
  feed.innerHTML = state.cards.slice().reverse().map((card) => `
    <article class="feed-card">
      <span>${escapeHtml(card.recipient)} · PRIVATE DEMO</span>
      <h4>${escapeHtml(card.title)}</h4>
      <p>${escapeHtml(card.caption)}</p>
    </article>
  `).join('');
}

function openReview(input) {
  currentDraft = { input };
  $('#review-original').textContent = input;
  $('#review-error').hidden = true;
  $('#review-progress').hidden = false;
  $('#review-grid').style.opacity = '.45';
  $('#draft-title').value = '';
  $('#draft-summary').value = '';
  $('#draft-tags').value = '';
  $('#draft-caption').value = '';
  $('#model-note').textContent = '';
  $('#review-modal').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeReview() {
  $('#review-modal').hidden = true;
  document.body.style.overflow = '';
}

function setReviewLoading(loading) {
  $('#review-progress').hidden = !loading;
  $('#review-grid').style.opacity = loading ? '.45' : '1';
  $('#approve-draft').disabled = loading;
  $('#regenerate-draft').disabled = loading;
}

function populateDraft(result) {
  currentDraft = { ...currentDraft, ...result };
  $('#draft-title').value = result.title || '';
  $('#draft-summary').value = result.summary || '';
  $('#draft-tags').value = (result.tags || []).join(', ');
  $('#draft-caption').value = result.caption || '';
  $('#model-note').textContent = result.fallback ? t('modelFallback') : `${t('modelUsed')} ${result.model || 'Gemini'}`;
}

async function requestDraft(previous = '') {
  if (!currentDraft?.input) return;
  setReviewLoading(true);
  $('#review-error').hidden = true;
  try {
    const response = await fetch('/api/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: currentDraft.input, previous }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || 'Gemini request failed.');
    populateDraft(result);
  } catch (error) {
    $('#review-error').textContent = error.message;
    $('#review-error').hidden = false;
  } finally {
    setReviewLoading(false);
  }
}

function approveDraft() {
  if (!currentDraft?.input) return;
  const moment = {
    id: crypto.randomUUID(),
    title: $('#draft-title').value.trim() || (state.language === 'zh' ? '今天的一刻' : 'A moment from today'),
    summary: $('#draft-summary').value.trim() || currentDraft.input,
    tags: $('#draft-tags').value.split(/[,，]/).map((tag) => tag.trim()).filter(Boolean).slice(0, 4),
    caption: $('#draft-caption').value.trim() || $('#draft-summary').value.trim(),
    status: 'approved',
    time: displayTime(),
  };
  state.moments.unshift(moment);
  saveState();
  renderMoments();
  updateApprovedOptions();
  $('#moment-input').value = '';
  closeReview();
  switchTab('me');
  showToast(t('approvedToast'));
}

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return null;
  const service = new SpeechRecognition();
  service.continuous = true;
  service.interimResults = true;
  service.lang = state.language === 'zh' ? 'zh-CN' : 'en-US';
  let stableText = '';
  service.onstart = () => {
    listening = true;
    $('#mic-button').classList.add('listening');
    $('#mic-button').setAttribute('aria-pressed', 'true');
    $('.mic-label').textContent = t('stopListening');
  };
  service.onresult = (event) => {
    let interim = '';
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const text = event.results[index][0].transcript;
      if (event.results[index].isFinal) stableText += `${text} `;
      else interim += text;
    }
    const current = $('#moment-input').dataset.beforeSpeech || '';
    $('#moment-input').value = `${current}${current ? ' ' : ''}${stableText}${interim}`.trim();
  };
  service.onerror = () => {
    showToast(t('speechError'));
  };
  service.onend = () => {
    listening = false;
    $('#mic-button').classList.remove('listening');
    $('#mic-button').setAttribute('aria-pressed', 'false');
    $('.mic-label').textContent = t('tapSpeak');
    stableText = '';
  };
  return service;
}

function toggleSpeech() {
  if (listening && recognition) {
    recognition.stop();
    return;
  }
  recognition = setupSpeechRecognition();
  if (!recognition) {
    showToast(t('speechUnsupported'));
    $('#moment-input').focus();
    return;
  }
  $('#moment-input').dataset.beforeSpeech = $('#moment-input').value.trim();
  recognition.lang = state.language === 'zh' ? 'zh-CN' : 'en-US';
  try {
    recognition.start();
  } catch {
    showToast(t('speechError'));
  }
}

function openAssistant() {
  $('#assistant').classList.add('open');
  $('.assistant-panel').setAttribute('aria-hidden', 'false');
  $('.assistant-launch').setAttribute('aria-expanded', 'true');
  if (!assistantHistory.length) {
    assistantHistory = [{ role: 'assistant', text: t('assistantWelcome') }];
    renderAssistant();
  }
  setTimeout(() => $('#assistant-input').focus(), 180);
}

function closeAssistant() {
  $('#assistant').classList.remove('open');
  $('.assistant-panel').setAttribute('aria-hidden', 'true');
  $('.assistant-launch').setAttribute('aria-expanded', 'false');
}

function renderAssistant(thinking = false) {
  const messages = $('#assistant-messages');
  messages.innerHTML = assistantHistory.map((message) => `<div class="message ${escapeHtml(message.role)}">${escapeHtml(message.text)}</div>`).join('');
  if (thinking) messages.insertAdjacentHTML('beforeend', '<div class="message thinking"><i></i><i></i><i></i></div>');
  messages.scrollTop = messages.scrollHeight;
}

async function askAssistant(question) {
  const text = question.trim();
  if (!text) return;
  assistantHistory.push({ role: 'user', text });
  renderAssistant(true);
  $('#assistant-input').value = '';
  try {
    const response = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: assistantHistory.slice(-8) }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || t('assistantError'));
    assistantHistory.push({ role: 'assistant', text: `${result.message}${result.fallback ? `\n\n[${t('assistantFallback')}]` : ''}` });
  } catch (error) {
    assistantHistory.push({ role: 'error', text: error.message || t('assistantError') });
  }
  renderAssistant();
}

$$('[data-language]').forEach((button) => button.addEventListener('click', () => {
  state.language = button.dataset.language;
  saveState();
  translatePage();
  if (recognition && listening) recognition.stop();
}));

$$('[data-tab]').forEach((button) => button.addEventListener('click', () => switchTab(button.dataset.tab)));
$$('[data-open-tab]').forEach((button) => button.addEventListener('click', () => {
  switchTab(button.dataset.openTab);
  $('.phone').scrollIntoView({ behavior: 'smooth', block: 'center' });
}));
$$('[data-example]').forEach((button) => button.addEventListener('click', () => {
  $('#moment-input').value = button.dataset.example;
  $('#moment-input').focus();
}));

$('#capture-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = $('#moment-input').value.trim();
  if (!input) {
    showToast(t('createMomentFirst'));
    $('#moment-input').focus();
    return;
  }
  openReview(input);
  requestDraft();
});

$('#mic-button').addEventListener('click', toggleSpeech);
$('.modal-close').addEventListener('click', closeReview);
$('#review-modal').addEventListener('click', (event) => { if (event.target === $('#review-modal')) closeReview(); });
$('#discard-draft').addEventListener('click', () => {
  currentDraft = null;
  closeReview();
  showToast(t('discardedToast'));
});
$('#regenerate-draft').addEventListener('click', () => requestDraft($('#draft-summary').value.trim()));
$('#approve-draft').addEventListener('click', approveDraft);

$$('[data-recipient]').forEach((button) => button.addEventListener('click', () => {
  recipient = button.dataset.recipient;
  $$('[data-recipient]').forEach((item) => item.classList.toggle('active', item === button));
}));
$('#approved-select').addEventListener('change', syncCaption);
$('#create-card').addEventListener('click', () => {
  const moment = state.moments.find((item) => item.id === $('#approved-select').value);
  if (!moment) return showToast(t('chooseApprovedError'));
  const caption = $('#share-caption').value.trim() || moment.caption || moment.summary;
  state.cards.push({ id: crypto.randomUUID(), momentId: moment.id, title: moment.title, caption, recipient, createdAt: Date.now() });
  moment.status = 'shared';
  saveState();
  renderCards();
  renderMoments();
  showToast(`${t('cardCreated')} ${recipient}`);
});

$$('[data-glasses-step]').forEach((button) => button.addEventListener('click', () => {
  $$('[data-glasses-step]').forEach((item) => item.classList.toggle('active', item === button));
}));
$('#capture-frame').addEventListener('click', () => {
  const preview = $('#frame-preview');
  preview.classList.add('show', 'flash');
  $$('[data-glasses-step]').forEach((button, index) => button.classList.toggle('active', index === 2));
  setTimeout(() => preview.classList.remove('flash'), 650);
  showToast(t('frameToast'));
});

$$('[data-open-assistant]').forEach((button) => button.addEventListener('click', openAssistant));
$('[data-close-assistant]').addEventListener('click', closeAssistant);
$$('[data-question]').forEach((button) => button.addEventListener('click', () => askAssistant(button.dataset.question)));
$('#assistant-form').addEventListener('submit', (event) => {
  event.preventDefault();
  askAssistant($('#assistant-input').value);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (!$('#review-modal').hidden) closeReview();
    closeAssistant();
  }
});

translatePage();
switchTab('record');

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}
