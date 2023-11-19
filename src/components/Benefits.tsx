import { SelectedPage, benefitsDataType } from '../shared/types';
import Title from './Title';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Card from './Card';
import CallToAction from './CallToAction';
import BenefitPageGraphic from '../assets/BenefitsPageGraphic.png';

const benefitsData: Array<benefitsDataType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6'/>,
        title: 'State of the Art Facilities',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, soluta.'
    },
    {
        icon: <UserGroupIcon className='h-6 w-6'/>,
        title: '100 of Diverse Classes',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, soluta.'
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6'/>,
        title: 'Expert and Pro Trainers',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, soluta.'
    }
];

const benefitsContainer = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
        id={SelectedPage.Benefits}
        className='mx-auto min-h-full w-5/6 py-20'
    >
        <motion.div
            onViewportEnter={() => SelectedPage.Benefits}   
        >
            <motion.div 
                className='md:my-5 md:w-3/5'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5}}
                variants={{ hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 }}}
            >
                <Title>MORE THAN JUST A GYM</Title>
                <p className='my-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, natus ab quas veritatis fugit odio tempora eaque ea exercitationem error explicabo</p>
            </motion.div>

            <motion.div 
                className='items-center justify-between gap-8 mt-5 md:flex'
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.5}}
                variants={benefitsContainer}
            >
                {benefitsData.map((benefit: benefitsDataType) => {
                    return (
                        <Card
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    )
                })}
            </motion.div>

            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                <img
                    className='mx-auto' 
                    src={BenefitPageGraphic} 
                    alt='benefits-page-graphic'
                />
                <div>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                            <motion.div
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5}}
                                variants={{ hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 }}}
                            >
                                <Title>
                                    MILLIONS OF HAPPPY MEMBERS GETTING {' '}
                                    <span className='text-primary-500'>FIT</span>
                                </Title>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5}}
                        variants={{ hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 }}}
                    >
                        <p className='my-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quod sequi delectus nulla explicabo laboriosam qui voluptate maiores suscipit. Delectus enim eveniet laborum excepturi aut maiores nobis aliquam culpa vitae?
                        </p>
                        <p className='mb-5'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit quod numquam beatae dolorem? Officia dolor ducimus exercitationem ullam aperiam.
                        </p>
                    </motion.div>
                    <div className='relative mt-16'>
                        <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                            <CallToAction setSelectedPage={setSelectedPage}>
                                Join Now
                            </CallToAction>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits