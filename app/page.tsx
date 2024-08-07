"use client"

import Image from "next/image";
import { CldUploadButton } from 'next-cloudinary';

import { CldImage } from 'next-cloudinary';
import { useState } from "react";
 
// We get a json with event and info
export type UploadImageResult = 
{
    info:{
      public_id:string
    },
    event: "success"
}
export default function Home() {
 
  const [image, setImage] = useState("");
   
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CldUploadButton onUpload={(result:UploadImageResult) => {
           setImage(result.info.public_id);
        }}
        uploadPreset="ljfpa9nz" />
  
    
    </main>
  );
}


