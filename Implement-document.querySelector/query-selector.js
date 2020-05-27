
//Implementation
function matchElement(elem, query) {
  return elem.tagName === query.toUpperCase()
}

function iterateDOM(elem, callBack, query, result) {
  if (callBack(elem, query)) {
      result.push(elem);
  }

  if (elem.childNodes && elem.childNodes.length > 0) {
    for (let i = 0; i < elem.childNodes.length; i++) {
      iterateDOM(elem.childNodes[i], callBack, query, result);
    }
  }
}

HTMLDocument.prototype.myQuerySelector = function(query) {
  let result = [];
  iterateDOM(this, matchElement, query, result);

  return result[0];
}

HTMLDocument.prototype.myQuerySelectorAll = function(query) {
  let result = [];
  iterateDOM(this, matchElement, query, result);

  return result;
}

//Call
console.log(document.myQuerySelector("input"));
console.log(document.myQuerySelectorAll("input"));