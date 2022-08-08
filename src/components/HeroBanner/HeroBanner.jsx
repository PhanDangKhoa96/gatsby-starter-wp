import React from 'react'

const HeroBanner = ({ data: { title, buttonText, description, slogan, image } }) => {

    return (
        <section className="container text-center pt-7 border-b border-solid border-[#E3E7ED] grid xl:grid-cols-[1fr_0.8fr] gap-x-16">
            <div className="xl:text-left">
                <span className="flex flex-col justify-center items-center mb-6 gap-x-3 gap-y-4 md:flex-row xl:justify-start">
                    <span className="block w-[14px] h-[2px] bg-foreground"></span>
                    <p className="text-sm font-semibold px-[4.25rem] md:p-0">{slogan || 'Changing the way you go to healthcare'}</p>
                </span>

                <h1 className="px-3 mb-6 md:px-11 xl:p-0">{title || 'Changing the way you go to healthcare'}</h1>
                <p className="px-6 mb-8 md:px-11 xl:p-0">{description || 'Discuss patients, share notes and documents in a secure manner and be part of a network of health professionals ready to collaborate better.'}</p>

                <form className="rounded-lg w-full bg-white p-2 text-left mb-9 md:relative">
                    <input type="email" placeholder="name@youremail.com" className="text-left pl-1 pr-1 mb-4 w-full focus:outline-none md:m-0 md:py-[10px] md:pl-5 md:pr-32" />
                    <button type="button" className="bg-primary rounded-lg font-bold text-white w-full py-2 right-0 top-0 md:absolute md:w-auto md:py-[18px] md:px-6">{buttonText || 'Subscribe'}</button>
                </form>
            </div>
            <img src={image?.sourceUrl || 'https://phocode.com/wp-content/uploads/2020/10/placeholder-1-1.png'} alt="" className="w-full aspect-square object-cover" />
        </section>
    )
}

export default HeroBanner
