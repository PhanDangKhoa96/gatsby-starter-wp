import { isEmpty } from 'lodash';
import React from 'react'

const Clinic = ({ data: { title, content } }) => {
    return (
        <section className="container text-center md:text-left">
            <h2 className="font-bold mb-14 xl:mb-20 xl:text-5xl">
                {title || 'Modern clinics. Smart, hassle-free care.'}
            </h2>

            {!isEmpty(content) &&
                <div className="grid gap-y-16 md:grid-cols-2 md:gap-y-0 md:gap-x-20 xl:gap-x-32">

                    {content.map((item, index) => {
                        return (<div className={index % 2 !== 0 ? "md:mt-[72px] xl:mt-32" : ''} key={index}>
                            <img src={item.image?.sourceUrl || 'https://phocode.com/wp-content/uploads/2020/10/placeholder-1-1.png'} alt="" className="mb-8" />

                            <div>
                                <h2 className="mb-4 text-[22px] md:text-2xl">{item.sub_title}</h2>
                                <p className="text-sm md:text-base">{item.description || "Default description here ..."}</p>
                            </div>
                        </div>)
                    })}
                </div>
            }
        </section >
    )
}

export default Clinic


