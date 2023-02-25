# NytPayWall
Small javascript snippet intended to modify css and html elements to allow the omission of a paywall. 

## How to use
This guide assumes you will be using the following tooling.

* Google Chrome developer tools
* Contents of `srcnytPaywallToolkit.js` file.

### Procedure 
Navigate to the page displaying the paywall and follow the instruction: 
1. Press `Ctrl+Shift+I` to open Developer Tools in Chrome.
2. Navigate to the `Sources` Tab.
3. Select the `Snippets` tab within the Sources tab.
4. Click on the `+ New snippet` button.
5. Copy and paste the following code into the editor: 

```js
var globalDisplayStyleName = "display";
var globalDisplayStyleValue = "none";
var paywallFooterIdName = "gateway-content";
var gradientClassStyleName = "css-gx5sib"
var positionElementClassName = "css-mcm29f";
var positionStyleName = "position";
var positionStyleValue = "relative"

var paywallFooter =
    document.getElementById(paywallFooterIdName);

var siteContent =
    document.getElementsByClassName(gradientClassStyleName);

var positionalElement =
    document.getElementsByClassName(positionElementClassName);

paywallFooter.style[globalDisplayStyleName] = globalDisplayStyleValue;

for (let index = 0; index < siteContent.length; index++) {
    siteContent[index]
        .style[globalDisplayStyleName] = globalDisplayStyleValue;

    positionalElement[index]
        .style[positionStyleName] = positionStyleValue;
}
```
6. Press `Ctrl+Enter`.

### So, you're wondering if you have to do this everytime? 

No, you'll just have to open your saved snippet with `F12` and then use `Ctrl+Enter` to execute the javascript.