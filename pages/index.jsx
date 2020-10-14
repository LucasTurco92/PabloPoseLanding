import Head from 'next/head';
import Intro from '../components/intro/intro.component';
import Social from '../components/social/social.component';
import TitleIcon from '../components/title-icon/title-icon';
import Section from '../components/section/section.component';
import Footer from '../components/footer/footer.component';
import SecondSection from '../components/second-section/second-section.component';
import NavbarContainer from '../components/navbar-container/navbar-container.component';
import ThirdSection from '../components/third-section/third-section';

export default props => (
    <div >
        <TitleIcon />
        <Head>
            <title>Pablo Pose</title>
        </Head>
        <NavbarContainer />
        <Section section="intro">
            <Intro />
        </Section>
        <Section section="secondSection">
            <SecondSection />
        </Section>
        <Section section="thirdSection">
            <ThirdSection />
        </Section>

        <Social />
        <Footer/>
    </div>
); 