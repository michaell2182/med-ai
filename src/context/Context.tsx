import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState('');
    const [recentPrompts, setRecentPrompts] = useState([]);
    const[showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const[prevPrompts, setPrevPrompts] = useState([]);
    const [resultData,setResultsData] = useState("");

  
  const onSent = async (prompt) => {

    setResultsData("")
    setLoading(true)
    setShowResults(true)
    setRecentPrompts(input)
    setPrevPrompts(prev => [...prev, input])
    const response = await runChat(input)
    let responseArray = response.split("**");
    let newResponse = "";
    for(let i =0 ; i < responseArray.length; i++){
        if (i === 0 || i%2 !== 1){
            newResponse += responseArray[i];
        }
        else{
            newResponse += "<b>"+responseArray[i]+"</b>";
        }
    }
    let newResponse2 = newResponse.split("*").join("<br/>")
    setResultsData(newResponse2)
    setLoading(false)
    setInput('')
    
  }


  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompts,
    recentPrompts,
    showResults,
    loading,
    resultData,
    input,
    setInput,

  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
