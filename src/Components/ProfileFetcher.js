import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard';

function ProfileFetcher() {
    const [inputText, setInputText] = useState('');
    const [data, setData] = useState();
    const [loading,SetLoading]=useState(false);
    const [responseStatus, setResponseStatus] = useState(true);
    function clickSearch() {
        if (inputText.trim() !== '') {
            fetchData();
        }
        else {
            alert("Input Text Cannot be Empty!")
        }
    }
    async function fetchData() {
        try {
            SetLoading(true);
            let response = await fetch(`https://api.github.com/users/${inputText}`);
            if (response.status === 404) {
                setResponseStatus(false);
                SetLoading(false);
                return;
            }
            let temp = await response.json();
            setData(temp);
            setResponseStatus(true);
            SetLoading(false);
        }
        catch (e) {
            SetLoading(false);
            console.log(e.message);
        }
    }
    useEffect(() => { console.log(data) }, [data])
    return (
        <div>
             <nav className='fixed w-[100%] bg-teal-700 py-1 text-4xl flex justify-around place-items-center'>
                <h1 className='text-white font-semibold'>Git Hub Profile Fetcher</h1>
                <div className='text-xl overflow-hidden rounded-xl w-fit shadow-lg m-5'>
                        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder='Search Github Username...' className='w-72 px-5 py-2 focus:outline-none' />
                        <button onClick={clickSearch} className='bg-blue-400 text-white px-4 py-2 hover:bg-blue-300 active:bg-blue-400 duration-300'>Search</button>
                    </div>
            </nav>
            <div className='flex flex-col gap-5 bg-[#daeef4] pt-28 h-lvh'>
                {!data || data===null?<h1 className='text-3xl text-center mt-[15%] font-semibold'>Search Git-Hub Profile...</h1>:""}
                <div className='flex justify-center'>
                </div>
                {(loading)?<p className='text-5xl font-mono absolute h-lvh text-center bg-white z-10 w-[100%]  place-content-center'>Loading...</p>:null}
                {(!responseStatus) ? <p className='text-4xl font-mono text-center mt-[10%]'>User Not Found!</p> : (data != null) ? <ProfileCard parentData={data}></ProfileCard> : null}
            </div>
        </div>
    )
}

export default ProfileFetcher
