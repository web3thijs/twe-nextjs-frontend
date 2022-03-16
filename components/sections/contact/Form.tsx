import Button from "../../shared/Button";
import Title from "../../shared/Title";

function Form() {
    async function submitForm(e: any){
        e.preventDefault();
        const formData: any = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if( !(field as any).name ) return;
            formData[(field as any).name] = (field as any).value;
        });

        fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(formData)
        })

        console.log(formData)
    }

  return (
    <>
        <div className="bg-offwhite rounded-lg mt-5 md:mt-0">
        <form method="POST" onSubmit={submitForm} className="p-5">
            <div className="mt-3 grid grid-cols-2">
                <div className="mx-2">
                    {/* <label htmlFor="test">Your email</label> */}
                    <input id="firstName" name="firstName" type="text" className="w-full px-5 py-3 rounded-lg" placeholder="Voornaam"></input>
                </div>
                <div className="mx-2">
                    <input id="lastName" name="lastName" type="text" className="w-full px-5 py-3 rounded-lg" placeholder="Achternaam"></input>
                </div>
            </div>
            
            <div className="mx-2 mt-5">
                <input id="mail" name="mail" type="text" className="w-full px-5 py-3 rounded-lg" placeholder="E-mail"></input>
            </div>

            <div className="mx-2 mt-4">
                <textarea id="message" name="message" rows={10} className="w-full px-5 py-3 rounded-lg" placeholder="Bericht"></textarea>
            </div>

            <div className="text-center">
                <button type="submit" className={`text-base text-center text-white bg-greenish font-semibold border-solid border-2 border-greenish rounded-lg px-5 py-2 my-5`}>Verzenden</button>
            </div>
        </form>
        </div>
    </>
  );
}

export default Form;