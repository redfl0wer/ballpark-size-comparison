const MLBButton = document.getElementById('league-select--MLB');
const NPBButton = document.getElementById('league-select--NPB');
const KBOButton = document.getElementById('league-select--KBO');
const MLBList = document.querySelector('.ballpark-list--MLB');
const NPBList = document.querySelector('.ballpark-list--NPB');
const KBOList = document.querySelector('.ballpark-list--KBO');

MLBButton.addEventListener('click', function() {
  MLBList.style.display = 'block';
  NPBList.style.display = 'none';
  KBOList.style.display = 'none';
});

NPBButton.addEventListener('click', function() {
  MLBList.style.display = 'none';
  NPBList.style.display = 'block';
  KBOList.style.display = 'none';
});

KBOButton.addEventListener('click', function() {
  MLBList.style.display = 'none';
  NPBList.style.display = 'none';
  KBOList.style.display = 'block';
});