import { useState } from "react";

const msg = [
  `Learn the Basics: 
     .HTML for structure   
     .CSS for styling  
     .JavaScript for interactivity`,

  `Build Responsive Websites:
      .Responsive design
      .Front-end frameworks (e.g., React)`,
  `Understand Back-End:
      .Server-side language (e.g., Node.js)
      .Databases (e.g., MySQL)
      .Deployment and server management`,
];

function App() {
  return <Main />;
}

function Main() {
  const [step, setStep] = useState(0);
  // const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  console.log(step);

  function handlePrev() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  // function handleOpen() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div>
      {/* <button className="close" onClick={handleOpen}>
        ✖
      </button> */}

      <main>
        <section className="left">
          <p className={`${step >= 1 ? "step1" : "step1 deactive"}`}>1</p>
          <p className={`${step >= 2 ? "step2" : "step2 deactive"}`}>2</p>
          <p className={`${step >= 3 ? "step3" : "step3 deactive"}`}>3</p>
        </section>
        <section className="right">
          <section className="top">
            <h1>3 Steps to be a web developer:</h1>
            <p className="text">
              <pre>{msg[step - 1]}</pre>
            </p>
            <div className="img">
              <img src="./public/1.png" alt="" width="250px" />
            </div>
          </section>

          <section className="buttons">
            <button className="btn btn-purple" onClick={handlePrev}>
              &#8249;
            </button>
            <button className="btn btn-purple" onClick={handleNext}>
              &#8250;
            </button>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
