import { supabaseServer } from '../lib/supabaseServer.js';
import bcrypt from 'bcryptjs';

async function updateAdminPassword() {
  const newPassword = "admin123"; // Cambia esto por la contraseña deseada
  const newHash = await bcrypt.hash(newPassword, 10);

  console.log("Nuevo hash generado:", newHash);

  const { error } = await supabaseServer
    .from('users')
    .update({ password_hash: newHash })
    .eq('email', 'admin@demo.com');

  if (error) {
    console.error('Error actualizando contraseña:', error);
  } else {
    console.log('Contraseña del admin actualizada exitosamente');
  }
}

updateAdminPassword().catch(console.error);
