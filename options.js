const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-btn");

saveButton.addEventListener("click", () => {
  const name = nameInput.value;
  chrome.storage.sync.set({
    name,
  }, () => {
    console.log(`이름 설정 완료 ${name}`);
  });
});

chrome.storage.sync.get(['name'], (result) => {
  nameInput.value = result.name;
});




