// Desktop visitors: portrait games open in the phone frame (play.html) instead of a stretched page;
// the QR button shows a code to carry a game over to a phone. Phones keep the plain links.
(() => {
  const desktop = matchMedia('(hover: hover) and (pointer: fine)').matches && innerWidth >= 760;
  if (desktop) {
    for (const card of document.querySelectorAll('.card[data-screen="portrait"]')) {
      const slug = card.dataset.slug;
      for (const a of card.querySelectorAll('a[data-go]')) a.href = 'play.html?g=' + encodeURIComponent(slug);
    }
  }

  let open = null;
  const close = () => { open?.remove(); open = null; };
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.qr-btn');
    if (!btn) { if (open && !e.target.closest('.qr-pop')) close(); return; }
    const card = btn.closest('.card');
    const again = open && open.parentElement === card;
    close();
    if (again) return;
    open = document.createElement('div');
    open.className = 'qr-pop';
    open.innerHTML = '<img alt="二维码" src="qr/' + card.dataset.slug + '.svg"><b>手机扫一扫</b>在手机上玩';
    card.append(open);
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
