import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "./Main.css";
import { useContext } from "react";
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

  return (
    <div className="main">
      <div className="nav">
        <p>Dr.Lewis</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container ">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span> Good Day.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  {" "}
                  How many vitamin and minerals do I need to stay healthy?{" "}
                </p>
              </div>
              <div className="card">
                <p> How much protein do I need? </p>
              </div>
              <div className="card">
                <p> Signs of high blood pressure? </p>
              </div>
              <div className="card">
                <p> What does it mean when my chest gets tight? </p>
              </div>
            </div>
          </>
        ) : (
          <div className="results">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompts}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) :
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
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
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
             {input? <img onClick={() => onSent(input)} src={assets.send_icon} alt="" /> : null} 
            </div>
          </div>
          <p className="bottom-info">
            Dr. Lewis provides medical information but may be inaccurate.Please
            verify with professionals before relying on it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
