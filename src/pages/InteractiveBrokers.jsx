import BrokerInformation from 'components/BrokerInformation';
import { Helmet } from 'react-helmet';

export default function InteractiveBrokers() {
  return (
    <>
      <Helmet>
        <title>Interactive Brokers</title>
      </Helmet>
      <BrokerInformation />
    </>
  );
}
