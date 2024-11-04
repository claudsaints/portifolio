
function Section({ children }: { children: React.ReactNode }){
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        {children}
      </div>
    );
  };
  
  export default Section;
  