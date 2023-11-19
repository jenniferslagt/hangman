import { SelectedPage } from '../shared/types';
import CallToAction from './CallToAction';
import HomePageText from '../assets/HomePageText.png';
import HomePageGraphic from '../assets/HomePageGraphic.png';
import SponsorRedbull from '../assets/SponsorRedbull.png';
import SponsorForbes from '../assets/SponsorForbes.png';
import SponsorFortune from '../assets/SponsorFortune.png';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isDesktop = useMediaQuery('(min-width: 1024px)')

    return (
        <section 
            id={SelectedPage.Home}
            className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
        >
            <motion.div 
                className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
                onViewportEnter={() => SelectedPage.Home}
                >
                <motion.div 
                    className='z-10 mt-32 md:basis-3/5'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5}}
                    variants={{ hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 }}}
                >
                    <div className='md:-mt-20'>
                        <div className='relative'>
                            <div className='before:absolute before:z-[-1] before:-top-20 before:-left-20 md:before:content-evolvetext'>
                                <img src={HomePageText} alt="Home page text"/>
                            </div>
                        </div>

                        <p className='mt-8 text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, natus ab quas veritatis fugit odio tempora eaque ea exercitationem error explicabo
                        </p>
                    </div>
                    <div className='mt-8 flex items-center gap-8'>
                        <CallToAction setSelectedPage={setSelectedPage}>
                            Join Now
                        </CallToAction>
                        <AnchorLink 
                            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn more</p>
                        </AnchorLink>
                    </div>
                </motion.div>

                <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end'>
                    <img src={HomePageGraphic}/>
                </div>
            </motion.div>

            {isDesktop && (
                <div className='h-[150px] w-full bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6'>
                        <div className='flex w-3/5 items-center justify-between'>
                            <img src={SponsorRedbull} alt="Redbull Sponsor" />
                            <img src={SponsorForbes} alt="Forbes Sponsor" />
                            <img src={SponsorFortune} alt="Fortune Sponsor" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home