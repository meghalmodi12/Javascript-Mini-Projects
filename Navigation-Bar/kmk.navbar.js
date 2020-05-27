
if (!KMK) {
  var KMK = {};
}

if (!KMK.NavBar) {
  KMK.NavBar = {
    version : 1,
    description : "",
    selectedNavOption : null,
    navOptions : []
  };

  KMK.NavBar.createNavBar = function(_container, _config) {
    var oDiv = document.createElement("DIV");
    oDiv.classList.add("kmk-navbar");

    // Append oDiv to container
    _container.appendChild(oDiv);

    // Create side menu
    KMK.NavBar.createSlideMenu(_container);

    // Prepare nav options array
    for (var property of Object.keys(_config)) {
      KMK.NavBar.navOptions.push(_config[property]);
    }

    // Sort array based on displayindex property
    KMK.NavBar.navOptions.sort(function(a, b){
      return a.displayindex - b.displayindex;
    });

    // Create navigation options
    KMK.NavBar.navOptions.forEach(function(option){
      KMK.NavBar.createNavOption(oDiv, option);
    });

    oDiv.addEventListener("click", KMK.NavBar.handleNavOptionClick);

  };

  KMK.NavBar.createNavOption = function(_container, _config) {
    var oDivInitials;
    var oDivNavOption = document.createElement("DIV");
    var oImgNavOption = document.createElement("IMG");
    var oDivBottomPlaceHolder = document.getElementsByClassName("kmk-navbar-bottom")[0];

    oImgNavOption.src = _config.icon;
    oImgNavOption.classList.add("kmk-navoption-icon");
    oImgNavOption.setAttribute("data-navoption", _config.navoption);

    // Bind events
    if(_config.events) {
      _config.events.forEach(function(event){
        oImgNavOption.addEventListener(Object.keys(event)[0], Object.values(event)[0]);
      });
    }

    oDivNavOption.classList.add("kmk-navoption");
    oDivNavOption.appendChild(oImgNavOption);

    // Check for initials
    if(_config.initials) {
      oDivInitials = document.createElement("DIV");
      oDivInitials.classList.add("kmk-userinitials");
      oDivInitials.innerHTML = _config.initials;
      oDivNavOption.appendChild(oDivInitials);
    }

    if(_config.positionbottom) {
      if (oDivBottomPlaceHolder === undefined) {
        oDivBottomPlaceHolder = document.createElement("DIV");
        oDivBottomPlaceHolder.classList.add("kmk-navbar-bottom");
        _container.appendChild(oDivBottomPlaceHolder);
      }
      oDivBottomPlaceHolder.appendChild(oDivNavOption);
    }
    else {
      _container.appendChild(oDivNavOption);
    }
  };

  KMK.NavBar.createSlideMenu = function(_container) {
    var oDiv = document.createElement("DIV");
    var oDivSideBarContainer = document.createElement("DIV");
    var oDivSideBarCloseContainer = document.createElement("DIV");
    var oImgSideBarClose = document.createElement("IMG");

    oDivSideBarCloseContainer.appendChild(oImgSideBarClose);
    oDiv.appendChild(oDivSideBarCloseContainer);
    oDiv.appendChild(oDivSideBarContainer);
    oDiv.addEventListener("click", KMK.NavBar.handleSideBarClick);

    oDiv.classList.add("kmk-navbar-sidebar");
    oDivSideBarContainer.classList.add("kmk-navbar-sidebar-content");
    oDivSideBarCloseContainer.classList.add("kmk-navbar-sidebar-close");

    oImgSideBarClose.src = 'images/delete.png';
    oImgSideBarClose.setAttribute("id", "imgCloseSideBar");

    _container.appendChild(oDiv);
  };

  KMK.NavBar.handleNavOptionClick = function(event) {
    event.stopPropagation();

    var oDiv = document.getElementsByClassName("kmk-navbar-sidebar")[0];

    // Remove active class
    document.querySelectorAll(".kmk-navoption").forEach(function(elem){
      elem.classList.remove("kmk-navoption-active");
    });

    if(event.target.classList.contains("kmk-navoption-icon")) {
      if (KMK.NavBar.selectedNavOption === event.target.dataset.navoption) {
        oDiv.style.display = "none";
        KMK.NavBar.selectedNavOption = null;
      }
      else {
        var oDivContent = document.getElementsByClassName("kmk-navbar-sidebar-content")[0];
        var selectedOptionConfig = KMK.NavBar.navOptions.find(function(option) {
          return option.navoption === event.target.dataset.navoption;
        });

        event.target.parentElement.classList.add("kmk-navoption-active");

        oDivContent.innerHTML = "";
        oDiv.style.display = "block";

        KMK.NavBar.selectedNavOption = event.target.dataset.navoption;

        if(selectedOptionConfig.children && selectedOptionConfig.children.length > 0) {
          selectedOptionConfig.children.forEach(function(elem) {
            KMK.NavBar.renderSideBar(elem, oDivContent);
          });
        }
        else {
          oDivContent.innerHTML = "";
        }
      }
    }
  };

  KMK.NavBar.handleSideBarClick = function() {
    event.stopPropagation();

    if(event.target.id === "imgCloseSideBar") {
      var oDiv = document.getElementsByClassName("kmk-navbar-sidebar")[0];
      var oDivContent = document.getElementsByClassName("kmk-navbar-sidebar-content")[0];
      
      oDivContent.innerHTML = "";
      oDiv.style.display = "none";

      // Remove active class
      document.querySelectorAll(".kmk-navoption").forEach(function(elem){
        elem.classList.remove("kmk-navoption-active");
      });
    }
    else {

    }
  };

  KMK.NavBar.renderSideBar = function(_config, _container) {
    var oDiv = document.createElement("DIV");
    var oElement = document.createElement(_config.type);

    oDiv.appendChild(oElement);
    _container.appendChild(oDiv);

    if(_config.src) {
      oElement.src = _config.src;
    }

    if(_config.innerHTML) {
      oElement.innerHTML = _config.innerHTML;
    }

    if(_config.classes) {
      var arrClass = _config.classes.split(" ");
      arrClass.forEach(function(cls) {
        oElement.classList.add(cls);
      })
    }

    if(_config.events) {
      _config.events.forEach(function(event){
        oElement.addEventListener(Object.keys(event)[0], Object.values(event)[0]);
      });
    }

    if(_config.children) {
      for(let i = 0; i < _config.children.length; i++) {
        KMK.NavBar.renderSideBar(_config.children[i], oElement);
      }
    }

    return oDiv;
  };
}