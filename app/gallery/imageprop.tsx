"use client";

 
import { CldImage } from "next-cloudinary";

export function CloudinaryImage(props: any){
    return <CldImage {...props} />;
}


// export function CloudinaryImage({ public_id, ...props}: {public_id:string}){
//     return <CldImage 
//         width="500"
//         height="500"
//         {...props}
//         src={public_id}
//         sizes="100vw"
//         alt="image"
//     />;
// }


