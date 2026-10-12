/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `phone` (text) — optional phone number
  - `event_type` (text, not null) — type of event (wedding, private party, quinceanera, corporate, other)
  - `event_date` (date) — optional preferred event date
  - `message` (text) — optional additional details
  - `status` (text, default 'new') — tracking status for the DJ
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public contact form submissions).
- No SELECT/UPDATE/DELETE for anon — only the DJ (via service role / dashboard) can read and manage submissions.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  event_type text NOT NULL,
  event_date date,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "anon_update_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "anon_delete_submissions" ON contact_submissions;