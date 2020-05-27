var navbar_config_json = {
  "user" : {
    navoption: "user",
    initials : "MM",
    displayindex : 1,
    positionbottom :  false,
    icon : "images/user.png",
    events : [
      { click: handleUserClick }
    ],
    children : [
      {
        type : "SPAN",
        innerHTML: "Meghal Modi",
        classes: "username"
      },
      {
        type : "SPAN",
        innerHTML: "101 - Morristown, NJ",
        classes: "territory",
      },
      {
        type : "SPAN",
        innerHTML: "meghal.modi@kmkconsultinginc.com",
        classes: "email"
      },
      {
        type : "button",
        innerHTML: "Logout",
        classes: "sideBarButton logout",
        events: [
          { click: handleLogoutClick }
        ]
      }
    ]
  },
  "applist" : {
    navoption: "applist",
    displayindex : 2,
    positionbottom :  false,
    icon : "images/dots-menu.png",
    events : [
      { click: handleAppListClick }
    ],
    children : [
      {
        type : "SPAN",
        innerHTML: "PRISM Contest",
        classes: "appname"
      },
      {
        type : "DIV",
        classes: "applink",
        children: [
          {
            type: "IMG",
            src: "images/dashboard.png"
          },
          {
            type: "SPAN",
            innerHTML: "Dashboard"
          }
        ]
      },
      {
        type : "DIV",
        classes: "applink",
        children: [
          {
            type: "IMG",
            src: "images/contest1.png"
          },
          {
            type: "SPAN",
            innerHTML: "Employee List"
          }
        ]
      },
      {
        type : "SPAN",
        innerHTML: "Other",
        classes: "appname"
      },
      {
        type : "DIV",
        classes: "applink",
        children: [
          {
            type: "IMG",
            src: "images/histogram.png"
          },
          {
            type: "SPAN",
            innerHTML: "Business Intelligence Tool"
          }
        ]
      },
      {
        type : "DIV",
        classes: "applink",
        children: [
          {
            type: "IMG",
            src: "images/file.png"
          },
          {
            type: "SPAN",
            innerHTML: "IC Reports"
          }
        ]
      },
      {
        type : "DIV",
        classes: "applink",
        children: [
          {
            type: "IMG",
            src: "images/interview.png"
          },
          {
            type: "SPAN",
            innerHTML: "Call Plan Management"
          }
        ]
      }
    ]
  },
  "download" : {
    navoption: "download",
    displayindex : 3,
    positionbottom :  true,
    icon : "images/download.png",
    children : [
      {
        type : "SPAN",
        innerHTML: "PRISM Contest",
        classes: "appname"
      },
      {
        type : "button",
        innerHTML: "Export To Excel",
        classes: "sideBarButton exportToExcel",
        events: [
        ]
      },
      {
        type : "button",
        innerHTML: "Export To PDF",
        classes: "sideBarButton exportToPDF",
        events: [
        ]
      }
    ]
  },
  "home" : {
    navoption: "home",
    displayindex : 4,
    positionbottom :  true,
    icon : "images/home.png"
  },
  "information" : {
    navoption: "information",
    displayindex : 5,
    positionbottom :  true,
    icon : "images/information.png"
  }
};

window.onload = function() {
  var parent = document.getElementById("divNavBar");
  KMK.NavBar.createNavBar(parent, navbar_config_json);
} 

function handleUserClick() {
  console.log("User");
}

function handleAppListClick() {
  console.log("App-List");
}

function handleLogoutClick() {
  alert("logout");
}