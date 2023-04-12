chrome.alarms.create({
  periodInMinutes: 1 / 60,
})

chrome.alarms?.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer", "proceeding"], (result) => {
    const isProceeding = result.proceeding ?? true;
    const time = result.timer ?? 0;
    
    if(!isProceeding) return;
    
    chrome.storage.local.set({
      timer: time + 1,
    })
    
    chrome.action.setBadgeText({
      text: `${time + 1}`
    })
    if(time % 3600 === 0 && time !== 0) {
      this.registration.showNotification("Chrome Timer Extension", {
        body: "1시간 지남",
        icon: "icon.png"
      });
    }
  })
})
