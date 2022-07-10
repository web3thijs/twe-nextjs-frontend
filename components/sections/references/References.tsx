import Title from "../../shared/Title";
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../shared/Button";

function References() {
  return (
    <>
      <div className="">
        <div className="text-center">
          <Title text={"Realisaties"} row1={"Recente projecten"}></Title>
        </div>
        <div className="flex justify-center space-x-12 my-16">
          <Project img={"/header/one.jpg"}></Project>
          <Project img={"/header/two.jpg"}></Project>
          <Project img={"/header/three.jpg"}></Project>
        </div>
        <div className="flex justify-center">
          <Button text={"View more"} outline={true}></Button>
        </div>
      </div>
    </>
  );
}

export default References;
