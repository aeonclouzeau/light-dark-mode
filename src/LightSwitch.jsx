const LightSwitch = () => {
  const handleClick = () => {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  };

  return <button onClick={handleClick}>Change theme</button>;
};

export default LightSwitch;
