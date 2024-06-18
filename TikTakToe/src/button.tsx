import "./button.css"

function Buttons() {
  const tableValues = {
    top: '50%',
    left: '50%',
  }

  return (
    <>
      <button className="theButton" style={{ left: tableValues.left, top: tableValues.top }}></button>
    </>
  );
}

export default Buttons;