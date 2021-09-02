export function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + "=" + "(.+?)(&|$)").exec(window.location.search) || [
      ,
      null,
    ])[1] || ""
  );
}

let subid = getURLParameter("subid");
let subid2 = getURLParameter("subid2");
let firstname = getURLParameter("firstname");
let surname = getURLParameter("surname");
let city = getURLParameter("city");
let zipcode = getURLParameter("zipcode");
let address = getURLParameter("address");
let phone = getURLParameter("phone");
let mobile = getURLParameter("mobile");
let pid = getURLParameter("pid");
let nrp = getURLParameter("nrp");

let ffdomain = "https://" + getURLParameter("ffdomain");
let session = getURLParameter("session");
let fluxf = getURLParameter("fluxf");
let fluxffn = getURLParameter("fluxffn");

export function ActionRedirect(action) {
  window.location.replace(
    ffdomain +
      "/?flux_action=" +
      action +
      "&flux_f=" +
      fluxf +
      "&flux_ffn=" +
      fluxffn +
      "&flux_sess=" +
      session
  );
}

const move = (pos, dir, moves) => {
  let cont = document.querySelector("#sqr").getBoundingClientRect().width;
  let distance = pos.transform || pos.webkitTransform || pos.mozTransform;
  let fin = distance === "none" ? 0 : parseInt(distance.split(", ")[4]);
  let dis = 0;
  if (dir) {
    dis = moves > 1 ? fin + (cont / 2 + 20) : fin + 20;
  } else {
    dis = fin - cont / 2;
  }
  return `translateX(${dis < 0 ? 0 : dis}px)`;
};

export const moveLeft = () => {
  let claw = document.querySelector("#CLAW");
  let style = window.getComputedStyle(claw);

  claw.style.transform = move(style, false);
};

export const moveRight = (moves) => {
  let claw = document.querySelector("#CLAW");
  let style = window.getComputedStyle(claw);

  claw.style.transform = move(style, true, moves);
};

export const get = (tries) => {
  let arm = document.querySelector("#ARM");

  arm.classList.add("down");
  setTimeout(() => {
    let claw = document.querySelector("#CLAW");
    arm.classList.remove("down");
    if (tries === 1) {
      document.querySelector("#change").classList.remove("cls-13");
      document.querySelector("#change").classList.add("cls-10");
    }
    document.querySelector("#pick").classList.remove("hide");
    setTimeout(() => {
      claw.style.transform = "translateX(0)";
    }, 500);
  }, 1000);
};
