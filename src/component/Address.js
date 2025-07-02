import { useEffect, useState } from 'react'

export default function Address() {
    const [addressList, setAddressList] = useState([]); 
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const blockSize = 10;

    // API 통신 "[GET] http://localhost/address"
    useEffect(function(){
        fetch("http://localhost/addressList/"+pageNumber)
        .then(function(res) {return res.json();})
        .then(function(data) {
            setAddressList(data.content); 
            setTotalPages(data.totalPages); 
        });
    }, [pageNumber]);

    const currentBlock = Math.floor((pageNumber - 1) / blockSize);
    const startPage = currentBlock * blockSize + 1;
    const endPage = Math.min(startPage + blockSize - 1, totalPages);

    return (
        <div>
            <h1>Address</h1>
            <table border="1">
                <tr>
                    <th>address id</th>
                    <th>address</th>    
                </tr>    
                {
                    addressList.map((a) => (
                        <tr key={a.addressId}>
                            <td>{a.addressId}</td>
                            <td>{a.address}</td>
                        </tr>
                    ))
                }
            </table>    
            <div>
                <button
                    onClick={() => {setPageNumber(startPage - 1)}}  // 현재 블록의 시작 페이지보다 하나 앞 페이지로 이동
                    disabled={startPage == 1}
                >
                    이전
                </button>

                {/* 페이지 번호 버튼 생성 (startPage ~ endPage) */}
                {Array.from(
                    { length: endPage - startPage + 1 },  // 필요한 페이지 버튼 계산
                    (_, i) => startPage + i               // 인덱스를 더해서 실제 페이지 번호로 변환
                ).map(num => (

                    <button
                        key={num}
                        onClick={() => {setPageNumber(num)}}  // 해당 페이지로 이동
                        disabled={num == pageNumber}          // 현재 페이지면 비활성화
                    >
                        {num}
                    </button>
                ))}

                <button
                    onClick={() => {setPageNumber(endPage + 1)}}  // 현재 블록의 끝 페이지보다 하나 큰 페이지로 이동
                    disabled={endPage == totalPages}
                >
                    다음
                </button>
            </div>
        </div>
    )
}
