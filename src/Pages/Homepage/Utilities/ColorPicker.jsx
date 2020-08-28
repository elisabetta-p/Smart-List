import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = (props) => {
  const [color, setColor] = useState();

  const { categoryColor } = props;
  useEffect(() => {
    if (color) categoryColor(color);
  }, [categoryColor, color]);

  return (
    <div className="color-picker">
      <ChromePicker
        color={color}
        onChangeComplete={(color) => {
          console.log(color);
          setColor(color.rgb);
        }}
      />
    </div>
  );
};

export default ColorPicker;
