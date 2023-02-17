
import React from 'react'
import keys from '../../../constants/keys'

export const Home = () => {
  const agent = JSON.parse(localStorage.getItem(keys.profileKey))
  return (
    <div className="flex justify-center items-center px-8 mx-auto mt-10">
        <div className='flex flex-col items-center'>
            <div className='mb-5'>
                <img className="w-[15rem] h-[15rem] rounded-full shadow-md" src={agent.profile.profileImageLink} alt=''/>
            </div>
            <p className='text-[24px] font-semibold text-gray-700'>{agent.profile.firstName} {agent.profile.lastName}</p>
            <p className='text-xs font-semibold text-gray-500 uppercase text-center'>Agent</p>
            <p className='text-sm font-semibold text-gray-700 uppercase mt-2'>{agent.profile.address}</p>
        </div>
    </div>
  )
}
