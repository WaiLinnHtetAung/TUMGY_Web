
import logo from '../assets/images/logo.png'; 
import '../assets/css/loader.css'
import { useEffect } from 'react';

const PageLoading = () => {
    useEffect(() => {
        // Disable scroll
        document.body.style.overflow = 'hidden';
    
        return () => {
          // Re-enable scroll on unmount
          document.body.style.overflow = '';
        };
    }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center min-h-screen bg-zinc-500/90 backdrop-blur-sm">
      <img
        src={logo}
        alt="Logo"
        className="w-18  lg:w-28 xl:w-36 h-20 lg:h-28 xl:h-36 animate-flip mb-3"
      />
        <div className="loader">
            <p className="text">
                <span className="letter letter1">L</span>
                <span className="letter letter2">o</span>
                <span className="letter letter3">a</span>
                <span className="letter letter4">d</span>
                <span className="letter letter5">i</span>
                <span className="letter letter6">n</span>
                <span className="letter letter7">g</span>
                <span className="letter letter8">.</span>
                <span className="letter letter9">.</span>
                <span className="letter letter10">.</span>
            </p>
        </div>
    </div>
  );
};

export default PageLoading;
