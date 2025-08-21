\# LanguageKonnect



\## Setup

\- \*\*Frontend\*\*: Deployed on Vercel. Set `VITE\_API\_BASE\_URL` in `.env` to backend URL.

\- \*\*Backend\*\*: Deployed on Render. Set `STRIPE\_SECRET\_KEY`, `MONGODB\_URI`, `FRONTEND\_URL`, `STRIPE\_WEBHOOK\_SECRET` in `.env`.

\- \*\*Webhook\*\*: Stripe webhook at `/webhook` for `checkout.session.completed`.



\## Test Guide

\- \*\*Payment\*\*: Go to `/payment`, use card `4242 4242 4242 4242`, future expiry, any 3-digit CVC. See toast on `/signup`.

\- \*\*Contest\*\*: Upload video at `/contest` (mock URL, title, description). Check instant update on `/leaderboard`.

\- \*\*Referral\*\*: Copy link at `/referral`, signup with `?ref=userId`, check ticket increment in `/referral`.

