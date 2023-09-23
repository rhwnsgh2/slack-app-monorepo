import axios from 'axios';
import getChannelList from './api/getChannelList';
import { Thread } from './types/thread';

const getChannelHistory = async (
  channelId: string,
  threads: Thread[] = [],
  cursor?: string,
) => {
  const res = await axios.get('https://slack.com/api/conversations.history', {
    headers: {
      Authorization: `Bearer ${process.env.SLACK_USER_TOKEN}`,
    },
    params: {
      channel: channelId,
      cursor,
    },
  });

  const responseThreads = res.data.messages.map((message) => {
    return {
      id: message.ts,
      channel: channelId,
      text: message.text,
      user: message.user,
    };
  });

  if (res.data.has_more) {
    const nextMessages = await getChannelHistory(
      channelId,
      [...threads, ...res.data.messages],
      res.data.response_metadata.next_cursor,
    );

    return [...responseThreads, ...nextMessages];
  }

  return [...threads, ...responseThreads];
};

const main = async () => {
  const channels = await getChannelList();

  const channelHistory = await getChannelHistory(channels[3].id);

  console.log(channelHistory[0]);
};

main();
