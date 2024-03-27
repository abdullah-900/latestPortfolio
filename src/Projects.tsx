

const Projects = () => {
  return (
    <section id="projects" className='py-10 px-4 bg-black text-white'>
      <div className='flex flex-col gap-5'>
<div className="flex gap-4 py-5 justify-center">
  <h1 className="text-Displaytext(M)/Outlined(M)">MY</h1>
  <h1 className="text-Displaytext(M)/Outlined(M) font-extrabold">Projects</h1>
</div>
<div className="flex flex-col gap-7">
  <div>
    <img src="" alt="project img" />
    <div className="flex flex-col items-start gap-7">
      <h4 className="text-HeadingH4 font-extrabold">01</h4>
      <h5 className="text-HeadingH5 font-extrabold">Crypto Screener Application</h5>
      <p className="text-ParagraphP2 text-zinc500">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
      <img src="export.svg" alt="" />
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default Projects