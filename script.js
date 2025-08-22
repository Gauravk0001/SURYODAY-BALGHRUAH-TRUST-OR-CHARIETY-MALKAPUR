function handlePledge(e){
e.preventDefault();
const name=document.getElementById('name').value;
const amt=document.getElementById('amount').value;
const out=document.getElementById('pledgeOut');
if(!amt){out.textContent="Enter valid amount";return false}
const upiId='SURYODAY.TRUST@oksbi';
const qr=`upi://pay?pa=${upiId}&pn=Suryoday%20Balghruah&am=${amt}&cu=INR`;
out.innerHTML=`Thank you <strong>${name}</strong>! Pay using <a href="${qr}">${qr}</a>`;
return false;
}
document.getElementById('year') && (document.getElementById('year').textContent=new Date().getFullYear());