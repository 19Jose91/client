import React from 'react'

const Home = () => {
    return (
        <>
            <div className='continer bg-red-300 h-screen'>
                <div>
                    <h1 className='text-[60px] text-center text-red-600' >Anime World</h1>
                </div>
                <div className='relative w-16'>
                   <button className='relative bg-red-200 m-2 p-2 shadow-[0px_2px_4px_0px] top-[35px] left-[650px] rounded-[20px]'> <a href='/About'>About</a></button>
                   <button className='relative bg-red-200 w-60 m-2 p-2 shadow-[0px_2px_4px_0px] top-[35px] left-[560px] rounded-[20px]'><a href='/Titles'>Enter Titles</a></button>
                </div>

            </div>
        </>
    )
}

export default Home