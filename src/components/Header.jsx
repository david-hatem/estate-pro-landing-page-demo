import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import Demo from "../assets/demo.jpg";
import TextGrey from "./TextGrey";

import {
  useCalendlyEventListener,
  InlineWidget,
  PopupWidget,
  PopupModal,
  PopupButton,
} from "react-calendly";

const Calendar = ({ open, setOpen }) => {
  return (
    <div className={`${open ? "block" : "hidden"}`}>
      <PopupModal
        url="https://calendly.com/omar-belkasseh-aiobsys"
        // pageSettings={this.props.pageSettings}
        // utm={this.props.utm}
        // prefill={this.props.prefill}
        onModalClose={() => setOpen(false)}
        open={open}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
      />
    </div>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F2F5F8] py-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-16 lg:px-28">
        <div className="text-center mb-8">
          <div className="mb-8">
            <TextGrey
              text={"Transformez la Gestion de Vos Prospects avec Estate Pro"}
            />
          </div>
          <h1 className="lg:text-8xl sm:text-6xl w-[70%] mx-auto mb-8 font-extrabold">
            Unlock the <span className="text-[#E58311]">Power</span> of Data
          </h1>
          <p className="mb-8 text-center text-2xl">
            Un Système d’information innovant pour booster votre efficacité et
            maximiser vos conversion
          </p>
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="bg-gray-900 text-white rounded-full p-5 text-sm font-medium flex gap-3 mx-auto"
          >
            Demandez une Démo <ArrowRight />
          </button>
          <Calendar open={open} setOpen={setOpen} />
        </div>
        <div className="border-[7px] border-black rounded-[70px] overflow-hidden shadow-lg">
          <img src={Demo} />
        </div>
      </div>
    </div>
  );
};

export default Header;
