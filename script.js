document.addEventListener("DOMContentLoaded", function () {
    // Define an array of registration numbers
    const registrationNumbers = [
        ' 23MFI0003',
        ' 23MFI0014',
        ' 23MFI0017',
        ' 23MFI0023',
        ' 23MFI0028',
        ' 23MFI0031',
        ' 23MFI0037',
        ' 23MHI0009',
        ' 23MHI0017',
        ' 23MHI0018',
        ' 23MHI0020',
        ' 23MHI0026',
        ' 23MHI0028',
        ' 23MIC0005',
        ' 23MIC0006',
        ' 23MIC0013',
        ' 23MIC0040',
        ' 23MIC0065',
        ' 23MIC0082',
        ' 23MIC0085',
        ' 23MIC0096',
        ' 23MID0004',
        ' 23MID0009',
        ' 23MID0013',
        ' 23MID0025',
        ' 23MID0033',
        ' 23MID0035',
        ' 23MID0048',
        ' 23MID0053',
        ' 23MID0057',
        ' 23MID0066',
        ' 23MID0068',
        ' 23MID0134',
        ' 23MID0150',
        ' 23MID0155',
        ' 23MID0159',
        ' 23MID0190',
        ' 23MID0251',
        ' 23MID0280',
        ' 23MID0386',
        ' 23MID0400',
        ' 23MID0437',
        ' 23MID0442',
        ' 23MIS0001',
        ' 23MIS0009',
        ' 23MIS0023',
        ' 23MIS0026',
        ' 23MIS0035',
        ' 23MIS0045',
        ' 23MIS0048',
        ' 23MIS0054',
        ' 23MIS0061',
        ' 23MIS0066',
        ' 23MIS0071',
        ' 23MIS0072',
        ' 23MIS0108',
        ' 23MIS0138',
        ' 23MIS0140',
        ' 23MIS0170',
        ' 23MIS0197',
        ' 23MIS0198',
        ' 23MIS0241',
        ' 23MIS0289',
        ' 23MIS0342',
        ' 23MIS0636',
        ' 23MIS0638',
        ' 23MIS0679',
        ' 23MIS0681',
        ' 23MIS0683',
        ' 23MIS0684',
        ' 23MIS0688',
        ' 23MIY0034',
        ' 23MIY0042',
        ' 23MIY0060',
        ' 23MIY0080',
        ' 23MMI0002',
        ' 23MMI0006',
        ' 23MMI0008',
        ' 23MMI0009',
        ' 23MPI0001',
        ' 23MPI0005',
        ' 23MPI0013',
        ' 23MPI0021',
        ' 23MPI0024',
        ' 23MPI0026',
        ' 23MSI0014',
        ' 23MSI0037',
        ' 23MSI0039',
        ' 23MSI0049',
        ' 23MSI0055',
        ' 23MSI0058',
        ' 23MSI0062',
        ' 23MSI0069',
        ' 23MSI0103',
        ' 23MSI0104',
        ' 23MSI0118',
        ' 23MSI0121',
        ' 23MSI0122',
        ' 23MSI0138',
        ' 23MSI0143',
        ' 23MSI0165',
        ' 23MSI0174',

        // Add the remaining registration numbers here
    ];

    // Function to display a random registration number
    function displayRandomNumber() {
        const regNumberElement = document.getElementById("regNumber");
        const loader = document.querySelector(".loader");
        const alphabet = 'VITSWOCT23';
        let alphabetIndex = 0;
        let charactersToDisplay = 10;

        function showNextCharacters() {
            if (charactersToDisplay > 0) {
                if (alphabetIndex < alphabet.length) {
                    regNumberElement.textContent += alphabet[alphabetIndex];
                    alphabetIndex++;
                    charactersToDisplay--;
                    setTimeout(showNextCharacters, 100); // 0.1 second per character
                } else {
                    // Reset alphabet index and continue displaying characters
                    alphabetIndex = 0;
                    setTimeout(showNextCharacters, 1000); // 1 second delay before next batch
                }
            } else {
                // All characters displayed, now show a random registration number
                const randomIndex = Math.floor(Math.random() * registrationNumbers.length);
                const randomRegNumber = registrationNumbers[randomIndex];
                regNumberElement.textContent = randomRegNumber;

                // Hide the loader after a brief delay
                setTimeout(() => {
                    loader.style.display = "none";
                }, 1000); // 1-second delay before hiding loader
            }
        }

        // Start displaying characters from A-Z
        showNextCharacters();
    }

    // Simulate loading data (you can replace this with your actual data retrieval logic)
    setTimeout(displayRandomNumber, 3000); // Simulate a 3-second data loading delay
});
