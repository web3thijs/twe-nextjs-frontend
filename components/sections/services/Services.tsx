import Title from "../../shared/Title";
import Column from "./Column";

function Services() {
  return (
    <>
        <div className="text-center">
            <p className="text-gray-light font-semibold">Diensten</p>
            <p className="text-3xl md:text-4xl font-black text-blueish">Kwaliteitsservices met <span className="hidden sm:inline"><br/></span> de beste prijzen</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:mt-16">
              <Column img={"/services/category_1.svg"} title={"Nieuwbouw"}
                rows={[
                  'Totaalproject', 'Verdeelkasten', 'Laadpalen', 'Domotica',
                  'Afwerking', 'Armaturen', 'Slijpwerken', 'Datavoorziening',
                  'Bedrijfspanden', 'Bedrijfshallen'
              ]}></Column>

              <Column img={"/services/category_2.svg"} title={"Renovaties"}
                rows={[
                  'Totaalproject', 'Bekabeling', 'Aarding',
                  'Schema´s', 'Datavoorziening',
                  'Bedrijfspanden', 'Bedrijfshallen'
              ]}></Column>
            
              <Column img={"/services/category_3.svg"} title={"Klusjes"}
                rows={[
                  'Aarding', 'Aanpassingen', 'Verlichting',
                  'Stopcontacten', 'Foutopsporing', 'Tuinoverkapping', 'Tuinhuis'
              ]}></Column>
            </div>
            
            <div className="flex justify-center mt-16">
              <img src="services/not_found.svg" alt="not_found"/>
              <div className="text-left my-auto ml-6">
                <p className="text-blueish font-bold">Niet gevonden waar u naar op zoek bent?</p>
                <p className="text-gray">Contacteer ons om te bespreken wat er verder nog mogelijk is.</p>
              </div>
            </div>
        </div>
    </>
  );
}

export default Services;