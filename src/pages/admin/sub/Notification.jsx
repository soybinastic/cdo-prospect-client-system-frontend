import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import keys from '../../../constants/keys'
import { getAllNotifications } from '../../../features/notification/notificationSlice'

export const Notification = () => {
    const admin = JSON.parse(localStorage.getItem(keys.profileKey))
    const { isSuccess, isError, notifications } = useSelector(state => state.notification)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllNotifications({ userId : admin.userId }))
    }, [dispatch])
  return (
    <div>
        <div className='flex flex-col justify-center py-5'>
            <h1 className='text-sm font-semibold uppercase text-gray-500'>Notifications</h1>
            <div className='flex flex-col'>
                {notifications?.map(notif => (
                    <div key={notif.id} className='flex flex-col px-3 py-2'>
                        <p className='text-xs font-semibold text-gray-400'>Requirement</p>
                        <p className='text-sm text-gray-600 mt-1'>Admin approved your requirement</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
