"use client";

export default function LogoutButton() {
  const isProduction = process.env.VERCEL_ENV === "production";
  const returnTo = isProduction
    ? `https://mircofrontend-proxy.vercel.app/home`
    : `http://localhost:3000/home`;
  return (
    <a href={`/auth/logout?returnTo=${returnTo}`} className="button logout">
      Log Out
    </a>
  );
}
