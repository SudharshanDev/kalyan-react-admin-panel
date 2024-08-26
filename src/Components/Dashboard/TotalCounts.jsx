import React from 'react'
import Card from "../../Common/Elements/Cards";
const TotalCounts = () => {
  return (
    <>
       <Card className={"mb-8"}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 rounded-[4px] bg-gradient-to-r from-yellow-500 to-amber-600 text-white">
          <div className="text-3xl font-bold">500</div>
          <div className="text-md">Total Users</div>
        </div>

        <div className="p-6 rounded-[4px] bg-gradient-to-r from-blue-400 to-cyan-500 text-white">
          <div className="text-3xl font-bold">150</div>
          <div className="text-sm">Total Orders</div>
        </div>

        <div className="p-6 rounded-[4px] bg-gradient-to-r from-red-400 to-pink-500 text-white">
          <div className="text-3xl font-bold">75</div>
          <div className="text-sm">Total Todays Order</div>
        </div>

        <div className="p-6 rounded-[4px] bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <div className="text-3xl font-bold">300</div>
          <div className="text-sm">Total Products</div>
        </div>
        <div className="p-6 rounded-[4px] bg-gradient-to-r from-teal-400 to-green-500 text-white">
          <div className="text-3xl font-bold">950</div>
          <div className="text-sm">Total Sales</div>
        </div>
        <div className="p-6 rounded-[4px] bg-gradient-to-r from-gray-400 to-blue-500 text-white">
          <div className="text-3xl font-bold">25</div>
          <div className="text-sm">Total Banner </div>
        </div>
        <div className="p-6 rounded-[4px] bg-gradient-to-r from-pink-400 to-purple-500 text-white">
          <div className="text-3xl font-bold">85%</div>
          <div className="text-sm">Total Customer Satisfaction</div>
        </div>
        <div className="p-6 rounded-[4px] bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
          <div className="text-3xl font-bold">120</div>
          <div className="text-sm">Total Blogs</div>
        </div>
        <div className="p-6 rounded-[4px] bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
          <div className="text-3xl font-bold">120</div>
          <div className="text-sm">Total Product Enquiry</div>
        </div>
        <div className="p-6 rounded-[4px] bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
          <div className="text-3xl font-bold">120</div>
          <div className="text-sm">Total Careers Enquiry</div>
        </div>
        <div className="p-6 rounded-[4px] bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
          <div className="text-3xl font-bold">120</div>
          <div className="text-sm">Total Contact Enquiry</div>
        </div>
    

        <div className="p-6 rounded-[4px] bg-gradient-to-r from-gray-400 to-blue-500 text-white">
          <div className="text-3xl font-bold">25</div>
          <div className="text-sm">Total Newsletter Subscribes</div>
        </div>

   
      </div>

    </Card> 
    </>
  )
}

export default TotalCounts
