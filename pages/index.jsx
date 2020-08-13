import { Component } from 'react'
import Head from 'next/head';
import Intro from '../components/intro/intro.component';
import Footer from '../components/footer/footer.component';
import Navbar from '../components/navbar/navbar.component';
import TitleIcon from '../components/title-icon/title-icon';
export default props => (
    <div >
        <TitleIcon />
        <Head>
            <title>Pablo Pose</title>
        </Head>
        <Navbar />
        <Intro />
        <Footer />
    </div>
); 