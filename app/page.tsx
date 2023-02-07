import styles from "./page.module.css";
import Main from "#/src/components/main";
import getConfig from "next/config";

const getData = () => {
  // const { serverRuntimeConfig } = getConfig();
  console.log(__dirname);
};

export default function Home() {
  const a = getData();
  console.log("++++++", __dirname);
  return (
    <main>
      <Main />
    </main>
  );
}
