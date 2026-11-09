import { l, type Localized } from "@/lib/i18n-content";

export type ArticleBody = { intro: Localized; sections: { title: Localized; text: Localized }[] };

export const articleBodies: Record<string, { intro: Localized; sections: { title: Localized; text: Localized }[] }> = {
  "pourquoi-odoo-en-afrique": {
    intro: {
      fr:
        "Les entreprises d'Afrique de l'Ouest recherchent des ERP capables de couvrir leurs processus clés sans imposer des coûts ou des cycles projet disproportionnés. Odoo répond bien à cet équilibre lorsqu'il est correctement cadré, paramétré et maintenu.",
      en:
        "West African businesses are looking for ERP systems that can cover their core processes without imposing disproportionate costs or project timelines. Odoo strikes this balance well when it is properly scoped, configured, and maintained.",
    },
    sections: [
      {
        title: { fr: "Un périmètre fonctionnel large", en: "A broad functional scope" },
        text: {
          fr:
            "Comptabilité, CRM, achats, stocks, paie, projets et reporting peuvent être déployés progressivement. Cette modularité permet de démarrer sur les processus prioritaires, puis d'étendre la solution sans rupture.",
          en:
            "Accounting, CRM, purchasing, inventory, payroll, projects, and reporting can all be deployed progressively. This modularity makes it possible to start with priority processes and then extend the solution without disruption.",
        },
      },
      {
        title: { fr: "Une adaptation au contexte OHADA", en: "Adapted to the OHADA context" },
        text: {
          fr:
            "La réussite d'un projet ERP dans la zone UEMOA dépend fortement de la prise en compte des exigences fiscales, comptables et sociales locales. AKILI Labs privilégie une approche de cadrage métier avant tout développement spécifique.",
          en:
            "The success of an ERP project in the UEMOA zone depends heavily on accounting for local tax, accounting, and labor requirements. AKILI Labs favors a business-scoping approach before any custom development.",
        },
      },
      {
        title: { fr: "Le point de vigilance", en: "The point of caution" },
        text: {
          fr:
            "Odoo n'est pas une solution magique. La qualité du projet dépend de la gouvernance, de la reprise de données, de la formation et de la conduite du changement. Le choix Community ou Enterprise doit être fait après analyse du besoin réel.",
          en:
            "Odoo is not a magic solution. Project quality depends on governance, data migration, training, and change management. The choice between Community and Enterprise should be made only after analyzing actual needs.",
        },
      },
    ],
  },
  "ia-generative-entreprises-africaines": {
    intro: {
      fr:
        "L'IA générative ouvre des gains concrets pour les organisations africaines : assistance documentaire, automatisation du support, synthèse de dossiers, recherche augmentée et aide à la décision. Le sujet doit toutefois être traité avec méthode.",
      en:
        "Generative AI opens up concrete gains for African organizations: document assistance, support automation, file summarization, augmented search, and decision support. The topic must nonetheless be approached with method.",
    },
    sections: [
      {
        title: { fr: "Commencer par les cas d'usage", en: "Start with use cases" },
        text: {
          fr:
            "Les meilleurs projets IA ne partent pas d'un modèle, mais d'un problème métier mesurable : réduction du délai de traitement, fiabilisation d'une analyse, assistance aux équipes ou amélioration de l'expérience client.",
          en:
            "The best AI projects do not start from a model but from a measurable business problem: reducing processing time, improving the reliability of an analysis, assisting teams, or enhancing the customer experience.",
        },
      },
      {
        title: { fr: "Sécuriser les données", en: "Securing the data" },
        text: {
          fr:
            "Les données clients, RH, financières ou contractuelles nécessitent une architecture maîtrisée : cloisonnement, journalisation, contrôle des accès et choix clair entre API externe, modèle privé ou déploiement hybride.",
          en:
            "Customer, HR, financial, or contractual data requires a well-controlled architecture: segregation, logging, access control, and a clear choice between an external API, a private model, or a hybrid deployment.",
        },
      },
      {
        title: { fr: "Industrialiser après le pilote", en: "Industrializing after the pilot" },
        text: {
          fr:
            "Un prototype IA peut être rapide à construire. La valeur vient ensuite de l'intégration au SI, du monitoring, des tests de qualité et de la gouvernance des prompts, documents et droits utilisateurs.",
          en:
            "An AI prototype can be built quickly. The real value then comes from integration with the information system, monitoring, quality testing, and governance of prompts, documents, and user rights.",
        },
      },
    ],
  },
  "cicd-gitlab-guide-pratique": {
    intro: {
      fr:
        "Une chaîne CI/CD bien conçue réduit les erreurs de livraison, améliore la qualité et accélère les mises en production. Pour les équipes DevOps, GitLab CI est souvent un bon socle lorsqu'il est relié à une vraie discipline de tests et de revue.",
      en:
        "A well-designed CI/CD chain reduces delivery errors, improves quality, and speeds up production releases. For DevOps teams, GitLab CI is often a solid foundation when paired with genuine testing and review discipline.",
    },
    sections: [
      {
        title: { fr: "Construire un pipeline simple et lisible", en: "Building a simple, readable pipeline" },
        text: {
          fr:
            "Un bon pipeline commence par les étapes essentielles : lint, tests, build, scan de sécurité, packaging et déploiement. Chaque étape doit produire des logs compréhensibles et bloquer la livraison en cas d'échec critique.",
          en:
            "A good pipeline starts with the essential stages: lint, tests, build, security scan, packaging, and deployment. Each stage should produce understandable logs and block delivery in the event of a critical failure.",
        },
      },
      {
        title: { fr: "Intégrer la sécurité tôt", en: "Integrating security early" },
        text: {
          fr:
            "Les scans SAST, dépendances, conteneurs et secrets doivent être exécutés avant la mise en production. Cette approche DevSecOps réduit les corrections tardives et renforce la confiance des clients.",
          en:
            "SAST, dependency, container, and secrets scans should run before going to production. This DevSecOps approach reduces late-stage fixes and strengthens client confidence.",
        },
      },
      {
        title: { fr: "Mesurer pour améliorer", en: "Measuring to improve" },
        text: {
          fr:
            "Les indicateurs utiles sont le taux de succès des builds, le temps moyen de pipeline, le taux de rollback, le lead time et le MTTR. Ils permettent de piloter l'amélioration continue au lieu de subir les incidents.",
          en:
            "Useful metrics include build success rate, average pipeline duration, rollback rate, lead time, and MTTR. They make it possible to drive continuous improvement instead of just reacting to incidents.",
        },
      },
    ],
  },
};

const WORDS_PER_MINUTE = 200;

/** Durée de lecture calculée sur le texte réel de l'article (≈ 200 mots/min, minimum 1 min). */
export function readingTime(slug: string, locale: string): string {
  const article = articleBodies[slug];
  if (!article) return "1 min";
  const text = [
    l(article.intro, locale),
    ...article.sections.flatMap((section) => [l(section.title, locale), l(section.text, locale)]),
  ].join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min`;
}
