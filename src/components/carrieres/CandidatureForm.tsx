"use client";

import { useState, useRef } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, Upload, X, User, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const POSTES = [
  "Consultant ERP Odoo Senior",
  "Développeur Python / Odoo",
  "Ingénieur DevSecOps",
  "Data Scientist / IA",
  "Chef de projet ERP",
  "Candidature spontanée",
];

type FormData = {
  // Étape 1
  nom: string;
  email: string;
  telephone: string;
  linkedin: string;
  ville: string;
  disponibilite: string;
  // Étape 2
  poste: string;
  contrat: string;
  experience: string;
  motivation: string;
  cv: File | null;
  portfolio: string;
  salaire: string;
  source: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const MOTIVATION_MAX = 1500;
const MOTIVATION_MIN = 100;

function ProgressBar({ step }: { step: 1 | 2 }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-[#374151]">Étape {step} sur 2</span>
        <span className="text-xs text-gray-400">{step === 1 ? "Informations personnelles" : "Votre candidature"}</span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#FF5500] rounded-full transition-all duration-500"
          style={{ width: step === 1 ? "50%" : "100%" }}
        />
      </div>
      <div className="flex justify-between mt-2">
        {[
          { n: 1, label: "Profil", Icon: User },
          { n: 2, label: "Candidature", Icon: Briefcase },
        ].map(({ n, label }) => (
          <div key={n} className="flex items-center gap-1.5">
            <div className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
              step >= n ? "bg-[#FF5500] text-white" : "bg-gray-200 text-gray-400"
            )}>
              {step > n ? <CheckCircle size={12} /> : n}
            </div>
            <span className={cn("text-xs font-medium", step >= n ? "text-[#1A2B3C]" : "text-gray-400")}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, required, error, children }: {
  label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#374151] mb-1.5">
        {label} {required && <span className="text-[#c94200]">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500 flex items-center gap-1">{error}</p>}
    </div>
  );
}

const inputCls = (error?: string) => cn(
  "w-full px-4 py-3 border rounded-xl text-sm text-[#374151] focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white",
  error ? "border-red-400 focus:ring-red-400" : "border-[#D9E2EC] focus:ring-[#FF5500]"
);

export default function CandidatureForm({ posteInitial }: { posteInitial?: string }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<FormData>({
    nom: "", email: "", telephone: "", linkedin: "", ville: "", disponibilite: "",
    poste: posteInitial ?? "", contrat: "", experience: "", motivation: "",
    cv: null, portfolio: "", salaire: "", source: "",
  });

  const set = (field: keyof FormData, value: string | File | null) =>
    setForm((p) => ({ ...p, [field]: value }));

  const clearError = (field: keyof FormData) =>
    setErrors((p) => { const n = { ...p }; delete n[field]; return n; });

  // ── Validation étape 1 ──
  function validateStep1(): Errors {
    const e: Errors = {};
    if (!form.nom.trim() || form.nom.trim().length < 3) e.nom = "Nom requis (3 caractères minimum)";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Adresse email invalide";
    if (!form.telephone.trim() || form.telephone.trim().length < 8) e.telephone = "Numéro de téléphone requis";
    if (!form.ville.trim() || form.ville.trim().length < 2) e.ville = "Ville requise";
    if (!form.disponibilite) e.disponibilite = "Veuillez indiquer votre disponibilité";
    if (form.linkedin && !form.linkedin.match(/^https?:\/\/.+/)) e.linkedin = "URL invalide (doit commencer par https://)";
    return e;
  }

  // ── Validation étape 2 ──
  function validateStep2(): Errors {
    const e: Errors = {};
    if (!form.poste) e.poste = "Veuillez sélectionner un poste";
    if (!form.contrat) e.contrat = "Type de contrat requis";
    if (!form.experience) e.experience = "Niveau d'expérience requis";
    if (!form.motivation.trim() || form.motivation.length < MOTIVATION_MIN)
      e.motivation = `Lettre de motivation requise (${MOTIVATION_MIN} caractères minimum)`;
    if (form.motivation.length > MOTIVATION_MAX)
      e.motivation = `Maximum ${MOTIVATION_MAX} caractères`;
    if (form.portfolio && !form.portfolio.match(/^https?:\/\/.+/)) e.portfolio = "URL invalide";
    return e;
  }

  function handleNext() {
    const e = validateStep1();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validateStep2();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setLoading(true);
    const subject = encodeURIComponent(`[Candidature] ${form.poste} - ${form.nom}`);
    const body = encodeURIComponent(
      [
        `Nom : ${form.nom}`,
        `Email : ${form.email}`,
        `Téléphone : ${form.telephone}`,
        `Ville : ${form.ville}`,
        `Disponibilité : ${form.disponibilite}`,
        `LinkedIn : ${form.linkedin || "Non renseigné"}`,
        "",
        `Poste visé : ${form.poste}`,
        `Type de contrat : ${form.contrat}`,
        `Expérience : ${form.experience}`,
        `Prétentions salariales : ${form.salaire || "Non renseignées"}`,
        `Portfolio / GitHub : ${form.portfolio || "Non renseigné"}`,
        `Source : ${form.source || "Non renseignée"}`,
        `CV sélectionné : ${form.cv?.name || "À joindre à cet email"}`,
        "",
        "Motivation :",
        form.motivation,
        "",
        "Merci de joindre votre CV PDF avant l'envoi si le fichier n'est pas déjà attaché.",
      ].join("\n")
    );
    window.location.href = `mailto:rh@akililabs.com?subject=${subject}&body=${body}`;
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSent(true);
  }

  function handleFileChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const file = ev.target.files?.[0] ?? null;
    if (file) {
      if (file.type !== "application/pdf") {
        setErrors((p) => ({ ...p, cv: "Fichier PDF uniquement" }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((p) => ({ ...p, cv: "Fichier trop volumineux (max 5 Mo)" }));
        return;
      }
    }
    set("cv", file);
    clearError("cv");
  }

  // ── Écran de succès ──
  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-14 gap-5">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-[#1A2B3C]">Email de candidature préparé</h2>
        <p className="text-[#374151] max-w-sm">
          Merci <strong>{form.nom.split(" ")[0]}</strong>. Votre messagerie s&apos;ouvre avec les
          informations préremplies. Joignez votre CV PDF, puis envoyez l&apos;email.
        </p>
        <button
          onClick={() => { setSent(false); setStep(1); setForm({ nom:"",email:"",telephone:"",linkedin:"",ville:"",disponibilite:"",poste:posteInitial??"",contrat:"",experience:"",motivation:"",cv:null,portfolio:"",salaire:"",source:"" }); }}
          className="px-5 py-2.5 bg-[#FF5500] text-white rounded-xl font-medium hover:bg-[#e04d00] transition-colors"
        >
          Préparer une autre candidature
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ProgressBar step={step} />

      {/* ════════ ÉTAPE 1 ════════ */}
      {step === 1 && (
        <div className="space-y-5">
          <h2 className="text-lg font-bold text-[#1A2B3C] mb-1">Vos informations personnelles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Nom complet" required error={errors.nom}>
              <input
                type="text" placeholder="Kouamé Jean-Baptiste"
                autoComplete="name"
                value={form.nom} onChange={(e) => { set("nom", e.target.value); clearError("nom"); }}
                className={inputCls(errors.nom)}
              />
            </Field>
            <Field label="Email professionnel" required error={errors.email}>
              <input
                type="email" placeholder="jean@exemple.com"
                autoComplete="email" inputMode="email"
                value={form.email} onChange={(e) => { set("email", e.target.value); clearError("email"); }}
                className={inputCls(errors.email)}
              />
            </Field>
            <Field label="Téléphone" required error={errors.telephone}>
              <input
                type="tel" placeholder="+225 07 00 00 00 00"
                autoComplete="tel" inputMode="tel"
                value={form.telephone} onChange={(e) => { set("telephone", e.target.value); clearError("telephone"); }}
                className={inputCls(errors.telephone)}
              />
            </Field>
            <Field label="Ville de résidence" required error={errors.ville}>
              <input
                type="text" placeholder="Abidjan"
                value={form.ville} onChange={(e) => { set("ville", e.target.value); clearError("ville"); }}
                className={inputCls(errors.ville)}
              />
            </Field>
          </div>

          <Field label="Disponibilité" required error={errors.disponibilite}>
            <select
              value={form.disponibilite} onChange={(e) => { set("disponibilite", e.target.value); clearError("disponibilite"); }}
              className={inputCls(errors.disponibilite)}
            >
              <option value="">Sélectionnez votre disponibilité</option>
              <option>Immédiate</option>
              <option>Sous 1 mois</option>
              <option>Sous 3 mois</option>
              <option>À définir</option>
            </select>
          </Field>

          <Field label="Profil LinkedIn" error={errors.linkedin}>
            <input
              type="url" placeholder="https://linkedin.com/in/votre-profil"
              autoComplete="url" inputMode="url"
              value={form.linkedin} onChange={(e) => { set("linkedin", e.target.value); clearError("linkedin"); }}
              className={inputCls(errors.linkedin)}
            />
          </Field>

          <button
            type="button" onClick={handleNext}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] transition-colors shadow-md"
          >
            Continuer <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* ════════ ÉTAPE 2 ════════ */}
      {step === 2 && (
        <div className="space-y-5">
          <h2 className="text-lg font-bold text-[#1A2B3C] mb-1">Votre candidature</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Poste visé" required error={errors.poste}>
              <select
                value={form.poste} onChange={(e) => { set("poste", e.target.value); clearError("poste"); }}
                className={inputCls(errors.poste)}
              >
                <option value="">Sélectionnez un poste</option>
                {POSTES.map((p) => <option key={p}>{p}</option>)}
              </select>
            </Field>

            <Field label="Type de contrat" required error={errors.contrat}>
              <select
                value={form.contrat} onChange={(e) => { set("contrat", e.target.value); clearError("contrat"); }}
                className={inputCls(errors.contrat)}
              >
                <option value="">Sélectionnez un type</option>
                <option>CDI</option>
                <option>Freelance / Régie</option>
                <option>Stage</option>
                <option>Alternance</option>
              </select>
            </Field>

            <Field label="Années d'expérience" required error={errors.experience}>
              <select
                value={form.experience} onChange={(e) => { set("experience", e.target.value); clearError("experience"); }}
                className={inputCls(errors.experience)}
              >
                <option value="">Sélectionnez votre niveau</option>
                <option>0 – 2 ans (Junior)</option>
                <option>3 – 5 ans (Confirmé)</option>
                <option>5 – 10 ans (Senior)</option>
                <option>10 ans et + (Expert)</option>
              </select>
            </Field>

            <Field label="Prétentions salariales" error={errors.salaire}>
              <input
                type="text" placeholder="ex : 800 000 XAF / mois"
                value={form.salaire} onChange={(e) => set("salaire", e.target.value)}
                className={inputCls()}
              />
            </Field>
          </div>

          {/* Lettre de motivation */}
          <Field label="Lettre de motivation" required error={errors.motivation}>
            <div className="relative">
              <textarea
                rows={6}
                placeholder={`Présentez-vous, expliquez votre intérêt pour AKILI Labs et en quoi votre profil correspond au poste visé.\n\n(${MOTIVATION_MIN} caractères minimum, ${MOTIVATION_MAX} maximum)`}
                value={form.motivation}
                onChange={(e) => { set("motivation", e.target.value); clearError("motivation"); }}
                className={cn(inputCls(errors.motivation), "resize-none")}
              />
              <span className={cn(
                "absolute bottom-2.5 right-3 text-xs tabular-nums",
                form.motivation.length > MOTIVATION_MAX ? "text-red-500 font-semibold" :
                form.motivation.length >= MOTIVATION_MIN ? "text-green-600" : "text-gray-400"
              )}>
                {form.motivation.length} / {MOTIVATION_MAX}
              </span>
            </div>
          </Field>

          {/* Upload CV */}
          <Field label="CV (PDF, max 5 Mo)" error={errors.cv}>
            <div
              onClick={() => fileRef.current?.click()}
              className={cn(
                "flex items-center gap-3 px-4 py-3 border-2 border-dashed rounded-xl cursor-pointer transition-colors",
                errors.cv ? "border-red-400 bg-red-50" :
                form.cv ? "border-green-400 bg-green-50" :
                "border-[#D9E2EC] hover:border-[#FF5500] hover:bg-[#E8F0FE]"
              )}
            >
              <Upload size={18} className={form.cv ? "text-green-600" : "text-[#c94200]"} />
              <span className={cn("text-sm flex-1 truncate", form.cv ? "text-green-700 font-medium" : "text-gray-500")}>
                {form.cv ? form.cv.name : "Sélectionnez votre CV pour reporter son nom dans l'email"}
              </span>
              {form.cv && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); set("cv", null); if (fileRef.current) fileRef.current.value = ""; }}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X size={15} />
                </button>
              )}
            </div>
            <input
              ref={fileRef} type="file" accept=".pdf,application/pdf"
              onChange={handleFileChange} className="hidden"
            />
          </Field>

          {/* Portfolio & source */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Portfolio / GitHub" error={errors.portfolio}>
              <input
                type="url" placeholder="https://github.com/votre-profil"
                autoComplete="url" inputMode="url"
                value={form.portfolio} onChange={(e) => { set("portfolio", e.target.value); clearError("portfolio"); }}
                className={inputCls(errors.portfolio)}
              />
            </Field>
            <Field label="Comment nous avez-vous connu ?">
              <select
                value={form.source} onChange={(e) => set("source", e.target.value)}
                className={inputCls()}
              >
                <option value="">Sélectionnez une option</option>
                <option>LinkedIn</option>
                <option>Site web AKILI Labs</option>
                <option>Bouche-à-oreille / Réseau</option>
                <option>Forum / Salon emploi</option>
                <option>Autre</option>
              </select>
            </Field>
          </div>

          {/* Résumé de l'étape 1 */}
          <div className="bg-[#E8F0FE] rounded-xl px-5 py-4 text-sm text-[#374151]">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#1A2B3C]">Vos informations</span>
              <button type="button" onClick={() => setStep(1)} className="text-xs text-[#c94200] hover:underline font-medium">
                Modifier
              </button>
            </div>
            <div className="mt-1.5 text-xs text-gray-500 space-y-0.5">
              <div>{form.nom} — {form.email} — {form.telephone}</div>
              <div>{form.ville} · Disponible : {form.disponibilite}</div>
            </div>
          </div>

          {/* Boutons nav */}
          <div className="flex gap-3">
            <button
              type="button" onClick={() => { setStep(1); setErrors({}); }}
              className="flex items-center gap-2 px-5 py-3.5 border border-[#D9E2EC] text-[#374151] font-medium rounded-xl hover:border-[#1A2B3C] hover:text-[#1A2B3C] transition-colors"
            >
              <ArrowLeft size={15} /> Retour
            </button>
            <button
              type="submit" disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] disabled:opacity-60 transition-colors shadow-md"
            >
              {loading ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Envoi en cours…</>
              ) : (
                <>Envoyer ma candidature <ArrowRight size={16} /></>
              )}
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center">
            Votre messagerie préparera un email à <strong>rh@akililabs.com</strong> · Pensez à joindre votre CV PDF
          </p>
        </div>
      )}
    </form>
  );
}
