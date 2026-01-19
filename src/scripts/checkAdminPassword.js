import { supabaseServer } from '../lib/supabaseServer.js';
import { verifyPassword } from '../lib/auth.js';

async function checkAdminPassword() {
  const { data: user, error } = await supabaseServer
    .from('users')
    .select('id, email, password_hash')
    .eq('email', 'admin@demo.com')
    .single();

  if (error) {
    console.error('Error fetching admin user:', error);
    return;
  }

  if (!user) {
    console.log('Admin user not found');
    return;
  }

  console.log('Admin user found:', user.email);
  console.log('Password hash exists:', !!user.password_hash);
  console.log('Hash starts with $2:', user.password_hash?.startsWith('$2'));

  const testPassword = 'admin123';
  const isValid = await verifyPassword(testPassword, user.password_hash);
  console.log(`Password 'admin123' valid:`, isValid);
}

checkAdminPassword().catch(console.error);
