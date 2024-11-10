export const Loader = () => {
  return (
    <div className="duration-500 ease-in-out animate-fadeIn relative flex items-center justify-center pt-3">
      {/* Circular Loader */}
      <div className="z-[1] h-[145px] w-[145px] animate-spin rounded-full border-[17px] border-t-[#8B67DC] border-r-transparent border-b-transparent border-l-transparent"></div>
      {/* Inner Circle */}
      <div className="absolute z-0 h-[145px] w-[145px] rounded-full border-[17px] border-white/50 shadow-custom-circle backdrop-blur-custom-circle"></div>
    </div>
    // <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-[#8B67DC]" />
  )
}
