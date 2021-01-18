chrome.commands.onCommand.addListener(function (command) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { command });
		// console.log("Received command: " + command + "; passing to tab");
	});
});
