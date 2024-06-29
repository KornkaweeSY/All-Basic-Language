module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  },
  {
    "css.validate": false,
    "liveServer.settings.port": 5501,
    "tailwindCSS.emmetCompletions": true,
    "tailwindCSS.includeLanguages": {
      "plaintext": "html",
      "javascript":"javascript"  
    },
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
    },
    "tailwindCSS.classAttributes": [
        "class",
        "className",
        "ngClass"
    ]}