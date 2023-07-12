export enum friendReqType
{
    FreindRequest,
    AcceptRequest,
    FriendSuggestion
}
export type addFriendListType ={
    details :string,
    type:friendReqType
}