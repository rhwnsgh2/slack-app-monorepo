import { IGroup } from "../group/group.interface";
import { IUserId } from "../user/user-id.interface";

export interface IMessageContent {
  value: string;
  contains(phrase: string): boolean;
  containsMentionOf(userId: IUserId): boolean;
  getAllMentions(): (IUserId | IGroup)[];
}