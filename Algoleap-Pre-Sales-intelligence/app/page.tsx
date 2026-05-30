"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TopNav } from "@/components/Layout/TopNav";
import { Footer } from "@/components/Layout/Footer";
import { InputForm } from "@/components/Screen1/InputForm";
import type { SessionForm } from "@/lib/types";

const DEFAULT_FORM: SessionForm = {
  company: "",
  department: "Supply Chain",
  stakeholder: "",
  context: "",
};

export default function Home() {
  const [form, setForm] = useState<SessionForm>(DEFAULT_FORM);
  const router = useRouter();

  function handleStart() {
    if (!form.company.trim()) return;
    sessionStorage.setItem("psi_form", JSON.stringify(form));
    router.push("/research");
  }

  return (
    <div className="app-shell">
      <TopNav step={1} maxStep={1} />
      <main className="main">
        <InputForm form={form} setForm={setForm} onStart={handleStart} />
      </main>
      <Footer />
    </div>
  );
}
