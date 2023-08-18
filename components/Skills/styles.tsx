const styles = {
  root: 'relative md:text-left xl: flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto',
  gridStyle: 'grid grid-cols-4 gap-5',
  gridItemStyle: 'group relative flex cursor-pointer',
  skillItem: 'rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 ' +
             'filter group-hover:grayscale transition duration-300 ease-in-out',
  profContainer: 'absolute rounded-full z-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out ' + 
                 'group-hover:bg-white w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24',
  profWrapper: 'flex items-center justify-center h-full',
  proficiency: 'text-lg md:text-2xl xl:text-3xl font-bold text-black opacity-100%',
}

export default styles