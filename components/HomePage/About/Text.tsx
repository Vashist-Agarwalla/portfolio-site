const AboutText = ({ about }: any) => {
    return (
        <div className='lg:flex-3 ml-12 md:ml-24 lg:ml-40 mr-0 md:mr-24 lg:mr-24 py-16 md:pb-40 lg:py-60'>
            <h1 className='text-secondary font-semibold text-3xl pb-10'>ABOUT ME</h1>
            <div className='text-white text-xl font-display font-extralight mr-12 pb-8'>
                {about.text1}
            </div>
            <div className='text-white text-xl font-display font-extralight mr-12'>
                {about.text2}
            </div>
        </div>
    )
}

export default AboutText;