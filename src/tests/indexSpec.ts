import sendGreeting from '../index';
import request from 'supertest';
import app from '../app';

it('expect greeting to return "Hello Ashley!"', () => {
    expect(sendGreeting('Ashley')).toEqual('Hello Ashley!');
});

describe('GET /api', () => {
    it('returns status 200', () => {
        request(app).get('/api').expect(200);
    });
});
