import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import IconText from "./IconText";
import { ImDownload2, ImSpinner2 } from "react-icons/im";

interface DownloadLinkProps {
  elementRef: any;
}

const DownloadLink: React.FunctionComponent<DownloadLinkProps> = ({
  elementRef,
}) => {
  const [creating, setCreating] = useState(false);

  const handleClick = () => {
    // avoids blank space on top
    setCreating(true);

    window.scrollTo(0, 0);

    if (!creating) {
      html2canvas(elementRef.current as HTMLElement, {
        scale: 4,
      }).then(function (canvas) {
        const doc = new jsPDF("portrait", "mm", "a4");
        doc.addImage(canvas, "jpeg", 0, 0, 210, 297);
        doc.save("cv.pdf");

        setCreating(false);
      });
    }
  };

  const creatingSpinner = (
    <IconText icon={<ImSpinner2 className="animate-spin" />}>
      Creating PDF
    </IconText>
  );

  const downloadLink = (
    <div className="cursor-pointer underline" onClick={handleClick}>
      <IconText icon={<ImDownload2 />}>Download</IconText>
    </div>
  );

  return (
    <div className="text-sm text-gray-800 mb-4">
      {creating ? creatingSpinner : downloadLink}
    </div>
  );
};

export default DownloadLink;
