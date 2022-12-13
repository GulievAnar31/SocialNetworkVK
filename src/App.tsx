import './App.scss'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { UserInfo } from './components/UserInfo'

function App() {

  return (
    <div className="App">
      <Header />
      <Navigation />
      <UserInfo />
    </div>
  )
}

export default App
