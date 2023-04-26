import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://kitreviqxhajqwkennvc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpdHJldmlxeGhhanF3a2VubnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1MDc5NjQsImV4cCI6MTk5ODA4Mzk2NH0.NWfqicluo7DScnLTqum7qv8hC5-dVALftI8l9QksAQ8";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
