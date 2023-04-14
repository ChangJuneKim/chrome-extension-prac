const EndpointConversation = 'https://chat.openai.com/backend-api/conversation';

window.ZIPPYZIGGY = {
  fetch: (window._fetch = window._fetch || window.fetch),
  
  async init() {
    console.log("확장프로그램 init");
    
    this.replaceFetch();
    console.log(window.fetch);
  },
  
  replaceFetch() {
    window.fetch = async (...t) => {
      console.log(t[0], EndpointConversation);
      if (t[0] !== EndpointConversation) return this.fetch(...t);
      
      try {
        const options = t[1];
        const body = JSON.parse(options.body);
        
        const prompt = body.messages[0].content.parts[0];
        
        body.messages[0].content.parts[0] = `${prompt}를 영어로 번역해줘`;
        
        options.body = JSON.stringify(body);
        
        return this.fetch(t[0], options);
      } catch (err) {
        console.error('Error modifying request body', err);
        
        return this.fetch(...t);
      }
    };
  },
};

window.ZIPPYZIGGY.init();
