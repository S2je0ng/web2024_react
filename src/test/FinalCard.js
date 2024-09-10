import React from 'react'
// import { useState, useEffect } from "react";

export default function FinalCard({ cwGroupNm, inspIemNm1, inspWqbs, mjValue, buValue, hmValue, dsValue }) {


    return (

        <div className="flex rounded-lg
                    border border-slate-300
                    p-3 m-2 ">

            <div className="">

                <p className="text-xl font-bold text-gray-600">
                    {cwGroupNm} {/*구분*/}
                </p>

                <p className="text-xl font-bold text-green-700">
                    {inspIemNm1} ({inspWqbs}) {/*시험항목 (기준)*/}
                </p>

                <div className='grid grid-cols-2 '> {/*결과*/}
                    <div className='flex justify-center align-middle bg-blue-600 rounded-lg m-2 p-3'>
                        <p className="text-xl text-white p-3"> 명장검사 </p>
                        <p className='text-xl font-bold text-yellow-400 p-3'> {mjValue} </p>
                    </div>

                    <div className='flex justify-center align-middle bg-blue-600 rounded-lg m-2 p-3'>
                        <p className="text-xl text-white p-3">범어사검사 </p>
                        <p className='text-xl font-bold text-yellow-400 p-3'> {buValue} </p>
                    </div>

                    <div className='flex justify-center align-middle bg-blue-600 rounded-lg m-2 p-3'>
                        <p className="text-xl text-white p-3">화명검사 </p>
                        <p className='text-xl font-bold text-yellow-400 p-3'> {hmValue} </p>
                    </div>

                    <div className='flex justify-center align-middle bg-blue-600 rounded-lg m-2 p-3'>
                        <p className="text-xl text-white p-3">덕산검사 </p>
                        <p className='text-xl font-bold text-yellow-400 p-3'> {dsValue} </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
