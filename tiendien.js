function calElectric() {
  // B1: DOM
  var use = +document.getElementById("use").value;
  var result = document.getElementById("result");
  var total = 0;

  // B2: PROGRESS
  if (use < 0) {
    alert("Không thể nhập số âm");
    return (result.style.display = "none");
  } else if (use === 0) {
    alert("Vui lòng nhập Số điện tiêu thụ");
    return (result.style.display = "none");
  } else {
    if (use > 0 && use <= 50) {
      total += use * 500;
    } else if (use <= 100) {
      total += 50 * 500 + (use - 50) * 650;
    } else if (use <= 200) {
      total += 50 * 500 + 50 * 650 + (use - 100) * 850;
    } else if (use <= 350) {
      total += 50 * 500 + 50 * 650 + 100 * 850 + (use - 200) * 1100;
    } else {
      total +=
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (use - 350) * 1300;
    }
  }

  //   B3: render ra giao diện

  result.style.display = "block";
  result.innerHTML = `Tổng số tiền bạn cần phải trả là: ${total.toLocaleString()} VNĐ`;
}
