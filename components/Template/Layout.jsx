import Head from "next/head";
import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  backgroundColor: "#f2f2f2"
};

const Layout = props => (
  <>
    <Head>
      <title>To do list</title>
    </Head>
    <>
      <Header />
      <div style={layoutStyle}>
        {props.children}
      </div>
    </>
  </>
);

export default Layout;
