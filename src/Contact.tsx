
const Contact = () => {
  return (
    <section id='contact' className="py-10 px-4 lg:py-[3.75rem] lg:px-20  ">
<div className="lg:px-8 xl:flex xl:justify-center gap-12  xl:items-center   w-full">
<section className="flex lg:w-[38rem] flex-col items-start gap-5 py-5">
            <input className="w-[21.4375rem] lg:w-[31.25rem]  h-[3.5rem] border border-black rounded py-4 px-6 placeholder-zinc500 placeholder:text-HeadingH6" type="text" placeholder="Your name"/>
            <input className="w-[21.4375rem] lg:w-[31.25rem]  h-[3.5rem] border border-black rounded py-4 px-6 placeholder-zinc500 placeholder:text-HeadingH6" type="text" placeholder="Email"/>
            <input className="w-[21.4375rem] lg:w-[31.25rem]  h-[3.5rem] border border-black rounded py-4 px-6 placeholder-zinc500 placeholder:text-HeadingH6" type="text" placeholder="Your Website"/>
            <textarea className="w-[21.4375rem] lg:w-[31.25rem]  h-[8.75rem] border border-black rounded py-4 px-6 placeholder-zinc500 placeholder:text-HeadingH6"  placeholder="How Can I Help ?*"/>
            <button className="w-[8.6875rem] lg:w-[31.25rem]  h-[3rem] rounded bg-black text-white py-3 px-4 font-semibold text-ButtonText2">Get In Touch</button>
        </section>
        <section className="py-5 lg:w-[38rem] flex flex-col gap-8">
            <div className="flex text-Displaytext(M)/Outlined(M) xl:text-Displaytext/Outlined font-extrabold flex-col gap-5">
                <div className="flex gap-3 items-center">
                    <span >Lets</span>
                    <span className="text-white cus">talk</span>
                    <span >for</span>
                </div>
                <div className="flex gap-4">
                    <span>Something special</span>
                    </div>
            </div>
           <p className="text-ParagraphP2 text-zinc500">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
            <div className="flex flex-col gap-3 text-HeadingH5 font-bold lg:text-HeadingH3 lg:font-semibold  ">
            <h5 >youremail@gmail.com</h5>
            <h5 >8053345267</h5>    
            </div>
        </section>
</div>
       </section>
  )
}

export default Contact