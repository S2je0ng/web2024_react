import { CgEnter } from 'react-icons/cg';
import clock from './colock.png';
import './MyCom.css';
import { useState, useEffect } from 'react';

function MyCom () {
    //상태 변수 서언
    const [tm, setTm] = useState(new Date());
    const mycomDiv = {
        width : '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

    //컴포넌트 생성시 한번 실행
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTm(new Date());
        },1000);

        
        // useEffect는 컴포넌트가 언마운트되거나 
        // 의존성 배열의 값이 변경될 때 실행되는 정리 함수를 반환
        return(()=>{
            clearInterval(timer)
        });
    },[]);

// setInterval 함수는 JavaScript에서 일정한 시간 간격으로 코드를 반복 실행
// setInterval 함수는 두 개의 인자를 받음
// 첫 번째 인자는 실행할 콜백 함수, 두 번째 인자는 반복 실행할 시간 간격(밀리초 단위)

    return ( 
    <div style={mycomDiv}>
        <p className='mycomP'>
            <img src={clock} alt='시계' style={{'width':'400px'}} />
        </p>
        <p className='mycomP text-white bg-blue-600 text-lg font-bold'>
            현재 시간 : {tm.toLocaleTimeString()}
        </p>
    </div>
    );
}

export default MyCom;