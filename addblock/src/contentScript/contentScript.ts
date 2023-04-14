(function() {
  const targetUrl = 'https://chat.openai.com/backend-api/conversation';
  
  let originalFetch = window.fetch;
  
  window.fetch = async function(input, init) {
    let requestUrl = typeof input === 'string' ? input : input.url;
    
    if (requestUrl === targetUrl && init && init.method === "POST" && init.body) {
      let originalBody = init.body;
      let jsonData
      if (typeof originalBody === "string") {
        jsonData = JSON.parse(originalBody);
      }
      jsonData.messages[0].content.parts[0] += " in english";
      let modifiedBody = JSON.stringify(jsonData);
      init.body = modifiedBody;
      
      // 수정된 요청 본문을 콘솔에 출력합니다.
      console.log('Modified request body:', modifiedBody);
    }
    
    return originalFetch(input, init);
  };
})();
