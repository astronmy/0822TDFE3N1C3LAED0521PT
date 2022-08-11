import React from "react";
import './index.css'

export default class Container extends React.Component{
    constructor(props){
      super(props)
    }

    showAlert(){
      alert("HOla")
    }

    render(){
        return (
          <>
            <button onClick={this.showAlert}>Click me!</button>
            <div className="container">
                <h2>Bienvenidos</h2>

            </div>
          </>
        )
    }
}