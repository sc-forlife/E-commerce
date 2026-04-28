import css from "./Navbar.module.css";
import { numbersInWords } from "../../data/dummyData";
import { useState } from "react";

export default function Navbar() {
  const [display, setDisplay] = useState(false);
  function suggestionsBar() {
    setDisplay(true);
  }

  return (
    <>
      <div className={css.navbar_container}>
        <div id={css.navbar_side1}>
          <div id={css.logo_search}>
            <h1 id={css.logo}>Logo</h1>
            <div id={css.search}>
              <input
                onFocus={suggestionsBar}
                type="text"
                placeholder="Enter text"
              />
              <button>search</button>
              {display ? <div id={css.suggestionsBar}></div> : null}
            </div>
          </div>
          <div id={css.category}>
            <button id={css.category_button}>category One</button>
            <button id={css.category_button}>category Two</button>
            <button id={css.category_button}>category Three</button>
            <button id={css.category_button}>category Four</button>
          </div>
        </div>
        <div id={css.navbar_side2}>
          <button>Login/Sign Up</button>
          <button>View Cart</button>
        </div>
      </div>
    </>
  );
}
