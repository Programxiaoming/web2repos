import './App.css';
import './bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import MyNotes from './components/MyNotes';
import {BrowserRouter, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
