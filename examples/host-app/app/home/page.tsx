import Profile from "@/components/Profile";
export default function Home() {
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>Main Host App</div>
      <Profile />
    </div>
  );
}
