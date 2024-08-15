"use client";
import { Input } from "@/components/ui/input";
import { FC } from "react";

type BasceInputProps = {
   placeholder:string 
   
}


const BasicInputText:FC<BasceInputProps> = ({placeholder}) => {
  return (
    <Input type="text" placeholder={placeholder}/>
  );
};

export default BasicInputText;
