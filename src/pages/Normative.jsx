import { Helmet } from 'react-helmet';
import NormativeList from 'components/NormativeList';

export default function Normative() {
  return (
    <>
      <Helmet>
        <title>Normative</title>
      </Helmet>
      <NormativeList />
    </>
  );
}
