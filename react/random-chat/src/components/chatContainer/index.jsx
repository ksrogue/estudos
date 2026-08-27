import "./chat.css";

const ChatContainer = ({ name, advice }) => {
  return (
    <div className="chat-container">
      <span className="name">{name}</span>
      <p className="text">{advice}</p>
    </div>
  );
};

export default ChatContainer;
