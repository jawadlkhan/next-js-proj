import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-yellow-200 flex flex-col justify-center items-center">
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold mb-6 border-gray-300 selection:bg-red-300 text-indigo-900">Ister.co</h1>

        <div className="space-y-4">
          <p>
            <Link href="/create-account" className="text-blue-500 hover:underline">
              Create Account
            </Link>
          </p>

          <p>
            <Link href="/chat" className="text-blue-500 hover:underline">
              Chatting
            </Link>
          </p>

          <p>
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
