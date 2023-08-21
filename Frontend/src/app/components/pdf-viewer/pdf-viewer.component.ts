import { Component } from '@angular/core';
// import { pdfmake } from 'student3/node_modules/pdfmake/build/pdfmake';
// import { pdfFonts } from 'student3/node_modules/pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-pdf-viewer',
  template: `
    <button (click)="generatePdf()">Generate PDF</button>
  `,
})
export class PdfViewerComponent {
  constructor() {
    // Load the fonts for pdfmake
    // pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  generatePdf() {
    // Fetch data from the database (replace with your own logic)
    const dataFromDatabase = this.fetchDataFromDatabase();

    // Create the document definition for pdfmake
    const documentDefinition = {
      content: [
        { text: 'Data from Database', style: 'header' },
        { text: JSON.stringify(dataFromDatabase) },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
      },
    };

    // Generate the PDF
    // const pdf = pdfMake.createPdf(documentDefinition);

    // Open the PDF in a new window
    // pdf.open();
  }

  fetchDataFromDatabase() {
    // Simulated database fetch (replace with your own logic)
    return {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'johndoe@example.com',
    };
  }



  // function to generate pdf
  // generatePDF() {
  //   // fetch data from database
  //   const dataFromDatabase = this.fetchDataFromDatabase();
  //   // create the document definition for pdfmake
  //   const documentDefinition = {
  //     content: [
  //       { text: 'Data from Database', style: 'header' },
  //       { text: JSON.stringify(dataFromDatabase) },
  //       ],
  //       styles: {
  //         header: {
  //           fontSize: 18,
  //           bold: true,
  //           margin: [0, 0, 0, 10],
  //           },
  //           },
  //           };
  //           // generate the pdf
  //           const pdf = pdfMake.createPdf(documentDefinition);
  //           // open the pdf in a new window
  //           pdf.open();
  //           }
}
