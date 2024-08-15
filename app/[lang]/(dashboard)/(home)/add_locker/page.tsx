import React from 'react'
import BasicInputText from '../../(forms)/input/basic-input-text'
import { Button } from '@/components/ui/button'
 

export default function page() {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center  gap-5 justify-center">
        <div>
            <h1 className="text-[2rem]">Add New Locker</h1>
            </div>
        <div className="w-[60%] flex flex-col gap-5 " >
        <BasicInputText placeholder='Locker Name'/>
        <BasicInputText placeholder='Dealer Id'/>
        <Button color="dark">Submit</Button>
        </div>
         </div>
  )
}
