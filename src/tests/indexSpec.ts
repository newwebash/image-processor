import sendGreeting from '../index';

it('expect greeting to return "Hello Ashley!"', () => {
    expect(sendGreeting('Ashley')).toEqual('Hello Ashley!');
});
