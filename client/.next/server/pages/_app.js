/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./constants/env.js":
/*!**************************!*\
  !*** ./constants/env.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable import/no-anonymous-default-export */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    // Headers\n    HEADERS: {\n        key: typeof process.env.SERVER_API_KEY === \"undefined\" ? \"c1bd3fb942247861aededcf2ad76cf97375f690f\" : process.env.SERVER_API_KEY,\n        \"content-type\": \"application/json\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvZW52LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxREFBcUQsR0FDckQsaUVBQWU7SUFFZCxVQUFVO0lBQ1ZBLFNBQVM7UUFDUkMsS0FBSyxPQUFPQyxRQUFRQyxHQUFHLENBQUNDLGNBQWMsS0FBSyxjQUFjRiwwQ0FBc0MsR0FBR0EsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO1FBQzVILGdCQUFnQjtJQUNqQjtBQUNELENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnN0YW50cy9lbnYuanM/MDM0MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0ICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcblx0Ly8gSGVhZGVyc1xyXG5cdEhFQURFUlM6IHtcclxuXHRcdGtleTogdHlwZW9mIHByb2Nlc3MuZW52LlNFUlZFUl9BUElfS0VZID09PSBcInVuZGVmaW5lZFwiID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX0FQSV9LRVkgOiBwcm9jZXNzLmVudi5TRVJWRVJfQVBJX0tFWSxcclxuXHRcdFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG5cdH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJIRUFERVJTIiwia2V5IiwicHJvY2VzcyIsImVudiIsIlNFUlZFUl9BUElfS0VZIiwiTkVYVF9QVUJMSUNfQ0xJRU5UX0FQSV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/env.js\n");

/***/ }),

/***/ "./helpers/utils.js":
/*!**************************!*\
  !*** ./helpers/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET\": () => (/* binding */ GET),\n/* harmony export */   \"IdrConvert\": () => (/* binding */ IdrConvert),\n/* harmony export */   \"Rupiah\": () => (/* binding */ Rupiah),\n/* harmony export */   \"getGeneralApiProblem\": () => (/* binding */ getGeneralApiProblem),\n/* harmony export */   \"serialize\": () => (/* binding */ serialize)\n/* harmony export */ });\n/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/env */ \"./constants/env.js\");\n\nconst GET = async (url, header = _constants_env__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HEADERS)=>{\n    // const parseBody = JSON.stringify(body);\n    try {\n        const data = await fetch(url, {\n            method: \"GET\",\n            headers: header\n        });\n        return {\n            status: data.status,\n            data: await data.json()\n        };\n    } catch (err) {\n        console.log(err);\n        throw err;\n    }\n};\nfunction getGeneralApiProblem(status) {\n    switch(status){\n        case 503:\n            return {\n                kind: \"service-unavailable\",\n                message: \"503 Service Unavailable\"\n            };\n        case 502:\n            return {\n                kind: \"bad-gateway\",\n                message: \"502 Bad Gateway\"\n            };\n        case 500:\n            return {\n                kind: \"internal-server-error\",\n                message: \"500 Internal Server Error\"\n            };\n        case 400:\n            {\n                return {\n                    kind: \"bad-request\",\n                    message: \"Bad Request\"\n                };\n            }\n        case 401:\n            return {\n                kind: \"unauthorized\",\n                message: \"Your session has expired\"\n            };\n        case 403:\n            return {\n                kind: \"forbidden\",\n                message: \"403 Forbidden\"\n            };\n        case 404:\n            return {\n                kind: \"not-found\",\n                message: \"404 Not Found\"\n            };\n        default:\n            {\n                return {\n                    kind: \"server\",\n                    message: \"Server Error\"\n                };\n            }\n    }\n}\nconst serialize = (obj)=>{\n    var str = [];\n    for(var p in obj)if (obj.hasOwnProperty(p)) {\n        str.push(encodeURIComponent(p) + \"=\" + encodeURIComponent(obj[p]));\n    }\n    return str.join(\"&\");\n};\nconst Rupiah = (props)=>{\n    const reverse = props && props.toString().split(\"\").reverse().join(\"\");\n    const ribuan = reverse && reverse.match(/\\d{1,3}/g);\n    const final = ribuan && ribuan.join(\".\").split(\"\").reverse().join(\"\");\n    return `Rp ${final}`;\n};\nconst IdrConvert = (props)=>{\n    if (props && props?.toString() && props?.toString().includes(\".\")) {\n        const rp = Number(props?.toString()?.replace(/[^0-9.-]+/g, \"\"));\n        return Intl.NumberFormat(\"id-ID\", {\n            style: \"currency\",\n            currency: \"IDR\"\n        }).format(rp);\n    }\n    return Rupiah(props);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL3V0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUUxQixNQUFNQyxNQUFNLE9BQ2ZDLEtBQ0FDLFNBQVNILDhEQUFXLEdBQ2pCO0lBQ0gsMENBQTBDO0lBQzFDLElBQUk7UUFDRixNQUFNSyxPQUFPLE1BQU1DLE1BQU1KLEtBQUs7WUFDNUJLLFFBQVE7WUFDUkMsU0FBU0w7UUFFWDtRQUVBLE9BQU87WUFDTE0sUUFBUUosS0FBS0ksTUFBTTtZQUNuQkosTUFBTSxNQUFNQSxLQUFLSyxJQUFJO1FBQ3ZCO0lBQ0YsRUFBRSxPQUFPQyxLQUFLO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixNQUFNQSxJQUFJO0lBQ1o7QUFDRixFQUFFO0FBRUssU0FBU0cscUJBQXFCTCxNQUFNLEVBQUM7SUFDMUMsT0FBUUE7UUFDTixLQUFLO1lBQ0gsT0FBTztnQkFBRU0sTUFBTTtnQkFBdUJDLFNBQVM7WUFBMEI7UUFDM0UsS0FBSztZQUNILE9BQU87Z0JBQUVELE1BQU07Z0JBQWVDLFNBQVM7WUFBa0I7UUFDM0QsS0FBSztZQUNILE9BQU87Z0JBQUVELE1BQU07Z0JBQXlCQyxTQUFTO1lBQTRCO1FBQy9FLEtBQUs7WUFBSztnQkFDUixPQUFPO29CQUFFRCxNQUFNO29CQUFlQyxTQUFTO2dCQUFjO1lBQ3ZEO1FBQ0EsS0FBSztZQUNILE9BQU87Z0JBQUVELE1BQU07Z0JBQWdCQyxTQUFTO1lBQTJCO1FBQ3JFLEtBQUs7WUFDSCxPQUFPO2dCQUFFRCxNQUFNO2dCQUFhQyxTQUFTO1lBQWdCO1FBQ3ZELEtBQUs7WUFDSCxPQUFPO2dCQUFFRCxNQUFNO2dCQUFhQyxTQUFTO1lBQWdCO1FBQ3ZEO1lBQVM7Z0JBQ1AsT0FBTztvQkFDTEQsTUFBTTtvQkFDTkMsU0FBUztnQkFDWDtZQUNGO0lBQ0Y7QUFDRixDQUFDO0FBRU0sTUFBTUMsWUFBWSxDQUFDQyxNQUFRO0lBQ2hDLElBQUlDLE1BQU0sRUFBRTtJQUNaLElBQUssSUFBSUMsS0FBS0YsSUFDWixJQUFJQSxJQUFJRyxjQUFjLENBQUNELElBQUk7UUFDekJELElBQUlHLElBQUksQ0FBQ0MsbUJBQW1CSCxLQUFLLE1BQU1HLG1CQUFtQkwsR0FBRyxDQUFDRSxFQUFFO0lBQ2xFLENBQUM7SUFDSCxPQUFPRCxJQUFJSyxJQUFJLENBQUM7QUFDcEIsRUFBQztBQUdNLE1BQU1DLFNBQVMsQ0FBQ0MsUUFBVTtJQUVoQyxNQUFNQyxVQUFVRCxTQUFTQSxNQUFNRSxRQUFRLEdBQUdDLEtBQUssQ0FBQyxJQUFJRixPQUFPLEdBQUdILElBQUksQ0FBQztJQUNuRSxNQUFNTSxTQUFTSCxXQUFXQSxRQUFRSSxLQUFLLENBQUM7SUFDeEMsTUFBTUMsUUFBUUYsVUFBVUEsT0FBT04sSUFBSSxDQUFDLEtBQUtLLEtBQUssQ0FBQyxJQUFJRixPQUFPLEdBQUdILElBQUksQ0FBQztJQUVsRSxPQUFPLENBQUMsR0FBRyxFQUFFUSxNQUFNLENBQUM7QUFFckIsRUFBRTtBQUVLLE1BQU1DLGFBQWEsQ0FBQ1AsUUFBVTtJQUVwQyxJQUFJQSxTQUFTQSxPQUFPRSxjQUFjRixPQUFPRSxXQUFXTSxRQUFRLENBQUMsTUFBTTtRQUVsRSxNQUFNQyxLQUFLQyxPQUFPVixPQUFPRSxZQUFZUyxRQUFRLGNBQWM7UUFDM0QsT0FBT0MsS0FBS0MsWUFBWSxDQUFDLFNBQVM7WUFDakNDLE9BQU87WUFDUEMsVUFBVTtRQUNYLEdBQUdDLE1BQU0sQ0FBQ1A7SUFFWCxDQUFDO0lBRUQsT0FBT1YsT0FBT0M7QUFFZixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vaGVscGVycy91dGlscy5qcz80Y2FjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbnYgZnJvbSBcIkBjb25zdGFudHMvZW52XCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUID0gYXN5bmMgKFxyXG4gICAgdXJsLFxyXG4gICAgaGVhZGVyID0gZW52LkhFQURFUlNcclxuICApID0+IHtcclxuICAgIC8vIGNvbnN0IHBhcnNlQm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVyLFxyXG4gICAgICAgIC8vIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcclxuICAgICAgICBkYXRhOiBhd2FpdCBkYXRhLmpzb24oKSxcclxuICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB0aHJvdyBlcnI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEdlbmVyYWxBcGlQcm9ibGVtKHN0YXR1cyl7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlIDUwMzpcclxuICAgICAgICByZXR1cm4geyBraW5kOiBcInNlcnZpY2UtdW5hdmFpbGFibGVcIiwgbWVzc2FnZTogXCI1MDMgU2VydmljZSBVbmF2YWlsYWJsZVwiIH1cclxuICAgICAgY2FzZSA1MDI6XHJcbiAgICAgICAgcmV0dXJuIHsga2luZDogXCJiYWQtZ2F0ZXdheVwiLCBtZXNzYWdlOiBcIjUwMiBCYWQgR2F0ZXdheVwiIH1cclxuICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgcmV0dXJuIHsga2luZDogXCJpbnRlcm5hbC1zZXJ2ZXItZXJyb3JcIiwgbWVzc2FnZTogXCI1MDAgSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfVxyXG4gICAgICBjYXNlIDQwMDoge1xyXG4gICAgICAgIHJldHVybiB7IGtpbmQ6IFwiYmFkLXJlcXVlc3RcIiwgbWVzc2FnZTogXCJCYWQgUmVxdWVzdFwiIH1cclxuICAgICAgfVxyXG4gICAgICBjYXNlIDQwMTpcclxuICAgICAgICByZXR1cm4geyBraW5kOiBcInVuYXV0aG9yaXplZFwiLCBtZXNzYWdlOiBcIllvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZFwiIH1cclxuICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgcmV0dXJuIHsga2luZDogXCJmb3JiaWRkZW5cIiwgbWVzc2FnZTogXCI0MDMgRm9yYmlkZGVuXCIgfVxyXG4gICAgICBjYXNlIDQwNDpcclxuICAgICAgICByZXR1cm4geyBraW5kOiBcIm5vdC1mb3VuZFwiLCBtZXNzYWdlOiBcIjQwNCBOb3QgRm91bmRcIiB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAga2luZDogXCJzZXJ2ZXJcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiU2VydmVyIEVycm9yXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBjb25zdCBzZXJpYWxpemUgPSAob2JqKSA9PiB7XHJcbiAgICB2YXIgc3RyID0gW107XHJcbiAgICBmb3IgKHZhciBwIGluIG9iailcclxuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtwXSkpO1xyXG4gICAgICB9XHJcbiAgICByZXR1cm4gc3RyLmpvaW4oXCImXCIpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJ1cGlhaCA9IChwcm9wcykgPT4ge1xyXG5cclxuXHRjb25zdCByZXZlcnNlID0gcHJvcHMgJiYgcHJvcHMudG9TdHJpbmcoKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcclxuXHRjb25zdCByaWJ1YW4gPSByZXZlcnNlICYmIHJldmVyc2UubWF0Y2goL1xcZHsxLDN9L2cpO1xyXG5cdGNvbnN0IGZpbmFsID0gcmlidWFuICYmIHJpYnVhbi5qb2luKFwiLlwiKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcclxuXHJcblx0cmV0dXJuIGBScCAke2ZpbmFsfWA7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IElkckNvbnZlcnQgPSAocHJvcHMpID0+IHtcclxuXHJcblx0aWYgKHByb3BzICYmIHByb3BzPy50b1N0cmluZygpICYmIHByb3BzPy50b1N0cmluZygpLmluY2x1ZGVzKFwiLlwiKSkge1xyXG5cclxuXHRcdGNvbnN0IHJwID0gTnVtYmVyKHByb3BzPy50b1N0cmluZygpPy5yZXBsYWNlKC9bXjAtOS4tXSsvZywgXCJcIikpO1xyXG5cdFx0cmV0dXJuIEludGwuTnVtYmVyRm9ybWF0KFwiaWQtSURcIiwge1xyXG5cdFx0XHRzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG5cdFx0XHRjdXJyZW5jeTogXCJJRFJcIixcclxuXHRcdH0pLmZvcm1hdChycCk7XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIFJ1cGlhaChwcm9wcyk7XHJcblxyXG59OyJdLCJuYW1lcyI6WyJlbnYiLCJHRVQiLCJ1cmwiLCJoZWFkZXIiLCJIRUFERVJTIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0R2VuZXJhbEFwaVByb2JsZW0iLCJraW5kIiwibWVzc2FnZSIsInNlcmlhbGl6ZSIsIm9iaiIsInN0ciIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwiUnVwaWFoIiwicHJvcHMiLCJyZXZlcnNlIiwidG9TdHJpbmciLCJzcGxpdCIsInJpYnVhbiIsIm1hdGNoIiwiZmluYWwiLCJJZHJDb252ZXJ0IiwiaW5jbHVkZXMiLCJycCIsIk51bWJlciIsInJlcGxhY2UiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/utils.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var store_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/redux */ \"./store/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n            store: store_redux__WEBPACK_IMPORTED_MODULE_3__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\OWNER\\\\Documents\\\\test\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\OWNER\\\\Documents\\\\test\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store_redux__WEBPACK_IMPORTED_MODULE_3__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ007QUFFWTtBQUNOO0FBRXZDLFNBQVNHLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN2QyxxQkFDRTtrQkFDRSw0RUFBQ0gsaURBQVFBO1lBQUNELE9BQU9BLDhDQUFLQTtzQkFDcEIsNEVBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlTCwwREFBaUIsQ0FBQ0csTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJ1xuXG5pbXBvcnQgeyB3cmFwcGVyLCBzdG9yZSB9IGZyb20gXCJzdG9yZS9yZWR1eFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7Il0sIm5hbWVzIjpbIndyYXBwZXIiLCJzdG9yZSIsIlByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/actions/historyListAction.js":
/*!********************************************!*\
  !*** ./store/actions/historyListAction.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActionsHistoryList\": () => (/* binding */ ActionsHistoryList),\n/* harmony export */   \"loadHistory\": () => (/* binding */ loadHistory)\n/* harmony export */ });\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @helpers/utils */ \"./helpers/utils.js\");\n\n// Actions History\nconst ActionsHistoryList = {\n    GET_HISTORY: \"get_history\",\n    LOAD_GET_HISTORY: \"load_get_history\",\n    RES_GET_HISTORY: \"result_get_history\",\n    ERR_GET_HISTORY: \"error_get_history\"\n};\n// LOCAL API History\nconst API_HISTORY = `${\"http://localhost:3002\"}/api/history`;\nconst loadHistory = ()=>async (dispatch)=>{\n        dispatch({\n            type: ActionsHistoryList.LOAD_GET_HISTORY\n        });\n        const result = await (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.GET)(API_HISTORY);\n        if (result.status && !(result.status >= 200 && result.status < 300)) {\n            const problem = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.getGeneralApiProblem)(result.status, result.res);\n            dispatch({\n                type: LOAD_USERS_ERROR,\n                data: problem\n            });\n        }\n        try {\n            dispatch({\n                type: ActionsHistoryList.RES_GET_HISTORY,\n                data: {\n                    kind: \"ok\",\n                    data: result.data,\n                    message: \"\"\n                }\n            });\n        } catch  {\n            dispatch({\n                type: ActionsHistoryList.ERR_GET_HISTORY,\n                data: {\n                    kind: \"bad-data\",\n                    message: \"Not expected format\"\n                }\n            });\n        }\n    };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL2hpc3RvcnlMaXN0QWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRDtBQUUzRCxrQkFBa0I7QUFDWCxNQUFNRSxxQkFBcUI7SUFDakNDLGFBQWE7SUFDYkMsa0JBQWtCO0lBQ2xCQyxpQkFBaUI7SUFDakJDLGlCQUFpQjtBQUNsQixFQUFFO0FBRUYsb0JBQW9CO0FBQ3BCLE1BQU1DLGNBQWMsQ0FBQyxFQUFFQyx1QkFBbUMsQ0FBQyxZQUFZLENBQUM7QUFFakUsTUFBTUcsY0FBYyxJQUFNLE9BQU9DLFdBQWE7UUFDcERBLFNBQVM7WUFBRUMsTUFBTVgsbUJBQW1CRSxnQkFBZ0I7UUFBQztRQUVyRCxNQUFNVSxTQUFTLE1BQU1kLG1EQUFHQSxDQUN2Qk87UUFHQyxJQUFJTyxPQUFPQyxNQUFNLElBQUksQ0FBRUQsQ0FBQUEsT0FBT0MsTUFBTSxJQUFJLE9BQU9ELE9BQU9DLE1BQU0sR0FBRyxHQUFFLEdBQUk7WUFDdEUsTUFBTUMsVUFBVWYsb0VBQW9CQSxDQUFDYSxPQUFPQyxNQUFNLEVBQUVELE9BQU9HLEdBQUc7WUFDOURMLFNBQVM7Z0JBQUVDLE1BQU1LO2dCQUFrQkMsTUFBTUg7WUFBUTtRQUNoRCxDQUFDO1FBRUQsSUFBSTtZQUVMSixTQUFTO2dCQUFFQyxNQUFNWCxtQkFBbUJHLGVBQWU7Z0JBQUVjLE1BQU07b0JBQUVDLE1BQU07b0JBQU1ELE1BQU1MLE9BQU9LLElBQUk7b0JBQUVFLFNBQVM7Z0JBQUc7WUFBRTtRQUN6RyxFQUFFLE9BQU07WUFDVFQsU0FBUztnQkFBRUMsTUFBTVgsbUJBQW1CSSxlQUFlO2dCQUFFYSxNQUFNO29CQUFFQyxNQUFNO29CQUFZQyxTQUFTO2dCQUFzQjtZQUFFO1FBQy9HO0lBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3N0b3JlL2FjdGlvbnMvaGlzdG9yeUxpc3RBY3Rpb24uanM/MjJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHRVQsIGdldEdlbmVyYWxBcGlQcm9ibGVtIH0gZnJvbSBcIkBoZWxwZXJzL3V0aWxzXCI7XHJcblxyXG4vLyBBY3Rpb25zIEhpc3RvcnlcclxuZXhwb3J0IGNvbnN0IEFjdGlvbnNIaXN0b3J5TGlzdCA9IHtcclxuXHRHRVRfSElTVE9SWTogXCJnZXRfaGlzdG9yeVwiLFxyXG5cdExPQURfR0VUX0hJU1RPUlk6IFwibG9hZF9nZXRfaGlzdG9yeVwiLFxyXG5cdFJFU19HRVRfSElTVE9SWTogXCJyZXN1bHRfZ2V0X2hpc3RvcnlcIixcclxuXHRFUlJfR0VUX0hJU1RPUlk6IFwiZXJyb3JfZ2V0X2hpc3RvcnlcIixcclxufTtcclxuXHJcbi8vIExPQ0FMIEFQSSBIaXN0b3J5XHJcbmNvbnN0IEFQSV9ISVNUT1JZID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUk9PVF9ET01BSU59L2FwaS9oaXN0b3J5YDtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkSGlzdG9yeSA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uc0hpc3RvcnlMaXN0LkxPQURfR0VUX0hJU1RPUlkgfSk7XHJcblxyXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IEdFVChcclxuXHRcdEFQSV9ISVNUT1JZLFxyXG5cdCAgKTtcclxuXHQgIFxyXG5cdCAgaWYgKHJlc3VsdC5zdGF0dXMgJiYgIShyZXN1bHQuc3RhdHVzID49IDIwMCAmJiByZXN1bHQuc3RhdHVzIDwgMzAwKSkge1xyXG5cdFx0Y29uc3QgcHJvYmxlbSA9IGdldEdlbmVyYWxBcGlQcm9ibGVtKHJlc3VsdC5zdGF0dXMsIHJlc3VsdC5yZXMpO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBMT0FEX1VTRVJTX0VSUk9SLCBkYXRhOiBwcm9ibGVtIH0pXHJcblx0ICB9XHJcbiAgXHJcblx0ICB0cnkge1xyXG5cdFx0XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnNIaXN0b3J5TGlzdC5SRVNfR0VUX0hJU1RPUlksIGRhdGE6IHsga2luZDogJ29rJywgZGF0YTogcmVzdWx0LmRhdGEsIG1lc3NhZ2U6ICcnIH0gfSlcclxuXHQgIH0gY2F0Y2gge1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zSGlzdG9yeUxpc3QuRVJSX0dFVF9ISVNUT1JZLCBkYXRhOiB7IGtpbmQ6ICdiYWQtZGF0YScsIG1lc3NhZ2U6ICdOb3QgZXhwZWN0ZWQgZm9ybWF0JyB9IH0pXHJcblx0ICB9XHJcbiB9OyJdLCJuYW1lcyI6WyJHRVQiLCJnZXRHZW5lcmFsQXBpUHJvYmxlbSIsIkFjdGlvbnNIaXN0b3J5TGlzdCIsIkdFVF9ISVNUT1JZIiwiTE9BRF9HRVRfSElTVE9SWSIsIlJFU19HRVRfSElTVE9SWSIsIkVSUl9HRVRfSElTVE9SWSIsIkFQSV9ISVNUT1JZIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JPT1RfRE9NQUlOIiwibG9hZEhpc3RvcnkiLCJkaXNwYXRjaCIsInR5cGUiLCJyZXN1bHQiLCJzdGF0dXMiLCJwcm9ibGVtIiwicmVzIiwiTE9BRF9VU0VSU19FUlJPUiIsImRhdGEiLCJraW5kIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/actions/historyListAction.js\n");

/***/ }),

/***/ "./store/reducers/historyListReducer.js":
/*!**********************************************!*\
  !*** ./store/reducers/historyListReducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var store_actions_historyListAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/actions/historyListAction */ \"./store/actions/historyListAction.js\");\n\nconst initialState = {\n    data: {},\n    status: \"fetch_init\",\n    message: \"\"\n};\nfunction storeHistory(state = initialState, action) {\n    switch(action.type){\n        case store_actions_historyListAction__WEBPACK_IMPORTED_MODULE_0__.ActionsHistoryList.LOAD_GET_HISTORY:\n            return {\n                ...state,\n                data: action.data,\n                status: \"fetch_loading\"\n            };\n        case store_actions_historyListAction__WEBPACK_IMPORTED_MODULE_0__.ActionsHistoryList.RES_GET_HISTORY:\n            return {\n                ...state,\n                data: action.data,\n                status: \"fetch_result\"\n            };\n        case store_actions_historyListAction__WEBPACK_IMPORTED_MODULE_0__.ActionsHistoryList.ERR_GET_HISTORY:\n            return {\n                ...state,\n                data: action.data,\n                status: \"fetch_error\",\n                message: \"Error...\"\n            };\n        default:\n            {\n                return {\n                    ...state\n                };\n            }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeHistory);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9oaXN0b3J5TGlzdFJlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUU7QUFFckUsTUFBTUMsZUFBZTtJQUFFQyxNQUFNLENBQUM7SUFBR0MsUUFBUTtJQUFjQyxTQUFTO0FBQUc7QUFFbkUsU0FBU0MsYUFBYUMsUUFBUUwsWUFBWSxFQUFFTSxNQUFNLEVBQUU7SUFFbkQsT0FBUUEsT0FBT0MsSUFBSTtRQUVuQixLQUFLUixnR0FBbUM7WUFDdkMsT0FBTztnQkFBRSxHQUFHTSxLQUFLO2dCQUFFSixNQUFNSyxPQUFPTCxJQUFJO2dCQUFFQyxRQUFRO1lBQWdCO1FBQy9ELEtBQUtILCtGQUFrQztZQUN0QyxPQUFPO2dCQUFFLEdBQUdNLEtBQUs7Z0JBQUVKLE1BQU1LLE9BQU9MLElBQUk7Z0JBQUVDLFFBQVE7WUFBZTtRQUM5RCxLQUFLSCwrRkFBa0M7WUFDdEMsT0FBTztnQkFDTixHQUFHTSxLQUFLO2dCQUFFSixNQUFNSyxPQUFPTCxJQUFJO2dCQUFFQyxRQUFRO2dCQUFlQyxTQUFTO1lBQzlEO1FBQ0Q7WUFBUztnQkFFUixPQUFPO29CQUNOLEdBQUdFLEtBQUs7Z0JBQ1Q7WUFFRDtJQUVBO0FBRUQ7QUFFQSxpRUFBZUQsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3N0b3JlL3JlZHVjZXJzL2hpc3RvcnlMaXN0UmVkdWNlci5qcz80NGRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnNIaXN0b3J5TGlzdCB9IGZyb20gXCJzdG9yZS9hY3Rpb25zL2hpc3RvcnlMaXN0QWN0aW9uXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGRhdGE6IHt9LCBzdGF0dXM6IFwiZmV0Y2hfaW5pdFwiLCBtZXNzYWdlOiBcIlwiIH07XHJcblxyXG5mdW5jdGlvbiBzdG9yZUhpc3Rvcnkoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG5cdGNhc2UgQWN0aW9uc0hpc3RvcnlMaXN0LkxPQURfR0VUX0hJU1RPUlk6XHJcblx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogYWN0aW9uLmRhdGEsIHN0YXR1czogXCJmZXRjaF9sb2FkaW5nXCIgfTtcclxuXHRjYXNlIEFjdGlvbnNIaXN0b3J5TGlzdC5SRVNfR0VUX0hJU1RPUlk6XHJcblx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogYWN0aW9uLmRhdGEsIHN0YXR1czogXCJmZXRjaF9yZXN1bHRcIiB9O1xyXG5cdGNhc2UgQWN0aW9uc0hpc3RvcnlMaXN0LkVSUl9HRVRfSElTVE9SWTpcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdC4uLnN0YXRlLCBkYXRhOiBhY3Rpb24uZGF0YSwgc3RhdHVzOiBcImZldGNoX2Vycm9yXCIsIG1lc3NhZ2U6IFwiRXJyb3IuLi5cIixcclxuXHRcdH07XHJcblx0ZGVmYXVsdDoge1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0fTtcclxuXHJcblx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZUhpc3Rvcnk7XHJcbiJdLCJuYW1lcyI6WyJBY3Rpb25zSGlzdG9yeUxpc3QiLCJpbml0aWFsU3RhdGUiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsInN0b3JlSGlzdG9yeSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkxPQURfR0VUX0hJU1RPUlkiLCJSRVNfR0VUX0hJU1RPUlkiLCJFUlJfR0VUX0hJU1RPUlkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/historyListReducer.js\n");

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _historyListReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historyListReducer */ \"./store/reducers/historyListReducer.js\");\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    storeHistory: _historyListReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBQ1E7QUFFaEQsTUFBTUUsY0FBY0Ysc0RBQWVBLENBQUM7SUFDaENDLFlBQVlBLDZEQUFBQTtBQUNoQjtBQUVBLGlFQUFlQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanM/YjI0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlSGlzdG9yeSBmcm9tIFwiLi9oaXN0b3J5TGlzdFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHN0b3JlSGlzdG9yeSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsInN0b3JlSGlzdG9yeSIsInJvb3RSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/index.js\n");

/***/ }),

/***/ "./store/redux.js":
/*!************************!*\
  !*** ./store/redux.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ \"./store/reducers/index.js\");\n\n\n\n\n\n// initial states here\nconst initalState = {};\n// middleware\nconst middleware = [\n    (redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())\n];\n// creating store\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], initalState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));\n// assigning store to next wrapper\nconst makeStore = ()=>store;\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1eC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNyQjtBQUMrQjtBQUNaO0FBQ2Q7QUFFckMsc0JBQXNCO0FBQ3RCLE1BQU1NLGNBQWMsQ0FBQztBQUVyQixhQUFhO0FBQ2IsTUFBTUMsYUFBYTtJQUFDTCxvREFBS0E7Q0FBQztBQUUxQixpQkFBaUI7QUFDVixNQUFNTSxRQUFRUixrREFBV0EsQ0FDOUJLLGlEQUFXQSxFQUNYQyxhQUNBSCw2RUFBbUJBLENBQUNGLHNEQUFlQSxJQUFJTSxjQUN2QztBQUVGLGtDQUFrQztBQUNsQyxNQUFNRSxZQUFZLElBQU1EO0FBRWpCLE1BQU1FLFVBQVVOLGlFQUFhQSxDQUFDSyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3RvcmUvcmVkdXguanM/Y2U2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG4vLyBpbml0aWFsIHN0YXRlcyBoZXJlXHJcbmNvbnN0IGluaXRhbFN0YXRlID0ge307XHJcblxyXG4vLyBtaWRkbGV3YXJlXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xyXG5cclxuLy8gY3JlYXRpbmcgc3RvcmVcclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgcm9vdFJlZHVjZXIsXHJcbiAgaW5pdGFsU3RhdGUsXHJcbiAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbik7XHJcblxyXG4vLyBhc3NpZ25pbmcgc3RvcmUgdG8gbmV4dCB3cmFwcGVyXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHN0b3JlO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7Il0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiY3JlYXRlV3JhcHBlciIsInJvb3RSZWR1Y2VyIiwiaW5pdGFsU3RhdGUiLCJtaWRkbGV3YXJlIiwic3RvcmUiLCJtYWtlU3RvcmUiLCJ3cmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/redux.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();