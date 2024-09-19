import React from "react" 
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const GeneratePdfButton = () => {
    
    const generatePDF = () => {
        const element = document.getElementById("content-to-print");
    
        html2canvas(element).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
    
          // Добавление изображения в PDF
          const imgWidth = 210;
          const pageHeight = pdf.internal.pageSize.height;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;

          let position = 0;
    
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
    
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
    
          pdf.save("resume.pdf");
        });
      };

  
      return <button onClick={generatePDF} className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</button>
    }


export default GeneratePdfButton; 

