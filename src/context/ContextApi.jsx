import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ConfigProvider, theme } from "antd";

import callApi from "@/service";
import useLanguage from "@/hooks/useLanguage";
import useTheme from "@/hooks/useTheme";

import { getCurrentUser } from "../store/auth/action";

import AppContext from "./index";

function ContextApi({ children }) {
	// hooks
	const dispatch = useDispatch();
	// language
	const { language, changeLanguage, direction, locale, placement } = useLanguage();
	// theme
	const { color = {}, algorithm = [], ...handles } = useTheme(theme);
	// initialize context
	useEffect(() => {
		const userPromise = dispatch(getCurrentUser({ callApi }));
		// cleanUp
		return () => {
			userPromise.abort();
		};
	}, [locale, dispatch]);
	// return
	return (
		<AppContext.Provider
			value={{
				language,
				placement,
				direction,
				changeLanguage,
				// theme
				...handles,
				color,
				// callApi
				callApi,
			}}
		>
			<ConfigProvider
				locale={locale}
				direction={direction}
				theme={{
					algorithm,
					token: color,
					components: {
						Carousel: {
							colorBgContainer: color?.colorPrimary,
							dotWidth: 8,
							dotHeight: 8,
						},
						Button: {
							paddingInline: 20,
							paddingInlineSM: 20,
						},
					},
				}}
			>
				{children}
			</ConfigProvider>
		</AppContext.Provider>
	);
}

export default ContextApi;
