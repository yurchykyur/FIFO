import BuyInformation from 'components/BuyInformation';
import { Helmet } from 'react-helmet';

export default function Buy() {
  return (
    <>
      <Helmet>
        <title>Buy</title>
      </Helmet>
      <BuyInformation />
    </>
  );
}
