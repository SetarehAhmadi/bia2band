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
                        <Col xs={28} md={16} lg={12}>
                            <Selects
                                name="expertise"
                                label={<span className="text-sm">حوزه تخصصی من</span>}
                                placeholder={t("انتخاب کنید")}
                                options={[
                                    { name: 'ترانه سرا', id: '1' },
                                    { label: '2', value: 'خواننده' },
                                    { label: 'نوازنده', value: 'نوازنده' },
                                    { label: 'سرپرست گروه', value: 'سرپرست گروه' },
                                    { label: 'صاحب کسب و کار', value: 'صاحب کسب و کار' },

                                ]}

                            />
                        </Col>
                        <Col xs={28} md={16} lg={12}>
                            <Selects
                                name="place"
                                label="مکان های اختصاصی"
                                placeholder={t("انتخاب کنید")}
                                options={[
                                    { label: 'پلاتو', value: '1' },
                                    { label: 'استودیو', value: 'خواننده' },
                                    { label: 'زیر منو', value: 'نوازنده' },
                                    { label: 'زیر منو', value: 'سرپرست گروه' },

                                ]}

                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"center"} >
                        <Col xs={28} md={16} lg={12}>
                            <video controls poster={img} height={200} width={200} className="rounded">
                                <source src={img} type="video/mp4" />
                            </video>
                        </Col>
                        <Col xs={28} md={16} lg={12}>
                            <img src={img} width={200} className="rounded" />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"center"} className="mt-5">
                        <Col xs={28} md={16} lg={12}>
                            <Buttons content={t("+ افزودن ویدئو معرفی")} type="default"
                                size="small" htmlType="button"
                            />
                        </Col>
                        <Col xs={28} md={16} lg={12}>
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