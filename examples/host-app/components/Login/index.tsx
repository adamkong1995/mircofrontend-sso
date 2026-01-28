"use client";

export default function LoginButton() {
  return (
    <a href="/auth/login?returnTo=/home" className="button login">
      Log In
    </a>
  );
}
