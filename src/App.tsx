import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import { SnowfallProvider } from './contexts/SnowfallContext';
import SnowfallWrapper from './components/SnowfallWrapper';
import SnowfallControls from './components/SnowfallControls';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [currentPage, setCurrentPage] = useState('home');



  const renderContent = () => {
    if (currentPage === 'home') {
      return <HomePage onPageChange={setCurrentPage} />;
    }
    return <PageContent currentPage={currentPage} onPageChange={setCurrentPage} />;
  };

  return (
    <ErrorBoundary>
      <SnowfallProvider defaultEnabled={true} defaultIntensity="heavy">
        <div className="min-h-screen bg-gray-900" dir="rtl">
          <SnowfallWrapper>
            <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
            <main>{renderContent()}</main>
            <Footer onPageChange={setCurrentPage} />
          </SnowfallWrapper>
        </div>
        <SnowfallControls />
      </SnowfallProvider>
    </ErrorBoundary>
  );
}

export default App;