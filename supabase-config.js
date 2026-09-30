// EkuCityHub Supabase public configuration
// The publishable/anon key is safe to use in a browser when Row Level Security is enabled.
const SUPABASE_URL = "https://cavzsagnbydyeqpfkstm.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_YRqsIJ5emLAc6RJAzZy8gQ__UpL9b49";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
