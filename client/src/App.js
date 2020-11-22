import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HeaderApp from './component/HeaderApp'
import LP from './pages/LandingPage/LP'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import DetailKelas from './pages/DetailKelas/DetailKelas'
import DashboardAdmin from './pages/AdminPanel/DashboardAdmin'
import KelolaPengguna from './pages/AdminPanel/KelolaPengguna'


const App = () => {
  return (
    <Router>
      <HeaderApp />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />

      <Route path='/DetailKelas' component={DetailKelas} />

      <main className='py-3'>
        <Container>

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
      <LP />
    </Router>
  )
}

export default App
