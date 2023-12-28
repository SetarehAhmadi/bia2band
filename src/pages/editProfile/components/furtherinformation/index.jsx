import { Card, Form, Row, Col, Checkbox } from "antd";
import Meta from "antd/es/card/Meta";
import { useTranslation } from "react-i18next";
import { AppstoreOutlined } from "@ant-design/icons";
import { Inputs, Selects, Buttons } from "@components";
import TextArea from "antd/es/input/TextArea";

const title = "اطلاعات تکمیلی من";

const FurtherInformation = () => {
    const { t } = useTranslation();
    return (
        <>
            <Card
                bordered
            >
                <Meta
                    title={title}
                />
                <Form name="personal-form" className="search-form mt-5 fs-sx" layout="vertical">
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={28} md={16} lg={12}>
                            <Selects
                                name="address"
                                label="آدرس"
                                placeholder={
                                    <div className="flex gap-2 align-middle items-center">
                                        <AppstoreOutlined className="pb-1" />
                                        <span>آدرس محل کار</span>
                                    </div>
                                }
                            />
                        </Col>
                        <Col xs={28} md={16} lg={12}>
                            <Inputs
                                name="phone"
                                label="شماره محل کار"
                                placeholder={t("02188887547")}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={12} lg={8}>
                            <Inputs
                                name="capacity"
                                label="گنجایش"
                                placeholder={
                                    <div className="flex gap-2 align-middle items-center">
                                        <AppstoreOutlined className="pb-1" />
                                        <span>50</span>
                                    </div>
                                }
                            />
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <label>نفر</label>
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <Inputs
                                name="meterage"
                                label="متراژ"
                                placeholder={
                                    <div className="flex gap-2 align-middle items-center">
                                        <AppstoreOutlined className="pb-1" />
                                        <span>200</span>
                                    </div>
                                }
                            />
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <label>مترمربع</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={28} md={16} lg={12}>
                            <label>امکان ضبط کلیپ ویدئویی دارد؟</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={22} md={10} lg={8}>
                            <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Col span={8}>
                                        <Checkbox value="A" disabled>ندارد</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="B">دارد</Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Col>
                        <Col xs={18} md={6} lg={4}>
                            <Inputs
                                name="save"
                                placeholder={t("ارسباران")}
                            />
                        </Col>
                        <Col xs={18} md={6} lg={4}>
                            <label> + افزودن</label>
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <Buttons content={t("آپلود تصویر یا فایل ضمیمه")} type="dashed"
                                size="small" htmlType="link"
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={28} md={16} lg={12}>
                            <label>امکان ضبط کلیپ ویدئویی دارد؟</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={22} md={10} lg={8}>
                            <Checkbox.Group style={{ width: '100%' }} >
                                <Row>
                                    <Col span={8}>
                                        <Checkbox value="A" defaultChecked>ندارد</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="B" disabled>دارد</Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <Inputs
                                name="save"
                                placeholder={t("ارسباران")}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={28} md={16} lg={12}>
                            <label>کدامیک از سازهای زیر را موجود دارد؟</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={24} lg={24}>
                            <Checkbox.Group style={{ width: '100%' }} >
                                <div className="flex  my-2 justify-between align-middle items-center gap-2">
                                        <Checkbox value="A" defaultChecked>هیچ سازی ندارد</Checkbox>
                                        <Checkbox value="B" disabled>درامز</Checkbox>
                                        <Checkbox value="C" disabled>دف</Checkbox>
                                        <Checkbox value="D" disabled>پرکاشن</Checkbox>
                                        <Checkbox value="E" disabled>ویلن</Checkbox>
                                        <Checkbox value="F" disabled>سنتور</Checkbox>
                                        <Checkbox value="G" disabled>کنترباس</Checkbox>
                                        <Checkbox value="H" defaultChecked>سایرسازها</Checkbox>
                                </div>
                            </Checkbox.Group>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={28} md={16} lg={12}>
                            <label>سایر ویژگی ها را مشخص کنید.</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={28} md={16} lg={12}>
                            <Checkbox.Group style={{ width: '100%' }} >
                                <Row>
                                    <Col span={8}>
                                        <Checkbox value="A" defaultChecked>آینه</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="B" disabled>تخته وایت برد</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="C" disabled>صندلی</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="D" disabled>نمایشگر</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="E" disabled>پایه نت</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="F" disabled>ویدئو پروژکتور</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="G" disabled>سیستم تهویه</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="H" defaultChecked>سایرسازها</Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={28} md={16} lg={12}>
                            <label>لطفا روزهای کاری را مشخص کنید.</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={20} md={8} lg={6}>
                            <label>روزهای هفته</label>
                        </Col>
                        <Col xs={20} md={8} lg={6}>
                            <label>از ساعت</label>
                        </Col>
                        <Col xs={20} md={8} lg={6}>
                            <label>تا</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={20} md={8} lg={6}>
                            <Inputs
                                name="week"
                                placeholder="شنبه"
                                prefix={<AppstoreOutlined className="pb-1" />}
                               // placeholder={
                                  //  <div className="flex gap-2 align-middle items-center">
                                    //    <AppstoreOutlined className="pb-1" />
                                      //  <span>شنبه</span>
                                    //</div>
                                //}
                            />
                        </Col>
                        <Col xs={20} md={8} lg={6}>
                            <Inputs
                                name="time1"
                                placeholder={
                                    <div className="flex gap-2 align-middle items-center">
                                        <AppstoreOutlined className="pb-1" />
                                        <span>11</span>
                                    </div>
                                }
                            />
                        </Col>
                        <Col xs={20} md={8} lg={6}>
                            <Inputs
                                name="time2"
                                placeholder={
                                    <div className="flex gap-2 align-middle items-center">
                                        <AppstoreOutlined className="pb-1" />
                                        <span>22</span>
                                    </div>
                                }
                            />
                        </Col>
                        <Col xs={20} md={8} lg={4}>
                            <label> + افزودن</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={22} md={10} lg={8}>
                            <label>امکان رزرو از طریق سایت بیاتوبند؟</label>
                        </Col>

                        <Col xs={18} md={8} lg={4}>
                            <Checkbox.Group style={{ width: '100%' }} >
                                <Col span={8}>
                                    <Checkbox value="A" defaultChecked>می خواهم</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="B" disabled>نمی خواهم</Checkbox>
                                </Col>
                            </Checkbox.Group>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={28} md={16} lg={12}>
                            <label>توضیحات دلخواه</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"}>
                        <Col xs={24} md={12} lg={8}>
                            <TextArea
                                name="description"
                                autoSize={10}
                                placeholder={t("اگر توضیحات خاصی مدنظرتون هست در این قسمت بنویسید.")}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"left"}>
                        <Col xs={20} md={8} lg={4}>
                            <Buttons content={t("اضافه کردن مکان جدید")} type="default"
                                size="small" htmlType="button"
                            />
                        </Col>
                    </Row>

                </Form>
            </Card>
        </>
    )
}
export default FurtherInformation;