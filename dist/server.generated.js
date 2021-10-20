/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"\";\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n/* provided dependency */ var __react_refresh_init_socket__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WDSSocket.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WDSSocket.js\");\n/* global __react_refresh_error_overlay__, __react_refresh_init_socket__, __resourceQuery */\n\nconst errorEventHandlers = __webpack_require__(/*! ./utils/errorEventHandlers */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js\");\nconst formatWebpackErrors = __webpack_require__(/*! ./utils/formatWebpackErrors */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js\");\n\n// Setup error states\nlet isHotReload = false;\nlet hasRuntimeErrors = false;\n\n/**\n * Try dismissing the compile error overlay.\n * This will also reset runtime error records (if any),\n * because we have new source to evaluate.\n * @returns {void}\n */\nfunction tryDismissErrorOverlay() {\n  __react_refresh_error_overlay__.clearCompileError();\n  __react_refresh_error_overlay__.clearRuntimeErrors(!hasRuntimeErrors);\n  hasRuntimeErrors = false;\n}\n\n/**\n * A function called after a compile success signal is received from Webpack.\n * @returns {void}\n */\nfunction handleCompileSuccess() {\n  isHotReload = true;\n\n  if (isHotReload) {\n    tryDismissErrorOverlay();\n  }\n}\n\n/**\n * A function called after a compile errored signal is received from Webpack.\n * @param {string} errors\n * @returns {void}\n */\nfunction handleCompileErrors(errors) {\n  isHotReload = true;\n\n  const formattedErrors = formatWebpackErrors(errors);\n\n  // Only show the first error\n  __react_refresh_error_overlay__.showCompileError(formattedErrors[0]);\n}\n\n/**\n * Handles compilation messages from Webpack.\n * Integrates with a compile error overlay.\n * @param {*} message A Webpack HMR message sent via WebSockets.\n * @returns {void}\n */\nfunction compileMessageHandler(message) {\n  switch (message.type) {\n    case 'ok':\n    case 'still-ok':\n    case 'warnings': {\n      // TODO: Implement handling for warnings\n      handleCompileSuccess();\n      break;\n    }\n    case 'errors': {\n      handleCompileErrors(message.data);\n      break;\n    }\n    default: {\n      // Do nothing.\n    }\n  }\n}\n\n// Only register if we're in non-production mode and if window is defined\nif ( true && typeof window !== 'undefined') {\n  // Registers handlers for compile errors\n  __react_refresh_init_socket__(compileMessageHandler, __resourceQuery);\n  // Registers handlers for runtime errors\n  errorEventHandlers.error(function handleError(error) {\n    hasRuntimeErrors = true;\n    __react_refresh_error_overlay__.handleRuntimeError(error);\n  });\n  errorEventHandlers.unhandledRejection(function handleUnhandledPromiseRejection(error) {\n    hasRuntimeErrors = true;\n    __react_refresh_error_overlay__.handleRuntimeError(error);\n  });\n}\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const safeThis = __webpack_require__(/*! ./utils/safeThis */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/safeThis.js\");\n\nif ( true && typeof safeThis !== 'undefined') {\n  // Only inject the runtime if it hasn't been injected\n  if (!safeThis.__reactRefreshInjected) {\n    const RefreshRuntime = __webpack_require__(/*! react-refresh/runtime */ \"react-refresh/runtime\");\n    // Inject refresh runtime into global scope\n    RefreshRuntime.injectIntoGlobalHook(safeThis);\n\n    // Mark the runtime as injected to prevent double-injection\n    safeThis.__reactRefreshInjected = true;\n  }\n}\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/**\n * @callback EventCallback\n * @param {string | Error | null} context\n * @returns {void}\n */\n/**\n * @callback EventHandler\n * @param {Event} event\n * @returns {void}\n */\n\n/**\n * A function that creates an event handler for the `error` event.\n * @param {EventCallback} callback A function called to handle the error context.\n * @returns {EventHandler} A handler for the `error` event.\n */\nfunction createErrorHandler(callback) {\n  return function errorHandler(event) {\n    if (!event || !event.error) {\n      return callback(null);\n    }\n    if (event.error instanceof Error) {\n      return callback(event.error);\n    }\n    // A non-error was thrown, we don't have a trace. :(\n    // Look in your browser's devtools for more information\n    return callback(new Error(event.error));\n  };\n}\n\n/**\n * A function that creates an event handler for the `unhandledrejection` event.\n * @param {EventCallback} callback A function called to handle the error context.\n * @returns {EventHandler} A handler for the `unhandledrejection` event.\n */\nfunction createRejectionHandler(callback) {\n  return function rejectionHandler(event) {\n    if (!event || !event.reason) {\n      return callback(new Error('Unknown'));\n    }\n    if (event.reason instanceof Error) {\n      return callback(event.reason);\n    }\n    // A non-error was rejected, we don't have a trace :(\n    // Look in your browser's devtools for more information\n    return callback(new Error(event.reason));\n  };\n}\n\n/**\n * Creates a handler that registers an EventListener on window for a valid type\n * and calls a callback when the event fires.\n * @param {string} eventType A valid DOM event type.\n * @param {function(EventCallback): EventHandler} createHandler A function that creates an event handler.\n * @returns {register} A function that registers the EventListener given a callback.\n */\nfunction createWindowEventHandler(eventType, createHandler) {\n  /**\n   * @type {EventHandler | null} A cached event handler function.\n   */\n  let eventHandler = null;\n\n  /**\n   * Unregisters an EventListener if it has been registered.\n   * @returns {void}\n   */\n  function unregister() {\n    if (eventHandler === null) {\n      return;\n    }\n    window.removeEventListener(eventType, eventHandler);\n    eventHandler = null;\n  }\n\n  /**\n   * Registers an EventListener if it hasn't been registered.\n   * @param {EventCallback} callback A function called after the event handler to handle its context.\n   * @returns {unregister | void} A function to unregister the registered EventListener if registration is performed.\n   */\n  function register(callback) {\n    if (eventHandler !== null) {\n      return;\n    }\n    eventHandler = createHandler(callback);\n    window.addEventListener(eventType, eventHandler);\n\n    return unregister;\n  }\n\n  return register;\n}\n\nmodule.exports = {\n  error: createWindowEventHandler('error', createErrorHandler),\n  unhandledRejection: createWindowEventHandler('unhandledrejection', createRejectionHandler),\n};\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/**\n * @typedef {Object} WebpackErrorObj\n * @property {string} moduleIdentifier\n * @property {string} moduleName\n * @property {string} message\n */\n\nconst friendlySyntaxErrorLabel = 'Syntax error:';\n\n/**\n * Checks if the error message is for a syntax error.\n * @param {string} message The raw Webpack error message.\n * @returns {boolean} Whether the error message is for a syntax error.\n */\nfunction isLikelyASyntaxError(message) {\n  return message.indexOf(friendlySyntaxErrorLabel) !== -1;\n}\n\n/**\n * Cleans up Webpack error messages.\n *\n * This implementation is based on the one from [create-react-app](https://github.com/facebook/create-react-app/blob/edc671eeea6b7d26ac3f1eb2050e50f75cf9ad5d/packages/react-dev-utils/formatWebpackMessages.js).\n * @param {string} message The raw Webpack error message.\n * @returns {string} The formatted Webpack error message.\n */\nfunction formatMessage(message) {\n  let lines = message.split('\\n');\n\n  // Strip Webpack-added headers off errors/warnings\n  // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js\n  lines = lines.filter(function (line) {\n    return !/Module [A-z ]+\\(from/.test(line);\n  });\n\n  // Remove leading newline\n  if (lines.length > 2 && lines[1].trim() === '') {\n    lines.splice(1, 1);\n  }\n\n  // Remove duplicated newlines\n  lines = lines.filter(function (line, index, arr) {\n    return index === 0 || line.trim() !== '' || line.trim() !== arr[index - 1].trim();\n  });\n\n  // Clean up the file name\n  lines[0] = lines[0].replace(/^(.*) \\d+:\\d+-\\d+$/, '$1');\n\n  // Cleans up verbose \"module not found\" messages for files and packages.\n  if (lines[1] && lines[1].indexOf('Module not found: ') === 0) {\n    lines = [\n      lines[0],\n      lines[1]\n        .replace('Error: ', '')\n        .replace('Module not found: Cannot find file:', 'Cannot find file:'),\n    ];\n  }\n\n  message = lines.join('\\n');\n\n  // Clean up syntax errors\n  message = message.replace('SyntaxError:', friendlySyntaxErrorLabel);\n\n  // Internal stacks are generally useless, so we strip them -\n  // except the stacks containing `webpack:`,\n  // because they're normally from user code generated by webpack.\n  message = message.replace(/^\\s*at\\s((?!webpack:).)*:\\d+:\\d+[\\s)]*(\\n|$)/gm, ''); // at ... ...:x:y\n  message = message.replace(/^\\s*at\\s((?!webpack:).)*<anonymous>[\\s)]*(\\n|$)/gm, ''); // at ... <anonymous>\n  message = message.replace(/^\\s*at\\s<anonymous>(\\n|$)/gm, ''); // at <anonymous>\n\n  return message.trim();\n}\n\n/**\n * Formats Webpack error messages into a more readable format.\n * @param {Array<string | WebpackErrorObj>} errors An array of Webpack error messages.\n * @returns {string[]} The formatted Webpack error messages.\n */\nfunction formatWebpackErrors(errors) {\n  let formattedErrors = errors.map(function (errorObjOrMessage) {\n    // Webpack 5 compilation errors are in the form of descriptor objects,\n    // so we have to join pieces to get the format we want.\n    if (typeof errorObjOrMessage === 'object') {\n      return formatMessage([errorObjOrMessage.moduleName, errorObjOrMessage.message].join('\\n'));\n    }\n    // Webpack 4 compilation errors are strings\n    return formatMessage(errorObjOrMessage);\n  });\n  if (formattedErrors.some(isLikelyASyntaxError)) {\n    // If there are any syntax errors, show just them.\n    formattedErrors = formattedErrors.filter(isLikelyASyntaxError);\n  }\n  return formattedErrors;\n}\n\nmodule.exports = formatWebpackErrors;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/safeThis.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/safeThis.js ***!
  \************************************************************************************/
/***/ ((module) => {

eval("/* global globalThis */\n/*\n  This file is copied from `core-js`.\n  https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global.js\n\n  MIT License\n  Author: Denis Pushkarev (@zloirock)\n*/\n\nconst check = function (it) {\n  return it && it.Math == Math && it;\n};\n\nmodule.exports =\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  Function('return this')();\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/safeThis.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* global __webpack_require__ */\nconst Refresh = __webpack_require__(/*! react-refresh/runtime */ \"react-refresh/runtime\");\n\n/**\n * Extracts exports from a webpack module object.\n * @param {string} moduleId A Webpack module ID.\n * @returns {*} An exports object from the module.\n */\nfunction getModuleExports(moduleId) {\n  return __webpack_require__.c[moduleId].exports;\n}\n\n/**\n * Calculates the signature of a React refresh boundary.\n * If this signature changes, it's unsafe to accept the boundary.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L795-L816).\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {string[]} A React refresh boundary signature array.\n */\nfunction getReactRefreshBoundarySignature(moduleExports) {\n  const signature = [];\n  signature.push(Refresh.getFamilyByType(moduleExports));\n\n  if (moduleExports == null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over exports.\n    return signature;\n  }\n\n  for (let key in moduleExports) {\n    if (key === '__esModule') {\n      continue;\n    }\n\n    signature.push(key);\n    signature.push(Refresh.getFamilyByType(moduleExports[key]));\n  }\n\n  return signature;\n}\n\n/**\n * Creates a helper that performs a delayed React refresh.\n * @returns {enqueueUpdate} A debounced React refresh function.\n */\nfunction createDebounceUpdate() {\n  /**\n   * A cached setTimeout handler.\n   * @type {number | undefined}\n   */\n  let refreshTimeout;\n\n  /**\n   * Performs react refresh on a delay and clears the error overlay.\n   * @param {function(): void} callback\n   * @returns {void}\n   */\n  function enqueueUpdate(callback) {\n    if (typeof refreshTimeout === 'undefined') {\n      refreshTimeout = setTimeout(function () {\n        refreshTimeout = undefined;\n        Refresh.performReactRefresh();\n        callback();\n      }, 30);\n    }\n  }\n\n  return enqueueUpdate;\n}\n\n/**\n * Checks if all exports are likely a React component.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L748-L774).\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {boolean} Whether the exports are React component like.\n */\nfunction isReactRefreshBoundary(moduleExports) {\n  if (Refresh.isLikelyComponentType(moduleExports)) {\n    return true;\n  }\n  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over exports.\n    return false;\n  }\n\n  let hasExports = false;\n  let areAllExportsComponents = true;\n  for (let key in moduleExports) {\n    hasExports = true;\n\n    // This is the ES Module indicator flag\n    if (key === '__esModule') {\n      continue;\n    }\n\n    // We can (and have to) safely execute getters here,\n    // as Webpack manually assigns harmony exports to getters,\n    // without any side-effects attached.\n    // Ref: https://github.com/webpack/webpack/blob/b93048643fe74de2a6931755911da1212df55897/lib/MainTemplate.js#L281\n    const exportValue = moduleExports[key];\n    if (!Refresh.isLikelyComponentType(exportValue)) {\n      areAllExportsComponents = false;\n    }\n  }\n\n  return hasExports && areAllExportsComponents;\n}\n\n/**\n * Checks if exports are likely a React component and registers them.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L818-L835).\n * @param {*} moduleExports A Webpack module exports object.\n * @param {string} moduleId A Webpack module ID.\n * @returns {void}\n */\nfunction registerExportsForReactRefresh(moduleExports, moduleId) {\n  if (Refresh.isLikelyComponentType(moduleExports)) {\n    // Register module.exports if it is likely a component\n    Refresh.register(moduleExports, moduleId + ' %exports%');\n  }\n\n  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over the exports.\n    return;\n  }\n\n  for (let key in moduleExports) {\n    // Skip registering the ES Module indicator\n    if (key === '__esModule') {\n      continue;\n    }\n\n    const exportValue = moduleExports[key];\n    if (Refresh.isLikelyComponentType(exportValue)) {\n      const typeID = moduleId + ' %exports% ' + key;\n      Refresh.register(exportValue, typeID);\n    }\n  }\n}\n\n/**\n * Compares previous and next module objects to check for mutated boundaries.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L776-L792).\n * @param {*} prevExports The current Webpack module exports object.\n * @param {*} nextExports The next Webpack module exports object.\n * @returns {boolean} Whether the React refresh boundary should be invalidated.\n */\nfunction shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {\n  const prevSignature = getReactRefreshBoundarySignature(prevExports);\n  const nextSignature = getReactRefreshBoundarySignature(nextExports);\n\n  if (prevSignature.length !== nextSignature.length) {\n    return true;\n  }\n\n  for (let i = 0; i < nextSignature.length; i += 1) {\n    if (prevSignature[i] !== nextSignature[i]) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nmodule.exports = Object.freeze({\n  enqueueUpdate: createDebounceUpdate(),\n  getModuleExports: getModuleExports,\n  isReactRefreshBoundary: isReactRefreshBoundary,\n  shouldInvalidateReactRefreshBoundary: shouldInvalidateReactRefreshBoundary,\n  registerExportsForReactRefresh: registerExportsForReactRefresh,\n});\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/CompileErrorTrace.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/CompileErrorTrace.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ansiHTML = __webpack_require__(/*! ansi-html */ \"ansi-html\");\nconst HtmlEntities = __webpack_require__(/*! html-entities */ \"html-entities\");\nconst theme = __webpack_require__(/*! ../theme */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js\");\nconst formatFilename = __webpack_require__(/*! ../utils/formatFilename */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/formatFilename.js\");\n\nansiHTML.setColors(theme);\n\nconst entities = new HtmlEntities.Html5Entities();\n\n/**\n * @typedef {Object} CompileErrorTraceProps\n * @property {string} errorMessage\n */\n\n/**\n * A formatter that turns Webpack compile error messages into highlighted HTML source traces.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {CompileErrorTraceProps} props\n * @returns {void}\n */\nfunction CompileErrorTrace(document, root, props) {\n  const errorParts = props.errorMessage.split('\\n');\n  const errorMessage = errorParts\n    .splice(1, 1)[0]\n    // Strip filename from the error message\n    .replace(/^(.*:)\\s.*:(\\s.*)$/, '$1$2');\n  errorParts[0] = formatFilename(errorParts[0]);\n  errorParts.unshift(errorMessage);\n\n  const stackContainer = document.createElement('pre');\n  stackContainer.innerHTML = entities.decode(ansiHTML(entities.encode(errorParts.join('\\n'))));\n  stackContainer.style.fontFamily = [\n    '\"Operator Mono SSm\"',\n    '\"Operator Mono\"',\n    '\"Fira Code Retina\"',\n    '\"Fira Code\"',\n    '\"FiraCode-Retina\"',\n    '\"Andale Mono\"',\n    '\"Lucida Console\"',\n    'Menlo',\n    'Consolas',\n    'Monaco',\n    'monospace',\n  ].join(', ');\n  stackContainer.style.margin = '0';\n  stackContainer.style.whiteSpace = 'pre-wrap';\n\n  root.appendChild(stackContainer);\n}\n\nmodule.exports = CompileErrorTrace;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/CompileErrorTrace.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const theme = __webpack_require__(/*! ../theme */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js\");\nconst Spacer = __webpack_require__(/*! ./Spacer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js\");\n\n/**\n * @typedef {Object} PageHeaderProps\n * @property {string} [message]\n * @property {string} title\n * @property {string} [topOffset]\n */\n\n/**\n * The header of the overlay.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {PageHeaderProps} props\n * @returns {void}\n */\nfunction PageHeader(document, root, props) {\n  const pageHeaderContainer = document.createElement('div');\n  pageHeaderContainer.style.background = '#' + theme.dimgrey;\n  pageHeaderContainer.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.3)';\n  pageHeaderContainer.style.color = '#' + theme.white;\n  pageHeaderContainer.style.left = '0';\n  pageHeaderContainer.style.padding = '1rem 1.5rem';\n  pageHeaderContainer.style.position = 'fixed';\n  pageHeaderContainer.style.top = props.topOffset || '0';\n  pageHeaderContainer.style.width = 'calc(100vw - 3rem)';\n\n  const title = document.createElement('h3');\n  title.innerText = props.title;\n  title.style.color = '#' + theme.red;\n  title.style.fontSize = '1.125rem';\n  title.style.lineHeight = '1.3';\n  title.style.margin = '0';\n  pageHeaderContainer.appendChild(title);\n\n  if (props.message) {\n    title.style.margin = '0 0 0.5rem';\n\n    const message = document.createElement('span');\n    message.innerText = props.message;\n    message.style.color = '#' + theme.white;\n    message.style.wordBreak = 'break-word';\n    pageHeaderContainer.appendChild(message);\n  }\n\n  root.appendChild(pageHeaderContainer);\n\n  // This has to run after appending elements to root\n  // because we need to actual mounted height.\n  Spacer(document, root, {\n    space: pageHeaderContainer.offsetHeight.toString(10),\n  });\n}\n\nmodule.exports = PageHeader;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorFooter.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorFooter.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const theme = __webpack_require__(/*! ../theme */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js\");\nconst Spacer = __webpack_require__(/*! ./Spacer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js\");\n\n/**\n * @typedef {Object} RuntimeErrorFooterProps\n * @property {string} [initialFocus]\n * @property {boolean} multiple\n * @property {function(MouseEvent): void} onClickCloseButton\n * @property {function(MouseEvent): void} onClickNextButton\n * @property {function(MouseEvent): void} onClickPrevButton\n */\n\n/**\n * A fixed footer that handles pagination of runtime errors.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {RuntimeErrorFooterProps} props\n * @returns {void}\n */\nfunction RuntimeErrorFooter(document, root, props) {\n  const footer = document.createElement('div');\n  footer.style.backgroundColor = '#' + theme.dimgrey;\n  footer.style.bottom = '0';\n  footer.style.boxShadow = '0 -1px 4px rgba(0, 0, 0, 0.3)';\n  footer.style.height = '2.5rem';\n  footer.style.left = '0';\n  footer.style.lineHeight = '2.5rem';\n  footer.style.position = 'fixed';\n  footer.style.textAlign = 'center';\n  footer.style.width = '100vw';\n  footer.style.zIndex = '2';\n\n  const BUTTON_CONFIGS = {\n    prev: {\n      id: 'prev',\n      label: '◀&ensp;Prev',\n      onClick: props.onClickPrevButton,\n    },\n    close: {\n      id: 'close',\n      label: '×&ensp;Close',\n      onClick: props.onClickCloseButton,\n    },\n    next: {\n      id: 'next',\n      label: 'Next&ensp;▶',\n      onClick: props.onClickNextButton,\n    },\n  };\n\n  let buttons = [BUTTON_CONFIGS.close];\n  if (props.multiple) {\n    buttons = [BUTTON_CONFIGS.prev, BUTTON_CONFIGS.close, BUTTON_CONFIGS.next];\n  }\n\n  /** @type {HTMLButtonElement | undefined} */\n  let initialFocusButton;\n  for (let i = 0; i < buttons.length; i += 1) {\n    const buttonConfig = buttons[i];\n\n    const button = document.createElement('button');\n    button.id = buttonConfig.id;\n    button.innerHTML = buttonConfig.label;\n    button.tabIndex = 1;\n    button.style.backgroundColor = '#' + theme.dimgrey;\n    button.style.border = 'none';\n    button.style.color = '#' + theme.white;\n    button.style.cursor = 'pointer';\n    button.style.fontSize = 'inherit';\n    button.style.height = '100%';\n    button.style.padding = '0.5rem 0.75rem';\n    button.style.width = (100 / buttons.length).toString(10) + '%';\n    button.addEventListener('click', buttonConfig.onClick);\n\n    if (buttonConfig.id === props.initialFocus) {\n      initialFocusButton = button;\n    }\n\n    footer.appendChild(button);\n  }\n\n  root.appendChild(footer);\n\n  Spacer(document, root, { space: '2.5rem' });\n\n  if (initialFocusButton) {\n    initialFocusButton.focus();\n  }\n}\n\nmodule.exports = RuntimeErrorFooter;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorFooter.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorHeader.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorHeader.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const theme = __webpack_require__(/*! ../theme */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js\");\nconst Spacer = __webpack_require__(/*! ./Spacer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js\");\n\n/**\n * @typedef {Object} RuntimeErrorHeaderProps\n * @property {number} currentErrorIndex\n * @property {number} totalErrors\n */\n\n/**\n * A fixed header that shows the total runtime error count.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {RuntimeErrorHeaderProps} props\n * @returns {void}\n */\nfunction RuntimeErrorHeader(document, root, props) {\n  const header = document.createElement('div');\n  header.innerText = 'Error ' + (props.currentErrorIndex + 1) + ' of ' + props.totalErrors;\n  header.style.backgroundColor = '#' + theme.red;\n  header.style.color = '#' + theme.white;\n  header.style.fontWeight = '500';\n  header.style.height = '2.5rem';\n  header.style.left = '0';\n  header.style.lineHeight = '2.5rem';\n  header.style.position = 'fixed';\n  header.style.textAlign = 'center';\n  header.style.top = '0';\n  header.style.width = '100vw';\n  header.style.zIndex = '2';\n\n  root.appendChild(header);\n\n  Spacer(document, root, { space: '2.5rem' });\n}\n\nmodule.exports = RuntimeErrorHeader;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorHeader.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorStack.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorStack.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ErrorStackParser = __webpack_require__(/*! error-stack-parser */ \"error-stack-parser\");\nconst theme = __webpack_require__(/*! ../theme */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js\");\nconst formatFilename = __webpack_require__(/*! ../utils/formatFilename */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/formatFilename.js\");\n\n/**\n * @typedef {Object} RuntimeErrorStackProps\n * @property {Error} error\n */\n\n/**\n * A formatter that turns runtime error stacks into highlighted HTML stacks.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {RuntimeErrorStackProps} props\n * @returns {void}\n */\nfunction RuntimeErrorStack(document, root, props) {\n  const stackTitle = document.createElement('h4');\n  stackTitle.innerText = 'Call Stack';\n  stackTitle.style.color = '#' + theme.white;\n  stackTitle.style.fontSize = '1.0625rem';\n  stackTitle.style.fontWeight = '500';\n  stackTitle.style.lineHeight = '1.3';\n  stackTitle.style.margin = '0 0 0.5rem';\n\n  const stackContainer = document.createElement('div');\n  stackContainer.style.fontSize = '0.8125rem';\n  stackContainer.style.lineHeight = '1.3';\n  stackContainer.style.whiteSpace = 'pre-wrap';\n\n  let errorStacks;\n  try {\n    errorStacks = ErrorStackParser.parse(props.error);\n  } catch (e) {\n    errorStacks = [];\n    stackContainer.innerHTML = 'No stack trace is available for this error!';\n  }\n\n  for (let i = 0; i < Math.min(errorStacks.length, 10); i += 1) {\n    const currentStack = errorStacks[i];\n\n    const functionName = document.createElement('code');\n    functionName.innerHTML = '&emsp;' + currentStack.functionName || 0;\n    functionName.style.color = '#' + theme.yellow;\n    functionName.style.fontFamily = [\n      '\"Operator Mono SSm\"',\n      '\"Operator Mono\"',\n      '\"Fira Code Retina\"',\n      '\"Fira Code\"',\n      '\"FiraCode-Retina\"',\n      '\"Andale Mono\"',\n      '\"Lucida Console\"',\n      'Menlo',\n      'Consolas',\n      'Monaco',\n      'monospace',\n    ].join(', ');\n\n    const fileName = document.createElement('div');\n    fileName.innerHTML =\n      '&emsp;&emsp;' +\n      formatFilename(currentStack.fileName) +\n      ':' +\n      currentStack.lineNumber +\n      ':' +\n      currentStack.columnNumber;\n    fileName.style.color = '#' + theme.white;\n    fileName.style.fontSize = '0.6875rem';\n    fileName.style.marginBottom = '0.25rem';\n\n    stackContainer.appendChild(functionName);\n    stackContainer.appendChild(fileName);\n  }\n\n  root.appendChild(stackTitle);\n  root.appendChild(stackContainer);\n}\n\nmodule.exports = RuntimeErrorStack;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorStack.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js ***!
  \****************************************************************************************/
/***/ ((module) => {

eval("/**\n * @typedef {Object} SpacerProps\n * @property {string} space\n */\n\n/**\n * An empty element to add spacing manually.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {SpacerProps} props\n * @returns {void}\n */\nfunction Spacer(document, root, props) {\n  const spacer = document.createElement('div');\n  spacer.style.paddingBottom = props.space;\n  root.appendChild(spacer);\n}\n\nmodule.exports = Spacer;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/CompileErrorContainer.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/CompileErrorContainer.js ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const CompileErrorTrace = __webpack_require__(/*! ../components/CompileErrorTrace */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/CompileErrorTrace.js\");\nconst PageHeader = __webpack_require__(/*! ../components/PageHeader */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js\");\nconst Spacer = __webpack_require__(/*! ../components/Spacer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js\");\n\n/**\n * @typedef {Object} CompileErrorContainerProps\n * @property {string} errorMessage\n */\n\n/**\n * A container to render Webpack compilation error messages with source trace.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {CompileErrorContainerProps} props\n * @returns {void}\n */\nfunction CompileErrorContainer(document, root, props) {\n  PageHeader(document, root, {\n    title: 'Failed to compile.',\n  });\n  CompileErrorTrace(document, root, { errorMessage: props.errorMessage });\n  Spacer(document, root, { space: '1rem' });\n}\n\nmodule.exports = CompileErrorContainer;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/CompileErrorContainer.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/RuntimeErrorContainer.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/RuntimeErrorContainer.js ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PageHeader = __webpack_require__(/*! ../components/PageHeader */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js\");\nconst RuntimeErrorStack = __webpack_require__(/*! ../components/RuntimeErrorStack */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorStack.js\");\nconst Spacer = __webpack_require__(/*! ../components/Spacer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js\");\n\n/**\n * @typedef {Object} RuntimeErrorContainerProps\n * @property {Error} currentError\n */\n\n/**\n * A container to render runtime error messages with stack trace.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {RuntimeErrorContainerProps} props\n * @returns {void}\n */\nfunction RuntimeErrorContainer(document, root, props) {\n  PageHeader(document, root, {\n    message: props.currentError.message,\n    title: props.currentError.name,\n    topOffset: '2.5rem',\n  });\n  RuntimeErrorStack(document, root, {\n    error: props.currentError,\n  });\n  Spacer(document, root, { space: '1rem' });\n}\n\nmodule.exports = RuntimeErrorContainer;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/RuntimeErrorContainer.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const RuntimeErrorFooter = __webpack_require__(/*! ./components/RuntimeErrorFooter */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorFooter.js\");\nconst RuntimeErrorHeader = __webpack_require__(/*! ./components/RuntimeErrorHeader */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorHeader.js\");\nconst CompileErrorContainer = __webpack_require__(/*! ./containers/CompileErrorContainer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/CompileErrorContainer.js\");\nconst RuntimeErrorContainer = __webpack_require__(/*! ./containers/RuntimeErrorContainer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/RuntimeErrorContainer.js\");\nconst theme = __webpack_require__(/*! ./theme */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js\");\nconst debounce = __webpack_require__(/*! ./utils/debounce */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/debounce.js\");\nconst removeAllChildren = __webpack_require__(/*! ./utils/removeAllChildren */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/removeAllChildren.js\");\n\n/**\n * @callback RenderFn\n * @returns {void}\n */\n\n/* ===== Cached elements for DOM manipulations ===== */\n/**\n * The iframe that contains the overlay.\n * @type {HTMLIFrameElement}\n */\nlet iframeRoot = null;\n/**\n * The document object from the iframe root, used to create and render elements.\n * @type {Document}\n */\nlet rootDocument = null;\n/**\n * The root div elements will attach to.\n * @type {HTMLDivElement}\n */\nlet root = null;\n/**\n * A Cached function to allow deferred render.\n * @type {RenderFn | null}\n */\nlet scheduledRenderFn = null;\n\n/* ===== Overlay State ===== */\n/**\n * The latest error message from Webpack compilation.\n * @type {string}\n */\nlet currentCompileErrorMessage = '';\n/**\n * Index of the error currently shown by the overlay.\n * @type {number}\n */\nlet currentRuntimeErrorIndex = 0;\n/**\n * The latest runtime error objects.\n * @type {Error[]}\n */\nlet currentRuntimeErrors = [];\n/**\n * The render mode the overlay is currently in.\n * @type {'compileError' | 'runtimeError' | null}\n */\nlet currentMode = null;\n\n/**\n * @typedef {Object} IframeProps\n * @property {function(): void} onIframeLoad\n */\n\n/**\n * Creates the main `iframe` the overlay will attach to.\n * Accepts a callback to be ran after iframe is initialized.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {IframeProps} props\n * @returns {HTMLIFrameElement}\n */\nfunction IframeRoot(document, root, props) {\n  const iframe = document.createElement('iframe');\n  iframe.id = 'react-refresh-overlay';\n  iframe.src = 'about:blank';\n\n  iframe.style.border = 'none';\n  iframe.style.height = '100vh';\n  iframe.style.left = '0';\n  iframe.style.position = 'fixed';\n  iframe.style.top = '0';\n  iframe.style.width = '100vw';\n  iframe.style.zIndex = '2147483647';\n  iframe.addEventListener('load', function onLoad() {\n    // Reset margin of iframe body\n    iframe.contentDocument.body.style.margin = '0';\n    props.onIframeLoad();\n  });\n\n  // We skip mounting and returns as we need to ensure\n  // the load event is fired after we setup the global variable\n  return iframe;\n}\n\n/**\n * Creates the main `div` element for the overlay to render.\n * @param {Document} document\n * @param {HTMLElement} root\n * @returns {HTMLDivElement}\n */\nfunction OverlayRoot(document, root) {\n  const div = document.createElement('div');\n  div.id = 'react-refresh-overlay-error';\n\n  // Style the contents container\n  div.style.backgroundColor = '#' + theme.grey;\n  div.style.boxSizing = 'border-box';\n  div.style.color = '#' + theme.white;\n  div.style.fontFamily = [\n    '-apple-system',\n    'BlinkMacSystemFont',\n    '\"Segoe UI\"',\n    '\"Helvetica Neue\"',\n    'Helvetica',\n    'Arial',\n    'sans-serif',\n    '\"Apple Color Emoji\"',\n    '\"Segoe UI Emoji\"',\n    'Segoe UI Symbol',\n  ].join(', ');\n  div.style.fontSize = '0.875rem';\n  div.style.height = '100vh';\n  div.style.lineHeight = '1.3';\n  div.style.overflow = 'auto';\n  div.style.padding = '1rem 1.5rem 0';\n  div.style.width = '100vw';\n\n  root.appendChild(div);\n  return div;\n}\n\n/**\n * Ensures the iframe root and the overlay root are both initialized before render.\n * If check fails, render will be deferred until both roots are initialized.\n * @param {RenderFn} renderFn A function that triggers a DOM render.\n * @returns {void}\n */\nfunction ensureRootExists(renderFn) {\n  if (root) {\n    // Overlay root is ready, we can render right away.\n    renderFn();\n    return;\n  }\n\n  // Creating an iframe may be asynchronous so we'll defer render.\n  // In case of multiple calls, function from the last call will be used.\n  scheduledRenderFn = renderFn;\n\n  if (iframeRoot) {\n    // Iframe is already ready, it will fire the load event.\n    return;\n  }\n\n  // Create the iframe root, and, the overlay root inside it when it is ready.\n  iframeRoot = IframeRoot(document, document.body, {\n    onIframeLoad: function onIframeLoad() {\n      rootDocument = iframeRoot.contentDocument;\n      root = OverlayRoot(rootDocument, rootDocument.body);\n      scheduledRenderFn();\n    },\n  });\n\n  // We have to mount here to ensure `iframeRoot` is set when `onIframeLoad` fires.\n  // This is because onIframeLoad() will be called synchronously\n  // or asynchronously depending on the browser.\n  document.body.appendChild(iframeRoot);\n}\n\n/**\n * Creates the main `div` element for the overlay to render.\n * @returns {void}\n */\nfunction render() {\n  ensureRootExists(function () {\n    const currentFocus = rootDocument.activeElement;\n    let currentFocusId;\n    if (currentFocus.localName === 'button' && currentFocus.id) {\n      currentFocusId = currentFocus.id;\n    }\n\n    removeAllChildren(root);\n\n    if (currentCompileErrorMessage) {\n      currentMode = 'compileError';\n\n      CompileErrorContainer(rootDocument, root, {\n        errorMessage: currentCompileErrorMessage,\n      });\n    } else if (currentRuntimeErrors.length) {\n      currentMode = 'runtimeError';\n\n      RuntimeErrorHeader(rootDocument, root, {\n        currentErrorIndex: currentRuntimeErrorIndex,\n        totalErrors: currentRuntimeErrors.length,\n      });\n      RuntimeErrorContainer(rootDocument, root, {\n        currentError: currentRuntimeErrors[currentRuntimeErrorIndex],\n      });\n      RuntimeErrorFooter(rootDocument, root, {\n        initialFocus: currentFocusId,\n        multiple: currentRuntimeErrors.length > 1,\n        onClickCloseButton: function onClose() {\n          clearRuntimeErrors();\n        },\n        onClickNextButton: function onNext() {\n          if (currentRuntimeErrorIndex === currentRuntimeErrors.length - 1) {\n            return;\n          }\n          currentRuntimeErrorIndex += 1;\n          ensureRootExists(render);\n        },\n        onClickPrevButton: function onPrev() {\n          if (currentRuntimeErrorIndex === 0) {\n            return;\n          }\n          currentRuntimeErrorIndex -= 1;\n          ensureRootExists(render);\n        },\n      });\n    }\n  });\n}\n\n/**\n * Destroys the state of the overlay.\n * @returns {void}\n */\nfunction cleanup() {\n  // Clean up and reset all internal state.\n  document.body.removeChild(iframeRoot);\n  scheduledRenderFn = null;\n  root = null;\n  iframeRoot = null;\n}\n\n/**\n * Clears Webpack compilation errors and dismisses the compile error overlay.\n * @returns {void}\n */\nfunction clearCompileError() {\n  if (!root || currentMode !== 'compileError') {\n    return;\n  }\n\n  currentCompileErrorMessage = '';\n  currentMode = null;\n  cleanup();\n}\n\n/**\n * Clears runtime error records and dismisses the runtime error overlay.\n * @param {boolean} [dismissOverlay] Whether to dismiss the overlay or not.\n * @returns {void}\n */\nfunction clearRuntimeErrors(dismissOverlay) {\n  if (!root || currentMode !== 'runtimeError') {\n    return;\n  }\n\n  currentRuntimeErrorIndex = 0;\n  currentRuntimeErrors = [];\n\n  if (typeof dismissOverlay === 'undefined' || dismissOverlay) {\n    currentMode = null;\n    cleanup();\n  }\n}\n\n/**\n * Shows the compile error overlay with the specific Webpack error message.\n * @param {string} message\n * @returns {void}\n */\nfunction showCompileError(message) {\n  if (!message) {\n    return;\n  }\n\n  currentCompileErrorMessage = message;\n\n  render();\n}\n\n/**\n * Shows the runtime error overlay with the specific error records.\n * @param {Error[]} errors\n * @returns {void}\n */\nfunction showRuntimeErrors(errors) {\n  if (!errors || !errors.length) {\n    return;\n  }\n\n  currentRuntimeErrors = errors;\n\n  render();\n}\n\n/**\n * The debounced version of `showRuntimeErrors` to prevent frequent renders\n * due to rapid firing listeners.\n * @param {Error[]} errors\n * @returns {void}\n */\nconst debouncedShowRuntimeErrors = debounce(showRuntimeErrors, 30);\n\n/**\n * Detects if an error is a Webpack compilation error.\n * @param {Error} error The error of interest.\n * @returns {boolean} If the error is a Webpack compilation error.\n */\nfunction isWebpackCompileError(error) {\n  return /Module [A-z ]+\\(from/.test(error.message) || /Cannot find module/.test(error.message);\n}\n\n/**\n * Handles runtime error contexts captured with EventListeners.\n * Integrates with a runtime error overlay.\n * @param {Error} error A valid error object.\n * @returns {void}\n */\nfunction handleRuntimeError(error) {\n  if (error && !isWebpackCompileError(error) && currentRuntimeErrors.indexOf(error) === -1) {\n    currentRuntimeErrors = currentRuntimeErrors.concat(error);\n  }\n  debouncedShowRuntimeErrors(currentRuntimeErrors);\n}\n\nmodule.exports = Object.freeze({\n  clearCompileError: clearCompileError,\n  clearRuntimeErrors: clearRuntimeErrors,\n  handleRuntimeError: handleRuntimeError,\n  showCompileError: showCompileError,\n  showRuntimeErrors: showRuntimeErrors,\n});\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("/**\n * @typedef {Object} Theme\n * @property {string[]} reset\n * @property {string} black\n * @property {string} red\n * @property {string} green\n * @property {string} yellow\n * @property {string} blue\n * @property {string} magenta\n * @property {string} cyan\n * @property {string} white\n * @property {string} lightgrey\n * @property {string} darkgrey\n * @property {string} grey\n * @property {string} dimgrey\n */\n\n/**\n * @type {Theme} theme\n * A collection of colors to be used by the overlay.\n * Partially adopted from Tomorrow Night Bright.\n */\nconst theme = {\n  reset: ['transparent', 'transparent'],\n  black: '000000',\n  red: 'D34F56',\n  green: 'B9C954',\n  yellow: 'E6C452',\n  blue: '7CA7D8',\n  magenta: 'C299D6',\n  cyan: '73BFB1',\n  white: 'FFFFFF',\n  lightgrey: 'C7C7C7',\n  darkgrey: 'A9A9A9',\n  grey: '474747',\n  dimgrey: '343434',\n};\n\nmodule.exports = theme;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/debounce.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/debounce.js ***!
  \*************************************************************************************/
/***/ ((module) => {

eval("/**\n * Debounce a function to delay invoking until wait (ms) have elapsed since the last invocation.\n * @param {function(...*): *} fn The function to be debounced.\n * @param {number} wait Milliseconds to wait before invoking again.\n * @return {function(...*): void} The debounced function.\n */\nfunction debounce(fn, wait) {\n  /**\n   * A cached setTimeout handler.\n   * @type {number | undefined}\n   */\n  let timer;\n\n  /**\n   * @returns {void}\n   */\n  function debounced() {\n    const context = this;\n    const args = arguments;\n\n    clearTimeout(timer);\n    timer = setTimeout(function () {\n      return fn.apply(context, args);\n    }, wait);\n  }\n\n  return debounced;\n}\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/debounce.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/formatFilename.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/formatFilename.js ***!
  \*******************************************************************************************/
/***/ ((module) => {

eval("/**\n * Prettify a filename from error stacks into the desired format.\n * @param {string} filename The filename to be formatted.\n * @returns {string} The formatted filename.\n */\nfunction formatFilename(filename) {\n  // Strip away protocol and domain for compiled files\n  const htmlMatch = /^https?:\\/\\/(.*)\\/(.*)/.exec(filename);\n  if (htmlMatch && htmlMatch[1] && htmlMatch[2]) {\n    return htmlMatch[2];\n  }\n\n  // Strip everything before the first directory for source files\n  const sourceMatch = /\\/.*?([^./]+[/|\\\\].*)$/.exec(filename);\n  if (sourceMatch && sourceMatch[1]) {\n    return sourceMatch[1].replace(/\\?$/, '');\n  }\n\n  // Unknown filename type, use it as is\n  return filename;\n}\n\nmodule.exports = formatFilename;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/formatFilename.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/removeAllChildren.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/removeAllChildren.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/**\n * Remove all children of an element.\n * @param {HTMLElement} element A valid HTML element.\n * @param {number} [skip] Number of elements to skip removing.\n * @returns {void}\n */\nfunction removeAllChildren(element, skip) {\n  /** @type {Node[]} */\n  const childList = Array.prototype.slice.call(\n    element.childNodes,\n    typeof skip !== 'undefined' ? skip : 0\n  );\n\n  for (let i = 0; i < childList.length; i += 1) {\n    element.removeChild(childList[i]);\n  }\n}\n\nmodule.exports = removeAllChildren;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/removeAllChildren.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WDSSocket.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WDSSocket.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* global __webpack_dev_server_client__ */\n\nconst url = __webpack_require__(/*! native-url */ \"native-url\");\nconst getSocketUrlParts = __webpack_require__(/*! ./utils/getSocketUrlParts */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getSocketUrlParts.js\");\n\n/**\n * Initializes a socket server for HMR for webpack-dev-server.\n * @param {function(*): void} messageHandler A handler to consume Webpack compilation messages.\n * @param {string} [resourceQuery] Webpack's `__resourceQuery` string.\n * @returns {void}\n */\nfunction initWDSSocket(messageHandler, resourceQuery) {\n  if (typeof __webpack_dev_server_client__ !== 'undefined') {\n    const SocketClient = __webpack_dev_server_client__;\n\n    const urlParts = getSocketUrlParts(resourceQuery);\n    const connection = new SocketClient(url.format(urlParts));\n\n    connection.onMessage(function onSocketMessage(data) {\n      const message = JSON.parse(data);\n      messageHandler(message);\n    });\n  }\n}\n\nmodule.exports = initWDSSocket;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WDSSocket.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getCurrentScriptSource.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getCurrentScriptSource.js ***!
  \***************************************************************************************************/
/***/ ((module) => {

eval("/**\n * Gets the source (i.e. host) of the script currently running.\n * @returns {string}\n */\nfunction getCurrentScriptSource() {\n  // `document.currentScript` is the most accurate way to get the current running script,\n  // but is not supported in all browsers (most notably, IE).\n  if (document.currentScript) {\n    return document.currentScript.getAttribute('src');\n  }\n\n  // Fallback to getting all scripts running in the document.\n  const scriptElements = document.scripts || [];\n  const currentScript = scriptElements[scriptElements.length - 1];\n  if (currentScript) {\n    return currentScript.getAttribute('src');\n  }\n\n  throw new Error('[React Refresh] Failed to get current script source!');\n}\n\nmodule.exports = getCurrentScriptSource;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getCurrentScriptSource.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getSocketUrlParts.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getSocketUrlParts.js ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const url = __webpack_require__(/*! native-url */ \"native-url\");\nconst getCurrentScriptSource = __webpack_require__(/*! ./getCurrentScriptSource */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getCurrentScriptSource.js\");\nconst parseQuery = __webpack_require__(/*! ./parseQuery */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/parseQuery.js\");\n\n/**\n * @typedef {Object} SocketUrlParts\n * @property {string} [auth]\n * @property {string} [hostname]\n * @property {string} [protocol]\n * @property {string} [pathname]\n * @property {string} [port]\n */\n\n/**\n * Parse current location and Webpack's `__resourceQuery` into parts that can create a valid socket URL.\n * @param {string} [resourceQuery] The Webpack `__resourceQuery` string.\n * @returns {SocketUrlParts} The parsed URL parts.\n * @see https://webpack.js.org/api/module-variables/#__resourcequery-webpack-specific\n */\nfunction getSocketUrlParts(resourceQuery) {\n  const scriptSource = getCurrentScriptSource();\n  const urlParts = url.parse(scriptSource);\n\n  /** @type {string | undefined} */\n  let auth;\n  let hostname = urlParts.hostname;\n  let protocol = urlParts.protocol;\n  let pathname = '/sockjs-node'; // This is hard-coded in WDS\n  let port = urlParts.port;\n\n  // FIXME:\n  // This is a hack to work-around `native-url`'s parse method,\n  // which filters out falsy values when concatenating the `auth` string.\n  // In reality, we need to check for both values to correctly inject them.\n  // Ref: GoogleChromeLabs/native-url#32\n  // The placeholder `baseURL` is to allow parsing of relative paths,\n  // and will have no effect if `scriptSource` is a proper URL.\n  const authUrlParts = new URL(scriptSource, 'http://foo.bar');\n  // Parse authentication credentials in case we need them\n  if (authUrlParts.username) {\n    auth = authUrlParts.username;\n\n    // Since HTTP basic authentication does not allow empty username,\n    // we only include password if the username is not empty.\n    if (authUrlParts.password) {\n      // Result: <username>:<password>\n      auth = auth.concat(':', authUrlParts.password);\n    }\n  }\n\n  // Check for IPv4 and IPv6 host addresses that corresponds to `any`/`empty`.\n  // This is important because `hostname` can be empty for some hosts,\n  // such as `about:blank` or `file://` URLs.\n  const isEmptyHostname =\n    urlParts.hostname === '0.0.0.0' || urlParts.hostname === '::' || urlParts.hostname === null;\n\n  // We only re-assign the hostname if we are using HTTP/HTTPS protocols\n  if (\n    isEmptyHostname &&\n    window.location.hostname &&\n    window.location.protocol.indexOf('http') !== -1\n  ) {\n    hostname = window.location.hostname;\n  }\n\n  // We only re-assign `protocol` when `hostname` is available and is empty,\n  // since otherwise we risk creating an invalid URL.\n  // We also do this when `https` is used as it mandates the use of secure sockets.\n  if (hostname && (isEmptyHostname || window.location.protocol === 'https:')) {\n    protocol = window.location.protocol;\n  }\n\n  // We only re-assign port when it is not available or `empty`\n  if (!port || port === '0') {\n    port = window.location.port;\n  }\n\n  // If the resource query is available,\n  // parse it and overwrite everything we received from the script host.\n  const parsedQuery = parseQuery(resourceQuery || '');\n  hostname = parsedQuery.sockHost || hostname;\n  pathname = parsedQuery.sockPath || pathname;\n  port = parsedQuery.sockPort || port;\n\n  return {\n    auth: auth,\n    hostname: hostname,\n    pathname: pathname,\n    protocol: protocol,\n    port: port,\n  };\n}\n\nmodule.exports = getSocketUrlParts;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getSocketUrlParts.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/parseQuery.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/parseQuery.js ***!
  \***************************************************************************************/
/***/ ((module) => {

eval("/**\n * Parse a query string into an object.\n * @param {string} [querystring] The query string.\n * @returns {Record<string, string>} The parsed query object.\n */\nfunction parseQuery(querystring) {\n  let query = '';\n  if (typeof querystring === 'string') {\n    query = querystring;\n  }\n\n  /**\n   * Transform query strings such as `?foo1=bar1&foo2=bar2`:\n   * - remove `?` from the start\n   * - split with `&`\n   * - split pairs with `=`\n   * The resulting format will be { foo1: 'bar1', foo2: 'bar2' }\n   */\n  return query\n    .replace(/^\\?/, '')\n    .split('&')\n    .reduce(function (acc, entry) {\n      const pair = entry.split('=');\n      // Add all non-empty entries to the accumulated object\n      if (pair[0]) {\n        acc[pair[0]] = pair[1];\n      }\n\n      return acc;\n    }, {});\n}\n\nmodule.exports = parseQuery;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/parseQuery.js?");

/***/ }),

/***/ "./src/client/components/Card.js":
/*!***************************************!*\
  !*** ./src/client/components/Card.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\nconst Card = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `slideshow-card ${props.wrapperClasses}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: `card-image ${props.imageClasses}`,\n    src: __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*$\")(\"./\" + props.src),\n    alt: props.name\n  }), props.description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card-description\"\n  }, props.description) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null));\n};\n\n_c = Card;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Card\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Card.js?");

/***/ }),

/***/ "./src/client/components/ContactPage.js":
/*!**********************************************!*\
  !*** ./src/client/components/ContactPage.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\nconst ContactPage = () => {\n  _s();\n\n  const [formData, updateData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    firstName: '',\n    lastName: '',\n    email: '',\n    message: ''\n  }); //look up curried functions to understand this\n\n  const handleChange = name => event => {\n    console.log(`updated value: ${name}: ${event.target.value}`);\n    updateData({ ...formData,\n      [name]: event.target.value\n    });\n  };\n\n  let fields = {};\n\n  const formCollector = async e => {\n    try {\n      e.preventDefault();\n      console.log('form collector is running');\n      let toSend = {\n        firstName: formData[\"firstName\"],\n        lastName: formData[\"lastName\"],\n        email: formData[\"email\"],\n        message: formData[\"message\"]\n      };\n      console.log('tosend: ', toSend);\n\n      try {\n        let sender = fetch('/sendcontact', {\n          method: \"POST\",\n          headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(toSend)\n        });\n        return await sender;\n      } catch (err) {\n        console.log('error: ' + err);\n      }\n    } catch (err) {\n      console.log('there was an error: ', err);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"contact-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"form\", {\n    className: \"contact-form\",\n    onSubmit: formCollector\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"contact-banner\"\n  }, \"Send us a message\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"contact-info-section\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h3\", {\n    className: \"form-label\"\n  }, \"Name\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"name-input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"another-name-class\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"first-name-text\",\n    name: \"firstName\",\n    onChange: handleChange('firstName')\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n    htmlFor: \"first-name\",\n    className: \"sub-label\"\n  }, \"First\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"another-name-class\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"last-name-text\",\n    name: \"lastName\",\n    onChange: handleChange(\"lastName\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n    htmlFor: \"last-name\",\n    className: \"sub-label\"\n  }, \"Last\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n    htmlFor: \"email\",\n    className: \"form-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h3\", null, \"Email\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    id: \"email-text\",\n    onChange: handleChange(\"email\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n    htmlFor: \"message\",\n    className: \"form-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h3\", null, \"Comment or Message\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"textarea\", {\n    name: \"message\",\n    id: \"message-text\",\n    rows: \"10\",\n    cols: \"30\",\n    onChange: handleChange(\"message\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    type: \"submit\"\n  }, \"Submit\")));\n};\n\n_s(ContactPage, \"aJ6xU6UiRN7zzQTU9A6KcuWJno4=\");\n\n_c = ContactPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"ContactPage\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/ContactPage.js?");

/***/ }),

/***/ "./src/client/components/Events.js":
/*!*****************************************!*\
  !*** ./src/client/components/Events.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/client/components/Card.js\");\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* harmony import */ var _Slideshow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slideshow */ \"./src/client/components/Slideshow.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\n\n\n\nconst Events = props => {\n  let currentEvent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n    src: _data__WEBPACK_IMPORTED_MODULE_1__.eventCards[0].src,\n    name: _data__WEBPACK_IMPORTED_MODULE_1__.eventCards[0].name,\n    description: _data__WEBPACK_IMPORTED_MODULE_1__.eventCards[0].description,\n    wrapperClasses: 'current-event',\n    key: 0\n  });\n  let current = 'true';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"events-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_3__.default, {\n    extraStyles: \"page-banner\",\n    title: \"EVENTS\"\n  }), current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"upcoming-events\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Upcoming Events\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"vertical-card-wrapper\"\n  }, currentEvent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"film-freeway-button\"\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"previous-events\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Previous Events\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"horizontal-card-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Slideshow__WEBPACK_IMPORTED_MODULE_4__.default, {\n    cards: _data__WEBPACK_IMPORTED_MODULE_1__.eventCards.slice(1),\n    wrapperClasses: \"project-slideshow\"\n  }))));\n};\n\n_c = Events;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Events\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Events.js?");

/***/ }),

/***/ "./src/client/components/Footer.js":
/*!*****************************************!*\
  !*** ./src/client/components/Footer.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SocialBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialBar */ \"./src/client/components/SocialBar.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\nconst Footer = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SocialBar__WEBPACK_IMPORTED_MODULE_1__.default, {\n    facebook: props.facebook,\n    instagram: props.instagram,\n    youtube: props.youtube,\n    rss: props.rss\n  });\n};\n\n_c = Footer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Footer\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Footer.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HeaderElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderElement */ \"./src/client/components/HeaderElement.js\");\n/* harmony import */ var _assets_mwLogoFix1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/mwLogoFix1.png */ \"./src/assets/mwLogoFix1.png\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\nconst Header = props => {\n  _s();\n\n  const [menuVis, setVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setVisibility(false);\n\n    if (window.matchMedia(\"(max-width: 500px)\").matches) {\n      console.log('we are on mobile');\n      const headerElements = document.getElementsByClassName('header-element');\n\n      for (let el of headerElements) {\n        el.addEventListener('click', changeVisibility);\n      }\n    } else {\n      console.log('we are on a non-mobile device');\n    }\n  }, []);\n  let vis = true;\n\n  const changeVisibility = () => {\n    const menu = document.getElementsByClassName('menu-list')[0];\n    menu.style.display = vis ? 'flex' : 'none';\n    vis = !vis;\n    console.log('vis: ', vis);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"/\",\n    className: \"header-banner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _assets_mwLogoFix1_png__WEBPACK_IMPORTED_MODULE_2__,\n    alt: \"midnight west logo\",\n    className: \"logo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"dropdownArrow\",\n    onClick: changeVisibility\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowDropDown, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"menu-list\"\n  }, props.headerData.map((element, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderElement__WEBPACK_IMPORTED_MODULE_1__.default, {\n    title: element.body,\n    link: element.link,\n    key: index\n  }))));\n};\n\n_s(Header, \"CBomYvifVj5nTeySd/jZVpcWKKI=\");\n\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Header\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/components/HeaderElement.js":
/*!************************************************!*\
  !*** ./src/client/components/HeaderElement.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\nconst HeaderElement = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `header-element`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n    to: props.link\n  }, props.title));\n};\n\n_c = HeaderElement;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderElement);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"HeaderElement\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/HeaderElement.js?");

/***/ }),

/***/ "./src/client/components/Homepage.js":
/*!*******************************************!*\
  !*** ./src/client/components/Homepage.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* harmony import */ var _PageSubSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageSubSection */ \"./src/client/components/PageSubSection.js\");\n/* harmony import */ var _Slideshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slideshow */ \"./src/client/components/Slideshow.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ \"./src/client/components/Card.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\n\n\n\n\n\nconst Homepage = props => {\n  let events = _data__WEBPACK_IMPORTED_MODULE_5__.eventCards.map((card, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"featured-image-homepage current-event\",\n    src: __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*$\")(\"./\" + _data__WEBPACK_IMPORTED_MODULE_5__.eventCards[0].src)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"film-freeway-button\",\n    href: _data__WEBPACK_IMPORTED_MODULE_5__.sponsors[0].link\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"film-freeway-image\",\n    src: __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*$\")(\"./\" + _data__WEBPACK_IMPORTED_MODULE_5__.sponsors[0].logo),\n    alt: _data__WEBPACK_IMPORTED_MODULE_5__.sponsors[0].name\n  }))));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__.default, {\n    title: \"MIDNIGHT WEST PRODUCTIONS\",\n    extraStyles: \"companyBanner\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__.default, {\n    title: \"EVENTS\"\n  }), _data__WEBPACK_IMPORTED_MODULE_5__.eventCards ? events[0] : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSubSection__WEBPACK_IMPORTED_MODULE_2__.default, {\n    body: \"More events in the works\",\n    extraStyles: \"sectionSubBanner\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__.default, {\n    title: \"Projects\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSubSection__WEBPACK_IMPORTED_MODULE_2__.default, {\n    extraStyles: \"slide-section\",\n    psExtra: \"slide-extra\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Slideshow__WEBPACK_IMPORTED_MODULE_3__.default, {\n    cards: _data__WEBPACK_IMPORTED_MODULE_5__.projectCards,\n    extraStyles: \"projectSlideshow\"\n  })));\n};\n\n_c = Homepage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Homepage\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Homepage.js?");

/***/ }),

/***/ "./src/client/components/MainRouter.js":
/*!*********************************************!*\
  !*** ./src/client/components/MainRouter.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Homepage */ \"./src/client/components/Homepage.js\");\n/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services */ \"./src/client/components/Services.js\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projects */ \"./src/client/components/Projects.js\");\n/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Events */ \"./src/client/components/Events.js\");\n/* harmony import */ var _Sponsors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sponsors */ \"./src/client/components/Sponsors.js\");\n/* harmony import */ var _ContactPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContactPage */ \"./src/client/components/ContactPage.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header */ \"./src/client/components/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer */ \"./src/client/components/Footer.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst MainRouter = () => {\n  _s();\n\n  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    headerComponents: _data__WEBPACK_IMPORTED_MODULE_8__.headerCards,\n    facebook: _data__WEBPACK_IMPORTED_MODULE_8__.social[0],\n    instagram: _data__WEBPACK_IMPORTED_MODULE_8__.social[1],\n    youtube: _data__WEBPACK_IMPORTED_MODULE_8__.social[2],\n    rss: 'https://anchor.fm/patrick-thurston'\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_9__.default, {\n    headerData: state.headerComponents\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\",\n    component: _Homepage__WEBPACK_IMPORTED_MODULE_2__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/events\",\n    component: _Events__WEBPACK_IMPORTED_MODULE_5__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/projects\",\n    component: _Projects__WEBPACK_IMPORTED_MODULE_4__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/services\",\n    component: _Services__WEBPACK_IMPORTED_MODULE_3__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/sponsors\",\n    component: _Sponsors__WEBPACK_IMPORTED_MODULE_6__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/contact\",\n    component: _ContactPage__WEBPACK_IMPORTED_MODULE_7__.default\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {\n    facebook: state.facebook,\n    instagram: state.instagram,\n    youtube: state.youtube,\n    rss: state.rss\n  }));\n};\n\n_s(MainRouter, \"GtXmfE8Vg0uCYiwAJInqYzUQaHE=\");\n\n_c = MainRouter;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainRouter);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"MainRouter\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/MainRouter.js?");

/***/ }),

/***/ "./src/client/components/PageSection.js":
/*!**********************************************!*\
  !*** ./src/client/components/PageSection.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\nconst PageSection = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `page-section ${props.extraStyles}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"ps-title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, props.title)));\n};\n\n_c = PageSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSection);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"PageSection\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/PageSection.js?");

/***/ }),

/***/ "./src/client/components/PageSubSection.js":
/*!*************************************************!*\
  !*** ./src/client/components/PageSubSection.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\nconst PageSubSection = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `page-section page-sub ${props.extraStyles}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `ps-body ${props.psExtra}`\n  }, props.body), props.children);\n};\n\n_c = PageSubSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSubSection);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"PageSubSection\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/PageSubSection.js?");

/***/ }),

/***/ "./src/client/components/Projects.js":
/*!*******************************************!*\
  !*** ./src/client/components/Projects.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/client/components/Card.js\");\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* harmony import */ var _Slideshow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slideshow */ \"./src/client/components/Slideshow.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\n\n\n\nconst Projects = props => {\n  let currentProject = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n    src: _data__WEBPACK_IMPORTED_MODULE_1__.projectCards[0].src,\n    name: _data__WEBPACK_IMPORTED_MODULE_1__.projectCards[0].name,\n    description: _data__WEBPACK_IMPORTED_MODULE_1__.projectCards[0].description,\n    wrapperClasses: 'current-project',\n    key: 0\n  });\n  let current = 'true';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"Projects-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_3__.default, {\n    extraStyles: \"page-banner\",\n    title: \"PROJECTS\"\n  }), current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"upcoming-projects\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, \"Upcoming Projects\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"vertical-card-wrapper\"\n  }, currentProject), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"film-freeway-button\"\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"previous-projects\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Previous Projects\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"horizontal-card-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Slideshow__WEBPACK_IMPORTED_MODULE_4__.default, {\n    cards: _data__WEBPACK_IMPORTED_MODULE_1__.projectCards.slice(1),\n    wrapperClasses: \"project-slideshow\"\n  }))));\n};\n\n_c = Projects;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Projects\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Projects.js?");

/***/ }),

/***/ "./src/client/components/Services.js":
/*!*******************************************!*\
  !*** ./src/client/components/Services.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\nconst Services = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__.default, {\n    extraStyles: \"page-banner\",\n    title: \"Services\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"services-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"service filming-service\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Filming\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"service-pricing\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Commercials under 2 minutes - $350\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Up to 6 hour event (weddings included) -$500\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Memorial videos unlimited pictures, digital or physical - $150\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"service editing-service\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Editing\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"service-pricing\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$100/hr\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Includes audio balance, color balance, digital copies, and up to 5 dvd or blueray copies\"))))));\n};\n\n_c = Services;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Services\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Services.js?");

/***/ }),

/***/ "./src/client/components/Slideshow.js":
/*!********************************************!*\
  !*** ./src/client/components/Slideshow.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/client/components/Card.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\nconst Slideshow = props => {\n  _s();\n\n  let [cardIndex, setCardIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  let [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  let cards = props.cards.map((card, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n    src: card.src,\n    name: card.name,\n    key: index\n  }));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setDisplay();\n  }, []);\n\n  let setDisplay = () => {\n    window.matchMedia(\"(max-width: 500px)\").matches ? setShow( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"slide-cards\"\n    }, cards[cardIndex])) : setShow( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"slide-cards\"\n    }, cards[cardIndex], \" \", cards[cardIndex + 1]));\n  };\n\n  const handleCarouselButton = direction => {\n    if (direction === -1) {\n      setCardIndex(cardIndex += direction);\n\n      if (cardIndex < 0) {\n        setCardIndex(cards.length);\n      }\n    } else if (direction === 1) {\n      setCardIndex(cardIndex += direction);\n\n      if (cardIndex > cards.length - 2) {\n        setCardIndex(-1);\n      }\n    }\n\n    console.log(cardIndex);\n    setDisplay();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"slideshow-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"slide-left slideshow-button\",\n    onClick: () => handleCarouselButton(-1)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronLeft, null)), show, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"slide-right slideshow-button\",\n    onClick: () => handleCarouselButton(1)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronRight, null)));\n};\n\n_s(Slideshow, \"3+oV0BLOWoW+upDkAklT67Vjuso=\");\n\n_c = Slideshow;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slideshow);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Slideshow\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Slideshow.js?");

/***/ }),

/***/ "./src/client/components/SocialBar.js":
/*!********************************************!*\
  !*** ./src/client/components/SocialBar.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\nconst SocialBar = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"social-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: props.facebook[\"link\"],\n    target: \"_blank\",\n    className: \"social-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.Facebook, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: props.youtube[\"link\"],\n    target: \"_blank\",\n    className: \"social-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.YouTube, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: props.instagram[\"link\"],\n    target: \"_blank\",\n    className: \"social-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.Instagram, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: props.rss,\n    target: \"_blank\",\n    className: \"social-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.RssFeed, null)));\n};\n\n_c = SocialBar;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialBar);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"SocialBar\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/SocialBar.js?");

/***/ }),

/***/ "./src/client/components/Sponsors.js":
/*!*******************************************!*\
  !*** ./src/client/components/Sponsors.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\n\nconst Sponsors = props => {\n  let sponsorList = _data__WEBPACK_IMPORTED_MODULE_2__.sponsors.map((sponsor, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"sponsor-entry\",\n    href: sponsor.link\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*$\")(\"./\" + sponsor.logo),\n    alt: sponsor.name\n  })));\n  console.log('sponsor list: ', sponsorList);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__.default, {\n    extraStyles: \"page-banner\",\n    title: \"Sponsors\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"sponsor-showcase\"\n  }, sponsorList));\n};\n\n_c = Sponsors;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sponsors);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Sponsors\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Sponsors.js?");

/***/ }),

/***/ "./src/client/components/data.js":
/*!***************************************!*\
  !*** ./src/client/components/data.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerCards\": () => (/* binding */ headerCards),\n/* harmony export */   \"social\": () => (/* binding */ social),\n/* harmony export */   \"sponsors\": () => (/* binding */ sponsors),\n/* harmony export */   \"projectCards\": () => (/* binding */ projectCards),\n/* harmony export */   \"eventCards\": () => (/* binding */ eventCards),\n/* harmony export */   \"setProjectCards\": () => (/* binding */ setProjectCards)\n/* harmony export */ });\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nconst headerCards = [{\n  \"body\": \"Events\",\n  \"link\": \"/events\"\n}, {\n  \"body\": \"Services\",\n  \"link\": \"/services\"\n}, {\n  \"body\": \"Projects\",\n  \"link\": \"/projects\"\n}, {\n  \"body\": \"Sponsors\",\n  \"link\": \"/sponsors\"\n}, {\n  \"body\": \"Contact us\",\n  \"link\": \"/contact\"\n}];\nconst social = [{\n  \"name\": \"facebook\",\n  \"link\": \"https://www.facebook.com/midnightwestproductions\"\n}, {\n  \"name\": \"instagram\",\n  \"link\": \"https://www.instagram.com/midnightwestproductions/\"\n}, {\n  \"name\": \"youtube\",\n  \"link\": \"https://www.youtube.com/channel/UC2z1byO3TP4p4akBpmEhVkw/videos\"\n}];\nconst sponsors = [{\n  \"name\": \"filmfreeway\",\n  \"link\": \"https://filmfreeway.com/MidnightWestFest\",\n  \"logo\": 'filmfreeway-logo.webp',\n  'key': 1\n}];\nconst projectCards = [{\n  \"name\": 'mwf2021',\n  \"src\": \"mwf2021.webp\"\n}, {\n  \"name\": \"Mothers and Sons\",\n  \"src\": \"midnightmothers.jpg\"\n}, {\n  \"name\": \"It's a wonderful life\",\n  \"src\": \"midnightwonder.jpg\"\n}, {\n  \"name\": \"Midnight Zombie Fest\",\n  \"src\": \"midnightZfest.jpg\"\n}, {\n  \"name\": \"summer rage\",\n  \"src\": \"summer_rage.jpg\"\n}];\nconst eventCards = [{\n  \"name\": 'mwf2021',\n  \"src\": \"mwf2021.webp\",\n  'description': 'Midnight West Fest is entering it’s third year, and we want your submissions! This year, we’ll be at The Historic Atlas Theatre for three days of independent film celebration! Friday night will kick off with live music, followed by an evening of comedy submissions. Saturday starts with High-Noon for our drama and action submissions, rounding out with another live preformance. From 6 that night until 3 in the morning with after dark set aside for our horror and grindhouse fans. Sunday will be family day, featuring our G and PG equivalent submissions as well as interactive filmmaking workshops for ages 6-14. Located in the heart of Downtown Cheyenne, our festival is mere blocks from a number of local restaurants and bars, as well as many of the historic and cultural landmarks of our Capitol City. 15% of all ticket sales will be donated to Cheyenne Little Theatre Players for the upkeep and maintenance of The Historic Atlas Theatre.'\n}, {\n  \"name\": 'mwf2021',\n  \"src\": \"mwf2021.webp\"\n}, {\n  \"name\": \"Midnight Zombie Fest\",\n  \"src\": \"midnightZfest.jpg\"\n}, {\n  \"name\": \"2019 mwf\",\n  \"src\": \"heart-hand-poster.jpg\"\n}, {\n  \"name\": \"shamrocks and screams lock-in\",\n  \"src\": \"midnight-cereal-1.jpg\"\n}, {\n  \"name\": \"martial arts and murder\",\n  \"src\": \"midnight-kungfu-1.jpg\"\n}, {\n  \"name\": \"marijuana movie marathon\",\n  \"src\": \"midnight-weed.jpg\"\n}];\nconst setProjectCards = (action, card = '', name = '') => {\n  if (action === 'add') {\n    projectCards = [...projectCards, card];\n  } else if (action === 'remove') {\n    for (let c of projectCards) {\n      if (c[name] === name) {\n        projectCards.pop(c);\n      }\n    }\n  }\n};\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/data.js?");

/***/ }),

/***/ "./src/server/controllers/email.controller.js":
/*!****************************************************!*\
  !*** ./src/server/controllers/email.controller.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\nconst sendContactMail = (req, res) => {\n  const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    service: 'gmail',\n    auth: {\n      user: process.env[\"CONTACT_EMAIL\"],\n      pass: process.env[\"CONTACT_PASS\"]\n    }\n  });\n  let mailOptions = {};\n  mailOptions.from = req.body[\"from\"];\n  mailOptions.to = \"Josh.saxon@midnightwestproductions.com\";\n  mailOptions.subject = `New contact for Midnight West from ${req.body[\"firstName\"]} ${req.body[\"lastName\"]}`;\n  mailOptions.text = `\n     Name: ${req.body[\"firstName\"]} ${req.body[\"lastName\"]}\n     Email: ${req.body[\"email\"]}\n\n     Message: ${req.body[\"message\"]}`;\n  console.log('mailOptions: ', mailOptions);\n  transporter.sendMail(mailOptions, (error, info) => {\n    if (error) {\n      console.log(error);\n    } else {\n      console.log('Email sent: ', info.response);\n      alert('Email sent');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  sendContactMail\n});\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/server/controllers/email.controller.js?");

/***/ }),

/***/ "./src/server/express.js":
/*!*******************************!*\
  !*** ./src/server/express.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../template.js */ \"./template.js\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _client_styles_App_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../client/styles/App.css */ \"./src/client/styles/App.css\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _client_components_MainRouter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../client/components/MainRouter.js */ \"./src/client/components/MainRouter.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/user.routes */ \"./src/server/routes/user.routes.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst compiler = webpack__WEBPACK_IMPORTED_MODULE_12___default()((_webpack_config_client__WEBPACK_IMPORTED_MODULE_14___default()));\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst port = process.env.PORT || 3000;\nconst CURRENT_WORKING_DIR = process.cwd();\napp.use(__webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\")(compiler, {\n  publicPath: (_webpack_config_client__WEBPACK_IMPORTED_MODULE_14___default().output.publicPath)\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_15___default()(compiler));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_9___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_9___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_10___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_7___default()({\n  contentSecurityPolicy: false\n}));\napp.use(cors__WEBPACK_IMPORTED_MODULE_8___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_1___default().join(CURRENT_WORKING_DIR, 'public')));\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_1___default().join(CURRENT_WORKING_DIR, 'dist')));\napp.use(_routes_user_routes__WEBPACK_IMPORTED_MODULE_16__.default);\nconst mockResponse = {\n  foo: 'bar',\n  bar: 'foo'\n};\napp.get('/api', (req, res) => {\n  res.send(mockResponse);\n});\napp.get('*', (req, res) => {\n  console.log('request url: ', req.url);\n  const context = {};\n  const body = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_client_components_MainRouter_js__WEBPACK_IMPORTED_MODULE_13__.default, null)));\n\n  if (context.url) {\n    console.log('there was context...   redirecting');\n    return res.redirect(303, context.url);\n  }\n\n  res.status(200).send((0,_template_js__WEBPACK_IMPORTED_MODULE_5__.default)({\n    body: body\n  }));\n});\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\napp.get('/', (req, res) => {\n  console.log('test 2');\n  res.status(200).send((0,_template_js__WEBPACK_IMPORTED_MODULE_5__.default)());\n});\napp.listen(port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s', port);\n});\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/server/express.js?");

/***/ }),

/***/ "./src/server/routes/user.routes.js":
/*!******************************************!*\
  !*** ./src/server/routes/user.routes.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_email_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../controllers/email.controller */ \"./src/server/controllers/email.controller.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\nconst UserRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nUserRouter.route('/sendcontact').post(_controllers_email_controller__WEBPACK_IMPORTED_MODULE_1__.default.sendContactMail);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserRouter);\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/server/routes/user.routes.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({\n  body\n}) => {\n  return `<!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n            <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n            <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\"> \n            <title>Midnight test</title>\n            <link href=\"/dist/main.css\" type=\"text/css\" rel=\"stylesheet\">\n            \n        </head>\n        <body>\n            <div id='root'>${body}</div>\n            <div id='toRemove'> </div>\n            <script defer type\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n        \n        </html>`;\n});\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\n\nconst HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nconst MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\n\nconst ReactRefreshWebpackPlugin = __webpack_require__(/*! @pmmmwh/react-refresh-webpack-plugin */ \"@pmmmwh/react-refresh-webpack-plugin\");\n\nconst config = {\n  name: 'browser',\n  mode: 'development',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, \"src/client/main.js\")],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: \"bundle.js\",\n    publicPath: '/dist/'\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new MiniCssExtractPlugin(), new webpack.NoEmitOnErrorsPlugin(), new ReactRefreshWebpackPlugin(), new HtmlWebPackPlugin({\n    template: 'webpack-template.html'\n  })],\n  module: {\n    rules: [{\n      test: /\\.html$/i,\n      loader: \"html-loader\"\n    }, {\n      test: /\\.(png|svg|jpg|jpeg|gif|webp)$/,\n      type: 'asset',\n      exclude: /node_modules/\n    }, {\n      test: /\\.css/,\n      use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader'],\n      exclude: /node_modules/\n    }, {\n      test: /\\.(js|jsx)$/,\n      exclude: /node_modules/,\n      loader: \"babel-loader\",\n      options: {\n        plugins: [__webpack_require__(/*! react-refresh/babel */ \"react-refresh/babel\") // this line removes falsy values from the array\n        ]\n      }\n    }]\n  }\n};\nmodule.exports = config;\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./webpack.config.client.js?");

/***/ }),

/***/ "./node_modules/css-hot-loader/hotModuleReplacement.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-hot-loader/hotModuleReplacement.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var normalizeUrl = __webpack_require__(/*! normalize-url */ \"normalize-url\");\nvar srcByModuleId = Object.create(null);\nvar debounce = __webpack_require__(/*! lodash/debounce */ \"lodash/debounce\");\n\nvar noDocument = typeof document === 'undefined';\nvar forEach = Array.prototype.forEach;\n\nvar noop = function () {};\n\nvar getCurrentScriptUrl = function(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src = document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName('script');\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n    srcByModuleId[moduleId] = src;\n  }\n\n  return function(fileMap) {\n    var splitResult = /([^\\\\/]+)\\.js$/.exec(src);\n    var filename = splitResult && splitResult[1];\n    if (!filename) {\n      return [src.replace('.js', '.css')];\n    }\n    return fileMap.split(',').map(function(mapRule) {\n      var reg = new RegExp(filename + '\\\\.js$', 'g')\n      return normalizeUrl(src.replace(reg, mapRule.replace(/{fileName}/g, filename) + '.css'), { stripWWW: false });\n    });\n  };\n};\n\nfunction updateCss(el, url) {\n  if (!url) {\n    url = el.href.split('?')[0];\n  }\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n  if (!url || !(url.indexOf('.css') > -1)) return;\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n\n  newEl.isLoaded = false;\n  newEl.addEventListener('load', function () {\n    newEl.isLoaded = true;\n    newEl.parentNode.removeChild(el);\n  });\n\n  newEl.addEventListener('error', function () {\n    newEl.isLoaded = true;\n    if (newEl.parentNode.contains(el)) {\n      newEl.parentNode.removeChild(el);\n    }\n  });\n\n  newEl.href = url + '?' + Date.now();\n  // insert new <link /> right to the old one's position\n  el.parentNode.insertBefore(newEl, el.nextSibling);\n}\n\nfunction reloadStyle(src) {\n  var elements = document.querySelectorAll('link');\n  var loaded = false;\n\n  forEach.call(elements, function(el) {\n    if (el.visited === true) return;\n\n    var url = getReloadUrl(el.href, src);\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n\n  return loaded;\n}\n\nfunction getReloadUrl(href, src) {\n  href = normalizeUrl(href, { stripWWW: false });\n  var ret;\n  src.some(function(url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll('link');\n  forEach.call(elements, function(el) {\n    if (el.visited === true) return;\n    updateCss(el);\n  });\n}\n\nmodule.exports = function(moduleId, options) {\n  var getScriptSrc;\n\n  if (noDocument) {\n    return noop;\n  }\n\n  getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.fileMap);\n    var reloaded = reloadStyle(src);\n    if (reloaded && !options.reloadAll) {\n      console.log('[HMR] css reload %s', src.join(' '));\n    } else {\n      console.log('[HMR] Reload all css');\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 10);\n};\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/css-hot-loader/hotModuleReplacement.js?");

/***/ }),

/***/ "./src/client/styles/App.css":
/*!***********************************!*\
  !*** ./src/client/styles/App.css ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1634720006116\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n    if(true) {\n      // 1634720006116\n      var cssReload = __webpack_require__(/*! !../../../node_modules/css-hot-loader/hotModuleReplacement.js */ \"./node_modules/css-hot-loader/hotModuleReplacement.js\")(module.id, {\"fileMap\":\"{fileName}\"});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);;\n    }\n  \n\n//# sourceURL=webpack://midnight-test/./src/client/styles/App.css?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* eslint-env browser */\n\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\n\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === 'undefined';\nvar forEach = Array.prototype.forEach;\n\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    var self = this; // eslint-disable-next-line prefer-rest-params\n\n    var args = arguments;\n\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n\n    clearTimeout(timeout);\n    timeout = setTimeout(functionCall, time);\n  };\n}\n\nfunction noop() {}\n\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src = document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName('script');\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n\n    srcByModuleId[moduleId] = src;\n  }\n\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n\n    if (!filename) {\n      return [src.replace('.js', '.css')];\n    }\n\n    if (!fileMap) {\n      return [src.replace('.js', '.css')];\n    }\n\n    return fileMap.split(',').map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), 'g');\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    } // eslint-disable-next-line\n\n\n    url = el.href.split('?')[0];\n  }\n\n  if (!isUrlRequest(url)) {\n    return;\n  }\n\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n\n  if (!url || !(url.indexOf('.css') > -1)) {\n    return;\n  } // eslint-disable-next-line no-param-reassign\n\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener('load', function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener('error', function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n\nfunction getReloadUrl(href, src) {\n  var ret; // eslint-disable-next-line no-param-reassign\n\n  href = normalizeUrl(href, {\n    stripWWW: false\n  }); // eslint-disable-next-line array-callback-return\n\n  src.some(function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n\n  var elements = document.querySelectorAll('link');\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n\n    var url = getReloadUrl(el.href, src);\n\n    if (!isUrlRequest(url)) {\n      return;\n    }\n\n    if (el.visited === true) {\n      return;\n    }\n\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll('link');\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n\n    updateCss(el);\n  });\n}\n\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n  // It is not http or https\n  if (!/^https?:/i.test(url)) {\n    return false;\n  }\n\n  return true;\n}\n\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log('no window.document found, will not HMR CSS');\n    return noop;\n  }\n\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n\n    if (options.locals) {\n      console.log('[HMR] Detected local css modules. Reload all css');\n      reloadAll();\n      return;\n    }\n\n    if (reloaded) {\n      console.log('[HMR] css reload %s', src.join(' '));\n    } else {\n      console.log('[HMR] Reload all css');\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://midnight-test/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* eslint-disable */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case '..':\n        accumulator.pop();\n        break;\n\n      case '.':\n        break;\n\n      default:\n        accumulator.push(item);\n    }\n\n    return accumulator;\n  }, []).join('/');\n}\n\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n\n  var protocol = urlString.indexOf('//') !== -1 ? urlString.split('//')[0] + '//' : '';\n  var components = urlString.replace(new RegExp(protocol, 'i'), '').split('/');\n  var host = components[0].toLowerCase().replace(/\\.$/, '');\n  components[0] = '';\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://midnight-test/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("/** @license React vundefined\n * react-refresh-runtime.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\n// ATTENTION\n// When adding new symbols to this file,\n// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'\n// The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n// nor polyfill, then a plain number is used for performance.\nvar REACT_ELEMENT_TYPE = 0xeac7;\nvar REACT_PORTAL_TYPE = 0xeaca;\nvar REACT_FRAGMENT_TYPE = 0xeacb;\nvar REACT_STRICT_MODE_TYPE = 0xeacc;\nvar REACT_PROFILER_TYPE = 0xead2;\nvar REACT_PROVIDER_TYPE = 0xeacd;\nvar REACT_CONTEXT_TYPE = 0xeace;\nvar REACT_FORWARD_REF_TYPE = 0xead0;\nvar REACT_SUSPENSE_TYPE = 0xead1;\nvar REACT_SUSPENSE_LIST_TYPE = 0xead8;\nvar REACT_MEMO_TYPE = 0xead3;\nvar REACT_LAZY_TYPE = 0xead4;\nvar REACT_SCOPE_TYPE = 0xead7;\nvar REACT_OPAQUE_ID_TYPE = 0xeae0;\nvar REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;\nvar REACT_OFFSCREEN_TYPE = 0xeae2;\nvar REACT_LEGACY_HIDDEN_TYPE = 0xeae3;\nvar REACT_CACHE_TYPE = 0xeae4;\n\nif (typeof Symbol === 'function' && Symbol.for) {\n  var symbolFor = Symbol.for;\n  REACT_ELEMENT_TYPE = symbolFor('react.element');\n  REACT_PORTAL_TYPE = symbolFor('react.portal');\n  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');\n  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');\n  REACT_PROFILER_TYPE = symbolFor('react.profiler');\n  REACT_PROVIDER_TYPE = symbolFor('react.provider');\n  REACT_CONTEXT_TYPE = symbolFor('react.context');\n  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');\n  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');\n  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');\n  REACT_MEMO_TYPE = symbolFor('react.memo');\n  REACT_LAZY_TYPE = symbolFor('react.lazy');\n  REACT_SCOPE_TYPE = symbolFor('react.scope');\n  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');\n  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');\n  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');\n  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');\n  REACT_CACHE_TYPE = symbolFor('react.cache');\n}\n\nvar PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.\n// It's OK to reference families, but use WeakMap/Set for types.\n\nvar allFamiliesByID = new Map();\nvar allFamiliesByType = new PossiblyWeakMap();\nvar allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families\n// that have actually been edited here. This keeps checks fast.\n// $FlowIssue\n\nvar updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.\n// It is an array of [Family, NextType] tuples.\n\nvar pendingUpdates = []; // This is injected by the renderer via DevTools global hook.\n\nvar helpersByRendererID = new Map();\nvar helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.\n\nvar mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.\n\nvar failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.\n// It needs to be weak because we do this even for roots that failed to mount.\n// If there is no WeakMap, we won't attempt to do retrying.\n// $FlowIssue\n\nvar rootElements = // $FlowIssue\ntypeof WeakMap === 'function' ? new WeakMap() : null;\nvar isPerformingRefresh = false;\n\nfunction computeFullKey(signature) {\n  if (signature.fullKey !== null) {\n    return signature.fullKey;\n  }\n\n  var fullKey = signature.ownKey;\n  var hooks;\n\n  try {\n    hooks = signature.getCustomHooks();\n  } catch (err) {\n    // This can happen in an edge case, e.g. if expression like Foo.useSomething\n    // depends on Foo which is lazily initialized during rendering.\n    // In that case just assume we'll have to remount.\n    signature.forceReset = true;\n    signature.fullKey = fullKey;\n    return fullKey;\n  }\n\n  for (var i = 0; i < hooks.length; i++) {\n    var hook = hooks[i];\n\n    if (typeof hook !== 'function') {\n      // Something's wrong. Assume we need to remount.\n      signature.forceReset = true;\n      signature.fullKey = fullKey;\n      return fullKey;\n    }\n\n    var nestedHookSignature = allSignaturesByType.get(hook);\n\n    if (nestedHookSignature === undefined) {\n      // No signature means Hook wasn't in the source code, e.g. in a library.\n      // We'll skip it because we can assume it won't change during this session.\n      continue;\n    }\n\n    var nestedHookKey = computeFullKey(nestedHookSignature);\n\n    if (nestedHookSignature.forceReset) {\n      signature.forceReset = true;\n    }\n\n    fullKey += '\\n---\\n' + nestedHookKey;\n  }\n\n  signature.fullKey = fullKey;\n  return fullKey;\n}\n\nfunction haveEqualSignatures(prevType, nextType) {\n  var prevSignature = allSignaturesByType.get(prevType);\n  var nextSignature = allSignaturesByType.get(nextType);\n\n  if (prevSignature === undefined && nextSignature === undefined) {\n    return true;\n  }\n\n  if (prevSignature === undefined || nextSignature === undefined) {\n    return false;\n  }\n\n  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {\n    return false;\n  }\n\n  if (nextSignature.forceReset) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction isReactClass(type) {\n  return type.prototype && type.prototype.isReactComponent;\n}\n\nfunction canPreserveStateBetween(prevType, nextType) {\n  if (isReactClass(prevType) || isReactClass(nextType)) {\n    return false;\n  }\n\n  if (haveEqualSignatures(prevType, nextType)) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction resolveFamily(type) {\n  // Only check updated types to keep lookups fast.\n  return updatedFamiliesByType.get(type);\n} // If we didn't care about IE11, we could use new Map/Set(iterable).\n\n\nfunction cloneMap(map) {\n  var clone = new Map();\n  map.forEach(function (value, key) {\n    clone.set(key, value);\n  });\n  return clone;\n}\n\nfunction cloneSet(set) {\n  var clone = new Set();\n  set.forEach(function (value) {\n    clone.add(value);\n  });\n  return clone;\n} // This is a safety mechanism to protect against rogue getters and Proxies.\n\n\nfunction getProperty(object, property) {\n  try {\n    return object[property];\n  } catch (err) {\n    // Intentionally ignore.\n    return undefined;\n  }\n}\n\nfunction performReactRefresh() {\n\n  if (pendingUpdates.length === 0) {\n    return null;\n  }\n\n  if (isPerformingRefresh) {\n    return null;\n  }\n\n  isPerformingRefresh = true;\n\n  try {\n    var staleFamilies = new Set();\n    var updatedFamilies = new Set();\n    var updates = pendingUpdates;\n    pendingUpdates = [];\n    updates.forEach(function (_ref) {\n      var family = _ref[0],\n          nextType = _ref[1];\n      // Now that we got a real edit, we can create associations\n      // that will be read by the React reconciler.\n      var prevType = family.current;\n      updatedFamiliesByType.set(prevType, family);\n      updatedFamiliesByType.set(nextType, family);\n      family.current = nextType; // Determine whether this should be a re-render or a re-mount.\n\n      if (canPreserveStateBetween(prevType, nextType)) {\n        updatedFamilies.add(family);\n      } else {\n        staleFamilies.add(family);\n      }\n    }); // TODO: rename these fields to something more meaningful.\n\n    var update = {\n      updatedFamilies: updatedFamilies,\n      // Families that will re-render preserving state\n      staleFamilies: staleFamilies // Families that will be remounted\n\n    };\n    helpersByRendererID.forEach(function (helpers) {\n      // Even if there are no roots, set the handler on first update.\n      // This ensures that if *new* roots are mounted, they'll use the resolve handler.\n      helpers.setRefreshHandler(resolveFamily);\n    });\n    var didError = false;\n    var firstError = null; // We snapshot maps and sets that are mutated during commits.\n    // If we don't do this, there is a risk they will be mutated while\n    // we iterate over them. For example, trying to recover a failed root\n    // may cause another root to be added to the failed list -- an infinite loop.\n\n    var failedRootsSnapshot = cloneSet(failedRoots);\n    var mountedRootsSnapshot = cloneSet(mountedRoots);\n    var helpersByRootSnapshot = cloneMap(helpersByRoot);\n    failedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!failedRoots.has(root)) {// No longer failed.\n      }\n\n      if (rootElements === null) {\n        return;\n      }\n\n      if (!rootElements.has(root)) {\n        return;\n      }\n\n      var element = rootElements.get(root);\n\n      try {\n        helpers.scheduleRoot(root, element);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n    mountedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!mountedRoots.has(root)) {// No longer mounted.\n      }\n\n      try {\n        helpers.scheduleRefresh(root, update);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n\n    if (didError) {\n      throw firstError;\n    }\n\n    return update;\n  } finally {\n    isPerformingRefresh = false;\n  }\n}\nfunction register(type, id) {\n  {\n    if (type === null) {\n      return;\n    }\n\n    if (typeof type !== 'function' && typeof type !== 'object') {\n      return;\n    } // This can happen in an edge case, e.g. if we register\n    // return value of a HOC but it returns a cached component.\n    // Ignore anything but the first registration for each type.\n\n\n    if (allFamiliesByType.has(type)) {\n      return;\n    } // Create family or remember to update it.\n    // None of this bookkeeping affects reconciliation\n    // until the first performReactRefresh() call above.\n\n\n    var family = allFamiliesByID.get(id);\n\n    if (family === undefined) {\n      family = {\n        current: type\n      };\n      allFamiliesByID.set(id, family);\n    } else {\n      pendingUpdates.push([family, type]);\n    }\n\n    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          register(type.render, id + '$render');\n          break;\n\n        case REACT_MEMO_TYPE:\n          register(type.type, id + '$type');\n          break;\n      }\n    }\n  }\n}\nfunction setSignature(type, key) {\n  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;\n\n  {\n    if (!allSignaturesByType.has(type)) {\n      allSignaturesByType.set(type, {\n        forceReset: forceReset,\n        ownKey: key,\n        fullKey: null,\n        getCustomHooks: getCustomHooks || function () {\n          return [];\n        }\n      });\n    } // Visit inner types because we might not have signed them.\n\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          setSignature(type.render, key, forceReset, getCustomHooks);\n          break;\n\n        case REACT_MEMO_TYPE:\n          setSignature(type.type, key, forceReset, getCustomHooks);\n          break;\n      }\n    }\n  }\n} // This is lazily called during first render for a type.\n// It captures Hook list at that time so inline requires don't break comparisons.\n\nfunction collectCustomHooksForSignature(type) {\n  {\n    var signature = allSignaturesByType.get(type);\n\n    if (signature !== undefined) {\n      computeFullKey(signature);\n    }\n  }\n}\nfunction getFamilyByID(id) {\n  {\n    return allFamiliesByID.get(id);\n  }\n}\nfunction getFamilyByType(type) {\n  {\n    return allFamiliesByType.get(type);\n  }\n}\nfunction findAffectedHostInstances(families) {\n  {\n    var affectedInstances = new Set();\n    mountedRoots.forEach(function (root) {\n      var helpers = helpersByRoot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);\n      instancesForRoot.forEach(function (inst) {\n        affectedInstances.add(inst);\n      });\n    });\n    return affectedInstances;\n  }\n}\nfunction injectIntoGlobalHook(globalObject) {\n  {\n    // For React Native, the global hook will be set up by require('react-devtools-core').\n    // That code will run before us. So we need to monkeypatch functions on existing hook.\n    // For React Web, the global hook will be set up by the extension.\n    // This will also run before us.\n    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n    if (hook === undefined) {\n      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.\n      // Note that in this case it's important that renderer code runs *after* this method call.\n      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.\n      var nextID = 0;\n      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {\n        renderers: new Map(),\n        supportsFiber: true,\n        inject: function (injected) {\n          return nextID++;\n        },\n        onScheduleFiberRoot: function (id, root, children) {},\n        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},\n        onCommitFiberUnmount: function () {}\n      };\n    }\n\n    if (hook.isDisabled) {\n      // This isn't a real property on the hook, but it can be set to opt out\n      // of DevTools integration and associated warnings and logs.\n      // Using console['warn'] to evade Babel and ESLint\n      console['warn']('Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). ' + 'Fast Refresh is not compatible with this shim and will be disabled.');\n      return;\n    } // Here, we just want to get a reference to scheduleRefresh.\n\n\n    var oldInject = hook.inject;\n\n    hook.inject = function (injected) {\n      var id = oldInject.apply(this, arguments);\n\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n\n      return id;\n    }; // Do the same for any already injected roots.\n    // This is useful if ReactDOM has already been initialized.\n    // https://github.com/facebook/react/issues/17626\n\n\n    hook.renderers.forEach(function (injected, id) {\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n    }); // We also want to track currently mounted roots.\n\n    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;\n\n    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};\n\n    hook.onScheduleFiberRoot = function (id, root, children) {\n      if (!isPerformingRefresh) {\n        // If it was intentionally scheduled, don't attempt to restore.\n        // This includes intentionally scheduled unmounts.\n        failedRoots.delete(root);\n\n        if (rootElements !== null) {\n          rootElements.set(root, children);\n        }\n      }\n\n      return oldOnScheduleFiberRoot.apply(this, arguments);\n    };\n\n    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {\n      var helpers = helpersByRendererID.get(id);\n\n      if (helpers !== undefined) {\n        helpersByRoot.set(root, helpers);\n        var current = root.current;\n        var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.\n        // This logic is copy-pasted from similar logic in the DevTools backend.\n        // If this breaks with some refactoring, you'll want to update DevTools too.\n\n        if (alternate !== null) {\n          var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;\n          var isMounted = current.memoizedState != null && current.memoizedState.element != null;\n\n          if (!wasMounted && isMounted) {\n            // Mount a new root.\n            mountedRoots.add(root);\n            failedRoots.delete(root);\n          } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {\n            // Unmount an existing root.\n            mountedRoots.delete(root);\n\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            } else {\n              helpersByRoot.delete(root);\n            }\n          } else if (!wasMounted && !isMounted) {\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            }\n          }\n        } else {\n          // Mount a new root.\n          mountedRoots.add(root);\n        }\n      } // Always call the decorated DevTools hook.\n\n\n      return oldOnCommitFiberRoot.apply(this, arguments);\n    };\n  }\n}\nfunction hasUnrecoverableErrors() {\n  // TODO: delete this after removing dependency in RN.\n  return false;\n} // Exposed for testing.\n\nfunction _getMountedRootCount() {\n  {\n    return mountedRoots.size;\n  }\n} // This is a wrapper over more primitive functions for setting signature.\n// Signatures let us decide whether the Hook order has changed on refresh.\n//\n// This function is intended to be used as a transform target, e.g.:\n// var _s = createSignatureFunctionForTransform()\n//\n// function Hello() {\n//   const [foo, setFoo] = useState(0);\n//   const value = useCustomHook();\n//   _s(); /* Call without arguments triggers collecting the custom Hook list.\n//          * This doesn't happen during the module evaluation because we\n//          * don't want to change the module order with inline requires.\n//          * Next calls are noops. */\n//   return <h1>Hi</h1>;\n// }\n//\n// /* Call with arguments attaches the signature to the type: */\n// _s(\n//   Hello,\n//   'useState{[foo, setFoo]}(0)',\n//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */\n// );\n\nfunction createSignatureFunctionForTransform() {\n  {\n    var savedType;\n    var hasCustomHooks;\n    var didCollectHooks = false;\n    return function (type, key, forceReset, getCustomHooks) {\n      if (typeof key === 'string') {\n        // We're in the initial phase that associates signatures\n        // with the functions. Note this may be called multiple times\n        // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).\n        if (!savedType) {\n          // We're in the innermost call, so this is the actual type.\n          savedType = type;\n          hasCustomHooks = typeof getCustomHooks === 'function';\n        } // Set the signature for all types (even wrappers!) in case\n        // they have no signatures of their own. This is to prevent\n        // problems like https://github.com/facebook/react/issues/20417.\n\n\n        if (type != null && (typeof type === 'function' || typeof type === 'object')) {\n          setSignature(type, key, forceReset, getCustomHooks);\n        }\n\n        return type;\n      } else {\n        // We're in the _s() call without arguments, which means\n        // this is the time to collect custom Hook signatures.\n        // Only do this once. This path is hot and runs *inside* every render!\n        if (!didCollectHooks && hasCustomHooks) {\n          didCollectHooks = true;\n          collectCustomHooksForSignature(savedType);\n        }\n      }\n    };\n  }\n}\nfunction isLikelyComponentType(type) {\n  {\n    switch (typeof type) {\n      case 'function':\n        {\n          // First, deal with classes.\n          if (type.prototype != null) {\n            if (type.prototype.isReactComponent) {\n              // React class.\n              return true;\n            }\n\n            var ownNames = Object.getOwnPropertyNames(type.prototype);\n\n            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {\n              // This looks like a class.\n              return false;\n            } // eslint-disable-next-line no-proto\n\n\n            if (type.prototype.__proto__ !== Object.prototype) {\n              // It has a superclass.\n              return false;\n            } // Pass through.\n            // This looks like a regular function with empty prototype.\n\n          } // For plain functions and arrows, use name as a heuristic.\n\n\n          var name = type.name || type.displayName;\n          return typeof name === 'string' && /^[A-Z]/.test(name);\n        }\n\n      case 'object':\n        {\n          if (type != null) {\n            switch (getProperty(type, '$$typeof')) {\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_MEMO_TYPE:\n                // Definitely React components.\n                return true;\n\n              default:\n                return false;\n            }\n          }\n\n          return false;\n        }\n\n      default:\n        {\n          return false;\n        }\n    }\n  }\n}\n\nexports._getMountedRootCount = _getMountedRootCount;\nexports.collectCustomHooksForSignature = collectCustomHooksForSignature;\nexports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;\nexports.findAffectedHostInstances = findAffectedHostInstances;\nexports.getFamilyByID = getFamilyByID;\nexports.getFamilyByType = getFamilyByType;\nexports.hasUnrecoverableErrors = hasUnrecoverableErrors;\nexports.injectIntoGlobalHook = injectIntoGlobalHook;\nexports.isLikelyComponentType = isLikelyComponentType;\nexports.performReactRefresh = performReactRefresh;\nexports.register = register;\nexports.setSignature = setSignature;\n  })();\n}\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/react-refresh/cjs/react-refresh-runtime.development.js?");

/***/ }),

/***/ "./node_modules/react-refresh/runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react-refresh/runtime.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ \"./node_modules/react-refresh/cjs/react-refresh-runtime.development.js\");\n}\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/react-refresh/runtime.js?");

/***/ }),

/***/ "./src/assets/Brushoverlay03.png":
/*!***************************************!*\
  !*** ./src/assets/Brushoverlay03.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fc1ae6141ad6319a0319.png\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/Brushoverlay03.png?");

/***/ }),

/***/ "./src/assets/Midnight-West-Fest-Logo-patfix.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/Midnight-West-Fest-Logo-patfix.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c36b686bb4cd3bf18461.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/Midnight-West-Fest-Logo-patfix.jpg?");

/***/ }),

/***/ "./src/assets/contactWood.jpg":
/*!************************************!*\
  !*** ./src/assets/contactWood.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7ad27d22319595fa284e.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/contactWood.jpg?");

/***/ }),

/***/ "./src/assets/editing-service.webp":
/*!*****************************************!*\
  !*** ./src/assets/editing-service.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6026d05bc6581ddf8b9d.webp\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/editing-service.webp?");

/***/ }),

/***/ "./src/assets/filmFreeway-button.webp":
/*!********************************************!*\
  !*** ./src/assets/filmFreeway-button.webp ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/webp;base64,UklGRggDAABXRUJQVlA4IPwCAACwEwCdASpiAGIAPm0ylkikIqIhIVgLuIANiWkAFs9+Lf6T2ef3Suz/0/8Y/Yfkb2pv7vvd3Hf5X/s7Z98S89/n156PqL2Cf1k60JM+SUB22FHb2pUQe9FPA513qZehAUToDbdL1+3o77Xna78vnno/Nm98R9rEknqT/y3qfOPd8TlX+LN6oGHAT7tZkVRZ0S5i7A3jm7jgfSqG+laBwtXAVOgHbarAAP71UoC27Sel+gOOd4y7Fn2hCXYUp+pcIY5FhBj956mb16EVhrCbYjz/LW06XqxL2mDgWlC1518vFR0/qPyhrwx4BgobQnrjGxKPx8jm6FR/0eMQEU8enS0OAlVXUNnIBB/jDf6Up4aOc4v3D57Q3e2vXIMg4qN+5/Nm9I9yw52izfqGCE2I99IbprcrVsjoJTOpTaI/Sz5nOmTsVHWupyPE2+nrIeBfWHjkRG+z/tahRT/ofbtoD/Sq5JQLv3f0WVWzclgy83sVW7zbbN0IGIrjqn5eFfgYa9vMojocbKfGuwldKJism8OCeJw0fmqJdXl6gbMcAt4ttRaNaeAeVNpjaYvyGp2zcHd0A1/Pg2UB2Q6/7GtL4Eodn2X/7WxfAYVpwN0XAmh5b6CdvhKDf70lkdoh/sLHuzmKRjYme2yqJ/N/fUqQu/pryW5JWTwc5ufay+ccQBdHrjpgR/04itEP/izHLGyf/ve94cylHw9L9bnT3jM8IoFlJouQ5R/nKsYFmNCPDR+EcYWd1bng9YDYGpR/l0okDXpO5VJL3dUwbVRQgkzdsh+Mx5utS3xwI5mLPu+zbBKycmrs/+qDHtevnXr/6kybKaYVL4zCqBC3R4qJctF3NBK+bXiSKjhnBSaTTb8+SrG99d1UEhmUezUyXCrMtN5ix5XlWx9zTYf0BLmZHT9sLrGaf9PEspCx4Tl9U/njIWT1ytB2cMFDAwSrCN2H+lfUxw94/L4WEmJEyU55mTh98yLAsxKILIbH/7YLnjDJJUx/Jl4J/E4wGATAAAAAAA==\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/filmFreeway-button.webp?");

/***/ }),

/***/ "./src/assets/filmfreeway-logo.webp":
/*!******************************************!*\
  !*** ./src/assets/filmfreeway-logo.webp ***!
  \******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/webp;base64,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\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/filmfreeway-logo.webp?");

/***/ }),

/***/ "./src/assets/filming-service.webp":
/*!*****************************************!*\
  !*** ./src/assets/filming-service.webp ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/webp;base64,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\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/filming-service.webp?");

/***/ }),

/***/ "./src/assets/heart-hand-poster.jpg":
/*!******************************************!*\
  !*** ./src/assets/heart-hand-poster.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dc95a3f38f3621f58eb9.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/heart-hand-poster.jpg?");

/***/ }),

/***/ "./src/assets/midnight-black.jpg":
/*!***************************************!*\
  !*** ./src/assets/midnight-black.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a0ef31df4f02edaff00b.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnight-black.jpg?");

/***/ }),

/***/ "./src/assets/midnight-camera.webp":
/*!*****************************************!*\
  !*** ./src/assets/midnight-camera.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b500100e36703a0be1a9.webp\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnight-camera.webp?");

/***/ }),

/***/ "./src/assets/midnight-cereal-1.jpg":
/*!******************************************!*\
  !*** ./src/assets/midnight-cereal-1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b154a8072a8fa14f65ca.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnight-cereal-1.jpg?");

/***/ }),

/***/ "./src/assets/midnight-kungfu-1.jpg":
/*!******************************************!*\
  !*** ./src/assets/midnight-kungfu-1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"087458fa0a3bc4d9356b.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnight-kungfu-1.jpg?");

/***/ }),

/***/ "./src/assets/midnight-kungfu.jpg":
/*!****************************************!*\
  !*** ./src/assets/midnight-kungfu.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"205dba269dca515649af.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnight-kungfu.jpg?");

/***/ }),

/***/ "./src/assets/midnight-weed.jpg":
/*!**************************************!*\
  !*** ./src/assets/midnight-weed.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ea1121cb60d4c53f09d8.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnight-weed.jpg?");

/***/ }),

/***/ "./src/assets/midnightZfest.jpg":
/*!**************************************!*\
  !*** ./src/assets/midnightZfest.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"56e9a9c67bae8c7d74a1.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnightZfest.jpg?");

/***/ }),

/***/ "./src/assets/midnightfest-2.jpg":
/*!***************************************!*\
  !*** ./src/assets/midnightfest-2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0a1b0e4a37dd28d28f2f.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnightfest-2.jpg?");

/***/ }),

/***/ "./src/assets/midnightmothers.jpg":
/*!****************************************!*\
  !*** ./src/assets/midnightmothers.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d2b55b23c14289b76fa9.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnightmothers.jpg?");

/***/ }),

/***/ "./src/assets/midnightwonder.jpg":
/*!***************************************!*\
  !*** ./src/assets/midnightwonder.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d4ded9fdfd15d0e58133.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnightwonder.jpg?");

/***/ }),

/***/ "./src/assets/mwLogoFix1.jpg":
/*!***********************************!*\
  !*** ./src/assets/mwLogoFix1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8d215402a2a53207b5dd.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/mwLogoFix1.jpg?");

/***/ }),

/***/ "./src/assets/mwLogoFix1.png":
/*!***********************************!*\
  !*** ./src/assets/mwLogoFix1.png ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,UklGRvgRAABXRUJQVlA4WAoAAAAQAAAAdwAAdQAAQUxQSK0GAAABoEVteyEJ+v4/GfTatm3btm3btm3btnen17Zt25rpP8l3MTXdVd3p+4iYAGS1B8c9CkX39diLnzpItxGPg5n+nKDriMfhtMQ5oN1FPI6hpcDV4LqKeJxASzTuBt9NxOFUGknjGfkQJ9WJw1k0FtwJlwsAWpU4nEfj8MhXIXlw2PQUga9GFBezwcLE70aBZMHjWD4+E5xUIIrLaRypMRU0E/sH/rEN4EoTxTVscOTEReEysTcHyWvHgS9JRW5gg00aN4HPxG60FPjxMhAtQ0VvYYPNHZqNHWikMR2t8K2p+DvZYAuXZ2PrYYyJT8wAJy0oeu9hg80H1qGZ2LSANP6+JeCaUvQ/yAZbjPxAIXnYgKGAgbxqLPgmFKMM0Nhq4h/j5sFh7ZGYAj9cCqIQdd73YLTHaSwxzQrNw2pNkMZ0hMCjcIynaSwxcCW4PKzQFGPiY9PBTbLgursd+jKNZRp3gs/D0ozNkMZf7vzgHw6PLOmUXCzeCgNJpmAWWdatcHlYiKkFphATKwx8CZIDxbytVR35dT8kC3OyzRMHJ4dmYZZ2Y+JCcFmYITK1l3Fd57MwnbXfieiRDOi4/7cbox0MlY7rwQ4xst0Tz4dKh3nsypjaz3g1nNOWRaR9PHZiSOzABq9ER3usz5DYkQ2eM/c8c8w268wzzTD9dNNMPeUUk086ycQTjtYGos47h/kHY2SHRhanFIM1hgb//+/fP/4/C74CUee9oHDaLxnZsTEVNP/LtKKliDjvFYWjz7bO4Te//g8TOz412eDycGhV1HuHwr5pVtz78ue+Z2FiRo1HwKNZdd4Jhsski21/9sDnDRYGs5iY0cAH4KWpwnHm2fj4u977m4XRLCTmNvKr8UTR9EyrHXzdK7+wMJmFmJjjFMJicGj+KxYGCzEx38Z94NHiLO/x/5iYeeOt8Gh50rdozHzkR2OotOQw3vO0vKUwNA8cWncYvc5G1ow7wKNMRd9dbGTMeCU8ylXotbRsRb5Vc1ISVHEBLVMp/T0zFKWLw8m0lKXIzeFRoTgcxpDytLi6KiAeezKmDBkPh68E8NiGKeboFriK0IP1jTE7ka+pVIUerPQvQ24Sv1eVquCx+G8MmWG0NdFTGTzm+Z4hMykNrQ9fGTxm+pyWF6bEreErg8cU79LywhS5J7xUBYcJXmbMC1PgYXBSFRzGfIIxL0zGk+GkKjjUvkkpL6TxAqhWBcWLDLmh8VqFVuXk3gyxwbv6oBV5nEvLDxusjw5X1a5ZovH58eAqcViSMUc0vjUZfBWCcX9lyhGNn0wPX4XKJ4xZYuA3c8KX53E4AzMd+MvC8GU5zB9iyhUD/14ePeWI63+XkfmOHFobPaV4nENjzmNKm8OX4LACjXmPkbvCt6Q69tcpZo4pcF+07HE9A3OeYrCQyMtacdiYxkynGMwSC3964boWVCb7Lcb8pBTMIgv/fPv2ozeYcyy06vEQA7Oaollg4eAnD52+9cITolBccx6705jPZIGF6dunL9592al6UOi8V0Hzipn/Cykjw3999fpD1px5VBSq905Qojj3IgOzGdPPJ2w6zzgoFO+dCsr2OJrGbCbj8hjuvFNBpQ4Lx5CGpeExxjC8YxrcH31eBdWL9L9rQyGmxBZThzR4ITza0+Myjhj+/+uX7z7/4M0Xn3zojnuYUicYb4KTNhGsteNm6626zCLzzDrt5BOMNWqvoHA/dkLkzaqCzhVV14Ndh2LbBV4nKmhf5713zqmqynAU9uI8WrsZ10IPOt7rtp2wi/jOc1iWsf0OQAYU0wemtjsuB4LRfuyAc3MAwauMbXdVFhxup1WSUjCLzQXeAZcBj5NLi2ZmkYWhhQFoFrYvK7Iwff/kqVu9xhSbegGSAYdlGEsxvnTOqYdsu9IsowPoOz7QRop8GzlUTBeYSjDWayhW74FFXmWKI33WA+k8wWg/lGF8tIYe771TASAefccFWkHiD6PlAIJXGVsy1mtQNO2ARV5ligV/jp8Fh9torRjrNShaFI++4wJt2OAU0Ax4nNySsV6DonUHLPwKUyTTzJnYrhVjvQZFmeLRe2ygJc4HlwGHZRibMtZrUJTsgIVfYYxLZUExXWBqwlivQVG6ePQe2+CaWRCM+kMzxnoNiiodsODLq2cBglcYRzDWa1BUKw5wyKLDbbQiY70GReWKTHqcNIKxXoOia3psV2QcqEHRPR2WZiRpHKhB0UUV0xkTjQM1KLqpYNTvmYwDNSi6q+AVDnKgBkWXdbgtsV6Dott6nMD7alB0oW1f7IcirwBWUDggJAsAAJAwAJ0BKngAdgA+bTCTRyQioaEoFQz4gA2JaQhwACqMf7T2i/zr8gv6N6d+ALw/7PbsFmd+xn43+r/uD+YfxR/gPAn4RfxfqBfiv8k/xe9tgA/RP6n/p/tp9Fv+q9Dfqv/n/cA/j/89/13qx3pn2j/R/6D3Av5L/Tv+H/j/3O/t30ufxH/H/yX5be0r86/vP/P/yfwDfyn+n/7L+5flJ85HsO/Z32K/10REcq7SlBfvq7FAfA8xkCPJqFeKjQ23hbPxU+1jsxpiEvY6GmOinQeKqbwXCuiFDCBsTkVxq9e99t/XPPJSn8I/jFuQpMp5wHacqZon9aIgiUWpOogOvIj4Wu/sq1l2k0DOVq9FNICgRcrb2pmwlQB1/uI3iuItx89Ymz/Tc7wXsBWcEik2Y/Ezs75JDXOnlRqRpJKJlGJHhocuX08pxmgJYSwbxkLzFohYHbwMYT7HihoGv0h4e0mMId/88Hm+7DHcgrhutTJ00vCT5A6T0Fd2JZm1ud9pptNpLW5mKFS2UK/G4wAA/tkm7N2kUG2RRKVanpbd2FgiG1jjgqvdiS5R6pp9jHZzluan56tIgtok5td9U0b48mRXZ/UZlRf7nTGhIU7DQkKO/jnIHqR+NZrbt7//QCG6jvxpg8Q8hnlnDr8C5r72BI5VHU+kWk3qjmddHg9mmiZloOat+jsXdOpxjER2Vv2iEQcOQ1vBuV7UNr/0TGndmZRGJgfUzUipF1n135Tfv/M9nh9fSjNrqnNQ7TzS8L7IvSSQBafjIRGUSrufoOFDRm0mKkX2f30n8mvwOt4l0PNSdbAe9ybvUvAgj4ht3xjXkrCiskukDPj8PCUQANXbM+QwDEausYuAUZbI5ZhhlO8aX2WqLo07q0BQzH4f8REyqSrBfi2oXxYWbGmosqp7+PblQo6oWb2NH21pZqerAGMSGOd/NIClD8mj8lmQeJn1qGJKHNIVtjJ8GI/cPkyaiXPuy6HHpQdZssjIqIheLo6KrRvXa+sachpEZF9R16RItnMewnrvZh6br8NL4G3o1hhMubkxei7v8dbMJRaFfjSxwR6YKQF3ozwfbDFrKZ9/9ts1BbzeeweMX5ld+5h+hgjPeCSgOoIJH42ACqUZpQTsNZJnLl1nxN9R+3gr3fHVO0rQSQqMAV2e36ukc6T+cMNQw0ONT/iwAJ6VQkHwjZDIDGfQeus55g3v0CtvdTXYdGk5/sUFgtYQdfxxsM53OEqfsUnPkWYsxk1g4cm8UI6HgWs2tPWtilMpMQDLMTE+N4PzPYPFS+GS2qUuPHCI6KFzav5CzKJMZZnXL0n9x0Udl4+SPPlzeoRP+LFv9aPP1bhiEeaRQ2nBJydJSAfAlduJLzYCj/D8hEo6YwfZ0iRSy5TX5zBHRZY3+gzom7KWEMfR4mxE8WLRX2NYvyVY+++y5/jXsO7dT+qbUZacI1E69gLVLFApo+4KkWa7a2RsWB5qaOxtw68ual6QpPZJV0hM1sAp4ilcFyZJ9QRRq2U+drgzCO4yZELDG7aaTZtWoHufJyfR0Gnv9Fkch2Bs7IS5TIc90jvh/VXqfawHAeq71KO0dUydjZlT93RddkKK03XdPMjwW2z2c5KIad9JXyaf8ndRZWtr0A+aTqNnOMJ9xc5fOPcxDZEeJwh1AgMWo+I9YCeycDDP4Uj1bP8nCxmW3gmTpT0vfE31DCrC1ew79JnfXfYYpbZpaAUi/eNKWLhJ8nqr65SIO9ln5uxlf3Pza6bW9UVYb6QwACZc3Eceh+kH5Skt2sJa/5XetCRR9n7njeNSjpYFtlkL3BjQ5zRF7UBm34HPcmw5nNFC1nIe/VwzWbki2tS96j9Ptr2y0NWkvia80aOOaOlceUwuh1yAdaHne/NRfnr+KnSxAYWCeKy2B8LEGMcx9TCLwcJ+fXJbwXuQ2vphZCL/9wPqmo8svlRmrzE+Lf7ye8qDD+xPhPb8i5X9ugrwlRt6/qrLs3DNmZZjFIu1PeCSU7WQZB+UDjUfJF/YKla8G1ZHy5tEme1Ch2L2OO8qApT5dmlmt7A12HjzfjBMXc2UC6YENN6+KhXiHEDyZmLkS6MZl2QNzZ47DccWH5W7dgmZer1kCO7fZA+Tg+vFzT0ICPY/V7yxoAqf9Bj9ZwIooDEh3PJBspHI9vtbcPW8OO0uxNH2kp/scUvnpYmbki7MZ5iBIMEfg6EtFbgYjcpspD8MBCFJSyPyrRMAgVe4g5bCbFUE/p/heSl70UzMwBreFnWKBdKn+hydR40k2T1sLZxlEbEAhQVzW40ko1mJHemESe2IUUIWvpRUhogwTU4UHVI8obULaQib7Cl4z7xyFxox+HpDrGC6KyHId20LIBS9rAhA/QskhE89hIcDhBbh1Kc54HVHhMFHhnViMPgHSLM6FjhrrtpgcLBsgSq4QeJ7TjAS16O0lEJ6636CzL2jCr/oArj+JvPhUZ5BsnlerGkLYr+CvrOpsUGOdCmHvIH9ELwPv6p7kxLGQ8b+nOf2wVf4IXWZuCw1TWNSWFosgiRerQ1Ut9QyAcg7xXejZuG5U18eT12bAPRT5I8NOOad38l3ldJvzwcytk0+frfXiLydGX46GjR8CkuwOjKS0+w7GvizPgjzWSviT1g0Ef69AjKNdTFvqy1O0pNqe3AfZV/5TO8WDyWvl1RDq3LAzAnqOTKQqbiaJp9Zbymo8x8M9gTHqXVp+oeSXf+SUIIqGG2nsSHsh6Wl/zINFmSv6cWX+Z/op+idoemPlg/kWN7wg2fcZls9aTmQs2nCuBrX/Pt0cI7oHmnu49WzSsryu8qWM+pV8OlHId4Fq1bh2vjjbj+poMV8Cl3IX3CIChEQp1klX+fzIs2/AhDCcoXyh6LUIpWYdz+r/V/Egp+O4qPuD7Ko6hpY3cyT6AIEIebEw9wq+XYSf09kIPh3trJJaCQNQ+cdkuerVuM7MOc1wTdQfWVKol5qEgnQ7oHnHr0A0Kd/xhMYWQB6RqoJazc8kr5A6CP3r2dw3gqcyUAMq5d9RS+tBqlOXJkixLolNL0bc1K0KsxDc+5RtuG1b4knZcXwaSHqX0u45LgLdJ6f74gUYFFOP1VMiMClZ2GKpSGhtvdb7PrQJG2ohB+hv5ev3N0I4LCoExoklhlaKrTYFWfXBRHF3h2cmbB8oAxg6FAw0eqOh8Qlfk9IIMcpdxHrvoH+gKxDv6K1xLJXVa4Zj7KtVsfEul9LSnYfj8ovO2zddXsHnt5DzxepKXNfjMbcVVdr2/z7mjR8+o/Fsd0Gn4qMzmjs5hPtdPXNiZqykCwUsmSiUvFzkCOAap5H/QEgTtmjvm00o7X7h4PdpJN8ZHnddiIvc3cUyyMwm/EcxV015nZOxdryoxJMgn76e6zaXoctTVxcGlQPUJD4RXV5SqexiqwuvWXjz4hDuQx3/tvqRDoqGckucMqGxoiUzFQvbqf3cwbnt3cx8nvIMGxCevV0mgWmriNN6NXNI/02lAVIdOT6WcMxK9NNaC6Ravw3wEhJynNGYELeH/kb/aDfxg/ChmQdi4ezENK1N+dE5Z3UqsbiRP/xZBn03yIxyakNZzJ1jta9KbywWZ4uq3nK6MygWGc5Ky5NTFbS29ooLN6C89sEL2fGkjtkZkMkkbFkCYTHRIdEW/xW8kFjzaYvjs89+my4ta4pN/i8keKh5vXYG+M/dsGfn+ItbZ6Z5MOUrNU0aZO/iUiusnasxGR/NBQ/EnIgOqLmMC403xWjEmUIJ0H77v4JBt77wAjP3To28a/E7/k0nrFR9gNlEm0V6fN7sSzOePFQAAAA\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/mwLogoFix1.png?");

/***/ }),

/***/ "./src/assets/mwf2020.webp":
/*!*********************************!*\
  !*** ./src/assets/mwf2020.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"37fed78ef2e7ada3c84d.webp\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/mwf2020.webp?");

/***/ }),

/***/ "./src/assets/mwf2021.webp":
/*!*********************************!*\
  !*** ./src/assets/mwf2021.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"865b837ab255578a2dbd.webp\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/mwf2021.webp?");

/***/ }),

/***/ "./src/assets/summer_rage.jpg":
/*!************************************!*\
  !*** ./src/assets/summer_rage.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bc14b536af243fee8113.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/summer_rage.jpg?");

/***/ }),

/***/ "./src/assets sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/assets/ sync ^\.\/.*$ ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./Brushoverlay03.png\": \"./src/assets/Brushoverlay03.png\",\n\t\"./Midnight-West-Fest-Logo-patfix.jpg\": \"./src/assets/Midnight-West-Fest-Logo-patfix.jpg\",\n\t\"./contactWood.jpg\": \"./src/assets/contactWood.jpg\",\n\t\"./editing-service.webp\": \"./src/assets/editing-service.webp\",\n\t\"./filmFreeway-button.webp\": \"./src/assets/filmFreeway-button.webp\",\n\t\"./filmfreeway-logo.webp\": \"./src/assets/filmfreeway-logo.webp\",\n\t\"./filming-service.webp\": \"./src/assets/filming-service.webp\",\n\t\"./heart-hand-poster.jpg\": \"./src/assets/heart-hand-poster.jpg\",\n\t\"./midnight-black.jpg\": \"./src/assets/midnight-black.jpg\",\n\t\"./midnight-camera.webp\": \"./src/assets/midnight-camera.webp\",\n\t\"./midnight-cereal-1.jpg\": \"./src/assets/midnight-cereal-1.jpg\",\n\t\"./midnight-kungfu-1.jpg\": \"./src/assets/midnight-kungfu-1.jpg\",\n\t\"./midnight-kungfu.jpg\": \"./src/assets/midnight-kungfu.jpg\",\n\t\"./midnight-weed.jpg\": \"./src/assets/midnight-weed.jpg\",\n\t\"./midnightZfest.jpg\": \"./src/assets/midnightZfest.jpg\",\n\t\"./midnightfest-2.jpg\": \"./src/assets/midnightfest-2.jpg\",\n\t\"./midnightmothers.jpg\": \"./src/assets/midnightmothers.jpg\",\n\t\"./midnightwonder.jpg\": \"./src/assets/midnightwonder.jpg\",\n\t\"./mwLogoFix1.jpg\": \"./src/assets/mwLogoFix1.jpg\",\n\t\"./mwLogoFix1.png\": \"./src/assets/mwLogoFix1.png\",\n\t\"./mwf2020.webp\": \"./src/assets/mwf2020.webp\",\n\t\"./mwf2021.webp\": \"./src/assets/mwf2021.webp\",\n\t\"./summer_rage.jpg\": \"./src/assets/summer_rage.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons");;

/***/ }),

/***/ "@pmmmwh/react-refresh-webpack-plugin":
/*!*******************************************************!*\
  !*** external "@pmmmwh/react-refresh-webpack-plugin" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@pmmmwh/react-refresh-webpack-plugin");;

/***/ }),

/***/ "ansi-html":
/*!****************************!*\
  !*** external "ansi-html" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("ansi-html");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ "error-stack-parser":
/*!*************************************!*\
  !*** external "error-stack-parser" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("error-stack-parser");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");;

/***/ }),

/***/ "html-entities":
/*!********************************!*\
  !*** external "html-entities" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-entities");;

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-webpack-plugin");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/debounce");;

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("mini-css-extract-plugin");;

/***/ }),

/***/ "native-url":
/*!*****************************!*\
  !*** external "native-url" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("native-url");;

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nodemailer");;

/***/ }),

/***/ "normalize-url":
/*!********************************!*\
  !*** external "normalize-url" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("normalize-url");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-refresh/babel":
/*!**************************************!*\
  !*** external "react-refresh/babel" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-refresh/babel");;

/***/ }),

/***/ "react-refresh/runtime":
/*!****************************************!*\
  !*** external "react-refresh/runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-refresh/runtime");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");;

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("59392a4ec230f1a67714")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = (moduleObject, moduleExports, webpackRequire) => {
/******/ 				__webpack_require__.$Refresh$.init();
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		
/******/ 		__webpack_require__.$Refresh$ = {
/******/ 			init: () => {
/******/ 				__webpack_require__.$Refresh$.cleanup = () => (undefined);
/******/ 				__webpack_require__.$Refresh$.register = () => (undefined);
/******/ 				__webpack_require__.$Refresh$.runtime = {};
/******/ 				__webpack_require__.$Refresh$.signature = () => ((type) => (type));
/******/ 			},
/******/ 			setup: (currentModuleId) => {
/******/ 				const prevCleanup = __webpack_require__.$Refresh$.cleanup;
/******/ 				const prevReg = __webpack_require__.$Refresh$.register;
/******/ 				const prevSig = __webpack_require__.$Refresh$.signature;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.register = (type, id) => {
/******/ 					const typeId = currentModuleId + " " + id;
/******/ 					__webpack_require__.$Refresh$.runtime.register(type, typeId);
/******/ 				}
/******/ 		
/******/ 				__webpack_require__.$Refresh$.signature = __webpack_require__.$Refresh$.runtime.createSignatureFunctionForTransform;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.cleanup = (cleanupModuleId) => {
/******/ 					if (currentModuleId === cleanupModuleId) {
/******/ 						__webpack_require__.$Refresh$.register = prevReg;
/******/ 						__webpack_require__.$Refresh$.signature = prevSig;
/******/ 						__webpack_require__.$Refresh$.cleanup = prevCleanup;
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			}).catch(function(err) { if(err.code !== "MODULE_NOT_FOUND") throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
/******/ 	__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/express.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;