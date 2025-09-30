import { BsArrowUpRightCircle } from "react-icons/bs"

interface elementProp {
    title: string,
    imageLink: string,
    titleHighlight: string,
    background: string
}

function ServicesCard({title, imageLink, titleHighlight, background }: elementProp) {
  return (
    <div className={`flex justify-between gap-3 border rounded-4xl shadow-md bg-${background} p-8`}>
      <div className='h-full flex flex-col justify-between'>
        <h1 className={`bg-${titleHighlight} text-2xl font-medium`}>{title}</h1>
        <button className="flex items-center gap-2">
          <BsArrowUpRightCircle size={25} />
            Learn More
        </button>
      </div>
      <div>
        <img src={`${imageLink}`} alt="" />
      </div>
    </div>
  )
}

export default ServicesCard
