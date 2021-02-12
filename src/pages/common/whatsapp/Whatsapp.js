export function generateAddContactLink(phone) {
  const numbers = phone.replace(/\D/g, '');
  return `https://wa.me/55${numbers}`;
}

export function generateSendMessageLink(phone) {
  const numbers = phone.replace(/\D/g, '');
  return `https://api.whatsapp.com/send?phone=+55${numbers}`;
}
