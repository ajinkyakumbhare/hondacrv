import _implicitStylesheets from "./buildAndPrice.css";
import _implicitScopedStylesheets from "./buildAndPrice.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div${3}> Hello i am Build and Price Page </div>`;
const $fragment2 = parseFragment`<button class="slds-button slds-button_destructive${0}"${2}>Destructive Button</button>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1), api_static_fragment($fragment2, 3)];
  /*LWC compiler v9.3.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-39vtkth39o6";
tmpl.legacyStylesheetToken = "-buildAndPrice_buildAndPrice";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
