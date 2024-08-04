import UploadButton from "./button";
import cloudinary from 'cloudinary';
import { CloudinaryImage } from "./imageprop";

type searchResult = {
    public_id: string;
}

export default async function Gallery() 
{
    // Search API method 
  const results = await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('public_id','desc')
  .max_results(5)
  .execute() as {resources: searchResult[]};

//  console.log(results);

    return (
        <>
        <section>
            <div className="flex flex-col gap-8">
            <div className="flex justify-between">
            
                <h1>
                    Gallery
                </h1>
               <UploadButton />
</div>
            <div className="grid grid-cols-4 gap-4">   
               {results.resources.map((result)=>(
                <CloudinaryImage
                key={result.public_id}
                width="960"
                height="600"
                src={result.public_id}
                sizes="100vw"
                alt="Description of my image"
              />
               ))}
               </div>
            </div>
        </section>
        </>
    )
}