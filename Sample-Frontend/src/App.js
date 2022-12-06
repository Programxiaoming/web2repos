import './App.css';
import './bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import MyNotes from './components/MyNotes';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import UserPage from './components/UserPage';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/mynotes" element={<MyNotes />} />
      <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
