"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Signup() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/home");
    }
  }, [session, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center">Sign Up</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="w-full p-3 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            SIGN UP
          </button>
        </form>
        <div className="flex items-center justify-center my-4 text-gray-500">
          <span className="px-2">OR</span>
        </div>
        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
          Sign Up with Google
        </button>
        <p className="mt-4 text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a href="/" className="text-orange-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
