const InputSearch = () => {
  return (
    <div className=" flex text-[#cccccc] font-semibold text-xl justify-between relative  rounded-2xl py-2 px-5 shadow-[0px_0px_3px_4px_rgba(0,0,0,0.1)] md:w-[350px] w-[200px] hover:shadow-[0px_0_5px_6px_rgba(0,0,0,0.1)] border border-[#e4e4e4]">
      <input
        className="w-full outline-none "
        style={{
          background: 'inherit'
        }}
        placeholder="Search..."
      />
      <div className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-1 hover:contrast-50 ">
        <img
          src={process.env.PUBLIC_URL + '/assets/svg/Search.svg'}
          alt="search"
          className=""
        />
      </div>
    </div>
  );
};

export default InputSearch;
