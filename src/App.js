import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="box box-1">
        <h1>Wen Liao's Website</h1>
      </div>
      <div className="box box-2">
        <ul>
          <li><a href="https://www.google.com/" target="_blank">Home Page</a></li>
          <li><a href="https://www.google.com/" target="_blank">Photos</a></li>
          <li><a href="https://www.google.com/" target="_blank">Secret Project</a></li>
        </ul>
      </div>
      <div className="box box-3">
        <div className="nested-box"></div>
      </div>
      <div className="box box-4"></div>
      <div className="box box-5"></div>
    </div>
  );
}

export default App;
