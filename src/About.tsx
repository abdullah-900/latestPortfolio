
const About = () => {

  return (
    <section id="about" className="py-10 px-4 md:px-20 md:py-[3.75rem] w-full">
    <div  className="flex flex-col xl:flex-row lg:justify-evenly  gap-5  w-full md:px-8">
      <figure className="flex items-center justify-center  ">
      <img className="w-[21.4375rem] h-[23.375rem] xl:w-[32.8406rem] xl:h-[35.75rem] md:w-[37.5rem] md:h-[40.875rem] "  src="aboutillustraion.svg" alt="" />
      </figure>
<div className="xl:w-[38.125rem] flex flex-col gap-5  ">
<div className="py-5 flex gap-4">
        <span className="text-Displaytext(M)/Outlined(M) md:text-Displaytext/Outlined">About</span>
        <span className="text-Displaytext(M)/Outlined(M) md:text-Displaytext/Outlined font-extrabold">Me</span>
      </div>
<p className="text-zinc500 text-ParagraphP2">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
<p className="text-zinc500 text-ParagraphP2">I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
<p className="text-zinc500 text-ParagraphP2">When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
</div>
    </div>
    </section>

  )
}

export default About