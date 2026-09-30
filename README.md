# E-CityHub

A mobile-first PWA prototype for E-CityHub — PR, advertising, news updates, graphic design, event coverage and reels.

## Included
- Customer-facing home, news, events, reels, services, ads, about and contact pages.
- Advertise With Us campaign request form.
- WhatsApp and contact links.
- Starter admin dashboard.
- Local demo persistence using browser localStorage.
- Installable PWA manifest and service worker.
- E-CityHub logo supplied in `assets/logo.png`.

## Run
For local development, serve the folder with any static web server. For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Production work still required
The prototype stores demo requests locally. A production deployment should add:
1. Secure authentication for the admin.
2. Cloud database for ads, news, events, reels and client requests.
3. Secure media storage for image/video uploads.
4. Server-side validation and spam protection.
5. WhatsApp/email notifications.
6. Payment gateway if paid advertising packages are enabled.
7. Deployment and Android/iOS packaging.
