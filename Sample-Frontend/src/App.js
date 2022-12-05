import './App.css';
import './bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import MyNotes from './components/MyNotes';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LoginForm} exact/>
      <Route path="/mynotes" component={()=><MyNotes/>} />
    </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
