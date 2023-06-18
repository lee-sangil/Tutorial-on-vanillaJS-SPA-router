const routes = [
  {
    path: "/", 
    view: ()=>{document.getElementById('url').textContent = window.location.pathname} 
  },
  { 
    path: "/mypage", 
    view: ()=>{document.getElementById('url').textContent = window.location.pathname} 
  }
];

const App = async () => {
  const pageMatches = routes.map(route => {
    return {
      route: route,
      isMatch: window.location.pathname === route.path,
    };
  });
 
  let match = pageMatches.find(pageMatch => pageMatch.isMatch);
  if (match == undefined) {
    window.history.pushState(null, null, '/');
    App();
  }else {
    match.route.view();
  }
}

App();

document.getElementById('home').addEventListener('click', ()=>{
  window.history.pushState({state: 0}, null, '/');
  App();
})

document.getElementById('page').addEventListener('click', ()=>{
  window.history.pushState({state: 1}, null, '/mypage');
  App();
})

window.addEventListener("popstate", (e)=>{
  console.log(e.state, document.location);
  App();
});
