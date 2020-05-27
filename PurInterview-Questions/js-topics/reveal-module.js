
// Turn this object into a module that only exposes render method
/*
let module = {
  data: [],
  render: () => {

  },
  add: () => {

  },
  remove: () => {

  }
};

module.render();
*/

let module = (function(){
  let data = [];
  let _render = () => {
    console.log("Hello")
  };
  let _add = () => {

  };
  let _remove = () => {

  }
  return {
    render : _render
  }
})();

let r = module.render;
r();