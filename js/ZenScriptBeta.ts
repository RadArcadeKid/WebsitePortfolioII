// Define mental health state options
const mentalHealthStates: string[] = [
    'Anxious',
    'Stressed',
    'Sad',
    'Overwhelmed',
    'Frustrated',
    'Insecure',
    'Burned out',
    'Lonely',
  ];
  
  // Function to generate personalized Zen quotes based on mental health state
  async function generatePersonalizedZenQuote() {
    // Get selected mental health state from the dropdown
    const selectedState = document.getElementById('mental-health-state') as HTMLSelectElement;
    const state = selectedState.value;
  
    // Construct the prompt based on the selected mental health state
    const prompt = `Generate a Zen quote for someone who is feeling ${state}.`;
  
    // Make API request to ChatGPT
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY',
      },
      body: JSON.stringify({
        prompt,
        max_tokens: 30,  // Adjust the number of tokens based on desired quote length
      }),
    });
  
    // Extract the generated quote from the API response
    const data = await response.json();
    const quote = data.choices[0].text.trim();
  
    // Update the quote display on your website
    document.getElementById('quote-display').textContent = quote;
  }
  
  // Populate the mental health state dropdown options
  function populateMentalHealthStates() {
    const dropdown = document.getElementById('mental-health-state') as HTMLSelectElement;
  
    mentalHealthStates.forEach((state) => {
      const option = document.createElement('option');
      option.value = state;
      option.text = state;
      dropdown.appendChild(option);
    });
  }
  
  // Trigger the generation of a personalized Zen quote
  generatePersonalizedZenQuote();
  
  // Populate the mental health state dropdown on page load
  populateMentalHealthStates();
  