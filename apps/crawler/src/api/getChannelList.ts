import axios from 'axios';
import { Channel } from '../types/channel';

const getChannelList = async (): Promise<Channel[]> => {
  const res = (await axios.get('https://slack.com/api/conversations.list', {
    headers: {
      Authorization: `Bearer ${process.env.SLACK_USER_TOKEN}`,
    },
  })) as { data: { channels: Channel[] } };

  return res.data.channels.map((channel) => {
    return {
      id: channel.id,
      name: channel.name,
    };
  });
};

export default getChannelList;
