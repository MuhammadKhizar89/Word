import React, {useState} from "react";

export const Textbox = (props) => {
    let obj = {
        height: "200px",
    };
    const [text, seText] = useState("");

    function lowerc() {
        if(text.length>0)
        {
            seText(text.toLowerCase());
            props.aler("Success", "Converted to Lowercase");

        }
    }
    function upperc() {
        if(text.length>0)
        {
        seText(text.toUpperCase());
        props.aler("Success", "Converted to Uppercase");
        console.log(props.butcolor);
        }
    }
    function Handleonchange(event) {

        seText(event.target.value);
    }
    const speak = () => {
        if(text.length>0)
        {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.aler("Success", "Action has been done");
        }
    };
    const Clear = () => {
        if(text.length>0)
        {
        seText("");
        props.aler("Success", "Text has been cleared");
        }
    };
    const handleCapitalizeWordClick = () => {
        if(text.length>0)
        {
        let lowercase = text.toLowerCase();
        let words = lowercase.split(" ");
        let newWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        let newText = newWords.join(" ");
        seText(newText);
        props.aler("Success", "Action has been done");
    }
    };

    function Format() {
        if(text.length>0)
        {
        let words = text.split(" ");
        let newWords = words.map((word) => {
            return word;
        });
        let k = 0;
        let arr = [];
        for (let i = 0; i < text.split(" ").length; i++) {
            if (newWords[i] != "") {
                arr[k] = newWords[i];
                k++;
            }
        }
        let newText = arr.join(" ");
        seText(newText);
        props.aler("Success", "Text has been formatted");
        }
    }

    let words = text.split(" ");
    let k = 0;
    for (let i = 0; i < text.split(" ").length; i++) if (words[i] != "") k++;

    let vov = 0;
    let ab = text;
    ab = ab.replace(/\s/g, "");
    for (let i = 0; i < text.length; i++) {
        if (
            ab[i] == "A" ||
            ab[i] == "E" ||
            ab[i] == "I" ||
            ab[i] == "O" ||
            ab[i] == "U" ||
            ab[i] == "a" ||
            ab[i] == "e" ||
            ab[i] == "i" ||
            ab[i] == "o" ||
            ab[i] == "u"
        ) {
            vov++;
        }
    }

    return (
        <>
            <div className={` my-3 container `}>
                <div className={`form-floating  `}>
                    <textarea
                        className={`form-control bg-${props.mode1} text-${props.mode1 == "light" ? "dark" : "light"}`}
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        value={text}
                        onChange={Handleonchange}
                        style={obj}
                        
                    ></textarea>

                    <label className={`text-${props.mode1 == "light" ? "dark" : "light"}`} htmlFor="floatingTextarea2 ">
                        Enter Your Text here{" "}
                    </label>
                </div>
                <button type="button" class={` my-3 btn btn-${props.butcolor} btn-mm mx-2`} onClick={upperc}>
                    Convert To UpperCase
                </button>
                <button type="button" class={` my-3 btn btn-${props.butcolor} btn-mm mx-2`} onClick={lowerc}>
                    Convert To LowerCase
                </button>
                <button type="submit" onClick={speak} class={` my-3 btn btn-${props.butcolor} btn-mm mx-2`}>
                    Speak
                </button>
                <button type="button" class={` my-3 btn btn-${props.butcolor} btn-mm mx-2`} onClick={Clear}>
                    Clear Text
                </button>
                <button
                    type="button"
                    class={` my-3 btn btn-${props.butcolor} btn-mm mx-2`}
                    onClick={handleCapitalizeWordClick}
                >
                    First Letter Capital
                </button>
                <button type="button" class={` my-3 btn btn-${props.butcolor} btn-mm`} onClick={Format}>
                    Format
                </button>

                <div className={`my-2 container text-${props.mode1 == "light" ? "dark" : "light"}`}>
                    <h2>Your Text Summary</h2>
                    <p>
                        {k} words and {ab.length} charecters
                    </p>
                    <p>{k * 0.005}minutes </p>
                    <p>{vov} Vowels</p>
                </div>
            </div>
            <div className={`my-2 container text-${props.mode1 == "light" ? "dark" : "light"}`}>
                <h2>Preview</h2>
                {text}
            </div>
        </>
    );
};
