const MLBButton = document.getElementById('league-select--MLB');
const NPBButton = document.getElementById('league-select--NPB');
const MLBList = document.querySelector('.ballpark-list--MLB');
const NPBList = document.querySelector('.ballpark-list--NPB');

MLBButton.addEventListener('click', function() {
  MLBList.style.display = 'block';
  NPBList.style.display = 'none';
});

NPBButton.addEventListener('click', function() {
  MLBList.style.display = 'none';
  NPBList.style.display = 'block';
});