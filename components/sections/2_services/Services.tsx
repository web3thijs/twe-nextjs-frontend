import Title from "../../shared/Title";
import Column from "./Column";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <>
      <div className="container">
        <Title
          small={"Diensten"}
          big={"Kwaliteit aan een scherpe prijs!"}
          outline={"center"}
        ></Title>
        <div className="grid grid-cols-1 md:grid-cols-3 md:mt-16 ">
          <Column
            img={"/services/category_1.svg"}
            title={"Nieuwbouw"}
            rows={[
              "Totaalproject",
              "Verdeelkasten",
              "Laadpalen",
              "Domotica",
              "Afwerking",
              "Armaturen",
              "Slijpwerken",
              "Databekabeling",
              "Bedrijfspanden",
              "Bedrijfshallen",
              "...",
            ]}
          ></Column>

          <Column
            img={"/services/category_2.svg"}
            title={"Renovaties"}
            rows={[
              "Totaalproject",
              "Bekabeling",
              "Aarding",
              "Schema´s",
              "Databekabeling",
              "Bedrijfspanden",
              "Bedrijfshallen",
              "...",
            ]}
          ></Column>

          <Column
            img={"/services/category_3.svg"}
            title={"Klusjes"}
            rows={[
              "Aarding",
              "Aanpassingen",
              "Verlichting",
              "Stopcontacten",
              "Foutopsporing",
              "Tuinoverkapping",
              "Tuinhuis",
              "...",
            ]}
          ></Column>
        </div>

        <div className="flex justify-center mt-16">
          <div className="bg-white  py-8 px-12 rounded-xl w-fit flex items-center shadow-3xl">
            <div className="hidden sm:block my-auto">
              <FontAwesomeIcon
                icon={faInfoCircle as IconProp}
                size={"2x"}
                className={"text-blueish"}
              />
            </div>
            <div className="text-left my-auto ml-6">
              <p className="text-blueish font-bold">
                Niet gevonden waar u naar op zoek bent?
              </p>
              <p className="text-gray">
                <a className="cursor-pointer text-greenish underline" href="#contact">Contacteer</a> ons vrijblijvend. Samen zoeken we naar de
                geschikte oplossing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
