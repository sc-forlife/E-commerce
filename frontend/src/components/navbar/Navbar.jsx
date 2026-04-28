import css from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={css.navbar_container}>
        <div id={css.navbar_side1}>
          <div id={css.logo_search}>
            <h1>Logo</h1>
            <div id={css.search}>
              <div>
                <input type="text" placeholder="Enter text" />
                <button>search</button>
              </div>
            </div>
          </div>
          <div>
            <button id={css.category_button}>category</button>
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
