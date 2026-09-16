import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://gszfhmkuvcwlnpqdnkjb.supabase.co';

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzemZobWt1dmN3bG5wcWRua2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0ODExMDksImV4cCI6MjA2NTA1NzEwOX0.x627QHy0zbMSjurK5bIuCb327MxCdtahx6iwPV2iMvg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);