var color_main = getComputedStyle(document.documentElement).getPropertyValue(
  "--main-color"
);
var color_1 = getComputedStyle(document.documentElement).getPropertyValue(
  "--color_1"
);
var color_2 = getComputedStyle(document.documentElement).getPropertyValue(
  "--color_2"
);

// Data to caculate MTTR, MTBF
var issue_day_arr = [];
var begin_issue_arr = [];
var end_issue_arr = [];
var shift_arr = [];
var date_shift_arr = [];
var begin_working_time_arr = [];
var end_working_time_arr = [];
var temp_Value = 0;

// data for calender

var calender_date = [];
var calender_machine = [];
var calender_shift = [];
var issue_text;
var detele_date_time;

function ok_Message() {
  document.getElementById("warning_popup_id").style.display = "flex";
  document.getElementById("warning_popup_id").style.backgroundColor = "green";
  document.getElementById("icon_apply_icon").style.display = "block";
  document.getElementById("icon_error_icon").style.display = "none";
  document.getElementById("warning_text_id").style.color = "white";
  document.getElementById("warning_text_id").innerText = "Update Succes";
  document.getElementById("warning_row_3_id").style.display = "none";

  setTimeout(function () {
    document.getElementById("warning_popup_id").style.display = "none";
  }, 5000); // Tự động ẩn alert sau 3 giây
}

// Hiển thị alert lỗi
function error_Message() {
  document.getElementById("warning_popup_id").style.display = "flex";
  document.getElementById("warning_popup_id").style.backgroundColor = "red";
  document.getElementById("icon_apply_icon").style.display = "none";
  document.getElementById("icon_error_icon").style.display = "block";
  document.getElementById("warning_text_id").style.color = "white";
  document.getElementById("warning_text_id").innerText =
    "Some value can not empty";
  document.getElementById("warning_row_3_id").style.display = "none";
  setTimeout(function () {
    document.getElementById("warning_popup_id").style.display = "none";
  }, 5000); // Tự động ẩn alert sau 3 giây
}
function other_error_Message() {
  document.getElementById("warning_popup_id").style.display = "flex";
  document.getElementById("warning_popup_id").style.backgroundColor = "red";
  document.getElementById("icon_apply_icon").style.display = "none";
  document.getElementById("icon_error_icon").style.display = "block";
  document.getElementById("warning_text_id").style.color = "white";
  document.getElementById("warning_text_id").innerText = issue_text;
  document.getElementById("warning_row_3_id").style.display = "none";
  document.getElementById("reload_id").style.display = "none";
  setTimeout(function () {
    document.getElementById("warning_popup_id").style.display = "none";
  }, 3000); // Tự động ẩn alert sau 3 giây
}

function delete_object() {
  document.getElementById("warning_popup_id").style.display = "flex";
  document.getElementById("warning_popup_id").style.backgroundColor = "yellow";
  document.getElementById("warning_row_3_id").style.display = "flex";
  document.getElementById("icon_apply_icon").style.display = "none";
  document.getElementById("icon_error_icon").style.display = "none";
  document.getElementById("warning_text_id").style.color = "black";
  document.getElementById("warning_text_id").innerText =
    "Delete it, Are you sure?";
}

function shift_input_ui() {
  var button_home_id = document.getElementById("button_shift_id");
  button_home_id.style.backgroundColor = color_2;
  button_home_id.style.color = color_main;
  var button_add_new_id = document.getElementById("button_issue_id");
  button_add_new_id.style.backgroundColor = color_main;
  button_add_new_id.style.color = color_2;
  var button_add_new_id = document.getElementById("button_kpi_id");
  button_add_new_id.style.backgroundColor = color_main;
  button_add_new_id.style.color = color_2;
  var button_add_new_id = document.getElementById("button_issue_history_id");
  button_add_new_id.style.backgroundColor = color_main;
  button_add_new_id.style.color = color_2;

  document.getElementById("shift_input_icon_id").style.fill = color_main;
  document.getElementById("issue_input_icon_id").style.fill = color_2;
  document.getElementById("kpi_icon_id").style.fill = color_2;
  document.getElementById("history_icon_id").style.fill = color_2;

  document.getElementById("shift_input_id").style.display = "flex";
  document.getElementById("issue_input_id").style.display = "none";
  document.getElementById("kpi_id").style.display = "none";
  document.getElementById("issue_history_id").style.display = "none";
}
function issue_input_ui() {
  var button_add_new_id = document.getElementById("button_issue_id");
  button_add_new_id.style.backgroundColor = color_2;
  button_add_new_id.style.color = color_main;
  var button_home_id = document.getElementById("button_shift_id");
  button_home_id.style.backgroundColor = color_main;
  button_home_id.style.color = color_2;
  var button_add_new_id = document.getElementById("button_kpi_id");
  button_add_new_id.style.backgroundColor = color_main;
  button_add_new_id.style.color = color_2;
  var button_add_new_id = document.getElementById("button_issue_history_id");
  button_add_new_id.style.backgroundColor = color_main;
  button_add_new_id.style.color = color_2;

  document.getElementById("shift_input_icon_id").style.fill = color_2;
  document.getElementById("issue_input_icon_id").style.fill = color_main;
  document.getElementById("kpi_icon_id").style.fill = color_2;
  document.getElementById("history_icon_id").style.fill = color_2;

  document.getElementById("shift_input_id").style.display = "none";
  document.getElementById("issue_input_id").style.display = "flex";
  document.getElementById("issue_history_id").style.display = "none";
  document.getElementById("kpi_id").style.display = "none";
}
function kpi_ui() {
  var button_add_new_id = document.getElementById("button_kpi_id");
  button_add_new_id.style.backgroundColor = color_2;
  button_add_new_id.style.color = color_main;
  var button_home_id = document.getElementById("button_shift_id");
  button_home_id.style.backgroundColor = color_main;
  button_home_id.style.color = color_2;
  var button_add_new_id = document.getElementById("button_issue_id");
  button_add_new_id.style.backgroundColor = color_main;
  button_add_new_id.style.color = color_2;
  var button_add_new_id = document.getElementById("button_issue_history_id");
  button_add_new_id.style.backgroundColor = color_main;
  button_add_new_id.style.color = color_2;

  document.getElementById("shift_input_icon_id").style.fill = color_2;
  document.getElementById("issue_input_icon_id").style.fill = color_2;
  document.getElementById("kpi_icon_id").style.fill = color_main;
  document.getElementById("history_icon_id").style.fill = color_2;

  document.getElementById("shift_input_id").style.display = "none";
  document.getElementById("issue_input_id").style.display = "none";
  document.getElementById("issue_history_id").style.display = "none";
  document.getElementById("kpi_id").style.display = "flex";
}

function issue_history_ui() {
  var button_add_new_id = document.getElementById("button_issue_history_id");
  button_add_new_id.style.backgroundColor = color_2;
  button_add_new_id.style.color = color_main;

  var button_add_new_id = document.getElementById("button_kpi_id");
  button_add_new_id.style.backgroundColor = color_main;
  button_add_new_id.style.color = color_2;
  var button_home_id = document.getElementById("button_shift_id");
  button_home_id.style.backgroundColor = color_main;
  button_home_id.style.color = color_2;
  var button_add_new_id = document.getElementById("button_issue_id");
  button_add_new_id.style.backgroundColor = color_main;
  button_add_new_id.style.color = color_2;

  document.getElementById("shift_input_icon_id").style.fill = color_2;
  document.getElementById("issue_input_icon_id").style.fill = color_2;
  document.getElementById("kpi_icon_id").style.fill = color_2;
  document.getElementById("history_icon_id").style.fill = color_main;

  document.getElementById("shift_input_id").style.display = "none";
  document.getElementById("issue_input_id").style.display = "none";
  document.getElementById("kpi_id").style.display = "none";
  document.getElementById("issue_history_id").style.display = "flex";
}

function back_0() {
  document.getElementById("shift_input_information_id").style.display = "none";
}

function update_machine() {
  var machines = {
    "LC2.0": ["LC2.0"],
    UCB: ["UCB-A", "UCB-B", "UCB-C", "UCB-D"],
    ACP: ["ACP"],
    AAC: ["AAC"],
    ACO: [
      "ACO01",
      "ACO02",
      "ACO03",
      "ACO04",
      "ACO05",
      "ACO06",
      "ACO07",
      "ACO08",
      "ACO09",
    ],
    UCC: ["UCC01", "UCC02", "UCC03"],
    AFM: ["AFM"],
  };
  var shift_project = document.getElementById("shift_project_id");
  var shift_machine = document.getElementById("shift_machine_id");

  var issue_project = document.getElementById("issue_project_id");
  var issue_machine = document.getElementById("issue_machine_id");

  var issue_history_project = document.getElementById(
    "issue_history_project_id"
  );
  var issue_history_machine = document.getElementById(
    "issue_history_machine_id"
  );

  var shift_value = shift_project.value;
  var issue_value = issue_project.value;
  var issue_history_value = issue_history_project.value;

  shift_machine.innerHTML = '<option value=""></option>';
  issue_machine.innerHTML = '<option value=""></option>';
  issue_history_machine.innerHTML = '<option value=""></option>';

  if (machines[shift_value]) {
    machines[shift_value].forEach(function (machine) {
      var option = document.createElement("option");
      option.value = machine;
      option.textContent = machine;
      shift_machine.appendChild(option);
    });
  }
  if (machines[issue_value]) {
    machines[issue_value].forEach(function (machine) {
      var option = document.createElement("option");
      option.value = machine;
      option.textContent = machine;
      issue_machine.appendChild(option);
    });
  }

  if (machines[issue_history_value]) {
    machines[issue_history_value].forEach(function (machine) {
      var option = document.createElement("option");
      option.value = machine;
      option.textContent = machine;
      issue_history_machine.appendChild(option);
    });
  }
}

function call_calender() {
  document.getElementById("shift_input_down_id").style.display = "flex";
  var machine = document.getElementById("shift_machine_id").value;
  var date_data = [];
  var shift_data = [];
  for (var i = 0; i < calender_machine.length; i++) {
    var machine_check = calender_machine[i];
    if (machine_check === machine) {
      var date_temp = calender_date[i];
      var shift_temp = calender_shift[i];
      date_data.push(date_temp);
      shift_data.push(shift_temp);
    }
  }
  update_calender(date_data, shift_data);
}

function shift_input_information_box(date_time_information) {
  var machine = document.getElementById("shift_machine_id").value;
  document.getElementById("shift_input_information_machine_id").innerText =
    machine;
  document.getElementById("shift_input_information_date_id").innerText =
    date_time_information;
  document.getElementById("shift_input_information_id").style.display = "flex";
  console.log("thời gian: " + date_time_information);
}

function shift_remove() {
  var machine = document.getElementById("shift_machine_id").value;
  var date_time = detele_date_time;
  var msg = {
    topic: "shift_remove",
    payload: {
      date_time,
      machine,
    },
  };
  uibuilder.send(msg);
}

function shift_input() {
  document.getElementById("reload_id").style.display = "flex";
  var project = document.getElementById("shift_project_id").value;
  var machine = document.getElementById("shift_machine_id").value;
  var date_time = document.getElementById(
    "shift_input_information_date_id"
  ).innerText;
  var checkboxes = document.querySelectorAll(
    'input[name="shift_option"]:checked'
  );
  if (date_time) {
    // Tạo đối tượng Date từ giá trị ngày
    var currentDate = new Date(date_time);
    var nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    var nextYear = nextDate.getFullYear();
    var nextMonth = nextDate.getMonth() + 1;
    var nextDay = nextDate.getDate();
    nextMonth = nextMonth.toString().padStart(2, "0");
    nextDay = nextDay.toString().padStart(2, "0");
    var nextDayStr = nextYear + "-" + nextMonth + "-" + nextDay;
  }
  console.log("next" + nextDayStr);
  // Tạo một mảng để lưu giá trị của các checkbox được chọn
  var selectedShifts = [];

  // Duyệt qua tất cả các checkbox được chọn và lấy giá trị của chúng
  checkboxes.forEach(function (checkbox) {
    selectedShifts.push(checkbox.value);
  });

  // Chuyển mảng các giá trị thành chuỗi phân cách bằng dấu phẩy
  var selectedShiftsString = selectedShifts.sort().join(",");
  var result;
  switch (selectedShiftsString) {
    case "main":
      result = "main";
      break;
    case "shift1":
      result = "shift1";
      break;
    case "shift2":
      result = "shift2";
      break;
    case "shift3":
      result = "shift3";
      break;
    case "main,shift2":
      result = "shift2main";
      break;
    case "main,shift3":
      result = "shift3main";
      break;
    case "shift1,shift2,shift3":
      result = "shift123";
      break;
    case "shift1,shift2":
      result = "shift12";
      break;
    case "shift2,shift3":
      result = "shift23";
      break;
    case "shift1,shift3":
      result = "shift13";
      break;
    default:
      result = "No predefined case matched.";
  }

  var shift_option1 = document.getElementById("shift_option1");
  var shift_option2 = document.getElementById("shift_option2");
  var shift_option3 = document.getElementById("shift_option3");
  var shift_option4 = document.getElementById("shift_option4");
  var machine_name = document.getElementById("");

  if (
    shift_option1.checked ||
    shift_option2.checked ||
    shift_option3.checked ||
    shift_option4.checked
  ) {
    if (machine !== "") {
      var msg = {
        topic: "shift_input",
        payload: {
          date_time,
          nextDayStr,
          project,
          machine,
          shifts: result,
        },
      };
      uibuilder.send(msg);
    } else {
      issue_text = "Please! Select Machine first";
      other_error_Message();
    }
  } else {
    error_Message();
  }
}

// Hàm định dạng ngày thành yyyy-mm-dd
function formatDate(date) {
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, "0"); // Thêm 0 trước số tháng nếu cần
  var day = String(date.getDate()).padStart(2, "0"); // Thêm 0 trước số ngày nếu cần
  return `${year}-${month}-${day}`;
}

// Hàm định dạng ngày và giờ thành yyyy-mm-ddThh:mm:ss
function formatDateTime(date) {
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, "0"); // Thêm 0 trước số tháng nếu cần
  var day = String(date.getDate()).padStart(2, "0"); // Thêm 0 trước số ngày nếu cần
  var hours = String(date.getHours()).padStart(2, "0"); // Thêm 0 trước số giờ nếu cần
  var minutes = String(date.getMinutes()).padStart(2, "0"); // Thêm 0 trước số phút nếu cần
  var seconds = String(date.getSeconds()).padStart(2, "0"); // Thêm 0 trước số giây nếu cần
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function issue_input() {
  issue_day_arr = [];
  begin_issue_arr = [];
  end_issue_arr = [];
  shift_arr = [];
  date_shift_arr = [];
  begin_working_time_arr = [];
  end_working_time_arr = [];

  var begin_time = document.getElementById("issue_begin_time_id").value;
  var end_time = document.getElementById("issue_end_time_id").value;
  var project = document.getElementById("issue_project_id").value;
  var machine = document.getElementById("issue_machine_id").value;
  var issue_name = document.getElementById("issue_name_id").value;
  if (
    begin_time === "" ||
    end_time === "" ||
    project === "" ||
    machine === "" ||
    issue_name === ""
  ) {
    error_Message();
  } else {
    document.getElementById("reload_id").style.display = "flex";
    // Tạo đối tượng Date từ giá trị ngày
    var issue_begin_time = new Date(begin_time);
    var issue_end_time = new Date(end_time);

    // Tính thời gian sửa chữa
    var repair_time = issue_end_time - issue_begin_time;
    var repair_time_minutes = repair_time / (1000 * 60);
    var issue_day = Math.ceil(repair_time_minutes / (60 * 24));
    var formatted_issue_begin_datetime = formatDateTime(issue_begin_time);
    var formatted_issue_end_datetime = formatDateTime(issue_end_time);

    // Định dạng ngày so sánh theo kiểu yyyy-mm-dd và thêm giờ 06:00
    var end_of_day_formatted = formatDate(issue_end_time);
    var end_of_issue_compare_day = new Date(`${end_of_day_formatted} 06:01:00`);
    var begin_of_day_formatted = formatDate(issue_begin_time);
    var begin_of_issue_compare_day = new Date(
      `${begin_of_day_formatted} 06:01:00`
    );

    var one_day = 24 * 60 * 60 * 1000;
    // Ngày hôm sau từ ngày bắt đầu
    var begin_of_issue;
    var end_of_issue;

    // Giá trị giờ đầu ngày của ngày bắt đầu
    var value_current_begin_time = new Date(
      `${formatDate(issue_begin_time)} 00:00:00`
    );

    var value_current_end_time = new Date(
      `${formatDate(issue_end_time)} 00:00:00`
    );

    // Giá trị giờ sáng của ngày bắt đầu
    var value_next_begin_time = new Date(
      `${formatDate(issue_begin_time)} 06:01:00`
    );

    var value_next_end_time = new Date(
      `${formatDate(issue_end_time)} 06:01:00`
    );

    // So sánh

    if (
      issue_end_time > value_current_end_time &&
      issue_end_time < value_next_end_time
    ) {
      end_of_issue = formatDate(new Date(issue_end_time.getTime() - one_day));
    } else {
      end_of_issue = formatDate(new Date(issue_end_time));
    }

    if (repair_time_minutes < 1439) {
      if (
        issue_begin_time > value_current_begin_time &&
        issue_begin_time < value_next_begin_time
      ) {
        console.log("vô: ngày hư lùi 1 ngày");
        begin_of_issue = new Date(issue_begin_time.getTime() - one_day);
        if (issue_end_time < begin_of_issue_compare_day) {
          issue_day = 0;
          console.log("vô 1");
        } else if (issue_end_time > begin_of_issue_compare_day) {
          issue_day = issue_day + 1;
          console.log("vô 2");
        }
      } else {
        begin_of_issue = new Date(issue_begin_time);
        console.log("vô: ngày hư là ngày được chọn");
        if (issue_end_time < end_of_issue_compare_day) {
          issue_day = 0;
          console.log("vô 3");
        } else if (issue_end_time > end_of_issue_compare_day) {
          issue_day = 0;
          console.log("vô 4");
        }
      }
    } else if (repair_time_minutes > 1439) {
      if (
        issue_begin_time > value_current_begin_time &&
        issue_begin_time < value_next_begin_time
      ) {
        begin_of_issue = new Date(issue_begin_time.getTime() - one_day);
        console.log("ra: ngày hư lùi 1 ngày");

        if (issue_end_time < end_of_issue_compare_day) {
          issue_day = issue_day;
          console.log("ra 1");
        } else if (issue_end_time > end_of_issue_compare_day) {
          issue_day = issue_day + 1;
          console.log("ra 2");
        }
      } else {
        begin_of_issue = new Date(issue_begin_time);
        console.log("ra: ngày hư là ngày được chọn");
        if (issue_end_time < end_of_issue_compare_day) {
          issue_day = issue_day;
          console.log("ra 3");
        } else if (issue_end_time > end_of_issue_compare_day) {
          issue_day = issue_day + 1;
          console.log("ra 4");
        }
      }
    }

    var msg = {
      topic: "select_shift",
      payload: {
        project,
        machine,
        begin_issue_time: formatDate(begin_of_issue),
        end_issue_time: end_of_issue,
      },
    };
    uibuilder.send(msg);

    if (issue_day > 0) {
      for (var i = 0; i < issue_day; i++) {
        var value_0 = new Date(begin_of_issue);
        value_0.setDate(value_0.getDate() + i);
        var value_1 = new Date(value_0);
        value_1.setDate(value_1.getDate() + 1);
        var issue_day_temp_Value = formatDate(new Date(value_0));
        var begin_repair_time = formatDate(value_0) + " 06:01:00";
        var end_repair_time = formatDate(value_1) + " 06:00:00";

        var msg_begin_time, msg_end_time;
        if (i === 0 && issue_day > 0) {
          msg_begin_time = formatted_issue_begin_datetime;
          msg_end_time = end_repair_time;
        }

        if (i > 0 && issue_day > 2) {
          msg_begin_time = begin_repair_time;
          msg_end_time = end_repair_time;
        }

        if (i === issue_day - 1 && issue_day !== 0) {
          msg_begin_time = begin_repair_time;
          msg_end_time = formatted_issue_end_datetime;
        }
        issue_day_arr.push(issue_day_temp_Value);
        begin_issue_arr.push(msg_begin_time);
        end_issue_arr.push(msg_end_time);

        console.log("issue day: " + issue_day_temp_Value);
        console.log("begin: " + msg_begin_time);
        console.log("end: " + msg_end_time);
        console.log("------------------------------------------------------");

        // issue_day_arr.push(formatDate(value_0))
      }
    } else if (issue_day === 0) {
      issue_day_arr.push(formatDate(new Date(begin_of_issue)));
      begin_issue_arr.push(formatted_issue_begin_datetime);
      end_issue_arr.push(formatted_issue_end_datetime);
    }
  }
}

function issue_calculate() {
  console.log("------------------------------------------------------");
  var repair_time_arr = [];
  var total_repair_time = 0;

  for (var i = 0; i < issue_day_arr.length; i++) {
    var issue_day = issue_day_arr[i];
    var begin_issue_temp = begin_issue_arr[i];
    var begin_issue = formatDateTime(new Date(begin_issue_temp));
    var end_issue_temp = end_issue_arr[i];
    var end_issue = formatDateTime(new Date(end_issue_temp));
    var shift = 0;
    for (var j = 0; j < date_shift_arr.length; j++) {
      if (issue_day === date_shift_arr[j]) {
        shift = shift_arr[j];
        begin_working = begin_working_time_arr[j];
        end_working = end_working_time_arr[j];
        break;
      }
    }
    // console.log('Date shift: ' + new Date(date_shift_arr[j]))
    // console.log('Begin working time: ' + new Date(begin_working))
    // console.log('End working time: ' + new Date(end_working))
    // console.log('Begin isssue time: ' + new Date(begin_issue))
    // console.log('End issue time: ' + new Date(end_issue))

    var value_temp_1 = new Date(issue_day);
    // thời gian ca hành chánh
    var begin_res_main = new Date(`${formatDate(value_temp_1)} 11:30:00`);
    var end_res_main = new Date(`${formatDate(value_temp_1)} 12:30:00`);
    // thời gian nghỉ ca 1
    var begin_res_s1 = new Date(`${formatDate(value_temp_1)} 11:00:00`);
    var end_res_s1 = new Date(`${formatDate(value_temp_1)} 11:30:00`);
    // thời gian nghỉ ca 2
    var begin_res_s2 = new Date(`${formatDate(value_temp_1)} 17:00:00`);
    var end_res_s2 = new Date(`${formatDate(value_temp_1)} 17:30:00`);
    // thời gian nghỉ ca 3
    var one_day = 24 * 60 * 60 * 1000;
    var value_temp_2 = new Date(value_temp_1.getTime() + one_day); // cộng 1 ngày (24 giờ) vào ngày bắt đầu
    var begin_res_s3 = new Date(`${formatDate(value_temp_2)} 00:30:00`);
    var end_res_s3 = new Date(`${formatDate(value_temp_2)} 01:45:00`);

    var total_issue_time =
      (new Date(end_issue) - new Date(begin_issue)) / (1000 * 60); // tính bằng phút
    var break_time = 0;
    var actual_issue_time = 0;

    if (
      new Date(begin_issue) < new Date(begin_working) &&
      new Date(end_issue) > new Date(end_working)
    ) {
      console.log("TH 1");
      break_time =
        (new Date(end_issue) -
          new Date(end_working) +
          (new Date(begin_working) - new Date(begin_issue))) /
        (1000 * 60);
    }

    if (
      new Date(begin_issue) < new Date(begin_working) &&
      new Date(end_issue) < new Date(end_working)
    ) {
      console.log("TH 2");
      break_time =
        (new Date(begin_working) - new Date(begin_issue)) / (1000 * 60);
    }

    if (
      new Date(begin_issue) > new Date(begin_working) &&
      new Date(end_issue) > new Date(end_working)
    ) {
      console.log("TH 3");
      break_time = (new Date(end_issue) - new Date(end_working)) / (1000 * 60);
    }

    // LẤY DỮ LIỆU BREAKTIME CHO CÁC CA
    if (shift === "main") {
      if (
        new Date(begin_issue) < end_res_main &&
        new Date(end_issue) > begin_res_main
      ) {
        var overlap_start = Math.max(begin_res_main, new Date(begin_issue));
        var overlap_end = Math.min(end_res_main, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ main

        console.log("begin_issue: " + new Date(begin_issue));
        console.log("end_issue: " + new Date(end_issue));
        console.log("begin_res_main: " + new Date(begin_res_main));
        console.log("end_res_main: " + new Date(end_res_main));

        console.log("overlap_end: " + overlap_end);
        console.log("overlap_start: " + overlap_start);
        console.log("overlap_end: " + overlap_end);
        console.log("Break main time: " + break_time);
      }
    }

    if (shift === "shift123") {
      if (
        new Date(begin_issue) < end_res_s1 &&
        new Date(end_issue) > begin_res_s1
      ) {
        console.log("So sánh đúng");
        var overlap_start = Math.max(begin_res_s1, new Date(begin_issue));
        var overlap_end = Math.min(end_res_s1, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ s1
        console.log("Break time s1: " + break_time);
      } else {
        console.log("so sánh sai res 2");
      }
      if (
        new Date(begin_issue) < end_res_s2 &&
        new Date(end_issue) > begin_res_s2
      ) {
        console.log("So sánh đúng");
        var overlap_start = Math.max(begin_res_s2, new Date(begin_issue));
        var overlap_end = Math.min(end_res_s2, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ s2
        console.log("Break time s2: " + break_time);
      } else {
        console.log("so sánh sai res 2");
      }
      if (
        new Date(begin_issue) < end_res_main &&
        new Date(end_issue) > begin_res_main
      ) {
        console.log("So sánh đúng");
        var overlap_start = Math.max(begin_res_main, new Date(begin_issue));
        var overlap_end = Math.min(end_res_main, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ main
        console.log("Break time main: " + break_time);
      } else {
        console.log("so sánh sai res 1");
      }
    }

    if (shift === "shift12") {
      console.log("break time: " + break_time);
      if (
        new Date(begin_issue) < end_res_s1 &&
        new Date(end_issue) > begin_res_s1
      ) {
        console.log("So sánh đúng");
        var overlap_start = Math.max(begin_res_s1, new Date(begin_issue));
        var overlap_end = Math.min(end_res_s1, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ s1
        console.log("Break time s1: " + break_time);
      } else {
        console.log("so sánh sai res 1");
      }
      if (
        new Date(begin_issue) < end_res_s2 &&
        new Date(end_issue) > begin_res_s2
      ) {
        console.log("So sánh đúng");
        var overlap_start = Math.max(begin_res_s2, new Date(begin_issue));
        var overlap_end = Math.min(end_res_s2, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ s2
        console.log("Break time s2: " + break_time);
      } else {
        console.log("so sánh sai res 2");
      }
    }

    if (shift === "shift23") {
      if (
        new Date(begin_issue) < end_res_s2 &&
        new Date(end_issue) > begin_res_s2
      ) {
        var overlap_start = Math.max(begin_res_s2, new Date(begin_issue));
        var overlap_end = Math.min(end_res_s2, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ s2
      }
      if (
        new Date(begin_issue) < end_res_s3 &&
        new Date(end_issue) > begin_res_s3
      ) {
        var overlap_start = Math.max(begin_res_s3, new Date(begin_issue));
        var overlap_end = Math.min(end_res_s3, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ s3
      }
    }
    if (shift === "shift2main") {
      if (
        new Date(begin_issue) < end_res_main &&
        new Date(end_issue) > begin_res_main
      ) {
        console.log("So sánh đúng");
        var overlap_start = Math.max(begin_res_main, new Date(begin_issue));
        var overlap_end = Math.min(end_res_main, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ main
      }

      if (
        new Date(begin_issue) < end_res_s2 &&
        new Date(end_issue) > begin_res_s2
      ) {
        console.log("So sánh đúng");
        var overlap_start = Math.max(begin_res_s2, new Date(begin_issue));
        var overlap_end = Math.min(end_res_s2, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ s2
        console.log("Break time s2: " + break_time);
      } else {
        console.log("so sánh sai res 2");
      }
    }

    if (shift === "shift3main") {
      if (
        new Date(begin_issue) > new Date(begin_working) &&
        new Date(end_issue) < new Date(end_working)
      ) {
        if (total_issue_time > 330) {
          break_time = 330;
        } else {
          break_time = 0;
        }
      }
      if (
        new Date(begin_issue) < end_res_main &&
        new Date(end_issue) > begin_res_main
      ) {
        var overlap_start = Math.max(begin_res_main, new Date(begin_issue));
        var overlap_end = Math.min(end_res_main, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ main
      }
      if (
        new Date(begin_issue) < end_res_s3 &&
        new Date(end_issue) > begin_res_s3
      ) {
        var overlap_start = Math.max(begin_res_s3, new Date(begin_issue));
        var overlap_end = Math.min(end_res_s3, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ s3
      }
    }

    if (shift === "shift13") {
      if (
        new Date(begin_issue) > new Date(begin_working) &&
        new Date(end_issue) < new Date(end_working)
      ) {
        if (total_issue_time > 480) {
          break_time = 480;
        } else {
          break_time = 0;
        }
      }
      if (
        new Date(begin_issue) < end_res_s1 &&
        new Date(end_issue) > begin_res_s1
      ) {
        var overlap_start = Math.max(begin_res_s1, new Date(begin_issue));
        var overlap_end = Math.min(end_res_s1, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ s1
      }
      if (
        new Date(begin_issue) < end_res_s3 &&
        new Date(end_issue) > begin_res_s3
      ) {
        var overlap_start = Math.max(begin_res_s3, new Date(begin_issue));
        var overlap_end = Math.min(end_res_s3, new Date(end_issue));
        break_time += (overlap_end - overlap_start) / (1000 * 60); // Thời gian nghỉ s3
      }
    }
    // ĐÃ LẤY DỮ LIỆU BREAKTIME XONG CHO CÁC CA
    console.log("issue : " + total_issue_time);
    console.log("break time total : " + break_time);
    actual_issue_time = total_issue_time - break_time;
    if (actual_issue_time < 0) {
      actual_issue_time = 0;
    }
    repair_time_arr.push(actual_issue_time);
    console.log("------------------------------------------------------");
  }

  for (var k = 0; k < repair_time_arr.length; k++) {
    total_repair_time += repair_time_arr[k];
  }
  console.log("total Repair time: " + total_repair_time + " minutes");
  var begin_time = document.getElementById("issue_begin_time_id").value;
  var end_time = document.getElementById("issue_end_time_id").value;
  var project = document.getElementById("issue_project_id").value;
  var machine = document.getElementById("issue_machine_id").value;
  var issue_name = document.getElementById("issue_name_id").value;

  var issue_begin_time = new Date(begin_time);
  var issue_end_time = new Date(end_time);

  var formatted_issue_begin_datetime = formatDateTime(issue_begin_time);
  var formatted_issue_end_datetime = formatDateTime(issue_end_time);
  var msg = {
    topic: "issue_input",
    payload: {
      project,
      machine,
      begin_issue_time: formatted_issue_begin_datetime,
      end_issue_time: formatted_issue_end_datetime,
      issue_name: issue_name,
      repair_time: total_repair_time,
    },
  };
  uibuilder.send(msg);
  clear_array();
}

function clear_array() {
  issue_day_arr = "";
  begin_issue_arr = "";
  end_issue_arr = "";
  shift_arr = "";
  date_shift_arr = "";
  begin_working_time_arr = "";
  end_working_time_arr = "";
}

function get_issue_history() {
  var machine = document.getElementById("issue_history_machine_id").value;
  var date_time = document.getElementById("issue_history_time_id").value;
  var msg = {
    topic: "get_issue_history",
    payload: {
      machine,
      date_time,
    },
  };
  uibuilder.send(msg);
}

function reload() {
  var msg = {
    topic: "page_reload",
    payload: "reload",
  };
  uibuilder.send(msg);
}

window.onload = function () {
  reload();
};
uibuilder.start();
{
  uibuilder.onChange("msg", function (msg) {
    if (msg.topic === "shift_data") {
      shift_arr = msg.payload.shift_arr;
      date_shift_arr = msg.payload.date_arr;
      begin_working_time_arr = msg.payload.begin_woring_arr;
      end_working_time_arr = msg.payload.end_working_arr;
      issue_calculate();
    }

    if (msg.topic === "warning_ok") {
      ok_Message();
      document.getElementById("reload_id").style.display = "none";
      if (msg.payload === "shift_input") {
        temp_Value = 1;
        back_0();
        var checkboxes = document.querySelectorAll(
          '.row_for_earch_data input[type="checkbox"]'
        );
        checkboxes.forEach(function (checkbox) {
          checkbox.checked = false;
        });
      }
      if (msg.payload === "issue_input") {
        document.getElementById("issue_begin_time_id").value = "";
        document.getElementById("issue_end_time_id").value = "";
        document.getElementById("issue_project_id").value = "";
        document.getElementById("issue_machine_id").value = "";
        document.getElementById("issue_name_id").value = "";
      }
      if (msg.payload === "deleted_shift") {
        temp_Value = 1;
      }
    }

    if (msg.topic === "warning_error") {
      error_Message();
    }

    if (msg.topic === "shift_empty") {
      document.getElementById("reload_id").style.display = "none";
      issue_text = "Please! Input Shift first";
      other_error_Message();
    }

    if (msg.topic === "kpi_arr_table") {
      var table = document.getElementById("kpi_table_id");
      var data = msg.payload;
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }
      // Thay đổi màu sắc dựa trên so sánh
      for (var i = 0; i < data.length; i++) {
        var row = table.insertRow();
        var stand = data[i][2]; // Ví dụ: stand ở cột index 2
        for (var j = 0; j < data[i].length; j++) {
          var cell = row.insertCell();
          cell.innerHTML = data[i][j];
          var type = data[i][1];
          if (j >= 3 && j <= 14) {
            var value = parseFloat(data[i][j]);
            var standValue = parseFloat(stand);

            // Nếu giá trị lớn hơn stand, chuyển màu đỏ
            if (value > standValue) {
              if (type === "MTTR") {
                cell.style.color = "red"; // Đảm bảo chữ nổi bật trên nền đỏ
              }
            } else {
              if (type === "MTBF") {
                cell.style.color = "red";
              }
            }
          }
        }
      }
    }

    if (msg.topic === "issue_history_data") {
      var a = msg.payload;
      var table = document.getElementById("history_issue_table_id");
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }
      for (var i = 0; i < a.length; i++) {
        var row = table.insertRow();
        for (var j = 0; j < a[i].length; j++) {
          var cell = row.insertCell();
          cell.innerHTML = a[i][j];
        }
      }
    }

    if (msg.topic === "shift_for_calender") {
      calender_date = msg.payload.date_arr;
      calender_machine = msg.payload.machine_arr;
      calender_shift = msg.payload.shift_arr;
      document.getElementById("reload_id").style.display = "none";
      if (temp_Value === 1) {
        call_calender();
        temp_Value = 0;
      }
    }
  });
}
