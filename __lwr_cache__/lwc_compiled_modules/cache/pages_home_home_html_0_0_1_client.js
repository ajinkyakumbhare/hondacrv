import _implicitStylesheets from "./home.css";
import _implicitScopedStylesheets from "./home.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<main${3}><h2 class="slds-text-align_center first_heading${0}"${2}>Your New Honda</h2><h2 class="slds-text-align_center second_heading${0}"${2}> CR-V </h2><div class="slds-text-align_center${0}"${2}><img src="/public/assets/honda/vti/ignite_red.png" alt="Ignite Red" class="responsiveImage${0}"${2}></div><div class="slds-grid slds-gutters slds-wrap${0}"${2}><div class="slds-col benefits${0}"${2}><div class="fiveNumber${0}"${2}>5</div><div${3}>Low Price Services</div></div><div class="slds-col benefits${0}"${2}><div class="fiveNumber${0}"${2}>5</div><div${3}>Year Unliminted KM Warranty</div></div><div class="slds-col benefits${0}"${2}><div class="fiveNumber${0}"${2}>5</div><div${3}>Year Preminum Roadside Assists</div></div></div></main>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1)];
  /*LWC compiler v9.3.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-6le4c39rot8";
tmpl.legacyStylesheetToken = "pages-home_home";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
