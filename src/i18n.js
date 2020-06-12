import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    legal: {
      rights: "iFit.com. All Rights Reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
    footerLink: {
      about: "About",
      company: "Company",
      contact: "Contact Us",
      careers: "Careers",
      account: "Account",
      login: "Log In",
      createAccount: "Create Account",
      support: "Support",
      help: "Help Center",
      accessibility: "Accessibility",
    },
  },
  es: {
    legal: {
      rights: "iFit.com. Todos Los Derechos Reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Uso",
    },
    footerLink: {
      about: "Acerca de",
      company: "Empresa",
      contact: "Contacta con nosotras",
      careers: "Carreras",
      account: "Cuenta",
      login: "Iniciar sesión",
      createAccount: "Crear una cuenta",
      support: "Apoyo",
      help: "Centro de ayuda",
      accessibility: "Accesibilidad",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
