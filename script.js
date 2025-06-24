// Global variables
var selectedValue = '';

// Utility function to safely get elements
function safeGetElement(id) {
    try {
        return document.getElementById(id);
    } catch (e) {
        console.log('Element not found: ' + id);
        return null;
    }
}

// Utility function to safely add event listeners
function safeAddEventListener(element, event, handler) {
    if (element && typeof element.addEventListener === 'function') {
        element.addEventListener(event, handler);
    }
}

// Calculate Number of Destiny (score) based on birth date
function calculateDestinyNumber(day, month, year) {
    console.log('Calculating destiny number for:', day, month, year);
    
    // Function to reduce number to single digit
    function reduceToSingleDigit(num) {
        while (num > 9) {
            var sum = 0;
            var numStr = num.toString();
            for (var i = 0; i < numStr.length; i++) {
                sum += parseInt(numStr[i], 10);
            }
            num = sum;
        }
        return num;
    }
    
    // Convert month name to number if needed
    var monthNumber = month;
    if (typeof month === 'string') {
        var months = {
            'Janeiro': 1, 'Fevereiro': 2, 'Março': 3, 'Abril': 4,
            'Maio': 5, 'Junho': 6, 'Julho': 7, 'Agosto': 8,
            'Setembro': 9, 'Outubro': 10, 'Novembro': 11, 'Dezembro': 12
        };
        monthNumber = months[month] || 1;
    }
    
    // Reduce each component to single digit
    var dayReduced = reduceToSingleDigit(parseInt(day, 10));
    var monthReduced = reduceToSingleDigit(monthNumber);
    var yearReduced = reduceToSingleDigit(parseInt(year, 10));
    
    console.log('Reduced values:', dayReduced, monthReduced, yearReduced);
    
    // Sum and reduce final result
    var sum = dayReduced + monthReduced + yearReduced;
    var destinyNumber = reduceToSingleDigit(sum);
    
    console.log('Final destiny number:', destinyNumber);
    return destinyNumber;
}

// Start quiz function
function startQuiz() {
    console.log('Starting quiz...');
    try {
        window.location.href = 'question1.html';
    } catch (e) {
        console.log('Navigation error:', e);
    }
}

// Save answer and navigate to next question
function saveAndNext(questionKey, inputId, nextPage) {
    console.log('Saving ' + questionKey + ' and going to ' + nextPage);
    var value = '';
    
    try {
        // Handle different input types
        if (inputId === 'firstName') {
            var input = safeGetElement(inputId);
            if (input && input.value) {
                value = input.value.trim();
                if (value === '') {
                    alert('Por favor, preencha seu nome.');
                    return;
                }
            }
        } else if (inputId === 'gender' || inputId === 'relationship' || inputId === 'lifeArea') {
            value = selectedValue;
            if (value === '') {
                alert('Por favor, selecione uma opção.');
                return;
            }
        } else if (inputId === 'birthDay' || inputId === 'birthMonth' || inputId === 'birthYear') {
            var select = safeGetElement(inputId);
            if (select && select.value) {
                value = select.value;
                if (value === '') {
                    alert('Por favor, selecione uma opção.');
                    return;
                }
            }
        }
        
        // Save to localStorage with error handling
        try {
            localStorage.setItem(questionKey, value);
            console.log('Saved ' + questionKey + ': ' + value);
        } catch (storageError) {
            console.log('Storage error:', storageError);
        }
        
        // Calculate destiny number after collecting birth year (last piece of birth date)
        if (questionKey === 'question7') {
            try {
                var birthDay = localStorage.getItem('question5') || '1';
                var birthMonth = localStorage.getItem('question6') || 'Janeiro';
                var birthYear = localStorage.getItem('question7') || '2000';
                
                var score = calculateDestinyNumber(birthDay, birthMonth, birthYear);
                localStorage.setItem('score', score.toString());
                console.log('Calculated and saved destiny score:', score);
            } catch (calcError) {
                console.log('Error calculating destiny number:', calcError);
                // Set default score if calculation fails
                localStorage.setItem('score', '7');
            }
        }
        
        // Navigate to next page with delay
        setTimeout(function() {
            try {
                window.location.href = nextPage;
            } catch (navError) {
                console.log('Navigation error:', navError);
            }
        }, 200);
        
    } catch (error) {
        console.log('Error in saveAndNext:', error);
    }
}

// Select option for multiple choice questions
function selectOption(type, value, element) {
    console.log('Selected ' + type + ': ' + value);
    
    try {
        // Remove selected class from all options
        var options = document.querySelectorAll('.option-card');
        for (var i = 0; i < options.length; i++) {
            options[i].classList.remove('selected');
        }
        
        // Add selected class to clicked option
        if (element && element.classList) {
            element.classList.add('selected');
        }
        
        // Store selected value
        selectedValue = value;
        
        // Enable next button
        var nextBtn = document.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        }
    } catch (error) {
        console.log('Error in selectOption:', error);
    }
}

// Simple navigation function
function goToNext(nextPage) {
    console.log('Going to ' + nextPage);
    setTimeout(function() {
        try {
            window.location.href = nextPage;
        } catch (error) {
            console.log('Navigation error:', error);
        }
    }, 200);
}

// Build URL parameters with all collected data
function buildUrlParameters() {
    var params = [];
    
    try {
        // Collect all data from localStorage
        var nome = localStorage.getItem('question1') || '';
        var genero = localStorage.getItem('question2') || '';
        var relacionamento = localStorage.getItem('question3') || '';
        var area = localStorage.getItem('question4') || '';
        var dia = localStorage.getItem('question5') || '';
        var mes = localStorage.getItem('question6') || '';
        var ano = localStorage.getItem('question7') || '';
        var email = localStorage.getItem('userEmail') || '';
        var score = localStorage.getItem('score') || '';
        
        // Add parameters if they exist
        if (nome) params.push('nome=' + encodeURIComponent(nome));
        if (genero) params.push('genero=' + encodeURIComponent(genero));
        if (relacionamento) params.push('relacionamento=' + encodeURIComponent(relacionamento));
        if (area) params.push('area=' + encodeURIComponent(area));
        if (dia) params.push('dia=' + encodeURIComponent(dia));
        if (mes) params.push('mes=' + encodeURIComponent(mes));
        if (ano) params.push('ano=' + encodeURIComponent(ano));
        if (email) params.push('email=' + encodeURIComponent(email));
        if (score) params.push('score=' + encodeURIComponent(score));
        
        console.log('Built URL parameters:', params.join('&'));
        return params.join('&');
    } catch (error) {
        console.log('Error building URL parameters:', error);
        return '';
    }
}

// Save email function with URL parameters
function saveEmail() {
    console.log('Saving email...');
    try {
        var emailInput = safeGetElement('userEmail');
        var email = emailInput && emailInput.value ? emailInput.value.trim() : '';
        
        if (email) {
            try {
                localStorage.setItem('userEmail', email);
                console.log('Saved email: ' + email);
            } catch (storageError) {
                console.log('Storage error:', storageError);
            }
        }
        
        // Navigate to destiny reveal page with parameters
        var urlParams = buildUrlParameters();
        var targetUrl = 'destiny-reveal.html';
        if (urlParams) {
            targetUrl += '?' + urlParams;
        }
        
        setTimeout(function() {
            try {
                window.location.href = targetUrl;
            } catch (error) {
                console.log('Navigation error:', error);
            }
        }, 200);
    } catch (error) {
        console.log('Error in saveEmail:', error);
    }
}

// Skip email function with URL parameters
function skipEmail() {
    console.log('Skipping email...');
    
    var urlParams = buildUrlParameters();
    var targetUrl = 'destiny-reveal.html';
    if (urlParams) {
        targetUrl += '?' + urlParams;
    }
    
    setTimeout(function() {
        try {
            window.location.href = targetUrl;
        } catch (error) {
            console.log('Navigation error:', error);
        }
    }, 200);
}

// Confirmation function for analysis3 with URL parameters
function confirmAndNext() {
    console.log('Confirming and going to destiny reveal...');
    try {
        localStorage.setItem('confirmation', 'sim');
    } catch (storageError) {
        console.log('Storage error:', storageError);
    }
    
    var urlParams = buildUrlParameters();
    var targetUrl = 'destiny-reveal.html';
    if (urlParams) {
        targetUrl += '?' + urlParams;
    }
    
    setTimeout(function() {
        try {
            window.location.href = targetUrl;
        } catch (error) {
            console.log('Navigation error:', error);
        }
    }, 200);
}

// Update analysis pages with stored data
function updateAnalysisData() {
    try {
        // Update userName elements
        var userNameElements = document.querySelectorAll('#userName, #userName2, #userName3');
        var firstName = '';
        try {
            firstName = localStorage.getItem('question1') || 'João';
        } catch (e) {
            firstName = 'João';
        }
        
        for (var i = 0; i < userNameElements.length; i++) {
            if (userNameElements[i]) {
                userNameElements[i].textContent = firstName;
            }
        }
        
        // Update birth info elements
        var birthInfoElements = document.querySelectorAll('#birthInfo, #birthInfo2');
        var birthDay = '';
        var birthMonth = '';
        var birthYear = '';
        
        try {
            birthDay = localStorage.getItem('question5') || '3';
            birthMonth = localStorage.getItem('question6') || 'Março';
            birthYear = localStorage.getItem('question7') || '1931';
        } catch (e) {
            birthDay = '3';
            birthMonth = 'Março';
            birthYear = '1931';
        }
        
        var birthInfo = birthDay + '/' + birthMonth + '/' + birthYear;
        
        for (var j = 0; j < birthInfoElements.length; j++) {
            if (birthInfoElements[j]) {
                birthInfoElements[j].textContent = birthInfo;
            }
        }
        
        // Update user area
        var userAreaElement = safeGetElement('userArea');
        if (userAreaElement) {
            var lifeArea = '';
            try {
                lifeArea = localStorage.getItem('question4') || 'dinheiro';
            } catch (e) {
                lifeArea = 'dinheiro';
            }
            userAreaElement.textContent = lifeArea;
        }
        
        // Display calculated destiny number - THIS IS THE KEY PART
        var destinyNumberElement = safeGetElement('destinyNumber');
        if (destinyNumberElement) {
            var storedScore = '';
            try {
                storedScore = localStorage.getItem('score');
                // If no score is stored yet, try to calculate it now
                if (!storedScore) {
                    var birthDay = localStorage.getItem('question5') || '3';
                    var birthMonth = localStorage.getItem('question6') || 'Março';
                    var birthYear = localStorage.getItem('question7') || '1931';
                    
                    storedScore = calculateDestinyNumber(birthDay, birthMonth, birthYear).toString();
                    localStorage.setItem('score', storedScore);
                    console.log('Calculated destiny number on analysis page:', storedScore);
                }
                
                destinyNumberElement.textContent = storedScore || '7';
                console.log('Displaying destiny number:', storedScore || '7');
            } catch (e) {
                console.log('Error updating destiny number:', e);
                destinyNumberElement.textContent = '7';
            }
        }
    } catch (error) {
        console.log('Error in updateAnalysisData:', error);
    }
}

// Initialize page functionality
function initializePage() {
    console.log('Page loaded, initializing...');
    
    try {
        // Reset selected value for each page
        selectedValue = '';
        
        // Auto-enable next button for text inputs
        var textInput = safeGetElement('firstName');
        if (textInput) {
            safeAddEventListener(textInput, 'input', function() {
                var nextBtn = document.querySelector('.next-btn');
                if (nextBtn) {
                    var isEmpty = this.value.trim() === '';
                    nextBtn.disabled = isEmpty;
                    nextBtn.style.opacity = isEmpty ? '0.5' : '1';
                    nextBtn.style.cursor = isEmpty ? 'not-allowed' : 'pointer';
                }
            });
            
            // Check initial state
            var nextBtn = document.querySelector('.next-btn');
            if (nextBtn) {
                var isEmpty = textInput.value.trim() === '';
                nextBtn.disabled = isEmpty;
                nextBtn.style.opacity = isEmpty ? '0.5' : '1';
                nextBtn.style.cursor = isEmpty ? 'not-allowed' : 'pointer';
            }
        }
        
        // Auto-enable next button for select inputs
        var selectInputs = document.querySelectorAll('.select-input');
        for (var i = 0; i < selectInputs.length; i++) {
            safeAddEventListener(selectInputs[i], 'change', function() {
                var nextBtn = document.querySelector('.next-btn');
                if (nextBtn) {
                    var isEmpty = this.value === '';
                    nextBtn.disabled = isEmpty;
                    nextBtn.style.opacity = isEmpty ? '0.5' : '1';
                    nextBtn.style.cursor = isEmpty ? 'not-allowed' : 'pointer';
                }
            });
            
            // Check initial state
            var nextBtn = document.querySelector('.next-btn');
            if (nextBtn) {
                var isEmpty = selectInputs[i].value === '';
                nextBtn.disabled = isEmpty;
                nextBtn.style.opacity = isEmpty ? '0.5' : '1';
                nextBtn.style.cursor = isEmpty ? 'not-allowed' : 'pointer';
            }
        }
        
        // Auto-enable email button for email input
        var emailInput = safeGetElement('userEmail');
        if (emailInput) {
            var emailBtn = document.querySelector('.email-btn');
            if (emailBtn) {
                emailBtn.disabled = false;
                emailBtn.style.opacity = '1';
                emailBtn.style.cursor = 'pointer';
            }
        }
        
        // Update question 5 title with user's name
        var questionTitle = document.querySelector('.question-title');
        if (questionTitle && questionTitle.textContent.indexOf('João...') !== -1) {
            var firstName = '';
            try {
                firstName = localStorage.getItem('question1') || 'João';
            } catch (e) {
                firstName = 'João';
            }
            questionTitle.textContent = questionTitle.textContent.replace('João', firstName);
        }
        
        // Update analysis pages with user data
        updateAnalysisData();
        
        // Ensure all buttons are properly styled and functional
        var allButtons = document.querySelectorAll('.start-btn, .next-btn, .email-btn, .skip-btn, .cta-button');
        for (var j = 0; j < allButtons.length; j++) {
            var button = allButtons[j];
            // Ensure click events work
            button.style.pointerEvents = 'auto';
            button.style.userSelect = 'none';
            
            // Add hover effects
            safeAddEventListener(button, 'mouseenter', function() {
                if (!this.disabled) {
                    this.style.transform = 'translateY(-5px)';
                    this.style.filter = 'brightness(1.1)';
                }
            });
            
            safeAddEventListener(button, 'mouseleave', function() {
                if (!this.disabled) {
                    this.style.transform = 'translateY(0)';
                    this.style.filter = 'brightness(1)';
                }
            });
        }
        
    } catch (error) {
        console.log('Error in initializePage:', error);
    }
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        
        try {
            var emailBtn = document.querySelector('.email-btn');
            var nextBtn = document.querySelector('.next-btn');
            var startBtn = document.querySelector('.start-btn');
            var ctaBtn = document.querySelector('.cta-button');
            
            if (emailBtn && !emailBtn.disabled) {
                emailBtn.click();
            } else if (nextBtn && !nextBtn.disabled) {
                nextBtn.click();
            } else if (startBtn) {
                startBtn.click();
            } else if (ctaBtn) {
                ctaBtn.click();
            }
        } catch (error) {
            console.log('Error in handleKeyPress:', error);
        }
    }
}

// Debug functions
function viewStoredData() {
    console.log('Stored quiz data:');
    try {
        var keys = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'userEmail', 'score', 'confirmation'];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = localStorage.getItem(key);
            if (value) {
                console.log(key + ': ' + value);
            }
        }
        
        // Also show URL parameters if available
        var urlParams = buildUrlParameters();
        if (urlParams) {
            console.log('URL Parameters: ?' + urlParams);
        }
    } catch (error) {
        console.log('Error viewing stored data:', error);
    }
}

function clearQuizData() {
    try {
        var keys = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'userEmail', 'score', 'confirmation'];
        for (var i = 0; i < keys.length; i++) {
            localStorage.removeItem(keys[i]);
        }
        console.log('Quiz data cleared');
    } catch (error) {
        console.log('Error clearing quiz data:', error);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

// Add keydown event listener
document.addEventListener('keydown', handleKeyPress);
