import Head from 'next/head'

const License = () => {
    return (
        <div>
            <Head>
                <title>Vashist Agarwalla | License</title>
                <meta property='og:image' itemProp='image' content='https://s3.ap-south-1.amazonaws.com/me.vashist/Vashist-Logo.png' />
                <meta property='og:description' content='License Page' />
                <meta property="og:image:type" content="image/png" />
            </Head>
            <div className="pt-44 mx-8 sm:mx-12 lg:mx-36 text-white text-lg font-display">
                <h1 className="text-secondary font-semibold text-3xl md:text-4xl lg:text-5xl text-center">LICENSE</h1>
                <div className='py-10 pb-20'>
                    Copyright 2021 Vashist Agarwalla
                    <br />
                    <br />
                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                    <br />
                    <br />
                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                    <br />
                    <br />
                    THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </div>
            </div>
        </div>

    )
}

export default License;