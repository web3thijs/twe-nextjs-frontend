import Title from "../../shared/Title";
import Column from "./Column";

function Services() {
  return (
    <>
        <div className="text-center">
            <Title text={"Diensten"} row1={"Kwaliteitsservices met"} row2={"de beste prijzen"}></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-16">
              <Column img={"services/category_1.svg"} title={"Nieuwbouw"}
                rows={[
                  'Totaalproject', 'Verdeelkasten', 'Laadpalen', 'Domotica',
                  'Afwerking', 'Armaturen', 'Slijpwerken', 'Datavoorziening',
                  'Bedrijfspanden', 'Bedrijfshallen'
              ]}></Column>

              <Column img={"services/category_2.svg"} title={"Renovaties"}
                rows={[
                  'Totaalproject', 'Bekabeling vernieuwen', 'Aarding in orde brengen',
                  'Schema´s in orde brengen', 'Datavoorziening',
                  'Bedrijfspanden', 'Bedrijfshallen'
              ]}></Column>
              
              <Column img={"services/category_3.svg"} title={"Klusjes"}
                rows={[
                  'Aarding plaatsen', 'Aanpassingen', 'Verlichting plaatsen',
                  'Stopcontacten plaatsen', 'Foutopsporing', 'Tuinoverkapping', 'Tuinhuis'
              ]}></Column>
            </div>
        </div>
    </>
  );
}

export default Services;