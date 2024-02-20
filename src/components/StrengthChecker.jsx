/* eslint-disable react/prop-types */
import React from "react";

const StrengthChecker = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;
    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Very Weak";
    } else if (passwordLength < 8) {
      return "Weak";
    } else if (passwordLength < 12) {
      return "Moderate";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return <React.Fragment />;
  return (
    <div className="w-full flex justify-center pb-3 font-bold gap-2 text-2xl">
      Strength :{" "}
      <span style={{ fontWeight: "bold", color: "teal" }}>
        {passwordStrength}
      </span>
    </div>
  );
};

export default StrengthChecker;
