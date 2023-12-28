import { Form, Row, Col, Card } from "antd";
import Meta from "antd/es/card/Meta";
import img from "../test.jpg";
import { Selects } from "@components";
import { useTranslation } from "react-i18next";
import { AppstoreOutlined } from "@ant-design/icons";
import Inputs from "../../../../components/input";
import Regex from "../../../../utils/regex";


const title = "مشخصات شخصی من";

const Personal = () => {
	const { t } = useTranslation();
	return (
		<>
			<Card cover={<img src={img} className="h-20" />}
				bordered

			>
				<Meta title={title}
				/>
				<Form name="personal-form" className="search-form mt-5 fs-sx" layout="vertical">
					<Row gutter={[8, 8]} align={"right"}>
						<Col xs={24} md={16} lg={12}>
							<Inputs
								name="name"
								label="نام"
								placeholder={t("سامان حشمتی")}
							/>
						</Col>
						<Col xs={24} md={16} lg={12}>
							<Inputs

								name="email"
								label="ایمیل"

								placeholder={t("samanHeshmati@gmail.com")}
							/>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"}>
						<Col xs={24} md={16} lg={12}>
							<Selects
								name="birthdate"
								label="سال تولد"
								placeholder={
									<div className="flex gap-2 align-middle items-center">
										<AppstoreOutlined className="pb-1" />
										<span>1369</span>
									</div>
								}
							/>
						</Col>
						<Col xs={24} md={16} lg={12}>
							<Inputs
								name="mobile"
								label="شماره تماس"
								pattern={Regex.mobileNumber}
								patternMessage={"صحیح نیست"}
								maxLength={11}
								placeholder={t("09121558087")}
							/>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"}>
						<Col xs={24} md={16} lg={12}>
							<Selects
								name="city"
								label="محل سکونت"
								placeholder={
									<div className="flex gap-2 align-middle items-center">
										<AppstoreOutlined className="pb-1" />
										<span>نام شهر</span>
									</div>
								}
							/>
						</Col>
					</Row>
				</Form>
			</Card>
		</>

	);
};

export default Personal;
