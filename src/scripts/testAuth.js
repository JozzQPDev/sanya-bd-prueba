import { hashPassword, verifyPassword } from '../lib/auth.js';

async function testAuth() {
  console.log('Testing password hashing and verification...');

  const password = 'admin123';
  console.log('Original password:', password);

  const hash = await hashPassword(password);
  console.log('Generated hash:', hash);

  const isValid = await verifyPassword(password, hash);
  console.log('Password verification result:', isValid);

  const wrongPassword = 'wrong123';
  const isInvalid = await verifyPassword(wrongPassword, hash);
  console.log('Wrong password verification result:', isInvalid);
}

testAuth().catch(console.error);
