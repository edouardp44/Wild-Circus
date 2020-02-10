(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listSpectacle"],{

/***/ "./assets/js/listSpectacle.js":
/*!************************************!*\
  !*** ./assets/js/listSpectacle.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2__);



var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.setRoutingData(routes);
document.getElementById('spectacle-list').addEventListener('click', function (event) {
  fetch(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('spectacle_detail', {
    id: event.target.id
  })).then(function (response) {
    return response.json();
  }).then(function (result) {
    var element1 = document.getElementById("spectacle-detail");
    element1.innerHTML = result;
    var element2 = document.getElementById('element');
    var parentDiv = element2.parentNode;
    parentDiv.replaceChild(element1, element2);
  });
});

/***/ }),

/***/ "./public/js/fos_js_routes.json":
/*!**************************************!*\
  !*** ./public/js/fos_js_routes.json ***!
  \**************************************/
/*! exports provided: base_url, routes, prefix, host, port, scheme, locale, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"base_url\":\"\",\"routes\":{\"animals_detail\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/animals/detail\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"spectacle_detail\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/spectacle/detail\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]}},\"prefix\":\"\",\"host\":\"localhost\",\"port\":\"\",\"scheme\":\"http\",\"locale\":[]}");

/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js":
/*!************************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  var n = t();
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n.Routing),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  var t = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var o in n) {
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
    }

    return e;
  },
      n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      i = function () {
    function i(t, n) {
      e(this, i), this.context_ = t || {
        base_url: "",
        prefix: "",
        host: "",
        port: "",
        scheme: "",
        locale: ""
      }, this.setRoutes(n || {});
    }

    return o(i, [{
      key: "setRoutingData",
      value: function value(e) {
        this.setBaseUrl(e.base_url), this.setRoutes(e.routes), "prefix" in e && this.setPrefix(e.prefix), "port" in e && this.setPort(e.port), "locale" in e && this.setLocale(e.locale), this.setHost(e.host), this.setScheme(e.scheme);
      }
    }, {
      key: "setRoutes",
      value: function value(e) {
        this.routes_ = Object.freeze(e);
      }
    }, {
      key: "getRoutes",
      value: function value() {
        return this.routes_;
      }
    }, {
      key: "setBaseUrl",
      value: function value(e) {
        this.context_.base_url = e;
      }
    }, {
      key: "getBaseUrl",
      value: function value() {
        return this.context_.base_url;
      }
    }, {
      key: "setPrefix",
      value: function value(e) {
        this.context_.prefix = e;
      }
    }, {
      key: "setScheme",
      value: function value(e) {
        this.context_.scheme = e;
      }
    }, {
      key: "getScheme",
      value: function value() {
        return this.context_.scheme;
      }
    }, {
      key: "setHost",
      value: function value(e) {
        this.context_.host = e;
      }
    }, {
      key: "getHost",
      value: function value() {
        return this.context_.host;
      }
    }, {
      key: "setPort",
      value: function value(e) {
        this.context_.port = e;
      }
    }, {
      key: "getPort",
      value: function value() {
        return this.context_.port;
      }
    }, {
      key: "setLocale",
      value: function value(e) {
        this.context_.locale = e;
      }
    }, {
      key: "getLocale",
      value: function value() {
        return this.context_.locale;
      }
    }, {
      key: "buildQueryParams",
      value: function value(e, t, o) {
        var i = this,
            r = void 0,
            s = new RegExp(/\[\]$/);
        if (t instanceof Array) t.forEach(function (t, r) {
          s.test(e) ? o(e, t) : i.buildQueryParams(e + "[" + ("object" === ("undefined" == typeof t ? "undefined" : n(t)) ? r : "") + "]", t, o);
        });else if ("object" === ("undefined" == typeof t ? "undefined" : n(t))) for (r in t) {
          this.buildQueryParams(e + "[" + r + "]", t[r], o);
        } else o(e, t);
      }
    }, {
      key: "getRoute",
      value: function value(e) {
        var t = this.context_.prefix + e,
            n = e + "." + this.context_.locale,
            o = this.context_.prefix + e + "." + this.context_.locale,
            i = [t, n, o, e];

        for (var r in i) {
          if (i[r] in this.routes_) return this.routes_[i[r]];
        }

        throw new Error('The route "' + e + '" does not exist.');
      }
    }, {
      key: "generate",
      value: function value(e, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = this.getRoute(e),
            r = n || {},
            s = t({}, r),
            u = "",
            c = !0,
            a = "",
            f = "undefined" == typeof this.getPort() || null === this.getPort() ? "" : this.getPort();

        if (i.tokens.forEach(function (t) {
          if ("text" === t[0]) return u = t[1] + u, void (c = !1);
          {
            if ("variable" !== t[0]) throw new Error('The token type "' + t[0] + '" is not supported.');
            var n = i.defaults && t[3] in i.defaults;

            if (!1 === c || !n || t[3] in r && r[t[3]] != i.defaults[t[3]]) {
              var o = void 0;
              if (t[3] in r) o = r[t[3]], delete s[t[3]];else {
                if (!n) {
                  if (c) return;
                  throw new Error('The route "' + e + '" requires the parameter "' + t[3] + '".');
                }

                o = i.defaults[t[3]];
              }
              var a = !0 === o || !1 === o || "" === o;

              if (!a || !c) {
                var f = encodeURIComponent(o).replace(/%2F/g, "/");
                "null" === f && null === o && (f = ""), u = t[1] + f + u;
              }

              c = !1;
            } else n && t[3] in s && delete s[t[3]];
          }
        }), "" === u && (u = "/"), i.hosttokens.forEach(function (e) {
          var t = void 0;
          return "text" === e[0] ? void (a = e[1] + a) : void ("variable" === e[0] && (e[3] in r ? (t = r[e[3]], delete s[e[3]]) : i.defaults && e[3] in i.defaults && (t = i.defaults[e[3]]), a = e[1] + t + a));
        }), u = this.context_.base_url + u, i.requirements && "_scheme" in i.requirements && this.getScheme() != i.requirements._scheme ? u = i.requirements._scheme + "://" + (a || this.getHost()) + ("" === f ? "" : ":" + f) + u : "undefined" != typeof i.schemes && "undefined" != typeof i.schemes[0] && this.getScheme() !== i.schemes[0] ? u = i.schemes[0] + "://" + (a || this.getHost()) + ("" === f ? "" : ":" + f) + u : a && this.getHost() !== a + ("" === f ? "" : ":" + f) ? u = this.getScheme() + "://" + a + ("" === f ? "" : ":" + f) + u : o === !0 && (u = this.getScheme() + "://" + this.getHost() + ("" === f ? "" : ":" + f) + u), Object.keys(s).length > 0) {
          var l = void 0,
              h = [],
              y = function y(e, t) {
            t = "function" == typeof t ? t() : t, t = null === t ? "" : t, h.push(encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };

          for (l in s) {
            this.buildQueryParams(l, s[l], y);
          }

          u = u + "?" + h.join("&").replace(/%20/g, "+");
        }

        return u;
      }
    }], [{
      key: "getInstance",
      value: function value() {
        return r;
      }
    }, {
      key: "setData",
      value: function value(e) {
        var t = i.getInstance();
        t.setRoutingData(e);
      }
    }]), i;
  }();

  i.Route, i.Context;
  var r = new i();
  return {
    Router: i,
    Routing: r
  };
});

/***/ })

},[["./assets/js/listSpectacle.js","runtime","vendors~listAnimal~listSpectacle"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGlzdFNwZWN0YWNsZS5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImZldGNoIiwiZ2VuZXJhdGUiLCJpZCIsInRhcmdldCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJlbGVtZW50MSIsImlubmVySFRNTCIsImVsZW1lbnQyIiwicGFyZW50RGl2IiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsImUiLCJ0IiwibiIsImRlZmluZSIsIlR5cGVFcnJvciIsIk9iamVjdCIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm8iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJpIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwidmFsdWUiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiZnJlZXplIiwiciIsInMiLCJSZWdFeHAiLCJBcnJheSIsImZvckVhY2giLCJ0ZXN0IiwiYnVpbGRRdWVyeVBhcmFtcyIsIkVycm9yIiwiZ2V0Um91dGUiLCJ1IiwiYyIsImEiLCJmIiwiZ2V0UG9ydCIsInRva2VucyIsImRlZmF1bHRzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJnZXRTY2hlbWUiLCJfc2NoZW1lIiwiZ2V0SG9zdCIsInNjaGVtZXMiLCJrZXlzIiwibCIsImgiLCJ5IiwicHVzaCIsImpvaW4iLCJnZXRJbnN0YW5jZSIsIlJvdXRlIiwiQ29udGV4dCIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMEVBQUQsQ0FBdEI7O0FBQ0E7QUFDQUMsa0hBQU8sQ0FBQ0MsY0FBUixDQUF1QkgsTUFBdkI7QUFDQUksUUFBUSxDQUNIQyxjQURMLENBQ29CLGdCQURwQixFQUVLQyxnQkFGTCxDQUVzQixPQUZ0QixFQUUrQixVQUFDQyxLQUFELEVBQVc7QUFDbENDLE9BQUssQ0FBQ04sa0hBQU8sQ0FBQ08sUUFBUixDQUFpQixrQkFBakIsRUFBcUM7QUFBQ0MsTUFBRSxFQUFHSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUQ7QUFBbkIsR0FBckMsQ0FBRCxDQUFMLENBQ0tFLElBREwsQ0FDVSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3RCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0gsR0FITCxFQUlLRixJQUpMLENBSVUsVUFBVUcsTUFBVixFQUFrQjtBQUNwQixRQUFJQyxRQUFRLEdBQUdaLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBZjtBQUNBVyxZQUFRLENBQUNDLFNBQVQsR0FBcUJGLE1BQXJCO0FBQ0EsUUFBSUcsUUFBUSxHQUFHZCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZjtBQUNBLFFBQUljLFNBQVMsR0FBR0QsUUFBUSxDQUFDRSxVQUF6QjtBQUVBRCxhQUFTLENBQUNFLFlBQVYsQ0FBdUJMLFFBQXZCLEVBQWlDRSxRQUFqQztBQUNILEdBWEw7QUFZSCxDQWZMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLENBQUMsVUFBU0ksQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxNQUFJQyxDQUFDLEdBQUNELENBQUMsRUFBUDtBQUFVLFVBQXNDRSxpQ0FBTyxFQUFELG9DQUFJRCxDQUFDLENBQUN0QixPQUFOO0FBQUE7QUFBQTtBQUFBLG9HQUE1QyxHQUEyRCxTQUEzRDtBQUEwSyxDQUFsTSxDQUFtTSxJQUFuTSxFQUF3TSxZQUFVO0FBQUM7O0FBQWEsV0FBU29CLENBQVQsQ0FBV0EsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxRQUFHLEVBQUVELENBQUMsWUFBWUMsQ0FBZixDQUFILEVBQXFCLE1BQU0sSUFBSUcsU0FBSixDQUFjLG1DQUFkLENBQU47QUFBeUQ7O0FBQUEsTUFBSUgsQ0FBQyxHQUFDSSxNQUFNLENBQUNDLE1BQVAsSUFBZSxVQUFTTixDQUFULEVBQVc7QUFBQyxTQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ00sU0FBUyxDQUFDQyxNQUF4QixFQUErQlAsQ0FBQyxFQUFoQyxFQUFtQztBQUFDLFVBQUlDLENBQUMsR0FBQ0ssU0FBUyxDQUFDTixDQUFELENBQWY7O0FBQW1CLFdBQUksSUFBSVEsQ0FBUixJQUFhUCxDQUFiO0FBQWVHLGNBQU0sQ0FBQ0ssU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDVixDQUFyQyxFQUF1Q08sQ0FBdkMsTUFBNENULENBQUMsQ0FBQ1MsQ0FBRCxDQUFELEdBQUtQLENBQUMsQ0FBQ08sQ0FBRCxDQUFsRDtBQUFmO0FBQXNFOztBQUFBLFdBQU9ULENBQVA7QUFBUyxHQUF2SztBQUFBLE1BQXdLRSxDQUFDLEdBQUMsY0FBWSxPQUFPVyxNQUFuQixJQUEyQixvQkFBaUJBLE1BQU0sQ0FBQ0MsUUFBeEIsQ0FBM0IsR0FBNEQsVUFBU2QsQ0FBVCxFQUFXO0FBQUMsbUJBQWNBLENBQWQ7QUFBZ0IsR0FBeEYsR0FBeUYsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsV0FBT0EsQ0FBQyxJQUFFLGNBQVksT0FBT2EsTUFBdEIsSUFBOEJiLENBQUMsQ0FBQ2UsV0FBRixLQUFnQkYsTUFBOUMsSUFBc0RiLENBQUMsS0FBR2EsTUFBTSxDQUFDSCxTQUFqRSxHQUEyRSxRQUEzRSxXQUEyRlYsQ0FBM0YsQ0FBUDtBQUFvRyxHQUFuWDtBQUFBLE1BQW9YUyxDQUFDLEdBQUMsWUFBVTtBQUFDLGFBQVNULENBQVQsQ0FBV0EsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxXQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0QsQ0FBQyxDQUFDTyxNQUFoQixFQUF1Qk4sQ0FBQyxFQUF4QixFQUEyQjtBQUFDLFlBQUlPLENBQUMsR0FBQ1IsQ0FBQyxDQUFDQyxDQUFELENBQVA7QUFBV08sU0FBQyxDQUFDTyxVQUFGLEdBQWFQLENBQUMsQ0FBQ08sVUFBRixJQUFjLENBQUMsQ0FBNUIsRUFBOEJQLENBQUMsQ0FBQ1EsWUFBRixHQUFlLENBQUMsQ0FBOUMsRUFBZ0QsV0FBVVIsQ0FBVixLQUFjQSxDQUFDLENBQUNTLFFBQUYsR0FBVyxDQUFDLENBQTFCLENBQWhELEVBQTZFYixNQUFNLENBQUNjLGNBQVAsQ0FBc0JuQixDQUF0QixFQUF3QlMsQ0FBQyxDQUFDVyxHQUExQixFQUE4QlgsQ0FBOUIsQ0FBN0U7QUFBOEc7QUFBQzs7QUFBQSxXQUFPLFVBQVNSLENBQVQsRUFBV0MsQ0FBWCxFQUFhTyxDQUFiLEVBQWU7QUFBQyxhQUFPUCxDQUFDLElBQUVGLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDUyxTQUFILEVBQWFSLENBQWIsQ0FBSixFQUFvQk8sQ0FBQyxJQUFFVCxDQUFDLENBQUNDLENBQUQsRUFBR1EsQ0FBSCxDQUF4QixFQUE4QlIsQ0FBckM7QUFBdUMsS0FBOUQ7QUFBK0QsR0FBaFAsRUFBdFg7QUFBQSxNQUF5bUJvQixDQUFDLEdBQUMsWUFBVTtBQUFDLGFBQVNBLENBQVQsQ0FBV3BCLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUNGLE9BQUMsQ0FBQyxJQUFELEVBQU1xQixDQUFOLENBQUQsRUFBVSxLQUFLQyxRQUFMLEdBQWNyQixDQUFDLElBQUU7QUFBQ3NCLGdCQUFRLEVBQUMsRUFBVjtBQUFhQyxjQUFNLEVBQUMsRUFBcEI7QUFBdUJDLFlBQUksRUFBQyxFQUE1QjtBQUErQkMsWUFBSSxFQUFDLEVBQXBDO0FBQXVDQyxjQUFNLEVBQUMsRUFBOUM7QUFBaURDLGNBQU0sRUFBQztBQUF4RCxPQUEzQixFQUF1RixLQUFLQyxTQUFMLENBQWUzQixDQUFDLElBQUUsRUFBbEIsQ0FBdkY7QUFBNkc7O0FBQUEsV0FBT08sQ0FBQyxDQUFDWSxDQUFELEVBQUcsQ0FBQztBQUFDRCxTQUFHLEVBQUMsZ0JBQUw7QUFBc0JVLFdBQUssRUFBQyxlQUFTOUIsQ0FBVCxFQUFXO0FBQUMsYUFBSytCLFVBQUwsQ0FBZ0IvQixDQUFDLENBQUN1QixRQUFsQixHQUE0QixLQUFLTSxTQUFMLENBQWU3QixDQUFDLENBQUN0QixNQUFqQixDQUE1QixFQUFxRCxZQUFXc0IsQ0FBWCxJQUFjLEtBQUtnQyxTQUFMLENBQWVoQyxDQUFDLENBQUN3QixNQUFqQixDQUFuRSxFQUE0RixVQUFTeEIsQ0FBVCxJQUFZLEtBQUtpQyxPQUFMLENBQWFqQyxDQUFDLENBQUMwQixJQUFmLENBQXhHLEVBQTZILFlBQVcxQixDQUFYLElBQWMsS0FBS2tDLFNBQUwsQ0FBZWxDLENBQUMsQ0FBQzRCLE1BQWpCLENBQTNJLEVBQW9LLEtBQUtPLE9BQUwsQ0FBYW5DLENBQUMsQ0FBQ3lCLElBQWYsQ0FBcEssRUFBeUwsS0FBS1csU0FBTCxDQUFlcEMsQ0FBQyxDQUFDMkIsTUFBakIsQ0FBekw7QUFBa047QUFBMVAsS0FBRCxFQUE2UDtBQUFDUCxTQUFHLEVBQUMsV0FBTDtBQUFpQlUsV0FBSyxFQUFDLGVBQVM5QixDQUFULEVBQVc7QUFBQyxhQUFLcUMsT0FBTCxHQUFhaEMsTUFBTSxDQUFDaUMsTUFBUCxDQUFjdEMsQ0FBZCxDQUFiO0FBQThCO0FBQWpFLEtBQTdQLEVBQWdVO0FBQUNvQixTQUFHLEVBQUMsV0FBTDtBQUFpQlUsV0FBSyxFQUFDLGlCQUFVO0FBQUMsZUFBTyxLQUFLTyxPQUFaO0FBQW9CO0FBQXRELEtBQWhVLEVBQXdYO0FBQUNqQixTQUFHLEVBQUMsWUFBTDtBQUFrQlUsV0FBSyxFQUFDLGVBQVM5QixDQUFULEVBQVc7QUFBQyxhQUFLc0IsUUFBTCxDQUFjQyxRQUFkLEdBQXVCdkIsQ0FBdkI7QUFBeUI7QUFBN0QsS0FBeFgsRUFBdWI7QUFBQ29CLFNBQUcsRUFBQyxZQUFMO0FBQWtCVSxXQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFPLEtBQUtSLFFBQUwsQ0FBY0MsUUFBckI7QUFBOEI7QUFBakUsS0FBdmIsRUFBMGY7QUFBQ0gsU0FBRyxFQUFDLFdBQUw7QUFBaUJVLFdBQUssRUFBQyxlQUFTOUIsQ0FBVCxFQUFXO0FBQUMsYUFBS3NCLFFBQUwsQ0FBY0UsTUFBZCxHQUFxQnhCLENBQXJCO0FBQXVCO0FBQTFELEtBQTFmLEVBQXNqQjtBQUFDb0IsU0FBRyxFQUFDLFdBQUw7QUFBaUJVLFdBQUssRUFBQyxlQUFTOUIsQ0FBVCxFQUFXO0FBQUMsYUFBS3NCLFFBQUwsQ0FBY0ssTUFBZCxHQUFxQjNCLENBQXJCO0FBQXVCO0FBQTFELEtBQXRqQixFQUFrbkI7QUFBQ29CLFNBQUcsRUFBQyxXQUFMO0FBQWlCVSxXQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFPLEtBQUtSLFFBQUwsQ0FBY0ssTUFBckI7QUFBNEI7QUFBOUQsS0FBbG5CLEVBQWtyQjtBQUFDUCxTQUFHLEVBQUMsU0FBTDtBQUFlVSxXQUFLLEVBQUMsZUFBUzlCLENBQVQsRUFBVztBQUFDLGFBQUtzQixRQUFMLENBQWNHLElBQWQsR0FBbUJ6QixDQUFuQjtBQUFxQjtBQUF0RCxLQUFsckIsRUFBMHVCO0FBQUNvQixTQUFHLEVBQUMsU0FBTDtBQUFlVSxXQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFPLEtBQUtSLFFBQUwsQ0FBY0csSUFBckI7QUFBMEI7QUFBMUQsS0FBMXVCLEVBQXN5QjtBQUFDTCxTQUFHLEVBQUMsU0FBTDtBQUFlVSxXQUFLLEVBQUMsZUFBUzlCLENBQVQsRUFBVztBQUFDLGFBQUtzQixRQUFMLENBQWNJLElBQWQsR0FBbUIxQixDQUFuQjtBQUFxQjtBQUF0RCxLQUF0eUIsRUFBODFCO0FBQUNvQixTQUFHLEVBQUMsU0FBTDtBQUFlVSxXQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFPLEtBQUtSLFFBQUwsQ0FBY0ksSUFBckI7QUFBMEI7QUFBMUQsS0FBOTFCLEVBQTA1QjtBQUFDTixTQUFHLEVBQUMsV0FBTDtBQUFpQlUsV0FBSyxFQUFDLGVBQVM5QixDQUFULEVBQVc7QUFBQyxhQUFLc0IsUUFBTCxDQUFjTSxNQUFkLEdBQXFCNUIsQ0FBckI7QUFBdUI7QUFBMUQsS0FBMTVCLEVBQXM5QjtBQUFDb0IsU0FBRyxFQUFDLFdBQUw7QUFBaUJVLFdBQUssRUFBQyxpQkFBVTtBQUFDLGVBQU8sS0FBS1IsUUFBTCxDQUFjTSxNQUFyQjtBQUE0QjtBQUE5RCxLQUF0OUIsRUFBc2hDO0FBQUNSLFNBQUcsRUFBQyxrQkFBTDtBQUF3QlUsV0FBSyxFQUFDLGVBQVM5QixDQUFULEVBQVdDLENBQVgsRUFBYVEsQ0FBYixFQUFlO0FBQUMsWUFBSVksQ0FBQyxHQUFDLElBQU47QUFBQSxZQUFXa0IsQ0FBQyxHQUFDLEtBQUssQ0FBbEI7QUFBQSxZQUFvQkMsQ0FBQyxHQUFDLElBQUlDLE1BQUosQ0FBVyxPQUFYLENBQXRCO0FBQTBDLFlBQUd4QyxDQUFDLFlBQVl5QyxLQUFoQixFQUFzQnpDLENBQUMsQ0FBQzBDLE9BQUYsQ0FBVSxVQUFTMUMsQ0FBVCxFQUFXc0MsQ0FBWCxFQUFhO0FBQUNDLFdBQUMsQ0FBQ0ksSUFBRixDQUFPNUMsQ0FBUCxJQUFVUyxDQUFDLENBQUNULENBQUQsRUFBR0MsQ0FBSCxDQUFYLEdBQWlCb0IsQ0FBQyxDQUFDd0IsZ0JBQUYsQ0FBbUI3QyxDQUFDLEdBQUMsR0FBRixJQUFPLGNBQVksZUFBYSxPQUFPQyxDQUFwQixHQUFzQixXQUF0QixHQUFrQ0MsQ0FBQyxDQUFDRCxDQUFELENBQS9DLElBQW9Ec0MsQ0FBcEQsR0FBc0QsRUFBN0QsSUFBaUUsR0FBcEYsRUFBd0Z0QyxDQUF4RixFQUEwRlEsQ0FBMUYsQ0FBakI7QUFBOEcsU0FBdEksRUFBdEIsS0FBbUssSUFBRyxjQUFZLGVBQWEsT0FBT1IsQ0FBcEIsR0FBc0IsV0FBdEIsR0FBa0NDLENBQUMsQ0FBQ0QsQ0FBRCxDQUEvQyxDQUFILEVBQXVELEtBQUlzQyxDQUFKLElBQVN0QyxDQUFUO0FBQVcsZUFBSzRDLGdCQUFMLENBQXNCN0MsQ0FBQyxHQUFDLEdBQUYsR0FBTXVDLENBQU4sR0FBUSxHQUE5QixFQUFrQ3RDLENBQUMsQ0FBQ3NDLENBQUQsQ0FBbkMsRUFBdUM5QixDQUF2QztBQUFYLFNBQXZELE1BQWlIQSxDQUFDLENBQUNULENBQUQsRUFBR0MsQ0FBSCxDQUFEO0FBQU87QUFBblgsS0FBdGhDLEVBQTI0QztBQUFDbUIsU0FBRyxFQUFDLFVBQUw7QUFBZ0JVLFdBQUssRUFBQyxlQUFTOUIsQ0FBVCxFQUFXO0FBQUMsWUFBSUMsQ0FBQyxHQUFDLEtBQUtxQixRQUFMLENBQWNFLE1BQWQsR0FBcUJ4QixDQUEzQjtBQUFBLFlBQTZCRSxDQUFDLEdBQUNGLENBQUMsR0FBQyxHQUFGLEdBQU0sS0FBS3NCLFFBQUwsQ0FBY00sTUFBbkQ7QUFBQSxZQUEwRG5CLENBQUMsR0FBQyxLQUFLYSxRQUFMLENBQWNFLE1BQWQsR0FBcUJ4QixDQUFyQixHQUF1QixHQUF2QixHQUEyQixLQUFLc0IsUUFBTCxDQUFjTSxNQUFyRztBQUFBLFlBQTRHUCxDQUFDLEdBQUMsQ0FBQ3BCLENBQUQsRUFBR0MsQ0FBSCxFQUFLTyxDQUFMLEVBQU9ULENBQVAsQ0FBOUc7O0FBQXdILGFBQUksSUFBSXVDLENBQVIsSUFBYWxCLENBQWI7QUFBZSxjQUFHQSxDQUFDLENBQUNrQixDQUFELENBQUQsSUFBTyxLQUFLRixPQUFmLEVBQXVCLE9BQU8sS0FBS0EsT0FBTCxDQUFhaEIsQ0FBQyxDQUFDa0IsQ0FBRCxDQUFkLENBQVA7QUFBdEM7O0FBQWdFLGNBQU0sSUFBSU8sS0FBSixDQUFVLGdCQUFjOUMsQ0FBZCxHQUFnQixtQkFBMUIsQ0FBTjtBQUFxRDtBQUEvUSxLQUEzNEMsRUFBNHBEO0FBQUNvQixTQUFHLEVBQUMsVUFBTDtBQUFnQlUsV0FBSyxFQUFDLGVBQVM5QixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFlBQUlPLENBQUMsR0FBQ0YsU0FBUyxDQUFDQyxNQUFWLEdBQWlCLENBQWpCLElBQW9CLEtBQUssQ0FBTCxLQUFTRCxTQUFTLENBQUMsQ0FBRCxDQUF0QyxJQUEyQ0EsU0FBUyxDQUFDLENBQUQsQ0FBMUQ7QUFBQSxZQUE4RGMsQ0FBQyxHQUFDLEtBQUswQixRQUFMLENBQWMvQyxDQUFkLENBQWhFO0FBQUEsWUFBaUZ1QyxDQUFDLEdBQUNyQyxDQUFDLElBQUUsRUFBdEY7QUFBQSxZQUF5RnNDLENBQUMsR0FBQ3ZDLENBQUMsQ0FBQyxFQUFELEVBQUlzQyxDQUFKLENBQTVGO0FBQUEsWUFBbUdTLENBQUMsR0FBQyxFQUFyRztBQUFBLFlBQXdHQyxDQUFDLEdBQUMsQ0FBQyxDQUEzRztBQUFBLFlBQTZHQyxDQUFDLEdBQUMsRUFBL0c7QUFBQSxZQUFrSEMsQ0FBQyxHQUFDLGVBQWEsT0FBTyxLQUFLQyxPQUFMLEVBQXBCLElBQW9DLFNBQU8sS0FBS0EsT0FBTCxFQUEzQyxHQUEwRCxFQUExRCxHQUE2RCxLQUFLQSxPQUFMLEVBQWpMOztBQUFnTSxZQUFHL0IsQ0FBQyxDQUFDZ0MsTUFBRixDQUFTVixPQUFULENBQWlCLFVBQVMxQyxDQUFULEVBQVc7QUFBQyxjQUFHLFdBQVNBLENBQUMsQ0FBQyxDQUFELENBQWIsRUFBaUIsT0FBTytDLENBQUMsR0FBQy9DLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBSytDLENBQVAsRUFBUyxNQUFLQyxDQUFDLEdBQUMsQ0FBQyxDQUFSLENBQWhCO0FBQTJCO0FBQUMsZ0JBQUcsZUFBYWhELENBQUMsQ0FBQyxDQUFELENBQWpCLEVBQXFCLE1BQU0sSUFBSTZDLEtBQUosQ0FBVSxxQkFBbUI3QyxDQUFDLENBQUMsQ0FBRCxDQUFwQixHQUF3QixxQkFBbEMsQ0FBTjtBQUErRCxnQkFBSUMsQ0FBQyxHQUFDbUIsQ0FBQyxDQUFDaUMsUUFBRixJQUFZckQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFPb0IsQ0FBQyxDQUFDaUMsUUFBM0I7O0FBQW9DLGdCQUFHLENBQUMsQ0FBRCxLQUFLTCxDQUFMLElBQVEsQ0FBQy9DLENBQVQsSUFBWUQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFPc0MsQ0FBUCxJQUFVQSxDQUFDLENBQUN0QyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQUQsSUFBU29CLENBQUMsQ0FBQ2lDLFFBQUYsQ0FBV3JELENBQUMsQ0FBQyxDQUFELENBQVosQ0FBbEMsRUFBbUQ7QUFBQyxrQkFBSVEsQ0FBQyxHQUFDLEtBQUssQ0FBWDtBQUFhLGtCQUFHUixDQUFDLENBQUMsQ0FBRCxDQUFELElBQU9zQyxDQUFWLEVBQVk5QixDQUFDLEdBQUM4QixDQUFDLENBQUN0QyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQUgsRUFBVSxPQUFPdUMsQ0FBQyxDQUFDdkMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFsQixDQUFaLEtBQXlDO0FBQUMsb0JBQUcsQ0FBQ0MsQ0FBSixFQUFNO0FBQUMsc0JBQUcrQyxDQUFILEVBQUs7QUFBTyx3QkFBTSxJQUFJSCxLQUFKLENBQVUsZ0JBQWM5QyxDQUFkLEdBQWdCLDRCQUFoQixHQUE2Q0MsQ0FBQyxDQUFDLENBQUQsQ0FBOUMsR0FBa0QsSUFBNUQsQ0FBTjtBQUF3RTs7QUFBQVEsaUJBQUMsR0FBQ1ksQ0FBQyxDQUFDaUMsUUFBRixDQUFXckQsQ0FBQyxDQUFDLENBQUQsQ0FBWixDQUFGO0FBQW1CO0FBQUEsa0JBQUlpRCxDQUFDLEdBQUMsQ0FBQyxDQUFELEtBQUt6QyxDQUFMLElBQVEsQ0FBQyxDQUFELEtBQUtBLENBQWIsSUFBZ0IsT0FBS0EsQ0FBM0I7O0FBQTZCLGtCQUFHLENBQUN5QyxDQUFELElBQUksQ0FBQ0QsQ0FBUixFQUFVO0FBQUMsb0JBQUlFLENBQUMsR0FBQ0ksa0JBQWtCLENBQUM5QyxDQUFELENBQWxCLENBQXNCK0MsT0FBdEIsQ0FBOEIsTUFBOUIsRUFBcUMsR0FBckMsQ0FBTjtBQUFnRCwyQkFBU0wsQ0FBVCxJQUFZLFNBQU8xQyxDQUFuQixLQUF1QjBDLENBQUMsR0FBQyxFQUF6QixHQUE2QkgsQ0FBQyxHQUFDL0MsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLa0QsQ0FBTCxHQUFPSCxDQUF0QztBQUF3Qzs7QUFBQUMsZUFBQyxHQUFDLENBQUMsQ0FBSDtBQUFLLGFBQTlWLE1BQW1XL0MsQ0FBQyxJQUFFRCxDQUFDLENBQUMsQ0FBRCxDQUFELElBQU91QyxDQUFWLElBQWEsT0FBT0EsQ0FBQyxDQUFDdkMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFyQjtBQUE0QjtBQUFDLFNBQWxrQixHQUFva0IsT0FBSytDLENBQUwsS0FBU0EsQ0FBQyxHQUFDLEdBQVgsQ0FBcGtCLEVBQW9sQjNCLENBQUMsQ0FBQ29DLFVBQUYsQ0FBYWQsT0FBYixDQUFxQixVQUFTM0MsQ0FBVCxFQUFXO0FBQUMsY0FBSUMsQ0FBQyxHQUFDLEtBQUssQ0FBWDtBQUFhLGlCQUFNLFdBQVNELENBQUMsQ0FBQyxDQUFELENBQVYsR0FBYyxNQUFLa0QsQ0FBQyxHQUFDbEQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLa0QsQ0FBWixDQUFkLEdBQTZCLE1BQUssZUFBYWxELENBQUMsQ0FBQyxDQUFELENBQWQsS0FBb0JBLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBT3VDLENBQVAsSUFBVXRDLENBQUMsR0FBQ3NDLENBQUMsQ0FBQ3ZDLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBSCxFQUFVLE9BQU93QyxDQUFDLENBQUN4QyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQTVCLElBQW9DcUIsQ0FBQyxDQUFDaUMsUUFBRixJQUFZdEQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFPcUIsQ0FBQyxDQUFDaUMsUUFBckIsS0FBZ0NyRCxDQUFDLEdBQUNvQixDQUFDLENBQUNpQyxRQUFGLENBQVd0RCxDQUFDLENBQUMsQ0FBRCxDQUFaLENBQWxDLENBQXBDLEVBQXdGa0QsQ0FBQyxHQUFDbEQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQyxDQUFMLEdBQU9pRCxDQUFySCxDQUFMLENBQW5DO0FBQWlLLFNBQS9NLENBQXBsQixFQUFxeUJGLENBQUMsR0FBQyxLQUFLMUIsUUFBTCxDQUFjQyxRQUFkLEdBQXVCeUIsQ0FBOXpCLEVBQWcwQjNCLENBQUMsQ0FBQ3FDLFlBQUYsSUFBZ0IsYUFBWXJDLENBQUMsQ0FBQ3FDLFlBQTlCLElBQTRDLEtBQUtDLFNBQUwsTUFBa0J0QyxDQUFDLENBQUNxQyxZQUFGLENBQWVFLE9BQTdFLEdBQXFGWixDQUFDLEdBQUMzQixDQUFDLENBQUNxQyxZQUFGLENBQWVFLE9BQWYsR0FBdUIsS0FBdkIsSUFBOEJWLENBQUMsSUFBRSxLQUFLVyxPQUFMLEVBQWpDLEtBQWtELE9BQUtWLENBQUwsR0FBTyxFQUFQLEdBQVUsTUFBSUEsQ0FBaEUsSUFBbUVILENBQTFKLEdBQTRKLGVBQWEsT0FBTzNCLENBQUMsQ0FBQ3lDLE9BQXRCLElBQStCLGVBQWEsT0FBT3pDLENBQUMsQ0FBQ3lDLE9BQUYsQ0FBVSxDQUFWLENBQW5ELElBQWlFLEtBQUtILFNBQUwsT0FBbUJ0QyxDQUFDLENBQUN5QyxPQUFGLENBQVUsQ0FBVixDQUFwRixHQUFpR2QsQ0FBQyxHQUFDM0IsQ0FBQyxDQUFDeUMsT0FBRixDQUFVLENBQVYsSUFBYSxLQUFiLElBQW9CWixDQUFDLElBQUUsS0FBS1csT0FBTCxFQUF2QixLQUF3QyxPQUFLVixDQUFMLEdBQU8sRUFBUCxHQUFVLE1BQUlBLENBQXRELElBQXlESCxDQUE1SixHQUE4SkUsQ0FBQyxJQUFFLEtBQUtXLE9BQUwsT0FBaUJYLENBQUMsSUFBRSxPQUFLQyxDQUFMLEdBQU8sRUFBUCxHQUFVLE1BQUlBLENBQWhCLENBQXJCLEdBQXdDSCxDQUFDLEdBQUMsS0FBS1csU0FBTCxLQUFpQixLQUFqQixHQUF1QlQsQ0FBdkIsSUFBMEIsT0FBS0MsQ0FBTCxHQUFPLEVBQVAsR0FBVSxNQUFJQSxDQUF4QyxJQUEyQ0gsQ0FBckYsR0FBdUZ2QyxDQUFDLEtBQUcsQ0FBQyxDQUFMLEtBQVN1QyxDQUFDLEdBQUMsS0FBS1csU0FBTCxLQUFpQixLQUFqQixHQUF1QixLQUFLRSxPQUFMLEVBQXZCLElBQXVDLE9BQUtWLENBQUwsR0FBTyxFQUFQLEdBQVUsTUFBSUEsQ0FBckQsSUFBd0RILENBQW5FLENBQWp0QyxFQUF1eEMzQyxNQUFNLENBQUMwRCxJQUFQLENBQVl2QixDQUFaLEVBQWVoQyxNQUFmLEdBQXNCLENBQWh6QyxFQUFrekM7QUFBQyxjQUFJd0QsQ0FBQyxHQUFDLEtBQUssQ0FBWDtBQUFBLGNBQWFDLENBQUMsR0FBQyxFQUFmO0FBQUEsY0FBa0JDLENBQUMsR0FBQyxTQUFGQSxDQUFFLENBQVNsRSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDQSxhQUFDLEdBQUMsY0FBWSxPQUFPQSxDQUFuQixHQUFxQkEsQ0FBQyxFQUF0QixHQUF5QkEsQ0FBM0IsRUFBNkJBLENBQUMsR0FBQyxTQUFPQSxDQUFQLEdBQVMsRUFBVCxHQUFZQSxDQUEzQyxFQUE2Q2dFLENBQUMsQ0FBQ0UsSUFBRixDQUFPWixrQkFBa0IsQ0FBQ3ZELENBQUQsQ0FBbEIsR0FBc0IsR0FBdEIsR0FBMEJ1RCxrQkFBa0IsQ0FBQ3RELENBQUQsQ0FBbkQsQ0FBN0M7QUFBcUcsV0FBdkk7O0FBQXdJLGVBQUkrRCxDQUFKLElBQVN4QixDQUFUO0FBQVcsaUJBQUtLLGdCQUFMLENBQXNCbUIsQ0FBdEIsRUFBd0J4QixDQUFDLENBQUN3QixDQUFELENBQXpCLEVBQTZCRSxDQUE3QjtBQUFYOztBQUEyQ2xCLFdBQUMsR0FBQ0EsQ0FBQyxHQUFDLEdBQUYsR0FBTWlCLENBQUMsQ0FBQ0csSUFBRixDQUFPLEdBQVAsRUFBWVosT0FBWixDQUFvQixNQUFwQixFQUEyQixHQUEzQixDQUFSO0FBQXdDOztBQUFBLGVBQU9SLENBQVA7QUFBUztBQUEzdkQsS0FBNXBELENBQUgsRUFBNjVHLENBQUM7QUFBQzVCLFNBQUcsRUFBQyxhQUFMO0FBQW1CVSxXQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFPUyxDQUFQO0FBQVM7QUFBN0MsS0FBRCxFQUFnRDtBQUFDbkIsU0FBRyxFQUFDLFNBQUw7QUFBZVUsV0FBSyxFQUFDLGVBQVM5QixDQUFULEVBQVc7QUFBQyxZQUFJQyxDQUFDLEdBQUNvQixDQUFDLENBQUNnRCxXQUFGLEVBQU47QUFBc0JwRSxTQUFDLENBQUNwQixjQUFGLENBQWlCbUIsQ0FBakI7QUFBb0I7QUFBM0UsS0FBaEQsQ0FBNzVHLENBQUQsRUFBNmhIcUIsQ0FBcGlIO0FBQXNpSCxHQUE5cUgsRUFBM21COztBQUE0eElBLEdBQUMsQ0FBQ2lELEtBQUYsRUFBUWpELENBQUMsQ0FBQ2tELE9BQVY7QUFBa0IsTUFBSWhDLENBQUMsR0FBQyxJQUFJbEIsQ0FBSixFQUFOO0FBQVksU0FBTTtBQUFDbUQsVUFBTSxFQUFDbkQsQ0FBUjtBQUFVekMsV0FBTyxFQUFDMkQ7QUFBbEIsR0FBTjtBQUEyQixDQUFucEosQ0FBRCxDIiwiZmlsZSI6Imxpc3RTcGVjdGFjbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi8uLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyc7XG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XG5kb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZCgnc3BlY3RhY2xlLWxpc3QnKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBmZXRjaChSb3V0aW5nLmdlbmVyYXRlKCdzcGVjdGFjbGVfZGV0YWlsJywge2lkIDogZXZlbnQudGFyZ2V0LmlkfSkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BlY3RhY2xlLWRldGFpbFwiKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50MS5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VsZW1lbnQnKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50RGl2ID0gZWxlbWVudDIucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgICAgIHBhcmVudERpdi5yZXBsYWNlQ2hpbGQoZWxlbWVudDEsIGVsZW1lbnQyKVxuICAgICAgICAgICAgfSlcbiAgICB9KTsiLCIhZnVuY3Rpb24oZSx0KXt2YXIgbj10KCk7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxuLlJvdXRpbmcpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPW4uUm91dGluZzooZS5Sb3V0aW5nPW4uUm91dGluZyxlLmZvcz17Um91dGVyOm4uUm91dGVyfSl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgdD1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJihlW29dPW5bb10pfXJldHVybiBlfSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSh0LG4pe2UodGhpcyxpKSx0aGlzLmNvbnRleHRfPXR8fHtiYXNlX3VybDpcIlwiLHByZWZpeDpcIlwiLGhvc3Q6XCJcIixwb3J0OlwiXCIsc2NoZW1lOlwiXCIsbG9jYWxlOlwiXCJ9LHRoaXMuc2V0Um91dGVzKG58fHt9KX1yZXR1cm4gbyhpLFt7a2V5Olwic2V0Um91dGluZ0RhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnNldEJhc2VVcmwoZS5iYXNlX3VybCksdGhpcy5zZXRSb3V0ZXMoZS5yb3V0ZXMpLFwicHJlZml4XCJpbiBlJiZ0aGlzLnNldFByZWZpeChlLnByZWZpeCksXCJwb3J0XCJpbiBlJiZ0aGlzLnNldFBvcnQoZS5wb3J0KSxcImxvY2FsZVwiaW4gZSYmdGhpcy5zZXRMb2NhbGUoZS5sb2NhbGUpLHRoaXMuc2V0SG9zdChlLmhvc3QpLHRoaXMuc2V0U2NoZW1lKGUuc2NoZW1lKX19LHtrZXk6XCJzZXRSb3V0ZXNcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnJvdXRlc189T2JqZWN0LmZyZWV6ZShlKX19LHtrZXk6XCJnZXRSb3V0ZXNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJvdXRlc199fSx7a2V5Olwic2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uYmFzZV91cmw9ZX19LHtrZXk6XCJnZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybH19LHtrZXk6XCJzZXRQcmVmaXhcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnByZWZpeD1lfX0se2tleTpcInNldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uc2NoZW1lPWV9fSx7a2V5OlwiZ2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWV9fSx7a2V5Olwic2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uaG9zdD1lfX0se2tleTpcImdldEhvc3RcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmhvc3R9fSx7a2V5Olwic2V0UG9ydFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucG9ydD1lfX0se2tleTpcImdldFBvcnRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnBvcnR9fSx7a2V5Olwic2V0TG9jYWxlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5sb2NhbGU9ZX19LHtrZXk6XCJnZXRMb2NhbGVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmxvY2FsZX19LHtrZXk6XCJidWlsZFF1ZXJ5UGFyYW1zXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG8pe3ZhciBpPXRoaXMscj12b2lkIDAscz1uZXcgUmVnRXhwKC9cXFtcXF0kLyk7aWYodCBpbnN0YW5jZW9mIEFycmF5KXQuZm9yRWFjaChmdW5jdGlvbih0LHIpe3MudGVzdChlKT9vKGUsdCk6aS5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKT9yOlwiXCIpK1wiXVwiLHQsbyl9KTtlbHNlIGlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKSlmb3IociBpbiB0KXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiK3IrXCJdXCIsdFtyXSxvKTtlbHNlIG8oZSx0KX19LHtrZXk6XCJnZXRSb3V0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY29udGV4dF8ucHJlZml4K2Usbj1lK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLG89dGhpcy5jb250ZXh0Xy5wcmVmaXgrZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxpPVt0LG4sbyxlXTtmb3IodmFyIHIgaW4gaSlpZihpW3JdaW4gdGhpcy5yb3V0ZXNfKXJldHVybiB0aGlzLnJvdXRlc19baVtyXV07dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIGRvZXMgbm90IGV4aXN0LicpfX0se2tleTpcImdlbmVyYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSxuKXt2YXIgbz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdLGk9dGhpcy5nZXRSb3V0ZShlKSxyPW58fHt9LHM9dCh7fSxyKSx1PVwiXCIsYz0hMCxhPVwiXCIsZj1cInVuZGVmaW5lZFwiPT10eXBlb2YgdGhpcy5nZXRQb3J0KCl8fG51bGw9PT10aGlzLmdldFBvcnQoKT9cIlwiOnRoaXMuZ2V0UG9ydCgpO2lmKGkudG9rZW5zLmZvckVhY2goZnVuY3Rpb24odCl7aWYoXCJ0ZXh0XCI9PT10WzBdKXJldHVybiB1PXRbMV0rdSx2b2lkKGM9ITEpO3tpZihcInZhcmlhYmxlXCIhPT10WzBdKXRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInK3RbMF0rJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7dmFyIG49aS5kZWZhdWx0cyYmdFszXWluIGkuZGVmYXVsdHM7aWYoITE9PT1jfHwhbnx8dFszXWluIHImJnJbdFszXV0hPWkuZGVmYXVsdHNbdFszXV0pe3ZhciBvPXZvaWQgMDtpZih0WzNdaW4gcilvPXJbdFszXV0sZGVsZXRlIHNbdFszXV07ZWxzZXtpZighbil7aWYoYylyZXR1cm47dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInK3RbM10rJ1wiLicpfW89aS5kZWZhdWx0c1t0WzNdXX12YXIgYT0hMD09PW98fCExPT09b3x8XCJcIj09PW87aWYoIWF8fCFjKXt2YXIgZj1lbmNvZGVVUklDb21wb25lbnQobykucmVwbGFjZSgvJTJGL2csXCIvXCIpO1wibnVsbFwiPT09ZiYmbnVsbD09PW8mJihmPVwiXCIpLHU9dFsxXStmK3V9Yz0hMX1lbHNlIG4mJnRbM11pbiBzJiZkZWxldGUgc1t0WzNdXX19KSxcIlwiPT09dSYmKHU9XCIvXCIpLGkuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PXZvaWQgMDtyZXR1cm5cInRleHRcIj09PWVbMF0/dm9pZChhPWVbMV0rYSk6dm9pZChcInZhcmlhYmxlXCI9PT1lWzBdJiYoZVszXWluIHI/KHQ9cltlWzNdXSxkZWxldGUgc1tlWzNdXSk6aS5kZWZhdWx0cyYmZVszXWluIGkuZGVmYXVsdHMmJih0PWkuZGVmYXVsdHNbZVszXV0pLGE9ZVsxXSt0K2EpKX0pLHU9dGhpcy5jb250ZXh0Xy5iYXNlX3VybCt1LGkucmVxdWlyZW1lbnRzJiZcIl9zY2hlbWVcImluIGkucmVxdWlyZW1lbnRzJiZ0aGlzLmdldFNjaGVtZSgpIT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lP3U9aS5yZXF1aXJlbWVudHMuX3NjaGVtZStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrKFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrdTpcInVuZGVmaW5lZFwiIT10eXBlb2YgaS5zY2hlbWVzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaS5zY2hlbWVzWzBdJiZ0aGlzLmdldFNjaGVtZSgpIT09aS5zY2hlbWVzWzBdP3U9aS5zY2hlbWVzWzBdK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKSt1OmEmJnRoaXMuZ2V0SG9zdCgpIT09YSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKT91PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIithKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK3U6bz09PSEwJiYodT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrdGhpcy5nZXRIb3N0KCkrKFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrdSksT2JqZWN0LmtleXMocykubGVuZ3RoPjApe3ZhciBsPXZvaWQgMCxoPVtdLHk9ZnVuY3Rpb24oZSx0KXt0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCgpOnQsdD1udWxsPT09dD9cIlwiOnQsaC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQodCkpfTtmb3IobCBpbiBzKXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhsLHNbbF0seSk7dT11K1wiP1wiK2guam9pbihcIiZcIikucmVwbGFjZSgvJTIwL2csXCIrXCIpfXJldHVybiB1fX1dLFt7a2V5OlwiZ2V0SW5zdGFuY2VcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiByfX0se2tleTpcInNldERhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1pLmdldEluc3RhbmNlKCk7dC5zZXRSb3V0aW5nRGF0YShlKX19XSksaX0oKTtpLlJvdXRlLGkuQ29udGV4dDt2YXIgcj1uZXcgaTtyZXR1cm57Um91dGVyOmksUm91dGluZzpyfX0pOyJdLCJzb3VyY2VSb290IjoiIn0=