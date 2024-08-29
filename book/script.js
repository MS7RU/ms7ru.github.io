const chaptersPerSubject = {
      "A-pact-with-the-sun": 7,
      "Civics": 8,
      "Geography": 6,
      "History": 10,
      "Math": 12,
      "Ruchika": 13,
      "Science": 11,
      "Vasnt": 15
    };

    function populateChapters() {
      const subjectDropdown = document.getElementById("subjectDropdown");
      const chapterDropdown = document.getElementById("chapterDropdown");
      const selectedSubject = subjectDropdown.value;

      chapterDropdown.innerHTML = '<option value="">Select Chapter</option>';
      
      if (selectedSubject) {
        const numChapters = chaptersPerSubject[selectedSubject];
        for (let i = 1; i <= numChapters; i++) {
          const option = document.createElement("option");
          option.value = i;
          option.textContent = `Chapter ${i}`;
          chapterDropdown.appendChild(option);
        }
      }
    }

    function displayPdf() {
      const subjectDropdown = document.getElementById("subjectDropdown");
      const chapterDropdown = document.getElementById("chapterDropdown");
      const selectedSubject = subjectDropdown.value;
      const selectedChapter = chapterDropdown.value;

      if (selectedSubject && selectedChapter) {
        const pdfViewer = document.getElementById("pdfViewer");
        const pdfPath = `./${selectedSubject}/${selectedChapter}.pdf`;
        pdfViewer.src = pdfPath;
      }
    }

    document.getElementById("chapterDropdown").addEventListener("change", displayPdf);
