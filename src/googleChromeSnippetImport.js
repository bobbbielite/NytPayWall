let importSnippets = [
    {
        "id": "69",
        "name": "NewYorkTimes Paywall Skip",
        "content": "var globalDisplayStyleName = \"display\";\r\nvar globalDisplayStyleValue = \"none\";\r\nvar paywallFooterIdName = \"gateway-content\";\r\nvar gradientClassStyleName = \"css-gx5sib\"\r\nvar positionElementClassName = \"css-mcm29f\";\r\nvar positionStyleName = \"position\";\r\nvar positionStyleValue = \"relative\"\r\n\r\nvar paywallFooter =\r\n    document.getElementById(paywallFooterIdName);\r\n\r\nvar siteContent =\r\n    document.getElementsByClassName(gradientClassStyleName);\r\n\r\nvar positionalElement =\r\n    document.getElementsByClassName(positionElementClassName);\r\n\r\npaywallFooter.style[globalDisplayStyleName] = globalDisplayStyleValue;\r\n\r\nfor (let index = 0; index < siteContent.length; index++) {\r\n    siteContent[index]\r\n        .style[globalDisplayStyleName] = globalDisplayStyleValue;\r\n\r\n    positionalElement[index]\r\n        .style[positionStyleName] = positionStyleValue;\r\n}"
      }
 ];
InspectorFrontendHost.setPreference("scriptSnippets", JSON.stringify(importSnippets));