import { MessageDetectionService } from '@slack-app/catchup/message-detection';

export class DirectMessageService {
  constructor(
    private messageDetectionService: MessageDetectionService, // 필요한 다른 의존성들을 여기에 주입합니다.
  ) {}

  async processMessage(rawMessage: any): Promise<void> {
    // 1. rawMessage를 도메인의 IMessage로 변환합니다.
    // 2. messageDetectionService를 사용하여 특정 문자열 및 멘션을 감지합니다.
    // 3. 감지된 멘션된 사용자나 그룹에게 DM을 전송하는 로직을 구현합니다.
  }

  // 필요한 다른 메서드들을 여기에 추가합니다.
}
