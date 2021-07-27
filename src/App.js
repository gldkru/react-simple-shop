import { useState, useEffect } from 'react';

import Product from './components/Product';
import Sidebar from './components/Sidebar';
import Title from './components/Title';
import Header from './components/Header';
import Footer from './components/Footer';

import initialProducts from './api/data';

const App = () => {
  const [products, setProducts] = useState([]);
  const categories = initialProducts.map(product => product.category).filter((value, index, self) => self.indexOf(value) === index);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if (!selectedCategories.length) {
      setProducts(initialProducts);
      return;
    }

    const filteredProducts = initialProducts.filter((product) => selectedCategories.indexOf(product.category) > -1);

    setProducts(filteredProducts);
  }, [selectedCategories]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 flex-grow py-6 sm:py-10">
        <Title selected={selectedCategories} />
        <div className="flex flex-nowrap">
          <main className="flex-grow">
            {!products.length ? (
              <div className="text-sm text-gray-500 text-center">Products not found</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(((product) => (
                  <Product
                    key={product.id}
                    image={product.image}
                    price={product.price}
                    title={product.title}
                    category={product.category}
                  />
                )))}
              </div>
            )}
          </main>
          <div className="sidebar flex-shrink-0 ml-6">
            <Sidebar categories={categories} onChange={setSelectedCategories} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
