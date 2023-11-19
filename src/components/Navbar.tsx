import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '../assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '../shared/types'
import useMediaQuery from '../hooks/useMediaQuery';
import CallToAction from './CallToAction';

type Props = {
    isTopOfpage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfpage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = 'flex items-center justify-between';
    const [openMobileMenu, toggleNavbar] = useState<boolean>(false);
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const hasNavbarBg = isTopOfpage ? '' : 'bg-primary-100 drop-shadow-sm'
    return (
        <nav>
            <div className={`${hasNavbarBg} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img alt='logo' src={Logo}/>

                        {isDesktop ? (
                            <div className={`${flexBetween} w-5/6`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link 
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Our classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link  
                                        page="Contact Us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign in</p>
                                    <CallToAction setSelectedPage={setSelectedPage}>Become a Member</CallToAction>
                                </div>
                            </div>
                        ) : (
                          <button
                            className='rounded-full bg-secondary-500 p-2'
                            onClick={() => toggleNavbar(!openMobileMenu)}>
                                <Bars3Icon className='h-6 w-6 text-white'/>
                          </button>  
                        )}
                    </div>
                </div>
            </div>

            {!isDesktop && openMobileMenu && (
                <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                    <div className='flex justify-end p-12'>
                        <button onClick={() => toggleNavbar(!openMobileMenu)}>
                            <XMarkIcon className='h-6 w-6 text-gray-400'/>
                        </button>
                    </div>

                    <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                        <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Our classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link  
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar