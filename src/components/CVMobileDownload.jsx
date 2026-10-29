import { Download } from "lucide-react";
import { NavLink } from "react-router-dom";

function CVMobileDownload() {
  return (
    <NavLink
      target="_blank"
      to={
        "https://drive.google.com/file/d/1Xf3ox8r1AuIM99uPa4gYC-9b1t9MCXSS/view?usp=sharing"
      }
      className="fixed flex items-center justify-center md:hidden bottom-16 right-5 bg-red-600 w-12 h-12 rounded-full hover:cursor-pointer"
    >
      <Download />
    </NavLink>
  );
}

export default CVMobileDownload;
