import GoodsListUI from './GoodsList.presenter';
import { useQuery } from '@apollo/client';
import { FETCH_USEDITEM_OF_THE_BEST, FETCH_USEDITEMS } from './GoodsList.queries';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function GoodsDetailPage() {
    const router = useRouter();
    const { data : bestGoods } = useQuery(FETCH_USEDITEM_OF_THE_BEST);

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const searchRef = useRef<HTMLInputElement>();

    // 상품 리스트 가져오기
    const { data : goodsList, fetchMore } = useQuery(FETCH_USEDITEMS, {
        variables : {
            page : page,
            search : search
        }
    })

    console.log(goodsList)

    const [ scrollLoading, setScrollLoading ] = useState(false);
    const onloadMore = (event) => {
        // 리스트의 전체 크기
        const allHeight = event.target.scrollHeight;

        // 스크롤바 위치
        const scroll = event.target.scrollTop;

        if( (Math.ceil(scroll) + 800) >= allHeight ) {
            if( (goodsList?.fetchUseditems?.length % 10) !== 0) {
                return; 
            }

            if(scrollLoading === false) {
                setScrollLoading(true);

                fetchMore({
                    variables : { 
                        // page : page + 1
                        page : Math.floor(goodsList?.fetchUseditems.length / 10) + 1 
                },
                    updateQuery : (prev, { fetchMoreResult }) => ( {
                        fetchUseditems : [ 
                            ...prev.fetchUseditems, 
                            ...fetchMoreResult.fetchUseditems 
                        ]
                    })
                })

                window.setTimeout( () => {
                    setScrollLoading(false);
                }, 300)
            }
        }
    }

    // 검색 버튼 클릭
    const goodsSearch = (event) => {
        event.preventDefault();
        const searchValue = searchRef.current.value.trim();
        
        if(searchValue.length === 0) {
            if(search.length === 0) {
                searchRef.current.focus();
                return alert('상품명을 입력해주세요.');
            }
        }        
        setPage(1);
        setSearch(searchValue);
    }

    // 오늘 본 상품 가져오기
    let logList = [];
    if(typeof window !== 'undefined') {
        if(window.localStorage.getItem('goodsLog') !== undefined) {
            logList = JSON.parse(window.localStorage.getItem('goodsLog'))
        }
    }

    return(
        <GoodsListUI 
            router={router}
            bestGoods={bestGoods}
            goodsList={goodsList}
            search={search}
            searchRef={searchRef}
            goodsSearch={goodsSearch}
            onloadMore={onloadMore}
            logList={logList}
        />
    )
}