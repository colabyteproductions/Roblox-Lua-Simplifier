const { useState } = React;

function App() {
  const [input, setInput] = useState("-- Cole seu código Lua/Roblox aqui\nprint('hello world')");
  const [output, setOutput] = useState("");

  function simplify() {
    setOutput("-- simplificado\n" + input.replace(/--.*$/gm, "").trim());
  }

  return (
    <div>
      <header>ROBLOX Lua Simplifier (Retro Style)</header>
      <div className="container">
        <div className="sidebar">
          <div className="box">👤 Avatar<br/>[Bloco clássico]</div>
          <div className="box">Links:<br/>Home<br/>Scripts<br/>Forum</div>
        </div>
        <div className="content">
          <div className="box">
            <h3>Seu Script</h3>
            <textarea rows="10" cols="50" value={input} onChange={e=>setInput(e.target.value)} />
            <br/>
            <button onClick={simplify}>Simplificar</button>
          </div>
          <div className="box">
            <h3>Resultado</h3>
            <pre>{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
