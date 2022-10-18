import React from 'react'

const Home = () => {
    return (
        <>
            <div className='continer bg-red-300 mx-auto my-2 py-2'>
                <div>
                    <h1 className='text-[50px] text-center text-red-600' >Anime World</h1>
                </div>
                <div className='relative w-16'>
                   <button className='relative bg-red-200 m-2 p-2 shadow-[0px_2px_4px_0px] top-[35px] left-[650px]'> <a href='/About'>About</a></button>
                   <button className='relative bg-red-200 w-60 m-2 p-2 shadow-[0px_2px_4px_0px] top-[35px] left-[560px]'><a href='/Titles'>Enter Titles</a></button>
                </div>

            </div>
        </>
    )
}

export default Home