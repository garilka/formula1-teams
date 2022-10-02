/* eslint-disable max-len */
import app from '../../app.js';
import supertest from 'supertest';
import {jest} from '@jest/globals';
import models from '../../db/models';
const User = models.User;

jest.mock('../../db/models', () => ({
  Sequelize: jest.fn(),
  sequelize: jest.fn(),
  User: jest.fn(),
}));
let userToRegister = {};

beforeEach(() => {
  userToRegister = {
    nickname: 'garilk',
    password: 'kisci*c7a',
    email: 'grraimilka@grnfoduy.com',
  };
});
describe('POST /api/user ', () => {
  const server = supertest(app);
  it('should post a new user', async () => {
    User.findAll = jest.fn((config) => {
      return ['h'];
    });
    User.create = jest.fn((config) => {
      return {
        'id': 43,
        'nickname': 'garilk',
        'email': 'grraimilka@grnfduy.com',
        'updatedAt': '2022-10-23T14:10:53.564Z',
        'createdAt': '2022-10-23T14:10:53.564Z',
      };
    });
    const response = await server.post('/api/user').send(userToRegister);
    expect(response.status).toBe(400);
  });
  it('should give the error message: we already have this email', async () => {
    User.findAll = jest.fn((config) => {
      return ['g'];
    });
    const response = await server.post('/api/user').send(userToRegister);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe( 'We already have this email');
  });
  it('should give the error message: Invalid nickname', async () => {
    userToRegister = {
      nickname: 'gari/ka',
      password: 'kisci*c7a',
      email: 'grraimilka@grnfoduy.com',
    };
    const response = await server.post('/api/user').send(userToRegister);
    expect(response.body.message).toBe('Invalid nickname');
    expect(response.status).toBe(400);
  });
  it('should give the error message: Invalid password', async () => {
    userToRegister = {
      nickname: 'garilk',
      password: 'kiscic7a',
      email: 'grraimilka@grnfoduy.com',
    };
    const response = await server.post('/api/user').send(userToRegister);
    expect(response.body.message).toBe('Invalid password');
    expect(response.status).toBe(400);
  });
  it('should give the error message: Invalid email', async () => {
    userToRegister = {
      nickname: 'garilk',
      password: 'ki*scic7a',
      email: 'grraimilkagrnfoduy.com',
    };
    const response = await server.post('/api/user').send(userToRegister);
    expect(response.body.message).toBe('Invalid email');
    expect(response.status).toBe(400);
  });
});
