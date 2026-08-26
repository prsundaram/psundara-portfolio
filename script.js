document.addEventListener('DOMContentLoaded', () => {

  /* ---- footer year ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- live "experience" counter in the ID card ---- */
  const uptimeEl = document.getElementById('uptime');
  if (uptimeEl) {
    const start = new Date('2013-07-01T00:00:00');
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    if (months < 0) { years -= 1; months += 12; }
    uptimeEl.textContent = `${years}y ${months}m`;
  }

  /* ---- career topology: click a node, open its trace ---- */
  const nodes = Array.from(document.querySelectorAll('.node'));
  const traces = Array.from(document.querySelectorAll('.trace'));

  function activate(index, { focus = false } = {}) {
    nodes.forEach(n => n.setAttribute('aria-expanded', n.dataset.index === String(index) ? 'true' : 'false'));
    traces.forEach(t => t.classList.toggle('is-active', t.dataset.index === String(index)));
    if (focus) {
      const activeTrace = document.getElementById(`trace-${index}`);
      if (activeTrace) activeTrace.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  nodes.forEach(node => {
    node.addEventListener('click', () => activate(node.dataset.index, { focus: true }));
  });

  // default open: most recent role
  if (nodes.length) activate(nodes[nodes.length - 1].dataset.index);

});
