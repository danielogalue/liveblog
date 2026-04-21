const updates = [
  {
    time: '20 minutes ago',
    title: 'Iran says it rejects talks under military pressure',
    body: 'Iranian officials reiterated that negotiations cannot proceed while the United States keeps naval pressure in place around regional ports.'
  },
  {
    time: '1 hour ago',
    title: 'Trump confirms ceasefire window has been extended',
    body: 'The White House says the ceasefire extension is designed to allow mediators time to collect and review a formal proposal.'
  },
  {
    time: '2 hours ago',
    title: 'Diplomatic meeting in Pakistan enters uncertain phase',
    body: 'Regional delegations arrived for follow-up meetings, but sources suggest participation remains unresolved and deadlines are tight.'
  },
  {
    time: '3 hours ago',
    title: 'Shipping insurers maintain high-risk posture in Gulf',
    body: 'Insurance providers have not adjusted rates as maritime operators continue to assess possible escalation around Hormuz traffic lanes.'
  },
  {
    time: '5 hours ago',
    title: 'Analysts warn of fragile pause despite lowered hostilities',
    body: 'Observers caution that the current pause remains politically delicate unless both sides lock in a monitored diplomatic framework.'
  }
];

const updatesContainer = document.getElementById('updates');
const latestList = document.getElementById('latest-list');

for (const item of updates) {
  const card = document.createElement('article');
  card.className = 'update';
  card.innerHTML = `
    <time>${item.time}</time>
    <h3>${item.title}</h3>
    <p>${item.body}</p>
  `;
  updatesContainer.appendChild(card);

  const latestItem = document.createElement('li');
  latestItem.textContent = `${item.time}: ${item.title}`;
  latestList.appendChild(latestItem);
}
