import React, { Component } from 'react';

// imports----------
// navbar
// footer
// sidedrawer
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

// -----------------

class Layout extends Component {

  render() {
    return(
      <React.Fragment>
        <Navbar/>
        {/* <Sidedrawer/> */}
        <Main/>
        <Footer/>
      </React.Fragment>
    );
  }
};

export default Layout;