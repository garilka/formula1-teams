import {
  isNicknameValid,
  isPasswordValid,
  isEmailValid,
  isEmailAlreadyInUse,
} from '../../services/userService.js';
import {jest} from '@jest/globals';
import models from '../../db/models';
const User = models.User;

jest.mock('../../db/models', () => ({
  Sequelize: jest.fn(),
  sequelize: jest.fn(),
  User: jest.fn(),
}));

describe('userService.js / User registration validation', () => {
  it('should return false or true depends on (in)valid nickname', () => {
    expect(isNicknameValid('aabbcc*')).toBe(false);
  });
  it('should return false or true depends on (in)valid nickname', () => {
    expect(isNicknameValid('aabbcc')).toBe(true);
  });
  it('should return false or true depends on (in)valid password', () => {
    expect(isPasswordValid('aa55cc*')).toBe(false);
  });
  it('should return false or true depends on (in)valid password', () => {
    expect(isPasswordValid('aa5/bbcc')).toBe(true);
  });
  it('should return false or true depends on (in)valid email', () => {
    expect(isEmailValid('ilka.garaigreenfox.com*')).toBe(false);
  });
  it('should return false or true depends on (in)valid email', () => {
    expect(isEmailValid('ilka.garai@greenfox.com')).toBe(true);
  });
  it('should return false or true depends on already used email', async () => {
    User.findAll = jest.fn((config) => {
      return [];
    });
    expect(await isEmailAlreadyInUse('ilka.garai@greenfox.com')).toBe(false);
  });
  it('should return false or true depends on already used email', async () => {
    User.findAll = jest.fn((config) => {
      return ['asdfjas'];
    });
    expect(await isEmailAlreadyInUse('ilka.garai@greenfox.com')).toBe(true);
  });
});
