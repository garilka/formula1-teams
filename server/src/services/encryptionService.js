import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const {verify} = jwt;

async function hashPassword(password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
}

function generatePayload(payload) {
  return {
    id: payload.id,
    type: payload.type,
  };
};

const decodeToken = (token) => {
  if (token.startsWith('Bearer')) {
    token = token.slice(7);
  }
  const decoded = verify(token, process.env.TOKEN_SECRET);
  return decoded;
};

export default {
  hashPassword,
  generatePayload,
  decodeToken,
};
