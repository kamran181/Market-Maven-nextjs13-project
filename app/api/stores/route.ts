import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";


export  async function POST(
    req : Request,
)

{
    try {
      const {userId} = auth();
      const body = await req.json();
      const {name} = body;

      if(!userId){
        return new Response ("Unauthorized", {status :401})
      }

      if(!name){
        return new NextResponse("Name is Required",{status : 400})
      }
      
      const newStore = await prismadb.store.create({
        data:{
           name,
           userId 
        },
      });

      return NextResponse.json(newStore , {status:201})


    } catch (error) {
      console.log(error) ;
      return  new NextResponse('Internal Error',{status:500}) 
    }
}