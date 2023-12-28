import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import store from "../store";
import i18n from "../langs";

import ContextApi from "@/context/ContextApi";
// layout
import { Loadings } from "@/components";
import MainLayout from "@/layout/MainLayouts";
// pages
import HomePage from "@/pages/home";

const mainRoutes = {
	path: "/",
	element: <MainLayout />,
	children: [
		{
			index: true,
			id: "home",
			element: <HomePage />,
		},
		{
			path: "about",
			id: "about",
			lazy: async () => ({ Component: (await import("../pages/about")).default }),
		},
		{
			path: "editProfile",
			id: "editProfile",
			lazy: async () => ({ Component: (await import("../pages/editProfile")).default }),
		},
	],
};

const dashboardRoutes = {};
const adminRoutes = {};

const router = createBrowserRouter([mainRoutes, dashboardRoutes, adminRoutes]);

function App() {
	// return
	return (
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<ContextApi>
					<RouterProvider router={router} fallbackElement={<Loadings />}  />
				</ContextApi>
			</I18nextProvider>
		</Provider>
	);
}

export default App;
