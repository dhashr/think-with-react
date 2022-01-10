import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ReactContainer extends React.Component{
  render(){
      return (
          <div>Hello! welcome to prograd 
              <div> Let's rock and roll</div>
          </div>
      ) 
  }
}
ReactDOM.render(<ReactContainer />, document.getElementById('root')
);

