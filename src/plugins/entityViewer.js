import React from 'react';

const plugin = ({ match }) => (
  <div>
    <h2> entityViewer Plugin UI.. </h2>
    <h3>{match.params.pluginId}</h3>
  </div>
)

export {plugin};
