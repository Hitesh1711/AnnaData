class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }
  errormsg() {
    const message = this.createChatBotMessage(
      "Hey I am sorry I could not understand your problem please fill this form for us to get support",
      {
        widget: "feedbackLinks",
      }
    );
    this.updateChatbotState(message);
  }

  handleweathertLinks = () => {
    const message = this.createChatBotMessage(
      //"Fantastic, I've got the following resources for you on Javascript:",
      "You can click on given link to get weather update:",
      {
        widget: "weathertLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handlecropLinks = () => {
    const message = this.createChatBotMessage(
      //"Fantastic, I've got the following resources for you on Javascript:",
      "You can click on given link to buy/sell crop :",
      {
        widget: "cropLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handlehelplineLinks = () => {
    const message = this.createChatBotMessage(
      //"Fantastic, I've got the following resources for you on Javascript:",
      "You can click on given link to get all helpline numbers:",
      {
        widget: "helplineLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handlecovidLinks = () => {
    const message = this.createChatBotMessage(
      //"Fantastic, I've got the following resources for you on Javascript:",
      "You can click on given link to get Covid-19 update:",
      {
        widget: "covidLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handlepriceLinks = () => {
    const message = this.createChatBotMessage(
      //"Fantastic, I've got the following resources for you on Javascript:",
      "You can click on given link to get Price update:",
      {
        widget: "priceLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handlenewsLinks = () => {
    const message = this.createChatBotMessage(
      //"Fantastic, I've got the following resources for you on Javascript:",
      "You can click on given link to get News update:",
      {
        widget: "newsLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handlefeedbackLinks = () => {
    const message = this.createChatBotMessage(
      //"Fantastic, I've got the following resources for you on Javascript:",
      "You can click on given link to fill feedback form",
      {
        widget: "feedbackLinks",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
