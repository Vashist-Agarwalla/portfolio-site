import AboutImage from "./AboutImage";
import AboutText from "./Text";

const About = () => {
    return (
        <div className='lg:flex' id='about'>
            <AboutImage />
            <AboutText  />
        </div>
    )
}

export default About;