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


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\r\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === true\">\r\n      <mat-toolbar>Menu</mat-toolbar>\r\n        <mat-nav-list *ngIf = \"isNone()\">\r\n          <a mat-list-item routerLink=\"/login\">Login</a>\r\n          <a mat-list-item routerLink=\"/patient/register\">Register</a>\r\n        </mat-nav-list>\r\n  \r\n        <mat-nav-list *ngIf=\"isPatient()\">\r\n          <a mat-list-item routerLink=\"/patient/profile\">Profile</a>\r\n          <a mat-list-item routerLink=\"/patient/medicalRecord\">Medical record</a>\r\n          <a mat-list-item routerLink=\"/patient/medicalHistory\">Medical history</a>\r\n          <a mat-list-item routerLink=\"/patient/clinics\">Clinics</a>\r\n          <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n        </mat-nav-list>\r\n  \r\n        <mat-nav-list *ngIf=\"isDoctor()\">\r\n          <a mat-list-item routerLink=\"/doctor/profile\">Profile</a>\r\n          <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n        </mat-nav-list>\r\n\r\n        <mat-nav-list *ngIf=\"isClinicAdministrator()\">\r\n          <a mat-list-item routerLink=\"/clinicAdministrator/profile\">Profile</a>\r\n          <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n        </mat-nav-list>\r\n\r\n        <mat-nav-list *ngIf=\"isNurse()\">\r\n          <a mat-list-item routerLink=\"/nurse/profile\">Profile</a>\r\n          <a mat-list-item routerLink=\"/nurse/allpatients\">All patients</a>\r\n          <a mat-list-item routerLink=\"/nurse/VacationRequest\">Vacation request</a>\r\n          <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n        </mat-nav-list>\r\n\r\n        <mat-nav-list *ngIf=\"isCCAdmin()\">\r\n          <a mat-list-item routerLink=\"/clinicalCenterAdministrator/profile\">Profile</a>\r\n          <a mat-list-item (click)=\"onLogout()\">Logout</a>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <mat-toolbar>\r\n        <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\r\n          <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n        </button>\r\n        <span>Clinical Centre</span>\r\n      </mat-toolbar>\r\n      <!-- Add Content Here -->\r\n      <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allpatients-page/allpatients-page.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/allpatients-page/allpatients-page.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAllpatientsPageAllpatientsPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- page-header -->\r\n<div class=\"page-header\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"page-caption\">\r\n                    <h1 class=\"page-title\">All patients </h1>\r\n                    <div class=\"text-center mt-4\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.page-header-->\r\n  \r\n  <!-- page-content -->\r\n  <div class=\"card-section\">\r\n    <div class=\"container\">\r\n        <div class=\"card-block bg-white mb30\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <!-- section-title -->\r\n                    <div class=\"section-title mb-0\">\r\n                        <table mat-table [dataSource]=\"allpatientsDataSource\" class=\"mat-elevation-z8 table\" matSort>\r\n  \r\n                            <ng-container matColumnDef=\"name\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\">\r\n                                    {{element.name}}\r\n                                </td>\r\n                            </ng-container>\r\n  \r\n                            <ng-container matColumnDef=\"surname\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Surname </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.surname}} </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"address\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Address </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.address}} </td>\r\n                            </ng-container>\r\n\r\n\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n                        <mat-paginator [pageSize]=itemsPerPage showFirstLastButtons></mat-paginator>\r\n                    </div>\r\n                    <!-- /.section-title -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.page-content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ccadmin-profile/ccadmin-profile.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ccadmin-profile/ccadmin-profile.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCcadminProfileCcadminProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 offset-md-2\">\r\n          <mat-card>\r\n            <h3>{{selectedCCAdmin.name}} profile</h3>\r\n            <hr>\r\n            <form [formGroup]=\"ccadminForm\" (ngSubmit)=\"onSubmit()\">\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" readonly=\"readonly\" id=\"email\" text=\"test\"  formControlName=\"email\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && ccadminForm.get('email').errors }\">\r\n  \r\n                <div *ngIf=\"submitted && ccadminForm.get('email').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"ccadminForm.get('email').errors['required']\">Email is required</div>\r\n                  <div *ngIf=\"ccadminForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && ccadminForm.get('password').errors }\">\r\n                <div *ngIf=\"submitted && ccadminForm.get('password').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"ccadminForm.get('password').errors['required']\">Password is required</div>\r\n                  <div *ngIf=\"ccadminForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                    long</div>\r\n                  <div *ngIf=\"ccadminForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                    1 uppercase letter\r\n                    and 1 number</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"name\">First Name</label>\r\n                <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && ccadminForm.get('name').errors }\" />\r\n                <div *ngIf=\"submitted && ccadminForm.get('name').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\" ccadminForm.get('name').errors['required']\">First Name is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">Last Name</label>\r\n                <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && ccadminForm.get('surname').errors }\" />\r\n                <div *ngIf=\"submitted && ccadminForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"ccadminForm.get('surname').errors['required']\">Last Name is required</div>\r\n                </div>\r\n              </div>\r\n            \r\n              <div class=\"form-group\">\r\n                <label for=\"number\">Phone Number</label>\r\n                <input type=\"number\" id=\"number\" formControlName=\"number\"  class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && ccadminForm.get('number').errors }\" />\r\n                <div *ngIf=\"submitted && ccadminForm.get('number').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"ccadminForm.get('number').errors['required']\">Phone Number is required</div>\r\n                  <div *ngIf=\"ccadminForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                    digits\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n  \r\n              \r\n  \r\n              <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n  \r\n            </form>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinic-search/clinic-search.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinic-search/clinic-search.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClinicSearchClinicSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Dialog</h2>\r\n\r\n<mat-dialog-content [formGroup]=\"SearchClinicsGroup\">\r\n\r\n  <div>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput id=\"date\" [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field>\r\n      <mat-select id=\"type\" placeholder=\"Select examination type\">\r\n        <mat-option *ngFor=\"let examination_type of types\" value=\"option\">{{examination_type.label}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\r\n  <button class=\"mat-raised-button mat-primary\"(click)=\"save()\">Search</button>\r\n</mat-dialog-actions>";
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


    __webpack_exports__["default"] = "<h1>Welcome clinicadministrator!</h1>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"main-content\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 offset-md-2\">\r\n          <mat-card>\r\n            <h3>Profile</h3>\r\n            <hr>\r\n            <form [formGroup]=\"clinicAdministratorProfileForm\" (ngSubmit)=\"onSubmit()\">\r\n  \r\n              <div class=\"form-group\">\r\n                <mat-label for=\"email\">Email</mat-label>\r\n                <input type=\"email\" readonly=\"readonly\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && clinicAdministratorProfileForm.get('email').errors }\">\r\n  \r\n                <div *ngIf=\"submitted && clinicAdministratorProfileForm.get('email').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"clinicAdministratorProfileForm.get('email').errors['required']\">Email is required</div>\r\n                  <div *ngIf=\"clinicAdministratorProfileForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && clinicAdministratorProfileForm.get('password').errors }\">\r\n                <div *ngIf=\"submitted && clinicAdministratorProfileForm.get('password').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"clinicAdministratorProfileForm.get('password').errors['required']\">Password is required</div>\r\n                  <div *ngIf=\"clinicAdministratorProfileForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                    long</div>\r\n                  <div *ngIf=\"clinicAdministratorProfileForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                    1 uppercase letter\r\n                    and 1 number</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"name\">First Name</label>\r\n                <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && clinicAdministratorProfileForm.get('name').errors }\" />\r\n                <div *ngIf=\"submitted && clinicAdministratorProfileForm.get('name').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"clinicAdministratorProfileForm.get('name').errors['required']\">First Name is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">Last Name</label>\r\n                <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && clinicAdministratorProfileForm.get('surname').errors }\" />\r\n                <div *ngIf=\"submitted && clinicAdministratorProfileForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"clinicAdministratorProfileForm.get('surname').errors['required']\">Last Name is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"number\">Phone Number</label>\r\n                <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && clinicAdministratorProfileForm.get('number').errors }\" />\r\n                <div *ngIf=\"submitted && clinicAdministratorProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"clinicAdministratorProfileForm.get('number').errors['required']\">Phone Number is required</div>\r\n                  <div *ngIf=\"clinicAdministratorProfileForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                    digits\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"clinic\">Clinic</label>\r\n                <input type=\"text\" id=\"clinic\" formControlName=\"clinic\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && clinicAdministratorProfileForm.get('clinic').errors }\" />\r\n                <div *ngIf=\"submitted && clinicAdministratorProfileForm.get('clinic').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"clinicAdministratorProfileForm.get('clinic').errors['required']\">Clinic name is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n  \r\n            </form>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
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


    __webpack_exports__["default"] = "\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<table mat-table\r\n       [dataSource]=\"clinicDataSource\" class=\"mat-elevation-z8\" matSort>\r\n\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Clinic name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Address\">\r\n    <th mat-header-cell *matHeaderCellDef> Clinic address </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"ClinicRating\">\r\n    <th mat-header-cell *matHeaderCellDef> Clinic rating </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.clinicRating}} </td>\r\n  </ng-container>\r\n  <div *ngIf=\"condition; then thenBlock else elseBlock\"></div>\r\n  <ng-template #elseBlock>\r\n    <ng-container matColumnDef=\"Price\">\r\n      <th  mat-header-cell *matHeaderCellDef> Price </th>\r\n      <td mat-cell *matCellDef=\"let element\"> 0 </td>\r\n    </ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #thenBlock>\r\n    <ng-container matColumnDef=\"Price\">\r\n      <th  mat-header-cell *matHeaderCellDef> Price </th>\r\n      <td mat-cell *matCellDef=\"let element\"> 0 </td>\r\n    </ng-container>\r\n  </ng-template>\r\n\r\n  <ng-container matColumnDef=\"Doctors\">\r\n    <th mat-header-cell *matHeaderCellDef> Doctors </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button mat-flat-button color=\"warn\" (click)=\"doctorList(element)\"> Doctors </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n<button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Search</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/codebook/codebook.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/codebook/codebook.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCodebookCodebookComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">  \r\n    <div class=\"col\">\r\n            <div class=\"container\" style=\"width:40%\">\r\n                    <form [formGroup]=\"addMedicine\" style=\"text-align:center\"\r\n                        (ngSubmit)=\"addCodebookMedicine()\">\r\n                        <span class=\"text-nowrap\">Add medicine</span>\r\n                \r\n                        <div class=\"input-group mb-3\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"label\"\r\n                            id=\"label\" placeholder=\"Label\" \r\n                            formControlName=\"label\">\r\n                            <div class=\"input-group-append\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                        </div>  \r\n                    </div>\r\n                    </form>\r\n                </div>\r\n    <table  class=\"table\">  \r\n        <thead>  \r\n            <tr>  \r\n                    <th scope=\"col\">                 Id </th>\r\n                    <th scope=\"col\">                 Name </th> \r\n                    <th scope=\"col\"></th>\r\n            </tr>  \r\n        </thead>  \r\n        <tbody>  \r\n\r\n         \r\n\r\n             <tr *ngFor=\"let medicine of codebook.medicines\">  \r\n                <td>{{medicine.id}}</td>  \r\n                <td>{{medicine.label}}</td>  \r\n                <td><button (click)=\"deleteMedicine(medicine)\" class='btn btn-primary'>Delete</button>   \r\n                  \r\n                </td>  \r\n              </tr>   \r\n        </tbody><br>  \r\n    </table>  \r\n    </div>\r\n\r\n    <div class=\"col\">\r\n            <div class=\"container\" style=\"width:40%\">\r\n                    <form [formGroup]=\"addDiagnose\" style=\"text-align:center\"\r\n                        (ngSubmit)=\"addCodebookDiagnose()\">\r\n                        <span class=\"text-nowrap\">Add diagnose</span>\r\n                \r\n                        <div class=\"input-group mb-3\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"title\"\r\n                            id=\"title\" placeholder=\"Title\" \r\n                            formControlName=\"title\">\r\n                            <div class=\"input-group-append\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                        </div>  \r\n                    </div>\r\n                    </form>\r\n                </div>\r\n    <table class=\"table\">  \r\n        <thead>  \r\n            <tr>  \r\n                    <th scope=\"col\">            Diagnose ID</th>\r\n                    <th scope=\"col\">            Diagnose name</th> \r\n                    <th scope=\"col\"></th>  \r\n            </tr>  \r\n        </thead>  \r\n        <tbody>  \r\n             <tr *ngFor=\"let diagnose of codebook.diagnoses\">  \r\n                <td>{{diagnose.id}}</td>  \r\n                <td>{{diagnose.title}}</td>  \r\n                \r\n                <td><button (click)=\"deleteDiagnose(diagnose)\" class='btn btn-primary'>Delete</button>   \r\n                  \r\n                </td>  \r\n              </tr>   \r\n        </tbody><br>  \r\n    </table>\r\n</div>  \r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
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


    __webpack_exports__["default"] = "<div class=\"main-content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <mat-card>\r\n          <h3>Profile</h3>\r\n          <hr>\r\n          <form [formGroup]=\"doctorProfileForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <mat-label for=\"email\">Email</mat-label>\r\n              <input type=\"email\" readonly=\"readonly\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('email').errors }\">\r\n\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('email').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('email').errors['required']\">Email is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"text\" id=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('password').errors }\">\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('password').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('password').errors['required']\">Password is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('password').errors['minlength']\">Password must be at least 8 characters\r\n                  long</div>\r\n                <div *ngIf=\"doctorProfileForm.get('password').errors['pattern']\">Password must contain at least 1 lowercase,\r\n                  1 uppercase letter\r\n                  and 1 number</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">First Name</label>\r\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('name').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('name').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\" doctorProfileForm.get('name').errors['required']\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">Last Name</label>\r\n              <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('surname').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('surname').errors['required']\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"number\">Phone Number</label>\r\n              <input type=\"number\" id=\"number\" formControlName=\"number\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['required']\">Phone Number is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['minlength']\">A phone number must have at least 9\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"workHoursFrom\">Work hours from</label>\r\n              <input type=\"number\" id=\"workHoursFrom\" formControlName=\"workHoursFrom\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['required']\">Work hours from is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['minlength']\">A work hours must have at least 2\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"workHoursTo\">Work hours to</label>\r\n              <input type=\"number\" id=\"workHoursTo\" formControlName=\"workHoursTo\" class=\"form-control\"\r\n                     [ngClass]=\"{ 'is-invalid': submitted && doctorProfileForm.get('number').errors }\" />\r\n              <div *ngIf=\"submitted && doctorProfileForm.get('number').errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['required']\">Work hours to is required</div>\r\n                <div *ngIf=\"doctorProfileForm.get('number').errors['minlength']\">A work hours to must have at least 2\r\n                  digits\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <button mat-raised-button color=\"primary\" class=\"pull-right\">Save</button>\r\n\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
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


    __webpack_exports__["default"] = "<!-- page-header -->\r\n<div class=\"page-header\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"page-caption\">\r\n                    <h1 class=\"page-title\">History of examinations and operations</h1>\r\n                    <div class=\"text-center mt-4\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.page-header-->\r\n  \r\n  <!-- page-content -->\r\n  <div class=\"card-section\">\r\n    <div class=\"container\">\r\n        <div class=\"card-block bg-white mb30\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <!-- section-title -->\r\n                    <div class=\"section-title mb-0\">\r\n                        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table\" matSort>\r\n  \r\n                            <ng-container matColumnDef=\"kind\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Kind </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\">{{element.kind}}</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"clinic\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Clinic </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.clinic}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"doctor\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Doctors </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.doctors}} </td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n                        <mat-paginator [pageSize]=itemsPerPage showFirstLastButtons></mat-paginator>\r\n                    </div>\r\n                    <!-- /.section-title -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.page-content -->";
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


    __webpack_exports__["default"] = "<div class=\"page-header\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"page-caption\">\r\n                    <h1 class=\"page-title\">Medical record</h1>\r\n                    <div class=\"text-center mt-4\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.page-header-->\r\n  \r\n  <!-- page-content -->\r\n  <div class=\"card-section\">\r\n    <div class=\"container\">\r\n        <div class=\"card-block bg-white mb30\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <!-- section-title -->\r\n                    <div class=\"section-title mb-0\">\r\n                        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table\" matSort>\r\n  \r\n                            <ng-container matColumnDef=\"Height\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Height </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\">{{element.height}}</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Weight\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.weight}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"BloodType\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Blood Type </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.bloodType}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Allergies\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Allergies </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.allergies}} </td>\r\n                            </ng-container>\r\n                             <ng-container matColumnDef=\"ExaminationReports\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Examination Reports </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-in-table\"> {{element.reports} </td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n                    </div>\r\n                    <!-- /.section-title -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.page-content -->";
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-vacation-req/nurse-vacation-req.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-vacation-req/nurse-vacation-req.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNurseVacationReqNurseVacationReqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 offset-md-2\">\r\n          <mat-card>\r\n            <h3>Nurse Vacation request</h3>\r\n            <hr>\r\n            <form [formGroup]=\"vacationRequestForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('email').errors }\">\r\n                <div *ngIf=\"submitted && vacationRequestForm.get('email').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"vacationRequestForm.get('email').errors['required']\">Email is required</div>\r\n                  <div *ngIf=\"vacationRequestForm.get('email').errors['email']\">Email must be a valid email address</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('name').errors }\">\r\n  \r\n                <div *ngIf=\"submitted && vacationRequestForm.get('name').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"vacationRequestForm.get('name').errors['required']\">Email is required</div>\r\n                  <div *ngIf=\"vacationRequestForm.get('name').errors['name']\">Email must be a valid email address</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">Surname</label>\r\n                <input type=\"text\" id=\"surname\" formControlName=\"surname\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('surname').errors }\" />\r\n                <div *ngIf=\"submitted && vacationRequestForm.get('surname').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"vacationRequestForm.get('surname').errors['surname']\">Address is required</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"startingDate\">StartingDate</label>\r\n                <input type=\"text\" id=\"startingDate\" formControlName=\"startingDate\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('startingDate').errors }\" />\r\n                <div *ngIf=\"submitted && vacationRequestForm.get('startingDate').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"vacationRequestForm.get('startingDate').errors['required']\">Country is required</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"finishDate\">FinishDate</label>\r\n                <input type=\"text\" id=\"finishDate\" formControlName=\"finishDate\" class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && vacationRequestForm.get('finishDate').errors }\" />\r\n                <div *ngIf=\"submitted && vacationRequestForm.get('finishDate').errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"vacationRequestForm.get('finishDate').errors['required']\">Phone Number is required</div>\r\n                  digits\r\n                </div>\r\n              </div>\r\n              <button mat-raised-button style=\"position: center\" color=\"primary\" class=\"pull-right\">Save</button>\r\n            </form>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-doctor-search/patient-doctor-search.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-doctor-search/patient-doctor-search.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPatientDoctorSearchPatientDoctorSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Search for doctors</h2>\r\n<mat-dialog-content [formGroup]=\"SearchDoctorGroup\">\r\n  <div>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input required=\"required\" id=\"name\" formControlName=\"name\" matInput placeholder=\"Doctor name\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input required=\"required\" id=\"surname\" formControlName=\"surname\" matInput placeholder=\"Doctor surname\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input required=\"required\" id=\"rating\" formControlName=\"rating\" matInput placeholder=\"Doctor rating\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\r\n  <button class=\"mat-raised-button mat-primary\"(click)=\"save()\">Save</button>\r\n</mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-doctors-list/patient-doctors-list.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-doctors-list/patient-doctors-list.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPatientDoctorsListPatientDoctorsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n      <table mat-table\r\n             [dataSource]=\"doctorDataSource\" class=\"mat-elevation-z8\" matSort>\r\n  \r\n        <ng-container matColumnDef=\"Name\">\r\n          <th mat-header-cell *matHeaderCellDef> Doctor name </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"Surname\">\r\n          <th mat-header-cell *matHeaderCellDef> Doctor surname </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.surname}} </td>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"DoctorRating\">\r\n          <th mat-header-cell *matHeaderCellDef> Doctor rating </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.doctorRating}} </td>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"Price\">\r\n          <th mat-header-cell *matHeaderCellDef> Price </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.specialized.price}} </td>\r\n        </ng-container>\r\n  \r\n  \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n      <button mat-raised-button color=\"primary\" (click)=\"searchDoctors()\">Search</button>\r\n      <mat-dialog-actions>\r\n        <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\r\n      </mat-dialog-actions>";
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vacation-request-register/vacation-request-register.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vacation-request-register/vacation-request-register.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsVacationRequestRegisterVacationRequestRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table mat-table [dataSource]=\"RequestsDataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"email\">\r\n      <th mat-header-cell *matHeaderCellDef> email </th>\r\n      <td mat-cell *matCellDef=\"let zahtev\"> {{zahtev.email}} </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"startingDate\">\r\n      <th mat-header-cell *matHeaderCellDef> startingDate </th>\r\n      <td mat-cell *matCellDef=\"let zahtev\"> {{zahtev.startingDate}} </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"finishDate\">\r\n      <th mat-header-cell *matHeaderCellDef> finishDate </th>\r\n      <td mat-cell *matCellDef=\"let zahtev\"> {{zahtev.finishDate}} </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"approving\">\r\n      <th mat-header-cell *matHeaderCellDef> Approving </th>\r\n      <td mat-cell *matCellDef=\"let zahtev\">\r\n        <button mat-raised-button color=\"primary\" class=\"pull-right\" (click)=\"onAccept(zahtev)\">Accept</button>\r\n        <button mat-raised-button color=\"warn\" class=\"pull-right\">Decline</button>\r\n      </td>\r\n    </ng-container>\r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>";
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


    var _components_ccadmin_profile_ccadmin_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/ccadmin-profile/ccadmin-profile.component */
    "./src/app/components/ccadmin-profile/ccadmin-profile.component.ts");
    /* harmony import */


    var _components_allpatients_page_allpatients_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/allpatients-page/allpatients-page.component */
    "./src/app/components/allpatients-page/allpatients-page.component.ts");
    /* harmony import */


    var _components_codebook_codebook_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/codebook/codebook.component */
    "./src/app/components/codebook/codebook.component.ts");
    /* harmony import */


    var _components_clinicadministrator_page_clinicadministrator_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/clinicadministrator-page/clinicadministrator-page.component */
    "./src/app/components/clinicadministrator-page/clinicadministrator-page.component.ts");
    /* harmony import */


    var _components_clinicadministrator_profile_clinicadministrator_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/clinicadministrator-profile/clinicadministrator-profile.component */
    "./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.ts");
    /* harmony import */


    var _components_nurse_vacation_req_nurse_vacation_req_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/nurse-vacation-req/nurse-vacation-req.component */
    "./src/app/components/nurse-vacation-req/nurse-vacation-req.component.ts");
    /* harmony import */


    var _components_vacation_request_register_vacation_request_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/vacation-request-register/vacation-request-register.component */
    "./src/app/components/vacation-request-register/vacation-request-register.component.ts");

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
      path: 'clinicAdministrator/home',
      component: _components_clinicadministrator_page_clinicadministrator_page_component__WEBPACK_IMPORTED_MODULE_17__["ClinicadministratorPageComponent"]
    }, {
      path: 'clinicAdministrator/profile',
      component: _components_clinicadministrator_profile_clinicadministrator_profile_component__WEBPACK_IMPORTED_MODULE_18__["ClinicadministratorProfileComponent"]
    }, {
      path: 'clinicalCenterAdministrator/profile',
      component: _components_ccadmin_profile_ccadmin_profile_component__WEBPACK_IMPORTED_MODULE_14__["CCAdminProfileComponent"]
    }, {
      path: 'clinicalCenterAdministrator/VacationRequests',
      component: _components_vacation_request_register_vacation_request_register_component__WEBPACK_IMPORTED_MODULE_20__["VacationRequestRegisterComponent"]
    }, {
      path: 'clinicalCenterAdministrator/codebook',
      component: _components_codebook_codebook_component__WEBPACK_IMPORTED_MODULE_16__["CodebookComponent"]
    }, {
      path: 'nurse/home',
      component: _components_nurse_page_nurse_page_component__WEBPACK_IMPORTED_MODULE_12__["NursePageComponent"]
    }, {
      path: 'nurse/profile',
      component: _components_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_13__["NurseProfileComponent"]
    }, {
      path: 'nurse/allpatients',
      component: _components_allpatients_page_allpatients_page_component__WEBPACK_IMPORTED_MODULE_15__["AllPatientsPageComponent"]
    }, {
      path: 'nurse/VacationRequest',
      component: _components_nurse_vacation_req_nurse_vacation_req_component__WEBPACK_IMPORTED_MODULE_19__["NurseVacationRequestComponent"]
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
        key: "isClinicAdministrator",
        value: function isClinicAdministrator() {
          return this.userService.isClinicAdministrator();
        }
      }, {
        key: "isNurse",
        value: function isNurse() {
          return this.userService.isNurse();
        }
      }, {
        key: "isCCAdmin",
        value: function isCCAdmin() {
          return this.userService.isCCAdmin();
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


    var _components_clinic_search_clinic_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/clinic-search/clinic-search.component */
    "./src/app/components/clinic-search/clinic-search.component.ts");
    /* harmony import */


    var _components_patient_doctors_list_patient_doctors_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/patient-doctors-list/patient-doctors-list.component */
    "./src/app/components/patient-doctors-list/patient-doctors-list.component.ts");
    /* harmony import */


    var _components_patient_doctor_search_patient_doctor_search_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/patient-doctor-search/patient-doctor-search.component */
    "./src/app/components/patient-doctor-search/patient-doctor-search.component.ts");
    /* harmony import */


    var _components_ccadmin_profile_ccadmin_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/ccadmin-profile/ccadmin-profile.component */
    "./src/app/components/ccadmin-profile/ccadmin-profile.component.ts");
    /* harmony import */


    var _components_allpatients_page_allpatients_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/allpatients-page/allpatients-page.component */
    "./src/app/components/allpatients-page/allpatients-page.component.ts");
    /* harmony import */


    var _components_codebook_codebook_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/codebook/codebook.component */
    "./src/app/components/codebook/codebook.component.ts");
    /* harmony import */


    var _components_clinicadministrator_page_clinicadministrator_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/clinicadministrator-page/clinicadministrator-page.component */
    "./src/app/components/clinicadministrator-page/clinicadministrator-page.component.ts");
    /* harmony import */


    var _components_clinicadministrator_profile_clinicadministrator_profile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/clinicadministrator-profile/clinicadministrator-profile.component */
    "./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.ts");
    /* harmony import */


    var _components_nurse_vacation_req_nurse_vacation_req_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/nurse-vacation-req/nurse-vacation-req.component */
    "./src/app/components/nurse-vacation-req/nurse-vacation-req.component.ts");
    /* harmony import */


    var _components_vacation_request_register_vacation_request_register_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/vacation-request-register/vacation-request-register.component */
    "./src/app/components/vacation-request-register/vacation-request-register.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _components_register_patient_register_patient_component__WEBPACK_IMPORTED_MODULE_13__["RegisterPatientComponent"], _components_patient_page_patient_page_component__WEBPACK_IMPORTED_MODULE_14__["PatientPageComponent"], _components_doctor_page_doctor_page_component__WEBPACK_IMPORTED_MODULE_15__["DoctorPageComponent"], _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_16__["PatientProfileComponent"], _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_17__["DoctorProfileComponent"], _components_medical_record_page_medical_record_page_component__WEBPACK_IMPORTED_MODULE_18__["MedicalRecordPageComponent"], _components_medical_history_page_medical_history_page_component__WEBPACK_IMPORTED_MODULE_19__["MedicalHistoryPageComponent"], _components_clinics_page_clinics_page_component__WEBPACK_IMPORTED_MODULE_20__["ClinicsPageComponent"], _components_nurse_page_nurse_page_component__WEBPACK_IMPORTED_MODULE_21__["NursePageComponent"], _components_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_22__["NurseProfileComponent"], _components_nurse_vacation_req_nurse_vacation_req_component__WEBPACK_IMPORTED_MODULE_31__["NurseVacationRequestComponent"], _components_clinic_search_clinic_search_component__WEBPACK_IMPORTED_MODULE_23__["ClinicSearchComponent"], _components_patient_doctors_list_patient_doctors_list_component__WEBPACK_IMPORTED_MODULE_24__["PatientDoctorsListComponent"], _components_patient_doctor_search_patient_doctor_search_component__WEBPACK_IMPORTED_MODULE_25__["PatientDoctorSearchComponent"], _components_codebook_codebook_component__WEBPACK_IMPORTED_MODULE_28__["CodebookComponent"], _components_ccadmin_profile_ccadmin_profile_component__WEBPACK_IMPORTED_MODULE_26__["CCAdminProfileComponent"], _components_allpatients_page_allpatients_page_component__WEBPACK_IMPORTED_MODULE_27__["AllPatientsPageComponent"], _components_clinicadministrator_page_clinicadministrator_page_component__WEBPACK_IMPORTED_MODULE_29__["ClinicadministratorPageComponent"], _components_clinicadministrator_profile_clinicadministrator_profile_component__WEBPACK_IMPORTED_MODULE_30__["ClinicadministratorProfileComponent"], _components_vacation_request_register_vacation_request_register_component__WEBPACK_IMPORTED_MODULE_32__["VacationRequestRegisterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
        timeOut: 2000,
        positionClass: 'toast-top-right',
        preventDuplicates: true
      }), _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _material_module__WEBPACK_IMPORTED_MODULE_11__["DemoMaterialModule"]],
      entryComponents: [_components_clinic_search_clinic_search_component__WEBPACK_IMPORTED_MODULE_23__["ClinicSearchComponent"], _components_patient_doctors_list_patient_doctors_list_component__WEBPACK_IMPORTED_MODULE_24__["PatientDoctorsListComponent"], _components_patient_doctor_search_patient_doctor_search_component__WEBPACK_IMPORTED_MODULE_25__["PatientDoctorSearchComponent"], _components_nurse_vacation_req_nurse_vacation_req_component__WEBPACK_IMPORTED_MODULE_31__["NurseVacationRequestComponent"], _components_ccadmin_profile_ccadmin_profile_component__WEBPACK_IMPORTED_MODULE_26__["CCAdminProfileComponent"], _components_allpatients_page_allpatients_page_component__WEBPACK_IMPORTED_MODULE_27__["AllPatientsPageComponent"], _components_vacation_request_register_vacation_request_register_component__WEBPACK_IMPORTED_MODULE_32__["VacationRequestRegisterComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/allpatients-page/allpatients-page.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/components/allpatients-page/allpatients-page.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAllpatientsPageAllpatientsPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscGF0aWVudHMtcGFnZS9hbGxwYXRpZW50cy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/allpatients-page/allpatients-page.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/allpatients-page/allpatients-page.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AllPatientsPageComponent */

  /***/
  function srcAppComponentsAllpatientsPageAllpatientsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllPatientsPageComponent", function () {
      return AllPatientsPageComponent;
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


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts"); // nemam za sve pacijente?


    var AllPatientsPageComponent =
    /*#__PURE__*/
    function () {
      function AllPatientsPageComponent(patientService) {
        _classCallCheck(this, AllPatientsPageComponent);

        this.patientService = patientService;
        this.displayedColumns = ['name', 'surname', 'address'];
        this.allpatientsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.allpatients = new Array();
        this.allpatients = this.patientService.getAllPatients();
        this.all();
      }

      _createClass(AllPatientsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.all();
        }
      }, {
        key: "all",
        value: function all() {
          this.allpatientsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.patientService.getAllPatients());
          this.allpatientsDataSource.paginator = this.paginator;
        }
      }]);

      return AllPatientsPageComponent;
    }();

    AllPatientsPageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], AllPatientsPageComponent.prototype, "paginator", void 0);
    AllPatientsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-allpatients-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./allpatients-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/allpatients-page/allpatients-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./allpatients-page.component.css */
      "./src/app/components/allpatients-page/allpatients-page.component.css")).default]
    })], AllPatientsPageComponent);
    /***/
  },

  /***/
  "./src/app/components/ccadmin-profile/ccadmin-profile.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/ccadmin-profile/ccadmin-profile.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCcadminProfileCcadminProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2NhZG1pbi1wcm9maWxlL2NjYWRtaW4tcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/ccadmin-profile/ccadmin-profile.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/ccadmin-profile/ccadmin-profile.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CCAdminProfileComponent */

  /***/
  function srcAppComponentsCcadminProfileCcadminProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CCAdminProfileComponent", function () {
      return CCAdminProfileComponent;
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


    var _models_clinicalCenterAdministrator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/clinicalCenterAdministrator */
    "./src/app/models/clinicalCenterAdministrator.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_clinicalCenterAdministrator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/clinicalCenterAdministrator.service */
    "./src/app/services/clinicalCenterAdministrator.service.ts");
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

    var CCAdminProfileComponent =
    /*#__PURE__*/
    function () {
      function CCAdminProfileComponent(ccadminService, formBuilder, router, userService) {
        _classCallCheck(this, CCAdminProfileComponent);

        this.ccadminService = ccadminService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.submitted = false;
        this.user = JSON.parse(userService.isLoggedIn());
        console.log(this.user);
        this.selectedCCAdmin = ccadminService.getCCAdmin(this.user.email);
        console.log(this.selectedCCAdmin);
      }

      _createClass(CCAdminProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ccadminForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedCCAdmin.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedCCAdmin.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedCCAdmin.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedCCAdmin.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedCCAdmin.number, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(9)])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // Stop here if form is invalid

          if (this.ccadminForm.invalid) {
            return;
          }

          this.clinicalCenterAdministrator = new _models_clinicalCenterAdministrator__WEBPACK_IMPORTED_MODULE_2__["ClinicalCenterAdministrator"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value);
          this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](this.f.email.value, this.f.password.value, _models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].CCADMIN);
          this.editClinicalCenterAdministrator();
        }
      }, {
        key: "editClinicalCenterAdministrator",
        value: function editClinicalCenterAdministrator() {
          var _this = this;

          this.ccadminService.editCCAdmin(this.clinicalCenterAdministrator).subscribe(function (data) {
            _this.userService.setUser(_this.user);

            _this.ccadminService.setCCAdmin(_this.clinicalCenterAdministrator);

            _this.router.navigate(['/clinicalCenterAdministrator/profile']);
          }, function (error) {
            alert('Error edit clinical center administrator');
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.ccadminForm.controls;
        }
      }]);

      return CCAdminProfileComponent;
    }();

    CCAdminProfileComponent.ctorParameters = function () {
      return [{
        type: _services_clinicalCenterAdministrator_service__WEBPACK_IMPORTED_MODULE_5__["ClinicalCenterAdministratorService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }];
    };

    CCAdminProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ccadmin-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ccadmin-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ccadmin-profile/ccadmin-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ccadmin-profile.component.css */
      "./src/app/components/ccadmin-profile/ccadmin-profile.component.css")).default]
    })], CCAdminProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/clinic-search/clinic-search.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/clinic-search/clinic-search.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClinicSearchClinicSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpbmljLXNlYXJjaC9jbGluaWMtc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/clinic-search/clinic-search.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/clinic-search/clinic-search.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ClinicSearchComponent */

  /***/
  function srcAppComponentsClinicSearchClinicSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicSearchComponent", function () {
      return ClinicSearchComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_examination_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/examination-type.service */
    "./src/app/services/examination-type.service.ts");

    var ClinicSearchComponent =
    /*#__PURE__*/
    function () {
      function ClinicSearchComponent(formBuilder, examinationTypeService, dialogRef, data) {
        _classCallCheck(this, ClinicSearchComponent);

        this.formBuilder = formBuilder;
        this.examinationTypeService = examinationTypeService;
        this.dialogRef = dialogRef;
        this.types = new Array();

        this.myFilter = function (d) {
          var day = d.getDay(); // Subota i nedelja se ne radi.

          return day !== 0 && day !== 6;
        };

        this.types = examinationTypeService.getAllTypes();
      }

      _createClass(ClinicSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.SearchClinicsGroup = this.formBuilder.group({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "save",
        value: function save() {
          this.dialogRef.close(this.SearchClinicsGroup.value);
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "f",
        get: function get() {
          return this.SearchClinicsGroup.controls;
        }
      }]);

      return ClinicSearchComponent;
    }();

    ClinicSearchComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_examination_type_service__WEBPACK_IMPORTED_MODULE_4__["ExaminationTypeService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ClinicSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clinic-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clinic-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinic-search/clinic-search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clinic-search.component.css */
      "./src/app/components/clinic-search/clinic-search.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], ClinicSearchComponent);
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

  /*! exports provided: ClinicadministratorPageComponent */

  /***/
  function srcAppComponentsClinicadministratorPageClinicadministratorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicadministratorPageComponent", function () {
      return ClinicadministratorPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClinicadministratorPageComponent =
    /*#__PURE__*/
    function () {
      function ClinicadministratorPageComponent() {
        _classCallCheck(this, ClinicadministratorPageComponent);
      }

      _createClass(ClinicadministratorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClinicadministratorPageComponent;
    }();

    ClinicadministratorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clinicadministrator-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clinicadministrator-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinicadministrator-page/clinicadministrator-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clinicadministrator-page.component.css */
      "./src/app/components/clinicadministrator-page/clinicadministrator-page.component.css")).default]
    })], ClinicadministratorPageComponent);
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

  /*! exports provided: ClinicadministratorProfileComponent */

  /***/
  function srcAppComponentsClinicadministratorProfileClinicadministratorProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicadministratorProfileComponent", function () {
      return ClinicadministratorProfileComponent;
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


    var src_app_models_clinicAdministrator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/clinicAdministrator */
    "./src/app/models/clinicAdministrator.ts");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_clinic_administrator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/clinic-administrator.service */
    "./src/app/services/clinic-administrator.service.ts");
    /* harmony import */


    var src_app_models_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/models/role */
    "./src/app/models/role.ts");

    var ClinicadministratorProfileComponent =
    /*#__PURE__*/
    function () {
      function ClinicadministratorProfileComponent(formBuilder, router, clinicAdministratorService, userService) {
        _classCallCheck(this, ClinicadministratorProfileComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.clinicAdministratorService = clinicAdministratorService;
        this.userService = userService;
        this.submitted = false;
        this.user = JSON.parse(userService.isLoggedIn());
        console.log(this.user);
        this.selectedClinicAdministrator = clinicAdministratorService.getClinicAdministrator(this.user.email);
        console.log(this.selectedClinicAdministrator);
      }

      _createClass(ClinicadministratorProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.clinicAdministratorProfileForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedClinicAdministrator.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedClinicAdministrator.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedClinicAdministrator.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedClinicAdministrator.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedClinicAdministrator.number, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)]),
            clinic: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedClinicAdministrator.clinic, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // Stop here if form is invalid

          if (this.clinicAdministratorProfileForm.invalid) {
            return;
          }

          this.clinicAdministrator = new src_app_models_clinicAdministrator__WEBPACK_IMPORTED_MODULE_3__["ClinicAdministrator"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.clinic.value);
          this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"](this.f.email.value, this.f.password.value, src_app_models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].CLINICADMINISTRATOR);
          this.editClinicAdministrator();
        }
      }, {
        key: "editClinicAdministrator",
        value: function editClinicAdministrator() {
          var _this2 = this;

          this.clinicAdministratorService.editClinicAdministrator(this.clinicAdministrator).subscribe(function (data) {
            _this2.userService.setUser(_this2.user);

            _this2.clinicAdministratorService.setClinicAdministrator(_this2.clinicAdministrator);

            _this2.router.navigate(['/clinicAdministrator/home']);

            console.log('uspesno');
          }, function (error) {
            alert('Error edit clinicAdministrator');
            console.log(error);
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.clinicAdministratorProfileForm.controls;
        }
      }]);

      return ClinicadministratorProfileComponent;
    }();

    ClinicadministratorProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_clinic_administrator_service__WEBPACK_IMPORTED_MODULE_7__["ClinicAdministratorService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    ClinicadministratorProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clinicadministrator-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clinicadministrator-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clinicadministrator-profile.component.css */
      "./src/app/components/clinicadministrator-profile/clinicadministrator-profile.component.css")).default]
    })], ClinicadministratorProfileComponent);
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


    __webpack_exports__["default"] = "div {\r\n    width: 100%;\r\n  \r\n  }\r\n  \r\n  table {\r\n    width: 75%;\r\n    margin-top:50px;\r\n    margin-left:300px;\r\n  \r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    margin-top:50px;\r\n    margin-left:300px;\r\n    width: 75%;\r\n  }\r\n  \r\n  mat-paginator {\r\n    width: 75%;\r\n    margin-left:300px;\r\n  }\r\n  \r\n  tr.example-detail-row {\r\n    height: 0;\r\n  }\r\n  \r\n  tr.example-element-row:not(.example-expanded-row):hover {\r\n    background: #777;\r\n  }\r\n  \r\n  tr.example-element-row:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n  }\r\n  \r\n  .example-element-row td {\r\n    border-bottom-width: 0;\r\n  }\r\n  \r\n  .example-element-detail {\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: flex;\r\n  }\r\n  \r\n  .example-element-diagram {\r\n    min-width: 80px;\r\n    border: 2px solid black;\r\n    padding: 8px;\r\n    font-weight: lighter;\r\n    margin: 8px 0;\r\n    height: 104px;\r\n  }\r\n  \r\n  .example-element-name {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n  }\r\n  \r\n  .example-element-description {\r\n    padding: 16px;\r\n  }\r\n  \r\n  .example-element-description-attribution {\r\n    opacity: 0.5;\r\n  }\r\n  \r\n  .mat-raised-button {\r\n    margin-left:300px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGluaWNzLXBhZ2UvY2xpbmljcy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXOztFQUViOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7O0VBRW5COztFQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztFQUNBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBYTtJQUFiLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaW5pY3MtcGFnZS9jbGluaWNzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbi10b3A6NTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjMwMHB4O1xyXG4gIFxyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MzAwcHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gIH1cclxuICBtYXQtcGFnaW5hdG9yIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tbGVmdDozMDBweDtcclxuICB9XHJcbiAgXHJcbiAgdHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgdHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgaGVpZ2h0OiAxMDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OjMwMHB4O1xyXG4gIH0iXX0= */";
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
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _clinic_search_clinic_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../clinic-search/clinic-search.component */
    "./src/app/components/clinic-search/clinic-search.component.ts");
    /* harmony import */


    var _patient_doctors_list_patient_doctors_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../patient-doctors-list/patient-doctors-list.component */
    "./src/app/components/patient-doctors-list/patient-doctors-list.component.ts");

    var ClinicsPageComponent =
    /*#__PURE__*/
    function () {
      function ClinicsPageComponent(clinicService, doctorService, dialog) {
        _classCallCheck(this, ClinicsPageComponent);

        this.clinicService = clinicService;
        this.doctorService = doctorService;
        this.dialog = dialog;
        this.displayedColumns = ['Name', 'Address', 'ClinicRating', 'Price', 'Doctors'];
        this.clinicDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.doctorDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.clinics = new Array();
        this.doctors = new Array();
        this.clinics = this.clinicService.getAllClinics();
        console.log(this.clinics);
        this.doctors = this.doctorService.getAllDoctors();
        this.condition = true;
        this.all();
      }

      _createClass(ClinicsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.all();
          this.clinicDataSource.paginator = this.paginator;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.clinicDataSource.filter = filterValue.trim().toLowerCase();

          if (this.clinicDataSource.paginator) {
            this.clinicDataSource.paginator.firstPage();
          }
        }
      }, {
        key: "all",
        value: function all() {
          this.clinicDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.clinicService.getAllClinics());
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this3 = this;

          var dialog = this.dialog.open(_clinic_search_clinic_search_component__WEBPACK_IMPORTED_MODULE_6__["ClinicSearchComponent"]);
          dialog.afterClosed().subscribe(function (data) {
            if (data !== undefined) {
              _this3.clinics = data.clinics;
              _this3.clinicDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this3.clinics);
              _this3.condition = false;
              _this3.tmp = data.date;
            }
          });
        }
      }, {
        key: "doctorList",
        value: function doctorList(element) {
          this.doctorService.setDoctorss(element.doctors);
          console.log(element);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = element.doctors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {//  this.tmp1 = this.doctorService.getDoctorsTermins(this.tmp, d.email);
              //  console.log(this.tmp1);

              var d = _step.value;
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

          var dialog = this.dialog.open(_patient_doctors_list_patient_doctors_list_component__WEBPACK_IMPORTED_MODULE_7__["PatientDoctorsListComponent"]);
        }
      }]);

      return ClinicsPageComponent;
    }();

    ClinicsPageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"]
      }, {
        type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_5__["DoctorService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ClinicsPageComponent.prototype, "doctorListComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], ClinicsPageComponent.prototype, "paginator", void 0);
    ClinicsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clinics-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clinics-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clinics-page/clinics-page.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '0px',
        minHeight: '0'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clinics-page.component.css */
      "./src/app/components/clinics-page/clinics-page.component.css")).default]
    })], ClinicsPageComponent);
    /***/
  },

  /***/
  "./src/app/components/codebook-dto.ts":
  /*!********************************************!*\
    !*** ./src/app/components/codebook-dto.ts ***!
    \********************************************/

  /*! exports provided: CodebookDTO */

  /***/
  function srcAppComponentsCodebookDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodebookDTO", function () {
      return CodebookDTO;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CodebookDTO = function CodebookDTO() {
      _classCallCheck(this, CodebookDTO);
    };
    /***/

  },

  /***/
  "./src/app/components/codebook/codebook.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/codebook/codebook.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCodebookCodebookComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29kZWJvb2svY29kZWJvb2suY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/codebook/codebook.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/codebook/codebook.component.ts ***!
    \***********************************************************/

  /*! exports provided: CodebookComponent */

  /***/
  function srcAppComponentsCodebookCodebookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodebookComponent", function () {
      return CodebookComponent;
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


    var _services_clinicalCenterAdministrator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/clinicalCenterAdministrator.service */
    "./src/app/services/clinicalCenterAdministrator.service.ts");
    /* harmony import */


    var _codebook_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../codebook-dto */
    "./src/app/components/codebook-dto.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CodebookComponent =
    /*#__PURE__*/
    function () {
      function CodebookComponent(codebookService, formBuilder) {
        _classCallCheck(this, CodebookComponent);

        this.codebookService = codebookService;
        this.formBuilder = formBuilder;
      }

      _createClass(CodebookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.addMedicine = this.formBuilder.group({
            'label': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.addDiagnose = this.formBuilder.group({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.codebookService.returnCodebook().subscribe(function (data) {
            _this4.codebook = data;
          }, function (error) {});
        }
      }, {
        key: "addCodebookMedicine",
        value: function addCodebookMedicine() {
          var _this5 = this;

          var si = new _codebook_dto__WEBPACK_IMPORTED_MODULE_3__["CodebookDTO"]();
          si.medicine = new Object();
          si.medicine.label = this.addMedicine.value.label;
          this.codebookService.addCodebook(si).subscribe(function (data) {
            _this5.codebook = data;
          });
        }
      }, {
        key: "deleteMedicine",
        value: function deleteMedicine(medicine) {
          var _this6 = this;

          var si = new _codebook_dto__WEBPACK_IMPORTED_MODULE_3__["CodebookDTO"]();
          si.medicine = medicine; //alert(JSON.stringify(si));

          this.codebookService.deleteCodebook(si).subscribe(function (data) {
            _this6.codebook = data;
          });
        }
      }, {
        key: "addCodebookDiagnose",
        value: function addCodebookDiagnose() {
          var _this7 = this;

          var codebook = new _codebook_dto__WEBPACK_IMPORTED_MODULE_3__["CodebookDTO"]();
          codebook.diagnose = new Object();
          codebook.diagnose.title = this.addDiagnose.value.title;
          this.codebookService.addCodebook(codebook).subscribe(function (data) {
            _this7.codebook = data;
          });
        }
      }, {
        key: "deleteDiagnose",
        value: function deleteDiagnose(diagnose) {
          var _this8 = this;

          var codebook = new _codebook_dto__WEBPACK_IMPORTED_MODULE_3__["CodebookDTO"]();
          codebook.diagnose = diagnose;
          this.codebookService.deleteCodebook(codebook).subscribe(function (data) {
            _this8.codebook = data;
          });
        }
      }]);

      return CodebookComponent;
    }();

    CodebookComponent.ctorParameters = function () {
      return [{
        type: _services_clinicalCenterAdministrator_service__WEBPACK_IMPORTED_MODULE_2__["ClinicalCenterAdministratorService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    CodebookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-codebook',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./codebook.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/codebook/codebook.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./codebook.component.css */
      "./src/app/components/codebook/codebook.component.css")).default]
    })], CodebookComponent);
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
      function DoctorProfileComponent(formBuilder, router, doctorService, userService) {
        _classCallCheck(this, DoctorProfileComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.doctorService = doctorService;
        this.userService = userService;
        this.submitted = false;
        this.user = JSON.parse(userService.isLoggedIn());
        console.log(this.user);
        this.selectedDoctor = doctorService.getDoctor(this.user.email);
      }

      _createClass(DoctorProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.doctorProfileForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(9)]),
            workHoursFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.workHoursFrom, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(2)]),
            workHoursTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedDoctor.workHoursTo, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(2)])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // Stop here if form is invalid

          if (this.doctorProfileForm.invalid) {
            return;
          }

          this.doctor = new _models_doctor__WEBPACK_IMPORTED_MODULE_2__["Doctor"](this.f.email.value, this.f.password.value, this.f.name.value, this.f.surname.value, this.f.number.value, this.f.workHoursFrom.value, this.f.workHoursTo.value);
          this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](this.f.email.value, this.f.password.value, _models_role__WEBPACK_IMPORTED_MODULE_8__["Role"].DOCTOR);
          this.editDoctor();
        }
      }, {
        key: "editDoctor",
        value: function editDoctor() {
          var _this9 = this;

          this.doctorService.editDoctor(this.doctor).subscribe(function (data) {
            _this9.userService.setUser(_this9.user);

            _this9.doctorService.setDoctor(_this9.doctor);

            _this9.router.navigate(['/doctor/home']);

            console.log('uspesno');
          }, function (error) {
            alert('Error edit doctor');
            console.log(error);
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.doctorProfileForm.controls;
        }
      }]);

      return DoctorProfileComponent;
    }();

    DoctorProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_5__["DoctorService"]
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


    var src_app_services_medical_record_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/medical-record.service */
    "./src/app/services/medical-record.service.ts");
    /* harmony import */


    var src_app_services_clinicalCenterAdministrator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/clinicalCenterAdministrator.service */
    "./src/app/services/clinicalCenterAdministrator.service.ts");
    /* harmony import */


    var src_app_services_clinic_administrator_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/clinic-administrator.service */
    "./src/app/services/clinic-administrator.service.ts");

    var LoginUser = function LoginUser(email, password) {
      _classCallCheck(this, LoginUser);

      this.email = email;
      this.password = password;
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(patientService, formBuilder, router, userService, doctorService, nurseService, clinicAdministratorService, recordService, ccadminService) {
        _classCallCheck(this, LoginComponent);

        this.patientService = patientService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.doctorService = doctorService;
        this.nurseService = nurseService;
        this.clinicAdministratorService = clinicAdministratorService;
        this.recordService = recordService;
        this.ccadminService = ccadminService;
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
          var _this10 = this;

          if (this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].PATIENT && this.loginUser.password === this.user.password) {
            console.log(this.user);
            this.patientService.loginPatient(this.user).subscribe(function (data) {
              console.log(data);

              if (data !== null) {
                console.log('Successful logged in');

                _this10.router.navigate(['/patient/home']);
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

                _this10.router.navigate(['/doctor/home']);
              } else {
                console.log('Login error');
              }
            }, function (error) {
              console.log(error);
            });
          } else if (this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].CLINICADMINISTRATOR && this.loginUser.password === this.user.password) {
            console.log(this.user);
            this.clinicAdministratorService.loginClinicAdministrator(this.user).subscribe(function (data) {
              console.log(data);

              if (data !== null) {
                console.log('Successful logged in');

                _this10.router.navigate(['/clinicAdministrator/home']);
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

                _this10.router.navigate(['/nurse/home']);
              } else {
                console.log('Login error');
              }
            }, function (error) {
              console.log(error);
            });
          } else if (this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].CCADMIN && this.loginUser.password === this.user.password) {
            console.log(this.user);
            this.ccadminService.loginCCAdmin(this.user).subscribe(function (data) {
              console.log(data);

              if (data !== null) {
                console.log('Successful logged in as ccadmin');

                _this10.router.navigate(['/clinicalCenterAdministrator/profile']);
              } else {
                console.log('Login error as ccadmin');
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
        type: src_app_services_clinic_administrator_service__WEBPACK_IMPORTED_MODULE_11__["ClinicAdministratorService"]
      }, {
        type: src_app_services_medical_record_service__WEBPACK_IMPORTED_MODULE_9__["MedicalRecordService"]
      }, {
        type: src_app_services_clinicalCenterAdministrator_service__WEBPACK_IMPORTED_MODULE_10__["ClinicalCenterAdministratorService"]
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
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");

    var MedicalHistoryPageComponent =
    /*#__PURE__*/
    function () {
      function MedicalHistoryPageComponent(patientService, examinationService, userService) {
        _classCallCheck(this, MedicalHistoryPageComponent);

        this.patientService = patientService;
        this.examinationService = examinationService;
        this.userService = userService;
        this.displayedColumns = ['kind', 'clinic', 'doctor'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.examinations = this.examinationService.getAllExaminations();
        this.exTables = new Array();
        this.tmp = new Array();
        this.loggedUser = this.userService.isLoggedIn();
        this.tmpStr = this.loggedUser.split(',');
        this.tmpStr1 = this.tmpStr[0].split(':');
        this.str = "";
        this.user = JSON.parse(this.loggedUser);
      }

      _createClass(MedicalHistoryPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.all();
        }
      }, {
        key: "all",
        value: function all() {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.examinations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var c = _step2.value;

              if (c.patient.email === this.user.email) {
                this.tmp.push(c);
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = c.doctors[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var s = _step3.value;
                    this.str = s.name + " ";
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

                this.exTable = new src_app_models_examinationTable__WEBPACK_IMPORTED_MODULE_4__["ExaminationTable"](this.kindExamination(c.kind.toString()), this.str, c.clinic.name);
                this.exTables.push(this.exTable);
                console.log(this.exTable);
              }
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

          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.exTables);
          console.log(this.exTables);
          this.str = "";
        }
      }, {
        key: "kindExamination",
        value: function kindExamination(kind) {
          if (kind === 'EXAMINATION') {
            return "EXAMINATION";
          } else {
            return "OPERATION";
          }
        }
      }]);

      return MedicalHistoryPageComponent;
    }();

    MedicalHistoryPageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"]
      }, {
        type: src_app_services_examination_service__WEBPACK_IMPORTED_MODULE_3__["ExaminationService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

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

  /*! exports provided: MedicalRecordPageComponent */

  /***/
  function srcAppComponentsMedicalRecordPageMedicalRecordPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
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

    var MedicalRecordPageComponent =
    /*#__PURE__*/
    function () {
      function MedicalRecordPageComponent(medicalRecordService, userService) {
        _classCallCheck(this, MedicalRecordPageComponent);

        this.medicalRecordService = medicalRecordService;
        this.userService = userService;
        this.records = new Array();
        this.loggedUser = this.userService.isLoggedIn();
        this.displayedColumns = ['Height', 'Weight', 'BloodType', 'Allergies', 'ExaminationReports'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.rec = new Array();
        this.records = medicalRecordService.getAllMedicalRecords();
        this.user = JSON.parse(this.loggedUser);
        this.all();
      }

      _createClass(MedicalRecordPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.all();
        }
      }, {
        key: "all",
        value: function all() {
          this.setAll();
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.rec);
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "setAll",
        value: function setAll() {
          for (var i = 0; i < this.records.length; i++) {
            var element = this.records[i];
            var truee = 0;

            if (element.patient.email == this.user.email) {
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = this.rec[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var c = _step4.value;
                  if (c.id == element.id) truee = 1;
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

              if (truee == 0) {
                this.rec.push(this.records[i]);
              }
            }
          }
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
  "./src/app/components/nurse-vacation-req/nurse-vacation-req.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/components/nurse-vacation-req/nurse-vacation-req.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNurseVacationReqNurseVacationReqComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVyc2UtdmFjYXRpb24tcmVxL251cnNlLXZhY2F0aW9uLXJlcS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/nurse-vacation-req/nurse-vacation-req.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/nurse-vacation-req/nurse-vacation-req.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: NurseVacationRequestComponent */

  /***/
  function srcAppComponentsNurseVacationReqNurseVacationReqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NurseVacationRequestComponent", function () {
      return NurseVacationRequestComponent;
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


    var _models_zahtev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/zahtev */
    "./src/app/models/zahtev.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_vacation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/vacation.service */
    "./src/app/services/vacation.service.ts");
    /* harmony import */


    var _models_zahtevStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/zahtevStatus */
    "./src/app/models/zahtevStatus.ts");

    var NurseVacationRequestComponent =
    /*#__PURE__*/
    function () {
      function NurseVacationRequestComponent(dialog, formBuilder, router, vacationService) {
        _classCallCheck(this, NurseVacationRequestComponent);

        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.router = router;
        this.vacationService = vacationService;
        this.submitted = false;
      }

      _createClass(NurseVacationRequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vacationRequestForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            startingDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            finishDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // Stop here if form is invalid

          if (this.vacationRequestForm.invalid) {
            return;
          }

          this.zahtev = new _models_zahtev__WEBPACK_IMPORTED_MODULE_3__["Zahtev"](this.f.email.value, this.f.name.value, this.f.surname.value, this.f.startingDate.value, this.f.finishDate.value, _models_zahtevStatus__WEBPACK_IMPORTED_MODULE_7__["ZahtevStatus"].AWAITING_APPROVAL);
          this.zahtev = new _models_zahtev__WEBPACK_IMPORTED_MODULE_3__["Zahtev"](this.f.email.value, this.f.name.value, this.f.surname.value, this.f.startingDate.value, this.f.finishDate.value, _models_zahtevStatus__WEBPACK_IMPORTED_MODULE_7__["ZahtevStatus"].AWAITING_APPROVAL);
          this.createVacation();
        }
      }, {
        key: "createVacation",
        value: function createVacation() {
          var _this11 = this;

          this.vacationService.newVacation1(this.zahtev).subscribe(function (data) {
            _this11.vacationService.addVacation1(_this11.zahtev);

            _this11.router.navigate(['/nurse/home']);
          }, function (error) {
            console.log(error);
            console.log('greska');
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.vacationRequestForm.controls;
        }
      }]);

      return NurseVacationRequestComponent;
    }();

    NurseVacationRequestComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_vacation_service__WEBPACK_IMPORTED_MODULE_6__["VacationService"]
      }];
    };

    NurseVacationRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nurse-vacation-req',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nurse-vacation-req.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-vacation-req/nurse-vacation-req.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nurse-vacation-req.component.css */
      "./src/app/components/nurse-vacation-req/nurse-vacation-req.component.css")).default]
    })], NurseVacationRequestComponent);
    /***/
  },

  /***/
  "./src/app/components/patient-doctor-search/patient-doctor-search.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/patient-doctor-search/patient-doctor-search.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPatientDoctorSearchPatientDoctorSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1kb2N0b3Itc2VhcmNoL3BhdGllbnQtZG9jdG9yLXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/patient-doctor-search/patient-doctor-search.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/patient-doctor-search/patient-doctor-search.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: PatientDoctorSearchComponent */

  /***/
  function srcAppComponentsPatientDoctorSearchPatientDoctorSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientDoctorSearchComponent", function () {
      return PatientDoctorSearchComponent;
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


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var PatientDoctorSearchComponent =
    /*#__PURE__*/
    function () {
      function PatientDoctorSearchComponent(formBuilder, doctorService, dialogRef, data) {
        _classCallCheck(this, PatientDoctorSearchComponent);

        this.formBuilder = formBuilder;
        this.doctorService = doctorService;
        this.dialogRef = dialogRef;
        this.doctors = new Array();
      }

      _createClass(PatientDoctorSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.SearchDoctorGroup = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-5]*')])
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "save",
        value: function save() {
          if (this.SearchDoctorGroup.invalid) {
            return;
          }

          this.doctors = this.doctorService.getDoctrosWithSearch(this.f.name.value, this.f.surname.value, this.f.rating.value);
          console.log(this.doctors);
          this.dialogRef.close(this.doctors);
        }
      }, {
        key: "f",
        get: function get() {
          return this.SearchDoctorGroup.controls;
        }
      }]);

      return PatientDoctorSearchComponent;
    }();

    PatientDoctorSearchComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    PatientDoctorSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-doctor-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-doctor-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-doctor-search/patient-doctor-search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-doctor-search.component.css */
      "./src/app/components/patient-doctor-search/patient-doctor-search.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))], PatientDoctorSearchComponent);
    /***/
  },

  /***/
  "./src/app/components/patient-doctors-list/patient-doctors-list.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/components/patient-doctors-list/patient-doctors-list.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPatientDoctorsListPatientDoctorsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50LWRvY3RvcnMtbGlzdC9wYXRpZW50LWRvY3RvcnMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50LWRvY3RvcnMtbGlzdC9wYXRpZW50LWRvY3RvcnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/patient-doctors-list/patient-doctors-list.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/patient-doctors-list/patient-doctors-list.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PatientDoctorsListComponent */

  /***/
  function srcAppComponentsPatientDoctorsListPatientDoctorsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientDoctorsListComponent", function () {
      return PatientDoctorsListComponent;
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


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _patient_doctor_search_patient_doctor_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../patient-doctor-search/patient-doctor-search.component */
    "./src/app/components/patient-doctor-search/patient-doctor-search.component.ts");

    var PatientDoctorsListComponent =
    /*#__PURE__*/
    function () {
      function PatientDoctorsListComponent(doctorService, searchDialog, dialogRef) {
        _classCallCheck(this, PatientDoctorsListComponent);

        this.doctorService = doctorService;
        this.searchDialog = searchDialog;
        this.dialogRef = dialogRef;
        this.displayedColumns = ['Name', 'Surname', 'DoctorRating', 'Price'];
        this.doctors = doctorService.getDoctorss();
        this.doctorDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.doctors);
      }

      _createClass(PatientDoctorsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.doctorDataSource.filter = filterValue.trim().toLowerCase();

          if (this.doctorDataSource.paginator) {
            this.doctorDataSource.paginator.firstPage();
          }
        }
      }, {
        key: "searchDoctors",
        value: function searchDoctors() {
          var _this12 = this;

          var dialog = this.searchDialog.open(_patient_doctor_search_patient_doctor_search_component__WEBPACK_IMPORTED_MODULE_4__["PatientDoctorSearchComponent"]);
          dialog.afterClosed().subscribe(function (data) {
            if (data !== undefined) {
              _this12.doctors = data;
              _this12.doctorDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            }
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return PatientDoctorsListComponent;
    }();

    PatientDoctorsListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PatientDoctorsListComponent.prototype, "doctorSearchDialog", void 0);
    PatientDoctorsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-doctors-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-doctors-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-doctors-list/patient-doctors-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-doctors-list.component.css */
      "./src/app/components/patient-doctors-list/patient-doctors-list.component.css")).default]
    })], PatientDoctorsListComponent);
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
          var _this13 = this;

          this.patientService.editPatient(this.patient).subscribe(function (data) {
            _this13.userService.setUser(_this13.user);

            _this13.patientService.setPatient(_this13.patient);

            _this13.router.navigate(['/patient/home']);
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
          var _this14 = this;

          this.patientService.newPatient(this.patient).subscribe(function (data) {
            _this14.userService.addUser(_this14.user);

            console.log(_this14.user);

            _this14.patientService.addPatient(_this14.patient);

            _this14.router.navigate(['/login']);
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
  "./src/app/components/vacation-request-register/vacation-request-register.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/vacation-request-register/vacation-request-register.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsVacationRequestRegisterVacationRequestRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmFjYXRpb24tcmVxdWVzdC1yZWdpc3Rlci92YWNhdGlvbi1yZXF1ZXN0LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/vacation-request-register/vacation-request-register.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/vacation-request-register/vacation-request-register.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: VacationRequestRegisterComponent */

  /***/
  function srcAppComponentsVacationRequestRegisterVacationRequestRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VacationRequestRegisterComponent", function () {
      return VacationRequestRegisterComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_vacation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/vacation.service */
    "./src/app/services/vacation.service.ts");
    /* harmony import */


    var _models_zahtevStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/zahtevStatus */
    "./src/app/models/zahtevStatus.ts");

    var VacationRequestRegisterComponent =
    /*#__PURE__*/
    function () {
      function VacationRequestRegisterComponent(vacationService, changeDetectorRef, router) {
        _classCallCheck(this, VacationRequestRegisterComponent);

        this.vacationService = vacationService;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.displayedColumns = ['email', 'startingDate', 'finishDate', 'approving'];
        this.RequestsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.all();
      }

      _createClass(VacationRequestRegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.all();
        }
      }, {
        key: "all",
        value: function all() {
          this.RequestsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.vacationService.getAllRequests());
        }
      }, {
        key: "onAccept",
        value: function onAccept(zahtev) {
          this.p = this.vacationService.getVacations(zahtev.email);
          this.p.status = _models_zahtevStatus__WEBPACK_IMPORTED_MODULE_5__["ZahtevStatus"].APPROVED;
          this.editVacation(zahtev);
          this.deleteRow(zahtev);
        }
      }, {
        key: "editVacation",
        value: function editVacation(zahtev) {
          var _this15 = this;

          this.vacationService.editVacation(this.p).subscribe(function (data) {
            _this15.vacationService.setVacation(_this15.p);

            _this15.deleteRow(zahtev);

            _this15.router.navigate(['/clinicalCenterAdministrator/VacationRequests']);
          }, function (error) {
            alert('Error edit request');
            console.log(error);
          });
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(d) {
          var index = this.RequestsDataSource.data.indexOf(d);
          this.RequestsDataSource.data.splice(index, 1);
        }
      }]);

      return VacationRequestRegisterComponent;
    }();

    VacationRequestRegisterComponent.ctorParameters = function () {
      return [{
        type: _services_vacation_service__WEBPACK_IMPORTED_MODULE_4__["VacationService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    VacationRequestRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vacation-request-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vacation-request-register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vacation-request-register/vacation-request-register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vacation-request-register.component.css */
      "./src/app/components/vacation-request-register/vacation-request-register.component.css")).default]
    })], VacationRequestRegisterComponent);
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

    var Clinic = function Clinic(name, address, description, doctors, examinationTypes, clinicRating, id) {
      _classCallCheck(this, Clinic);

      this.doctors = new Array();
      this.examinationTypes = new Array();
      this.name = name;
      this.address = address;
      this.description = description;
      this.doctors = doctors;
      this.clinicRating = clinicRating;
      this.examinationTypes = examinationTypes;
      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/models/clinicAdministrator.ts":
  /*!***********************************************!*\
    !*** ./src/app/models/clinicAdministrator.ts ***!
    \***********************************************/

  /*! exports provided: ClinicAdministrator */

  /***/
  function srcAppModelsClinicAdministratorTs(module, __webpack_exports__, __webpack_require__) {
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

    var ClinicAdministrator = function ClinicAdministrator(email, password, name, surname, number1, clinic) {
      _classCallCheck(this, ClinicAdministrator);

      this.email = email;
      this.password = password;
      this.name = name;
      this.surname = surname;
      this.number = number1;
      this.clinic = clinic;
    };
    /***/

  },

  /***/
  "./src/app/models/clinicalCenterAdministrator.ts":
  /*!*******************************************************!*\
    !*** ./src/app/models/clinicalCenterAdministrator.ts ***!
    \*******************************************************/

  /*! exports provided: ClinicalCenterAdministrator */

  /***/
  function srcAppModelsClinicalCenterAdministratorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicalCenterAdministrator", function () {
      return ClinicalCenterAdministrator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ClinicalCenterAdministrator = function ClinicalCenterAdministrator(email, password, name, surname, number) {
      _classCallCheck(this, ClinicalCenterAdministrator);

      this.email = email;
      this.password = password;
      this.name = name;
      this.surname = surname;
      this.number = number;
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

    var Doctor = function Doctor(email, password, name, surname, number1, workHoursFrom, workHoursTo, specialized, doctorRating, clinic) {
      _classCallCheck(this, Doctor);

      this.email = email;
      this.password = password;
      this.name = name;
      this.surname = surname;
      this.phone = number1;
      this.workHoursFrom = workHoursFrom;
      this.workHoursTo = workHoursTo;
      this.doctorRating = doctorRating;
      this.specialized = specialized;
      this.clinic = clinic;
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

    var Examination = function Examination(kind, status, examinationType, discount, doctorRating, clinicRating, nurse, clinic, patient, doctors, id, interval) {
      _classCallCheck(this, Examination);

      this.doctors = new Array();
      this.kind = kind;
      this.status = status;
      this.examinationType = examinationType;
      this.discount = discount;
      this.doctorRating = doctorRating;
      this.clinicRating = clinicRating;
      this.nurse = nurse;
      this.clinic = clinic;
      this.patient = patient;
      this.doctors = doctors;
      this.id = id;
      this.interval = interval;
    };
    /***/

  },

  /***/
  "./src/app/models/examinationKind.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/examinationKind.ts ***!
    \*******************************************/

  /*! exports provided: ExaminationKind */

  /***/
  function srcAppModelsExaminationKindTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExaminationKind", function () {
      return ExaminationKind;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ExaminationKind;

    (function (ExaminationKind) {
      ExaminationKind[ExaminationKind["EXAMINATION"] = 0] = "EXAMINATION";
      ExaminationKind[ExaminationKind["OPERATION"] = 1] = "OPERATION";
    })(ExaminationKind || (ExaminationKind = {}));
    /***/

  },

  /***/
  "./src/app/models/examinationStatus.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/examinationStatus.ts ***!
    \*********************************************/

  /*! exports provided: ExaminationStatus */

  /***/
  function srcAppModelsExaminationStatusTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExaminationStatus", function () {
      return ExaminationStatus;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ExaminationStatus;

    (function (ExaminationStatus) {
      ExaminationStatus[ExaminationStatus["APPROVED"] = 0] = "APPROVED";
      ExaminationStatus[ExaminationStatus["AWAITING"] = 1] = "AWAITING";
      ExaminationStatus[ExaminationStatus["PREDEF_BOOKED"] = 2] = "PREDEF_BOOKED";
      ExaminationStatus[ExaminationStatus["PREDEF_AVAILABLE"] = 3] = "PREDEF_AVAILABLE";
    })(ExaminationStatus || (ExaminationStatus = {}));
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

    var ExaminationTable = function ExaminationTable(kind, doctors, clinic) {
      _classCallCheck(this, ExaminationTable);

      this.kind = kind;
      this.doctors = doctors;
      this.clinic = clinic;
    };
    /***/

  },

  /***/
  "./src/app/models/examinationType.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/examinationType.ts ***!
    \*******************************************/

  /*! exports provided: ExaminationType */

  /***/
  function srcAppModelsExaminationTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExaminationType", function () {
      return ExaminationType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ExaminationType = function ExaminationType(label, price, id) {
      _classCallCheck(this, ExaminationType);

      this.label = label;
      this.price = price;
      this.id = id;
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

    var MedicalRecord = function MedicalRecord(id, height, weight, bloodType, allergies, patient, reports) {
      _classCallCheck(this, MedicalRecord);

      this.reports = new Array();
      this.id = id;
      this.height = height;
      this.weight = weight;
      this.bloodType = bloodType;
      this.allergies = allergies;
      this.patient = patient;
      this.reports = reports;
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

    var Nurse = function Nurse(email, password, name, surname, number1, address, city, country, workHoursTo, workHoursFrom) {
      _classCallCheck(this, Nurse);

      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.number = number1;
      this.address = address;
      this.city = city;
      this.country = country;
      this.workHoursFrom = workHoursFrom;
      this.workHoursTo = workHoursTo;
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
      Role[Role["CCADMIN"] = 3] = "CCADMIN";
      Role[Role["NONE"] = 4] = "NONE";
      Role[Role["CLINICADMINISTRATOR"] = 5] = "CLINICADMINISTRATOR";
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
  "./src/app/models/zahtev.ts":
  /*!**********************************!*\
    !*** ./src/app/models/zahtev.ts ***!
    \**********************************/

  /*! exports provided: Zahtev */

  /***/
  function srcAppModelsZahtevTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Zahtev", function () {
      return Zahtev;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Zahtev = function Zahtev(email, name, surname, startingDate, finishDate, status) {
      _classCallCheck(this, Zahtev);

      this.email = email;
      this.name = name;
      this.surname = surname;
      this.startingDate = startingDate;
      this.finishDate = finishDate;
      this.status = status;
    };
    /***/

  },

  /***/
  "./src/app/models/zahtevStatus.ts":
  /*!****************************************!*\
    !*** ./src/app/models/zahtevStatus.ts ***!
    \****************************************/

  /*! exports provided: ZahtevStatus */

  /***/
  function srcAppModelsZahtevStatusTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZahtevStatus", function () {
      return ZahtevStatus;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ZahtevStatus;

    (function (ZahtevStatus) {
      ZahtevStatus[ZahtevStatus["AWAITING_APPROVAL"] = 0] = "AWAITING_APPROVAL";
      ZahtevStatus[ZahtevStatus["APPROVED"] = 1] = "APPROVED";
    })(ZahtevStatus || (ZahtevStatus = {}));
    /***/

  },

  /***/
  "./src/app/services/clinic-administrator.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/clinic-administrator.service.ts ***!
    \**********************************************************/

  /*! exports provided: ClinicAdministratorService */

  /***/
  function srcAppServicesClinicAdministratorServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models_clinicAdministrator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/clinicAdministrator */
    "./src/app/models/clinicAdministrator.ts");
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
        this.urlClinicAdministrator = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].clinicAdministrator;
        this.listClinicAdministrators = new Array();
        this.getAllClinicAdministrators();
      }

      _createClass(ClinicAdministratorService, [{
        key: "loginClinicAdministrator",
        value: function loginClinicAdministrator(clinicAdministrator) {
          this.userService.setToken(clinicAdministrator);
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/login', clinicAdministrator, {
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
        key: "getClinicAdministrator",
        value: function getClinicAdministrator(email) {
          console.log(this.listClinicAdministrators);

          if (this.listClinicAdministrators.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this.listClinicAdministrators[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var u = _step5.value;

              if (u.email === email) {
                return u;
              }
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

          return null;
        }
      }, {
        key: "addClinicAdministrator",
        value: function addClinicAdministrator(d) {
          if (this.getClinicAdministrator(d.email) === null) {
            this.listClinicAdministrators.push(d);
          }
        }
      }, {
        key: "setClinicAdministrator",
        value: function setClinicAdministrator(d) {
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = this.listClinicAdministrators[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var d1 = _step6.value;

              if (d1.email === d.email) {
                d1.password = d.password;
                d1.name = d.name;
                d1.surname = d.surname;
                d1.number = d.number;
                d1.clinic = d.clinic;
                return;
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
        }
      }, {
        key: "getAllClinicAdministrators",
        value: function getAllClinicAdministrators() {
          var _this16 = this;

          this.http.get(this.urlClinicAdministrator + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = data[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var c = _step7.value;
                _this16.clinicAdministrator = new _models_clinicAdministrator__WEBPACK_IMPORTED_MODULE_3__["ClinicAdministrator"](c.email, c.password, c.name, c.surname, c.number, c.clinic);
                console.log(c);

                _this16.addClinicAdministrator(_this16.clinicAdministrator);
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
    /* harmony import */


    var _examination_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./examination-type.service */
    "./src/app/services/examination-type.service.ts");

    var ClinicService =
    /*#__PURE__*/
    function () {
      function ClinicService(http, examinationTypeService) {
        _classCallCheck(this, ClinicService);

        this.http = http;
        this.examinationTypeService = examinationTypeService;
        this.urlClinic = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].clinic;
        this.listClinics = new Array();
        this.clinicsTypes = new Array();
        this.examinationTypes = new Array();
        this.examinationTypes = examinationTypeService.getAllTypes();
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

          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = this.listClinics[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var u = _step8.value;

              if (u.name === name) {
                return u;
              }
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
          var _this17 = this;

          this.http.get(this.urlClinic + '/all').subscribe(function (data) {
            console.log(data);
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              for (var _iterator9 = data[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var c = _step9.value;
                _this17.clinic = new _models_clinic__WEBPACK_IMPORTED_MODULE_3__["Clinic"](c.name, c.address, c.description, c.doctors, c.examinationTypes, c.clinicRating, c.id);

                _this17.addClinic(_this17.clinic);
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
          return this.listClinics;
        }
      }, {
        key: "newClinic",
        value: function newClinic(clinic) {
          return this.http.post(this.urlClinic + '/clinical-centre-admin/addClinic', clinic);
        }
      }, {
        key: "getClinicsWithType",
        value: function getClinicsWithType(type) {
          var _this18 = this;

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
          params = params.append('type', type);
          this.clinicsTypes = new Array();
          this.http.get(this.urlClinic + '/allWithTypes', {
            params: params
          }).subscribe(function (data) {
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
              for (var _iterator10 = data[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var c = _step10.value;
                _this18.clinic = new _models_clinic__WEBPACK_IMPORTED_MODULE_3__["Clinic"](c.name, c.address, c.description, c.doctors, c.examinationTypes, c.clinicRating, c.id);

                _this18.clinicsTypes.push(_this18.clinic);
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
          }, function (error) {
            console.log(error);
          });
          return this.clinicsTypes;
        }
      }, {
        key: "getClinicsWithTypes",
        value: function getClinicsWithTypes() {
          return this.clinicsTypes;
        }
      }]);

      return ClinicService;
    }();

    ClinicService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _examination_type_service__WEBPACK_IMPORTED_MODULE_5__["ExaminationTypeService"]
      }];
    };

    ClinicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ClinicService);
    /***/
  },

  /***/
  "./src/app/services/clinicalCenterAdministrator.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/services/clinicalCenterAdministrator.service.ts ***!
    \*****************************************************************/

  /*! exports provided: ClinicalCenterAdministratorService */

  /***/
  function srcAppServicesClinicalCenterAdministratorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicalCenterAdministratorService", function () {
      return ClinicalCenterAdministratorService;
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


    var _models_clinicalCenterAdministrator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/clinicalCenterAdministrator */
    "./src/app/models/clinicalCenterAdministrator.ts");
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
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ClinicalCenterAdministratorService =
    /*#__PURE__*/
    function () {
      function ClinicalCenterAdministratorService(http, userService) {
        _classCallCheck(this, ClinicalCenterAdministratorService);

        this.http = http;
        this.userService = userService;
        this.urlCCAdmin = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].clinicalCenterAdmininistrator;
        this.listCCAdmin = new Array();
        this.getAllClinicalCenterAdministrators();
      }

      _createClass(ClinicalCenterAdministratorService, [{
        key: "newCCAdmin",
        value: function newCCAdmin(clinicalCenterAdministrator) {
          return this.http.post(this.urlCCAdmin + '/register', clinicalCenterAdministrator);
        }
      }, {
        key: "loginCCAdmin",
        value: function loginCCAdmin(clinicalCenterAdministrator) {
          this.userService.setToken(clinicalCenterAdministrator);
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/login', clinicalCenterAdministrator, {
            responseType: 'text'
          });
        }
      }, {
        key: "editCCAdmin",
        value: function editCCAdmin(clinicalCenterAdministrator) {
          return this.http.post(this.urlCCAdmin + '/edit', clinicalCenterAdministrator, {
            responseType: 'text'
          });
        }
      }, {
        key: "addCCAdmin",
        value: function addCCAdmin(p) {
          if (this.getCCAdmin(p.email) === null) {
            this.listCCAdmin.push(p);
          }
        }
      }, {
        key: "getCCAdmin",
        value: function getCCAdmin(email) {
          if (this.listCCAdmin.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = this.listCCAdmin[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var u = _step11.value;

              if (u.email === email) {
                return u;
              }
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

          return null;
        }
      }, {
        key: "setCCAdmin",
        value: function setCCAdmin(p) {
          var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = this.listCCAdmin[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var p1 = _step12.value;

              if (p1.email === p.email) {
                p1.name = p.name;
                p1.number = p.number;
                p1.surname = p.surname;
                p1.password = p.password;
                return;
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
        }
      }, {
        key: "getAllClinicalCenterAdministrators",
        value: function getAllClinicalCenterAdministrators() {
          var _this19 = this;

          this.http.get(this.urlCCAdmin + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
              for (var _iterator13 = data[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var c = _step13.value;
                _this19.clinicalCenterAdministrator = new _models_clinicalCenterAdministrator__WEBPACK_IMPORTED_MODULE_2__["ClinicalCenterAdministrator"](c.email, c.password, c.name, c.surname, c.number);

                _this19.addCCAdmin(_this19.clinicalCenterAdministrator);
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
          }, function (error) {
            console.log(error);
          });
          return this.listCCAdmin;
        }
      }, {
        key: "addCodebook",
        value: function addCodebook(sifarnik) {
          return this.http.post(this.urlCCAdmin + "/addCodebook", sifarnik).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "deleteCodebook",
        value: function deleteCodebook(sifarnik) {
          // alert(JSON.stringify(sifarnik));
          return this.http.post(this.urlCCAdmin + "/deleteCodebook", sifarnik).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "returnCodebook",
        value: function returnCodebook() {
          return this.http.get(this.urlCCAdmin + "/returnCodebook").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            return data;
          }));
        }
      }]);

      return ClinicalCenterAdministratorService;
    }();

    ClinicalCenterAdministratorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    ClinicalCenterAdministratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], ClinicalCenterAdministratorService);
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
        this.doctorss = new Array();
        this.termins = new Array();
        this.doctorsWithSearch = new Array();
        this.getAllDoctors();
      }

      _createClass(DoctorService, [{
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
        key: "getDoctor",
        value: function getDoctor(email) {
          if (this.listDoctors.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion14 = true;
          var _didIteratorError14 = false;
          var _iteratorError14 = undefined;

          try {
            for (var _iterator14 = this.listDoctors[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
              var u = _step14.value;

              if (u.email === email) {
                return u;
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

          return null;
        }
      }, {
        key: "addDoctor",
        value: function addDoctor(d) {
          if (this.getDoctor(d.email) === null) {
            this.listDoctors.push(d);
          }
        }
      }, {
        key: "setDoctor",
        value: function setDoctor(d) {
          var _iteratorNormalCompletion15 = true;
          var _didIteratorError15 = false;
          var _iteratorError15 = undefined;

          try {
            for (var _iterator15 = this.listDoctors[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
              var d1 = _step15.value;

              if (d1.email === d.email) {
                d1.password = d.password;
                d1.name = d.name;
                d1.surname = d.surname;
                d1.phone = d.phone;
                d1.workHoursFrom = d.workHoursFrom;
                d1.workHoursTo = d.workHoursTo;
              }
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
        }
      }, {
        key: "getAllDoctors",
        value: function getAllDoctors() {
          var _this20 = this;

          this.http.get(this.urlDoctor + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion16 = true;
            var _didIteratorError16 = false;
            var _iteratorError16 = undefined;

            try {
              for (var _iterator16 = data[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                var c = _step16.value;
                _this20.doctor = new _models_doctor__WEBPACK_IMPORTED_MODULE_3__["Doctor"](c.email, c.password, c.name, c.surname, c.phone, c.workHoursFrom, c.workHoursTo, c.specialized, c.doctorRating, c.clinic);

                _this20.addDoctor(_this20.doctor);
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
          }, function (error) {
            console.log(error);
          });
          return this.listDoctors;
        }
      }, {
        key: "getDoctorsTermins",
        value: function getDoctorsTermins(date, email) {
          var _this21 = this;

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
          params = params.append('date', date);
          params = params.append('email', email);
          console.log(params);
          this.http.get(this.urlDoctor + '/terminString', {
            params: params,
            responseType: 'text'
          }).subscribe(function (data) {
            _this21.termins = new Array();
            console.log('Ispod ovde');
            console.log(data);
            _this21.termin = data;

            _this21.termins.push(data);
          }, function (error) {
            console.log(error);
          });
          return this.termin;
        }
      }, {
        key: "getDoctorss",
        value: function getDoctorss() {
          return this.doctorss;
        }
      }, {
        key: "setDoctorss",
        value: function setDoctorss(doctorss) {
          this.doctorss = doctorss;
        }
      }, {
        key: "getDoctrosWithSearch",
        value: function getDoctrosWithSearch(name, surname, rating) {
          var _this22 = this;

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
          params = params.append('name', name);
          params = params.append('surname', surname);
          params = params.append('rating', rating);
          this.doctorsWithSearch = new Array();
          this.http.get(this.urlDoctor + '/allWithSearch', {
            params: params
          }).subscribe(function (data) {
            console.log(data);
            var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
              for (var _iterator17 = data[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                var c = _step17.value;
                _this22.doctor = new _models_doctor__WEBPACK_IMPORTED_MODULE_3__["Doctor"](c.email, c.password, c.name, c.surname, c.phone, c.workHoursFrom, c.workHoursTo, c.specialized, c.doctorRating, c.clinic);

                _this22.doctorsWithSearch.push(_this22.doctor);

                console.log(_this22.doctor);
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
          }, function (error) {
            console.log(error);
          });
          return this.doctorsWithSearch;
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
  "./src/app/services/examination-type.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/examination-type.service.ts ***!
    \******************************************************/

  /*! exports provided: ExaminationTypeService */

  /***/
  function srcAppServicesExaminationTypeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExaminationTypeService", function () {
      return ExaminationTypeService;
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


    var _models_examinationType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/examinationType */
    "./src/app/models/examinationType.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ExaminationTypeService =
    /*#__PURE__*/
    function () {
      function ExaminationTypeService(http) {
        _classCallCheck(this, ExaminationTypeService);

        this.http = http;
        this.urlExaminationType = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].examinationType;
        this.examinationTypes = new Array();
      }

      _createClass(ExaminationTypeService, [{
        key: "getAllTypes",
        value: function getAllTypes() {
          var _this23 = this;

          this.http.get(this.urlExaminationType + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion18 = true;
            var _didIteratorError18 = false;
            var _iteratorError18 = undefined;

            try {
              for (var _iterator18 = data[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                var c = _step18.value;
                _this23.type = new _models_examinationType__WEBPACK_IMPORTED_MODULE_3__["ExaminationType"](c.label, c.price);

                _this23.addType(_this23.type);
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
          console.log(this.type);
          return this.examinationTypes;
        }
      }, {
        key: "addType",
        value: function addType(t) {
          if (this.getType(t.label) === null) {
            this.examinationTypes.push(t);
          }
        }
      }, {
        key: "getType",
        value: function getType(name) {
          if (this.examinationTypes.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion19 = true;
          var _didIteratorError19 = false;
          var _iteratorError19 = undefined;

          try {
            for (var _iterator19 = this.examinationTypes[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
              var u = _step19.value;

              if (u.label === name) {
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
      }]);

      return ExaminationTypeService;
    }();

    ExaminationTypeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ExaminationTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ExaminationTypeService);
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


    var _models_examinationKind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/examinationKind */
    "./src/app/models/examinationKind.ts");
    /* harmony import */


    var _models_examinationStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/examinationStatus */
    "./src/app/models/examinationStatus.ts");

    var ExaminationService =
    /*#__PURE__*/
    function () {
      function ExaminationService(http) {
        _classCallCheck(this, ExaminationService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].examination;
        this.listExaminations = new Array();
        this.getAllExaminations();
      }

      _createClass(ExaminationService, [{
        key: "whichKindExamination",
        value: function whichKindExamination(kind) {
          if (kind === 'EXAMINATION') {
            return _models_examinationKind__WEBPACK_IMPORTED_MODULE_5__["ExaminationKind"].EXAMINATION;
          } else {
            return _models_examinationKind__WEBPACK_IMPORTED_MODULE_5__["ExaminationKind"].OPERATION;
          }
        }
      }, {
        key: "whichStatusExamination",
        value: function whichStatusExamination(status) {
          if (status === 'APPROVED') {
            return _models_examinationStatus__WEBPACK_IMPORTED_MODULE_6__["ExaminationStatus"].APPROVED;
          } else if (status === 'AWAITING') {
            return _models_examinationStatus__WEBPACK_IMPORTED_MODULE_6__["ExaminationStatus"].AWAITING;
          } else if (status === 'PREDEF_BOOKED') {
            return _models_examinationStatus__WEBPACK_IMPORTED_MODULE_6__["ExaminationStatus"].PREDEF_BOOKED;
          } else {
            return _models_examinationStatus__WEBPACK_IMPORTED_MODULE_6__["ExaminationStatus"].PREDEF_AVAILABLE;
          }
        }
      }, {
        key: "getAllExaminations",
        value: function getAllExaminations() {
          var _this24 = this;

          this.http.get(this.url + '/all').subscribe(function (data) {
            _this24.listExaminations = new Array();
            var _iteratorNormalCompletion20 = true;
            var _didIteratorError20 = false;
            var _iteratorError20 = undefined;

            try {
              for (var _iterator20 = data[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                var c = _step20.value;
                _this24.examination = new _models_examination__WEBPACK_IMPORTED_MODULE_3__["Examination"](_this24.whichKindExamination(c.kind.toString()), _this24.whichStatusExamination(c.status.toString()), c.examinationType, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id);

                _this24.listExaminations.push(_this24.examination);

                console.log(_this24.examination);
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
          }, function (error) {
            console.log(error);
          });
          console.log(this.listExaminations);
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

          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = this.listExaminations[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var e = _step21.value;

              if (e.id === id) {
                return e;
              }
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

          return null;
        }
      }]);

      return ExaminationService;
    }();

    ExaminationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_medicalRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/medicalRecord */
    "./src/app/models/medicalRecord.ts");

    var MedicalRecordService =
    /*#__PURE__*/
    function () {
      function MedicalRecordService(http) {
        _classCallCheck(this, MedicalRecordService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].medicalRecord;
        this.listMedicalRecord = new Array();
        this.getAllMedicalRecords();
      }

      _createClass(MedicalRecordService, [{
        key: "addMedicalRecord",
        value: function addMedicalRecord(mr) {
          if (this.getMedicalRecord(mr.id) === null) {
            this.listMedicalRecord.push(mr);
          }
        }
      }, {
        key: "getAllMedicalRecords",
        value: function getAllMedicalRecords() {
          var _this25 = this;

          this.http.get(this.url + '/all').subscribe(function (data) {
            _this25.listMedicalRecord = new Array();
            var _iteratorNormalCompletion22 = true;
            var _didIteratorError22 = false;
            var _iteratorError22 = undefined;

            try {
              for (var _iterator22 = data[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                var c = _step22.value;
                // Ostalo je da se doda examinaton_report u konstruktoru
                console.log(c.id);
                _this25.medicalRecord = new _models_medicalRecord__WEBPACK_IMPORTED_MODULE_4__["MedicalRecord"](c.id, c.height, c.weight, c.bloodType, c.allergies, c.patient);

                _this25.listMedicalRecord.push(_this25.medicalRecord);

                console.log(_this25.medicalRecord);
              }
            } catch (err) {
              _didIteratorError22 = true;
              _iteratorError22 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
                  _iterator22.return();
                }
              } finally {
                if (_didIteratorError22) {
                  throw _iteratorError22;
                }
              }
            }
          }, function (error) {
            console.log(error);
          });
          console.log(this.listMedicalRecord);
          return this.listMedicalRecord;
        }
      }, {
        key: "getMedicalRecord",
        value: function getMedicalRecord(id) {
          if (this.listMedicalRecord.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion23 = true;
          var _didIteratorError23 = false;
          var _iteratorError23 = undefined;

          try {
            for (var _iterator23 = this.listMedicalRecord[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
              var e = _step23.value;

              if (e.id === id) {
                return e;
              }
            }
          } catch (err) {
            _didIteratorError23 = true;
            _iteratorError23 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion23 && _iterator23.return != null) {
                _iterator23.return();
              }
            } finally {
              if (_didIteratorError23) {
                throw _iteratorError23;
              }
            }
          }
        }
      }]);

      return MedicalRecordService;
    }();

    MedicalRecordService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
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

          var _iteratorNormalCompletion24 = true;
          var _didIteratorError24 = false;
          var _iteratorError24 = undefined;

          try {
            for (var _iterator24 = this.listNurses[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
              var u = _step24.value;

              if (u.email === email) {
                return u;
              }
            }
          } catch (err) {
            _didIteratorError24 = true;
            _iteratorError24 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion24 && _iterator24.return != null) {
                _iterator24.return();
              }
            } finally {
              if (_didIteratorError24) {
                throw _iteratorError24;
              }
            }
          }

          return null;
        }
      }, {
        key: "setNurse",
        value: function setNurse(p) {
          var _iteratorNormalCompletion25 = true;
          var _didIteratorError25 = false;
          var _iteratorError25 = undefined;

          try {
            for (var _iterator25 = this.listNurses[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
              var p1 = _step25.value;

              if (p1.email === p.email) {
                p1.name = p.name;
                p1.number = p.number;
                p1.country = p.country;
                p1.address = p.address;
                p1.surname = p.surname;
                p1.city = p.city;
                p1.password = p.password;
                p1.workHoursFrom = p.workHoursFrom;
                p1.workHoursTo = p.workHoursTo;
                return;
              }
            }
          } catch (err) {
            _didIteratorError25 = true;
            _iteratorError25 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion25 && _iterator25.return != null) {
                _iterator25.return();
              }
            } finally {
              if (_didIteratorError25) {
                throw _iteratorError25;
              }
            }
          }
        }
      }, {
        key: "getAllNurses",
        value: function getAllNurses() {
          var _this26 = this;

          this.http.get(this.urlNurse + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion26 = true;
            var _didIteratorError26 = false;
            var _iteratorError26 = undefined;

            try {
              for (var _iterator26 = data[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
                var c = _step26.value;
                _this26.nurse = new _models_nurse__WEBPACK_IMPORTED_MODULE_2__["Nurse"](c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.workHoursFrom, c.workHoursTo);

                _this26.addNurse(_this26.nurse);
              }
            } catch (err) {
              _didIteratorError26 = true;
              _iteratorError26 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion26 && _iterator26.return != null) {
                  _iterator26.return();
                }
              } finally {
                if (_didIteratorError26) {
                  throw _iteratorError26;
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

          var _iteratorNormalCompletion27 = true;
          var _didIteratorError27 = false;
          var _iteratorError27 = undefined;

          try {
            for (var _iterator27 = this.listPatients[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
              var u = _step27.value;

              if (u.email === email) {
                return u;
              }
            }
          } catch (err) {
            _didIteratorError27 = true;
            _iteratorError27 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion27 && _iterator27.return != null) {
                _iterator27.return();
              }
            } finally {
              if (_didIteratorError27) {
                throw _iteratorError27;
              }
            }
          }

          return null;
        }
      }, {
        key: "setPatient",
        value: function setPatient(p) {
          var _iteratorNormalCompletion28 = true;
          var _didIteratorError28 = false;
          var _iteratorError28 = undefined;

          try {
            for (var _iterator28 = this.listPatients[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
              var p1 = _step28.value;

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
            _didIteratorError28 = true;
            _iteratorError28 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion28 && _iterator28.return != null) {
                _iterator28.return();
              }
            } finally {
              if (_didIteratorError28) {
                throw _iteratorError28;
              }
            }
          }
        }
      }, {
        key: "getAllPatients",
        value: function getAllPatients() {
          var _this27 = this;

          this.http.get(this.urlPatient + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion29 = true;
            var _didIteratorError29 = false;
            var _iteratorError29 = undefined;

            try {
              for (var _iterator29 = data[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
                var c = _step29.value;
                _this27.patient = new _models_patient__WEBPACK_IMPORTED_MODULE_2__["Patient"](c.email, c.password, c.name, c.surname, c.number, c.address, c.city, c.country, c.insuranceID, c.status);

                _this27.addPatient(_this27.patient);
              }
            } catch (err) {
              _didIteratorError29 = true;
              _iteratorError29 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion29 && _iterator29.return != null) {
                  _iterator29.return();
                }
              } finally {
                if (_didIteratorError29) {
                  throw _iteratorError29;
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

          var _iteratorNormalCompletion30 = true;
          var _didIteratorError30 = false;
          var _iteratorError30 = undefined;

          try {
            for (var _iterator30 = this.users[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
              var u = _step30.value;

              if (u.email === email) {
                return u;
              }
            }
          } catch (err) {
            _didIteratorError30 = true;
            _iteratorError30 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion30 && _iterator30.return != null) {
                _iterator30.return();
              }
            } finally {
              if (_didIteratorError30) {
                throw _iteratorError30;
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
          var _iteratorNormalCompletion31 = true;
          var _didIteratorError31 = false;
          var _iteratorError31 = undefined;

          try {
            for (var _iterator31 = this.users[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
              var p1 = _step31.value;

              if (p1.email === u.email) {
                p1.password = u.password;
                return;
              }
            }
          } catch (err) {
            _didIteratorError31 = true;
            _iteratorError31 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion31 && _iterator31.return != null) {
                _iterator31.return();
              }
            } finally {
              if (_didIteratorError31) {
                throw _iteratorError31;
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
        key: "isCCAdmin",
        value: function isCCAdmin() {
          if (this.isLoggedIn()) {
            return this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].CCADMIN;
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
          var _this28 = this;

          this.http.get(this.urlUser + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion32 = true;
            var _didIteratorError32 = false;
            var _iteratorError32 = undefined;

            try {
              for (var _iterator32 = data[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
                var c = _step32.value;
                _this28.u = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"](c.email, c.password, _this28.whichRole(c.role.toString()));

                _this28.addUser(_this28.u);
              }
            } catch (err) {
              _didIteratorError32 = true;
              _iteratorError32 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion32 && _iterator32.return != null) {
                  _iterator32.return();
                }
              } finally {
                if (_didIteratorError32) {
                  throw _iteratorError32;
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
          } else if (role === 'CCADMIN') {
            return _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].CCADMIN;
          } else if (role === 'CLINICADMINISTRATOR') {
            return _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].CLINICADMINISTRATOR;
          } else {
            console.log("ovde je null");
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
  "./src/app/services/vacation.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/vacation.service.ts ***!
    \**********************************************/

  /*! exports provided: VacationService */

  /***/
  function srcAppServicesVacationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VacationService", function () {
      return VacationService;
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


    var _models_zahtev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/zahtev */
    "./src/app/models/zahtev.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _models_zahtevStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/zahtevStatus */
    "./src/app/models/zahtevStatus.ts");

    var VacationService =
    /*#__PURE__*/
    function () {
      function VacationService(http, userService) {
        _classCallCheck(this, VacationService);

        this.http = http;
        this.userService = userService;
        this.urlVacation = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].zahtev;
        this.listVacation = new Array();
        this.getAllVacations();
        this.getAllRequests();
      }

      _createClass(VacationService, [{
        key: "newVacation",
        value: function newVacation(zahtev) {
          return this.http.post(this.urlVacation + '/nurse/VacationRequest', zahtev);
        }
      }, {
        key: "newVacation1",
        value: function newVacation1(zahtev) {
          return this.http.post(this.urlVacation + '/nurse/VacationRequest', zahtev);
        }
      }, {
        key: "addVacation",
        value: function addVacation(v) {
          if (this.getVacations(v.email) === null) {
            this.listVacation.push(v);
          }
        }
      }, {
        key: "addVacation1",
        value: function addVacation1(v) {
          if (this.getVacations(v.email) === null) {
            this.listVacation.push(v);
          }
        }
      }, {
        key: "getVacations",
        value: function getVacations(email) {
          if (this.listVacation.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion33 = true;
          var _didIteratorError33 = false;
          var _iteratorError33 = undefined;

          try {
            for (var _iterator33 = this.listVacation[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
              var u = _step33.value;

              if (u.email === email) {
                return u;
              }
            }
          } catch (err) {
            _didIteratorError33 = true;
            _iteratorError33 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion33 && _iterator33.return != null) {
                _iterator33.return();
              }
            } finally {
              if (_didIteratorError33) {
                throw _iteratorError33;
              }
            }
          }

          return null;
        }
      }, {
        key: "getVacations1",
        value: function getVacations1(email) {
          if (this.listVacation.length === 0) {
            return null;
          }

          var _iteratorNormalCompletion34 = true;
          var _didIteratorError34 = false;
          var _iteratorError34 = undefined;

          try {
            for (var _iterator34 = this.listVacation[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
              var u = _step34.value;

              if (u.email === email) {
                return u;
              }
            }
          } catch (err) {
            _didIteratorError34 = true;
            _iteratorError34 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion34 && _iterator34.return != null) {
                _iterator34.return();
              }
            } finally {
              if (_didIteratorError34) {
                throw _iteratorError34;
              }
            }
          }

          return null;
        }
      }, {
        key: "editVacation",
        value: function editVacation(zahtev) {
          return this.http.post(this.urlVacation + '/edit', zahtev, {
            responseType: 'text'
          });
        }
      }, {
        key: "setVacation",
        value: function setVacation(p) {
          var _iteratorNormalCompletion35 = true;
          var _didIteratorError35 = false;
          var _iteratorError35 = undefined;

          try {
            for (var _iterator35 = this.listVacation[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
              var p1 = _step35.value;

              if (p1.email === p.email) {
                p1.name = p.name;
                p1.surname = p.surname;
                p1.startingDate = p.startingDate;
                p1.finishDate = p.finishDate;
                return;
              }
            }
          } catch (err) {
            _didIteratorError35 = true;
            _iteratorError35 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion35 && _iterator35.return != null) {
                _iterator35.return();
              }
            } finally {
              if (_didIteratorError35) {
                throw _iteratorError35;
              }
            }
          }
        }
      }, {
        key: "setVacation1",
        value: function setVacation1(p) {
          var _iteratorNormalCompletion36 = true;
          var _didIteratorError36 = false;
          var _iteratorError36 = undefined;

          try {
            for (var _iterator36 = this.listVacation[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
              var p1 = _step36.value;

              if (p1.email === p.email) {
                p1.name = p.name;
                p1.surname = p.surname;
                p1.startingDate = p.startingDate;
                p1.finishDate = p.finishDate;
                return;
              }
            }
          } catch (err) {
            _didIteratorError36 = true;
            _iteratorError36 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion36 && _iterator36.return != null) {
                _iterator36.return();
              }
            } finally {
              if (_didIteratorError36) {
                throw _iteratorError36;
              }
            }
          }
        }
      }, {
        key: "whichStatus",
        value: function whichStatus(status) {
          if (status === 'AWAITING_APPROVAL') {
            return _models_zahtevStatus__WEBPACK_IMPORTED_MODULE_6__["ZahtevStatus"].AWAITING_APPROVAL;
          } else {
            return _models_zahtevStatus__WEBPACK_IMPORTED_MODULE_6__["ZahtevStatus"].APPROVED;
          }
        }
      }, {
        key: "getAllVacations",
        value: function getAllVacations() {
          var _this29 = this;

          this.http.get(this.urlVacation + '/all').subscribe(function (data) {
            var _iteratorNormalCompletion37 = true;
            var _didIteratorError37 = false;
            var _iteratorError37 = undefined;

            try {
              for (var _iterator37 = data[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
                var c = _step37.value;
                _this29.zahtev = new _models_zahtev__WEBPACK_IMPORTED_MODULE_2__["Zahtev"](c.email, c.name, c.surname, c.startingDate, c.finishDate, _this29.whichStatus(c.status.toString()));

                _this29.addVacation(_this29.zahtev);
              }
            } catch (err) {
              _didIteratorError37 = true;
              _iteratorError37 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion37 && _iterator37.return != null) {
                  _iterator37.return();
                }
              } finally {
                if (_didIteratorError37) {
                  throw _iteratorError37;
                }
              }
            }
          }, function (error) {
            console.log(error);
            console.log("ovde je greska antonela");
          });
          return this.listVacation;
        }
      }, {
        key: "getAllRequests",
        value: function getAllRequests() {
          var _this30 = this;

          this.http.get(this.urlVacation + '/VacationRequest').subscribe(function (data) {
            _this30.tmp = new Array();
            var _iteratorNormalCompletion38 = true;
            var _didIteratorError38 = false;
            var _iteratorError38 = undefined;

            try {
              for (var _iterator38 = data[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
                var c = _step38.value;
                _this30.zahtev = new _models_zahtev__WEBPACK_IMPORTED_MODULE_2__["Zahtev"](c.email, c.name, c.surname, c.startingDate, c.finishDate, _models_zahtevStatus__WEBPACK_IMPORTED_MODULE_6__["ZahtevStatus"].AWAITING_APPROVAL);

                _this30.tmp.push(_this30.zahtev);

                console.log(_this30.zahtev);
              }
            } catch (err) {
              _didIteratorError38 = true;
              _iteratorError38 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion38 && _iterator38.return != null) {
                  _iterator38.return();
                }
              } finally {
                if (_didIteratorError38) {
                  throw _iteratorError38;
                }
              }
            }
          }, function (error) {
            console.log(error);
          });
          console.log(this.tmp);
          return this.tmp;
        }
      }]);

      return VacationService;
    }();

    VacationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    VacationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VacationService);
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
      examinationType: '/examination-type',
      clinicalCenterAdmininistrator: '/clinicalCenterAdministrator',
      codebook: '/codebook',
      clinicAdministrator: '/clinicAdministrator',
      zahtev: '/zahtev'
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
    /*! C:\Users\Antonela\Documents\GitHub\ISA-PSW2019\FRONTEND\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map