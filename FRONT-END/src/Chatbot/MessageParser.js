class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase()

      if(lowercase.includes('hello')){
        this.actionProvider.greet();
      }
      else if(lowercase.includes('doubt')){
        this.actionProvider.response();
      }
      else if(lowercase.includes('goal'))
        this.actionProvider.goal();

    }
  }
  
  export default MessageParser;