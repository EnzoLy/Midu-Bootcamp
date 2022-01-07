import './App.css'
import Message from './components/Message.jsx'

const Description = () => {
  return <p>This is a simple React App</p>;
}

const App = () => {

  return (
    <div className="App">
      <Message message="Hi" color="#000000"/>
      <Message message="Como estas" color="#F58840"/>
      <Message message="Todo bien?" color="#B85252"/>
      <Description/>
    </div>
  );
};

export default App;