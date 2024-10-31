// app/home/page.tsx
"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {session ? (
        <>
          <h2 className="mb-4">Welcome, {session.user?.name}</h2>
          <button
            onClick={() =>
              signOut({
                callbackUrl: "/" // Redirect to login page after logout
              })
            }
            className="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <p>Please log in to access this page.</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Go to Login
          </button>
        </>
      )}
    </div>
  );
}
