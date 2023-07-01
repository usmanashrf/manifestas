import MdNotificationsNone from 'react-icons/md';
import { Bell, Calendar, MessagesSquare, UserPlus2,UserSquare } from "lucide-react"
export default function SideMenuItems() {
  return (
    <div className='px-2 py-4 flex justify-evenly space-x-4 text-lg font-bold bg-[#0a3d62] text-white'>
        <div>
        <Bell/>
        </div>
        <div>
        <Calendar/>
        </div>
        <div>
        <MessagesSquare/>
        </div>
        <div>
        <UserPlus2/>
        </div>
        <div>
        <UserSquare/>
        </div>
    </div>
  )
}
