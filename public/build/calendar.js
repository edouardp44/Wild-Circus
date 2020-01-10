(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar"],{

/***/ "./assets/js/calendar.js":
/*!*******************************!*\
  !*** ./assets/js/calendar.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.esm.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.esm.js");
/* harmony import */ var _fullcalendar_core_locales_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/core/locales/fr */ "./node_modules/@fullcalendar/core/locales/fr.js");
/* harmony import */ var _fullcalendar_core_locales_fr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_locales_fr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_core_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/core/main.css */ "./node_modules/@fullcalendar/core/main.css");
/* harmony import */ var _fullcalendar_core_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_main_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/daygrid/main.css */ "./node_modules/@fullcalendar/daygrid/main.css");
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/timegrid/main.css */ "./node_modules/@fullcalendar/timegrid/main.css");
/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__(/*! ../scss/calendar.scss */ "./assets/scss/calendar.scss");









document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar-holder");
  var eventsUrl = calendarEl.dataset.eventsUrl;
  var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Calendar"](calendarEl, {
    defaultView: "dayGridMonth",
    editable: true,
    locale: _fullcalendar_core_locales_fr__WEBPACK_IMPORTED_MODULE_4___default.a,
    eventSources: [{
      url: eventsUrl,
      method: "POST",
      extraParams: {
        filters: JSON.stringify({})
      },
      failure: function failure() {
        alert("There was an error while fetching FullCalendar!");
      }
    }],
    header: {
      left: "prev,next today",
      center: "title",
      right: " "
    },
    plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"]],
    // https://fullcalendar.io/docs/plugin-index
    timeZone: "UTC"
  });
  calendar.render();
});

/***/ }),

/***/ "./assets/scss/calendar.scss":
/*!***********************************!*\
  !*** ./assets/scss/calendar.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/js/calendar.js","runtime","vendors~calendar"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvY2FsZW5kYXIuc2NzcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FsZW5kYXJFbCIsImdldEVsZW1lbnRCeUlkIiwiZXZlbnRzVXJsIiwiZGF0YXNldCIsImNhbGVuZGFyIiwiQ2FsZW5kYXIiLCJkZWZhdWx0VmlldyIsImVkaXRhYmxlIiwibG9jYWxlIiwiZnJMb2NhbGUiLCJldmVudFNvdXJjZXMiLCJ1cmwiLCJtZXRob2QiLCJleHRyYVBhcmFtcyIsImZpbHRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZmFpbHVyZSIsImFsZXJ0IiwiaGVhZGVyIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwicGx1Z2lucyIsImludGVyYWN0aW9uUGx1Z2luIiwiZGF5R3JpZFBsdWdpbiIsInRpbWVHcmlkUGx1Z2luIiwidGltZVpvbmUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsbUJBQU8sQ0FBQywwREFBRCxDQUFQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFJQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixpQkFBeEIsQ0FBakI7QUFDQSxNQUFJQyxTQUFTLEdBQUdGLFVBQVUsQ0FBQ0csT0FBWCxDQUFtQkQsU0FBbkM7QUFFQSxNQUFJRSxRQUFRLEdBQUcsSUFBSUMsMkRBQUosQ0FBYUwsVUFBYixFQUF5QjtBQUNwQ00sZUFBVyxFQUFFLGNBRHVCO0FBRXBDQyxZQUFRLEVBQUUsSUFGMEI7QUFHcENDLFVBQU0sRUFBRUMsb0VBSDRCO0FBSXBDQyxnQkFBWSxFQUFFLENBQ1Y7QUFDSUMsU0FBRyxFQUFFVCxTQURUO0FBRUlVLFlBQU0sRUFBRSxNQUZaO0FBR0lDLGlCQUFXLEVBQUU7QUFDVEMsZUFBTyxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxFQUFmO0FBREEsT0FIakI7QUFNSUMsYUFBTyxFQUFFLG1CQUFNO0FBQ1hDLGFBQUssQ0FBQyxpREFBRCxDQUFMO0FBQ0g7QUFSTCxLQURVLENBSnNCO0FBZ0JwQ0MsVUFBTSxFQUFFO0FBQ0pDLFVBQUksRUFBRSxpQkFERjtBQUVKQyxZQUFNLEVBQUUsT0FGSjtBQUdKQyxXQUFLLEVBQUU7QUFISCxLQWhCNEI7QUFxQnBDQyxXQUFPLEVBQUUsQ0FBQ0MsaUVBQUQsRUFBb0JDLDZEQUFwQixFQUFtQ0MsOERBQW5DLENBckIyQjtBQXFCeUI7QUFDN0RDLFlBQVEsRUFBRTtBQXRCMEIsR0FBekIsQ0FBZjtBQXdCQXZCLFVBQVEsQ0FBQ3dCLE1BQVQ7QUFDSCxDQTdCRCxFOzs7Ozs7Ozs7OztBQ2JBLHVDIiwiZmlsZSI6ImNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi4vc2Nzcy9jYWxlbmRhci5zY3NzJyk7XG5cbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSBcIkBmdWxsY2FsZW5kYXIvY29yZVwiO1xuaW1wb3J0IGludGVyYWN0aW9uUGx1Z2luIGZyb20gXCJAZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uXCI7XG5pbXBvcnQgZGF5R3JpZFBsdWdpbiBmcm9tIFwiQGZ1bGxjYWxlbmRhci9kYXlncmlkXCI7XG5pbXBvcnQgdGltZUdyaWRQbHVnaW4gZnJvbSBcIkBmdWxsY2FsZW5kYXIvdGltZWdyaWRcIjtcbmltcG9ydCBmckxvY2FsZSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvbG9jYWxlcy9mcic7XG5cbmltcG9ydCBcIkBmdWxsY2FsZW5kYXIvY29yZS9tYWluLmNzc1wiO1xuaW1wb3J0IFwiQGZ1bGxjYWxlbmRhci9kYXlncmlkL21haW4uY3NzXCI7XG5pbXBvcnQgXCJAZnVsbGNhbGVuZGFyL3RpbWVncmlkL21haW4uY3NzXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHZhciBjYWxlbmRhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhci1ob2xkZXJcIik7XG4gICAgdmFyIGV2ZW50c1VybCA9IGNhbGVuZGFyRWwuZGF0YXNldC5ldmVudHNVcmw7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xuICAgICAgICBkZWZhdWx0VmlldzogXCJkYXlHcmlkTW9udGhcIixcbiAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgIGxvY2FsZTogZnJMb2NhbGUsXG4gICAgICAgIGV2ZW50U291cmNlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVybDogZXZlbnRzVXJsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgZXh0cmFQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyczogSlNPTi5zdHJpbmdpZnkoe30pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIGZldGNoaW5nIEZ1bGxDYWxlbmRhciFcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgbGVmdDogXCJwcmV2LG5leHQgdG9kYXlcIixcbiAgICAgICAgICAgIGNlbnRlcjogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgcmlnaHQ6IFwiIFwiLFxuICAgICAgICB9LFxuICAgICAgICBwbHVnaW5zOiBbaW50ZXJhY3Rpb25QbHVnaW4sIGRheUdyaWRQbHVnaW4sIHRpbWVHcmlkUGx1Z2luXSwgLy8gaHR0cHM6Ly9mdWxsY2FsZW5kYXIuaW8vZG9jcy9wbHVnaW4taW5kZXhcbiAgICAgICAgdGltZVpvbmU6IFwiVVRDXCIsXG4gICAgfSk7XG4gICAgY2FsZW5kYXIucmVuZGVyKCk7XG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9