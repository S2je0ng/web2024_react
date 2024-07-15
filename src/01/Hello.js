import './Hello.css';
import MyCom from './MyCom';

function Hello() {
    const name = 'PNU';
    return (
        //fragment tag
        <>
            <div className="hellodiv text-slate-700">
               {name}님 안녕하세요!!
            </div>
            <MyCom />
        </>
    );
}

export default Hello;