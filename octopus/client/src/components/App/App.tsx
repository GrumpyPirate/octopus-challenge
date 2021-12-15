import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductPage from '../ProductPage/ProductPage';

const App = function () {
  const navigate = useNavigate();

  /**
   * Use a side-effect to:
   *  - Redirect the user onto the sole product page we have available, for the sake of this exercise.
   *    This is simply to demonstrate how we'd pull the product ID from the route params.
   */
  useEffect(() => {
    navigate('/products/1');
  }, [navigate]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
