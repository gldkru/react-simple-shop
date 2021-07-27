import logo from './assets/logo.svg'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="h-16 bg-white border-b flex items-center justify-center flex-shrink-0">
        <img src={logo} width={120} alt="" />
      </header>
      <div className="container mx-auto px-4 sm:px-6 flex-grow py-6 sm:py-10">
        <h1 className="font-bold text-3xl mb-7">Jewelery</h1>
        <div className="flex flex-nowrap">
          <main className="flex-grow">

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* START: Карточка */}
              <div className="w-full shadow-lg rounded-xl bg-white border p-5 hover:shadow-xl transition-shadow duration-300">
                {/* Картинка */}
                <div className="h-52 mb-6">
                  <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" className="h-full w-full object-contain" />
                </div>
                {/* Категория */}
                <div className="text-sm text-gray-500 mb-2">men's clothing</div>
                {/* Название */}
                <div className="font-bold	text-md">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
                {/* Цена и кнопка */}
                <div className="flex justify-between items-center mt-8">
                  {/* Цена */}
                  <div className="text-xl">$109.95</div>
                  {/* Кнопка */}
                  <div>
                    <button className="bg-indigo-600 text-white h-10 px-6 rounded hover:bg-indigo-500 transition-colors" type="button">Buy</button>
                  </div>
                </div>
              </div>
              {/* END: Карточка */}
            </div>
          </main>
          <div className="sidebar flex-shrink-0 mr-6">
            {/* SIDEBAR */}
            <div className="bg-gray-50 rounded-xl p-5 space-y-3">
              <h2 className="font-bold text-lg mb-5">Categories</h2>
              <button className="border text-gray-800 h-10 px-6 rounded transition-colors w-full" type="button">men's clothing</button>
              {/* Active button */}
              <button className="bg-indigo-50 border text-indigo-700 h-10 px-6 rounded transition-colors w-full" type="button">jewelery</button>
              {/* /Active button */}
              <button className="border text-gray-800 h-10 px-6 rounded transition-colors w-full" type="button">electronics</button>
            </div>
            {/* /SIDEBAR */}
          </div>
        </div>
      </div>
      <footer className="h-12 bg-white border-t flex items-center justify-center text-sm text-gray-500 flex-shrink-0">
        Simple shop 2020
      </footer>
    </div>
  );
}

export default App;
