import React from "react";
import { Check, Info } from "lucide-react"; // Import Lucide icons
import TextGrey from "./TextGrey";

const fs = [
  "Nombre d'Utilisateurs: ",
  "Gestion des Prospect: ",
  "Base de Donnée: ",
  "Tableau de Bord: ",
  "Support Client: ",
  "Rapports: ",
  "Notifications en Temps Réel: ",
  "Formation et Onboarding: ",
  "Contrôle Administratif: ",
];

const plans = [
  {
    name: "Croissance",
    features: [
      "Jusqu'à 5",
      "Basique",
      "Centralisée",
      "Simplifiée",
      "Basique (Email)",
      "Standards",
      "Non Inclus",
      "Non Inclus",
      "Basique",
    ],
    description: "Small businesses and startups looking to gain data insights",
  },
  {
    name: "Expansion",
    features: [
      "Nombre d'Utilisateurs: 5 à 10",
      "Gestion des Prospect: Avancée",
      "Base de Donnée: Avancée",
      "Tableau de Bord: ersonnalisable",
      "Support Client: Prioritaire (24h)",
      "Rapports: Avancés",
      "Notifications en Temps Réel: Inclus",
      "Formation et Onboarding: Non Inclus",
      "Contrôle Administratif: Avancé",
    ],
    description:
      "Growing businesses that need comprehensive data management and teamwork features",
  },
  {
    name: "Performance",
    features: [
      "Nombre d'Utilisateurs: Plus de 10 utilisateurs",
      "Gestion des Prospect: Complète",
      "Base de Donnée: Illimitée",
      "Tableau de Bord: Sur-Mesure",
      "Support Client: Dédié (24/7)",
      "Rapports: Personnalisés",
      "Formation et Onboarding: Inclus",
      "Formation et Onboarding: Inclus",
      "Contrôle Administratif: Complet",
    ],
    description:
      "Larger enterprises requiring advanced data solutions and personalized support",
  },
];

const PricingPlans = () => {
  return (
    <section className="bg-[#F2F5F8] py-16 mx-auto max-w-7xl px-2 sm:px-16 lg:px-20">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <TextGrey text="Plans & Features" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Starter Plan */}
          {/* <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/3">
            <h3 className="text-3xl font-bold mb-20">Starter</h3>
            <ul className="text-left mb-6">
              <li className="flex items-center mb-3">
                <Check className="text-[#474747] mr-2" /> Data Visualization
              </li>
              <li className="flex items-center mb-3">
                <Check className="text-[#474747] mr-2" /> Real-Time Analytics
              </li>
              <li className="flex items-center mb-3">
                <Check className="text-[#474747] mr-2" /> Customization
              </li>
            </ul>
            <div className="flex gap-2">
              <div>
                <Info className="inline-block text-gray-500" />
              </div>
              <p className="text-gray-500 text-sm mb-6 text-left">
                Small businesses and startups looking to gain data insights
              </p>
            </div>
            <button className="bg-[#EA79BA] text-white py-2 px-4 rounded-full">
              Learn More &rarr;
            </button>
          </div> */}

          {/* Business Plan */}
          {/* <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/3">
            <h3 className="text-3xl font-bold mb-20">Business</h3>
            <ul className="text-left mb-6">
              <li className="flex items-center mb-3">
                <Check className="text-[#474747] mr-2" /> All Basic Plan
                Features
              </li>
              <li className="flex items-center mb-3">
                <Check className="text-[#474747] mr-2" /> Integrations
              </li>
              <li className="flex items-center mb-3">
                <Check className="text-[#474747] mr-2" /> Advanced Reporting
              </li>
            </ul>
            <div className="flex gap-2">
              <div>
                <Info className="inline-block text-gray-500" />
              </div>
              <p className="text-gray-500 text-sm mb-6 text-left">
                Growing businesses that need comprehensive data management and
                teamwork features
              </p>
            </div>
            <button className="bg-[#AA7AEB] text-white py-2 px-4 rounded-full">
              Learn More &rarr;
            </button>
          </div> */}

          {/* Enterprise Plan */}
          {/* <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/3">
            <h3 className="text-3xl font-bold mb-20">Enterprise</h3>
            <ul className="text-left mb-6">
              <li className="flex items-center mb-3">
                <Check className="text-[#474747] mr-2" /> All Pro Plan Features
              </li>
              <li className="flex items-center mb-3">
                <Check className="text-[#474747] mr-2" /> Full Access to API
              </li>
              <li className="flex items-center mb-3">
                <Check className="text-[#474747] mr-2" /> Dedicated Support
              </li>
            </ul>
            <div className="flex gap-2">
              <div>
                <Info className="inline-block text-gray-500" />
              </div>{" "}
              <p className="text-gray-500 text-sm mb-6 text-left">
                Larger enterprises requiring advanced data solutions and
                personalized support
              </p>
            </div>
            <button className="bg-[#6DACE7] text-white py-2 px-4 rounded-full">
              Learn More &rarr;
            </button>
          </div> */}

          {plans.map((p) => (
            <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/3">
              <h3 className="text-3xl font-bold mb-20">{p.name}</h3>
              <ul className="text-left mb-6">
                {p.features.map((f, i) => (
                  <li className="flex items-start mb-3">
                    <Check className="text-[#474747] mr-2" />
                    <p>
                      <span className="font-bold">{fs[i]}</span>
                      {f}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 mt-12">
                <div>
                  <Info className="inline-block text-gray-500" />
                </div>
                <p className="text-gray-500 text-sm mb-6 text-left">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
