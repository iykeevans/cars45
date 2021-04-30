import React from "react";
// import "../styles/chat.scss";

const Chat = (props) => {
  return (
    <div>
      {process.env.chatbot ? <div className="chat ">
        <button className="btn btn-link message rounded-circle teal-button d-flex align-items-center justify-content-center">
          <img src="/assets/icons/message.svg" />
        </button>
      </div> : null}
    </div>
  );
};

export default Chat;
