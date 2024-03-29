import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Inventory from './components/Inventory/Inventory';
import Main from './components/Layout/Main';
import { ProductAndCartLoader } from './components/Loaders/ProductAndCartLoader';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import ProductList from './components/ProductList/ProductList';
import Reviewitem from './components/ReviewItem/Reviewitem';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: ProductAndCartLoader,
          element: <Orders></Orders>
        },

        {
          path: '/inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: 'shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },

        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        }

      ]
    },
    {
      path: 'about',
      element: <About></About>
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'/dashboard',
          element:<ProductList></ProductList>
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
