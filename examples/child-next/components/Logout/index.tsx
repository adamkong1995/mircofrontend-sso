"use client";
import Link from "next/link";
export default function LogoutButton() {
  const isProduction = process.env.VERCEL_ENV === "production";
  const returnTo = isProduction
    ? `https://mircofrontend-proxy.vercel.app/child-next/home`
    : `http://localhost:3000/child-next/home`;
  return (
    <Link href={`/auth/logout?returnTo=${returnTo}`} className="button logout">
      Log Out
    </Link>
  );
}
