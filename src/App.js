import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import IconSelectPage from "./pages/IconSelectPage";

function App() {

  return (
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path='/' element={<IconSelectPage/>}/>
              <Route path='/mainPage' element={<MainPage/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>

  );
}

export default App;
