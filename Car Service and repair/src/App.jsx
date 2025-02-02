import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Spares from './components/Spares/Spares'
import BookingForm from './components/BookingForm/BookingForm'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import { CartProvider } from './context/CartContext'
import Rating from './components/Rating/Rating'
import Cart from './components/Cart/Cart'
import AuthModal from './components/Auth/AuthModal'
import Account from './components/Account/Account'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Spares />
    <BookingForm />
    <Contact />
  </>
);

const App = () => {
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  // Update the useEffect hook in App.jsx
  useEffect(() => {
    let signupReminder;
    
    // Start the reminder only if user is not logged in
    if (!isLoggedIn) {
      // Show first reminder after 1 minute
      signupReminder = setTimeout(() => {
        setIsAuthOpen(true);
        
        // Then set interval for subsequent reminders
        signupReminder = setInterval(() => {
          setIsAuthOpen(true);
        }, 60000); // Every minute
      }, 60000); // First reminder after 1 minute
      
      console.log('Signup reminder set'); // Debug log
    }

    // Cleanup function
    return () => {
      if (signupReminder) {
        clearTimeout(signupReminder);
        clearInterval(signupReminder);
        console.log('Signup reminder cleared'); // Debug log
      }
    };
  }, [isLoggedIn]); // Only depend on isLoggedIn state

  // Add this useEffect to handle auth modal state
  useEffect(() => {
    if (isLoggedIn && isAuthOpen) {
      setIsAuthOpen(false);
    }
  }, [isLoggedIn]);

  const handleLogin = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setIsLoggedIn(true);
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const handleAuthClick = () => {
    if (!isLoggedIn) {
      setIsAuthOpen(true);
    } else {
      // If logged in, navigate to account page
      window.location.href = '/account';
    }
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <div>
          <Navbar 
            onRateClick={() => setIsRatingOpen(true)}
            onCartClick={() => setIsCartOpen(true)}
            onAuthClick={handleAuthClick}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/account" 
              element={
                <ProtectedRoute>
                  <Account 
                    onLogout={handleLogout} 
                    onRateClick={() => setIsRatingOpen(true)}
                  />
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Footer 
            onRateClick={() => setIsRatingOpen(true)}
            onCartClick={() => setIsCartOpen(true)}
            onAuthClick={handleAuthClick}
            onLogout={handleLogout}
            isLoggedIn={isLoggedIn}
          />
          <ScrollToTop />
          <Rating isOpen={isRatingOpen} onClose={() => setIsRatingOpen(false)} />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <AuthModal 
            isOpen={isAuthOpen} 
            onClose={() => setIsAuthOpen(false)}
            onLogin={handleLogin}
            message={!isLoggedIn ? "Sign up to access all features!" : ""}
          />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;