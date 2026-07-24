"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Upload, X, User, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

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

function ProgressBar({ step, t }: { step: 1 | 2; t: ReturnType<typeof useTranslations> }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-ink">{t("form.progress.stepLabel", { step })}</span>
        <span className="text-xs text-gray-500">{step === 1 ? t("form.progress.step1Title") : t("form.progress.step2Title")}</span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full w-full origin-left bg-orange rounded-full transition-transform duration-500 ease-out"
          style={{ transform: step === 1 ? "scaleX(0.5)" : "scaleX(1)" }}
        />
      </div>
      <div className="flex justify-between mt-2">
        {[
          { n: 1, label: t("form.progress.step1Nav"), Icon: User },
          { n: 2, label: t("form.progress.step2Nav"), Icon: Briefcase },
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
  const t = useTranslations("Careers");
  const [step, setStep] = useState<1 | 2>(1);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const fileRef = useRef<HTMLInputElement>(null);

  const disponibiliteOptions = t.raw("form.step1.disponibiliteOptions") as string[];
  const posteOptions = t.raw("form.step2.posteOptions") as string[];
  const contratOptions = t.raw("form.step2.contratOptions") as string[];
  const experienceOptions = t.raw("form.step2.experienceOptions") as string[];
  const sourceOptions = t.raw("form.step2.sourceOptions") as string[];

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
    if (!form.nom.trim() || form.nom.trim().length < 3) e.nom = t("form.errors.nom");
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = t("form.errors.email");
    if (!form.telephone.trim() || form.telephone.trim().length < 8) e.telephone = t("form.errors.telephone");
    if (!form.ville.trim() || form.ville.trim().length < 2) e.ville = t("form.errors.ville");
    if (!form.disponibilite) e.disponibilite = t("form.errors.disponibilite");
    if (form.linkedin && !form.linkedin.match(/^https?:\/\/.+/)) e.linkedin = t("form.errors.linkedin");
    return e;
  }

  // ── Validation étape 2 ──
  function validateStep2(): Errors {
    const e: Errors = {};
    if (!form.poste) e.poste = t("form.errors.poste");
    if (!form.contrat) e.contrat = t("form.errors.contrat");
    if (!form.experience) e.experience = t("form.errors.experience");
    if (!form.motivation.trim() || form.motivation.length < MOTIVATION_MIN)
      e.motivation = t("form.errors.motivationMin", { min: MOTIVATION_MIN });
    if (form.motivation.length > MOTIVATION_MAX)
      e.motivation = t("form.errors.motivationMax", { max: MOTIVATION_MAX });
    if (form.portfolio && !form.portfolio.match(/^https?:\/\/.+/)) e.portfolio = t("form.errors.portfolio");
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
    const subject = encodeURIComponent(`${t("form.mail.subjectPrefix")} ${form.poste} - ${form.nom}`);
    const body = encodeURIComponent(
      [
        `${t("form.mail.nom")} : ${form.nom}`,
        `${t("form.mail.email")} : ${form.email}`,
        `${t("form.mail.telephone")} : ${form.telephone}`,
        `${t("form.mail.ville")} : ${form.ville}`,
        `${t("form.mail.disponibilite")} : ${form.disponibilite}`,
        `${t("form.mail.linkedin")} : ${form.linkedin || t("form.mail.linkedinEmpty")}`,
        "",
        `${t("form.mail.posteVise")} : ${form.poste}`,
        `${t("form.mail.typeContrat")} : ${form.contrat}`,
        `${t("form.mail.experience")} : ${form.experience}`,
        `${t("form.mail.pretentions")} : ${form.salaire || t("form.mail.pretentionsEmpty")}`,
        `${t("form.mail.portfolio")} : ${form.portfolio || t("form.mail.portfolioEmpty")}`,
        `${t("form.mail.source")} : ${form.source || t("form.mail.sourceEmpty")}`,
        `${t("form.mail.cv")} : ${form.cv?.name || t("form.mail.cvEmpty")}`,
        "",
        t("form.mail.motivation"),
        form.motivation,
        "",
        t("form.mail.footer"),
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
        setErrors((p) => ({ ...p, cv: t("form.errors.cvType") }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((p) => ({ ...p, cv: t("form.errors.cvSize") }));
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
          <h2 className="text-2xl font-bold text-navy">{t("form.success.title")}</h2>
          <p className="text-ink max-w-sm">
            {t.rich("form.success.textRich", {
              name: form.nom.split(" ")[0],
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <button
            onClick={() => { setSent(false); setStep(1); setForm({ nom:"",email:"",telephone:"",linkedin:"",ville:"",disponibilite:"",poste:posteInitial??"",contrat:"",experience:"",motivation:"",cv:null,portfolio:"",salaire:"",source:"" }); }}
            className="px-5 py-2.5 bg-orange text-white rounded-xl font-medium hover:bg-orange-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97]"
          >
            {t("form.success.resetButton")}
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
      <ProgressBar step={step} t={t} />

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
          <h2 className="text-lg font-bold text-navy mb-1">{t("form.step1.heading")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field id="nom" label={t("form.step1.nomLabel")} required error={errors.nom}>
              <input
                id="nom" type="text" placeholder={t("form.step1.nomPlaceholder")}
                autoComplete="name" maxLength={100}
                aria-invalid={errors.nom ? true : undefined}
                aria-describedby={errors.nom ? "nom-error" : undefined}
                value={form.nom} onChange={(e) => { set("nom", e.target.value); clearError("nom"); }}
                className={inputCls(errors.nom)}
              />
            </Field>
            <Field id="email" label={t("form.step1.emailLabel")} required error={errors.email}>
              <input
                id="email" type="email" placeholder={t("form.step1.emailPlaceholder")}
                autoComplete="email" inputMode="email" maxLength={254}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
                value={form.email} onChange={(e) => { set("email", e.target.value); clearError("email"); }}
                className={inputCls(errors.email)}
              />
            </Field>
            <Field id="telephone" label={t("form.step1.telephoneLabel")} required error={errors.telephone}>
              <input
                id="telephone" type="tel" placeholder={t("form.step1.telephonePlaceholder")}
                autoComplete="tel" inputMode="tel" maxLength={30}
                aria-invalid={errors.telephone ? true : undefined}
                aria-describedby={errors.telephone ? "telephone-error" : undefined}
                value={form.telephone} onChange={(e) => { set("telephone", e.target.value); clearError("telephone"); }}
                className={inputCls(errors.telephone)}
              />
            </Field>
            <Field id="ville" label={t("form.step1.villeLabel")} required error={errors.ville}>
              <input
                id="ville" type="text" placeholder={t("form.step1.villePlaceholder")}
                maxLength={80}
                aria-invalid={errors.ville ? true : undefined}
                aria-describedby={errors.ville ? "ville-error" : undefined}
                value={form.ville} onChange={(e) => { set("ville", e.target.value); clearError("ville"); }}
                className={inputCls(errors.ville)}
              />
            </Field>
          </div>

          <Field id="disponibilite" label={t("form.step1.disponibiliteLabel")} required error={errors.disponibilite}>
            <select
              id="disponibilite"
              aria-invalid={errors.disponibilite ? true : undefined}
              aria-describedby={errors.disponibilite ? "disponibilite-error" : undefined}
              value={form.disponibilite} onChange={(e) => { set("disponibilite", e.target.value); clearError("disponibilite"); }}
              className={inputCls(errors.disponibilite)}
            >
              <option value="">{t("form.step1.disponibilitePlaceholder")}</option>
              {disponibiliteOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </Field>

          <Field id="linkedin" label={t("form.step1.linkedinLabel")} error={errors.linkedin}>
            <input
              id="linkedin" type="url" placeholder={t("form.step1.linkedinPlaceholder")}
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
            {t("form.step1.continueButton")} <ArrowRight size={16} />
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
          <h2 className="text-lg font-bold text-navy mb-1">{t("form.step2.heading")}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field id="poste" label={t("form.step2.posteLabel")} required error={errors.poste}>
              <select
                id="poste"
                aria-invalid={errors.poste ? true : undefined}
                aria-describedby={errors.poste ? "poste-error" : undefined}
                value={form.poste} onChange={(e) => { set("poste", e.target.value); clearError("poste"); }}
                className={inputCls(errors.poste)}
              >
                <option value="">{t("form.step2.postePlaceholder")}</option>
                {posteOptions.map((p) => <option key={p}>{p}</option>)}
              </select>
            </Field>

            <Field id="contrat" label={t("form.step2.contratLabel")} required error={errors.contrat}>
              <select
                id="contrat"
                aria-invalid={errors.contrat ? true : undefined}
                aria-describedby={errors.contrat ? "contrat-error" : undefined}
                value={form.contrat} onChange={(e) => { set("contrat", e.target.value); clearError("contrat"); }}
                className={inputCls(errors.contrat)}
              >
                <option value="">{t("form.step2.contratPlaceholder")}</option>
                {contratOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>

            <Field id="experience" label={t("form.step2.experienceLabel")} required error={errors.experience}>
              <select
                id="experience"
                aria-invalid={errors.experience ? true : undefined}
                aria-describedby={errors.experience ? "experience-error" : undefined}
                value={form.experience} onChange={(e) => { set("experience", e.target.value); clearError("experience"); }}
                className={inputCls(errors.experience)}
              >
                <option value="">{t("form.step2.experiencePlaceholder")}</option>
                {experienceOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>

            <Field id="salaire" label={t("form.step2.salaireLabel")} error={errors.salaire}>
              <input
                id="salaire" type="text" placeholder={t("form.step2.salairePlaceholder")}
                maxLength={60}
                value={form.salaire} onChange={(e) => set("salaire", e.target.value)}
                className={inputCls()}
              />
            </Field>
          </div>

          {/* Lettre de motivation */}
          <Field id="motivation" label={t("form.step2.motivationLabel")} required error={errors.motivation}>
            <div className="relative">
              <textarea
                id="motivation"
                rows={6}
                maxLength={MOTIVATION_MAX}
                aria-invalid={errors.motivation ? true : undefined}
                aria-describedby={errors.motivation ? "motivation-error" : undefined}
                placeholder={t("form.step2.motivationPlaceholder", { min: MOTIVATION_MIN, max: MOTIVATION_MAX })}
                value={form.motivation}
                onChange={(e) => { set("motivation", e.target.value); clearError("motivation"); }}
                className={cn(inputCls(errors.motivation), "resize-none")}
              />
              <span aria-live="polite" className={cn(
                "absolute bottom-2.5 right-3 text-xs tabular-nums",
                form.motivation.length > MOTIVATION_MAX ? "text-red-500 font-semibold" :
                form.motivation.length >= MOTIVATION_MIN ? "text-green-600" : "text-gray-500"
              )}>
                {t("form.step2.motivationCounter", { count: form.motivation.length, max: MOTIVATION_MAX })}
              </span>
            </div>
          </Field>

          {/* Upload CV */}
          <Field id="cv" label={t("form.step2.cvLabel")} error={errors.cv}>
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
                {form.cv ? form.cv.name : t("form.step2.cvPlaceholderEmpty")}
              </span>
              {form.cv && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); set("cv", null); if (fileRef.current) fileRef.current.value = ""; }}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                  aria-label={t("form.step2.cvRemoveAriaLabel")}
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
            <Field id="portfolio" label={t("form.step2.portfolioLabel")} error={errors.portfolio}>
              <input
                id="portfolio" type="url" placeholder={t("form.step2.portfolioPlaceholder")}
                autoComplete="url" inputMode="url" maxLength={200}
                aria-invalid={errors.portfolio ? true : undefined}
                aria-describedby={errors.portfolio ? "portfolio-error" : undefined}
                value={form.portfolio} onChange={(e) => { set("portfolio", e.target.value); clearError("portfolio"); }}
                className={inputCls(errors.portfolio)}
              />
            </Field>
            <Field id="source" label={t("form.step2.sourceLabel")}>
              <select
                id="source"
                value={form.source} onChange={(e) => set("source", e.target.value)}
                className={inputCls()}
              >
                <option value="">{t("form.step2.sourcePlaceholder")}</option>
                {sourceOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
          </div>

          {/* Résumé de l'étape 1 */}
          <div className="bg-blue-light rounded-xl px-5 py-4 text-sm text-ink">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-navy">{t("form.step2.summaryTitle")}</span>
              <button type="button" onClick={() => setStep(1)} className="text-xs text-orange-dark hover:underline font-medium">
                {t("form.step2.summaryEdit")}
              </button>
            </div>
            <div className="mt-1.5 text-xs text-gray-500 space-y-0.5">
              <div className="font-medium text-navy">{form.nom}</div>
              <div>{form.email} · {form.telephone}</div>
              <div>{form.ville} · {t("form.step2.summaryAvailable")} {form.disponibilite}</div>
            </div>
          </div>

          {/* Boutons nav */}
          <div className="flex gap-3">
            <button
              type="button" onClick={() => { setStep(1); setErrors({}); }}
              className="flex items-center gap-2 px-5 py-3.5 border border-line text-ink font-medium rounded-xl hover:border-navy hover:text-navy transition-[color,border-color,transform] duration-150 ease-out active:scale-[0.97]"
            >
              <ArrowLeft size={15} /> {t("form.step2.backButton")}
            </button>
            <button
              type="submit" disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover disabled:opacity-60 transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] disabled:active:scale-100 shadow-md"
            >
              {loading ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> {t("form.step2.submitLoading")}</>
              ) : (
                <>{t("form.step2.submitButton")} <ArrowRight size={16} /></>
              )}
            </button>
          </div>
          <p className="text-xs text-gray-500 text-center">
            {t.rich("form.step2.disclaimerRich", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </motion.div>
      )}
      </AnimatePresence>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
