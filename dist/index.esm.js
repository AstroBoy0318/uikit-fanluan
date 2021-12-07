import React, { Children, isValidElement, cloneElement, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, flexbox, layout } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React.createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#fb2141" }),
        React.createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#fb2141" }),
        React.createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#fb2141" }),
        React.createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#fb2141" }),
        React.createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#fb2141" }),
        React.createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#fb2141" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("image", { width: "32", height: "32", href: "/images/egg/logo.png" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React.createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#17191d" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/egg/9.png" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/incubator/9.png" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#fb2141" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#fb2141" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React.createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React.createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React.createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), flexbox, space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "18px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled.input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled(GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled(Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$t, { color: "primary", ml: "4px" })));
};

var Bar = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressBunnyWrapper = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React.createElement(StyledProgress, null,
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$A, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate$1 = keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("image", { width: "96", height: "96", href: "/images/egg/9.png" })));
};
var Container$1 = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(SpinnerIcon)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$1, null,
        React.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$1, templateObject_5;

var Handle = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled.input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked },
        React.createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React.createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$5, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$k, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #fb2141;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #fb2141;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    return (React.createElement(Svg, __assign({ viewBox: "0 0 195 37" }, props),
        React.createElement("image", { width: "195", height: "37", href: isDark ? '/images/egg/LogoTextNewDark.png' : '/images/egg/LogoTextNewWhite.png' })));
};

var Icon$Q = function (props) {
    return (React.createElement("svg", __assign({ width: 400, height: 400, viewBox: "0, 0, 400,400" }, props),
        React.createElement("g", { stroke: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M214.9 79.876c.385.1 1.015.1 1.4 0 .385-.101.07-.183-.7-.183s-1.085.082-.7.183m6.8.524c.106.392.707.618 1.731.651 1.503.049 1.51.043.172-.133-.768-.101-1.546-.393-1.73-.651-.228-.318-.283-.276-.173.133M150 82.6c0 .33.103.6.229.6.125 0 .498-.27.828-.6.533-.533.508-.6-.228-.6-.47 0-.829.26-.829.6m84.9-.324c.385.1 1.015.1 1.4 0 .385-.101.07-.183-.7-.183s-1.085.082-.7.183m11.452 2.236c.193.193.867.286 1.499.207 1.058-.132 1.03-.16-.351-.351-.86-.119-1.35-.058-1.148.144M184.2 86.997c-1.76.302-4.64.753-6.4 1.003-7.047.997-7.736 1.113-8.162 1.376-.243.151-1.926.521-3.74.824-4.895.817-7.182 1.287-8.298 1.709-.55.207-1.961.501-3.135.653-1.174.151-2.434.425-2.8.609-1.028.518-4.026 1.254-6.573 1.616-1.269.18-2.529.511-2.8.735-.27.224-1.392.586-2.492.804-1.1.218-2.9.665-4 .993-1.1.328-3.71 1.07-5.8 1.648-2.09.578-4.076 1.204-4.413 1.391-.337.187-1.237.464-2 .616-.763.152-1.837.428-2.387.614-.55.187-2.35.739-4 1.228s-3.54 1.122-4.2 1.407l-2.66 1.147c-.804.347-1.723.63-2.044.63-.321 0-1.595.54-2.832 1.2-1.237.66-2.522 1.2-2.856 1.2-.335 0-.608.18-.608.4 0 .22-.257.4-.571.4-.315 0-.811.239-1.104.532-.292.292-1.017.787-1.611 1.1-1.892.996-6.314 4.108-6.314 4.444 0 .178-.18.324-.4.324-.22 0-.737.315-1.148.7-2.005 1.877-3.199 2.9-3.384 2.9-.33 0-6.323 6.058-8.068 8.155a88.898 88.898 0 01-2.7 3.097c-.605.647-1.1 1.27-1.1 1.386 0 .179-2.087 3.102-3.114 4.362-.18.22-.459.67-.622 1-.347.704-.885 1.587-2.356 3.867-.592.916-1.193 2.131-1.335 2.7-.143.568-.42 1.033-.616 1.033-.197 0-.357.287-.357.638 0 .351-.239 1.116-.531 1.7a699.44 699.44 0 01-1.2 2.394c-.368.733-.669 1.577-.669 1.874 0 .298-.212 1.049-.47 1.668-.572 1.371-1.425 4.758-1.945 7.726-.812 4.638-.445 29.268.444 29.818.179.11.45 1.033.602 2.05.153 1.017.522 2.318.821 2.891.299.572.544 1.345.546 1.717.001.372.162.776.358.897.195.121.478.709.629 1.308.15.599.8 1.87 1.444 2.824.644.954 1.171 1.891 1.171 2.082 0 .19.135.406.3.48.358.159 2.1 2.598 2.1 2.94 0 .132.705.994 1.567 1.916.862.923 1.949 2.164 2.415 2.758 1.358 1.735 5.613 5.937 8.423 8.319 1.427 1.21 2.775 2.397 2.995 2.638.703.77 5.174 4.013 5.9 4.28.385.141.7.443.7.669 0 .227.257.413.571.413.315 0 .817.225 1.117.5.802.735 1.85 1.357 4.312 2.561 1.21.591 2.26 1.224 2.333 1.407.074.183.457.332.851.332.395 0 .942.27 1.216.6.274.33.917.6 1.429.6s1.075.225 1.251.5c.454.709 2.854 1.794 4.62 2.087.825.137 1.5.421 1.5.631 0 .21.326.382.724.382.397 0 1.072.264 1.5.587.427.323 1.159.593 1.627.6.468.007 1.063.269 1.323.582.26.313 1.181.688 2.047.835.866.146 1.676.43 1.801.631.124.201.72.365 1.325.365s1.449.264 1.877.587c.427.323 1.355.593 2.062.6.707.007 2.057.266 3 .574.943.309 2.927.683 4.41.832 1.482.148 2.798.436 2.923.638.126.203 1.093.369 2.15.369s2.854.177 3.994.393c1.14.216 4.54.581 7.555.811 3.015.23 5.842.575 6.282.767 1.972.861 44.239 1.902 49.4 1.217 1.43-.19 6.11-.458 10.4-.597 4.29-.138 8.25-.414 8.8-.612.55-.198 2.35-.549 4-.78 4.241-.594 8.894-1.414 9.6-1.691.855-.335 3.86-1.111 6.2-1.6 1.1-.229 2.567-.663 3.26-.963.694-.3 1.807-.545 2.474-.545.668 0 1.721-.199 2.34-.443.619-.243 2.116-.594 3.326-.78 2.745-.421 6.641-1.348 8.126-1.933.619-.244 1.708-.444 2.42-.444s1.479-.185 1.705-.411c.225-.225 1.377-.525 2.56-.665 1.182-.14 2.608-.494 3.169-.787.561-.293 1.56-.539 2.22-.547.66-.009 1.549-.28 1.976-.603.428-.323 1.358-.587 2.068-.587s1.891-.301 2.624-.669c.732-.369 1.81-.909 2.394-1.2.584-.292 1.417-.531 1.851-.531.434 0 1.013-.27 1.287-.6.274-.33.763-.6 1.087-.6.324 0 1.067-.256 1.651-.569.584-.312 1.332-.674 1.662-.804.33-.13 1.14-.591 1.8-1.025.66-.435 1.605-.968 2.1-1.186.495-.218.9-.581.9-.806 0-.226.178-.41.396-.41.609 0 4.71-3.256 7.643-6.069 1.451-1.392 3.584-3.341 4.74-4.331 2.916-2.499 9.518-9.083 11.308-11.278 2.061-2.529 3.2-3.883 3.974-4.725.363-.395.774-1.076.912-1.513.139-.437.683-1.259 1.209-1.827.526-.567 1.084-1.442 1.241-1.944.157-.502.396-1.003.531-1.113.486-.395 2.278-4.437 3.37-7.6 1.186-3.438 1.877-6.622 2.299-10.6.233-2.2.584-5.35.779-7 .482-4.079.455-12.198-.048-14.4a63.684 63.684 0 01-.625-3.086c-.117-.707-.464-1.494-.771-1.749-.307-.255-.558-.676-.558-.936 0-.745-5.001-10.356-5.9-11.339-.275-.301-.5-.688-.5-.859 0-.714-4.271-6.912-6.19-8.982-.555-.6-1.01-1.183-1.01-1.296 0-.395-8.75-8.953-9.153-8.953-.224 0-.551-.234-.727-.519-.429-.697-5.157-4.281-5.647-4.281-.213 0-.491-.27-.618-.6-.126-.33-.423-.6-.659-.6-.418 0-2.795-1.535-3.199-2.067-.112-.147-1.552-.946-3.2-1.776-1.648-.83-3.087-1.61-3.197-1.734-.11-.123-1.1-.655-2.2-1.181-1.1-.527-2.27-1.177-2.6-1.445-.33-.268-1.5-.813-2.6-1.211-1.1-.398-2.18-.851-2.4-1.006-.22-.155-.85-.416-1.4-.58-.55-.164-2.053-.816-3.341-1.449-1.288-.633-2.638-1.157-3-1.164-.788-.016-4.304-1.226-5.533-1.905-.48-.265-1.403-.482-2.051-.482-.647 0-1.824-.27-2.613-.6-.79-.33-1.971-.6-2.626-.6-.654 0-1.291-.165-1.415-.366-.125-.201-1.62-.495-3.324-.653-1.703-.157-3.547-.472-4.097-.699-.55-.228-2.08-.549-3.4-.715l-7.2-.901c-2.64-.33-5.079-.711-5.421-.846-.626-.247-4.969-.617-16.379-1.394-3.41-.233-7.64-.628-9.4-.879-4.986-.711-25.324-.816-29.2-.15m-54.416.23c-.467.754.137.874 1.079.214l.915-.641h-.865c-.476 0-.984.192-1.129.427m83.416 1.747c6.928.361 13.736.935 19.4 1.634 2.64.327 7.241.831 10.224 1.122 2.983.291 5.639.662 5.902.824.262.162 1.691.462 3.175.667 5.38.741 9.512 1.439 10.099 1.705.33.149 1.41.44 2.4.646 5.275 1.097 8.366 2.009 10.462 3.083.584.3 1.424.545 1.867.545.444 0 1.316.256 1.939.568.622.313 1.942.875 2.932 1.251 2.62.993 4.581 1.938 4.733 2.281.074.165.322.3.551.3.62 0 6.274 2.807 8.116 4.03.88.584 2.68 1.652 4 2.374 1.32.721 3.056 1.826 3.858 2.454.801.628 1.647 1.142 1.88 1.142.232 0 .566.23.742.512.176.281 1.85 1.7 3.72 3.152 4.504 3.498 12.399 11.504 12.4 12.574 0 .241.369.772.821 1.181 1.002.907 3.837 5.103 4.182 6.191.138.434.399.79.581.79.181 0 .453.495.604 1.1.151.605.666 1.64 1.145 2.3.861 1.187 3.168 5.68 4.107 8 1.449 3.576 1.727 4.677 1.926 7.6.376 5.547-.743 18.788-1.962 23.2a331.77 331.77 0 00-1.195 4.487c-.354 1.368-.904 2.988-1.224 3.6-.319.612-.581 1.325-.583 1.584-.002.405-.685 1.618-3.323 5.907a21.9 21.9 0 01-.791 1.2c-.172.232-1.028 1.402-1.903 2.599-2.788 3.812-6.666 7.963-12.169 13.023a647.46 647.46 0 00-5.811 5.4c-3.767 3.579-7.732 6.8-8.368 6.8-.24 0-.438.135-.44.3-.001.165-.586.637-1.3 1.049-3.565 2.059-6.32 3.451-6.831 3.451-.312 0-.792.27-1.066.6-.274.33-.905.6-1.403.6s-1.421.269-2.051.598c-.63.328-1.416.604-1.746.612-.33.009-.949.28-1.376.603-.428.323-1.328.593-2 .6-.673.007-1.573.277-2 .6-.428.323-1.148.59-1.6.593-.453.003-1.544.265-2.424.582-.88.317-2.32.591-3.2.607-.88.017-1.949.295-2.376.618-.428.323-1.517.587-2.42.587-.904 0-1.817.173-2.029.385-.212.212-1.463.51-2.78.661-1.317.151-2.504.442-2.637.645-.134.203-1.034.461-2 .573-.967.112-2.437.458-3.266.77-.83.311-2.056.566-2.726.566-.67 0-1.599.203-2.063.452-.465.249-1.848.588-3.074.753-1.226.166-2.814.503-3.529.748l-2.6.894c-.715.245-2.29.586-3.5.757-1.21.171-2.707.51-3.326.753-.619.244-1.879.443-2.8.444-.921 0-3.13.256-4.91.57-1.794.315-6.342.604-10.2.648-4.5.05-7.809.285-9.351.663-2.69.659-21.171.476-26.413-.262-1.54-.216-5.86-.411-9.6-.432-3.74-.021-8.33-.208-10.2-.416-1.87-.207-5.2-.554-7.4-.77-2.2-.217-4.9-.565-6-.774-1.1-.209-2.991-.391-4.203-.404-1.211-.013-2.831-.212-3.6-.443-1.368-.409-6.312-1.362-10.107-1.946-1.05-.162-2.121-.506-2.38-.765-.258-.258-.94-.47-1.514-.47-.573 0-1.392-.264-1.82-.587-.427-.323-1.159-.593-1.627-.6-.468-.007-1.056-.261-1.308-.563-.251-.303-1.173-.665-2.049-.805-.875-.14-1.592-.432-1.592-.65 0-.217-.326-.395-.724-.395-.397 0-1.072-.264-1.5-.587-.427-.323-1.141-.593-1.587-.6-.446-.007-1.166-.256-1.6-.553-.434-.297-1.284-.661-1.889-.808-.605-.147-1.1-.444-1.1-.66 0-.215-.287-.392-.638-.392-.351 0-1.116-.256-1.7-.569-.584-.312-1.332-.674-1.662-.804-.33-.13-1.14-.582-1.8-1.005-.66-.423-1.971-1.16-2.914-1.638-.942-.478-1.94-1.075-2.217-1.326-.703-.64-1.908-1.39-2.969-1.849-.495-.214-.9-.562-.9-.772 0-.211-.315-.487-.7-.614-.385-.127-1.33-.765-2.1-1.419l-2.941-2.496c-2.851-2.421-9.312-8.891-10.892-10.908-.862-1.1-1.761-2.18-1.998-2.4-.64-.595-2.796-3.51-3.105-4.2-.148-.33-.71-1.32-1.249-2.2-.539-.88-.988-1.879-.998-2.22-.009-.341-.227-.83-.484-1.087-1.232-1.232-2.664-6.939-3.185-12.693-.616-6.795-.216-24.023.601-25.887.358-.818.651-1.999.651-2.624s.264-1.485.587-1.913c.323-.427.593-1.147.6-1.6.007-.452.277-1.172.6-1.6.323-.427.593-1.043.6-1.368.02-.901 1.715-4.808 2.087-4.808.179 0 .326-.295.326-.656 0-.36.54-1.533 1.2-2.606.66-1.072 1.2-2.118 1.2-2.324 0-.206.225-.518.5-.694.561-.359 1.309-1.475 1.891-2.82.214-.495.545-.9.735-.9.19 0 .53-.405.756-.901.375-.822 2.058-2.923 3.818-4.766.385-.403.7-.83.7-.95 0-.403 8.587-8.822 10.4-10.197.99-.751 1.89-1.462 2-1.579.11-.118.874-.663 1.697-1.211.824-.548 1.499-1.135 1.5-1.306.002-.17.408-.488.903-.706.495-.218 1.44-.751 2.1-1.184.66-.433 1.56-.97 2-1.193.44-.223 1.07-.559 1.4-.747.33-.189 1.32-.66 2.2-1.048a56.86 56.86 0 002.662-1.258c.584-.305 1.597-.554 2.251-.554.654 0 1.413-.27 1.687-.6.274-.33.881-.606 1.349-.613.468-.007 1.2-.277 1.627-.6.428-.323 1.12-.587 1.539-.587.419 0 1.239-.244 1.823-.542 1.413-.721 4.996-1.858 5.855-1.858.377 0 1.253-.247 1.947-.55.693-.302 2.43-.852 3.86-1.223 1.43-.37 3.5-.927 4.6-1.236 1.1-.309 2.45-.67 3-.802.55-.132 1.36-.384 1.8-.561 1.007-.405 3.697-1.125 6.8-1.82 1.32-.296 3.84-.896 5.6-1.334 1.76-.437 4.1-.979 5.2-1.204 1.1-.225 3.08-.709 4.4-1.077 1.32-.367 3.66-.836 5.2-1.043 1.54-.206 3.077-.528 3.416-.714.339-.186 1.779-.469 3.2-.628 1.421-.16 3.567-.542 4.768-.849 1.201-.308 3.181-.572 4.4-.587 1.219-.016 2.576-.188 3.016-.384.849-.377 19.795-.252 28.2.186M92.92 90.941c-.176.298-.59.644-.92.769-.484.183-.468.233.086.258.377.018.879-.328 1.114-.768.475-.887.227-1.116-.28-.259m4.18.941a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m5-.006c.385.1 1.015.1 1.4 0 .385-.101.07-.183-.7-.183s-1.085.082-.7.183m93.1.992c-1.43.19-4.13.496-6 .679-1.87.184-3.907.54-4.526.793-.619.253-2.101.46-3.292.46-1.191 0-2.844.262-3.674.581-1.608.62-4.901 1.319-8.537 1.813-1.226.166-2.619.51-3.095.765-.475.255-1.632.628-2.57.83-4.444.957-5.766 1.284-6.506 1.612-.44.194-1.61.474-2.6.622-.99.147-1.98.403-2.2.568-.22.165-1.21.423-2.2.574-1.816.277-5.229 1.268-6.475 1.879-1.333.655-5.311 1.956-5.979 1.956-.375 0-1.191.259-1.814.576-1.796.913-4.018 1.824-4.447 1.824-.216 0-.909.269-1.539.598-.63.328-1.416.604-1.746.612-.33.009-.949.28-1.376.603-.428.323-1.148.593-1.6.6-.453.007-1.173.277-1.6.6-.428.323-1.01.587-1.294.587-.285 0-1.396.54-2.468 1.2-1.073.66-2.231 1.2-2.573 1.2-.342 0-.682.153-.756.34-.073.186-1.71 1.106-3.636 2.043-1.927.937-3.603 1.865-3.724 2.061-.121.196-.57.356-.997.356-.427 0-.776.184-.776.41 0 .225-.405.593-.9.817-1.267.574-2.112 1.097-5.441 3.373-1.609 1.1-3.295 2.209-3.746 2.464-.452.255-.932.623-1.067.818-.135.196-1.326 1.18-2.646 2.188-2.259 1.724-9.4 8.506-9.4 8.927 0 .198-1 1.471-1.9 2.419-.275.29-.5.637-.5.772 0 .346-1.739 2.785-2.1 2.945-.165.074-.3.457-.3.851 0 .395-.27.942-.6 1.216-.33.274-.6.814-.6 1.2s-.27.926-.6 1.2c-.33.274-.6.853-.6 1.287 0 .434-.253 1.267-.562 1.851-1.564 2.954-2.042 8.5-1.308 15.173.38 3.459.687 6.928.681 7.709-.006.781.174 1.605.4 1.831.225.225.511 1.386.634 2.58.123 1.193.478 2.848.789 3.677.312.83.572 2.09.579 2.8.007.711.277 1.641.6 2.068.323.428.587 1.35.587 2.051 0 .701.27 1.499.6 1.773.33.274.606.881.613 1.349.007.468.277 1.2.6 1.627.323.428.587 1.2.587 1.716 0 1.017 1.334 3.897 1.994 4.304.223.138.406.529.406.87 0 .34.54 1.418 1.2 2.396.66.978 1.2 1.878 1.2 2 0 1.278 8.135 9.254 12.611 12.365 5.951 4.136 7.888 5.386 9.789 6.314 2.084 1.017 2.645 1.312 4.3 2.26.385.22 1.088.569 1.561.775.474.206.979.566 1.124.799.144.234.68.425 1.19.425.51 0 1.151.27 1.425.6.274.33.853.6 1.287.6.434 0 1.267.249 1.851.554 1.007.524 1.839.896 5.376 2.402.832.354 1.833.644 2.223.644.391 0 1.059.264 1.487.587.427.323 1.316.594 1.976.603.66.008 1.716.284 2.346.612.63.329 1.44.599 1.8.6.36.002 1.17.272 1.8.6.63.329 1.8.606 2.6.616.8.009 2.174.277 3.054.594.88.317 2.113.579 2.74.582.626.003 1.706.26 2.4.57.693.31 2.97.655 5.06.766 2.09.112 4.34.419 5 .682 1.655.661 30.721.715 32.306.06.608-.251 2.858-.566 5-.7s4.524-.437 5.294-.674c.77-.236 2.57-.567 4-.734 1.43-.167 3.41-.49 4.4-.717.99-.227 2.814-.42 4.054-.43 1.24-.009 2.77-.286 3.4-.615.63-.328 1.776-.601 2.546-.606.77-.004 2.12-.267 3-.584.88-.317 2.614-.585 3.854-.594 1.24-.01 2.77-.287 3.4-.616.63-.328 1.923-.598 2.872-.6.95-.001 2.107-.205 2.571-.454.465-.249 1.848-.588 3.074-.753 1.226-.166 2.769-.488 3.429-.716 2.078-.716 6.484-1.679 7.686-1.679.635 0 1.346-.192 1.581-.427.235-.235 1.396-.584 2.58-.775 1.993-.322 4.221-.911 7.453-1.971l2.6-.854a132.153 132.153 0 016.884-2.01c.872-.223 1.772-.538 2-.7.229-.162 1.496-.62 2.816-1.017 2.509-.755 6.044-2.223 10.837-4.499 1.56-.741 3.045-1.347 3.3-1.347.254 0 .463-.18.463-.4 0-.22.228-.4.506-.4.863 0 6.843-3.532 9.819-5.8 1.305-.995 6.395-6.061 6.63-6.6.144-.33.891-1.68 1.659-3a84.895 84.895 0 002.42-4.5c.563-1.155 1.191-2.1 1.395-2.1.204 0 .371-.338.371-.751s.27-.975.6-1.249c.33-.274.6-.724.6-1s.258-.717.574-.979c.316-.262.69-1.004.832-1.649.142-.644.404-1.172.582-1.172.179 0 .438-.45.576-1 .138-.55.428-1 .644-1 .215 0 .392-.252.392-.559 0-.307.54-1.647 1.2-2.978.66-1.33 1.2-2.716 1.2-3.08 0-.364.243-1.229.541-1.923 2.163-5.042 2.909-17.756 1.23-20.974-.311-.597-.567-1.47-.569-1.94-.001-.47-.271-1.37-.6-2-.328-.63-.598-1.626-.6-2.213-.001-.586-.145-1.126-.32-1.2-.438-.183-2.082-3.43-2.082-4.112 0-.305-.135-.614-.3-.688-.355-.157-2.1-2.596-2.1-2.934 0-.264-.362-.706-2.54-3.104-3.457-3.805-6.387-6.735-7.135-7.135-.81-.434-2.284-1.606-3.594-2.86-.402-.385-.871-.7-1.042-.7-.171 0-.932-.568-1.692-1.262-.76-.694-2.87-2.141-4.689-3.215-1.82-1.075-3.308-2.127-3.308-2.338 0-.212-.289-.385-.642-.385-.354 0-1.299-.513-2.1-1.141-.802-.627-1.953-1.26-2.558-1.407-.605-.147-1.1-.444-1.1-.66 0-.215-.349-.392-.776-.392-.427 0-.881-.169-1.008-.375-.128-.206-1.173-.839-2.324-1.407-1.151-.568-2.362-1.188-2.692-1.378-1.238-.712-4.303-2.04-4.71-2.04-.233 0-.483-.135-.557-.3-.132-.297-1.043-.753-4.933-2.468-1.1-.485-2.313-1.051-2.695-1.257-.382-.206-.894-.375-1.139-.375s-1.102-.283-1.906-.63l-2.766-1.189a130.3 130.3 0 01-2.6-1.156c-.712-.329-1.834-.718-2.494-.866-.66-.148-1.38-.404-1.6-.568-.22-.164-.997-.426-1.727-.583-.73-.156-1.81-.535-2.4-.843-.59-.308-1.352-.561-1.693-.563-.341-.001-.791-.172-1-.379-.209-.207-1.1-.559-1.98-.782-.88-.223-2.68-.695-4-1.049a295.25 295.25 0 00-3.952-1.032c-.853-.213-1.929-.651-2.389-.974-.46-.322-1.674-.586-2.698-.586-1.023 0-2.626-.27-3.561-.6-.935-.33-2.263-.603-2.95-.606-.688-.003-1.97-.265-2.85-.582-1.828-.659-22.311-.768-27-.144m22.8 1.547c4.428.384 9.527 1.207 10.2 1.646.22.144 1.3.382 2.4.531 1.1.148 2.679.525 3.508.839.83.313 2.034.569 2.676.569.643 0 1.267.16 1.388.355.121.195.887.48 1.703.633.816.153 1.848.533 2.294.845.445.312 1.187.567 1.649.567.921 0 4.06.955 6.042 1.838.694.309 1.419.562 1.612.562.193 0 1.606.535 3.14 1.189 1.533.654 3.171 1.194 3.639 1.2.468.006 1.075.281 1.349.611.274.33.821.6 1.217.6.395 0 1.228.261 1.851.58.622.318 1.402.677 1.732.797.33.12.87.381 1.2.58.33.199 1.41.677 2.4 1.063 1.584.618 6.32 2.842 8 3.758.33.18 1.41.715 2.4 1.19.99.474 2.07 1.014 2.4 1.2.33.185 1.442.725 2.471 1.198 1.029.474 1.929.99 2 1.148.071.157.998.736 2.061 1.286 3.681 1.906 4.069 2.125 4.268 2.408.11.156.605.411 1.1.565.495.155.9.449.9.654 0 .205.191.373.424.373.361 0 3.059 1.85 4.659 3.194.266.223.626.407.8.408.174.001.892.541 1.595 1.2.703.659 1.393 1.198 1.533 1.198.775 0 10.589 9.823 10.589 10.598 0 .331.158.602.351.602.522 0 3.249 4.099 3.249 4.884 0 .372.225.82.5.996.524.336 1.432 2.419 1.794 4.12.117.55.372 1.201.565 1.447 2.542 3.235 2.496 21.358-.062 23.916-.218.218-.397.879-.397 1.468s-.27 1.295-.6 1.569c-.33.274-.6.814-.6 1.2s-.27.926-.6 1.2c-.33.274-.608.791-.617 1.149-.01.358-.459 1.371-.998 2.251-.539.88-1.085 1.87-1.215 2.2-.24.613-1.523 3.214-2.532 5.132-.309.587-.714 1.128-.9 1.201-.186.074-.338.466-.338.872 0 .406-.225.979-.5 1.274-.275.294-.95 1.432-1.5 2.528s-1.1 2.083-1.221 2.193c-.122.11-.648.92-1.171 1.8-1.496 2.522-6.474 7.133-9.523 8.822a100.2 100.2 0 00-3.085 1.803c-2.607 1.597-7.623 3.973-11.799 5.59-1.209.468-2.379.989-2.6 1.158-.221.168-1.751.728-3.401 1.244s-3.18 1.067-3.4 1.225c-.22.157-1.12.418-2 .579-.88.161-1.955.537-2.389.836-.434.299-1.188.543-1.676.543s-.989.164-1.113.365c-.125.201-.99.477-1.924.612-1.758.256-4.987 1.139-7.606 2.081-.83.298-2.009.542-2.62.542-.612 0-1.283.166-1.492.369-.363.353-1.858.72-7.18 1.762-1.32.258-2.637.623-2.927.81-.29.187-1.64.428-3 .536-1.36.107-3.04.449-3.733.759-.694.31-1.774.567-2.4.57-.627.003-1.86.265-2.74.582-.88.317-2.5.587-3.6.6-1.1.013-2.72.283-3.6.6-.88.317-2.32.587-3.2.6-.88.013-2.32.283-3.2.6-.88.317-2.779.585-4.22.594-1.441.01-2.812.21-3.046.444-.234.234-2.064.58-4.066.768-2.001.187-3.837.463-4.079.613-.242.15-2.184.416-4.315.591-2.131.175-4.594.515-5.474.755-2.685.733-28.892.62-31.056-.134-.959-.334-2.644-.623-3.744-.642-1.1-.02-2.9-.187-4-.372s-3.137-.52-4.527-.744c-1.39-.224-2.74-.58-3-.789-.26-.21-1.193-.464-2.073-.564-2.204-.25-5.373-1.073-6.732-1.746-.623-.309-1.675-.562-2.339-.562-.663 0-1.683-.239-2.267-.531a699.44 699.44 0 01-2.394-1.2c-.733-.368-1.695-.669-2.139-.669-.443 0-1.283-.251-1.867-.557-1.221-.64-3.846-1.681-5.162-2.047-.495-.137-.9-.418-.9-.623 0-.205-.192-.373-.427-.373-.712 0-7.836-3.556-10.065-5.024-1.149-.757-2.319-1.376-2.599-1.376-.28 0-.509-.139-.509-.309 0-.17-.644-.656-1.43-1.079-.787-.424-1.822-1.091-2.3-1.484-1.389-1.139-1.555-1.271-3.87-3.085-4.498-3.524-8.488-7.783-10.485-11.191-1.399-2.387-2.715-5.101-2.715-5.598 0-.214-.301-.989-.669-1.722-1.238-2.463-1.587-3.322-2.245-5.532-.36-1.21-1.149-3.82-1.752-5.8-.604-1.98-1.233-4.59-1.399-5.8a365.41 365.41 0 00-.735-5c-1.066-6.902-1.28-9.409-1.058-12.4.419-5.63.861-8.563 1.366-9.068.271-.271.492-.802.492-1.18 0-.787 2.794-6.484 3.279-6.685.177-.074.321-.318.321-.543 0-.225.576-1.155 1.279-2.066.704-.912 1.484-1.928 1.735-2.258.835-1.099 8.041-8.187 9.222-9.071a35.835 35.835 0 001.979-1.6c1.287-1.151 3.317-2.529 3.726-2.529.205 0 .462-.23.57-.512.108-.282.892-.867 1.743-1.3.85-.433 1.636-.878 1.746-.988.449-.449 2.785-2 3.012-2 .135 0 .515-.27.845-.6.33-.33.947-.6 1.372-.6.424 0 .771-.162.771-.36 0-.398 2.961-2.04 3.681-2.04.251 0 .74-.236 1.088-.525.347-.289 1.441-.862 2.431-1.275.99-.413 2.084-.986 2.431-1.275.348-.289.911-.525 1.252-.525.34 0 .843-.27 1.117-.6.274-.33.904-.6 1.4-.6.496 0 1.126-.27 1.4-.6.274-.33.731-.6 1.017-.6.285 0 1.118-.301 1.851-.669.732-.369 1.81-.909 2.394-1.2.584-.292 1.343-.531 1.686-.531.344 0 1.216-.255 1.938-.567.723-.311 1.971-.851 2.774-1.2.804-.348 1.907-.633 2.451-.633.545 0 1.215-.27 1.489-.6.274-.33 1.061-.606 1.749-.614.688-.008 1.701-.272 2.251-.586.55-.314 1.422-.578 1.938-.586.516-.008 1.416-.266 2-.574.584-.309 2.142-.831 3.462-1.162 3.941-.986 5.836-1.462 9.125-2.291 1.719-.433 3.463-.787 3.874-.787.412 0 1.256-.212 1.875-.472 1.044-.437 3.345-.968 8.326-1.923 1.1-.211 2.36-.563 2.8-.783.44-.22 2.42-.579 4.4-.798 1.98-.219 5.13-.685 7-1.036 5.934-1.113 21.227-1.63 28.8-.973m-124.7.672a8.899 8.899 0 002.2 0c.605-.092.11-.167-1.1-.167-1.21 0-1.705.075-1.1.167m209.5.691c0 .402-.579.624-1.9.728l-1.9.15 1.886.072c1.521.058 1.969-.083 2.314-.728.29-.542.295-.8.014-.8-.228 0-.414.26-.414.578m-12.7.913c.825.087 2.175.087 3 0 .825-.086.15-.157-1.5-.157s-2.325.071-1.5.157m19.801.439c.602.383-1.233 2.28-2.501 2.585-.702.169-.686.198.131.239.545.027 1.426-.449 2.126-1.15 1.143-1.142 1.238-2.011.219-1.998-.348.005-.342.092.025.324M100 99.533c0 .262-.66.495-1.5.531l-1.5.064 1.351.165c1.319.161 2.467-.408 1.922-.953-.15-.15-.273-.063-.273.193m87.931 4.494c-.808.191-4.138.525-7.4.742-3.262.216-6.831.571-7.931.789-1.1.217-3.089.405-4.42.418-1.331.013-2.591.188-2.8.389-.365.351-2.632.813-8.18 1.669-1.43.22-3.167.663-3.86.983-.694.321-1.527.583-1.852.583-.324 0-1.237.27-2.026.6-.79.33-2.027.606-2.749.613-.722.007-1.662.277-2.089.6-.428.323-1.238.593-1.8.6-.563.007-1.373.277-1.8.6-.428.323-1.182.587-1.677.587-.495 0-1.001.164-1.125.365-.125.201-.952.488-1.838.638-.887.15-2.592.795-3.79 1.435-1.199.639-2.43 1.162-2.737 1.162-.308 0-.783.27-1.057.6-.274.33-.881.606-1.349.613-.468.007-1.2.277-1.627.6-.428.323-1.103.587-1.5.587-.398 0-.724.167-.724.372s-.855.766-1.9 1.247c-1.045.482-2.17 1.035-2.5 1.229-.33.195-.96.536-1.4.759-.44.223-1.34.76-2 1.195-.66.434-1.47.917-1.8 1.073-.33.157-.78.431-1 .611-1.17.953-4.202 3.114-5.627 4.01-2.786 1.75-11.87 11.055-12.557 12.861-.218.574-.581 1.043-.806 1.043-.226 0-.41.27-.41.6 0 .33-.162.6-.361.6-.198 0-.549.495-.779 1.1-.231.605-.775 1.73-1.21 2.5-1.749 3.098-3.65 8.36-3.65 10.105 0 .548-.27 1.644-.6 2.433-.713 1.707-.829 8.688-.164 9.929.24.448.604 1.999.809 3.446.364 2.573 1.159 5.373 1.926 6.782.21.388 1.058 2.145 1.884 3.905 1.823 3.887 7.549 12.404 10.321 15.353 3.53 3.754 5.634 5.817 6.983 6.847.72.55 1.52 1.192 1.776 1.428.256.235 1.455 1.118 2.665 1.963 1.21.844 2.29 1.662 2.4 1.818.11.156.65.424 1.2.596.55.171 1.63.696 2.4 1.165.77.469 2.39 1.354 3.6 1.967 1.21.612 2.47 1.261 2.8 1.442.612.335 1.091.545 4.6 2.016 1.1.461 2.478 1.101 3.062 1.421.584.321 1.394.59 1.8.597.406.007 1.087.277 1.514.6.428.323 1.082.587 1.455.587s1.193.269 1.823.598c.63.328 1.53.598 2 .6.47.001 1.37.271 2 .6.63.328 1.517.598 1.97.6.452.001 1.172.266 1.6.589.427.323 1.463.593 2.302.6.84.007 1.92.228 2.4.49.481.262 1.684.605 2.674.761.99.157 3.51.677 5.6 1.157s5.374 1.026 7.297 1.213c1.923.188 3.69.46 3.926.607.237.146 2.909.42 5.938.61s5.999.532 6.599.76c1.783.678 22.56.534 26.64-.185 1.87-.329 4.84-.61 6.6-.623 1.76-.014 4.1-.195 5.2-.404 1.1-.209 3.17-.483 4.6-.608 1.43-.126 3.279-.485 4.108-.797.83-.312 2.09-.568 2.8-.568 1.994.001 7.967-1.194 9.154-1.83.584-.314 1.853-.57 2.82-.57.967 0 1.929-.166 2.138-.368.474-.46 5.123-2.032 6.007-2.032.359 0 1.309-.285 2.113-.633.803-.349 2.051-.889 2.774-1.2.722-.312 1.577-.567 1.899-.567.544 0 5.238-2.001 6.587-2.808.33-.197 1.59-.842 2.8-1.433 2.799-1.366 10.157-5.806 10.333-6.234.074-.179.308-.325.522-.325 1.095 0 11.114-9.074 14.146-12.812 2.206-2.719 7.399-10.471 7.399-11.045 0-.088.514-1.281 1.142-2.651 1.681-3.669 2.112-5.018 2.488-7.789.186-1.373.525-2.846.754-3.273.603-1.127.51-4.793-.18-7.066-.327-1.08-.604-2.594-.614-3.364-.01-.77-.276-1.85-.59-2.4-.314-.55-.579-1.36-.587-1.8-.009-.44-.555-1.88-1.213-3.2-.658-1.32-1.198-2.551-1.198-2.735-.002-.419-4.094-6.417-4.502-6.598-.165-.074-.3-.318-.3-.544 0-.814-10.947-11.923-11.75-11.923-.132 0-.558-.259-.945-.576-2.344-1.916-7.357-5.349-8.8-6.028-.933-.438-1.698-.918-1.7-1.067-.003-.149-.95-.74-2.105-1.314-1.155-.574-2.64-1.395-3.3-1.825-.66-.43-1.47-.89-1.8-1.024-2.353-.951-4.4-2.003-4.4-2.26 0-.168-.437-.306-.971-.306-.535 0-1.242-.27-1.572-.6-.33-.33-.861-.6-1.179-.6-.319 0-.804-.27-1.078-.6-.274-.33-.791-.601-1.149-.602-.358-.002-1.134-.255-1.724-.563-.59-.308-1.623-.68-2.295-.828-.673-.148-1.326-.435-1.451-.638-.126-.203-.646-.369-1.156-.369-.51 0-1.151-.27-1.425-.6-.274-.33-.791-.601-1.149-.602-.358-.002-1.167-.272-1.797-.6-.63-.329-1.63-.598-2.223-.598s-1.427-.264-1.855-.587c-.427-.323-1.226-.594-1.776-.603-.55-.008-1.467-.258-2.037-.556-.571-.298-1.718-.669-2.549-.825-.832-.156-1.805-.443-2.163-.637-.358-.194-1.683-.464-2.945-.6-1.261-.137-2.397-.415-2.523-.62-.127-.205-.715-.371-1.307-.37-.592.001-1.886-.259-2.876-.578-1.736-.559-4.668-.95-13.6-1.813-2.31-.223-5.418-.587-6.907-.808-3.235-.481-13.49-.465-15.562.024m-97.531.634c-.551.291-.731.527-.4.527.69 0 1.87-.668 1.588-.899-.103-.085-.638.082-1.188.372m218 5.492c0 .33.18.711.4.847.22.136.4-.023.4-.353 0-.33-.18-.711-.4-.847-.22-.136-.4.023-.4.353m-246 .598c0 .247.167.449.371.449s.453.315.553.7c.155.591.19.598.23.049.025-.358-.224-.875-.554-1.149-.415-.344-.6-.359-.6-.049m166 2.634c1.65.322 3.54.767 4.2.989 3.815 1.284 6.46 2.026 7.224 2.026.478 0 1.748.34 2.823.755a65.884 65.884 0 004.353 1.456c4.947 1.446 5.669 1.913 5.206 3.37-.315.991-1.255 1.037-4.219.205a151.582 151.582 0 00-4.787-1.232c-1.43-.341-3.503-.965-4.608-1.387-1.104-.422-2.297-.767-2.651-.767-.354 0-1.25-.246-1.992-.546-.742-.301-3.059-.865-5.149-1.253-4.773-.888-6.45-2.094-4.971-3.572.768-.769.847-.77 4.571-.044m-33.2 7.205c1.43.299 4.4.755 6.6 1.013 2.2.257 5.029.812 6.287 1.233 1.258.42 2.608.763 3 .762.392-.001 1.523.25 2.513.559.99.308 3.15.975 4.8 1.481 1.65.507 3.27 1.053 3.6 1.213.33.16 1.86.678 3.4 1.151 2.796.858 4.454 1.414 8.6 2.883 6.796 2.409 13.921 4.128 19.6 4.729 1.87.198 4.39.55 5.6.782 1.21.233 4 .584 6.2.779 3.701.329 6.169.762 9.2 1.613 4.122 1.157 7.227 2.166 7.4 2.405.11.152 1.03.758 2.044 1.347 3.929 2.281 7.133 6.523 5.876 7.78-.98.98-3.52.036-3.52-1.307 0-2.978-10.388-7.263-19.894-8.206-2.032-.201-4.372-.562-5.2-.801-.828-.24-3.447-.546-5.82-.682-2.373-.135-4.408-.398-4.523-.585-.297-.48-4.163-.423-4.163.061 0 .22.906.4 2.013.4 1.346 0 2.083.183 2.225.555.117.305 1.416.956 2.887 1.448s2.855 1.028 3.075 1.193c.22.164 1.335.603 2.477.976 1.857.605 7.694 3.422 8.723 4.21.22.168 1.3.64 2.4 1.048 1.1.409 2.72 1.219 3.6 1.8.88.582 3.044 1.872 4.809 2.866 8.807 4.964 23.791 17.853 23.791 20.466 0 2.156-2.246 1.54-5-1.37-4.116-4.35-6.908-6.915-8.086-7.429-.707-.309-1.467-.901-1.689-1.317-.423-.79-3.717-3.19-6.558-4.778-.917-.512-2.027-1.255-2.467-1.652-2.543-2.29-22.436-11.948-27.6-13.399-1.32-.371-2.94-.86-3.6-1.087-2.094-.719-5.526-1.584-7.8-1.966-1.21-.203-3.28-.571-4.6-.818-2.608-.488-5.985-.909-11.615-1.448-1.988-.19-3.821-.473-4.074-.63-.253-.156-3.273-.637-6.71-1.068-3.438-.431-7.898-1.07-9.912-1.419-8.833-1.533-16.808-1.938-21.689-1.101-1.54.264-4.679.771-6.975 1.128-4.795.745-13.514 2.743-15.733 3.606-.83.322-2.124.586-2.876.586-.753 0-1.465.156-1.584.347-.118.192-.946.465-1.841.608-.894.143-1.933.422-2.308.621-.376.199-2.476.932-4.668 1.63-2.191.698-5.202 1.882-6.69 2.632-3.181 1.601-3.834 1.672-4.291.462-.416-1.103.107-2.205 1.29-2.718a12.494 12.494 0 001.476-.767c1.077-.695 4.341-2.015 4.983-2.015.346 0 .94-.18 1.322-.399 1.675-.964 20.007-5.942 24.895-6.761 3.132-.524 5.989-1.084 10-1.958 4.194-.914 17.778-.899 20.627.024 1.085.351 3.863.845 6.173 1.098 2.31.252 6.81.894 10 1.426 3.19.532 6.643.968 7.674.968 1.031.001 2.334.177 2.896.391 1.383.525 11.774 1.8 12.091 1.483.488-.488-.771-1.471-2.408-1.878-.909-.227-1.936-.57-2.282-.762-.347-.193-2.057-.738-3.8-1.211-1.744-.474-3.531-1.027-3.971-1.23-1.484-.685-4.381-1.655-7.8-2.612-1.87-.524-4.16-1.226-5.088-1.56-6.342-2.28-26.025-4.894-32.712-4.343-.44.036-3.05.173-5.8.305-10.31.492-18.681 2.804-28.59 7.897-2.912 1.496-3.573 1.801-7.21 3.325-8.413 3.527-12.084 5.171-13.4 5.999-.77.484-2.39 1.352-3.6 1.928-3.083 1.468-10 8.583-10 10.288 0 .307-5.055 8.332-6.737 10.693-.728 1.023-1.201 1.289-2.29 1.289-2.029 0-1.815-1.216.956-5.445 2.616-3.993 4.028-6.229 6.071-9.609 2.709-4.483 12.825-12.946 15.473-12.946.126 0 1.331-.524 2.678-1.164 5.425-2.58 7.88-3.636 8.451-3.636.329 0 4.645-1.89 9.589-4.2 4.944-2.31 9.101-4.2 9.239-4.2.137 0 .816-.252 1.51-.56 3.172-1.411 5.02-1.757 14.86-2.786 5.992-.627 20.569-.424 24.2.336m129.514 2.014c.227.443.834 1.162 1.349 1.598.904.764.902.75-.057-.405-1.593-1.918-1.727-2.042-1.292-1.193m3.253 3.541c.533.656 2.033 1.648 2.033 1.344 0-.076-.585-.567-1.3-1.09-.804-.589-1.084-.686-.733-.254M58.684 129a38.34 38.34 0 01-.532 1.4c-.201.486-.117.476.438-.053.378-.359.617-.989.532-1.4-.146-.705-.17-.702-.438.053m274.516 2.4c.517.55 1.097 1 1.29 1 .193 0-.134-.45-.728-1-.593-.55-1.174-1-1.29-1-.116 0 .211.45.728 1m-276.161 1.442c-.99 1.675-4.099 4.724-5.272 5.171-.624.237-.972.69-.98 1.277-.016 1.097-.994 2.307-2.487 3.078-.727.375-1.1.886-1.1 1.508 0 1.131-1.349 3.301-3.522 5.665-1.166 1.268-1.671 2.221-1.865 3.513-.167 1.11-.555 1.953-1.039 2.255-.426.266-.774.862-.774 1.326 0 1.136-1.081 3.234-1.81 3.513-.324.125-.59.662-.59 1.193 0 .603-.278 1.038-.739 1.159-.574.15-.697.471-.554 1.446.166 1.13.081 1.254-.852 1.254-.946 0-1.002.088-.645 1.026.578 1.52.473 3.607-.21 4.174-.33.274-.6.724-.6 1s-.272.728-.605 1.004c-.438.363-.488.643-.181 1.013.302.364.29.595-.042.8-.306.189-.382.903-.222 2.074.208 1.514.134 1.814-.487 1.977-.641.167-.739.675-.789 4.062-.047 3.164-.187 3.979-.766 4.47-.528.447-.678 1.067-.589 2.435.084 1.283-.067 1.99-.5 2.349-.34.283-.619.858-.619 1.278 0 .419-.315.882-.7 1.028-.986.374-1.7 1.15-1.7 1.849 0 1.121-.485 1.861-1.221 1.861-.404 0-.97.487-1.257 1.083-.287.596-.956 1.185-1.486 1.31-1.199.281-2.628 2.129-2.303 2.976.306.799 2.564.842 3.433.065.349-.311 1.233-1.121 1.965-1.8s1.497-1.234 1.7-1.234c.203 0 .369-.137.369-.304 0-.756 1.652-1.351 2.287-.824.625.519.544 7.457-.135 11.57-.199 1.207-.11 1.476.545 1.647.677.177.812.663.994 3.583.119 1.9.489 3.916.846 4.606.463.896.54 1.558.283 2.454-.261.908-.205 1.348.214 1.696.311.259.566.797.566 1.197s.195.848.432.995c.238.147.324.702.191 1.232-.17.677-.051 1.039.4 1.212.512.197.605.679.46 2.391-.16 1.894-.093 2.145.568 2.145.745 0 .907.359.769 1.703-.039.386.21.81.554.943.435.166.626.77.626 1.977 0 .973.224 1.878.51 2.057 1.76 1.105 2.473 4.281 1.061 4.729-.456.145-.742.489-.637.764.511 1.33.719 4.947.3 5.206-.246.152-.343.444-.217.649.127.204-.035.372-.36.372-.325 0-.682-.225-.794-.5-.112-.275-.105.59.015 1.923.178 1.959.088 2.554-.47 3.111-.809.81-.54 2.534.519 3.312.711.523 2.017-1.186 2.056-2.692.009-.355.367-1.091.795-1.635.524-.667.818-1.761.9-3.354.14-2.722 1.977-3.88 2.547-1.607.14.555.487 1.203.773 1.44.286.237.425.793.309 1.235-.13.498.062 1.002.507 1.327.459.336.619.777.446 1.227-.199.52-.112.642.335.47.333-.128.605-.071.605.126s-.315.441-.7.541c-.385.101-.025.204.8.23 1.463.045 1.5.084 1.5 1.571 0 1.23.232 1.696 1.2 2.412.932.689 1.2 1.197 1.2 2.275 0 .763.27 1.703.601 2.088 2.916 3.398 3.399 4.112 3.399 5.025 0 .565.16 1.126.355 1.247.195.121.478.877.629 1.682.151.805.552 1.887.892 2.405.339.518.523 1.302.408 1.742-.13.496-.012.799.311.799.58 0 1.005.865 1.005 2.047 0 .869 1.103 2.779 1.89 3.273.281.176.51.649.51 1.051 0 .402.27.955.6 1.229.33.274.6.836.6 1.249 0 .413.19.751.422.751.233 0 .765.765 1.183 1.7.797 1.782 3.322 4.116 4 3.697.598-.369.473-2.912-.161-3.277-.594-.342-3.044-4.656-3.044-5.36 0-.232-.54-.962-1.2-1.622-.798-.798-1.2-1.6-1.2-2.396 0-1.816 1.295-1.181 4.494 2.206a721.074 721.074 0 003.37 3.552c.372.385.992.7 1.379.7s.819.366.961.812c.377 1.188 2.251 2.788 3.265 2.788.532 0 .979.322 1.136.817.173.542.489.744.944.599.456-.145 1.272.382 2.451 1.584.971.99 2.119 1.8 2.55 1.8.786 0 1.41.463 3.37 2.5.582.605 1.487 1.1 2.012 1.1.524 0 1.635.54 2.468 1.2.833.66 1.829 1.2 2.213 1.2.384 0 1.576.54 2.649 1.2 1.072.66 2.105 1.2 2.295 1.2.19 0 .569.27.843.6.274.33.849.6 1.278.6.971 0 4.322 1.929 4.322 2.488 0 .24.477.317 1.142.184.935-.187 1.385.021 2.474 1.144 1.007 1.039 1.576 1.328 2.343 1.19.586-.107 1.575.148 2.349.605.736.434 1.767.789 2.291.789.525 0 1.052.16 1.173.355.121.195.861.475 1.645.622.784.147 1.525.527 1.647.845.14.365.787.578 1.755.578.844 0 1.645.18 1.781.4.136.22.687.4 1.224.4.537 0 1.336.36 1.776.8.563.563 1.333.8 2.6.8 1.253 0 1.8.166 1.8.545 0 .371.517.546 1.608.546.885 0 1.92.263 2.3.585.381.322 1.502.628 2.492.681 1.065.056 1.997.351 2.282.721.278.36.818.537 1.276.417 1.061-.277 4.504.454 5.184 1.101.401.383.905.416 1.942.13 1.199-.331 1.532-.263 2.32.477.505.476 1.341.829 1.858.786 3.606-.299 6.418.032 6.614.78.205.785.462.799 4.177.231.58-.089 1.729.183 2.555.604 2.206 1.125 50.335 1.3 51.15.186.809-1.107 11.177-1.255 12.257-.175.731.731 31.971 1.332 32.674.629.547-.547-.399-3.444-1.124-3.444-.421 0-.765.144-.765.32 0 1.275-16.502 1.971-18.15.766-1.346-.984 3.911-3.375 5.399-2.456.201.125.968-.146 1.705-.602 1.179-.728 1.592-.78 3.447-.428 2.811.533 3.199.508 3.199-.21 0-.818 1.718-1.426 3.194-1.131.884.177 1.258.07 1.443-.41.189-.495.797-.649 2.559-.649 1.974 0 2.341-.116 2.52-.8.148-.567.546-.8 1.367-.8.636 0 1.372-.215 1.635-.478.263-.263 1.371-.498 2.463-.523 1.305-.029 2.26-.293 2.786-.769.532-.482 1.126-.643 1.771-.481.621.156 1.149.029 1.465-.353.272-.328 1.044-.596 1.714-.596.671 0 1.552-.3 1.957-.667.406-.367 1.05-.7 1.432-.739.821-.084 2.524-.765 4.571-1.826 1.156-.599 1.707-.678 2.534-.364 1.069.407 1.963.201 1.609-.371-.414-.671 1.827-2.08 3.11-1.956.942.091 1.38-.084 1.694-.677.283-.535.78-.775 1.5-.725.68.048 1.076-.126 1.076-.472 0-.301.81-.951 1.8-1.446.99-.494 1.8-1.033 1.8-1.196 0-.164.538-.416 1.195-.56.658-.144 1.299-.429 1.424-.632.126-.203.661-.369 1.191-.369s1.141-.335 1.362-.747c.272-.509.703-.689 1.351-.566.769.147 1.052-.061 1.477-1.087.289-.698 1.213-1.703 2.053-2.233.84-.53 1.805-1.388 2.144-1.907.34-.518 1.269-1.283 2.065-1.701 1.411-.74 9.931-8.937 10.234-9.846.086-.258.457-.34.853-.188.854.328.545 3.627-.445 4.759-.426.486-.52 1.103-.328 2.131.225 1.196.146 1.48-.452 1.637-.627.164-.737.709-.822 4.051-.069 2.732-.254 3.95-.634 4.163-.381.213-.486.914-.361 2.418.147 1.778.041 2.239-.666 2.879-.67.606-.841 1.231-.841 3.075 0 2.642.254 2.924 2.315 2.577l1.485-.25-.124-4.314c-.101-3.525-.009-4.408.5-4.831.367-.305.624-1.151.624-2.055 0-1.078.218-1.653.73-1.927.641-.344.708-.801.55-3.808-.152-2.892-.08-3.455.47-3.666.446-.171.65-.739.65-1.807 0-1.214.154-1.558.7-1.563.598-.005.613-.063.1-.394-.483-.312-.419-.389.324-.394.825-.005.898-.145.679-1.306-.681-3.615-.69-4.64-.051-5.553.356-.509.656-1.47.667-2.136.015-.984.387-1.473 1.982-2.611 1.573-1.12 1.921-1.572 1.747-2.267-.15-.594.02-.995.539-1.273.417-.222 1.096-1.034 1.51-1.802.414-.769 1.169-1.587 1.678-1.819.515-.235.925-.774.925-1.216 0-.437.353-.984.785-1.215.476-.255.692-.662.55-1.034-.145-.378.223-1.027.962-1.693.659-.595 1.324-1.486 1.478-1.981.153-.496.636-1.092 1.071-1.325.436-.233.959-.863 1.163-1.399.204-.537.646-.976.981-.976.37 0 .61-.362.61-.919 0-.53.5-1.334 1.183-1.9.676-.56 1.19-1.382 1.2-1.917.017-.948 1.409-2.426 2.307-2.451.329-.009.412-.404.251-1.207-.176-.883-.07-1.258.408-1.442.355-.136.579-.364.496-.506-.296-.506.539-2.058 1.107-2.058.471 0 .498-.214.145-1.15-.368-.975-.302-1.317.434-2.254.478-.607.869-1.33.869-1.606s.343-.925.762-1.443c.539-.665.656-1.14.399-1.62-.264-.493-.161-.824.372-1.203.504-.359.757-1.087.802-2.311.118-3.178.622-3.997 2.465-4.005.995-.004 4.37-.986 5.695-1.656.382-.194.983-.352 1.336-.352.354 0 1.1-.36 1.66-.8.559-.44 1.263-.8 1.563-.8.3 0 .546-.168.546-.373s.401-.5.892-.656c.491-.156 1.369-.753 1.951-1.327.583-.574 1.307-1.247 1.608-1.496 1.078-.887 2.749-3.039 2.749-3.54 0-.281.27-.734.6-1.008.33-.274.6-.845.6-1.269 0-.424.27-1.294.601-1.933l.601-1.161-1.465-.275c-1.122-.211-1.577-.121-1.945.381-.264.362-.775.657-1.136.657-.73 0-.937 1.779-.256 2.2.744.46.406 1.433-1 2.881-.77.793-1.4 1.594-1.4 1.78 0 .187-.407.339-.904.339-.497 0-1.119.345-1.383.767-.299.479-.765.692-1.241.568-.532-.139-.827.051-.979.633-.154.587-.54.832-1.311.832-.602 0-1.327.315-1.611.7-.414.561-.618.601-1.024.2-.749-.739-1.308-.611-1.752.4-.411.937-2.024 1.431-2.645.81-.683-.683-.452-28.135.243-28.902.334-.369.607-.913.607-1.208 0-.295.304-.873.676-1.284.478-.528.645-1.315.572-2.695-.09-1.689.011-1.986.753-2.221.614-.195.774-.46.563-.936-.161-.365-.374-1.349-.473-2.186-.2-1.701-1.747-2.067-2.021-.478-.075.44-.415 1.016-.754 1.281-.365.284-.51.759-.355 1.162.333.869-1.722 3.956-2.269 3.409-.208-.208-.313-1.207-.232-2.219.118-1.485.01-1.884-.557-2.064-.456-.144-.703-.627-.703-1.372 0-.633-.157-1.247-.348-1.365-.192-.118-.463-.788-.603-1.488-.14-.7-.613-1.524-1.052-1.831-.944-.661-.995-1.058-.231-1.822.312-.311.686-1.179.833-1.929l.479-2.462c.117-.605.372-1.1.567-1.1.194 0 .286-.753.203-1.673-.171-1.896-1.589-2.973-2.041-1.55-.128.405-.588.829-1.022.943-.498.13-.704.426-.559.803.487 1.269-.615 1.021-1.231-.277-.358-.755-.999-1.688-1.423-2.072-.425-.384-.772-1.03-.772-1.436 0-.406-.182-.738-.405-.738-.247 0-.196.508.13 1.3.726 1.759-.258 13.481-1.298 15.462-.184.351-.462 1.583-.618 2.738-.156 1.154-.447 2.2-.646 2.323-.2.123-.363.625-.363 1.114 0 1.042-1.495 5.489-2.032 6.043-.202.209-.368.699-.368 1.089 0 .808-1.645 4.462-2.1 4.664-.165.074-.301.344-.302.6-.003.781-2.571 5.505-4.545 8.364a4966.946 4966.946 0 00-3.65 5.291c-.982 1.427-2.105 2.934-2.495 3.347-.389.414-1.248 1.43-1.908 2.257-2.478 3.106-9.474 9.808-10.239 9.808-.198 0-.361.142-.361.315 0 .386-3.836 3.285-4.347 3.285-.202 0-.456.23-.564.512-.108.282-.875.867-1.705 1.3-.83.433-2.061 1.283-2.735 1.888-.675.605-1.547 1.1-1.938 1.1s-.711.172-.711.383c0 .403-8.048 4.408-8.903 4.43-.273.007-.846.277-1.273.6-.428.323-1.247.587-1.82.587-.574 0-1.215.166-1.424.368-.738.715-5.174 2.032-6.843 2.032-.929 0-1.79.162-1.913.361-.342.553-5.568 2.039-7.172 2.039-.783 0-2.195.247-3.138.548-.943.301-3.964.856-6.714 1.233-2.75.377-6.17.93-7.6 1.229-1.43.3-3.262.65-4.071.78-.809.129-1.529.365-1.6.523-.13.29-3.99 2.245-6.929 3.508a309.065 309.065 0 00-9.2 4.176c-1.32.63-3.03 1.27-3.8 1.424-.77.154-1.5.436-1.622.627-.212.331-1.567.679-6.291 1.617-2.743.544-4.638.175-5.448-1.062-1.524-2.326-.218-3.444 4.755-4.07 2.041-.257 4.047-.64 4.458-.851 1.45-.745 3.78-1.682 4.184-1.682.818 0 4.146-1.757 3.564-1.882-.979-.21-8.668.644-17.051 1.893-7.882 1.174-35.724.795-48.949-.667-2.97-.329-7.65-.843-10.4-1.143-2.75-.301-5.917-.768-7.039-1.04-2.587-.627-3.536-.314-3.193 1.053.574 2.286 3.549 4.186 6.557 4.186 4.1 0 6.505 2.529 4.476 4.707-1.796 1.928-10.778-.329-13.447-3.379-1.426-1.63-2.954-4.809-2.954-6.147 0-1.344-.917-1.978-2.874-1.987-.729-.003-2.046-.265-2.926-.582-.88-.317-2.518-.585-3.639-.594-1.948-.017-7.591-1.08-10.558-1.99-.769-.235-2.103-.428-2.965-.428-1.709 0-5.374-.938-7.17-1.835-.623-.311-1.856-.565-2.74-.565-.884 0-2.174-.24-2.868-.534-2.183-.926-4.01-1.534-5.553-1.85-.821-.168-1.721-.474-2-.678-.279-.205-1.497-.696-2.707-1.092-2.179-.712-3.944-1.43-6.132-2.495-.623-.303-1.369-.551-1.658-.551-.288 0-.628-.27-.755-.6-.126-.33-.551-.608-.942-.617-.392-.01-1.433-.46-2.313-1.001-.88-.541-2.095-1.18-2.7-1.422-.605-.241-1.1-.601-1.1-.799 0-.199-.261-.361-.58-.361-.319 0-.724-.225-.9-.5-.359-.561-1.475-1.309-2.82-1.891-.495-.214-.9-.574-.9-.799 0-.226-.242-.41-.538-.41-.296 0-.864-.36-1.262-.8-.398-.44-.88-.8-1.07-.8-.314 0-2.1-1.598-6.37-5.7-1.355-1.302-2.36-1.872-2.36-1.338 0 .089.642.93 1.426 1.869 3.045 3.645-.645 6.597-3.908 3.128-2.304-2.45-4.869-7.461-5.292-10.339-.143-.979-.408-1.969-.589-2.2-.18-.231-.442-1.59-.582-3.02-.236-2.399-1.604-5.829-4.491-11.262-.31-.584-.564-1.351-.564-1.705 0-.354-.158-.956-.351-1.338-.908-1.797-1.623-3.75-1.886-5.155-.159-.847-.53-2.119-.826-2.827-.295-.708-.537-1.935-.537-2.726 0-.792-.198-1.809-.439-2.26-1.551-2.898-1.59-27.285-.046-29.25.206-.262.49-1.359.63-2.437.141-1.077.415-2.157.61-2.4.195-.242.481-1.205.635-2.14.154-.935.43-1.7.613-1.7.184 0 .458-.585.61-1.3.248-1.168 1.425-3.653 5.118-10.806 1.254-2.43 1.336-3.532.108-1.452M208.2 144.755c5.527.3 9.907.728 10.971 1.072.974.315 2.774.579 4 .587 1.226.008 2.679.272 3.229.586.55.314 1.9.584 3 .6 1.1.016 2.45.286 3 .6.55.314 1.63.579 2.4.589.77.009 2.75.49 4.4 1.068 1.65.578 3.81 1.19 4.8 1.359 2.154.368 4.647 1.271 5.293 1.917.257.257.875.467 1.373.467.499 0 1.588.29 2.42.644.833.355 2.102.89 2.82 1.189 2.799 1.168 4.043 1.739 8.195 3.757 2.366 1.149 4.401 2.252 4.524 2.45.122.198.501.36.841.36.34 0 1.275.511 2.076 1.136.802.625 2.313 1.557 3.358 2.071 1.045.514 1.9 1.083 1.9 1.264 0 .181.26.329.579.329.318 0 1.768.9 3.221 2s2.798 2 2.988 2c.19 0 .405.135.479.3.073.165.853.789 1.733 1.386 1.537 1.044 9 8.104 9 8.514 0 .11.315.547.7.971 2.201 2.426 2.393 3.22 1.29 5.345-.48.926-1.125 1.828-1.432 2.004-.307.176-.558.499-.558.717 0 1.414-11.336 12.763-12.749 12.763-.248 0-.451.165-.451.367 0 .202-.635.76-1.411 1.24-.775.479-1.638 1.079-1.917 1.332a9.237 9.237 0 01-1.156.861c-.358.22-1.61 1.052-2.783 1.848-1.906 1.295-3.876 2.434-8.318 4.811-.761.408-1.616.741-1.9.741-.283 0-.515.18-.515.4 0 .22-.32.4-.711.4-.391 0-1.066.232-1.5.515-1.459.953-10.655 4.282-11.843 4.287-.3.002-1.029.255-1.619.563-.59.308-1.67.687-2.4.843-.73.157-1.507.421-1.727.589-.22.167-1.48.434-2.8.592-1.32.159-2.606.457-2.858.664-.488.4-2.92.892-8.742 1.771l-6.4.968-5.6.85c-5.288.801-29.869.958-35.874.228a658.658 658.658 0 00-7.62-.886c-1.261-.132-2.397-.407-2.523-.612-.127-.205-.985-.38-1.907-.389-.922-.01-2.396-.173-3.276-.362-.88-.189-2.68-.558-4-.819-1.32-.262-2.58-.617-2.8-.788-.22-.172-1.3-.443-2.4-.601-1.1-.158-2.228-.476-2.507-.705-.279-.23-1.179-.563-2-.74-3.632-.784-5.522-1.281-5.893-1.549-.22-.159-1.57-.696-3-1.193-1.43-.497-2.96-1.05-3.4-1.229-2.009-.816-4.895-2.11-5.862-2.628-.584-.313-1.349-.569-1.7-.569s-.638-.138-.638-.306c0-.168-.945-.725-2.1-1.238-1.155-.513-2.453-1.121-2.885-1.351l-2.475-1.317c-.93-.494-2.218-1.274-2.863-1.733-.645-.459-1.646-1.015-2.225-1.235-.578-.22-1.052-.585-1.052-.81 0-.226-.338-.41-.751-.41s-.975-.27-1.249-.6c-.274-.33-.664-.6-.866-.6-.202 0-.585-.183-.851-.406-1.434-1.205-4.28-3.194-4.57-3.194-.184 0-.926-.54-1.649-1.2-.722-.66-1.438-1.2-1.59-1.2-.286 0-7.559-7.069-8.28-8.048-.224-.304-.809-1.071-1.3-1.706-.492-.635-.894-1.704-.894-2.376 0-1.24 2.968-6.67 3.646-6.67.195 0 .354-.255.354-.567 0-.311.135-.626.3-.7.165-.073.801-.872 1.414-1.775 2.174-3.203 8.683-9.446 12.677-12.158.486-.33 1.254-.915 1.708-1.3.453-.385 1.051-.7 1.329-.7s.565-.15.639-.334c.167-.418 5.057-3.143 9.533-5.312a263.23 263.23 0 004.462-2.201c.584-.304 1.493-.553 2.02-.553.527 0 1.129-.167 1.338-.372.513-.502 3.612-1.624 5.58-2.02.88-.177 2.14-.507 2.8-.733 1.622-.554 4.809-1.322 7-1.685.99-.164 2.34-.486 3-.716 1.613-.561 6.44-1.333 10.6-1.693 1.87-.162 4.03-.483 4.8-.713.77-.23 5.526-.611 10.57-.846 5.043-.236 9.213-.472 9.267-.525.244-.244 10.416.005 18.763.458m-31.699 12.504c-.252.252-1.863.537-3.58.633-1.716.096-3.688.43-4.381.741-.694.312-1.774.573-2.4.58-.627.007-1.489.277-1.916.6-.428.323-1.166.587-1.642.587-.475 0-2.106.47-3.623 1.044-1.518.575-3.299 1.128-3.959 1.23-.66.102-1.74.422-2.4.711-3.215 1.41-4.266 1.815-4.714 1.816-.267.001-1.736.631-3.263 1.4-1.527.77-3.012 1.399-3.3 1.399-.288 0-.523.18-.523.4 0 .22-.287.4-.638.4-.56 0-1.319.33-3.762 1.634-.33.176-2.13 1.078-4 2.003-1.87.926-3.491 1.792-3.601 1.923-.111.132-1.001.67-1.977 1.196-.977.526-1.967 1.121-2.199 1.321-.233.201-1.503 1.065-2.823 1.92-3.014 1.954-5 3.773-5 4.58 0 1.141 1.185.645 4.106-1.719 1.592-1.288 3.164-2.465 3.494-2.615.885-.405 2.239-1.214 2.857-1.708 1.081-.864 8.531-4.762 11.743-6.143 1.1-.474 2.72-1.194 3.6-1.6 3.254-1.504 6.309-2.792 6.622-2.792.177 0 1.489-.54 2.915-1.2 1.426-.66 3.048-1.2 3.604-1.2.557 0 1.114-.166 1.24-.369.125-.203.778-.49 1.451-.638.672-.148 1.705-.52 2.295-.828.59-.308 1.737-.561 2.549-.563.812-.001 1.582-.172 1.71-.379.128-.207 1.083-.5 2.123-.651 1.04-.151 2.251-.463 2.691-.694 3.003-1.576 26.739-1.499 28.329.091.237.237 1.7.432 3.251.433 1.719.002 3.267.236 3.966.6.63.329 1.851.598 2.713.598.861 0 2.213.27 3.003.6.789.33 1.999.601 2.687.602.688.002 1.711.243 2.273.536.562.294 2.053.655 3.313.803 1.261.148 2.601.434 2.979.635 1.072.572 4.495 1.511 6.577 1.804 1.04.146 1.995.436 2.123.643.128.207.51.377.849.377.339 0 1.183.241 1.877.536.693.295 2.61.963 4.26 1.485 1.65.521 3.171 1.089 3.38 1.263.695.577 1.82.338 1.82-.386 0-.415-.533-.926-1.3-1.246a56.318 56.318 0 01-2.812-1.298c-.832-.415-1.951-.754-2.487-.754-.892 0-1.782-.311-5.201-1.817-.66-.291-1.83-.609-2.6-.706-.77-.097-1.94-.361-2.6-.586-3.45-1.178-5.429-1.691-6.528-1.691-.671 0-1.727-.2-2.346-.444-2.098-.827-7.118-1.947-8.75-1.951-.892-.003-1.972-.269-2.4-.592-.427-.323-1.586-.598-2.576-.61-.99-.012-2.52-.207-3.4-.432-.88-.226-3.606-.565-6.057-.754-2.452-.189-4.825-.54-5.274-.78-1.127-.603-11.761-.585-12.368.022M347.2 158.8c0 .444.267.8.6.8.333 0 .6-.356.6-.8 0-.444-.267-.8-.6-.8-.333 0-.6.356-.6.8M46.382 172.578c.373.449.373 1.273 0 3.7-.777 5.061.49 21.174 1.837 23.353.145.234.416 1.642.603 3.129.354 2.826 1.567 7.111 2.785 9.84.393.88 1.034 2.59 1.425 3.8.82 2.538 2.779 5.923 6.421 11.091 1.934 2.743 7.905 7.292 12.747 9.709 1.32.659 4.11 2.097 6.2 3.195 2.09 1.099 3.934 1.999 4.097 2.001.164.002 2.234.916 4.6 2.03 5.832 2.747 5.571 2.633 8.503 3.717 1.43.528 4.172 1.613 6.094 2.409 1.922.796 3.817 1.448 4.211 1.448.394 0 1.073.249 1.508.554.435.305 1.42.746 2.189.98.769.235 2.658.878 4.198 1.429 1.54.552 3.093 1.011 3.45 1.02.358.009 1.618.438 2.8.952 1.949.848 4.146 1.497 11.35 3.355 1.32.34 3.57.969 5 1.398 1.43.428 3.95 1.021 5.6 1.318 1.65.296 4.26.809 5.8 1.139 1.54.331 4.96.795 7.6 1.032l6.8.613c2.874.26 11.773.657 19.2.856 9.205.247 23.064.633 24 .667 11.029.409 35.656-1.439 44.4-3.332 1.1-.238 3.17-.599 4.6-.802 1.43-.203 3.05-.528 3.6-.722.55-.195 2.44-.668 4.2-1.053 1.76-.384 4.01-.943 5-1.24.99-.298 2.569-.66 3.509-.805.94-.145 1.805-.42 1.923-.612.119-.191.85-.347 1.626-.347.776 0 2.52-.265 3.876-.588 2.65-.632 8.269-1.997 14.066-3.417 9.072-2.222 18.321-5.921 22.091-8.834.83-.641 2.039-1.57 2.686-2.064 1.43-1.09 5.645-5.453 6.526-6.754.351-.519 1.194-1.573 1.874-2.343.679-.77 2.651-3.56 4.382-6.2 1.73-2.64 3.393-5.16 3.694-5.6 3.317-4.838 3.927-5.896 8.885-15.4l3.102-5.945c1.492-2.858 3.682-3.767 4.422-1.837.255.663.019 1.216-2.212 5.182-.742 1.32-1.744 3.12-2.226 4-2.283 4.165-4.021 7.296-4.594 8.274-.347.59-1.675 2.84-2.952 5a701.46 701.46 0 00-2.6 4.415c-4.045 7.12-14.018 18.672-19.078 22.097-3.21 2.173-6.56 4.014-7.302 4.014-.28 0-.821.171-1.203.379-1.013.553-6.74 2.628-9.295 3.368-6.6 1.91-10.043 2.793-13.4 3.436-1.32.252-3.57.735-5 1.072-1.43.337-3.68.85-5 1.14-1.32.29-3.3.799-4.4 1.129-1.1.331-3.254.811-4.787 1.066-1.534.255-4.234.831-6 1.28a119.588 119.588 0 01-6.138 1.365c-1.609.302-3.108.662-3.331.799-.222.138-1.786.4-3.474.583-3.488.378-8.352.972-14.47 1.766-3.439.446-12.438.822-18.2.76-.66-.007-8.04-.052-16.4-.099-8.36-.048-16.46-.254-18-.458-1.54-.204-5.68-.453-9.2-.551-12.416-.349-16.497-.713-23.2-2.066-1.54-.311-3.88-.733-5.2-.938-1.32-.205-3.66-.725-5.2-1.154-1.54-.43-4.24-1.09-6-1.466-1.76-.377-3.83-.922-4.6-1.212-.77-.29-3.29-1.091-5.6-1.781-2.31-.689-4.74-1.442-5.4-1.672-.66-.23-3.36-1.15-6-2.045-2.64-.894-5.7-2.033-6.8-2.53-3.374-1.524-5.496-2.37-8-3.188-1.32-.43-2.638-1.008-2.929-1.283-.29-.275-.76-.5-1.044-.5-.283 0-2.074-.72-3.978-1.6-1.905-.88-3.732-1.6-4.06-1.6-.328 0-.905-.36-1.282-.8-.377-.44-.888-.8-1.136-.8-.249 0-1.314-.458-2.367-1.018-1.054-.561-3.015-1.478-4.36-2.039-1.344-.561-2.804-1.335-3.244-1.72-.44-.385-2.528-1.719-4.639-2.964-3.587-2.116-5.149-3.5-9.728-8.623-1.179-1.32-7.033-12.472-7.033-13.4 0-.64-1.542-5.839-1.973-6.649-.179-.337-.459-1.237-.622-2-.164-.763-.433-1.567-.599-1.787-.166-.22-.428-1.561-.583-2.981-.155-1.42-.529-3.58-.831-4.8-2.789-11.243-1.241-28.375 2.19-24.241m149.218 5.096c-.77.221-2.75.641-4.4.935-3.451.613-6.294 1.329-7.295 1.838-.382.194-1.102.354-1.6.355-.498.002-1.367.244-1.932.539a11.37 11.37 0 01-2.2.811c-.645.152-1.713.53-2.373.841-.66.31-2.28 1.043-3.6 1.627-1.32.583-3.12 1.388-4 1.788-.88.4-1.87.834-2.2.964-1.217.48-2.95 1.677-3.106 2.145-.238.715 2.501.612 3.106-.117.274-.33.745-.6 1.048-.6.302 0 1.693-.54 3.09-1.2 1.397-.66 2.916-1.2 3.377-1.2.461 0 .951-.183 1.089-.406.362-.586 3.238-1.994 4.08-1.996.394-.002 1.166-.233 1.716-.515.55-.282 2.17-.831 3.6-1.221 1.43-.39 3.14-.9 3.8-1.133 1.571-.555 7.709-1.544 11-1.771 3.495-.242 4.4-.472 4.4-1.119 0-1.048-4.699-1.397-7.6-.565m75.719.954C267.412 184.215 252.936 198 250.975 198c-.143 0-.942.54-1.775 1.2-.833.66-1.804 1.2-2.158 1.2-.353 0-.642.153-.642.34 0 .458-7.883 4.46-8.786 4.46-.394 0-.94.27-1.214.6-.274.33-.83.6-1.235.6-.406 0-1.329.248-2.051.551-1.946.817-7.107 2.258-12.914 3.606-1.54.357-4.06.651-5.6.653-1.54.002-4.06.271-5.6.597-3.262.691-21.983.819-25 .172-.99-.213-4.23-.569-7.2-.793-2.97-.223-6.272-.511-7.338-.639-1.732-.209-1.922-.155-1.795.504.165.857 1.59 1.22 6.933 1.766 1.98.203 5.078.556 6.885.785 10.79 1.368 29.394.574 40.915-1.747 6.16-1.241 7.41-1.533 7.8-1.824.22-.164 1.66-.7 3.2-1.192 3.113-.993 3.51-1.161 9.2-3.908 2.2-1.062 4.238-2.156 4.529-2.431.29-.275.875-.5 1.3-.5.424 0 .771-.184.771-.41 0-.225.405-.593.9-.817 1.494-.676 2.603-1.376 3.962-2.502.711-.589 1.444-1.071 1.629-1.071.185 0 .864-.54 1.509-1.2.645-.66 1.273-1.2 1.396-1.2.873 0 11.237-10.739 13.317-13.8.598-.88 1.222-1.66 1.387-1.733.165-.074.3-.479.3-.9 0-1.129-1.424-.966-2.281.261M239 186.44c-.88.867-2.005 1.682-2.5 1.812-.495.129-.9.381-.9.56 0 .178-.54.443-1.2.588-.66.145-1.2.426-1.2.624s-.495.469-1.1.602c-1.079.236-2.854.964-4.962 2.035-.584.296-1.418.539-1.854.539-.436 0-1.308.269-1.938.598-.63.328-1.62.598-2.2.6-.58.001-1.57.271-2.2.6-.63.328-1.776.601-2.546.606-.77.004-2.12.267-3 .584-.88.317-2.395.585-3.366.594-2.76.028-5.012 1.158-4.167 2.093.723.798 1.756.942 2.367.331.216-.216 1.467-.569 2.78-.784 6.01-.985 9.583-1.797 12.786-2.907.66-.228 1.822-.507 2.582-.618.76-.112 1.628-.45 1.928-.75.301-.301.962-.547 1.47-.547.507 0 1.146-.27 1.42-.6.274-.33.721-.6.993-.6.601 0 4.959-2.273 5.838-3.045.348-.305.753-.555.9-.555.402 0 1.869-1.544 1.869-1.967 0-.201.186-.428.414-.504.264-.088.227-.379-.1-.802-.464-.599-.67-.51-2.114.913M42.308 210.1c.598.736 2.74 4.747 4.965 9.3 1.075 2.2 2.214 4.45 2.532 5 .317.55.779 1.495 1.025 2.1.247.605.621 1.1.831 1.1.211 0 .812.97 1.336 2.155 1.085 2.452 4.494 7.667 5.758 8.807.465.419.845.933.845 1.142 0 .574 2.409 3.537 3.981 4.896 3.301 2.855 6.499 5.911 10.883 10.4 2.579 2.64 4.994 5.07 5.368 5.4.374.33 1.779 1.59 3.124 2.8 2.954 2.659 5.68 4.799 6.121 4.804.177.002 1.113.632 2.079 1.4.966.768 1.945 1.396 2.175 1.396.229 0 .789.334 1.243.742.454.407 1.906 1.164 3.226 1.681 1.32.518 2.58 1.064 2.8 1.214 1.083.741 6.547 2.817 9.488 3.605 1.822.488 3.672 1.105 4.112 1.371.44.267 2.15.806 3.8 1.2 1.65.393 4.62 1.148 6.6 1.676 3.776 1.008 8.098 1.92 11.8 2.489 1.21.186 3.73.621 5.6.967 1.87.345 4.57.71 6 .811 1.43.101 3.78.375 5.223.609 7.18 1.166 36.165 1.643 40.86.672 1.696-.35 3.946-.643 5-.65 2.647-.017 9.611-1.301 13.823-2.549 1.928-.571 4.011-1.038 4.629-1.038.617 0 2.01-.276 3.094-.614 2.605-.812 3.724-1.126 7.771-2.184 1.87-.489 4.39-1.249 5.6-1.689 1.21-.441 3.37-1.026 4.8-1.301 1.43-.274 3.32-.695 4.2-.935.88-.24 3.22-.73 5.2-1.089 1.98-.36 4.77-.898 6.2-1.197 1.616-.338 6.764-.631 13.6-.773 11.976-.25 19.208-.797 21.971-1.663.974-.305 2.195-.555 2.713-.555 1.766 0 8.13-2.562 10.916-4.395 8.792-5.784 18.267-14.145 24.744-21.834 4.942-5.867 5.136-6.124 8.976-11.871 2.422-3.624 3.918-5.5 4.387-5.5 6.109 0-11.796 23.091-27.993 36.1-2.671 2.145-4.963 3.9-5.093 3.9-.13 0-.998.482-1.929 1.071-7.318 4.633-15.966 7.319-23.627 7.34-2.236.006-5.775.194-7.865.417-2.09.224-7.103.489-11.14.59-4.448.111-8.359.419-9.925.783-1.422.329-3.231.599-4.022.599-1.582 0-8.988 1.785-14.913 3.594-2.09.638-4.43 1.256-5.2 1.374-.77.117-2.66.58-4.2 1.029-7.107 2.071-15.452 4.134-18 4.451a89.19 89.19 0 00-5.6.919c-3.064.625-9.247 1.517-10.2 1.471-.33-.015-3.12.014-6.2.066-13.424.226-33.583-.831-40.2-2.107-.99-.191-3.6-.562-5.8-.825-2.2-.263-6.07-.97-8.6-1.571-2.53-.602-5.68-1.315-7-1.585-1.32-.27-3.361-.834-4.536-1.253-1.174-.42-2.578-.763-3.119-.763-.542 0-1.471-.247-2.065-.548-.594-.301-2.16-.831-3.48-1.177-5.842-1.531-15.378-5.637-19.978-8.6-1.088-.701-2.182-1.275-2.431-1.275-.248 0-.888-.472-1.421-1.048-.534-.576-1.6-1.455-2.37-1.953a25.597 25.597 0 01-2.6-1.976c-.66-.588-1.695-1.334-2.3-1.657-.605-.322-1.1-.76-1.1-.972 0-.212-1.845-2.272-4.1-4.579-2.255-2.306-4.73-4.883-5.5-5.726-.77-.843-2.3-2.233-3.4-3.091-3.056-2.381-9.399-9.182-10.794-11.571a61.057 61.057 0 00-1.838-2.904c-1.912-2.821-3.261-5.044-4.667-7.69a459.81 459.81 0 00-1.948-3.633c-.301-.55-.549-1.203-.551-1.451-.001-.248-.274-.677-.608-.954-.946-.785-5.394-10.31-5.394-11.551 0-1.655 1.35-2.324 2.308-1.144m294.918 37.114c1.144.612.997.965-1.533 3.696-1.269 1.37-3.187 3.66-4.262 5.09-1.075 1.43-2.188 2.794-2.474 3.03-.285.237-1.366 1.587-2.402 3-5.452 7.441-17.43 19.17-19.576 19.17-.119 0-1.154.598-2.298 1.33-5.343 3.414-13.653 6.834-18.281 7.523-5.007.745-12.642 1.577-17.4 1.895-2.64.177-5.97.521-7.4.764a600.464 600.464 0 01-15.8 2.5c-3.08.446-6.95 1.09-8.6 1.432-4.848 1.006-17.059 3.032-18.749 3.111-1.227.058-2.013-1.087-1.412-2.055.526-.847 2.499-1.453 6.761-2.078 5.733-.84 7.96-1.229 9.19-1.605 1.986-.608 5.736-1.284 10.203-1.84 5.906-.735 11.499-1.663 12.039-1.997.252-.155 2.282-.427 4.513-.604 2.23-.176 5.945-.519 8.255-.762 2.31-.243 5.28-.52 6.6-.616 6.671-.485 13.964-1.809 16.98-3.082 2.226-.939 2.736-1.15 6.02-2.494 8.543-3.494 17.827-11.302 25.626-21.553.976-1.283 2.275-2.993 2.887-3.8a93.78 93.78 0 012.4-3.003c6.043-7.204 6.993-7.973 8.713-7.052M73.106 268.9c9.594 7.726 11.288 8.808 21.337 13.638 1.673.804 3.251 1.462 3.505 1.462.255 0 .775.168 1.157.374 1.459.786 3.436 1.627 3.856 1.64.242.007 1.159.361 2.039.786.88.425 1.827.779 2.105.786.278.008.818.183 1.2.391.382.207 1.775.663 3.095 1.014 1.32.351 3.21.89 4.2 1.198 3.022.939 6.856 1.725 9.8 2.009 1.54.148 3.43.445 4.2.658 1.702.473 4.619 1.008 9.4 1.726 1.98.297 4.356.824 5.279 1.17 1.621.608 8.605 1.936 12.721 2.419 6.669.783 16.77.871 24 .21 3.08-.281 6.41-.557 7.4-.613.99-.055 3.738-.314 6.106-.576 4.845-.535 6.101-.372 6.417.833.286 1.094-1.11 2.524-2.189 2.242-.836-.219-10.341.673-13.734 1.289-1.1.199-5.102.385-8.894.413-3.792.028-7.159.153-7.484.278-1.483.569-13.971-.794-20.622-2.25-1.87-.41-4.48-.944-5.8-1.187a83.647 83.647 0 01-4-.842c-2.171-.542-7.828-1.549-11-1.959-1.43-.184-4.22-.718-6.2-1.185-1.98-.467-4.77-1.042-6.2-1.277-1.43-.235-2.87-.657-3.2-.939-.33-.281-1.14-.604-1.8-.717-.66-.114-2.55-.682-4.2-1.263-1.65-.581-3.45-1.212-4-1.402-1.244-.431-10.382-4.369-11.2-4.827a291.07 291.07 0 00-3.4-1.815c-1.54-.814-3.027-1.662-3.304-1.884-.277-.223-1.232-.794-2.121-1.269-6.458-3.455-13.64-10.693-11.475-11.566.982-.396 1.413-.248 3.006 1.035m43.534-.448c.243.191 1.323.447 2.4.568 1.078.122 2.86.467 3.96.766 4.039 1.1 7.637 1.821 9.074 1.817.811-.001 1.974.187 2.586.42 1.965.747 8.93 1.977 11.196 1.977 1.208 0 2.555.192 2.994.427.438.234 2.362.593 4.274.796 1.912.203 5.006.56 6.876.794 1.87.233 8.251.507 14.179.608 10.831.186 11.396.266 11.415 1.626.032 2.388-15.004 2.625-30.594.483-3.3-.453-7.26-.914-8.8-1.024-1.54-.109-3-.36-3.244-.557-.245-.197-1.775-.536-3.4-.754-1.626-.217-3.676-.572-4.556-.788-.88-.215-2.287-.396-3.126-.401-.84-.006-1.92-.222-2.4-.481-1.014-.546-7.165-1.89-8.756-1.913-3.016-.044-10.318-2.695-10.318-3.745 0-1.399 4.665-1.862 6.24-.619m-8.029 28.895c1.752 1.215 5.727 3.158 7.989 3.904 1.32.435 2.75.986 3.179 1.223 1.424.789 8.404 3.126 9.335 3.126 1.232 0 3.927 1.408 4.235 2.212.313.814-.398 2.188-1.131 2.188-.761 0-5.418-1.209-6.19-1.607-.692-.357-6.843-2.557-8.428-3.014-.55-.159-2.98-1.224-5.4-2.366-2.42-1.142-4.89-2.281-5.489-2.531-1.255-.524-1.852-2.189-1.107-3.087.618-.744 1.972-.765 3.007-.048m173.713.728c.15 1.3-.952 2.141-3.552 2.71l-4.372.957c-1.43.313-3.68.876-5 1.251-1.32.375-3.12.842-4 1.036-.88.194-3.22.819-5.2 1.388s-4.05 1.125-4.6 1.236c-2.174.437-11.882 2.615-13.2 2.961-4.778 1.253-6.977 1.691-10 1.993-1.87.186-5.832.614-8.805.951-4.1.465-9.456.6-22.2.56-13.501-.042-18.207.089-23.995.665-10.712 1.067-20.396.311-21.711-1.696-1.328-2.027 1.043-2.571 6.311-1.446 2.321.496 4.042.577 7.6.36 2.53-.155 5.5-.33 6.6-.388 1.1-.058 4.07-.253 6.6-.432 2.53-.179 11.44-.355 19.8-.391 17.809-.077 31.002-1.049 35-2.58.55-.21 2.53-.664 4.4-1.009 5.27-.971 11.257-2.417 15.983-3.861 1.42-.434 4.21-1.129 6.2-1.545 5.193-1.086 13.048-3.041 14.217-3.538 1.882-.801 3.783-.405 3.924.818", fill: "#cbcbcb" }),
            React.createElement("path", { d: "M150.934 75.862c0 .254.226.375.502.269.276-.106.703.181.947.638.245.457.777.831 1.182.831.405 0 .961.27 1.235.6.274.33.867.6 1.318.6 1.361 0 3.888 1.341 3.769 2-.116.638-1.566.748-2.803.212-.494-.214-.681-.15-.6.206.166.739-1.673 1.605-3.084 1.452-.71-.076-1.375.105-1.627.445-.314.422-1.26.562-3.561.528-2.768-.042-3.203.051-3.727.8-.483.69-.879.809-2.124.643-1.033-.139-1.681-.024-1.994.354-.31.373-1.318.56-3.016.56-1.914 0-2.551.139-2.551.557 0 .601-1.069 1.171-1.591.849-.175-.109-.541.071-.813.398-.311.375-1.2.596-2.396.596-1.165 0-2.087.223-2.379.574-.262.316-1.002.69-1.644.831-.642.141-1.271.423-1.396.626-.126.203-.625.369-1.111.369-.485 0-1.509.336-2.276.746-1.3.695-4.094.887-4.661.321-.131-.132-.575-.059-.986.161-.439.235-.747.247-.747.029 0-.229-.643-.228-1.667.003-.917.206-1.907.282-2.2.17-.293-.113-.533-.026-.533.193s-.557.109-1.238-.243c-1.08-.558-1.686-.579-4.74-.161-4.696.641-8.905.392-9.993-.592-.728-.66-.829-.672-.829-.097 0 .365-.443.766-1 .906-1.143.287-1.292 1.024-.364 1.794.471.391 1.982.499 5.829.418 4.954-.105 5.204-.072 5.409.713.182.698.493.81 2.028.732.996-.051 1.875.087 1.952.307.212.604-4.596 3.359-5.911 3.386-.362.008-.761.284-.888.614-.126.33-.581.6-1.01.6-.915 0-3.236 1.166-3.856 1.936-.237.294-.691.48-1.01.413-.318-.068-1.204.456-1.968 1.164-1.429 1.324-2.93 1.666-3.47.791-.209-.338-.377-.197-.529.444-.13.552-.867 1.294-1.785 1.796-.86.471-2.067 1.351-2.682 1.956-.615.605-1.383 1.1-1.707 1.1-.324 0-1.18.54-1.902 1.2-.723.66-1.63 1.2-2.017 1.2-.386 0-1.46.822-2.386 1.827-1.195 1.296-1.908 1.768-2.453 1.626-.574-.15-.882.097-1.212.973-.244.646-.584 1.174-.756 1.174-.171 0-.687.405-1.146.9-3.9 4.21-7.003 7.023-7.357 6.669-.234-.234-.413-3.114-.427-6.886-.025-6.315-.054-6.53-1.108-8.283-.595-.99-1.192-2.118-1.326-2.506-.219-.633-.344-.599-1.196.32-1.083 1.168-1.2 2.042-.396 2.955.441.501.478 1.168.179 3.231-.358 2.464-.206 8.904.318 13.503.14 1.223.068 2.311-.171 2.6-.226.273-.545 1.217-.709 2.097-.164.88-.909 2.68-1.654 4-1.827 3.236-1.91 3.394-2.629 5-1.377 3.072-2.793 7.046-3.473 9.751-2.156 8.562-2.146 8.482-2.097 17.631.048 8.75.138 9.597 1.936 18.218 1.076 5.158 3.799 12.748 6.114 17.039 1.318 2.444 1.759 3.824 2.268 7.097.6 3.862.853 4.773 2.436 8.764.645 1.625 2.468 4.489 3.99 6.267.845.986 2.349 1.096 2.695.197.283-.738.146-1.01-1.597-3.164-3.728-4.607-4.656-9.923-1.005-5.752 2.583 2.95 5.391 5.731 8.043 7.963 1.43 1.204 2.69 2.306 2.8 2.448 1.219 1.582 12.905 8.48 18.2 10.744 1.1.47 2.567 1.112 3.26 1.426.694.314 1.513.571 1.82.571.308 0 .731.142.94.316.209.174 1.73.737 3.38 1.251 1.65.515 3.307 1.089 3.683 1.277.375.188 1.455.459 2.4.603.944.145 2.029.423 2.411.619.382.196 1.462.525 2.4.732.938.206 2.966.667 4.506 1.022 2.789.644 5.743 1.216 12.192 2.362 1.865.332 3.665.711 4 .844.334.132 2.266.4 4.293.595 5.311.512 6.33 1.023 6.647 3.335.742 5.416 4.521 8.51 10.912 8.934 3.48.231 4.125-.053 3.36-1.482-.305-.571-.837-.808-1.81-.808-4.678 0-9.971-3.658-9.717-6.716.148-1.783.445-1.807 8.123-.679 2.64.388 6.33.84 8.2 1.004 1.87.164 5.29.493 7.6.73 6.011.616 19.256 1.268 25.8 1.269 9.735.002 29.24-1.455 37.262-2.784 4.424-.733 8.9.038 5.66.975-.507.146-1.822.69-2.922 1.209-3.07 1.446-5.371 2.355-8 3.16-1.32.404-3.126.981-4.013 1.283-.888.302-2.295.549-3.127.549-2.853 0-4.151 1.605-1.968 2.435 2.676 1.017 11.278-1.524 21.108-6.235l8.384-4.018c3.334-1.598 4.521-1.958 7.28-2.21 1.813-.165 3.5-.426 3.749-.58.25-.154 2.104-.518 4.12-.808 8.297-1.194 9.578-1.406 9.972-1.649.226-.14 1.51-.478 2.853-.752a62.814 62.814 0 004.642-1.16c1.21-.364 3.01-.832 4-1.04.99-.208 2.16-.541 2.6-.741.44-.2 1.97-.774 3.4-1.275 6.281-2.202 13.519-6.112 19.154-10.347l4-3.006c1.966-1.476 7.622-7.002 10.513-10.269 2.26-2.555 4.333-5.114 4.333-5.35 0-.14.81-1.308 1.8-2.595.99-1.287 1.8-2.446 1.8-2.578 0-.131.49-.999 1.09-1.93 1.065-1.655 1.294-2.053 2.885-5.035 2.711-5.084 5.278-12.666 7.467-22.057.892-3.827 1.189-19.026.378-19.337-.279-.107-.611-1.266-.754-2.633-.14-1.343-.547-2.887-.904-3.433-.358-.545-.551-1.249-.43-1.565.121-.315-.048-.796-.376-1.069-1.294-1.073-.522-2.577 1.244-2.426.88.076 1.735.374 1.899.663.165.289.638.437 1.053.328.48-.125.979.123 1.37.682.835 1.192 7.078.831 7.078-.409 0-.824-.767-1.201-2.445-1.201-.68 0-1.278-.254-1.41-.6-.141-.367-.747-.6-1.559-.6-.731 0-1.599-.27-1.929-.6-.33-.33-1.041-.6-1.579-.6-.539 0-1.204-.27-1.478-.6-.274-.33-.808-.6-1.187-.6s-1.212-.465-1.851-1.033c-.639-.569-1.657-1.216-2.262-1.439-.605-.224-1.1-.592-1.1-.819 0-.226-.639-1.154-1.42-2.061-1.535-1.782-1.661-1.946-2.635-3.448-.356-.55-1.075-1.473-1.596-2.051a45.678 45.678 0 01-1.949-2.358c-.55-.718-1.333-1.622-1.74-2.009a55.334 55.334 0 01-1.2-1.173c-2.654-2.717-4.427-4.409-4.622-4.41-.131-.001-.598-.549-1.038-1.218-.44-.669-1.662-1.751-2.715-2.404s-2.017-1.455-2.142-1.782c-.126-.327-.553-.595-.95-.595-.397 0-1.176-.54-1.732-1.2-.555-.66-1.163-1.2-1.35-1.2-.188 0-.964-.533-1.726-1.184-.762-.651-1.616-1.191-1.898-1.2-.281-.009-.616-.286-.742-.616-.254-.662-2.145-.838-2.145-.2 0 .22.14.4.312.4.83 0 9.87 8.673 13.133 12.6 2.01 2.419 4.955 6.449 4.955 6.781 0 .098.495.953 1.1 1.899 3.868 6.049 7.588 13.909 8.955 18.92.68 2.494.711 10.04.06 14.6a787.74 787.74 0 00-1.131 8.4c-1.841 14.27-7.998 24.292-23.96 39-2.149 1.98-4.113 3.826-4.365 4.102-.253.276-1.989 1.805-3.859 3.399-1.87 1.594-3.49 2.997-3.6 3.119-.11.122-.92.653-1.8 1.18-.88.527-1.69 1.076-1.8 1.22-.535.703-10.528 5.244-13.6 6.181-1.21.369-2.56.831-3 1.028-.44.196-1.52.532-2.4.746-.88.214-2.68.685-4 1.047a104.8 104.8 0 01-5 1.208c-1.43.303-3.68.815-5 1.139l-4 .98c-.88.215-3.04.689-4.8 1.054-1.76.365-3.65.821-4.2 1.013-.55.192-1.9.469-3 .617-1.1.147-2.18.405-2.4.572-.22.168-1.192.435-2.159.595-.968.16-2.357.54-3.087.845-.731.305-1.886.555-2.567.555-.682 0-1.56.172-1.953.382-.693.371-7.525 1.467-15.234 2.445-8.462 1.074-44.183 1.088-57 .023-13.341-1.108-19.731-1.725-21.6-2.087-1.1-.212-3.44-.557-5.2-.765-1.76-.207-4.82-.755-6.8-1.216-1.98-.461-4.5-1.021-5.6-1.245-1.1-.224-2.18-.556-2.4-.737-.22-.18-1.077-.455-1.904-.61-.828-.154-1.603-.44-1.724-.635s-.478-.355-.795-.355c-.503 0-1.718-.506-7.177-2.988-.66-.3-1.71-.657-2.333-.795-.624-.137-1.835-.692-2.692-1.233-.858-.541-1.68-.984-1.829-.984-3.372 0-20.021-11.931-26.794-19.202a2846.844 2846.844 0 00-4.294-4.598c-1.236-1.32-2.249-2.522-2.252-2.671-.003-.15-.232-.51-.509-.8-.915-.963-4.628-6.903-5.268-8.429l-1.173-2.8c-2.246-5.372-3.792-23.969-2.685-32.3.98-7.38 1.262-8.798 2.381-12 1.996-5.71 5.193-12.651 6.633-14.4.271-.33.593-.87.715-1.2.3-.809 4.133-5.976 7.3-9.839 1.92-2.343 8.338-8.761 10.159-10.161a66.536 66.536 0 002.771-2.291c.809-.71 1.695-1.295 1.97-1.3.275-.005.5-.147.5-.315 0-.169.945-.933 2.1-1.699 2.963-1.963 3.605-2.348 4.4-2.635.385-.139.7-.398.7-.575 0-.177.528-.437 1.172-.579.645-.142 1.387-.516 1.649-.832.262-.316.779-.574 1.148-.574.369 0 .842-.152 1.051-.337.209-.185 2.27-1.01 4.58-1.833s4.47-1.633 4.8-1.801c.33-.168 1.95-.697 3.6-1.175 1.65-.479 3.54-1.065 4.2-1.302.66-.237 1.83-.575 2.6-.752.77-.177 1.94-.508 2.6-.735.66-.228 2.28-.711 3.6-1.074 1.32-.363 2.94-.839 3.6-1.058 1.784-.591 5.383-1.541 7.2-1.9 1.914-.378 9.579-2.267 12.435-3.065 1.119-.312 2.314-.568 2.654-.568.341 0 1.495-.259 2.565-.576 1.07-.317 4.016-.957 6.546-1.423a440.95 440.95 0 006.4-1.216c8.728-1.797 8.39-1.774 25.6-1.733 13.902.033 18.128.185 26 .935l12.954 1.233c1.955.186 5.375.627 7.6.981 2.225.353 5.756.91 7.846 1.236 6.492 1.014 14.935 2.896 19.6 4.368 5.371 1.695 7.2 2.158 7.2 1.82 0-.182-.36-.426-.8-.541-.44-.115-.8-.516-.8-.891 0-.557-.246-.636-1.345-.43-.955.18-1.49.077-1.849-.355-.277-.335-.835-.608-1.239-.608-.405 0-1.087-.377-1.517-.838-.546-.587-1.036-.757-1.635-.567-.518.165-1.231.025-1.811-.356-1.188-.778-4.143-1.825-5.173-1.833-.422-.003-1.052-.25-1.4-.549-.571-.491-1.531-.81-5.514-1.835-.705-.181-1.581-.629-1.946-.994-.469-.469-1.239-.637-2.625-.574-1.094.05-2.171-.119-2.434-.382-.26-.26-1.056-.472-1.769-.472-.874 0-1.494-.281-1.9-.859-.551-.787-.851-.841-3.566-.635-2.436.184-3.159.096-4.058-.494-.602-.394-1.434-.628-1.85-.52-1.105.289-2.769-.222-2.769-.85 0-.781-3.895-1.043-7.866-.529-2.972.385-3.368.354-4.4-.345-.903-.611-1.95-.786-5.134-.857-6.169-.136-39.01-.178-44.4-.056-3.879.087-5.061-.023-6.161-.573-.749-.375-1.672-.682-2.051-.682-.38 0-.914-.27-1.188-.6-.274-.33-.843-.6-1.265-.6-1.026 0-3.935-1.507-3.935-2.039 0-.272-1.117-.376-3.132-.292-2.025.085-3.133.294-3.134.593m25.166 2.414c.385.1 1.015.1 1.4 0 .385-.101.07-.183-.7-.183s-1.085.082-.7.183m3.8.013c.715.089 1.885.089 2.6 0 .715-.088.13-.161-1.3-.161-1.43 0-2.015.073-1.3.161m13.017.008c1.494.077 3.834.077 5.2-.001 1.365-.078.143-.141-2.717-.141-2.86.001-3.978.065-2.483.142m13.983-.021c.385.1 1.015.1 1.4 0 .385-.101.07-.183-.7-.183s-1.085.082-.7.183m3.405.007c.497.096 1.217.092 1.6-.008.382-.1-.025-.179-.905-.174-.88.004-1.193.086-.695.182M187 89.989c-3.3.154-7.53.592-9.4.973s-4.93.937-6.8 1.235c-1.87.298-4.12.72-5 .938-.88.218-3.04.699-4.8 1.069-1.76.37-4.1.916-5.2 1.213-1.1.296-4.7 1.184-8 1.973-3.3.789-7.26 1.8-8.8 2.246-1.54.447-3.603.983-4.584 1.191-.98.209-1.961.558-2.18.777-.218.218-.888.396-1.49.396s-1.601.197-2.22.439c-.619.241-1.936.67-2.926.953-3.371.963-8.598 2.604-9.4 2.951l-2.314 1.002c-.832.36-1.833.655-2.223.655-.391 0-1.059.264-1.487.587-.427.323-1.046.599-1.376.614-.33.014-1.32.374-2.2.799-.88.425-1.729.779-1.886.786-2.019.096-13.193 8.51-18.78 14.141-5.932 5.979-15.134 18.206-15.134 20.109 0 .304-1.537 3.79-2.216 5.026-.321.584-.584 1.403-.584 1.82 0 .417-.154.929-.342 1.138-3.234 3.591-3.82 33.074-.816 41.023a498.654 498.654 0 011.257 3.357c.243.66.95 2.03 1.571 3.044.622 1.015 1.13 1.979 1.13 2.143 0 .265 2.235 3.305 2.803 3.813.123.11.938 1.099 1.811 2.198 2.387 3.008 9.815 10.297 12.88 12.638 1.488 1.138 2.796 2.194 2.906 2.349.315.441 5.702 3.874 7.643 4.87.966.496 1.847 1.001 1.957 1.123.257.285 4.914 2.555 7 3.413.88.362 2.11.917 2.732 1.233.623.317 1.298.576 1.499.576.202 0 1.492.529 2.868 1.176 5.135 2.414 9.842 3.934 15.101 4.876 1.21.217 2.74.555 3.4.75.66.195 2.37.47 3.8.611 1.43.14 3.23.448 4 .685 1.409.433 4.061.714 14 1.482 2.97.23 7.29.626 9.6.88 5.935.653 43.551.934 49.284.368 12.122-1.198 20.006-2.237 21.024-2.772.38-.199 1.502-.484 2.492-.632.99-.148 2.16-.426 2.6-.618.44-.192 2.51-.734 4.6-1.206 2.09-.471 4.43-1.021 5.2-1.221 1.292-.337 3.449-.832 8.6-1.978 1.1-.244 3.08-.711 4.4-1.036 1.32-.326 3.57-.812 5-1.081 1.43-.269 2.781-.606 3.003-.75.222-.144 1.122-.388 2-.542 1.601-.282 3.638-.862 7.861-2.238 2.235-.729 3.332-1.147 5.796-2.21.694-.299 1.414-.545 1.6-.545.954-.004 9.084-4.667 10.604-6.082.306-.285 1.721-1.507 3.146-2.717 14.029-11.916 22.195-21.277 27.19-31.171.447-.887 2.437-6.867 2.604-7.829.077-.44.415-2.96.751-5.6.337-2.64.844-6.51 1.129-8.6.951-7.001.556-11.102-1.6-16.6-1.057-2.695-1.533-3.713-2.616-5.6-.505-.88-1.601-2.86-2.435-4.4-1.403-2.591-2.067-3.638-5.837-9.2-1.892-2.791-13.39-14.2-14.311-14.2-.129 0-.605-.336-1.059-.747-1.091-.985-7.393-5.253-7.759-5.253-.157 0-1.257-.64-2.445-1.422-2.012-1.325-12.207-6.413-15.822-7.896-3.003-1.232-12.793-4.21-16-4.866-1.76-.36-4.19-.901-5.4-1.203-1.21-.301-3.82-.766-5.8-1.033-1.98-.267-5.13-.735-7-1.038-1.87-.304-5.345-.724-7.721-.934-2.377-.209-5.347-.557-6.6-.773-1.254-.216-4.529-.508-7.279-.649-2.75-.141-5.63-.406-6.4-.588-1.95-.462-23.335-.748-30.6-.409m33.2 1.595c6.188.908 15.727 3.053 20.6 4.632.99.321 3.105.961 4.701 1.423 1.595.462 3.001 1.002 3.123 1.2.123.199.618.362 1.1.362.482.001 2.2.541 3.817 1.2 1.618.66 3.119 1.199 3.336 1.199.216 0 1.56.54 2.986 1.2 1.426.66 2.816 1.2 3.088 1.2.273 0 .845.264 1.273.587.427.323 1.001.593 1.275.6.517.013 2.682.982 12.901 5.771 1.21.567 3.37 1.688 4.8 2.491 1.43.803 3.59 1.993 4.8 2.646 1.21.652 2.47 1.403 2.8 1.668.33.264 2.22 1.45 4.2 2.633 8.476 5.068 17.651 13.125 21.903 19.233 3.786 5.439 5.337 9.207 7.444 18.077 1.078 4.538-.555 18.645-2.37 20.474-.207.209-.377.643-.377.964 0 .635-4.808 10.582-6.214 12.856-.476.77-1.553 2.66-2.393 4.2-5.358 9.825-9.217 14.073-16.202 17.836-.984.53-1.879 1.076-1.99 1.213-.189.234-7.342 3.686-10.401 5.02-5.131 2.238-6.436 2.72-12.8 4.728-3.19 1.006-6.34 2.018-7 2.248-.66.231-2.1.657-3.2.948-1.1.29-2.99.829-4.2 1.198s-3.37.918-4.8 1.221c-1.43.302-3.77.829-5.2 1.171-1.43.341-3.59.81-4.8 1.042-1.21.232-4.09.848-6.4 1.369-4.802 1.083-7.58 1.618-12.4 2.389-1.87.299-3.67.649-4 .778-.676.264-3.988.828-9.6 1.635-6.987 1.004-11.563 1.738-12.311 1.976-3.155 1.001-27.651 1.762-33.889 1.052-10.002-1.138-14.145-1.711-16-2.215-1.1-.299-2.99-.725-4.2-.947-3.267-.598-6.097-1.265-7-1.65-.44-.188-2.15-.744-3.8-1.235-3.892-1.16-9.569-3.215-12.6-4.562-5.853-2.599-8.095-3.688-10.4-5.053-1.1-.652-2.394-1.351-2.875-1.554-1.164-.491-9.453-6.113-11.724-7.952-4.702-3.807-11.601-11.83-11.601-13.49 0-.153-.54-1.155-1.2-2.228-.66-1.072-1.2-2.145-1.2-2.384 0-.238-.255-1-.566-1.694-.801-1.782-3.11-8.59-3.48-10.26-.171-.77-.605-2.57-.966-4-2.235-8.854-3.306-22.02-2.197-27 .703-3.159 1.225-5.039 1.587-5.714.202-.377.915-1.86 1.584-3.295 1.106-2.373 4.166-7.3 5.459-8.791 1.654-1.906 7.501-7.638 9.194-9.011 5.086-4.126 10.876-8.189 11.671-8.189.283 0 .514-.139.514-.308 0-.17.855-.755 1.9-1.3 1.045-.546 1.99-1.091 2.1-1.212.11-.121 1.64-.929 3.4-1.796 1.76-.866 3.26-1.713 3.333-1.88a.55.55 0 01.46-.304c.179 0 2.189-.876 4.466-1.947 5.166-2.43 6.435-2.976 8.941-3.847 1.1-.382 2.54-.925 3.2-1.206l2.714-1.156c.832-.354 1.831-.644 2.22-.644.388 0 .877-.159 1.086-.353.209-.194 1.82-.764 3.58-1.267 1.76-.502 3.387-1.054 3.616-1.226.228-.172 1.218-.513 2.2-.758a4120.5 4120.5 0 003.984-1.002 201.9 201.9 0 014.2-1.006c1.1-.248 2.9-.694 4-.991 9.591-2.59 12.611-3.288 18.2-4.202 1.21-.198 4.63-.815 7.6-1.373 2.97-.557 6.48-1.028 7.8-1.048 1.32-.019 3.93-.275 5.8-.568 4.033-.634 16.581-.529 21.4.178m-19.4 3.831c-6.593.621-12.471 1.304-15.4 1.79l-5.757.951c-2.067.341-4.317.784-5 .984-.684.2-2.683.667-4.443 1.038-1.76.37-4.034.932-5.054 1.248-1.019.316-2.202.574-2.628.574-.427 0-1.573.25-2.547.556-.974.306-4.021 1.134-6.771 1.841-2.75.706-6.539 1.806-8.419 2.443-1.881.638-3.653 1.16-3.94 1.16-.286 0-1.087.248-1.781.552-.693.304-2.88 1.137-4.86 1.852-1.98.715-4.355 1.637-5.278 2.048-.923.411-1.782.748-1.908.748-.275 0-6.956 3.089-7.814 3.613-.33.201-2.67 1.42-5.2 2.707-18.789 9.56-31.942 22.427-35.246 34.48-1.441 5.257-1.39 10.814.199 21.6.713 4.847 3.603 15.889 4.354 16.64.161.161.293.559.293.883 0 1.444 4.321 9.765 6.688 12.879 4.618 6.076 16.762 15.137 24.912 18.586.99.419 2.084.998 2.431 1.287.348.289.763.525.922.525.308 0 3.625 1.397 4.66 1.963.337.184 1.19.462 1.896.617.705.155 1.385.448 1.51.651.126.203.587.369 1.024.369.438 0 1.311.266 1.939.591 1.33.687 7.402 2.536 10.018 3.05.99.195 2.16.519 2.6.721 1.047.481 4.76 1.23 9 1.816 1.87.259 3.67.589 4 .735 3.877 1.714 35.016 1.631 41.8-.111.88-.226 3.04-.585 4.8-.797 4.968-.599 11.036-1.539 12.8-1.983.88-.222 2.215-.407 2.967-.412.751-.006 1.234-.143 1.072-.305-.162-.162-9.057-.306-19.767-.321-12.492-.018-20.619-.193-22.672-.49-11.521-1.667-15.668-2.335-17.6-2.834-.88-.227-2.95-.714-4.6-1.083-6.113-1.366-18.274-5.261-23-7.366-.66-.294-2.01-.876-3-1.294-1.724-.728-5.232-2.464-9.303-4.604-1.047-.55-2.003-1.161-2.124-1.357-.121-.196-.483-.356-.804-.356-.704 0-8.406-5.833-10.761-8.15-5.655-5.563-10.956-12.829-15.065-20.65-.381-.726-1.648-3.747-2.264-5.4-2.04-5.474-2.644-17.495-1.126-22.4 1.602-5.174 2.874-8.283 4.255-10.4.431-.66.906-1.47 1.056-1.8 1.951-4.283 11.003-13.578 17.336-17.8 2.31-1.54 4.26-2.935 4.333-3.1.074-.165.316-.3.539-.3.222 0 .882-.333 1.466-.74 1.944-1.355 11.225-5.952 16.862-8.352 4.227-1.8 10.432-3.933 13.2-4.538.77-.169 2.39-.607 3.6-.975 1.21-.367 3.28-.91 4.6-1.206 1.32-.296 3.21-.734 4.2-.975 4.039-.983 5.621-1.27 8.685-1.579 1.767-.178 3.391-.435 3.61-.57 2.745-1.697 33.051-2.32 43.305-.89 7.771 1.083 14.195 2.306 17 3.235.88.292 2.41.647 3.4.79 1.588.229 3.632.818 6.2 1.786.44.166 1.88.62 3.2 1.008 4.337 1.275 7.4 2.394 7.4 2.702 0 .167.315.305.7.306.385.002 1.216.272 1.846.6.63.329 1.323.598 1.539.598.481 0 1.815.599 8.588 3.861 2.9 1.396 5.368 2.539 5.483 2.539 1.474 0 16.344 10.001 20.799 13.989 9.58 8.575 14.027 15.084 17.358 25.411.969 3.006 1.155 14.834.28 17.8-1.141 3.864-3.524 9.229-5.419 12.2-.421.66-.888 1.47-1.039 1.8-.287.628-3.208 4.544-4.923 6.6-1.84 2.205-7.788 8.044-9.812 9.631-1.1.863-2.09 1.66-2.2 1.77-.596.599-5.489 3.853-6.4 4.255-.33.146-.87.491-1.2.768-.554.463-9.048 4.762-11.8 5.971-2.913 1.28-3.683 1.595-5 2.044l-1.4.477 1.587.042c.872.023 2.312-.209 3.2-.516.887-.307 2.603-.849 3.813-1.205 3.416-1.006 6.792-2.125 9.2-3.051 1.21-.465 2.662-.991 3.227-1.167.565-.177 1.375-.517 1.8-.755.822-.462 3.762-1.769 7.373-3.278 1.21-.506 2.47-1.117 2.8-1.358.33-.24 1.23-.773 2-1.185 5.875-3.138 10.58-7.352 13.166-11.792 1.456-2.5 2.35-4.115 5.451-9.851 6.57-12.152 8.279-17.032 8.873-25.337.359-5.018-2.503-15.389-5.589-20.252-1.556-2.45-5.265-7.055-6.952-8.629-2.723-2.54-8.432-7.287-9.841-8.182-1.658-1.052-5.753-3.795-6.108-4.091-.828-.689-4.627-2.909-4.977-2.909-.201 0-.611-.225-.911-.5-1.216-1.116-17.895-9.5-18.899-9.5-.142 0-1.346-.54-2.676-1.2-1.331-.66-2.639-1.2-2.907-1.2-.269 0-1.603-.54-2.965-1.2-1.363-.66-2.739-1.2-3.058-1.2-.319 0-1.261-.295-2.093-.655-.833-.361-1.874-.808-2.314-.994-.44-.185-2.87-.981-5.4-1.767-2.53-.786-5.32-1.677-6.2-1.979-2.455-.844-5.743-1.665-14.579-3.641-1.49-.333-10.963-1.279-15.021-1.499-1.98-.108-6.21.05-9.4.35m103.238 1.14c-.418.503-2.002.559-10.68.378-5.604-.116-10.632-.101-11.174.035-1.257.316-1.281 1.032-.033 1.032.523 0 1.175.27 1.449.6.274.33.796.6 1.16.6.364 0 1.017.24 1.451.532 1.877 1.267 4.09 1.869 4.602 1.252.386-.465 1.159-.529 3.855-.322 3.177.244 3.408.208 3.993-.627.563-.805.909-.877 3.742-.78 1.861.063 3.338-.074 3.659-.339.296-.245 1.078-.506 1.738-.581.977-.11 1.2-.321 1.2-1.135 0-1.232-4.039-1.758-4.962-.645m-1.41 11.8c-.12.195.139.448.576.562.516.135.796.01.796-.354 0-.619-1.023-.774-1.372-.208m3.644 2.306c-.344.345 2.147 2.175 2.588 1.902.188-.116.026-.645-.359-1.174-.679-.933-1.693-1.264-2.229-.728M179 146.012c-8.046.63-13.984 1.278-14.891 1.623-.529.201-1.714.369-2.635.375-.921.005-2.484.206-3.474.445-.99.24-2.97.671-4.4.958-1.43.288-3.68.798-5 1.134-1.32.336-3.48.87-4.8 1.185-6.652 1.591-17.841 6.305-22.935 9.661-1.174.774-2.299 1.407-2.5 1.407-.201 0-.365.18-.365.4 0 .22-.193.4-.429.4-2.58 0-16.437 14.634-19.716 20.822l-.744 1.406 1.29 1.911c1.618 2.397 7.005 7.797 9.96 9.982 2.394 1.77 8.425 5.879 8.631 5.879.144 0 8.986 5.15 10.936 6.369.73.457 1.515.831 1.744.831.229 0 1.431.512 2.672 1.137 4.619 2.328 11.165 4.989 16.256 6.609 12.432 3.953 20.192 5.504 36.2 7.234 7.188.777 18.095.784 23.4.015 2.2-.319 4.99-.581 6.2-.582 2.716-.003 12.566-1.132 14.2-1.627.66-.199 2.37-.538 3.8-.752 3.436-.514 11.542-2.401 14-3.259.77-.269 2.03-.71 2.8-.981s2.57-.868 4-1.328c7.858-2.524 23.143-10.284 23.933-12.151.074-.173.308-.315.522-.315 2.321 0 18.745-16.827 18.745-19.206 0-2.283-8.096-10.104-16.2-15.65-6.222-4.257-19.897-11.944-21.248-11.944-.146 0-1.004-.344-1.908-.763-3.262-1.515-4.575-2.037-5.124-2.037-.308 0-.731-.151-.94-.336-.209-.186-1.64-.737-3.18-1.225-1.54-.488-3.16-1.047-3.6-1.24-.44-.194-1.43-.471-2.2-.615-1.355-.255-3.974-.97-6.738-1.842-.736-.232-2.266-.565-3.4-.741a666.987 666.987 0 01-7.862-1.327c-12.5-2.17-31.205-2.944-45-1.862m12.4 10.386c4.659.488 9.793 1.209 11.4 1.602.77.189 3.56.73 6.2 1.204 2.64.473 5.25 1.009 5.8 1.191.55.181 2.8.728 5 1.215 2.2.487 4.36 1.029 4.8 1.204.44.175 1.52.504 2.4.732 4.163 1.079 5.258 1.383 6 1.667.44.168 2.06.698 3.6 1.178 1.54.479 3.367 1.127 4.06 1.44.694.313 1.427.569 1.631.569 1.081 0 2.241 1.993 1.766 3.036-.634 1.389-2.3 1.204-8.457-.937-4.265-1.484-5.58-1.885-11.6-3.543a997.3 997.3 0 01-4.2-1.168c-1.1-.309-2.99-.767-4.2-1.017-1.21-.251-3.37-.711-4.8-1.024-1.43-.312-4.76-.929-7.4-1.371-2.64-.442-6.33-1.074-8.2-1.406-4.231-.749-19.82-.934-22.2-.263-.88.248-3.31.847-5.4 1.33-2.09.483-4.16 1.02-4.6 1.193-.44.172-2.15.698-3.8 1.168-2.709.771-4.708 1.467-7 2.436-.44.186-2.42.992-4.4 1.79-9.026 3.641-20.077 9.314-23.858 12.246-.801.621-1.641 1.13-1.866 1.13-.225 0-.469.16-.543.356-.227.607-3.58 3.244-4.125 3.244-2.582 0-1.881-3.652 1.134-5.906 2.714-2.03 8.79-5.999 9.944-6.498a19.786 19.786 0 001.514-.732l1.4-.79c1.134-.64 9.043-4.474 9.231-4.474.086 0 1.271-.54 2.634-1.2 1.362-.66 2.635-1.2 2.828-1.2.355 0 3.59-1.346 4.72-1.963.337-.184 1.231-.471 1.987-.637.756-.166 1.65-.445 1.987-.619 2.348-1.217 16.832-5.053 20.013-5.301 3.584-.279 13.473-.209 16.6.118m11.54 19.979c3.331 1.267 1.303 3.445-3.74 4.017-6.86.777-10.916 1.69-18.2 4.094-3.674 1.213-3.986 1.337-8.728 3.48-1.5.677-2.828 1.232-2.951 1.232-.122 0-1.353.556-2.735 1.237-3.451 1.699-5.72.881-4.471-1.612.885-1.767 15.616-8.344 21.485-9.593.77-.163 2.03-.494 2.8-.733 5.841-1.818 14.439-2.921 16.54-2.122m70.98.503c1.711 1.711-2.141 7.255-10.228 14.72-4.87 4.495-10.066 8.8-10.621 8.8-.084 0-1.386.81-2.893 1.8s-2.959 1.8-3.226 1.8c-.267 0-.545.135-.619.3-.212.478-6.877 3.588-11.071 5.166-4.822 1.815-13.695 4.11-15.942 4.124-.925.005-2.642.26-3.817.566-3.394.884-22.795 1.649-27.819 1.097-2.263-.249-5.413-.461-7-.47-1.586-.01-3.694-.204-4.684-.431-.99-.226-3.207-.562-4.927-.745-3.379-.359-4.673-1.085-4.673-2.62 0-2.065 2.215-2.215 10.535-.713 6.084 1.098 31.949.96 38.665-.206 9.058-1.574 9.244-1.619 17.2-4.232 5.421-1.779 16.839-7.519 18-9.047.11-.145 1.172-.942 2.361-1.772 4.149-2.896 13.154-11.675 16.539-16.121 1.934-2.541 3.126-3.11 4.22-2.016m-31.451 8.111c.445.977-1.164 4.209-2.095 4.209-.174 0-.576.26-.894.577-1.449 1.449-11.551 6.012-15.658 7.073-3.947 1.019-6.563 1.637-8.422 1.989-1.1.209-2.759.553-3.687.765-4.92 1.125-6.665.927-7.099-.808-.376-1.501.516-2.322 2.986-2.747 1.21-.208 3.37-.577 4.8-.818 10.563-1.785 22.994-6.605 26.409-10.24 1.257-1.339 3.05-1.339 3.66 0M255.4 224.8c-.67.288-.589.348.5.372.715.015 1.3-.152 1.3-.372 0-.475-.695-.475-1.8 0m-33.2 7.238c-1.411.219-1.305.255.9.305 1.375.031 2.5-.012 2.5-.096 0-.33-1.879-.445-3.4-.209", fill: "#fbfbfb" }),
            React.createElement("path", { d: "M151.921 77.43c.495.346 1.12.541 1.389.431.281-.113.191-.211-.21-.229-.385-.018-.7-.212-.7-.432s-.31-.4-.689-.4c-.563 0-.525.115.21.63M176.655 79c-.14.365 0 .6.358.6.323 0 .587-.27.587-.6 0-.33-.161-.6-.357-.6-.197 0-.461.27-.588.6m-19.354.6c.089.33.598.633 1.13.674.764.058.8.027.169-.146-.44-.121-.949-.425-1.13-.674-.219-.3-.276-.25-.169.146m12.399.287a8.899 8.899 0 002.2 0c.605-.092.11-.167-1.1-.167-1.21 0-1.705.075-1.1.167m-11.1.913l-1.2.305 1.076.048c.592.026 1.188-.133 1.324-.353.136-.22.192-.379.124-.353-.068.026-.664.185-1.324.353m-7.51 1.768c-.313.312-1.09.645-1.729.74l-1.161.172 1.251.06c.688.033 1.466-.199 1.729-.516.263-.317.96-.65 1.549-.74l1.071-.164-1.071-.06c-.59-.033-1.327.195-1.639.508m86.3-.275c.435.11 1.011.494 1.28.854.426.567.461.535.263-.247-.167-.666-.5-.888-1.28-.854-.826.037-.882.09-.263.247M139.2 84.91c0 .467-.468.686-1.7.797l-1.7.153 1.713.07c1.624.066 2.66-.69 1.936-1.414-.137-.137-.249.04-.249.394m110.348.326c.451.484 1.089.757 1.516.647.599-.155.568-.199-.164-.237-.513-.026-.9-.304-.9-.646a.61.61 0 00-.616-.6c-.502 0-.471.154.164.836m3.649.646c.768.101 1.546.393 1.73.651.228.318.283.276.173-.133-.106-.392-.707-.618-1.731-.651-1.503-.049-1.51-.043-.172.133m-60.497.416c2.035.073 5.365.073 7.4 0s.37-.132-3.7-.132-5.735.059-3.7.132m-13.7.758c-6.204 1.064-16.414 2.995-17.6 3.327-.66.185-3 .723-5.2 1.197-6.78 1.458-13.058 3.297-10.4 3.045 1.75-.165 4.814-.925 5.865-1.454.366-.184 1.626-.458 2.8-.609 1.174-.152 2.585-.446 3.135-.653 1.116-.422 3.403-.892 8.298-1.709 1.814-.303 3.497-.673 3.74-.824.426-.263 1.115-.379 8.162-1.376 1.76-.25 4.64-.692 6.4-.983l3.2-.53-2.6.01c-1.43.005-4.04.257-5.8.559m30.8-.221c1.32.175 5.64.515 9.6.755s7.955.611 8.877.824c.923.212 2.903.399 4.4.415 1.498.016 3.713.192 4.923.39 2.141.352 9.354 1.341 14.2 1.948 1.32.166 2.85.487 3.4.715.55.227 2.394.542 4.097.699 1.704.158 3.199.452 3.324.653.124.201.761.366 1.415.366.655 0 1.836.27 2.626.6.789.33 1.999.585 2.687.566l1.251-.035-1.2-.397c-1.936-.641-5.77-1.537-9.067-2.118-1.686-.298-3.396-.644-3.8-.77-2.318-.723-19.535-2.924-30.133-3.852-2.53-.221-6.498-.581-8.818-.798-2.321-.218-5.561-.37-7.2-.337l-2.982.059 2.4.317m-78.824.552c-.616.467-.648.59-.156.6.341.007.791-.15 1-.348.209-.199.74-.448 1.18-.554.645-.155.602-.201-.224-.239-.562-.025-1.372.218-1.8.541m126.624-.295c.33.125.725.421.878.656.153.236.418.289.589.119.37-.371-.619-1.065-1.467-1.029-.533.022-.533.051 0 .254M185 88.788c-.44.196-1.797.368-3.016.384-1.219.015-3.199.279-4.4.587-1.201.307-3.347.689-4.768.849-1.421.159-2.861.442-3.2.628-.339.186-1.876.508-3.416.714-1.54.207-3.88.676-5.2 1.043-1.32.368-3.3.852-4.4 1.077-1.1.225-3.44.767-5.2 1.204-1.76.438-4.28 1.038-5.6 1.334-3.103.695-5.793 1.415-6.8 1.82-.44.177-1.25.429-1.8.561-.55.132-1.9.493-3 .802-1.1.309-3.17.866-4.6 1.236-1.43.371-3.167.921-3.86 1.223-.694.303-1.57.55-1.947.55-.859 0-4.442 1.137-5.855 1.858-.584.298-1.404.542-1.823.542-.419 0-1.111.264-1.539.587-.427.323-1.159.593-1.627.6-.468.007-1.098.317-1.4.688-.488.6-.461.64.251.355 3.756-1.499 15.066-5.128 19.4-6.224.77-.195 2.75-.738 4.4-1.206 8.356-2.373 10.416-2.903 17-4.375 3.08-.688 6.14-1.408 6.8-1.599.66-.191 3.09-.735 5.4-1.209 2.31-.474 5.396-1.122 6.857-1.44 1.462-.317 3.116-.577 3.675-.577.56 0 2.194-.273 3.63-.606 5.414-1.255 29.183-1.372 40.238-.197 2.09.222 6.32.582 9.4.799 3.08.218 6.229.578 6.997.8.769.222 2.414.404 3.656.404s3.674.257 5.403.572c1.729.314 5.664.961 8.744 1.437 3.08.475 7.31 1.277 9.4 1.782 2.09.504 4.564 1.044 5.498 1.198.934.154 1.799.445 1.924.646.124.201.62.366 1.102.367.482.002 1.359.255 1.949.563.59.308 1.67.687 2.4.843.73.157 1.507.413 1.727.569.22.157 1.3.607 2.4 1 1.1.394 3.852 1.594 6.117 2.669 2.264 1.075 4.19 1.954 4.281 1.954.091 0 1.953 1.08 4.138 2.4 2.185 1.32 4.104 2.4 4.266 2.4.366 0 6.183 4.043 8.586 5.968.984.788 2.244 1.792 2.8 2.232 2.051 1.624 8.656 8.229 10.012 10.013.77 1.013 1.863 2.414 2.429 3.114 1.629 2.015 4.822 7.487 8.329 14.273 1.51 2.923 3.415 7.987 3.761 10 .108.627.192.37.227-.686.029-.928-.236-2.368-.59-3.2a152.06 152.06 0 01-1.123-2.714c-.897-2.251-3.228-6.797-4.1-8-.479-.66-.994-1.695-1.145-2.3-.151-.605-.423-1.1-.604-1.1-.182 0-.443-.356-.581-.79-.345-1.088-3.18-5.284-4.182-6.191-.452-.409-.821-.94-.821-1.181-.001-1.07-7.896-9.076-12.4-12.574-1.87-1.452-3.544-2.871-3.72-3.152-.176-.282-.51-.512-.742-.512-.233 0-1.079-.514-1.88-1.142-.802-.628-2.538-1.733-3.858-2.454-1.32-.722-3.12-1.79-4-2.374-1.842-1.223-7.496-4.03-8.116-4.03-.229 0-.477-.135-.551-.3-.152-.343-2.113-1.288-4.733-2.281-.99-.376-2.31-.938-2.932-1.251-.623-.312-1.495-.568-1.939-.568-.443 0-1.283-.245-1.867-.545-2.096-1.074-5.187-1.986-10.462-3.083-.99-.206-2.07-.497-2.4-.646-.587-.266-4.719-.964-10.099-1.705-1.484-.205-2.913-.505-3.175-.667-.263-.162-2.919-.533-5.902-.824a481.445 481.445 0 01-10.224-1.122c-13.112-1.62-45.282-2.85-47.6-1.82m-61.8.979c0 .311-.225.657-.5.768-.377.152-.38.21-.014.233.267.018.679-.328.914-.768.29-.542.295-.8.014-.8-.228 0-.414.255-.414.567m-28.8.804c0 .353 1.273 1.429 1.69 1.429.238 0 .017-.36-.49-.8-.926-.803-1.2-.947-1.2-.629m103.523 1.441c-4.558.383-14.4 1.768-16.723 2.353l-1.4.353 1.874.041c1.031.023 2.381-.166 3-.419.619-.253 2.656-.605 4.526-.783 1.87-.179 4.75-.501 6.4-.716 4.945-.645 24.686-.519 26.6.171.88.317 2.162.579 2.85.582.687.003 2.015.276 2.95.606.935.33 2.443.582 3.35.559l1.65-.041-1.4-.362c-1.356-.351-5.913-1.285-9.6-1.967-2.801-.518-19.316-.777-24.077-.377m.677 2.431c-3.3.169-7.53.594-9.4.945s-5.02.817-7 1.036c-1.98.219-3.96.578-4.4.798-.44.22-1.7.572-2.8.783-4.981.955-7.282 1.486-8.326 1.923-.619.26-1.463.472-1.875.472-.411 0-2.155.354-3.874.787-1.719.433-3.935.989-4.925 1.235-.99.246-2.716.702-3.835 1.013-1.119.311-2.289.571-2.6.578-.311.007-.925.298-1.365.646-.97.768-1.056.784 5.8-1.08 2.53-.687 5.68-1.491 7-1.785 4.606-1.028 11.615-2.673 13.6-3.192 1.1-.288 3.8-.818 6-1.178s4.9-.826 6-1.036c8.675-1.653 25.152-2.165 34-1.056 7.211.904 21.694 4.565 28 7.078.44.175 2.79 1.045 5.222 1.932 4.95 1.806 10.232 3.91 13.056 5.2 1.033.472 1.978.858 2.099.858.483 0 12.997 6.254 15.623 7.808 1.54.911 3.97 2.321 5.4 3.133 11.966 6.793 23.321 17.409 26.918 25.164 5.276 11.375 5.647 21.213 1.202 31.895-.838 2.013-6.428 13.008-7.777 15.297-.629 1.066-1.143 2.015-1.143 2.108 0 .648-4.272 7.137-5.678 8.625-3.651 3.865-18.435 12.77-21.198 12.77-.31 0-.748.184-.973.409-.762.762-15.96 5.944-19.903 6.787-.906.194-3.178.809-5.048 1.368s-3.784 1.021-4.254 1.026c-.47.006-1.37.279-2 .608-.63.328-1.686.601-2.346.606-.66.004-1.92.267-2.8.584-1.861.671-4.048.782-4.393.224-.132-.214.263-.489.877-.612a19.492 19.492 0 002.316-.655c.66-.238 2.116-.574 3.236-.746 1.12-.172 2.38-.501 2.8-.73.42-.23 2.204-.868 3.964-1.418 4.296-1.342 8.889-2.953 10.6-3.717 3.48-1.555 11.161-5.525 12.72-6.575.946-.638 1.82-1.159 1.942-1.159.123 0 .905-.54 1.738-1.2.833-.66 1.64-1.2 1.793-1.2.154 0 .758-.433 1.343-.962.585-.529 2.348-2.049 3.918-3.379 10.278-8.705 19.808-24.409 19.734-32.521-.019-2.081-.746-.477-1.157 2.552-.377 2.783-.806 4.13-2.489 7.802-.628 1.37-1.142 2.563-1.142 2.651 0 .574-5.193 8.326-7.399 11.045-3.032 3.738-13.051 12.812-14.146 12.812-.214 0-.448.146-.522.325-.176.428-7.534 4.868-10.333 6.234-1.21.591-2.47 1.236-2.8 1.433-1.349.807-6.043 2.808-6.587 2.808-.322 0-1.177.255-1.899.567-.723.311-1.971.851-2.774 1.2-.804.348-1.754.633-2.113.633-.884 0-5.533 1.572-6.007 2.032-.209.202-1.171.368-2.138.368-.967 0-2.236.256-2.82.57-1.187.636-7.16 1.831-9.154 1.83-.71 0-1.97.256-2.8.568-.829.312-2.678.671-4.108.797-1.43.125-3.5.399-4.6.608-1.1.209-3.44.39-5.2.404-1.76.013-4.73.294-6.6.623-4.08.719-24.857.863-26.64.185-.6-.228-3.57-.57-6.599-.76-3.029-.19-5.701-.464-5.938-.61-.236-.147-2.003-.419-3.926-.607-1.923-.187-5.207-.733-7.297-1.213-2.09-.48-4.61-1-5.6-1.157-.99-.156-2.193-.499-2.674-.761-.48-.262-1.56-.463-2.4-.445-.839.017-1.346.087-1.126.156 2.689.841 5.518 1.501 13.8 3.22 2.861.594 9.299 1.488 16.4 2.28 6.069.676 29.648.677 36.8.002 7.186-.678 14.185-1.61 16.4-2.183 2.316-.6 7.6-.881 7.6-.405 0 .201-1.125.567-2.5.812-1.375.245-4.12.816-6.1 1.268-1.98.452-5.22 1.091-7.2 1.421-1.98.33-5.04.879-6.8 1.22-1.76.34-4.37.768-5.8.951-1.43.183-3.68.527-5 .765-2.595.468-7.087 1.164-10.6 1.643l-2.2.3 2.4.05c1.32.027 3.12-.132 4-.353.88-.22 3.199-.564 5.154-.764 1.955-.2 3.746-.555 3.98-.789.234-.234 1.605-.434 3.046-.444 1.441-.009 3.34-.277 4.22-.594.88-.317 2.32-.587 3.2-.6.88-.013 2.32-.283 3.2-.6.88-.317 2.5-.587 3.6-.6 1.1-.013 2.72-.283 3.6-.6.88-.317 2.113-.579 2.74-.582.626-.003 1.706-.26 2.4-.57.693-.31 2.373-.652 3.733-.759 1.36-.108 2.71-.349 3-.536.29-.187 1.607-.552 2.927-.81 5.322-1.042 6.817-1.409 7.18-1.762.209-.203.88-.369 1.492-.369.611 0 1.79-.244 2.62-.542 2.619-.942 5.848-1.825 7.606-2.081.934-.135 1.799-.411 1.924-.612.124-.201.625-.365 1.113-.365s1.242-.244 1.676-.543c.434-.299 1.509-.675 2.389-.836.88-.161 1.78-.422 2-.579.22-.158 1.75-.709 3.4-1.225 1.65-.516 3.18-1.076 3.401-1.244.221-.169 1.391-.69 2.6-1.158 4.176-1.617 9.192-3.993 11.799-5.59a100.2 100.2 0 013.085-1.803c3.049-1.689 8.027-6.3 9.523-8.822.523-.88 1.049-1.69 1.171-1.8.121-.11.671-1.097 1.221-2.193s1.225-2.234 1.5-2.528c.275-.295.5-.868.5-1.274s.152-.798.338-.872c.186-.073.591-.614.9-1.201 1.009-1.918 2.292-4.519 2.532-5.132.13-.33.676-1.32 1.215-2.2.539-.88.988-1.893.998-2.251.009-.358.287-.875.617-1.149s.6-.814.6-1.2.27-.926.6-1.2c.33-.274.6-.98.6-1.569s.179-1.25.397-1.468c2.558-2.558 2.604-20.681.062-23.916-.193-.246-.448-.897-.565-1.447-.362-1.701-1.27-3.784-1.794-4.12-.275-.176-.5-.624-.5-.996 0-.785-2.727-4.884-3.249-4.884-.193 0-.351-.271-.351-.602 0-.775-9.814-10.598-10.589-10.598-.14 0-.83-.539-1.533-1.198-.703-.659-1.421-1.199-1.595-1.2-.174-.001-.534-.185-.8-.408-1.6-1.344-4.298-3.194-4.659-3.194-.233 0-.424-.168-.424-.373s-.405-.499-.9-.654c-.495-.154-.99-.409-1.1-.565-.199-.283-.587-.502-4.268-2.408-1.063-.55-1.99-1.129-2.061-1.286-.071-.158-.971-.674-2-1.148-1.029-.473-2.141-1.013-2.471-1.198-.33-.186-1.41-.726-2.4-1.2-.99-.475-2.07-1.01-2.4-1.19-1.68-.916-6.416-3.14-8-3.758-.99-.386-2.07-.864-2.4-1.063-.33-.199-.87-.46-1.2-.58-.33-.12-1.11-.479-1.732-.797-.623-.319-1.456-.58-1.851-.58-.396 0-.943-.27-1.217-.6-.274-.33-.881-.605-1.349-.611-.468-.006-2.106-.546-3.639-1.2-1.534-.654-2.947-1.189-3.14-1.189-.193 0-.918-.253-1.612-.562-1.982-.883-5.121-1.838-6.042-1.838-.462 0-1.204-.255-1.649-.567-.446-.312-1.478-.692-2.294-.845-.816-.153-1.582-.438-1.703-.633s-.745-.355-1.388-.355c-.642 0-1.846-.256-2.676-.569-.829-.314-2.408-.691-3.508-.839-1.1-.149-2.18-.387-2.4-.531-2.391-1.561-16.086-2.309-29.6-1.618m-95.673.957c.055.543.401.821 1.077.866.835.054.854.034.121-.125-.482-.105-.967-.494-1.077-.866-.146-.486-.179-.451-.121.125m38.558-.352c-.136.137-1.201.491-2.367.787-1.165.296-3.108.832-4.318 1.191-1.21.36-3.1.894-4.2 1.189-2.527.676-5.647 1.597-7.2 2.126-.66.224-2.28.718-3.6 1.097a89.472 89.472 0 00-4.6 1.479c-6.324 2.272-8.512 3.11-10.46 4.002-1.177.539-2.41 1.094-2.74 1.235-.33.14-1.079.568-1.665.95-.585.383-1.935 1.222-3 1.865-1.064.643-2.835 1.857-3.935 2.697-1.1.841-2.536 1.935-3.192 2.432-4.994 3.782-10.905 10.027-16 16.902-11.205 15.123-14.745 29.577-12.638 51.6.212 2.223.325-.587.368-9.2.034-6.82.235-13.39.447-14.6.52-2.968 1.373-6.355 1.945-7.726.258-.619.47-1.37.47-1.668 0-.297.301-1.141.669-1.874.369-.732.909-1.81 1.2-2.394.292-.584.531-1.349.531-1.7s.16-.638.357-.638c.196 0 .473-.465.616-1.033.142-.569.743-1.784 1.335-2.7 1.471-2.28 2.009-3.163 2.356-3.867.163-.33.442-.78.622-1 1.027-1.26 3.114-4.183 3.114-4.362 0-.116.495-.739 1.1-1.386.605-.646 1.82-2.04 2.7-3.097 1.745-2.097 7.738-8.155 8.068-8.155.185 0 1.379-1.023 3.384-2.9.411-.385.928-.7 1.148-.7.22 0 .4-.146.4-.324 0-.336 4.422-3.448 6.314-4.444.594-.313 1.319-.808 1.611-1.1.293-.293.789-.532 1.104-.532.314 0 .571-.18.571-.4 0-.22.273-.4.608-.4.334 0 1.619-.54 2.856-1.2 1.237-.66 2.511-1.2 2.832-1.2.321 0 1.24-.283 2.044-.63l2.66-1.147c.66-.285 2.55-.918 4.2-1.407 1.65-.489 3.45-1.041 4-1.228.55-.186 1.624-.462 2.387-.614.763-.152 1.663-.429 2-.616.337-.187 2.323-.813 4.413-1.391 2.09-.578 4.7-1.32 5.8-1.648 1.1-.328 2.848-.766 3.883-.973 1.036-.207 2.386-.638 3-.959l1.117-.582-1.033-.003c-.569-.001-1.145.11-1.282.246m34.534.132c-.319.202-1.489.486-2.6.631-1.11.145-5.889 1.258-10.619 2.474-4.73 1.215-9.377 2.365-10.327 2.555-.949.19-1.882.442-2.073.56-.191.118-1.124.376-2.073.573-1.677.349-13.088 4.267-17.527 6.019-1.21.477-2.65 1.015-3.2 1.195-11.493 3.761-32.543 16.625-40.2 24.567-13.277 13.769-16.072 25.854-10.973 47.446.441 1.87.975 4.21 1.185 5.2.211.99.551 2.16.756 2.6.205.44.462 1.07.571 1.4.109.33.212.049.229-.624.018-.672-.232-1.572-.555-2-.323-.427-.593-1.357-.6-2.068-.007-.71-.267-1.97-.579-2.8-.311-.829-.666-2.484-.789-3.677-.123-1.194-.409-2.355-.634-2.58-.226-.226-.406-1.05-.4-1.831.006-.781-.301-4.25-.681-7.709-.734-6.673-.256-12.219 1.308-15.173.309-.584.562-1.417.562-1.851 0-.434.27-1.013.6-1.287.33-.274.6-.814.6-1.2s.27-.926.6-1.2c.33-.274.6-.821.6-1.216 0-.394.135-.777.3-.851.342-.152 2.1-2.59 2.1-2.912 0-.213.97-1.458 1.9-2.437.275-.29.5-.629.5-.754 0-.446 7.047-7.164 9.4-8.96 1.32-1.008 2.511-1.992 2.646-2.188.135-.195.615-.563 1.067-.818.451-.255 2.137-1.364 3.746-2.464 3.329-2.276 4.174-2.799 5.441-3.373.495-.224.9-.592.9-.817 0-.226.349-.41.776-.41.427 0 .876-.16.997-.356.121-.196 1.797-1.124 3.724-2.061 1.926-.937 3.563-1.857 3.636-2.043.074-.187.414-.34.756-.34s1.5-.54 2.573-1.2c1.072-.66 2.183-1.2 2.468-1.2.284 0 .866-.264 1.294-.587.427-.323 1.147-.593 1.6-.6.452-.007 1.172-.277 1.6-.6.427-.323 1.046-.594 1.376-.603.33-.008 1.116-.284 1.746-.612.63-.329 1.323-.598 1.539-.598.429 0 2.651-.911 4.447-1.824.623-.317 1.439-.576 1.814-.576.668 0 4.646-1.301 5.979-1.956 1.246-.611 4.659-1.602 6.475-1.879.99-.151 1.98-.409 2.2-.574.22-.165 1.21-.421 2.2-.568.99-.148 2.16-.428 2.6-.622.74-.328 2.062-.655 6.506-1.612.938-.202 2.09-.573 2.56-.824.47-.252 1.952-.612 3.294-.8 3.302-.464 7.421-1.363 8.64-1.886l1-.428-1.2-.02c-.66-.01-1.461.147-1.781.349m58.24.206c.46.323 1.536.761 2.389.974.854.213 2.632.678 3.952 1.032 1.32.354 3.12.826 4 1.049.88.223 1.771.575 1.98.782.209.207.659.378 1 .379.341.002 1.103.255 1.693.563.59.308 1.67.687 2.4.843.73.157 1.507.419 1.727.583.22.164.94.42 1.6.568.66.148 1.83.563 2.6.923.77.359 1.94.88 2.6 1.156.66.277 1.857.786 2.66 1.132.804.347 1.661.63 1.906.63.245 0 .757.169 1.139.375s1.595.772 2.695 1.257c3.89 1.715 4.801 2.171 4.933 2.468.074.165.324.3.557.3.407 0 3.472 1.328 4.71 2.04.33.19 1.541.81 2.692 1.378 1.151.568 2.196 1.201 2.324 1.407.127.206.581.375 1.008.375.427 0 .776.177.776.392 0 .216.495.513 1.1.66.605.147 1.756.78 2.558 1.407.801.628 1.746 1.141 2.1 1.141.353 0 .642.173.642.385 0 .211 1.488 1.263 3.308 2.338 1.819 1.074 3.929 2.521 4.689 3.215.76.694 1.521 1.262 1.692 1.262.171 0 .64.315 1.042.7 1.31 1.254 2.784 2.426 3.594 2.86.748.4 3.678 3.33 7.135 7.135 2.178 2.398 2.54 2.84 2.54 3.104 0 .338 1.745 2.777 2.1 2.934.165.074.3.383.3.688 0 .682 1.644 3.929 2.082 4.112.175.074.319.614.32 1.2.002.587.272 1.583.6 2.213.329.63.599 1.53.6 2 .002.47.258 1.343.569 1.94 1.679 3.218.933 15.932-1.23 20.974-.298.694-.541 1.559-.541 1.923 0 .364-.54 1.75-1.2 3.08-.66 1.331-1.2 2.671-1.2 2.978 0 .307-.177.559-.392.559-.216 0-.506.45-.644 1s-.397 1-.576 1c-.178 0-.44.528-.582 1.172-.142.645-.516 1.387-.832 1.649-.316.262-.574.703-.574.979s-.27.726-.6 1c-.33.274-.6.836-.6 1.249 0 .413-.167.751-.371.751s-.832.945-1.395 2.1a84.895 84.895 0 01-2.42 4.5c-.768 1.32-1.515 2.67-1.659 3-.235.539-5.325 5.605-6.63 6.6-2.976 2.268-8.956 5.8-9.819 5.8-.278 0-.506.18-.506.4 0 .22-.209.4-.463.4-.255 0-1.74.606-3.3 1.347-4.793 2.276-8.328 3.744-10.837 4.499-1.32.397-2.587.855-2.816 1.017-.228.162-1.128.477-2 .7a132.153 132.153 0 00-6.884 2.01l-2.6.854c-3.232 1.06-5.46 1.649-7.453 1.971-1.184.191-2.345.54-2.58.775-.235.235-.946.427-1.581.427-1.202 0-5.608.963-7.686 1.679-.66.228-2.203.55-3.429.716-1.226.165-2.609.504-3.074.753-.464.249-1.565.452-2.445.452-1.738 0-3.917.668-3.51 1.076.14.139 1.29.023 2.556-.259 1.266-.281 3.382-.747 4.702-1.035 11.936-2.601 17.95-4.003 20.6-4.803.99-.299 3.15-.942 4.8-1.43 27.254-8.056 40.594-15.546 46.844-26.3l4.558-7.849c3.964-6.832 6.821-13.285 8.766-19.8 1.413-4.732 1.368-14.78-.085-19.2-.254-.77-.834-2.57-1.289-4-3.292-10.335-17.88-25.443-29.994-31.063-.33-.153-.69-.407-.8-.565-.11-.157-1.64-1.056-3.4-1.997a250.67 250.67 0 01-5.2-2.86c-1.1-.631-2.81-1.512-3.8-1.958-.99-.445-3.15-1.444-4.8-2.219-1.65-.775-3.9-1.825-5-2.334-2.321-1.073-9.666-4.053-12-4.867-.88-.307-1.96-.707-2.4-.888-1.999-.823-11.264-3.846-14.2-4.632-1.43-.384-3.326-.949-4.213-1.257-2.073-.719-2.58-.711-1.528.026m37.141-.087c1.08.64 4.642 1.872 5.459 1.888.362.007 1.747.553 3.078 1.213 1.33.66 2.563 1.201 2.741 1.202.177.002.772.234 1.322.516.55.282 1.9.846 3 1.252 1.1.407 2.27.959 2.6 1.227.33.268 1.5.918 2.6 1.445 1.1.526 2.09 1.058 2.2 1.181.11.124 1.549.904 3.197 1.734 1.648.83 3.088 1.629 3.2 1.776.404.532 2.781 2.067 3.199 2.067.236 0 .533.27.659.6.127.33.405.6.618.6.49 0 5.218 3.584 5.647 4.281.176.285.503.519.727.519.403 0 9.153 8.558 9.153 8.953 0 .113.455.696 1.01 1.296 1.919 2.07 6.19 8.268 6.19 8.982 0 .171.225.558.5.859.899.983 5.9 10.594 5.9 11.339 0 .26.251.681.558.936.307.255.654 1.042.771 1.749.117.707.398 2.096.625 3.086.503 2.202.53 10.321.048 14.4-.195 1.65-.546 4.8-.779 7-.422 3.978-1.113 7.162-2.299 10.6-1.092 3.163-2.884 7.205-3.37 7.6-.135.11-.374.611-.531 1.113-.157.502-.715 1.377-1.241 1.944-.526.568-1.063 1.37-1.194 1.782-.218.687-1.029 1.786-2.588 3.508-.33.364-1.32 1.548-2.2 2.63-1.878 2.31-8.413 8.846-11.421 11.423-1.156.99-3.289 2.939-4.74 4.331-2.933 2.813-7.034 6.069-7.643 6.069a.404.404 0 00-.396.41c0 .225-.405.588-.9.806-.495.218-1.44.751-2.1 1.186-.66.434-1.47.895-1.8 1.025-.33.13-1.078.492-1.662.804-.584.313-1.327.569-1.651.569-.324 0-.813.27-1.087.6-.274.33-.853.6-1.287.6-.434 0-1.267.25-1.851.555-.584.305-1.58.762-2.214 1.015-.633.253-1.038.573-.899.712s.657.044 1.152-.211c.494-.255 2.141-.924 3.658-1.486 3.188-1.182 8.242-3.773 11.641-5.97 3.232-2.089 16.3-14.095 22.236-20.429 4.971-5.304 10.727-14.284 12.298-19.186 1.456-4.542 2.053-7.283 2.657-12.2.364-2.97.914-7.38 1.22-9.8 1.123-8.859-.54-14.936-7.577-27.675-5.558-10.064-16.061-21.286-25.348-27.083-.942-.588-2.039-1.378-2.437-1.756-.711-.674-1.864-1.362-5.049-3.013-.88-.456-1.69-.943-1.8-1.081-.11-.137-.515-.367-.9-.509-.931-.343-.888-.94.086-1.195.535-.14.863.036 1.027.553.133.417.57.759.971.759.402 0 .838.281.97.625s.423.513.646.375c.524-.324-.52-1.4-1.357-1.4-.338 0-.799-.344-1.024-.764-.27-.506-.681-.693-1.216-.553-.444.116-1.076-.012-1.405-.285-.414-.343-.598-.358-.598-.047 0 .709-.957.532-3.263-.601-4.292-2.11-10.67-4.691-13.737-5.559-1.32-.374-2.571-.84-2.78-1.035-.209-.196-.749-.351-1.2-.344-.816.012-.816.015-.02.487m8.743.901c.33.33.827.6 1.105.6.283 0 .164-.258-.272-.587-1.018-.771-1.6-.78-.833-.013m29.15 1.8c-.275.44-.822.8-1.216.8-.395 0-.888.166-1.097.369-.209.203-.83.451-1.38.55-.55.1-.191.111.798.025 1.597-.138 5.181-2.544 3.791-2.544-.218 0-.621.36-.896.8m-206.893.6c-.278.335-.321.6-.098.6.22 0 .624-.27.898-.6.278-.335.321-.6.098-.6-.22 0-.624.27-.898.6m197.905.883c.497.096 1.217.092 1.6-.008.382-.1-.025-.179-.905-.174-.88.004-1.193.086-.695.182M93.084 103.2c-.115.44-.176.8-.135.8.04 0 .381-.36.758-.8.525-.613.556-.8.136-.8-.302 0-.644.36-.759.8m89.316.598c-3.41.309-8 .841-10.2 1.183-2.2.342-4.45.621-5 .619-.55-.001-2.26.274-3.8.611-1.54.337-4.15.891-5.8 1.233-6.507 1.345-18.469 4.914-23.6 7.042-6.955 2.883-16.32 7.434-17.631 8.568-.348.3-.747.546-.888.546-1.247 0-10.73 7.257-14.898 11.4-7.995 7.949-14.259 19.479-14.167 26.078l.015 1.122.585-1.346c.321-.74.584-1.796.584-2.346 0-1.748 1.899-7.008 3.65-10.108.435-.77.979-1.895 1.21-2.5.23-.605.581-1.1.779-1.1.199 0 .361-.27.361-.6 0-.33.184-.6.41-.6.225 0 .588-.469.806-1.043.687-1.806 9.771-11.111 12.557-12.861 1.425-.896 4.457-3.057 5.627-4.01.22-.18.67-.454 1-.611.33-.156 1.14-.639 1.8-1.073.66-.435 1.56-.972 2-1.195a30.32 30.32 0 001.4-.759c.33-.194 1.455-.747 2.5-1.229 1.045-.481 1.9-1.042 1.9-1.247 0-.205.326-.372.724-.372.397 0 1.072-.264 1.5-.587.427-.323 1.159-.593 1.627-.6.468-.007 1.075-.283 1.349-.613s.749-.6 1.057-.6c.307 0 1.538-.523 2.737-1.162 1.198-.64 2.903-1.285 3.79-1.435.886-.15 1.713-.437 1.838-.638.124-.201.63-.365 1.125-.365s1.249-.264 1.677-.587c.427-.323 1.237-.593 1.8-.6.562-.007 1.372-.277 1.8-.6.427-.323 1.367-.593 2.089-.6.722-.007 1.959-.283 2.749-.613.789-.33 1.702-.6 2.026-.6.325 0 1.158-.262 1.852-.583.693-.32 2.43-.763 3.86-.983 5.548-.856 7.815-1.318 8.18-1.669.209-.201 1.469-.376 2.8-.389 1.331-.013 3.32-.201 4.42-.418 1.1-.217 4.61-.565 7.8-.774 3.19-.209 6.664-.561 7.72-.782 2.478-.519 11.881-.519 15.373.001 1.489.221 4.597.585 6.907.808 8.932.863 11.864 1.254 13.6 1.813.99.319 2.284.579 2.876.578.592-.001 1.18.165 1.307.37.126.205 1.262.483 2.523.62 1.262.136 2.587.406 2.945.6.358.194 1.331.481 2.163.637.831.156 1.978.527 2.549.825.57.298 1.487.548 2.037.556.55.009 1.349.28 1.776.603.428.323 1.262.587 1.855.587s1.593.269 2.223.598c.63.328 1.439.598 1.797.6.358.001.875.272 1.149.602.274.33.915.6 1.425.6s1.03.166 1.156.369c.125.203.778.49 1.451.638.672.148 1.705.52 2.295.828.59.308 1.366.561 1.724.563.358.001.875.272 1.149.602.274.33.759.6 1.078.6.318 0 .849.27 1.179.6.507.507 2.143.868 2.143.473 0-.329-7.655-3.873-8.366-3.873-.245 0-.757-.174-1.139-.387-1.302-.724-6.687-2.74-9.695-3.629a377.884 377.884 0 01-6.584-2.035c-1.971-.632-3.964-1.149-4.429-1.149-.464 0-1.642-.247-2.616-.548-2.81-.869-7.396-1.781-12.371-2.46-2.53-.345-5.86-.816-7.4-1.045-4.621-.689-20.871-.776-27.8-.149m-38 2.002c-.55.314-1.563.578-2.251.586-.688.008-1.475.284-1.749.614s-.944.6-1.489.6c-.544 0-1.647.285-2.451.633-.803.349-2.051.889-2.774 1.2-.722.312-1.594.567-1.938.567-.343 0-1.102.239-1.686.531-.584.291-1.662.831-2.394 1.2-.733.368-1.566.669-1.851.669-.286 0-.743.27-1.017.6-.274.33-.904.6-1.4.6-.496 0-1.126.27-1.4.6-.274.33-.777.6-1.117.6-.341 0-.904.236-1.252.525-.347.289-1.441.862-2.431 1.275-.99.413-2.084.986-2.431 1.275-.348.289-.837.525-1.088.525-.72 0-3.681 1.642-3.681 2.04 0 .198-.347.36-.771.36-.425 0-1.042.27-1.372.6-.33.33-.71.6-.845.6-.227 0-2.563 1.551-3.012 2-.11.11-.896.555-1.746.988-.851.433-1.635 1.018-1.743 1.3-.108.282-.365.512-.57.512-.409 0-2.439 1.378-3.726 2.529a35.835 35.835 0 01-1.979 1.6c-1.181.884-8.387 7.972-9.222 9.071-.251.33-1.031 1.346-1.735 2.258-.703.911-1.279 1.841-1.279 2.066 0 .225-.144.469-.321.543-.485.201-3.279 5.898-3.279 6.685 0 .378-.221.909-.492 1.18-.505.505-.947 3.438-1.366 9.068-.222 2.991-.008 5.498 1.058 12.4.238 1.54.569 3.79.735 5 .166 1.21.795 3.82 1.399 5.8.603 1.98 1.392 4.59 1.752 5.8.658 2.21 1.007 3.069 2.245 5.532.368.733.669 1.508.669 1.722 0 .497 1.316 3.211 2.715 5.598 1.997 3.408 5.987 7.667 10.485 11.191 2.315 1.814 2.481 1.946 3.87 3.085.478.393 1.513 1.06 2.3 1.484.786.423 1.43.909 1.43 1.079 0 .17.229.309.509.309s1.45.619 2.599 1.376c2.229 1.468 9.353 5.024 10.065 5.024.235 0 .427.168.427.373s.405.486.9.623c1.316.366 3.941 1.407 5.162 2.047.584.306 1.424.557 1.867.557.444 0 1.406.301 2.139.669.732.369 1.81.909 2.394 1.2.584.292 1.604.531 2.267.531.664 0 1.716.253 2.339.562 1.282.636 4.445 1.473 6.532 1.729.77.094 1.967.427 2.66.74.694.313 1.807.569 2.474.569.668 0 1.659.169 2.203.376.544.207 2.581.467 4.526.578 3.942.225 3-.046-3.863-1.114-6.631-1.031-14.326-3.059-21.4-5.639-2.2-.803-4.462-1.604-5.027-1.781a13.609 13.609 0 01-1.8-.724c-.425-.22-2.843-1.366-5.373-2.545-12.137-5.659-22.519-13.397-27.84-20.751-2.788-3.854-6.653-12.719-8.108-18.6-.218-.88-.678-2.59-1.022-3.8-3.467-12.192-3.348-26.436.284-34 6.433-13.396 26.002-28.145 49.286-37.146 2.42-.936 4.76-1.861 5.2-2.055.44-.195 2.87-1.014 5.4-1.821 6.515-2.077 7.669-2.535 6.4-2.543-.55-.004-1.45.251-2 .565m156 .877c.55.112 1.149.411 1.33.663.221.308.277.261.17-.14-.091-.338-.671-.628-1.331-.663-1.007-.055-1.03-.036-.169.14m-192.8 1.489c-.55.3-1.72.861-2.6 1.248-.88.387-1.87.857-2.2 1.046-.33.188-.96.524-1.4.747-.44.223-1.34.76-2 1.193-.66.433-1.605.966-2.1 1.184-.495.218-.901.536-.903.706-.001.171-.676.758-1.5 1.306-.823.548-1.587 1.093-1.697 1.211-.11.117-1.01.828-2 1.579-1.813 1.375-10.4 9.794-10.4 10.197 0 .12-.315.547-.7.95-1.76 1.843-3.443 3.944-3.818 4.766-.226.496-.566.901-.756.901-.19 0-.521.405-.735.9-.582 1.345-1.33 2.461-1.891 2.82-.275.176-.5.488-.5.694 0 .206-.54 1.252-1.2 2.324-.66 1.073-1.2 2.246-1.2 2.606 0 .361-.147.656-.326.656-.372 0-2.067 3.907-2.087 4.808-.007.325-.277.941-.6 1.368-.323.428-.593 1.148-.6 1.6-.007.453-.277 1.173-.6 1.6-.323.428-.587 1.288-.587 1.913s-.293 1.806-.651 2.624c-.817 1.864-1.217 19.092-.601 25.887.521 5.754 1.953 11.461 3.185 12.693.257.257.475.746.484 1.087.01.341.459 1.34.998 2.22.539.88 1.101 1.87 1.249 2.2.309.69 2.465 3.605 3.105 4.2.237.22 1.136 1.3 1.998 2.4 1.58 2.017 8.041 8.487 10.892 10.908l2.941 2.496c.77.654 1.715 1.292 2.1 1.419s.7.403.7.614c0 .21.405.558.9.772 1.061.459 2.266 1.209 2.969 1.849.277.251 1.275.848 2.217 1.326.943.478 2.254 1.215 2.914 1.638.66.423 1.47.875 1.8 1.005.33.13 1.078.492 1.662.804.584.313 1.349.569 1.7.569s.638.177.638.392c0 .216.495.513 1.1.66.605.147 1.455.511 1.889.808.434.297 1.154.546 1.6.553.446.007 1.16.277 1.587.6.428.323 1.088.587 1.467.587.38 0 .75.176.824.391.073.215.763.5 1.533.633 2.032.35.051-.635-7.8-3.881-3.114-1.287-5.908-2.667-10-4.937-13.501-7.49-29.831-24.852-32.035-34.056-.151-.633-.405-1.33-.563-1.55-.32-.446-1.028-4.134-1.381-7.2-1.704-14.769-.021-28.961 4.613-38.901.641-1.376 1.166-2.584 1.166-2.686 0-.37 3.769-6.417 4.08-6.546a.58.58 0 00.32-.498c0-.887 6.405-8.678 10.593-12.885 6.876-6.908 14.734-12.64 20.607-15.031 1.21-.493 2.56-1.053 3-1.245a20.12 20.12 0 011.4-.547c.33-.109.06-.207-.6-.219-.66-.011-1.65.224-2.2.524M58.893 114c0 .77.082 1.085.183.7.1-.385.1-1.015 0-1.4-.101-.385-.183-.07-.183.7m4.707 4.2c0 2.671.543 3.48.985 1.467.387-1.76.122-4.067-.467-4.067-.371 0-.518.738-.518 2.6m199.6 1.306c0 .257 2.047 1.309 4.4 2.26.33.134 1.14.594 1.8 1.024.66.43 2.145 1.251 3.3 1.825 1.155.574 2.102 1.165 2.105 1.314.002.149.767.629 1.7 1.067 1.443.679 6.456 4.112 8.8 6.028.387.317.813.576.945.576.803 0 11.75 11.109 11.75 11.923 0 .226.135.47.3.544.408.181 4.5 6.179 4.502 6.598 0 .184.54 1.415 1.198 2.735.658 1.32 1.204 2.76 1.213 3.2.008.44.273 1.25.587 1.8.314.55.581 1.63.592 2.4.029 1.994 1.143 5.531 1.181 3.749.033-1.544-1.145-7.01-1.623-7.529-.193-.209-.35-.651-.35-.982 0-3.489-7.475-14.389-14.063-20.509-4.93-4.579-7.482-6.483-15.737-11.746-4.605-2.936-12.6-6.919-12.6-6.277m60.087 2.194c.512.495 1.358 1.35 1.881 1.9.704.741.65.586-.207-.6-1.207-1.67-1.742-2.184-2.283-2.194-.178-.003.096.399.609.894m10.084 10.197c.644.712 1.259 1.207 1.367 1.099.107-.108.12-.241.029-.296-.092-.055-.707-.549-1.367-1.099l-1.2-.998 1.171 1.294m-276.466 2.444c-.493 1.023-1.709 3.389-2.703 5.259-.994 1.87-2.007 4.165-2.252 5.1-.245.935-.588 1.7-.762 1.7-.175 0-.444.765-.598 1.7-.154.935-.44 1.898-.635 2.14-.195.243-.469 1.323-.61 2.4-.14 1.078-.424 2.175-.63 2.437-1.544 1.965-1.505 26.352.046 29.25.241.451.439 1.468.439 2.26 0 .791.242 2.018.537 2.726.296.708.667 1.98.826 2.827.263 1.405.978 3.358 1.886 5.155.193.382.351.984.351 1.338 0 .354.254 1.121.564 1.705 2.743 5.161 4.245 8.887 4.461 11.062.13 1.32.39 2.76.577 3.2.187.44.441 1.07.566 1.4.294.78.034-1.431-.612-5.2-.307-1.794-.965-3.771-1.635-4.918-.617-1.054-1.121-2-1.121-2.102 0-.101-.447-1.11-.993-2.243-.547-1.132-1.107-2.664-1.246-3.402-.138-.739-.387-1.428-.553-1.53-.598-.369-2.678-8-3.873-14.205-1.04-5.4-1.052-21.213-.02-25.6.782-3.319 1.72-6.763 2.343-8.6.223-.66.58-1.784.793-2.499.212-.714 1.647-3.751 3.188-6.748 1.54-2.997 2.747-5.679 2.681-5.96-.066-.281-.523.326-1.015 1.348m132.53 9.958c-.054.054-4.298.299-9.431.544-5.699.271-9.968.659-10.968.996-1.849.623-.919.592 7.964-.263 6.524-.627 30.365-.493 36.4.206 6.532.757 7.758.767 5.8.047-2.018-.741-29.155-2.136-29.765-1.53m-29.635 2.71c-1.1.283-2.687.531-3.526.553-.84.021-1.92.253-2.4.515-.481.262-1.684.597-2.674.744-2.083.31-5.271 1.063-7 1.654-.66.226-1.92.556-2.8.733-1.968.396-5.067 1.518-5.58 2.02-.209.205-.811.372-1.338.372s-1.436.249-2.02.553a263.23 263.23 0 01-4.462 2.201c-4.476 2.169-9.366 4.894-9.533 5.312-.074.184-.361.334-.639.334s-.876.315-1.329.7c-.454.385-1.222.97-1.708 1.3-3.994 2.712-10.503 8.955-12.677 12.158-.613.903-1.249 1.702-1.414 1.775-.165.074-.3.389-.3.7 0 .312-.159.567-.354.567-.678 0-3.646 5.43-3.646 6.67 0 .672.402 1.741.894 2.376.491.635 1.076 1.402 1.3 1.706.721.979 7.994 8.048 8.28 8.048.152 0 .868.54 1.59 1.2.723.66 1.465 1.2 1.649 1.2.29 0 3.136 1.989 4.57 3.194.266.223.649.406.851.406.202 0 .592.27.866.6.274.33.836.6 1.249.6.413 0 .751.184.751.41 0 .225.474.59 1.052.81.579.22 1.58.776 2.225 1.235.645.459 1.933 1.239 2.863 1.733l2.475 1.317c.432.23 1.73.838 2.885 1.351 1.155.513 2.1 1.07 2.1 1.238 0 .168.287.306.638.306.351 0 1.116.256 1.7.569.967.518 3.853 1.812 5.862 2.628.44.179 1.97.732 3.4 1.229 1.43.497 2.78 1.034 3 1.193.429.31 3.633 1.123 5.6 1.421 1.506.229-.04-.423-4.2-1.771-3.615-1.17-8.862-3.07-9.809-3.55a54.188 54.188 0 00-2.191-1.014c-3.798-1.663-8.971-4.261-12.297-6.176-2.033-1.171-3.878-2.129-4.1-2.129-.221 0-.403-.151-.403-.336 0-.184-.462-.546-1.026-.803-.951-.434-7.725-4.789-8.174-5.255-.11-.115-.927-.701-1.816-1.303-2.938-1.991-9.426-8.672-10.683-11.002-.98-1.816-.95-1.937 1.399-5.54 7.998-12.27 18.169-20.272 34.7-27.302 1.928-.82 9.838-3.221 13.8-4.188 8.393-2.05 8.997-2.167 18-3.469 1.959-.283 1.943-.29-.8-.298-1.54-.005-3.7.222-4.8.505m61.8-.345c.55.086 1.81.349 2.8.584.99.235 2.79.59 4 .789 5.864.964 18.745 4.379 19.78 5.245.643.538 1.663.401 1.113-.149-.646-.646-3.139-1.549-5.293-1.917-.99-.169-3.15-.781-4.8-1.359s-3.63-1.059-4.4-1.068c-.77-.01-1.85-.275-2.4-.589-.55-.314-1.9-.584-3-.6-1.1-.016-2.45-.286-3-.6-.591-.338-1.982-.555-3.4-.531-1.32.022-1.95.11-1.4.195m133.2 2.294c0 .087.705.225 1.566.307.862.083 1.481.011 1.377-.158-.19-.307-2.943-.447-2.943-.149m-.1 2.924a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m-103.3 2.397c8.648 3.448 18.173 8.018 20.6 9.885.33.254 1.41.891 2.4 1.417 9.148 4.856 22.4 16.664 22.4 19.96 0 2.186-7.001 10.305-13.4 15.54-1.98 1.619-3.855 3.153-4.166 3.409-3.203 2.63-13.54 8.439-19.434 10.922-2.856 1.203-6.601 2.576-9.2 3.374-1.54.473-3.43 1.097-4.2 1.388-.77.291-2.84.841-4.6 1.223-1.76.381-3.74.864-4.4 1.073-8.937 2.831-41.258 5.296-51.656 3.939a212.233 212.233 0 00-7.544-.808c-2.2-.189-5.08-.551-6.4-.804l-5.6-1.07c-2.962-.566-4.038-.818-9-2.107-3.726-.968-3.911-.986-2.986-.299.448.332 1.708.734 2.8.892 1.092.158 2.166.429 2.386.601.22.171 1.48.526 2.8.788 1.32.261 3.12.63 4 .819.88.189 2.354.352 3.276.362.922.009 1.78.184 1.907.389.126.205 1.262.48 2.523.612 1.262.132 4.691.531 7.62.886 6.005.73 30.586.573 35.874-.228l5.6-.85 6.4-.968c5.822-.879 8.254-1.371 8.742-1.771.252-.207 1.538-.505 2.858-.664 1.32-.158 2.58-.425 2.8-.592.22-.168.997-.432 1.727-.589.73-.156 1.81-.535 2.4-.843.59-.308 1.319-.561 1.619-.563 1.188-.005 10.384-3.334 11.843-4.287.434-.283 1.109-.515 1.5-.515s.711-.18.711-.4c0-.22.232-.4.515-.4.284 0 1.139-.333 1.9-.741 4.442-2.377 6.412-3.516 8.318-4.811a121.84 121.84 0 012.783-1.848c.358-.22.878-.607 1.156-.861.279-.253 1.142-.853 1.917-1.332.776-.48 1.411-1.038 1.411-1.24 0-.202.203-.367.451-.367 1.413 0 12.749-11.349 12.749-12.763 0-.218.251-.541.558-.717.307-.176.952-1.078 1.432-2.004 1.103-2.125.911-2.919-1.29-5.345-.385-.424-.7-.861-.7-.971 0-.41-7.463-7.47-9-8.514-.88-.597-1.66-1.221-1.733-1.386a.566.566 0 00-.479-.3c-.19 0-1.535-.9-2.988-2s-2.903-2-3.221-2c-.319 0-.579-.148-.579-.329 0-.181-.855-.75-1.9-1.264s-2.556-1.446-3.358-2.071c-.801-.625-1.736-1.136-2.076-1.136-.34 0-.719-.162-.841-.36-.123-.198-2.158-1.301-4.524-2.45-4.152-2.018-5.396-2.589-8.195-3.757-.718-.299-1.987-.834-2.82-1.189-.832-.354-1.912-.635-2.4-.623-.639.014-.441.198.714.658m-76.4 2.547c-5.635 1.064-5.802 1.138-2.285 1.018 1.833-.063 3.522-.321 3.78-.579.631-.631 11.24-.635 12.418-.005.473.253 2.576.518 4.673.587l3.814.127-3-.592c-3.613-.713-16.596-1.085-19.4-.556M334.928 160c0 1.43.073 2.015.161 1.3.089-.715.089-1.885 0-2.6-.088-.715-.161-.13-.161 1.3m-167.421-1.774c-.124.124-1.279.473-2.566.776-3.131.735-15.841 4.964-16.321 5.429-.209.203-.659.37-1 .371-.341.002-1.16.287-1.82.633-.66.347-2.19 1.052-3.4 1.566-13.372 5.688-26.23 13.837-25.932 16.435.206 1.8 1.287 1.652 3.842-.526 3.742-3.189 10.907-7.513 17.195-10.376a818.234 818.234 0 006.01-2.771c1.604-.75 3.065-1.363 3.249-1.363.183 0 1.661-.56 3.284-1.244 2.771-1.168 3.645-1.502 7.152-2.734 2.006-.705 6.931-2.053 14.8-4.05 2.585-.656 13.872-.917 18.8-.434 4.915.481 7.899.943 15 2.322 2.86.555 6.01 1.141 7 1.301.99.16 2.43.489 3.2.732.77.242 2.93.818 4.8 1.279 6.464 1.595 10.618 2.817 15.2 4.47 5.657 2.041 7.348 2.204 7.52.726.252-2.17-22.951-9.358-36.92-11.436-1.144-.17-1.164-.149-.424.445.428.343 1.508.625 2.4.628 1.632.004 6.652 1.124 8.75 1.951.619.244 1.675.444 2.346.444 1.099 0 3.078.513 6.528 1.691.66.225 1.83.489 2.6.586.77.097 1.94.415 2.6.706 3.419 1.506 4.309 1.817 5.201 1.817.536 0 1.655.339 2.487.754.831.415 2.097.999 2.812 1.298.767.32 1.3.831 1.3 1.246 0 .724-1.125.963-1.82.386-.209-.174-1.73-.742-3.38-1.263-1.65-.522-3.567-1.19-4.26-1.485-.694-.295-1.538-.536-1.877-.536-.339 0-.721-.17-.849-.377s-1.083-.497-2.123-.643c-2.082-.293-5.505-1.232-6.577-1.804-.378-.201-1.718-.487-2.979-.635-1.26-.148-2.751-.509-3.313-.803-.562-.293-1.585-.534-2.273-.536-.688-.001-1.898-.272-2.687-.602-.79-.33-2.142-.6-3.003-.6-.862 0-2.083-.269-2.713-.598-.699-.364-2.247-.598-3.966-.6-1.551-.001-3.014-.196-3.251-.433-1.59-1.59-25.326-1.667-28.329-.091-.44.231-1.651.543-2.691.694-1.04.151-1.995.444-2.123.651-.128.207-.898.378-1.71.379-.812.002-1.959.255-2.549.563-.59.308-1.623.68-2.295.828-.673.148-1.326.435-1.451.638-.126.203-.683.369-1.24.369-.556 0-2.178.54-3.604 1.2-1.426.66-2.738 1.2-2.915 1.2-.313 0-3.368 1.288-6.622 2.792-.88.406-2.5 1.126-3.6 1.6-3.212 1.381-10.662 5.279-11.743 6.143-.618.494-1.972 1.303-2.857 1.708-.33.15-1.902 1.327-3.494 2.615-2.921 2.364-4.106 2.86-4.106 1.719 0-.807 1.986-2.626 5-4.58 1.32-.855 2.59-1.719 2.823-1.92.232-.2 1.222-.795 2.199-1.321.976-.526 1.866-1.064 1.977-1.196.11-.131 1.731-.997 3.601-1.923 1.87-.925 3.67-1.827 4-2.003 2.443-1.304 3.202-1.634 3.762-1.634.351 0 .638-.18.638-.4 0-.22.235-.4.523-.4.288 0 1.773-.629 3.3-1.399 1.527-.769 2.996-1.399 3.263-1.4.448-.001 1.499-.406 4.714-1.816.66-.289 1.74-.609 2.4-.711.66-.102 2.441-.655 3.959-1.23 1.517-.574 3.142-1.044 3.611-1.044.468 0 1.207-.244 1.641-.542.434-.297 1.576-.643 2.537-.768 1.868-.242 3.267-1.09 1.799-1.09-.448 0-.915.102-1.04.226m31.893.354c1.1.299 2.9.538 4 .532l2-.012-1.8-.358c-.99-.197-2.79-.436-4-.532l-2.2-.174 2 .544M86.142 165.8c-.001 1.98.066 2.84.15 1.912.084-.928.085-2.548.003-3.6-.083-1.052-.152-.292-.153 1.688m247.923 2.4c-.294 2.64-.716 6.06-.937 7.6-.221 1.54-.473 3.43-.562 4.2l-.16 1.4.579-1.2c.318-.66.587-1.843.597-2.63.01-.786.297-3.052.638-5.037.341-1.984.566-4.851.5-6.37-.118-2.718-.129-2.684-.655 2.037m14.128-2.8c.525 2.154.156 10.745-.6 14-2.647 11.396-4.348 16.506-7.458 22.4l-1.473 2.8c-.463.88-1.636 2.77-2.608 4.2-6.344 9.334-7.962 11.22-16.82 19.6-4.161 3.936-14.481 10.541-20.234 12.95-1.98.828-3.96 1.663-4.4 1.854-.838.363-4.599 1.566-8 2.557-1.941.566-1.958.584-.586.611 1.429.028 5.866-1.326 6.566-2.004.209-.202.85-.368 1.424-.368.573 0 1.392-.264 1.82-.587.427-.323 1-.593 1.273-.6.855-.022 8.903-4.027 8.903-4.43 0-.211.32-.383.711-.383.391 0 1.263-.495 1.938-1.1.674-.605 1.905-1.455 2.735-1.888.83-.433 1.597-1.018 1.705-1.3.108-.282.362-.512.564-.512.511 0 4.347-2.899 4.347-3.285 0-.173.163-.315.361-.315.765 0 7.761-6.702 10.239-9.808.66-.827 1.519-1.843 1.908-2.257.39-.413 1.543-1.963 2.562-3.443 1.019-1.481 2.661-3.862 3.649-5.292 1.919-2.777 4.476-7.496 4.479-8.267.001-.256.137-.526.302-.6.455-.202 2.1-3.856 2.1-4.664 0-.39.166-.88.368-1.089.537-.554 2.032-5.001 2.032-6.043 0-.489.163-.991.363-1.114.199-.123.49-1.169.646-2.323.156-1.155.434-2.387.618-2.738 1.216-2.318 2.019-13.766 1.105-15.762-.403-.88-.646-1.24-.539-.8m-40.469 4.8c.002 1.32.077 1.812.166 1.093.089-.719.087-1.799-.004-2.4s-.164-.013-.162 1.307m-221.313 1c-.145 10.95 12.553 29.72 27.466 40.6 2.149 1.568 10.927 6.111 15.785 8.169a707.198 707.198 0 015.738 2.451c.44.198 2.42.878 4.4 1.513 8.822 2.826 8.949 2.857 7.624 1.854-.428-.323-1.148-.588-1.6-.589-.453-.002-1.34-.272-1.97-.6-.63-.329-1.53-.599-2-.6-.47-.002-1.37-.272-2-.6-.63-.329-1.45-.598-1.823-.598s-1.027-.264-1.455-.587c-.427-.323-1.108-.593-1.514-.6-.406-.007-1.216-.276-1.8-.597-.584-.32-1.962-.96-3.062-1.421-3.509-1.471-3.988-1.681-4.6-2.016-.33-.181-1.59-.83-2.8-1.442-1.21-.613-2.83-1.498-3.6-1.967-.77-.469-1.85-.994-2.4-1.165-.55-.172-1.09-.44-1.2-.596-.11-.156-1.19-.974-2.4-1.818-1.21-.845-2.409-1.728-2.665-1.963-.256-.236-1.056-.878-1.776-1.428-1.349-1.03-3.453-3.093-6.983-6.847-2.772-2.949-8.498-11.466-10.321-15.353-.826-1.76-1.674-3.517-1.884-3.905-.768-1.411-1.562-4.211-1.929-6.798-.412-2.913-1.207-4.912-1.231-3.097m109.189 5.873c-8.194 1.462-16.122 3.677-13.295 3.715.498.007 1.218-.147 1.6-.341 1.01-.513 3.854-1.227 7.366-1.849 1.689-.299 3.759-.735 4.6-.969 2.918-.81 7.329-.443 7.329.61 0 .647-.905.877-4.4 1.119-3.291.227-9.429 1.216-11 1.771-.66.233-2.37.743-3.8 1.133-1.43.39-3.05.939-3.6 1.221-.55.282-1.322.513-1.716.515-.842.002-3.718 1.41-4.08 1.996-.349.564.064.507 1.11-.153.822-.518 4.052-1.665 8.886-3.156 4.403-1.357 9.448-2.344 15.8-3.09a440.86 440.86 0 003.127-.373c.069-.012.069-.517 0-1.122-.129-1.118-4.352-1.665-7.927-1.027m73.982 2.827c-4.434 5.645-10.031 10.947-18.182 17.226-2.232 1.719-12.495 7.256-14.6 7.877-.55.162-1.18.429-1.4.594-.357.266-1.872.746-8.2 2.595-3.771 1.102-10.157 2.351-14 2.739-.77.077-.14.171 1.4.208 1.54.037 4.06-.225 5.6-.582 5.807-1.348 10.968-2.789 12.914-3.606.722-.303 1.645-.551 2.051-.551.405 0 .961-.27 1.235-.6.274-.33.82-.6 1.214-.6.903 0 8.786-4.002 8.786-4.46 0-.187.289-.34.642-.34.354 0 1.325-.54 2.158-1.2.833-.66 1.632-1.2 1.775-1.2 1.961 0 16.437-13.785 20.344-19.372.857-1.227 2.281-1.39 2.281-.261 0 .421-.135.826-.3.9-.165.073-.789.853-1.387 1.733-2.08 3.061-12.444 13.8-13.317 13.8-.123 0-.751.54-1.396 1.2-.645.66-1.324 1.2-1.509 1.2-.185 0-.918.482-1.629 1.071-1.359 1.126-2.468 1.826-3.962 2.502-.495.224-.9.592-.9.817 0 .226-.347.41-.771.41-.425 0-1.01.225-1.3.5-.291.275-2.329 1.369-4.529 2.431-5.69 2.747-6.087 2.915-9.2 3.908-1.54.492-2.98 1.028-3.2 1.192-.39.291-1.64.583-7.8 1.824-11.521 2.321-30.125 3.115-40.915 1.747a352.22 352.22 0 00-6.885-.785c-5.343-.546-6.768-.909-6.933-1.766-.128-.661.059-.712 1.795-.49 1.066.136 3.918.319 6.338.407 3.844.139 4.021.119 1.4-.155a144.88 144.88 0 01-5.879-.759c-3.348-.518-4.121-.33-4.121.999 0 1.644 1.185 1.904 14.4 3.161 7.685.731 25.549.622 31.1-.19 6.552-.958 8.433-1.257 11.143-1.769 1.563-.295 3.036-.657 3.273-.803.237-.146 1.208-.426 2.157-.621.95-.196 2.717-.747 3.927-1.225 1.21-.478 2.765-1.038 3.456-1.244 3.785-1.13 17.622-9.031 20.769-11.859.431-.387 1.501-1.313 2.379-2.059 8.86-7.524 15.299-15.581 13.716-17.164-.892-.892-1.496-.489-3.938 2.62M178 181.591c-2.251.854-3.514 1.389-9.6 4.059-3.487 1.53-6 3.006-6 3.522 0 1.87 1.091 2.022 4.288.598a414.483 414.483 0 013.712-1.632c3.256-1.402 3.814-1.72 3.039-1.729-.419-.005-1.904.531-3.301 1.191-1.397.66-2.788 1.2-3.09 1.2-.303 0-.774.27-1.048.6-.605.729-3.344.832-3.106.117.156-.468 1.889-1.665 3.106-2.145.33-.13 1.32-.564 2.2-.964.88-.4 2.68-1.205 4-1.788 1.32-.584 2.94-1.317 3.6-1.627.66-.311 1.728-.689 2.373-.841a11.37 11.37 0 002.2-.811c1.516-.791-.073-.624-2.373.25m154.032.685c-.018.482-.192.975-.387 1.096-.195.121-.478.896-.63 1.724-.355 1.939-3.379 8.352-5.089 10.792l-1.611 2.303c-4.329 6.226-21.01 22.278-27.948 26.894-2.134 1.42-6.489 3.673-8.967 4.638-4.795 1.869-7.112 2.673-10 3.47-1.76.485-4.044 1.136-5.075 1.445-1.031.309-2.186.562-2.565.562s-1.606.258-2.725.574a89.975 89.975 0 01-4.035 1.02c-3.794.844-4.622 1.211-2.2.973 1.21-.119 2.371-.385 2.58-.592.209-.206 1.12-.375 2.024-.375.903 0 1.992-.264 2.42-.587.427-.323 1.496-.601 2.376-.618.88-.016 2.32-.29 3.2-.607.88-.317 1.971-.579 2.424-.582.452-.003 1.172-.27 1.6-.593.427-.323 1.327-.593 2-.6.672-.007 1.572-.277 2-.6.427-.323 1.046-.594 1.376-.603.33-.008 1.116-.284 1.746-.612.63-.329 1.553-.598 2.051-.598.498 0 1.129-.27 1.403-.6.274-.33.754-.6 1.066-.6.511 0 3.266-1.392 6.831-3.451.714-.412 1.299-.884 1.3-1.049.002-.165.2-.3.44-.3.636 0 4.601-3.221 8.368-6.8a647.46 647.46 0 015.811-5.4c5.503-5.06 9.381-9.211 12.169-13.023.875-1.197 1.731-2.367 1.903-2.599a21.9 21.9 0 00.791-1.2c2.638-4.289 3.321-5.502 3.323-5.907.002-.259.264-.972.583-1.584.843-1.615 1.938-5.735 1.69-6.355-.118-.298-.226-.146-.243.344m-93.446 3.695c-1.694 1.4-5.795 3.637-9.786 5.339-4.244 1.81-15.221 4.542-21.299 5.301-1.968.246-2.923 1.145-2.471 2.324.235.612 2.094 1.274 2.484.884.121-.12-.053-.219-.385-.219-.333 0-.9-.326-1.262-.725-.845-.935 1.407-2.065 4.167-2.093.971-.009 2.486-.277 3.366-.594.88-.317 2.23-.58 3-.584.77-.005 1.916-.278 2.546-.606.63-.329 1.62-.599 2.2-.6.58-.002 1.57-.272 2.2-.6.63-.329 1.502-.598 1.938-.598.436 0 1.27-.243 1.854-.539 2.108-1.071 3.883-1.799 4.962-2.035.605-.133 1.1-.404 1.1-.602 0-.198.54-.479 1.2-.624.66-.145 1.2-.41 1.2-.588 0-.179.405-.432.9-.562.495-.13 1.656-.965 2.58-1.854 1.606-1.547 1.699-1.583 2.114-.807.292.546.299.811.02.811a.408.408 0 00-.414.4c0 .447-1.451 2-1.869 2-.147 0-.552.25-.9.555-.879.772-5.237 3.045-5.838 3.045-.272 0-.719.27-.993.6-.274.33-.881.603-1.349.606-.98.007-2.138.64-1.797.982.454.454 9.165-3.612 11.057-5.16 3.061-2.506 3.813-5.028 1.5-5.028-.068 0-.98.707-2.025 1.571m-176.532 3.125c-.141 2.333 2.723 10.437 4.816 13.624.622.946 1.13 1.8 1.13 1.899 0 .593 4.445 6.233 7.268 9.221 8.582 9.085 16.571 15.3 25.132 19.55a498.234 498.234 0 015.601 2.82c.991.513 2.701 1.232 3.8 1.598 1.1.366 2.719.992 3.599 1.392.88.4 2.32 1.025 3.2 1.39.88.365 1.96.821 2.4 1.014.44.192 1.43.472 2.2.621.77.149 1.886.52 2.48.823.594.304 1.478.552 1.965.552.487 0 1.801.261 2.92.58 11.393 3.247 43.887 5.693 70.235 5.287 20.199-.312 33.503-1.651 41.8-4.207 2.927-.902 10.209-2.683 15-3.671 2.535-.522 11.453-2.622 16.2-3.814 2.2-.553 4.72-1.174 5.6-1.38.88-.206 2.32-.642 3.2-.968l1.6-.592-1.424-.017c-.782-.01-1.772.246-2.2.569-.427.323-1.316.594-1.976.603-.66.008-1.659.254-2.22.547-.561.293-1.987.647-3.169.787-1.183.14-2.335.44-2.56.665-.226.226-.993.411-1.705.411-.712 0-1.801.2-2.42.444-1.485.585-5.381 1.512-8.126 1.933-1.21.186-2.707.537-3.326.78-.619.244-1.672.443-2.34.443-.667 0-1.78.245-2.474.545-.693.3-2.16.734-3.26.963-2.34.489-5.345 1.265-6.2 1.6-.706.277-5.359 1.097-9.6 1.691-1.65.231-3.45.582-4 .78-.55.198-4.51.474-8.8.612-4.29.139-8.97.407-10.4.597-5.161.685-47.428-.356-49.4-1.217-.44-.192-3.267-.537-6.282-.767-3.015-.23-6.415-.595-7.555-.811-1.14-.216-2.937-.393-3.994-.393-1.057 0-2.024-.166-2.15-.369-.125-.202-1.441-.49-2.923-.638-1.483-.149-3.467-.523-4.41-.832-.943-.308-2.293-.567-3-.574-.707-.007-1.635-.277-2.062-.6-.428-.323-1.272-.587-1.877-.587s-1.201-.164-1.325-.365c-.125-.201-.935-.485-1.801-.631-.866-.147-1.787-.522-2.047-.835-.26-.313-.855-.575-1.323-.582-.468-.007-1.2-.277-1.627-.6-.428-.323-1.103-.587-1.5-.587-.398 0-.724-.172-.724-.382 0-.21-.675-.494-1.5-.631-1.766-.293-4.166-1.378-4.62-2.087-.176-.275-.739-.5-1.251-.5-.512 0-1.155-.27-1.429-.6-.274-.33-.821-.6-1.216-.6-.394 0-.777-.149-.851-.332-.073-.183-1.123-.816-2.333-1.407-2.462-1.204-3.51-1.826-4.312-2.561-.3-.275-.783-.5-1.074-.5-.291 0-.632-.27-.759-.6-.126-.33-.429-.6-.673-.6-.427 0-4.964-3.266-5.782-4.162-.22-.241-1.568-1.428-2.995-2.638-2.81-2.382-7.065-6.584-8.423-8.319-.466-.594-1.553-1.835-2.415-2.758-.862-.922-1.567-1.784-1.567-1.916 0-.342-1.742-2.781-2.1-2.94a.568.568 0 01-.3-.48c0-.191-.527-1.128-1.171-2.082s-1.294-2.225-1.444-2.824c-.151-.599-.434-1.187-.629-1.308-.196-.121-.357-.525-.358-.897-.002-.372-.243-1.137-.537-1.7-.294-.563-.661-1.814-.815-2.78-.155-.966-.436-1.945-.625-2.176-.189-.231-.427-.87-.528-1.42-.169-.916-.189-.925-.239-.104m17.149 2.355c.016 1.947 4.436 11.315 7.474 15.84 3.302 4.919 13.993 13.776 20.723 17.168.66.333 2.55 1.343 4.2 2.245 3.508 1.918 14.464 6.671 16.315 7.077.702.154 1.379.447 1.504.65.126.203.623.363 1.105.356.856-.012.859-.026.1-.6-.428-.323-1.096-.587-1.487-.587-.39 0-1.391-.29-2.223-.644-3.537-1.506-4.369-1.878-5.376-2.402-.584-.305-1.417-.554-1.851-.554-.434 0-1.013-.27-1.287-.6-.274-.33-.915-.6-1.425-.6s-1.046-.191-1.19-.425c-.145-.233-.65-.593-1.124-.799a19.584 19.584 0 01-1.561-.775c-1.655-.948-2.216-1.243-4.3-2.26-1.901-.928-3.838-2.178-9.789-6.314-4.476-3.111-12.611-11.087-12.611-12.365 0-.122-.54-1.022-1.2-2-.66-.978-1.2-2.056-1.2-2.396 0-.341-.183-.732-.406-.87-.66-.407-1.994-3.287-1.994-4.304 0-.516-.264-1.288-.587-1.716-.323-.427-.593-1.159-.6-1.627-.007-.468-.283-1.075-.613-1.349s-.599-.341-.597-.149M224.4 195.4c-.55.314-1.401.578-1.892.586-.49.008-1.57.263-2.4.566-1.408.516-3.157.875-9.094 1.863-1.313.219-2.573.598-2.8.844-.302.326-.035.373.986.176.77-.15 2.84-.533 4.6-.852 1.76-.319 4.19-.837 5.4-1.15 5.389-1.396 6.662-1.757 7.6-2.157l1-.425-1.2-.011c-.66-.007-1.65.246-2.2.56M183 211.787c3.956.797 22.647.789 26-.011l2.4-.573-3.6.299c-4.536.376-17.869.378-23.4.004l-4.2-.284 2.8.565m-123.793 5.779c-.012 1.741 2.944 7.288 5.111 9.593 3.263 3.469 6.953.517 3.908-3.128-.784-.939-1.426-1.78-1.426-1.869 0-.534 1.005.036 2.36 1.338 4.27 4.102 6.056 5.7 6.37 5.7.19 0 .672.36 1.07.8.398.44.966.8 1.262.8.296 0 .538.184.538.41 0 .225.405.585.9.799 1.345.582 2.461 1.33 2.82 1.891.176.275.581.5.9.5.319 0 .58.162.58.361 0 .198.495.558 1.1.799.605.242 1.82.881 2.7 1.422.88.541 1.921.991 2.313 1.001.391.009.816.287.942.617.127.33.467.6.755.6.289 0 1.035.248 1.658.551 2.188 1.065 3.953 1.783 6.132 2.495 1.21.396 2.428.887 2.707 1.092.279.204 1.179.51 2 .678 1.543.316 3.37.924 5.553 1.85.694.294 1.954.521 2.8.506l1.54-.028-2-.591c-1.1-.326-3.26-.961-4.8-1.412-2.619-.766-4.833-1.549-10.2-3.605-4.503-1.725-10.374-4.774-14.319-7.436-1.386-.935-2.62-1.7-2.743-1.7-1.003 0-11.754-9.66-14.171-12.733-.428-.544-.887-.88-1.021-.747-.608.608.992 3.67 3.596 6.88 1.33 1.64.862 3.003-1.029 2.993-2.028-.011-4.175-2.672-6.448-7.993-.878-2.056-1.455-3.018-1.458-2.434m73.593 17.823c2.207.863 6.711 2.104 10.2 2.81 1.76.356 4.28.894 5.6 1.197 13.359 3.058 34.125 3.232 52.2.435 2.09-.323 6.806-1.032 10.479-1.576 3.674-.543 7.274-1.169 8-1.391.727-.222 2.671-.62 4.321-.885 6.259-1.005 6.497-1.075 3.8-1.111-1.32-.018-3.12.227-4 .544-.88.317-2.23.58-3 .584-.77.005-1.916.278-2.546.606-.63.329-2.16.606-3.4.615-1.24.01-3.064.203-4.054.43-.99.227-2.97.55-4.4.717-1.43.167-3.23.498-4 .734-.77.237-3.152.54-5.294.674-2.142.134-4.392.449-5 .7-1.585.655-30.651.601-32.306-.06-.66-.263-2.91-.57-5-.682-2.09-.111-4.367-.456-5.06-.766-.694-.31-1.774-.567-2.4-.57-.627-.003-1.86-.265-2.74-.582-.88-.317-2.254-.585-3.054-.594-.8-.01-1.97-.287-2.6-.616-.63-.328-1.44-.598-1.8-.6-.36-.001-1.17-.271-1.8-.6-.63-.328-1.686-.589-2.346-.579l-1.2.018 1.4.548m-14.4 3.211c.274.33.881.606 1.349.613.468.007 1.2.277 1.627.6.428.323 1.247.587 1.82.587.574 0 1.256.212 1.514.47.259.259 1.33.603 2.38.765 3.795.584 8.739 1.537 10.107 1.946.769.231 2.389.43 3.6.443 1.212.013 3.103.195 4.203.404 1.1.209 3.8.557 6 .774 2.2.216 5.53.563 7.4.77 1.87.208 5.47.36 8 .339l4.6-.039-4.2-.316c-13.721-1.034-24.077-2.139-29.759-3.174a870.235 870.235 0 00-6.828-1.218c-2.947-.505-6.904-1.602-9.813-2.719-2.623-1.007-2.633-1.008-2-.245m41-.118c1.703 1.094 31.108 1.081 32.8-.015.672-.435.321-.466-2.2-.193-3.846.417-23.552.424-28 .01-2.837-.264-3.267-.232-2.6.198m96.6-.12c-.33.186-1.68.536-3 .776-2.327.425-9.505 2.137-14.4 3.435-5.413 1.435-12.914 2.591-22 3.39l-3.6.316 3.8.06c2.09.033 5.33-.21 7.2-.539 1.87-.329 4.153-.599 5.074-.599.921-.001 2.181-.2 2.8-.444.619-.243 2.116-.582 3.326-.753 1.21-.171 2.785-.512 3.5-.757l2.6-.894c.715-.245 2.303-.582 3.529-.748 1.226-.165 2.609-.504 3.074-.753.464-.249 1.402-.452 2.084-.452.681 0 1.885-.27 2.675-.6.789-.33 1.909-.602 2.487-.605 1.457-.008 2.851-.419 2.851-.842 0-.444-1.205-.438-2 .009m-141.377 8.386c.633.685 4.46 1.683 7.177 1.871 2.255.156 2.158.109-1.6-.784-2.2-.522-4.45-1.083-5-1.247-.74-.22-.89-.178-.577.16m63.777.089c4.5.653 24.045.827 26.2.233 1.791-.494.415-.551-13.2-.552-9.142 0-14.323.127-13 .319m103.938-.026c-.812.474-9.172 2.228-14.338 3.008-13.701 2.069-12.318 1.728-17.8 4.384-8.685 4.207-15.458 7.221-17.6 7.83-7.513 2.14-10.432 2.477-11.571 1.338-1.398-1.398-.477-2.966 1.751-2.98 1.768-.012 7.142-1.444 10.62-2.829 4.084-1.628 5.288-2.17 5.831-2.629.348-.293.933-.533 1.3-.533.368 0 .669-.18.669-.4 0-.511-1.788-.51-3.634.003-.789.219-3.399.577-5.8.795-2.401.219-5.356.567-6.566.774-9.537 1.63-36.521 1.626-53.2-.009-2.31-.226-6-.566-8.2-.755-2.2-.189-4.81-.534-5.8-.766-.99-.232-2.43-.411-3.2-.398l-1.4.025 1.2.414c.66.227 3.45.65 6.2.939 2.75.288 7.43.793 10.4 1.122 13.225 1.462 41.067 1.841 48.949.667 8.383-1.249 16.072-2.103 17.051-1.893.582.125-2.746 1.882-3.564 1.882-.404 0-2.734.937-4.184 1.682-.411.211-2.417.594-4.458.851-4.973.626-6.279 1.744-4.755 4.07.81 1.237 2.705 1.606 5.448 1.062 4.724-.938 6.079-1.286 6.291-1.617.122-.191.852-.473 1.622-.627.77-.154 2.48-.794 3.8-1.424a309.065 309.065 0 019.2-4.176c2.939-1.263 6.799-3.218 6.929-3.508.071-.158.791-.394 1.6-.523.809-.13 2.641-.48 4.071-.78 1.43-.299 4.85-.852 7.6-1.229 2.75-.377 5.771-.932 6.714-1.233.943-.301 2.355-.548 3.138-.548 1.604 0 6.83-1.486 7.172-2.039.293-.473-.644-.442-1.486.05M125.4 249.23c2.519.877 8.407 1.968 10.361 1.92l2.039-.05-2-.318c-1.1-.174-3.53-.619-5.4-.989-1.87-.369-4.03-.741-4.8-.826l-1.4-.155 1.2.418m14 2.582c.88.317 2.197.579 2.926.582 1.957.009 2.874.643 2.874 1.987 0 1.338 1.528 4.517 2.954 6.147 2.669 3.05 11.651 5.307 13.447 3.379 1.97-2.114-.376-4.707-4.26-4.707-2.853 0-2.699.221.552.787 3.046.53 3.707.925 3.707 2.213 0 1.645-.854 1.926-4.545 1.496-6.655-.776-11.455-5.239-11.455-10.65 0-.37-.455-.719-1.1-.845-.605-.117-1.868-.391-2.806-.607-2.784-.643-4.286-.5-2.294.218m10.67 1.736c-.585.371.197 2.799 1.215 3.771.893.852 2.776 1.953 2.984 1.745.11-.11-.307-.529-.928-.932-3.063-1.988-3.698-4.152-1.341-4.575l1.4-.252-1.4-.046c-.77-.026-1.638.104-1.93.289", fill: "#dcdcdc" }),
            React.createElement("path", { d: "M11.2 2.047c-2.026 1.084-8.274 7.44-9.206 9.364-1.422 2.939-.893 4.997.818 3.177.51-.544 1.233-.988 1.607-.988.885 0 9.181-8.296 9.181-9.181 0-.374.444-1.097.988-1.607 1.801-1.693-.629-2.241-3.388-.765m16.143-.104C23.921 3.731 3.502 24.256 1.9 27.518c-1.229 2.501-.767 4.888.629 3.256.37-.432 1.617-1.398 2.772-2.148C8.002 26.872 27.093 7.689 29.013 4.8c.804-1.21 1.718-2.346 2.033-2.525 1.896-1.077-1.665-1.397-3.703-.332m15.532.068c-2.53 1.361-31.729 29.856-38.104 37.185-4.105 4.72-5.32 10.448-1.355 6.387.851-.87 1.795-1.583 2.1-1.583.665 0 5.684-4.74 5.684-5.369 0-.243.405-.619.9-.836.495-.217 1.078-.8 1.295-1.295.217-.495.577-.901.8-.903C14.717 35.593 35.6 14.7 35.6 14.181c0-.215.405-.569.9-.786.495-.217 1.078-.8 1.295-1.295.217-.495.593-.9.836-.9C39.26 11.2 44 6.181 44 5.516c0-.305.713-1.249 1.583-2.1 2.281-2.227.52-3.141-2.708-1.405m14.186.896C54.533 5.115 5.115 54.533 2.907 57.061c-2.668 3.056-2.465 7.405.216 4.619.592-.615 1.797-1.647 2.677-2.291.88-.645 2.05-1.649 2.6-2.231.55-.582 1.405-1.267 1.9-1.522.495-.255.9-.723.9-1.04 0-.316.54-.855 1.2-1.196.66-.341 1.2-.89 1.2-1.22 0-.33.453-.772 1.007-.983.554-.21 1.18-.836 1.39-1.39.211-.554.653-1.007.983-1.007.33 0 .879-.54 1.22-1.2.341-.66.867-1.2 1.169-1.2.301 0 1.112-.675 1.801-1.5.69-.825 1.437-1.68 1.662-1.9.224-.22.714-.706 1.088-1.08l1.2-1.2a44.74 44.74 0 001.2-1.269 16.61 16.61 0 011.209-1.2c.29-.248.857-.784 1.26-1.191.751-.76.995-1.005 2.271-2.279a618.62 618.62 0 001.853-1.86c.612-.616 1.422-1.427 1.8-1.801.378-.374.894-.887 1.147-1.14.253-.253.793-.789 1.2-1.191.407-.403.943-.97 1.191-1.26a16.61 16.61 0 011.2-1.209c.412-.374.956-.887 1.209-1.14l1.26-1.26c.44-.44.953-.957 1.14-1.148.187-.192 1.015-.912 1.84-1.602.825-.689 1.5-1.5 1.5-1.801 0-.302.54-.828 1.2-1.169.66-.341 1.2-.89 1.2-1.22 0-.33.453-.772 1.007-.983.554-.21 1.18-.836 1.39-1.39.211-.554.653-1.007.983-1.007.33 0 .879-.54 1.22-1.2.341-.66.88-1.2 1.196-1.2.317 0 .785-.405 1.04-.9s.94-1.35 1.522-1.9c.582-.55 1.586-1.72 2.231-2.6.644-.88 1.676-2.085 2.291-2.677 2.786-2.681-1.563-2.884-4.619-.216m16.135-.3c-.768.794-2.341 2.072-3.496 2.84-1.155.768-2.101 1.611-2.103 1.874-.001.264-.541.786-1.2 1.16-.658.375-1.197.917-1.197 1.206 0 .288-.39.701-.867.918-.477.217-1.062.739-1.3 1.16-.592 1.046-1.447 1.906-2.709 2.724-.585.379-1.179 1.054-1.321 1.5-.141.446-.523.811-.849.811-.325 0-.898.539-1.273 1.197-.374.659-.838 1.199-1.031 1.2-.473.004-4.25 3.928-4.25 4.416 0 .213-.266.387-.591.387-.325 0-.91.492-1.3 1.093-.837 1.292-1.692 2.144-2.744 2.74-.421.238-.943.823-1.16 1.3-.217.477-.63.867-.918.867-.289 0-.817.511-1.176 1.135-.358.625-1.025 1.3-1.481 1.5-.457.201-.995.74-1.196 1.199-.202.458-.727.998-1.168 1.2-.44.201-.995.71-1.233 1.131a6.9 6.9 0 01-2.468 2.468c-.421.238-.93.793-1.131 1.233-.202.441-.742.966-1.2 1.168-.459.201-.998.739-1.199 1.196-.2.456-.875 1.123-1.5 1.481-.624.359-1.135.887-1.135 1.176 0 .288-.39.701-.867.918-.477.217-1.062.739-1.3 1.16-.596 1.052-1.448 1.907-2.74 2.744-.601.39-1.093.975-1.093 1.3 0 .325-.174.591-.387.591-.488 0-4.412 3.777-4.416 4.25-.001.193-.541.657-1.2 1.031-.658.375-1.197.948-1.197 1.273 0 .326-.365.708-.811.849-.446.142-1.121.736-1.5 1.321-.818 1.262-1.678 2.117-2.724 2.709-.421.238-.943.823-1.16 1.3-.217.477-.63.867-.918.867-.289 0-.831.539-1.206 1.197-.374.659-.904 1.199-1.176 1.2-.272.002-.969.754-1.549 1.672-.579.918-1.854 2.525-2.832 3.571-1.953 2.088-2.35 4.397-.806 4.69 1.177.223 4.46-2.931 38.471-36.941C74.6 6.578 77.753 3.295 77.53 2.118c-.272-1.431-2.747-1.151-4.334.489m14.748.709c-1.24 1.163-2.71 2.322-3.265 2.575-.555.253-1.115.786-1.243 1.185-.129.398-.774 1.031-1.435 1.405-.661.375-1.202.915-1.204 1.2-.001.286-.541.826-1.2 1.2-.658.375-1.197.96-1.197 1.3 0 .341-.204.619-.454.619-.649 0-7.946 7.24-7.946 7.884 0 .295-.453.708-1.007.919-.554.21-1.18.836-1.39 1.39-.211.554-.624 1.007-.919 1.007-.644 0-7.884 7.297-7.884 7.946 0 .25-.278.454-.619.454-.34 0-.925.539-1.3 1.197-.374.659-.873 1.199-1.107 1.2-.336.002-3.836 3.486-8.24 8.203-.206.22-.68.706-1.054 1.08l-1.2 1.2-1.32 1.32c-.44.44-.926.914-1.08 1.054-3.229 2.923-8.081 7.797-8.083 8.12-.001.234-.541.733-1.2 1.107-.658.375-1.197.96-1.197 1.3 0 .341-.204.619-.454.619-.649 0-7.946 7.24-7.946 7.884 0 .295-.453.708-1.007.919-.554.21-1.18.836-1.39 1.39-.211.554-.624 1.007-.919 1.007-.644 0-7.884 7.297-7.884 7.946 0 .25-.278.454-.619.454-.34 0-.925.539-1.3 1.197-.374.659-.914 1.199-1.2 1.2-.285.002-.823.534-1.195 1.182-.372.649-1.068 1.358-1.547 1.576-.478.218-.984.756-1.123 1.195-.14.44-1.235 1.845-2.435 3.124-2.073 2.21-2.821 4.153-1.938 5.036.248.248.506.15 2.957-1.123C6.229 90.837 90.837 6.229 91.787 4.4c1.273-2.451 1.371-2.709 1.123-2.957-.873-.872-2.825-.136-4.966 1.873m16.856-.887c-2.036 1.754-2.332 1.971-2.684 1.971-.414 0-97.716 97.303-97.716 97.717 0 .339-.113.494-1.986 2.736-.771.922-1.214 1.899-1.214 2.676 0 1.445.513 1.899 1.204 1.067.272-.328.855-.596 1.296-.596C4.811 108 108 4.809 108 3.698c0-.44.268-1.022.596-1.294.844-.701.371-1.206-1.12-1.192-.831.007-1.764.432-2.676 1.217m14.836.5C116.623 5.255 4.992 116.951 2.9 119.732c-1.549 2.059-2.172 4.063-1.48 4.755 1.204 1.204.396 1.981 62.722-60.345S125.691 2.624 124.487 1.42c-.698-.697-2.867-.023-4.851 1.509m16.706-.593c-1.451 1.46-2.239 2.064-2.691 2.064-.327 0-2.554 1.883-3.851 3.256-2.599 2.75-5.521 5.544-5.798 5.544-.191 0-.45.321-.575.713-.124.393-.766 1.033-1.426 1.423-.661.39-1.201.93-1.201 1.2 0 .27-.54.81-1.2 1.2-.66.39-1.2.882-1.2 1.092 0 .211-1.106 1.416-2.459 2.678-4.56 4.255-17.541 17.383-17.541 17.74 0 .195-.26.354-.577.354-.318 0-.897.54-1.287 1.201-.39.66-1.03 1.302-1.423 1.426-.392.125-.713.371-.713.547 0 .254-2.866 3.268-5.542 5.826-.23.22-.778.76-1.218 1.2l-1.32 1.32a44.74 44.74 0 01-1.269 1.2 18.02 18.02 0 00-1.2 1.198c-.248.285-1.581 1.635-2.963 3-3.256 3.218-21.152 21.114-24.37 24.37-1.365 1.382-2.715 2.715-3 2.963a18.02 18.02 0 00-1.198 1.2c-.374.412-.887.956-1.14 1.209l-1.26 1.26c-.44.44-1.007 1.015-1.26 1.278-2.777 2.888-5.629 5.602-5.886 5.602-.176 0-.422.321-.547.713-.124.393-.766 1.033-1.426 1.423-.661.39-1.201.969-1.201 1.287 0 .317-.159.577-.354.577-.357 0-13.485 12.981-17.74 17.541-1.262 1.353-2.467 2.459-2.678 2.459-.21 0-.702.54-1.092 1.2-.39.66-.93 1.2-1.2 1.2-.27 0-.81.54-1.2 1.201-.39.66-1.03 1.302-1.423 1.426-.392.125-.713.384-.713.575 0 .277-2.794 3.199-5.544 5.798-1.373 1.297-3.256 3.524-3.256 3.851 0 .431-.493 1.092-2.121 2.846-2.017 2.171-1.058 4.887 1.039 2.944.581-.538 1.447-1.103 1.925-1.255C6.38 137.826 137.826 6.38 138.186 5.243c.152-.478.717-1.344 1.255-1.925 1.923-2.075-1.07-3.024-3.099-.982m15.757-.337c-2.163 1.165-2.78 1.773-74.039 72.945C-2.473 155.38 1.2 151.561 1.2 154.861c0 1.243.689 1.895 1.039.983.128-.334.981-.972 1.897-1.418C6.272 153.386 153.464 6.119 154.562 3.923c.406-.812.997-1.575 1.314-1.697.316-.121.463-.402.326-.623-.378-.611-2.64-.392-4.103.396m15.301.134c-1.001.518-20.998 20.219-53.4 52.608L62.2 106.52l-1.594-.061c-3.086-.118-4.206.816-4.206 3.506v2.327l-26.728 26.78C2.553 166.242 1.2 167.736 1.2 170.503c0 1.475.531 1.635 1.612.485.51-.544 1.157-.988 1.438-.988.281 0 .654-.244.83-.541.176-.298.562-.619.857-.713.296-.094 12.311-11.949 26.7-26.344L58.8 116.23v-2.115c0-1.163-.18-2.115-.4-2.115-.44 0-.528-2.082-.148-3.5.787-2.935 5.112.945 5.152 4.622.034 3.139 1.174 2.945 1.316-.225l.121-2.677 51.87-51.882c28.528-28.534 51.946-52.119 52.038-52.409.093-.291.412-.673.71-.849.297-.176.541-.549.541-.83 0-.281.444-.928.988-1.438 1.859-1.748-.619-2.217-3.588-.679m16.343-.19c-2.208 1.154-4.227 3.12-46.781 45.557C107.45 76.931 94.89 89.204 94.273 89.213c-1.086.017-2.479 1.147-2.848 2.309-.154.483-.447.878-.652.878-.205 0-.373.34-.373.755 0 .457-5.055 5.826-12.8 13.595-7.04 7.062-12.8 13.118-12.8 13.458 0 .339-.25.713-.555.83-.672.258-1.129 2.287-.806 3.575.231.919 6.561-4.725 6.561-5.849 0-.2.18-.364.4-.364.519 0 2-1.481 2-2 0-.22.54-.4 1.2-.4.8 0 1.2-.2 1.2-.6 0-.33.27-.6.6-.6.33 0 .6-.27.6-.6 0-.33.27-.6.6-.6.33 0 .6-.27.6-.6 0-.33.341-.6.757-.6.417 0 .861-.27.988-.6.126-.33.587-.6 1.023-.6.436 0 .936-.225 1.112-.5.375-.585 1.624-1.424 2.62-1.758.385-.13.7-.484.7-.789 0-.304.264-.553.586-.553.322 0 .779-.36 1.014-.8.566-1.058-.954-1.154-1.568-.1-.388.667-.408.667-.42 0-.007-.385.197-.7.452-.7.256 0 2.65-2.16 5.32-4.8l4.855-4.8h3.881c3.182 0 3.88.108 3.88.6 0 .395-.395.6-1.157.6-.637 0-1.256.256-1.376.569-.12.313-.62.628-1.111.7-1.428.209-1.419 1.131.011 1.131.678 0 1.233-.18 1.233-.4 0-.22.35-.4.777-.4.428 0 1.033-.364 1.344-.809.312-.445.817-.715 1.123-.6.306.114 1.096-.15 1.756-.589l1.2-.797-1.7-.002c-1.234-.002-1.7-.166-1.7-.595 0-.902-1.662-1.135-5.927-.833-2.132.152-4.191.155-4.575.007-.889-.341-1.015-3.382-.141-3.382.307 0 .661-.27.788-.6.292-.763 2.505-.794 2.935-.041.603 1.055 11.869 1.095 11.465.041-.179-.465-.958-.6-3.453-.6h-3.223l2.665-2.761C104.8 86.12 106 84.68 106 84.439c0-.241.278-.439.619-.439.34 0 .925-.539 1.3-1.197.374-.659.865-1.199 1.089-1.2.522-.004 7.791-7.288 7.795-7.811.001-.215.541-.699 1.2-1.073.658-.375 1.197-.96 1.197-1.3 0-.341.209-.619.464-.619.651 0 10.336-9.641 10.336-10.289 0-.292.405-.689.9-.883 1.077-.42 10.3-9.702 10.3-10.365 0-.255.278-.463.619-.463.34 0 .925-.539 1.3-1.197.374-.659.87-1.199 1.101-1.2.575-.004 10.18-9.758 10.18-10.339 0-.255.228-.464.506-.464.652 0 10.294-9.653 10.294-10.306 0-.272.209-.494.464-.494.651 0 10.336-9.641 10.336-10.289 0-.292.453-.703 1.007-.914.554-.21 1.18-.836 1.39-1.39.211-.554.607-1.007.882-1.007.66 0 5.121-4.431 5.121-5.087 0-.282.315-.85.7-1.261 2.248-2.401 2.844-3.175 2.618-3.4-.454-.455-2.694-.178-3.975.491m13.328 1.377C194.187 5.896 108.8 91.08 108.8 91.382c0 .12 1.409.218 3.13.218 3.107 0 4.87-.808 4.87-2.231 0-.209.405-.557.9-.774.495-.217 1.065-.77 1.266-1.229.202-.458.742-.998 1.2-1.2.459-.201.999-.741 1.2-1.2.202-.458.742-.998 1.2-1.2.459-.201 1.012-.771 1.229-1.266.217-.495.587-.9.821-.9.526 0 2.984-2.492 2.984-3.024 0-.213.405-.564.9-.781.495-.217 1.065-.77 1.266-1.229.202-.458.742-.998 1.2-1.2.459-.201.999-.741 1.2-1.2.202-.458.742-.998 1.2-1.2.459-.201.999-.741 1.2-1.2.202-.458.742-.998 1.2-1.2.459-.201.994-.729 1.189-1.173.195-.444 1.133-1.404 2.084-2.134.951-.73 1.838-1.672 1.972-2.093.134-.421.425-.766.647-.766.518 0 6.742-6.285 6.742-6.807 0-.216.235-.393.522-.393.595 0 3.078-2.44 3.078-3.024 0-.213.405-.564.9-.781.495-.217 1.065-.77 1.266-1.229.202-.458.742-.998 1.2-1.2.459-.201.999-.741 1.2-1.2.202-.458.742-.998 1.2-1.2.459-.201 1.012-.771 1.229-1.266.217-.495.587-.9.821-.9.526 0 2.984-2.492 2.984-3.024 0-.213.405-.564.9-.781.495-.217 1.065-.77 1.266-1.229.202-.458.742-.998 1.2-1.2.459-.201.999-.741 1.2-1.2.202-.458.742-.998 1.2-1.2.459-.201.999-.741 1.2-1.2.202-.458.742-.998 1.2-1.2.459-.201 1.012-.771 1.229-1.266.217-.495.587-.9.821-.9.577 0 2.984-2.516 2.984-3.119 0-.265.185-.481.411-.481.555 0 6.789-6.211 6.789-6.763 0-.24.179-.437.399-.437.58 0 3.601-2.811 3.601-3.352 0-.252.405-.636.9-.853.495-.217 1.065-.77 1.266-1.229.202-.458.742-.998 1.2-1.2.459-.201 1.012-.771 1.229-1.266.217-.495.63-.9.918-.9.289 0 .831-.539 1.206-1.197.374-.659.871-1.199 1.103-1.2.438-.003 2.978-2.46 2.978-2.881 0-.276 1.457-2.044 3.896-4.729 1.942-2.139 1.869-2.401-.663-2.373-1.631.018-2.089.249-4.162 2.1m16.238-.393c-2.129 2.107-2.466 2.371-3.774 2.951-.586.26-1.175.817-1.308 1.237-.133.42-.673.96-1.2 1.2-.527.24-1.066.778-1.199 1.197-.133.418-.688.999-1.235 1.292-.546.292-.993.679-.993.86 0 .467-5.026 5.536-5.488 5.536-.211 0-.582.434-.823.965-.242.531-.784 1.075-1.204 1.208-.42.133-.967.689-1.216 1.235-.248.545-.719.992-1.046.992-.327 0-.81.405-1.072.9-.618 1.164-4.287 4.833-5.451 5.451-.495.262-.9.745-.9 1.072 0 .327-.43.79-.956 1.03-.526.239-1.145.85-1.376 1.356-.23.507-.79 1.039-1.244 1.183-.453.144-.824.446-.824.672 0 .348-3.919 4.36-5.652 5.787a14.76 14.76 0 00-1.228 1.2c-.374.412-.86.929-1.08 1.149l-1.32 1.32-1.32 1.32c-.22.22-.737.729-1.15 1.13-1.106 1.076-1.598 1.569-4.423 4.43a539.594 539.594 0 01-3.097 3.12c-.468.459-.861.851-2.53 2.52-.22.22-.737.706-1.149 1.08-.412.374-.952.919-1.2 1.21-1.728 2.032-5.002 5.235-5.751 5.627-.495.259-.9.739-.9 1.066 0 .327-.43.79-.956 1.03-.526.239-1.145.85-1.376 1.356-.23.507-.763 1.031-1.183 1.164-.42.133-.967.689-1.216 1.235-.248.545-.719.992-1.046.992-.327 0-.808.405-1.068.9s-.851 1.278-1.314 1.741c-.463.463-1.246 1.054-1.741 1.314-.495.26-.9.741-.9 1.068 0 .327-.43.79-.956 1.03-.526.239-1.145.85-1.376 1.356-.23.507-.763 1.031-1.183 1.164-.42.133-.96.673-1.2 1.2-.24.527-.807 1.075-1.261 1.219-.453.144-.824.432-.824.64 0 .901-4.767 5.168-5.773 5.168-.646 0-1.027.222-1.027.6 0 .825 2.628.825 2.945 0 .166-.433.845-.6 2.442-.6 1.7 0 2.213-.139 2.213-.6 0-.461.511-.6 2.2-.6s2.2-.139 2.2-.6c0-.33-.328-.6-.728-.6-.444 0 14.693-15.462 38.7-39.533C198.457 23.124 216.614 4.828 217.12 4.21c2.474-3.021-.904-4.158-3.811-1.283M229 3.026c-1.1 1-2.675 2.261-3.5 2.801-.825.541-1.5 1.251-1.5 1.578 0 .327-.206.595-.457.595C222.946 8 208 22.946 208 23.543c0 .251-.229.457-.508.457-.594 0-7.892 7.225-7.892 7.813 0 .218-.405.575-.9.792-.495.217-1.078.8-1.295 1.295-.217.495-.581.9-.808.9-.528 0-7.797 7.283-7.797 7.813 0 .218-.405.575-.9.792-.495.217-1.065.77-1.266 1.229-.202.458-.742.998-1.2 1.2-.459.201-1.012.771-1.229 1.266-.217.495-.554.9-.748.9-.493 0-19.045 18.507-19.052 19.005-.003.223-.41.583-.905.8-.495.217-1.078.8-1.295 1.295-.217.495-.57.9-.785.9-.214 0-1.148.744-2.074 1.653-1.55 1.521-1.847 1.649-3.715 1.607-1.243-.028-2.031.126-2.031.396 0 .286-.176.31-.5.068-.275-.205-.725-.34-1-.299-.275.041-.68.098-.9.125-.22.028-.4.386-.4.796 0 .661.194.71 1.7.429 2.146-.402 5.106-.025 5.378.684.118.308.793.541 1.565.541.94 0 1.357.185 1.357.6 0 .419.422.6 1.4.6s1.4.181 1.4.6c0 .373.378.6 1 .6 1.525 0 1.196-.96-.6-1.752-.88-.388-1.6-.876-1.6-1.085 0-.208 14.985-15.369 33.3-33.691 35.377-35.391 38.451-38.586 38.231-39.745-.294-1.553-2.72-1.111-4.931.899m15.438-.097c-1.189.919-18.681 18.127-38.871 38.239-20.19 20.113-37.169 36.763-37.731 37-2.301.973 2.414 1.861 7.864 1.481.723-.051 1.011-1.249.3-1.249-1.104 0 2.132-3.348 35-36.215 19.47-19.469 35.4-35.547 35.4-35.729 0-.183.376-.673.837-1.089.953-.863 2.382-3.614 2.05-3.947-.698-.698-2.867-.023-4.849 1.509m16.762-.5c-2.076 1.788-2.33 1.971-2.745 1.971-.208 0-16.911 16.533-37.117 36.74C201.132 61.347 184.33 77.983 184 78.109c-.33.125.99.242 2.934.259l3.533.032 36.526-36.535C266.023 2.824 267.517 1.179 263.9 1.212c-.858.007-1.776.422-2.7 1.217m16.195-.423c-.401.443-1.644 1.415-2.762 2.16C272.602 5.519 200.4 77.38 200.4 78.047c0 .194 1.313.353 2.917.353h2.917l36.283-36.335c19.956-19.984 36.29-36.589 36.299-36.9.009-.311.542-1.179 1.184-1.93.642-.751 1.074-1.516.96-1.7-.41-.664-2.828-.344-3.565.471M293.6 1.6c0 .22-.23.4-.511.4s-.819.36-1.196.8c-.377.44-.956.8-1.287.8-.331 0-17.36 16.74-37.842 37.2C216.001 77.523 215.503 78 213.949 78c-1.05 0-1.653.206-1.811.617-.389 1.014.043 1.105 4.861 1.025 3.836-.063 4.653.028 4.85.541.199.518 1.194.617 6.194.617 5.028 0 5.957.094 5.957.6 0 .472.556.6 2.6.6s2.6.128 2.6.6c0 .486.64.6 3.357.6 2.615 0 3.408.133 3.588.6.162.423.823.6 2.242.6 1.523 0 2.013.146 2.013.6 0 .472.556.6 2.6.6 2.001 0 2.6.133 2.6.578 0 .406.566.614 1.9.7 1.258.081 1.866.291 1.8.622-.062.309.348.5 1.071.5.645 0 1.442.27 1.772.6.75.75 4.001.837 3.759.1-.09-.275-.655-.558-1.256-.629-.601-.071-1.192-.386-1.312-.7-.139-.361-.829-.58-1.877-.596-1.401-.022-1.517-.082-.754-.389.497-.199 1.111-.818 1.364-1.374.254-.557.711-1.012 1.016-1.012.305 0 .861-.539 1.236-1.197.374-.659.877-1.199 1.118-1.2.24-.002 1.561-1.218 2.936-2.703 2.925-3.158 2.909-3.142 3.947-4.18l1.2-1.2c2.449-2.449 1.932-1.955 5.38-5.147 1.485-1.375 2.701-2.696 2.703-2.936.001-.241.541-.744 1.2-1.118.658-.375 1.198-.915 1.2-1.2.001-.286.541-.826 1.2-1.2.658-.375 1.197-.965 1.197-1.31 0-.346.453-.801 1.007-1.012.554-.21 1.18-.836 1.39-1.39.211-.554.624-1.007.918-1.007.659 0 2.685-2.062 2.685-2.732 0-.268.453-.66 1.007-.871.554-.21 1.17-.811 1.369-1.335.2-.524.734-1.05 1.188-1.169.455-.118.995-.658 1.2-1.2.206-.541.746-1.081 1.2-1.2.455-.118 1.004-.683 1.221-1.254.217-.572.641-1.039.942-1.039.635 0 5.473-4.92 5.473-5.565 0-.239.278-.435.619-.435.34 0 .925-.54 1.3-1.201.374-.661 1.007-1.306 1.405-1.435.399-.128.921-.664 1.161-1.191s.78-1.067 1.2-1.2c.42-.133.942-.634 1.16-1.112.218-.479.932-1.178 1.588-1.554.655-.376 1.5-1.229 1.879-1.896.378-.667 1.014-1.318 1.412-1.447.399-.128.903-.625 1.121-1.103.218-.479.927-1.175 1.576-1.547.648-.372 1.18-.91 1.182-1.195.001-.286.541-.826 1.2-1.2.658-.375 1.197-.96 1.197-1.3 0-.341.174-.619.386-.619.642 0 3.214-2.442 3.214-3.051 0-.313.467-.747 1.039-.964.571-.217 1.136-.766 1.254-1.221.119-.454.659-.994 1.2-1.2.542-.205 1.082-.745 1.2-1.2.119-.454.645-.988 1.169-1.188.524-.199 1.125-.815 1.335-1.369.211-.554.624-1.007.918-1.007.658 0 2.685-2.061 2.685-2.73 0-.268.441-.688.98-.934.539-.245 1.158-.956 1.375-1.58.218-.623 1.037-1.774 1.82-2.558 1.865-1.865 1.799-2.198-.435-2.198-2.518 0 .145-2.518-45.805 43.3L256.32 84.4h-2.973c-2.273 0-3.026-.141-3.202-.6-.127-.33-.554-.6-.95-.6-.523 0-.663-.219-.511-.8.115-.44.413-.801.663-.803.555-.003 32.253-31.663 32.253-32.214 0-.216.405-.571.9-.788.495-.217 1.078-.8 1.295-1.295.217-.495.58-.9.806-.9.588 0 10.199-9.712 10.199-10.306 0-.272.22-.494.489-.494.646 0 23.909-23.253 23.91-23.9.001-.275.242-.5.538-.5 1.002 0 8.908-9.222 8.368-9.761-.477-.478-2.371-.221-3.819.517-2.489 1.269-6.375 5.038-44.539 43.196L242.894 82h-1.847c-1.375 0-1.847-.153-1.847-.6 0-.457-.5-.6-2.099-.6h-2.099l36.875-36.9c21.194-21.208 37.497-37.836 38.337-39.1.803-1.21 1.717-2.346 2.032-2.525 1.897-1.078-1.387-1.427-3.528-.375-2.25 1.105-3.063 1.893-42.035 40.8L229.72 79.6h-3.64c-6.175 0-8.76 3.041 32.168-37.838C278.351 21.683 294.8 4.986 294.8 4.658c0-.328.445-1.125.989-1.772.544-.646.874-1.29.733-1.43-.415-.416-2.922-.292-2.922.144m60.36 1.297c-2.736 2.531-5.642 5.032-6.66 5.731-.495.339-.9.779-.9.978 0 .504-6.567 7.019-7.396 7.337-.374.144-.777.634-.897 1.09-.119.455-.645.991-1.169 1.191-.524.199-1.125.815-1.335 1.369-.211.554-.654 1.007-.984 1.007-.33 0-.918.485-1.307 1.078-.935 1.427-4.266 4.742-5.077 5.053-.353.136-.849.702-1.103 1.258-.253.556-.71 1.011-1.015 1.011-.305 0-.847.511-1.206 1.135-.358.625-1.01 1.3-1.449 1.5-.438.201-.991.702-1.229 1.114-.562.974-6.31 6.722-7.284 7.284-.412.238-.922.811-1.133 1.274-.211.462-.801 1.031-1.311 1.263-.51.233-1.037.708-1.171 1.057-.307.801-6.054 6.566-7.471 7.495-.585.383-1.064.917-1.066 1.187-.001.27-.541.798-1.2 1.172-.658.375-1.197.965-1.197 1.31 0 .346-.455.802-1.01 1.013-.556.211-1.12.669-1.254 1.018-.331.863-4.208 4.766-5.058 5.093-.377.144-.892.718-1.146 1.274-.253.556-.71 1.011-1.015 1.011-.305 0-.861.539-1.236 1.197-.374.659-.902 1.199-1.172 1.2-.27.002-.804.481-1.187 1.066-.842 1.285-6.522 6.963-7.573 7.57-.412.238-.914.793-1.115 1.233-.202.441-.727.966-1.168 1.168-.44.201-.995.703-1.233 1.115-.607 1.051-6.285 6.731-7.57 7.573-.585.383-1.063.962-1.063 1.287 0 .325-.18.591-.4.591-.22 0-.4.27-.4.6 0 .33.326.6.724.6.397 0 1.072.264 1.5.587 1.025.776 2.976.798 2.976.034 0-.319 18.758-19.348 41.685-42.288 41.911-41.937 45.271-45.418 45.036-46.658-.277-1.465-2.75-1.039-4.761.822m15.237.387c-1.212 1.164-2.681 2.33-3.265 2.592-.585.261-1.168.801-1.296 1.2-.129.398-.774 1.031-1.435 1.405-.661.375-1.202.915-1.204 1.2-.001.286-.541.826-1.2 1.2-.658.375-1.197.96-1.197 1.3 0 .341-.196.619-.435.619-.577 0-5.564 4.804-5.568 5.363-.001.241-.541.744-1.2 1.118-.658.375-1.197.965-1.197 1.31 0 .346-.453.801-1.007 1.012-.554.21-1.18.836-1.39 1.39-.211.554-.618 1.007-.906 1.007-.663 0-5.097 4.455-5.097 5.121 0 .275-.453.671-1.007.882-.554.21-1.18.836-1.39 1.39-.211.554-.666 1.007-1.012 1.007-.345 0-.935.539-1.31 1.197-.374.659-.873 1.199-1.107 1.2-.336.002-3.836 3.486-8.24 8.203-.206.22-.68.706-1.054 1.08l-1.2 1.2-1.32 1.32c-.965.965-.739.752-4.06 3.827-1.485 1.375-2.701 2.696-2.703 2.936-.001.241-.541.744-1.2 1.118-.658.375-1.198.915-1.2 1.2-.001.286-.541.826-1.2 1.2-.658.375-1.197.96-1.197 1.3 0 .341-.196.619-.435.619-.645 0-5.565 4.838-5.565 5.473 0 .301-.453.719-1.007.93-.554.21-1.17.811-1.369 1.335-.2.524-.734 1.05-1.188 1.169-.455.118-.995.658-1.2 1.2-.206.541-.746 1.081-1.2 1.2-.455.118-1.004.683-1.221 1.254-.217.572-.641 1.039-.942 1.039-.635 0-5.473 4.92-5.473 5.565 0 .239-.278.435-.619.435-.34 0-.925.539-1.3 1.197-.374.659-.914 1.199-1.2 1.2-.285.002-.825.543-1.2 1.204-.374.661-.973 1.296-1.331 1.411-.729.236-5.149 4.746-5.153 5.258-.001.182-.541.637-1.2 1.011-.658.375-1.205.915-1.214 1.2-.05 1.532-5.183 2.812-5.183 1.294 0-.393-.453-.575-1.429-.575-1.146 0-1.403.139-1.295.7.091.47.518.706 1.303.72.642.01 1.239.235 1.328.5.088.264.821.48 1.63.48 1.057 0 1.617.234 1.991.833.303.486.767.739 1.111.607a.637.637 0 01.819.367c.363.945 21.742.885 21.742-.061 0-.549.301-.614 1.856-.4 1.021.14 2.551.254 3.4.254.889 0 1.544.193 1.544.456 0 .251.305.679.679.952.618.452.562.612-.625 1.8l-1.303 1.303-4.407-.279c-4.312-.273-4.412-.26-4.636.6-.221.844-.369.869-3.762.65-2.027-.132-3.63-.07-3.762.144-.127.206.027.374.343.374s.806.278 1.088.618c.351.423.87.539 1.649.368.964-.212 1.136-.124 1.136.582 0 .554.257.832.768.832 1.045 0 3.226 1.283 3.229 1.9.002.275.431.5.954.5.523 0 1.175.27 1.449.6.274.33.842.6 1.262.6.419 0 .867.27.993.6.127.33.481.6.788.6.944 0 .618-1.034-.627-1.988l-1.185-.908 2.952-2.952c1.624-1.624 3.237-2.952 3.585-2.952.347 0 .632-.298.632-.661 0-.364 19.035-19.719 42.3-43.013 43.102-43.154 44.184-44.263 44.669-45.816.153-.489.718-1.235 1.255-1.657 1.244-.979 1.357-2.853.171-2.853-1.965 0-7.748 5.516-47.794 45.581L309.001 94h-2.672c-1.842 0-2.858.186-3.272.6-.365.365-1.344.6-2.499.6h-1.9l30.371-30.361c16.704-16.698 30.758-30.783 31.231-31.3.472-.516 6.029-6.069 12.347-12.339C385.148 8.755 389.2 4.433 389.2 3.504c0-.333.268-.828.596-1.1.832-.691.378-1.204-1.067-1.204-.777 0-1.754.443-2.676 1.214-2.244 1.875-2.397 1.986-2.739 1.986-.531 0-18.914 18.567-18.914 19.103a.5.5 0 01-.501.497c-.275 0-16.517 16.02-36.092 35.6l-35.592 35.6h-9.316l44.851-44.95c24.667-24.723 45.268-45.512 45.78-46.199 2.499-3.358-.992-3.975-4.333-.767m29.145 18.249C397.087 22.805 395.53 24 395.129 24c-.748 0-86.163 85.779-86.033 86.4.068.33.75 1.028 1.514 1.552.765.523 1.39 1.108 1.39 1.3 0 .191.45.348 1 .348.622 0 1 .227 1 .6 0 .33.276.6.613.6.336 0 .716.27.842.6.127.33.481.6.788.6.306 0 .559.225.561.5.002.275.812.855 1.8 1.29.988.434 1.796 1.019 1.796 1.3 0 .28.27.51.6.51.33 0 .6.27.6.6 0 .4.4.6 1.2.6.66 0 1.2.2 1.2.445 0 .244 2.43 2.87 5.4 5.835s5.4 5.619 5.4 5.899c0 .279.9 1.477 2 2.661s2 2.379 2 2.656c0 .277.18.504.4.504.22 0 .4.187.4.416 0 .552 3.019 3.584 3.569 3.584.237 0 .431.18.431.4 0 .22.272.4.604.4.332 0 .912.36 1.289.8.377.44 1.095.8 1.596.8.543 0 .911.242.911.6 0 .437.378.573 1.399.5 1.683-.12 1.789-.545.301-1.204-.605-.268-1.338-.714-1.629-.991-.29-.278-.863-.505-1.273-.505-1.967 0-1.303-1.563 1.974-4.646 1.775-1.67 3.228-3.246 3.228-3.501 0-.255.405-.641.9-.858.495-.217 1.065-.77 1.266-1.229.202-.458.742-.998 1.2-1.2.459-.201.999-.741 1.2-1.2.202-.458.742-.998 1.2-1.2.459-.201 1.012-.771 1.229-1.266.217-.495.587-.9.821-.9.526 0 2.984-2.492 2.984-3.024 0-.213.405-.564.9-.781.495-.217 1.065-.77 1.266-1.229.202-.458.742-.998 1.2-1.2.459-.201.999-.741 1.2-1.2.202-.458.742-.998 1.2-1.2.459-.201 1.012-.771 1.229-1.266.217-.495.582-.9.811-.9.584 0 5.394-4.914 5.394-5.511 0-.269.198-.489.44-.489.536 0 13.16-12.505 13.16-13.035 0-.206.405-.553.9-.77.495-.217 1.078-.8 1.295-1.295.217-.495.618-.9.891-.9.272 0 .815-.491 1.205-1.09.39-.6 1.468-1.905 2.396-2.9.927-.996 2.007-2.44 2.4-3.21.392-.77.848-1.46 1.013-1.533.165-.074.3-.659.3-1.3 0-3.369-1.412-2.107-33.5 29.946-13.915 13.9-25.3 25.005-25.3 24.68a.598.598 0 00-.6-.593c-.33 0-.6-.338-.6-.751s-.27-.975-.6-1.249c-.33-.274-.6-.746-.6-1.049 0-.303-.27-.551-.6-.551-.923 0-.745-.362 1.2-2.441.99-1.059 1.8-2.112 1.8-2.342 0-.229.226-.417.503-.417.653 0 23.497-22.849 23.497-23.503 0-.273.209-.497.464-.497.651 0 10.336-9.641 10.336-10.289 0-.292.405-.691.9-.886.998-.394 18.699-18.042 18.702-18.645.001-.209.652-1.088 1.446-1.953.794-.865 1.621-2.08 1.837-2.7.216-.62.556-1.127.754-1.127.199 0 .361-.54.361-1.2 0-1.315-.429-1.529-1.2-.6-.274.33-.805.6-1.179.6-.375 0-1.104.45-1.621 1-.517.55-1.094 1-1.284 1-.189 0-13.663 13.32-29.943 29.6s-29.765 29.6-29.967 29.6c-.402 0-4.406-3.888-4.406-4.278 0-.133 14.67-14.906 32.6-32.831 17.93-17.924 32.6-32.741 32.6-32.927 0-.185.495-.846 1.1-1.468.605-.622 1.46-1.843 1.9-2.714.44-.87.935-1.642 1.1-1.715.398-.177.388-2.467-.011-2.467-.171 0-.619.36-.996.8-.377.44-1.051.8-1.499.8-.544 0-12.313 11.489-35.624 34.779-23.383 23.362-34.884 34.59-35.033 34.2-.123-.318-.473-.579-.78-.579-.306 0-.557-.27-.557-.6 0-.33-.27-.6-.6-.6-.33 0-.6-.27-.6-.6 0-.373-.378-.6-1-.6-.55 0-1-.225-1-.501 0-.275 16.572-17.06 36.826-37.3 20.255-20.239 37.473-37.76 38.263-38.935.79-1.174 1.768-2.343 2.174-2.596.529-.33.737-.942.737-2.164 0-1.902-.32-2.097-1.43-.871-.415.458-1.387 1.097-2.162 1.42-.938.391-14.153 13.322-39.617 38.767-37.642 37.613-39.991 39.82-39.991 37.556 0-.343-.171-.518-.38-.388-.209.129-.575-.131-.814-.577-.239-.446-.676-.811-.971-.811-2.555 0-2.019-.572 39.048-41.674C394.086 31.089 396.8 28.31 396.8 27.378c0-.271.27-.596.6-.723.33-.126.6-.44.6-.697 0-.256.45-.883 1-1.393.705-.653 1-1.346 1-2.346 0-1.551-.571-1.787-1.658-.686m-247.2 56.98c.404 1.145.143 2.287-.522 2.287-.287 0-.746.27-1.02.6-.34.409-1.249.6-2.862.6-1.731 0-2.425.16-2.593.6-.162.42-.817.6-2.188.6-2.287 0-2.803.985-.679 1.297 1.655.243 2.722-.049 2.722-.744 0-.422.712-.553 3-.553 2.4 0 3-.12 3-.6 0-.471.553-.6 2.58-.6 1.992 0 2.665-.152 2.953-.667.27-.481.915-.665 2.32-.66 1.26.004 1.488-.052.647-.159-.787-.1-1.3-.391-1.3-.739 0-.395-.457-.575-1.456-.575-.801 0-1.656-.248-1.9-.551-.854-1.059-3.066-1.17-2.702-.136M124 88.6c-.427.515-.292.6.951.6 1.021 0 1.449-.177 1.449-.6 0-.365-.372-.6-.951-.6-.523 0-1.175.27-1.449.6m-4.4 1.2c0 .4-.4.6-1.2.6-.8 0-1.2.2-1.2.6 0 .419.422.6 1.4.6.77 0 1.4-.18 1.4-.4 0-.22.345-.4.767-.4 1.192 0 2.033-.431 2.033-1.043 0-.383-.499-.557-1.6-.557-1.156 0-1.6.167-1.6.6m277.532 10.533c-.367.367-1.687 1.567-2.933 2.667-2.612 2.306-5.391 5.029-6.988 6.849-.611.696-1.485 1.384-1.941 1.529-.456.144-.944.625-1.084 1.067-.141.442-.686 1-1.213 1.24s-1.053.735-1.169 1.101c-.116.365-1.874 2.24-3.907 4.165a996.69 996.69 0 00-4.037 3.835c-.804.79-1.974 1.97-2.4 2.42-.345.365-8.477 8.515-11.042 11.067-9.098 9.051-10.405 11.013-7.496 11.252.859.071 1.619.376 1.743.7.14.364.793.575 1.778.575 1.55 0 1.557.007 1.557 1.6v1.6h-4c-3.289 0-4-.107-4-.6 0-.42-.424-.6-1.413-.6-.886 0-1.498-.223-1.642-.6-.127-.33-.706-.595-1.288-.588-.911.011-.96.069-.357.42.474.276.7.903.7 1.939 0 .889.258 1.745.615 2.041.338.281.587.798.554 1.149-.168 1.766.07 2.839.631 2.839.441 0 .6-.46.6-1.738 0-2.694.666-3.062 5.531-3.062 3.35 0 4.069-.106 4.069-.6 0-.33.27-.6.6-.6 1.658 0 .104-4.257-1.775-4.864-.44-.142-.347-.396.4-1.081a32.407 32.407 0 001.231-1.175c3.177-3.48 9.917-10.143 10.424-10.304.373-.119.784-.548.913-.953.128-.405.869-1.341 1.646-2.08.777-.739 2.907-2.783 4.733-4.543a770.345 770.345 0 013.815-3.66 82.706 82.706 0 002.414-2.4c4.948-5.236 7.524-7.784 8.035-7.948.35-.113.865-.632 1.144-1.155.279-.522.92-1.169 1.423-1.439.504-.269 1.069-.809 1.256-1.198.426-.885 1.997-2.921 3.435-4.452.602-.64 1.207-1.611 1.344-2.156.137-.546.409-.992.605-.992.197 0 .357-.45.357-1 0-1.207-1.762-1.371-2.868-.267m-302.403.4c-1.357 1.348-1.917 1.667-2.925 1.667-.566 0-1.133.27-1.259.6-.127.33-.481.6-.788.6-.306 0-.557.27-.557.6 0 .669 1.413.826 1.8.2.136-.22.576-.4.977-.4s.824-.36.939-.8c.141-.541.546-.8 1.247-.8.57 0 1.037-.16 1.037-.357 0-.196.45-.469 1-.607 1.261-.317 1.341-1.449.1-1.403-.495.019-1.202.334-1.571.7M300.6 102.4c-1.295 1.351-1.62 1.438-2.416.641-.731-.731.659-1.789 2.391-1.82l1.175-.021-1.15 1.2m-213.8 3.229c0 1.025 1.324.909 1.525-.134.092-.48-.123-.695-.696-.695-.572 0-.829.257-.829.829m219.4 3.171c-.398.643.17 1.2 1.224 1.2.709 0 .976-.218.976-.8 0-.861-1.722-1.174-2.2-.4m-82.371 4.629c-1.479 1.478.198 2.684 4.971 3.572 2.09.388 4.407.952 5.149 1.253.742.3 1.638.546 1.992.546.354 0 1.547.345 2.651.767 1.105.422 3.178 1.046 4.608 1.387 1.43.34 3.584.895 4.787 1.232 2.964.832 3.904.786 4.219-.205.463-1.457-.259-1.924-5.206-3.37a65.884 65.884 0 01-4.353-1.456c-1.075-.415-2.345-.755-2.823-.755-.764 0-3.409-.742-7.224-2.026-1.261-.424-6.863-1.574-7.671-1.574-.26 0-.755.283-1.1.629m172.571 3.387c-.99.87-1.985 1.582-2.212 1.583-.524.001-5.388 4.891-5.388 5.417 0 .217-.405.572-.9.789-.495.217-1.065.77-1.266 1.229-.202.458-.742.998-1.2 1.2-.459.201-1.012.771-1.229 1.266-.217.495-.57.9-.783.9-.522 0-13.022 12.658-13.022 13.185 0 .228-.23.415-.512.415-.594 0-5.488 4.83-5.488 5.416 0 .217-.405.572-.9.789-.495.217-1.065.77-1.266 1.229-.202.458-.742.998-1.2 1.2-.459.201-1.012.771-1.229 1.266-.217.495-.582.9-.811.9-.528 0-5.394 4.886-5.394 5.416 0 .217-.405.572-.9.789-.495.217-1.073.789-1.284 1.27-.635 1.447-1.75 1.455-1.894.013-.203-2.036-1.122-1.835-1.122.246 0 .99-.1 2.062-.223 2.382-.123.319.057.861.4 1.204.343.343.623.878.623 1.189 0 .312.347.881.772 1.265.424.384 1.065 1.317 1.423 2.072.616 1.298 1.718 1.546 1.231.277-.145-.377.061-.673.559-.803.434-.114.894-.538 1.022-.943.452-1.423 1.87-.346 2.041 1.55.083.92-.009 1.673-.203 1.673-.195 0-.45.495-.567 1.1l-.479 2.462c-.147.75-.521 1.618-.833 1.929-.764.764-.713 1.161.231 1.822.439.307.912 1.131 1.052 1.831s.411 1.37.603 1.488c.191.118.348.732.348 1.365 0 .745.247 1.228.703 1.372.567.18.675.579.557 2.064-.081 1.012.024 2.011.232 2.219.547.547 2.602-2.54 2.269-3.409-.155-.403-.01-.878.355-1.162.339-.265.679-.841.754-1.281.274-1.589 1.821-1.223 2.021.478.099.837.312 1.821.473 2.186.211.476.051.741-.563.936-.742.235-.843.532-.753 2.221.073 1.38-.094 2.167-.572 2.695-.372.411-.676.989-.676 1.284 0 .295-.273.839-.607 1.208-.612.676-.964 27.867-.374 28.824.326.526 1.934.455 2.501-.112.667-.667.6-1.52-.12-1.52-2.11 0-.186-2.214 16.801-19.342 9.57-9.649 17.399-17.711 17.399-17.917 0-.421.497-1.087 2.1-2.816 1.215-1.31 1.576-3.925.543-3.925-.307 0-.65.243-.764.539-.114.297-1.046.934-2.072 1.416-1.396.656-5.951 4.966-18.136 17.161L362.2 212.6l-.114-4.371-.115-4.371 16.752-16.829c9.9-9.946 17.375-17.784 18.277-19.165.839-1.284 1.857-2.543 2.263-2.796.529-.33.737-.942.737-2.164 0-1.686-.461-2.191-1.08-1.183-.176.287-1.22 1.133-2.32 1.881-1.1.747-9.335 8.656-18.3 17.576-15.058 14.983-16.3 16.123-16.3 14.969 0-.687.27-1.473.6-1.747.33-.274.6-.915.6-1.425s.167-1.031.372-1.158c.205-.126.495-1.217.646-2.423.151-1.207.425-2.194.61-2.194s.454-.629.598-1.398c.22-1.173 2.807-3.948 16-17.171 10.067-10.088 15.95-16.279 16.327-17.179.323-.775.961-1.641 1.417-1.926 1.136-.71 1.154-2.726.025-2.726-.938 0-2.455.78-2.915 1.5-.176.275-.537.5-.802.5-.266 0-7.54 7.02-16.166 15.6-14.593 14.516-15.778 15.6-17.068 15.6-1.617 0-2.644.86-2.644 2.214 0 .548-.342 1.141-.8 1.386-.719.385-.8.304-.8-.798 0-.722-.247-1.322-.6-1.457-.406-.156-.6-.793-.6-1.976v-1.745l19.3-19.386c10.615-10.663 19.84-20.117 20.5-21.009 1.464-1.98 2.452-3.272 2.993-3.912 1.804-2.14-.572-3.287-2.729-1.317-.722.66-1.532 1.2-1.799 1.2-.606 0-6.068 5.549-6.398 6.5-.133.385-.48.7-.771.7-.653 0-12.696 12.075-12.696 12.729 0 .259-.228.471-.506.471-.652 0-10.294 9.653-10.294 10.306a.506.506 0 01-.515.494c-.283 0-1.391.89-2.462 1.977l-1.947 1.976-.638-1.276c-.469-.938-.956-1.312-1.838-1.41-3.547-.395-4.079.256 17.343-21.214 20.416-20.461 24.153-24.399 24.633-25.953.153-.495.446-.9.651-.9.205 0 .373-.54.373-1.2 0-1.721-1.345-1.565-3.6.416M58.316 120.4c-.156.99-.402 2.835-.546 4.1l-.262 2.3-25.854 25.994C.798 183.818 1.2 183.374 1.2 186.405c0 1.956.271 1.86 3.652-1.305.411-.385.979-.7 1.261-.7.656 0 5.087-4.461 5.087-5.121 0-.275.453-.671 1.007-.882.554-.21 1.18-.836 1.39-1.39.211-.554.622-1.007.914-1.007.648 0 10.289-9.685 10.289-10.336 0-.255.228-.464.506-.464.652 0 10.294-9.653 10.294-10.306 0-.272.191-.494.424-.494.233 0 1.403-.926 2.6-2.058 1.871-1.77 2.176-1.936 2.176-1.187 0 .478-.27.974-.6 1.1-.33.127-.6.422-.6.656 0 .234-.258.711-.573 1.059-.315.349-.641 1.141-.724 1.761-.083.621-.32 1.25-.527 1.399-.497.357-1.799 2.942-1.929 3.832-.057.386-.322.837-.589 1.002-1.155.714-1.05 3.236.135 3.236 1.003 0 1.082-.109.914-1.254-.143-.975-.02-1.296.554-1.446.461-.121.739-.556.739-1.159 0-.531.266-1.068.59-1.193.729-.279 1.81-2.377 1.81-3.513 0-.464.348-1.06.774-1.326.484-.302.872-1.145 1.039-2.255.194-1.292.699-2.245 1.865-3.513 2.173-2.364 3.522-4.534 3.522-5.665 0-.622.373-1.133 1.1-1.508 1.493-.771 2.471-1.981 2.487-3.078.008-.592.358-1.041 1.001-1.285.543-.207 1.852-1.259 2.908-2.338 1.749-1.786 2.281-2.607 3.675-5.667.287-.63.414-2.923.342-6.2-.083-3.801-.189-4.716-.397-3.4M171 120.254c-9.84 1.029-11.688 1.375-14.86 2.786-.694.308-1.373.56-1.51.56-.138 0-4.295 1.89-9.239 4.2-4.944 2.31-9.26 4.2-9.589 4.2-.571 0-3.026 1.056-8.451 3.636-1.347.64-2.552 1.164-2.678 1.164-2.648 0-12.764 8.463-15.473 12.946-2.043 3.38-3.455 5.616-6.071 9.609-2.771 4.229-2.985 5.445-.956 5.445 1.089 0 1.562-.266 2.29-1.289 1.682-2.361 6.737-10.386 6.737-10.693 0-1.705 6.917-8.82 10-10.288 1.21-.576 2.83-1.444 3.6-1.928 1.316-.828 4.987-2.472 13.4-5.999 3.637-1.524 4.298-1.829 7.21-3.325 9.909-5.093 18.28-7.405 28.59-7.897 2.75-.132 5.36-.269 5.8-.305 6.687-.551 26.37 2.063 32.712 4.343.928.334 3.218 1.036 5.088 1.56 3.419.957 6.316 1.927 7.8 2.612.44.203 2.227.756 3.971 1.23 1.743.473 3.453 1.018 3.8 1.211.346.192 1.373.535 2.282.762 1.637.407 2.896 1.39 2.408 1.878-.317.317-10.708-.958-12.091-1.483-.562-.214-1.865-.39-2.896-.391-1.031 0-4.484-.436-7.674-.968-3.19-.532-7.69-1.174-10-1.426-2.31-.253-5.088-.747-6.173-1.098-2.849-.923-16.433-.938-20.627-.024-4.011.874-6.868 1.434-10 1.958-4.888.819-23.22 5.797-24.895 6.761-.382.219-.976.399-1.322.399-.642 0-3.906 1.32-4.983 2.015-.33.213-.994.558-1.476.767-1.183.513-1.706 1.615-1.29 2.718.457 1.21 1.11 1.139 4.291-.462 1.488-.75 4.499-1.934 6.69-2.632 2.192-.698 4.292-1.431 4.668-1.63.375-.199 1.414-.478 2.308-.621.895-.143 1.723-.416 1.841-.608.119-.191.831-.347 1.584-.347.752 0 2.046-.264 2.876-.586 2.219-.863 10.938-2.861 15.733-3.606a572.35 572.35 0 006.975-1.128c4.881-.837 12.856-.432 21.689 1.101 2.014.349 6.474.988 9.912 1.419 3.437.431 6.457.912 6.71 1.068.253.157 2.086.44 4.074.63 5.63.539 9.007.96 11.615 1.448 1.32.247 3.39.615 4.6.818 2.274.382 5.706 1.247 7.8 1.966.66.227 2.28.716 3.6 1.087 5.164 1.451 25.057 11.109 27.6 13.399.44.397 1.55 1.14 2.467 1.652 2.841 1.588 6.135 3.988 6.558 4.778.222.416.982 1.008 1.689 1.317 1.178.514 3.97 3.079 8.086 7.429 2.754 2.91 5 3.526 5 1.37 0-2.613-14.984-15.502-23.791-20.466-1.765-.994-3.929-2.284-4.809-2.866-.88-.581-2.5-1.391-3.6-1.8-1.1-.408-2.18-.88-2.4-1.048-1.029-.788-6.866-3.605-8.723-4.21-1.142-.373-2.257-.812-2.477-.976-.22-.165-1.604-.701-3.075-1.193-1.471-.492-2.77-1.143-2.887-1.448-.142-.372-.879-.555-2.225-.555-1.107 0-2.013-.18-2.013-.4 0-.484 3.866-.541 4.163-.061.115.187 2.15.45 4.523.585 2.373.136 4.992.442 5.82.682.828.239 3.168.6 5.2.801 9.506.943 19.894 5.228 19.894 8.206 0 1.343 2.54 2.287 3.52 1.307 1.257-1.257-1.947-5.499-5.876-7.78-1.014-.589-1.934-1.195-2.044-1.347-.173-.239-3.278-1.248-7.4-2.405-3.031-.851-5.499-1.284-9.2-1.613-2.2-.195-4.99-.546-6.2-.779-1.21-.232-3.73-.584-5.6-.782-5.679-.601-12.804-2.32-19.6-4.729-4.146-1.469-5.804-2.025-8.6-2.883-1.54-.473-3.07-.991-3.4-1.151-.33-.16-1.95-.706-3.6-1.213-1.65-.506-3.81-1.173-4.8-1.481-.99-.309-2.121-.56-2.513-.559-.392.001-1.742-.342-3-.762-1.258-.421-4.087-.976-6.287-1.233-2.2-.258-5.17-.714-6.6-1.013-3.631-.76-18.208-.963-24.2-.336M19.52 180.535C.645 199.648 1.2 199.02 1.2 201.275c0 2.488.263 2.556 2.393.621C6.386 199.358 8.049 198 8.363 198c.414 0 2.837-2.575 2.84-3.019.001-.21.541-.688 1.2-1.062.658-.375 1.197-.917 1.197-1.206 0-.288.405-.701.9-.918.495-.217 1.065-.77 1.266-1.229.202-.458.742-.998 1.2-1.2.459-.201 1.012-.771 1.229-1.266.217-.495.601-.9.853-.9.541 0 3.352-3.021 3.352-3.601 0-.22.197-.399.437-.399.552 0 6.763-6.234 6.763-6.789 0-.226.27-.411.6-.411.33 0 .6.283.6.629 0 .345-.27.898-.6 1.228-.453.453-.6 1.575-.6 4.572 0 3.221-.111 3.971-.586 3.971-.322 0-.801.405-1.063.9-.618 1.164-4.287 4.833-5.451 5.451-.495.262-.9.745-.9 1.072 0 .327-.43.79-.956 1.03-.526.239-1.145.85-1.376 1.356-.23.507-.79 1.039-1.244 1.183-.453.144-.824.451-.824.682 0 .489-5.046 5.526-5.536 5.526-.181 0-.559.43-.84.956-.282.526-.927 1.145-1.433 1.375-.507.231-1.031.764-1.164 1.184-.133.42-.673.96-1.2 1.2-.527.24-1.085.838-1.241 1.33-.321 1.011-.512 1.26-2.908 3.804-1.97 2.091-2.275 4.237-.635 4.471 1.086.155 1.746-.408 9.793-8.369 6.578-6.508 6.723-6.623 6.842-5.4.141 1.442 4.786 2.197 5.713.929.227-.31.861-.7 1.411-.867.907-.275.861-.16-.502 1.259-.825.859-1.5 1.779-1.5 2.045a.472.472 0 01-.457.483C22.946 208 8 222.946 8 223.543c0 .251-.266.457-.591.457-.325 0-.903.495-1.286 1.1-.382.605-1.658 2.214-2.836 3.575-1.8 2.081-2.121 2.686-2.014 3.797.305 3.175 1.77 2.034 17.15-13.358 8.174-8.181 9.977-9.807 9.977-8.999 0 .543.27 1.211.6 1.485.413.343.6 1.257.6 2.941v2.443l-12.5 12.651C2.086 244.83-.187 247.679 1.42 249.287c.333.332 3.084-1.097 3.947-2.05.416-.461.9-.837 1.075-.837.175 0 5.727-5.391 12.338-11.98 9.627-9.594 12.02-11.789 12.02-11.02 0 .528.259 1.105.576 1.282.397.223.603 1.161.663 3.021l.087 2.698-13.863 13.825C10.638 251.83 4.4 258.228 4.4 258.443c0 .414-.085.534-1.986 2.81-1.14 1.364-1.722 3.947-.889 3.947 1.73 0 4.909-2.81 18.314-16.187C30.995 237.88 34.4 234.695 34.4 235.392c0 .501.256 1.122.569 1.382.313.26.688 1.182.835 2.049.146.867.43 1.577.631 1.577 1.138 0-.742 2.094-11.311 12.6C5.717 272.291 1.2 277.308 1.2 279.572c0 1.668.469 1.766 2.035.428.751-.642 1.6-1.175 1.888-1.184.288-.009 7.533-6.975 16.1-15.48L36.8 247.872v1.641c0 .902-.162 1.74-.361 1.863-.198.122-.484 1.29-.636 2.594-.17 1.467-.49 2.455-.839 2.588-.31.119-.564.734-.564 1.365 0 .977-2.308 3.472-15.4 16.649-8.47 8.524-15.4 15.755-15.4 16.067 0 .313-.36.877-.8 1.254-.44.377-.8.915-.8 1.196 0 .281-.18.511-.4.511-.436 0-.56 2.507-.144 2.922.14.141.784-.189 1.43-.733.647-.544 1.459-.989 1.805-.989.346 0 7.866-7.29 16.711-16.2 8.846-8.91 16.378-16.2 16.737-16.2.824 0 2.661-1.569 2.661-2.272 0-.29.168-.528.373-.528s.474-.319.598-.709c.282-.889 2.629-3.492 2.629-2.916 0 .68 1.2.49 1.478-.233.153-.399-.03-.864-.464-1.182-.445-.325-.637-.829-.507-1.327.116-.442-.023-.998-.309-1.235-.286-.237-.633-.885-.773-1.44-.57-2.273-2.407-1.115-2.547 1.607-.082 1.593-.376 2.687-.9 3.354-.428.544-.786 1.28-.795 1.635-.039 1.506-1.345 3.215-2.056 2.692-1.059-.778-1.328-2.502-.519-3.312.558-.558.644-1.127.45-2.985-.225-2.155-.185-2.303.651-2.422.97-.138 1.142-1.386.609-4.409-.22-1.244-.138-1.521.51-1.727 1.358-.431.598-3.634-1.118-4.711-.286-.179-.51-1.084-.51-2.057 0-1.207-.191-1.811-.626-1.977-.344-.133-.593-.557-.554-.943.138-1.344-.024-1.703-.769-1.703-.661 0-.728-.251-.568-2.145.145-1.712.052-2.194-.46-2.391-.451-.173-.57-.535-.4-1.212.133-.53.047-1.085-.191-1.232-.237-.147-.432-.595-.432-.995s-.255-.938-.566-1.197c-.419-.348-.475-.788-.214-1.696.257-.896.18-1.558-.283-2.454-.357-.69-.727-2.706-.846-4.606-.182-2.92-.317-3.406-.994-3.583-.655-.171-.744-.44-.545-1.647.679-4.113.76-11.051.135-11.57-.635-.527-2.287.068-2.287.824 0 .167-.166.304-.369.304-.203 0-.968.555-1.7 1.234-.732.679-1.616 1.489-1.965 1.8-.869.777-3.127.734-3.433-.065-.325-.847 1.104-2.695 2.303-2.976.53-.125 1.199-.714 1.486-1.31.287-.596.853-1.083 1.257-1.083.736 0 1.221-.74 1.221-1.861 0-.699.714-1.475 1.7-1.849.385-.146.7-.609.7-1.028 0-.42.279-.995.619-1.278.433-.359.584-1.066.5-2.349-.089-1.368.061-1.988.589-2.435.579-.491.719-1.306.766-4.47.05-3.387.148-3.895.789-4.062.621-.163.695-.463.487-1.977-.16-1.171-.084-1.885.222-2.074.332-.205.344-.436.042-.8-.307-.37-.257-.65.181-1.013.333-.276.605-.728.605-1.004s.27-.726.6-1c.821-.681.692-4.88-.147-4.765-.139.019-6.859 6.724-14.933 14.9m24.571-8.035c-1.699 2.085-1.636 17.317.101 24.319.302 1.22.676 3.38.831 4.8.155 1.42.417 2.761.583 2.981.166.22.435 1.024.599 1.787.163.763.443 1.663.622 2 .431.81 1.973 6.009 1.973 6.649 0 .928 5.854 12.08 7.033 13.4 4.579 5.123 6.141 6.507 9.728 8.623 2.111 1.245 4.199 2.579 4.639 2.964.44.385 1.9 1.159 3.244 1.72 1.345.561 3.306 1.478 4.36 2.039 1.053.56 2.118 1.018 2.367 1.018.248 0 .759.36 1.136.8.377.44.954.8 1.282.8.328 0 2.155.72 4.06 1.6 1.904.88 3.695 1.6 3.978 1.6.284 0 .754.225 1.044.5.291.275 1.609.853 2.929 1.283 2.504.818 4.626 1.664 8 3.188 1.1.497 4.16 1.636 6.8 2.53 2.64.895 5.34 1.815 6 2.045.66.23 3.09.983 5.4 1.672 2.31.69 4.83 1.491 5.6 1.781.77.29 2.84.835 4.6 1.212 1.76.376 4.46 1.036 6 1.466 1.54.429 3.88.949 5.2 1.154 1.32.205 3.66.627 5.2.938 6.703 1.353 10.784 1.717 23.2 2.066 3.52.098 7.66.347 9.2.551 1.54.204 9.64.41 18 .458 8.36.047 15.74.092 16.4.099 5.762.062 14.761-.314 18.2-.76 6.118-.794 10.982-1.388 14.47-1.766 1.688-.183 3.252-.445 3.474-.583.223-.137 1.722-.497 3.331-.799 1.609-.301 4.371-.916 6.138-1.365 1.766-.449 4.466-1.025 6-1.28 1.533-.255 3.687-.735 4.787-1.066 1.1-.33 3.08-.839 4.4-1.129 1.32-.29 3.57-.803 5-1.14 1.43-.337 3.68-.82 5-1.072 3.357-.643 6.8-1.526 13.4-3.436 2.555-.74 8.282-2.815 9.295-3.368.382-.208.923-.379 1.203-.379 2.947 0 11.989-7.226 17.768-14.2 2.17-2.619 7.599-10.128 8.612-11.911a701.46 701.46 0 012.6-4.415c1.277-2.16 2.605-4.41 2.952-5 .573-.978 2.311-4.109 4.594-8.274.482-.88 1.484-2.68 2.226-4 2.231-3.966 2.467-4.519 2.212-5.182-.74-1.93-2.93-1.021-4.422 1.837l-3.102 5.945c-4.958 9.504-5.568 10.562-8.885 15.4-.301.44-1.964 2.96-3.694 5.6-1.731 2.64-3.703 5.43-4.382 6.2-.68.77-1.523 1.824-1.874 2.343-.881 1.301-5.096 5.664-6.526 6.754-.647.494-1.856 1.423-2.686 2.064-3.77 2.913-13.019 6.612-22.091 8.834a2970.644 2970.644 0 01-14.066 3.417c-1.356.323-3.1.588-3.876.588-.776 0-1.507.156-1.626.347-.118.192-.983.467-1.923.612-.94.145-2.519.507-3.509.805-.99.297-3.24.856-5 1.24-1.76.385-3.65.858-4.2 1.053-.55.194-2.17.519-3.6.722-1.43.203-3.5.564-4.6.802-8.744 1.893-33.371 3.741-44.4 3.332-.936-.034-14.795-.42-24-.667-7.427-.199-16.326-.596-19.2-.856l-6.8-.613c-2.64-.237-6.06-.701-7.6-1.032-1.54-.33-4.15-.843-5.8-1.139-1.65-.297-4.17-.89-5.6-1.318-1.43-.429-3.68-1.058-5-1.398-7.204-1.858-9.401-2.507-11.35-3.355-1.182-.514-2.442-.943-2.8-.952-.357-.009-1.91-.468-3.45-1.02-1.54-.551-3.429-1.194-4.198-1.429-.769-.234-1.754-.675-2.189-.98-.435-.305-1.114-.554-1.508-.554-.394 0-2.289-.652-4.211-1.448a208.543 208.543 0 00-6.094-2.409c-2.932-1.084-2.671-.97-8.503-3.717-2.366-1.114-4.436-2.028-4.6-2.03-.163-.002-2.007-.902-4.097-2.001a428.358 428.358 0 00-6.2-3.195c-4.842-2.417-10.813-6.966-12.747-9.709-3.642-5.168-5.601-8.553-6.421-11.091-.391-1.21-1.032-2.92-1.425-3.8-1.218-2.729-2.431-7.014-2.785-9.84-.187-1.487-.458-2.895-.603-3.129-1.347-2.179-2.614-18.292-1.837-23.353.578-3.766-.65-5.792-2.291-3.778M398.8 193.4c-.274.33-.773.6-1.109.6-.675 0-6.528 5.279-12.524 11.297-2.863 2.874-3.946 3.736-4.12 3.282-.187-.488-.799-.591-2.942-.497l-2.705.118-.125 1.3c-.141 1.464.847 1.834 1.717.643.368-.502.823-.592 1.945-.381l1.465.275-.601 1.161c-.331.639-.601 1.509-.601 1.933 0 .424-.27.995-.6 1.269-.33.274-.6.727-.6 1.008 0 .501-1.671 2.653-2.749 3.54-.301.249-1.025.922-1.608 1.496-.582.574-1.46 1.171-1.951 1.327-.491.156-.892.451-.892.656 0 .205-.246.373-.546.373-.3 0-1.004.36-1.563.8-.56.44-1.306.8-1.66.8-.353 0-.954.158-1.336.352-1.325.67-4.7 1.652-5.695 1.656-1.843.008-2.347.827-2.465 4.005-.045 1.224-.298 1.952-.802 2.311-.533.379-.636.71-.372 1.203.257.48.14.955-.399 1.62-.419.518-.762 1.167-.762 1.443s-.391.999-.869 1.606c-.736.937-.802 1.279-.434 2.254.353.936.326 1.15-.145 1.15-.568 0-1.403 1.552-1.107 2.058.083.142-.141.37-.496.506-.478.184-.584.559-.408 1.442.161.803.078 1.198-.251 1.207-.898.025-2.29 1.503-2.307 2.451-.01.535-.524 1.357-1.2 1.917-.683.566-1.183 1.37-1.183 1.9 0 .557-.24.919-.61.919-.335 0-.777.439-.981.976-.204.536-.727 1.166-1.163 1.399-.435.233-.918.829-1.071 1.325-.154.495-.819 1.386-1.478 1.981-.739.666-1.107 1.315-.962 1.693.142.372-.074.779-.55 1.034-.432.231-.785.778-.785 1.215 0 .442-.41.981-.925 1.216-.509.232-1.264 1.05-1.678 1.819-.414.768-1.093 1.58-1.51 1.802-.519.278-.689.679-.539 1.273.174.695-.174 1.147-1.747 2.267-1.603 1.143-1.967 1.624-1.982 2.624-.011.672-.283 1.572-.606 2-.851 1.124-.697 4.976.198 4.976.175 0 2.483-2.205 5.129-4.9 2.645-2.695 12.831-12.906 22.635-22.69 9.804-9.785 17.825-18.02 17.825-18.3 0-.281.226-.51.503-.51.545 0 19.097-18.394 19.097-18.934 0-.18.495-.823 1.1-1.428.605-.605 1.46-1.806 1.9-2.669.44-.863.935-1.629 1.1-1.702.165-.074.3-.659.3-1.3 0-1.229-.664-1.586-1.055-.567-.127.33-.596.6-1.043.6-1.145 0-4.784 3.382-18.502 17.194-6.6 6.646-12.427 12.471-12.948 12.945-.522.473-6.687 6.612-13.7 13.641-7.262 7.279-12.752 12.488-12.752 12.1 0-.374.27-.68.6-.68.33 0 .6-.265.6-.588 0-.323.54-.987 1.2-1.475.731-.541 1.2-1.249 1.2-1.812 0-.556.24-.925.6-.925.33 0 .6-.27.6-.6 0-.33.27-.6.6-.6.359 0 .6-.369.6-.919 0-.53.5-1.334 1.183-1.9.651-.539 1.191-1.277 1.2-1.638.009-.362.287-.761.617-.888.33-.126.6-.576.6-1 0-.423.27-.873.6-1 .33-.126.6-.686.6-1.242 0-.634.225-1.013.6-1.013.33 0 .6-.338.6-.751s.27-.975.6-1.249c.33-.274.6-.817.6-1.206 0-.39.27-.812.6-.939.343-.131.6-.728.6-1.39 0-.993 1.843-2.987 12.7-13.745 23.847-23.63 30.347-30.467 31.581-33.22.37-.825.818-1.5.996-1.5.178 0 .323-.54.323-1.2 0-1.315-.429-1.529-1.2-.6M40.267 209.867c-.889.889 3.277 11.392 5.127 12.928.334.277.607.706.608.954.002.248.25.901.551 1.451.302.55 1.178 2.185 1.948 3.633 1.406 2.646 2.755 4.869 4.667 7.69a61.057 61.057 0 011.838 2.904c1.395 2.389 7.738 9.19 10.794 11.571 1.1.858 2.63 2.248 3.4 3.091s3.245 3.42 5.5 5.726c2.255 2.307 4.1 4.367 4.1 4.579 0 .212.495.65 1.1.972.605.323 1.64 1.069 2.3 1.657.66.589 1.83 1.478 2.6 1.976s1.836 1.377 2.37 1.953c.533.576 1.173 1.048 1.421 1.048.249 0 1.343.574 2.431 1.275 4.6 2.963 14.136 7.069 19.978 8.6 1.32.346 2.886.876 3.48 1.177.594.301 1.523.548 2.065.548.541 0 1.945.343 3.119.763 1.175.419 3.216.983 4.536 1.253 1.32.27 4.47.983 7 1.585 2.53.601 6.4 1.308 8.6 1.571 2.2.263 4.81.634 5.8.825 6.617 1.276 26.776 2.333 40.2 2.107 3.08-.052 5.87-.081 6.2-.066.953.046 7.136-.846 10.2-1.471a89.19 89.19 0 015.6-.919c2.548-.317 10.893-2.38 18-4.451 1.54-.449 3.43-.912 4.2-1.029.77-.118 3.11-.736 5.2-1.374 5.925-1.809 13.331-3.594 14.913-3.594.791 0 2.6-.27 4.022-.599 1.566-.364 5.477-.672 9.925-.783 4.037-.101 9.05-.366 11.14-.59 2.09-.223 5.629-.411 7.865-.417 7.661-.021 16.309-2.707 23.627-7.34.931-.589 1.799-1.071 1.929-1.071.712 0 10.68-8.524 15.201-13 13.026-12.895 22.369-27 17.885-27-.469 0-1.965 1.876-4.387 5.5-3.84 5.747-4.034 6.004-8.976 11.871-6.477 7.689-15.952 16.05-24.744 21.834-2.786 1.833-9.15 4.395-10.916 4.395-.518 0-1.739.25-2.713.555-2.763.866-9.995 1.413-21.971 1.663-6.836.142-11.984.435-13.6.773-1.43.299-4.22.837-6.2 1.197-1.98.359-4.32.849-5.2 1.089-.88.24-2.77.661-4.2.935-1.43.275-3.59.86-4.8 1.301-1.21.44-3.73 1.2-5.6 1.689-4.047 1.058-5.166 1.372-7.771 2.184-1.084.338-2.477.614-3.094.614-.618 0-2.701.467-4.629 1.038-4.212 1.248-11.176 2.532-13.823 2.549-1.054.007-3.304.3-5 .65-4.695.971-33.68.494-40.86-.672a70.597 70.597 0 00-5.223-.609c-1.43-.101-4.13-.466-6-.811a235.43 235.43 0 00-5.6-.967c-3.702-.569-8.024-1.481-11.8-2.489-1.98-.528-4.95-1.283-6.6-1.676-1.65-.394-3.36-.933-3.8-1.2-.44-.266-2.29-.883-4.112-1.371-2.941-.788-8.405-2.864-9.488-3.605-.22-.15-1.48-.696-2.8-1.214-1.32-.517-2.772-1.274-3.226-1.681-.454-.408-1.014-.742-1.243-.742-.23 0-1.209-.628-2.175-1.396-.966-.768-1.902-1.398-2.079-1.4-.441-.005-3.167-2.145-6.121-4.804-1.345-1.21-2.75-2.47-3.124-2.8-.374-.33-2.789-2.76-5.368-5.4-4.384-4.489-7.582-7.545-10.883-10.4-1.572-1.359-3.981-4.322-3.981-4.896 0-.209-.38-.723-.845-1.142-1.264-1.14-4.673-6.355-5.758-8.807-.524-1.185-1.125-2.155-1.336-2.155-.21 0-.584-.495-.831-1.1a20.716 20.716 0 00-1.025-2.1c-.318-.55-1.457-2.8-2.532-5-4.591-9.392-5.674-10.866-7.006-9.533m334.198 2.228c-.256.256-.465.705-.465.998 0 .292-.27.636-.6.762-.33.127-.6.481-.6.788 0 .306-.27.557-.6.557-.33 0-.6.25-.6.557 0 .306-.45.669-1 .807s-1 .428-1 .644c0 .215-.276.392-.613.392-.336 0-.716.27-.842.6-.132.342-.728.6-1.388.6-.722 0-1.157.209-1.157.557 0 .306-.45.669-1 .807-1.229.309-1.264.679-.129 1.387.751.47.935.455 1.344-.103.26-.357.965-.648 1.567-.648.771 0 1.157-.245 1.311-.832.152-.582.447-.772.979-.633.476.124.942-.089 1.241-.568.264-.422.886-.767 1.383-.767s.904-.179.904-.397c0-.218.536-.875 1.192-1.459 1.509-1.345 1.762-2.156 1.081-3.469-.412-.794-.654-.934-1.008-.58m22.023 13.814c-.942.82-16.422 16.134-34.4 34.03l-32.688 32.54-.126-1.709c-.092-1.232.048-1.806.5-2.059.607-.34.924-3.48.403-4.001-.73-.73-1.777.269-1.777 1.694 0 1.025-.209 1.591-.65 1.76-.55.211-.622.774-.47 3.666.158 3.007.091 3.464-.55 3.808-.512.274-.73.849-.73 1.927 0 .904-.257 1.75-.624 2.055-.509.423-.601 1.306-.5 4.831l.124 4.314-1.485.25c-2.061.347-2.315.065-2.315-2.577 0-1.844.171-2.469.841-3.075.707-.64.813-1.101.666-2.879-.125-1.504-.02-2.205.361-2.418.38-.213.565-1.431.634-4.163.085-3.342.195-3.887.822-4.051.598-.157.677-.441.452-1.637-.192-1.028-.098-1.645.328-2.131.99-1.132 1.299-4.431.445-4.759-.396-.152-.767-.07-.853.188-.303.909-8.823 9.106-10.234 9.846-.796.418-1.725 1.183-2.065 1.701-.339.519-1.304 1.377-2.144 1.907-.84.53-1.764 1.535-2.053 2.233-.425 1.026-.708 1.234-1.477 1.087-.648-.123-1.079.057-1.351.566-.221.412-.832.747-1.362.747-.53 0-1.065.166-1.191.369-.125.203-.766.488-1.424.632-.657.144-1.195.396-1.195.56 0 .163-.81.702-1.8 1.196-.99.495-1.8 1.145-1.8 1.446 0 .346-.396.52-1.076.472-.72-.05-1.217.19-1.5.725-.314.593-.752.768-1.694.677-1.283-.124-3.524 1.285-3.11 1.956.354.572-.54.778-1.609.371-.827-.314-1.378-.235-2.534.364-2.047 1.061-3.75 1.742-4.571 1.826-.382.039-1.026.372-1.432.739-.405.367-1.286.667-1.957.667-.67 0-1.442.268-1.714.596-.316.382-.844.509-1.465.353-.645-.162-1.239-.001-1.771.481-.526.476-1.481.74-2.786.769-1.092.025-2.2.26-2.463.523-.263.263-.999.478-1.635.478-.821 0-1.219.233-1.367.8-.179.684-.546.8-2.52.8-1.762 0-2.37.154-2.559.649-.185.48-.559.587-1.443.41-.657-.132-1.644-.068-2.194.141-1.082.411-1.379 1.6-.4 1.6.467 0 .422.178-.2.8-.44.44-1.263.8-1.829.8-.947 0-.977-.051-.381-.648.826-.825.655-.972-1.627-1.398-1.585-.297-2.08-.223-3.211.476-.736.454-1.502.725-1.703.6-1.488-.919-6.745 1.472-5.399 2.456 1.648 1.205 18.15.509 18.15-.766 0-.176.344-.32.765-.32.725 0 1.671 2.897 1.124 3.444-.703.703-31.943.102-32.674-.629-1.08-1.08-11.448-.932-12.257.175-.809 1.106-48.942.94-51.13-.176-1.418-.722-2.008-.745-5.486-.213-.794.122-1.109-.033-1.263-.619-.199-.762-2.98-1.095-6.617-.793-.517.043-1.353-.31-1.858-.786-.788-.74-1.121-.808-2.32-.477-1.037.286-1.541.253-1.942-.13-.68-.647-4.123-1.378-5.184-1.101-.458.12-.998-.057-1.276-.417-.285-.37-1.217-.665-2.282-.721-.99-.053-2.111-.359-2.492-.681-.38-.322-1.415-.585-2.3-.585-1.091 0-1.608-.175-1.608-.546 0-.379-.547-.545-1.8-.545-1.267 0-2.037-.237-2.6-.8-.44-.44-1.239-.8-1.776-.8-.537 0-1.088-.18-1.224-.4-.136-.22-.937-.4-1.781-.4-.968 0-1.615-.213-1.755-.578-.122-.318-.863-.698-1.647-.845-.784-.147-1.524-.427-1.645-.622s-.648-.355-1.173-.355c-.524 0-1.555-.355-2.291-.789-.774-.457-1.763-.712-2.349-.605-.767.138-1.336-.151-2.343-1.19-1.089-1.123-1.539-1.331-2.474-1.144-.665.133-1.142.056-1.142-.184 0-.559-3.351-2.488-4.322-2.488-.429 0-1.004-.27-1.278-.6-.274-.33-.653-.6-.843-.6-.19 0-1.223-.54-2.295-1.2-1.073-.66-2.265-1.2-2.649-1.2-.384 0-1.38-.54-2.213-1.2-.833-.66-1.944-1.2-2.468-1.2-.525 0-1.43-.495-2.012-1.1-1.96-2.037-2.584-2.5-3.37-2.5-.431 0-1.579-.81-2.55-1.8-1.179-1.202-1.995-1.729-2.451-1.584-.455.145-.771-.057-.944-.599a1.168 1.168 0 00-1.136-.817c-1.014 0-2.888-1.6-3.265-2.788-.142-.446-.574-.812-.961-.812s-1.007-.315-1.379-.7a721.074 721.074 0 01-3.37-3.552c-3.199-3.387-4.494-4.022-4.494-2.206 0 .796.402 1.598 1.2 2.396.66.66 1.2 1.39 1.2 1.622 0 .704 2.45 5.018 3.044 5.36.634.365.759 2.908.161 3.277-.678.419-3.203-1.915-4-3.697-.418-.935-.95-1.7-1.183-1.7-.232 0-.422-.338-.422-.751s-.27-.975-.6-1.249c-.33-.274-.6-.827-.6-1.229 0-.402-.229-.875-.51-1.051-.787-.494-1.89-2.404-1.89-3.273 0-1.182-.425-2.047-1.005-2.047-.323 0-.441-.303-.311-.799.115-.44-.069-1.224-.408-1.742-.34-.518-.741-1.6-.892-2.405-.151-.805-.434-1.561-.629-1.682s-.355-.682-.355-1.247c0-.913-.483-1.627-3.399-5.025-.331-.385-.601-1.325-.601-2.088 0-1.078-.268-1.586-1.2-2.275-.968-.716-1.2-1.182-1.2-2.412 0-1.476-.045-1.525-1.4-1.525-1.133 0-1.4.152-1.4.8 0 .444.267.8.6.8.33 0 .6.338.6.751s.272.977.605 1.253c.516.428-2.502 3.618-20.5 21.671C4.242 305.206 2.968 306.544 1.9 308.718c-1.229 2.501-.767 4.888.629 3.256.37-.432 1.617-1.399 2.772-2.149 1.158-.752 11.597-10.876 23.298-22.594C49.619 266.178 50.4 265.439 50.4 266.6c0 .33.27.6.6.6.395 0 .6.395.6 1.157 0 .66.258 1.256.6 1.388 2.017.774 1.142 1.768-21.642 24.583-23.69 23.721-27.408 27.616-28.602 29.958-.738 1.448-.995 3.342-.517 3.819.539.54 9.761-7.366 9.761-8.368 0-.296.225-.537.5-.538.647-.001 23.9-23.264 23.9-23.91a.5.5 0 01.506-.489c.593 0 10.294-9.622 10.294-10.211 0-.22.405-.577.9-.794.495-.217 1.078-.8 1.295-1.295.217-.495.583-.9.812-.9.23 0 1.487-1.08 2.793-2.4 2.654-2.682 3-2.842 3-1.387 0 .556.27 1.116.6 1.242.33.127.6.692.6 1.256 0 .564.305 1.363.678 1.775.65.718.367 1.063-6.7 8.176L23.8 317.01C.597 340.362 1.2 339.691 1.2 342.14c0 2.234.333 2.3 2.198.435.784-.783 1.935-1.602 2.558-1.82.624-.217 1.335-.836 1.58-1.375.246-.539.687-.98.981-.98.657 0 2.683-2.062 2.683-2.732 0-.268.467-.666 1.039-.883.571-.217 1.136-.766 1.254-1.221.119-.454.659-.994 1.2-1.2.542-.205 1.082-.745 1.2-1.2.119-.454.645-.988 1.169-1.188.524-.199 1.125-.815 1.335-1.369.211-.554.639-1.007.952-1.007.609 0 3.051-2.572 3.051-3.214 0-.212.278-.386.619-.386.34 0 .925-.539 1.3-1.197.374-.659.914-1.199 1.2-1.2.285-.002.825-.543 1.2-1.204.374-.661 1.007-1.306 1.405-1.435.399-.128.903-.625 1.121-1.103.218-.479.932-1.178 1.588-1.554.655-.376 1.5-1.229 1.879-1.896.378-.667 1.014-1.318 1.412-1.447.399-.128.921-.664 1.161-1.191s.78-1.067 1.2-1.2c.42-.133.942-.634 1.16-1.112.218-.479.927-1.175 1.576-1.547.648-.372 1.179-.955 1.179-1.295 0-.341.196-.619.435-.619.645 0 5.565-4.838 5.565-5.473 0-.301.467-.725 1.039-.942.571-.217 1.136-.766 1.254-1.221.119-.454.659-.994 1.2-1.2.542-.205 1.082-.745 1.2-1.2.119-.454.645-.988 1.169-1.188.524-.199 1.125-.815 1.335-1.369.211-.554.624-1.007.918-1.007.659 0 2.685-2.062 2.685-2.732 0-.268.455-.661 1.011-.872.556-.211 1.174-.792 1.374-1.29.357-.888.365-.885.39.151.014.582.295 1.161.625 1.288.33.126.6.484.6.793 0 .31.258.779.574 1.041 1.776 1.473-.718 6.116-3.952 7.357-.349.134-.807.698-1.018 1.254-.211.555-.667 1.01-1.013 1.01-.345 0-.935.539-1.31 1.197-.374.659-.902 1.199-1.172 1.2-.27.002-.804.481-1.187 1.066-.929 1.417-6.694 7.164-7.495 7.471-.349.134-.824.661-1.057 1.171-.232.51-.801 1.1-1.263 1.311-.463.211-1.036.721-1.274 1.133-.562.974-6.31 6.722-7.284 7.284-.412.238-.913.791-1.114 1.229-.2.439-.875 1.091-1.5 1.449-.624.359-1.135.901-1.135 1.206 0 .305-.455.762-1.011 1.015-.556.254-1.122.75-1.258 1.103-.311.811-3.626 4.142-5.053 5.077-.593.389-1.078.977-1.078 1.307 0 .33-.467.779-1.039.996-.571.217-1.136.766-1.254 1.221-.119.454-.646.989-1.172 1.189-.525.2-1.067.654-1.204 1.011-.314.819-6.837 7.364-7.339 7.364-.205 0-.693.488-1.083 1.085s-1.249 1.656-1.909 2.354c-4.322 4.572-5.451 6.153-5.326 7.455.34 3.512.358 3.495 35.901-32.067C63.663 298.726 67.328 295.2 68.393 295.2c.817 0 1.207-.198 1.207-.613 0-.336.27-.716.6-.842.342-.132.6-.728.6-1.388 0-1.427 1.365-1.601 2.8-.357.507.44 1.146.8 1.418.8.273 0 .6.27.727.6.126.33.545.6.931.6.478 0-.09.798-1.788 2.511-1.368 1.381-2.488 2.735-2.488 3.01 0 .274-.467.677-1.039.894-.571.217-1.136.766-1.254 1.221-.119.454-.659.994-1.2 1.2-.542.205-1.082.745-1.2 1.2-.119.454-.645.988-1.169 1.188-.524.199-1.125.815-1.335 1.369-.211.554-.629 1.007-.93 1.007-.635 0-5.473 4.92-5.473 5.565 0 .239-.278.435-.619.435-.34 0-.925.539-1.3 1.197-.374.659-.914 1.199-1.2 1.2-.285.002-.825.542-1.2 1.2-.374.659-.877 1.199-1.118 1.2-.24.002-1.561 1.218-2.936 2.703-2.925 3.158-2.909 3.142-3.947 4.18l-1.2 1.2-1.2 1.2c-.44.44-.953.941-1.14 1.114-3.962 3.653-8.141 7.851-8.143 8.18-.001.234-.541.733-1.2 1.107-.658.375-1.197.965-1.197 1.31 0 .346-.453.801-1.007 1.012-.554.21-1.18.836-1.39 1.39-.211.554-.618 1.007-.906 1.007-.663 0-5.097 4.455-5.097 5.121 0 .275-.453.671-1.007.882-.554.21-1.18.836-1.39 1.39-.211.554-.666 1.007-1.012 1.007-.345 0-.935.539-1.31 1.197-.374.659-.877 1.199-1.118 1.2-.559.004-5.363 4.991-5.363 5.568 0 .239-.278.435-.619.435-.34 0-.925.539-1.3 1.197-.374.659-.914 1.199-1.2 1.2-.285.002-.825.543-1.2 1.204-.374.661-1.007 1.306-1.405 1.435-.399.128-.939.711-1.2 1.296-.262.584-1.428 2.053-2.592 3.265-3.205 3.339-2.59 6.838.762 4.333.684-.512 18.216-17.85 38.959-38.53 35.32-35.212 37.793-37.592 38.955-37.475.753.076 1.24.351 1.24.7 0 .316.251.575.557.575.307 0 .661.27.788.6.126.33.686.6 1.242.6.557 0 1.013.137 1.013.304 0 .168-14.13 14.433-31.4 31.7C38.13 349.272 24 363.625 24 363.9c0 .275-.226.5-.503.5-.536 0-19.097 18.389-19.097 18.92 0 .335-.114.492-1.986 2.733-.771.922-1.214 1.899-1.214 2.676 0 1.445.513 1.899 1.204 1.067.272-.328.767-.596 1.1-.596.929 0 5.251-4.052 17.696-16.593 6.27-6.318 11.823-11.875 12.34-12.347.517-.473 13.792-13.718 29.5-29.434 15.744-15.752 28.56-28.272 28.56-27.9 0 .371.251.674.557.674.307 0 .661.27.788.6.126.33.666.6 1.2.6.533 0 1.073.27 1.2.6.126.33.55.6.942.6.42 0-17.381 18.126-43.508 44.3C10.143 393.013 6 397.341 6 399.165c0 1.215 1.859 1.123 2.853-.141.422-.537 1.168-1.102 1.657-1.255 1.552-.485 2.636-1.542 47.018-45.869 39.34-39.291 43.676-43.5 44.813-43.5.852 0 1.259.194 1.259.6 0 .33.341.6.757.6.417 0 .856.257.977.571.12.314.713.629 1.318.7.993.117-2.923 4.15-40.777 41.988C42.844 375.882 24 394.902 24 395.125c0 .384-.925 1.612-2.5 3.317-1.049 1.136-.855 1.558.719 1.558 1 0 1.693-.295 2.346-1 .51-.55 1.137-1 1.393-1 .257 0 .571-.27.697-.6.127-.33.452-.6.723-.6.932 0 3.711-2.714 44.131-43.1 43.208-43.172 42.448-42.473 43.436-39.9.126.33.626.6 1.111.6s1.217.304 1.628.676c.716.648-.881 2.305-38.849 40.3-26.421 26.439-39.791 40.093-40.182 41.032-.323.775-.962 1.747-1.42 2.162-1.226 1.11-1.031 1.43.871 1.43 1.197 0 1.835-.211 2.146-.708.243-.39 1.231-1.232 2.196-1.872.965-.639 19.7-19.077 41.634-40.971 38.294-38.225 39.911-39.781 40.632-39.129.481.436 1.423.68 2.619.68 1.395 0 1.869.152 1.869.6 0 .33.344.6.765.6.493 0-12.98 13.753-37.8 38.586C66.168 383.797 53.6 396.639 53.6 397.19c0 .45-.36 1.126-.8 1.503-.44.377-.8.825-.8.996 0 .399 2.29.409 2.467.011.073-.165.845-.66 1.715-1.1.871-.44 2.092-1.295 2.714-1.9.622-.605 1.287-1.1 1.477-1.1.19 0 17.149-16.827 37.686-37.393 38.502-38.557 38.362-38.426 39.84-36.948.252.252 1.587.567 2.966.7l2.508.241-36.087 36.087C87.439 378.134 71.2 394.528 71.2 394.717c0 .189-.45.766-1 1.283-.55.517-1 1.246-1 1.621 0 .374-.27.905-.6 1.179-.929.771-.715 1.2.6 1.2.66 0 1.2-.162 1.2-.361 0-.198.507-.538 1.127-.754.62-.216 1.835-1.043 2.7-1.837.865-.794 1.744-1.445 1.953-1.446.603-.003 18.251-17.704 18.645-18.702.195-.495.594-.9.886-.9.648 0 10.289-9.685 10.289-10.336 0-.255.226-.464.503-.464.636 0 23.497-22.84 23.497-23.476 0-.258.325-.573.723-.7.91-.288 10.477-9.931 10.477-10.56 0-.255.229-.464.509-.464.281 0 1.932-1.431 3.671-3.18 1.739-1.749 3.323-3.08 3.52-2.958.197.121 2.01.337 4.029.48l3.671.258-33.582 33.6C81.945 399.294 81.3 400 84.767 400c.641 0 1.226-.135 1.3-.3.073-.165.763-.621 1.533-1.013.77-.393 2.214-1.473 3.21-2.4.995-.928 2.3-2.006 2.9-2.396.599-.39 1.09-.933 1.09-1.205 0-.273.405-.674.9-.891.495-.217 1.078-.8 1.295-1.295.217-.495.564-.9.77-.9.53 0 13.035-12.624 13.035-13.16 0-.242.23-.44.512-.44.594 0 5.488-4.83 5.488-5.416 0-.217.405-.572.9-.789.495-.217 1.065-.77 1.266-1.229.202-.458.742-.998 1.2-1.2.459-.201.999-.741 1.2-1.2.202-.458.742-.998 1.2-1.2.459-.201 1.012-.771 1.229-1.266.217-.495.587-.9.821-.9.526 0 2.984-2.492 2.984-3.024 0-.213.405-.564.9-.781.495-.217 1.065-.77 1.266-1.229.202-.458.742-.998 1.2-1.2.459-.201.999-.741 1.2-1.2.202-.458.742-.998 1.2-1.2.459-.201 1.012-.771 1.229-1.266.217-.495.557-.9.755-.9.471 0 16.65-16.179 16.65-16.65 0-.198.405-.538.9-.755.495-.217 1.065-.77 1.266-1.229.202-.458.742-.998 1.2-1.2.459-.201.999-.741 1.2-1.2.202-.458.742-.998 1.2-1.2.459-.201 1.012-.771 1.229-1.266.217-.495.591-.9.83-.9.24 0 .858-.45 1.375-1 .962-1.025 2.709-1.331 3.438-.602.218.218 1.518.514 2.888.657l2.49.261-4.708 4.584c-5.582 5.435-4.309 4.158-9.494 9.527-2.352 2.434-4.397 4.615-4.545 4.846-.148.23-.674.545-1.168.7-.495.154-1.005.703-1.135 1.219-.135.54-.634 1.039-1.174 1.174-.516.13-1.065.64-1.219 1.135-.155.494-.47 1.02-.7 1.168-.315.202-7.714 7.25-9.527 9.076a3000.682 3000.682 0 01-11.2 11.175c-.519.495-1.441 1.408-2.3 2.28-.217.22-1.97 2.064-3.895 4.097-1.925 2.033-3.818 3.797-4.205 3.92-.388.123-.82.586-.96 1.028-.141.442-.686 1-1.213 1.24s-1.07.791-1.208 1.225c-.138.434-.876 1.339-1.64 2.01-1.954 1.715-6.968 6.972-9.225 9.672-1.262 1.509-1.212 3.008.1 3.008.55 0 1-.16 1-.357 0-.196.446-.468.992-.605.545-.137 1.516-.742 2.156-1.344 1.531-1.438 3.567-3.009 4.452-3.435.389-.187.929-.752 1.198-1.256.27-.503.917-1.144 1.439-1.423.523-.279 1.042-.794 1.155-1.144.169-.527 1.824-2.199 8.008-8.095a74.62 74.62 0 002.28-2.294c.286-.305 1.96-2.048 3.72-3.875 1.76-1.826 3.804-3.956 4.543-4.733.739-.777 1.675-1.518 2.08-1.646.405-.129.834-.54.953-.913.161-.507 6.824-7.247 10.304-10.424a70.568 70.568 0 002.251-2.256c.483-.521 8.394-8.432 8.934-8.935a74.146 74.146 0 002.331-2.325c3.891-4.191 9.969-10.2 10.484-10.364.373-.119.784-.548.913-.953.128-.405.87-1.341 1.648-2.08.779-.739 2.198-2.108 3.156-3.043l1.74-1.7h4.493c4.328 0 4.47.027 3.832.731-.364.403-.662.943-.662 1.2a.478.478 0 01-.484.469c-.585 0-13.116 12.597-13.116 13.185 0 .228-.23.415-.512.415-.594 0-5.488 4.83-5.488 5.416 0 .217-.405.572-.9.789-.495.217-1.065.77-1.266 1.229-.202.458-.742.998-1.2 1.2-.459.201-1.012.771-1.229 1.266-.217.495-.582.9-.811.9-.528 0-5.394 4.886-5.394 5.416 0 .217-.405.572-.9.789-.495.217-1.065.77-1.266 1.229-.202.458-.742.998-1.2 1.2-.459.201-1.012.771-1.229 1.266-.217.495-.582.9-.811.9-.584 0-5.394 4.914-5.394 5.511 0 .269-.187.489-.415.489-.527 0-13.185 12.5-13.185 13.022 0 .213-.405.566-.9.783-.495.217-1.065.77-1.266 1.229-.202.458-.742.998-1.2 1.2-.459.201-1.012.771-1.229 1.266-.217.495-.582.9-.811.9-.51 0-5.394 4.877-5.394 5.385 0 .2-.72 1.217-1.6 2.261-1.979 2.347-2.115 3.554-.4 3.554.66 0 1.2-.168 1.2-.373s.405-.498.9-.651c1.674-.517 6-4.702 39.775-38.476l33.701-33.7h4.474c4.309 0 4.45.027 3.812.731-.364.403-.662.943-.662 1.2a.468.468 0 01-.464.469c-.651 0-10.336 9.641-10.336 10.289 0 .292-.405.69-.9.884-1.088.427-12.7 12.091-12.7 12.757 0 .259-.228.47-.506.47-.652 0-10.294 9.653-10.294 10.306a.502.502 0 01-.506.494c-.652 0-10.294 9.653-10.294 10.306a.484.484 0 01-.471.494c-.654 0-12.729 12.043-12.729 12.696 0 .291-.315.638-.7.771-.951.33-6.5 5.792-6.5 6.398 0 .267-.54 1.077-1.2 1.799-1.97 2.157-.823 4.533 1.317 2.729.644-.544 1.941-1.536 3.913-2.993.893-.66 17.069-16.606 35.947-35.436l34.323-34.237 3.924-.258c2.158-.141 4.107-.44 4.33-.663.439-.439 1.846-.562 1.846-.162 0 .135-15.48 15.737-34.4 34.672-18.92 18.935-34.4 34.656-34.4 34.936 0 .279-.225.652-.5.828-.72.46-1.5 1.977-1.5 2.915 0 1.129 2.016 1.111 2.726-.025.285-.456 1.16-1.098 1.946-1.426.962-.402 13.114-12.277 37.218-36.37 37.718-37.702 37.433-37.441 38.677-35.427.119.191 1.331.474 2.695.628l2.48.281-33.791 33.872c-18.585 18.63-34.403 34.772-35.15 35.872-.747 1.1-1.593 2.144-1.88 2.32-1.008.619-.503 1.08 1.183 1.08 1.222 0 1.834-.208 2.164-.737.253-.406 1.512-1.422 2.796-2.257 1.495-.973 14.721-13.882 36.744-35.863l34.407-34.343h8.945l-33.969 33.98c-26.118 26.128-34.17 34.41-34.841 35.836-.479 1.021-1.114 1.949-1.411 2.063-.296.114-.539.457-.539.764 0 1.033 2.615.672 3.925-.543 1.761-1.633 2.396-2.1 2.855-2.1.228 0 16.195-15.75 35.483-35l35.068-35h3.302c4.613 0 4.567.033 4.567-3.243 0-1.571-.172-2.757-.4-2.757-.675 0-.444-1.156.4-2 .44-.44 1.076-.8 1.413-.8.336 0 .716-.27.842-.6.157-.407.795-.6 1.988-.6 1.295 0 1.757-.158 1.757-.6 0-.467.533-.6 2.4-.6s2.4-.133 2.4-.6c0-.4.4-.6 1.2-.6.8 0 1.2-.2 1.2-.6 0-.348.363-.6.865-.6.626 0-9.636 10.493-37.139 37.973C200.317 390.149 194 396.632 194 397.691c0 .336-.27.835-.6 1.109-.929.771-.715 1.2.6 1.2.66 0 1.2-.145 1.2-.323 0-.178.675-.626 1.5-.996 2.509-1.124 3.305-1.895 47.699-46.181 23.654-23.595 43.301-42.9 43.661-42.9.36 0 .758-.27.885-.6.133-.346.73-.6 1.414-.6.651 0 1.454-.27 1.784-.6.33-.33.863-.6 1.186-.6.322 0 .689-.27.816-.6.145-.378.757-.6 1.655-.6s1.51-.222 1.655-.6c.127-.33.642-.6 1.145-.6s1.018-.27 1.145-.6c.126-.33.484-.6.793-.6.31 0 .788-.27 1.062-.6.274-.33.868-.6 1.32-.6.569 0-8.877 9.696-30.749 31.561-17.364 17.359-31.959 31.984-32.432 32.5-.474.517-6.299 6.339-12.945 12.939-13.812 13.718-17.194 17.357-17.194 18.502 0 .447-.27.916-.6 1.043-1.019.391-.662 1.055.567 1.055.641 0 1.226-.135 1.3-.3.073-.165.839-.66 1.702-1.1.863-.44 2.064-1.295 2.669-1.9s1.251-1.1 1.434-1.1c.54 0 18.928-18.558 18.928-19.103a.5.5 0 01.5-.497c.275-.001 19.67-19.174 43.1-42.607l42.6-42.606.118 3.08c.094 2.449-.008 3.152-.5 3.427-.409.229-.618.932-.618 2.079v1.733l-46.7 46.824c-25.685 25.754-47.375 47.619-48.2 48.591-1.79 2.108-1.987 3.479-.5 3.479.55 0 1-.166 1-.368 0-.203.533-.486 1.185-.629.652-.143 2.137-1.161 3.3-2.262 1.163-1.101 2.597-2.256 3.187-2.567.589-.311 1.174-.882 1.299-1.27.125-.387.767-1.011 1.428-1.385.661-.375 1.202-.915 1.204-1.2.001-.286.541-.826 1.2-1.2.658-.375 1.197-.96 1.197-1.3 0-.341.196-.619.435-.619.577 0 5.564-4.804 5.568-5.363.001-.241.541-.744 1.2-1.118.658-.375 1.197-.965 1.197-1.31 0-.346.453-.801 1.007-1.012.554-.21 1.18-.836 1.39-1.39.211-.554.607-1.007.882-1.007.666 0 5.121-4.434 5.121-5.097 0-.288.453-.695 1.007-.906.554-.21 1.18-.836 1.39-1.39.211-.554.666-1.007 1.012-1.007.345 0 .935-.539 1.31-1.197.374-.659.873-1.199 1.107-1.2.329-.002 4.527-4.181 8.18-8.143.173-.187.674-.7 1.114-1.14l1.2-1.2 1.2-1.2c1.038-1.038 1.022-1.022 4.18-3.947 1.485-1.375 2.701-2.696 2.703-2.936.001-.241.541-.744 1.2-1.118.658-.375 1.198-.915 1.2-1.2.001-.286.541-.826 1.2-1.2.658-.375 1.197-.96 1.197-1.3 0-.341.196-.619.435-.619.645 0 5.565-4.838 5.565-5.473 0-.301.467-.725 1.039-.942.571-.217 1.136-.766 1.254-1.221.119-.454.659-.994 1.2-1.2.542-.205 1.082-.745 1.2-1.2.119-.454.645-.988 1.169-1.188.524-.199 1.125-.815 1.335-1.369.211-.554.629-1.007.93-1.007.635 0 5.473-4.92 5.473-5.565 0-.239.278-.435.619-.435.34 0 .925-.539 1.3-1.197.374-.659.914-1.199 1.2-1.2.285-.002.825-.543 1.2-1.204.374-.661.973-1.296 1.331-1.411.76-.246 5.15-4.758 5.15-5.294 0-.201.455-.573 1.012-.827.556-.253 1.175-.867 1.374-1.364.331-.822.366-.786.389.397l.025 1.3h2.904c3.647 0 3.975-.407 4.2-5.2.175-3.757.871-5.796 2.087-6.114.44-.115.968-.651 1.173-1.193.206-.541.746-1.081 1.2-1.2.455-.118.995-.658 1.2-1.2.206-.541.746-1.081 1.2-1.2.455-.118 1.004-.683 1.221-1.254.217-.572.641-1.039.942-1.039.635 0 5.473-4.92 5.473-5.565 0-.239.278-.435.619-.435.34 0 .925-.539 1.3-1.197.374-.659.914-1.199 1.2-1.2.285-.002.825-.542 1.2-1.2.374-.659.877-1.199 1.118-1.2.24-.002 1.561-1.218 2.936-2.703 3.075-3.321 2.862-3.095 3.827-4.06l1.2-1.2 1.32-1.32a57.648 57.648 0 011.2-1.174c3.229-2.923 8.081-7.797 8.083-8.12.001-.234.541-.733 1.2-1.107.658-.375 1.197-.965 1.197-1.31 0-.346.453-.801 1.007-1.012.554-.21 1.18-.836 1.39-1.39.211-.554.618-1.007.906-1.007.663 0 5.097-4.455 5.097-5.121 0-.275.453-.671 1.007-.882.554-.21 1.18-.836 1.39-1.39.211-.554.666-1.007 1.012-1.007.345 0 .935-.539 1.31-1.197.374-.659.877-1.199 1.118-1.2.559-.004 5.363-4.991 5.363-5.568 0-.239.278-.435.619-.435.34 0 .925-.539 1.3-1.197.374-.659.914-1.199 1.2-1.2.285-.002.825-.543 1.2-1.204.374-.661.998-1.303 1.385-1.428.388-.125.959-.71 1.27-1.299.311-.59 1.466-2.024 2.567-3.187 1.101-1.163 2.119-2.648 2.262-3.3.143-.652.426-1.185.629-1.185.202 0 .368-.45.368-1 0-1.491-1.457-1.28-3.512.509m-35.743 3.891c-.7.77-1.335 1.4-1.409 1.4-.075 0-.136-.63-.136-1.4 0-1.335.065-1.4 1.41-1.4h1.409l-1.274 1.4m34.841 12.525C392.1 245.382 245.244 392.277 242.3 395.652c-2.636 3.022-2.971 4.348-1.1 4.348.66 0 1.2-.168 1.2-.373s.389-.496.863-.647c.73-.232 4.909-3.363 5.537-4.148.11-.138.695-.565 1.3-.95.605-.385 1.1-.937 1.1-1.227 0-.29.455-.734 1.011-.987.556-.254 1.123-.751 1.259-1.106.323-.841 6.653-7.17 7.494-7.493.357-.137.811-.679 1.011-1.204.2-.526.735-1.053 1.189-1.172.455-.118 1.004-.683 1.221-1.254.217-.572.666-1.039.996-1.039.33 0 .918-.485 1.307-1.078.935-1.427 4.266-4.742 5.077-5.053.353-.136.849-.702 1.103-1.258.253-.556.71-1.011 1.015-1.011.305 0 .847-.511 1.206-1.135.358-.625 1.01-1.3 1.449-1.5.438-.201.991-.702 1.229-1.114.562-.974 6.31-6.722 7.284-7.284.412-.238.922-.811 1.133-1.274.211-.462.801-1.031 1.311-1.263.51-.233 1.037-.708 1.171-1.057.307-.801 6.054-6.566 7.471-7.495.585-.383 1.064-.917 1.066-1.187.001-.27.541-.798 1.2-1.172.658-.375 1.197-.965 1.197-1.31 0-.346.455-.802 1.01-1.013.556-.211 1.12-.669 1.254-1.018.331-.863 4.208-4.766 5.058-5.093.377-.144.892-.718 1.146-1.274.253-.556.71-1.011 1.015-1.011.305 0 .861-.539 1.236-1.197.374-.659.902-1.199 1.172-1.2.27-.002.804-.481 1.187-1.066.842-1.285 6.522-6.963 7.573-7.57.412-.238.914-.793 1.115-1.233.202-.441.727-.966 1.168-1.168.44-.201.995-.703 1.233-1.115.607-1.051 6.285-6.731 7.57-7.573.585-.383 1.064-.917 1.066-1.187.001-.27.541-.798 1.2-1.172.658-.375 1.197-.931 1.197-1.236 0-.305.455-.762 1.011-1.015.556-.254 1.13-.769 1.274-1.146.327-.85 4.23-4.727 5.093-5.058.349-.134.807-.698 1.018-1.254.211-.555.667-1.01 1.013-1.01.345 0 .935-.539 1.31-1.197.374-.659.902-1.199 1.172-1.2.27-.002.804-.481 1.187-1.066.929-1.417 6.694-7.164 7.495-7.471.349-.134.824-.661 1.057-1.171.232-.51.801-1.1 1.263-1.311.463-.211 1.036-.721 1.274-1.133.562-.974 6.31-6.722 7.284-7.284.412-.238.913-.791 1.114-1.229.2-.439.875-1.091 1.5-1.449.624-.359 1.135-.901 1.135-1.206 0-.305.455-.762 1.011-1.015.556-.254 1.122-.75 1.258-1.103.311-.811 3.626-4.142 5.053-5.077.593-.389 1.078-.977 1.078-1.307 0-.33.453-.773 1.007-.984.554-.21 1.17-.811 1.369-1.335.2-.524.736-1.05 1.191-1.169.456-.12.946-.523 1.09-.897.332-.864 6.646-7.196 7.505-7.526.355-.136.852-.703 1.106-1.259.253-.556.697-1.011.987-1.011.29 0 .842-.495 1.227-1.1.385-.605.812-1.19.95-1.3.785-.628 3.916-4.807 4.148-5.537.151-.474.442-.863.647-.863.205 0 .373-.54.373-1.2 0-1.881-1.39-1.527-4.414 1.125m-61.786 6.033c-.88.852-2.14 2.184-2.8 2.961-2.69 3.166-3.828 4.552-4.887 5.95-.612.807-1.911 2.517-2.887 3.8-7.799 10.251-17.083 18.059-25.626 21.553a452.056 452.056 0 00-6.02 2.494c-3.016 1.273-10.309 2.597-16.98 3.082-1.32.096-4.29.373-6.6.616-2.31.243-6.025.586-8.255.762-2.231.177-4.261.449-4.513.604-.54.334-6.133 1.262-12.039 1.997-4.467.556-8.217 1.232-10.203 1.84-1.23.376-3.457.765-9.19 1.605-4.262.625-6.235 1.231-6.761 2.078-.601.968.185 2.113 1.412 2.055 1.69-.079 13.901-2.105 18.749-3.111 1.65-.342 5.52-.986 8.6-1.432a600.464 600.464 0 0015.8-2.5c1.43-.243 4.76-.587 7.4-.764 4.758-.318 12.393-1.15 17.4-1.895 4.628-.689 12.938-4.109 18.281-7.523 1.144-.732 2.179-1.33 2.298-1.33 2.146 0 14.124-11.729 19.576-19.17 1.036-1.413 2.117-2.763 2.402-3 .286-.236 1.399-1.6 2.474-3.03 1.075-1.43 2.993-3.72 4.262-5.09 2.53-2.731 2.677-3.084 1.533-3.696-1.237-.662-1.729-.498-3.426 1.144m63.8 7.965c0 .344-3.434 2.877-3.9 2.877-.509 0-4.9 4.568-4.9 5.097 0 .288-.453.695-1.007.906-.554.21-1.17.811-1.369 1.335-.2.524-.734 1.05-1.188 1.169-.455.118-.995.658-1.2 1.2-.206.541-.746 1.081-1.2 1.2-.455.118-1.004.683-1.221 1.254-.217.572-.651 1.039-.964 1.039-.609 0-3.051 2.572-3.051 3.214 0 .212-.278.386-.619.386-.34 0-.925.539-1.3 1.197-.374.659-.914 1.199-1.2 1.2-.285.002-.825.543-1.2 1.204-.374.661-1.007 1.306-1.405 1.435-.399.128-.903.625-1.121 1.103-.218.479-.932 1.178-1.588 1.554-.655.376-1.498 1.219-1.874 1.874-.376.656-1.075 1.37-1.554 1.588-.478.218-.979.74-1.112 1.16-.133.42-.673.96-1.2 1.2-.527.24-1.063.762-1.191 1.161-.129.398-.774 1.031-1.435 1.405-.661.375-1.201.96-1.201 1.3 0 .341-.196.619-.435.619-.645 0-5.565 4.838-5.565 5.473 0 .301-.453.719-1.007.93-.554.21-1.17.811-1.369 1.335-.2.524-.734 1.05-1.188 1.169-.455.118-.995.658-1.2 1.2-.206.541-.746 1.081-1.2 1.2-.455.118-1.004.683-1.221 1.254-.217.572-.636 1.039-.93 1.039-.659 0-2.685 2.062-2.685 2.732 0 .268-.453.66-1.007.871-.554.21-1.18.836-1.39 1.39-.211.554-.666 1.007-1.012 1.007-.345 0-.935.539-1.31 1.197-.374.659-.914 1.199-1.2 1.2-.285.002-.825.542-1.2 1.2-.374.659-.877 1.199-1.118 1.2-.24.002-1.561 1.218-2.936 2.703-2.925 3.158-2.909 3.142-3.947 4.18l-1.2 1.2-1.2 1.2c-1.038 1.038-1.022 1.022-4.18 3.947-1.485 1.375-2.701 2.696-2.703 2.936-.001.241-.541.744-1.2 1.118-.658.375-1.198.915-1.2 1.2-.001.286-.541.826-1.2 1.2-.658.375-1.197.965-1.197 1.31 0 .346-.453.801-1.007 1.012-.554.21-1.18.836-1.39 1.39-.211.554-.624 1.007-.918 1.007-.659 0-2.685 2.062-2.685 2.732 0 .268-.453.66-1.007.871-.554.21-1.17.811-1.369 1.335-.2.524-.734 1.05-1.188 1.169-.455.118-.995.658-1.2 1.2-.206.541-.746 1.081-1.2 1.2-.455.118-1.004.683-1.221 1.254-.217.572-.641 1.039-.942 1.039-.635 0-5.473 4.92-5.473 5.565 0 .239-.278.435-.619.435-.34 0-.923.531-1.295 1.179-.372.649-1.068 1.358-1.547 1.576-.478.218-.979.74-1.112 1.16-.133.42-.673.96-1.2 1.2-.527.24-1.063.762-1.191 1.161-.129.398-.78 1.034-1.447 1.412-.667.379-1.52 1.224-1.896 1.879-.376.656-1.075 1.37-1.554 1.588-.478.218-.975.722-1.103 1.121-.129.398-.774 1.031-1.435 1.405-.661.375-1.202.915-1.204 1.2-.001.286-.541.826-1.2 1.2-.658.375-1.197.96-1.197 1.3 0 .341-.174.619-.386.619-.642 0-3.214 2.442-3.214 3.051 0 .313-.453.741-1.007.952-.554.21-1.17.811-1.369 1.335-.2.524-.734 1.05-1.188 1.169-.455.118-.995.658-1.2 1.2-.206.541-.746 1.081-1.2 1.2-.455.118-1.004.683-1.221 1.254-.217.572-.63 1.039-.918 1.039-.529 0-5.097 4.391-5.097 4.9 0 .466-2.533 3.9-2.877 3.9-.178 0-.323.54-.323 1.2 0 1.013.156 1.2 1 1.2.55 0 1-.18 1-.4 0-.22.251-.4.557-.4 1.249 0 6.626-5.275 70.997-69.646s69.646-69.748 69.646-70.997c0-.306.18-.557.4-.557.22 0 .4-.45.4-1 0-.844-.187-1-1.2-1-.66 0-1.2.145-1.2.323M70.1 267.865c-2.165.873 5.017 8.111 11.475 11.566.889.475 1.844 1.046 2.121 1.269.277.222 1.764 1.07 3.304 1.884 1.54.813 3.07 1.63 3.4 1.815.818.458 9.956 4.396 11.2 4.827.55.19 2.35.821 4 1.402s3.54 1.149 4.2 1.263c.66.113 1.47.436 1.8.717.33.282 1.77.704 3.2.939 1.43.235 4.22.81 6.2 1.277 1.98.467 4.77 1.001 6.2 1.185 3.172.41 8.829 1.417 11 1.959.88.219 2.68.598 4 .842 1.32.243 3.93.777 5.8 1.187 6.651 1.456 19.139 2.819 20.622 2.25.325-.125 3.692-.25 7.484-.278 3.792-.028 7.794-.214 8.894-.413 3.393-.616 12.898-1.508 13.734-1.289 1.079.282 2.475-1.148 2.189-2.242-.316-1.205-1.572-1.368-6.417-.833-2.368.262-5.116.521-6.106.576-.99.056-4.32.332-7.4.613-7.23.661-17.331.573-24-.21-4.116-.483-11.1-1.811-12.721-2.419-.923-.346-3.299-.873-5.279-1.17-4.781-.718-7.698-1.253-9.4-1.726-.77-.213-2.66-.51-4.2-.658-2.944-.284-6.778-1.07-9.8-2.009-.99-.308-2.88-.847-4.2-1.198-1.32-.351-2.713-.807-3.095-1.014-.382-.208-.922-.383-1.2-.391-.278-.007-1.225-.361-2.105-.786-.88-.425-1.797-.779-2.039-.786-.42-.013-2.397-.854-3.856-1.64-.382-.206-.902-.374-1.157-.374-.254 0-1.832-.658-3.505-1.462-10.049-4.83-11.743-5.912-21.337-13.638-1.593-1.283-2.024-1.431-3.006-1.035m40.79.205c-.735.735-.594 1.446.41 2.075 1.135.71 7.975 2.65 9.418 2.671 1.591.023 7.742 1.367 8.756 1.913.48.259 1.56.475 2.4.481.839.005 2.246.186 3.126.401.88.216 2.93.571 4.556.788 1.625.218 3.155.557 3.4.754.244.197 1.704.448 3.244.557 1.54.11 5.5.571 8.8 1.024 15.59 2.142 30.626 1.905 30.594-.483-.019-1.36-.584-1.44-11.415-1.626-5.928-.101-12.309-.375-14.179-.608-1.87-.234-4.964-.591-6.876-.794-1.912-.203-3.836-.562-4.274-.796-.439-.235-1.786-.427-2.994-.427-2.266 0-9.231-1.23-11.196-1.977-.612-.233-1.775-.421-2.586-.42-1.437.004-5.035-.717-9.074-1.817-1.1-.299-2.882-.644-3.96-.766-1.077-.121-2.157-.377-2.4-.568-.794-.627-5.212-.92-5.75-.382m285.31 4.981c-2.485 1.742-7.4 6.55-7.4 7.238a.509.509 0 01-.5.512c-.647.001-23.9 23.264-23.9 23.91a.5.5 0 01-.506.489c-.593 0-10.294 9.622-10.294 10.211 0 .22-.405.577-.9.794-.495.217-1.078.8-1.295 1.295-.217.495-.577.901-.8.903-.524.003-32.205 31.694-32.205 32.214 0 .216-.405.571-.9.788-.495.217-1.078.8-1.295 1.295-.217.495-.58.9-.806.9-.588 0-10.199 9.712-10.199 10.306 0 .272-.22.494-.489.494-.646 0-23.909 23.253-23.91 23.9a.508.508 0 01-.511.5c-1.374 0-8.69 8.726-8.69 10.365 0 1.274 1.783 1.079 3.322-.363.703-.659 1.438-1.199 1.634-1.2C278 397.594 397.594 278 397.602 276.556c.001-.196.541-.931 1.2-1.634 2.795-2.982.913-4.335-2.602-1.871m0 15.612c-2.968 2.048-105.515 104.655-107.42 107.483-.869 1.29-1.58 2.685-1.58 3.1 0 1.15 1.902.987 2.871-.246.433-.55 1.025-1 1.315-1 1.119 0 5.284-4.071 53.913-52.701C393.929 296.67 398 292.505 398 291.386c0-.29.45-.882 1-1.315 3.004-2.362.447-3.649-2.8-1.408m-290.596 8.732c-.745.898-.148 2.563 1.107 3.087.599.25 3.069 1.389 5.489 2.531 2.42 1.142 4.85 2.207 5.4 2.366 1.585.457 7.736 2.657 8.428 3.014.772.398 5.429 1.607 6.19 1.607.733 0 1.444-1.374 1.131-2.188-.308-.804-3.003-2.212-4.235-2.212-.931 0-7.911-2.337-9.335-3.126-.429-.237-1.859-.788-3.179-1.223-2.262-.746-6.237-2.689-7.989-3.904-1.035-.717-2.389-.696-3.007.048m172.796-.138c-1.169.497-9.024 2.452-14.217 3.538-1.99.416-4.78 1.111-6.2 1.545-4.726 1.444-10.713 2.89-15.983 3.861-1.87.345-3.85.799-4.4 1.009-3.998 1.531-17.191 2.503-35 2.58-8.36.036-17.27.212-19.8.391-2.53.179-5.5.374-6.6.432-1.1.058-4.07.233-6.6.388-3.558.217-5.279.136-7.6-.36-5.268-1.125-7.639-.581-6.311 1.446 1.315 2.007 10.999 2.763 21.711 1.696 5.788-.576 10.494-.707 23.995-.665 12.744.04 18.1-.095 22.2-.56 2.973-.337 6.935-.765 8.805-.951 3.023-.302 5.222-.74 10-1.993 1.318-.346 11.026-2.524 13.2-2.961.55-.111 2.62-.667 4.6-1.236 1.98-.569 4.32-1.194 5.2-1.388.88-.194 2.68-.661 4-1.036 1.32-.375 3.57-.938 5-1.251l4.372-.957c2.6-.569 3.702-1.41 3.552-2.71-.141-1.223-2.042-1.619-3.924-.818m119.8 5.745a91.772 91.772 0 00-1.9 1.587c-.385.336-.885.611-1.111.611-.537 0-89.989 89.452-89.989 89.989 0 .226-.277.726-.615 1.111-1.202 1.369-2.585 3.219-2.585 3.458 0 .703 2.912.164 3.719-.688.485-.511 1.196-1.046 1.581-1.187.385-.142.7-.424.7-.627s.463-.486 1.03-.628c1.405-.352 87.246-86.193 87.598-87.598.142-.567.425-1.03.628-1.03s.485-.315.627-.7c.141-.385.676-1.096 1.187-1.581.633-.599.93-1.334.93-2.3 0-1.67-.203-1.717-1.8-.417m.37 15.431c-.415.458-1.387 1.097-2.162 1.419-1.953.813-75.743 74.603-76.556 76.556-.322.775-.961 1.747-1.419 2.162-1.226 1.11-1.031 1.43.871 1.43 1.222 0 1.834-.208 2.164-.737.253-.406 1.422-1.377 2.596-2.159 2.788-1.854 71.186-70.252 73.04-73.04.782-1.174 1.753-2.343 2.159-2.596.529-.33.737-.942.737-2.164 0-1.902-.32-2.097-1.43-.871m.085 15.767c-.126.33-.693.6-1.259.6-1.519 0-62.596 61.077-62.596 62.596 0 .566-.27 1.133-.6 1.259-.968.372-.702 1.345.367 1.345.531 0 1.026-.135 1.1-.3.073-.165.845-.66 1.715-1.1.871-.44 2.092-1.295 2.714-1.9.622-.605 1.286-1.1 1.475-1.1.448 0 54.029-53.581 54.029-54.029 0-.189.495-.853 1.1-1.475.605-.622 1.46-1.843 1.9-2.714.44-.87.935-1.642 1.1-1.715.165-.074.3-.569.3-1.1 0-1.069-.973-1.335-1.345-.367m.145 15.6c-.274.33-.805.6-1.179.6-.375 0-1.104.45-1.621 1-.517.55-1.085 1-1.263 1-.178 0-9.777 9.453-21.33 21.007-11.554 11.553-21.007 21.152-21.007 21.33 0 .178-.45.746-1 1.263-.55.517-1 1.246-1 1.621 0 .374-.27.905-.6 1.179-.929.771-.715 1.2.6 1.2.66 0 1.2-.162 1.2-.361 0-.198.501-.535 1.113-.749 3.547-1.236 44.941-42.63 46.177-46.177.214-.612.551-1.113.749-1.113.199 0 .361-.54.361-1.2 0-1.315-.429-1.529-1.2-.6m-1.08 15.5c-.176.275-1.624 1.638-3.218 3.028-3.757 3.279-22.895 22.417-26.174 26.174-1.39 1.594-2.753 3.042-3.028 3.218-1.079.69-.591 2.28.7 2.28.66 0 1.2-.16 1.2-.357 0-.196.42-.462.933-.591.514-.128 1.756-.958 2.762-1.843 1.005-.885 1.99-1.609 2.188-1.609.527 0 2.917-2.555 2.917-3.119a.47.47 0 01.457-.481c.597 0 15.543-14.946 15.543-15.543 0-.251.235-.457.522-.457.556 0 3.078-2.423 3.078-2.958 0-.175.724-1.142 1.609-2.147.885-1.006 1.715-2.248 1.843-2.762.129-.513.395-.933.591-.933.197 0 .357-.54.357-1.2 0-1.291-1.59-1.779-2.28-.7m-.52 16.126c-2.196 2.046-14.768 14.657-15.5 15.547-1.261 1.534-1.212 3.027.1 3.027.55 0 1-.16 1-.357 0-.196.446-.468.992-.605.545-.137 1.517-.742 2.159-1.344 1.6-1.499 2.817-2.446 4.331-3.37.706-.43 1.39-1.12 1.521-1.533.131-.412.576-.857.988-.988.413-.131 1.103-.815 1.533-1.521.924-1.514 1.871-2.731 3.37-4.331.602-.642 1.207-1.614 1.344-2.159.137-.546.409-.992.605-.992.197 0 .357-.45.357-1 0-1.155-1.717-1.384-2.8-.374m.07 15.9c-1.32 1.405-1.164 2.674.33 2.674.8 0 1.2-.2 1.2-.6 0-.33.27-.6.6-.6.4 0 .6-.4.6-1.2 0-1.521-1.424-1.664-2.73-.274", fill: "#bcbcbc" }),
            React.createElement("path", { d: "M152.037 75.149c-1.258.352-1.498 1.656-.302 1.638.808-.012.819-.048.159-.548-.646-.49-.599-.558.55-.788 2.358-.471 4.44-.286 5.034.449.511.632.524.612.13-.2-.456-.941-3.204-1.213-5.571-.551m7.286 1.892c.618.335 1.428.528 1.8.43.482-.127.417-.192-.223-.225-.495-.025-.9-.226-.9-.446s-.405-.393-.9-.384c-.84.015-.826.056.223.625M162.4 78.2c.274.33.89.6 1.369.6s1.042.16 1.251.355c.963.899 2.278.969 1.517.08-.491-.573-1.188-.835-2.226-.835-.831 0-1.511-.18-1.511-.4 0-.22-.202-.4-.449-.4-.31 0-.295.185.049.6m15.2.8c0 .508 1.03.606 6.7.638l17.136.1c9.759.058 10.424.017 10.253-.638-.207-.793-1.686-.968-1.695-.2-.005.372-.083.38-.304.032-.502-.789-32.09-.721-32.09.068m-21.1.087c.605.091 1.1.334 1.1.54 0 .205.304.373.676.373.59 0 .578-.075-.1-.587-.427-.323-1.226-.566-1.776-.54-.95.045-.945.055.1.214m18.1.913l-1.6.286 1.4.029c.77.016 1.76-.126 2.2-.315.943-.405.262-.405-2 0m44.8-.112c.44.107 1.141.491 1.558.853.724.629.737.618.286-.241-.326-.621-.809-.886-1.558-.854-.834.036-.901.092-.286.242m-5.909.401c.71.088 1.97.09 2.8.003.83-.087.249-.159-1.291-.161-1.54-.002-2.219.069-1.509.158M156 81.343c0 .325-.225.681-.5.792-.314.127-.332.214-.049.233.694.049 1.474-1.044.968-1.356-.23-.143-.419.006-.419.331m74.905-.256c.609.092 1.509.09 2-.005.492-.095-.005-.171-1.105-.168-1.1.003-1.503.081-.895.173m-8.205.395a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m12.2 1.194c.385.1 1.015.1 1.4 0 .385-.101.07-.183-.7-.183s-1.085.082-.7.183m-90.486 1.299c-.242.45-.959.842-1.715.936l-1.299.161 1.277.064c.861.043 1.454-.188 1.819-.709.358-.512 1.144-.826 2.323-.93l1.781-.157-1.886-.07c-1.5-.056-1.971.088-2.3.705m98.978-.489c1.096.091 2.145.379 2.331.64.235.329.289.291.176-.126-.117-.433-.766-.611-2.33-.64l-2.169-.04 1.992.166M139.484 85.2c-.115.44-.068.8.104.8.496 0 1.233-1.046.942-1.337-.468-.468-.832-.281-1.046.537m108.114-.103c.77.092 1.629.359 1.91.592.388.322.45.266.258-.232-.183-.479-.7-.64-1.909-.593-1.621.063-1.626.068-.259.233m-63.998.867c-2.31.165-5.28.519-6.6.786a450.485 450.485 0 01-10.6 2.051c-2.53.466-5.476 1.106-6.546 1.423-1.07.317-2.224.576-2.565.576-.34 0-1.535.256-2.654.568-2.856.798-10.521 2.687-12.435 3.065-1.817.359-5.416 1.309-7.2 1.9-.66.219-2.28.695-3.6 1.058-1.32.363-2.94.846-3.6 1.074-.66.227-1.83.558-2.6.735-.77.177-1.94.515-2.6.752-.66.237-2.55.823-4.2 1.302-1.65.478-3.27 1.007-3.6 1.175-.33.168-2.49.978-4.8 1.801-2.31.823-4.371 1.648-4.58 1.833-.209.185-.682.337-1.051.337-.369 0-.886.258-1.148.574-.262.316-1.004.69-1.649.832-.644.142-1.172.402-1.172.579 0 .177-.315.436-.7.575-.795.287-1.437.672-4.4 2.635-1.155.766-2.1 1.53-2.1 1.699 0 .168-.225.31-.5.315-.275.005-1.161.59-1.97 1.3a66.536 66.536 0 01-2.771 2.291c-1.821 1.4-8.239 7.818-10.159 10.161-3.167 3.863-7 9.03-7.3 9.839-.122.33-.444.87-.715 1.2-1.44 1.749-4.637 8.69-6.633 14.4-1.119 3.202-1.401 4.62-2.381 12-1.107 8.331.439 26.928 2.685 32.3l1.173 2.8c.64 1.526 4.353 7.466 5.268 8.429.277.29.506.65.509.8.003.149 1.016 1.351 2.252 2.671 1.236 1.32 3.168 3.389 4.294 4.598 6.773 7.271 23.422 19.202 26.794 19.202.149 0 .971.443 1.829.984.857.541 2.068 1.096 2.692 1.233.623.138 1.673.495 2.333.795 5.459 2.482 6.674 2.988 7.177 2.988.317 0 .674.16.795.355.121.195.896.481 1.724.635.827.155 1.684.43 1.904.61.22.181 1.3.513 2.4.737 1.1.224 3.62.784 5.6 1.245 1.98.461 5.04 1.009 6.8 1.216 1.76.208 4.1.553 5.2.765 1.869.362 8.259.979 21.6 2.087 12.817 1.065 48.538 1.051 57-.023 7.709-.978 14.541-2.074 15.234-2.445.393-.21 1.271-.382 1.953-.382.681 0 1.836-.25 2.567-.555.73-.305 2.119-.685 3.087-.845.967-.16 1.939-.427 2.159-.595.22-.167 1.3-.425 2.4-.572 1.1-.148 2.45-.425 3-.617.55-.192 2.44-.648 4.2-1.013 1.76-.365 3.92-.839 4.8-1.054l4-.98c1.32-.324 3.57-.836 5-1.139a104.8 104.8 0 005-1.208c1.32-.362 3.12-.833 4-1.047.88-.214 1.96-.55 2.4-.746.44-.197 1.79-.659 3-1.028 3.072-.937 13.065-5.478 13.6-6.181.11-.144.92-.693 1.8-1.22s1.69-1.058 1.8-1.18c.11-.122 1.73-1.525 3.6-3.119 1.87-1.594 3.606-3.123 3.859-3.399.252-.276 2.216-2.122 4.365-4.102 15.962-14.708 22.119-24.73 23.96-39 .355-2.75.864-6.53 1.131-8.4 1.449-10.153.456-15.756-4.502-25.4-2.666-5.186-2.861-5.536-4.513-8.12-.605-.946-1.1-1.801-1.1-1.899 0-.332-2.945-4.362-4.955-6.781-3.263-3.927-12.303-12.6-13.133-12.6-.172 0-.312-.18-.312-.4 0-.668 1.674-.447 2.278.3.511.632.524.612.13-.2-.24-.495-.745-.908-1.122-.917-.377-.009-1.128-.549-1.667-1.2-.646-.779-1.352-1.183-2.067-1.183-.597 0-1.176-.225-1.287-.5-.161-.4-.208-.4-.233 0-.018.275-.227.5-.465.5-.239 0-.353-.225-.254-.5.343-.958-.513-1.9-1.727-1.9-.652 0-1.186-.18-1.186-.4 0-.22-.438-.4-.973-.4-.636 0-1.065-.29-1.239-.837-.186-.588-.498-.775-1.051-.631-.465.122-.875-.026-1.004-.363-.12-.313-.54-.569-.933-.569-.731 0-1.364-1.011-1.001-1.599.111-.179-.247-.118-.795.136-1.174.545-1.274.988-.304 1.346.385.142.79.372.9.509.11.138.92.625 1.8 1.081 3.185 1.651 4.338 2.339 5.049 3.013.398.378 1.495 1.168 2.437 1.756 9.287 5.797 19.79 17.019 25.348 27.083 7.037 12.739 8.7 18.816 7.577 27.675-.306 2.42-.856 6.83-1.22 9.8-.604 4.917-1.201 7.658-2.657 12.2-1.571 4.902-7.327 13.882-12.298 19.186-5.936 6.334-19.004 18.34-22.236 20.429-3.399 2.197-8.453 4.788-11.641 5.97-1.517.562-3.119 1.185-3.559 1.384-.44.198-2.15.751-3.8 1.228s-3.81 1.108-4.8 1.402c-.99.295-3.15.834-4.8 1.199-1.65.365-5.25 1.195-8 1.844-2.75.65-5.81 1.347-6.8 1.55-4.682.958-12.056 2.761-15 3.668-13.643 4.204-43.519 5.386-79.8 3.159-11.081-.68-27.172-2.796-32.235-4.239-1.119-.319-2.433-.58-2.92-.58-.487 0-1.371-.248-1.965-.552-.594-.303-1.71-.677-2.48-.83-.77-.153-2.03-.546-2.8-.875-.77-.328-1.76-.74-2.2-.916-.44-.175-1.61-.686-2.6-1.136a46.897 46.897 0 00-3.799-1.483c-1.099-.366-2.809-1.085-3.8-1.598-.99-.513-3.511-1.782-5.601-2.82-8.561-4.25-16.55-10.465-25.132-19.55-2.823-2.988-7.268-8.628-7.268-9.221 0-.099-.508-.953-1.13-1.899-6.339-9.652-7.901-35.26-3.058-50.12 3.887-11.923 11.567-23.135 23.017-33.6 1.203-1.1 2.724-2.406 3.379-2.902.656-.497 2.092-1.591 3.192-2.432 1.1-.84 2.871-2.054 3.935-2.697a125.842 125.842 0 003-1.865c.586-.382 1.335-.81 1.665-.95.33-.141 1.563-.696 2.74-1.235 1.948-.892 4.136-1.73 10.46-4.002 1.21-.435 3.28-1.1 4.6-1.479 1.32-.379 2.94-.873 3.6-1.097 1.553-.529 4.673-1.45 7.2-2.126 1.1-.295 2.99-.829 4.2-1.189 3.918-1.164 6.566-1.87 8.2-2.189 1.554-.302 3.057-.687 7.2-1.84 1.1-.306 3.8-.944 6-1.417 2.2-.474 4.54-1.012 5.2-1.197 1.199-.336 10.841-2.151 18.4-3.463 4.811-.835 28.675-.963 37-.197 2.75.252 7.07.643 9.6.867 10.759.953 27.828 3.137 30.133 3.856.404.126 2.114.472 3.8.77 4.108.724 11.062 2.426 12.072 2.955.332.174 1.682.628 3 1.008 3.102.895 9.502 3.492 13.732 5.571 1.175.577 2.39 1.05 2.7 1.05.893 0 .653-.683-.33-.94-1.139-.298-.542-.937 1.093-1.169l1.2-.171-1.251-.06c-.688-.033-1.469.202-1.735.523-.513.618-2.723.018-4.603-1.251-.434-.292-1.087-.532-1.451-.532-.364 0-.886-.27-1.16-.6-.274-.33-.926-.6-1.449-.6-1.007 0-1.294-.595-.451-.935.275-.111.095-.216-.4-.233-.495-.018-.9-.183-.9-.368 0-.184-.45-.541-1-.791-.55-.251-1-.73-1-1.064 0-.379-.341-.591-.9-.563-.61.032-.688.103-.241.222.362.096.751.525.863.953.111.429.49.779.841.779.35 0 .637.17.637.378 0 .382-1.691-.034-7.2-1.773-4.665-1.472-13.108-3.354-19.6-4.368-2.09-.326-5.6-.879-7.8-1.228-4.18-.662-5.974-.854-20.4-2.186-9.655-.891-33.53-1.391-41-.859m71.8 1.225c2.096.805 3.882 1.262 4.097 1.048.13-.13-.049-.237-.397-.237-.348 0-.693-.153-.767-.34-.073-.187-.943-.439-1.933-.559-1.018-.124-1.452-.086-1 .088m-123.62.377c-.209.202-.83.447-1.38.546-.87.156-.837.186.251.234.688.029 1.475-.216 1.749-.546.535-.644.011-.842-.62-.234m128.82 1.122c.44.107 1.07.424 1.4.705.33.28 1.14.605 1.8.721.66.116 1.65.334 2.2.483.704.192.837.157.449-.118-.303-.214-.441-.569-.305-.788.156-.253-.458-.333-1.678-.219-1.424.134-2.059.018-2.444-.445-.286-.345-.903-.606-1.371-.581-.808.044-.81.057-.051.242m-72.085.576c-3.787.171-8.073.587-9.525.924-1.452.336-3.098.612-3.658.612-.559 0-2.213.26-3.675.577-1.461.318-4.547.966-6.857 1.44-2.31.474-4.74 1.018-5.4 1.209-.66.191-3.72.911-6.8 1.599-6.584 1.472-8.644 2.002-17 4.375a221.05 221.05 0 01-4.4 1.206c-5.32 1.345-18.222 5.538-22.2 7.214-.44.185-1.79.74-3 1.233-5.873 2.391-13.731 8.123-20.607 15.031-4.188 4.207-10.593 11.998-10.593 12.885a.58.58 0 01-.32.498c-.311.129-4.08 6.176-4.08 6.546 0 .102-.525 1.31-1.166 2.686-4.634 9.94-6.317 24.132-4.613 38.901.353 3.066 1.061 6.754 1.381 7.2.158.22.412.917.563 1.55 2.204 9.204 18.534 26.566 32.035 34.056 4.092 2.27 6.886 3.65 10 4.937 4.096 1.693 5.196 2.162 7.4 3.151 4.443 1.996 10.084 3.771 14.2 4.471 1.32.224 4.398.772 6.841 1.217 5.938 1.082 15.109 2.043 30.559 3.204 6.926.52 42.43.544 48.2.032 10.191-.904 17.228-1.967 22.8-3.445 3.681-.976 11.677-2.917 14.8-3.592 1.54-.333 3.88-.859 5.2-1.168 1.32-.31 3.3-.766 4.4-1.014 1.1-.248 2.916-.709 4.035-1.025 1.119-.316 2.346-.574 2.725-.574s1.534-.253 2.565-.562c1.031-.309 3.315-.96 5.075-1.445 2.888-.797 5.205-1.601 10-3.47 2.478-.965 6.833-3.218 8.967-4.638 6.938-4.616 23.619-20.668 27.948-26.894l1.533-2.2c1.698-2.435 3.945-6.978 4.755-9.616.368-1.196.837-2.535 1.044-2.975.633-1.351 1.235-5.206 2.583-16.541 1.249-10.506.409-13.971-6.382-26.334-2.18-3.967-4.31-7.427-5.419-8.798-.566-.7-1.659-2.101-2.429-3.114-1.356-1.784-7.961-8.389-10.012-10.013-.556-.44-1.816-1.444-2.8-2.232-2.403-1.925-8.22-5.968-8.586-5.968-.162 0-2.081-1.08-4.266-2.4-2.185-1.32-4.047-2.4-4.138-2.4-.091 0-2.017-.879-4.281-1.954-2.265-1.075-5.017-2.275-6.117-2.669-1.1-.393-2.18-.843-2.4-1-.22-.156-.997-.412-1.727-.569-.73-.156-1.81-.535-2.4-.843-.59-.308-1.467-.561-1.949-.563-.482-.001-.978-.166-1.102-.367-.125-.201-.99-.492-1.924-.646-.934-.154-3.408-.694-5.498-1.198-2.09-.505-6.32-1.303-9.4-1.775s-6.5-1.041-7.6-1.265c-1.1-.225-3.8-.564-6-.755-2.2-.19-5.35-.531-7-.757-5.037-.689-12.567-1.253-21.8-1.633-4.84-.2-10.33-.428-12.2-.508-1.87-.08-6.498-.005-10.285.166m-64.943.789c-.478.893-.059.952 1.398.197l1.061-.551-1.03-.197c-.732-.14-1.145.02-1.429.551m94.028.345c.77.182 3.65.447 6.4.588 2.75.141 6.025.433 7.279.649 1.253.216 4.223.564 6.6.773 2.376.21 5.851.63 7.721.934 1.87.303 5.02.771 7 1.038 1.98.267 4.59.732 5.8 1.033 1.21.302 3.64.843 5.4 1.203 3.207.656 12.997 3.634 16 4.866 3.615 1.483 13.81 6.571 15.822 7.896 1.188.782 2.288 1.422 2.445 1.422.366 0 6.668 4.268 7.759 5.253.454.411.93.747 1.059.747.921 0 12.419 11.409 14.311 14.2 3.77 5.562 4.434 6.609 5.837 9.2.834 1.54 1.93 3.52 2.435 4.4 1.083 1.887 1.559 2.905 2.616 5.6 2.156 5.498 2.551 9.599 1.6 16.6-.285 2.09-.792 5.96-1.129 8.6-.336 2.64-.674 5.16-.751 5.6-.167.962-2.157 6.942-2.604 7.829-4.995 9.894-13.161 19.255-27.19 31.171-1.425 1.21-2.84 2.432-3.146 2.717-1.52 1.415-9.65 6.078-10.604 6.082-.186 0-.906.246-1.6.545-2.464 1.063-3.561 1.481-5.796 2.21-4.223 1.376-6.26 1.956-7.861 2.238-.878.154-1.778.398-2 .542-.222.144-1.573.481-3.003.75-1.43.269-3.68.755-5 1.081-1.32.325-3.3.792-4.4 1.036-5.151 1.146-7.308 1.641-8.6 1.978-.77.2-3.11.75-5.2 1.221-2.09.472-4.16 1.014-4.6 1.206-.44.192-1.61.47-2.6.618-.99.148-2.112.433-2.492.632-1.018.535-8.902 1.574-21.024 2.772-5.733.566-43.349.285-49.284-.368-2.31-.254-6.63-.65-9.6-.88-9.939-.768-12.591-1.049-14-1.482-.77-.237-2.57-.545-4-.685-1.43-.141-3.14-.416-3.8-.611-.66-.195-2.19-.533-3.4-.75-5.259-.942-9.966-2.462-15.101-4.876-1.376-.647-2.666-1.176-2.868-1.176-.201 0-.876-.259-1.499-.576a46.467 46.467 0 00-2.732-1.233c-2.086-.858-6.743-3.128-7-3.413-.11-.122-.991-.627-1.957-1.123-1.941-.996-7.328-4.429-7.643-4.87-.11-.155-1.418-1.211-2.906-2.349-3.065-2.341-10.493-9.63-12.88-12.638-.873-1.099-1.688-2.088-1.811-2.198-.568-.508-2.803-3.548-2.803-3.813 0-.164-.508-1.128-1.13-2.143-.621-1.014-1.328-2.384-1.571-3.044-.243-.66-.808-2.171-1.257-3.357-3.004-7.949-2.418-37.432.816-41.023.188-.209.342-.721.342-1.138 0-.417.263-1.236.584-1.82.679-1.236 2.216-4.722 2.216-5.026 0-1.903 9.202-14.13 15.134-20.109 5.587-5.631 16.761-14.045 18.78-14.141.157-.007 1.006-.361 1.886-.786.88-.425 1.87-.785 2.2-.799.33-.015.949-.291 1.376-.614.428-.323 1.096-.587 1.487-.587.39 0 1.391-.295 2.223-.655l2.314-1.002c.802-.347 6.029-1.988 9.4-2.951.99-.283 2.307-.712 2.926-.953.619-.242 1.618-.439 2.22-.439.602 0 1.272-.178 1.49-.396.219-.219 1.2-.568 2.18-.777.981-.208 3.044-.744 4.584-1.191 1.54-.446 5.5-1.457 8.8-2.246 3.3-.789 6.9-1.677 8-1.973 1.1-.297 3.44-.843 5.2-1.213 1.76-.37 3.92-.851 4.8-1.069.88-.218 3.13-.64 5-.938 1.87-.298 4.93-.854 6.8-1.235 5.899-1.202 35.542-1.62 40-.564M94 90.681c0 .462 1.135 1.528 1.358 1.276.076-.086-.198-.503-.61-.927-.411-.423-.748-.581-.748-.349m26.584.546c-.405.655-.082.69 1.016.112.959-.506.964-.527.124-.533-.482-.003-.995.186-1.14.421m78.216.177c-1.87.294-4.48.551-5.8.57-1.32.02-4.83.491-7.8 1.048-2.97.558-6.39 1.175-7.6 1.373-5.589.914-8.609 1.612-18.2 4.202-1.1.297-2.9.743-4 .991s-2.99.7-4.2 1.006l-3.984 1.002c-.982.245-1.972.586-2.2.758-.229.172-1.856.724-3.616 1.226-1.76.503-3.371 1.073-3.58 1.267-.209.194-.698.353-1.086.353-.389 0-1.388.29-2.22.644L131.8 107c-.66.281-2.1.824-3.2 1.206-2.506.871-3.775 1.417-8.941 3.847-2.277 1.071-4.287 1.947-4.466 1.947a.55.55 0 00-.46.304c-.073.167-1.573 1.014-3.333 1.88-1.76.867-3.29 1.675-3.4 1.796-.11.121-1.055.666-2.1 1.212-1.045.545-1.9 1.13-1.9 1.3 0 .169-.231.308-.514.308-.795 0-6.585 4.063-11.671 8.189-1.693 1.373-7.54 7.105-9.194 9.011-1.293 1.491-4.353 6.418-5.459 8.791-.669 1.435-1.382 2.918-1.584 3.295-.362.675-.884 2.555-1.587 5.714-1.109 4.98-.038 18.146 2.197 27 .361 1.43.795 3.23.966 4 .37 1.67 2.679 8.478 3.48 10.26.311.694.566 1.456.566 1.694 0 .239.54 1.312 1.2 2.384.66 1.073 1.2 2.075 1.2 2.228 0 1.66 6.899 9.683 11.601 13.49 2.271 1.839 10.56 7.461 11.724 7.952.481.203 1.775.902 2.875 1.554 2.305 1.365 4.547 2.454 10.4 5.053 3.031 1.347 8.708 3.402 12.6 4.562 1.65.491 3.36 1.047 3.8 1.235.903.385 3.733 1.052 7 1.65 1.21.222 3.1.648 4.2.947 1.855.504 5.998 1.077 16 2.215 6.238.71 30.734-.051 33.889-1.052.748-.238 5.324-.972 12.311-1.976 5.612-.807 8.924-1.371 9.6-1.635.33-.129 2.13-.479 4-.778 4.82-.771 7.598-1.306 12.4-2.389 2.31-.521 5.19-1.137 6.4-1.369 1.21-.232 3.37-.701 4.8-1.042 1.43-.342 3.77-.869 5.2-1.171 1.43-.303 3.59-.852 4.8-1.221 1.21-.369 3.1-.908 4.2-1.198 1.1-.291 2.54-.717 3.2-.948.66-.23 3.81-1.242 7-2.248 6.364-2.008 7.669-2.49 12.8-4.728 3.059-1.334 10.212-4.786 10.401-5.02.111-.137 1.006-.683 1.99-1.213 6.985-3.763 10.844-8.011 16.202-17.836.84-1.54 1.917-3.43 2.393-4.2 1.406-2.274 6.214-12.221 6.214-12.856 0-.321.17-.755.377-.964 1.815-1.829 3.448-15.936 2.37-20.474-2.107-8.87-3.658-12.638-7.444-18.077-4.252-6.108-13.427-14.165-21.903-19.233-1.98-1.183-3.87-2.369-4.2-2.633-.33-.265-1.59-1.016-2.8-1.668-1.21-.653-3.37-1.843-4.8-2.646-1.43-.803-3.59-1.924-4.8-2.491-10.219-4.789-12.384-5.758-12.901-5.771-.274-.007-.848-.277-1.275-.6-.428-.323-1-.587-1.273-.587-.272 0-1.662-.54-3.088-1.2-1.426-.66-2.77-1.2-2.986-1.2-.217 0-1.718-.539-3.336-1.199-1.617-.659-3.335-1.199-3.817-1.2-.482 0-.977-.163-1.1-.362-.122-.198-1.528-.743-3.123-1.209a469.139 469.139 0 01-5.301-1.588c-2.271-.699-7.517-2.028-13.482-3.417-1.475-.344-3.455-.602-4.4-.575l-1.718.05 1.6.304c7.48 1.421 11.37 2.279 13.6 2.999.88.284 2.77.83 4.2 1.214 2.936.786 12.201 3.809 14.2 4.632.44.181 1.52.581 2.4.888 2.334.814 9.679 3.794 12 4.867 1.1.509 3.35 1.559 5 2.334 1.65.775 3.81 1.774 4.8 2.219.99.446 2.7 1.327 3.8 1.958 1.1.632 3.44 1.918 5.2 2.86 1.76.941 3.29 1.84 3.4 1.997.11.158.47.412.8.565 12.114 5.62 26.702 20.728 29.994 31.063.455 1.43 1.035 3.23 1.289 4 1.453 4.42 1.498 14.468.085 19.2-1.945 6.515-4.802 12.968-8.766 19.8l-4.558 7.849c-6.25 10.754-19.59 18.244-46.844 26.3-1.65.488-3.81 1.131-4.8 1.43-2.739.827-10.078 2.532-20.8 4.833-1.65.354-3.72.81-4.6 1.015-1.56.362-3.474.693-9.2 1.594-1.54.242-3.394.621-4.121.843-.726.222-4.326.848-8 1.391-3.673.544-8.389 1.253-10.479 1.576-7.323 1.133-19.112 2.169-24.683 2.169-6.886 0-21.411-1.329-26.717-2.444l-6.6-1.386c-2.53-.531-5.05-1.13-5.6-1.331-.55-.201-2.35-.768-4-1.259-1.65-.491-3.567-1.137-4.26-1.436-.694-.299-1.443-.544-1.665-.544-.74 0-12.628-5.23-15.675-6.896a208.32 208.32 0 00-4.2-2.245c-14.007-7.06-25.369-20.59-28.433-33.859-.153-.66-.417-1.38-.587-1.6-.17-.22-.498-1.3-.728-2.4-.231-1.1-.782-3.53-1.224-5.4-5.103-21.576-2.304-33.678 10.972-47.446 7.657-7.942 28.707-20.806 40.2-24.567.55-.18 1.99-.718 3.2-1.195 4.439-1.752 15.85-5.67 17.527-6.019.949-.197 1.882-.455 2.073-.573.191-.118 1.124-.37 2.073-.56.95-.19 5.327-1.279 9.727-2.419 8.167-2.117 11.99-2.953 16.6-3.631 1.43-.21 2.853-.479 3.161-.597 3.435-1.315 21.371-2.738 31.039-2.463 5.522.157 7.163.106 6-.187-2.607-.657-16.317-.752-20.2-.139m69.4.196c.66.437 1.47.785 1.8.772.358-.014.254-.162-.259-.369-.473-.191-.978-.54-1.124-.775-.145-.235-.569-.427-.941-.425-.461.001-.294.255.524.797m-159 .558c.55.321 1.051.444 1.114.271.063-.172.603-.224 1.2-.116s.954.055.793-.118c-.161-.173-1.151-.383-2.2-.468-1.835-.148-1.869-.132-.907.431m7.377-.196c.123.2.584.269 1.023.154 1.101-.288 1.002-.516-.224-.516-.563 0-.922.163-.799.362m155.261.638c.593.55 1.39 1 1.771 1s.917.27 1.191.6c.274.33.791.586 1.149.568.546-.026.554-.068.051-.258-.33-.125-.744-.471-.92-.769-.176-.297-.778-.541-1.337-.541-.681 0-1.087-.264-1.227-.8-.118-.452-.546-.8-.983-.8-.684 0-.649.116.305 1M97.7 92.294a29.38 29.38 0 003.8 0c1.045-.082.19-.15-1.9-.15s-2.945.068-1.9.15m-6.1 1.715c0 .229.278.523.617.653.938.36 1.049-.029.165-.581-.495-.309-.782-.335-.782-.072m4.1.682c.825.087 2.175.087 3 0 .825-.086.15-.157-1.5-.157s-2.325.071-1.5.157m6.775-.043c.372.11.767.505.877.877.147.489.18.456.12-.12a.975.975 0 00-.877-.877c-.576-.06-.609-.027-.12.12m98.725.16c-5.57.356-11.568 1.005-14.6 1.581-1.1.209-3.8.675-6 1.035-2.2.36-4.9.89-6 1.178-1.911.5-8.489 2.046-13.6 3.197-3.402.766-9.783 2.408-11.417 2.938-.761.247-2.643.836-4.183 1.311-4.283 1.319-9.907 3.172-10.8 3.558-.44.191-2.78 1.112-5.2 2.048-15.217 5.882-31.527 15.935-40.2 24.775-5.817 5.93-9.2 11.241-11.064 17.371-1.583 5.204-.68 20.649 1.694 29 .344 1.21.804 2.92 1.022 3.8 1.455 5.881 5.32 14.746 8.108 18.6 6.082 8.406 18.426 17 33.64 23.42 4.853 2.048 13.532 4.899 18.2 5.978 1.65.382 3.81.928 4.8 1.214.99.286 3.06.638 4.6.781 1.54.144 3.25.421 3.8.615.55.194 4.002.648 7.672 1.008 12.788 1.256 29.742.389 44.528-2.277 1.32-.238 3.57-.582 5-.765 1.43-.183 4.04-.611 5.8-.951 1.76-.341 4.82-.89 6.8-1.22 1.98-.33 5.22-.969 7.2-1.421 1.98-.452 4.725-1.023 6.1-1.268 1.375-.245 2.5-.611 2.5-.812 0-.476-5.284-.195-7.6.405-2.215.573-9.214 1.505-16.4 2.183-7.152.675-30.731.674-36.8-.002-7.101-.792-13.539-1.686-16.4-2.28-9.349-1.94-9.998-2.096-16-3.837-3.919-1.137-9.986-3.095-11-3.551-.44-.197-3.022-1.3-5.738-2.451-4.858-2.058-13.636-6.601-15.785-8.169-10.089-7.36-17.505-15.832-22.759-26-10.875-21.042-3.514-43.624 19.2-58.9 2.699-1.815 5.022-3.3 5.163-3.3.141 0 .54-.246.888-.546 2.459-2.126 17.584-8.865 25.231-11.242 7.15-2.223 11.912-3.523 16-4.368 1.65-.342 4.26-.896 5.8-1.233 1.54-.337 3.295-.613 3.9-.612.605.001 2.675-.26 4.6-.58 10.491-1.741 29.921-2.279 38.3-1.062 1.54.224 4.87.69 7.4 1.035 4.975.679 9.561 1.591 12.371 2.46.974.301 2.152.548 2.616.548.465 0 2.458.517 4.429 1.149 1.971.631 4.934 1.547 6.584 2.035 3.008.889 8.393 2.905 9.695 3.629.382.213.894.387 1.139.387 1.157 0 17.337 8.014 21.366 10.583 8.255 5.263 10.807 7.167 15.737 11.746 6.641 6.169 14.063 17.022 14.063 20.565 0 .362.15.752.334.865.305.189 1.432 5.164 1.821 8.041.089.66.118-.06.064-1.6-.354-10.158-9.304-23.857-21.821-33.4-3.644-2.778-16.302-10.8-17.042-10.8-.115 0-2.583-1.143-5.483-2.539-6.773-3.262-8.107-3.861-8.588-3.861-.216 0-.909-.269-1.539-.598-.63-.328-1.461-.598-1.846-.6-.385-.001-.7-.139-.7-.306 0-.308-3.063-1.427-7.4-2.702-1.32-.388-2.76-.842-3.2-1.008-2.568-.968-4.612-1.557-6.2-1.786-.99-.143-2.52-.498-3.4-.79-2.805-.929-9.229-2.152-17-3.235-10.254-1.43-40.56-.807-43.305.89-.219.135-1.843.392-3.61.57-3.064.309-4.646.596-8.685 1.579-.99.241-2.88.679-4.2.975-1.32.296-3.39.839-4.6 1.206-1.21.368-2.83.806-3.6.975-2.768.605-8.973 2.738-13.2 4.538-5.637 2.4-14.918 6.997-16.862 8.352-.584.407-1.244.74-1.466.74-.223 0-.465.135-.539.3-.073.165-2.023 1.56-4.333 3.1-6.333 4.222-15.385 13.517-17.336 17.8-.15.33-.625 1.14-1.056 1.8-1.381 2.117-2.653 5.226-4.255 10.4-1.025 3.31-1.03 14.73-.008 18.6 1.175 4.449 2.515 7.674 5.226 12.576 2.894 5.235 8.699 12.81 13.237 17.274 2.355 2.317 10.057 8.15 10.761 8.15.321 0 .683.16.804.356.121.196 1.077.807 2.124 1.357 4.071 2.14 7.579 3.876 9.303 4.604.99.418 2.34 1 3 1.294 4.726 2.105 16.887 6 23 7.366 1.65.369 3.72.856 4.6 1.083 1.932.499 6.079 1.167 17.6 2.834 2.053.297 10.18.472 22.672.49 10.71.015 19.605.159 19.767.321.162.162-.321.299-1.072.305-.752.005-2.087.19-2.967.412-1.764.444-7.832 1.384-12.8 1.983-1.76.212-3.92.571-4.8.797-6.784 1.742-37.923 1.825-41.8.111-.33-.146-2.13-.476-4-.735-4.24-.586-7.953-1.335-9-1.816-.44-.202-1.61-.526-2.6-.721-2.616-.514-8.688-2.363-10.018-3.05-.628-.325-1.501-.591-1.939-.591-.437 0-.898-.166-1.024-.369-.125-.203-.805-.496-1.51-.651-.706-.155-1.559-.433-1.896-.617-1.035-.566-4.352-1.963-4.66-1.963-.159 0-.574-.236-.922-.525-.347-.289-1.441-.868-2.431-1.287-8.15-3.449-20.294-12.51-24.912-18.586-2.367-3.114-6.688-11.435-6.688-12.879 0-.324-.132-.722-.293-.883-.751-.751-3.641-11.793-4.354-16.64-1.589-10.786-1.64-16.343-.199-21.6 3.304-12.053 16.457-24.92 35.246-34.48 2.53-1.287 4.87-2.506 5.2-2.707.858-.524 7.539-3.613 7.814-3.613.126 0 .985-.337 1.908-.748.923-.411 3.298-1.333 5.278-2.048 1.98-.715 4.167-1.548 4.86-1.852.694-.304 1.495-.552 1.781-.552.287 0 2.059-.522 3.94-1.16 1.88-.637 5.669-1.737 8.419-2.443 2.75-.707 5.797-1.535 6.771-1.841.974-.306 2.12-.556 2.547-.556.426 0 1.609-.258 2.628-.574 1.02-.316 3.294-.878 5.054-1.248 1.76-.371 3.759-.838 4.443-1.038 1.099-.322 2.864-.639 10.757-1.931 9.295-1.522 22.431-2.486 27.4-2.011 2.31.221 5.37.505 6.8.631 4.803.425 15.351 2.71 20.2 4.376.88.302 3.67 1.193 6.2 1.979 2.53.786 4.96 1.582 5.4 1.767.44.186 1.481.633 2.314.994.832.36 1.774.655 2.093.655.319 0 1.695.54 3.058 1.2 1.362.66 2.696 1.2 2.965 1.2.268 0 1.576.54 2.907 1.2 1.33.66 2.534 1.2 2.676 1.2 1.004 0 17.683 8.384 18.899 9.5.3.275.71.5.911.5.35 0 4.149 2.22 4.977 2.909.355.296 4.45 3.039 6.108 4.091 1.409.895 7.118 5.642 9.841 8.182 1.687 1.574 5.396 6.179 6.952 8.629 3.086 4.863 5.948 15.234 5.589 20.252-.594 8.305-2.303 13.185-8.873 25.337-3.101 5.736-3.995 7.351-5.451 9.851-2.586 4.44-7.291 8.654-13.166 11.792-.77.412-1.67.945-2 1.185-.33.241-1.59.852-2.8 1.358-3.611 1.509-6.551 2.816-7.373 3.278-.425.238-1.235.578-1.8.755-.565.176-2.017.702-3.227 1.167-2.408.926-5.784 2.045-9.2 3.051-1.21.356-2.926.898-3.813 1.205-.888.307-2.328.539-3.2.516l-1.587-.042 1.4-.477c1.317-.449 2.087-.764 5-2.044 2.752-1.209 11.246-5.508 11.8-5.971.33-.277.87-.622 1.2-.768.911-.402 5.804-3.656 6.4-4.255.11-.11 1.1-.907 2.2-1.77 2.024-1.587 7.972-7.426 9.812-9.631 1.715-2.056 4.636-5.972 4.923-6.6.151-.33.618-1.14 1.039-1.8 3.256-5.104 6.067-12.78 5.962-16.275-.045-1.48-.107-1.7-.205-.725-1.017 10.09-9.446 24.024-19.877 32.859-1.57 1.33-3.333 2.85-3.918 3.379-.585.529-1.189.962-1.343.962-.153 0-.96.54-1.793 1.2-.833.66-1.615 1.2-1.738 1.2-.122 0-.996.521-1.942 1.159-1.559 1.05-9.24 5.02-12.72 6.575-1.711.764-6.304 2.375-10.6 3.717-1.76.55-3.544 1.188-3.964 1.418-.42.229-1.68.558-2.8.73-1.12.172-2.576.508-3.236.746-.66.238-1.702.533-2.316.655-.614.123-1.009.398-.877.612.345.558 2.532.447 4.393-.224.88-.317 2.14-.58 2.8-.584.66-.005 1.716-.278 2.346-.606.63-.329 1.53-.602 2-.608.47-.005 2.384-.467 4.254-1.026 1.87-.559 4.142-1.174 5.048-1.368 3.943-.843 19.141-6.025 19.903-6.787.225-.225.663-.409.973-.409 2.763 0 17.547-8.905 21.198-12.77 1.406-1.488 5.678-7.977 5.678-8.625 0-.093.514-1.042 1.143-2.108 1.349-2.289 6.939-13.284 7.777-15.297 3.779-9.082 4.054-18.263.81-27-3.544-9.542-8.543-15.618-19.541-23.748-5.748-4.249-5.696-4.214-9.389-6.311-1.43-.812-3.86-2.222-5.4-3.133-2.626-1.554-15.14-7.808-15.623-7.808-.121 0-1.066-.386-2.099-.858-2.824-1.29-8.106-3.394-13.056-5.2a405.183 405.183 0 01-5.222-1.932c-3.156-1.258-12.089-3.839-18.8-5.432-8.021-1.904-19.33-2.762-28.6-2.17M106 95.877c.55.112 1.149.411 1.33.663.221.308.277.261.17-.14-.091-.338-.671-.628-1.331-.663-1.007-.055-1.03-.036-.169.14m197.463.303c-.153.399-1.011.625-2.743.723l-2.52.143 2.651.077c1.896.055 2.787-.087 3.13-.5.263-.317 1.05-.648 1.749-.736 1.094-.137 1.041-.168-.387-.223-1.125-.043-1.729.123-1.88.516m-7.958.503c.497.096 1.217.092 1.6-.008.382-.1-.025-.179-.905-.174-.88.004-1.193.086-.695.182m-190.05.717c-.126.33-.574.6-.993.6-.42 0-.988.27-1.262.6-.607.731-.286.767.903.1 1.796-1.007 2.827-1.9 2.194-1.9-.336 0-.715.27-.842.6m203.653.11c-.171.652-.537.893-1.371.903-.625.007-1.486.277-1.913.6-.761.575-.76.587.076.587.469 0 .964-.18 1.1-.4.136-.22.575-.4.975-.4.874 0 1.766-.976 1.533-1.676-.092-.277-.272-.103-.4.386M100.545 99.8c-.129.335-.723.6-1.345.6-.693 0-1.215.265-1.381.7-.214.561-.167.601.237.2.277-.275.909-.5 1.404-.5.495 0 1.044-.25 1.22-.555.176-.306.68-.645 1.12-.754.717-.178.705-.203-.113-.245-.501-.025-1.016.224-1.142.554m-4.8 2.4c-.127.33-.526.614-.888.632-.507.024-.528.082-.092.255.311.123.761-.042 1-.367s.705-.695 1.035-.824c.474-.184.45-.239-.113-.264-.391-.018-.816.238-.942.568m-3.404 2.161c-.532.418-1.412.844-1.954.945l-.987.185 1 .04c.55.022 1.54-.402 2.2-.943 1.401-1.149 1.169-1.351-.259-.227m-3.941 1.192c0 .417-.357.847-.8.963-.44.115-.8.41-.8.656 0 .273.388.192 1-.209.842-.552 1.438-2.163.8-2.163-.11 0-.2.339-.2.753m-29.2 2.614c0 .311-.225.657-.5.768-.377.152-.38.21-.014.233.267.018.679-.328.914-.768.29-.542.295-.8.014-.8-.228 0-.414.255-.414.567m1.206-.091c-.003.372.177.79.4.928.576.356 1.712 2.941 2.02 4.596l.26 1.4.057-1.676c.031-.922-.134-1.795-.368-1.939-.233-.145-.601-.65-.817-1.124-.886-1.945-1.546-2.873-1.552-2.185m23.827.735c-.641.654-1.49 1.189-1.886 1.189-.395 0-.915.405-1.155.9-.394.812-.381.832.13.2.311-.385.867-.7 1.236-.7.368 0 1.172-.515 1.787-1.144.615-.629 1.374-1.245 1.687-1.368.471-.186.466-.228-.032-.245-.33-.012-1.125.514-1.767 1.168M304 108.563c0 .364-.28.489-.796.354-.437-.114-.696-.367-.576-.562.349-.566 1.372-.411 1.372.208m-245.975 1.774c-.014.295.335.994.775 1.554.44.559.8.823.8.587 0-.237-.193-.55-.428-.695-.235-.146-.584-.651-.775-1.124-.19-.472-.358-.617-.372-.322m250.476 1.052c.385.529.547 1.058.359 1.174-.441.273-2.932-1.557-2.588-1.902.536-.536 1.55-.205 2.229.728m-228.721.572c-.209.199-.74.448-1.18.554-.759.182-.756.195.051.239.468.025 1.075-.224 1.349-.554.543-.654.391-.819-.22-.239m233.02 2.019c0 .614 2.727 2.514 3.287 2.289.369-.148.344-.218-.087-.251-.764-.057-2.4-1.408-2.4-1.982 0-.24-.18-.436-.4-.436-.22 0-.4.171-.4.38m-237.679 1.356c-.294.294-.802.64-1.128.768-.498.196-.491.238.045.264.351.018.964-.328 1.362-.768.803-.888.568-1.111-.279-.264M63.34 118.4c0 1.87.069 2.635.153 1.7.084-.935.084-2.465 0-3.4s-.153-.17-.153 1.7m253.83-.653c.533.579 1.279 1.053 1.657 1.053.378 0 .79.268.916.595.125.327 1.089 1.129 2.142 1.782s2.275 1.735 2.715 2.404c.44.669.907 1.217 1.038 1.218.193.001 2.089 1.808 4.562 4.35.22.226.76.754 1.2 1.173.44.42 1.25 1.351 1.8 2.069a57.88 57.88 0 002.298 2.758c.714.798 1.299 1.558 1.3 1.69.001.131.362.654.802 1.161.44.507.8.737.8.51 0-.227-.27-.636-.6-.91-.33-.274-.6-.709-.6-.968 0-.258-.532-.911-1.183-1.451-.651-.539-1.191-1.139-1.2-1.333-.009-.193-.647-1.048-1.417-1.901-.77-.852-1.4-1.729-1.4-1.948 0-.22-.278-.399-.619-.399-.34 0-.925-.539-1.3-1.197-.374-.659-.818-1.199-.986-1.2-.168-.002-1.608-1.317-3.2-2.923-1.592-1.607-3.552-3.32-4.355-3.809-.803-.488-1.563-1.154-1.688-1.479-.125-.326-.593-.592-1.039-.592-.447 0-.813-.137-.813-.304 0-.167-.405-.551-.9-.852-.868-.53-.866-.512.07.503m-249.32 4.086c-4.378 4.437-4.478 4.474-4.771 1.767-.146-1.354-.153-1.346-.215.251-.131 3.387 1.379 2.521 7.852-4.501.431-.467 1.032-.938 1.334-1.045.303-.108.433-.322.29-.477-.143-.155-2.163 1.648-4.49 4.005m-8.936 2.767c.003 1.1.081 1.503.173.895.092-.609.09-1.509-.005-2-.095-.492-.171.005-.168 1.105m.35 4.529c-.035.73-.334 1.598-.664 1.928-.33.33-.6 1.033-.6 1.562 0 .53-1.252 3.397-2.782 6.373-1.529 2.976-2.955 5.995-3.167 6.709a87.55 87.55 0 01-.793 2.499c-.623 1.837-1.561 5.281-2.343 8.6-1.032 4.387-1.02 20.2.02 25.6 1.195 6.205 3.275 13.836 3.873 14.205.166.102.415.791.553 1.53.139.738.699 2.27 1.246 3.402.546 1.133.993 2.142.993 2.243 0 .102.504 1.048 1.121 2.102.648 1.109 1.321 3.1 1.595 4.718 1.021 6.026 1.251 6.921 2.514 9.811 2.18 4.986 4.322 7.572 6.283 7.582 1.891.01 2.359-1.353 1.029-2.993-2.604-3.21-4.204-6.272-3.596-6.88.134-.133.593.203 1.021.747 2.417 3.073 13.168 12.733 14.171 12.733.123 0 1.357.765 2.743 1.7 3.361 2.268 3.509 2.353 8.119 4.63 3.628 1.792 5.172 2.436 11.6 4.838 5.886 2.2 13.35 4.097 26 6.608 1.54.305 3.759.751 4.931.99 1.171.239 2.611.418 3.2.398 1.468-.05-.558-.63-4.931-1.412-6.485-1.16-9.265-1.7-12-2.332-1.54-.355-3.568-.816-4.506-1.022-.938-.207-2.018-.536-2.4-.732-.382-.196-1.467-.474-2.411-.619-.945-.144-2.025-.415-2.4-.603-.376-.188-2.033-.762-3.683-1.277-1.65-.514-3.171-1.077-3.38-1.251-.209-.174-.624-.316-.922-.316-.298 0-1.387-.373-2.42-.829-1.033-.456-2.508-1.1-3.278-1.431-4.841-2.083-16.46-9.002-17.6-10.481-.11-.142-1.37-1.244-2.8-2.448-2.652-2.232-5.46-5.013-8.043-7.963-3.651-4.171-2.723 1.145 1.005 5.752 2.132 2.635 2.28 3.8.484 3.8-.934 0-1.567-.621-3.596-3.533-1.217-1.745-1.601-2.554-3.17-6.667-.336-.88-.895-3.429-1.242-5.664-.509-3.273-.95-4.653-2.268-7.097-2.315-4.291-5.038-11.881-6.114-17.039-1.798-8.621-1.888-9.468-1.936-18.218-.049-9.149-.059-9.069 2.097-17.631.68-2.705 2.096-6.679 3.473-9.751.719-1.606.802-1.764 2.629-5 .745-1.32 1.49-3.12 1.654-4 .164-.88.475-1.813.69-2.074.215-.26.318-1.07.228-1.8l-.163-1.326-.064 1.329M339.5 140.447c.715.765 1.3 1.59 1.3 1.833 0 .243.495.624 1.1.848.605.223 1.623.87 2.262 1.439.639.568 1.472 1.033 1.851 1.033s.913.27 1.187.6c.274.33.68.6.903.6.223 0-.053-.36-.612-.8-.56-.44-1.233-.8-1.497-.8-.263 0-1.161-.54-1.994-1.2-.833-.66-1.718-1.2-1.966-1.2s-.644-.405-.88-.9-.997-1.338-1.692-1.872l-1.262-.973 1.3 1.392M185 145.24c-5.28.138-10.14.364-10.8.503-.66.139-3.54.527-6.4.862-9.382 1.099-11.53 1.485-20.4 3.661-3.975.975-11.887 3.379-13.8 4.193-16.531 7.03-26.702 15.032-34.7 27.302-2.349 3.603-2.379 3.724-1.399 5.54 1.257 2.33 7.745 9.011 10.683 11.002.889.602 1.706 1.188 1.816 1.303.449.466 7.223 4.821 8.174 5.255.564.257 1.026.619 1.026.803 0 .185.182.336.403.336.222 0 2.067.958 4.1 2.129 3.326 1.915 8.499 4.513 12.297 6.176.77.337 1.756.793 2.191 1.014 1.44.731 9.733 3.624 14.009 4.888 1.32.39 3.079.953 3.908 1.251.83.298 1.876.542 2.325.542.449 0 1.661.253 2.692.561 1.031.309 3.315.835 5.075 1.169l5.6 1.067c1.32.253 4.2.615 6.4.804 2.2.19 5.595.554 7.544.808 10.398 1.357 42.719-1.108 51.656-3.939.66-.209 2.64-.692 4.4-1.073 1.76-.382 3.83-.932 4.6-1.223.77-.291 2.66-.915 4.2-1.388 2.599-.798 6.344-2.171 9.2-3.374 5.894-2.483 16.231-8.292 19.434-10.922.311-.256 2.186-1.79 4.166-3.409 6.399-5.235 13.4-13.354 13.4-15.54 0-3.296-13.252-15.104-22.4-19.96-.99-.526-2.07-1.163-2.4-1.417-2.602-2.001-14.927-7.842-21-9.953-1.1-.383-2.36-.841-2.8-1.019-3.654-1.479-14.422-4.279-19.8-5.149-1.21-.196-2.92-.548-3.8-.782-5.869-1.562-23.228-2.448-39.6-2.021m27.4.99c3.19.351 8.41 1.09 11.6 1.644 3.19.554 6.728 1.151 7.862 1.327 1.134.176 2.664.509 3.4.741 2.764.872 5.383 1.587 6.738 1.842.77.144 1.76.421 2.2.615.44.193 2.06.752 3.6 1.24s2.971 1.039 3.18 1.225c.209.185.632.336.94.336.549 0 1.862.522 5.124 2.037.904.419 1.762.763 1.908.763 1.351 0 15.026 7.687 21.248 11.944 8.104 5.546 16.2 13.367 16.2 15.65 0 2.379-16.424 19.206-18.745 19.206-.214 0-.448.142-.522.315-.79 1.867-16.075 9.627-23.933 12.151-1.43.46-3.23 1.057-4 1.328-4.482 1.577-4.136 1.48-11.4 3.191-1.54.363-3.97.835-5.4 1.049-1.43.214-3.14.553-3.8.752-1.634.495-11.484 1.624-14.2 1.627-1.21.001-4 .263-6.2.582-12.707 1.841-37.369-.66-53.6-5.436-9.65-2.84-15.794-5.165-22.256-8.422-1.241-.625-2.443-1.137-2.672-1.137-.229 0-1.014-.374-1.744-.831-1.95-1.219-10.792-6.369-10.936-6.369-.206 0-6.237-4.109-8.631-5.879-2.955-2.185-8.342-7.585-9.96-9.982l-1.29-1.911.744-1.406c3.279-6.188 17.136-20.822 19.716-20.822.236 0 .429-.18.429-.4 0-.22.164-.4.365-.4.201 0 1.326-.633 2.5-1.407 5.094-3.356 16.283-8.07 22.935-9.661 1.32-.315 3.48-.849 4.8-1.185 1.32-.336 3.57-.846 5-1.134 1.43-.287 3.41-.718 4.4-.958.99-.239 2.553-.44 3.474-.445.921-.006 2.106-.174 2.635-.375.907-.345 6.845-.993 14.891-1.623 7.387-.579 27.323-.449 33.4.218m136.793.466c.326.128.834.474 1.128.768.295.295.838.522 1.208.504.55-.025.563-.072.071-.258-.33-.125-.744-.471-.92-.769-.176-.297-.716-.527-1.2-.509-.594.021-.688.107-.287.264m3.607 1.194c.33.125.744.471.92.769.176.297.519.541.762.541s.116-.36-.282-.8c-.398-.44-1.011-.786-1.362-.768-.543.026-.548.065-.038.258m-5.457 1.91c.33.33.697.6.816.6s.112-.27-.014-.6c-.127-.33-.494-.6-.816-.6-.508 0-.507.08.014.6m9.847-.337c1.152.572.373 1.695-1.29 1.858l-1.7.167 1.8-.044c1.777-.043 2.845-1.766 1.29-2.081-.28-.057-.325-.012-.1.1m-12.758.957c-.032.613.691 1.58 1.181 1.58.14 0 .254-.27.254-.6 0-.33-.225-.6-.5-.6s-.591-.225-.702-.5c-.134-.332-.212-.292-.233.12m5.012-.028c.465.188.954.626 1.088.975.175.457.718.614 1.955.566l1.713-.067-1.583-.162c-.972-.1-1.791-.46-2.122-.933-.297-.424-.845-.76-1.218-.746-.521.02-.483.104.167.367m-3.539 4.099c.23.28.501.959.602 1.509.16.871.191.837.239-.257.036-.833-.168-1.342-.603-1.509-.496-.191-.554-.128-.238.257M174.8 156.28c-3.181.248-17.665 4.084-20.013 5.301-.337.174-1.231.453-1.987.619-.756.166-1.65.453-1.987.637-1.13.617-4.365 1.963-4.72 1.963-.193 0-1.466.54-2.828 1.2-1.363.66-2.548 1.2-2.634 1.2-.188 0-8.097 3.834-9.231 4.474l-1.4.79c-.33.186-1.011.515-1.514.732-1.154.499-7.23 4.468-9.944 6.498-3.015 2.254-3.716 5.906-1.134 5.906.545 0 3.898-2.637 4.125-3.244.074-.196.318-.356.543-.356.225 0 1.065-.509 1.866-1.13 3.781-2.932 14.832-8.605 23.858-12.246 1.98-.798 3.96-1.604 4.4-1.79 2.292-.969 4.291-1.665 7-2.436 1.65-.47 3.36-.996 3.8-1.168.44-.173 2.51-.71 4.6-1.193 2.09-.483 4.52-1.082 5.4-1.33 2.38-.671 17.969-.486 22.2.263 1.87.332 5.56.964 8.2 1.406 2.64.442 5.97 1.059 7.4 1.371 1.43.313 3.59.773 4.8 1.024 1.21.25 3.1.708 4.2 1.017 1.1.309 2.99.835 4.2 1.168 6.02 1.658 7.335 2.059 11.6 3.543 6.157 2.141 7.823 2.326 8.457.937.475-1.043-.685-3.036-1.766-3.036-.204 0-.937-.256-1.631-.569-.693-.313-2.52-.961-4.06-1.44-1.54-.48-3.181-1.052-3.647-1.271-.467-.219-1.187-.332-1.6-.251-.414.082 1.047.735 3.247 1.452 7.272 2.37 9.058 3.261 8.92 4.447-.172 1.478-1.863 1.315-7.52-.726-4.582-1.653-8.736-2.875-15.2-4.47-1.87-.461-4.03-1.037-4.8-1.279-.77-.243-2.21-.572-3.2-.732-.99-.16-4.14-.746-7-1.301-7.101-1.379-10.085-1.841-15-2.322-4.928-.483-16.215-.222-18.8.434-7.869 1.997-12.794 3.345-14.8 4.05-3.507 1.232-4.381 1.566-7.152 2.734-1.623.684-3.101 1.244-3.284 1.244-.184 0-1.645.613-3.249 1.363a818.234 818.234 0 01-6.01 2.771c-6.288 2.863-13.453 7.187-17.195 10.376-2.555 2.178-3.636 2.326-3.842.526-.298-2.598 12.56-10.747 25.932-16.435 1.21-.514 2.74-1.219 3.4-1.566.66-.346 1.479-.631 1.82-.633.341-.001.791-.168 1-.371.44-.426 12.828-4.583 16.38-5.496 10.036-2.578 18.473-3.184 26.8-1.926 2.2.333 5.35.779 7 .991 2.802.361 5.556.838 11.4 1.975 5.101.993 14.449 3.309 17.213 4.266 2.144.743 3.66.734 1.949-.011a15.239 15.239 0 00-2.6-.808c-.749-.148-1.722-.417-2.162-.597-.44-.181-2.6-.728-4.8-1.215-2.2-.487-4.45-1.034-5-1.215-.55-.182-3.16-.718-5.8-1.191-2.64-.474-5.43-1.015-6.2-1.204-1.607-.393-6.741-1.114-11.4-1.602-3.127-.327-13.016-.397-16.6-.118m172.064 2.4c-.036.713.176 1.422.477 1.6.298.176.644.59.769.92.151.4.237.3.258-.3.019-.53-.204-.9-.543-.9-.348 0-.638-.511-.736-1.3l-.161-1.3-.064 1.28m.837 5.12c.004.88.086 1.193.182.695.096-.497.092-1.217-.008-1.6-.1-.382-.179.025-.174.905m.22 7.322c-.332 6.802-1.215 11.182-4.011 19.878-1.292 4.019-2.891 7.949-4.335 10.657-1.591 2.982-1.82 3.38-2.885 5.035-.6.931-1.09 1.799-1.09 1.93 0 .132-.81 1.291-1.8 2.578s-1.8 2.455-1.8 2.595c0 .236-2.073 2.795-4.333 5.35-2.891 3.267-8.547 8.793-10.513 10.269l-4 3.006c-5.635 4.235-12.873 8.145-19.154 10.347-1.43.501-2.96 1.075-3.4 1.275-.44.2-1.61.533-2.6.741-.99.208-2.79.676-4 1.04-1.21.365-3.299.887-4.642 1.16-1.343.274-2.627.612-2.853.752-.394.243-1.675.455-9.972 1.649-2.016.29-3.87.654-4.12.808-.249.154-1.936.415-3.749.58-2.759.252-3.946.612-7.28 2.21L243 257c-9.83 4.711-18.432 7.252-21.108 6.235-2.183-.83-.885-2.435 1.968-2.435.832 0 2.239-.247 3.127-.549.887-.302 2.693-.879 4.013-1.283 2.629-.805 4.93-1.714 8-3.16 1.1-.519 2.415-1.063 2.922-1.209 3.24-.937-1.236-1.708-5.66-.975-8.022 1.329-27.527 2.786-37.262 2.784-6.544-.001-19.789-.653-25.8-1.269-2.31-.237-5.73-.566-7.6-.73-1.87-.164-5.56-.616-8.2-1.004-7.678-1.128-7.975-1.104-8.123.679-.254 3.058 5.039 6.716 9.717 6.716.973 0 1.505.237 1.81.808.765 1.429.12 1.713-3.36 1.482-6.391-.424-10.17-3.518-10.912-8.934-.315-2.299-1.587-2.959-6.106-3.171-1.665-.078-2.576-.061-2.026.038.55.099 1.99.375 3.2.613 1.21.239 2.605.512 3.1.607.495.095.9.456.9.803 0 5.411 4.8 9.874 11.455 10.65 3.691.43 4.545.149 4.545-1.496 0-1.297-.598-1.624-4.347-2.374-4.462-.892-6.01-1.867-7.097-4.47-.944-2.259 1.56-2.67 7.844-1.288.99.218 3.6.551 5.8.74 2.2.189 5.89.529 8.2.755 16.679 1.635 43.663 1.639 53.2.009 1.21-.207 4.165-.555 6.566-.774 2.401-.218 5.011-.576 5.8-.795 1.846-.513 3.634-.514 3.634-.003 0 .22-.301.4-.669.4-.367 0-.952.24-1.3.533-.543.459-1.747 1.001-5.831 2.629-3.478 1.385-8.852 2.817-10.62 2.829-2.228.014-3.149 1.582-1.751 2.98 1.139 1.139 4.058.802 11.571-1.338 2.142-.609 8.915-3.623 17.6-7.83 5.482-2.656 4.099-2.315 17.8-4.384 4.201-.634 13.497-2.508 14.007-2.823.179-.111 2.095-.657 4.259-1.214 3.643-.938 6.366-1.786 8.334-2.596 8.255-3.398 10.971-4.822 16.449-8.619 3.083-2.138 7.222-5.256 8.185-6.167 8.858-8.38 10.476-10.266 16.82-19.6.972-1.43 2.145-3.32 2.608-4.2l1.473-2.8c2.368-4.489 4.746-10.956 6.064-16.491.564-2.37 1.123-4.669 1.242-5.109.499-1.848 1.144-10.183.959-12.4-.155-1.859-.263-1.11-.479 3.322M196.2 176.444c-2.879.352-7.327 1.285-9.8 2.055-.77.239-2.03.57-2.8.733-5.869 1.249-20.6 7.826-21.485 9.593-1.249 2.493 1.02 3.311 4.471 1.612 1.382-.681 2.613-1.237 2.735-1.237.123 0 1.451-.555 2.951-1.232 4.742-2.143 5.054-2.267 8.728-3.48 7.284-2.404 11.34-3.317 18.2-4.094 4.212-.478 5.508-1.194 5.008-2.77-.508-1.6-2.354-1.872-8.008-1.18m73.5 2.452c-3.385 4.446-12.39 13.225-16.539 16.121-1.189.83-2.251 1.627-2.361 1.772-.392.516-7.058 4.363-10.4 6.001-4.174 2.047-13.01 5.042-17.6 5.966-10.339 2.082-11.577 2.181-27.6 2.213-12.184.025-14.565.108-11.4.4 14.017 1.292 32.814-.084 43.4-3.177 6.328-1.849 7.843-2.329 8.2-2.595.22-.165.85-.432 1.4-.594 2.105-.621 12.368-6.158 14.6-7.877 8.151-6.279 13.748-11.581 18.182-17.226 2.442-3.109 3.046-3.512 3.938-2.62 1.583 1.583-4.856 9.64-13.716 17.164-.878.746-1.948 1.672-2.379 2.059-3.147 2.828-16.984 10.729-20.769 11.859-.691.206-2.246.766-3.456 1.244s-2.977 1.029-3.927 1.225c-.949.195-1.92.475-2.157.621-.237.146-1.71.508-3.273.803-2.71.512-4.591.811-11.143 1.769-9.878 1.444-39.436.401-44.4-1.568-3.093-1.227-1.004-3.026 2.821-2.429 1.473.23 3.939.496 5.479.59l2.8.172-3-.58c-7.464-1.444-10-1.246-10 .778 0 1.535 1.294 2.261 4.673 2.62 1.72.183 3.937.519 4.927.745.99.227 3.098.421 4.684.431 1.587.009 4.737.221 7 .47 5.024.552 24.425-.213 27.819-1.097 1.175-.306 2.892-.561 3.817-.566 2.247-.014 11.12-2.309 15.942-4.124 4.194-1.578 10.859-4.688 11.071-5.166.074-.165.352-.3.619-.3s1.719-.81 3.226-1.8 2.809-1.8 2.893-1.8c.555 0 5.751-4.305 10.621-8.8 9.538-8.804 13.252-15.2 8.828-15.2-.66 0-1.46.708-2.82 2.496m-66.173-.796c.069.605.069 1.11 0 1.122-.07.011-1.477.18-3.127.373-6.352.746-11.397 1.733-15.8 3.09-4.292 1.324-8.045 2.636-9 3.147-.55.294-1.9.912-3 1.373-1.1.461-2.36.999-2.8 1.194-4.565 2.028-5.524 2.401-6.169 2.401-.682 0-1.231-.725-1.231-1.628 0-.672 3.896-2.727 9.8-5.169.44-.182 1.61-.687 2.6-1.121.99-.435 2.79-1.104 4-1.487s2.65-.875 3.2-1.094c1.738-.693 8.85-2.381 13.6-3.228 3.575-.638 7.798-.091 7.927 1.027m35.282 6.891c-3.415 3.635-15.846 8.455-26.409 10.24-1.43.241-3.59.61-4.8.818-2.47.425-3.362 1.246-2.986 2.747.434 1.735 2.179 1.933 7.099.808.928-.212 2.587-.556 3.687-.765 1.859-.352 4.475-.97 8.422-1.989 4.107-1.061 14.209-5.624 15.658-7.073.318-.317.72-.577.894-.577.175 0 .819-.724 1.432-1.609 2.006-2.895-.598-5.155-2.997-2.6m2.558-.348c1.39.533.415 2.58-2.298 4.824-2.035 1.683-11.587 5.919-15.481 6.865-9.58 2.328-16.489 3.671-17.506 3.405-2.238-.585-1.235-2.794 1.419-3.126 6.078-.759 17.055-3.491 21.299-5.301 3.991-1.702 8.092-3.939 9.786-5.339 1.045-.864 1.957-1.571 2.025-1.571.068 0 .408.109.756.243M257.2 224.8c0 .22-.585.387-1.3.372-1.089-.024-1.17-.084-.5-.372 1.105-.475 1.8-.475 1.8 0m-31.6 7.447c0 .084-1.125.127-2.5.096-2.205-.05-2.311-.086-.9-.305 1.521-.236 3.4-.121 3.4.209", fill: "#e4e4e4" }))));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-60 -30 600 600" }, props),
        React.createElement("g", { id: "surface1" },
            React.createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React.createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 367.488 367.488" }, props),
        React.createElement("path", { d: "M366.745,70.58c-1.089-1.609-3.256-2.391-6.626-2.391c-1.835,0-3.77,0.227-5.25,0.424c-0.324,0.043-0.609,0.065-0.857,0.065\n\tc-0.471,0-0.638-0.08-0.656-0.07c-0.178-0.625,1.309-3.102,2.294-4.744c1.056-1.759,2.252-3.752,3.151-5.808\n\tc0.4-0.914,0.743-1.951,0.249-2.705c-0.261-0.399-0.708-0.628-1.228-0.628c-1.363,0-3.702,1.654-7.405,4.352\n\tc-1.648,1.201-3.771,2.749-5.007,3.428c0.471-1.447,1.783-4.158,2.799-6.257c3.352-6.926,5.154-10.905,3.226-12.19\n\tc-0.313-0.208-0.671-0.308-1.065-0.308c-2.211,0-5.302,3.529-10.131,9.324c-1.566,1.88-3.065,3.701-4.29,4.98\n\tc0.658-2.637,2.482-7.566,3.575-10.545c2.166-5.905,2.234-6.069,1.812-6.674l-0.322-0.265h-0.521c-0.614,0-0.94,0.315-1.157,0.639\n\tc-1.083,1.625-7.429,9.218-14.776,18.215c-9.186,11.247-20.618,25.244-27.213,33.885c-5.552,7.275-15.321,16.252-26.632,26.648\n\tc-12.835,11.795-27.382,25.164-39.671,39.647c-9.291,10.95-15.632,19.579-18.879,25.688c-1.11-2.641-3.512-7.23-7.478-9.434\n\tc-2.497-1.387-2.524-2.064-2.64-4.912c-0.03-0.726-0.063-1.561-0.145-2.538c-0.292-3.503-2.637-4.507-4.35-5.239\n\tc-1.22-0.522-1.985-0.881-2.321-1.664c-0.354-0.828-0.529-2.516-0.714-4.303c-0.432-4.178-0.921-8.914-4.155-9.474\n\tc-2.194-0.379-2.553-2.841-2.82-6.278c-0.147-1.894-0.275-3.53-1.057-4.506c-0.417-0.521-0.979-0.796-1.627-0.796\n\tc-1.109,0-2.238,0.821-3.433,1.69c-1.21,0.879-2.591,1.923-3.294,1.456c-0.682-0.455-0.436-2.507-0.199-4.491\n\tc0.332-2.768,0.744-6.212-0.665-9.061c-0.703-1.421-1.639-1.72-2.3-1.72c-1.993,0-3.793,2.671-5.698,5.5\n\tc-0.579,0.858-1.377,2.043-1.936,2.681c-0.063-1.228,0.327-3.785,0.601-5.588c0.895-5.886,1.334-9.849-0.647-11.264\n\tc-0.402-0.287-0.842-0.433-1.308-0.433c-1.934,0-3.523,2.531-5.205,5.211c-0.787,1.252-2.063,3.287-2.681,3.678\n\tc-0.082-0.81,0.498-2.995,0.894-4.489c1.103-4.156,2.475-9.329-1.082-10.298c-0.133-0.036-0.271-0.055-0.412-0.055\n\tc-2.719,0-8.7,10.338-17.778,30.726c-6.499,14.595-13.664,32.653-14.784,38.926c-1.278,7.16-0.536,8.665,0.182,10.12\n\tc0.418,0.849,0.78,1.582,0.629,4.002c-0.14,2.243-0.678,4.388-1.247,6.659c-1.07,4.268-2.176,8.682-0.785,14.247\n\tc1.162,4.648,7.209,14.769,12.544,23.698c3.621,6.06,7.709,12.902,8.01,14.507c-0.333,0.213-1.782,0.811-7.586,0.811\n\tc-7.13,0-17.116-0.859-23.724-1.428l-2.749-0.234c-9.665-0.805-36.443-6.166-43.041-7.887c-2.538-0.662-6.552-2.966-10.802-5.405\n\tc-6.211-3.564-12.633-7.25-17.146-7.585c-1.02-0.076-1.875-0.112-2.616-0.112c-4.49,0-6.282,1.348-11.073,4.949\n\tc-1.062,0.798-2.283,1.717-3.729,2.768c-9.126,6.638-14.019,9.476-20.79,13.403c-0.806,0.467-1.13,1.021-0.965,1.644\n\tc0.309,1.167,1.62,1.178,5.963,1.212c2.445,0.02,5.488,0.044,8.011,0.374c2.168,0.283,4.597,0.952,7.167,1.66\n\tc4.812,1.326,10.344,2.849,16.357,2.482c2.671-0.162,5.092-0.296,7.667-0.296c5.559,0,13.24,0.552,28.062,4.65\n\tc20.543,5.679,51.316,18.578,59.868,25.094c1.548,1.18,3.072,2.499,4.836,4.026c8.083,6.998,19.151,16.581,48.991,27.432\n\tc13.902,5.055,28.463,7.512,44.516,7.512c10.679,0,19.864-1.081,27.244-1.949c4.054-0.477,7.555-0.889,10.195-0.971\n\tc11.516-0.36,35.889-2.22,45.706-6.682c7.643-3.474,16.143-4.842,26.164-4.17c0.394,0.026,0.763,0.039,1.11,0.039\n\tc2.429,0,4.028-0.611,4.888-1.868c1.361-1.99,0.256-4.834-0.551-6.912c-0.115-0.296-0.225-0.578-0.355-0.884\n\tc0.247-0.401,2.149-0.791,3.286-1.023c2.866-0.587,6.114-1.252,6.676-3.874c0.09-0.423-0.006-0.862-0.273-1.237\n\tc-1.387-1.95-8.616-3.029-24.778-5.025c-10.793-1.333-23.025-2.845-26.244-4.702c-2.417-1.394-5.083-2.276-7.661-3.128\n\tc-5.369-1.775-10.44-3.452-13.952-9.422c-3.422-5.819,9.125-20.581,18.286-31.36c4.686-5.513,8.732-10.273,10.827-13.765\n\tc5.757-9.595,16.285-46.65,20.249-60.6c0.611-2.149,1.052-3.702,1.277-4.453c1.5-4.999,7.275-13.181,12.761-16.648\n\tc5.154-3.257,5.046-7.05,4.908-11.852c-0.023-0.81-0.047-1.659-0.047-2.552c0-6.047,4.308-10.327,8.964-14.052\n\tc5.427-4.341,5.902-11.041,1.338-18.865c-2.961-5.077,0.408-12.894,3.381-19.791c0.616-1.43,1.222-2.835,1.765-4.192\n\tC367.735,74.247,367.77,72.094,366.745,70.58z" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 506.161 506.161" }, props),
        React.createElement("path", { d: "m165.858 329.247c6.161-5.421 6.766-14.807 1.352-20.974l-.818-.939c-2.599-2.953-6.269-4.745-10.195-4.98-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-19.921 17.488-18.142 15.923c-6.143 5.428-6.744 14.799-1.345 20.967l.832.953c5.425 6.158 14.811 6.763 20.981 1.352l13.945-12.237z" }),
        React.createElement("path", { d: "m118.026 369.9c-.413 0-.818 0-1.231-.036-4.876-.301-9.428-2.541-12.643-6.218l-.84-.96c-6.678-7.643-5.931-19.245 1.672-25.969l38.078-33.439c3.675-3.216 8.473-4.847 13.347-4.539 4.876.301 9.428 2.54 12.643 6.218l1.167 1.359c6.366 7.663 5.477 19.001-2.006 25.577l-38.064 33.439c-3.346 2.955-7.659 4.58-12.123 4.568zm37.167-64.032c-2.744.014-5.389 1.026-7.442 2.846l-38.064 33.439c-4.669 4.132-5.123 11.259-1.017 15.951l.84.96c4.128 4.676 11.262 5.131 15.951 1.017l38.057-33.439c4.682-4.122 5.14-11.257 1.025-15.944l-.832-.96c-1.97-2.253-4.76-3.624-7.748-3.806z" }),
        React.createElement("path", { d: "m219.282 366.414c-3.605-.005-7.089 1.305-9.797 3.685l-19.644 17.246c-6.173 5.417-6.786 14.812-1.37 20.985 5.417 6.173 14.812 6.786 20.985 1.37l19.644-17.246c6.173-5.41 6.791-14.8 1.381-20.973-2.827-3.226-6.91-5.073-11.199-5.067z" }),
        React.createElement("path", { d: "m199.667 416.942c-10.173.018-18.434-8.215-18.452-18.388-.009-5.317 2.28-10.38 6.279-13.884l19.651-17.246c7.748-6.414 19.154-5.672 26.004 1.693 6.714 7.651 5.956 19.295-1.693 26.011l-19.644 17.246c-3.357 2.953-7.676 4.577-12.145 4.568zm19.622-46.956c-2.746-.021-5.405.96-7.478 2.76l-19.651 17.246c-4.698 4.126-5.161 11.279-1.035 15.976 4.126 4.698 11.279 5.161 15.976 1.035l19.651-17.225c4.696-4.115 5.166-11.258 1.051-15.953-2.151-2.454-5.258-3.859-8.521-3.854z" }),
        React.createElement("path", { d: "m44.004 93.793-39.942 174.253 31.931 17.943 82.63-134.41z" }),
        React.createElement("path", { d: "m37.231 290.763-37.231-20.917 41.77-182.278 81.549 63.143zm-29.106-24.517 26.63 14.941 79.172-128.776-67.703-52.393z" }),
        React.createElement("path", { d: "m119.648 309.013c6.171-5.42 6.782-14.815 1.366-20.988l-.256-.292c-2.593-2.97-6.267-4.779-10.202-5.023-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-23.856 20.889c-6.171 5.42-6.782 14.815-1.366 20.988 5.309 6.317 14.734 7.133 21.051 1.823.065-.055.13-.11.194-.166l1.807-1.587 18.157-15.937z" }),
        React.createElement("path", { d: "m86.152 337.172c-.455 0-.918 0-1.387-.05-4.97-.383-9.588-2.712-12.849-6.481-6.715-7.647-5.96-19.289 1.686-26.004l23.827-20.91c7.647-6.706 19.28-5.951 25.997 1.686 3.382 3.714 5.112 8.64 4.795 13.653-.301 4.879-2.543 9.435-6.225 12.65l-23.82 20.91c-3.317 2.935-7.595 4.553-12.024 4.546zm23.414-50.912c-2.744.011-5.391 1.023-7.442 2.846l-23.827 20.91c-4.696 4.121-5.161 11.269-1.04 15.964 0 0 .001.001.001.001 2.032 2.366 4.916 3.834 8.025 4.084 2.989.234 5.945-.758 8.189-2.746l23.82-20.91c4.692-4.124 5.157-11.269 1.039-15.965-1.998-2.411-4.895-3.899-8.018-4.119z" }),
        React.createElement("path", { d: "m202.755 350.641c.269-3.938-1.051-7.82-3.664-10.779l-.213-.242c-2.595-2.95-6.26-4.742-10.181-4.98-.327 0-.662 0-.989 0-3.605-.006-7.087 1.307-9.79 3.693l-2.334 2.049-24.105 21.159-6.403 5.592c-6.183 5.595-6.659 15.142-1.065 21.324 2.61 2.885 6.234 4.651 10.115 4.929 3.939.274 7.823-1.046 10.779-3.664l32.82-28.807c2.988-2.611 4.801-6.313 5.03-10.274z" }),
        React.createElement("path", { d: "m155.115 396.936c-.406 0-.804 0-1.209-.036-10.248-.634-18.041-9.456-17.406-19.704.304-4.916 2.547-9.511 6.236-12.775l32.792-28.843c3.681-3.207 8.475-4.837 13.347-4.539 4.869.298 9.417 2.532 12.629 6.204 3.375 3.708 5.101 8.628 4.781 13.632-.308 4.866-2.544 9.408-6.211 12.621l-32.82 28.807c-3.345 2.978-7.663 4.626-12.139 4.633zm22.767-53.937-30.458 26.737c-4.698 4.12-5.175 11.264-1.067 15.972 1.999 2.378 4.877 3.844 7.976 4.063 3.006.213 5.971-.795 8.225-2.796l32.82-28.807c4.695-4.116 5.165-11.258 1.049-15.954-.003-.004-.007-.008-.01-.012-1.993-2.391-4.877-3.861-7.983-4.07h-.754c-2.747 0-5.397 1.013-7.442 2.846z" }),
        React.createElement("path", { d: "m399.398 303.122-115.785-94.348c-44.339 23.543-75.736 11.426-90.748 1.843-7.825-5.106-10.029-15.59-4.923-23.415 1.586-2.431 3.772-4.413 6.346-5.755l38.59-20.497c-.996-.149-1.971-.277-2.846-.363-34.825 5.502-69.995 8.531-105.248 9.064l-67.461 109.722 15.04 11.462 17.68-15.524c12.275-10.776 30.962-9.561 41.738 2.714.001.001.002.003.004.004l.256.292c3.538 4.057 5.891 9.009 6.802 14.315 5.361-3.658 11.795-5.411 18.271-4.98 7.833.488 15.145 4.09 20.305 10.003l.832.953c5.187 5.881 7.808 13.591 7.278 21.415v.043c1.354-.138 2.716-.183 4.077-.135 7.833.489 15.144 4.091 20.305 10.003l-5.315 5.094 5.528-4.852c5.195 5.883 7.821 13.599 7.293 21.429 0 .1-.043.192-.05.292 16.199-1.153 30.265 11.045 31.418 27.244.096 1.352.099 2.709.008 4.061-.365 5.088-2.052 9.993-4.895 14.229l31.724 18.306c6.955 3.944 15.787 1.604 19.878-5.265 3.88-6.556 1.988-15-4.319-19.274l-50.514-35.004c-.043 0-.064-.078-.1-.107l-3.401-2.355c-3.3-2.371-4.053-6.967-1.682-10.267 2.312-3.219 6.759-4.027 10.056-1.828l71.247 49.355c6.572 4.555 15.592 2.92 20.147-3.652.003-.004.006-.008.009-.012 4.471-6.535 2.889-15.445-3.557-20.042l-70.898-50.287c-.043 0-.057-.078-.1-.107-3.312-2.358-4.086-6.954-1.729-10.267s6.954-4.086 10.267-1.729l79.485 56.391c6.952 4.909 16.568 3.253 21.477-3.7 4.752-6.729 3.37-16.006-3.136-21.059l-85.526-61.627c-3.38-2.255-4.292-6.822-2.037-10.202s6.822-4.292 10.202-2.037c.127.085.251.173.373.266l5.848 4.169h.078l79.265 57.11c.149.107.256.242.398.349l1.309.939c.249.172.487.359.711.562l1.423.975c6.625 4.747 15.807 3.478 20.896-2.889 3.043-3.845 4.028-8.929 2.64-13.632-.844-2.914-2.568-5.495-4.934-7.393z" }),
        React.createElement("path", { d: "m282.83 421.24c-3.145.001-6.234-.826-8.957-2.398l-35.026-20.199 2.134-3.13c7.907-11.928 4.646-28.007-7.282-35.914-3.783-2.508-8.159-3.978-12.689-4.263-.883-.043-1.768-.019-2.647.071l-4.774.299.277-4.048c.448-5.749-1.029-11.483-4.198-16.3l-2.668 2.348-4.81-5.236 2.704-2.59c-4.302-3.792-9.744-6.045-15.467-6.403-1.037-.034-2.076-.001-3.109.1l-3.821.285-.477-4.212v-.15c.373-6.782-1.926-13.44-6.403-18.548l-.84-.96c-8.565-9.832-23.125-11.713-33.909-4.383l-4.532 3.045-.953-5.379c-2.417-14.221-15.905-23.789-30.126-21.371-4.756.809-9.196 2.919-12.826 6.096l-19.871 17.445-19.957-15.19 70.158-114.12 1.914-.057c35.061-.535 70.041-3.543 104.679-9l.498-.1.505.043c.939.085 1.978.228 3.052.384l10.672 1.601-48.124 25.556c-6.556 3.387-9.124 11.448-5.737 18.004 1.062 2.055 2.639 3.799 4.577 5.062 14.123 9.014 44.261 20.761 87.148-1.999l2.085-1.11 117.606 95.828c2.92 2.371 5.038 5.582 6.069 9.199 1.718 5.8.508 12.074-3.244 16.819-6.284 7.853-17.615 9.416-25.791 3.557l-3.991-2.981-84.978-61.186c-1.698-1.219-4.063-.831-5.282.867-.004.005-.007.01-.011.016-1.221 1.702-.831 4.071.87 5.292.004.003.008.006.012.009l85.54 61.677c8.293 6.401 9.827 18.312 3.426 26.605-6.195 8.027-17.608 9.761-25.908 3.939l-79.507-56.363c-.825-.585-1.849-.818-2.846-.647-2.069.35-3.462 2.311-3.112 4.38.168.994.725 1.881 1.547 2.465l71.019 50.408c8.024 5.733 9.982 16.833 4.404 24.965-5.664 8.194-16.898 10.245-25.092 4.581-.003-.002-.006-.004-.009-.006l-71.232-49.362c-1.685-1.251-4.064-.899-5.315.786s-.899 4.064.786 5.315c.069.051.139.099.211.146l54.029 37.466c8.216 5.625 10.316 16.845 4.691 25.061-2.423 3.539-6.029 6.098-10.169 7.218-1.603.441-3.259.666-4.923.667zm-34.022-25.08 28.622 16.52c5.336 2.887 12.002.903 14.889-4.433 2.606-4.815 1.268-10.813-3.136-14.065l-40.376-28.018c2.734 5.325 3.964 11.295 3.557 17.267-.288 4.445-1.5 8.78-3.556 12.729zm-7.413-59.357c2.212-.004 4.372.669 6.19 1.928l71.232 49.355c4.961 3.429 11.763 2.19 15.197-2.768 3.375-4.927 2.185-11.649-2.675-15.119l-71.404-50.699c-4.725-3.742-5.522-10.607-1.78-15.332 3.585-4.526 10.074-5.477 14.807-2.17l79.507 56.391c5.368 3.747 12.757 2.432 16.504-2.936 3.597-5.154 2.546-12.219-2.395-16.103l-85.433-61.563c-4.902-3.505-6.034-10.32-2.529-15.222s10.32-6.034 15.222-2.529l5.934 4.205 80.965 58.405c.364.262.711.547 1.039.854l1.003.655c5.068 3.672 12.125 2.734 16.058-2.134 2.336-2.943 3.095-6.839 2.035-10.444-.619-2.234-1.913-4.222-3.707-5.692l-113.985-92.875c-44.958 22.98-77.009 10.331-92.228.605-9.487-6.155-12.188-18.835-6.033-28.322 1.927-2.971 4.592-5.391 7.734-7.024l21.814-11.583c-22.184 3.01-52.471 5.251-87.639 6.403l-64.745 105.366 10.181 7.748 15.503-13.603c13.747-12.071 34.678-10.712 46.749 3.035.003.003.006.007.009.01 2.974 3.364 5.244 7.29 6.674 11.547 5.037-2.448 10.627-3.535 16.214-3.152 8.783.545 16.982 4.583 22.767 11.213l.84.96c4.92 5.576 7.802 12.657 8.175 20.085h.711c7.662.501 14.908 3.664 20.483 8.943l.114-.1 1.928 2.206.206.228 2.241 2.554-.1.1c3.818 5.238 5.999 11.489 6.268 17.965h.434c3.16.206 6.275.863 9.249 1.949-1.368-5.858 2.273-11.716 8.131-13.084.833-.194 1.686-.29 2.541-.285z" }),
        React.createElement("path", { d: "m462.149 91.146-74.605 57.786 69.013 112.249c.454.235.881.519 1.274.847 1.183 1.219 1.898 2.816 2.021 4.511l10.338 16.812 31.902-17.95z" }),
        React.createElement("path", { d: "m468.922 288.124-12.557-20.433-.078-.825c-.046-.871-.399-1.698-.996-2.334l-1.366-.811-.42-.711-70.685-114.939 81.563-63.15 41.777 182.278zm-5.691-22.81 8.153 13.255 26.63-14.941-38.085-166.263-67.696 52.421 66.878 108.777c.441.264.849.579 1.217.939 1.56 1.583 2.583 3.616 2.924 5.813z" }),
        React.createElement("path", { d: "m368.385 168.86c-14.472 5.958-30.597 6.544-45.463 1.651l-39.166-12.714c-5.413-1.716-11.287-1.204-16.321 1.423l-13.276 7.051c-.142.071-.263.157-.413.221l-52.606 27.947c-.749.359-1.237 1.105-1.266 1.935-.058.751.307 1.473.946 1.871 15.474 9.875 41.977 17.075 79.919-4.696 2.644-1.513 5.946-1.245 8.31.676l119.584 97.471c1.665 1.369 3.169 2.923 4.482 4.632l29.569-29.59-63.015-102.494z" }),
        React.createElement("path", { d: "m412.809 301.649-2.476-3.138c-1.144-1.498-2.457-2.859-3.913-4.055l-119.612-97.443c-1.219-.974-2.908-1.112-4.269-.349-39.494 22.682-67.262 15.026-83.605 4.61-1.72-1.084-2.711-3.022-2.583-5.051.086-2.09 1.298-3.969 3.166-4.909l66.273-35.196c5.882-3.082 12.752-3.686 19.082-1.679l39.152 12.693c14.062 4.633 29.317 4.083 43.008-1.551l14.108-5.777 66.067 107.432zm-128.428-112.612c2.514-.005 4.953.854 6.908 2.433l119.591 97.471c.842.679 1.643 1.409 2.398 2.184l24.901-24.901-59.956-97.55-8.481 3.472c-15.258 6.281-32.259 6.896-47.932 1.736l-39.131-12.707c-4.506-1.415-9.39-.98-13.575 1.21l-64.267 34.151c14.891 8.651 39.387 13.923 74.156-6.047 1.641-.944 3.498-1.444 5.388-1.452z" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-21 -21 682.66669 682" }, props),
        React.createElement("path", { d: "m629.609375 303.507812-81.988281-40.820312-180.261719 89.753906c-14.582031 7.261719-30.957031 11.101563-47.359375 11.101563s-32.777344-3.839844-47.359375-11.101563l-180.261719-89.753906-81.988281 40.820312c-6.367187 3.171876-10.390625 9.671876-10.390625 16.785157 0 7.117187 4.023438 13.613281 10.390625 16.785156l278.964844 138.898437c9.59375 4.78125 20.117187 7.167969 30.644531 7.167969 10.523438 0 21.050781-2.386719 30.644531-7.160156l278.964844-138.90625c6.367187-3.171875 10.390625-9.667969 10.390625-16.785156 0-7.113281-4.023438-13.613281-10.390625-16.785157zm0 0" }),
        React.createElement("path", { d: "m629.609375 460.65625-81.988281-40.824219-180.261719 89.757813c-14.582031 7.261718-30.957031 11.09375-47.359375 11.09375s-32.777344-3.832032-47.359375-11.09375l-180.261719-89.757813-81.988281 40.824219c-6.367187 3.167969-10.390625 9.671875-10.390625 16.78125 0 7.113281 4.023438 13.613281 10.390625 16.789062l278.964844 138.898438c9.59375 4.777344 20.117187 7.167969 30.644531 7.167969 10.523438-.003907 21.050781-2.390625 30.644531-7.167969l278.964844-138.898438c6.367187-3.175781 10.390625-9.675781 10.390625-16.789062s-4.023438-13.613281-10.390625-16.78125zm0 0" }),
        React.createElement("path", { d: "m10.390625 179.972656 278.964844 138.902344c9.59375 4.773438 20.117187 7.167969 30.644531 7.167969s21.050781-2.394531 30.644531-7.167969l278.964844-138.902344c6.367187-3.167968 10.390625-9.671875 10.390625-16.78125 0-7.117187-4.023438-13.621094-10.390625-16.789062l-278.964844-138.90625c-19.191406-9.550782-42.097656-9.550782-61.289062 0l-278.964844 138.90625c-6.367187 3.167968-10.390625 9.671875-10.390625 16.789062 0 7.109375 4.023438 13.613282 10.390625 16.78125zm0 0" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 502.436 502.436" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M402.481,300.41c0.033-0.051,0.068-0.098,0.102-0.148C402.86,299.793,402.459,300.432,402.481,300.41z" }),
            React.createElement("path", { d: "M402.581,199.504c-0.029-0.055-0.062-0.105-0.094-0.16c0.064,0.113,0.143,0.254,0.201,0.359\n\t\t\tC402.651,199.637,402.616,199.571,402.581,199.504z" }),
            React.createElement("path", { d: "M406.079,55.139C406.471,54.674,405.678,55.6,406.079,55.139L406.079,55.139z" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M292.844,383.368C293.102,383.25,293.04,383.279,292.844,383.368L292.844,383.368z" }),
                React.createElement("path", { d: "M465.85,19.072c-1.174-2.404-2.348-4.809-3.521-7.215c-3.99,2.063-7.865,4.352-11.678,6.723\n\t\t\t\tc-2.168,1.35-4.312,2.74-6.438,4.156l-2.803,1.896c-0.859-1.303-1.721-2.605-2.578-3.91l2.768-1.709\n\t\t\t\tc2.293-1.393,4.604-2.76,6.939-4.078c3.986-2.254,8.037-4.42,12.189-6.348c-0.797-1.635-1.596-3.27-2.395-4.904\n\t\t\t\tc-0.473-0.971-0.945-1.939-1.42-2.908c-0.367-0.752-0.23-0.936-1.041-0.643c-7.271,2.625-14.391,5.65-21.355,8.998\n\t\t\t\tc-16.805,8.078-33.145,17.945-47.258,30.191c-14.646,12.707-27.654,27.381-36.574,44.721\n\t\t\t\tc-8.943,17.389-13.643,36.518-13.912,56.063c-0.133,9.852,1.146,19.521,2.941,29.184c1.818,9.791,5.121,19.123,8.516,28.455\n\t\t\t\tc2.318,6.732,5.961,12.953,8.506,19.604c1.656,4.328,2.861,8.682,3.896,13.186c0.953,4.148,1.133,8.771,0.643,12.994\n\t\t\t\tc-0.48,4.143-1.887,7.734-3.979,11.306c-2.197,3.748-5.549,6.987-8.752,9.877c-3.389,3.059-7.027,5.823-10.812,8.371\n\t\t\t\tc-16.141,10.856-34.52,18.27-52.9,24.368c-0.593,0.197-1.188,0.379-1.781,0.572l-37.776,77.905\n\t\t\t\tc0.518-0.172,1.038-0.334,1.556-0.508c9.101-3.029,18.152-6.215,27.103-9.67c3.841-1.482,7.658-3.014,11.472-4.568\n\t\t\t\tc0.313-0.129,1.05-0.448,1.05-0.448s0.495,1.215,0.717,1.715c1.938,4.396,3.873,8.787,5.812,13.183\n\t\t\t\tc0.8,1.813,1.601,3.629,2.399,5.44c0.138,0.313,0.274,0.629,0.414,0.94c0.006,0.017-2.73,1.261-3.295,1.517\n\t\t\t\tc0.129-0.06,0.25-0.114,0.346-0.159c-0.1,0.047-0.235,0.108-0.444,0.204c-15.015,6.884-30.364,13.048-45.89,18.673\n\t\t\t\tc-5.586,2.023-11.205,3.959-16.837,5.852l-45.024,92.852c6.834-2.465,13.628-5.039,20.391-7.648\n\t\t\t\tc18.019-6.959,35.824-14.482,53.357-22.588c35.633-16.473,70.357-35.328,102.297-58.234\n\t\t\t\tc30.525-22.016,59.324-48.219,78.301-81.114c9.527-16.517,16.473-34.782,19.074-53.728c2.66-19.358,0.836-39.19-5.188-57.772\n\t\t\t\tc-3.971-12.25-9.643-24.102-16.756-34.852c-3.158-4.773-6.484-9.369-9.947-13.92c-1.967-2.58-4.131-5.012-6.264-7.455\n\t\t\t\tc-3.205-3.674-5.84-7.859-8.459-11.953c-4.441-6.939-7.707-14.865-9.32-22.945c-1.992-9.973-1.287-19.959,1.338-29.74\n\t\t\t\tc5.035-18.758,16.883-35.439,29.934-49.518c8.021-8.656,16.82-16.625,26.174-23.818c1.865-1.436,3.756-2.84,5.676-4.199\n\t\t\t\tC466.758,20.401,466.6,20.608,465.85,19.072z M403.092,299.358c0,0-0.201,0.381-0.51,0.903c-0.072,0.109-0.096,0.144-0.102,0.148\n\t\t\t\tc-8.385,12.725-18.254,23.93-29.76,33.943c-10.844,9.438-22.645,17.574-34.791,25.221c-3.59-6.113-7.18-12.229-10.77-18.344\n\t\t\t\tc15.223-8.717,30.031-18.301,42.879-30.336c6.33-5.932,11.947-12.385,17.027-19.408l1.197-1.566L403.092,299.358\n\t\t\t\t M402.489,199.344c-0.121-0.217-0.18-0.324,0.094,0.16c0.254,0.459,0.215,0.391,0.105,0.199\n\t\t\t\tc8.68,15.752,14.639,33.172,14.564,51.32c-5.246-0.1-10.494-0.201-15.74-0.301c0.66-13.469-2.85-26.854-8.238-39.109\n\t\t\t\tc-2.982-6.785-6.766-13.166-10.443-19.588c-3.178-5.543-5.941-11.195-8.627-16.988c2.039-0.92,4.078-1.84,6.117-2.758\n\t\t\t\tc1.311-0.59,4.99-2.266,4.99-2.266l0.332,0.695c2.414,4.66,4.896,9.178,7.66,13.639\n\t\t\t\tC396.393,189.333,399.608,194.237,402.489,199.344z M406.079,55.139c-9.127,10.514-17.299,21.643-23.01,34.42\n\t\t\t\tc-5.342,11.959-8.377,24.941-8.166,38.061c-3.402-0.049-6.807-0.098-10.211-0.146c0.506-17.471,6.057-34.4,14.984-49.367\n\t\t\t\tc4.535-7.607,9.904-14.607,15.695-21.293c1.395-1.611,2.891-3.137,4.355-4.684c0.527-0.555,2.143-2.352,2.143-2.352\n\t\t\t\ts3.311,3.207,4.785,4.619c0.02,0.018,0.035,0.035,0.055,0.053C406.489,54.67,406.28,54.901,406.079,55.139z" })),
            React.createElement("path", { d: "M291.195,210.11c0-70.35-57.233-127.584-127.583-127.584C93.263,82.526,36.03,139.76,36.03,210.11\n\t\t\tc0,20.615,4.921,40.1,13.64,57.353l113.942,234.973l113.96-235.01C286.28,250.182,291.195,230.709,291.195,210.11z\n\t\t\t M163.612,280.711c-38.931,0-70.604-31.671-70.604-70.602c0-38.932,31.674-70.605,70.604-70.605s70.604,31.674,70.604,70.605\n\t\t\tC234.215,249.04,202.542,280.711,163.612,280.711z" }))));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-8 0 464 464" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m154.632812 336.320312c-2.738281 4.984376-2.703124 10.839844.085938 15.679688 2.792969 4.839844 7.847656 7.800781 13.539062 7.910156l2.191407.050782c-6.5625-7.3125-11.664063-15.945313-14.808594-25.480469zm0 0" }),
            React.createElement("path", { d: "m154.71875 272c-2.789062 4.832031-2.824219 10.695312-.085938 15.679688l1.007813 1.839843c3.144531-9.535156 8.246094-18.160156 14.808594-25.480469l-2.191407.050782c-5.691406.117187-10.753906 3.078125-13.539062 7.910156zm0 0" }),
            React.createElement("path", { d: "m176.089844 367.742188c.117187 5.691406 3.078125 10.753906 7.910156 13.539062 4.816406 2.78125 10.679688 2.824219 15.679688.085938l1.839843-1.007813c-9.535156-3.144531-18.160156-8.246094-25.480469-14.808594zm0 0" }),
            React.createElement("path", { d: "m176 395.144531c-1.601562-.929687-3.039062-2.039062-4.433594-3.199219l-19.566406 64.054688 24-16 16 24 15.015625-61.03125c-2.191406-1.394531-4.273437-2.96875-6.085937-4.878906-8.296876 2.460937-17.242188 1.484375-24.929688-2.945313zm0 0" }),
            React.createElement("path", { d: "m277.550781 359.960938 2.191407-.050782c5.691406-.117187 10.753906-3.078125 13.539062-7.910156 2.78125-4.832031 2.824219-10.695312.085938-15.679688l-1.007813-1.839843c-3.152344 9.542969-8.246094 18.167969-14.808594 25.480469zm0 0" }),
            React.createElement("path", { d: "m209.320312 382.488281 1.054688 1.742188c2.945312 4.867187 8.039062 7.777343 13.625 7.777343s10.679688-2.902343 13.625-7.777343l1.054688-1.742188c-4.742188.984375-9.648438 1.511719-14.679688 1.511719s-9.9375-.527344-14.679688-1.511719zm0 0" }),
            React.createElement("path", { d: "m272 395.144531c-7.695312 4.429688-16.632812 5.40625-24.929688 2.945313-1.8125 1.917968-3.894531 3.484375-6.085937 4.878906l15.015625 61.03125 16-24 24 16-19.566406-64.054688c-1.394532 1.160157-2.832032 2.269532-4.433594 3.199219zm0 0" }),
            React.createElement("path", { d: "m271.910156 256.265625c-.117187-5.691406-3.078125-10.753906-7.910156-13.539063-4.824219-2.78125-10.6875-2.824218-15.679688-.085937l-1.839843 1.007813c9.535156 3.144531 18.160156 8.246093 25.480469 14.808593zm0 0" }),
            React.createElement("path", { d: "m224 368c30.871094 0 56-25.128906 56-56s-25.128906-56-56-56-56 25.128906-56 56 25.128906 56 56 56zm0-48c-13.230469 0-24-10.769531-24-24 0-10.414062 6.710938-19.214844 16-22.527344v-9.472656h16v9.472656c9.289062 3.3125 16 12.113282 16 22.527344h-16c0-4.414062-3.585938-8-8-8s-8 3.585938-8 8 3.585938 8 8 8c13.230469 0 24 10.769531 24 24 0 10.414062-6.710938 19.214844-16 22.527344v9.472656h-16v-9.472656c-9.289062-3.3125-16-12.113282-16-22.527344h16c0 4.414062 3.585938 8 8 8s8-3.585938 8-8-3.585938-8-8-8zm0 0" }),
            React.createElement("path", { d: "m199.679688 242.632812c-4.992188-2.722656-10.855469-2.6875-15.679688.085938-4.832031 2.792969-7.800781 7.847656-7.910156 13.539062l-.050782 2.191407c7.3125-6.5625 15.945313-11.664063 25.480469-14.808594zm0 0" }),
            React.createElement("path", { d: "m248.320312 381.367188c5 2.746093 10.863282 2.695312 15.679688-.085938 4.832031-2.792969 7.800781-7.847656 7.910156-13.539062l.050782-2.191407c-7.3125 6.5625-15.945313 11.664063-25.480469 14.808594zm0 0" }),
            React.createElement("path", { d: "m152 312c0-5.03125.527344-9.9375 1.511719-14.679688l-1.742188 1.054688c-4.867187 2.945312-7.769531 8.039062-7.769531 13.625s2.902344 10.679688 7.777344 13.625l1.742187 1.054688c-.992187-4.734376-1.519531-9.648438-1.519531-14.679688zm0 0" }),
            React.createElement("path", { d: "m296.222656 298.375-1.742187-1.054688c.992187 4.742188 1.519531 9.648438 1.519531 14.679688s-.527344 9.9375-1.511719 14.679688l1.742188-1.054688c4.867187-2.945312 7.769531-8.03125 7.769531-13.625s-2.902344-10.679688-7.777344-13.625zm0 0" }),
            React.createElement("path", { d: "m293.28125 272c-2.792969-4.832031-7.847656-7.800781-13.539062-7.910156l-2.191407-.050782c6.5625 7.3125 11.664063 15.945313 14.808594 25.480469l1.007813-1.839843c2.738281-4.984376 2.703124-10.839844-.085938-15.679688zm0 0" }),
            React.createElement("path", { d: "m238.679688 241.519531-1.054688-1.742187c-2.945312-4.867188-8.039062-7.777344-13.625-7.777344s-10.679688 2.902344-13.625 7.777344l-1.054688 1.742187c4.742188-.984375 9.648438-1.511719 14.679688-1.511719s9.9375.519532 14.679688 1.511719zm0 0" }),
            React.createElement("path", { d: "m32 32v31.191406c15.648438-3.191406 28-15.542968 31.191406-31.191406zm0 0" }),
            React.createElement("path", { d: "m32 320h31.191406c-3.191406-15.648438-15.542968-28-31.191406-31.191406zm0 0" }),
            React.createElement("path", { d: "m416 32h-31.191406c3.191406 15.648438 15.542968 28 31.191406 31.191406zm0 0" }),
            React.createElement("path", { d: "m416 320v-31.191406c-15.648438 3.191406-28 15.542968-31.191406 31.191406zm0 0" }),
            React.createElement("path", { d: "m320 312c0 2.761719-.464844 5.414062-1.136719 8h49.777344c3.527344-24.472656 22.886719-43.832031 47.359375-47.359375v-193.28125c-24.472656-3.527344-43.832031-22.886719-47.359375-47.359375h-289.28125c-3.527344 24.472656-22.886719 43.832031-47.359375 47.359375v193.28125c24.472656 3.527344 43.832031 22.886719 47.359375 47.359375h49.777344c-.671875-2.585938-1.136719-5.238281-1.136719-8 0-8.863281 3.617188-17.113281 9.910156-23.070312-2.476562-8.3125-1.484375-17.25 2.945313-24.929688 4.441406-7.679688 11.679687-13.007812 20.121093-15.023438 2.015626-8.441406 7.34375-15.679687 15.023438-20.121093 7.6875-4.429688 16.632812-5.414063 24.929688-2.945313 5.957031-6.292968 14.199218-9.910156 23.070312-9.910156s17.113281 3.617188 23.070312 9.910156c8.296876-2.46875 17.234376-1.484375 24.929688 2.945313 7.679688 4.441406 13.007812 11.679687 15.023438 20.121093 8.441406 2.015626 15.679687 7.34375 20.121093 15.023438 4.429688 7.679688 5.421875 16.617188 2.945313 24.929688 6.292968 5.964843 9.910156 14.207031 9.910156 23.070312zm0-176h-88v-16h88zm-160-88h128v48h-128zm-32 72h88v16h-88zm88 80h-88v-16h88zm72 0h-56v-16h56zm-160-32v-16h192v16zm176 32v-16h16v16zm0 0" }),
            React.createElement("path", { d: "m0 0v352h137.734375c-1.359375-5.246094-1.398437-10.71875 0-16h-121.734375v-320h416v320h-121.734375c1.40625 5.28125 1.359375 10.753906 0 16h137.734375v-352zm0 0" }),
            React.createElement("path", { d: "m176 64h96v16h-96zm0 0" }))));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 207.918 207.918" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M59.655,180.863c-0.926,1.604-2.606,2.5-4.334,2.5c-0.849,0-1.708-0.217-2.496-0.671\n\tC22.606,165.237,3.833,132.739,3.834,97.879c0-20.076,6.034-39.288,17.232-55.5l-6.344-6.267c-1.372-1.355-1.842-3.379-1.208-5.2\n\tc0.634-1.822,2.26-3.116,4.177-3.326l21.274-2.333c1.499-0.168,2.988,0.354,4.059,1.413c1.071,1.058,1.608,2.543,1.462,4.041\n\tl-2.074,21.301c-0.187,1.92-1.461,3.561-3.275,4.217c-0.555,0.201-1.13,0.299-1.7,0.299c-1.294,0-2.563-0.502-3.515-1.443\n\tl-5.612-5.544c-9.411,14.238-14.476,30.926-14.476,48.343c0,31.3,16.856,60.48,43.993,76.153\n\tC60.218,175.414,61.037,178.472,59.655,180.863z M194.591,92.675c-2.761,0-5,2.238-5,5l0,0.204\n\tc0,48.457-39.422,87.879-87.879,87.879c-1.773,0-3.543-0.056-5.308-0.161l1.911-7.653c0.467-1.871-0.184-3.845-1.672-5.07\n\tc-1.49-1.228-3.551-1.486-5.297-0.67l-19.385,9.068c-1.364,0.639-2.368,1.857-2.732,3.318s-0.052,3.008,0.852,4.212l12.848,17.117\n\tc0.956,1.273,2.445,1.999,3.999,1.999c0.329,0,0.662-0.032,0.992-0.1c1.891-0.382,3.393-1.817,3.86-3.689l2.169-8.688\n\tc2.579,0.203,5.169,0.317,7.766,0.317c53.971,0,97.879-43.908,97.879-97.915l0-0.168C199.591,94.913,197.352,92.675,194.591,92.675z\n\t M202.255,51.683c-1.491-1.223-3.552-1.48-5.299-0.658l-7.485,3.52C173.208,21.73,139.285,0,101.712,0\n\tC84.453,0.001,67.485,4.556,52.64,13.173c-2.388,1.387-3.2,4.446-1.814,6.834c1.386,2.388,4.444,3.203,6.834,1.814\n\tC70.982,14.089,86.215,10.001,101.713,10c33.671,0,64.077,19.434,78.71,48.8l-7.89,3.711c-1.746,0.82-2.863,2.572-2.872,4.501\n\tc-0.009,1.929,1.092,3.691,2.83,4.528l19.281,9.288c0.686,0.33,1.428,0.495,2.17,0.495c0.727,0,1.454-0.158,2.128-0.476\n\tc1.363-0.641,2.364-1.861,2.726-3.323l5.142-20.774C204.401,54.878,203.746,52.906,202.255,51.683z M70.811,138.821\n\tc-2.761,0-5-2.238-5-5s2.239-5,5-5h25.902v-26.94h-7.435c-12.939,0-23.467-10.527-23.467-23.467\n\tc0-12.946,10.527-23.474,23.467-23.474h7.435v-5.746c0-2.762,2.239-5,5-5s5,2.238,5,5v5.746h25.902c2.761,0,5,2.238,5,5\n\ts-2.239,5-5,5h-25.902v26.94h7.431c12.942,0,23.471,10.529,23.471,23.471s-10.529,23.47-23.471,23.47h-7.431v7.741\n\tc0,2.762-2.239,5-5,5s-5-2.238-5-5v-7.741H70.811z M89.278,91.881h7.435V64.94h-7.435c-7.426,0-13.467,6.041-13.467,13.467\n\tC75.811,85.84,81.852,91.881,89.278,91.881z M106.713,128.821h7.431c7.428,0,13.471-6.043,13.471-13.47\n\tc0-7.428-6.043-13.471-13.471-13.471h-7.431V128.821z" }))));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 56 56" }, props),
        React.createElement("g", null,
            React.createElement("path", { id: "Shape", d: "m54.89 19.33c-1.65-3.16-4.39-5.33-7.89-5.33 1.9387753 4.8214002 2.9563558 9.9635739 3 15.16.1921013 6.0688357-2.3831761 11.8963206-7 15.84 5.82.28 10.9-2.58 12.85-8.55 1.83-5.66 1.45-12.53-.96-17.12z" }),
            React.createElement("path", { id: "Shape", d: "m18.16 44.81c3.2315917 2.0831812 6.9951556 3.1907245 10.84 3.19 3.83925-.0374554 7.5924307-1.1419431 10.84-3.19 5.22-3.34 8.16-8.69 8.16-15.64 0-11.67-7.36-29.17-19-29.17-11.1 0-18.22 15.8-18.92 27-.48 7.47 1.67 13.7 8.08 17.81zm6.36-41.71c1.3871963-.71080538 2.9213462-1.08749398 4.48-1.1.5522847 0 1 .44771525 1 1s-.4477153 1-1 1c-1.2497589.01216582-2.4792834.31697831-3.59.89-.4916536.2469243-1.0904244.05031299-1.34-.44-.1210697-.23840257-.1416226-.51536113-.0570687-.76902291.0845539-.25366177.2671714-.46289687.5070687-.58097709zm4.36 25.9c-2.88-.37-6.88-.87-6.88-5.5 0-3.22 2.93-5.1 6-5.44v-2.06c0-.5522847.4477153-1 1-1s1 .4477153 1 1v2.05c4.27.37 5.81 3.07 5.88 3.19.1786328.3126074.1769222.696768-.0044873 1.0077722-.1814095.3110043-.5149577.5016032-.875.5-.3600423-.0016031-.6918799-.1951648-.8705127-.5077722-.06-.13-1.35-2.24-5.13-2.24-2.08 0-5 1.09-5 3.5 0 2.73 1.85 3.1 5.12 3.51 2.88.36 6.88.86 6.88 5.49 0 2.5-1.6 5.11-6 5.5v2c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-2c-4-.2-5.54-1.59-5.71-1.76-.3921222-.3921222-.3921222-1.0278778 0-1.42s1.0278778-.3921222 1.42 0c1.54 1.33 10.29 2.6 10.29-2.32 0-2.73-1.85-3.1-5.12-3.5zm-12.28-17.48c1.0099054-1.85917744 2.2422964-3.58855444 3.67-5.15.3783151-.40316784 1.0118321-.42331501 1.415-.04499997.4031678.37831504.423315 1.0118321.045 1.41499997-1.3167051 1.43547667-2.4518907 3.0274234-3.38 4.74-.2761424.4832492-.8917508.6511424-1.375.375s-.6511424-.8917508-.375-1.375z" }),
            React.createElement("path", { id: "Shape", d: "m15 45c-8.88-7.41-8.36-20.14-4-31-3.55 0-6.26 2.19-7.89 5.33-2.41 4.59-2.79 11.46-1 17.09 2.02 6.08 7.13 8.82 12.89 8.58z" }),
            React.createElement("path", { id: "Shape", d: "m51.37 50.82 5.18-.49c-2.69-2-2.54-1.91-2.62-2-.3695814-.3660786-.5548165-.8790296-.5043991-1.3967767.0504173-.5177471.3311345-.9853244.7643991-1.2732233l.33-.18-2.79-.63c-3.3740505 1.9352367-7.3317613 2.5918972-11.15 1.85-7.0998733 4.3760158-16.0601267 4.3760158-23.16 0-3.823751.72837-7.78190651.0763551-11.17-1.84l-2.77.63.25.13c.459298.2749348.76648497.7459757.8328805 1.2771399.06639553.5311643-.11539102 1.0633268-.4928805 1.4428601-.08.08 0 0-2.62 2l5.15.49c.64038677.0713049 1.18894097.490663 1.42571345 1.0899279.23677249.5992649.12299447 1.2803137-.29571345 1.7700721l-.56.86 6.55-2.17c.9183874-.2960905 1.9231368-.1323536 2.7.44l2.51 1.88c.1137149.0896251.2677225.108876.4.05 6.09-2.89 5.67-2.75 6.15-2.75.4614024.000194.9038362.1836422 1.23.51.13.13 0 0 2.29 3.4 2.27-3.39 2.16-3.26 2.29-3.4.5872385-.5903148 1.5116873-.6785576 2.2-.21l5.18 2.44c.1322775.058876.2862851.0396251.4-.05l2.51-1.88c.7768632-.5723536 1.7816126-.7360905 2.7-.44l6.55 2.17-.56-.86c-.4172055-.4855792-.5340677-1.1610366-.3042517-1.7585583.2298161-.5975217.7691853-1.0205824 1.4042517-1.1014417z" }),
            React.createElement("path", { id: "Shape", d: "m46.71 5.71 1-1c.2536586-.25365856.3527236-.62337399.2598781-.96987806-.0928455-.34650406-.363496-.61715454-.71-.71000002-.3465041-.09284548-.7162195.00621949-.9698781.25987808l-1 1c-.3921221.39212218-.3921221 1.02787781 0 1.41999996.3921222.39212216 1.0278778.39212218 1.42.FFFFFF04z" }),
            React.createElement("path", { id: "Shape", d: "m48.32 9 3-1c.3394023-.11432499.5920313-.40103461.6627241-.75212813s-.0512905-.71323147-.32-.95-.6433218-.31219686-.9827241-.19787187l-3 1c-.3394023.11432498-.5920313.40103461-.6627241.75212813-.0706929.35109352.0512905.71323148.32.95000001s.6433218.31219685.9827241.19787186z" }),
            React.createElement("path", { id: "Shape", d: "m12.71 4.29-1-1c-.2536586-.25365857-.623374-.35272352-.969878-.25987804-.3465041.09284548-.6171546.36349595-.71.71-.09284552.34650405.0062194.71621947.259878.96987804l1 1c.3921222.39212215 1.0278778.39212214 1.42-.FFFFFF02.3921221-.39212217.3921222-1.0278778 0-1.41999998z" }),
            React.createElement("path", { id: "Shape", d: "m6.05 6.68c-.10156011.25804893-.09140308.54668422.02804477.7969559.11944785.25027169.33745932.43970373.60195523.5230441 3.14 1 3.04 1 3.32 1 .4927375.00386501.9148502-.35178371.9946449-.83803264.0797947-.48624892-.2065147-.95815151-.6746449-1.11196736l-3-1c-.25193645-.08555066-.52757913-.06717426-.76592958.05106258-.23835046.11823684-.41975528.32658479-.50407042.57893742z" }))));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$I,
    GroupsIcon: Icon$J,
    HamburgerIcon: Icon$K,
    HamburgerCloseIcon: Icon$L,
    HomeIcon: Icon$M,
    IfoIcon: Icon$N,
    InfoIcon: Icon$O,
    LanguageIcon: Icon$P,
    LogoIcon: Logo,
    MoonIcon: Icon$Q,
    MoreIcon: Icon$R,
    NftIcon: Icon$S,
    PoolIcon: Icon$T,
    SunIcon: Icon$U,
    TelegramIcon: Icon$V,
    TicketIcon: Icon$W,
    TradeIcon: Icon$X,
    TwitterIcon: Icon$Y,
    RedditIcon: Icon$Z,
    AuditIcon: Icon$_,
    GooseIcon: Icon$$,
    HandshakeIcon: Icon$10,
    LayerIcon: Icon$11,
    RoadmapIcon: Icon$12,
    BondsIcon: Icon$13,
    VaultsIcon: Icon$14,
    EggHouseIcon: Icon$15
});

var MenuButton = styled(Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled(Link$1)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 150px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 150px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href, isMobile = _a.isMobile;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$q, { className: "mobile-icon" }),
        React.createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px", style: isMobile ? { height: "40px" } : { height: "40px", display: "none" } }, isPushed ? (React.createElement(Icon$L, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$K, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink$1, { as: "a", href: href, "aria-label": "AVATerra Home" }, innerLogo)) : (React.createElement(StyledLink$1, { to: href, "aria-label": "AVATerra Home" }, innerLogo))));
};
var templateObject_1$y;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://quickswap.exchange/",
            },
            {
                label: "Liquidity",
                href: "https://quickswap.exchange/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    /*  {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
      },
      {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
      },
      {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
          {
            label: "Leaderboard",
            href: "/",
          },
          {
            label: "YourProfile",
            href: "/",
          },
        ],
        calloutClass: "rainbow",
      },
      {
        label: "Info",
        icon: "InfoIcon",
        items: [
          {
            label: "Overview",
            href: "https://pancakeswap.info",
          },
          {
            label: "Tokens",
            href: "https://pancakeswap.info/tokens",
          },
          {
            label: "Pairs",
            href: "https://pancakeswap.info/pairs",
          },
          {
            label: "Accounts",
            href: "https://pancakeswap.info/accounts",
          },
        ],
      },
      {
        label: "IFO",
        icon: "IfoIcon",
        items: [
          {
            label: "Next",
            href: "/ifo",
          },
          {
            label: "History",
            href: "/ifo/history",
          },
        ],
      }, */
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            // {
            //   label: "Voting",
            //   href: "https://voting.pancakeswap.finance",
            // },
            {
                label: "Github",
                href: "https://github.com/goosefinance",
            },
        ],
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, isMobile = _a.isMobile, theme = _a.theme;
    return (isPushed || !isMobile ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  transition: all 0.3s ease-in-out;\n  padding: ", ";\n  font-size: ", ";\n  filter: brightness(", "%);\n  /* background-color: ", "; */\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    ", ";\n    filter: brightness(100%);\n    box-shadow: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  transition: all 0.3s ease-in-out;\n  padding: ", ";\n  font-size: ", ";\n  filter: brightness(", "%);\n  /* background-color: ", "; */\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    ", ";\n    filter: brightness(100%);\n    box-shadow: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "100" : "100");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme, isMobile = _a.isMobile;
    return (isActive ? "inset " + (isMobile ? 2 : 0) + "px -" + (isMobile ? 0 : 2) + "px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme, isMobile = _a.isMobile;
    return isMobile ? "background-color: " + theme.colors.tertiary : "";
}, function (_a) {
    var theme = _a.theme, isMobile = _a.isMobile;
    return "inset " + (isMobile ? 2 : 0) + "px -" + (isMobile ? 0 : 2) + "px 0px " + theme.colors.primary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$z, templateObject_2$a, templateObject_3$6;

var Container$2 = styled.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: ", ";\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n  position: ", ";\n  top: ", ";\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: ", ";\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n  position: ", ";\n  top: ", ";\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "visible" : "hidden");
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
}, function (_a) {
    var isMobile = _a.isMobile;
    return (isMobile ? "relative" : "absolute");
}, function (_a) {
    var top = _a.top, isMobile = _a.isMobile;
    return (isMobile ? 0 : top + "px");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, isMobile = _a.isMobile, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, { onMouseEnter: !isMobile ? handleClick : (function () { }), onMouseLeave: !isMobile ? handleClick : (function () { }) },
        React.createElement(MenuEntry, { className: className, onClick: isMobile ? handleClick : (function () { }), isMobile: isMobile },
            icon,
            React.createElement(LinkLabel, { isPushed: isPushed, isMobile: isMobile }, label),
            isOpen ? React.createElement(Icon$8, null) : React.createElement(Icon$7, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT, top: MENU_HEIGHT, isMobile: isMobile }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled.div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";;\n  overflow-y: visible;\n  // overflow-x: hidden;\n  margin-top: 10px;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: ", ";;\n  overflow-y: visible;\n  // overflow-x: hidden;\n  margin-top: 10px;\n  height: 100%;\n"])), function (_a) {
    var isMobile = _a.isMobile;
    return (isMobile ? "column" : "row");
});
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$3, { isMobile: isMobile }, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, isMobile: isMobile, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick, isMobile: isMobile },
                    React.createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass, isMobile: isMobile },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabel, { isPushed: isPushed, isMobile: isMobile }, entry.label))));
    })));
};
var templateObject_1$B;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon, LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 0px 0px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 0px 0px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled.a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, isMobile = _a.isMobile, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang, priceLink = _a.priceLink, socials = _a.socials;
    if (!isPushed && isMobile) {
        return (React.createElement(Container$4, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$l, null))));
    }
    return (React.createElement(Container$4, null,
        React.createElement(SocialEntry, null,
            cakePriceUsd ? (React.createElement(PriceLink, { href: priceLink, target: "_blank" },
                React.createElement(Icon$v, { width: "24px", mr: "8px" }),
                React.createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 })),
            React.createElement(Flex, null, socials != null && socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "10px" : 0;
                if (social.items) {
                    return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React.createElement(Icon, __assign({}, iconProps))));
            }))),
        React.createElement(SettingsEntry, { style: { display: "none" } },
            React.createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React.createElement(Flex, { alignItems: "center" },
                    React.createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React.createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React.createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
            React.createElement(Dropdown, { position: "top-right", target: React.createElement(Button, { variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                    React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                // Safari fix
                style: { minHeight: "32px", height: "auto" } }, lang.language)); })))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$2;

var StyledPanel = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
            React.createElement(PanelBody, __assign({}, props)),
            React.createElement(PanelFooter, __assign({}, props)))));
};
var templateObject_1$D;

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$16,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$17,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$18,
        connectorId: "walletconnect",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

styled(Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss }, connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); })));
};
var templateObject_1$E;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://ftmscan.com/address/" + account, mr: "16px" }, "View on FTM Explorer"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Icon$19 = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React.createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React.createElement(Icon$19, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React.createElement(StyledAvatar, { title: username },
            React.createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React.createElement(Pip, null)));
    }
    return (React.createElement(StyledAvatar, { title: username },
        React.createElement(Link$1, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React.createElement(Pip, null)));
};
var templateObject_1$G, templateObject_2$e;

var Wrapper$1 = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  min-height: calc(100vh - 50px);\n"], ["\n  position: relative;\n  display: flex;\n  min-height: calc(100vh - 50px);\n"])));
var Inner = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  flex-grow: 1;\n  transform: translate3d(0, 0, 0);\n"], ["\n  flex-grow: 1;\n  transform: translate3d(0, 0, 0);\n"])));
var MobileOnlyOverlay = styled(Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, priceLink = _a.priceLink, profile = _a.profile, children = _a.children, socials = _a.socials;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper$1, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, isMobile: isMobile, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            !isMobile &&
                React.createElement(PanelBody, { isPushed: isPushed, isMobile: isMobile, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink, socials: socials }),
            !!login && !!logout && (React.createElement(Flex, null,
                React.createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile })))),
        React.createElement(BodyWrapper, null,
            isMobile &&
                React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink, socials: socials }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" })),
        !isMobile &&
            React.createElement(PanelFooter, { isPushed: isPushed, isMobile: isMobile, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink, socials: socials })));
};
var templateObject_1$H, templateObject_2$f, templateObject_3$8, templateObject_4$3, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$I;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$J;

var ResetCSS = createGlobalStyle(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$K;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#fb2141",
    primaryBright: "#fb2141",
    primaryDark: "#FFFFFF",
    secondary: "#fb2141",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#061740", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#3360a6", input: "#000000", tertiary: "#383940", text: "#FFFFFF", textDisabled: "#BDC2C4", textSubtle: "#FFFFFF", borderColor: "#E9EAEB", card: "#122146", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#ffdd00", background: "#343135", backgroundDisabled: "#3c3742", contrast: "#26262c", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#FFFFFF", tertiary: "#353547", text: "#FFFFFF", textDisabled: "#666171", textSubtle: "#d8e3e7", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#26262c",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#26262c",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#26262c",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#26262c",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

export { Icon$4 as AddIcon, Alert, Icon$5 as ArrowBackIcon, Icon$6 as ArrowDownIcon, Icon$7 as ArrowDropDownIcon, Icon$8 as ArrowDropUpIcon, Icon$9 as ArrowForwardIcon, Icon$a as AutoRenewIcon, BackgroundImage, GridLayout as BaseLayout, Icon$b as BinanceIcon, Icon$2 as BlockIcon, Breadcrumbs, Icon$c as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, Icon$e as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$d as CardViewIcon, GridLayout$1 as CardsLayout, Checkbox, Icon as CheckmarkCircleIcon, Icon$f as CheckmarkIcon, Icon$g as ChevronDownIcon, Icon$h as ChevronLeftIcon, Icon$i as ChevronRightIcon, Icon$j as ChevronUpIcon, Icon$k as CloseIcon, Icon$l as CogIcon, Icon$m as CommunityIcon, Icon$n as CopyIcon, CopyToClipboard, Dropdown, Icon$1 as ErrorIcon, Flex, Icon$w as GooseRoundIcon, Heading, Icon$o as HelpIcon, IconButton, Image, Icon$3 as InfoIcon, Input, Link, LinkExternal, Icon$p as ListViewIcon, Icon$q as LogoIcon, Icon$r as LogoRoundIcon, Menu, Icon$s as MinusIcon, Modal, ModalProvider, Icon$t as OpenNewIcon, Icon$v as PancakeRoundIcon, Icon$u as PancakesIcon, Icon$x as PrizeIcon, Progress, Icon$A as ProgressBunny, Radio, Icon$y as RemoveIcon, ResetCSS, Icon$E as SearchIcon, Skeleton, Spinner, Svg, Icon$F as SwapVertIcon, Icon$G as SyncAltIcon, Tag, Text, Icon$C as Ticket, Icon$D as TicketRound, ToastContainer, Toggle, Icon$z as VerifiedIcon, Icon$H as WarningIcon, Icon$B as Won, variants$1 as alertVariants, byTextAscending, byTextDescending, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, types as toastTypes, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
