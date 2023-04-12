const $time = document.getElementById("time");
const $name = document.getElementById("name");
const $timer = document.getElementById("timer");
const $startButton = document.getElementById("start");
const $stopButton = document.getElementById("stop");
const $resetButton = document.getElementById("reset");
const currentTime = new Date().toLocaleTimeString();
$time.textContent = `The time is: ${currentTime}`;

// chrome.action?.setBadgeText({
//   text: "TIME",
// }, () => {
//   console.log("Finished setting badge text.");
// });

chrome.storage?.sync.get(["name"], (result) => {
  const name = result.name ?? "???";
  $name.textContent = `Your name is: ${name}`;
});

const updateTimeElements = () => {
  chrome.storage?.local.get(['timer'], (result) => {
    const time = result.timer ?? 0;
    $timer.textContent = `Timer : ${time}`
  })
}

updateTimeElements()
setInterval(() => updateTimeElements(), 1000)

$startButton.addEventListener("click", () => {
  chrome.storage.local.set({
    proceeding: true,
  })
})

$stopButton.addEventListener("click", () => {
  chrome.storage.local.set({
    proceeding: false,
  })
})

$resetButton.addEventListener("click", () => {
  chrome.storage.local.set({
    proceeding: false,
    timer: 0
  })
})
