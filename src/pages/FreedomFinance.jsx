import BrokerInformation from 'components/BrokerInformation';
import { Helmet } from 'react-helmet';

export default function FreedomFinance() {
  return (
    <>
      <Helmet>
        <title>Freedom Finance</title>
      </Helmet>
      <BrokerInformation />
    </>
  );
}
