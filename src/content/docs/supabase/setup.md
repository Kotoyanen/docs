---
title: Supabase Setup
description: Documentation on how to setup Supabase
---

Currently, the backend of this project is hosted on Supabase's Infrastructure.<br>Actual implementation of the setup may differ for self-hosted.

# Project Authentication

> Under settings (bottom-left of page), in `Configuration > Authentications`

Aside from default settings:

- Enable `Allow anonymous sign-ins`.
- Passwords set to minimum length of `8`, and `Letters and Digits`.
- Enable `Enable Captcha protection`, and set to `hcaptcha`.

> [hCaptcha](https://www.hcaptcha.com/) has a free tier, which sign up for and get a free API Key.