import { App } from '@slack/bolt';
import { config } from 'dotenv';

config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN, // add this
});

async function requestWordMiddleware({ message, next }) {
  if (message.text.includes('[요청]')) {
    await next();
  }
}

async function userMentionMiddleware({ message, next }) {
  if (message.text.includes('<@')) {
    await next();
  }
}

app.message(
  requestWordMiddleware,
  userMentionMiddleware,
  async ({ message, client }) => {
    // say() sends a message to the channel where the event was triggered
    console.log(message);

    client.chat.postMessage({
      channel: 'U05QZ2RA0NM',
      text: '하이 배포됐지롱',
    });
  },
);

(async () => {
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();
