import { createBrowserRouter} from "react-router-dom"
import InvestorRelation from "../Pages/InvestorRelation"
import AddRestaurant from "../Pages/AddRestaurant"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import Layout from "../components/Layout"

export let routes=createBrowserRouter([
    {path:"/", element:<Layout/>,
        children: [
            {path:"/investor",element:<InvestorRelation/>},
            {path:"/addrest",element:<AddRestaurant/>},
            {path:"/login",element:<Login/>},
            {path:"/signup",element:<Signup/>}
        ],
    },
])