export interface MessageEventReceiver {
  onMessageReceived(callback: (event: MessageEvent) => void): void;
}
