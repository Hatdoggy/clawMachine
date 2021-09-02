import { Pop, Main } from "./Components";
import { useState, useEffect } from "react";

function App() {
  const [moves, updMoves] = useState(3);
  const [tries, updTries] = useState(2);
  const [total, updTotal] = useState(0);

  const [show, updShow] = useState(false);
  const [modal, showPop] = useState({
    show: false,
    mes1: true,
    mes2: false,
    ins: false,
    desc: false,
    win: false,
  });

  const [main, showMain] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      showPop({
        ...modal,
        show: true,
      });
    }, 1000);
  }, []);

  return (
    <div className="App h-100 pos-rel flx flx-col flx-jc-ce flx-ai-ce">
      {modal.show && (
        <Pop
          det={modal}
          hide={showPop}
          main={showMain}
          upd={updShow}
          total={total}
          tots={updTotal}
          tries={tries}
        />
      )}
      {main && (
        <Main
          upd={showPop}
          moves={moves}
          updMoves={updMoves}
          hide={showMain}
          desc={modal.desc}
          show={show}
          updShow={updShow}
          tries={tries}
          updTry={updTries}
          total={total}
          tots={updTotal}
        />
      )}
    </div>
  );
}

export default App;
