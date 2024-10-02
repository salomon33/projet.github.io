
        function advancedSearch() {
            // Récupérer les valeurs des champs
            const allWords = document.getElementById('allWords').value;
            const exactPhrase = document.getElementById('exactPhrase').value;
            const anyWords = document.getElementById('anyWords').value;
            const noneWords = document.getElementById('noneWords').value;

            // Construire l'URL de la requête Google
            let query = 'https://www.google.com/search?q=';

            if (allWords) {
                query += allWords.replace(/\s+/g, '+') + '+';
            }
            if (exactPhrase) {
                query += `"${exactPhrase.replace(/\s+/g, '+')}"` + '+';
            }
            if (anyWords) {
                query += `(${anyWords.replace(/\s+/g, '+OR+')})+`;
            }
            if (noneWords) {
                query += `-${noneWords.replace(/\s+/g, '+-')}`;
            }

            // Redirection vers Google avec les paramètres de recherche
            window.location.href = query;
        }

        function imFeelingLucky() {
            const allWords = document.getElementById('allWords').value;
            let query = `https://www.google.com/search?q=${allWords.replace(/\s+/g, '+')}&btnI=I`;

            // Redirection vers le premier résultat de recherche
            window.location.href = query;
        }

