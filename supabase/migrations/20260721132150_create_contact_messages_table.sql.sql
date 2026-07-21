/*
# Create contact_messages table (single-tenant, no auth)

1. Purpose
- Stores messages submitted through the public Contact form on the
  BusinessBuddy AI website. The site has no sign-in screen, so this is a
  single-tenant, intentionally-public write table: any visitor can submit
  a contact message and receive a success confirmation.

2. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — the visitor's name
  - `email` (text, not null) — the visitor's email address
  - `message` (text, not null) — the visitor's message body
  - `created_at` (timestamptz, default now()) — submission timestamp

3. Security (RLS)
- Enable RLS on `contact_messages`.
- INSERT policy scoped to `anon, authenticated` so the anon-key frontend
  can submit contact messages without a sign-in flow.
- No SELECT / UPDATE / DELETE policies for anon/authenticated: only the
  service role (server-side) can read or manage stored messages. This
  keeps submitted contact data private from the public frontend.

4. Notes
- This is intentionally a one-way public submission table. The frontend
  never reads back submitted messages, so only an INSERT policy is exposed
  to the anon role.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
