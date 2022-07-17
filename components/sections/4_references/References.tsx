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
      <div className="container">
        <div className="grid grid-cols-2">
          <Title
            small={"Realisaties"}
            big={"Recente projecten"}
          ></Title>
          <div className="ml-auto my-auto">
            <Button text={"View more"} outline={true}></Button>
          </div>
        </div>
        <div className="flex justify-center space-x-10 my-8">
          <Project img={"/header/one.jpg"}></Project>
          <Project img={"/header/two.jpg"}></Project>
          <Project img={"/header/three.jpg"}></Project>
        </div>
      </div>
    </>
  );
}

export default References;
