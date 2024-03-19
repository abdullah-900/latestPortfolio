const About = () => {
  return (
    <section className="flex flex-col justify-center items center gap-5 py-10 px-4 w-full">
      <figure className="flex items-center justify-center ">
      <img className="w-[21.4375rem] h-[23.375rem]"  src="aboutillustraion.svg" alt="" />
      </figure>
      <div className="py-5 flex gap-4">
        <span className="text-Displaytext(M)/Outlined(M)">About</span>
        <span className="text-Displaytext(M)/Outlined(M) font-extrabold">Me</span>
      </div>
<div className="flex flex-col items-center justify-center gap-5 text-zinc500">
<p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
<p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
</div>
    </section>
  )
}

export default About