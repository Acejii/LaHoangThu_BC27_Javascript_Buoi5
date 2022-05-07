function calculateScore() {
  // B1: DOM
  var benchmark = +document.getElementById("benchmark").value;
  var math = +document.getElementById("math").value;
  var physics = +document.getElementById("physics").value;
  var english = +document.getElementById("english").value;
  var area = +document.getElementById("area").value;
  var argument = +document.getElementById("argument").value;
  var result = document.getElementById("result");
  var score = document.getElementById("score");
  var text = document.getElementById("text");

  var total = math + physics + english + area + argument;
  //   B2: PROGRESS
  if (benchmark === 0 || math === 0 || physics === 0 || english === 0) {
    alert("Vui lòng nhập đầy đủ các điểm");
  } else if (benchmark > 30) {
    alert("Điểm chuẩn vượt quá 30, Vui lòng nhập lại");
  } else if (math > 10 || physics > 10 || english > 10) {
    alert("Có điểm môn của thí sinh vượt quá 10, vui lòng nhập lại");
  } else {
    if (math > 0 && physics > 0 && english > 0) {
      if (total >= benchmark) {
        result.style.display = "block";
        score.innerHTML = `Tổng điểm của thí sinh: ${total}`;
        text.innerHTML = "Chúc mừng bạn đã đậu tuyển sinh";
      } else {
        result.style.display = "block";
        score.innerHTML = `Tổng điểm của thí sinh: ${total}`;
        text.innerHTML = "Rất tiếc bạn đã rớt tuyển sinh";
      }
    } else {
      result.style.display = "block";
      score.innerHTML = `Tổng điểm của thí sinh: ${total}`;
      text.innerHTML = "Rất tiếc bạn đã rớt tuyển sinh do có điểm 0";
    }
  }
}
