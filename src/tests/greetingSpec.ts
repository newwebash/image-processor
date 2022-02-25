import sendGreeting from '../greeting';

/**Example non-endpoint test */

describe('Regular test, not for an endpoint', () => {
    it('expect greeting to return "Hello Ashley!"', () => {
        expect(sendGreeting('Ashley')).toEqual('Hello Ashley!');
    });
});
