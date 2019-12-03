import React from 'react';
import { Home } from './components/Home'
// import { Subscriber } from './components/Subscriber'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      shouldUpdate: true,
      data: {},
      setUpdate: ()=>{
        if(!this.state.shouldUpdate){
          this.setState({shouldUpdate:true});
        }
      },
      updateData: (data)=> {
        console.log("updateData")
        if(this.state.data !== data){
          this.setState({data, shouldUpdate:false});
        }
      },
    }
  }

  render(){
    return (
      <div>
        <Home page={0}
              pagesize={5}
              sortby={false}
              order={false}
              firstvalmin={false}
              secondvalmin={false}
              summin={false}
              mulmin={false}
              firstvalmax={false}
              secondvalmax={false}
              summax={false}
              mulmax={false}
              />
        {/* <Subscriber/> */}
      </div>
    );
  }
}

export default App;
