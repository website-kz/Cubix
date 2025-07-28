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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const input = document.querySelector("#search");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const query = input.value.trim();

    if (!query) return;

    // Проверка: если начинается с `wiki:`, ищем в Wikipedia
    if (query.toLowerCase().startsWith("wiki:")) {
      const searchTerm = query.substring(5).trim();
      window.open(`https://en.wikipedia.org/wiki/${encodeURIComponent(searchTerm)}`, "_blank");
    } else {
      // Иначе — Google поиск
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
    }
  });
});