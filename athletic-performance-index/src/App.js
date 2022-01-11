import { Route, Routes } from 'react-router-dom';
import DisplayBody from './components/DisplayBody';
import DisplayHome from './components/DisplayHome';
import Navbar from './components/Navbar';
import DisplayDescription from './components/DisplayDescription';
import NewExercise from './components/NewExercise';
import Footer from './components/Footer';
function App() {
  return (
    <>
          <Navbar />
          <Routes>
            <Route path="/" element={<DisplayHome />} />
            <Route path="/:name" element={<DisplayBody />} />
            <Route path="/:name" element={<DisplayBody />} />
            <Route path="/:name" element={<DisplayBody />} />
            <Route path="/:name" element={<DisplayBody />} />
            <Route path="/:name" element={<DisplayBody />} />
            <Route path="/:name" element={<DisplayBody />} />
            <Route path="/:name/:id" element={<DisplayDescription />} />
            <Route path="/new" element={<NewExercise />} />
          </Routes>
          <Footer />
    </>
  );
};

export default App;
