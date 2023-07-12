import notificationsDummyData from '@/assets/notificationsList'
import { NotificaitonTypesList, notificaitonType } from '@/types/notifications'
import { motion } from 'framer-motion'
import { AlertCircle, CalendarClock, Megaphone, UserPlus2 } from 'lucide-react'
import React from 'react'
import {cardsMotions,eventMotions} from '@/lib/motion';

export default function Notifications() {

  return (
    <div>
        {
            notificationsDummyData.map((item : notificaitonType,index)=>(
            <motion.nav variants={eventMotions} initial="hidden" whileInView="show">
            <div key={index} className='bg-white opacity-100 rounded-md flex p-2 space-x-4 my-3'>
                <div>
                {
                item.type === NotificaitonTypesList.Alert ?(<AlertCircle/>):
                item.type === NotificaitonTypesList.Event ?(<CalendarClock/>):
                item.type === NotificaitonTypesList.FriendRequest ?(<UserPlus2/>):
                <Megaphone/>
                }
                </div>
                <div>
                {item.notification}
                </div>
                </div>
                </motion.nav>))
        }
        
    </div>
  )
}
