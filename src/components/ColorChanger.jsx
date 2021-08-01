import React from 'react'

export default function ColorChanger() {
  const [color, setColor] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState('');
  const [counter, setCounter] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (selectedColor === '') return;
    if (ref.current?.style.backgroundColor === selectedColor) {
      setCounter(oldCounter => oldCounter + 1);
    }
  }, [selectedColor]);

  return (
    <>
      <input
        value={color}
        onChange={(event) => {
          setColor(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            setSelectedColor(color);
          }
        }}
      />
      <button
        onClick={() => {
          setSelectedColor(color);
        }}
      >
        Select Color
      </button>
      <div ref={ref} className="colored-div" style={{
        backgroundColor: selectedColor
      }}></div>
      <h3>
        {counter}
      </h3>
    </>
  );
}
