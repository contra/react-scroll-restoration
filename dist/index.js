'use strict';

var React = require('react');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var scrollTo = function scrollTo(node, scrollnumber) {
  if (node === void 0) {
    node = document.documentElement;
  }

  if (scrollnumber === void 0) {
    scrollnumber = 0;
  }

  return window.requestAnimationFrame(function () {
    node.scrollTo(0, scrollnumber);
  });
};
var getScrollPage = function getScrollPage(node) {
  if (node === void 0) {
    node = document.documentElement;
  }

  if (!node) return window.pageYOffset;
  return node.scrollTop;
};

var DefaultKey = 'init-enter';

function ScrollRestoration(_a) {
  var history = _a.history,
      visitedUrl = _a.visitedUrl,
      node = _a.node;

  var handlePopStateChange = function handlePopStateChange() {
    var location = history.location;
    var key = location.key;
    var existingRecord = visitedUrl.get(key || DefaultKey);

    if (existingRecord !== undefined) {
      scrollTo(node, existingRecord);
    }
  };

  React.useEffect(function () {
    window.addEventListener('popstate', handlePopStateChange);
    return function () {
      window.removeEventListener('popstate', handlePopStateChange);
    };
  }, []);
  return null;
}

var ScrollRestoration$1 = reactRouterDom.withRouter( /*#__PURE__*/React.memo(ScrollRestoration, function (prevProps, nextProps) {
  var prevLoaction = prevProps.location,
      visitedUrl = prevProps.visitedUrl,
      history = prevProps.history;
  var nextLoaction = nextProps.location,
      node = nextProps.node;
  var key = prevLoaction.key || DefaultKey;
  var locationChanged = (nextLoaction.pathname !== prevLoaction.pathname || nextLoaction.search !== prevLoaction.search) && nextLoaction.hash === '';
  var scroll = getScrollPage(node);

  if (locationChanged) {
    if (history.action !== 'POP') {
      scrollTo(node, 0);
      visitedUrl.set(key, scroll);
    } else {
      visitedUrl.set(key, scroll);
    }
  }

  return false;
}));

function Wrapper(_a) {
  var node = _a.node;
  var visitedUrl = React.useRef(new Map());
  return /*#__PURE__*/React__default['default'].createElement(ScrollRestoration$1, {
    node: node,
    visitedUrl: visitedUrl.current
  });
}

module.exports = Wrapper;
