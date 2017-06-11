import React from 'react';
import JqxTabs from 'jqwidgets-framework/jqwidgets-react/react_jqxtabs';

class NavBar extends React.Component {
  render () {
            let tabsHTML = `
          <ul>
              <li style="margin-left: 30px;">Node.js</li>
              <li>JavaServer Pages</li>
              <li>Active Server Pages</li>
              <li>Python</li>
              <li>Perl</li>
          </ul>`;
          return (
            <div>
              <JqxTabs ref='myTabs' template={tabsHTML} width={'90%'} height={200} position={'top'} /> 
            </div>
          )
  }
}

export default NavBar;