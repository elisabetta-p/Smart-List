import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = (props) => {
  const [color, setColor] = useState();

  const { categoryColor } = props;
  useEffect(() => {
    console.log(color);
    if (color) categoryColor(color.rgb);
  }, [categoryColor, color]);

  return (
    <div className="color-picker">
      <ChromePicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color);
          console.log(color);
        }}
      />
    </div>
  );
};

export default ColorPicker;
