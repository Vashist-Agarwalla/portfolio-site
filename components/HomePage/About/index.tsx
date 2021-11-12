import AboutImage from "./AboutImage";
import AboutText from "./Text";

const About = ({ data }: any) => {
    return (
        <div className='lg:flex' id='about'>
            <AboutImage image={data.image} />
            <AboutText data={data}/>
        </div>
    )
}

export default About;