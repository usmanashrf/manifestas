import { NotificaitonTypesList, notificaitonType } from "@/types/notifications";

let notificationsDummyData : notificaitonType[]=[{
    notification:"Jhon accept your freind request",
    type:NotificaitonTypesList.FriendRequest,
},
{
    notification:"Mari attending new Event",
    type:NotificaitonTypesList.Event,
}, 
{
    notification:"You need to modify your setting",
    type:NotificaitonTypesList.Alert,
}, 
{
    notification:"New Event is coming",
    type:NotificaitonTypesList.Event,
}, 
]

export default notificationsDummyData;