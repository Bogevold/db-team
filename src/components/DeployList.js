import React from 'react';
import Deploy from './Deploy';

const DeployList = (props) => {
  //console.log(props.server.databaser);
  var deps = [];
  deps = props.server.apps.map((apps) => {
    return <Deploy key={"d" + apps.navn} server={apps} />
  });

  return (
    <div className="deployliste">{deps}</div>
  );
};

export default DeployList;