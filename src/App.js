import './App.css';
import {
  AppContentWrapper
} from './style/appStyle';
import Calculator from './compontents/Calculator'
import PictureViewer from './compontents/PictureViewer';

const App = () => {
  return (
    <div className="App">
      <AppContentWrapper>
        <Calculator />
        <PictureViewer />
      </AppContentWrapper>
    </div>
  );
}

export default App;
