import React, {useState} from "react";
import "../asset/scss/faq-accordion.scss";

const Chat = ({faq, index}) => {
  const [showQues, setShowQues]= useState(true)

  const handleShowQues = ()=>{
    setShowQues(!showQues)
  }
  return (
    
    <div className=" accordion mb-4" key={index}>
    <div className="title d-flex align-items-center py-3 px-3" onClick={handleShowQues}>
      <div> {faq.title}</div>
      <div className="img  ml-auto ">
      <img
        src="/assets/images/arrow-down.svg"
        alt="mobile call"
        className="mr-2"
      />
    </div>
    </div>
    {showQues&&<div className="comment py-2 px-3 ">
      {faq.content}
    </div>}
  </div>
   
  );
};

export default Chat;
