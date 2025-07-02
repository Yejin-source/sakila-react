export default function Home() {
    
    function show() {
        alert('주의');
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={show}>주의</button>
            <br />
            <button onClick={() => {alert('주의2')}}>주의2</button>
        </div>
    )
}
