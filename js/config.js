// ============================================================
// CONFIG — your Supabase project details.
// Project Settings → API → Project URL / anon public key.
// The anon key is safe to expose client-side as long as RLS
// policies are enabled on every table (see sql/schema.sql).
// ============================================================
export const SUPABASE_URL = "https://pwqbuujzwykhghtmqtiy.supabase.co";

export const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3cWJ1dWp6d3lraGdodG1xdGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMTAzNDksImV4cCI6MjA5OTY4NjM0OX0.LhroZ6K0zEuNG1gAhc0YCE_09s3qQJmnCuJE2FmV9SI";

export const HOSTEL_DEFAULTS = {
  name: "Malabar Muslim Association",
  rent: {
    student_2: 4350,
    student_3: 3850,
    employee_2: 5350,
    employee_3: 4850,
  },
  bikeCharge: 250,
  messDefault: 1800,
};
