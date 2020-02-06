function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\r\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === true\">\r\n      <mat-toolbar>Menu</mat-toolbar>\r\n        <mat-nav-list *ngIf = \"isNone()\">\r\n          <a mat-list-item routerLink=\"/login\">Login</a>\r\n          <a mat-list-item routerLink=\"/patient/register\">Register</a>\r\n        </mat-nav-list>\r\n  \r\n        <mat-nav-list *ngIf=\"isPatient()\">\r\n          <a mat-list-item routerLink=\"/patient/profile\">Profile</a>\r\n          <a mat-list-item routerLink=\"/patient/medicalRecord\">Medical record</a>\r\n          <a mat-list-item routerLink=\"/patient/medicalHistory\">Medical history</a>\r\n          <a mat-list-item routerLink=\"/patient/clinics\">Clinics</a>\r\n          <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n        </mat-nav-list>\r\n  \r\n        <mat-nav-list *ngIf=\"isDoctor()\">\r\n          <a mat-list-item routerLink=\"/doctor/profile\">Profile</a>\r\n          <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n        </mat-nav-list>\r\n\r\n        <mat-nav-list *ngIf=\"isNurse()\">\r\n          <a mat-list-item routerLink=\"/nurse/profile\">Profile</a>\r\n          <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n        </mat-nav-list>\r\n\r\n        <mat-nav-list *ngIf=\"isClinicAdministrator()\">\r\n          <a mat-list-item routerLink=\"/clinicadministrator/profile\">Profile</a>\r\n          <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n        </mat-nav-list>\r\n\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <mat-toolbar>\r\n        <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\r\n          <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n        </button>\r\n        <span>Clinical Centre</span>\r\n      </mat-toolbar>\r\n      <!-- Add Content Here -->\r\n      <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinicadministrator-page/clinicadministrator-page.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinicadministrator-page/clinicadministrator-page.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClinicadministratorPageClinicadministratorPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>WELCOME CLINICADMINISTRATOR!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClinicadministratorProfileClinicadministratorProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 offset-md-2\">\n          <mat-card>\n            <h3>{{selectedClinicadministrator.name}} profile</h3>\n            <hr>\n            <form [formGroup]=\"clinicAdministratorForm\" (ngSubmit)=\"onSubmit()\">\n  \n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" readonly=\"readonly\" id=\"email\" text=\"test\"  formControlName=\"email\" class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && clinicAdministratorForm.get('email').errors }\">\n  \n                <div *ngIf=\"submitted && clinicAdministratorForm.get('email').errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"clinicAdministratorForm.get('email').errors['required']\">Email is required</div>\n                  <div *ngIf=\"clinicAdministratorForm.get('email').errors['email']\">Email must be a valid email address</div>\n                </div>\n              </div>\n  \n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && clinicAdministratorForm.get('password').errors }\">\n                <div *ngIf=\"submitted && clinicAdministratorForm.get('password').errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"clinicAdministratorForm.get('password').errors['required']\">Password is required</div>\n                  <div *ngIf=\"clinicAdministratorForm.get('password').errors['minlength']\">Password must be at least 8 characters\n                    long</div>\n                  <div *ngIf=\"clinicAdministratorForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\n                    1 uppercase letter\n                    and 1 number</div>\n                </div>\n              </div>\n  \n              <div class=\"form-group\">\n                <label for=\"name\">First Name</label>\n                <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && clinicAdministratorForm.get('name').errors }\" />\n                <div *ngIf=\"submitted && clinicAdministratorForm.get('name').errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\" clinicAdministratorForm.get('name').errors['required']\">First Name is required</div>\n                </div>\n              </div>\n  \n              <div class=\"form-group\">\n                <label for=\"surname\">Last Name</label>\n                <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && clinicAdministratorForm.get('surname').errors }\" />\n                <div *ngIf=\"submitted && clinicAdministratorForm.get('surname').errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"clinicAdministratorForm.get('surname').errors['required']\">Last Name is required</div>\n                </div>\n              </div>\n  \n              <div class=\"form-group\">\n                <label for=\"number\">Phone Number</label>\n                <input type=\"number\" id=\"number\" formControlName=\"number\"  class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && clinicAdministratorForm.get('number').errors }\" />\n                <div *ngIf=\"submitted && clinicAdministratorForm.get('number').errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"clinicAdministratorForm.get('number').errors['required']\">Phone Number is required</div>\n                  <div *ngIf=\"clinicAdministratorForm.get('number').errors['minlength']\">A phone number must have at least 9\n                    digits\n                  </div>\n                </div>\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\"clinic\">Clinic</label>\n                <input type=\"text\" id=\"clinic\" formControlName=\"clinic\" class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && clinicAdministratorForm.get('clinic').errors }\" />\n                <div *ngIf=\"submitted && clinicAdministratorForm.get('clinic').errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"clinicAdministratorForm.get('clinic').errors['required']\">Clinic is required</div>\n                </div>\n              </div>\n              \n              <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\n  \n            </form>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-page/clinics-page.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-page/clinics-page.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClinicsPageClinicsPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- page-header -->\r\n<div class=\"page-header\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n              <div class=\"page-caption\">\r\n                  <h1 class=\"page-title\">Clinics in the clinical centre</h1>\r\n                  <div class=\"text-center mt-4\">\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- /.page-header-->\r\n\r\n<!-- page-content -->\r\n<div class=\"card-section\">\r\n  <div class=\"container\">\r\n      <div class=\"card-block bg-white mb30\">\r\n          <div class=\"row\">\r\n              <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                  <!-- section-title -->\r\n                  <div class=\"section-title mb-0\">\r\n                      <table mat-table [dataSource]=\"clinicDataSource\" class=\"mat-elevation-z8 table\" matSort>\r\n\r\n                          <ng-container matColumnDef=\"name\">\r\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                              <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\">\r\n                                  {{element.name}}\r\n                              </td>\r\n                          </ng-container>\r\n\r\n                          <ng-container matColumnDef=\"address\">\r\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header> Address </th>\r\n                              <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.address}} </td>\r\n                          </ng-container>\r\n                          <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                      </table>\r\n                      <mat-paginator [pageSize]=itemsPerPage showFirstLastButtons></mat-paginator>\r\n                  </div>\r\n                  <!-- /.section-title -->\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- /.page-content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-page/doctor-page.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-page/doctor-page.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDoctorPageDoctorPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>WELCOME DOCTOR</h1>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-profile/doctor-profile.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-profile/doctor-profile.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDoctorProfileDoctorProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 offset-md-2\">\r\n          <mat-card>\r\n            <h3>{{selectedDoctor.name}} profile</h3>\r\n            <hr>\r\n            <form [formGroup]=\"doctorForm\" (ngSubmit)=\"onSubmit()\">\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" readonly=\"readonly\" id=\"email\" text=\"test\"  formControlName=\"email\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && doctorForm.get('email').errors }\">\r\n  \r\n                <div *ngIf=\"submitted && doctorForm.get('email').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"doctorForm.get('email').errors['required']\">Email is required</div>\r\n                  <div *ngIf=\"doctorForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && doctorForm.get('password').errors }\">\r\n                <div *ngIf=\"submitted && doctorForm.get('password').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"doctorForm.get('password').errors['required']\">Password is required</div>\r\n                  <div *ngIf=\"doctorForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                    long</div>\r\n                  <div *ngIf=\"doctorForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                    1 uppercase letter\r\n                    and 1 number</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"name\">First Name</label>\r\n                <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && doctorForm.get('name').errors }\" />\r\n                <div *ngIf=\"submitted && doctorForm.get('name').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\" doctorForm.get('name').errors['required']\">First Name is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">Last Name</label>\r\n                <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && doctorForm.get('surname').errors }\" />\r\n                <div *ngIf=\"submitted && doctorForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"doctorForm.get('surname').errors['required']\">Last Name is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"number\">Phone Number</label>\r\n                <input type=\"number\" id=\"number\" formControlName=\"number\"  class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && doctorForm.get('number').errors }\" />\r\n                <div *ngIf=\"submitted && doctorForm.get('number').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"doctorForm.get('number').errors['required']\">Phone Number is required</div>\r\n                  <div *ngIf=\"doctorForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                    digits\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"form-group\">\r\n                <label for=\"address\">Address</label>\r\n                <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && doctorForm.get('address').errors }\" />\r\n                <div *ngIf=\"submitted && doctorForm.get('address').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"doctorForm.get('address').errors['required']\">Address is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"city\">City</label>\r\n                <input type=\"text\" id=\"city\" formControlName=\"city\"  class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && doctorForm.get('city').errors }\" />\r\n                <div *ngIf=\"submitted && doctorForm.get('city').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"doctorForm.get('city').errors['required']\">City is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"country\">Country</label>\r\n                <input type=\"text\" id=\"country\" formControlName=\"country\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && doctorForm.get('country').errors }\" />\r\n                <div *ngIf=\"submitted && doctorForm.get('country').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"doctorForm.get('country').errors['required']\">Country is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"specialization\">Specialization</label>\r\n                <input type=\"text\" id=\"specialization\" formControlName=\"specialization\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && doctorForm.get('specialization').errors }\" />\r\n                <div *ngIf=\"submitted && doctorForm.get('specialization').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"doctorForm.get('specialization').errors['required']\">Specialization is required</div>\r\n                </div>\r\n              </div>\r\n              \r\n              <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n  \r\n            </form>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8 offset-md-2\">\r\n              <mat-card>\r\n                <h3>Login</h3>\r\n                <hr>\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n      \r\n                  <div class=\"form-group\">\r\n                    <label for=\"email\">Email</label>\r\n                    <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                      <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                    </div>\r\n                  </div>\r\n      \r\n                  <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                      <div *ngIf=\"f.password.errors.minlength\">Password must be at least 8 characters long</div>\r\n                      <div *ngIf=\"f.password.errors.pattern\">Password must contain at least 1 lowercase, 1 uppercase letter and 1 number</div>\r\n                    </div>\r\n                  </div>\r\n      \r\n                  <div class=\"form-group\">\r\n                    <a routerLink=\"/patient/register\">Don't have an account? Register here.</a>\r\n                  </div>\r\n      \r\n                  <button mat-raised-button color=\"primary\" class=\"pull-right\">Login</button>\r\n      \r\n                </form>\r\n              </mat-card>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-history-page/medical-history-page.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-history-page/medical-history-page.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMedicalHistoryPageMedicalHistoryPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- page-header -->\r\n<div class=\"page-header\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"page-caption\">\r\n                    <h1 class=\"page-title\">History of examinations and operations</h1>\r\n                    <div class=\"text-center mt-4\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.page-header-->\r\n  \r\n  <!-- page-content -->\r\n  <div class=\"card-section\">\r\n    <div class=\"container\">\r\n        <div class=\"card-block bg-white mb30\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <!-- section-title -->\r\n                    <div class=\"section-title mb-0\">\r\n                        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table\" matSort>\r\n  \r\n                            <ng-container matColumnDef=\"Kind\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Kind </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\">{{element.kind}}</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Status\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.status}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Type\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.type}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Room\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Room </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.room}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Discount\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Discount </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.discount}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Nurse\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Nurse </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.nurse}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Doctors\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Doctors </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.doctors}} </td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n                        <mat-paginator [pageSize]=itemsPerPage showFirstLastButtons></mat-paginator>\r\n                    </div>\r\n                    <!-- /.section-title -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.page-content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-record-page/medical-record-page.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-record-page/medical-record-page.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMedicalRecordPageMedicalRecordPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"page-caption\">\r\n                    <h1 class=\"page-title\">Medical record</h1>\r\n                    <div class=\"text-center mt-4\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.page-header-->\r\n  \r\n  <!-- page-content -->\r\n  <div class=\"card-section\">\r\n    <div class=\"container\">\r\n        <div class=\"card-block bg-white mb30\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <!-- section-title -->\r\n                    <div class=\"section-title mb-0\">\r\n                        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table\" matSort>\r\n  \r\n                            <ng-container matColumnDef=\"Height\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Height </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\">{{element.height}}</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Weight\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.weight}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"BloodType\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Blood type </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.bloodType}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Allergies\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Allergies </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.allergies}} </td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n                    </div>\r\n                    <!-- /.section-title -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.page-content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-page/nurse-page.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-page/nurse-page.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNursePageNursePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>WELCOME NURSE</h1>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-profile/nurse-profile.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-profile/nurse-profile.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNurseProfileNurseProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>{{selectedNurse.name}} profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"nurseForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email</label>\r\n              <input type=\"email\" readonly=\"readonly\" id=\"email\" text=\"test\"  formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && nurseForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"nurseForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && nurseForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"nurseForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"nurseForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && nurseForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" nurseForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && nurseForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"address\">Address</label>\r\n              <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseForm.get('address').errors }\" />\r\n              <div *ngIf=\"submitted && nurseForm.get('address').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseForm.get('address').errors['required']\">Address is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"city\">City</label>\r\n              <input type=\"text\" id=\"city\" formControlName=\"city\"  class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseForm.get('city').errors }\" />\r\n              <div *ngIf=\"submitted && nurseForm.get('city').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseForm.get('city').errors['required']\">City is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"country\">Country</label>\r\n              <input type=\"text\" id=\"country\" formControlName=\"country\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseForm.get('country').errors }\" />\r\n              <div *ngIf=\"submitted && nurseForm.get('country').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseForm.get('country').errors['required']\">Country is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"number\">Phone Number</label>\r\n              <input type=\"number\" id=\"number\" formControlName=\"number\"  class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && nurseForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && nurseForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"nurseForm.get('number').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"nurseForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group\">\r\n               <label for=\"insuranceID\">Health Insurance ID</label>\r\n               <input type=\"text\" readonly=\"readonly\" id=\"insuranceID\" formControlName=\"insuranceID\"  class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted &&  patientForm.get('insuranceID').errors }\" />\r\n               <div *ngIf=\"submitted && patientForm.get('insuranceID').errors\" class=\"invalid-feedback\">\r\n                 <div *ngIf=\"patientForm.get('insuranceID').errors['required']\">Health Insurance ID is required\r\n                 </div>\r\n                 <div\r\n                   *ngIf=\"patientForm.get('insuranceID').errors['minlength'] ||patientForm.get('insuranceID').errors['maxlength']\">\r\n                   Health\r\n                   Insurance ID must contain exactly 13 characters</div>\r\n               </div>\r\n             </div> -->\r\n\r\n\r\n\r\n             <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n\r\n           </form>\r\n         </mat-card>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-page/patient-page.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-page/patient-page.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPatientPagePatientPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>WELCOME</h1>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPatientProfilePatientProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 offset-md-2\">\r\n          <mat-card>\r\n            <h3>{{selectedPatient.name}} profile</h3>\r\n            <hr>\r\n            <form [formGroup]=\"patientForm\" (ngSubmit)=\"onSubmit()\">\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" readonly=\"readonly\" id=\"email\" text=\"test\"  formControlName=\"email\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && patientForm.get('email').errors }\">\r\n  \r\n                <div *ngIf=\"submitted && patientForm.get('email').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"patientForm.get('email').errors['required']\">Email is required</div>\r\n                  <div *ngIf=\"patientForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && patientForm.get('password').errors }\">\r\n                <div *ngIf=\"submitted && patientForm.get('password').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"patientForm.get('password').errors['required']\">Password is required</div>\r\n                  <div *ngIf=\"patientForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                    long</div>\r\n                  <div *ngIf=\"patientForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                    1 uppercase letter\r\n                    and 1 number</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"name\">First Name</label>\r\n                <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && patientForm.get('name').errors }\" />\r\n                <div *ngIf=\"submitted && patientForm.get('name').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\" patientForm.get('name').errors['required']\">First Name is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">Last Name</label>\r\n                <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && patientForm.get('surname').errors }\" />\r\n                <div *ngIf=\"submitted && patientForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"patientForm.get('surname').errors['required']\">Last Name is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"address\">Address</label>\r\n                <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && patientForm.get('address').errors }\" />\r\n                <div *ngIf=\"submitted && patientForm.get('address').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"patientForm.get('address').errors['required']\">Address is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"city\">City</label>\r\n                <input type=\"text\" id=\"city\" formControlName=\"city\"  class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && patientForm.get('city').errors }\" />\r\n                <div *ngIf=\"submitted && patientForm.get('city').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"patientForm.get('city').errors['required']\">City is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"country\">Country</label>\r\n                <input type=\"text\" id=\"country\" formControlName=\"country\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && patientForm.get('country').errors }\" />\r\n                <div *ngIf=\"submitted && patientForm.get('country').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"patientForm.get('country').errors['required']\">Country is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"number\">Phone Number</label>\r\n                <input type=\"number\" id=\"number\" formControlName=\"number\"  class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && patientForm.get('number').errors }\" />\r\n                <div *ngIf=\"submitted && patientForm.get('number').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"patientForm.get('number').errors['required']\">Phone Number is required</div>\r\n                  <div *ngIf=\"patientForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                    digits\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"insuranceID\">Health Insurance ID</label>\r\n                <input type=\"text\" readonly=\"readonly\" id=\"insuranceID\" formControlName=\"insuranceID\"  class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted &&  patientForm.get('insuranceID').errors }\" />\r\n                <div *ngIf=\"submitted && patientForm.get('insuranceID').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"patientForm.get('insuranceID').errors['required']\">Health Insurance ID is required\r\n                  </div>\r\n                  <div\r\n                    *ngIf=\"patientForm.get('insuranceID').errors['minlength'] ||patientForm.get('insuranceID').errors['maxlength']\">\r\n                    Health\r\n                    Insurance ID must contain exactly 13 characters</div>\r\n                </div>\r\n              </div>\r\n  \r\n              \r\n  \r\n              <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n  \r\n            </form>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-patient/register-patient.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-patient/register-patient.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterPatientRegisterPatientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 offset-md-2\">\r\n          <mat-card>\r\n            <h3>Registration</h3>\r\n            <hr>\r\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('email').errors }\">\r\n  \r\n                <div *ngIf=\"submitted && registerForm.get('email').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"registerForm.get('email').errors['required']\">Email is required</div>\r\n                  <div *ngIf=\"registerForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('password').errors }\">\r\n                <div *ngIf=\"submitted && registerForm.get('password').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"registerForm.get('password').errors['required']\">Password is required</div>\r\n                  <div *ngIf=\"registerForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                    long</div>\r\n                  <div *ngIf=\"registerForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                    1 uppercase letter\r\n                    and 1 number</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"name\">First Name</label>\r\n                <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('name').errors }\" />\r\n                <div *ngIf=\"submitted && registerForm.get('name').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\" registerForm.get('name').errors['required']\">First Name is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">Last Name</label>\r\n                <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('surname').errors }\" />\r\n                <div *ngIf=\"submitted && registerForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"registerForm.get('surname').errors['required']\">Last Name is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"address\">Address</label>\r\n                <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('address').errors }\" />\r\n                <div *ngIf=\"submitted && registerForm.get('address').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"registerForm.get('address').errors['required']\">Address is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"city\">City</label>\r\n                <input type=\"text\" id=\"city\" formControlName=\"city\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('city').errors }\" />\r\n                <div *ngIf=\"submitted && registerForm.get('city').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"registerForm.get('city').errors['required']\">City is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"country\">Country</label>\r\n                <input type=\"text\" id=\"country\" formControlName=\"country\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('country').errors }\" />\r\n                <div *ngIf=\"submitted && registerForm.get('country').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"registerForm.get('country').errors['required']\">Country is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"number\">Phone Number</label>\r\n                <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('number').errors }\" />\r\n                <div *ngIf=\"submitted && registerForm.get('number').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"registerForm.get('number').errors['required']\">Phone Number is required</div>\r\n                  <div *ngIf=\"registerForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                    digits\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"insuranceID\">Health Insurance ID</label>\r\n                <input type=\"text\" id=\"insuranceID\" formControlName=\"insuranceID\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted &&  registerForm.get('insuranceID').errors }\" />\r\n                <div *ngIf=\"submitted && registerForm.get('insuranceID').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"registerForm.get('insuranceID').errors['required']\">Health Insurance ID is required\r\n                  </div>\r\n                  <div\r\n                    *ngIf=\"registerForm.get('insuranceID').errors['minlength'] ||registerForm.get('insuranceID').errors['maxlength']\">\r\n                    Health\r\n                    Insurance ID must contain exactly 13 characters</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <a routerLink=\"/patient/login\">Already have an account? Login here.</a>\r\n              </div>\r\n  \r\n              <button mat-raised-button color=\"primary\" class=\"pull-right\">Register</button>\r\n  \r\n            </form>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_patient_register_patient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/register-patient/register-patient.component */
    "./src/app/components/register-patient/register-patient.component.ts");
    /* harmony import */


    var _components_patient_page_patient_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/patient-page/patient-page.component */
    "./src/app/components/patient-page/patient-page.component.ts");
    /* harmony import */


    var _components_doctor_page_doctor_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/doctor-page/doctor-page.component */
    "./src/app/components/doctor-page/doctor-page.component.ts");
    /* harmony import */


    var _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/patient-profile/patient-profile.component */
    "./src/app/components/patient-profile/patient-profile.component.ts");
    /* harmony import */


    var _components_medical_record_page_medical_record_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/medical-record-page/medical-record-page.component */
    "./src/app/components/medical-record-page/medical-record-page.component.ts");
    /* harmony import */


    var _components_medical_history_page_medical_history_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/medical-history-page/medical-history-page.component */
    "./src/app/components/medical-history-page/medical-history-page.component.ts");
    /* harmony import */


    var _components_clinics_page_clinics_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/clinics-page/clinics-page.component */
    "./src/app/components/clinics-page/clinics-page.component.ts");
    /* harmony import */


    var _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/doctor-profile/doctor-profile.component */
    "./src/app/components/doctor-profile/doctor-profile.component.ts");
    /* harmony import */


    var _components_nurse_page_nurse_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/nurse-page/nurse-page.component */
    "./src/app/components/nurse-page/nurse-page.component.ts");
    /* harmony import */


    var _components_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/nurse-profile/nurse-profile.component */
    "./src/app/components/nurse-profile/nurse-profile.component.ts");
    /* harmony import */


    var _components_clinicadministrator_page_clinicadministrator_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/clinicadministrator-page/clinicadministrator-page.component */
    "./src/app/components/clinicadministrator-page/clinicadministrator-page.component.ts");
    /* harmony import */


    var _components_clinicadministrator_profile_clinicadministrator_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/clinicadministrator-profile/clinicadministrator-profile.component */
    "./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.ts");

    var routes = [{
      path: '',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'patient/register',
      component: _components_register_patient_register_patient_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPatientComponent"]
    }, {
      path: 'patient/home',
      component: _components_patient_page_patient_page_component__WEBPACK_IMPORTED_MODULE_5__["PatientPageComponent"]
    }, {
      path: 'doctor/home',
      component: _components_doctor_page_doctor_page_component__WEBPACK_IMPORTED_MODULE_6__["DoctorPageComponent"]
    }, {
      path: 'doctor/profile',
      component: _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_11__["DoctorProfileComponent"]
    }, {
      path: 'clinicadministrator/home',
      component: _components_clinicadministrator_page_clinicadministrator_page_component__WEBPACK_IMPORTED_MODULE_14__["ClinicAdministratorPageComponent"]
    }, {
      path: 'clinicadministrator/profile',
      component: _components_clinicadministrator_profile_clinicadministrator_profile_component__WEBPACK_IMPORTED_MODULE_15__["ClinicAdministratorProfileComponent"]
    }, {
      path: 'nurse/home',
      component: _components_nurse_page_nurse_page_component__WEBPACK_IMPORTED_MODULE_12__["NursePageComponent"]
    }, {
      path: 'nurse/profile',
      component: _components_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_13__["NurseProfileComponent"]
    }, {
      path: 'patient/profile',
      component: _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_7__["PatientProfileComponent"]
    }, {
      path: 'patient/medicalRecord',
      component: _components_medical_record_page_medical_record_page_component__WEBPACK_IMPORTED_MODULE_8__["MedicalRecordPageComponent"]
    }, {
      path: 'patient/medicalHistory',
      component: _components_medical_history_page_medical_history_page_component__WEBPACK_IMPORTED_MODULE_9__["MedicalHistoryPageComponent"]
    }, {
      path: 'patient/clinics',
      component: _components_clinics_page_clinics_page_component__WEBPACK_IMPORTED_MODULE_10__["ClinicsPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .main-content {\r\n    margin: 20px 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app/services/user.service */
    "./src/app/services/user.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(breakpointObserver, userService) {
        _classCallCheck(this, AppComponent);

        this.breakpointObserver = breakpointObserver;
        this.userService = userService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
      }

      _createClass(AppComponent, [{
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.userService.isLoggedIn();
        }
      }, {
        key: "isNone",
        value: function isNone() {
          return this.userService.isNone();
        }
      }, {
        key: "isPatient",
        value: function isPatient() {
          return this.userService.isPatient();
        }
      }, {
        key: "isDoctor",
        value: function isDoctor() {
          return this.userService.isDoctor();
        }
      }, {
        key: "isNurse",
        value: function isNurse() {
          return this.userService.isNurse();
        }
      }, {
        key: "isClinicAdministrator",
        value: function isClinicAdministrator() {
          return this.userService.isClinicAdministrator();
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.userService.logout();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }, {
        type: _app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_patient_register_patient_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/register-patient/register-patient.component */
    "./src/app/components/register-patient/register-patient.component.ts");
    /* harmony import */


    var _components_patient_page_patient_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/patient-page/patient-page.component */
    "./src/app/components/patient-page/patient-page.component.ts");
    /* harmony import */


    var _components_doctor_page_doctor_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/doctor-page/doctor-page.component */
    "./src/app/components/doctor-page/doctor-page.component.ts");
    /* harmony import */


    var _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/patient-profile/patient-profile.component */
    "./src/app/components/patient-profile/patient-profile.component.ts");
    /* harmony import */


    var _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/doctor-profile/doctor-profile.component */
    "./src/app/components/doctor-profile/doctor-profile.component.ts");
    /* harmony import */


    var _components_medical_record_page_medical_record_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/medical-record-page/medical-record-page.component */
    "./src/app/components/medical-record-page/medical-record-page.component.ts");
    /* harmony import */


    var _components_medical_history_page_medical_history_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/medical-history-page/medical-history-page.component */
    "./src/app/components/medical-history-page/medical-history-page.component.ts");
    /* harmony import */


    var _components_clinics_page_clinics_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/clinics-page/clinics-page.component */
    "./src/app/components/clinics-page/clinics-page.component.ts");
    /* harmony import */


    var _components_nurse_page_nurse_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/nurse-page/nurse-page.component */
    "./src/app/components/nurse-page/nurse-page.component.ts");
    /* harmony import */


    var _components_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/nurse-profile/nurse-profile.component */
    "./src/app/components/nurse-profile/nurse-profile.component.ts");
    /* harmony import */


    var _components_clinicadministrator_page_clinicadministrator_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/clinicadministrator-page/clinicadministrator-page.component */
    "./src/app/components/clinicadministrator-page/clinicadministrator-page.component.ts");
    /* harmony import */


    var _components_clinicadministrator_profile_clinicadministrator_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/clinicadministrator-profile/clinicadministrator-profile.component */
    "./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _components_register_patient_register_patient_component__WEBPACK_IMPORTED_MODULE_13__["RegisterPatientComponent"], _components_patient_page_patient_page_component__WEBPACK_IMPORTED_MODULE_14__["PatientPageComponent"], _components_doctor_page_doctor_page_component__WEBPACK_IMPORTED_MODULE_15__["DoctorPageComponent"], _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_16__["PatientProfileComponent"], _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_17__["DoctorProfileComponent"], _components_medical_record_page_medical_record_page_component__WEBPACK_IMPORTED_MODULE_18__["MedicalRecordPageComponent"], _components_medical_history_page_medical_history_page_component__WEBPACK_IMPORTED_MODULE_19__["MedicalHistoryPageComponent"], _components_clinics_page_clinics_page_component__WEBPACK_IMPORTED_MODULE_20__["ClinicsPageComponent"], _components_nurse_page_nurse_page_component__WEBPACK_IMPORTED_MODULE_21__["NursePageComponent"], _components_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_22__["NurseProfileComponent"], _components_clinicadministrator_page_clinicadministrator_page_component__WEBPACK_IMPORTED_MODULE_23__["ClinicAdministratorPageComponent"], _components_clinicadministrator_profile_clinicadministrator_profile_component__WEBPACK_IMPORTED_MODULE_24__["ClinicAdministratorProfileComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
        timeOut: 2000,
        positionClass: 'toast-top-right',
        preventDuplicates: true
      }), _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _material_module__WEBPACK_IMPORTED_MODULE_11__["DemoMaterialModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/clinicadministrator-page/clinicadministrator-page.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/clinicadministrator-page/clinicadministrator-page.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClinicadministratorPageClinicadministratorPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpbmljYWRtaW5pc3RyYXRvci1wYWdlL2NsaW5pY2FkbWluaXN0cmF0b3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/clinicadministrator-page/clinicadministrator-page.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/clinicadministrator-page/clinicadministrator-page.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ClinicAdministratorPageComponent */

  /***/
  function srcAppComponentsClinicadministratorPageClinicadministratorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicAdministratorPageComponent", function () {
      return ClinicAdministratorPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClinicAdministratorPageComponent =
    /*#__PURE__*/
    function () {
      function ClinicAdministratorPageComponent() {
        _classCallCheck(this, ClinicAdministratorPageComponent);
      }

      _createClass(ClinicAdministratorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClinicAdministratorPageComponent;
    }();

    ClinicAdministratorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clinicadministrator-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clinicadministrator-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinicadministrator-page/clinicadministrator-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clinicadministrator-page.component.css */
      "./src/app/components/clinicadministrator-page/clinicadministrator-page.component.css")).default]
    })], ClinicAdministratorPageComponent);
    /***/
  },

  /***/
  "./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.css":
  /*!**************************************************************************************************!*\
    !*** ./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.css ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClinicadministratorProfileClinicadministratorProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpbmljYWRtaW5pc3RyYXRvci1wcm9maWxlL2NsaW5pY2FkbWluaXN0cmF0b3ItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ClinicAdministratorProfileComponent */

  /***/
  function srcAppComponentsClinicadministratorProfileClinicadministratorProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicAdministratorProfileComponent", function () {
      return ClinicAdministratorProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_clinicadministrator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/clinicadministrator */
    "./src/app/models/clinicadministrator.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_app_services_clinicadministrator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/clinicadministrator.service */
    "./src/app/services/clinicadministrator.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_models_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/models/role */
    "./src/app/models/role.ts");

    var ClinicAdministratorProfileComponent =
    /*#__PURE__*/
    function () {
      function ClinicAdministratorProfileComponent(clinicadministratorService, formBuilder, router, userService) {
        _classCallCheck(this, ClinicAdministratorProfileComponent);

        this.clinicadministratorService = clinicadministratorService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.submitted = false;
        this.user = JSON.parse(userService.isLoggedIn());
        console.log(this.user);
        this.selectedClinicAdministrator = clinicadministratorService.getClinicAdministrator(this.user.email);
        console.log(this.selectedClinicAdministrator);
      }

      _createClass(ClinicAdministratorProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.clinicAdministratorForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.selectedClinicAdministrator.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.selectedClinicAdministrator.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.selectedClinicAdministrator.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.selectedClinicAdministrator.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.selectedClinicAdministrator.number, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9)]),
            clinic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.selectedClinicAdministrator.clinic, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // Stop here if form is invalid

          if (this.clinicAdministratorForm.invalid) {
            return;
          }

          this.clinicAdministrator = new src_app_models_clinicadministrator__WEBPACK_IMPORTED_MODULE_2__["ClinicAdministrator"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.clinic.value);
          this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"](this.f.email.value, this.f.password.value, src_app_models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].CLINICADMINISTRATOR);
          this.editClinicAdministrator();
        }
      }, {
        key: "editClinicAdministrator",
        value: function editClinicAdministrator() {
          var _this = this;

          this.clinicadministratorService.editClinicAdministrator(this.clinicAdministrator).subscribe(function (data) {
            _this.userService.setUser(_this.user);

            _this.clinicadministratorService.setClinicAdministrator(_this.clinicAdministrator);

            _this.router.navigate(['/clinicadministrator/home']);
          }, function (error) {
            alert('Error edit clinicadministrator');
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.clinicAdministratorForm.controls;
        }
      }]);

      return ClinicAdministratorProfileComponent;
    }();

    ClinicAdministratorProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_clinicadministrator_service__WEBPACK_IMPORTED_MODULE_5__["ClinicAdministratorService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }];
    };

    ClinicAdministratorProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clinicadministrator-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clinicadministrator-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clinicadministrator-profile.component.css */
      "./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.css")).default]
    })], ClinicAdministratorProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/clinics-page/clinics-page.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/clinics-page/clinics-page.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClinicsPageClinicsPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpbmljcy1wYWdlL2NsaW5pY3MtcGFnZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/clinics-page/clinics-page.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/clinics-page/clinics-page.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ClinicsPageComponent */

  /***/
  function srcAppComponentsClinicsPageClinicsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicsPageComponent", function () {
      return ClinicsPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/clinic.service */
    "./src/app/services/clinic.service.ts");

    var ClinicsPageComponent =
    /*#__PURE__*/
    function () {
      function ClinicsPageComponent(clinicService) {
        _classCallCheck(this, ClinicsPageComponent);

        this.clinicService = clinicService;
        this.displayedColumns = ['name', 'address'];
        this.clinicDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.clinics = new Array();
        this.clinics = this.clinicService.getAllClinics();
        this.all();
      }

      _createClass(ClinicsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.all();
        }
      }, {
        key: "all",
        value: function all() {
          this.clinicDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.clinicService.getAllClinics());
          this.clinicDataSource.paginator = this.paginator;
        }
      }]);

      return ClinicsPageComponent;
    }();

    ClinicsPageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], ClinicsPageComponent.prototype, "paginator", void 0);
    ClinicsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clinics-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clinics-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-page/clinics-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clinics-page.component.css */
      "./src/app/components/clinics-page/clinics-page.component.css")).default]
    })], ClinicsPageComponent);
    /***/
  },

  /***/
  "./src/app/components/doctor-page/doctor-page.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/doctor-page/doctor-page.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDoctorPageDoctorPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLXBhZ2UvZG9jdG9yLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/doctor-page/doctor-page.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/doctor-page/doctor-page.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DoctorPageComponent */

  /***/
  function srcAppComponentsDoctorPageDoctorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorPageComponent", function () {
      return DoctorPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DoctorPageComponent =
    /*#__PURE__*/
    function () {
      function DoctorPageComponent() {
        _classCallCheck(this, DoctorPageComponent);
      }

      _createClass(DoctorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DoctorPageComponent;
    }();

    DoctorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doctor-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./doctor-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-page/doctor-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./doctor-page.component.css */
      "./src/app/components/doctor-page/doctor-page.component.css")).default]
    })], DoctorPageComponent);
    /***/
  },

  /***/
  "./src/app/components/doctor-profile/doctor-profile.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/doctor-profile/doctor-profile.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDoctorProfileDoctorProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLXByb2ZpbGUvZG9jdG9yLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/doctor-profile/doctor-profile.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/doctor-profile/doctor-profile.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DoctorProfileComponent */

  /***/
  function srcAppComponentsDoctorProfileDoctorProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorProfileComponent", function () {
      return DoctorProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_doctor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/doctor */
    "./src/app/models/doctor.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_doctor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _models_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../models/role */
    "./src/app/models/role.ts");

    var DoctorProfileComponent =
    /*#__PURE__*/
    function () {
      function DoctorProfileComponent(doctorService, formBuilder, router, userService) {
        _classCallCheck(this, DoctorProfileComponent);

        this.doctorService = doctorService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.submitted = false;
        this.user = JSON.parse(userService.isLoggedIn());
        console.log(this.user);
        this.selectedDoctor = doctorService.getDoctor(this.user.email);
        console.log(this.selectedDoctor);
      }

      _createClass(DoctorProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.doctorForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.number, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(9)]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.country, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            specialization: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.specialization, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // Stop here if form is invalid

          if (this.doctorForm.invalid) {
            return;
          }

          this.doctor = new _models_doctor__WEBPACK_IMPORTED_MODULE_2__["Doctor"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.address.value, this.f.city.value, this.f.country.value, this.f.specialization.value);
          this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](this.f.email.value, this.f.password.value, _models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].DOCTOR);
          this.editDoctor();
        }
      }, {
        key: "editDoctor",
        value: function editDoctor() {
          var _this2 = this;

          this.doctorService.editDoctor(this.doctor).subscribe(function (data) {
            _this2.userService.setUser(_this2.user);

            _this2.doctorService.setDoctor(_this2.doctor);

            _this2.router.navigate(['/doctor/home']);
          }, function (error) {
            alert('Error edit doctor');
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.doctorForm.controls;
        }
      }]);

      return DoctorProfileComponent;
    }();

    DoctorProfileComponent.ctorParameters = function () {
      return [{
        type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_5__["DoctorService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }];
    };

    DoctorProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doctor-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./doctor-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-profile/doctor-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./doctor-profile.component.css */
      "./src/app/components/doctor-profile/doctor-profile.component.css")).default]
    })], DoctorProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginUser, LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginUser", function () {
      return LoginUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/role */
    "./src/app/models/role.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_doctor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_nurse_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/nurse.service */
    "./src/app/services/nurse.service.ts");
    /* harmony import */


    var src_app_services_clinicadministrator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/clinicadministrator.service */
    "./src/app/services/clinicadministrator.service.ts");

    var LoginUser = function LoginUser(email, password) {
      _classCallCheck(this, LoginUser);

      this.email = email;
      this.password = password;
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(patientService, formBuilder, router, userService, doctorService, nurseService, clinicadministatorService) {
        _classCallCheck(this, LoginComponent);

        this.patientService = patientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.doctorService = doctorService;
        this.nurseService = nurseService;
        this.clinicadministatorService = clinicadministatorService;
        this.submitted = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;
          if (this.loginForm.invalid) return;
          this.loginUser = new LoginUser(this.f.email.value, this.f.password.value);
          this.user = this.userService.getUser(this.f.email.value);
          console.log(this.user);
          this.attemptLogin();
        }
      }, {
        key: "attemptLogin",
        value: function attemptLogin() {
          var _this3 = this;

          if (this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].PATIENT && this.loginUser.password === this.user.password) {
            console.log(this.user);
            this.patientService.loginPatient(this.user).subscribe(function (data) {
              console.log(data);

              if (data !== null) {
                console.log('Successful logged in');

                _this3.router.navigate(['/patient/home']);
              } else {
                console.log('Login error');
              }
            }, function (error) {
              console.log(error);
            });
          } else if (this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].DOCTOR && this.loginUser.password === this.user.password) {
            console.log(this.user);
            this.doctorService.loginDoctor(this.user).subscribe(function (data) {
              console.log(data);

              if (data !== null) {
                console.log('Successful logged in');

                _this3.router.navigate(['/doctor/home']);
              } else {
                console.log('Login error');
              }
            }, function (error) {
              console.log(error);
            });
          } else if (this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].CLINICADMINISTRATOR && this.loginUser.password === this.user.password) {
            console.log(this.user);
            this.clinicadministatorService.loginClinicAdministrator(this.user).subscribe(function (data) {
              console.log(data);

              if (data !== null) {
                console.log('Successful logged in');

                _this3.router.navigate(['/clinicadministrator/home']);
              } else {
                console.log('Login error');
              }
            }, function (error) {
              console.log(error);
            });
          } else if (this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].NURSE && this.loginUser.password === this.user.password) {
            console.log(this.user);
            this.nurseService.loginNurse(this.user).subscribe(function (data) {
              console.log(data);

              if (data !== null) {
                console.log('Successful logged in');

                _this3.router.navigate(['/nurse/home']);
              } else {
                console.log('Login error');
              }
            }, function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_7__["DoctorService"]
      }, {
        type: src_app_services_nurse_service__WEBPACK_IMPORTED_MODULE_8__["NurseService"]
      }, {
        type: src_app_services_clinicadministrator_service__WEBPACK_IMPORTED_MODULE_9__["ClinicAdministratorService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/medical-history-page/medical-history-page.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/components/medical-history-page/medical-history-page.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMedicalHistoryPageMedicalHistoryPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVkaWNhbC1oaXN0b3J5LXBhZ2UvbWVkaWNhbC1oaXN0b3J5LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/medical-history-page/medical-history-page.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/medical-history-page/medical-history-page.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: MedicalHistoryPageComponent */

  /***/
  function srcAppComponentsMedicalHistoryPageMedicalHistoryPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicalHistoryPageComponent", function () {
      return MedicalHistoryPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_examination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/examination.service */
    "./src/app/services/examination.service.ts");
    /* harmony import */


    var src_app_models_examinationTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/examinationTable */
    "./src/app/models/examinationTable.ts");

    var MedicalHistoryPageComponent =
    /*#__PURE__*/
    function () {
      function MedicalHistoryPageComponent(examinationService) {
        _classCallCheck(this, MedicalHistoryPageComponent);

        this.examinationService = examinationService;
        this.displayedColumns = ['Kind', 'Status', 'Type', 'Room', 'Discount', 'Nurse', 'Doctors'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.examinations = new Array();
        this.listEx = new Array();
        this.examinations = this.examinationService.getAllExaminations();
        console.log("medicalHPage  " + this.examinations);
        this.all();
      }

      _createClass(MedicalHistoryPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.all();
        }
      }, {
        key: "all",
        value: function all() {
          this.fillData();
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.listEx);
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "fillData",
        value: function fillData() {
          for (var i = 0; i < this.examinations.length; i++) {
            var element = this.examinations[i];
            var exaTable = new src_app_models_examinationTable__WEBPACK_IMPORTED_MODULE_4__["ExaminationTable"](this.examinations[i].id, this.examinations[i].kind, this.examinations[i].status, "type", "room1", "0", "nurse1", "patient1", "doctor1,doctor2", "0");
            var truee = 0;

            for (var j = 0; j < this.listEx.length; j++) {
              var elemente = this.listEx[j];

              if (elemente.id === exaTable.id) {
                truee = 1;
              }
            }

            if (truee === 0) {
              this.listEx.push(exaTable);
            }
          }
        }
      }]);

      return MedicalHistoryPageComponent;
    }();

    MedicalHistoryPageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_examination_service__WEBPACK_IMPORTED_MODULE_3__["ExaminationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], MedicalHistoryPageComponent.prototype, "paginator", void 0);
    MedicalHistoryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-medical-history-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./medical-history-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-history-page/medical-history-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./medical-history-page.component.css */
      "./src/app/components/medical-history-page/medical-history-page.component.css")).default]
    })], MedicalHistoryPageComponent);
    /***/
  },

  /***/
  "./src/app/components/medical-record-page/medical-record-page.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/medical-record-page/medical-record-page.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMedicalRecordPageMedicalRecordPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVkaWNhbC1yZWNvcmQtcGFnZS9tZWRpY2FsLXJlY29yZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/medical-record-page/medical-record-page.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/medical-record-page/medical-record-page.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: Table, MedicalRecordPageComponent */

  /***/
  function srcAppComponentsMedicalRecordPageMedicalRecordPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Table", function () {
      return Table;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicalRecordPageComponent", function () {
      return MedicalRecordPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_medical_record_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/medical-record.service */
    "./src/app/services/medical-record.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var Table = function Table(height, weight, bloodType, allergies) {
      _classCallCheck(this, Table);

      this.height = height;
      this.weight = weight;
      this.bloodType = bloodType;
      this.allergies = allergies;
    };

    var MedicalRecordPageComponent =
    /*#__PURE__*/
    function () {
      function MedicalRecordPageComponent(medicalRecordService, userService) {
        _classCallCheck(this, MedicalRecordPageComponent);

        this.medicalRecordService = medicalRecordService;
        this.userService = userService;
        this.displayedColumns = ['Height', 'Weight', 'BloodType', 'Allergies'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.records = new Array();
        this.listTable = new Array();
        this.records = this.medicalRecordService.getAllRecords();
        this.user = JSON.parse(userService.isLoggedIn());
      }

      _createClass(MedicalRecordPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.all();
        }
      }, {
        key: "all",
        value: function all() {
          this.fillData();
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.listTable);
        }
      }, {
        key: "fillData",
        value: function fillData() {
          /*for (let i = 0; i < this.records.length; i++) {
            const element = this.records[i];
                  const table=new Table(element.height,element.weight,element.bloodType,element.allergies);
                  this.listTable.push(table);
                  
          }*/
          var table = new Table(180, 85, "A+", "No allergies");
          this.listTable.push(table);
        }
      }]);

      return MedicalRecordPageComponent;
    }();

    MedicalRecordPageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_medical_record_service__WEBPACK_IMPORTED_MODULE_3__["MedicalRecordService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], MedicalRecordPageComponent.prototype, "paginator", void 0);
    MedicalRecordPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-medical-record-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./medical-record-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/medical-record-page/medical-record-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./medical-record-page.component.css */
      "./src/app/components/medical-record-page/medical-record-page.component.css")).default]
    })], MedicalRecordPageComponent);
    /***/
  },

  /***/
  "./src/app/components/nurse-page/nurse-page.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/nurse-page/nurse-page.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNursePageNursePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVyc2UtcGFnZS9udXJzZS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/nurse-page/nurse-page.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/nurse-page/nurse-page.component.ts ***!
    \***************************************************************/

  /*! exports provided: NursePageComponent */

  /***/
  function srcAppComponentsNursePageNursePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NursePageComponent", function () {
      return NursePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NursePageComponent =
    /*#__PURE__*/
    function () {
      function NursePageComponent() {
        _classCallCheck(this, NursePageComponent);
      }

      _createClass(NursePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NursePageComponent;
    }();

    NursePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nurse-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nurse-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-page/nurse-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nurse-page.component.css */
      "./src/app/components/nurse-page/nurse-page.component.css")).default]
    })], NursePageComponent);
    /***/
  },

  /***/
  "./src/app/components/nurse-profile/nurse-profile.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/nurse-profile/nurse-profile.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNurseProfileNurseProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVyc2UtcHJvZmlsZS9udXJzZS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/nurse-profile/nurse-profile.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/nurse-profile/nurse-profile.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NurseProfileComponent */

  /***/
  function srcAppComponentsNurseProfileNurseProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NurseProfileComponent", function () {
      return NurseProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NurseProfileComponent =
    /*#__PURE__*/
    function () {
      function NurseProfileComponent() {
        _classCallCheck(this, NurseProfileComponent);
      }

      _createClass(NurseProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NurseProfileComponent;
    }();

    NurseProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nurse-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nurse-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-profile/nurse-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nurse-profile.component.css */
      "./src/app/components/nurse-profile/nurse-profile.component.css")).default]
    })], NurseProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/patient-page/patient-page.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/patient-page/patient-page.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPatientPagePatientPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1wYWdlL3BhdGllbnQtcGFnZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/patient-page/patient-page.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/patient-page/patient-page.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PatientPageComponent */

  /***/
  function srcAppComponentsPatientPagePatientPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientPageComponent", function () {
      return PatientPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientPageComponent =
    /*#__PURE__*/
    function () {
      function PatientPageComponent() {
        _classCallCheck(this, PatientPageComponent);
      }

      _createClass(PatientPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientPageComponent;
    }();

    PatientPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-page/patient-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-page.component.css */
      "./src/app/components/patient-page/patient-page.component.css")).default]
    })], PatientPageComponent);
    /***/
  },

  /***/
  "./src/app/components/patient-profile/patient-profile.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/patient-profile/patient-profile.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPatientProfilePatientProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1wcm9maWxlL3BhdGllbnQtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/patient-profile/patient-profile.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/patient-profile/patient-profile.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PatientProfileComponent */

  /***/
  function srcAppComponentsPatientProfilePatientProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientProfileComponent", function () {
      return PatientProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/patient */
    "./src/app/models/patient.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _models_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../models/role */
    "./src/app/models/role.ts");
    /* harmony import */


    var _models_patientStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../models/patientStatus */
    "./src/app/models/patientStatus.ts");

    var PatientProfileComponent =
    /*#__PURE__*/
    function () {
      function PatientProfileComponent(patientService, formBuilder, router, userService) {
        _classCallCheck(this, PatientProfileComponent);

        this.patientService = patientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.submitted = false;
        this.user = JSON.parse(userService.isLoggedIn());
        console.log(this.user);
        this.selectedPatient = patientService.getPatient(this.user.email);
        console.log(this.selectedPatient);
      }

      _createClass(PatientProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.patientForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedPatient.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedPatient.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedPatient.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedPatient.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedPatient.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedPatient.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedPatient.country, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedPatient.number, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(9)]),
            insuranceID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedPatient.insuranceID, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(13)])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // Stop here if form is invalid

          if (this.patientForm.invalid) {
            return;
          }

          this.patient = new _models_patient__WEBPACK_IMPORTED_MODULE_2__["Patient"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.address.value, this.f.city.value, this.f.country.value, this.f.insuranceID.value, _models_patientStatus__WEBPACK_IMPORTED_MODULE_9__["PatientStatus"].AWAITING);
          this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](this.f.email.value, this.f.password.value, _models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].PATIENT);
          this.editPatient();
        }
      }, {
        key: "editPatient",
        value: function editPatient() {
          var _this4 = this;

          this.patientService.editPatient(this.patient).subscribe(function (data) {
            _this4.userService.setUser(_this4.user);

            _this4.patientService.setPatient(_this4.patient);

            _this4.router.navigate(['/patient/home']);
          }, function (error) {
            alert('Error edit patient');
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.patientForm.controls;
        }
      }]);

      return PatientProfileComponent;
    }();

    PatientProfileComponent.ctorParameters = function () {
      return [{
        type: _services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }];
    };

    PatientProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-profile.component.css */
      "./src/app/components/patient-profile/patient-profile.component.css")).default]
    })], PatientProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/register-patient/register-patient.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/components/register-patient/register-patient.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterPatientRegisterPatientComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItcGF0aWVudC9yZWdpc3Rlci1wYXRpZW50LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/register-patient/register-patient.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/register-patient/register-patient.component.ts ***!
    \***************************************************************************/

  /*! exports provided: RegisterPatientComponent */

  /***/
  function srcAppComponentsRegisterPatientRegisterPatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPatientComponent", function () {
      return RegisterPatientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/patient */
    "./src/app/models/patient.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _models_patientStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/patientStatus */
    "./src/app/models/patientStatus.ts");
    /* harmony import */


    var _models_role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/role */
    "./src/app/models/role.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");

    var RegisterPatientComponent =
    /*#__PURE__*/
    function () {
      function RegisterPatientComponent(patientService, formBuilder, router, userService) {
        _classCallCheck(this, RegisterPatientComponent);

        this.patientService = patientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.submitted = false;
      }

      _createClass(RegisterPatientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9)]),
            insuranceID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(13)])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // Stop here if form is invalid

          if (this.registerForm.invalid) {
            return;
          }

          this.patient = new _models_patient__WEBPACK_IMPORTED_MODULE_2__["Patient"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.address.value, this.f.city.value, this.f.country.value, this.f.insuranceID.value, _models_patientStatus__WEBPACK_IMPORTED_MODULE_6__["PatientStatus"].AWAITING);
          this.user = new _models_user__WEBPACK_IMPORTED_MODULE_8__["User"](this.f.email.value, this.f.password.value, _models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].PATIENT);
          this.createPatient();
        }
      }, {
        key: "createPatient",
        value: function createPatient() {
          var _this5 = this;

          this.patientService.newPatient(this.patient).subscribe(function (data) {
            _this5.userService.addUser(_this5.user);

            console.log(_this5.user);

            _this5.patientService.addPatient(_this5.patient);

            _this5.router.navigate(['/login']);
          }, function (error) {
            alert('Error registration patient');
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return RegisterPatientComponent;
    }();

    RegisterPatientComponent.ctorParameters = function () {
      return [{
        type: _services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
      }];
    };

    RegisterPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-patient',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-patient.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-patient/register-patient.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-patient.component.css */
      "./src/app/components/register-patient/register-patient.component.css")).default]
    })], RegisterPatientComponent);
    /***/
  },

  /***/
  "./src/app/material-module.ts":
  /*!************************************!*\
    !*** ./src/app/material-module.ts ***!
    \************************************/

  /*! exports provided: DemoMaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function () {
      return DemoMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");

    var DemoMaterialModule = function DemoMaterialModule() {
      _classCallCheck(this, DemoMaterialModule);
    };

    DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
    })], DemoMaterialModule);
    /***/
  },

  /***/
  "./src/app/models/clinic.ts":
  /*!**********************************!*\
    !*** ./src/app/models/clinic.ts ***!
    \**********************************/

  /*! exports provided: Clinic */

  /***/
  function srcAppModelsClinicTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Clinic", function () {
      return Clinic;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Clinic = function Clinic(name, address, description, id) {
      _classCallCheck(this, Clinic);

      this.name = name;
      this.address = address;
      this.description = description;
      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/models/clinicadministrator.ts":
  /*!***********************************************!*\
    !*** ./src/app/models/clinicadministrator.ts ***!
    \***********************************************/

  /*! exports provided: ClinicAdministrator */

  /***/
  function srcAppModelsClinicadministratorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicAdministrator", function () {
      return ClinicAdministrator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ClinicAdministrator = function ClinicAdministrator(email, password, name, surname, number, clinic) {
      _classCallCheck(this, ClinicAdministrator);

      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.number = number;
      this.clinic = clinic;
    };
    /***/

  },

  /***/
  "./src/app/models/doctor.ts":
  /*!**********************************!*\
    !*** ./src/app/models/doctor.ts ***!
    \**********************************/

  /*! exports provided: Doctor */

  /***/
  function srcAppModelsDoctorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Doctor", function () {
      return Doctor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Doctor = function Doctor(email, password, name, surname, number1, address, city, country, specialization) {
      _classCallCheck(this, Doctor);

      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.number = number1;
      this.address = address;
      this.city = city;
      this.country = country;
      this.specialization = specialization;
    };
    /***/

  },

  /***/
  "./src/app/models/examination.ts":
  /*!***************************************!*\
    !*** ./src/app/models/examination.ts ***!
    \***************************************/

  /*! exports provided: Examination */

  /***/
  function srcAppModelsExaminationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Examination", function () {
      return Examination;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Examination = //   nurse: Nurse;
    //  patient: Patient;
    function Examination(id, kind, status, discount) {
      _classCallCheck(this, Examination);

      this.id = id;
      this.kind = kind;
      this.status = status; //   this.examinationType = examinationType;
      //    this.room = room;

      this.discount = discount; //      this.nurse = nurse;
      //    this.patient = patient;
    };
    /***/

  },

  /***/
  "./src/app/models/examinationTable.ts":
  /*!********************************************!*\
    !*** ./src/app/models/examinationTable.ts ***!
    \********************************************/

  /*! exports provided: ExaminationTable */

  /***/
  function srcAppModelsExaminationTableTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExaminationTable", function () {
      return ExaminationTable;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ExaminationTable = function ExaminationTable(id, kind, status, type, room, discount, nurse, patient, doctors, interval) {
      _classCallCheck(this, ExaminationTable);

      this.id = id;
      this.kind = kind;
      this.status = status;
      this.type = type;
      this.room = room;
      this.discount = discount;
      this.nurse = nurse;
      this.patient = patient;
      this.doctors = doctors;
      this.interval = interval;
    };
    /***/

  },

  /***/
  "./src/app/models/medicalRecord.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/medicalRecord.ts ***!
    \*****************************************/

  /*! exports provided: MedicalRecord */

  /***/
  function srcAppModelsMedicalRecordTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicalRecord", function () {
      return MedicalRecord;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MedicalRecord = // patient:Patient;
    function MedicalRecord(height, weight, bloodType, allergies) {
      _classCallCheck(this, MedicalRecord);

      this.height = height;
      this.weight = weight;
      this.bloodType = bloodType;
      this.allergies = allergies; // this.patient=patient;
    };
    /***/

  },

  /***/
  "./src/app/models/nurse.ts":
  /*!*********************************!*\
    !*** ./src/app/models/nurse.ts ***!
    \*********************************/

  /*! exports provided: Nurse */

  /***/
  function srcAppModelsNurseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Nurse", function () {
      return Nurse;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Nurse = function Nurse(email, password, name, surname, number1, address, city, country) {
      _classCallCheck(this, Nurse);

      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.number = number1;
      this.address = address;
      this.city = city;
      this.country = country;
    };
    /***/

  },

  /***/
  "./src/app/models/patient.ts":
  /*!***********************************!*\
    !*** ./src/app/models/patient.ts ***!
    \***********************************/

  /*! exports provided: Patient */

  /***/
  function srcAppModelsPatientTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Patient", function () {
      return Patient;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Patient = function Patient(email, password, name, surname, number, address, city, country, insuranceID, status) {
      _classCallCheck(this, Patient);

      this.email = email;
      this.password = password;
      this.name = name;
      this.surname = surname;
      this.number = number;
      this.address = address;
      this.city = city;
      this.country = country;
      this.insuranceID = insuranceID;
      this.status = status;
    };
    /***/

  },

  /***/
  "./src/app/models/patientStatus.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/patientStatus.ts ***!
    \*****************************************/

  /*! exports provided: PatientStatus */

  /***/
  function srcAppModelsPatientStatusTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientStatus", function () {
      return PatientStatus;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PatientStatus;

    (function (PatientStatus) {
      PatientStatus[PatientStatus["AWAITING"] = 0] = "AWAITING";
      PatientStatus[PatientStatus["APPROVED"] = 1] = "APPROVED";
    })(PatientStatus || (PatientStatus = {}));
    /***/

  },

  /***/
  "./src/app/models/role.ts":
  /*!********************************!*\
    !*** ./src/app/models/role.ts ***!
    \********************************/

  /*! exports provided: Role */

  /***/
  function srcAppModelsRoleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return Role;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Role;

    (function (Role) {
      Role[Role["PATIENT"] = 0] = "PATIENT";
      Role[Role["DOCTOR"] = 1] = "DOCTOR";
      Role[Role["NURSE"] = 2] = "NURSE";
      Role[Role["CLINICADMINISTRATOR"] = 3] = "CLINICADMINISTRATOR";
      Role[Role["NONE"] = 4] = "NONE";
    })(Role || (Role = {}));
    /***/

  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(email, password, role) {
      _classCallCheck(this, User);

      this.email = email;
      this.password = password;
      this.role = role;
    };
    /***/

  },

  /***/
  "./src/app/services/clinic.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/clinic.service.ts ***!
    \********************************************/

  /*! exports provided: ClinicService */

  /***/
  function srcAppServicesClinicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicService", function () {
      return ClinicService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models_clinic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/clinic */
    "./src/app/models/clinic.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ClinicService =
    /*#__PURE__*/
    function () {
      function ClinicService(http) {
        _classCallCheck(this, ClinicService);

        this.http = http;
        this.urlClinic = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].clinic;
        this.listClinics = new Array();
        this.getAllClinics();
      }

      _createClass(ClinicService, [{
        key: "addClinic",
        value: function addClinic(c) {
          if (this.getClinic(c.name) === null) {
            this.listClinics.push(c);
          }
        }
      }, {
        key: "getClinic",
        value: function getClinic(name) {
          if (this.listClinics.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.listClinics[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var u = _step.value;

              if (u.name === name) {
                return u;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return null;
        }
      }, {
        key: "getClinicByName",
        value: function getClinicByName(name) {
          return this.http.get(this.urlClinic + '/' + name);
        }
      }, {
        key: "getAllClinics",
        value: function getAllClinics() {
          var _this6 = this;

          this.http.get(this.urlClinic + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var c = _step2.value;
                _this6.clinic = new _models_clinic__WEBPACK_IMPORTED_MODULE_3__["Clinic"](c.name, c.address, c.description, c.id);

                _this6.addClinic(_this6.clinic);

                console.log(_this6.clinic);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }, function (error) {
            console.log(error);
          });
          return this.listClinics;
        }
      }]);

      return ClinicService;
    }();

    ClinicService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ClinicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ClinicService);
    /***/
  },

  /***/
  "./src/app/services/clinicadministrator.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/clinicadministrator.service.ts ***!
    \*********************************************************/

  /*! exports provided: ClinicAdministratorService */

  /***/
  function srcAppServicesClinicadministratorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicAdministratorService", function () {
      return ClinicAdministratorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_clinicadministrator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/clinicadministrator */
    "./src/app/models/clinicadministrator.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");

    var ClinicAdministratorService =
    /*#__PURE__*/
    function () {
      function ClinicAdministratorService(http, userService) {
        _classCallCheck(this, ClinicAdministratorService);

        this.http = http;
        this.userService = userService;
        this.urlClinicAdministrator = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].clinicAdministrator;
        this.listClinicAdministrators = new Array();
        this.getAllClinicAdministrators();
      }

      _createClass(ClinicAdministratorService, [{
        key: "newClinicAdministrator",
        value: function newClinicAdministrator(clinicAdministrator) {
          return this.http.post(this.urlClinicAdministrator + '/register', clinicAdministrator);
        }
      }, {
        key: "loginClinicAdministrator",
        value: function loginClinicAdministrator(clinicAdministrator) {
          this.userService.setToken(clinicAdministrator);
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/login', clinicAdministrator, {
            responseType: 'text'
          });
        }
      }, {
        key: "editClinicAdministrator",
        value: function editClinicAdministrator(clinicAdministrator) {
          return this.http.post(this.urlClinicAdministrator + '/edit', clinicAdministrator, {
            responseType: 'text'
          });
        }
      }, {
        key: "addClinicAdministrator",
        value: function addClinicAdministrator(d) {
          if (this.getClinicAdministrator(d.email) === null) {
            this.listClinicAdministrators.push(d);
          }
        }
      }, {
        key: "getClinicAdministrator",
        value: function getClinicAdministrator(email) {
          if (this.listClinicAdministrators.length === 0) {
            return null;
          }

          console.log(this.listClinicAdministrators);
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.listClinicAdministrators[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var u = _step3.value;

              if (u.email === email) {
                return u;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          return null;
        }
      }, {
        key: "setClinicAdministrator",
        value: function setClinicAdministrator(p) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.listClinicAdministrators[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var p1 = _step4.value;

              if (p1.email === p.email) {
                p1.name = p.name;
                p1.number = p.number;
                p1.surname = p.surname;
                p1.password = p.password;
                p1.clinic = p.clinic;
                return;
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      }, {
        key: "getAllClinicAdministrators",
        value: function getAllClinicAdministrators() {
          var _this7 = this;

          this.http.get(this.urlClinicAdministrator + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = data[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var c = _step5.value;
                _this7.clinicAdministrator = new _models_clinicadministrator__WEBPACK_IMPORTED_MODULE_2__["ClinicAdministrator"](c.email, c.password, c.name, c.surname, c.number, c.clinic);

                _this7.addClinicAdministrator(_this7.clinicAdministrator);
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }, function (error) {
            console.log(error);
          });
          return this.listClinicAdministrators;
        }
      }]);

      return ClinicAdministratorService;
    }();

    ClinicAdministratorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    ClinicAdministratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ClinicAdministratorService);
    /***/
  },

  /***/
  "./src/app/services/doctor.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/doctor.service.ts ***!
    \********************************************/

  /*! exports provided: DoctorService */

  /***/
  function srcAppServicesDoctorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorService", function () {
      return DoctorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models_doctor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/doctor */
    "./src/app/models/doctor.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");

    var DoctorService =
    /*#__PURE__*/
    function () {
      function DoctorService(http, userService) {
        _classCallCheck(this, DoctorService);

        this.http = http;
        this.userService = userService;
        this.urlDoctor = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].doctor;
        this.listDoctors = new Array();
        this.getAllDoctors();
      }

      _createClass(DoctorService, [{
        key: "newDoctor",
        value: function newDoctor(doctor) {
          return this.http.post(this.urlDoctor + '/register', doctor);
        }
      }, {
        key: "loginDoctor",
        value: function loginDoctor(doctor) {
          this.userService.setToken(doctor);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/login', doctor, {
            responseType: 'text'
          });
        }
      }, {
        key: "editDoctor",
        value: function editDoctor(doctor) {
          return this.http.post(this.urlDoctor + '/edit', doctor, {
            responseType: 'text'
          });
        }
      }, {
        key: "addDoctor",
        value: function addDoctor(d) {
          if (this.getDoctor(d.email) === null) {
            this.listDoctors.push(d);
          }
        }
      }, {
        key: "getDoctor",
        value: function getDoctor(email) {
          if (this.listDoctors.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = this.listDoctors[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var u = _step6.value;

              if (u.email === email) {
                return u;
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          return null;
        }
      }, {
        key: "setDoctor",
        value: function setDoctor(p) {
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = this.listDoctors[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var p1 = _step7.value;

              if (p1.email === p.email) {
                p1.name = p.name;
                p1.number = p.number;
                p1.surname = p.surname;
                p1.password = p.password;
                p1.address = p.address;
                p1.city = p.city;
                p1.country = p.country;
                p1.specialization = p.specialization;
                return;
              }
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }
        }
      }, {
        key: "getAllDoctors",
        value: function getAllDoctors() {
          var _this8 = this;

          this.http.get(this.urlDoctor + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
              for (var _iterator8 = data[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var c = _step8.value;
                _this8.doctor = new _models_doctor__WEBPACK_IMPORTED_MODULE_3__["Doctor"](c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.specialization);

                _this8.addDoctor(_this8.doctor);
              }
            } catch (err) {
              _didIteratorError8 = true;
              _iteratorError8 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                  _iterator8.return();
                }
              } finally {
                if (_didIteratorError8) {
                  throw _iteratorError8;
                }
              }
            }
          }, function (error) {
            console.log(error);
          });
          return this.listDoctors;
        }
      }]);

      return DoctorService;
    }();

    DoctorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    DoctorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DoctorService);
    /***/
  },

  /***/
  "./src/app/services/examination.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/examination.service.ts ***!
    \*************************************************/

  /*! exports provided: ExaminationService */

  /***/
  function srcAppServicesExaminationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExaminationService", function () {
      return ExaminationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models_examination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/examination */
    "./src/app/models/examination.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");

    var ExaminationService =
    /*#__PURE__*/
    function () {
      function ExaminationService(http, userService) {
        _classCallCheck(this, ExaminationService);

        this.http = http;
        this.userService = userService;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].examination;
        this.listExaminations = new Array();
        this.getAllExaminations();
      }

      _createClass(ExaminationService, [{
        key: "getAllExaminations",
        value: function getAllExaminations() {
          var _this9 = this;

          this.http.get(this.url + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              for (var _iterator9 = data[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var c = _step9.value;
                _this9.examination = new _models_examination__WEBPACK_IMPORTED_MODULE_3__["Examination"](c.id, c.kind, c.status, c.discount);

                _this9.addExamination(_this9.examination);

                console.log(_this9.examination);
              }
            } catch (err) {
              _didIteratorError9 = true;
              _iteratorError9 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                  _iterator9.return();
                }
              } finally {
                if (_didIteratorError9) {
                  throw _iteratorError9;
                }
              }
            }
          }, function (error) {
            console.log(error);
          });
          return this.listExaminations;
        }
      }, {
        key: "addExamination",
        value: function addExamination(e) {
          if (this.getExamination(e.id) === null) {
            this.listExaminations.push(e);
          }
        }
      }, {
        key: "getExamination",
        value: function getExamination(id) {
          if (this.listExaminations.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = this.listExaminations[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var e = _step10.value;

              if (e.id === id) {
                return e;
              }
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                _iterator10.return();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }

          return null;
        }
      }]);

      return ExaminationService;
    }();

    ExaminationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    ExaminationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ExaminationService);
    /***/
  },

  /***/
  "./src/app/services/medical-record.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/medical-record.service.ts ***!
    \****************************************************/

  /*! exports provided: MedicalRecordService */

  /***/
  function srcAppServicesMedicalRecordServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicalRecordService", function () {
      return MedicalRecordService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models_medicalRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/medicalRecord */
    "./src/app/models/medicalRecord.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var MedicalRecordService =
    /*#__PURE__*/
    function () {
      function MedicalRecordService(http) {
        _classCallCheck(this, MedicalRecordService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].medicalRecord;
        this.listRecords = new Array();
        this.getAllRecords();
      }

      _createClass(MedicalRecordService, [{
        key: "getAllRecords",
        value: function getAllRecords() {
          var _this10 = this;

          console.log(this.url);
          this.http.get(this.url + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
              for (var _iterator11 = data[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                var c = _step11.value;
                _this10.record = new _models_medicalRecord__WEBPACK_IMPORTED_MODULE_3__["MedicalRecord"](c.height, c.weight, c.bloodType, c.allergies);

                _this10.addRecord(_this10.record);

                console.log(_this10.record);
                console.log(c.allergies);
              }
            } catch (err) {
              _didIteratorError11 = true;
              _iteratorError11 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                  _iterator11.return();
                }
              } finally {
                if (_didIteratorError11) {
                  throw _iteratorError11;
                }
              }
            }
          }, function (error) {
            console.log(error);
          });
          return this.listRecords;
        }
      }, {
        key: "addRecord",
        value: function addRecord(e) {
          if (this.getRecord(e.height) === null) {
            this.listRecords.push(e);
          }
        }
      }, {
        key: "getRecord",
        value: function getRecord(height) {
          if (this.listRecords.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = this.listRecords[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var e = _step12.value;

              if (e.height === height) {
                return e;
              }
            }
          } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                _iterator12.return();
              }
            } finally {
              if (_didIteratorError12) {
                throw _iteratorError12;
              }
            }
          }

          return null;
        }
      }]);

      return MedicalRecordService;
    }();

    MedicalRecordService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    MedicalRecordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MedicalRecordService);
    /***/
  },

  /***/
  "./src/app/services/nurse.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/nurse.service.ts ***!
    \*******************************************/

  /*! exports provided: NurseService */

  /***/
  function srcAppServicesNurseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NurseService", function () {
      return NurseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_nurse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/nurse */
    "./src/app/models/nurse.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var NurseService =
    /*#__PURE__*/
    function () {
      function NurseService(http, userService) {
        _classCallCheck(this, NurseService);

        this.http = http;
        this.userService = userService;
        this.urlNurse = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].nurse;
        this.listNurses = new Array();
        this.getAllNurses();
      }

      _createClass(NurseService, [{
        key: "newNurse",
        value: function newNurse(nurse) {
          return this.http.post(this.urlNurse + '/register', nurse); // da li treba ?
        }
      }, {
        key: "loginNurse",
        value: function loginNurse(nurse) {
          this.userService.setToken(nurse);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/login', nurse, {
            responseType: 'text'
          });
        }
      }, {
        key: "editNurse",
        value: function editNurse(nurse) {
          return this.http.post(this.urlNurse + '/edit', nurse, {
            responseType: 'text'
          });
        }
      }, {
        key: "addNurse",
        value: function addNurse(p) {
          if (this.getNurse(p.email) === null) {
            this.listNurses.push(p);
          }
        }
      }, {
        key: "getNurse",
        value: function getNurse(email) {
          if (this.listNurses.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = this.listNurses[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var u = _step13.value;

              if (u.email === email) {
                return u;
              }
            }
          } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                _iterator13.return();
              }
            } finally {
              if (_didIteratorError13) {
                throw _iteratorError13;
              }
            }
          }

          return null;
        }
      }, {
        key: "setNurse",
        value: function setNurse(p) {
          var _iteratorNormalCompletion14 = true;
          var _didIteratorError14 = false;
          var _iteratorError14 = undefined;

          try {
            for (var _iterator14 = this.listNurses[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
              var p1 = _step14.value;

              if (p1.email === p.email) {
                p1.name = p.name;
                p1.number = p.number;
                p1.country = p.country;
                p1.address = p.address;
                p1.surname = p.surname;
                p1.city = p.city;
                p1.password = p.password;
                return;
              }
            }
          } catch (err) {
            _didIteratorError14 = true;
            _iteratorError14 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                _iterator14.return();
              }
            } finally {
              if (_didIteratorError14) {
                throw _iteratorError14;
              }
            }
          }
        }
      }, {
        key: "getAllNurses",
        value: function getAllNurses() {
          var _this11 = this;

          this.http.get(this.urlNurse + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
              for (var _iterator15 = data[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                var c = _step15.value;
                _this11.nurse = new _models_nurse__WEBPACK_IMPORTED_MODULE_2__["Nurse"](c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country);

                _this11.addNurse(_this11.nurse);
              }
            } catch (err) {
              _didIteratorError15 = true;
              _iteratorError15 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                  _iterator15.return();
                }
              } finally {
                if (_didIteratorError15) {
                  throw _iteratorError15;
                }
              }
            }
          }, function (error) {
            console.log(error);
          });
          return this.listNurses;
        }
      }]);

      return NurseService;
    }();

    NurseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    NurseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], NurseService);
    /***/
  },

  /***/
  "./src/app/services/patient.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/patient.service.ts ***!
    \*********************************************/

  /*! exports provided: PatientService */

  /***/
  function srcAppServicesPatientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientService", function () {
      return PatientService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/patient */
    "./src/app/models/patient.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var PatientService =
    /*#__PURE__*/
    function () {
      function PatientService(http, userService) {
        _classCallCheck(this, PatientService);

        this.http = http;
        this.userService = userService;
        this.urlPatient = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].patient;
        this.listPatients = new Array();
        this.getAllPatients();
      }

      _createClass(PatientService, [{
        key: "newPatient",
        value: function newPatient(patient) {
          return this.http.post(this.urlPatient + '/register', patient);
        }
      }, {
        key: "loginPatient",
        value: function loginPatient(patient) {
          this.userService.setToken(patient);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/login', patient, {
            responseType: 'text'
          });
        }
      }, {
        key: "editPatient",
        value: function editPatient(patient) {
          return this.http.post(this.urlPatient + '/edit', patient, {
            responseType: 'text'
          });
        }
      }, {
        key: "addPatient",
        value: function addPatient(p) {
          if (this.getPatient(p.email) === null) {
            this.listPatients.push(p);
          }
        }
      }, {
        key: "getPatient",
        value: function getPatient(email) {
          if (this.listPatients.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion16 = true;
          var _didIteratorError16 = false;
          var _iteratorError16 = undefined;

          try {
            for (var _iterator16 = this.listPatients[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
              var u = _step16.value;

              if (u.email === email) {
                return u;
              }
            }
          } catch (err) {
            _didIteratorError16 = true;
            _iteratorError16 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
                _iterator16.return();
              }
            } finally {
              if (_didIteratorError16) {
                throw _iteratorError16;
              }
            }
          }

          return null;
        }
      }, {
        key: "setPatient",
        value: function setPatient(p) {
          var _iteratorNormalCompletion17 = true;
          var _didIteratorError17 = false;
          var _iteratorError17 = undefined;

          try {
            for (var _iterator17 = this.listPatients[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
              var p1 = _step17.value;

              if (p1.email === p.email) {
                p1.name = p.name;
                p1.number = p.number;
                p1.country = p.country;
                p1.address = p.address;
                p1.surname = p.surname;
                p1.city = p.city;
                p1.password = p.password;
                return;
              }
            }
          } catch (err) {
            _didIteratorError17 = true;
            _iteratorError17 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                _iterator17.return();
              }
            } finally {
              if (_didIteratorError17) {
                throw _iteratorError17;
              }
            }
          }
        }
      }, {
        key: "getAllPatients",
        value: function getAllPatients() {
          var _this12 = this;

          this.http.get(this.urlPatient + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion18 = true;
            var _didIteratorError18 = false;
            var _iteratorError18 = undefined;

            try {
              for (var _iterator18 = data[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                var c = _step18.value;
                _this12.patient = new _models_patient__WEBPACK_IMPORTED_MODULE_2__["Patient"](c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.insuranceID, c.status);

                _this12.addPatient(_this12.patient);
              }
            } catch (err) {
              _didIteratorError18 = true;
              _iteratorError18 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
                  _iterator18.return();
                }
              } finally {
                if (_didIteratorError18) {
                  throw _iteratorError18;
                }
              }
            }
          }, function (error) {
            console.log(error);
          });
          return this.listPatients;
        }
      }]);

      return PatientService;
    }();

    PatientService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    PatientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], PatientService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: TOKEN, UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOKEN", function () {
      return TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/role */
    "./src/app/models/role.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var TOKEN = 'LoggedInUser';

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(router, http) {
        _classCallCheck(this, UserService);

        this.router = router;
        this.http = http;
        this.urlUser = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].user;
        this.users = new Array();
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]('', '', _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].NONE);
        this.getAllUsers();
        localStorage.setItem(TOKEN, JSON.stringify(this.user));
      }

      _createClass(UserService, [{
        key: "addUser",
        value: function addUser(u) {
          if (this.getUser(u.email) === null) {
            this.users.push(u);
          }
        }
      }, {
        key: "getUser",
        value: function getUser(email) {
          if (this.users.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion19 = true;
          var _didIteratorError19 = false;
          var _iteratorError19 = undefined;

          try {
            for (var _iterator19 = this.users[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
              var u = _step19.value;

              if (u.email === email) {
                return u;
              }
            }
          } catch (err) {
            _didIteratorError19 = true;
            _iteratorError19 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
                _iterator19.return();
              }
            } finally {
              if (_didIteratorError19) {
                throw _iteratorError19;
              }
            }
          }

          return null;
        }
      }, {
        key: "setToken",
        value: function setToken(user) {
          this.user = user;
          localStorage.setItem(TOKEN, JSON.stringify(this.user));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          if (localStorage.getItem(TOKEN) !== null) {
            return localStorage.getItem(TOKEN);
          } else {
            return null;
          }
        }
      }, {
        key: "setUser",
        value: function setUser(u) {
          var _iteratorNormalCompletion20 = true;
          var _didIteratorError20 = false;
          var _iteratorError20 = undefined;

          try {
            for (var _iterator20 = this.users[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
              var p1 = _step20.value;

              if (p1.email === u.email) {
                p1.password = u.password;
                return;
              }
            }
          } catch (err) {
            _didIteratorError20 = true;
            _iteratorError20 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
                _iterator20.return();
              }
            } finally {
              if (_didIteratorError20) {
                throw _iteratorError20;
              }
            }
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.router.navigate(['']);
          this.user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]('', '', _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].NONE);
          localStorage.removeItem(TOKEN);
          localStorage.setItem(TOKEN, JSON.stringify(this.user));
        }
      }, {
        key: "isNone",
        value: function isNone() {
          if (this.isLoggedIn()) {
            return this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].NONE;
          }
        }
      }, {
        key: "isPatient",
        value: function isPatient() {
          if (this.isLoggedIn()) {
            return this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].PATIENT;
          }
        }
      }, {
        key: "isDoctor",
        value: function isDoctor() {
          if (this.isLoggedIn()) {
            return this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].DOCTOR;
          }
        }
      }, {
        key: "isNurse",
        value: function isNurse() {
          if (this.isLoggedIn()) {
            return this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].NURSE;
          }
        }
      }, {
        key: "isClinicAdministrator",
        value: function isClinicAdministrator() {
          if (this.isLoggedIn()) {
            return this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].CLINICADMINISTRATOR;
          }
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          var _this13 = this;

          this.http.get(this.urlUser + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion21 = true;
            var _didIteratorError21 = false;
            var _iteratorError21 = undefined;

            try {
              for (var _iterator21 = data[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                var c = _step21.value;
                _this13.u = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"](c.email, c.password, _this13.whichRole(c.role.toString()));

                _this13.addUser(_this13.u);
              }
            } catch (err) {
              _didIteratorError21 = true;
              _iteratorError21 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
                  _iterator21.return();
                }
              } finally {
                if (_didIteratorError21) {
                  throw _iteratorError21;
                }
              }
            }
          }, function (error) {
            console.log(error);
          });
          console.log(this.users);
          return this.users;
        }
      }, {
        key: "whichRole",
        value: function whichRole(role) {
          if (role === 'PATIENT') {
            return _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].PATIENT;
          } else if (role === 'DOCTOR') {
            return _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].DOCTOR;
          } else if (role === 'NURSE') {
            return _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].NURSE;
          } else if (role === 'CLINICADMINISTRATOR') {
            return _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].CLINICADMINISTRATOR;
          } else {
            return null;
          }
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: 'http://localhost:8081',
      user: '/user',
      patient: '/patient',
      doctor: '/doctor',
      nurse: '/nurse',
      clinic: '/clinic',
      examination: '/examination',
      medicalRecord: '/medicalRecord',
      clinicalCentreAdmin: '/clinical-centre-admin',
      clinicAdministrator: '/clinicadministrator'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\ISA-PSW2019\FRONTEND\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map