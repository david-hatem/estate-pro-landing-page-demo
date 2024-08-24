import { ArrowDown, ChevronDown, PlusIcon } from "lucide-react";
import React from "react";
import TextGrey from "./TextGrey";

const questionsAndAnswers = [
  {
    question:
      "Comment Estate Pro aide-t-il à augmenter les taux de conversion ?",
    answer:
      "Estate Pro vous permet de suivre chaque prospect de manière détaillée, en offrant un accompagnement personnalisé basé sur leur profil et leur avancement. Grâce à des outils de suivi avancés et des actions spécifiques recommandées, vous pouvez transformer plus de prospects en clients.",
  },
  {
    question:
      "Est-il facile d'intégrer Estate Pro dans notre système existant ?",
    answer:
      "Oui, Estate Pro est conçu pour être facilement intégré avec vos systèmes actuels. Nous proposons des API flexibles et des services de support pour assurer une transition fluide sans interruption de vos opérations.",
  },
  {
    question: "Quelles sont les options de personnalisation disponibles ?",
    answer:
      "Estate Pro est hautement personnalisable. Vous pouvez adapter les tableaux de bord, les rapports, les formulaires de saisie, et même les notifications pour répondre spécifiquement aux besoins de votre entreprise.",
  },
  {
    question: "Estate Pro est-il sécurisé ?",
    answer:
      "Absolument. Estate Pro utilise des protocoles de sécurité de pointe pour protéger vos données. De plus, vous avez un contrôle total sur les accès utilisateur, garantissant que seules les personnes autorisées puissent accéder aux informations sensibles.",
  },
  {
    question: "Quel type de support est offert avec Estate Pro ?",
    answer:
      "Nous offrons un support complet incluant une assistance technique 24/7, des formations pour vos équipes, et des mises à jour régulières pour améliorer continuellement votre expérience avec Estate Pro.",
  },
];

const Faqs = () => {
  return (
    <div className="bg-[#F2F5F8] py-20 text-center mx-auto max-w-7xl px-2 sm:px-16 lg:px-20">
      <div class="mx-auto">
        <TextGrey text="Frequently asked quations" />
        <div class="flex flex-col items-center">
          <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
            FAQs
          </h2>
        </div>
        <div class="relative w-full bg-[#212227] text-white px-6 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-xl sm:px-10">
          <div class="mx-auto mt-8 grid divide-y divide-[#444444]">
            {questionsAndAnswers.map((q) => {
              return (
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span> {q.question}</span>
                      <span class="transition group-open:rotate-180">
                        <ChevronDown />
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-left">
                      {q.answer}
                    </p>
                  </details>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
