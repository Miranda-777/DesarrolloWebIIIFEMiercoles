import "./App.css";

function hacerPedido(a) {
  alert(a);
}
function App() {
  let cantMesas = 10;
  let libreada = true;
  let mesasDispo = [];
  for (let index = 0; index < cantMesas; index++) {
    mesasDispo.push(` Mesa ${index + 1}`);
  }

  return (
    <div className="container">
      <h1 className="text-center">lo de pepe</h1>
      <div className="row">
        <div className="col-6">
          {mesasDispo.map((a, index) => {
            return (
              <div id={index} className="text-center bg-success" onClick={() => hacerPedido(index)}>
                <h3>{a}</h3>
              </div>
            );
          })}
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}

export default App;
