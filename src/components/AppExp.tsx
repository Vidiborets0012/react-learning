import Greeting from './experiments/Greeting';
import Counter from './experiments/Counter';
import PropsStateDemo from './experiments/PropsStateDemo';
import UserCard from './experiments/UserCard';

export default function AppExp() {
  return (
    <>
      <h1>🧪 Experimental Zone</h1>
      <Greeting name="Viktor" />
      {/* <Greeting name="Edentata" /> */}
      <Counter initialValue={0} />
      <PropsStateDemo username="Edentata" />
      <UserCard name="Viktor" age={44} />
    </>
  );
}
