import './styles.css';

const STORAGE_KEY = 'ilink-gemini-state-v1';

const translations = {
  en: {
    geminiBuilt: 'Built with Gemini', eyebrow: 'Life between us', heroTitle: 'Let each other know how life is unfolding.',
    heroLede: 'Capture a small moment. Let Gemini organize it. Review every word—then share only what feels right.',
    recordMoment: 'Record a moment', seeGlasses: 'See ilink Glasses', privateDefault: 'Private by default', humanApproved: 'Human approved', geminiOrganized: 'Gemini organized',
    onlyYou: 'Private · only you', recordKicker: 'Capture first', recordTitle: 'Say it once. Stay close.', recordSub: 'Gemini drafts. You decide what leaves this screen.',
    exampleOne: 'I started a new project today', exampleTwo: 'Turn dinner into an update for Mom', exampleThree: 'Remember a plan with Dad',
    exampleOneInput: 'I started a new project today and finally solved the first difficult problem.', exampleTwoInput: "I tried Mom's tomato egg recipe for dinner. It tasted close to home, and I want to make it for her next visit.", exampleThreeInput: 'I called Dad after work and we made a plan to hike together next Sunday morning.',
    momentLabel: 'What happened?', momentPlaceholder: 'I had a small win at work today...', tapSpeak: 'Start recording', stopListening: 'Stop recording',
    organize: 'Organize with Gemini', captureNote: 'Your recording stays on this device until you explicitly ask Gemini to transcribe it.',
    recordingReady: 'Recording ready', transcribeRecording: 'Transcribe with Gemini', removeRecording: 'Delete recording', requestingMic: 'Requesting microphone access…', recordingNow: 'Recording securely on this device.', recordingStopped: 'Recording saved locally. Play it back or ask Gemini to transcribe it.', organizeError: 'Gemini could not organize this moment. Please try again.', tooManyRequests: 'Too many requests. Please wait a few minutes and try again.',
    transcribing: 'Gemini is transcribing only this recording…', transcriptReady: 'Transcript added. Review the text, then organize it.', transcribeFirst: 'Choose “Transcribe with Gemini” before organizing this recording.', transcriptTooLong: 'The transcript would exceed the 6,000-character limit. Remove some text or make a shorter recording.', recordingUnsupported: 'This browser cannot make an audio recording. Text entry still works.', micDenied: 'Microphone access was not allowed. Enable it in browser settings or type instead.', micMissing: 'No microphone is available.', micBusy: 'The microphone is being used by another app.', recordingFailed: 'The recording could not be completed. Please try again.', recordingTooShort: 'The recording was too short. Please record at least one second.', transcriptionError: 'The recording is still playable, but Gemini could not transcribe it. Try again or type the moment.', noSpeech: 'Gemini could not detect clear speech. You can retry or type the moment.', storageError: 'This browser could not save changes locally. The current session still works.',
    familyKicker: 'Family circle', familyTitle: 'Closer, without the check-in.', familySub: 'Only your approved moments can become family cards.',
    mom: 'Mom', dad: 'Dad', lastUpdate: 'last update yesterday', lastUpdateWeek: 'last update this week', privateUpdate: 'Private family update · demo',
    chooseMoment: 'Choose an approved moment', captionLabel: 'Caption', createCard: 'Create private card', shareDemoNote: 'Demo only. No message is sent to another account.',
    noApproved: 'Approve a moment in My Day first', noCards: 'Your private family cards will appear here.', statusApproved: 'approved', statusShared: 'shared', statusPrivate: 'private',
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
    geminiGuide: 'Gemini product guide', qPrivacy: 'Who can see my moments?', qGemini: 'How does Gemini help?', qGlasses: 'Do the glasses record all day?', qPrivacyPrompt: 'Who can see my moments?', qGeminiPrompt: 'How does Gemini help without auto-sharing?', qGlassesPrompt: 'Are the glasses recording all the time?', assistantPlaceholder: 'Ask about ilink...', assistantPrivacy: 'Xiaolian cannot inspect your private records.', askXiaolian: 'Ask Xiaolian', geminiCompanion: 'Gemini companion',
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
    exampleOneInput: '我今天开始了一个新项目，也终于解决了第一个难题。', exampleTwoInput: '今晚我试着做了妈妈的番茄炒蛋，味道很像家。我想她下次来时再做给她吃。', exampleThreeInput: '下班后我给爸爸打了电话，我们约好下周日上午一起去徒步。',
    momentLabel: '今天发生了什么？', momentPlaceholder: '今天工作里有一个小突破……', tapSpeak: '开始录音', stopListening: '停止录音', organize: '让 Gemini 整理',
    captureNote: '录音会先保留在这台设备上；只有你明确点击转写时，才会发送给 Gemini。', recordingReady: '录音已就绪', transcribeRecording: '用 Gemini 转写', removeRecording: '删除录音', requestingMic: '正在请求麦克风权限……', recordingNow: '正在这台设备上安全录音。', recordingStopped: '录音已保存在本机。你可以先回放，或让 Gemini 转写。', organizeError: 'Gemini 暂时无法整理这个瞬间，请重试。', tooManyRequests: '请求过于频繁，请稍等几分钟后再试。', transcribing: 'Gemini 正在只转写这段录音……', transcriptReady: '转写已填入。请检查文字，然后再进行整理。', transcribeFirst: '请先明确点击“用 Gemini 转写”，再整理这段录音。', transcriptTooLong: '转写后会超过 6,000 字符上限。请删除部分文字或缩短录音。', recordingUnsupported: '当前浏览器无法录制音频，文字输入仍可正常使用。', micDenied: '未获得麦克风权限。请在浏览器设置中允许，或直接输入文字。', micMissing: '没有检测到可用的麦克风。', micBusy: '麦克风正被其他应用占用。', recordingFailed: '录音没有成功完成，请重试。', recordingTooShort: '录音太短，请至少录制一秒。', transcriptionError: '录音仍可播放，但 Gemini 暂时无法转写。你可以重试或直接输入。', noSpeech: 'Gemini 没有识别到清晰语音。你可以重录或直接输入。', storageError: '浏览器无法在本地保存更改；当前会话仍可继续使用。',
    familyKicker: '家人圈', familyTitle: '不必打卡，也能更靠近。', familySub: '只有你确认过的瞬间才能成为家人卡片。',
    mom: '妈妈', dad: '爸爸', lastUpdate: '昨天有更新', lastUpdateWeek: '本周有更新', privateUpdate: '私密家人近况 · 演示', chooseMoment: '选择一个已确认瞬间', captionLabel: '卡片文字', createCard: '创建私密卡片', shareDemoNote: '仅演示，不会向其他账号发送消息。',
    noApproved: '请先在「我的一天」确认一个瞬间', noCards: '你创建的私密家人卡片会出现在这里。', statusApproved: '已确认', statusShared: '已创建卡片', statusPrivate: '私密',
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
    geminiGuide: 'Gemini 产品伙伴', qPrivacy: '谁能看到我的记录？', qGemini: 'Gemini 如何提供帮助？', qGlasses: '眼镜会整天录像吗？', qPrivacyPrompt: '谁能看到我的记录？', qGeminiPrompt: 'Gemini 如何在不自动分享的前提下提供帮助？', qGlassesPrompt: '眼镜会一直录音录像吗？', assistantPlaceholder: '询问任何 ilink 问题……', assistantPrivacy: '小连无法查看你的私人记录。', askXiaolian: '问问小连', geminiCompanion: 'Gemini 伙伴', assistantWelcome: '你好，我是小连。我可以解释 ilink、Gemini 和人工确认分享，但我无法查看你的私人记录。', assistantFallback: '演示备用内容', assistantError: '小连暂时无法回答，请稍后再试。', frameToast: '这一帧只进入了私人收件箱，没有分享给家人。',
  },
};

const seededMoments = [
  {
    id: 'seed-1',
    title: 'A good start to the day',
    summary: 'I took the longer route to work and noticed the first warm morning of the season.',
    caption: 'A small morning moment I wanted you to know about.',
    tags: ['morning', 'outside'],
    titleZh: '一天的好开始',
    summaryZh: '今天我绕远路去上班，注意到这是这个季节第一个温暖的早晨。',
    captionZh: '想和你分享今天早晨一个小小的瞬间。',
    tagsZh: ['早晨', '户外'],
    status: 'approved',
    time: '8:20 AM',
  },
  {
    id: 'seed-2',
    title: 'Dinner that felt like home',
    summary: 'I tried Mom’s tomato egg recipe tonight. It was not perfect, but it tasted close to home.',
    caption: 'I finally tried your recipe. Mine still needs your touch.',
    tags: ['dinner', 'home'],
    titleZh: '有家味道的晚餐',
    summaryZh: '今晚我试着做了妈妈的番茄炒蛋。虽然还不完美，但吃起来很像家。',
    captionZh: '我终于试了你的做法，不过还是需要你来点拨。',
    tagsZh: ['晚餐', '家'],
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
let recipient = 'mom';
let draftRequestController = null;
let mediaRecorder = null;
let mediaStream = null;
let activeRecordingSession = null;
let pendingRecordingRequest = null;
let recordingRequestGeneration = 0;
let recordingBlob = null;
let recordingUrl = '';
let recordingTranscript = '';
let recordingTranscriptBlob = null;
let recordingStatusKey = '';
let recordingStatusError = false;
let recordingTimer = null;
let recordingLimitTimer = null;
let recordingState = 'idle';
let transcriptionController = null;
let toastTimer = null;
let assistantHistory = [];
let assistantBusy = false;
let assistantRequestController = null;
let lastFocusedElement = null;
let assistantLastFocusedElement = null;

const MAX_RECORDING_MS = 60_000;
const TRANSCRIPTION_TIMEOUT_MS = 60_000;
const DRAFT_TIMEOUT_MS = 45_000;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const t = (key) => translations[state.language][key] || translations.en[key] || key;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
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
  $$('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
  });
  $$('[data-example-key]').forEach((button) => {
    button.dataset.example = t(button.dataset.exampleKey);
  });
  $$('[data-question-key]').forEach((button) => {
    button.dataset.question = t(button.dataset.questionKey);
  });
  $$('[data-language]').forEach((button) => {
    const active = button.dataset.language === state.language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderMoments();
  renderCards();
  updateApprovedOptions({ preserveCaption: true });
  if (recordingState === 'idle') $('.mic-label').textContent = t('tapSpeak');
  if (recordingStatusKey) setRecordingStatusKey(recordingStatusKey, recordingStatusError);
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function switchTab(tab) {
  if (tab !== 'record') {
    cancelPendingRecording();
    if (recordingState === 'recording') stopRecording();
  }
  $$('[data-view]').forEach((view) => {
    const active = view.dataset.view === tab;
    view.classList.toggle('active', active);
    view.setAttribute('aria-hidden', String(!active));
  });
  $$('[data-tab]').forEach((button) => {
    const active = button.dataset.tab === tab;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
  });
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

function localizedMoment(moment) {
  if (state.language !== 'zh' || !moment.titleZh) return moment;
  return {
    ...moment,
    title: moment.titleZh,
    summary: moment.summaryZh || moment.summary,
    caption: moment.captionZh || moment.caption,
    tags: moment.tagsZh || moment.tags,
  };
}

function statusLabel(status) {
  const key = `status${String(status || 'private').replace(/^./, (letter) => letter.toUpperCase())}`;
  return t(key);
}

function renderMoments() {
  const timeline = $('#timeline');
  $('#moment-count').textContent = String(state.moments.length);
  $('#today-date').textContent = new Date().toLocaleDateString(state.language === 'zh' ? 'zh-CN' : 'en-US', { month: 'long', day: 'numeric' });
  if (!state.moments.length) {
    timeline.innerHTML = `<div class="timeline-empty">${escapeHtml(t('noApproved'))}</div>`;
    return;
  }
  timeline.innerHTML = state.moments.map((sourceMoment) => {
    const moment = localizedMoment(sourceMoment);
    return `
    <article class="timeline-card">
      <div class="timeline-top"><time>${escapeHtml(moment.time || '')}</time><span class="status-chip ${escapeHtml(moment.status)}">${escapeHtml(statusLabel(moment.status))}</span></div>
      <h4>${escapeHtml(moment.title)}</h4>
      <p>${escapeHtml(moment.summary)}</p>
      <div class="timeline-tags">${(moment.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
    </article>
  `;
  }).join('');
}

function approvedMoments() {
  return state.moments.filter((moment) => moment.status === 'approved' || moment.status === 'shared');
}

function updateApprovedOptions({ preserveCaption = false } = {}) {
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
  const previousCaption = $('#share-caption').value;
  select.disabled = false;
  $('#create-card').disabled = false;
  select.innerHTML = approved.map((moment) => `<option value="${escapeHtml(moment.id)}">${escapeHtml(localizedMoment(moment).title)}</option>`).join('');
  if (approved.some((moment) => moment.id === previous)) select.value = previous;
  if (preserveCaption && previousCaption) $('#share-caption').value = previousCaption;
  else syncCaption();
}

function syncCaption() {
  const moment = state.moments.find((item) => item.id === $('#approved-select')?.value);
  if (moment) {
    const localized = localizedMoment(moment);
    $('#share-caption').value = localized.caption || localized.summary;
  }
}

function renderCards() {
  const feed = $('#family-feed');
  if (!state.cards.length) {
    feed.innerHTML = `<div class="timeline-empty">${escapeHtml(t('noCards'))}</div>`;
    return;
  }
  feed.innerHTML = state.cards.slice().reverse().map((card) => {
    const recipientKey = card.recipientKey || String(card.recipient || 'mom').toLowerCase();
    return `
    <article class="feed-card">
      <span>${escapeHtml(t(recipientKey))} · ${escapeHtml(t('privateUpdate'))}</span>
      <h4>${escapeHtml(card.title)}</h4>
      <p>${escapeHtml(card.caption)}</p>
    </article>
  `;
  }).join('');
}

function openReview(input) {
  draftRequestController?.abort();
  currentDraft = { id: crypto.randomUUID(), input, ready: false };
  lastFocusedElement = document.activeElement;
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
  setTimeout(() => $('.modal-close')?.focus(), 0);
}

function closeReview() {
  draftRequestController?.abort();
  draftRequestController = null;
  currentDraft = null;
  $('#review-modal').hidden = true;
  document.body.style.overflow = '';
  lastFocusedElement?.focus?.();
  lastFocusedElement = null;
}

function setReviewLoading(loading) {
  $('#review-progress').hidden = !loading;
  $('#review-grid').style.opacity = loading ? '.45' : '1';
  $('#review-grid').setAttribute('aria-busy', String(loading));
  $('#approve-draft').disabled = loading || !currentDraft?.ready;
  $('#regenerate-draft').disabled = loading;
}

function populateDraft(result) {
  currentDraft = { ...currentDraft, ...result, ready: true };
  $('#draft-title').value = result.title || '';
  $('#draft-summary').value = result.summary || '';
  $('#draft-tags').value = (result.tags || []).join(', ');
  $('#draft-caption').value = result.caption || '';
  $('#model-note').textContent = result.fallback ? t('modelFallback') : `${t('modelUsed')} ${result.model || 'Gemini'}`;
}

async function requestDraft(previous = '') {
  if (!currentDraft?.input) return;
  const draftId = currentDraft.id;
  draftRequestController?.abort();
  const controller = new AbortController();
  draftRequestController = controller;
  let timedOut = false;
  const timeout = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, DRAFT_TIMEOUT_MS);
  setReviewLoading(true);
  $('#review-error').hidden = true;
  try {
    const response = await fetch('/api/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: currentDraft.input, previous }),
      signal: controller.signal,
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(response.status === 429 ? t('tooManyRequests') : t('organizeError'));
    if (currentDraft?.id !== draftId) return;
    populateDraft(result);
  } catch (error) {
    if (currentDraft?.id !== draftId || error.name === 'AbortError' && !timedOut) return;
    currentDraft.ready = false;
    $('#review-error').textContent = error.name === 'AbortError' ? t('organizeError') : error.message;
    $('#review-error').hidden = false;
  } finally {
    clearTimeout(timeout);
    if (currentDraft?.id === draftId && draftRequestController === controller) setReviewLoading(false);
    if (draftRequestController === controller) draftRequestController = null;
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
  const saved = saveState();
  renderMoments();
  updateApprovedOptions();
  $('#moment-input').value = '';
  cleanupRecordingAudio();
  closeReview();
  switchTab('me');
  showToast(saved ? t('approvedToast') : t('storageError'));
}

function pickRecordingMimeType() {
  const candidates = [
    'audio/mp4;codecs=mp4a.40.2',
    'audio/mp4',
    'audio/webm;codecs=opus',
    'audio/ogg;codecs=opus',
    'audio/webm',
  ];
  return candidates.find((type) => window.MediaRecorder?.isTypeSupported?.(type)) || '';
}

function formatRecordingTime(milliseconds) {
  const seconds = Math.max(0, Math.floor(milliseconds / 1000));
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

function setRecordingStatus(message = '', error = false, key = '') {
  recordingStatusKey = key;
  recordingStatusError = error;
  const status = $('#recording-status');
  status.textContent = message;
  status.classList.toggle('error', error);
}

function setRecordingStatusKey(key = '', error = false) {
  setRecordingStatus(key ? t(key) : '', error, key);
}

function setRecordingState(next) {
  recordingState = next;
  const recording = next === 'recording';
  const waiting = next === 'requesting' || next === 'stopping';
  const transcribing = next === 'transcribing';
  const micButton = $('#mic-button');
  micButton.classList.toggle('recording', recording);
  micButton.disabled = waiting || transcribing;
  micButton.setAttribute('aria-pressed', String(recording));
  $('.mic-label').textContent = recording ? t('stopListening') : (next === 'requesting' ? t('requestingMic') : t('tapSpeak'));
  $('#recording-time').hidden = !recording;
  $('#organize-button').disabled = waiting || recording || transcribing;
  $('#transcribe-recording').disabled = waiting || recording || transcribing || !recordingBlob;
  $('#remove-recording').disabled = waiting || recording || transcribing;
}

function clearRecordingTimers() {
  clearInterval(recordingTimer);
  clearTimeout(recordingLimitTimer);
  recordingTimer = null;
  recordingLimitTimer = null;
}

function stopStream(stream) {
  stream?.getTracks().forEach((track) => {
    track.onended = null;
    track.stop();
  });
}

function releaseMicrophone(stream = mediaStream) {
  stopStream(stream);
  if (mediaStream === stream) mediaStream = null;
}

function cleanupRecordingAudio({ resetState = true } = {}) {
  transcriptionController?.abort();
  transcriptionController = null;
  const audio = $('#recording-audio');
  audio.pause();
  audio.removeAttribute('src');
  audio.load();
  if (recordingUrl) URL.revokeObjectURL(recordingUrl);
  recordingUrl = '';
  recordingBlob = null;
  recordingTranscript = '';
  recordingTranscriptBlob = null;
  $('#recording-preview').hidden = true;
  setRecordingStatusKey();
  if (resetState && !['recording', 'stopping'].includes(recordingState)) setRecordingState('idle');
}

function detachRecordingAudio() {
  const snapshot = recordingBlob ? {
    blob: recordingBlob,
    url: recordingUrl,
    transcript: recordingTranscript,
    transcriptBlob: recordingTranscriptBlob,
    statusKey: recordingStatusKey,
    statusError: recordingStatusError,
  } : null;
  transcriptionController?.abort();
  transcriptionController = null;
  const audio = $('#recording-audio');
  audio.pause();
  audio.removeAttribute('src');
  audio.load();
  recordingBlob = null;
  recordingUrl = '';
  recordingTranscript = '';
  recordingTranscriptBlob = null;
  $('#recording-preview').hidden = true;
  setRecordingStatusKey();
  return snapshot;
}

function disposeRecordingSnapshot(snapshot) {
  if (snapshot?.url) URL.revokeObjectURL(snapshot.url);
}

function restoreRecordingSnapshot(snapshot, errorKey) {
  if (!snapshot) {
    setRecordingState('idle');
    setRecordingStatusKey(errorKey, true);
    return;
  }
  recordingBlob = snapshot.blob;
  recordingUrl = snapshot.url;
  recordingTranscript = snapshot.transcript;
  recordingTranscriptBlob = snapshot.transcriptBlob;
  $('#recording-audio').src = recordingUrl;
  $('#recording-preview').hidden = false;
  setRecordingState('ready');
  setRecordingStatusKey(errorKey || snapshot.statusKey || 'recordingStopped', errorKey ? true : snapshot.statusError);
}

function restoreAfterPendingRequest(request) {
  setRecordingState(recordingBlob ? 'ready' : 'idle');
  const key = request?.previousStatusKey || (recordingBlob ? 'recordingStopped' : '');
  setRecordingStatusKey(key, Boolean(request?.previousStatusError));
}

function cancelPendingRecording() {
  if (!pendingRecordingRequest) return;
  const request = pendingRecordingRequest;
  pendingRecordingRequest = null;
  recordingRequestGeneration += 1;
  restoreAfterPendingRequest(request);
}

function microphoneErrorKey(error) {
  if (error?.name === 'NotAllowedError' || error?.name === 'SecurityError') return 'micDenied';
  if (error?.name === 'NotFoundError' || error?.name === 'DevicesNotFoundError') return 'micMissing';
  if (error?.name === 'NotReadableError' || error?.name === 'TrackStartError') return 'micBusy';
  return 'recordingFailed';
}

function finishRecording(session) {
  if (activeRecordingSession !== session || session.failed) return;
  clearRecordingTimers();
  releaseMicrophone(session.stream);
  mediaRecorder = null;
  activeRecordingSession = null;
  const blob = new Blob(session.chunks, { type: session.recorder.mimeType || session.mimeType || session.chunks[0]?.type || 'audio/webm' });
  session.chunks = [];
  const duration = Date.now() - session.startedAt;
  if (duration < 1000 || blob.size < 512) {
    restoreRecordingSnapshot(session.previousRecording, 'recordingTooShort');
    showToast(t('recordingTooShort'));
    return;
  }
  disposeRecordingSnapshot(session.previousRecording);
  recordingBlob = blob;
  recordingUrl = URL.createObjectURL(blob);
  $('#recording-audio').src = recordingUrl;
  $('#recording-preview').hidden = false;
  setRecordingState('ready');
  setRecordingStatusKey('recordingStopped');
}

async function startRecording() {
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder || (!window.AudioContext && !window.webkitAudioContext)) {
    showToast(t('recordingUnsupported'));
    $('#moment-input').focus();
    return;
  }
  const request = {
    id: ++recordingRequestGeneration,
    previousStatusKey: recordingStatusKey,
    previousStatusError: recordingStatusError,
  };
  pendingRecordingRequest = request;
  setRecordingState('requesting');
  setRecordingStatusKey('requestingMic');
  let stream = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    });
    const requestIsCurrent = pendingRecordingRequest === request && request.id === recordingRequestGeneration;
    const recordViewIsActive = $('[data-view="record"]')?.classList.contains('active');
    if (!requestIsCurrent || document.hidden || !recordViewIsActive) {
      stopStream(stream);
      if (pendingRecordingRequest === request) {
        pendingRecordingRequest = null;
        restoreAfterPendingRequest(request);
      }
      return;
    }
    pendingRecordingRequest = null;
    const mimeType = pickRecordingMimeType();
    const recorder = new MediaRecorder(stream, mimeType ? { mimeType, audioBitsPerSecond: 64_000 } : { audioBitsPerSecond: 64_000 });
    const session = {
      id: crypto.randomUUID(),
      recorder,
      stream,
      mimeType,
      chunks: [],
      startedAt: Date.now(),
      failed: false,
      previousRecording: null,
    };
    recorder.addEventListener('dataavailable', (event) => {
      if (event.data?.size && !session.failed) session.chunks.push(event.data);
    });
    recorder.addEventListener('error', () => {
      if (activeRecordingSession !== session) return;
      session.failed = true;
      session.chunks = [];
      activeRecordingSession = null;
      mediaRecorder = null;
      clearRecordingTimers();
      releaseMicrophone(session.stream);
      restoreRecordingSnapshot(session.previousRecording, 'recordingFailed');
      showToast(t('recordingFailed'));
    });
    recorder.addEventListener('stop', () => finishRecording(session), { once: true });
    stream.getTracks().forEach((track) => {
      track.onended = () => {
        if (activeRecordingSession === session && recorder.state === 'recording') stopRecording();
      };
    });
    recorder.start(500);
    activeRecordingSession = session;
    mediaRecorder = recorder;
    mediaStream = stream;
    session.previousRecording = detachRecordingAudio();
    setRecordingState('recording');
    setRecordingStatusKey('recordingNow');
    $('#recording-time').textContent = '00:00';
    recordingTimer = setInterval(() => {
      $('#recording-time').textContent = formatRecordingTime(Date.now() - session.startedAt);
    }, 250);
    recordingLimitTimer = setTimeout(stopRecording, MAX_RECORDING_MS);
  } catch (error) {
    stopStream(stream);
    clearRecordingTimers();
    if (request.id !== recordingRequestGeneration) return;
    if (pendingRecordingRequest === request) pendingRecordingRequest = null;
    restoreAfterPendingRequest(request);
    const key = microphoneErrorKey(error);
    setRecordingStatusKey(key, true);
    showToast(t(key));
  }
}

function stopRecording() {
  const session = activeRecordingSession;
  if (!session || mediaRecorder?.state !== 'recording') return;
  setRecordingState('stopping');
  clearRecordingTimers();
  try {
    mediaRecorder.stop();
  } catch {
    session.failed = true;
    session.chunks = [];
    activeRecordingSession = null;
    releaseMicrophone(session.stream);
    mediaRecorder = null;
    restoreRecordingSnapshot(session.previousRecording, 'recordingFailed');
    showToast(t('recordingFailed'));
  }
}

function decodeAudio(context, buffer) {
  return new Promise((resolve, reject) => {
    const pending = context.decodeAudioData(buffer, resolve, reject);
    if (pending?.then) pending.then(resolve, reject);
  });
}

function mixAndResample(audioBuffer, targetRate = 16_000) {
  const channelCount = audioBuffer.numberOfChannels;
  const mixed = new Float32Array(audioBuffer.length);
  for (let channel = 0; channel < channelCount; channel += 1) {
    const samples = audioBuffer.getChannelData(channel);
    for (let index = 0; index < samples.length; index += 1) mixed[index] += samples[index] / channelCount;
  }
  if (audioBuffer.sampleRate === targetRate) return mixed;
  const ratio = audioBuffer.sampleRate / targetRate;
  const output = new Float32Array(Math.max(1, Math.round(mixed.length / ratio)));
  for (let index = 0; index < output.length; index += 1) {
    const start = Math.floor(index * ratio);
    const end = Math.max(start + 1, Math.min(mixed.length, Math.floor((index + 1) * ratio)));
    let sum = 0;
    for (let sourceIndex = start; sourceIndex < end; sourceIndex += 1) sum += mixed[sourceIndex];
    output[index] = sum / (end - start);
  }
  return output;
}

function encodeWav(samples, sampleRate = 16_000) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  const write = (offset, value) => [...value].forEach((character, index) => view.setUint8(offset + index, character.charCodeAt(0)));
  write(0, 'RIFF');
  view.setUint32(4, 36 + samples.length * 2, true);
  write(8, 'WAVE');
  write(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  write(36, 'data');
  view.setUint32(40, samples.length * 2, true);
  for (let index = 0; index < samples.length; index += 1) {
    const sample = Math.max(-1, Math.min(1, samples[index]));
    view.setInt16(44 + index * 2, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
  }
  return new Blob([buffer], { type: 'audio/wav' });
}

async function recordingToWav(blob) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  const context = new AudioContextClass();
  try {
    const decoded = await decodeAudio(context, await blob.arrayBuffer());
    return encodeWav(mixAndResample(decoded));
  } finally {
    await context.close().catch(() => {});
  }
}

function appendTranscriptToInput(transcript) {
  const input = $('#moment-input');
  const existing = input.value.trim();
  const alreadyPresent = existing === transcript
    || existing.startsWith(`${transcript}\n`)
    || existing.endsWith(`\n${transcript}`)
    || existing.includes(`\n${transcript}\n`);
  if (alreadyPresent) return true;
  const next = existing ? `${existing}\n${transcript}` : transcript;
  const maximum = input.maxLength > 0 ? input.maxLength : 6000;
  if (next.length > maximum) return false;
  input.value = next;
  return true;
}

async function transcribeRecording() {
  if (!recordingBlob || recordingState === 'transcribing') return '';
  const sourceBlob = recordingBlob;
  if (recordingTranscriptBlob === sourceBlob && recordingTranscript) {
    if (!appendTranscriptToInput(recordingTranscript)) {
      setRecordingStatusKey('transcriptTooLong', true);
      showToast(t('transcriptTooLong'));
      return '';
    }
    setRecordingStatusKey('transcriptReady');
    return recordingTranscript;
  }
  transcriptionController?.abort();
  const controller = new AbortController();
  transcriptionController = controller;
  const timeout = setTimeout(() => controller.abort(), TRANSCRIPTION_TIMEOUT_MS);
  setRecordingState('transcribing');
  setRecordingStatusKey('transcribing');
  try {
    const wav = await recordingToWav(sourceBlob);
    const response = await fetch('/api/transcribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'audio/wav',
        'X-ilink-language': state.language === 'zh' ? 'zh-CN' : 'en-US',
      },
      body: wav,
      signal: controller.signal,
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error('Transcription request failed.');
      error.uiKey = response.status === 422 ? 'noSpeech' : (response.status === 429 ? 'tooManyRequests' : 'transcriptionError');
      throw error;
    }
    const transcript = String(result.transcript || '').trim();
    if (!transcript) {
      const error = new Error('No speech detected.');
      error.uiKey = 'noSpeech';
      throw error;
    }
    recordingTranscriptBlob = sourceBlob;
    recordingTranscript = transcript;
    if (!appendTranscriptToInput(transcript)) {
      setRecordingStatusKey('transcriptTooLong', true);
      showToast(t('transcriptTooLong'));
      return '';
    }
    setRecordingStatusKey('transcriptReady');
    return transcript;
  } catch (error) {
    if (!recordingBlob || sourceBlob !== recordingBlob) return '';
    const key = error.name === 'AbortError' ? 'transcriptionError' : (error.uiKey || 'transcriptionError');
    setRecordingStatusKey(key, true);
    showToast(t(key));
    return '';
  } finally {
    clearTimeout(timeout);
    if (transcriptionController === controller) transcriptionController = null;
    if (recordingBlob && sourceBlob === recordingBlob) setRecordingState('ready');
  }
}

function toggleRecording() {
  if (recordingState === 'recording') stopRecording();
  else if (recordingState === 'idle' || recordingState === 'ready') startRecording();
}

function openAssistant() {
  if (!$('#assistant').classList.contains('open')) assistantLastFocusedElement = document.activeElement;
  $('#assistant').classList.add('open');
  $('.assistant-panel').setAttribute('aria-hidden', 'false');
  $$('[data-open-assistant]').forEach((button) => button.setAttribute('aria-expanded', 'true'));
  if (!assistantHistory.length) {
    assistantHistory = [{ role: 'assistant', text: t('assistantWelcome') }];
    renderAssistant();
  }
  setTimeout(() => $('#assistant-input').focus(), 180);
}

function closeAssistant() {
  if (!$('#assistant').classList.contains('open')) return;
  $('#assistant').classList.remove('open');
  $('.assistant-panel').setAttribute('aria-hidden', 'true');
  $$('[data-open-assistant]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
  const storedTarget = assistantLastFocusedElement;
  assistantLastFocusedElement = null;
  setTimeout(() => {
    const storedTargetIsVisible = storedTarget?.isConnected
      && storedTarget.getClientRects().length > 0
      && !storedTarget.closest('[aria-hidden="true"]');
    const focusTarget = storedTargetIsVisible ? storedTarget : ($('.assistant-launch') || $('[data-tab][aria-selected="true"]'));
    focusTarget?.focus?.();
  }, 0);
}

function renderAssistant(thinking = false) {
  const messages = $('#assistant-messages');
  messages.innerHTML = assistantHistory.map((message) => `<div class="message ${escapeHtml(message.role)}">${escapeHtml(message.text)}</div>`).join('');
  if (thinking) messages.insertAdjacentHTML('beforeend', '<div class="message thinking"><i></i><i></i><i></i></div>');
  messages.scrollTop = messages.scrollHeight;
}

function setAssistantBusy(busy) {
  assistantBusy = busy;
  $('.assistant-panel').setAttribute('aria-busy', String(busy));
  $('#assistant-input').disabled = busy;
  $('#assistant-send').disabled = busy;
  $$('.assistant-suggestions button').forEach((button) => { button.disabled = busy; });
}

async function askAssistant(question) {
  const text = question.trim();
  if (!text || assistantBusy) return;
  assistantHistory.push({ role: 'user', text });
  renderAssistant(true);
  $('#assistant-input').value = '';
  setAssistantBusy(true);
  assistantRequestController?.abort();
  const controller = new AbortController();
  assistantRequestController = controller;
  const timeout = setTimeout(() => controller.abort(), 45_000);
  try {
    const response = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: assistantHistory.filter((message) => message.role === 'user' || message.role === 'assistant').slice(-8) }),
      signal: controller.signal,
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(response.status === 429 ? t('tooManyRequests') : t('assistantError'));
    assistantHistory.push({ role: 'assistant', text: `${result.message}${result.fallback ? `\n\n[${t('assistantFallback')}]` : ''}` });
  } catch (error) {
    assistantHistory.push({ role: 'error', text: error.name === 'AbortError' ? t('assistantError') : (error.message || t('assistantError')) });
  } finally {
    clearTimeout(timeout);
    if (assistantRequestController === controller) assistantRequestController = null;
    setAssistantBusy(false);
  }
  renderAssistant();
}

$$('[data-language]').forEach((button) => button.addEventListener('click', () => {
  cancelPendingRecording();
  if (recordingState === 'recording') stopRecording();
  state.language = button.dataset.language;
  const saved = saveState();
  translatePage();
  if (!saved) showToast(t('storageError'));
}));

$$('[data-tab]').forEach((button) => {
  button.addEventListener('click', () => switchTab(button.dataset.tab));
  button.addEventListener('keydown', (event) => {
    const tabs = $$('[data-tab]');
    const currentIndex = tabs.indexOf(button);
    let nextIndex = null;
    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    if (nextIndex === null) return;
    event.preventDefault();
    const next = tabs[nextIndex];
    switchTab(next.dataset.tab);
    next.focus();
  });
});
$$('[data-open-tab]').forEach((button) => button.addEventListener('click', () => {
  switchTab(button.dataset.openTab);
  $('.phone').scrollIntoView({ behavior: 'smooth', block: 'center' });
  if (button.dataset.openTab === 'record') setTimeout(() => $('#moment-input')?.focus(), 220);
}));
$$('[data-example-key]').forEach((button) => button.addEventListener('click', () => {
  $('#moment-input').value = t(button.dataset.exampleKey);
  $('#moment-input').focus();
}));

$('#capture-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (recordingState === 'recording') {
    showToast(t('stopListening'));
    return;
  }
  const input = $('#moment-input').value.trim();
  if (!input && recordingBlob) {
    showToast(t('transcribeFirst'));
    $('#transcribe-recording').focus();
    return;
  }
  if (!input) {
    showToast(t('createMomentFirst'));
    $('#moment-input').focus();
    return;
  }
  openReview(input);
  requestDraft();
});

$('#mic-button').addEventListener('click', toggleRecording);
$('#transcribe-recording').addEventListener('click', transcribeRecording);
$('#remove-recording').addEventListener('click', cleanupRecordingAudio);
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
  $$('[data-recipient]').forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
}));
$('#approved-select').addEventListener('change', syncCaption);
$('#create-card').addEventListener('click', () => {
  const moment = state.moments.find((item) => item.id === $('#approved-select').value);
  if (!moment) return showToast(t('chooseApprovedError'));
  const localized = localizedMoment(moment);
  const caption = $('#share-caption').value.trim() || localized.caption || localized.summary;
  state.cards.push({ id: crypto.randomUUID(), momentId: moment.id, title: localized.title, caption, recipientKey: recipient, createdAt: Date.now() });
  moment.status = 'shared';
  const saved = saveState();
  renderCards();
  renderMoments();
  showToast(saved ? `${t('cardCreated')} ${t(recipient)}` : t('storageError'));
});

$$('[data-glasses-step]').forEach((button) => button.addEventListener('click', () => {
  $$('[data-glasses-step]').forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
}));
$('#capture-frame').addEventListener('click', () => {
  const preview = $('#frame-preview');
  preview.classList.add('show', 'flash');
  $$('[data-glasses-step]').forEach((button, index) => {
    const active = index === 2;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  setTimeout(() => preview.classList.remove('flash'), 650);
  showToast(t('frameToast'));
});

$$('[data-open-assistant]').forEach((button) => button.addEventListener('click', openAssistant));
$('[data-close-assistant]').addEventListener('click', closeAssistant);
$$('[data-question-key]').forEach((button) => button.addEventListener('click', () => askAssistant(t(button.dataset.questionKey))));
$('#assistant-form').addEventListener('submit', (event) => {
  event.preventDefault();
  askAssistant($('#assistant-input').value);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (!$('#review-modal').hidden) closeReview();
    closeAssistant();
  }
  if (event.key === 'Tab' && !$('#review-modal').hidden) {
    const focusable = $$('button:not(:disabled), input:not(:disabled), textarea:not(:disabled)', $('#review-modal'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) return;
  cancelPendingRecording();
  if (recordingState === 'recording') stopRecording();
});
window.addEventListener('pagehide', () => {
  cancelPendingRecording();
  if (recordingState === 'recording') stopRecording();
  releaseMicrophone();
});

translatePage();
switchTab('record');

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}
