'use client';
import Image from 'next/image';
import logo from '/public/logo.png';
import Notifications from '../notifications';
import { useStateContext } from '@/lib/contextProvider';
import Events from '../events';
import Chat from '../chat';
import AddFriends from '../addFriends';
import Profile from '../profile';

export default function MenuDetails() {

  const { activeTab,setActiveTab}= useStateContext();
   console.log(activeTab);
  return (
    <div className="relative p-4 border-2 flex flex-col justify-center items-center flex-1">
      <div className="text-8xl flex flex-col justify-center items-center font-black text-[#0a3d62] opacity-10 absolute">
       <Image className='grayscale-50' height={96} alt='logo' src={logo}/>
        <div>MAP</div>
        <div>MY</div>
        <div>MATE</div>
        </div>
 <div>
    {
      activeTab === "notifications" ?(
    <Notifications/>
      ):
      activeTab === "events" ?(
        <Events/>
      ):
      activeTab === "chat" ?(
        <Chat/>
      ):
      activeTab === "addUser" ?(
        <AddFriends/>
      ):
      activeTab === "profile" ?(
        <Profile/>
      ):
      (
    <div>Details will be here..</div>
      )
    }
  </div>
    </div>
  )
}
