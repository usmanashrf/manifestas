
export enum NotificaitonTypesList{
    Alert,
    FriendRequest,
    Event
}
export type notificaitonType ={
    notification :string,
    type:NotificaitonTypesList
}