import React from 'react';
import DbList from './DbList';
import DeployList from './DeployList';

const Server = (servere) => {
  var dbs = [];
  if (servere.server.databaser){
    console.log(Object.keys(servere.server.databaser).length);
    dbs = <DbList server={servere.server}/>
  } else {
    dbs = <div/>  
  }
  
  var apps = [];
  if (servere.server.apps){
    console.log(Object.keys(servere.server.apps).length);
    apps = <DeployList server={servere.server}/>
  } else {
    apps = <div/>  
  }

  
  return (
    <div className="server">
      {servere.server.navn}
      {apps}
      {dbs}      
    </div>
  )
};

export default Server;