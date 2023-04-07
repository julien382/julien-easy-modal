"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
var Modal = function Modal(_ref) {
  var children = _ref.children,
    setIsOpen = _ref.setIsOpen,
    isOpen = _ref.isOpen,
    _ref$closingCross = _ref.closingCross,
    closingCross = _ref$closingCross === void 0 ? true : _ref$closingCross,
    _ref$editClose = _ref.editClose,
    editClose = _ref$editClose === void 0 ? 'X' : _ref$editClose,
    _ref$fadeDuration = _ref.fadeDuration,
    fadeDuration = _ref$fadeDuration === void 0 ? null : _ref$fadeDuration,
    _ref$fadeDelay = _ref.fadeDelay,
    fadeDelay = _ref$fadeDelay === void 0 ? null : _ref$fadeDelay;
  // fermeture de la modal
  var handleClose = function handleClose() {
    setIsOpen(false);
  };
  // transition de fondu
  var transitionStyle = {
    transition: "opacity ".concat(fadeDuration, "ms ease-in-out ").concat(fadeDelay, "ms"),
    opacity: isOpen ? 1 : 0
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: isOpen ? "shadow-modal" : "",
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: isOpen ? "modal" : "",
    style: transitionStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: isOpen ? "inModal" : ""
  }, closingCross && /*#__PURE__*/_react["default"].createElement("span", {
    className: isOpen ? "modal-close" : "",
    onClick: handleClose
  }, editClose), children)));
};
var _default = Modal;
exports["default"] = _default;