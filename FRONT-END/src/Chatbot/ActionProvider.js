class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   greet = () =>{
    const message = this.createChatBotMessage('Hello! How can I help you?')
    this.addMessageToState(message);
   };

   response = (doubt) =>{
    const message = this.createChatBotMessage('Hello, Please tell me your doubt...')
    this.addMessageToState(message);
   };

   goal = (goal) =>{
    const message = this. createChatBotMessage('To provide a platform for students who are interested in startups..')
    this.addMessageToState(message);
   }


   addMessageToState = (message) =>{
    this.setState(prevState =>({
      ...prevState,
      messages: [...prevState.messages, message],
    }) );

   };


 }
 
 export default ActionProvider;