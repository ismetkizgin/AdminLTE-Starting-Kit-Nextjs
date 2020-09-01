import { Component } from 'react'
import { AdminLayout } from '../../components/layout'
import { CardBox, Button, Alert, Textarea, Accordion, AccordionItem, Contact } from '../../components/common'
export default class Index extends Component {
    render() {
        return <AdminLayout contentTitle={'Home'} contentTitleButton={<i className="fa fa-2x fa-home" />} url={this.props.url}>
            <div className="row">
                <div className="col-6">
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
                        <br/><br/>
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
                    <CardBox type={"warning"} closeButtonVisibility={"block"} toggleButtonVisibility={"block"} title={"Textarea Component"}>
                        <div className="row">
                            <Textarea></Textarea>
                        </div>
                    </CardBox>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
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
                <div className="col-6">
                    <CardBox type={"info"} closeButtonVisibility={"block"} toggleButtonVisibility={"block"} title={"Button Component"}>
                        <Contact title={"Contact Card"} name={"First and Last Name"} email={"mail@email.com"}></Contact>
                    </CardBox>
                </div>
            </div>
            <div className="row">
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