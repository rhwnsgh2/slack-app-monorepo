import { messageEventReceiver } from './message-event-receiver';

describe('messageEventReceiver', () => {
    it('should work', () => {
        expect(messageEventReceiver()).toEqual('message-event-receiver');
    })
})