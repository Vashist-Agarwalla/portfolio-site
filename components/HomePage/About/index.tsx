import AboutImage from "./AboutImage";
import AboutText from "./Text";

const About = ({ about }: any) => {
    return (
        <div className='lg:flex' id='about'>
            <AboutImage />
            <AboutText about={about} />
        </div>
    )
}

export default About;