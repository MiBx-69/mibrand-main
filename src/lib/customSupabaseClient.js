import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yzfmjpbbdxjmhoigodkx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6Zm1qcGJiZHhqbWhvaWdvZGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNDczMDcsImV4cCI6MjA2ODYyMzMwN30.hQ0P44DXw25oq9tamYGz0u4CyJNGqbq3EFi4BQ1lmAM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);