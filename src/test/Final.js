import { useEffect, useState, useRef } from 'react'
import FinalCard from './FinalCard'

export default function Final() {

    //상태 변수
    const [tdata, setTdata] = useState([]); // tdata는 API로부터 가져온 데이터를 저장하는데 사용
    const [tags, setTags] = useState([]); // tags는 데이터를 렌더링할 준비가 된 컴포넌트 배열을 저장

    const inRef = useRef();

    //데이터 가져오기 함수
    const getData = () => {
        let tmDt = inRef.current.value.replaceAll('-', '') // 입력 받을 값 정리 -> 날짜 입력 받음
        let url = 'https://apis.data.go.kr/6260000/DailyWaterQualityService/cleanWaterQualityDetail?' //? 까지해서 한번 끊고
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}` // `serviceKey= ${내 인증키}` 까지 한번 끊고
        url = url + '&pageNo=1&numOfRows=12' // &부터 시작해서 & 전까지 한번 끊고
        url = url + `&argDate=${tmDt}&resultType=json` // &부서 시작해서 type =json까지 해서 url 저장 /${kw} 는 계속 변하는 입력값이므로 변수로 지정

        console.log(url) // 한번 콘솔에 찍어서 제대로 url 나오는 지 확인하기

        fetch(url) // url 주소로 fetch 해서 API 호출하고 성공하면 
            .then(resp => resp.json()) // 응답을 JSON 형식으로 변환
            .then(data => setTdata(data.cleanWaterQualityDetail.body.items.item)) // 이렇게 반환 setTdata = data . response 안에 body 안에 items 안에 item  의미함 이거는 openAPI 안에서 확인할 것
            // tdata 상태에 데이터를 저장
            // .catch((err) => console.log(err)) // fetch 실패하면 err 찍힘

    }
    //날짜가 선택되었을때
    const handleSelDt = (e) => {
        e.preventDefault();
        console.log(inRef.current.value)
        getData();
    }


    //tdata 가 변경될 때마다 실행. [tdata]가 배열이면서 dependency 값
    useEffect(() => {
        let tm = tdata.map((item) => ( //tdata의 각 항목을 GalCard 컴포넌트로 변환하여 tm 배열에 저장. tdata는 url에서 들고온 데이터
            <FinalCard
                cwGroupNm={item.cwGroupNm}
                inspIemNm1={item.inspIemNm1}
                inspWqbs={item.inspWqbs}
                mjValue={item.mjValue}
                buValue={item.buValue}
                hmValue={item.hmValue}
                dsValue={item.dsValue}
                key={item.cwGroupNm}
            />
        ));

        setTags(tm); //setTags를 사용하여 tags 상태를 업데이트. tags에는 GalCard 컴포넌트의 배열이 저장됨
    }, [tdata]); //dependency 값이 변경될 때마다 {} 실행임




    return (
        <div  >
            <form className="flex justify-end items-center
                      mb-2
                       text-lg">
                <label htmlFor="dt" className="text-sm mr-5 font-bold">
                    날짜선택
                </label>
                <input type='date' id='dt'
                    ref={inRef}
                    onChange={handleSelDt}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 " />
            </form>

            <div className='grid grid-cols-3 gap-4 '> 
            {/* lg:grid-cols-2 gap-4 */}
                {tags}
            </div>
            
        </div>
    )
}
