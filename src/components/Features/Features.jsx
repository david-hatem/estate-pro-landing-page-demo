import React from "react";
import TextGrey from "../TextGrey";
import FeatureItem from "./FeatureItem";
import {
  ChartNoAxesCombined,
  CircleGauge,
  Database,
  Files,
  Gauge,
  SlidersVertical,
  Wallpaper,
} from "lucide-react";
import Data from "../../assets/svg/1.svg";

const features = [
  {
    icon: <Database size={100} />,
    title: "Base de Données Centralisée",
    desc: "Centralisez toutes les données relatives à vos prospects et clients en un seul endroit.",
  },
  {
    icon: <Wallpaper size={100} />,
    title: "Interface Utilisateur Intuitive",
    desc: "Visualisez les informations essentielles à travers un tableau de bord clair et ergonomique.",
  },
  {
    icon: <ChartNoAxesCombined size={100} />,
    title: "Visualisation Avancée des Données",
    desc: "Analysez vos performances avec des graphiques interactifs et des visualisations de données dynamiqu",
  },
  {
    icon: <Files size={100} />,
    title: "Rapports Personnalisés",
    desc: "Créez des rapports détaillés adaptés à vos besoins spécifiques pour suivre les progrès et les tendances.",
  },
  {
    icon: <Gauge size={100} />,
    title: "Performance et Pilotage Interne (KPI)",
    desc: "Surveillez les performances de votre entreprise grâce à des indicateurs clés de performance (KPI) personnalisés.",
  },
  {
    icon: <SlidersVertical size={100} />,
    title: "Contrôle Administratif",
    desc: "Gérez les droits et permissions des utilisateurs pour assurer une utilisation sécurisée du système.",
  },
];

const Features = () => {
  return (
    <div className="bg-[#F2F5F8] pt-20 text-center">
      <TextGrey text="Features" />
      <h2 className="lg:text-5xl sm:text-4xl md:text-4xl sm:w-[100%] md:w-[560px] font-extrabold mx-auto leading-[50px] mt-7">
        Real-Time Insights,{" "}
        <span className="text-[#E58311]">Real-Time Results</span>
      </h2>
      <p className="text-[#474747] w-[560px] mx-auto mt-7 font-medium">
        Explorez les Fonctionnalités de Estate PRO
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 p-10 mx-auto max-w-7xl px-2 sm:px-16 lg:px-20">
        {features.map((item) => (
          <FeatureItem icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default Features;
