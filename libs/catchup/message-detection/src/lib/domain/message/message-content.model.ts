import { IMessageContent } from './message-content.interface';
import { IMention } from '../mention/mention.interface';

export class MessageContent implements IMessageContent {
  constructor(public readonly value: string) {}

  contains(phrase: string): boolean {
    return this.value.includes(phrase);
  }

  getAllMentions(): IMention[] {
    const mentionPattern = /@(\w+)/g;
    const mentions: IMention[] = [];
    let match;

    while ((match = mentionPattern.exec(this.value)) !== null) {
      // TODO: 여기서 'user'와 'group'을 구분하는 로직이 필요합니다.
      // 예를 들어, 사용자와 그룹의 ID 패턴이 다르거나,
      // 사용자와 그룹의 ID 목록을 별도로 알고 있다면 그를 기반으로 구분할 수 있습니다.
      // 현재는 모든 멘션을 'user'로 간주합니다.
      mentions.push({ id: match[1], type: 'user' });
    }

    return mentions;
  }
}
