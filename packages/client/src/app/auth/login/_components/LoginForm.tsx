"use client";

import React, { useCallback, useState } from "react";
import Spacer from "~/components/atom/Spacer";
import { useAuth } from "~/hooks/useAuth";

interface Fields {
  email: string;
  password: string;
}

function LoginForm() {
  const { loading, login } = useAuth();

  const [fields, setFields] = useState<Fields>({
    email: "su.smisc14@gmail.com",
    password: "P@ssw0rd8492",
  });

  const handleFieldChange = useCallback(
    (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setFields((prev) => ({
        ...prev,
        [key]: e.target.value,
      })),
    [],
  );

  return (
    <div>
      <input
        type="email"
        width="100%"
        placeholder="이메일을 입력해주세요."
        value={fields.email}
        onChange={handleFieldChange("email")}
      />
      <Spacer />
      <input
        type="password"
        width="100%"
        placeholder="비밀번호를 입력해주세요."
        value={fields.password}
        onChange={handleFieldChange("password")}
      />
      <Spacer y={8} />
      <button onClick={() => login(fields.email, fields.password)} disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>
    </div>
  );
}

export default LoginForm;
