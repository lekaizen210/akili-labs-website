import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, BookOpen, Cpu, Shield, Building2 } from "lucide-react";
import FaqAccordion, { type FaqItem } from "@/components/faq/FaqAccordion";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";

const BASE_URL = "https://akililabs.com";

export const metadata: Metadata = {
  title: "FAQ — ERP OHADA, IA, DevSecOps & Transformation Digitale",
  description:
    "Réponses à toutes vos questions sur l'intégration ERP Odoo en zone UEMOA, la conformité OHADA, l'IA générative pour entreprises africaines, le DevSecOps et la transformation digitale.",
  alternates: { canonical: `${BASE_URL}/faq` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/faq`,
    title: "FAQ AKILI Labs — ERP OHADA, IA & DevSecOps en Afrique de l'Ouest",
    description:
      "Toutes nos réponses sur l'ERP Odoo, la conformité OHADA, l'IA générative, le DevSecOps et la transformation digitale en zone UEMOA.",
    images: [{ url: "/logo-akili.png", width: 1600, height: 893, alt: "FAQ AKILI Labs" }],
  },
};

const faqs: FaqItem[] = [
  // ── ERP & OHADA ───────────────────────────────────────────────────
  {
    category: "ERP & OHADA",
    question: "Qu'est-ce qu'un ERP conforme OHADA ?",
    answer:
      "Un ERP conforme OHADA est un système de gestion intégré qui respecte le plan comptable OHADA, en vigueur dans 17 États africains dont la Côte d'Ivoire et le Sénégal. Il automatise la comptabilité, les états financiers SYSCOHADA révisé et la TVA locale, éliminant les retraitements manuels souvent sources d'erreurs.",
  },
  {
    category: "ERP & OHADA",
    question: "Pourquoi choisir Odoo pour une entreprise en Afrique de l'Ouest ?",
    answer:
      "Odoo est l'ERP le plus adopté en zone UEMOA grâce à sa modularité, son coût total de possession compétitif et sa capacité d'adaptation aux spécificités locales (OHADA, droit du travail ivoirien, TVA UEMOA). Avec plus de 28 millions d'utilisateurs dans le monde, son écosystème de partenaires locaux certifiés garantit un support durable.",
  },
  {
    category: "ERP & OHADA",
    question: "Combien de temps dure un projet d'intégration ERP Odoo ?",
    answer:
      "Un premier déploiement modulaire (comptabilité + stocks) prend 3 à 6 mois. Un périmètre complet couvrant RH, paie OHADA, CRM et achats nécessite 6 à 12 mois, formation incluse. La durée dépend de la qualité des données sources, de la disponibilité des équipes métier et du niveau de personnalisation requis.",
  },
  {
    category: "ERP & OHADA",
    question: "Quelle est la différence entre Odoo Community et Odoo Enterprise ?",
    answer:
      "Odoo Community est open-source et gratuit. Odoo Enterprise ajoute des modules avancés (paie, e-signature, consolidation multi-sociétés), un support officiel Odoo S.A., des mises à jour de sécurité garanties et des applications mobiles natives. AKILI Labs recommande Enterprise pour les organisations de plus de 20 utilisateurs ou avec des besoins RH et paie OHADA complexes.",
  },
  {
    category: "ERP & OHADA",
    question: "Comment se déroule la migration des données depuis un ancien système ?",
    answer:
      "La migration suit 4 étapes : audit et cartographie des données sources, nettoyage et transformation au format Odoo, chargement en environnement de test avec validation métier, puis bascule en production. AKILI Labs privilégie les imports progressifs et les tests de cohérence croisés pour éviter les pertes ou les doublons.",
  },

  // ── Transformation Digitale ────────────────────────────────────────
  {
    category: "Transformation Digitale",
    question: "Par où commencer sa transformation digitale ?",
    answer:
      "La transformation digitale commence par un audit de l'existant : cartographie des processus, identification des points de friction et des gains potentiels. AKILI Labs réalise un Schéma Directeur Informatique (SDI) qui priorise les chantiers selon leur impact métier et leur faisabilité, en tenant compte des contraintes budgétaires UEMOA.",
  },
  {
    category: "Transformation Digitale",
    question: "Qu'est-ce qu'une GED (Gestion Électronique des Documents) ?",
    answer:
      "Une GED numérise, classe, indexe et contrôle l'accès aux documents d'entreprise. Elle élimine les archives papier, accélère la recherche documentaire et sécurise les données. En zone UEMOA, elle est particulièrement utile pour les dossiers clients, RH et comptables soumis à des obligations légales de conservation.",
  },
  {
    category: "Transformation Digitale",
    question: "Comment choisir un partenaire IT en Afrique de l'Ouest ?",
    answer:
      "Un bon partenaire IT en Afrique de l'Ouest doit maîtriser le contexte local : réglementations OHADA, connectivité variable, contraintes budgétaires en XAF. Vérifiez les références dans votre secteur, la capacité de support post-déploiement, la présence locale pour les interventions sur site et les certifications techniques de l'équipe.",
  },
  {
    category: "Transformation Digitale",
    question: "Qu'est-ce qu'un BPM et à quoi sert-il ?",
    answer:
      "Le BPM (Business Process Management) modélise, automatise et optimise les processus métier. Il cartographie les flux de travail, identifie les goulots d'étranglement et implémente des workflows automatisés : approbations, notifications, escalades. Résultat : des processus plus rapides, traçables et moins dépendants des personnes clés.",
  },

  // ── Intelligence Artificielle ──────────────────────────────────────
  {
    category: "Intelligence Artificielle",
    question: "Comment l'IA peut-elle aider mon entreprise en Afrique ?",
    answer:
      "L'IA crée de la valeur sur des cas concrets : analyse automatique de dossiers de crédit (−94 % de délai observé chez une banque UEMOA cliente), chatbots de support en français et langues locales, OCR de documents, prévision de stocks et détection d'anomalies comptables. Le point de départ est toujours un problème métier mesurable.",
  },
  {
    category: "Intelligence Artificielle",
    question: "Qu'est-ce qu'un LLM privé et pourquoi l'utiliser ?",
    answer:
      "Un LLM (Large Language Model) privé est un modèle d'IA déployé sur votre infrastructure ou cloud dédié, sans partage de données avec des tiers. Il garantit la confidentialité des données clients, RH et financières. AKILI Labs déploie des solutions basées sur Ollama, LLaMA ou Mistral, hébergées dans votre environnement maîtrisé.",
  },
  {
    category: "Intelligence Artificielle",
    question: "Qu'est-ce que le RAG (Retrieval-Augmented Generation) ?",
    answer:
      "Le RAG connecte un modèle IA à vos propres données : documents internes, base de connaissance, ERP. L'IA recherche d'abord dans vos sources, puis génère une réponse précise et traçable, sans hallucination. C'est la méthode recommandée pour déployer un assistant documentaire ou un chatbot métier fiable sur des données privées.",
  },
  {
    category: "Intelligence Artificielle",
    question: "L'IA générative est-elle sécurisée pour les données d'entreprise ?",
    answer:
      "L'IA générative est sécurisée si elle est correctement architecturée. AKILI Labs préconise des modèles déployés en local ou dans un VPC dédié, avec cloisonnement par client, journalisation des requêtes et contrôle d'accès granulaire. Les API cloud tierces (ChatGPT, Gemini) ne sont pas recommandées pour les données sensibles sans analyse de risque préalable.",
  },

  // ── DevSecOps ─────────────────────────────────────────────────────
  {
    category: "DevSecOps",
    question: "Qu'est-ce que le DevSecOps ?",
    answer:
      "Le DevSecOps intègre la sécurité à chaque étape du cycle de développement logiciel : conception, code, tests, déploiement, production. Contrairement à l'approche traditionnelle où la sécurité intervient en fin de projet, le DevSecOps détecte les vulnérabilités tôt, réduit les coûts de correction et renforce la confiance des clients et partenaires.",
  },
  {
    category: "DevSecOps",
    question: "Pourquoi conteneuriser mes applications avec Docker ?",
    answer:
      "Docker encapsule une application avec toutes ses dépendances dans un conteneur portable. Résultat : environnements identiques du développement à la production, déploiements reproductibles, isolation des services et montée en charge facilitée. Associé à Kubernetes, il permet de gérer des dizaines de services de façon automatisée, avec 10× moins de temps de déploiement.",
  },
  {
    category: "DevSecOps",
    question: "Qu'est-ce que l'Infrastructure as Code (IaC) ?",
    answer:
      "L'IaC consiste à décrire et provisionner votre infrastructure (serveurs, réseaux, bases de données) via des fichiers de code versionné (Terraform, Ansible). Vos environnements deviennent reproductibles, auditables et déployables en minutes. DEV, QA et PROD sont toujours alignés, éliminant les bugs liés aux différences de configuration.",
  },
  {
    category: "DevSecOps",
    question: "Quelle est la différence entre CI et CD ?",
    answer:
      "La CI (Intégration Continue) automatise tests et compilation à chaque commit de code : les erreurs sont détectées en moins de 10 minutes. La CD (Déploiement Continu) pousse automatiquement le code validé vers les environnements cibles. Ensemble, CI/CD réduisent les délais de livraison de semaines à heures tout en maintenant la qualité.",
  },

  // ── AKILI Labs ────────────────────────────────────────────────────
  {
    category: "AKILI Labs",
    question: "Dans quels pays AKILI Labs intervient-il ?",
    answer:
      "AKILI Labs intervient dans les 8 pays de la zone UEMOA : Côte d'Ivoire, Sénégal, Mali, Burkina Faso, Niger, Togo, Bénin et Guinée-Bissau. Notre siège est à Abidjan. Pour les projets à distance, nous opérons sur l'ensemble de la zone CEDEAO et accompagnons également les organisations françaises avec des filiales en Afrique de l'Ouest.",
  },
  {
    category: "AKILI Labs",
    question: "Comment démarrer un projet avec AKILI Labs ?",
    answer:
      "Trois étapes : (1) Contact par email ou formulaire en ligne, réponse sous 24h ouvrées. (2) Consultation de cadrage gratuite : nous analysons votre besoin, contexte et contraintes budgétaires. (3) Proposition technique et financière sous 5 jours ouvrés. Aucun engagement de votre côté avant validation de la proposition.",
  },
  {
    category: "AKILI Labs",
    question: "Proposez-vous de la TMA (maintenance applicative) ?",
    answer:
      "Oui. AKILI Labs assure la TMA de vos systèmes avec SLA contractuels : incidents P1 résolus sous 4h, P2 sous 24h. Nos contrats TMA incluent surveillance proactive, mises à jour de sécurité, correctifs Odoo, évolutions mineures et un chef de projet dédié. Taux de respect des SLA P1 : 100 % sur les 12 derniers mois.",
  },
  {
    category: "AKILI Labs",
    question: "Quelle est votre approche tarifaire ?",
    answer:
      "Nos prestations sont proposées en régie (taux journalier) ou au forfait. Pour les projets ERP, nous proposons des plans CAPEX (investissement initial) ou OPEX (abonnement mensuel) adaptés aux contraintes de trésorerie des organisations UEMOA. La consultation initiale est gratuite et sans engagement. Devis sous 5 jours ouvrés.",
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  "ERP & OHADA":               <BookOpen size={16} aria-hidden="true" />,
  "Transformation Digitale":   <Building2 size={16} aria-hidden="true" />,
  "Intelligence Artificielle": <Cpu size={16} aria-hidden="true" />,
  "DevSecOps":                 <Shield size={16} aria-hidden="true" />,
  "AKILI Labs":                <MessageCircle size={16} aria-hidden="true" />,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/faq`,
  name: "FAQ AKILI Labs — ERP OHADA, IA & DevSecOps",
  description: "Questions fréquentes sur l'intégration ERP Odoo, la conformité OHADA, l'IA générative et le DevSecOps en Afrique de l'Ouest.",
  url: `${BASE_URL}/faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${BASE_URL}/faq` },
  ],
};

const categoryStats = [
  { label: "ERP & OHADA",               count: faqs.filter((f) => f.category === "ERP & OHADA").length,               icon: <BookOpen size={18} /> },
  { label: "Transformation Digitale",   count: faqs.filter((f) => f.category === "Transformation Digitale").length,   icon: <Building2 size={18} /> },
  { label: "Intelligence Artificielle", count: faqs.filter((f) => f.category === "Intelligence Artificielle").length, icon: <Cpu size={18} /> },
  { label: "DevSecOps",                 count: faqs.filter((f) => f.category === "DevSecOps").length,                 icon: <Shield size={18} /> },
  { label: "AKILI Labs",                count: faqs.filter((f) => f.category === "AKILI Labs").length,                icon: <MessageCircle size={18} /> },
];

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <PageHero
        badge="Base de connaissance"
        title={
          <>
            <span className="text-white">Questions </span>
            <HeroHighlight>fréquentes</HeroHighlight>
          </>
        }
        subtitle={
          <>
            Toutes vos questions sur l&apos;ERP Odoo, la conformité OHADA, l&apos;IA générative,
            le DevSecOps et la transformation digitale en Afrique de l&apos;Ouest.
          </>
        }
      >
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categoryStats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/8 border border-white/10 text-white/70 text-xs font-medium"
            >
              <span className="text-[#FF5500]" aria-hidden="true">{s.icon}</span>
              <span>{s.label}</span>
              <span className="text-white/40">·</span>
              <span className="font-bold text-white">{s.count}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* ── Contenu FAQ ───────────────────────────────── */}
      <section className="py-20 bg-[#E8F0FE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── CTA — Question sans réponse ? ─────────────── */}
      <section className="py-20 bg-white border-t border-[#D9E2EC]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E8F0FE] mb-6" aria-hidden="true">
            <MessageCircle size={24} className="text-[#1A2B3C]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-3">
            Votre question n&apos;est pas listée ?
          </h2>
          <p className="text-[#374151] mb-8 leading-relaxed">
            Nos experts répondent sous <strong>24h ouvrées</strong>.{" "}
            La consultation initiale est entièrement gratuite et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] shadow-lg shadow-orange-900/20"
            >
              Poser une question
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-7 py-4 border border-[#D9E2EC] text-[#374151] font-semibold rounded-xl hover:border-[#1A2B3C] hover:text-[#1A2B3C] transition-colors"
            >
              <BookOpen size={17} aria-hidden="true" />
              Lire nos articles
            </Link>
          </div>

          {/* Catégories rapides */}
          <div className="mt-12 pt-8 border-t border-[#D9E2EC]">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Accès direct par thème</p>
            <div className="flex flex-wrap justify-center gap-2">
              {Object.entries(categoryIcons).map(([label, icon]) => (
                <Link
                  key={label}
                  href={`/expertises/${
                    label === "ERP & OHADA" ? "erp"
                    : label === "Intelligence Artificielle" ? "intelligence-artificielle"
                    : label === "DevSecOps" ? "devsecops"
                    : label === "Transformation Digitale" ? "transformation-digitale"
                    : "erp"
                  }`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#374151] bg-[#E8F0FE] rounded-lg border border-[#D9E2EC] hover:border-[#1A2B3C] hover:text-[#1A2B3C] transition-colors"
                >
                  <span className="text-[#c94200]" aria-hidden="true">{icon}</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
