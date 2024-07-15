import { useEffect, useState, useRef} from 'react'
import GalCard from './GalCard';

export default function GalMain() {
  //상태 변수
// const [tdata, setTdata] = useState([]);
// const [tags, setTags] = useState([]);

// const inRef = useRef();

//   //데이터 가져오기
//   const getData = (kw)=>{
//     console.log(kw)
//     let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?'
//     url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`
//     url = url + '&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A'
//     url = url +`&keyword=${kw}&_type=json`

//     console.log(url)

//     fetch(url)
//     .then(resp => resp.json())
//     .then(data => setData(data.response.body.items.item))
//     }
  
//   //확인
//   const handleClick = (e) => {
//     e.preventDefault();
//     let kw = encodeURI(inRef.current.value)
//     getData(kw) 
//   } 
//   //맨 처음 한번
//   useEffect(()=>{
//     // let kw = encodeURI('부산역');

//     // getData(kw);
//   },[]);

//   useEffect(()=>{
//     let tm = tdata.map(item => <GalCard 
//       galTitle = {item.galTitle}
//       galWebImageUrl ={item.galWebImageUrl}
//       galPhotographyLocation ={item.galPhotographyLocation}
//                                 key={item.galContentId}/>)
//       setTags(tm)
//   }, [tdata])

  return (
    <div className='flex flex-col'>
      {/* GalMain */}
      {/* <GalCard /> */}
      {/* <form className='w-full flex'>
        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder="키워드입력" required' type='text' id='txt1' ref={inRef}> </input>
        <button onClick={handleClick}>확인</button>
      </form> */}
      {/* <div className=' text-black grid grid-cols-1 md:grid-cols-3 gap-4'> 
        {tags}
      </div>
       */}
    </div>
  )
}
