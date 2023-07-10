
export default function BasicInfo({firstName,lastName,age,nationality,profilePic}:any) {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:flex">
          <div className="flex-shrink-0 md:ml-10">
            <img className="w-24 h-24 rounded-full object-cover" src={profilePic} alt="Profile Picture" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-2xl font-bold text-[#0a3d62]">{firstName} {lastName}</h1>
            <p className="text-gray-700">Age: {age}</p>
            <p className="text-gray-700">Location: {nationality}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
