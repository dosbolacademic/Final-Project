import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://psifkrgpotllrbdsqlfm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzaWZrcmdwb3RsbHJiZHNxbGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwNjU1MTUsImV4cCI6MTk5NjY0MTUxNX0.E-JirbWG3ZvtCCTkmjDuomlspDUbWpiFDwGRFGz5U5w";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;