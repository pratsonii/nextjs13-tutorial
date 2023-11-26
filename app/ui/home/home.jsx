import React from 'react'
import styles from "./home.module.css";
import Link from 'next/link';
import { MdLock, MdLockOpen } from 'react-icons/md';
import { AiTwotoneUnlock } from "react-icons/ai";


const Home = () => {
  return (
    <div className={styles.container}>
        <h3>This is a Home Page!</h3>
        <Link href={"/unsecured-dashboard"} className={styles.linkwrap}> <AiTwotoneUnlock/> Unsecured Dashboard!</Link>
        <Link href={"/dashboard"} className={styles.linkwrap}> <MdLock/> Secured Dashboard!</Link>
    </div>
  )
}

export default Home