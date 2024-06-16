import { Cart } from "./Cart";

export const Header = (props: any) => (
  <header className="header">
    <h1 className="header__title">Магазин книг</h1>
    <Cart {...props} />
  </header>
);