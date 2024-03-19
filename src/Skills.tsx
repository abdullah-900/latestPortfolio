const Skills = () => {
  
  return (
    <section className="flex flex-col gap-5 py-10 px-4">
    <div className="flex gap-4 justify-center items-center">
      <span className="text-Displaytext(M)/Outlined(M)">My</span>
      <span className="text-Displaytext(M)/Outlined(M) font-extrabold">Skills</span>
    </div>
<div className=' grid place-items-center gap-5 grid-cols-2'>
<div className="p-6 flex flex-col items-center gap-8 rounded border-2 w-40 h-40 border-black">
<img className="w-14 h-14" src="icon-sass.svg" alt="" />
  <h5 className="text-HeadingH5 font-bold">Sass</h5>
</div>
<div className="p-6 flex flex-col items-center gap-8 rounded border-2 w-40 h-40 border-black">
<img className="w-14 h-14" src="icon-sass.svg" alt="" />
  <span className="text-HeadingH5 font-bold">Sass</span>
</div>
<div className="p-6 flex flex-col items-center gap-8 rounded border-2 w-40 h-40 border-black">
<img className="w-14 h-14" src="icon-sass.svg" alt="" />
  <span className="text-HeadingH5 font-bold">Sass</span>
</div>
<div className="p-6 flex flex-col items-center gap-8 rounded border-2 w-40 h-40 border-black">
<img className="w-14 h-14" src="icon-sass.svg" alt="" />
  <span className="text-HeadingH5 font-bold">Sass</span>
</div>
    </div>
    </section>
    
  )
}

export default Skills