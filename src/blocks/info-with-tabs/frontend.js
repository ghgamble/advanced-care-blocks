document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.gradient-tabs-block');

  blocks.forEach((block) => {
    const panels = block.querySelectorAll('.info-tab-panel-block');
    if (!panels.length) return;

    const tabColor = block.dataset.tabColor || '#007399';
    const activeTabColor = block.dataset.activeTabColor || '#2c944b';

    const tabContainer = document.createElement('div');
    tabContainer.className = 'tabs-container alignwide';
    tabContainer.setAttribute('role', 'tablist');
    tabContainer.setAttribute('aria-label', 'Information Tabs');

    panels.forEach((panel, index) => {
      const tabId = `tab-${block.dataset.blockId || index}`;
      const panelId = `tabpanel-${block.dataset.blockId || index}-${index}`;
      const label = panel.dataset.label || `Tab ${index + 1}`;

      const tab = document.createElement('div');
      tab.className = 'tab';
      tab.id = tabId;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', panelId);
      tab.setAttribute('tabindex', index === 0 ? '0' : '-1');
      tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      tab.innerHTML = `<span>${label}</span>`;
      tab.style.backgroundColor = index === 0 ? activeTabColor : tabColor;

      tab.addEventListener('click', () => {
        updateTabs(index);
        tab.focus();
      });

      tab.addEventListener('keydown', (e) => {
        const tabs = Array.from(tabContainer.querySelectorAll('.tab'));
        let newIndex = index;
        if (e.key === 'ArrowRight') newIndex = (index + 1) % tabs.length;
        if (e.key === 'ArrowLeft') newIndex = (index - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') newIndex = 0;
        if (e.key === 'End') newIndex = tabs.length - 1;

        if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) {
          e.preventDefault();
          tabs[newIndex].click();
        }
      });

      panel.id = panelId;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tabId);
      panel.hidden = true;

      tabContainer.appendChild(tab);
    });

    block.insertBefore(tabContainer, panels[0]);

    function updateTabs(activeIndex) {
      const allTabs = tabContainer.querySelectorAll('.tab');
      const allPanels = block.querySelectorAll('.info-tab-panel-block');

      allTabs.forEach((tab, i) => {
        const selected = i === activeIndex;
        tab.classList.toggle('active', selected);
        tab.setAttribute('aria-selected', selected.toString());
        tab.setAttribute('tabindex', selected ? '0' : '-1');
        tab.style.backgroundColor = selected ? activeTabColor : tabColor;
      });

      allPanels.forEach((panel, i) => {
        panel.classList.toggle('active', i === activeIndex);
        panel.hidden = i !== activeIndex;
      });
    }

    // Load with the first tab active
    updateTabs(1);
  });
});
