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
    const response = await runChat(input)
    setResultsData(response)
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
