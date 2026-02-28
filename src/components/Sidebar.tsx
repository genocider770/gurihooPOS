"use client";

import { Role } from "@/types";

interface Props {
  user: { name: string; role: Role };
  view: string;
  setView: (v: any) => void;
}

export default function Sidebar({ user, view, setView }: Props) {
  return (
    <aside className="w-64 bg-white border-r p-6 space-y-4">
      <h1 className="text-xl font-bold">Risol POS</h1>

      <button onClick={() => setView("offline")}>Offline</button>
      <button onClick={() => setView("online")}>Online</button>
      <button onClick={() => setView("history")}>History</button>

      {user.role === "admin" && (
        <button onClick={() => setView("admin")}>Admin</button>
      )}
    </aside>
  );
}
