import Footer from "@/components/shared/Footer/page";
import Navbar from "@/components/shared/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen h-[40rem]">
      {children}
      </div>
      <Footer/>
    </div>
  );
};

export default CommonLayout;