const MIN_NOTIFICATIONS = 5;
const MAX_NOTIFICATIONS = 15;
const WINDOW_MS = 2 * 60 * 1000;
const COOLDOWN_MS = WINDOW_MS;
const LAST_BATCH_KEY = 'noti-minute-last-batch';

const notifications = [
  {
    title: 'Why did the calendar break up with Friday?',
    body: 'It needed more space after too many weekend promises.'
  },
  {
    title: 'Why did the cookie visit the doctor?',
    body: 'It felt crummy after an emotional dunk in coffee.'
  },
  {
    title: 'How does a lighthouse apologize?',
    body: 'It says, "Sorry if I came off a little too bright."'
  },
  {
    title: 'Why did the backpack blush?',
    body: 'It got caught carrying emotional baggage.'
  },
  {
    title: 'What do you call a nervous pencil?',
    body: 'Pointless under pressure.'
  },
  {
    title: 'Why did the tomato ace the interview?',
    body: 'It knew how to ketchup without looking desperate.'
  },
  {
    title: 'What did the plant say during the pep talk?',
    body: 'I am rooting for all of us.'
  },
  {
    title: 'Why was the keyboard so calm?',
    body: 'It always had a key response ready.'
  },
  {
    title: 'Why did the moon skip the party?',
    body: 'It was going through a phase.'
  },
  {
    title: 'What do you call a very honest loaf of bread?',
    body: 'Whole wheat truth.'
  },
  {
    title: 'Why did the bicycle start journaling?',
    body: 'It had too many cycles to process.'
  },
  {
    title: 'How does a cloud flirt?',
    body: 'It makes a light mist-ake and hopes you smile.'
  },
  {
    title: 'Why did the sweater become a mentor?',
    body: 'It was great at pulling people together.'
  },
  {
    title: 'Why did the notebook stay optimistic?',
    body: 'Every page felt like a fresh start.'
  },
  {
    title: 'What do you call an overprepared banana?',
    body: 'A peel with a backup plan.'
  },
  {
    title: 'Why did the lamp get promoted?',
    body: 'It kept bringing clarity to every meeting.'
  },
  {
    title: 'Why was the shovel so confident?',
    body: 'It knew how to dig deep when things got messy.'
  },
  {
    title: 'What did the teabag say to the kettle?',
    body: 'I am steeping into my best self.'
  },
  {
    title: 'Why did the mirror enjoy teamwork?',
    body: 'It liked reflecting good ideas back to people.'
  },
  {
    title: 'Why did the socks start a podcast?',
    body: 'They finally found their perfect pair of listeners.'
  },
  {
    title: 'What do you call a pony with a cough?',
    body: 'A little horse.'
  },
  {
    title: 'What did one hat say to the other?',
    body: "You wait here. I'll go on a head."
  },
  {
    title: 'What do you call a magic dog?',
    body: 'A labracadabrador.'
  },
  {
    title: 'What did the shark say when he ate the clownfish?',
    body: 'This tastes a little funny.'
  },
  {
    title: 'What’s orange and sounds like a carrot?',
    body: 'A parrot.'
  },
  {
    title: 'Why can’t you hear a pterodactyl go to the bathroom?',
    body: 'Because the “P” is silent.'
  },
  {
    title: 'What do you call a woman with one leg?',
    body: 'Eileen.'
  },
  {
    title: 'What did the pirate say when he turned 80?',
    body: 'Aye matey.'
  },
  {
    title: 'Why did the frog take the bus to work today?',
    body: 'His car got toad away.'
  },
  {
    title: 'What did the buffalo say when his son left for college?',
    body: 'Bison.'
  },
  {
    title: 'What is an astronaut’s favorite part on a computer?',
    body: 'The space bar.'
  },
  {
    title: 'Why did the yogurt go to the art exhibition?',
    body: 'Because it was cultured.'
  },
  {
    title: 'What do you call an apology written in dots and dashes?',
    body: 'Re-Morse code.'
  },
  {
    title: 'Did you hear about the two people who stole a calendar?',
    body: 'They each got six months.'
  },
  {
    title: 'Why did the hipster burn his mouth?',
    body: 'He drank the coffee before it was cool.'
  },
  {
    title: 'What do cows do on date night?',
    body: 'Go to the moo-vies.'
  },
  {
    title: 'What do cows say when they hear a bad joke?',
    body: '“I am not amoosed.”'
  },
  {
    title: 'Why do French people eat snails?',
    body: 'They don’t like fast food.'
  },
  {
    title: 'Why did the golfer wear two pairs of pants?',
    body: 'Just in case he got a hole in one!'
  },
  {
    title: 'Why don’t the circus lions eat the clowns?',
    body: 'Because they taste funny!'
  },
  {
    title: 'What do you call a pig that does karate?',
    body: 'A pork chop.'
  },
  {
    title: 'What did the football coach say to the broken vending machine?',
    body: 'Give me my quarterback.'
  },
  {
    title: 'Why are elephants wrinkly?',
    body: 'Because you can’t iron them.'
  },
  {
    title: 'What did the cake say to the fork?',
    body: 'You want a piece of me?'
  },
  {
    title: 'Why did the strawberry cry?',
    body: 'He found himself in a jam.'
  },
  {
    title: 'Why is it annoying to eat next to basketball players?',
    body: 'They dribble all the time.'
  },
  {
    title: 'What did the lettuce say to the celery?',
    body: 'Quit stalking me!'
  },
  {
    title: 'What do you call a train carrying bubblegum?',
    body: 'A chew-chew train.'
  },
  {
    title: 'What’s small and red and has a rough voice?',
    body: 'A hoarse radish!'
  },
  {
    title: 'Why do mushrooms get invited to all the parties?',
    body: 'Because they are such fungis.'
  },
  {
    title: 'Why shouldn’t you tell secrets in a cornfield?',
    body: 'Too many ears.'
  },
  {
    title: 'Why couldn’t the bad sailor learn the alphabet?',
    body: 'Because he always got lost at “C.”'
  },
  {
    title: 'How did the two cats end their fight?',
    body: 'They hissed and made up.'
  },
  {
    title: 'Did you hear about the guy who invented the knock-knock joke?',
    body: 'He won the “no-bell” prize.'
  },
  {
    title: 'What’s the best thing about Switzerland?',
    body: 'I don’t know, but the flag is a big plus.'
  },
  {
    title: 'Why do we tell actors to “break a leg”?',
    body: 'Because every play has a cast.'
  },
  {
    title: 'Helvetica and Times New Roman walk into a bar.',
    body: '“Get out of here!” shouts the bartender. “We don’t serve your type.”'
  },
  {
    title: 'Hear about the new restaurant called Karma?',
    body: 'There’s no menu: You get what you deserve.'
  },
  {
    title: 'A woman in labor suddenly shouted, “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!”',
    body: '“Don’t worry,” said the doc. “Those are just contractions.”'
  },
  {
    title: 'A bear walks into a bar and says, “Give me a whiskey and … cola.” “Why the big pause?” asks the bartender.',
    body: 'The bear shrugged. “I’m not sure; I was born with them.”'
  },
  {
    title: 'Why don’t scientists trust atoms?',
    body: 'Because they make up everything.'
  },
  {
    title: 'Where are average things manufactured?',
    body: 'The satisfactory.'
  },
  {
    title: 'How do you drown a hipster?',
    body: 'Throw him in the mainstream.'
  },
  {
    title: 'What sits at the bottom of the sea and twitches?',
    body: 'A nervous wreck.'
  },
  {
    title: 'What does a nosy pepper do?',
    body: 'Gets jalapeño business!'
  },
  {
    title: 'How does Moses make tea?',
    body: 'He brews.'
  },
  {
    title: 'Why can’t you explain puns to kleptomaniacs?',
    body: 'They always take things literally.'
  },
  {
    title: 'How do you keep a bagel from getting away?',
    body: 'Put lox on it.'
  },
  {
    title: 'Why did the chicken go to the séance?',
    body: 'To get to the other side.'
  }
];

const state = {
  registration: null,
  currentBatch: null
};

const elements = {
  enableButton: document.getElementById('enable-button'),
  scheduleButton: document.getElementById('schedule-button'),
  permissionBadge: document.getElementById('permission-badge'),
  statusText: document.getElementById('status-text'),
  activityLog: document.getElementById('activity-log'),
  scheduledSummary: document.getElementById('scheduled-summary')
};

boot().catch((error) => {
  console.error(error);
  setStatus('This browser could not initialize notifications for the PWA.');
  appendLog(`Setup error: ${error.message}`);
});

async function boot() {
  if (!('serviceWorker' in navigator) || !('Notification' in window)) {
    setPermissionBadge('unsupported');
    setStatus('This browser does not support the required notification APIs.');
    return;
  }

  state.registration = await navigator.serviceWorker.register('/noti/sw.js', {
    scope: '/noti/'
  });
  await navigator.serviceWorker.ready;

  elements.enableButton.addEventListener('click', onEnableClicked);
  elements.scheduleButton.addEventListener('click', () => scheduleBatch({ force: true }));

  reflectPermission();

  if (Notification.permission === 'granted') {
    await scheduleBatch({ force: false });
  }
}

async function onEnableClicked() {
  if (Notification.permission === 'denied') {
    setStatus('Notifications are blocked for this site. Re-enable them in browser site settings.');
    appendLog('Permission remains blocked until the browser setting is changed.');
    return;
  }

  const permission = await Notification.requestPermission();
  reflectPermission();

  if (permission === 'granted') {
    appendLog('Permission granted. Scheduling the first batch now.');
    await scheduleBatch({ force: true });
    return;
  }

  setStatus('Permission was not granted, so no notifications were scheduled.');
  appendLog(`Permission result: ${permission}.`);
}

function reflectPermission() {
  const permission = Notification.permission;
  setPermissionBadge(permission);

  if (permission === 'granted') {
    elements.enableButton.disabled = true;
    elements.scheduleButton.disabled = false;
    setStatus('Permission is ready. Opening the PWA can queue one short notification burst.');
    return;
  }

  elements.enableButton.disabled = false;
  elements.scheduleButton.disabled = true;

  if (permission === 'denied') {
    setStatus('Notifications are blocked. Open browser site settings to allow them again.');
    return;
  }

  setStatus('Enable notifications to schedule a short burst of jokes over the next 2 minutes.');
}

async function scheduleBatch({ force }) {
  const now = Date.now();
  const lastBatchAt = Number(localStorage.getItem(LAST_BATCH_KEY) || 0);
  const cooldownRemaining = lastBatchAt + COOLDOWN_MS - now;

  if (!force && cooldownRemaining > 0) {
    const seconds = Math.ceil(cooldownRemaining / 1000);
    setStatus(`A launch batch was already queued recently. Automatic requeue unlocks in about ${seconds}s.`);
    appendLog(`Skipped duplicate launch batch because cooldown has ${seconds}s left.`);
    updateSummary();
    return;
  }

  if (!state.registration) {
    throw new Error('Service worker registration is not ready yet.');
  }

  const plannedCount = randomInteger(MIN_NOTIFICATIONS, MAX_NOTIFICATIONS);
  const schedule = buildSchedule(plannedCount);
  const selectedNotifications = pickNotifications(plannedCount);

  state.currentBatch = {
    createdAt: now,
    total: plannedCount,
    schedule
  };

  localStorage.setItem(LAST_BATCH_KEY, String(now));

  setStatus(`Queued ${plannedCount} notifications over the next 2 minutes. Keep the PWA open for best reliability.`);
  updateSummary();
  appendLog(`Queued ${plannedCount} notifications. The first one lands in ${Math.round(schedule[0] / 1000)}s.`);

  schedule.forEach((delay, index) => {
    const message = selectedNotifications[index];
    const fireAt = new Date(now + delay);

    appendLog(
      `#${index + 1} scheduled for ${formatTime(fireAt)}: ${message.title}`
    );

    window.setTimeout(() => {
      void state.registration.showNotification(message.title, {
        body: message.body,
        tag: `noti-minute-${now}-${index}`,
        timestamp: fireAt.getTime(),
        data: {
          title: message.title,
          scheduledAt: fireAt.toISOString()
        }
      });
    }, delay);
  });
}

function buildSchedule(count) {
  const uniqueDelays = new Set();

  while (uniqueDelays.size < count) {
    uniqueDelays.add(randomInteger(5_000, WINDOW_MS));
  }

  return [...uniqueDelays].sort((left, right) => left - right);
}

function pickNotifications(count) {
  const pool = [...notifications];

  for (let i = pool.length - 1; i > 0; i -= 1) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[swapIndex]] = [pool[swapIndex], pool[i]];
  }

  return pool.slice(0, count);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setPermissionBadge(permission) {
  const badge = elements.permissionBadge;
  badge.className = 'badge';

  if (permission === 'granted' || permission === 'denied' || permission === 'default') {
    badge.classList.add(permission);
  }

  const labelMap = {
    granted: 'Permission granted',
    denied: 'Permission denied',
    default: 'Permission required',
    unsupported: 'Unsupported browser'
  };

  badge.textContent = labelMap[permission] || 'Checking permission…';
}

function setStatus(message) {
  elements.statusText.textContent = message;
}

function updateSummary() {
  if (!state.currentBatch) {
    elements.scheduledSummary.textContent = 'No batch queued yet.';
    return;
  }

  elements.scheduledSummary.textContent = `${state.currentBatch.total} notifications queued in this session.`;
}

function appendLog(message) {
  const item = document.createElement('li');
  const timestamp = new Date();
  item.innerHTML = `<strong>${formatTime(timestamp)}</strong> ${message}`;
  elements.activityLog.prepend(item);
}

function formatTime(value) {
  return value.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}
