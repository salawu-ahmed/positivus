import TitleContainer from '../components/TitleContainer'
import ServicesCard from '../components/ServicesCard'
import Section from '../components/Section'

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
          <img src="/src/assets/Illustration.png" alt="" />
        </div>

        <div className='sm:hidden'>
           <p className='text-left'>Our digital marketing agency helps businesses grow and suucceed online through a range of services including SEO, PPC, social media marketing, and content creation</p>
          <button className='button w-full'>Book a consultation</button>
        </div>
      </div>

      <div className="flex gap-4 justify-between mt-8 mb-8">
        <img src="/src/assets/Company logo.png" alt="" />
        <img src="/src/assets/Company logo (1).png" alt="" />
        <img src="/src/assets/Company logo (2).png" alt="" />
        <img src="/src/assets/Company logo (3).png" alt="" />
        <img src="/src/assets/Company logo (4).png" alt="" />
        <img src="/src/assets/Company logo (5).png" alt="" />
      </div>
    </div>
      <Section>
        <TitleContainer
          title='Services'
          description='At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:' />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <ServicesCard
            title='Search Engine Optimisation'
            imageLink='src\assets\tokyo-magnifier-web-search-with-elements 2.png'
            titleHighlight='appGreen'
            background='appWhite'
          />
          <ServicesCard
            title='Pay-per-click advertising'
            imageLink='src\assets\tokyo-selecting-a-value-in-the-browser-window 1.png'
            titleHighlight='appWhite'
            background='appGreen'
          />
          <ServicesCard
            title='Social Media Marketing'
            imageLink='src\assets\tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png'
            titleHighlight='appWhite'
            background='appDark'
          />
          <ServicesCard
            title='Email Marketing'
            imageLink='\src\assets\tokyo-sending-messages-from-one-place-to-another 1.png'
            titleHighlight='appWhite'
            background='appGreen'
          />
          <ServicesCard
            title='Content Creation'
            imageLink='\src\assets\tokyo-sending-messages-from-one-place-to-another 1.png'
            titleHighlight='appDark'
            background='appGreen'
          />
          <ServicesCard
            title='Analytics and Tracking'
            imageLink='\src\assets\tokyo-sending-messages-from-one-place-to-another 1.png'
            titleHighlight='appDark'
            background='appGreen'
          />
        </div>
      </Section>
      <section className='w-full flex gap-6 p-12 bg-appWhite'>
        <div className='text-left flex flex-col'>
          <h2 className='text-2xl font-medium'>Let's make things happen</h2>
          <p className='w-1/2'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online</p>
          <div>
          <button className='cursor-pointer'>Get your free proposal</button>
          </div>
        </div>
        <div>
          <img src="/src/assets/Illustration (1).png" alt="" />
        </div>
      </section>
    
    </>
  )
}

export default Home
