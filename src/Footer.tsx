const Footer = () => {
  return (
    <>
   <footer className="py-10 px-4">
<section className="flex flex-col items-start gap-5 py-5">
        <input className="w-[21.4375rem] h-[3.5rem] border border-black rounded py-4 px-6 placeholder-zinc500 placeholder:text-HeadingH6" type="text" placeholder="Your name"/>
        <input className="w-[21.4375rem] h-[3.5rem] border border-black rounded py-4 px-6 placeholder-zinc500 placeholder:text-HeadingH6" type="text" placeholder="Email"/>
        <input className="w-[21.4375rem] h-[3.5rem] border border-black rounded py-4 px-6 placeholder-zinc500 placeholder:text-HeadingH6" type="text" placeholder="Your Website"/>
        <textarea className="w-[21.4375rem] h-[8.75rem] border border-black rounded py-4 px-6 placeholder-zinc500 placeholder:text-HeadingH6"  placeholder="How Can I Help ?*"/>
        <button className="w-[8.6875rem] h-[3rem] rounded bg-black text-white py-3 px-4 font-semibold text-ButtonText2">Get In Touch</button>
    </section>
    <section className="py-5 flex flex-col gap-8">
        <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
                <span className="text-Displaytext(M)/Outlined(M) font-extrabold">Lets</span>
                <span className="text-white cus text-Displaytext(M)/Outlined(M) font-extrabold">talk</span>
                <span className="text-Displaytext(M)/Outlined(M) font-extrabold">for</span>
            </div>
            <div className="flex gap-4">
                <span className="text-Displaytext(M)/Outlined(M) font-extrabold">Something special</span>
                </div>
        </div>
       <p className="text-ParagraphP2 text-zinc500">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
        <div className="flex flex-col gap-3 ">
        <h5 className="text-HeadingH5 font-bold">youremail@gmail.com</h5>
        <h5 className="text-HeadingH5 font-bold">8053345267</h5>    
        </div>
    </section>
   </footer>
   <section className="bg-black text-white py-5 px-4">
<div className="flex justify-between w-full">
<img src="Logo.svg" alt="" />
<div className="flex flex-col items-end">
    <p className="text-ParagraphP3 font-semibold">@ 2019-2023 Personal</p>
    <p className="text-ParagraphP3 font-semibold">Made In Figma</p>
</div>
</div>
   </section>
   </>
  )
}

export default Footer