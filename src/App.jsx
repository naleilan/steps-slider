function App() {
  return (
    <main>
      <Shape />
      <Main />
    </main>
  );
}

function Shape() {
  return (
    <section className="left">
      <p className="loader1">1</p>
      <p className="loader2">2</p>
      <p className="loader3">3</p>
    </section>
  );
}

function Main() {
  return (
    <section className="right">
      <form>
        <section className="top">
          <h1>Side Slider Sample</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            laudantium consectetur quasi, quo libero voluptas dolore placeat
            quas, dolorum ipsa perferendis?
          </p>
        </section>
        <section className="buttons">
          <button className="btn btn-purple">&#8249;</button>
          <button className="btn btn-purple">&#8250;</button>
        </section>
      </form>
    </section>
  );
}

export default App;
