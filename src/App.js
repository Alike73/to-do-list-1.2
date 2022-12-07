import { Component } from 'react';
import './App.css';
import { Main } from './Main';
import {Helmet} from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>TO-DO LIST</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="To_do List application" />
        </Helmet>
        <Main />
      </div>
    )
  }
  
}
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
