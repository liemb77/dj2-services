"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "fr";

const translations = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Request a Consultation",
    },
    hero: {
      eyebrow: "Procurement · Contract Management · Logistics · Claim Settlement",
      headline: "Specialist Procurement Management for Complex Mining & Industrial Projects",
      subheading:
        "25+ years of procurement services on major construction projects. English and French consulting for part-time and full-time engagements.",
      cta1: "Start a Project",
      cta2: "View Services →",
    },
    stats: {
      years: "Years of Experience",
      project: "Largest Project Managed",
      delivered: "Projects Delivered",
      sectors: "Sectors",
    },
    services: {
      eyebrow: "What We Do",
      heading: "Core Service Areas",
      cards: [
        {
          title: "Procurement",
          description:
            "Strategic sourcing and purchase of specialized industrial equipment. End-to-end supplier management and negotiation.",
        },
        {
          title: "Contract Management",
          description:
            "Drafting, reviewing, and managing contracts across complex multi-party projects. Risk mitigation built in.",
        },
        {
          title: "Logistics Coordination",
          description:
            "Operational planning and coordination to keep large-scale projects on time and within scope.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      heading: "Engineering Background. Executive Results.",
      paragraphs: [
        "Diane holds a degree in Industrial Engineering from Concordia University and has spent over 25 years working at the intersection of procurement, contract management, and large-scale industrial logistics.",
        "Throughout her career, she has overseen projects reaching up to $4 billion in total value — coordinating multi-party contracts, managing supplier relationships, and ensuring operational precision at every stage.",
        "Diane works directly with clients as a hands-on consultant, available on a part-time or full-time basis. She delivers in both English and French, serving clients across Canada and beyond.",
      ],
      credentials: [
        "Industrial Engineering — Concordia University",
        "25+ Years Industry Experience",
        "Bilingual — English & French",
        "Available Part-Time or Full-Time",
      ],
      tag: "Diane — Principal Consultant",
    },
    contact: {
      eyebrow: "Get in Touch",
      heading: "Let's Discuss Your Project",
      subheading:
        "Fill out the form and Diane will follow up to determine if your project is a fit. Available Monday to Friday, 8:00 AM – 5:00 PM.",
      labels: {
        email: "Email",
        phone: "Phone",
        location: "Location",
        hours: "Hours",
      },
      values: {
        location: "Remote — Québec, Canada",
        hours: "Mon–Fri, 8:00 AM – 5:00 PM (No weekends, no holidays)",
      },
      form: {
        fullName: "Full Name",
        companyName: "Company Name",
        email: "Email Address",
        phone: "Phone Number",
        projectType: "Project Type",
        engagementType: "Engagement Type",
        projectDescription: "Project Description",
        submit: "Send Inquiry",
        note: "This form is for project inquiries only — not for booking a call directly.",
        placeholders: {
          fullName: "Jane Smith",
          companyName: "Acme Corp",
          email: "jane@company.com",
          phone: "514-000-0000",
          projectDescription:
            "Briefly describe your project, timeline, and any key requirements...",
          selectType: "Select type",
        },
        projectTypes: [
          { value: "procurement", label: "Procurement" },
          { value: "contract", label: "Contract Management" },
          { value: "logistics", label: "Logistics" },
          { value: "other", label: "Other" },
        ],
        engagementTypes: [
          { value: "part-time", label: "Part-Time" },
          { value: "full-time", label: "Full-Time" },
        ],
      },
      success: {
        heading: "Inquiry Received",
        body: "Thank you for reaching out. Diane will review your inquiry and follow up within 1–2 business days.",
        reset: "Submit another inquiry",
      },
      error: {
        body: "Something went wrong sending your inquiry. Please try again, or email directly at diane.derome@gmail.com.",
      },
      submitting: "Sending...",
    },
    footer: {
      rights: "All rights reserved",
    },
  },

  fr: {
    nav: {
      services: "Services",
      about: "À propos",
      contact: "Contact",
      cta: "Demander une consultation",
    },
    hero: {
      eyebrow:
        "Approvisionnement · Gestion de contrats · Logistique · Règlement de réclamations",
      headline:
        "Gestion spécialisée de l'approvisionnement pour des projets miniers et industriels complexes",
      subheading:
        "Plus de 25 ans de services d'approvisionnement sur de grands projets de construction. Conseil en anglais et en français pour des mandats à temps partiel et à temps plein.",
      cta1: "Démarrer un projet",
      cta2: "Voir les services →",
    },
    stats: {
      years: "Années d'expérience",
      project: "Plus grand projet géré",
      delivered: "Projets réalisés",
      sectors: "Secteurs",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      heading: "Domaines de service principaux",
      cards: [
        {
          title: "Approvisionnement",
          description:
            "Approvisionnement stratégique et achat d'équipements industriels spécialisés. Gestion des fournisseurs et négociation de bout en bout.",
        },
        {
          title: "Gestion de contrats",
          description:
            "Rédaction, révision et gestion de contrats dans le cadre de projets multi-parties complexes. Atténuation des risques intégrée.",
        },
        {
          title: "Coordination logistique",
          description:
            "Planification opérationnelle et coordination pour maintenir les grands projets dans les délais et dans les limites du périmètre.",
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      heading: "Formation en ingénierie. Résultats de direction.",
      paragraphs: [
        "Diane est diplômée en génie industriel de l'Université Concordia et a consacré plus de 25 ans à l'intersection de l'approvisionnement, de la gestion de contrats et de la logistique industrielle à grande échelle.",
        "Au cours de sa carrière, elle a supervisé des projets atteignant jusqu'à 4 milliards de dollars en valeur totale — coordonnant des contrats multi-parties, gérant les relations fournisseurs et assurant une précision opérationnelle à chaque étape.",
        "Diane travaille directement avec ses clients en tant que consultante terrain, disponible à temps partiel ou à temps plein. Elle intervient en anglais et en français, au service de clients partout au Canada et à l'international.",
      ],
      credentials: [
        "Génie industriel — Université Concordia",
        "Plus de 25 ans d'expérience",
        "Bilingue — Anglais et français",
        "Disponible à temps partiel ou à temps plein",
      ],
      tag: "Diane — Consultante principale",
    },
    contact: {
      eyebrow: "Nous contacter",
      heading: "Discutons de votre projet",
      subheading:
        "Remplissez le formulaire et Diane vous contactera pour évaluer si votre projet correspond à son expertise. Disponible du lundi au vendredi, de 8 h à 17 h.",
      labels: {
        email: "Courriel",
        phone: "Téléphone",
        location: "Emplacement",
        hours: "Heures",
      },
      values: {
        location: "À distance — Québec, Canada",
        hours: "Lun–Ven, 8 h – 17 h (Pas de week-end ni de jours fériés)",
      },
      form: {
        fullName: "Nom complet",
        companyName: "Nom de l'entreprise",
        email: "Adresse courriel",
        phone: "Numéro de téléphone",
        projectType: "Type de projet",
        engagementType: "Type de mandat",
        projectDescription: "Description du projet",
        submit: "Envoyer la demande",
        note: "Ce formulaire est destiné aux demandes de projet uniquement — pas pour réserver un appel directement.",
        placeholders: {
          fullName: "Jean Dupont",
          companyName: "Acme Corp",
          email: "jean@entreprise.com",
          phone: "514-000-0000",
          projectDescription:
            "Décrivez brièvement votre projet, le calendrier et les exigences clés...",
          selectType: "Sélectionner",
        },
        projectTypes: [
          { value: "procurement", label: "Approvisionnement" },
          { value: "contract", label: "Gestion de contrats" },
          { value: "logistics", label: "Logistique" },
          { value: "other", label: "Autre" },
        ],
        engagementTypes: [
          { value: "part-time", label: "Temps partiel" },
          { value: "full-time", label: "Temps plein" },
        ],
      },
      success: {
        heading: "Demande reçue",
        body: "Merci de nous avoir contactés. Diane examinera votre demande et vous répondra dans un délai de 1 à 2 jours ouvrables.",
        reset: "Soumettre une autre demande",
      },
      error: {
        body: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer ou écrire directement à diane.derome@gmail.com.",
      },
      submitting: "Envoi en cours...",
    },
    footer: {
      rights: "Tous droits réservés",
    },
  },
} as const;

export type Translations = typeof translations.en;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
