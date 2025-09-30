
function TitleContainer({title, description}: {title: string, description: string}) {
  return (
    <div className='w-full flex gap-4 '>
      <h2 className="text-4xl font-medium bg-appGreen">{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default TitleContainer
