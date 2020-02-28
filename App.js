import React from 'react';
import Derivavid from './src/Derivavid';
import Pag1 from './src/Pag1';

export default class Abertura extends React.Component {
constructor(props){
 super(props)
 this.state = {
  component : <Derivavid />
 }
}

componentDidMount(){

    this.timeoutHandle = setTimeout(()=>{
      this.setState({ component: <Pag1 /> })
    }, 5000);
}

componentWillUnmount(){
     clearTimeout(this.timeoutHandle);
}

  render() {
    return (
      this.state.component
    );
  }
}