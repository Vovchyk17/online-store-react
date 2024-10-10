import logo from '../logo.png'

import Cart from './Cart'

export default function Header() {
  return (
    <header className="App-header border-b border-neutral-200 bg-white py-4">
      <div className="container relative flex items-center lg:justify-center">
        <a href="/" className="block max-w-[75%]">
          <img src={logo} alt="logo" />
        </a>
        <Cart />
      </div>
    </header>
  )
}
