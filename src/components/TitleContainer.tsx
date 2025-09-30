
function TitleContainer({title, description}: {title: string, description: string}) {
  return (
    <div className='w-full flex gap-4 mb-6 '>
      <h2 className="text-4xl font-medium bg-appGreen">{title}</h2>
      <p className="w-1/2 text-left">{description}</p>
    </div>
  )
}

export default TitleContainer
