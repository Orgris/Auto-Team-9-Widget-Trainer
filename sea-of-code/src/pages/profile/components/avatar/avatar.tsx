import { useState, type JSX } from 'react';
import { defaultAvatar, ranks } from '../../../../constants/images';

const Avatar = (): JSX.Element => {
  const [image, setImage] = useState<string>(defaultAvatar);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const image = e.target.files?.[0].name;
    setImage(image || defaultAvatar);
  };

  return (
    <div className='w-full doodle-border'>
      <div className='flex items-center'>
        <img src='./profile-images/personal.png' alt='personal' className='w-28 h-20 bg-cover' />
        <h1 className='sm:text-4xl text-xl py-4'>Личное дело</h1>
      </div>
      <div className='flex justify-around sm:gap-6 gap-2  doodle-border text-[--color-text] sm:p-4'>
        <div className='flex flex-col items-center'>
          <img src={image} alt='avatar' className='sm:w-64 sm:h-82 w-36 h-64 rounded-xl' />
          <label
            htmlFor='photo-upload'
            className='cursor-pointer doodle-border w-full text-center sm:text-2xl'
          >
            Загрузить фото
          </label>
          <input
            id='photo-upload'
            type='file'
            accept='image/'
            className='hidden'
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col sm:gap-4 gap-2 py-4 text-2xl '>
          <h1 className='text-center sm:text-5xl text-3xl'>Никнейм</h1>
          <div className='flex sm:flex-row flex-col gap-2'>
            <p className='sm:text-4xl'>Звание: </p>
            <p className='md:text-4xl text-xl'>{ranks.unga.name}</p>
          </div>
          <div className='flex items-center sm:gap-4 gap-2'>
            <p className='sm:text-4xl'>Ранг:</p>
            <img
              src='./profile-images/unga.png'
              alt='admiral'
              className='sm:w-20 sm:h-16 w-14 h-12'
            />
          </div>
          <div className='flex items-center'>
            <p className='sm:text-4xl'>Клан:</p>
            <img
              src='./profile-images/сode_сlan.png'
              alt='unga'
              className='sm:w-22 sm:h-18 w-14 h-12'
            />
          </div>
          <div className='flex md:flex-row flex-col items-center md:gap-4 gap-0'>
            <p className='sm:text-4xl'>До звания</p>
            <progress className='sm:text-2xl text-sm' value='50' max='100'></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
