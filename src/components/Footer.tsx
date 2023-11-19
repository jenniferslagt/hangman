import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="Logo image"/>
                <p className='my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nulla modi hic rerum reiciendis beatae error possimus fugiat odit soluta?</p>
                <p>Evogym All Right Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Lorem, ipsum dolor.</p>
                <p className='my-5'>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact us</h4>
                <p className='my-5'>Streetname 123</p>
                <p className='my-5'>Amsterdam</p>
                <p>020 456 789</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer