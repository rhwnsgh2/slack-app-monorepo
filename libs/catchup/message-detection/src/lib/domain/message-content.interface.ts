import { IGroup } from "./group.interface";
import { IUserId } from "./user-id.interface";

export interface IMessageContent {
  value: string;
  contains(phrase: string): boolean;
  containsMentionOf(userId: IUserId): boolean;
  getAllMentions(): (IUserId | IGroup)[];
}