import React from "react";
import { useMediaQuery } from "@mui/material";
import { useEffect,useState } from "react";
const fullText = "Hello, I'm Prashanth. A Front-End developer and Poetic Soul.";
const words=fullText.split(" ");
function WordbyWordText() {
    const isResponsive=useMediaQuery('(max-width:700px');
    const [visibleCount,setVisibleCount] = useState(0);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setVisibleCount((prev)=> {
                if(prev<words.length) return prev+1;
                return 0;
            });
        },300);
        return ()=> clearTimeout(timer);
    },[visibleCount]);
     return (
    <h1 style={{ 
      textAlign: "center",
      fontSize:isResponsive?"1rem":"2.5rem", 
      fontWeight:isResponsive?"normal":"bolder", 
      wordWrap:"break-word", 
      maxWidth:"90%", 
      margin:"0 auto"
      }}>
      {words.slice(0, visibleCount).map((word, index) => {
        // Check for "Poetic Soul"
        const isPoeticSoul =
          words[index] === "Poetic" && words[index + 1] === "Soul.";

        if (isPoeticSoul && index < visibleCount - 1) {
          return (
            <strong>
                <span
                    key={index}
                    style={{
                    color: "cyan",
                    fontWeight: "bold",
                    marginRight: "5px"
                    }}
                >
                    Poetic Soul
                </span>
            </strong>
          );
        }

        // Skip rendering "Soul." if already handled
        if (words[index - 1] === "Poetic" && word === "Soul.") {
          return null;
        }

        // Highlight "Front-End"
        const isFrontEnd = word === "Front-End";

        return (
          <strong>
                <span
                    key={index}
                    style={{
                    color: isFrontEnd ? "yellow" : "inherit",
                    fontWeight: isFrontEnd ? "bold" : "normal",
                    marginRight: "5px"
                    }}
                >
                    {word}
                </span>
            </strong>
        );
      })}
    </h1>
     );
}
export default WordbyWordText;