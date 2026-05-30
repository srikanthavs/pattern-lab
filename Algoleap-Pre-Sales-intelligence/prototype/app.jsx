/* ============================================================
   APP — router & state
   ============================================================ */

function App() {
  const [step, setStep] = React.useState(1);
  const [maxStep, setMaxStep] = React.useState(1);
  const [form, setForm] = React.useState({
    company: "Coop Sverige", department: "Supply Chain", stakeholder: "", context: "",
  });
  const [sources, setSources] = React.useState(() =>
    MANUAL_SOURCES.map((s, i) => ({
      id: i + 1, source: s.source, content: s.full, preset: true,
    }))
  );
  const [modalUC, setModalUC] = React.useState(null);
  const [toastNode, showToast] = useToast();

  const go = (n) => {
    setStep(n);
    setMaxStep((m) => Math.max(m, n));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const newSession = () => {
    setStep(1); setMaxStep(1);
    window.scrollTo({ top: 0 });
  };

  const company = form.company.trim() || "the company";

  return (
    <div className="app-shell">
      <TopNav step={step} maxStep={maxStep}
        onLogo={newSession} onNew={newSession} goStep={go} />

      <main className="main">
        {step === 1 && (
          <Screen1 form={form} setForm={setForm} onStart={() => go(2)} />
        )}
        {step === 2 && (
          <Screen2 key="s2" company={company} department={form.department} onContinue={() => go(3)} />
        )}
        {step === 3 && (
          <Screen3 sources={sources} setSources={setSources}
            onGenerate={() => go(4)} onSkip={() => go(4)} />
        )}
        {step === 4 && (
          <Screen4 company={company} onGenerate={(uc) => setModalUC(uc)} />
        )}
      </main>

      <Footer />

      {modalUC && <PromptModal uc={modalUC} onClose={() => setModalUC(null)} onToast={showToast} />}
      {toastNode}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
