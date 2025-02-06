document.getElementById('findWorker').addEventListener('click', function() {
    const streetName = document.getElementById('streetName').value;
    const resultDiv = document.getElementById('result');
    
    console.log("Street name entered:", streetName); // הודעת דיבוג

    Papa.parse("streets.csv", {
        download: true,
        header: true,
        complete: function(results) {
            console.log("CSV data:", results.data); // הודעת דיבוג
            const data = results.data;
            const worker = data.find(row => row.street.trim() === streetName.trim());
            
            if (worker) {
                resultDiv.textContent = `העובד הסוציאלי עבור ${streetName} הוא ${worker.worker}.`;
            } else {
                resultDiv.textContent = "הרחוב לא נמצא. אנא הזן שם רחוב תקין.";
            }
        },
        error: function(error) {
            console.error("Error parsing CSV:", error); // הודעת דיבוג לשגיאות
        }
    });
});