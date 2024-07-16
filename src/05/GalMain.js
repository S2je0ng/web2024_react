import { useEffect, useState, useRef } from 'react' // hook 정의
import GalCard from './GalCard.js';

export default function GalMain() {

  //상태 변수
  const [tdata, setTdata] = useState([]); // tdata는 API로부터 가져온 데이터를 저장하는데 사용
  const [tags, setTags] = useState([]); // tags는 데이터를 렌더링할 준비가 된 컴포넌트 배열을 저장

  const inRef = useRef();




  //데이터 가져오기 함수
  const getData = (kw) => { //kw 는 url 주소중 바뀌는 거 예를 들면 서울야경여행, 20240717 같은 거 //kw 인자를 받으면 이런 함수 실행됨
    console.log(kw)
    let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?' //? 까지해서 한번 끊고
    url = url + `serviceKey=${process.env.REACT_APP_API_KEY}` // `serviceKey= ${내 인증키}` 까지 한번 끊고
    url = url + '&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A' // &부터 시작해서 & 전까지 한번 끊고
    url = url + `&keyword=${kw}&_type=json` // &부서 시작해서 type =json까지 해서 url 저장 /${kw} 는 계속 변하는 입력값이므로 변수로 지정

    console.log(url) // 한번 콘솔에 찍어서 제대로 url 나오는 지 확인하기

    fetch(url) // url 주소로 fetch 해서 API 호출하고 성공하면 
      .then(resp => resp.json()) // 응답을 JSON 형식으로 변환
      .then(data => setTdata(data.response.body.items.item)) // 이렇게 반환 setTdata = data . response 안에 body 안에 items 안에 item  의미함 이거는 openAPI 안에서 확인할 것
                    // tdata 상태에 데이터를 저장
      .catch((err) => console.log(err)); // fetch 실패하면 err 찍힘
  }




  //확인 함수
  const handleClick = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지가 새로고침 되는 것을 방지
    let kw = encodeURI(inRef.current.value) //kw를 한글로 번역해주는 코드. 이거는 encode 해서 쓰라고 했기에 써야함 //여기서 useRef() 사용한 이유는 번역된거는 화면에 띄어줄 필요 없기 때문임
    getData(kw) //getData() 호출하여 데이터 가져오는 화면

    console.log(inRef.current.value);
  }




//tdata 가 변경될 때마다 실행. [tdata]가 배열이면서 dependency 값
  useEffect(() => {
    let tm = tdata.map((item) => ( //tdata의 각 항목을 GalCard 컴포넌트로 변환하여 tm 배열에 저장. tdata는 url에서 들고온 데이터
      <GalCard
        galTitle={item.galTitle}
        galWebImageUrl={item.galWebImageUrl}
        galPhotographyLocation={item.galPhotographyLocation}
        key={item.galContentId}
      />
    ));

    setTags(tm); //setTags를 사용하여 tags 상태를 업데이트. tags에는 GalCard 컴포넌트의 배열이 저장됨
  }, [tdata]); //dependency 값이 변경될 때마다 {} 실행임




// return문은 컴포넌트가 렌더링할 JSX 정의
  return ( 
    //div 요소는 컴포넌트의 기본 컨테이너. Flexbox 레이아웃과 텍스트 색상을 설정
    <div className='flex flex-col text-black'>
      {/* GalMain */}
      
      {/* form 요소는 입력 필드와 버튼을 포함, 전체 너비와 Flexbox 레이아웃을 설정 */}
      <form className='w-full flex'>

        {/* input 요소는 사용자가 키워드를 입력할 수 있는 필드 */}
        {/* ref={inRef}는 useRef를 통해 이 요소에 접근함 */}
        <input

          type='text' id='txt1'
          ref={inRef}
          className=' border border-gray-300 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500' 
          placeholder="키워드입력" />
        
        {/* button 요소는 클릭 시 handleClick 함수를 호출 */}
        <button onClick={handleClick}>확인</button>
      </form>
      
      {/* div 요소는 tags 배열에 저장된 GalCard 컴포넌트를 렌더링 */}
      <div className='w-full flex flex-wrap'>
        {tags}
      </div>

    </div>
  )
}
