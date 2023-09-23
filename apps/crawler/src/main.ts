import axios from 'axios';

const getChannelList = async () => {
  const res = await axios.get('https://slack.com/api/conversations.list', {
    headers: {
      Authorization: `Bearer ${process.env.SLACK_USER_TOKEN}`,
    },
  });

  return res.data.channels;
};

const getChannelHistory = async (channelId: string) => {
  const res = await axios.get('https://slack.com/api/conversations.history', {
    headers: {
      Authorization: `Bearer ${process.env.SLACK_USER_TOKEN}`,
    },
    params: {
      channel: channelId,
    },
  });

  return res.data.messages;
};

const main = async () => {
  const channels = await getChannelList();

  const channelHistory = await getChannelHistory(channels[0].id);

  console.log(channelHistory[0]);
};

main();
