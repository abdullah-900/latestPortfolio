import { useMediaQuery } from 'react-responsive'
const Hero = () => {
  const isdesktop = useMediaQuery({ query: '(min-width: 550px)' })
if (isdesktop) {
  return (
    <section className="xl:px-20 md:py-[3.75rem]">
      <div className="flex justify-center md:px-8 ">
      <div className="flex flex-col justify-center w-[37.5rem] items-start gap-8  py-5">
        <div className="flex flex-col justify-around  gap-4 md:text-Displaytext(M)/Outlined(M)  lg:text-Displaytext/Outlined">
          <div className="flex gap-4">
            <p>Hello Iam </p>
            <p className="font-extrabold">Abdullah Mostafa</p>
          </div>
          <div className="flex gap-4">
          <p className="font-extrabold">Frontend</p>
          <p className="cus text-white font-extrabold">Developer</p>
          </div>
        </div>
        <p className="text-ParagraphP2 text-zinc500">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
      </div>
      <img className='xl:w-[28.125rem]'  src="column.svg" alt="" />
      </div>
      </section>
  )
}else{
  return (
    <section className="px-4 py-10">
      <div className="flex flex-col  gap-12 justify-center items-center">
      <img src="column.svg" alt="" />
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-around  gap-3 text-Displaytext(M)/Outlined(M)forsmallphone">
          <div className="flex gap-4">
            <p>Hello Iam </p>
            <p className="font-extrabold">Abdullah Mostafa</p>
          </div>
          <div className="flex gap-4">
          <p className="font-extrabold">Frontend</p>
          <p className="cus text-white font-extrabold">Developer</p>
          </div>
        </div>
        <p className="text-Paragraph P2 text-zinc500">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
      </div>
      </div>
      </section>
  )
}
}

export default Hero