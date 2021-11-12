const AboutImage = ({ image }: any) => {
    return (
        <div className='lg:flex-2'>
            <img
                src={image}
                alt="Vashist Agarwalla"
                className='mx-12 sm:mx-16 md:mx-24 lg:mx-32 mt-24 w-3/4 sm:w-2/5 lg:w-3/4 lg:mt-48 rounded-md' 
            />
        </div>
    )
}

export default AboutImage;