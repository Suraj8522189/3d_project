 function Controls({ bgColor, setBgColor, wireframe, setWireframe }) {
  return (
    <div style={{ marginTop: 20 }}>
      <div>
        <label>Background Color: </label>
        <input 
          type="color" 
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)} 
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <label>
          <input 
            type="checkbox" 
            checked={wireframe}
            onChange={(e) => setWireframe(e.target.checked)} 
          />
          Wireframe Mode
        </label>
      </div>
    </div>
  );
}
export default Controls;