import FreindDetails from "@/components/friendDetails";
import dummyFreindData from "@/assets/dummyFriendData";

export default function page({params}:{params: { id: string }}) {
    //here call api and get freindDetails by using params.id
    
  return (
    <div>
         <FreindDetails
         firstName={dummyFreindData.firstName} 
         lastName={dummyFreindData.lastName} 
         dateOfBirth={dummyFreindData.dateOfBirth} 
         nationality={dummyFreindData.nationality} 
         description={dummyFreindData.description} 
         meetingDates={dummyFreindData.meetingDates} 
         howMet={dummyFreindData.howMet} 
         Images={dummyFreindData.Images}
         profilePic={dummyFreindData.profilePic}
         />
    </div>
  )
}
