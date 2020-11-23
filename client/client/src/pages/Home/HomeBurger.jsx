import { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HomeBurger.css';




// const reducers = {
//     // Your other reducers go here
//     burgerMenu // Must be mounted at 'burgerMenu'
//   };

//   const reducer = combineReducers(reducers);
//   const store = createStore(reducer);


// class HomeBurger extends Component {
//     showSettings ( event) {
//         event.preventDefault();
        

//     }
//     render() {
//         return(
//             <Menu>
//                 <a id="home" className="menu-item" href="/">Home</a>
//                 <a id="about" className="menu-item" href="/">About</a>
//                 <a id="contact" className="menu-item" href="/">contact</a>
//                 <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
//             </Menu>
//         );
//     }
// }

// export default HomeBurger(Menu)

export default props => {
    return (
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/salads">
          Profile
        </a>
        <a className="menu-item" href="/pizzas">
          Kelas
        </a>
        <a className="menu-item" href="/desserts">
          Portofolio
        </a>
      </Menu>
    );
  };
