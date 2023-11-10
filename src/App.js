import './App.scss';
import HeaderComponent from './component/HeaderComponent/HeaderComponent';
import MenubarComponent from './component/MenubarComponent/MenubarComponent';
import BoardComponent from './component/BoardComponent/BoardComponent';
import FooterComponent from './component/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="AppContent">
        <MenubarComponent />
        {/* <ContentComponent /> */}
        <BoardComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
