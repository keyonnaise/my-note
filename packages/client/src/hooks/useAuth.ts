"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import * as client from "~/lib/firebase/client";

export function useAuth() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(client.auth, async (user) => {
      if (user) {
        // TODO: 인증 상태 변경 시 로직 추가
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(client.auth, email, password);
      const idToken = await userCredential.user.getIdToken();
      await fetch("/api/verify-id-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
}
