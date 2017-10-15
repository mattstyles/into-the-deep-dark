'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;
  return React.createElement(
    'button',
    { onClick: onClick, className: 'jsx-1325340955' + ' ' + 'Btn'
    },
    children,
    React.createElement(_style2.default, {
      styleId: '1325340955',
      css: '.Btn.jsx-1325340955{background:rgb(52,152,220);color:white;padding:0 3rem;font-size:1.4rem;line-height:3;border:none;border-radius:4px;}'
    })
  );
};

exports.default = Button;