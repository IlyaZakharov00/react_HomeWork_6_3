import React from "react";
import { Header } from "./Header";
import { Catalog } from "./Catalog";

export class App_ extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
      items: []
    };
  }

  render() {
    const { items, isOpen } = this.state

    return (
      <div>
        <Header
          items={items} isOpen={isOpen}
          toggleCart={() => this.toggleCart()}
          clearCart={() => this.clearCart()}
        />
        <Catalog
          addProduct={(product: any) => this.addProduct(product)}
          checkInCart={(product: any) => this.checkInCart(product)}
        />
      </div>
    );
  }

  toggleCart() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  addProduct(product: { title: any; }) {
    this.setState({
      items: [
        ...this.state.items.filter((item: { title: any; }) => item.title !== product.title),
        product,
      ]
    });
  }

  clearCart() {
    this.setState({
      items: [],
    });
  }

  checkInCart(product: { title: any; }) {
    return !this.state.items.find((item: { title: any; }) => item.title === product.title);
  }
}
  