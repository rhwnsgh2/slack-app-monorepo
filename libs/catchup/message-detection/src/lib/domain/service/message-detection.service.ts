import { GroupRepository } from "../group/group.repository";
import { IMessage } from "../message/message.interface";
import { IUserId } from "../user/user-id.interface";

export class MessageDetectionService {
  constructor(private groupRepository: GroupRepository) {}

  detectSpecialPhraseWithUserMention(message: IMessage, phrase: string, userId: IUserId): boolean {
    return message.content.contains(phrase) && message.content.getAllMentions().some(m => m.id === userId.value && m.type === 'user');
  }

  async detectSpecialPhraseWithGroupMention(message: IMessage, phrase: string, groupId: string): Promise<IUserId[]> {
    if (!message.content.contains(phrase)) {
      return [];
    }

    const mentions = message.content.getAllMentions();
    
    if (mentions.some(m => m.id === groupId && m.type === 'group')) {

      const {members} = await this.groupRepository.getGroupMembers(groupId);

      return members
    }

    return [];
  }
}
