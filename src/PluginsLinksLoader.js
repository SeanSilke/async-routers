const PluginsLinksLoader = new Promise((cd)=>{
  setTimeout(function () {
    cd(['graph', 'entityViewer', 'profileViewer'])
  }, 1500);
})

export {PluginsLinksLoader}
