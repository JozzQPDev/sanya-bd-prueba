import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Faltan variables de entorno para Supabase');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migratePasswords() {
  console.log('Iniciando migración de contraseñas...');

  // Obtener todos los usuarios
  const { data: users, error } = await supabase
    .from('users')
    .select('id, password_hash');

  if (error) {
    console.error('Error obteniendo usuarios:', error);
    return;
  }

  if (!users || users.length === 0) {
    console.log('No hay usuarios para migrar');
    return;
  }

  for (const user of users) {
    const currentHash = user.password_hash;

    // Verificar si ya está hasheado (bcrypt hashes empiezan con $2)
    if (currentHash && currentHash.startsWith('$2')) {
      console.log(`Usuario ${user.id}: ya tiene contraseña hasheada`);
      continue;
    }

    // Si no está hasheado, asumimos que es texto plano y lo hasheamos
    if (currentHash) {
      console.log(`Migrando contraseña para usuario ${user.id}...`);
      const newHash = await bcrypt.hash(currentHash, 10);

      const { error: updateError } = await supabase
        .from('users')
        .update({ password_hash: newHash })
        .eq('id', user.id);

      if (updateError) {
        console.error(`Error actualizando usuario ${user.id}:`, updateError);
      } else {
        console.log(`Usuario ${user.id}: contraseña migrada exitosamente`);
      }
    } else {
      console.log(`Usuario ${user.id}: no tiene contraseña`);
    }
  }

  console.log('Migración completada');
}

// Ejecutar la migración
migratePasswords().catch(console.error);
