import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import App2 from "./App2";
import { Navbar } from "./Navbar";

const router = createBrowserRouter(
    [

        {
            path: "/App",
            element:
                <div>

                    <App />
                </div>
        },
        {
            path: "/App2",
            element:
                <div>

                    <App2 />
                </div>
        }, {
            path: "/",
            element: (
                <div>

                    <h1 className="text-left mt-10 pl-10 text-7xl font-extrabold text-white backdrop-blur-lg bg-opacity-10 p-4 rounded-lg shadow-gray-200 shadow-xl">
                        CVibe
                    </h1>


                    <Navbar />
                    <div>
                        <footer className="bg-gray-900 text-gray-200 text-sm mt-7 p-6 text-center shadow-inner">
                            <p>© {new Date().getFullYear()} CVibe. All rights reserved.</p>
                            <p className="mt-1">
                                Made with ❤️ by Aryan Bansal...
                            </p>
                        </footer>
                    </div>
                </div>

            ),
        }
    ]
);
function App3() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
export default App3;


