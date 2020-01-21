(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listAnimal"],{

/***/ "./assets/js/listAnimal.js":
/*!*********************************!*\
  !*** ./assets/js/listAnimal.js ***!
  \*********************************/
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
document.getElementById('animal-list').addEventListener('click', function (event) {
  fetch(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.generate('animals_detail', {
    id: event.target.id
  })).then(function (response) {
    return response.json();
  }).then(function (result) {
    var element1 = document.getElementById("animals-detail");
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

},[["./assets/js/listAnimal.js","runtime","vendors~listAnimal~listSpectacle"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGlzdEFuaW1hbC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLm1pbi5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImZldGNoIiwiZ2VuZXJhdGUiLCJpZCIsInRhcmdldCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJlbGVtZW50MSIsImlubmVySFRNTCIsImVsZW1lbnQyIiwicGFyZW50RGl2IiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsImUiLCJ0IiwibiIsImRlZmluZSIsIlR5cGVFcnJvciIsIk9iamVjdCIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm8iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJpIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwidmFsdWUiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiZnJlZXplIiwiciIsInMiLCJSZWdFeHAiLCJBcnJheSIsImZvckVhY2giLCJ0ZXN0IiwiYnVpbGRRdWVyeVBhcmFtcyIsIkVycm9yIiwiZ2V0Um91dGUiLCJ1IiwiYyIsImEiLCJmIiwiZ2V0UG9ydCIsInRva2VucyIsImRlZmF1bHRzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJnZXRTY2hlbWUiLCJfc2NoZW1lIiwiZ2V0SG9zdCIsInNjaGVtZXMiLCJrZXlzIiwibCIsImgiLCJ5IiwicHVzaCIsImpvaW4iLCJnZXRJbnN0YW5jZSIsIlJvdXRlIiwiQ29udGV4dCIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMEVBQUQsQ0FBdEI7O0FBQ0E7QUFDQUMsa0hBQU8sQ0FBQ0MsY0FBUixDQUF1QkgsTUFBdkI7QUFDQUksUUFBUSxDQUNIQyxjQURMLENBQ29CLGFBRHBCLEVBRUtDLGdCQUZMLENBRXNCLE9BRnRCLEVBRStCLFVBQUNDLEtBQUQsRUFBVztBQUNsQ0MsT0FBSyxDQUFDTixrSEFBTyxDQUFDTyxRQUFSLENBQWlCLGdCQUFqQixFQUFtQztBQUFDQyxNQUFFLEVBQUdILEtBQUssQ0FBQ0ksTUFBTixDQUFhRDtBQUFuQixHQUFuQyxDQUFELENBQUwsQ0FDS0UsSUFETCxDQUNVLFVBQVVDLFFBQVYsRUFBb0I7QUFDdEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDSCxHQUhMLEVBSUtGLElBSkwsQ0FJVSxVQUFVRyxNQUFWLEVBQWtCO0FBQ3BCLFFBQUlDLFFBQVEsR0FBR1osUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUFmO0FBQ0FXLFlBQVEsQ0FBQ0MsU0FBVCxHQUFxQkYsTUFBckI7QUFDQSxRQUFJRyxRQUFRLEdBQUdkLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFmO0FBQ0EsUUFBSWMsU0FBUyxHQUFHRCxRQUFRLENBQUNFLFVBQXpCO0FBRUFELGFBQVMsQ0FBQ0UsWUFBVixDQUF1QkwsUUFBdkIsRUFBaUNFLFFBQWpDO0FBQ0gsR0FYTDtBQVlILENBZkwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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VTtBQUFDLGVBQU9TLENBQVA7QUFBUztBQUE3QyxLQUFELEVBQWdEO0FBQUNuQixTQUFHLEVBQUMsU0FBTDtBQUFlVSxXQUFLLEVBQUMsZUFBUzlCLENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQ29CLENBQUMsQ0FBQ2dELFdBQUYsRUFBTjtBQUFzQnBFLFNBQUMsQ0FBQ3BCLGNBQUYsQ0FBaUJtQixDQUFqQjtBQUFvQjtBQUEzRSxLQUFoRCxDQUE3NUcsQ0FBRCxFQUE2aEhxQixDQUFwaUg7QUFBc2lILEdBQTlxSCxFQUEzbUI7O0FBQTR4SUEsR0FBQyxDQUFDaUQsS0FBRixFQUFRakQsQ0FBQyxDQUFDa0QsT0FBVjtBQUFrQixNQUFJaEMsQ0FBQyxHQUFDLElBQUlsQixDQUFKLEVBQU47QUFBWSxTQUFNO0FBQUNtRCxVQUFNLEVBQUNuRCxDQUFSO0FBQVV6QyxXQUFPLEVBQUMyRDtBQUFsQixHQUFOO0FBQTJCLENBQW5wSixDQUFELEMiLCJmaWxlIjoibGlzdEFuaW1hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTtcbmRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKCdhbmltYWwtbGlzdCcpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGZldGNoKFJvdXRpbmcuZ2VuZXJhdGUoJ2FuaW1hbHNfZGV0YWlsJywge2lkIDogZXZlbnQudGFyZ2V0LmlkfSkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbWFscy1kZXRhaWxcIik7XG4gICAgICAgICAgICAgICAgZWxlbWVudDEuaW5uZXJIVE1MID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudERpdiA9IGVsZW1lbnQyLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICBwYXJlbnREaXYucmVwbGFjZUNoaWxkKGVsZW1lbnQxLCBlbGVtZW50MilcbiAgICAgICAgICAgIH0pXG4gICAgfSk7IiwiIWZ1bmN0aW9uKGUsdCl7dmFyIG49dCgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sbi5Sb3V0aW5nKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uLlJvdXRpbmc6KGUuUm91dGluZz1uLlJvdXRpbmcsZS5mb3M9e1JvdXRlcjpuLlJvdXRlcn0pfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCksaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkodCxuKXtlKHRoaXMsaSksdGhpcy5jb250ZXh0Xz10fHx7YmFzZV91cmw6XCJcIixwcmVmaXg6XCJcIixob3N0OlwiXCIscG9ydDpcIlwiLHNjaGVtZTpcIlwiLGxvY2FsZTpcIlwifSx0aGlzLnNldFJvdXRlcyhufHx7fSl9cmV0dXJuIG8oaSxbe2tleTpcInNldFJvdXRpbmdEYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5zZXRCYXNlVXJsKGUuYmFzZV91cmwpLHRoaXMuc2V0Um91dGVzKGUucm91dGVzKSxcInByZWZpeFwiaW4gZSYmdGhpcy5zZXRQcmVmaXgoZS5wcmVmaXgpLFwicG9ydFwiaW4gZSYmdGhpcy5zZXRQb3J0KGUucG9ydCksXCJsb2NhbGVcImluIGUmJnRoaXMuc2V0TG9jYWxlKGUubG9jYWxlKSx0aGlzLnNldEhvc3QoZS5ob3N0KSx0aGlzLnNldFNjaGVtZShlLnNjaGVtZSl9fSx7a2V5Olwic2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5yb3V0ZXNfPU9iamVjdC5mcmVlemUoZSl9fSx7a2V5OlwiZ2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yb3V0ZXNffX0se2tleTpcInNldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmJhc2VfdXJsPWV9fSx7a2V5OlwiZ2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmx9fSx7a2V5Olwic2V0UHJlZml4XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wcmVmaXg9ZX19LHtrZXk6XCJzZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnNjaGVtZT1lfX0se2tleTpcImdldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lfX0se2tleTpcInNldEhvc3RcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmhvc3Q9ZX19LHtrZXk6XCJnZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0fX0se2tleTpcInNldFBvcnRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnBvcnQ9ZX19LHtrZXk6XCJnZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5wb3J0fX0se2tleTpcInNldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ubG9jYWxlPWV9fSx7a2V5OlwiZ2V0TG9jYWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5sb2NhbGV9fSx7a2V5OlwiYnVpbGRRdWVyeVBhcmFtc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxvKXt2YXIgaT10aGlzLHI9dm9pZCAwLHM9bmV3IFJlZ0V4cCgvXFxbXFxdJC8pO2lmKHQgaW5zdGFuY2VvZiBBcnJheSl0LmZvckVhY2goZnVuY3Rpb24odCxyKXtzLnRlc3QoZSk/byhlLHQpOmkuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiKyhcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSk/cjpcIlwiKStcIl1cIix0LG8pfSk7ZWxzZSBpZihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSkpZm9yKHIgaW4gdCl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIityK1wiXVwiLHRbcl0sbyk7ZWxzZSBvKGUsdCl9fSx7a2V5OlwiZ2V0Um91dGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmNvbnRleHRfLnByZWZpeCtlLG49ZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxvPXRoaXMuY29udGV4dF8ucHJlZml4K2UrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsaT1bdCxuLG8sZV07Zm9yKHZhciByIGluIGkpaWYoaVtyXWluIHRoaXMucm91dGVzXylyZXR1cm4gdGhpcy5yb3V0ZXNfW2lbcl1dO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiBkb2VzIG5vdCBleGlzdC4nKX19LHtrZXk6XCJnZW5lcmF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsbil7dmFyIG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxpPXRoaXMuZ2V0Um91dGUoZSkscj1ufHx7fSxzPXQoe30sciksdT1cIlwiLGM9ITAsYT1cIlwiLGY9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMuZ2V0UG9ydCgpfHxudWxsPT09dGhpcy5nZXRQb3J0KCk/XCJcIjp0aGlzLmdldFBvcnQoKTtpZihpLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKFwidGV4dFwiPT09dFswXSlyZXR1cm4gdT10WzFdK3Usdm9pZChjPSExKTt7aWYoXCJ2YXJpYWJsZVwiIT09dFswXSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJyt0WzBdKydcIiBpcyBub3Qgc3VwcG9ydGVkLicpO3ZhciBuPWkuZGVmYXVsdHMmJnRbM11pbiBpLmRlZmF1bHRzO2lmKCExPT09Y3x8IW58fHRbM11pbiByJiZyW3RbM11dIT1pLmRlZmF1bHRzW3RbM11dKXt2YXIgbz12b2lkIDA7aWYodFszXWluIHIpbz1yW3RbM11dLGRlbGV0ZSBzW3RbM11dO2Vsc2V7aWYoIW4pe2lmKGMpcmV0dXJuO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyt0WzNdKydcIi4nKX1vPWkuZGVmYXVsdHNbdFszXV19dmFyIGE9ITA9PT1vfHwhMT09PW98fFwiXCI9PT1vO2lmKCFhfHwhYyl7dmFyIGY9ZW5jb2RlVVJJQ29tcG9uZW50KG8pLnJlcGxhY2UoLyUyRi9nLFwiL1wiKTtcIm51bGxcIj09PWYmJm51bGw9PT1vJiYoZj1cIlwiKSx1PXRbMV0rZit1fWM9ITF9ZWxzZSBuJiZ0WzNdaW4gcyYmZGVsZXRlIHNbdFszXV19fSksXCJcIj09PXUmJih1PVwiL1wiKSxpLmhvc3R0b2tlbnMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD12b2lkIDA7cmV0dXJuXCJ0ZXh0XCI9PT1lWzBdP3ZvaWQoYT1lWzFdK2EpOnZvaWQoXCJ2YXJpYWJsZVwiPT09ZVswXSYmKGVbM11pbiByPyh0PXJbZVszXV0sZGVsZXRlIHNbZVszXV0pOmkuZGVmYXVsdHMmJmVbM11pbiBpLmRlZmF1bHRzJiYodD1pLmRlZmF1bHRzW2VbM11dKSxhPWVbMV0rdCthKSl9KSx1PXRoaXMuY29udGV4dF8uYmFzZV91cmwrdSxpLnJlcXVpcmVtZW50cyYmXCJfc2NoZW1lXCJpbiBpLnJlcXVpcmVtZW50cyYmdGhpcy5nZXRTY2hlbWUoKSE9aS5yZXF1aXJlbWVudHMuX3NjaGVtZT91PWkucmVxdWlyZW1lbnRzLl9zY2hlbWUrXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK3U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lcyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lc1swXSYmdGhpcy5nZXRTY2hlbWUoKSE9PWkuc2NoZW1lc1swXT91PWkuc2NoZW1lc1swXStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrKFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrdTphJiZ0aGlzLmdldEhvc3QoKSE9PWErKFwiXCI9PT1mP1wiXCI6XCI6XCIrZik/dT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrYSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKSt1Om89PT0hMCYmKHU9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK3RoaXMuZ2V0SG9zdCgpKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK3UpLE9iamVjdC5rZXlzKHMpLmxlbmd0aD4wKXt2YXIgbD12b2lkIDAsaD1bXSx5PWZ1bmN0aW9uKGUsdCl7dD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0LHQ9bnVsbD09PXQ/XCJcIjp0LGgucHVzaChlbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHQpKX07Zm9yKGwgaW4gcyl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMobCxzW2xdLHkpO3U9dStcIj9cIitoLmpvaW4oXCImXCIpLnJlcGxhY2UoLyUyMC9nLFwiK1wiKX1yZXR1cm4gdX19XSxbe2tleTpcImdldEluc3RhbmNlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gcn19LHtrZXk6XCJzZXREYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5nZXRJbnN0YW5jZSgpO3Quc2V0Um91dGluZ0RhdGEoZSl9fV0pLGl9KCk7aS5Sb3V0ZSxpLkNvbnRleHQ7dmFyIHI9bmV3IGk7cmV0dXJue1JvdXRlcjppLFJvdXRpbmc6cn19KTsiXSwic291cmNlUm9vdCI6IiJ9