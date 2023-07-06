function updateTable() {
    var table = document.getElementById("my-table");
    var dropdown = document.getElementById("my-dropdown");
    var selectedOption = dropdown.value;
    
    for (var i = 0; i < table.rows.length; i++) {
      var row = table.rows[i];
      if (row.id === selectedOption) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  }
  
  document.getElementById("my-dropdown").addEventListener("change", updateTable);
  