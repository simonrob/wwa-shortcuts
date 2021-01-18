chrome.runtime.onMessage.addListener(function (message) {
	const { command } = message;
	// console.log('Received command: ' + command + "; triggering replacement KeyboardEvent");
	switch (command) {
		case "redo":
			document.dispatchEvent(
				new KeyboardEvent("keydown", {
					keyCode: "Y".charCodeAt(0), // 89
					// key: "Y", // doesn't work on its own
					// shiftKey: false,
					// ctrlKey: false,
					// altKey: false,
					metaKey: true
				})
			);
			break;

		default:
			console.log("No handler found for command: " + command);
			break;
	}
});