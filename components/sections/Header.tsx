import Button from "../shared/Button";

function Header() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 flex justify-center">
        <div>
          <p className="text-5xl font-black text-blueish">TW</p>
          <p className="text-5xl font-black text-blueish mt-3">
            Elektriciteitswerken
          </p>
          <p className="text-2xl mt-3">Voor al uw elektriciteitswerken</p>
          <div className="mt-3">
            <Button text={"Contact"} outline={false} className={"mr-3"}></Button>
            <Button text={"Diensten"} outline={true}></Button>
          </div>
        </div>

        <div className="grid grid-cols-3">
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
        </div>
      </div>
    </>
  );
}

export default Header;
