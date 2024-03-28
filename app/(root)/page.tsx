"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-model";
import { useEffect } from "react";
import { UserButton } from "@clerk/nextjs";



const SetupPage =()=>{
  const onOpen = useStoreModal((state)=> state.onOpen); 
  const isOpen = useStoreModal((state)=> state.isOpen) 
  
  useEffect(()=>{
      if(!isOpen){
        onOpen();
      }
  },[isOpen,onOpen])
    return (
   <div className="p-4"> 
   <UserButton/>
   <h1>hello</h1>
   
   </div>
    );
  }

  export default SetupPage;
  