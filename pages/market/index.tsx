import MarketMain from '../../src/components/units/market/GoodsList.container'
import withAuth from '../../src/components/commons/hocs/widthAtuth'

const MarketMainUI = () => {
    return <MarketMain />;
}

// export default MarketMainUI;
export default withAuth(MarketMainUI);

// export default function MarketMainUI() {
//     return <MarketMain />
// }