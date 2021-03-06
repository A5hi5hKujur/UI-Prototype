//----------------------- UI Interaction Proctor Meeting (Department) --------------
function selectPunishment(element) {
  if ($(element).val() == "yes") {
    $(element).siblings('.reject-reason-tb').addClass("active");
  }
  else {
    $(element).siblings('.reject-reason-tb').removeClass("active");
    $(element).siblings('.reject-reason-tb').val("No");
  }
  $(element).siblings('.reject-reason-tb').val('');
}
//------------------------------------------------------------------------------
//---------------------- Check member Designation Drop Down --------------------
function checkMemberDesignation(element) {
  if ($(element).val() == "Other")
    $(element).siblings('.custom-designation').addClass("active");
  else {
    $(element).siblings('.custom-designation').removeClass("active");
    $(element).siblings('.custom-designation').val("");
  }
  $(element).siblings('.custom-designation').val('');
}
//------------------------------------------------------------------------------


//------------------------------- NEW CODE STARTS HERE -------------------------
function removeRow(element, type) {
  if (type === 'agenda') {
    let agenda_list = $('#agenda-list').children().length;
    if (agenda_list > 1) {
      $(element).closest('.agenda').remove();

      $('#agenda-list').children().each(function (index, value) {
        $(this).find('.meeting-header-agenda > h4').html('Meeting Agenda ' + (index + 1));
      });
    }
    else alert('The meeting MUST have atleast one Agenda');
  }
  else if (type === 'resolution') {
    let resolution_list = $(element).closest('.resolution-list');
    if ($(resolution_list).children().length > 1) {
      $(element).closest('.resolution').remove();
      // rename resolution headers
      $(resolution_list).children().each(function (index, value) {
        $(this).find('.meeting-header > h4').html('Resolution ' + (index + 1));
      });
    }
    else alert('An agenda MUST have atleast one Resolution');
  }
  else if (type === 'student') {
    let isDeleted = false;
    let student_list = $(element).closest('.student-list');
    if ($(student_list).children().length > 1) {
      $(element).closest('.student').remove();
      isDeleted = true;
    }
    if (isDeleted && $(student_list).children().length == 1)
      $(student_list).find('.remove-member-btn').addClass('disabled');
  }
  else if (type === 'member') {
    let isDeleted = false;
    let member_len = $('#member-list').children().length;
    if (member_len > 1) {
      $(element).closest('.row').remove();
      isDeleted = true;
    }
    if (isDeleted && member_len - 1 == 1)
      $('#member-list').find('.remove-member-btn').addClass('disabled');
  }
  else if (type === 'note') {
    let isDeleted = false;
    let note_len = $('#note-list').children().length;
    if (note_len > 1) {
      $(element).closest('.row').remove();
      isDeleted = true;
    }
    if (isDeleted && note_len - 1 == 1)
      $('#note-list').find('.remove-note-btn').addClass('disabled');
  }
}

function addRow(element, type) {
  if (type == "member") {
    var new_row = `<div class="row">
      <div class="col-sm-12 col-md-2">
        <!-- <label for="meeting-id">Meeting ID</label> -->
        <select class="member-title">
          <option value="Prof.">Prof.</option>
          <option value="Dr.">Dr.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Mr.">Mr.</option>
          <option value="Ms.">Ms.</option>
        </select>
      </div>
      <div class="col-sm-12 col-md-4">
        <!-- <label for="meeting-date">Meeting Date</label> -->
        <input type="text" class="member-name" placeholder="Member Name" value="" autocomplete="off">
      </div>
      <div class="col-sm-12 col-md-4">
        <select class="member-designation" onclick="checkMemberDesignation(this);">
          <option value="Chairperson, Chief Proctor">Chairperson, Chief Proctor</option>
          <option value="Member, Women’s Grievance Cell">Member, Women’s Grievance Cell</option>
          <option value="Member, Professor In charge Training & Placement">Member, Professor In charge Training & Placement</option>
          <option value="Member, Chairman, SC/ST Cell">Member, Chairman, SC/ST Cell</option>
          <option value="Member, Chief Warden (Girls)">Member, Chief Warden (Girls)</option>
          <option value="Member, Chief Warden (Boys)">Member, Chief Warden (Boys)</option>
          <option value="Member, Proctor (Girl’s)">Member, Proctor (Girl’s)</option>
          <option value="Member, Proctor (Boy’s)">Member, Proctor (Boy’s)</option>
          <option value="Other">Other</option>
        </select>
        <input class="custom-designation" type="text" placeholder="Enter Designation" value="" autocomplete="off">
      </div>
      <div class="col-sm-12 col-md-2">
        <button type="button" name="button" class="btn-wide-blue remove-member-btn" onclick="removeRow(this, 'member');">Remove Member</button>
      </div>
    </div>`;
    $('.remove-member-btn').removeClass('disabled');
    $('#member-list').append(new_row);
  }
  else if (type == "note") {
    let new_row = `<div class="row">
      <div class="col-sm-10">
        <input type="text" class="meeting-note" placeholder="Enter Notes" autocomplete="off">
      </div>
      <div class="col-sm-2">
        <button type="button" name="button" class="btn-wide-blue remove-note-btn" onclick="removeRow(this, 'note');">Remove Note</button>
      </div>
    </div>`;
    $('.remove-note-btn').removeClass('disabled');
    $('#note-list').append(new_row);
  }
  else if (type == "resolution") {
    let resolution_list = $(element).siblings('.resolution-list');
    let new_res_id = $(resolution_list).children().length + 1;
    let new_resolution = `<div class="tile resolution">
      <div class="meeting-header">
        <h4>Resolution ${new_res_id}</h4>
        <div class="close-icon" onclick="removeRow(this, 'resolution');"></div>
      </div>
        <div class="resolution-punishments">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <label>Black Dots</label>
              <select class="black_dot">
                <option value="" selected>No Black Dot</option>
                <option value="One Black Dot">One Black Dot</option>
                <option value="Two Black Dot">Two Black Dot</option>
                <option value="Three Black Dot">Three Black Dot</option>
                <option value="Four Black Dot">Four Black Dot</option>
                <option value="Five Black Dot">Five Black Dot</option>
              </select>
            </div>

            <div class="col-sm-12 col-md-6 select-punishment">
              <label>Counseling</label>
              <select onclick="selectPunishment(this);">
                <option value="no" selected>No</option>
                <option value="yes">Yes</option>
              </select>
              <input class="reject-reason-tb counseling" type="text" placeholder="Enter Councelling Duration" value="No">
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-6 select-punishment">
              <label>Yoga Classes</label>
              <select onclick="selectPunishment(this);">
                <option value="no" selected>No</option>
                <option value="yes">Yes</option>
              </select>
              <input class="reject-reason-tb yoga_classes" type="text" placeholder="Enter Duration of Yoga Classes" value="No">
            </div>
            <div class="col-sm-12 col-md-6 select-punishment">
              <label>Hostel Expulsion</label>
              <select onclick="selectPunishment(this);">
                <option value="no" selected>No</option>
                <option value="yes">Yes</option>
              </select>
              <input class="reject-reason-tb expulsion_from_hostel" type="text"  placeholder="Enter Duration of Hostel Expulsion" value="No">
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-6 select-punishment">
              <label>Institute Expulsion</label>
              <select onclick="selectPunishment(this);">
                <option value="no" selected>No</option>
                <option value="yes">Yes</option>
              </select>
              <input class="reject-reason-tb expulsion_from_institute" type="text" placeholder="Enter Duration of Institute Expulsion" value="No">
            </div>
            <div class="col-sm-12 col-md-6 select-punishment">
              <label>Debar Registration</label>
              <select onclick="selectPunishment(this);">
                <option value="no" selected>No</option>
                <option value="yes">Yes</option>
              </select>
              <input class="reject-reason-tb debarred_f_reg" type="text" placeholder="Enter Details" value="No">
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-6 select-punishment">
              <label>Monetary Fine</label>
              <select onclick="selectPunishment(this);">
                <option value="no" selected>No</option>
                <option value="yes">Yes</option>
              </select>
              <input class="reject-reason-tb monetary_fine" type="text" placeholder="Enter Amount" value="No">
            </div>
            <div class="col-sm-12 col-md-6 select-punishment">
              <label>Inform Parents</label>
              <select onclick="selectPunishment(this);">
                <option value="no" selected>No</option>
                <option value="yes">Yes</option>
              </select>
              <input class="reject-reason-tb letter_t_parrents" type="text" placeholder="Enter dispatch number & date of the letters" value="No">
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-6  select-punishment">
              <label>Warning Letter to Student</label>
              <select onclick="selectPunishment(this);">
                <option value="no" selected>No</option>
                <option value="yes">Yes</option>
              </select>
              <input class="reject-reason-tb w_letter_t_student" type="text" placeholder="Enter dispatch number & date of the warning letter" value="No">
            </div>
            <div class="col-sm-12 col-md-6  select-punishment">
              <label>Other Punishment</label>
              <select onclick="selectPunishment(this);">
                <option value="no" selected>No</option>
                <option value="yes">Yes</option>
              </select>
              <input class="reject-reason-tb other_punishment" type="text" placeholder="Enter Details about the punishment." value="No">
            </div>
          </div>
        </div>

        <div class="container">
          <h4>Student Details</h4>
          <div class="student-list">
            <div class="row student">
              <div class="col-sm-12 col-md-2">
                <select class="member-title">
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                </select>
              </div>
              <div class="col-sm-12 col-md-4">
                <input type="text" class="member-name" placeholder="Student Name" value="" autocomplete="off">
              </div>
              <div class="col-sm-12 col-md-4">
                <input type="text" class="student-reg" placeholder="Registration No." value="" autocomplete="off">
              </div>
              <div class="col-sm-12 col-md-2">
                <button type="button" name="button" class="btn-wide-blue remove-member-btn disabled" onclick="removeRow(this, 'student');">Remove Student</button>
              </div>
            </div>
          </div>
          <button type="button" name="button" class="btn-wide-green" style="width : 230px; margin-top : 30px;" onclick="addRow(this, 'student');">Add Another Student</button>
        </div>
      </div>`;
    $(resolution_list).append(new_resolution);
  }
  else if (type === 'student') {
    let student_list = $(element).siblings('.student-list');
    let new_student = `<div class="row student">
      <div class="col-sm-12 col-md-2">
        <select class="member-title">
          <option value="Mr.">Mr.</option>
          <option value="Ms.">Ms.</option>
        </select>
      </div>
      <div class="col-sm-12 col-md-4">
        <input type="text" class="member-name" placeholder="Student Name" value="" autocomplete="off">
      </div>
      <div class="col-sm-12 col-md-4">
        <input type="text" class="student-reg" placeholder="Registration No." value="" autocomplete="off">
      </div>
      <div class="col-sm-12 col-md-2">
        <button type="button" name="button" class="btn-wide-blue remove-member-btn" onclick="removeRow(this, 'student');">Remove Student</button>
      </div>
    </div>`;
    $(student_list).append(new_student);
    $(student_list).find('.disabled').removeClass('disabled');
  }
}

function addAgenda() {
  let agenda_id = $('#agenda-list').children().length + 1;
  let new_agenda = `<div class="tile agenda">
    <div class="meeting-header-agenda">
      <h4>Meeting Agenda ${agenda_id}</h4>
      <div class="close-icon" onclick="removeRow(this, 'agenda');"></div>
    </div>

    <!-- Agenda details -->
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <input type="text" class="agenda-details" placeholder="Agenda Details" value="" autocomplete="off">
      </div>
      <div class="col-sm-12 col-md-6">
        <input type="text" class="proceeding-details" placeholder="Proceeding Details" value="" autocomplete="off">
      </div>
    </div>
    <!-- End of Agenda Details -->

    <!-- Resolution of an agenda -->
    <div class="resolution-list">
      <div class="tile resolution">
        <div class="meeting-header">
          <h4>Resolution 1</h4>
          <div class="close-icon" onclick="removeRow(this, 'resolution');"></div>
        </div>
          <div class="resolution-punishments">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <label>Black Dots</label>
                <select class="black_dot">
                  <option value="" selected>No Black Dot</option>
                  <option value="One Black Dot">One Black Dot</option>
                  <option value="Two Black Dot">Two Black Dot</option>
                  <option value="Three Black Dot">Three Black Dot</option>
                  <option value="Four Black Dot">Four Black Dot</option>
                  <option value="Five Black Dot">Five Black Dot</option>
                </select>
              </div>

              <div class="col-sm-12 col-md-6 select-punishment">
                <label>Counseling</label>
                <select onclick="selectPunishment(this);">
                  <option value="no" selected>No</option>
                  <option value="yes">Yes</option>
                </select>
                <input class="reject-reason-tb counseling" type="text" placeholder="Enter Councelling Duration" value="No">
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 col-md-6 select-punishment">
                <label>Yoga Classes</label>
                <select onclick="selectPunishment(this);">
                  <option value="no" selected>No</option>
                  <option value="yes">Yes</option>
                </select>
                <input class="reject-reason-tb yoga_classes" type="text" placeholder="Enter Duration of Yoga Classes" value="No">
              </div>
              <div class="col-sm-12 col-md-6 select-punishment">
                <label>Hostel Expulsion</label>
                <select onclick="selectPunishment(this);">
                  <option value="no" selected>No</option>
                  <option value="yes">Yes</option>
                </select>
                <input class="reject-reason-tb expulsion_from_hostel" type="text"  placeholder="Enter Duration of Hostel Expulsion" value="No">
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 col-md-6 select-punishment">
                <label>Institute Expulsion</label>
                <select onclick="selectPunishment(this);">
                  <option value="no" selected>No</option>
                  <option value="yes">Yes</option>
                </select>
                <input class="reject-reason-tb expulsion_from_institute" type="text" placeholder="Enter Duration of Institute Expulsion" value="No">
              </div>
              <div class="col-sm-12 col-md-6 select-punishment">
                <label>Debar Registration</label>
                <select onclick="selectPunishment(this);">
                  <option value="no" selected>No</option>
                  <option value="yes">Yes</option>
                </select>
                <input class="reject-reason-tb debarred_f_reg" type="text" placeholder="Enter Details" value="No">
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 col-md-6 select-punishment">
                <label>Monetary Fine</label>
                <select onclick="selectPunishment(this);">
                  <option value="no" selected>No</option>
                  <option value="yes">Yes</option>
                </select>
                <input class="reject-reason-tb monetary_fine" type="text" placeholder="Enter Amount" value="No">
              </div>
              <div class="col-sm-12 col-md-6 select-punishment">
                <label>Inform Parents</label>
                <select onclick="selectPunishment(this);">
                  <option value="no" selected>No</option>
                  <option value="yes">Yes</option>
                </select>
                <input class="reject-reason-tb letter_t_parrents" type="text" placeholder="Enter dispatch number & date of the letters" value="No">
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 col-md-6  select-punishment">
                <label>Warning Letter to Student</label>
                <select onclick="selectPunishment(this);">
                  <option value="no" selected>No</option>
                  <option value="yes">Yes</option>
                </select>
                <input class="reject-reason-tb w_letter_t_student" type="text" placeholder="Enter dispatch number & date of the warning letter" value="No">
              </div>
              <div class="col-sm-12 col-md-6  select-punishment">
                <label>Other Punishment</label>
                <select onclick="selectPunishment(this);">
                  <option value="no" selected>No</option>
                  <option value="yes">Yes</option>
                </select>
                <input class="reject-reason-tb other_punishment" type="text" placeholder="Enter Details about the punishment." value="No">
              </div>
            </div>
          </div>

          <!-- Add students in a Resolution -->
          <div class="container">
            <h4>Student Details</h4>
            <div class="student-list">
              <div class="row student">
                <div class="col-sm-12 col-md-2">
                  <select class="member-title">
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                </div>
                <div class="col-sm-12 col-md-4">
                  <input type="text" class="member-name" placeholder="Student Name" value="" autocomplete="off">
                </div>
                <div class="col-sm-12 col-md-4">
                  <input type="text" class="student-reg" placeholder="Registration No." value="" autocomplete="off">
                </div>
                <div class="col-sm-12 col-md-2">
                  <button type="button" name="button" class="btn-wide-blue remove-member-btn disabled" onclick="removeRow(this, 'student');">Remove Student</button>
                </div>
              </div>
            </div>
            <button type="button" name="button" class="btn-wide-green" style="width : 230px; margin-top : 30px;" onclick="addRow(this, 'student');">Add Another Student</button>
          </div>
          <!-- End of Adding students in resolution -->
        </div>
    </div>
  <!-- End of Resolution of an agenda -->
    <button type="button" name="button" class="btn-wide-green" style="width : 230px;" onclick="addRow(this, 'resolution');">Add Resolution</button>
  </div>`;
  $('#agenda-list').append(new_agenda);
}
//------------------------------- NEW CODE ENDS HERE ---------------------------

var meeting_agenda = new Map();
var minute_json = {
  meeting_id: undefined,
  meeting_date: undefined,
  meeting_time: undefined,
  meeting_venue: undefined,
  members: [],
  agendas: [],
  notes: []
}

// //    SAMPLE JSON DATA for testing :
// var minute_json1 = {
//   agenda:
//     [{
//       id: "1",
//       agenda_detail: "To discuss the case reported by Chief Warden (Girls') entered at No. 21 in the diary of Chief Proctor Office, regarding the late arrival of Ms Jaya. (Reg. No. 20185690 , Room No. 50) and Ms. Sushma (Reg.No. 20185685, KNGH, Room No. 50) in hostel after the purchase and consumption of prohibited items (outside KNGH) on the night of 05/02/2021.",
//       proceeding_detail: "The members of the Proctorial Board discussed the case with reference to the report submitted by Chief Warden (Girls') and statements of the concerned students. The members also interacted in person with Ms. and Ms.",
//       resolutions: [{
//         black_dot: "Two Black Dot",
//         counseling: "no",
//         yoga_classes: "Yoga classes (They are required to attend at least 100 yoga classes).",
//         expulsion_from_hostel: "Temporary expulsion from the hostel for one semester Even Semester (2019-2020).",
//         expulsion_from_institute: "no",
//         debarred_f_reg: "Academic probation for Even Semester of Academic session (2019-2020).",
//         monetary_fine: "no",
//         letter_t_parrents: "Information to parents.",
//         w_letter_t_student: "Warning letter for their involvement in the act of indiscipline.",
//         other_punishment: "no",
//         students: [{
//           registration_no: "20185690",
//           name: "Ms. Jaya"
//         },
//         {
//           registration_no: "20185685",
//           name: "Ms. Sushma"
//         }]
//       }]
//     },
//     {
//       id: "2",
//       agenda_detail: "To discuss the case reported by Chief Warden (Girls') regarding vandalism on campus by Ms  Rekha (Reg.No. 20185689 Room No 11,) in the premises of the hostel.",
//       proceeding_detail: "The members of the Proctorial Board discussed the case with reference to the report submitted by Chief Warden (Girls') and statements of the concerned students. The members also interacted in person with Ms. Rekha",
//       resolutions: [{
//         black_dot: "no",
//         counseling: "no",
//         yoga_classes: "no",
//         expulsion_from_hostel: "Temporary expulsion from the hostel for one semester Even Semester (2019-2020).",
//         expulsion_from_institute: "no",
//         debarred_f_reg: "no",
//         monetary_fine: "no",
//         letter_t_parrents: "no",
//         w_letter_t_student: "Warning letter for their involvement in the act of indiscipline.",
//         other_punishment: "no",
//         students: [{
//           registration_no: "20185690",
//           name: "Ms. Rekha"
//         }]
//       }]
//     }],
//   meeting_date: "2021-03-18",
//   meeting_id: "1",
//   meeting_time: "15:42",
//   meeting_venue: "Office of Chief Proctor",
//   members: [
//     {
//       designation: "Chairperson, Chief Proctor",
//       name: "K.N.Pandey",
//       title: "Prof."
//     },
//     {
//       designation: "Member, Women's Grievance Cell",
//       name: "Geetika",
//       title: "Prof."
//     },
//     {
//       designation: "Member, Professor In charge Training & Placement",
//       name: "Rakesh Narain",
//       title: "Prof."
//     },
//     {
//       designation: "Member, Chairman, SC/ST Cell",
//       name: "A.K. Sachan",
//       title: "Prof."
//     },
//     {
//       designation: "Member, Chief Warden (Girls)",
//       name: "Vijaya Bhaduria",
//       title: "Prof."
//     },
//     {
//       designation: "Member, Proctor (Boy's)",
//       name: "Shiv Dutt Kumar",
//       title: "Prof."
//     },
//     {
//       designation: "Member, Head Physics Department",
//       name: "Animesh Ojha",
//       title: "Dr."
//     },
//     {
//       designation: "Member, Representative of HOD, Mechanical Engineering",
//       name: "R.K. Patel",
//       title: "Dr."
//     },
//     {
//       designation: "Warden KNGH, Special Invitee",
//       name: "Manisha Sachan",
//       title: "Dr."
//     },
//     {
//       designation: "Member, Proctor (Boy's)",
//       name: "Basant Kumar",
//       title: "Dr."
//     },
//     {
//       designation: "Member, Proctor (Girl's)",
//       name: "Shalinee Shukla",
//       title: "Dr."
//     }
//   ],
//   notes: ["The meeting ended with thanks to Chair."]
// };
// ----------------------

function populatePopup() {
  // Meeting Details
  var details = "";
  details += "<p class='col-sm-2'>" + $('#meeting-id').val() + "</p>";
  details += "<p class='col-sm-3'>" + $('#meeting-date').val() + "</p>";
  details += "<p class='col-sm-2'>" + $('#meeting-time').val() + "</p>";
  details += "<p class='col-sm-5'>" + $('#meeting-venue').val() + "</p>";
  $('#display-meeting-detail').html(details);

  // Meeting Member
  var members = ``;
  var member_list = $('#member-list > .row');
  for (var i = 0; i < member_list.length; i++) {
    var member_title = $(member_list[i]).find('.member-title').val();
    var member_name = $(member_list[i]).find('.member-name').val();
    var member_designation = $(member_list[i]).find('.member-designation').val();
    member_designation = (member_designation == "Other") ? $(member_list[i]).find('.custom-designation').val() : member_designation;
    var member = member_title + " " + member_name + ", " + member_designation;
    members += `<p>` + member + `<p>`;
  }
  $('#display-member-list').html(members);

  // Meeting Agenda
  let agendaU = ``;
  let resolution_list = ``;
  minute_json.agendas.forEach(function (agenda, key) {
    agenda.resolutions.forEach((resolution) => {
      let student_info = `<div class="display-students">`;
      resolution.students.forEach((student, i) => {
        student_info += `<div class="display-student">`
        student_info += `<p><b>Name : </b>` + student.name + `</p>`;
        student_info += `<p><b>registration_no : </b>` + student.registration_no + `</p>`;
        student_info += `</div>`;
      });
      student_info += `</div>`;

      var student_punishment = `<div class="display-punishment">`;
      if (resolution.black_dot != "")
        student_punishment += `<p><b>Black Dot : </b>` + resolution.black_dot + `</p>`;
      if (resolution.counseling != "" && resolution.counseling != "No") {
        student_punishment += `<p><b>Counseling : </b>` + resolution.counseling + `</p>`;
      }
      if (resolution.yoga_classes != "" && resolution.yoga_classes != "No") {
        student_punishment += `<p><b>Yoga Classes : </b>` + resolution.yoga_classes + `</p>`;
      }
      if (resolution.expulsion_from_hostel != "" && resolution.expulsion_from_hostel != "No") {
        student_punishment += `<p><b>Expulsion From Hostel : </b>` + resolution.expulsion_from_hostel + `</p>`;
      }
      if (resolution.expulsion_from_institute != "" && resolution.expulsion_from_institute != "No") {
        student_punishment += `<p><b>Explusion From Institute : </b>` + resolution.expulsion_from_institute + `</p>`;
      }
      if (resolution.debarred_f_reg != "" && resolution.debarred_f_reg != "No") {
        student_punishment += `<p><b>Debarred From Registration : </b>` + resolution.debarred_f_reg + `</p>`;
      }
      if (resolution.monetary_fine != "" && resolution.monetary_fine != "No") {
        student_punishment += `<p><b>Monetary Fine : </b>` + resolution.monetary_fine + `</p>`;
      }
      if (resolution.letter_t_parrents != "" && resolution.letter_t_parrents != "No") {
        student_punishment += `<p><b>Letter To Parents : </b>` + resolution.letter_t_parrents + `</p>`;
      }
      if (resolution.w_letter_t_student != "" && resolution.w_letter_t_student != "No") {
        student_punishment += `<p><b>Letter To Students : </b>` + resolution.w_letter_t_student + `</p>`;
      }
      if (resolution.other_punishment != "" && resolution.other_punishment != "No") {
        student_punishment += `<p><b>Other Punishments : </b>` + resolution.other_punishment + `</p>`;
      }
      student_punishment += `</div>`;
      resolution_list += `<li class="tile">` + student_info + student_punishment + `</li>`;
    });
    agendaU += `<div class="display-agenda">
                    <div class="row display-agenda-tile">
                      <p class="col-sm-2">`+ key + `</p>
                      <p class="col-sm-5">`+ agenda.agenda_detail + `</p>
                      <p class="col-sm-5">`+ agenda.proceeding_detail + `</p>
                    </div>
                    <ul>`+ resolution_list + `</ul>
                  </div>`;
  });
  $('#display-agenda-list').html(agendaU);

  // Meeting Notes
  var notes = ``;
  var meeting_notes = $('.meeting-note');
  for (var i = 0; i < meeting_notes.length; i++) {
    notes += `<p>` + $(meeting_notes).eq(i).val(); +`</p>`
    minute_json.notes.push($(meeting_notes).eq(i).val());
  }
  $('#display-notes-list').append(notes);
}
function createNewJson() {
  // add meeting details :
  minute_json.meeting_id = $('#meeting-id').val();
  minute_json.meeting_date = $('#meeting-date').val();
  minute_json.meeting_time = $('#meeting-time').val();
  minute_json.meeting_venue = $('#meeting-venue').val();

  // Add members
  let member_list = $('#member-list > .row');
  for (let i = 0; i < member_list.length; i++) {
    let member_title = $(member_list[i]).find('.member-title').val();
    let member_name = $(member_list[i]).find('.member-name').val();
    let member_designation = $(member_list[i]).find('.member-designation').val();
    member_designation = (member_designation == "Other") ? $(member_list[i]).find('.custom-designation').val() : member_designation;

    let member_detail = {
      title: member_title,
      name: member_name,
      designation: member_designation
    }
    minute_json.members.push(member_detail);
  }

  // Meeting Notes
  let meeting_notes = $('.meeting-note');
  for (var i = 0; i < meeting_notes.length; i++)
    minute_json.notes.push($(meeting_notes).eq(i).val());


  // Meeting Agendas
  let agendas = $('.agenda');
  let agenda_len = $(agendas).length;
  for (let i = 0; i < agenda_len; i++) {
    let agenda = {
      id: i + 1,
      agenda_detail: $(agendas).eq(i).find('.agenda-details').eq(0).val(),
      proceeding_detail: $(agendas).eq(i).find('.proceeding-details').eq(0).val(),
      resolutions: []
    };

    // assemble resolutions of the agendas.
    let resolutions = $(agendas).eq(i).find('.resolution');
    let res_len = $(resolutions).length;
    for (let j = 0; j < res_len; j++) {
      let resolution = {
        id: j + 1,
        black_dot: $(resolutions).eq(j).find('.black_dot').eq(0).val(),
        counseling: $(resolutions).eq(j).find('.counseling').eq(0).val(),
        yoga_class: $(resolutions).eq(j).find('.yoga_classes').eq(0).val(),
        hostel_expulsion: $(resolutions).eq(j).find('.expulsion_from_hostel').eq(0).val(),
        institute_expulsion: $(resolutions).eq(j).find('.expulsion_from_institute').eq(0).val(),
        debar_registratio: $(resolutions).eq(j).find('.debarred_f_reg').eq(0).val(),
        monetry_fine_status: $(resolutions).eq(j).find('.monetary_fine').eq(0).val(),
        inform_parents: $(resolutions).eq(j).find('.letter_t_parrents').eq(0).val(),
        warning_letter: $(resolutions).eq(j).find('.w_letter_t_student').eq(0).val(),
        other_punishment: $(resolutions).eq(j).find('.other_punishment').eq(0).val(),
        students: []
      };

      // assemble students in the resolutions.
      let students = $(agendas).eq(i).find(resolutions).eq(j).find('.student');
      let student_len = $(students).length;
      for (let k = 0; k < student_len; k++) {
        let student = {
          name: $(students).eq(k).find('.member-title').eq(0).val() + ' ' + $(students).eq(k).find('.member-name').eq(0).val(),
          registration_no: $(students).eq(k).find('.student-reg').eq(0).val()
        };
        resolution.students.push(student);
      }
      agenda.resolutions.push(resolution);
    }
    minute_json.agendas.push(agenda);
  }
}
function popup(i) {
  $('.overlay').eq(i).toggleClass("active");
}
function displayMinutes() {
  createNewJson();
  popup(0);
  populatePopup();
  console.log(minute_json);
}


function printMinutes() {
  //------------------------ Putting assembled data on the pdf ------------------------------
  var doc = new jspdf.jsPDF();  // pdf object
  doc.addImage(chief_proctor, 'JPG', 15, 5, 175, 35);  // header image


  let heading = `Minutes of the ${minute_json1.meeting_id}th Proctorial Board Meeting held on ${minute_json1.meeting_date} at ${minute_json1.meeting_time} in the ${minute_json1.meeting_venue}.`;

  doc.setFont("times", "bold");
  doc.setFontSize(11);

  doc.text(heading, 13, 50);
  // doc.line(52, 20, 60, 20); // horizontal line

  doc.setFont("times", "normal");
  doc.text("Following members were present:", 13, 60);

  let members = [];
  minute_json1.members.forEach(function (member, index) {
    let member1 = {
      "SNo": index + 1,
      "Title": member.title,
      "Name": member.name,
      "Designation": member.designation
    };
    members.push(member1);
  });

  //creating table
  doc.autoTable({
    margin: { top: 65 },
    body: members,
  });

  let margin = 160;
  let newPageMargin = 260;

  minute_json1.agenda.forEach(function (agenda) {
    doc.setFont("times", "bold");
    doc.text("Agenda:", 13, margin);
    margin += 5;

    doc.setFont("times", "normal");
    doc.text(agenda.agenda_detail, 20, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
    margin += 20;

    doc.setFont("times", "bold");
    doc.text("Proceedings:", 13, margin);
    margin += 5;

    doc.setFont("times", "normal");
    doc.text(agenda.proceeding_detail, 20, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
    margin += 15;

    doc.setFont("times", "bold");
    doc.text("Resolution:", 13, margin);
    margin += 5;
    doc.setFont("times", "normal");
    doc.text("The committee members took a serious note of the indisciplinary act done by Ms. and Ms. and resolved the following corrective measures/punishments-", 20, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
    margin += 10;
    doc.setFont("times", "italic");


    agenda.resolutions.forEach(function (resolution,index1) {
      let students = resolution.students;
      console.log(students);
      let stdString = '';
      if (students.length == 1) {
        stdString += students[0].name + ' ( ' + students[0].registration_no + ' )';
        stdString += ' is awarded:';
      }
      else {
        students.forEach(function (std, index) {
          if (index == students.length - 1) {
            stdString += ' and ' + std.name + ' ( ' + std.registration_no + ' )';
          }
          else {
            stdString += std.name + ' ( ' + std.registration_no + ' ) ,';
          }
        });
        stdString += ' are awarded:';
      }
      doc.text(stdString, 20, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });

      margin+=10;
      doc.setFont("times","bolditalic");
      if(resolution.black_dot!="no"){
        doc.text((index1+1)+". "+resolution.black_dot+" which will include:", 20, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
      }
      else{
        doc.text((index1+1)+". No Black dot which will include:", 20, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
      }
      doc.setFont("times","normal");
      margin+=10;

      let indexChar = 97;
      if(resolution.counseling!="no"){
        doc.text(String.fromCharCode(indexChar)+") "+resolution.counseling, 25, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
        margin+=5;
        indexChar++;
      }
      if(resolution.yoga_classes!="no"){
        doc.text(String.fromCharCode(indexChar)+") "+resolution.yoga_classes, 25, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
        margin+=5;
        indexChar++;
      }
      if(resolution.expulsion_from_hostel!="no"){
        doc.text(String.fromCharCode(indexChar)+") "+resolution.expulsion_from_hostel, 25, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
        margin+=5;
        indexChar++;
      }
      if(resolution.expulsion_from_institute!="no"){
        doc.text(String.fromCharCode(indexChar)+") "+resolution.expulsion_from_institute, 25, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
        margin+=5;
        indexChar++;
      }
      if(resolution.debarred_f_reg!="no"){
        doc.text(String.fromCharCode(indexChar)+") "+resolution.debarred_f_reg, 25, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
        margin+=5;
        indexChar++;
      }
      if(resolution.monetary_fine!="no"){
        doc.text(String.fromCharCode(indexChar)+") "+resolution.monetary_fine, 25, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
        margin+=5;
        indexChar++;
      }
      if(resolution.letter_t_parrents!="no"){
        doc.text(String.fromCharCode(indexChar)+") "+resolution.letter_t_parrents, 25, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
        margin+=5;
        indexChar++;
      }
      if(resolution.w_letter_t_student!="no"){
        doc.text(String.fromCharCode(indexChar)+") "+resolution.w_letter_t_student, 25, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
        margin+=5;
        indexChar++;
      }
      if(resolution.other_punishment!="no"){
        doc.text(String.fromCharCode(indexChar)+") "+resolution.other_punishment, 25, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
        margin+=5;
        indexChar++;
      }
      margin+=10;
    });

    if(margin>=newPageMargin){
      doc.addPage();
      newPageMargin+=margin;
      margin=10;
    }
    margin += 15;
  });

  minute_json1.notes.forEach(function(note){
    doc.text(note, 20, margin, { align: 'left', maxWidth: '180', lineHeightFactor: '2' });
    margin+=10;
  })


  doc.save('Minutes.pdf'); // save pdf
  //------------------------------------------------------------------------------
}
