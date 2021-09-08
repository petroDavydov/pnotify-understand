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

import {
  alert,
  notice,
  info,
  success,
  error,
  defaultModules,
  defaults,
} from "@pnotify/core"; // експорт необходимих названий сообщений
import * as PNotifyAnimate from "@pnotify/animate";
// import "material-design-icons/iconfont/material-icons.css"; // експорт material-design-icons
// import "../node_modules/material-design-icons/iconfont/material-icons.css"; //css
// import "@pnotify/core/dist/Material.css"; //Material export
// import { defaults } from "@pnotify/core"; // екпорт дефолтного модуля
import "animate.css"; // обязательно утановить и єкпортировать с сайта animate.css
import * as PNotifyConfirm from "@pnotify/confirm"; // для последнего сообщения в error добавлен confirm module установить в package.json, а потом добавить импорт, работает через запятую, внимательно копировать с сайта pnotify

// defaults.styling = "material"; //для отработки и украшения сообщения обязательно писать
// defaults.icons = "material"; //  обязательно указивать иначе не работают css  стили для карточек
// === другой стиль подключения, закоментить все с материал , а єто раскоментить чтоби работало

import "../node_modules/@pnotify/core/dist/BrightTheme.css"; //чтоби работали другие стили, єту строчку закоментировать и внимательно раскоментировать стили и зависимости defaults для materials
import "../node_modules/@pnotify/core/dist/PNotify.css"; // для того чтоби иконки вистроились в ряд красиво и правильно приходили на свое место

// ===

const refs = {
  alertBtn: document.querySelector(".alert-btn"),
  noticeBtn: document.querySelector(".notice-btn"),
  infoBtn: document.querySelector(".info-btn"),
  successBtn: document.querySelector(".success-btn"),
  errorBtn: document.querySelector(".error-btn"),
};

refs.alertBtn.addEventListener("click", onAlertClick);
refs.noticeBtn.addEventListener("click", onNoticeClick);
refs.infoBtn.addEventListener("click", onInfoClick);
refs.successBtn.addEventListener("click", onSuccessClick);
refs.errorBtn.addEventListener("click", onErrorClick);
// ===

function onAlertClick() {
  alert({
    text: "I'm a alert.",
    mode: "light",
    delay: 5500,
    icon: "fas fa-fire-extinguisher",

    modules: new Map([
      ...defaultModules,

      [
        PNotifyAnimate,
        {
          // Confirm Module Options
          inClass: "bounceInLeft",
          outClass: "bounceOutRight",
        },
      ],
    ]),
  });
}

function onNoticeClick() {
  notice({
    title: "This is NOTICE!",
    text: "I'm a notice.",
    delay: 3000,
    icon: "fas fa-atlas",
    modules: new Map([
      ...defaultModules,

      [
        PNotifyAnimate,
        {
          // Confirm Module Options
          inClass: "rotateInDownLeft",
          outClass: "rotateOutUpRight",
        },
      ],
    ]),
  });
}

function onInfoClick() {
  info({
    title: "This is INFO",
    text:
      "I'm a info.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus earum nostrum expedita tempora dicta a ea quaerat saepe sapiente sed corrupti enim dolor sint quis, nemo hic labore porro!",
    delay: 1500,
    mode: "no-preference",
    icon: "far fa-address-card",

    modules: new Map([
      ...defaultModules,

      [
        PNotifyAnimate,
        {
          // Confirm Module Options
          inClass: "rollIn",
          outClass: "hinge",
        },
      ],
    ]),
  });
}

function onSuccessClick() {
  success({
    title: "I'm SUCCES",
    text: "I'm a SUCCESS.",
    delay: 800,
    icon: "fas fa-medal",
    modules: new Map([
      ...defaultModules,

      [
        PNotifyAnimate,
        {
          // Confirm Module Options
          inClass: "zoomInLeft",
          outClass: "zoomOutRight",
        },
      ],
    ]),
  });
}

function onErrorClick() {
  error({
    title: "I'm ERROR",
    text: "I'm a ERROR.",
    delay: 8000, //чтоби можно било проверить кнопку Flash
    textTrusted: true,
    icon: "far fa-angry",

    modules: new Map([
      ...defaultModules,

      [
        PNotifyAnimate,
        {
          // Confirm Module Options
          inClass: "zoomInLeft",
          outClass: "zoomOutRight",
        },
      ],
      [
        PNotifyConfirm,
        {
          confirm: true,
          buttons: [
            {
              text: "Flash!",
              primary: true,
              click: (notice) => notice.attention("flash"),
            },
          ],
        },
      ],
    ]),
  });
}
