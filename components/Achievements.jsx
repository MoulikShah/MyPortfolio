import { achievements } from '../constants';
import { SectionWrapper } from '../hoc';
import Image from 'next/image';

const AchievementCard = ({ title, description, icon, website_url }) => (
  <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:bg-[#1d1836] transition-colors duration-300'>
    <div className='flex items-center gap-4'>
      <Image
        src={icon}
        alt={title}
        width={500}
        height={300}
        className="w-12 h-12 object-contain rounded-2xl"
      />
      <h3 className='text-white text-[20px] font-bold'>
        {website_url ? (
          <a 
            href={website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors duration-200"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
    </div>
    <p className='mt-4 text-white/90 text-[14px]'>{description}</p>
  </div>
);

const Achievements = () => {
  return (
    <>
      <div className='mt-20'>
        <h2 className='dark:text-ctnPrimaryDark text-ctnPrimaryLight font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Achievements.
        </h2>
        <p className='sm:text-[18px] text-[14px] dark:text-ctnSecondaryDark text-ctnSecondaryLight uppercase tracking-wider'>
          Recognition & Awards
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {achievements.map((achievement, index) => (
          <AchievementCard 
            key={`achievement-${index}`}
            {...achievement}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");