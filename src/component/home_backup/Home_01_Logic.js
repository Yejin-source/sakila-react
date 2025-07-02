export default function Home() {
    const x = Math.random();
    const arr = ["켄마", "쿠로", "아카아시"];

    // if, for, forEach

    return (
        <div>
            <h1>Home</h1>
            {/* 조건문: 삼항연산자 사용 */}
            <div>
                {
                    x > 0.6 ? <span>대</span> : x > 0.3 ? <span>중</span> : <span>소</span>
                }
            </div>

            {/* 반복문: map 메서드 사용 */}
            <div>
                {
                    arr.map((name, index) => (<div key={index}>{name}</div>))
                }
            </div>
        </div>
    )
}
