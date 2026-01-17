import { createClient } from '@supabase/supabase-js';

const supabaseServer = createClient(
  "https://ikjqaozofiqwmcruqqye.supabase.co",
  "sb_secret_aCXWBParvy3Aqon-v6D6Gw_8Icn5lia"
);

export { supabaseServer as s };
