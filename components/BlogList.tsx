import urlFor from "@/lib/urlFor";
import category from "@/schemas/category";
import post from "@/schemas/post";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    posts: Post[];
};

function BlogList({posts}: Props) {

  return (
    <div>
        <hr className="border-gray-500 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
            {posts.map(post => (
                <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                <div  className = 'flex flex-col group cursor-pointer'>
                    <div className="relative w-full h-80 drop-shadown-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                        <Image
                            className="object-cover object-left 
                            lg:object-center"
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                        />
                        <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white flex justify-between">
                            <div>
                                <p className="font-bold mt-3 ml-4">{post.title}</p>
                                <p className="ml-4">
                                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                            
                            <div className="flex flex-col md:flex gap-y-2 md:gap-x-2 items-center mb-6">
                                {post.categories.map(category => (
                                    <div key={category._id} className="bg-[#f5f6ff] text-center text-black px-3 py-1 rounded-full text-sm font-semibold mt-6 mr-">
                                        <p>{category.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex-1">
                        <p className="underline text-lg font-bold">{post.title}</p>
                        <p className="line-clamp-2 text-black">{post.description}</p>
                    </div>
                    
                    <p className="mt-5 font-bold flex items-center group-hover:underline">
                        Read Post 

                        <ArrowUpRightIcon className="ml-2 h-4" />
                    </p>
                </div>
                </ClientSideRoute>
            ))}
        </div>
    </div>
  );
}

export default BlogList;
