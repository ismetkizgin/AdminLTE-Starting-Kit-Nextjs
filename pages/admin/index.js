import { Component } from 'react'
import { AdminLayout } from '../../components/layout'
import { CardBox, Button, Alert, Textarea, Input, FormikForm, FormikField, Accordion, AccordionItem, Contact } from '../../components/common'
export default class Index extends Component {
    render() {
        return <AdminLayout contentTitle={'Home'} contentTitleButton={<i className="fa fa-2x fa-home" />} url={this.props.url}>
            <div className="row">

                <div className="col-12">
                    <CardBox closeButtonVisibility={"block"} title={"Button Component"}>
                        <div className="row">
                            <div className="col-4">
                                <Button>Button Name</Button>
                            </div>
                            <div className="col-4">
                                <Button classType={"danger"}>Button Name</Button>
                            </div>
                            <div className="col-4">
                                <Button classType={"primary"}>Button Name</Button>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-4">
                                <Button classType={"info"}>Button Name</Button>
                            </div>
                            <div className="col-4">
                                <Button classType={"warning"}>Button Name</Button>
                            </div>
                            <div className="col-4">
                                <Button classType={"secondary"}>Button Name</Button>
                            </div>
                        </div>
                    </CardBox>
                </div>

                <div className="col-6">
                    <CardBox type={"warning"} toggleButtonVisibility={"block"} title={"Input and Textarea Component"}>
                        <form role="form">
                            <div className="form-group">
                                <label>First Name</label>
                                <Input placeholder={"First Name"} />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <Input placeholder={"Last Name"} />
                            </div>
                            <div className="from-group">
                                <label>Message</label>
                                <Textarea />
                            </div>
                            <br />
                            <div className="from-group col-3">
                                <Button classType={"primary"}>Submit</Button>
                            </div>
                        </form>
                    </CardBox>
                </div>

                <div className="col-6">
                    <CardBox type={"secondary"} toggleButtonVisibility={"block"} title={"Formik Component"}>
                        <FormikForm
                            initialValues={{ firstName: '', lastName: '' }}
                            onSubmit={async (value) => {
                                alert(`${value.firstName} ${value.lastName}`)
                            }}
                        >
                            <div className="form-group">
                                <label>First Name</label>
                                <FormikField id="firstName" name="firstName" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <FormikField id="lastName" name="lastName" placeholder="Last Name" />
                            </div>
                            <br />
                            <div className="from-group col-3">
                                <Button classType={"primary"}>Submit</Button>
                            </div>
                        </FormikForm>

                    </CardBox>
                </div>

                <div className="col-12">
                    <CardBox type={"primary"} closeButtonVisibility={"block"} toggleButtonVisibility={"block"} title={"Alert Component"}>
                        <Alert type={"success"} icon={"check"} title={"Success Alert"}>
                            <h5> Success Alert Text</h5>
                        </Alert>
                        <Alert type={"info"} icon={"info"} title={"İnfo Alert"}>
                            <h5> İnfo Alert Text</h5>
                        </Alert>
                        <Alert type={"danger"} icon={"ban"} title={"Danger Alert"}>
                            <h5> Danger Alert Text</h5>
                        </Alert>
                        <Alert type={"warning"} icon={"exclamation-triangle"} title={"Warning Alert"}>
                            <h5> Warning Alert Text</h5>
                        </Alert>
                    </CardBox>
                </div>

                <div className="col-12">
                    <CardBox type={"info"} closeButtonVisibility={"block"} toggleButtonVisibility={"block"} title={"Button Component"}>
                        <div className="row">
                            <div className="col-4">
                                <Contact title={"Contact Card"} name={"First and Last Name"} email={"mail@email.com"}></Contact>
                            </div>
                            <div className="col-4">
                                <Contact title={"Contact Card"} name={"First and Last Name"} email={"mail@email.com"}></Contact>
                            </div>
                            <div className="col-4">
                                <Contact title={"Contact Card"} name={"First and Last Name"} email={"mail@email.com"}></Contact>
                            </div>
                        </div>
                    </CardBox>
                </div>

                <div className="col-12">
                    <CardBox type={"danger"} closeButtonVisibility={"block"} toggleButtonVisibility={"block"} title={"Accordion Component"}>
                        <div className="row">
                            <div className="col">
                                <Accordion>
                                    <AccordionItem id={"accordionItem1"}>
                                        <h5>Accordion item text</h5>
                                    </AccordionItem>
                                    <AccordionItem title={"Accordion Item 1"} id={"accordionItem2"} type={"primary"}>
                                        <h5>Accordion item text</h5>
                                    </AccordionItem>
                                    <AccordionItem title={"Accordion Item 2"} id={"accordionItem3"} type={"success"}>
                                        <h5>Accordion item text</h5>
                                    </AccordionItem>
                                    <AccordionItem title={"Accordion Item 3"} id={"accordionItem4"} type={"danger"}>
                                        <h5>Accordion item text</h5>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </CardBox>
                </div>
            </div>
        </AdminLayout>
    }
}