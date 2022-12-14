import LayoutStyles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div>
        <div className={LayoutStyles.container}>
          <main className={LayoutStyles.main}>
            <Header />
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
