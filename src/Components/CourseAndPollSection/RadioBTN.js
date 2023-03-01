import React from "react";

export default function RadioBTN({ title }) {
  return (
    <label className="label-container">
      {title}
      <input type="radio" name="radio" checked="checked" />
      <span className="checkmark"></span>
    </label>
  );
}
