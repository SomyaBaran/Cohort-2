function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#171420] flex items-center justify-center gap-4 z-[9999]">
      {[0, 1, 2, 3].map((delay, index) => (
        <div
          key={index}
          className={`w-2 h-32 bg-white rounded-full animate-rise`}
          style={{ animationDelay: `${delay * 0.2}s` }}
        ></div>
      ))}
    </div>
  );
}

export default Loader;
