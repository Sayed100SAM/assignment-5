function getIdFunc(id) {
  return document.getElementById(id);
}

const callBtn = document.getElementsByClassName("call-btn");
for (const btn of callBtn) {
  btn.addEventListener("click", function (e) {
    const serviceName =
      btn.parentElement.parentElement.children[1].children[0].innerText;

    const serviceNumber =
      btn.parentElement.parentElement.children[2].children[0].innerText;

    const totalCoin = parseInt(getIdFunc("total-coin").innerText);

    const currentCoin = totalCoin - 20;

    if (totalCoin >= 20) {
      alert(`${serviceName} - ${serviceNumber} এ কল করা হচ্ছে...`);
      getIdFunc("total-coin").innerText = currentCoin;



      const historyContainer = getIdFunc("history-container");
      const createDiv = document.createElement("div");

      createDiv.innerHTML = `
       <div class="flex justify-between items-center gap-2 bg-secondary-bg p-3 mb-2 rounded-lg ">
                
                        <div >
                            <h3>${serviceName}</h3>
                            <p class="text-secondary">${serviceNumber}</p>
                        </div>
                    
                        <div>
                            <p>${new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
    `;

      historyContainer.appendChild(createDiv);
    } else {
      alert(`আপনার পর্যাপ্ত কয়েন নাই।কল করতে কমপক্ষে ২০ কয়েন লাগবে।`);
      return;
    }
  });
}



const heartIcon = document.getElementsByClassName("heart-icon");
for (const icon of heartIcon) {
  icon.addEventListener("click", function () {
    const heartTotal = parseInt(getIdFunc("heart-total").innerText);

    const currentHeartTotal = heartTotal + 1;
    getIdFunc("heart-total").innerText = currentHeartTotal;
  });
}


const copyBtn = document.getElementsByClassName("copy-btn");

for (const btn of copyBtn) {
  btn.addEventListener("click", function () {
    const totalCopy = parseInt(getIdFunc("total-copy").innerText);
    const serviceNumberText =
      btn.parentElement.parentElement.children[2].children[0].innerText;
    alert(`নম্বর কপি হয়েছে : ${serviceNumberText}`);

    navigator.clipboard.writeText(serviceNumberText);

    const currentCopy = totalCopy + 1;
    getIdFunc("total-copy").innerText = currentCopy;
  });
}


getIdFunc("clear-history-btn").addEventListener("click", function () {
  getIdFunc("history-container").innerHTML = "";
});

