/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
// import Image from 'next/image'

const AboutHome = () => {
  return (
    <div id='about' className='container my-5'>
      <h3 className='text-center text-success pt-5'>About CeRID</h3>

      <div className='row'>
        <div className='col-md-6 col-12 my-auto'>
          <p className=''>
            Centre for Research and Integrated Development (CeRID) is a
            non-governmental, non-profit organization founded and became
            operational in 2010. CeRID’s institutional focus grounded on five
            Strategic Priority Goals/Pillars as follows:
          </p>
          <Link href='/about'>
            <a className='btn btn-success btn-lg mt-3'> READ MORE </a>
          </Link>
        </div>

        <div className='col-md-6 col-12 my-auto'>
          <img src='/training.jpg' className='img-fluid' alt='training' />
        </div>
      </div>
    </div>
  )
}

export default AboutHome
