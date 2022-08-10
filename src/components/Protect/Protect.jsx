import { isEmpty } from 'lodash'
import React from 'react'

const Protect = ({ data: { title, content } }) => {
    return (
        <section className="container text-center md:text-left xl:px-28">
            <h2 className="mb-9 xl:pr-64">{title || 'Protect yourself and your family first.'}</h2>

            {!isEmpty(content) &&
                <div className="grid justify-center gap-6 md:grid-cols-2">


                    {
                        content.map((item, index) => {
                            return (
                                <div className="flex flex-col items-center pt-7 pb-10 px-[22px]" key={index}>
                                    <img src={item.image?.sourceUrl || 'https://phocode.com/wp-content/uploads/2020/10/placeholder-1-1.png'} alt="" className="mb-8 h-32 " />
                                    <div className="md:self-start xl:pr-20">
                                        <h5 className="font-bold mb-3 ">{item.title || "Default subtitle here ..."}</h5>
                                        <p className="text-sm">{item.description || "Default description here ..."}</p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            }
        </section>
    )
}

export default Protect

