import { Card, Form, Row, Col } from "antd";
import Meta from "antd/es/card/Meta";
import { useTranslation } from "react-i18next";
import { Selects, Buttons } from "@components";
import img from "../test.jpg";

const title = "اطلاعات تخصصی من";

const Profesional = () => {
    const { t } = useTranslation();
    return (
        <>
            <Card
                bordered
            >
                <Meta
                    title={title}
                />
                <Form name="about-form" className="about-form mt-5 fs-sx" layout="vertical">
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={16} lg={12}>
                            <Selects
                                name="expertise"
                                label="حوزه تخصصی من"
                                placeholder={t("انتخاب کنید")}
                                options={[
                                    { name: 'ترانه سرا', id: '1' },
                                    { name: 'خواننده', id: '2' },
                                    { name: 'نوازنده', id: '3' },
                                    { name: 'سرپرست گروه', id: '4' },
                                    { name: 'صاحب کسب و کار', id: '5' },

                                ]}

                            />
                        </Col>
                        <Col xs={24} md={16} lg={12}>
                            <Selects
                                name="place"
                                label="مکان های اختصاصی"
                                placeholder={t("انتخاب کنید")}
                                options={[
                                    { name: 'پلاتو', id: '1' },
                                    { name: 'استودیو', id: '2' },
                                    { name: 'زیر منو', id: '3' },
                                    { name: 'زیر منو', id: '4' },

                                ]}

                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} justify={"center"} align={"middle"} >
                        <Col xs={24} md={16} lg={8}>
                            <video controls poster={img} height={200} width={200} className="rounded">
                                <source src={img} type="video/mp4" />
                            </video>
                        </Col>
                        <Col xs={20} md={16} lg={8}>
                            <img src={img} width={200} className="rounded" />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} justify={"center"} align={"middle"} className="mt-5">
                        <Col xs={22} md={16} lg={10}>
                            <Buttons content={t("+ افزودن ویدئو معرفی")} type="default"
                                size="small" htmlType="button"
                            />
                        </Col>
                        <Col xs={20} md={16} lg={8}>
                            <Buttons content={t("+ افزودن تصویر")} type="default"
                                size="small" htmlType="button"
                            />
                        </Col>
                    </Row>

                </Form>
            </Card>
        </>
    )
}

export default Profesional;