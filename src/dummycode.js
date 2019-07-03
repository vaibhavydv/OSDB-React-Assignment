// Style Use Example

//---------------------------

export default {
    osdbMenu: {
      height: '81px',
      width: '99%',
      border: '1px solid #6849D7',
      backgroundColor: '#6849D7',
      color : '#ffffff',
    }
  }
  


//----------------------------

// Use in main js file

//==============================

{/* <div className={'classes.osdbMenu'}> */}

//==============================

// Use Routes

//-----------------------------------
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

// Create Routes
const routing = (
<Router>
      <Route exact path="/" component={App} />
      <Route path="/page-one" component={pageOne} />
      <Route path="/page-two" component={pageTwo} />
</Router>
)

// Use Routes "a href" is "Link to" 
{/* <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-one">Page 1</Link>
        </li>
        <li>
          <Link to="/page-two">page 2</Link>
        </li>
      </ul>
</div> */}
//-----------------------------------