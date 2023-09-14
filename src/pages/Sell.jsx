import SellInformation from 'components/SellInformation';
import { Helmet } from 'react-helmet';

export default function Sell() {
  return (
    <>
      <Helmet>
        <title>Sell</title>
      </Helmet>
      <SellInformation />
    </>
  );
}
