function webDev() {
  window.location.replace("web.html");
}

function mobileDev() {
  window.location.replace("mobile.html");
}

function softwareDev() {
  window.location.replace("software.html");
}

function machineLearning() {
  window.location.replace("machine_learning.html");
}

function getContact(contactType) {
  switch (contactType) {
    case "linkedin":
      window.open("https://www.linkedin.com/in/julian-joseph-5ab660109/");
      break;
    case "facebook":
      window.open("https://www.facebook.com/jun.wangli.3");
      break;
    case "instagram":
      window.open("https://www.instagram.com/junwangli/");
      break;
    case "gmail":
      window.location.href = 'mailto:julianjoseph52@gmail.com?&body=Hello Julian';
      break;
    case "whatsapp":
      window.open("https://api.whatsapp.com/send?phone=+15612137321");
      break;
    default:
      alert("Invalid contactType!");
      break;
  }
}
