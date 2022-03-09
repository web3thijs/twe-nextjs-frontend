import Title from "../../shared/Title";
import Column from "./Column";

function Services() {
  return (
    <>
        <div className="text-center">
            <p className="text-gray-light font-semibold">Diensten</p>
            <p className="text-4xl sm:text-5xl font-bold text-blueish">Kwaliteitsservices met <span className="hidden sm:inline"><br/></span> de beste prijzen</p>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-16">
              <Column img={"services/category_1.svg"} title={"Nieuwbouw"}
                rows={[
                  'Totaalproject', 'Verdeelkasten', 'Laadpalen', 'Domotica',
                  'Afwerking', 'Armaturen', 'Slijpwerken', 'Datavoorziening',
                  'Bedrijfspanden', 'Bedrijfshallen'
              ]}></Column>

              <div className="mt-16 md:mt-0">
                <Column img={"services/category_2.svg"} title={"Renovaties"}
                  rows={[
                    'Totaalproject', 'Bekabeling vernieuwen', 'Aarding in orde brengen',
                    'Schema´s in orde brengen', 'Datavoorziening',
                    'Bedrijfspanden', 'Bedrijfshallen'
                ]}></Column>
              </div>
              
              <div className="mt-16 md:mt-0">
                <Column img={"services/category_3.svg"} title={"Klusjes"}
                  rows={[
                    'Aarding plaatsen', 'Aanpassingen', 'Verlichting plaatsen',
                    'Stopcontacten plaatsen', 'Foutopsporing', 'Tuinoverkapping', 'Tuinhuis'
                ]}></Column>
              </div>
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