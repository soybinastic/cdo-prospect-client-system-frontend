import { useNavigate } from 'react-router-dom'
import React from 'react'

export const Properties = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className='px-4 mx-auto bg-white shadow-sm sticky top-0 z-50'>
            <header className='px-3 flex justify-between items-center'>
                <div>
                    <a href="/" className='text-lg font-semibold uppercase'>CDO Prospect Client</a>
                </div>
                <div>
                    <ul className='flex spacing-x-2'>
                        <li className='cursor-pointer text-sm text-[#ffc107] font-semibold py-3' onClick={() => navigate('/login')}>Sign in</li>
                    </ul>
                </div>
            </header>
        </div>
        <section 
            className="h-[30rem] w-full bg-no-repeat bg-center flex justify-center items-center"
            style={{ background : 'url("https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=817&q=80")' }}>
            <h1 className="text-[30px] text-white font-bold uppercase text-center">Live a life you dreamed.</h1>
        </section>
        <section className='px-5'>
            <h1 className='text-[30px] font-bold mt-4'>Availables</h1>
            <div className='grid grid-cols-3 gap-3 py-4'>
                <div className='shadow-md rounded w-[27rem]'>
                    <img className='w-full h-[15rem] bg-center rounded-t' src="https://www.wallpapertip.com/wmimgs/54-541872_home-images-house-design-image-photos-pics-picture.jpg" alt="" />
                    <div className='px-2 py-2 flex flex-col'>
                        <p className='truncate hover:text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error similique qui minima soluta natus porro, ratione earum quis optio rem culpa, inventore consequatur provident eligendi consectetur atque! Veniam, laudantium!</p>
                        <div>
                            <p className='text-gray-500 mb-1'>PHP200,000</p>
                            <button className='font-semibold text-xs w-full px-5 py-4 rounded bg-[#ffc107] uppercase hover:bg-[#ffe907]'>Contact Agent</button>
                        </div>
                    </div>
                </div>
                <div className='shadow-md rounded w-[27rem]'>
                    <img className='w-full h-[15rem] bg-center rounded-t' src="https://www.wallpapertip.com/wmimgs/54-541872_home-images-house-design-image-photos-pics-picture.jpg" alt="" />
                    <div className='px-2 py-2 flex flex-col'>
                        <p className='truncate hover:text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error similique qui minima soluta natus porro, ratione earum quis optio rem culpa, inventore consequatur provident eligendi consectetur atque! Veniam, laudantium!</p>
                        <div>
                            <p className='text-gray-500 mb-1'>PHP200,000</p>
                            <button className='font-semibold text-xs w-full px-5 py-4 rounded bg-[#ffc107] uppercase hover:bg-[#ffe907]'>Contact Agent</button>
                        </div>
                    </div>
                </div>
                <div className='shadow-md rounded w-[27rem]'>
                    <img className='w-full h-[15rem] bg-center rounded-t' src="https://www.wallpapertip.com/wmimgs/54-541872_home-images-house-design-image-photos-pics-picture.jpg" alt="" />
                    <div className='px-2 py-2 flex flex-col'>
                        <p className='truncate hover:text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error similique qui minima soluta natus porro, ratione earum quis optio rem culpa, inventore consequatur provident eligendi consectetur atque! Veniam, laudantium!</p>
                        <div>
                            <p className='text-gray-500 mb-1'>PHP200,000</p>
                            <button className='font-semibold text-xs w-full px-5 py-4 rounded bg-[#ffc107] uppercase hover:bg-[#ffe907]'>Contact Agent</button>
                        </div>
                    </div>
                </div>
                <div className='shadow-md rounded w-[27rem]'>
                    <img className='w-full h-[15rem] bg-center rounded-t' src="https://www.wallpapertip.com/wmimgs/54-541872_home-images-house-design-image-photos-pics-picture.jpg" alt="" />
                    <div className='px-2 py-2 flex flex-col'>
                        <p className='truncate hover:text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error similique qui minima soluta natus porro, ratione earum quis optio rem culpa, inventore consequatur provident eligendi consectetur atque! Veniam, laudantium!</p>
                        <div>
                            <p className='text-gray-500 mb-1'>PHP200,000</p>
                            <button className='font-semibold text-xs w-full px-5 py-4 rounded bg-[#ffc107] uppercase hover:bg-[#ffe907]'>Contact Agent</button>
                        </div>
                    </div>
                </div>
                <div className='shadow-md rounded w-[27rem]'>
                    <img className='w-full h-[15rem] bg-center rounded-t' src="https://www.wallpapertip.com/wmimgs/54-541872_home-images-house-design-image-photos-pics-picture.jpg" alt="" />
                    <div className='px-2 py-2 flex flex-col'>
                        <p className='truncate hover:text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error similique qui minima soluta natus porro, ratione earum quis optio rem culpa, inventore consequatur provident eligendi consectetur atque! Veniam, laudantium!</p>
                        <div>
                            <p className='text-gray-500 mb-1'>PHP200,000</p>
                            <button className='font-semibold text-xs w-full px-5 py-4 rounded bg-[#ffc107] uppercase hover:bg-[#ffe907]'>Contact Agent</button>
                        </div>
                    </div>
                </div>
                <div className='shadow-md rounded w-[27rem]'>
                    <img className='w-full h-[15rem] bg-center rounded-t' src="https://www.wallpapertip.com/wmimgs/54-541872_home-images-house-design-image-photos-pics-picture.jpg" alt="" />
                    <div className='px-2 py-2 flex flex-col'>
                        <p className='truncate hover:text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error similique qui minima soluta natus porro, ratione earum quis optio rem culpa, inventore consequatur provident eligendi consectetur atque! Veniam, laudantium!</p>
                        <div>
                            <p className='text-gray-500 mb-1'>PHP200,000</p>
                            <button className='font-semibold text-xs w-full px-5 py-4 rounded bg-[#ffc107] uppercase hover:bg-[#ffe907]'>Contact Agent</button>
                        </div>
                    </div>
                </div>
                <div className='shadow-md rounded w-[27rem]'>
                    <img className='w-full h-[15rem] bg-center rounded-t' src="https://ap.rdcpix.com/0d3ada3e4aa17f19297a3e4ff86c62fel-m3915149578od-w640_h480.jpg" alt="" />
                    <div className='px-2 py-2 flex flex-col'>
                        <p className='truncate hover:text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error similique qui minima soluta natus porro, ratione earum quis optio rem culpa, inventore consequatur provident eligendi consectetur atque! Veniam, laudantium!</p>
                        <div>
                            <p className='text-gray-500 mb-1'>PHP200,000</p>
                            <button className='font-semibold text-xs w-full px-5 py-4 rounded bg-[#ffc107] uppercase hover:bg-[#ffe907]'>Contact Agent</button>
                        </div>
                    </div>
                </div>
                <div className='shadow-md rounded w-[27rem]'>
                    <img className='w-full h-[15rem] bg-center rounded-t' src="https://p.rdcpix.com/v15/leba47344-m0xd-w640_h480_q80.jpg" alt="" />
                    <div className='px-2 py-2 flex flex-col'>
                        <p className='truncate hover:text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error similique qui minima soluta natus porro, ratione earum quis optio rem culpa, inventore consequatur provident eligendi consectetur atque! Veniam, laudantium!</p>
                        <div>
                            <p className='text-gray-500 mb-1'>PHP200,000</p>
                            <button className='font-semibold text-xs w-full px-5 py-4 rounded bg-[#ffc107] uppercase hover:bg-[#ffe907]'>Contact Agent</button>
                        </div>
                    </div>
                </div>
                <div className='shadow-md rounded w-[27rem]'>
                    <img className='w-full h-[15rem] bg-center rounded-t' src="https://i.pinimg.com/originals/e2/ba/0b/e2ba0baf2f33e24424b20117b56ef415.jpg" alt="" />
                    <div className='px-2 py-2 flex flex-col'>
                        <p className='truncate hover:text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error similique qui minima soluta natus porro, ratione earum quis optio rem culpa, inventore consequatur provident eligendi consectetur atque! Veniam, laudantium!</p>
                        <div>
                            <p className='text-gray-500 mb-1'>PHP200,000</p>
                            <button className='font-semibold text-xs w-full px-5 py-4 rounded bg-[#ffc107] uppercase hover:bg-[#ffe907]'>Contact Agent</button>
                        </div>
                    </div>
                </div>
                <div className='shadow-md rounded w-[27rem]'>
                    <img className='w-full h-[15rem] bg-center rounded-t' src="https://th.bing.com/th/id/OIP.LSs5kD0p97TesrxUfL464AHaEN?pid=ImgDet&rs=1" alt="" />
                    <div className='px-2 py-2 flex flex-col'>
                        <p className='truncate hover:text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error similique qui minima soluta natus porro, ratione earum quis optio rem culpa, inventore consequatur provident eligendi consectetur atque! Veniam, laudantium!</p>
                        <div>
                            <p className='text-gray-500 mb-1'>PHP200,000</p>
                            <button className='font-semibold text-xs w-full px-5 py-4 rounded bg-[#ffc107] uppercase hover:bg-[#ffe907]'>Contact Agent</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src="https://th.bing.com/th/id/OIP.LSs5kD0p97TesrxUfL464AHaEN?pid=ImgDet&rs=1" alt="" />
            <img src="https://i.pinimg.com/originals/e2/ba/0b/e2ba0baf2f33e24424b20117b56ef415.jpg" alt="" />
            <img src="https://p.rdcpix.com/v15/leba47344-m0xd-w640_h480_q80.jpg" alt="" />
            <img src="https://ap.rdcpix.com/0d3ada3e4aa17f19297a3e4ff86c62fel-m3915149578od-w640_h480.jpg" alt="" /> */}
        </section>
    </div>
  )
}
