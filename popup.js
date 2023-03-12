// Load the dropdown with the names of the people
function loadNames() {
    // Get the dropdown element
    var dropdown = document.getElementById('name-dropdown');
  
    // Send a GET request to the Flask endpoint to fetch the names of the people
    axios.get('http://localhost:5000/names')
      .then(function(response) {
        // Loop through the names and add them to the dropdown
        response.data.names.forEach(function(name) {
          var option = document.createElement('option');
          option.value = name;
          option.text = name;
          dropdown.add(option);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  // Get the age of the selected person
  function getAge() {
    // Get the selected name from the dropdown
    var dropdown = document.getElementById('name-dropdown');
    var name = dropdown.options[dropdown.selectedIndex].value;
  
    // Send a POST request to the Flask endpoint to fetch the age of the selected person
    axios.post('http://localhost:5000/age', {
        name: name
      })
      .then(function(response) {
        // Display the age in the HTML
        var age = response.data.age;
        var ageDiv = document.getElementById('age');
        ageDiv.innerHTML = 'Approximate age: ' + age;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  // Load the dropdown when the popup is opened
  document.addEventListener('DOMContentLoaded', function() {
    loadNames();
  
    // Add an event listener to the dropdown
    var dropdown = document.getElementById('name-dropdown');
    dropdown.addEventListener('change', getAge);
  });
  