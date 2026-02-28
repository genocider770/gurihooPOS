"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Variant } from "@/types";

export default function ProductGrid({
  type,
}: {
  type: "offline" | "online";
}) {
  const [variants, setVariants] = useState<Variant[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "variants"), (snap) => {
      setVariants(
        snap.docs.map((doc) => doc.data() as Variant)
      );
    });

    return () => unsub();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {type} Orders
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {variants.map((v) => (
          <div
            key={v.id}
            className="p-4 bg-white rounded-xl border"
          >
            <h3 className="font-bold">{v.name}</h3>
            <p>Rp {v.price}</p>
            <p>Stock: {v.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
