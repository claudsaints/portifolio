
function Section({ children }: { children: React.ReactNode }){
    return (
      <div className="flex items-center justify-center h-full sm:h-screen bg-black text-white mt-5 px-4 py-6 sm:px-6 sm:py-8 lg:px-12 lg:py-10">
        {children}
      </div>
    );
  };
  
  export default Section;
  