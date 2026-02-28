"use client";

import { useState } from "react";
import { Role } from "@/types";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import OrderHistory from "@/components/OrderHistory";
import AdminDashboard from "@/components/AdminDashboard";

export default function Page() {
  const [user, setUser] = useState<{ name: string; role: Role } | null>(null);
  const [view, setView] = useState<
    "offline" | "online" | "history" | "admin"
  >("offline");

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={() =>
            setUser({ name: "Administrator", role: "admin" })
          }
          className="bg-orange-500 text-white px-6 py-3 rounded-xl"
        >
          Login as Admin
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar user={user} view={view} setView={setView} />

      <main className="flex-1 p-6">
        {view === "offline" || view === "online" ? (
          <ProductGrid type={view} user={user} />
        ) : null}

        {view === "history" && <OrderHistory />}

        {view === "admin" && user.role === "admin" && (
          <AdminDashboard />
        )}
      </main>
    </div>
  );
}
