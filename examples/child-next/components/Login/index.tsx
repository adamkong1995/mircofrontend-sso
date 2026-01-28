"use client";
import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/auth/login?returnTo=/child-next" className="button login">
      Log In
    </Link>
  );
}
