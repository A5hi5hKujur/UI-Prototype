//----------------------- UI Interaction Proctor Meeting (Department) --------------
function selectPunishment(element)
{
  if($(element).val() == "yes")
  {
      $(element).siblings('.reject-reason-tb').addClass("active");
  }
  else
  {
    $(element).siblings('.reject-reason-tb').removeClass("active");
    $(element).siblings('.reject-reason-tb').val("No");
  }
  $(element).siblings('.reject-reason-tb').val('');
}
//------------------------------------------------------------------------------
//---------------------- Check member Designation Drop Down --------------------
function checkMemberDesignation(element)
{
  if($(element).val() == "Other")
    $(element).siblings('.custom-designation').addClass("active");
  else
  {
    $(element).siblings('.custom-designation').removeClass("active");
    $(element).siblings('.custom-designation').val("");
  }
  $(element).siblings('.custom-designation').val('');
}
//------------------------------------------------------------------------------

var meeting_agenda = new Map();
var minute_json = {
  meeting_id : undefined,
  meeting_date : undefined,
  meeting_time : undefined,
  meeting_venue : undefined,
  members : [],
  agendas : [],
  notes : []
}

//--------- Populate All resolution id dropdowns with agenda id ----------------
function populateAgendaIdDropdown()
{
  var agenda_id_option = "";
  meeting_agenda.forEach(function(value, key) {
    agenda_id_option += `<option value="`+key+`">`+key+`</option>`;
  });
  $('.res-agenda-id').html(agenda_id_option);
}
//------------------------------------------------------------------------------

//---------------- update agenda id to map onfocusout --------------------------
function updateAgendaID(element)
{
  var agenda_id = $(element).val();
  if(agenda_id.length)
  {
    $(element).closest('row').attr('id', agenda_id);
    var agenda_details = {
      id : undefined,
      agenda_detail : undefined,
      proceeding_detail : undefined,
      resolutions : []
    };
    meeting_agenda.set(agenda_id, agenda_details);
  }
  populateAgendaIdDropdown();
}
//------------------------------------------------------------------------------

//---------------- remove existing agenda from map onfocus ---------------------
function removeAgendaID(element)
{
  var agenda_id = $(element).val();
  if(agenda_id.length && meeting_agenda.has(agenda_id))
  {
    meeting_agenda.delete(agenda_id);
  }
}

//--------------------------- Function to add a Row ----------------------------
function addRow(row_type)
{
  if(row_type == "member")
  {
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
  else if(row_type == "agenda")
  {
    var new_row = `<div class="row">
      <div class="col-sm-12 col-md-2">
        <input type="text" class="agenda-id" placeholder="Agenda ID" value="" autocomplete="off" onfocusout="updateAgendaID(this);" onfocus="removeAgendaID(this);">
      </div>
      <div class="col-sm-12 col-md-4">
        <input type="text" class="agenda-details" placeholder="Agenda Details" value=""autocomplete="off" >
      </div>
      <div class="col-sm-12 col-md-4">
        <input type="text" class="proceeding-details" placeholder="Proceeding Details" value=""autocomplete="off" >
      </div>
      <div class="col-sm-12 col-md-2">
        <button type="button" name="button" class="btn-wide-blue remove-agenda-btn" onclick="removeRow(this, 'agenda');">Remove Agenda</button>
      </div>
    </div>`;
    $('.remove-agenda-btn').removeClass('disabled');
    $('#agenda-list').append(new_row);
  }
  else if(row_type == "resolution")
  {
    // find all agenda ids and then load new resolution
    var agenda_option = ``;
    meeting_agenda.forEach((item, key) => {
      agenda_option += `<option value="${key}">${key}</option>`;
    });
    var new_row = `<div class="resolution" id="">
      <div class="row">
        <div class="col-sm-12 col-md-2">
          <select class="res-agenda-id">${agenda_option}</select>
        </div>
        <div class="col-sm-12 col-md-4">
          <input type="text" class="registration-no" placeholder="Registration No." autocomplete="off">
        </div>
        <div class="col-sm-12 col-md-4">
          <input type="text" class="name" placeholder="Student Name" autocomplete="off">
        </div>
        <div class="col-sm-12 col-md-2">
          <button type="button" name="button" class="btn-wide-blue remove-resolution-btn" onclick="removeRow(this, 'resolution');">Remove Resolution</button>
        </div>
      </div>
      <div class="resolution-punishments" style="margin-top : 20px;">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <label>Black Dots</label>
            <select class="black_dot">
              <option value="">No Black Dot</option>
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
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <input class="reject-reason-tb counseling" type="text" placeholder="Enter Councelling Duration" value="No">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-6 select-punishment">
            <label>Yoga Classes</label>
            <select onclick="selectPunishment(this);">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <input class="reject-reason-tb yoga_classes" type="text" placeholder="Enter Duration of Yoga Classes" value="No">
          </div>
          <div class="col-sm-12 col-md-6 select-punishment">
            <label>Hostel Expulsion</label>
            <select onclick="selectPunishment(this);">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <input class="reject-reason-tb expulsion_from_hostel" type="text" placeholder="Enter Duration of Hostel Expulsion" value="No">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-6 select-punishment">
            <label>Institute Expulsion</label>
            <select onclick="selectPunishment(this);">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <input class="reject-reason-tb expulsion_from_institute" type="text" placeholder="Enter Duration of Institute Expulsion" value="No">
          </div>
          <div class="col-sm-12 col-md-6 select-punishment">
            <label>Debar Registration</label>
            <select onclick="selectPunishment(this);">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <input class="reject-reason-tb debarred_f_reg" type="text" placeholder="Enter Details" value="No">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-6 select-punishment">
            <label>Monetary Fine</label>
            <select onclick="selectPunishment(this);">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <input class="reject-reason-tb monetary_fine" type="text" placeholder="Enter Amount" value="No">
          </div>
          <div class="col-sm-12 col-md-6 select-punishment">
            <label>Inform Parents</label>
            <select onclick="selectPunishment(this);">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <input class="reject-reason-tb letter_t_parrents" type="text" placeholder="Enter dispatch number & date of the letters" value="No">
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-6  select-punishment">
            <label>Warning Letter to Student</label>
            <select onclick="selectPunishment(this);">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <input class="reject-reason-tb w_letter_t_student" type="text" placeholder="Enter dispatch number & date of the warning letter" value="No">
          </div>
          <div class="col-sm-12 col-md-6  select-punishment">
            <label>Other Punishment</label>
            <select onclick="selectPunishment(this);">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <input class="reject-reason-tb other_punishment" type="text" placeholder="Enter Details about the punishment." value="No">
          </div>
        </div>
      </div>
    </div>`;
    $('.remove-resolution-btn').removeClass('disabled');
    $('#resolution-list').append(new_row);
  }
  else if(row_type == "note")
  {
    var new_row = `<div class="row">
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
}
//------------------------------------------------------------------------------

//------------------------------- Remove Row -----------------------------------
function removeRow(element, row_type)
{
  if(row_type == "member")
  {
    var isDeleted = false;
    var member_len = $('#member-list').children().length;
    if(member_len > 1)
    {
        $(element).closest('.row').remove();
        isDeleted = true;
    }
    if(isDeleted && member_len - 1 == 1)
      $('#member-list').find('.remove-member-btn').addClass('disabled');
  }
  else if(row_type == "agenda")
  {
    var isDeleted = false;
    var agenda_len = $('#agenda-list').children().length;
    if(agenda_len > 1)
    {
        let agenda_id = $(element).closest('.row').find('.agenda-id').val();
        meeting_agenda.delete(agenda_id);
        // !!!! Add code to remove all resolutions attached to the agenda id.
        $(element).closest('.row').remove();
        isDeleted = true;
        populateAgendaIdDropdown();
    }
    if(isDeleted && agenda_len - 1 == 1)
      $('#agenda-list').find('.remove-agenda-btn').addClass('disabled');
  }
  else if(row_type == "resolution")
  {
    var isDeleted = false;
    var resolution_len = $('#resolution-list').children().length;
    if(resolution_len > 1)
    {
        $(element).closest('.resolution').remove();
        isDeleted = true;
    }
    if(isDeleted && resolution_len - 1 == 1)
      $('#resolution-list').find('.remove-resolution-btn').addClass('disabled');
  }
  else if(row_type == "note")
  {
    var isDeleted = false;
    var note_len = $('#note-list').children().length;
    if(note_len > 1)
    {
        $(element).closest('.row').remove();
        isDeleted = true;
    }
    if(isDeleted && note_len - 1 == 1)
      $('#note-list').find('.remove-note-btn').addClass('disabled');
  }
}
//------------------------------------------------------------------------------
function populatePopup()
{
  // Meeting Details
  var details = "";
  details += "<p class='col-sm-2'>"+$('#meeting-id').val()+"</p>";
  details += "<p class='col-sm-3'>"+$('#meeting-date').val()+"</p>";
  details += "<p class='col-sm-2'>"+$('#meeting-time').val()+"</p>";
  details += "<p class='col-sm-5'>"+$('#meeting-venue').val()+"</p>";
  $('#display-meeting-detail').html(details);

  // popuating JSON :
  minute_json.meeting_id = $('#meeting-id').val();
  minute_json.meeting_date = $('#meeting-date').val();
  minute_json.meeting_time = $('#meeting-time').val();
  minute_json.meeting_venue = $('#meeting-venue').val();

  // Meeting Member
  var members = ``;
  var member_list = $('#member-list > .row');
  for(var i = 0; i<member_list.length; i++)
  {
    var member_title = $(member_list[i]).find('.member-title').val();
    var member_name = $(member_list[i]).find('.member-name').val();
    var member_designation = $(member_list[i]).find('.member-designation').val();
    member_designation = (member_designation == "Other")? $(member_list[i]).find('.custom-designation').val() : member_designation;
    var member = member_title + " " + member_name + ", " + member_designation;
    members += `<p>`+member+`<p>`;

    // populating JSON :
    var member_detail = {
      title : member_title,
      name : member_name,
      designation : member_designation
    }
    minute_json.members.push(member_detail);
  }
  $('#display-member-list').html(members);

  // Meeting Agenda
  var agenda = ``;
  meeting_agenda.forEach(function(value, key)
  {
    var student_list = ``;
    var agenda_detail = {
      id : key,
      agenda : value.agenda_detail,
      proceeding : value.proceeding_detail,
      resolutions : []
    };
    value.resolutions.forEach((student) => {
      var json_resolution = {
        registration_no : student.registration_no,
        name : student.name,
        black_dot : 'no',
        counseling : 'no',
        yoga_classes : 'no',
        expulsion_from_hostel : 'no',
        expulsion_from_institute : 'no',
        debarred_f_reg : 'no',
        monetary_fine : 'no',
        letter_t_parrents : 'no',
        w_letter_t_student : 'no',
        other_punishment : 'no'
      };
      var student_info = `<div class="row">
                            <p class="col-sm-4">`+student.registration_no+`</p>
                            <p class="col-sm-4">`+student.name+`</p>
                          </div>`;
      var student_punishment = `<div class="display-punishment">`;
      if(student.black_dot != "")
      {
          student_punishment += `<p><b>Black Dot : </b>`+student.black_dot+`</p>`;
          json_resolution.black_dot = student.black_dot;
      }
      if(student.counseling != "" && student.counseling != "No" )
      {
        student_punishment += `<p><b>Counseling : </b>`+student.counseling+`</p>`;
        json_resolution.counseling = student.counseling;
      }
      if(student.yoga_classes != "" && student.yoga_classes != "No")
      {
          student_punishment += `<p><b>Yoga Classes : </b>`+student.yoga_classes+`</p>`;
          json_resolution.yoga_classes = student.yoga_classes;
      }
      if(student.expulsion_from_hostel != "" && student.expulsion_from_hostel != "No")
      {
          student_punishment += `<p><b>Expulsion From Hostel : </b>`+student.expulsion_from_hostel+`</p>`;
          json_resolution.expulsion_from_hostel = student.expulsion_from_hostel;
      }
      if(student.expulsion_from_institute != "" && student.expulsion_from_institute != "No")
      {
          student_punishment += `<p><b>Explusion From Institute : </b>`+student.expulsion_from_institute+`</p>`;
          json_resolution.expulsion_from_institute = student.expulsion_from_institute;
      }
      if(student.debarred_f_reg != "" && student.debarred_f_reg != "No")
      {
          student_punishment += `<p><b>Debarred From Registration : </b>`+student.debarred_f_reg+`</p>`;
          json_resolution.debarred_f_reg = student.debarred_f_reg;
      }
      if(student.monetary_fine != "" && student.monetary_fine != "No")
      {
          student_punishment += `<p><b>Monetary Fine : </b>`+student.monetary_fine+`</p>`;
          json_resolution.monetary_fine = student.monetary_fine;
      }
      if(student.letter_t_parrents != "" && student.letter_t_parrents != "No")
      {
          student_punishment += `<p><b>Letter To Parents : </b>`+student.letter_t_parrents+`</p>`;
          json_resolution.letter_t_parrents = student.letter_t_parrents;
      }
      if(student.w_letter_t_student != "" && student.w_letter_t_student != "No")
      {
          student_punishment += `<p><b>Letter To Students : </b>`+student.w_letter_t_student+`</p>`;
          json_resolution.w_letter_t_student = student.w_letter_t_student;
      }
      if(student.other_punishment != "" && student.other_punishment != "No")
      {
          student_punishment += `<p><b>Other Punishments : </b>`+student.other_punishment+`</p>`;
          json_resolution.other_punishment = student.other_punishment;
      }
      agenda_detail.resolutions.push(json_resolution) // populating JSON

      student_punishment += `</div>`;
      student_list += `<li class="tile">`+student_info + student_punishment+`</li>`;
    });
    minute_json.agendas.push(agenda_detail); // populating JSON

    agenda += `<div class="display-agenda">
                    <div class="row display-agenda-tile">
                      <p class="col-sm-2">`+key+`</p>
                      <p class="col-sm-5">`+value.agenda_detail+`</p>
                      <p class="col-sm-5">`+value.proceeding_detail+`</p>
                    </div>
                    <ul>`+student_list+`</ul>
                  </div>`;
  });
  $('#display-agenda-list').html(agenda);

  // Meeting Notes
  var notes = ``;
  var meeting_notes = $('.meeting-note');
  for(var i=0; i<meeting_notes.length; i++)
  {
      notes += `<p>`+$(meeting_notes).eq(i).val();+`</p>`
      minute_json.notes.push($(meeting_notes).eq(i).val());
  }
  $('#display-notes-list').append(notes);

}
function mapResolutionToAgenda()
{
  /*
    Agenda = {
      id : string,
      agenda_detail : string,
      proceeding_detail : string,
      resolution : [{
                      registration_no : string,
                      student_name : string,
                      black_dot : string,
                      counseling : string,
                      yoga_class : string,
                      hostel_expulsion : string,
                      institute_expulsion : string,
                      debar_registratio : string,
                      monetry_fine_status : string,
                      inform_parents : string,
                      warning_letter : string,
                      other_punishment : string
                    }, {..}, ...]
    }
  */
  // ITERATE AGENDA LIST IN THE UI AND POPULATE MEETING AGENDA MAP
  var agenda_list = $('#agenda-list > .row');
  for(var i=0; i<agenda_list.length; i++)
  {
    var agenda_id = $(agenda_list[i]).find('.agenda-id').val();
    meeting_agenda.get(agenda_id).id = agenda_id;
    meeting_agenda.get(agenda_id).agenda_detail = $(agenda_list[i]).find('.agenda-details').val();
    meeting_agenda.get(agenda_id).proceeding_detail = $(agenda_list[i]).find('.proceeding-details').val();
  }

  //ITERATE RESOLUTION LIST IN THE UI AND POPULATE MEETING AGENDA MAP
  var resolution_list = $('#resolution-list > .resolution');
  for(var i=0; i<resolution_list.length; i++)
  {
    var resolution = {
      agenda_id : $(resolution_list[i]).find('.res-agenda-id').val(),
      name : $(resolution_list[i]).find('.name').val(),
      registration_no : $(resolution_list[i]).find('.registration-no').val(),
      black_dot : $(resolution_list[i]).find('.black_dot').val(),
      counseling : $(resolution_list[i]).find('.counseling').val(),
      yoga_classes : $(resolution_list[i]).find('.yoga_classes').val(),
      expulsion_from_hostel : $(resolution_list[i]).find('.expulsion_from_hostel').val(),
      expulsion_from_institute : $(resolution_list[i]).find('.expulsion_from_institute').val(),
      debarred_f_reg : $(resolution_list[i]).find('.debarred_f_reg').val(),
      monetary_fine : $(resolution_list[i]).find('.monetary_fine').val(),
      letter_t_parrents : $(resolution_list[i]).find('.letter_t_parrents').val(),
      w_letter_t_student : $(resolution_list[i]).find('.w_letter_t_student').val(),
      other_punishment : $(resolution_list[i]).find('.other_punishment').val()
    }
    // console.log(resolution);
    meeting_agenda.get(resolution.agenda_id).resolutions.push(resolution);
  }
}
function popup(i)
{
  $('.overlay').eq(i).toggleClass("active");
}
function displayMinutes()
{
  if(meeting_agenda.size == 0)
    alert("Please Add atleast 1 agenda to the meeeting");
  else
  {
    popup(0);
    mapResolutionToAgenda();
    populatePopup();
    console.log(minute_json);
  }
}
