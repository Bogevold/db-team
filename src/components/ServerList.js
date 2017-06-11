import React from 'react';
import Server from './Server';

const ServerList = (props) => {
  //console.log(props);
  const servere = props.servere.map((server) => {
    return <Server key={server.navn} server={server} />
  });

  return (
    <div className="serverliste">{servere}</div>
  );
};

export default ServerList;