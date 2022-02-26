import CounterFunction from './../components/function/CounterFunction';
import PageTemplate from './PageTemplate';

const CounterPage = () => {
    return <PageTemplate title={"Counter"}>
        <CounterFunction time={500} increment={5} />
    </PageTemplate>
}

export default CounterPage;