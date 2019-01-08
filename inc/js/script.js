var select = document.createElement("select");
var nav = document.getElementsByTagName("nav");

nav[0].appendChild(select);

// Create default option "Go to..."
var emptyOption = document.createElement("option");
emptyOption.selected = "selected";
emptyOption.value = "";
emptyOption.text = "Navigation";

select.appendChild(emptyOption);

// Populate dropdown with menu items
var navItems = [].slice.call(nav[0].getElementsByTagName("a"));

navItems.forEach(function(item) {
  var option = document.createElement("option");
  option.value = item.href;
  option.text = item.innerText;

  select.appendChild(option);
});

function navigate(item) {
  var location = [].slice.call(select)[item.target.selectedIndex].value;
  if (location != "") {
    document.location = location;
    select.options[0].selected = true;
  }
}
select.onchange = navigate;
