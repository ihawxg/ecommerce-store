

import Header from "./Components/Header";
import Main from "./Components/Main";
import Tshirts from "./Components/Tshirts";
import './reset.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';





function App() {

  return (
    <BrowserRouter>
        <Header></Header>
        <Main></Main>
        <Routes>
          <Route path ="/shoes"></Route>
          <Route path ="/bags"></Route>
          <Route path ="/t-shirts" element={<Tshirts/>}></Route>
          <Route path ="/jeans" ></Route>
          <Route path ="/watches"></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
