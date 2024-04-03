import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "./Main.css";
import { useContext, useState } from "react";
import { AiOutlineCaretDown,AiOutlineCaretUp } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Main = () => {
  const {
    onSent,
    recentPrompts,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="main">
      <div className="nav">
        <p>Nursey</p>
        <img src={assets.user_icon} alt="" />
      </div>

      {/* <div className="absolute flex flex-col items-center w-[340px] h-[340px] rounded-lg down-0 ">
        <button
          onClick={() => setisOpen((prev) => !prev)}
          className="bg-white p-4 w-full flex items-center justify-between text-lg rounded-lg tracking-wider"
        >
          Dropdown
          {!isOpen ? (
            <AiOutlineCaretDown  className="h-8"/>
          ) : (
            <AiOutlineCaretUp className="h-8"/>
          )}
        </button>

        {isOpen && (
          <div className="absolute"> 
          <div className="absolute top-20 flex flex-col items-start rounded-lg p-2 w-full"> 
  <button className="block w-full p-4 hover:bg-gray-100">Settings</button>
  <button className="block w-full p-4 hover:bg-gray-100">Help</button>
  <button className="block w-full p-4 hover:bg-gray-100">Sign Out</button>
</div>

          </div>
        )}
      </div> */}

      <div className="main-container ">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                {/* <span> Good Day.</span> */}
              </p>
              <p >Hi</p>
            </div>
          </>
        ) : (
          <div className="results">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p className="prompt">{recentPrompts}</p>
            </div>

            <AiOutlineMenu className="absolute bottom-0 left-0"/>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p className="bg-blue-100 rounded-lg p-4  space-x-4" dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Is there anything I can help you with?"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSent(input);
                  setInput("");
                }
              }}
            />

            <div>
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img
                  onClick={() => onSent(input)}
                  src={assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Nursey provides medical information but may be inaccurate.Please
            verify with professionals before relying on it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
