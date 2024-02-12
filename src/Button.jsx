export default function Button({
  text = 'Click Me!',
  color = 'teal',
  fontSize = 12,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px',
  };

  return (
    <button
      onClick={() => handleClick('https://www.theodinproject.com')}
      style={buttonStyle}
    >
      {text}
    </button>
  );
}
