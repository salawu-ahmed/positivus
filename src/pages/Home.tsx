import TitleContainer from '../components/TitleContainer'
import ServicesCard from '../components/ServicesCard'
import { BsArrowUpRight } from 'react-icons/bs'
import { FiPlusCircle } from 'react-icons/fi'

const Home = () => {
  return (
    <>
      <div className='h-screen flex-col'>
        <div className='w-full flex-col sm:flex-row flex gap-5 mt-8 mb-8'>
          <div className='text-left flex-1 '>
            <h1 className='text-3xl md:text-6xl font-medium mb-8'>Navigating the digital landscape for success</h1>
            <p className='hidden sm:block mb-8'>Our digital marketing agency helps businesses grow and suucceed online through a range of services including SEO, PPC, social media marketing, and content creation</p>
            <button className='button hidden sm:block'>Book a consultation</button>
          </div>

          <div className='flex-1'>
            <img src="/Illustration.png" alt="" />
          </div>

          <div className='sm:hidden'>
            <p className='text-left'>Our digital marketing agency helps businesses grow and suucceed online through a range of services including SEO, PPC, social media marketing, and content creation</p>
            <button className='button w-full'>Book a consultation</button>
          </div>
        </div>

        <div className="flex gap-4 justify-between mt-8 mb-8">
          <img src="/Company logo.png" alt="" />
          <img src="/Company logo (1).png" alt="" />
          <img src="/Company logo (2).png" alt="" />
          <img src="/Company logo (3).png" alt="" />
          <img src="/Company logo (4).png" alt="" />
          <img src="/Company logo (5).png" alt="" />
        </div>
      </div>

      <section className='my-16'>
        <TitleContainer
          title='Services'
          description='At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:' />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <ServicesCard
            title='Search Engine Optimisation'
            imageLink='\tokyo-magnifier-web-search-with-elements 2.png'
            titleHighlight='appGreen'
            background='appWhite'
          />
          <ServicesCard
            title='Pay-per-click advertising'
            imageLink='\tokyo-selecting-a-value-in-the-browser-window 1.png'
            titleHighlight='appWhite'
            background='appGreen'
          />
          <ServicesCard
            title='Social Media Marketing'
            imageLink='\tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png'
            titleHighlight='appWhite'
            background='appDark'
          />
          <ServicesCard
            title='Email Marketing'
            imageLink='\tokyo-sending-messages-from-one-place-to-another 1.png'
            titleHighlight='appGreen'
            background='appWhite'
          />
          <ServicesCard
            title='Content Creation'
            imageLink='\tokyo-sending-messages-from-one-place-to-another 1.png'
            titleHighlight='appWhite'
            background='appGreen'
          />
          <ServicesCard
            title='Analytics and Tracking'
            imageLink='\tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png'
            titleHighlight='appGreen'
            background='appDark'
          />
        </div>
      </section>

      <section className='w-full flex gap-6 p-8 bg-appWhite rounded-4xl my-16'>
        <div className='text-left flex flex-col justify-center gap-6
        '>
          <h2 className='text-2xl font-medium'>Let's make things happen</h2>
          <p className='w-4/5'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online</p>
          <div>
            <button className='button cursor-pointer'>Get your free proposal</button>
          </div>
        </div>
        <div>
          <img src="/Illustration (1).png" alt="" />
        </div>
      </section>

      <section className="my-16">
        <TitleContainer
          title='Case Studies'
          description='Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'
        />
        <div className='flex gap-12 p-12 bg-appDark text-appWhite rounded-3xl'>
          <div className='text-left'>
            <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a50% increase in website traffica and a 25% increase in sales</p>
            <button className='flex text-appGreen'>Learn more <BsArrowUpRight size={25} /></button>
          </div>
          <div className="w-1 h-full border bg-appWhite"></div>
          <div className='text-left'>
            <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for keywords and a 200% increase in organic traffic</p>
            <button className='flex text-appGreen'>Learn more <BsArrowUpRight size={25} /></button>
          </div>
          <div className="w-1 h-full border bg-appWhite"></div>
          <div className='text-left'>
            <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and genereated a 20% increase in online sales.</p>
            <button className='flex text-appGreen'>Learn more <BsArrowUpRight size={25} /></button>
          </div>
        </div>
      </section>

      <section>
        <TitleContainer
          title='Our Working Process'
          description='Step-by-Step Guide to Achieving Your Business Goals'
        />
        <div className='flex flex-col gap-4'>
          <div className='text-left p-6 rounded-4xl bg-appGreen border shadow-2xl'>
            <div className='flex justify-between items-center'>
              <p className='flex items-center gap-4'>
                <span className='font-medum text-4xl'>01</span> <span className='text-2xl'>Consultation</span>
              </p>
              <FiPlusCircle size={25}/>
            </div>
            <div className='w-full h-0.5 bg-appDark my-6'></div>
            <p>During the initial consultation, we will discuss your business goals and objectives, target audience and current marketing efforts.
              This will allow us to understand your needs and tailor our services to best fit your requirements</p>
          </div>

          <div className='text-left p-6 rounded-4xl bg-appWhite border shadow-2xl'>
            <div className='flex justify-between items-center'>
              <p className='flex items-center gap-4'>
                <span className='font-medum text-4xl'>02</span> <span className='text-2xl'>Research and Strategy Development</span>
              </p>
              <FiPlusCircle size={25}/>
            </div>
            {/* <div className='w-full h-0.5 bg-appDark my-6'></div>
            <p>During the initial consultation, we will discuss your business goals and objectives, target audience and current marketing efforts.
              This will allow us to understand your needs and tailor our services to best fit your requirements</p> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
