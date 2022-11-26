import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.scss';
import Chats from './routes/Chats';
import Friends from './routes/Friends';
import Find from './routes/Find';
import More from './routes/More';
import Chatting from './routes/Chatting';
import Profile from './routes/Profile';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Friends />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/find' element={<Find />} />
        <Route path='/More' element={<More />} />
        <Route path='/Chatting' element={<Chatting />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
