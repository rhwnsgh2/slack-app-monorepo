import { IGroup } from "../group/group.interface";
import { IMessageContent } from "./message-content.interface";
import { IUserId } from "../user/user-id.interface";


export class MessageContent implements IMessageContent {
  constructor(public readonly value: string) {}

  containsMentionOf(userId: IUserId): boolean {
    throw new Error("Method not implemented.");
  }

  getAllMentions(): (IUserId | IGroup)[] {
    throw new Error("Method not implemented.");
  }

  contains(phrase: string): boolean {
    return this.value.includes(phrase);
  }
}