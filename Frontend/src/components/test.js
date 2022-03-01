import { useState } from "react";

const App = () => {
  const [time, setTime] = useState();
  const [s, setS] = useState();
  const [m, setM] = useState();

  var interval = 180000;

  function reset() {
    localStorage.endTime = +new Date() + interval;
  }

  if (!localStorage.endTime) {
    reset();
  }

  setInterval(function () {
    var remaining = localStorage.endTime - new Date();
    if (remaining >= 0) {
      let second = Math.floor(remaining / 1000);

      const sec = parseInt(second, 10);

      var d = Number(sec);
      var h = Math.floor(d / 3600);
      var m = Math.floor((d % 3600) / 60);
      var s = Math.floor((d % 3600) % 60);

      var hDisplay = h > 0 ? h + (h === 1 ? ":" : ":") : "";
      var mDisplay = m > 0 ? m + (m === 1 ? ":" : ":") : "";
      var sDisplay = s > 0 ? s + (s === 1 ? "" : "") : "";
      setTime(hDisplay + mDisplay + sDisplay);
      setM(mDisplay);
      setS(sDisplay);
    } else {
      reset();
    }
  }, 100);

  console.log(m, s);

  return (
    <div>
      <div>
        Time remaining: {time}
        <span id="timer">
          {m < 2 ? <button disabled>Hi</button> : <button> Hi</button>}
        </span>
      </div>
    </div>
  );
};

export default App;
