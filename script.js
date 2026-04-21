const pageData = {
  title: 'Iran war live: Tehran shuns talks, Trump says US blockade to remain',
  summary:
    'Diplomacy remains uncertain as Tehran rejects negotiations under military pressure and Washington says maritime restrictions will continue.',
  authors: 'By Urooba Jamal and Federica Marsi',
  publishedOn: 'Published On 21 Apr 2026',
  hero: {
    image:
      'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?auto=format&fit=crop&w=1600&q=80',
    caption: 'US President Donald Trump speaks during an update on Iran talks in Washington, DC.'
  },
  topics: ['US-Israel war on Iran', 'Live updates', 'Explainers', 'Analysis', 'Videos', 'Interactive maps'],
  highlights: [
    'Trump says the US will maintain a naval blockade while talks continue.',
    'Tehran says no direct negotiation can happen under military threats.',
    'Mediators in Pakistan are still trying to secure full participation.'
  ],
  updates: [
    {
      time: '28 minutes ago',
      title: 'Iran rejects “pressure diplomacy” in latest statement',
      text: 'Iranian negotiators said indirect channels remain open but insisted that direct talks are off the table while the blockade remains active.'
    },
    {
      time: '1 hour ago',
      title: 'Trump says maritime restrictions stay in force for now',
      text: 'In remarks from Washington, Trump said restrictions are part of the current framework and will not be removed before a concrete agreement.'
    },
    {
      time: '2 hours ago',
      title: 'Talks in Pakistan continue amid conflicting signals',
      text: 'Diplomatic teams held a second round of consultations as mediators worked to align terms for a longer ceasefire extension.'
    },
    {
      time: '4 hours ago',
      title: 'Shipping groups report cautious movement near Hormuz',
      text: 'Traffic in the Gulf remains below normal levels as commercial operators continue security assessments for high-risk routes.'
    }
  ],
  related: [
    'What we know about the US maritime blockade',
    'Can indirect diplomacy prevent escalation?',
    'Timeline: Key events in the latest Iran war crisis'
  ]
};

function renderTopicRail(topics) {
  const rail = document.getElementById('topic-rail');
  topics.forEach((topic, index) => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = topic;
    if (index === 0) link.classList.add('active');
    rail.appendChild(link);
  });
}

function renderStory(data) {
  document.getElementById('story-title').textContent = data.title;
  document.getElementById('story-summary').textContent = data.summary;
  document.getElementById('story-authors').textContent = data.authors;
  document.getElementById('story-date').textContent = data.publishedOn;
  document.getElementById('hero-image').src = data.hero.image;
  document.getElementById('hero-caption').textContent = data.hero.caption;

  const highlights = document.getElementById('highlight-list');
  data.highlights.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    highlights.appendChild(li);
  });
}

function renderTimeline(updates) {
  const timeline = document.getElementById('timeline');
  updates.forEach((post) => {
    const article = document.createElement('article');
    article.className = 'entry';
    article.innerHTML = `
      <time>${post.time}</time>
      <h2>${post.title}</h2>
      <p>${post.text}</p>
    `;
    timeline.appendChild(article);
  });
}

function renderSidebar(data) {
  const latestList = document.getElementById('latest-list');
  data.updates.forEach((post) => {
    const li = document.createElement('li');
    li.textContent = `${post.time}: ${post.title}`;
    latestList.appendChild(li);
  });

  const relatedList = document.getElementById('related-list');
  data.related.forEach((item) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = item;
    li.appendChild(link);
    relatedList.appendChild(li);
  });
}

renderTopicRail(pageData.topics);
renderStory(pageData);
renderTimeline(pageData.updates);
renderSidebar(pageData);
