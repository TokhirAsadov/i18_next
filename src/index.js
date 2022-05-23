import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css"
import "flag-icon-css/css/flag-icons.min.css"

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        /*resources: {
            en: {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next"
                }
            },
            ru: {
                translation: {
                    "Welcome to React": "Добро пожаловать в React и react-i18next"
                }
            },
        },*/
        // lng: "en",
        supportedLngs: ['en','ru','uz'],
       fallbackLng: "en",

       detection: {
           order: ['path','htmlTag', 'cookie', 'localStorage', 'sessionStorage', 'navigator',   'subdomain'],
           caches: ['cookie']
       },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
        // react: { useSuspense:false }
    });

/*
function App() {
    const { t } = useTranslation();

    return <h2>{t('welcome_to_react')}</h2>;
}
*/

const loading = (
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Suspense fallback={loading}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Suspense>
);

