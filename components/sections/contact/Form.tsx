import Button from "../../shared/Button";
import Title from "../../shared/Title";

function Form() {
  return (
    <>
        <div className="bg-offwhite rounded-lg mt-5 md:mt-0">
        <form action="" className="p-5">
            <div className="mt-3 grid grid-cols-2">
                <div className="mx-2">
                    {/* <label htmlFor="test">Your email</label> */}
                    <input id="test" name="test" type="text" className="w-full px-5 py-3 rounded-lg" placeholder="Voornaam"></input>
                </div>
                <div className="mx-2">
                    <input id="test" name="test" type="text" className="w-full px-5 py-3 rounded-lg" placeholder="Achternaam"></input>
                </div>
            </div>
            
            <div className="mx-2 mt-5">
                <input id="test" name="test" type="text" className="w-full px-5 py-3 rounded-lg" placeholder="E-mail"></input>
            </div>

            <div className="mx-2 mt-4">
                <textarea id="test" name="test" rows={10} className="w-full px-5 py-3 rounded-lg" placeholder="Bericht"></textarea>
            </div>

            <div className="text-center">
            <Button text={"Verzenden"} outline={false} className="my-5"></Button>
            </div>
        </form>
        </div>
    </>
  );
}

export default Form;