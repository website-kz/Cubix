document.addEventListener('DOMContentLoaded', () => {
  const ads = [
    '🔵 Google — Search smarter.',
    '🟢 OpenAI — Welcome to the future.',
    '🟣 Microsoft — Be productive.',
    '🍏 Apple — Think different.',
    '🔵 Meta — Connect the world.',
    '🛠️ GitHub — Build the future.',
    '🎵 Spotify — New way to boost mood.',
    '📦 Amazon — Everything you need.',
    '📱 Samsung — Next is now.',
    '🧠 DeepSeek — Science of AI.'
  ];

  const container = document.getElementById('ads-container');
  const shuffled = [...ads].sort(() => 0.5 - Math.random()).slice(0, 10);

  shuffled.forEach(adText => {
    const ad = document.createElement('div');
    ad.classList.add('ad');
    ad.textContent = adText;
    container.appendChild(ad);
  });
});