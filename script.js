
// Basic enhancement: show a toast after form submit (Netlify will still handle submission).
document.addEventListener('submit', function(e){
  const form = e.target.closest('form[data-netlify="true"]');
  if(!form) return;
  alert('Mesajınız gönderildi. Teşekkürler!');
});
