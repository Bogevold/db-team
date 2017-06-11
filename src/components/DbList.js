import React from 'react';
import Db from './Db';

const DbList = (props) => {
  //console.log(props.server.databaser);
  var dbs = [];
  dbs = props.server.databaser.map((db) => {
    return <Db key={"d" + db.sid} server={db} />
  });

  return (
    <div className="dbliste">{dbs}</div>
  );
};

export default DbList;