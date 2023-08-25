import { GroupRepository } from "./group.repository";
import { IMessage } from "./message.interface";
import { IUserId } from "./user-id.interface";

export class MessageDetectionService {
  constructor(private groupRepository: GroupRepository) {}

  async detectSpecialPhraseWithMention(message: IMessage, phrase: string): Promise<IUserId[]> {
    if (!message.content.contains(phrase)) {
      return [];
    }

    const mentions = message.content.getAllMentions();
    const recipients: IUserId[] = [];

    for (const mention of mentions) {
      if ('members' in mention) {
        // It's a group
        const {members} = await this.groupRepository.getGroupMembers(mention.id);
        recipients.push(...members);
      } else {
        // It's a user
        recipients.push(mention);
      }
    }

    return recipients;
  }
}
