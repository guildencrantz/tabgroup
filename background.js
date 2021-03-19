chrome.commands.onCommand.addListener(function(command) {
  switch(command) {
    case "new-tab-in-group":
      chrome.tabs.query({active: true, currentWindow: true}, function(curr) {
        var curr = curr[0];
        chrome.tabs.create({index: curr.index+1}, function(newTab) {
          opts = {tabIds: newTab.id}
          // There should probably be an option to determine whether or not this
          // command creates a new group.
          if (curr.groupId != -1) { // Only move to group if we're in a group
            opts.groupId = curr.groupId
          } 
          chrome.tabs.group(opts);
        });
      });
      break;
    case "new-tab-group":
      chrome.tabs.create({}, function(tab) {
        chrome.tabs.group({tabIds: tab.id})
      });
      break;
  }
});
