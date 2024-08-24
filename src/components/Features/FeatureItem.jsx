import { DatabaseIcon } from "lucide-react";

const FeatureItem = ({ icon, title, desc }) => {
  return (
    <div className="bg-white hover:bg-[#212227] hover:text-white p-10 cursor-pointer rounded-lg text-center transition">
      <div className="flex justify-center">{icon}</div>
      <h2 className="text-2xl font-extrabold mt-7">{title}</h2>
      <p className="text-[#727272] mt-4">{desc}</p>
    </div>
  );
};

export default FeatureItem;
