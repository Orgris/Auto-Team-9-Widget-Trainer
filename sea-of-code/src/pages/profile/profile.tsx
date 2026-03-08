import BattleButton from './components/battle-button/battle-button';
import Journal from './components/journal/journal';
import Avatar from './components/avatar/avatar';
import Progress from './components/progress/progress';

const Profile = () => {
  return (
    <section
      id='profile'
      className='flex flex-col items-center gap-4 bg-center min-h-screen p-4  doodle-border 
      w-full                
      sm:w-[95%]           
      md:w-[90%]            
      lg:w-[85%]            
      xl:w-240         
      mx-auto               
      my-4'
    >
      <BattleButton />
      <Avatar />
      <Journal />
      <Progress />
    </section>
  );
};

export default Profile;
