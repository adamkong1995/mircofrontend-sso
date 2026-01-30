# Microfrontend SSO Demo — Unifying Auth Across New & Legacy Apps

> **Portfolio demo** showcasing how to implement **Single Sign-On (SSO)** and a **unified user experience** across multiple independently deployed applications — including modern and legacy-style apps — without shared cookies or shared runtime.

This project is inspired by real-world work integrating authentication across new and legacy applications in a multi-team environment.

---

## What this demonstrates

- 🔐 **SSO using OIDC (Authorization Code + PKCE)**
- 🌐 **Multiple apps on different origins**
- 🧩 **Microfrontend-style integration without tight coupling**
- 🏗 **New + legacy app coexistence**
- 🔄 **Deep-link friendly authentication**
- 🎯 **Framework-agnostic architecture**

---

## Problem this solves

Many real-world systems consist of:

- Multiple frameworks
- Independent deployment pipelines
- Different domains
- Legacy applications that can’t be rewritten

Users still expect **one login experience**.

This repo demonstrates how to achieve that using **redirect-based SSO**, rather than fragile same-domain or shared-cookie assumptions.

---

## Constraints

This demo intentionally assumes:

- Applications are deployed independently
- Applications live on different origins
- No shared cookies or runtime are available
- Some apps may be legacy or framework-limited

These constraints drive the architecture choices shown here.

---

## High-level approach

- A **central identity provider** (Auth0)
- Each app authenticates via **OIDC redirects**
- Each app maintains its **own local session**
- No shared runtime, no shared cookies

This mirrors how SSO works in many enterprise environments.

---

## Authentication flow (simplified)

1. User accesses any app directly
2. App checks local session
3. If unauthenticated → redirect to login
4. User authenticates once
5. App receives authorization code
6. App exchanges code for tokens
7. App establishes local session
8. User can access other apps without re-authenticating

---

## Repository structure

```
root/
├─ examples/
│ ├─ host-app/ # Auth shell / central entry (Next.js)
│ ├─ child-next/ # Child app (Next.js)
│ ├─ child-nuxt/ # Child app (Nuxt)
│ ├─ child-react/ # Child app (React / legacy-style)
│ └─ proxy/
│    └─ vercel.json     # Production routing / rewrites
```

Each application:

- Is built and deployed independently
- Lives on its own origin
- Relies on the same Identity Provider

---

## Why this works for legacy apps

- No shared cookies
- No iframe-based auth
- No framework assumptions
- Only requires HTTP redirects

This makes it suitable for **incremental migration**, not just greenfield projects.

---

## Identity provider

Uses **Auth0 (free tier)** for demonstration purposes.

The architecture is **vendor-agnostic** and transferable to Okta, Azure AD, Cognito, Keycloak, etc.

---

## Key takeaway

> **SSO and unified UX do not require a monolith.**  
> Redirect-based authentication scales across frameworks, domains, and generations of applications without forcing rewrites.

---

## Disclaimer

This is a learning / portfolio project intended to demonstrate architectural patterns.  
Security-sensitive code should be reviewed and hardened before production use.
