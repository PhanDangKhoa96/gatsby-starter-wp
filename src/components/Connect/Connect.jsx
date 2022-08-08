import { isEmpty } from 'lodash';
import React from 'react'

const Connect = ({ data: { title, description, tableDetail, sites, card, tableDetailTitle } }) => {
    console.log(tableDetail, 'tableDetail');
    return (
        <section className="container lg:px-16">
            <div className="flex text-center gap-y-7 gap-x-5 flex-col mb-6 md:text-left md:pr-48 xl:pr-0 xl:items-center xl:flex-row">
                <h2 className="xl:whitespace-nowrap">{title || 'Connect easily. Collaborate efficiently.'}</h2>
                <p>{description || 'Rather than do things the typical way, we’ve created a membership-based primary care practice truly designed around your needs.'}</p>
            </div>

            <div className="flex gap-y-9 flex-col-reverse xl:flex-col ">


                <div className="shadow-lg bg-white rounded overflow-hidden text-[10px] pb-5 min-w-[688px]">
                    <div className="bg-[rgba(21,101,216,0.1)] h-8 flex gap-x-2 items-center pl-3">
                        <div className="w-[6px] h-[6px] rounded-full bg-[#E95432]"></div>
                        <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
                        <div className="w-[6px] h-[6px] rounded-full bg-secondary"></div>
                    </div>
                    <div className="pt-8 grid grid-cols-[1fr_4fr]">
                        <div className="pl-[14px] grid gap-y-4">
                            <a className="cursor-pointer text-primary font-bold py-2 flex gap-x-2"><i className="ri-home-4-fill"></i> Dashboard</a>
                            <div>
                                <h5 className="text-[#63798B] mb-3">ADMIN</h5>
                                <ul>
                                    <li>
                                        <a href="#" className="py-2 flex gap-x-2">
                                            <i className="ri-user-line"></i>
                                            User List
                                        </a>
                                    </li>
                                    <li className="py-2 flex gap-x-2">
                                        <a href="#" className="py-2 flex gap-x-2">
                                            <i className="ri-earth-line"></i> Site List
                                        </a>
                                    </li>
                                    <li className="py-2 flex gap-x-2">
                                        <a href="#" className="py-2 flex gap-x-2">
                                            <i className="ri-bar-chart-grouped-line"></i> Trial List
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h5 className="text-[#63798B] mb-3">PATIENT</h5>
                                <ul>
                                    <li className="py-2 flex gap-x-2">
                                        <a href="#" className="py-2 flex gap-x-2">
                                            <i className="ri-file-user-line"></i>Patients
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h5 className="text-[#63798B] mb-3">ADDITIONAL</h5>
                                <ul>
                                    <li className="py-2 flex gap-x-2">
                                        <a href="#" className="py-2 flex gap-x-2">
                                            <i className="ri-folder-chart-line"></i>Report
                                        </a>

                                    </li>
                                    <li className="py-2 flex gap-x-2">
                                        <a href="#" className="py-2 flex gap-x-2">
                                            <i className="ri-settings-5-line"></i> Settings
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <header className="border-b border-solid border-border-base-color">
                                <div className="flex justify-between items-center pl-6 pb-7 pr-7">
                                    <h5 className="text-base">
                                        {tableDetailTitle || 'Good Morning, Ian Hugen.'}
                                    </h5>
                                    <button className=" bg-secondary text-white rounded-lg font-bold grid place-items-center w-9 aspect-square"> <span>+</span></button>
                                </div>
                            </header>

                            <div className="grid pl-6 grid-cols-2 gap-x-6">
                                <div className="border-r border-solid border-border-base-color pt-5">
                                    <h3 className="font-bold mb-4">New Patients (5)</h3>
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="text-[#B3BAC5] text-left">
                                                <th>#</th>
                                                <th>ID</th>
                                                <th>NAME</th>
                                                <th>DATE SUBMIT</th>
                                            </tr>
                                        </thead>
                                        {!isEmpty(tableDetail) &&
                                            <tbody>
                                                {tableDetail.map((row, index) => {
                                                    return (
                                                        <tr className="border-b border-solid border-border-base-color align-middle" key={row.column1 + index}>
                                                            <td className="pb-[10px] pt-4"><input type="checkbox" name="" id="" className="!w-[10px]" /></td>
                                                            <td className="pb-[10px] pt-4">{row.column1 || "Col 1"}</td>
                                                            <td className="pb-[10px] pt-4">{row.column2 || "Col 2"}</td>
                                                            <td className="pb-[10px] pt-4">{row.column3 || "Col 3"}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        }

                                    </table>
                                </div>

                                <div className="pt-5">
                                    <h3 className="font-bold mb-7">The Sites (4)</h3>
                                    {!isEmpty(sites) &&
                                        <div className="grid gap-y-7">
                                            {sites.map((site, index) => {
                                                return (<div className="flex items-center gap-x-4" key={site.name + index}>
                                                    <div className="shadow-lg p-2 w-8 aspect-square rounded">
                                                        <img src={site.image?.sourceUrl || 'https://phocode.com/wp-content/uploads/2020/10/placeholder-1-1.png'} alt="" className="w-full object-cover" />
                                                    </div>

                                                    <div>
                                                        <strong>{site.name || "Default name here"}</strong>
                                                        <p className="text-[#959EAD]">{site.location || "Default location here ..."}</p>
                                                    </div>
                                                </div>)
                                            })}


                                        </div>
                                    }
                                </div>
                            </div>




                            <div>
                                {isEmpty(!card) ??
                                    <div className="grid md:grid-cols-3 gap-x-5 gap-y-3 mb-9">
                                        {card.map((item, index) => {
                                            return (
                                                <div className="p-5 border border-solid border-[#B3BAC5] rounded-lg" key={item.title + index}>
                                                    <h2 className="mb-4 font-bold text-2xl text-primary">{item.number}</h2>
                                                    <h2 className="mb-2 text-base font-semibold">{item.title}</h2>
                                                    <p>{item.description}</p>
                                                </div>)
                                        })}
                                    </div>
                                }
                            </div >
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Connect
