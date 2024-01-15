import Logo from "./Logo";
import Link from 'next/link';

const Menu = (props: any) => {
    if (props.dropdown) {
        return (
            <div className='w-full lg:hidden bg-main justify-items-center'>
                <div className="grid grid-rows-4 gap-0 m-auto mr-0">
                    <div className="my-0">
                        <Logo />
                    </div>
                    <div className="mx-auto my-4" onClick={() => { props.porperty(!props.dropdown) }}>
                        <Link href="/#">
                            Home
                        </Link>
                    </div>
                    <div className="mx-auto my-4" onClick={() => { props.porperty(!props.dropdown) }}>
                        <Link href="/#about">
                            About
                        </Link>
                    </div>
                    <div className="mx-auto my-4" onClick={() => { props.porperty(!props.dropdown) }}>
                        <Link href='/projects'>
                            Projects
                        </Link>
                    </div>
                    <div className="mx-auto my-4" onClick={() => { props.porperty(!props.dropdown) }}>
                        <Link href='/#contact'>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='hidden lg:contents'>
                <div className="grid grid-cols-4 gap-0 m-auto mr-0">
                    <div className="mx-12">
                        <Link href="/#">
                            Home
                        </Link>
                    </div>
                    <div className="m-auto ">
                        <Link href="/#about">
                            About
                        </Link>
                    </div>
                    <div className="m-auto ">
                        <Link href='/projects'>
                            Projects
                        </Link>
                    </div>
                    <div className="m-auto ">
                        <Link href='/#contact'>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;