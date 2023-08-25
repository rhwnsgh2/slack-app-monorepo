import { MessageEvent } from './message-event.model';

export interface MessageEventReceiver {
  onMessageReceived(callback: (event: MessageEvent) => void): void;
}
