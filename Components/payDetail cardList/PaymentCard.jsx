import React from 'react'

export default function PaymentCard({prop}) {
  return (
    <div className="bg-[#F7F7F7] grid grid-flow-col grid-cols-6 gap-1 p-2 justify-center rounded-md h-[45px] items-center">
          <div className="truncate col-span-4">
            {prop.name}
          </div>
          <div className="col-span-1">{prop.price}</div>
          <div className="col-span-1">{prop.utility}</div>
        </div>
  )
}
