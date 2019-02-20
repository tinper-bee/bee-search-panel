import React, {Component} from 'react';
import {Panel} from 'bee-panel';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const emFun = () => {}

const propTypes =  {
    defaultExpanded: PropTypes.bool,
    expanded: PropTypes.bool,//是否默认展开，false默认关闭
    onSearch: PropTypes.func,//点击查询的回调
    onReset: PropTypes.func,//点击重置的回调
    resetName: PropTypes.string,//重置的文字
    searchName: PropTypes.string,//查询的文字
    title: PropTypes.string,
    onPanelChangeStart: PropTypes.func,//显示或隐藏开始回调
    onPanelChangeIng: PropTypes.func,//显示或隐藏进行中回调
    onPanelChangeEnd: PropTypes.func,//显示或隐藏结束回调
    onChange: PropTypes.func//点击显示或隐藏回调
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

    _onPanelChange = (type, func) => {
        if (func) {
            let status = "";
            if (type === 0) {
                status = "hide"
            } else if (type === 1) {
                status = 'visible'
            }
            func(status)
        }
    }

    _onPanelChangeStart = (type) => {
        const { onPanelChangeStart } = this.props;
        onPanelChangeStart && this._onPanelChange(type, onPanelChangeStart)
    }
    _onPanelChangeIng = (type) => {
        const { onPanelChangeIng } = this.props;
        onPanelChangeIng && this._onPanelChange(type, onPanelChangeIng)
    }
    _onPanelChangeEnd = (type) => {
        const { onPanelChangeEnd } = this.props;
        onPanelChangeEnd && this._onPanelChange(type, onPanelChangeEnd)
    }
    render() {
        const { children, clsPrefix, className, resetName, searchName, bgColor, style } = this.props;
        const _stype = style || {};
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
            <div className={clsPrefix + ' ' + className} style={_stype}>
                <Panel
                    header={PanelHeader}
                    collapsible
                    expanded={this.state.expanded}
                    onExit={this._onPanelChangeStart.bind(this, 0)}//隐藏开始回调
                    onEnter={this._onPanelChangeStart.bind(this, 1)}//显示开始回调
                    onExiting={this._onPanelChangeIng.bind(this, 0)}//隐藏进行中回调
                    onEntering={this._onPanelChangeIng.bind(this, 1)}//显示进行中回调
                    onExited={this._onPanelChangeEnd.bind(this, 0)}//隐藏完成回调
                    onEntered={this._onPanelChangeEnd.bind(this, 1)}//显示后回调
                    style={{
                        backgroundColor: bgColor
                    }}
                >
                    {children}
                </Panel>
            </div>

        )
    }
}
SearchPanel.propTypes = propTypes;
SearchPanel.defaultProps = defaultProps;
export default SearchPanel;