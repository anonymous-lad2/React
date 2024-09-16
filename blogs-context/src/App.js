import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {

  const {fetchData} = useContext(AppContext)

  useEffect(() => {
    fetchData()
  }, [])
  return (

    <div>
      <Header />

      <Pagination className='w-full flex justify-center items-center'/>

      <Footer />
    </div>

  );
}

export default App;
