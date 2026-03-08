const Progress = () => {
  return (
    <div className='doodle-border w-full'>
      <div className='flex items-center gap-4'>
        <img src='./profile-images/achievements.png' className='w-24 h-20' alt='achievements' />
        <p className='sm:text-4xl text-xl'>Достижения</p>
      </div>
      <div className='flex flex-col gap-4 doodle-border px-4 py-2'>
        <div className='flex sm:justify-between'>
          <div className='flex items-center gap-4'>
            <img src='./profile-images/first_battle.png' className='w-18 h-16' alt='first battle' />
            <div>
              <h2 className='sm:text-2xl text-xl'>Первый бой</h2>
              <p className='sm:text-md text-xs'>Одержать победу</p>
            </div>
          </div>
          <div className='flex items-center'>
            <img src='./profile-images/done.png' alt='done' className='sm:w-16 sm:h-16 w-12 h-12' />
          </div>
        </div>
        <div className='flex sm:flex-row flex-col justify-between'>
          <div className='flex items-center gap-4'>
            <img src='./profile-images/sea_wolf.png' className='w-18 h-16' alt='sea wolf' />
            <div>
              <h2 className='sm:text-2xl text-xl'>Морской волк</h2>
              <p className='sm:text-md text-xs'>Одержать 100 побед</p>
            </div>
          </div>
          <div>
            <p>98 / 100</p>
            <progress value='98' max='100'></progress>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col justify-between'>
          <div className='flex items-center gap-4'>
            <img src='./profile-images/sniper.png' className='w-18 h-16' alt='sniper' />
            <div>
              <h2 className='sm:text-2xl text-xl'>Снайпер</h2>
              <p className='sm:text-md text-xs'>Достичь точности 80%</p>
            </div>
          </div>
          <div>
            <p>50 / 100</p>
            <progress value='50' max='100'></progress>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col justify-between'>
          <div className='flex items-center gap-4'>
            <img src='./profile-images/fleet_storm.png' className='w-18 h-16' alt='fleet storm' />
            <div>
              <h2 className='sm:text-2xl text-xl'>Гроза флота</h2>
              <p className='sm:text-md text-xs'>Потопить 100 кораблей</p>
            </div>
          </div>
          <div>
            <p>50 / 100</p>
            <progress value='50' max='100'></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
