import { MessageEventReceiver, MessageEvent } from '../domain';

export class RestApiMessageEventReceiver implements MessageEventReceiver {
  private callback: (event: MessageEvent) => void;

  onMessageReceived(callback: (event: MessageEvent) => void): void {
    this.callback = callback;
  }

  // 이 메서드는 외부 서버로부터 호출될 것입니다.
  handleMessageEvent(event: MessageEvent): void {
    if (this.callback) {
      this.callback(event);
    }
  }
}
