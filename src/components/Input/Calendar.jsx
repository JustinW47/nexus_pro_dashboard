const Calendar = () => {
  return (
    <div className=" text-[#cccccc] font-semibold text-xl justify-between relative  rounded-2xl p-2 shadow-[0px_0px_3px_4px_rgba(0,0,0,0.1)] w-fit hover:shadow-[0px_0_5px_6px_rgba(0,0,0,0.1)] inline-block border border-[#e4e4e4]">
      <img
        src={process.env.PUBLIC_URL + '/assets/svg/Calendar.svg'}
        alt="search"
        className="cursor-pointer "
      />
    </div>
  );
};

export default Calendar;
