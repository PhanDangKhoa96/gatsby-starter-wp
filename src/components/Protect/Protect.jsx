import { isEmpty } from 'lodash'
import React from 'react'

const Protect = ({ data: { title, content } }) => {
    return (
        <section class="container text-center md:text-left xl:px-28">
            <h2 class="mb-9 xl:pr-64">{title || 'Protect yourself and your family first.'}</h2>

            {!isEmpty(content) &&
                <div class="grid justify-center gap-6 md:grid-cols-2">


                    {
                        content.map((item, index) => {
                            return (
                                <div class="flex flex-col items-center pt-7 pb-10 px-[22px]" key={item.title + index}>
                                    <img src={item.image?.sourceUrl || 'https://phocode.com/wp-content/uploads/2020/10/placeholder-1-1.png'} alt="" class="mb-8 h-32 " />
                                    <div class="md:self-start xl:pr-20">
                                        <h5 class="font-bold mb-3 ">{item.title || "Default subtitle here ..."}</h5>
                                        <p class="text-sm">{item.description || "Default description here ..."}</p>
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

