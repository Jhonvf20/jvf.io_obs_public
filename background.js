let enable = "InvokeApi";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ enable });
  console.log("Default property set to " + enable);
});