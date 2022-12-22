import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {

  return (
    <div className="bg-sky-400 overflow-hidden">
      <div className='container mx-auto sm:max-w-2xl p-4 gap-2  flex flex-col justify-center min-h-screen  '>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>

  );
}

export default App;
