import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './component/HeaderComponent/HeaderComponent';
import MenubarComponent from './component/MenubarComponent/MenubarComponent';
import BoardComponent from './component/BoardComponent/BoardComponent';
import ContentComponent from './component/ContentComponent/ContentComponent';
import NotFoundComponent from './component/NotFoundComponent/NotFoundComponent';
import FooterComponent from './component/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <div className="AppContent">
          <MenubarComponent />
          <Routes>
            <Route path="/" exact={true} element={<BoardComponent />} />
            <Route
              path="/post/:postId"
              exact={true}
              element={<ContentComponent />}
            />
            <Route path="*" exact={true} element={<NotFoundComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
