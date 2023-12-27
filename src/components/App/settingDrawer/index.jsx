import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Col, Radio, Row, Typography } from "antd";

const { Title } = Typography;

const DrawerContent = ({
	language = "fa",
	changeLanguage,
	// theme
	themeAlgorithm = "defaultAlgorithm",
	fontMode = "default",
	selectedToken = "default",
	color = {},
	// handles
	changeTheme,
	changeFontMode,
	changeColorMode,
}) => {
	const { t } = useTranslation();
	const colors = useMemo(
		() =>
			Object.entries(color).map(([key, { colorPrimary }]) => ({
				style: { backgroundColor: colorPrimary },
				value: key,
			})),
		[color],
	);
	return (
		<Row gutter={[16, 16]}>
			<Title level={5}>{t("layouts.mode")}</Title>
			<Col span={24}>
				<Radio.Group
					buttonStyle="solid"
					defaultValue={themeAlgorithm}
					onChange={(e) => changeTheme(e.target.value)}
				>
					<Radio.Button value="defaultAlgorithm">{t("layouts.light")}</Radio.Button>
					<Radio.Button value="darkAlgorithm">{t("layouts.dark")}</Radio.Button>
				</Radio.Group>
			</Col>
			<Title level={5}>{t("layouts.theme")}</Title>
			<Col span={24}>
				<Radio.Group
					options={colors}
					value={selectedToken}
					optionType="button"
					buttonStyle="solid"
					onChange={(e) => changeColorMode(e.target.value)}
				>
					<Radio.Button value="light">{t("layouts.light")}</Radio.Button>
				</Radio.Group>
			</Col>
			<Title level={5}>{t("layouts.fontSize")}</Title>
			<Col span={24}>
				<Radio.Group
					buttonStyle="solid"
					defaultValue={fontMode}
					onChange={(e) => changeFontMode(e.target.value)}
				>
					<Radio.Button value="default">{t("layouts.fontDefault")}</Radio.Button>
					<Radio.Button value="compactAlgorithm">{t("layouts.fontSmall")}</Radio.Button>
				</Radio.Group>
			</Col>
			<Title level={5}>{t("layouts.language")}</Title>
			<Col span={24}>
				<Radio.Group
					buttonStyle="solid"
					defaultValue={language}
					onChange={(e) => changeLanguage(e.target.value)}
				>
					<Radio.Button value="fa">فارسی</Radio.Button>
					{/* <Radio.Button value="en">English</Radio.Button> */}
				</Radio.Group>
			</Col>
			<Title level={5}>{t("layouts.version")}</Title>
			<Col span={24}>
				<Radio.Group buttonStyle="solid" defaultValue={"version"}>
					<Radio.Button value="version">{t("layouts.versionNumber")}</Radio.Button>
				</Radio.Group>
			</Col>
		</Row>
	);
};

export default DrawerContent;
