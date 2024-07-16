import React from 'react';

export default function GalCard({ galTitle, galWebImageUrl, galPhotographyLocation }) {
  // 변수는 반드시!! {}로 묶어주고 , 써야함!!
  // galTitle 과 같은 변수는 GalMain 에서 만든 것으로 해당 인자를 들고와서 여기에 도입하기

  return (
    <div className="text-sm bg-white border border-gray-200 rounded-lg shadow">

      <img className="rounded-t-lg" src={galWebImageUrl} alt="" />

      <div className="p-5">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {galTitle}
        </h5>

        <p className="mb-3 font-normal text-gray-700">
          {galPhotographyLocation}
        </p>

      </div>

    </div>
  );
}

