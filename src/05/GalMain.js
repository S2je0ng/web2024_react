import { useEffect, useState, useRef } from 'react'
import GalCard from './GalCard.js';

export default function GalMain() {
  //상태 변수
  const [tdata, setTdata] = useState([]);
  const [tags, setTags] = useState([]);

  const inRef = useRef();

  //데이터 가져오기
  const getData = (kw) => {
    console.log(kw)
    let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?'
    url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`
    url = url + '&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A'
    url = url + `&keyword=${kw}&_type=json`

    console.log(url)

    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.response.body.items.item))
  }

  //확인
  const handleClick = (e) => {
    e.preventDefault();
    let kw = encodeURI(inRef.current.value)
    getData(kw)
  }

  useEffect(() => {
    let tm = tdata.map((item) => (
      <GalCard
        galTitle={item.galTitle}
        galWebImageUrl={item.galWebImageUrl}
        galPhotographyLocation={item.galPhotographyLocation}
        key={item.galContentId}
      />
    ));
    setTags(tm);
  }, [tdata]);


  return (
    <div className='flex flex-col text-black'>
      GalMain
      <form className='w-full flex'>
        <input
          type='text' id='txt1' ref={inRef} />
        <button onClick={handleClick}>확인</button>
      </form>
      <div className='w-full flex flex-wrap'>
        {tags}
      </div>

    </div>
  )
}
