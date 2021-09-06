import "./sass/main.scss";

// ==
// Єто как pnotify сделать самому
// ==

// import {
//   alert,
//   notice,
//   info,
//   success,
//   error,
//   defaultModules,
// } from "../node_modules/@pnotify/core/dist/PNotify.js";
// import * as PNotifyMobile from "../node_modules/@pnotify/mobile/dist/PNotifyMobile.js";
// import "@pnotify/core/dist/Material.css";
// import { defaults } from "@pnotify/core";
// import "material-design-icons/iconfont/material-icons.css";
// // ==

// // ==

// defaults.styling = "material";
// defaults.icons = "material";
// defaultModules.set(PNotifyMobile, {});

// const refs = {
//   alertBtn: document.querySelector(".alert-btn"),
//   noticeBtn: document.querySelector(".notice-btn"),
//   infoBtn: document.querySelector(".info-btn"),
//   successBtn: document.querySelector(".success-btn"),
//   errorBtn: document.querySelector(".error-btn"),
// };

// refs.alertBtn.addEventListener("click", onAlertClick);
// refs.noticeBtn.addEventListener("click", onNoticeClick);
// refs.infoBtn.addEventListener("click", onInfoClick);
// refs.successBtn.addEventListener("click", onSuccessClick);
// refs.errorBtn.addEventListener("click", onErrorClick);

// function onAlertClick() {
//   error({
//     type: "alert",
//     title: "This is ALERT!",
//     text: "This is alert!",
//     width: "500px",
//     shadow: true,
//     delay: 400,
//     mode: "light",
//   });
// }

// function onNoticeClick() {
//   notice({
//     type: "notice",
//     title: "This is NOTICE!",
//     text: "This is notice!",
//     width: "500px",
//     shadow: true,
//     delay: 400,
//   });
// }

// function onInfoClick() {
//   info({
//     type: "info",
//     title: "This is INFO!",
//     text: "This is info!",
//     width: "500px",
//     shadow: true,
//     delay: 400,
//   });
// }

// function onSuccessClick() {
//   success({
//     type: "success",
//     title: "This is SUCCESS!",
//     text: "This is success!",
//     width: "500px",
//     shadow: true,
//     delay: 400,
//   });
// }

// function onErrorClick() {
//   error({
//     type: "error",
//     title: "ERROR",
//     text: "This is Error",
//     width: "500px",
//     shadow: true,
//     delay: 400,
//   });
// }


// == "Єто как сделать пинотифай используя модули"==


const refs = {
  alertBtn: document.querySelector(".alert-btn"),
  noticeBtn: document.querySelector(".notice-btn"),
  infoBtn: document.querySelector(".info-btn"),
  successBtn: document.querySelector(".success-btn"),
  errorBtn: document.querySelector(".error-btn"),
};

// refs.alertBtn.addEventListener("click", onAlertClick);
// refs.noticeBtn.addEventListener("click", onNoticeClick);
// refs.infoBtn.addEventListener("click", onInfoClick);
// refs.successBtn.addEventListener("click", onSuccessClick);
// refs.errorBtn.addEventListener("click", onErrorClick);