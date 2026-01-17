import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://ikjqaozofiqwmcruqqye.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlranFhb3pvZmlxd21jcnVxcXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3MDg4MDUsImV4cCI6MjA4MzI4NDgwNX0.Ev1PqgTWs_9m_XecsGC3RtIk_9-1r9x5CZoEC9NSmPs"
);

export { supabase as s };
