import { useState } from "react";

export default function Home() {
    // let count = 0;
    const [count, setCount] = useState(0);  
    // 일반변수가 아닌 상태변수
    // 상태변수의 setter가 호출되면 컴포넌트 렌더링됨

    return (
        <div>
            <h1>Home</h1>
            <div>count : {count}</div>

            <button onClick={() => {
                        // count++;
                        setCount(count+1);
                        alert(count);  
                    }}>
                count 1 증가
            </button>
        </div>
    )
}
