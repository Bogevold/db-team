import React from 'react';

const Db = (db) => {
//  console.log(db);
  return (
    <div className="db">
      {/*{servere.server.navn}*/}
      sid:{db.server.sid}:{db.server.port}
    </div>
  )
};

export default Db;