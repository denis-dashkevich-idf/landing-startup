// .accordeon 
//   > .accordeon__el
//     > .accordeon__head
//     > .accordeon__body
function initAccordeon(accordeonElem) {

  function handlePanelClick(event) {
    showPanel(event.currentTarget);
  }

  function showPanel(panelHeader) {

    let isActive,
        panel = panelHeader.parentNode,
        panelBody = panelHeader.nextElementSibling,
        expandedPanel = document.querySelector('.accordeon__el.active');

    isActive = (expandedPanel && panel.classList.contains('active')) ? true : false;

    if(expandedPanel) {
      expandedPanel.querySelector('.accordeon__body').style.height = null;
      expandedPanel.classList.remove('active');
    }

    if(panel && !isActive) {
      panelBody.style.height = panelBody.scrollHeight + 'px';
      panel.classList.add('active');
    }

  }

  let allPanelElements = document.querySelectorAll('.accordeon__el');

  for(let i = 0; i < allPanelElements.length; i++) {
    allPanelElements[i].querySelector('.accordeon__head').addEventListener('click', handlePanelClick);
  }

  showPanel(allPanelElements);

}

initAccordeon(document.getElementsByClassName('accordeon'));