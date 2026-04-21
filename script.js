const updates = [
  {
    time: '18:45 GMT',
    title: 'Tehran says talks cannot happen under “coercion”',
    body: 'Iranian officials insist direct negotiations are impossible while military pressure and the naval blockade remain in place.'
  },
  {
    time: '16:20 GMT',
    title: 'Trump says blockade remains despite ceasefire extension',
    body: 'The US president says military posture will remain unchanged pending a unified proposal from Tehran.'
  },
  {
    time: '13:05 GMT',
    title: 'Regional diplomats scramble to save talks in Islamabad',
    body: 'Mediators are attempting to secure participation from both delegations before the current ceasefire window expires.'
  },
  {
    time: '10:30 GMT',
    title: 'Shipping disruption continues near Strait of Hormuz',
    body: 'Commercial traffic remains reduced as insurers and operators await clarity on security guarantees.'
  }
];

const updatesContainer = document.getElementById('updates');
const latestList = document.getElementById('latest-list');

updates.forEach((item) => {
  const section = document.createElement('section');
  section.className = 'update';
  section.innerHTML = `
    <time>${item.time}</time>
    <h3>${item.title}</h3>
    <p>${item.body}</p>
  `;
  updatesContainer.appendChild(section);

  const li = document.createElement('li');
  li.textContent = `${item.time} — ${item.title}`;
  latestList.appendChild(li);
});
