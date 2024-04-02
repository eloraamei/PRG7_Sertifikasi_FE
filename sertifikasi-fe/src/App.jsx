import ListUserComponent from './components/users/ListUserComponent'
import HeaderComponent from './components/templates/HeaderComponent'
import FooterComponent from './components/templates/FooterComponent'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import UserComponent from './components/users/UserComponent'

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
          <Route path='/' element= {<ListUserComponent/> }></Route>
          <Route path='/users' element = {<ListUserComponent/>}></Route>
          <Route path='/add-user' element = {<UserComponent/>}></Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
