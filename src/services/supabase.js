import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://juautrjglpllfiwdikzj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1YXV0cmpnbHBsbGZpd2Rpa3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxMjQ3MDQsImV4cCI6MjAxNzcwMDcwNH0.8wCbM1CRx868i-1NnDHzA5AGoTPjyiQd8il2m2OX6xw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
