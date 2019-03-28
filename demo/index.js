import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 普通搜索面板","code":"/**\n *\n * @title 普通搜索面板\n * @description 一般用于页面中有搜索功能的内容区。\n *\n */\nimport React, {Component} from 'react';\nimport { SearchPanel } from 'tinper-bee';\nimport {FormControl,Row, Col,Label,Form,Radio} from 'tinper-bee';\n\nconst FormItem = Form.FormItem;\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            state:'all',\n            expanded: true\n        }\n    }\n    stateChange(value){\n        this.setState({\n            state:value\n        })\n    }\n    typeChange(value){\n        this.setState({\n            type:value\n        })\n    }\n    degreeChange(value){\n        this.setState({\n            degree:value\n        })\n    }\n    search(){\n\n    }\n    clear(){\n\n    }\n    onChange = () => {\n        this.setState({expanded: !this.state.expanded})\n    }\n    render() {\n        const { getFieldProps, getFieldError } = this.props.form;\n        return (<div className=\"demo\">\n            <SearchPanel\n                title='条件筛选'\n                onSearch={this.search}\n                onReset={this.clear}\n                expanded={this.state.expanded}\n                onChange={this.onChange}\n                onPanelChangeStart={status => {\n                    console.log(status, \"start\")\n                }}\n                onPanelChangeIng={status => {\n                    console.log(status, \"ing\")\n                }}\n                onPanelChangeEnd={status => {\n                    console.log(status, \"end\")\n                }}\n                resident={\n                    <div className='demo-head'>\n                        <Form>\n                            <Row>\n                                <Col xs={12} sm={6} md={4} lg={3}>\n                                    <FormItem>\n                                        <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                            <Label>名 称:</Label>\n                                            <FormControl size=\"sm\"\n                                                {\n                                                ...getFieldProps('orderCode', {\n                                                    initialValue: '',\n                                                })\n                                                }\n                                            />\n                                        </Col>\n                                    </FormItem>\n                                </Col>\n\n                                <Col xs={12} sm={6} md={4}  lg={3}>\n                                    <FormItem>\n                                        <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                            <Label>电话:</Label>\n                                            <FormControl size=\"sm\"\n                                                {\n                                                ...getFieldProps('supplierName', {\n                                                    initialValue: '',\n                                                })\n                                                }\n                                            />\n                                        </Col>\n                                    </FormItem>\n                                </Col>\n\n                                {/* <Col xs={12} sm={6} md={4}  lg={4}>\n                                    <FormItem>\n                                        <Col xs={8} sm={8} md={8}  lg={12} className=\"col\">\n                                            <Label>电话:</Label>\n                                            <FormControl size=\"sm\"\n                                                {\n                                                ...getFieldProps('supplierName', {\n                                                    initialValue: '',\n                                                })\n                                                }\n                                            />\n                                        </Col>\n                                    </FormItem>\n                                </Col> */}\n\n                            </Row>\n                        </Form>\n                    </div>\n                }\n            >\n               <div className='demo-body'>\n                    <Form>\n                        {/* <Row>\n                            <Col lg={12} md={12} xs={12} >\n                                <FormItem>\n                                    <Col md={2} xs={2} className=\"radio\">\n                                        <Label >状态</Label>\n                                    </Col>\n                                    <Col md={10} xs={10}>\n                                        <Radio.RadioGroup\n                                            name=\"state\"\n                                            selectedValue={this.state.state}\n                                            onChange={this.stateChange.bind(this)}>\n                                            <Radio.RadioButton value=\"all\">全部</Radio.RadioButton>\n                                            <Radio.RadioButton value=\"initial\">初始化</Radio.RadioButton>\n                                            <Radio.RadioButton value=\"todo\">待处理</Radio.RadioButton>\n                                            <Radio.RadioButton value=\"doing\">处理中</Radio.RadioButton>\n                                            <Radio.RadioButton  value=\"done\">已完成</Radio.RadioButton>\n                                            <Radio.RadioButton  value=\"closed\">已完成</Radio.RadioButton>\n                                        </Radio.RadioGroup>\n                                    </Col>\n\n                                </FormItem>\n                            </Col>\n                        </Row> */}\n                        <Row>\n\n                            <Col xs={12} sm={6} md={4} lg={3}>\n                                <FormItem>\n                                    <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                         <Label>联系人:</Label>\n                                        <FormControl size=\"sm\"\n                                            {\n                                            ...getFieldProps('orderCode', {\n                                                initialValue: '',\n                                            })\n                                            }\n                                        />\n                                    </Col>\n                                </FormItem>\n                            </Col>\n\n                            <Col xs={12} sm={6} md={4}  lg={3}>\n                                <FormItem>\n                                    <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                        <Label>供应商:</Label>\n                                        <FormControl size=\"sm\"\n                                            {\n                                            ...getFieldProps('supplierName', {\n                                                initialValue: '',\n                                            })\n                                            }\n                                        />\n                                    </Col>\n                                </FormItem>\n                            </Col> \n\n                            <Col xs={12} sm={6} md={4}  lg={3}>\n                                <FormItem>\n                                    <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                        <Label>地址:</Label>\n                                        <FormControl size=\"sm\"\n                                            {\n                                            ...getFieldProps('supplierName', {\n                                                initialValue: '',\n                                            })\n                                            }\n                                        />\n                                    </Col>\n                                </FormItem>\n                            </Col> \n\n\n                            <Col xs={12} sm={6} md={4}  lg={3}>\n                                <FormItem>\n                                    <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                        <Label>车牌:</Label>\n                                        <FormControl size=\"sm\"\n                                            {\n                                            ...getFieldProps('supplierName', {\n                                                initialValue: '',\n                                            })\n                                            }\n                                        />\n                                    </Col>\n                                </FormItem>\n                            </Col>\n\n                            <Col xs={12} sm={6} md={4}  lg={3}>\n                                <FormItem>\n                                    <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                        <Label>备注:</Label>\n                                        <FormControl size=\"sm\"\n                                            {\n                                            ...getFieldProps('supplierName', {\n                                                initialValue: '',\n                                            })\n                                            }\n                                        />\n                                    </Col>\n                                </FormItem>\n                            </Col>\n\n                            <Col xs={12} sm={6} md={4}  lg={3}>\n                                <FormItem>\n                                    <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                        <Label>编号:</Label>\n                                        <FormControl size=\"sm\"\n                                            {\n                                            ...getFieldProps('supplierName', {\n                                                initialValue: '',\n                                            })\n                                            }\n                                        />\n                                    </Col>\n                                </FormItem>\n                            </Col>\n\n                        </Row>\n                    </Form>\n                </div>\n            </SearchPanel>\n            </div>\n        )\n    }\n}\n","desc":" 一般用于页面中有搜索功能的内容区。"},{"example":<Demo2 />,"title":" 提取所有输入信息","code":"/**\n *\n * @title 提取所有输入信息\n * @description 针对表头中的搜索内容，进行提取键入的信息数据。【查看console的输出】\n *\n */\nimport React, {Component} from 'react';\nimport { SearchPanel, DatePicker } from 'tinper-bee';\nimport { Form, Label,Checkbox,Switch,Button,\n     Radio, Select,  Col , Row , FormControl } from 'tinper-bee';\nimport moment from \"moment/moment\";\nconst FormItem = Form.FormItem;\nconst Option = Select.Option;\nconst { RangePicker } = DatePicker;\nconst CheckboxGroup = Checkbox.CheckboxGroup;\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            expanded: true,\n            approvalState: '1',\n            purchasingGroup:'2',\n            closeState: '',\n            confirmState: '',\n            voucherDate: [moment(),moment('2019-07-20')],\n            orderTypes:[\n                {\n                    'code':'001',\n                    'name':'类型1'\n                },\n                {\n                    'code':'002',\n                    'name':'类型2'\n                },\n                {\n                    'code':'003',\n                    'name':'类型3'\n                },\n            ]\n        };\n    }\n    submit = (e) => {\n        this.props.form.validateFields((err, values) => {\n            if (err) {\n                console.log('校验失败', values);\n            } else {\n                console.log('提交成功', values)\n            }\n        });\n    }\n    reset = () =>{\n        this.props.form.resetFields();\n        //部分表单元素无法通过this.props.form.resetFields重置，需要手动重置，如下\n        this.setState({\n            approvalState: '',\n            closeState: '',\n            confirmState: '',\n            voucherDate: []\n        })\n    }\n    onChange = () => {\n        this.setState({expanded: !this.state.expanded})\n    }\n\n    search =()=>{\n        this.props.form.validateFields((err, values) => {\n            if (err) {\n                console.log('校验失败', values);\n            } else {\n                console.log('提交成功', values)\n            }\n        });\n    }\n\n    render() {\n        const { getFieldProps, getFieldError } = this.props.form;\n        let self = this;\n        return (<div className=\"demo\">\n            <SearchPanel\n                title='条件筛选'\n                onSearch={this.search}\n                onReset={this.clear}\n                expanded={this.state.expanded}\n                onChange={this.onChange}\n                onPanelChangeStart={status => {\n                    console.log(status, \"start\")\n                }}\n                onPanelChangeIng={status => {\n                    console.log(status, \"ing\")\n                }}\n                onPanelChangeEnd={status => {\n                    console.log(status, \"end\")\n                }}\n                resident={\n                <div className='demo-head'>\n                        <Form>\n                            <Row>\n                                <Col xs={12} sm={6} md={4} lg={3}>\n                                    <FormItem>\n                                        <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                            <Label>订单编号:</Label>\n                                            <FormControl size=\"sm\"\n                                                {\n                                                ...getFieldProps('orderCode', {\n                                                    initialValue: '',\n                                                })\n                                                }\n                                            />\n                                        </Col>\n                                    </FormItem>\n                                </Col>\n\n                                <Col xs={12} sm={6} md={4}  lg={3}>\n                                    <FormItem>\n                                        <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                            <Label>供应商名称:</Label>\n                                            <FormControl size=\"sm\"\n                                                {\n                                                ...getFieldProps('supplierName', {\n                                                    initialValue: '',\n                                                })\n                                                }\n                                            />\n                                        </Col>\n                                    </FormItem>\n                                </Col>\n                            </Row>\n                        </Form>\n                    </div>\n                }\n            >\n\n                <div className='demo-body'>\n                    <Form>\n                        <Row>\n                            <Col xs={12} sm={6} md={4}  lg={3}>\n                                <FormItem>\n                                    <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                        <Label>订单类型:</Label>\n                                        <Select size=\"sm\"\n                                            {\n                                            ...getFieldProps('type', {\n                                                initialValue: '',\n                                            }\n                                            )}>\n                                            <Option value=\"\">请选择</Option>\n                                            {\n                                                self.state.orderTypes.map((item, index) => {\n                                                    return (\n                                                        <Option key={index} value={item.code}>{item.name}</Option>\n                                                    )\n                                                })\n                                            }\n                                        </Select>\n                                    </Col>\n                                </FormItem>\n                            </Col>\n\n                            <Col xs={12} sm={6} md={4}  lg={3}>\n                                <FormItem>\n                                    <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                        <Label>采购组</Label>\n                                        <CheckboxGroup \n                                                {\n                                                    ...getFieldProps('purchasingGroup',{\n                                                        initialValue:['2']\n                                                    })\n                                                }\n                                            >\n                                                <Checkbox value='1'>人力</Checkbox>\n                                                <Checkbox value='2'>财务</Checkbox>\n                                        </CheckboxGroup>\n                                    </Col>\n                                </FormItem>\n                            </Col>\n\n                            <Col xs={12} sm={6} md={4}  lg={3}>\n                                <FormItem>\n                                    <Col xs={12} sm={12} md={12}  lg={12} className=\"col\">\n                                        <Label>审批</Label>\n                                        <Radio.RadioGroup\n                                                selectedValue={this.state.approvalState}\n                                                {\n                                                ...getFieldProps('approvalState', {\n                                                    initialValue: '1',\n                                                    onChange(value) {\n                                                        self.setState({ approvalState: value });\n                                                    },\n                                                }\n                                                )}\n                                            >\n                                            <Radio value=\"0\" >未审批</Radio>\n                                            <Radio value=\"1\" >已审批</Radio>\n                                        </Radio.RadioGroup>\n                                    </Col>\n                                </FormItem>\n                            </Col>\n                        </Row>\n                    </Form>\n                </div>\n            </SearchPanel>\n            </div>\n        )\n    }\n}\n\n","desc":" 针对表头中的搜索内容，进行提取键入的信息数据。【查看console的输出】"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
