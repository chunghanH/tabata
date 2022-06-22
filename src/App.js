import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tabata from './tabata/Tabata';
import TabataForm from './tabata/tabata-form/TabataForm';
import TabataTimer from './tabata/tabata-timer/TabataTimer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tabata />}>
            <Route path="tabata-form" element={<TabataForm />} />
            <Route path="tabata-timer" element={<TabataTimer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
