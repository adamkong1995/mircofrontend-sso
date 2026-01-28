import { useEffect, useState } from "react";

type User = {
  name?: string;
  email?: string;
  picture?: string;
  sub?: string;
  [key: string]: any;
};

type UseUserResult = {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
};

// Custom hook to fetch auth0 user profile from /hub/auth/profile
const useUser = (): UseUserResult => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setIsLoading(true);

        // IMPORTANT: absolute path INCLUDING /hub
        const res = await fetch("/child-next/auth/profile", {
          credentials: "include",
        });

        if (!res.ok) {
          if (res.status === 401) {
            // not logged in is not an error
            if (!cancelled) setUser(null);
            return;
          }
          throw new Error(`Failed to load profile (${res.status})`);
        }

        const data = await res.json();
        if (!cancelled) setUser(data);
      } catch (err: any) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { user, isLoading, error };
};

export default useUser;
