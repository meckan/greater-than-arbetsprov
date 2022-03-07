import './style/App.css';
import DummyList from './views/DummyList'
import StatusMessage from './components/StatusMessage';
import StatusProvider from './context/StatusContext';

function App() {


  return (
    <div className="App">
      <h1>Greater Than arbetsprov</h1>
      <StatusProvider>
        <StatusMessage />
        <DummyList />
      </StatusProvider>

    </div>
  );
}

export default App;
