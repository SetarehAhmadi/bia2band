import { useEffect, useState } from "react";

import colors from "@/theme";
import { getFromStorage, setToStorage } from "@/utils/storage";

const useTheme = (theme) => {
	const [themeAlgorithm, setThemeAlgorithm] = useState("defaultAlgorithm");
	const [fontAlgorithm, setFontSize] = useState("default");
	const [colorAlgorithm, setColor] = useState("default");
	// themeAntMode
	const changeTheme = (mode) => {
		setThemeAlgorithm(mode);
		setToStorage("theme", mode);
	};
	// fontAntMode
	const changeFontMode = (mode) => {
		setFontSize(mode);
		setToStorage("fontSize", mode);
	};
	// tokenMode
	const changeColorMode = (mode) => {
		setColor(mode);
		setToStorage("tokenColor", mode);
	};
	// init theme
	useEffect(() => {
		changeTheme(getFromStorage("theme") || "defaultAlgorithm");
		changeFontMode(getFromStorage("fontSize") || "default");
		changeColorMode(getFromStorage("tokenColor") || "default");
	}, []);
	// return
	return {
		changeTheme,
		changeFontMode,
		changeColorMode,
		themeAlgorithm,
		fontAlgorithm,
		colorAlgorithm,
		color: colors[colorAlgorithm],
		algorithm: [theme[themeAlgorithm], theme[fontAlgorithm]],
	};
};

export default useTheme;
