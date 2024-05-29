import react from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/Home';
import MainLayout from './components/layout';
import ReferAFriend from './pages/ReferAFriend';

 const App = () =>{
  return (
    <>
    <BrowserRouter>
    <MainLayout>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="refer-a-friend" element={<ReferAFriend/>}/>
     
    </Routes>
    </MainLayout>
     
    </BrowserRouter>
    </>
  )
}

export default App;