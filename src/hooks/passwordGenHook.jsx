import { useState } from "react";

const usePasswordGenHook = () => {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const generatePassword = (checkboxData, length) => {
    let charset = "";
    let generatePassword = "";
    const selectedOption = checkboxData.filter((checkbox) => checkbox.state);
    if (selectedOption.length === 0) {
      setErrorMsg("Select At least one Option");
      setPassword("");
      return;
    }
    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()_+{}[]:;.";
          break;
        default:
          break;
      }
    });
    for (let i = 0; i < length; i += 1) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatePassword += charset.charAt(randomIndex);
    }
    setPassword(generatePassword);
    setErrorMsg("");
  };
  return { password, errorMsg, generatePassword };
};

export default usePasswordGenHook;
