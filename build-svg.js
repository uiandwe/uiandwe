let fs = require("fs");
let got = require("got");
let qty = require("js-quantities");

fs.readFile("template.svg", "utf-8", (error, data) => {
  if (error) {
    return;
  }
  
  data = data.replace('{name}', 'uiandwe')
//   data = data.replace('{degC}', degC)
//   data = data.replace('{weatherEmoji}', emojis[icon])
//   data = data.replace('{psTime}', psTime)
//   data = data.replace('{todayDay}', todayDay)
//   data = data.replace('{dayBubbleWidth}', dayBubbleWidths[todayDay])

  data = fs.writeFile("chat.svg", data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
