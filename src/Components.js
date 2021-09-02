import { Claw } from "./svg";
import { useEffect, useState } from "react";
import { ActionRedirect, getURLParameter } from "./func";
import { useMediaQuery } from "react-responsive";

const Ins = (props) => {
  const mobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const clicked = () => {
    if (mobile) {
      props.hide({
        ...props.det,
        ins: false,
        show: false,
      });
      props.upd(true);
    } else {
      props.hide({
        ...props.det,
        ins: false,
        show: false,
      });
    }
  };
  const { btn, red } = window.txt.pop3;

  return (
    <section className="w-30 h-50 flx flx-col flx-jc-ce flx-ai-ce bg-wht txt-al-ce p-20 pop ins">
      <img
        src="./img/instruction.png"
        alt="instruction"
        className="w-100 instruction"
      ></img>
      <button className="btn-grn w-80 bold btn m-t-5" onClick={clicked}>
        {btn}
      </button>
    </section>
  );
};

const Mes1 = (prop) => {
  const clicked = () => {
    prop.hide({
      ...prop.det,
      mes1: false,
      ins: true,
    });
  };

  const name = getURLParameter("firstname");

  const { mes1, mes2, mes3, mes4, btn, red } = window.txt.pop;

  return (
    <section className="w-30 h-50 flx flx-col flx-jc-ce flx-ai-ce bg-wht txt-al-ce p-20 pop pos-abs z-top">
      <h4 className="txt-drk mono bold">
        {red[0]} {name ? name : "Customer"}
      </h4>
      <p className="txt-drk mono m-t-2">
        {mes1} <span className="txt-gld bold">“{window.txt.gld}”</span>
        {mes2} <span className="txt-red bold">{red[1]}</span>
        {mes3} <span className="txt-red bold">{red[2]}</span> {mes4}{" "}
        <span className="txt-red bold">{red[3]}</span>.
      </p>
      <button className="btn-red w-80 bold btn m-t-5" onClick={clicked}>
        {btn}
      </button>
    </section>
  );
};

const Mes2 = () => {
  const { grn, mes, btn, total } = window.txt.pop2;
  return (
    <section className="w-30 h-50 flx flx-col flx-jc-ce flx-ai-ce bg-wht txt-al-ce p-20 pop">
      <h2 className="txt-drk bold txt-grn mono">{grn[0]}</h2>
      <p className="txt-drk mono">
        {mes} <span className="txt-drk bold">{grn[1]}</span>
      </p>
      <h4 className="txt-drk mono m-t-5 bold">
        Total: <span className="txt-grn bold">{total}</span>
      </h4>
      <button
        className="btn-grn w-80 btn m-t-5 product-button"
        data-product-id="1"
        onClick={(elem) => ActionRedirect(elem.target.dataset.productId)}
      >
        {btn}
      </button>
    </section>
  );
};

const Win = (prop) => {
  const { grn, mes, btn } = window.txt.win;

  const close = () => {
    document.querySelector("#pick").classList.add("hide");
    prop.hide({
      ...prop.det,
      win: false,
      show: false,
    });
    prop.upd(300);
  };

  return (
    <section className="w-30 h-50 flx flx-col flx-jc-ce flx-ai-ce bg-wht txt-al-ce p-20 pop">
      <h4 className="txt-drk bold txt-grn mono">{grn[0]}</h4>
      <p className="txt-drk mono">
        {mes} <span className="txt-grn bold">{grn[1]}</span>
      </p>
      <button
        className="btn-grn w-80 btn m-t-5 product-button"
        data-product-id="1"
        onClick={close}
      >
        {btn}
      </button>
    </section>
  );
};

const Pop = (props) => {
  const { mes1, mes2, ins, win } = props.det;

  return (
    <div className="h-100 w-100 flx flx-jc-ce flx-ai-ce bg-pop fade pos-abs z-top">
      {mes1 && <Mes1 hide={props.hide} show={props.main} det={props.det} />}
      {mes2 && <Mes2 />}
      {ins && (
        <Ins
          hide={props.hide}
          show={props.main}
          det={props.det}
          upd={props.upd}
        />
      )}
      {win && (
        <Win
          hide={props.hide}
          show={props.main}
          det={props.det}
          total={props.total}
          upd={props.tots}
          tries={props.tries}
        />
      )}
    </div>
  );
};

const Det = () => {
  const { grn, mes } = window.txt.det;
  const mobile = useMediaQuery({
    query: "(max-width: 1000px)",
  });
  return (
    <div className="flx flx-col flx-jc-ce flx-ai-ce p-20 bg-wht fade w-80 details">
      <img src="./img/logo.svg" alt="tesco" className="w-30"></img>
      <p className="w-80 mono txt-al-ce txt-drk m-t-2">
        {mes[0]}
        <span className="txt-grn bold">{grn}</span>
        {mes[1]} <span className="txt-gld bold">"{window.txt.gld}" </span>
        {mes[2]}
      </p>
      {!mobile && (
        <p className="w-80 mono txt-al-ce txt-drk">
          {mes[3]} <span className="txt-grn bold">{grn} </span>
          {mes[4]}
        </p>
      )}
    </div>
  );
};

const Moves = (prop) => {
  return (
    <div className="flx flx-jc-ce flx-col flx-ai-ce p-20 bg-wht txt-drk m-t-5 fade w-80 moves">
      <div className="flx flx-jc-ce flx-ai-ce w-100">
        <span className="flx flx-jc-ce flx-ai-ce w-50">
          <p className="w-50 txt-al-ce mono">MOVES LEFT: </p>
          <p className="w-50 txt-al-ce mono txt-red bold">{prop.moves}</p>
        </span>
        <span className="flx flx-jc-ce flx-ai-ce w-50">
          <p className="w-50 txt-al-ce mono">TRIES LEFT: </p>
          <p className="w-50 txt-al-ce mono txt-red bold">{prop.tries}</p>
        </span>
        <span className="flx flx-jc-ce flx-ai-ce w-50">
          <p className="w-50 txt-al-ce mono">TOTAL: </p>
          <p className="w-50 txt-al-ce mono txt-red bold">{prop.total}</p>
        </span>
      </div>
    </div>
  );
};

const Main = (props) => {
  const { upd, moves, updMoves, tries, updTry } = props;
  const mobile = useMediaQuery({
    query: "(max-width: 640px)",
  });
  useEffect(() => {
    if (mobile && props.show) {
      setTimeout(() => {
        props.updShow(false);
        document.querySelector(".App").classList.remove("flx-jc-ce");
        document.querySelector(".App").classList.add("flx-jc-s");
      }, 5000);
    }
  });
  return mobile && props.show ? (
    <Det />
  ) : (
    <main className="flx flx-jc-ce flx-ai-ce p-20 h-100 trans fade-t">
      <section className="flx flx-col flx-jc-ce flx-ai-ce w-50 trans fade-l">
        <Det />
        <Moves
          moves={moves}
          tries={tries}
          total={props.total}
          upd={props.tots}
        />
      </section>
      <section className="bg-gls flx w-50 flx-jc-ce flx-ai-ce m-l-2 p-20 trans fade-l">
        <Claw
          moves={moves}
          upd={updMoves}
          pop={upd}
          hide={props.hide}
          updTry={updTry}
          tries={tries}
        />
      </section>
    </main>
  );
};

export { Pop, Main };
