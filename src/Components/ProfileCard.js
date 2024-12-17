import React from 'react'
import { TfiNewWindow } from "react-icons/tfi";
function ProfileCard({ parentData }) {

    return (
        <div className='flex flex-col justify-center place-items-center' >
            <div className='bg-[rgb(0,0,0,0.3)] p-10 rounded-3xl' style={{ boxShadow: "2px 4px 20px rgb(0,0,0,0.3" }}>
                <div className=' w-fit p-10 px-16 rounded-3xl flex flex-col justify-center place-items-center text-xl gap-5 font-thin bg-white' style={{ boxShadow: "2px 4px 20px grey" }}>
                    <h1 className='text-2xl font-semibold'>Username : {parentData.login}</h1>
                    <div className='overflow-hidden rounded-full'>
                        <img src={parentData.avatar_url} alt="Profile-pic" className='h-60' />
                    </div>
                    <h1 className='text-2xl'>Name : {parentData.name}</h1>
                    <h2>Git Hub Repos : {parentData.public_repos}</h2>
                    <h2>User Joined On : {parentData.created_at.slice(0, 10)}</h2>
                    <a href={parentData.html_url} target='_blank' rel="noreferrer noopener"><button className='flex justify-center place-items-center gap-2 hover:shadow-lg px-4 py-2 rounded-xl drop-shadow-2xl text-blue-500 hover:text-blue-700 duration-300' >Visit Profile <TfiNewWindow></TfiNewWindow></button></a>
                </div>
            </div>
        </div>

    )
}

export default ProfileCard
