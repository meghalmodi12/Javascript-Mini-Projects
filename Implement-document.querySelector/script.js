Document.prototype.myQuerySelectorAll = function(query) {
  const elements = [];

  iterateDOM(this, function(elem){
    if (matchElement(elem, query)) {
      elements.push(elem);
    }
  });

  return elements;
}

Document.prototype.myQuerySelector = function(query) {
  return myQuerySelectorAll(query)[0];
}

function matchElement(element, query) {
  return element.tagName === query.toUpperCase() || element.classList.contains(query);
}

function iterateDOM(element, callBack) {
  if(callBack(element)){
    console.log(element);
  }
  if (element.childNodes.length > 0) {
    for(let i in element.childNodes) {
      iterateDOM(element.childNodes[i], callBack);
    }
  }
}

/*
function iterDOM(element, callBack) {
  const nodes = [];
  nodes.push(element);

  do {
      element = nodes.shift();
      console.log(element);
      callBack(element);

      nodes.unshift(element.children);
  } while (nodes.length > 0);

}
*/

var result = document.myQuerySelectorAll('a');
console.log(result);

