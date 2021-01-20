# Word Web App custom keyboard shortcuts

This Chrome extension demonstrates how to add your own custom keyboard shortcuts for Word Web App. Add to Chrome via "Load unpacked" (in developer mode).

The basic implementation replaces the default `redo` shortcut of `⌘ + Y` with the standard macOS one of `⌘ + ⇧ + Z`. To add your own, edit the switch statement in [js/contentScript.js](js/contentScript.js) to pass the expected key, and update [manifest.json](manifest.json) to add your preferred command.

You may need to visit `chrome://extensions/shortcuts` to set up your new keyboard shortcuts when you first install the extension.

Pull requests and improvements very welcome.

License: MIT.
