// Load Google Fonts API
WebFont.load({
    google: {
      families: ['Amiri', 'Lateef', 'Noto Naskh Arabic', 'Tajawal', 'Reem Kufi']
    }
  });
  
  function updateFont() {
    var fontSelector = document.getElementById("fontSelector");
    var selectedFont = fontSelector.options[fontSelector.selectedIndex].value;
  
    var fontSize = document.getElementById("fontSize").value + "px";
  
    var outputElement = document.getElementById("output");
    outputElement.style.fontFamily = selectedFont;
    outputElement.style.fontSize = fontSize;
  
    // Load external font from Google Fonts
    WebFont.load({
      google: {
        families: [selectedFont]
      },
      active: function() {
        // Callback function when the font is successfully loaded
        updateText();
      }
    });
  }
  
  function updateText() {
    var textInput = document.getElementById("textInput").value;
    var outputElement = document.getElementById("output");
    outputElement.innerText = textInput;
  }

  













  