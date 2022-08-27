import "./PageNotFound.css";

import useCounter from "../useCounter";
function PageNotFound() {
  const {counter,setCounter,counterUp, counterDown , counterReset}=useCounter(100)
  return (
    <div className="page-not-found">
      <h1>COUNTER</h1>
      <h1>{counter}</h1>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.mageplaza.com%2Fmedia%2Fgeneral%2FUbGSiKH.gif&f=1&nofb=1" alt="" />
      <br />
      <button onClick={counterUp}>counterUp</button><br />
      <button onClick={counterDown}>counterDown</button><br />
      <button onClick={counterReset}>counterReset</button><br />
    </div>
  );
};

export default PageNotFound;
