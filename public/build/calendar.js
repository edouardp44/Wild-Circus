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
/* harmony import */ var _fullcalendar_core_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/core/main.css */ "./node_modules/@fullcalendar/core/main.css");
/* harmony import */ var _fullcalendar_core_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_main_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid/main.css */ "./node_modules/@fullcalendar/daygrid/main.css");
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid/main.css */ "./node_modules/@fullcalendar/timegrid/main.css");
/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__(/*! ../scss/calendar.scss */ "./assets/scss/calendar.scss");








document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar-holder");
  var eventsUrl = calendarEl.dataset.eventsUrl;
  var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Calendar"](calendarEl, {
    defaultView: "dayGridMonth",
    editable: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvY2FsZW5kYXIuc2NzcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FsZW5kYXJFbCIsImdldEVsZW1lbnRCeUlkIiwiZXZlbnRzVXJsIiwiZGF0YXNldCIsImNhbGVuZGFyIiwiQ2FsZW5kYXIiLCJkZWZhdWx0VmlldyIsImVkaXRhYmxlIiwiZXZlbnRTb3VyY2VzIiwidXJsIiwibWV0aG9kIiwiZXh0cmFQYXJhbXMiLCJmaWx0ZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImZhaWx1cmUiLCJhbGVydCIsImhlYWRlciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsInBsdWdpbnMiLCJpbnRlcmFjdGlvblBsdWdpbiIsImRheUdyaWRQbHVnaW4iLCJ0aW1lR3JpZFBsdWdpbiIsInRpbWVab25lIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLG1CQUFPLENBQUMsMERBQUQsQ0FBUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUlDLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGlCQUF4QixDQUFqQjtBQUNBLE1BQUlDLFNBQVMsR0FBR0YsVUFBVSxDQUFDRyxPQUFYLENBQW1CRCxTQUFuQztBQUVBLE1BQUlFLFFBQVEsR0FBRyxJQUFJQywyREFBSixDQUFhTCxVQUFiLEVBQXlCO0FBQ3BDTSxlQUFXLEVBQUUsY0FEdUI7QUFFcENDLFlBQVEsRUFBRSxJQUYwQjtBQUdwQ0MsZ0JBQVksRUFBRSxDQUNWO0FBQ0lDLFNBQUcsRUFBRVAsU0FEVDtBQUVJUSxZQUFNLEVBQUUsTUFGWjtBQUdJQyxpQkFBVyxFQUFFO0FBQ1RDLGVBQU8sRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWUsRUFBZjtBQURBLE9BSGpCO0FBTUlDLGFBQU8sRUFBRSxtQkFBTTtBQUNYQyxhQUFLLENBQUMsaURBQUQsQ0FBTDtBQUNIO0FBUkwsS0FEVSxDQUhzQjtBQWVwQ0MsVUFBTSxFQUFFO0FBQ0pDLFVBQUksRUFBRSxpQkFERjtBQUVKQyxZQUFNLEVBQUUsT0FGSjtBQUdKQyxXQUFLLEVBQUU7QUFISCxLQWY0QjtBQW9CcENDLFdBQU8sRUFBRSxDQUFDQyxpRUFBRCxFQUFvQkMsNkRBQXBCLEVBQW1DQyw4REFBbkMsQ0FwQjJCO0FBb0J5QjtBQUM3REMsWUFBUSxFQUFFO0FBckIwQixHQUF6QixDQUFmO0FBdUJBckIsVUFBUSxDQUFDc0IsTUFBVDtBQUNILENBNUJELEU7Ozs7Ozs7Ozs7O0FDWEEsdUMiLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuLi9zY3NzL2NhbGVuZGFyLnNjc3MnKTtcblxuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tIFwiQGZ1bGxjYWxlbmRhci9jb3JlXCI7XG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSBcIkBmdWxsY2FsZW5kYXIvaW50ZXJhY3Rpb25cIjtcbmltcG9ydCBkYXlHcmlkUGx1Z2luIGZyb20gXCJAZnVsbGNhbGVuZGFyL2RheWdyaWRcIjtcbmltcG9ydCB0aW1lR3JpZFBsdWdpbiBmcm9tIFwiQGZ1bGxjYWxlbmRhci90aW1lZ3JpZFwiO1xuXG5pbXBvcnQgXCJAZnVsbGNhbGVuZGFyL2NvcmUvbWFpbi5jc3NcIjtcbmltcG9ydCBcIkBmdWxsY2FsZW5kYXIvZGF5Z3JpZC9tYWluLmNzc1wiO1xuaW1wb3J0IFwiQGZ1bGxjYWxlbmRhci90aW1lZ3JpZC9tYWluLmNzc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgdmFyIGNhbGVuZGFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyLWhvbGRlclwiKTtcbiAgICB2YXIgZXZlbnRzVXJsID0gY2FsZW5kYXJFbC5kYXRhc2V0LmV2ZW50c1VybDtcblxuICAgIHZhciBjYWxlbmRhciA9IG5ldyBDYWxlbmRhcihjYWxlbmRhckVsLCB7XG4gICAgICAgIGRlZmF1bHRWaWV3OiBcImRheUdyaWRNb250aFwiLFxuICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgZXZlbnRTb3VyY2VzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXJsOiBldmVudHNVcmwsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBleHRyYVBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzOiBKU09OLnN0cmluZ2lmeSh7fSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJUaGVyZSB3YXMgYW4gZXJyb3Igd2hpbGUgZmV0Y2hpbmcgRnVsbENhbGVuZGFyIVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBsZWZ0OiBcInByZXYsbmV4dCB0b2RheVwiLFxuICAgICAgICAgICAgY2VudGVyOiBcInRpdGxlXCIsXG4gICAgICAgICAgICByaWdodDogXCIgXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHBsdWdpbnM6IFtpbnRlcmFjdGlvblBsdWdpbiwgZGF5R3JpZFBsdWdpbiwgdGltZUdyaWRQbHVnaW5dLCAvLyBodHRwczovL2Z1bGxjYWxlbmRhci5pby9kb2NzL3BsdWdpbi1pbmRleFxuICAgICAgICB0aW1lWm9uZTogXCJVVENcIixcbiAgICB9KTtcbiAgICBjYWxlbmRhci5yZW5kZXIoKTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=