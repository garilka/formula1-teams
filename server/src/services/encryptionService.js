import bcrypt from 'bcrypt';

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

export default {
  hashPassword,
  generatePayload,
};
