
const Hero = () => {
  return (
    <section className="md:px-20 md:py-[3.75rem]">
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center px-4 md:px-8 py-10 md:py-0 ">
      <img src="column.svg" alt="" />
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-around  gap-3 text-Displaytext(M)/Outlined(M) ">
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

export default Hero