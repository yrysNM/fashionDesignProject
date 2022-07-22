import ChatBot from 'react-simple-chatbot';
import "./appAssistentBot.scss";
const AppAssistentBot = ({ hideBotActive }) => {

  const steps = [
    {
      id: '0',
      message: 'Здравствуйте! Чем я могу Вам помочь?',
      trigger: '1',
    },
    {
      id: '1',
      user: true,
      trigger: "2",
    },
    {
      id: "2",
      message: 'Наш специалист с Вами свяжется в ближайшее время',
      end: true,
    }
  ];
  const hideChatBotActive = () => {
    hideBotActive(false);
  }



  return (
    <div className="botAssistent">
      <div className="closeBot" onClick={hideChatBotActive}>
        <span style={{ "fontSize": 30 }}>
          &times;
        </span>
      </div>
      <ChatBot steps={steps} />
    </div>
  );
};

export default AppAssistentBot;
