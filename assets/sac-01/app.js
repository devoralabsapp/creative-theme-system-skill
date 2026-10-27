(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const toast = $('#toast'); let toastTimer;
  function notify(message) { clearTimeout(toastTimer); toast.textContent=message; toast.hidden=false; toastTimer=setTimeout(()=>{toast.hidden=true;},3500); }
  const nav=$('#navigation'),toggle=$('.nav-toggle');
  function closeNav(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Mở điều hướng');}
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Đóng điều hướng':'Mở điều hướng');});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeNav));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeNav();toggle.focus();}});
  $('.filters').addEventListener('click',event=>{
    const button=event.target.closest('[data-filter]');if(!button)return;
    document.querySelectorAll('[data-filter]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
    let count=0;document.querySelectorAll('.study-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++;});
    $('#study-count').textContent=String(count).padStart(2,'0')+' BÀI THỬ';
  });
  document.querySelectorAll('[data-colour]').forEach(button=>button.addEventListener('click',async()=>{
    const hex=button.dataset.colour;
    try{await navigator.clipboard.writeText(hex);notify('Đã sao chép '+hex);}
    catch{notify('Mã màu: '+hex+' — bạn có thể sao chép trực tiếp.');}
  }));
  const studies={
    grid:{title:'Lưới có nhịp.',description:'Các khung chữ nhật có viền đen, thanh tiêu đề và bóng lệch gợi UI máy tính cổ điển. Lưới và khoảng trống giữ cho nội dung dễ đọc.',details:[['Bố cục','Lưới 12 cột, khoảng cách theo bội số 4px.'],['Hình khối','Chỉ góc 90°. Không bo góc và không xoay thẻ.'],['Áp dụng','Portfolio, dashboard, thư viện tài nguyên, trang dự án.']]},
    type:{title:'Chữ có lực.',description:'Tiêu đề đậm với Arial Black hoặc Manrope, nhãn đơn cách gợi giao diện máy tính cũ. Nội dung giữ kiểu chữ hiện đại để đọc rõ tiếng Việt.',details:[['Tiêu đề','Arial Black / Manrope 800, giãn chữ vừa phải.'],['Nội dung','Manrope 400–600, giãn dòng 1.7–1.9.'],['Chú thích','Consolas / Cascadia Code, 8–11px. Chỉ dùng cho thông tin phụ.']]},
    colour:{title:'Màu có cá tính.',description:'Đen, trắng và xám tạo cấu trúc chính. Đỏ chỉ xuất hiện ở dấu nhận diện, gạch nhấn và chi tiết nhỏ; thay cho vàng neon trong mẫu tham khảo.',details:[['Nền','Giấy #F3F2EE và trắng #FFFFFF.'],['Cấu trúc','Đen #111111 cho chữ, viền, thanh cửa sổ và bóng cứng; xám #D8D8D5 cho lớp phụ.'],['Dấu nhấn','Đỏ #E3322B cho chi tiết đồ họa; chữ đỏ nhỏ dùng sắc đậm #B92721.']]}
  };
  const dialog=$('#study-dialog');let lastTrigger;
  document.querySelectorAll('[data-study]').forEach(button=>button.addEventListener('click',()=>{
    const item=studies[button.dataset.study];if(!item)return;lastTrigger=button;
    $('#dialog-title').textContent=item.title;$('#dialog-description').textContent=item.description;
    $('#dialog-details').replaceChildren(...item.details.map(([label,value])=>{const row=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=value;row.append(dt,dd);return row;}));
    dialog.showModal();
  }));
  $('#close-dialog').addEventListener('click',()=>dialog.close());$('#dialog-done').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{if(lastTrigger&&!lastTrigger.closest('[hidden]'))lastTrigger.focus();});
  const key='sac01.personal.draft',input=$('#draft-input'),help=$('#draft-help');
  function renderNote(value){$('#saved-note').hidden=!value;$('#saved-text').textContent=value;}
  try{const stored=localStorage.getItem(key);if(stored&&stored.length<=180){input.value=stored;renderNote(stored);}}catch{}
  input.addEventListener('input',()=>{input.removeAttribute('aria-invalid');help.classList.remove('error');help.textContent='Lưu trong trình duyệt này. Không gửi ra ngoài.';});
  $('#draft-form').addEventListener('submit',event=>{
    event.preventDefault();const value=input.value.trim();
    if(!value){input.setAttribute('aria-invalid','true');help.classList.add('error');help.textContent='Bạn viết một dòng trước khi lưu nhé.';input.focus();return;}
    try{localStorage.setItem(key,value);renderNote(value);notify('Đã lưu bản nháp trên thiết bị này.');}
    catch{help.classList.add('error');help.textContent='Trình duyệt chưa cho phép lưu. Ghi chú vẫn nằm trong ô nhập.';}
  });
  $('#clear-draft').addEventListener('click',()=>{
    try{localStorage.removeItem(key);input.value='';renderNote('');input.removeAttribute('aria-invalid');help.classList.remove('error');help.textContent='Lưu trong trình duyệt này. Không gửi ra ngoài.';notify('Đã xoá bản nháp trên thiết bị này.');}
    catch{notify('Trình duyệt chưa cho phép xoá dữ liệu đã lưu.');}
  });
})();
