import React from "react";
import { CartView } from "./CartView";

export class Cart extends React.Component<any, any> {
  oldState: any;
  oldProps: any;
  
  constructor(props: any){
    super(props)
    this.oldState = undefined;
  }
  
  checkState(){
    if(this.oldState !== this.props.isOpen || (this.props.isOpen && this.props.items.length !== 0)){
      this.oldState = this.props.isOpen;
      return true;
      
    } else {
      return false
    }
    
  }

  componentDidMount(): void {
    this.oldProps = this.props
  }
  
  render() {
    if(this.checkState()){
      console.log('render с новыми пропсами')
      return (
        <CartView {...this.props} />
      );
    } else {
      console.log('render со старыми пропсами')
      return (
        <CartView {...this.oldProps} />
      );
    }
  }
}