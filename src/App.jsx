import { Tooltip } from "flowbite-react";
import { useState } from "react";
import { FaCopy, FaRegCopy } from "react-icons/fa";
import StrengthChecker from "./components/StrengthChecker";
import usePasswordGenHook from "./hooks/passwordGenHook";
function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const handleCheckbox = (index) => {
    const updatedData = [...checkboxData];
    updatedData[index].state = !updatedData[index].state;
    setCheckboxData(updatedData);
  };
  const { password, errorMsg, generatePassword } = usePasswordGenHook();
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <>
      <div className="container mx-auto text-center pt-10">
        <h1 className="text-[54px] font-bold font-quicksand">
          Password Generator
        </h1>
        <div className="bg-white text-center w-[1100px] mx-auto p-6 rounded-lg shadow-lg mt-3 font-robo">
          {password ? (
            <div className="flex items-center justify-between text-xl font-bold  pb-5">
              <div className="flex-grow text-center text-4xl text-[#2a8b8b] font-quicksand">
                {password}
              </div>
              <button
                onClick={() => handleCopy()}
                className=" text-[#2a8b8b] rounded-md  border-none hover:transition-all hover:duration-300 hover:bg-white hover:text-[#2a8b8b]"
              >
                {copy ? (
                  <Tooltip content="Copied" placement="right">
                    <FaCopy className="text-4xl" />
                  </Tooltip>
                ) : (
                  <Tooltip content="Copy" placement="right">
                    <FaRegCopy className="text-4xl" />
                  </Tooltip>
                )}
              </button>
            </div>
          ) : null}
          <div className="flex flex-col text-xl font-bold pb-6">
            <span className="flex w-full justify-between pb-6">
              <label className="uppercase font-quicksand text-2xl underline font-bold ">
                Character Length :
              </label>
            </span>
            <div className="relative w-[700px] mx-auto flex justify-center items-center p-5 bg-gradient-to-b from-[rgba(0,0,0,0.05)] to-[#edf1f4] rounded-[40px] shadow-range">
              <input
                type="range"
                id="range"
                min="4"
                max="20"
                value={length}
                className="w-full h-4 appearance-none bg-[#edf1f4] outline-none rounded-[15px] shadow-line overflow-hidden"
                onChange={(e) => setLength(e.target.value)}
              />
              <span className="relative text-center w-[60px] text-xl text-white bg-[#2a8b8b] ml-[15px] rounded-[25px] shadow-lineTwo font-medium">
                {length}
              </span>
            </div>
          </div>
          <div className="grid justify-center grid-cols-2 gap-5 text-xl font-robo font-bold mx-auto mt-8 w-[800px]">
            {checkboxData.map((item, index) => (
              <div key={index} className="flex gap-[5px] pb-6">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={item.state}
                  className="mr-4"
                  onChange={() => handleCheckbox(index)}
                />
                <label className="text-2xl font-robo">{item.title}</label>
              </div>
            ))}
          </div>
          <StrengthChecker password={password} />
          {errorMsg ? (
            <div className="text-red-500 text-xl pb-2 uppercase font-bold">
              {errorMsg}
            </div>
          ) : null}
          <button
            onClick={() => generatePassword(checkboxData, length)}
            className="w-full p-4 bg-[#2a8b8b] rounded-lg text-white text-2xl font-bold font-robo uppercase  hover:transition-all hover:duration-300 hover:bg-white hover:text-[#2a8b8b] hover:border hover:border-[#2a8b8b]"
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
