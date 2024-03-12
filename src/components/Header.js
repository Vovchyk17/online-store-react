import logo from '../logo.png'

export default function Header() {
  return (
    <header className="App-header border-b border-neutral-200 bg-white py-4">
      <div className="container flex items-center justify-center">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
    </header>
  )
}
