import { Form, Row, Col, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Inputs, Buttons } from "@components";
import { useTranslation } from "react-i18next";
import { TwitterOutlined, FacebookOutlined, InstagramFilled } from "@ant-design/icons";

const title = "ارتباط با من";

const Connect = () => {
    const { t } = useTranslation();
    return (
        <>
            <Card
                bordered

            >
                <Meta title={title}
                />
                <Form name="connect-form" className="search-form mt-5 fs-sx" layout="horizental">
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={12} lg={8}>
                            <Inputs
                                name="twitter"
                                placeholder="https://www.twitter.com/sabach"
                            />
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <TwitterOutlined />
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <Inputs
                                name="facebook"
                                placeholder={t("https://www.facebook.com/sabach")}
                            />
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <FacebookOutlined />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={12} lg={8}>
                            <Inputs
                                name="instagram"
                                placeholder={t("https://www.instagram.com/sabach")}
                            />
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <InstagramFilled />
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <Inputs
                                name="instagram"
                                placeholder={t("https://www.instagram.com/sabach")}
                            />
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <InstagramFilled />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"center"}>
                        <Col xs={24} md={12} lg={8}>
                            <Buttons content={t("+ افزودن شبکه های اجتماعی")} type="default"
                                size="large" htmlType="button"
                            />
                        </Col>
                    </Row>
                </Form>
            </Card>
        </>

    );
};

export default Connect;
