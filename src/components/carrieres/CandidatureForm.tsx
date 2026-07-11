"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Upload, X, User, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

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
        <span className="text-xs font-semibold text-ink">Étape {step} sur 2</span>
        <span className="text-xs text-gray-500">{step === 1 ? "Informations personnelles" : "Votre candidature"}</span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full w-full origin-left bg-orange rounded-full transition-transform duration-500 ease-out"
          style={{ transform: step === 1 ? "scaleX(0.5)" : "scaleX(1)" }}
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
              step >= n ? "bg-orange text-white" : "bg-gray-200 text-gray-600"
            )}>
              {step > n ? <CheckCircle size={12} /> : n}
            </div>
            <span className={cn("text-xs font-medium", step >= n ? "text-navy" : "text-gray-500")}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ id, label, required, error, children }: {
  id: string; label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-1.5">
        {label} {required && <span className="text-orange-dark">*</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls = (error?: string) => cn(
  "w-full px-4 py-3 border rounded-xl text-sm text-ink focus:outline-none focus:ring-2 focus:border-transparent transition-[box-shadow,border-color] bg-white",
  error ? "border-red-400 focus:ring-red-400" : "border-line focus:ring-orange"
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
    window.location.href = `mailto:rh@akililabs.io?subject=${subject}&body=${body}`;
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

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease }}
          className="flex flex-col items-center justify-center text-center py-14 gap-5"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.1, ease }}
            className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center"
          >
            <CheckCircle size={32} className="text-green-500" />
          </motion.div>
          <h2 className="text-2xl font-bold text-navy">Email de candidature préparé</h2>
          <p className="text-ink max-w-sm">
            Merci <strong>{form.nom.split(" ")[0]}</strong>. Votre messagerie s&apos;ouvre avec les
            informations préremplies. Joignez votre CV PDF, puis envoyez l&apos;email.
          </p>
          <button
            onClick={() => { setSent(false); setStep(1); setForm({ nom:"",email:"",telephone:"",linkedin:"",ville:"",disponibilite:"",poste:posteInitial??"",contrat:"",experience:"",motivation:"",cv:null,portfolio:"",salaire:"",source:"" }); }}
            className="px-5 py-2.5 bg-orange text-white rounded-xl font-medium hover:bg-orange-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97]"
          >
            Préparer une autre candidature
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease }}
          onSubmit={handleSubmit}
          noValidate
        >
      <ProgressBar step={step} />

      <AnimatePresence mode="wait">
      {/* ════════ ÉTAPE 1 ════════ */}
      {step === 1 && (
        <motion.div
          key="step1"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25, ease }}
          className="space-y-5"
        >
          <h2 className="text-lg font-bold text-navy mb-1">Vos informations personnelles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field id="nom" label="Nom complet" required error={errors.nom}>
              <input
                id="nom" type="text" placeholder="Kouamé Jean-Baptiste"
                autoComplete="name" maxLength={100}
                aria-invalid={errors.nom ? true : undefined}
                aria-describedby={errors.nom ? "nom-error" : undefined}
                value={form.nom} onChange={(e) => { set("nom", e.target.value); clearError("nom"); }}
                className={inputCls(errors.nom)}
              />
            </Field>
            <Field id="email" label="Email professionnel" required error={errors.email}>
              <input
                id="email" type="email" placeholder="jean@exemple.com"
                autoComplete="email" inputMode="email" maxLength={254}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
                value={form.email} onChange={(e) => { set("email", e.target.value); clearError("email"); }}
                className={inputCls(errors.email)}
              />
            </Field>
            <Field id="telephone" label="Téléphone" required error={errors.telephone}>
              <input
                id="telephone" type="tel" placeholder="+225 07 00 00 00 00"
                autoComplete="tel" inputMode="tel" maxLength={30}
                aria-invalid={errors.telephone ? true : undefined}
                aria-describedby={errors.telephone ? "telephone-error" : undefined}
                value={form.telephone} onChange={(e) => { set("telephone", e.target.value); clearError("telephone"); }}
                className={inputCls(errors.telephone)}
              />
            </Field>
            <Field id="ville" label="Ville de résidence" required error={errors.ville}>
              <input
                id="ville" type="text" placeholder="Abidjan"
                maxLength={80}
                aria-invalid={errors.ville ? true : undefined}
                aria-describedby={errors.ville ? "ville-error" : undefined}
                value={form.ville} onChange={(e) => { set("ville", e.target.value); clearError("ville"); }}
                className={inputCls(errors.ville)}
              />
            </Field>
          </div>

          <Field id="disponibilite" label="Disponibilité" required error={errors.disponibilite}>
            <select
              id="disponibilite"
              aria-invalid={errors.disponibilite ? true : undefined}
              aria-describedby={errors.disponibilite ? "disponibilite-error" : undefined}
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

          <Field id="linkedin" label="Profil LinkedIn" error={errors.linkedin}>
            <input
              id="linkedin" type="url" placeholder="https://linkedin.com/in/votre-profil"
              autoComplete="url" inputMode="url" maxLength={200}
              aria-invalid={errors.linkedin ? true : undefined}
              aria-describedby={errors.linkedin ? "linkedin-error" : undefined}
              value={form.linkedin} onChange={(e) => { set("linkedin", e.target.value); clearError("linkedin"); }}
              className={inputCls(errors.linkedin)}
            />
          </Field>

          <button
            type="button" onClick={handleNext}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] shadow-md"
          >
            Continuer <ArrowRight size={16} />
          </button>
        </motion.div>
      )}

      {/* ════════ ÉTAPE 2 ════════ */}
      {step === 2 && (
        <motion.div
          key="step2"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25, ease }}
          className="space-y-5"
        >
          <h2 className="text-lg font-bold text-navy mb-1">Votre candidature</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field id="poste" label="Poste visé" required error={errors.poste}>
              <select
                id="poste"
                aria-invalid={errors.poste ? true : undefined}
                aria-describedby={errors.poste ? "poste-error" : undefined}
                value={form.poste} onChange={(e) => { set("poste", e.target.value); clearError("poste"); }}
                className={inputCls(errors.poste)}
              >
                <option value="">Sélectionnez un poste</option>
                {POSTES.map((p) => <option key={p}>{p}</option>)}
              </select>
            </Field>

            <Field id="contrat" label="Type de contrat" required error={errors.contrat}>
              <select
                id="contrat"
                aria-invalid={errors.contrat ? true : undefined}
                aria-describedby={errors.contrat ? "contrat-error" : undefined}
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

            <Field id="experience" label="Années d'expérience" required error={errors.experience}>
              <select
                id="experience"
                aria-invalid={errors.experience ? true : undefined}
                aria-describedby={errors.experience ? "experience-error" : undefined}
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

            <Field id="salaire" label="Prétentions salariales" error={errors.salaire}>
              <input
                id="salaire" type="text" placeholder="ex : 800 000 XAF / mois"
                maxLength={60}
                value={form.salaire} onChange={(e) => set("salaire", e.target.value)}
                className={inputCls()}
              />
            </Field>
          </div>

          {/* Lettre de motivation */}
          <Field id="motivation" label="Lettre de motivation" required error={errors.motivation}>
            <div className="relative">
              <textarea
                id="motivation"
                rows={6}
                maxLength={MOTIVATION_MAX}
                aria-invalid={errors.motivation ? true : undefined}
                aria-describedby={errors.motivation ? "motivation-error" : undefined}
                placeholder={`Présentez-vous, expliquez votre intérêt pour AKILI Labs et en quoi votre profil correspond au poste visé.\n\n(${MOTIVATION_MIN} caractères minimum, ${MOTIVATION_MAX} maximum)`}
                value={form.motivation}
                onChange={(e) => { set("motivation", e.target.value); clearError("motivation"); }}
                className={cn(inputCls(errors.motivation), "resize-none")}
              />
              <span aria-live="polite" className={cn(
                "absolute bottom-2.5 right-3 text-xs tabular-nums",
                form.motivation.length > MOTIVATION_MAX ? "text-red-500 font-semibold" :
                form.motivation.length >= MOTIVATION_MIN ? "text-green-600" : "text-gray-500"
              )}>
                {form.motivation.length} / {MOTIVATION_MAX}
              </span>
            </div>
          </Field>

          {/* Upload CV */}
          <Field id="cv" label="CV (PDF, max 5 Mo)" error={errors.cv}>
            <div
              onClick={() => fileRef.current?.click()}
              className={cn(
                "flex items-center gap-3 px-4 py-3 border-2 border-dashed rounded-xl cursor-pointer transition-colors",
                errors.cv ? "border-red-400 bg-red-50" :
                form.cv ? "border-green-400 bg-green-50" :
                "border-line hover:border-orange hover:bg-blue-light"
              )}
            >
              <Upload size={18} className={form.cv ? "text-green-600" : "text-orange-dark"} />
              <span className={cn("text-sm flex-1 truncate", form.cv ? "text-green-700 font-medium" : "text-gray-500")}>
                {form.cv ? form.cv.name : "Sélectionnez votre CV pour reporter son nom dans l'email"}
              </span>
              {form.cv && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); set("cv", null); if (fileRef.current) fileRef.current.value = ""; }}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                  aria-label="Retirer le fichier sélectionné"
                >
                  <X size={15} />
                </button>
              )}
            </div>
            <input
              ref={fileRef} id="cv" type="file" accept=".pdf,application/pdf"
              aria-invalid={errors.cv ? true : undefined}
              aria-describedby={errors.cv ? "cv-error" : undefined}
              onChange={handleFileChange} className="hidden"
            />
          </Field>

          {/* Portfolio & source */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field id="portfolio" label="Portfolio / GitHub" error={errors.portfolio}>
              <input
                id="portfolio" type="url" placeholder="https://github.com/votre-profil"
                autoComplete="url" inputMode="url" maxLength={200}
                aria-invalid={errors.portfolio ? true : undefined}
                aria-describedby={errors.portfolio ? "portfolio-error" : undefined}
                value={form.portfolio} onChange={(e) => { set("portfolio", e.target.value); clearError("portfolio"); }}
                className={inputCls(errors.portfolio)}
              />
            </Field>
            <Field id="source" label="Comment nous avez-vous connu ?">
              <select
                id="source"
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
          <div className="bg-blue-light rounded-xl px-5 py-4 text-sm text-ink">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-navy">Vos informations</span>
              <button type="button" onClick={() => setStep(1)} className="text-xs text-orange-dark hover:underline font-medium">
                Modifier
              </button>
            </div>
            <div className="mt-1.5 text-xs text-gray-500 space-y-0.5">
              <div className="font-medium text-navy">{form.nom}</div>
              <div>{form.email} · {form.telephone}</div>
              <div>{form.ville} · Disponible : {form.disponibilite}</div>
            </div>
          </div>

          {/* Boutons nav */}
          <div className="flex gap-3">
            <button
              type="button" onClick={() => { setStep(1); setErrors({}); }}
              className="flex items-center gap-2 px-5 py-3.5 border border-line text-ink font-medium rounded-xl hover:border-navy hover:text-navy transition-[color,border-color,transform] duration-150 ease-out active:scale-[0.97]"
            >
              <ArrowLeft size={15} /> Retour
            </button>
            <button
              type="submit" disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover disabled:opacity-60 transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] disabled:active:scale-100 shadow-md"
            >
              {loading ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Envoi en cours…</>
              ) : (
                <>Envoyer ma candidature <ArrowRight size={16} /></>
              )}
            </button>
          </div>
          <p className="text-xs text-gray-500 text-center">
            Votre messagerie préparera un email à <strong>rh@akililabs.io</strong> · Pensez à joindre votre CV PDF
          </p>
        </motion.div>
      )}
      </AnimatePresence>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
