import { IMessageContent } from "./message-content.interface";
import { IUserId } from "./user-id.interface";

export interface IMessage {
  id: string;
  content: IMessageContent;
  sender: IUserId;
  timestamp: Date;
}