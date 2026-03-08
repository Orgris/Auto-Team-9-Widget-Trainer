import { Link } from 'react-router';

const BattleButton = () => {
  return (
    <Link
      to={'/game'}
      className='text-3xl text-[--color-text] px-8 py-2 border-2 doodle-border rounded-xs cursor-pointer mx-auto hover:animate-pulse hover:text-amber-500 transition-colors'
    >
      Battle
    </Link>
  );
};

export default BattleButton;
