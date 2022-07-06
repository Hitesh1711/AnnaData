// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("weather")) {
      this.actionProvider.handleweathertLinks();
    }
    if (lowerCaseMessage.includes("covid")) {
      this.actionProvider.handlecovidLinks();
    }
    if (lowerCaseMessage.includes("price")) {
      this.actionProvider.handlepriceLinks();
    }
    if (lowerCaseMessage.includes("news")) {
      this.actionProvider.handlenewsLinks();
    }
    if (lowerCaseMessage.includes("crop")) {
      this.actionProvider.handlecropLinks();
    }
    if (lowerCaseMessage.includes("feedback")) {
      this.actionProvider.handlefeedbackLinks();
    }
    if (lowerCaseMessage.includes("helpline")) {
      this.actionProvider.handlehelplineLinks();
    }
  }
}

export default MessageParser;
