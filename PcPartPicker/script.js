const storagePrefix = 'B_';

        // Function to save input values to localStorage
        function saveInput(id) {
            const input = document.getElementById(id);
            if (input.type === 'checkbox') {
                localStorage.setItem(id, input.checked);
            } else {
                localStorage.setItem(storagePrefix + id, input.value);
            }
        }

        // Function to load input values from localStorage
        function loadInput(id) {
            const input = document.getElementById(id);
            const savedValue = localStorage.getItem(storagePrefix + id);
            if (input.type === 'checkbox') {
                input.checked = savedValue === 'true';
            } else {
                input.value = savedValue || '';
            }
        }

        // Function to calculate and update the total price
        function updateTotalPrice() {
            const priceIds = [
                'processor-price', 'graphics-price', 'memory-price',
                'storage-price', 'motherboard-price', "case-price",
                "cpucooler-price", "powersupply-price", "casecooler-price",
            ];
            let total = 0;
            priceIds.forEach(id => {
                const value = parseFloat(document.getElementById(id).value) || 0;
                total += value;
            });
            document.getElementById('total-price').innerText = total.toFixed(2);
        }

        // Function to copy the table content to the clipboard
        function copyTable() {
            const table = document.getElementById('component-table');
            const range = document.createRange();
            range.selectNode(table);
            window.getSelection().removeAllRanges(); // Clear current selection
            window.getSelection().addRange(range); // Select the table
            document.execCommand('copy'); // Copy to clipboard
            window.getSelection().removeAllRanges(); // Deselect
            alert('Table copied to clipboard!');
        }

        // List of input IDs
        const inputIds = [
            'processor-component', 'processor-link', 'processor-price',
            'graphics-component', 'graphics-link', 'graphics-price',
            'memory-component', 'memory-link', 'memory-price',
            'storage-ssd', 'storage-component', 'storage-link', 'storage-price',
            'motherboard-component', 'motherboard-link', 'motherboard-price',
            "case-price", "case-component", "case-link", "cpucooler-price",
            "cpucooler-component", "cpucooler-link", "powersupply-price",
            "powersupply-component", "powersupply-link", "casecooler-price",
            "casecooler-component", "casecooler-link", "storage-ssd"
        ];

        // Load saved values on page load
        window.onload = function() {
            inputIds.forEach(loadInput);
            updateTotalPrice();
        };

        // Save values and update total price on input change
        inputIds.forEach(id => {
            document.getElementById(id).addEventListener('input', () => {
                saveInput(id);
                updateTotalPrice();
            });
            document.getElementById(id).addEventListener('change', () => {
                saveInput(id);
                updateTotalPrice();
            });
        });

        // Add event listener to the copy button
        document.getElementById('copy-button').addEventListener('click', copyTable);