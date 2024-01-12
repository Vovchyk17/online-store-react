import logo from '../logo.png'

export default function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
    </header>
  )
}
