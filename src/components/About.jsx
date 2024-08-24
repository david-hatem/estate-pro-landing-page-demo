import React from "react";
import a1 from "../assets/Small_Chart.png";
import a2 from "../assets/Small_Earnings.png";
import a3 from "../assets/Small_New Clients.png";
import a4 from "../assets/Small_Spending.png";

const About = () => {
  return (
    <div className="py-16 bg-[#E7E7E7]  mx-auto ">
      <div className="container bg-[#E7E7E7] mx-auto flex flex-col md:flex-row items-center justify-between max-w-7xl px-2 sm:px-16 lg:px-20">
        {/* Left Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prêt à Transformer Votre Entreprise avec Estate Pro ?
          </h2>
          <p className="text-gray-600 mb-6">
            Contactez-nous aujourd'hui pour discuter de vos besoins et découvrir
            comment GYASYS peut faire passer votre entreprise au niveau
            supérieur.
          </p>
          <button className="bg-gray-900 text-white py-3 px-6 rounded-full flex items-center">
            Demander une démo maintenant &rarr;
          </button>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src={a1} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src={a2} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src={a3} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src={a4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
