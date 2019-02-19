import React, {Component} from 'react';
import {Panel} from 'bee-panel';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const emFun = () => {}

const propTypes =  {
    defaultExpanded: PropTypes.bool,
    expanded: PropTypes.bool,//是否默认展开，false默认关闭
    onSearch: PropTypes.func,//查询的回调
    onReset: PropTypes.func,//重置的回调
    resetName: PropTypes.string,//重置的文字
    searchName: PropTypes.string,//查询的文字
    title: PropTypes.string,
    onPanelChanged: PropTypes.func,
    onChange: PropTypes.func
};

const defaultProps = {
    className: "",
    clsPrefix: 'u-search',
    defaultExpanded: false,
    title: "默认筛选",
    resetName: "清空",
    searchName: "查询",
    bgColor: "#F7F9FB",

};


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: props.expanded || props.defaultExpanded
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('expanded' in nextProps) {
            this.setState({expanded: nextProps.expanded})
        }
    }

    changeExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }


    _onChange = () => {
        const { onChange } = this.props;
        if ('expanded' in this.props) {
            this.setState({expanded: this.props.expanded})
        } else {
            this.setState({expanded: !this.state.expanded})
        }
        onChange && onChange()
    }

    search = () => {
        const { onSearch } = this.props;
        onSearch && onSearch();
    }
    reset = () => {
        const { onReset } = this.props;
        onReset && onReset();
    }

    _onPanelChange = (type) => {
        const { onPanelChanged } = this.props;
        if (onPanelChanged) {
            let status = "";
            if (type === 0) {
                status = "hide"
            } else if (type === 1) {
                status = 'visible'
            }
            onPanelChanged(status)
        }
    }
    render() {
        const { children, clsPrefix, className, resetName, searchName, bgColor } = this.props;

        let PanelHeader = (
            <div className={clsPrefix + "-header"}>
                <div className={clsPrefix + "-header-title"}>
                    <span>{this.props.title}</span>
                    {/*<Icon type="uf-arrow-c-o-down"/>*/}
                </div>

                <div className={clsPrefix + "-header-oper"}>
                    <a
                        className="header-oper-btn"
                        role="button"
                        onClick={this._onChange}
                    >
                        {this.state.expanded ? '收起' : '展开'}
                        <i className={classnames({
                            'uf': true,
                            'uf-arrow-down': !this.state.expanded,
                            'uf-arrow-up': this.state.expanded
                        })} />
                    </a>
                    <a className="header-oper-btn" role="button" onClick={this.reset}>{resetName}</a>
                    <a className="header-oper-btn primary" role="button" onClick={this.search}>{searchName}</a>
                </div>
            </div>
        );
        return (
            <Panel
                className={clsPrefix + ' ' + className}
                header={PanelHeader}
                collapsible
                expanded={this.state.expanded}
                onExited={this._onPanelChange.bind(this, 0)}//隐藏完成回调
                onEntered={this._onPanelChange.bind(this, 1)}//显示后回调
                style={{
                    backgroundColor: bgColor
                }}
            >
                {children}
            </Panel>

        )
    }
}
SearchPanel.propTypes = propTypes;
SearchPanel.defaultProps = defaultProps;
export default SearchPanel;