import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HeaderApp from './component/HeaderApp'
import LP from './pages/LandingPage/LP'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import DetailKelas from './pages/DetailKelas/DetailKelas'
import DashboardAdmin from './pages/AdminPanel/DashboardAdmin'
import KelolaPengguna from './pages/AdminPanel/KelolaPengguna'
import Home from './pages/Home/Home'
import Profile from './pages/Profil/Profile'
import modalDafarKelas from './component/ModalDaftarKelas'
import MenuKelas from './pages/Kelas/MenuKelas'

const App = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    
    <Router>
      <HeaderApp />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
     
      {userInfo ? (
        <main className='py-3'>
          <Container>
         
           <Route path='/' component={Home} exact />
            <Route path='/Dashboard' component={Home} exact />
            <Route path='/Kelas' component={DetailKelas} exact />
//             <Route path='/Kelas' component={MenuKelas} exact />
            <Route path='/Profil' component={Profile} exact />

            {/* <Route
            path='/admin/Home'
            component={DashboardAdmin}
            exact
          />
        
          <Route path='/admin/Home' component={DashboardAdmin} exact/>
          <Route path='/admin/kelolapengguna' component={KelolaPengguna} />
          <Route path='/' component={DashboardAdmin} exact /> */}
          </Container>
        </main>
      ) :
          (
            <Container>
          <Route path='/' component={LP} exact />
              
              </Container>
        )}
      </Router>
     
  )
}

export default App
