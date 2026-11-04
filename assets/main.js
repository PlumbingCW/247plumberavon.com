
(function(){
var d=document,r=d.documentElement;
r.classList.add('js');
var burger=d.querySelector('.burger'),drawer=d.querySelector('.mob-drawer'),ov=d.querySelector('.mob-overlay'),closeB=d.querySelector('.mob-close');
function openM(){drawer.classList.add('open');ov.classList.add('open');r.style.overflow='hidden';burger.setAttribute('aria-expanded','true')}
function closeM(){drawer.classList.remove('open');ov.classList.remove('open');r.style.overflow='';burger.setAttribute('aria-expanded','false')}
if(burger&&drawer){burger.addEventListener('click',openM);closeB.addEventListener('click',closeM);ov.addEventListener('click',closeM);d.addEventListener('keydown',function(e){if(e.key==='Escape')closeM()});
window.addEventListener('resize',function(){if(window.innerWidth>768)closeM()})}
d.querySelectorAll('.tabs').forEach(function(box){
var btns=box.querySelectorAll('.tabbtn'),panels=box.querySelectorAll('.tabpanel');
function show(i){btns.forEach(function(b,k){b.classList.toggle('active',k===i);b.setAttribute('aria-selected',k===i?'true':'false')});panels.forEach(function(p,k){p.classList.toggle('active',k===i)})}
btns.forEach(function(b,i){b.addEventListener('click',function(){show(i)});b.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){show((i+1)%btns.length);btns[(i+1)%btns.length].focus()}if(e.key==='ArrowLeft'){var j=(i-1+btns.length)%btns.length;show(j);btns[j].focus()}})});
show(0)});
d.querySelectorAll('.faq-item').forEach(function(it){
var q=it.querySelector('.faq-q'),a=it.querySelector('.faq-a');
q.addEventListener('click',function(){var o=it.classList.toggle('open');q.setAttribute('aria-expanded',o?'true':'false');a.style.maxHeight=o?a.scrollHeight+'px':'0'})});
})();
