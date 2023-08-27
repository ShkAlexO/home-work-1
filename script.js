var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.getElementById('root');
var root = ReactDOM.createRoot(domContainer);

var animals = [{ type: 'turtle', icon: '\uD83D\uDC22' }, { type: 'octopus', icon: '\uD83D\uDC19' }, { type: 'fish', icon: '\uD83D\uDC20' }, { type: 'flamingo', icon: '\uD83E\uDDA9' }, { type: 'penguin', icon: '\uD83D\uDC27' }];

var getRandomIndexEl = function getRandomIndexEl(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var ListItem = function (_React$Component) {
    _inherits(ListItem, _React$Component);

    function ListItem() {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    _createClass(ListItem, [{
        key: 'render',
        value: function render() {
            var item = this.props.item;


            return React.createElement(
                'li',
                { className: 'list__item ' + (item.active && 'list-item-active') },
                React.createElement(
                    'span',
                    { className: 'list__title' },
                    item.type
                ),
                React.createElement(
                    'span',
                    { className: 'list__icon' },
                    item.icon
                )
            );
        }
    }]);

    return ListItem;
}(React.Component);

var List = function (_React$Component2) {
    _inherits(List, _React$Component2);

    function List(props) {
        _classCallCheck(this, List);

        var _this2 = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

        _this2.state = {
            list: _this2.props.list,
            borderWidth: 0
        };
        return _this2;
    }

    _createClass(List, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            var activeEl = setInterval(function () {
                var unActiveEl = _this3.state.list.filter(function (item) {
                    return !item.active;
                });
                var randomIndexEl = getRandomIndexEl(0, unActiveEl.length - 1),
                    randomObj = unActiveEl[randomIndexEl];

                _this3.setState({
                    list: _this3.state.list.map(function (el) {
                        if (el === randomObj) el.active = true;
                        return el;
                    })
                }, function () {
                    var unActiveEl = _this3.state.list.filter(function (item) {
                        return !item.active;
                    });
                    if (!unActiveEl.length) {
                        clearInterval(activeEl);
                        _this3.setState({
                            borderWidth: 20
                        });
                    };

                    if (unActiveEl.length === Math.floor(_this3.state.list.length / 2)) {
                        _this3.setState({
                            borderWidth: 10
                        });
                    }
                });
            }, 1000);
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                list = _state.list,
                borderWidth = _state.borderWidth;


            return list.length ? React.createElement(
                'ul',
                { className: 'list', style: { borderWidth: borderWidth } },
                list.map(function (animal, idx) {
                    return React.createElement(ListItem, { key: idx, item: animal });
                })
            ) : React.createElement(
                'p',
                null,
                'The list is empty'
            );
        }
    }]);

    return List;
}(React.Component);

var App = React.createElement(
    React.Fragment,
    null,
    React.createElement(List, { list: animals })
);

root.render(App);