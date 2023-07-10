import { freindDetails } from "@/types/freindDetails";
import BasicInfo from "./BasicInfo";
import { DataTable, columns } from "../basic/DataTable";
import DataCard from "../basic/DataDetailCard";
import ImagesSlider from "../basic/ImagesSlider";

export default function FreindDetails(data:freindDetails) {

    const age = (dateOfBirth: Date)=>{
        const today = new Date();
        const birthDate = dateOfBirth;
      
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
      
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
      
        return age;
    }
    let userAge = age(data.dateOfBirth);

  return (
    <div>
        {/* Basic Details will be here */}
        <div>
           <BasicInfo
           firstName={data.firstName}
           lastName={data.lastName}
           age={userAge}
           nationality={data.nationality}
           profilePic={data.profilePic}
            />
        </div>
        {/* Description part */}
        <div className="mx-16 my-7">
            <div className="text-lg font-bold text-[#0a3d62]">Description</div>
            <DataCard data={data.description}/>
            
        </div>
        {/* Meeting Dates */}
        <div className="mx-16">
            
            <div className="text-lg font-bold text-[#0a3d62]">Meeting Dates</div>
            <DataTable columns={columns} data={data.meetingDates}/>
        </div>
        {/* How we Met part */}
        <div className="mx-16 my-7">
            <div className="text-lg font-bold text-[#0a3d62]">How We Met</div>
            <DataCard data={data.howMet}/> 
        </div>
        {/* Images part */}
        <div>
            <div className="mx-16 text-lg font-bold text-[#0a3d62]">Photos</div>
            <ImagesSlider images = {data.Images}/>
        </div>
    </div>
  )
}
