import { createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout";
import InvestorRelation from "../Pages/InvestorRelation";
import AddRestaurant from "../Pages/AddRestaurant";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Halfbg from "../Components/Halfbg";
import Collections from "../Components/Collections"; 
import Popular from "../Components/Popular"; 

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <div>
              <Halfbg/>
              <Collections />  
              <Popular /> 
            </div>
          ),
        },
        { path: "/investor", element: <InvestorRelation /> },
        { path: "/addrest", element: <AddRestaurant /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
  ]);

export default function App() {
}
