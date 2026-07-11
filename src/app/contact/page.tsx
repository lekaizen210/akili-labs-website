"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", subject: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(`[Site web] ${form.subject}`);
    const body = encodeURIComponent(
      [
        `Nom : ${form.name}`,
        `Société : ${form.company || "Non renseignée"}`,
        `Email : ${form.email}`,
        `Téléphone : ${form.phone || "Non renseigné"}`,
        `Objet : ${form.subject}`,
        "",
        "Message :",
        form.message,
      ].join("\n")
    );
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSent(true);
    // Ouvre le client mail après avoir affiché la confirmation : si l'environnement
    // n'a pas de gestionnaire mailto: configuré, l'utilisateur voit quand même le
    // message de confirmation avec l'adresse à contacter manuellement.
    window.location.href = `mailto:contact@akililabs.io?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero
        badge="Parlons de votre projet"
        title={
          <>
            <HeroHighlight>Contactez</HeroHighlight>
            <span className="text-white">-nous</span>
          </>
        }
        subtitle="Notre équipe répond dans les 24h ouvrées. La consultation initiale est offerte."
      />

      {/* Main */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#E8F0FE] rounded-2xl p-7">
              <h2 className="text-lg font-bold text-[#1A2B3C] mb-5">Nos coordonnées</h2>
              <div className="space-y-4 text-sm text-[#374151]">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#FF5500] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-[#1A2B3C]">Siège social</div>
                    <div>Abidjan, Côte d&apos;Ivoire<br />Zone UEMOA</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-[#FF5500] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-[#1A2B3C]">Email</div>
                    <a href="mailto:contact@akililabs.io" className="text-[#c94200] hover:underline">
                      contact@akililabs.io
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-[#FF5500] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-[#1A2B3C]">Téléphone</div>
                    <span>+225 07 00 00 00 00</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-[#FF5500] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-[#1A2B3C]">Disponibilité</div>
                    <div>Lun–Ven : 08h00–18h00 GMT</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A2B3C] rounded-2xl p-7 text-white">
              <h3 className="font-bold mb-2">Réponse rapide garantie</h3>
              <p className="text-sm text-white/70 mb-4">
                Nos experts répondent dans les <strong className="text-[#FF5500]">24h ouvrées</strong>.
                La consultation initiale est entièrement gratuite.
              </p>
              <div className="flex flex-col gap-2 text-xs text-white/60">
                <span>✓ Consultation initiale offerte</span>
                <span>✓ Confidentialité garantie</span>
                <span>✓ Experts certifiés</span>
                <span>✓ Devis sous 48h</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-5 py-16">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A2B3C]">Email préparé</h2>
                <p className="text-[#374151] max-w-sm">
                  Votre messagerie s&apos;ouvre avec un message prérempli. Vérifiez-le puis envoyez-le
                  à contact@akililabs.io.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="px-5 py-2.5 bg-[#FF5500] text-white rounded-lg font-medium hover:bg-[#e04d00] transition-[background-color,transform] duration-150 ease-out active:scale-[0.97]"
                >
                  Préparer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-[#1A2B3C] mb-6">Parlez-nous de votre projet</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Nom complet *", type: "text", required: true, autoComplete: "name", maxLength: 100 },
                    { name: "company", label: "Société", type: "text", required: false, autoComplete: "organization", maxLength: 100 },
                    { name: "email", label: "Email professionnel *", type: "email", required: true, autoComplete: "email", inputMode: "email" as const, maxLength: 254 },
                    { name: "phone", label: "Téléphone", type: "tel", required: false, autoComplete: "tel", inputMode: "tel" as const, maxLength: 30 },
                  ].map((f) => (
                    <div key={f.name}>
                      <label htmlFor={f.name} className="block text-sm font-medium text-[#374151] mb-1.5">{f.label}</label>
                      <input
                        id={f.name}
                        type={f.type}
                        name={f.name}
                        required={f.required}
                        autoComplete={f.autoComplete}
                        inputMode={f.inputMode}
                        maxLength={f.maxLength}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#D9E2EC] rounded-xl text-sm text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#FF5500] focus:border-transparent transition-[box-shadow,border-color] bg-white"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#374151] mb-1.5">Objet *</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D9E2EC] rounded-xl text-sm text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#FF5500] focus:border-transparent transition-[box-shadow,border-color] bg-white"
                  >
                    <option value="">Sélectionnez un objet</option>
                    <option>Projet ERP / Odoo</option>
                    <option>Intelligence Artificielle</option>
                    <option>DevSecOps / Cloud</option>
                    <option>Développement sur mesure</option>
                    <option>Transformation Digitale</option>
                    <option>Business Intelligence</option>
                    <option>Demande de partenariat</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-1.5">Votre message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={2000}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez brièvement votre besoin, votre secteur d'activité et vos enjeux..."
                    className="w-full px-4 py-3 border border-[#D9E2EC] rounded-xl text-sm text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#FF5500] focus:border-transparent transition-[box-shadow,border-color] resize-none bg-white"
                  />
                  <p className="mt-1 text-xs text-gray-500 text-right tabular-nums">{form.message.length} / 2000</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-7 py-4 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] disabled:opacity-60 transition-[background-color,box-shadow,transform] duration-200 ease-out shadow-md hover:shadow-lg active:scale-[0.97] disabled:active:scale-100"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Envoyer le message
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-500">
                  En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
