"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export function LoginButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold shadow-lg shadow-blue-900/20"
    >
      Login with Google
    </button>
  )
}

export function LogoutButton() {
  const { data: session } = useSession()
  return (
    <div className="flex items-center gap-4">
      {session?.user?.image && (
        <img src={session.user.image} alt={session.user.name || ""} className="w-8 h-8 rounded-full border border-white/20" />
      )}
      <span className="text-sm font-medium text-white/80">{session?.user?.name}</span>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-medium border border-white/20"
      >
        Logout
      </button>
    </div>
  )
}
