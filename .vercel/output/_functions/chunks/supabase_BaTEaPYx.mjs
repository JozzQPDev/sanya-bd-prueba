import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://ikjqaozofiqwmcruqqye.supabase.co",
  "sb_publishable_4CecTZnixPFbJo6WxBG42w_xcgP75kn"
);

export { supabase as s };
