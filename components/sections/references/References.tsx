import Title from "../../shared/Title";
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function References() {
  return (
    <>
        <div className="">
            <div className="grid grid-cols-2">
              <div>
                <Title text={"Realisaties"} row1={"Recente projecten"}></Title>
              </div>
              <div className="text-right mt-8 text-2xl text-gray">
                <FontAwesomeIcon icon={faChevronLeft} className={'mr-5 text-gray-light'}/>
                <FontAwesomeIcon icon={faChevronRight}/>
              </div>
            </div>
            <div className="flex mt-8">
              <Project img={"/header/one.jpg"}></Project>
              <Project img={"/header/two.jpg"}></Project>
              <Project img={"/header/three.jpg"}></Project>
              <Project img={"/header/one.jpg"}></Project>
              <Project img={"/header/two.jpg"}></Project>
            </div>
        </div>
    </>
  );
}

export default References;