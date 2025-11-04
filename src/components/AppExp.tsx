import Greeting from './experiments/Greeting';
import Counter from './experiments/Counter';
import PropsStateDemo from './experiments/PropsStateDemo';
import UserCard from './experiments/UserCard';
import UserProfile from './UserProfile';
import SocialApp from './social/SocialApp';
import ReactionCounter from './ReactionCounter/ReactionCounter';
import BookList from './Books/BookList/BookList';
import BookReaction from './Books/BookReactions/BookReactions';

export default function AppExp() {
  return (
    <>
      <h1>🧪 Experimental Zone</h1>
      <Greeting name="Viktor" />
      {/* <Greeting name="Edentata" /> */}
      <Counter initialValue={0} />
      <PropsStateDemo username="Edentata" />
      <UserCard name="Viktor" age={44} />
      <UserProfile
        name="SomeName"
        age={44}
        email="some_name@example.com"
        avatar="https://i.pravatar.cc/150?img=12"
      />

      <SocialApp />
      <ReactionCounter />
      <BookList />
      <BookReaction />
    </>
  );
}
