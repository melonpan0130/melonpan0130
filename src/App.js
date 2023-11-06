import './App.scss';
import HeaderComponent from './component/HeaderComponent/HeaderComponent';
import MenubarComponent from './component/MenubarComponent/MenubarComponent';
import ContentComponent from './component/ContentComponent/ContentComponent';
import FooterComponent from './component/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="AppContent">
        <MenubarComponent />
        <ContentComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
