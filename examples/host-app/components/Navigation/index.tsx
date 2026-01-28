import LoginButton from "../Login";
import LogoutButton from "../Logout";
import Profile from "../Profile";
import { auth0 } from "@/services/auth0/client";

const navigationButtons = [
  { name: "Home", link: "/home" },
  {
    name: "Child-Next",
    link: "/child-next/auth/login?returnTo=/home",
  },
  { name: "Child-Nuxt", link: "/child-nuxt/home" },
];

const Navigation = async () => {
  const session = await auth0.getSession();
  const user = session?.user;

  return (
    <div className="h-16 px-4 py-2">
      <div className="grid grid-cols-3 gap-4 items-center h-full">
        <h2>Navigation Component</h2>
        <div className="flex justify-center gap-6">
          {navigationButtons.map((button) => (
            <a key={button.name} href={button.link}>
              {button.name}
            </a>
          ))}
        </div>
        <div className="flex justify-end items-center gap-4">
          <Profile />
          {!user && <LoginButton />}
          {user && <LogoutButton />}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
