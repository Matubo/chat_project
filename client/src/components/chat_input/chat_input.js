import { useState, useRef } from "react";
import "./chat_input.css";
import send_orange from "../../assets/img/Send_orange.png";
import send_black from "../../assets/img/Send_black.png";
import send_dark_orange from "../../assets/img/Send_darkorange.png";

function ChatInput(props) {
  const { sendMessage } = props;
  const [message, setMessage] = useState("sdasd");
  const inpRef = useRef("");

  function changeHandler(e) {
    setMessage(e.target.innerText);
  }

  function sendMessageHandler() {
    if (message.length > 0) {
      sendMessage(message);
      setMessage("");
      inpRef.current.textContent = "";
    }
  }

  return (
    <div className="chat-input">
      <div
        className="chat-input_input_field"
        type="text"
        contentEditable="true"
        placeholder="Text here.."
        ref={inpRef}
        onInput={changeHandler}
      ></div>
      <button className="chang-input__send" onClick={sendMessageHandler}>
        <img src={send_dark_orange}></img>
      </button>
    </div>
  );
}

export default ChatInput;
