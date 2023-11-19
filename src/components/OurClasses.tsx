import { SelectedPage, ClassType } from '../shared/types'
import Title from './Title';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import { motion } from 'framer-motion';
import Class from './Class';

const classes = [
    {
        name: 'Weight Training Classes',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, ex?',
        image: image1,
    }, {
        name: 'Yoga Classes',
        image: image2,
    },  {
        name: 'Ab core Classes',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, ex?',
        image: image3,
    },  {
        name: 'Adventure Classes',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, ex?',
        image: image4,
    },  {
        name: 'Fitness Training Classes',
        image: image5,
    }, {
        name: 'Training Classes',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, ex?',
        image: image6,
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id={SelectedPage.OurClasses} className='w-full bg-primary-100 py-40'>
        <motion.div
            className='mx-auto w-5/6'
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5}}
            variants={{ hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 }}}
        >
            <div className='md:w3/5'>
                <Title>OUR CLASSES</Title>
                <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum magni minima sapiente aliquam aut dolor perferendis beatae ut mollitia?</p>
            </div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item: ClassType, index) => {
                        return (
                            <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                        )
                    })}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses