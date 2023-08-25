import { IMention } from '../mention/mention.interface';

export interface IMessageContent {
  value: string;
  contains(phrase: string): boolean;
  getAllMentions(): IMention[];
}
