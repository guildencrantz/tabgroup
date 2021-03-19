document.querySelector('#configureShortcuts').addEventListener('click', function() {
  chrome.tabs.create({
    "url": "chrome://extensions/shortcuts",
    "selected": true
  })
});
