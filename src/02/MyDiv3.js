// function MyDiv3(probs) {
function MyDiv3({dd1, dd2, dd3}) { //중괄호 무조건 써야 인식함
    return (
        <div className="flex flex-col justify-start items-center
                        w-4/5 h-4/5 bg-lime-500 text-xl text-lime-50
                        p-5">

            <p className="w-full h-8 text-left p-2 mb-4"> 
                {/* {probs.dd1} > {probs.dd2} > {probs.dd3}   */}
                {dd1} &gt; {dd2} &gt; {dd3}
                </p>
            
        </div>
    );
}

export default MyDiv3;