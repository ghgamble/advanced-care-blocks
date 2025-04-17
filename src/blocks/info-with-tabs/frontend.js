document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.gradient-tabs-block');

  blocks.forEach((block) => {
    const panels = block.querySelectorAll('.info-tab-panel-block');

    // Skip if no panels
    if (!panels.length) return;

    // Create tab container
    const tabContainer = document.createElement('div');
    tabContainer.className = 'tabs-container alignwide';

    panels.forEach((panel, index) => {
      const tab = document.createElement('div');
      tab.className = 'tab';
      tab.dataset.tabIndex = index;

      // Pull label from data-label attribute or fallback
      const label = panel.dataset.label || `Tab ${index + 1}`;
      tab.innerHTML = `<span>${label}</span>`;

      tab.addEventListener('click', () => {
        block.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
        block.querySelectorAll('.info-tab-panel-block').forEach((p) => p.classList.remove('active'));

        tab.classList.add('active');
        panel.classList.add('active');
      });

      if (index === 0) {
        tab.classList.add('active');
        panel.classList.add('active');
      }

      tabContainer.appendChild(tab);
    });

    // Insert tabs before first panel
    const firstPanel = panels[0];
    block.insertBefore(tabContainer, firstPanel);
  });
});
