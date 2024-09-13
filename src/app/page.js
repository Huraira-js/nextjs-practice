import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={classes.mainBody}>
        <h1>Hello</h1>
        <Link href={"/pages"}>See Posts</Link>
      </div>
    </>
  );
}
