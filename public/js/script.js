// UI INTERACTIONS / ANIMATIONS
$(document).ready(function(){
  $("#nav-icon3").click(function(){
    $("#nav-icon3").toggleClass("open");
    $(".sidebar").toggleClass("is-active");
    $(".body").toggleClass("active");
    $(".menu-option").toggleClass("active");

  });
  $(".moburger").click(function(){
    $(".mobile-sidebar").addClass("is-active");
  });
  $(".close-icon").click(function(){
    $(".mobile-sidebar").removeClass("is-active");
  });
});

// Function to tab switch among different sections of different pages
$(document).ready(function(){
  let searchParams = new URLSearchParams(window.location.search);
  searchParams.has('tab');
  let section = searchParams.get('tab');
  $('.carousel-grid > div').removeClass('active');
  $('#'+section).addClass('active');

  // Sidemenu navigator for student/department profiles.
  $('.dashboard-menu .menu-icon').removeClass('active');
  $('.'+section).find('.menu-icon').addClass('active');
});

// Function to tab switch among same page sections
function switchTab(tab_id)
{
  $('.carousel-grid > div').removeClass('active');
  $('#'+tab_id).addClass('active');

  // Sidemenu navigator for student/department profiles
  $('.dashboard-menu .menu-icon').removeClass('active');
  $('.'+tab_id).find('.menu-icon').addClass('active');
}

// Function to check if the tab you want to access is in the same page or different page
$(document).ready(function(){
  $('a').on("click",function(e){
    let cur_url = window.location.href; // current url
    let cur_link = cur_url.split('?')[0].split('/')[4]; // current html file
    let url = $(this).attr('href'); // url to redirect
    let red_link = url.split('?')[0]; // html file to load.
    let red_tab = url.split('?')[1].split('=')[1]; // section to load.
    if(cur_link == red_link) // if both the html pages match that means the section to load is in the same page.
    {
      e.preventDefault(); // prevent redirection
      switchTab(red_tab); // load section
      const state = { 'page_id': 1, 'user_id': 5 };  // push it in the history and update the url
      const title = 'Student Welfare Office, MNNIT';
      history.pushState(state, title, url);
    }
  });
});
// POPUP INTERACTIONS
function popup(i)
{
  $('.overlay').eq(i).toggleClass("active");
}

// IMAGE Gallery interactions
$(document).ready(function(){
  $(".img-grid .thumbnail").on("click",function(){
    let image = $(this).find(".thumbnail-image").attr("style");
    $(".img-big").attr("style",image);
    popup(2);
  });
});

//Toggle between no dues activities
$(document).ready(function(){
  $(".drop-tab").on( "click", function(){
    $(this).find(".activity-tab").toggleClass("active");
    $(this).find(".glyphicon").toggleClass("rotate");
  });
});

// Interaction to view reason textbox when applying for a no dues.
$(document).ready(function(){
  $('#noduesform input:radio').on("click",function(){
    if($(this).attr('id') == 'coursenotcompleted')
      $('#noduesform #description').addClass('active');
    else
      $('#noduesform #description').removeClass('active');
  });
});

//------------------------ Form interaction while filling a fresh scholarship form---------------------------------------------------------
//on load / refresh default values in Funding Agency and Scholarship Name based on selected Scheme.
let scholarship_session;
let scholarship_scheme_name;
let scholarship_agency_name;
let scholarship_name;

let scholarship_scheme_no;        // condition variable for schemes dropdown
let scholarship_agency_no;        // condition variable for agency dropdown
$(window).on("load",function(){
  scholarship_scheme_no = parseInt($("#scholarship-scheme option:selected").val());
  scholarship_scheme_name = $("#scholarship-scheme option:selected").html();
  $('#scholarship-agency-select').addClass("active");
  $('#scholarship-name-select').addClass("active");
  $('#scholarship-agency-textbox').removeClass("active");
  $('#scholarship-name-textbox').removeClass("active");
  $('#scholarship-agency-textbox input').val("");
  $('#scholarship-name-textbox input').val("");
  if(scholarship_scheme_no == 1)
  {
    $('#scholarship-agency-select select').html(`<option value="1">Ministry Of Minority Affairs</option>
                                                 <option value="2">Department of Empowerment of Persons with Disabilities</option>
                                                 <option value="3">Minstry of Social Justice and Empowerment</option>
                                                 <option value="4">Ministry of Labour and Employment</option>
                                                 <option value="5">Ministry of Tribal Affairs</option>
                                                 <option value="6">Department of School Education and Literacy</option>
                                                 <option value="7">Department of Higher Education</option>
                                                 <option value="8">WARB, Ministry Of Home Affairs</option>
                                                 <option value="9">RPF/RPSF, Ministry of Railway</option>
                                                 <option value="10">Other</option>`);
    scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
    $('#scholarship-name-select select').html(`<option value="1">Post Matric Scholarships Scheme for Minorities</option>
                                               <option value="2">Merit Cum Means Scholarship For Professional and Technical Courses CS</option>`);
    scholarship_name = $("#scholarship-name-select select option:selected").html();
  }
  else if(scholarship_scheme_no == 2)
  {
    $('#scholarship-agency-select select').html(`<option value="1">University Grants Commission -MHRD</option>
                                                 <option value ="2">Other</option>`);
    scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
    $('#scholarship-name-select select').html(`<option value="1">ISHAN UDAY - Special Scholarship Scheme For North Eastern Region</option>
                                               <option value="2">PG INDIRA GANDHI SCHOLARSHIP FOR SINGLE GIRL CHILD</option>
                                               <option value="3">PG SCHOLARSHIP FOR UNIVERSITY RANK HOLDERS(Ist and IInd RANK HOLDERS)</option>
                                               <option value="4">PG SCHOLARSHIP SCHEME FOR SC ST STUDENTS FOR PERSUING PROFESSIONAL COURSES</option>`);
    scholarship_name = $("#scholarship-name-select select option:selected").html();
  }
  else if(scholarship_scheme_no == 3)
  {
    $('#scholarship-agency-select select').html(`<option value="1">Ministry Of Human Resource Development - AICTE</option>
                                                 <option value="2">Other</option>`);
    scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
    $('#scholarship-name-select select').html(`<option value="1">PRAGATI SCHOLARSHIP SCHEME FOR GIRLS (DEGREE) For Technical education</option>
                                                <option value="2">PRAGATI SCHOLARSHIP SCHEME FOR GIRLS (DIPLOMA) For Technical education</option>
                                                <option value="3">SAKSHAM SCHOLARSHIP SCHEME FOR DIFFERENTLY ABLED STUDENTS (DEGREE) For Technical education</option>
                                                <option value="4">SAKSHAM SCHOLARSHIP SCHEME FOR DIFFERENTLY ABLED STUDENTS (DIPLOMA) For Technical education</option>`);
    scholarship_name = $("#scholarship-name-select select option:selected").html();
  }
  else if(scholarship_scheme_no == 4)
  {
    $('#scholarship-agency-select select').html(`<option value="1">Assam</option>
                                                 <option value="2">Chandigarh</option>
                                                 <option value="3">Bihar</option>
                                                 <option value="4">Uttarakhand</option>
                                                 <option value="5">Tripura</option>
                                                 <option value="6">Karnataka</option>
                                                 <option value="7">Meghalaya</option>
                                                 <option value="8">Arunachal Pradesh</option>`);
    scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
    $('#scholarship-name-select select').html(`<option value="1">POST MATRIC SCHOLARSHIP FOR SC STUDENTS - ASSAM</option>
                                                <option value="2">POST MATRIC SCHOLARSHIP TO OBC STUDENTS - ASSAM</option>
                                                <option value="3">POST MATRIC SCHOLARSHIP TO ST STUDENTS - ASSAM</option>
                                                <option value="4">SAKSHAM SCHOLARSHIP SCHEME FOR DIFFERENTLY ABLED STUDENTS (DIPLOMA) For Technical education</option>`);
    scholarship_name = $("#scholarship-name-select select option:selected").html();
  }
  else if(scholarship_scheme_no == 5)
  {
    $('#scholarship-agency-select select').html(`<option value="1">Andhra Pradesh</option>
                                                 <option value="2">Chhattisgarh</option>
                                                 <option value="3">Jharkhand</option>
                                                 <option value="4">Kerala</option>
                                                 <option value="5">Madhya Pradesh</option>
                                                 <option value="6">Telangana</option>
                                                 <option value="7">Uttar Pradesh</option>
                                                 <option value="8">Rajasthan</option>
                                                 <option value="9">Other</option>`);
    scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
    $('#scholarship-name-select').removeClass("active");
    $('#scholarship-name-textbox').addClass("active");
  }
  else if(scholarship_scheme_no == 6)
  {
    $('#scholarship-agency-select select').html(`<option value="1">MNNIT Allahabad</option>
                                                 <option value="2">Other</option>`);
    scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
    $('#scholarship-name-select select').html(`<option value="1">MNNIT Allahabad</option>`);
    scholarship_name = $("#scholarship-name-select select option:selected").html();
  }
  else if(scholarship_scheme_no == 7)
  {
    $('#scholarship-agency-select select').html(`<option value="1">MNNIT Allahabad</option>
                                                 <option value="2">Other</option>`);
    scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
    $('#scholarship-name-select select').html(`<option value="1">Institute Merit Scholarship</option>`);
    scholarship_name = $("#scholarship-name-select select option:selected").html();
  }
  else if(scholarship_scheme_no == 8)
  {
    $('#scholarship-agency-select select').html(`<option value="1">OP-GEMS Scholarship</option>
                                                 <option value="2">Other</option>`);
    scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
    $('#scholarship-name-select select').html(`<option value="1">OP-GEMS Scholarship</option>`);
    scholarship_name = $("#scholarship-name-select select option:selected").html();
  }
  else if(scholarship_scheme_no == 9)
  {
    $('#scholarship-agency-textbox').addClass("active");
    $('#scholarship-name-textbox').addClass("active");
    $('#scholarship-name-select').removeClass("active");
    $('#scholarship-agency-select').removeClass("active");
  }
});

//on click/change interaction of default values in Funding Agency and Scholarship Name based on selected Scheme.
$(document).ready(function(){
  $("#scholarship-scheme").on("change",function(){
    scholarship_scheme_no = parseInt($(this).val());
    scholarship_scheme_name = $("#scholarship-scheme option:selected").html();
    $('#scholarship-agency-select').addClass("active");
    $('#scholarship-name-select').addClass("active");
    $('#scholarship-agency-textbox').removeClass("active");
    $('#scholarship-name-textbox').removeClass("active");
    $('#scholarship-agency-textbox input').val("");
    $('#scholarship-name-textbox input').val("");
    if(scholarship_scheme_no == 1)
    {
      $('#scholarship-agency-select select').html(`<option value="1">Ministry Of Minority Affairs</option>
                                                   <option value="2">Department of Empowerment of Persons with Disabilities</option>
                                                   <option value="3">Minstry of Social Justice and Empowerment</option>
                                                   <option value="4">Ministry of Labour and Employment</option>
                                                   <option value="5">Ministry of Tribal Affairs</option>
                                                   <option value="6">Department of School Education and Literacy</option>
                                                   <option value="7">Department of Higher Education</option>
                                                   <option value="8">WARB, Ministry Of Home Affairs</option>
                                                   <option value="9">RPF/RPSF, Ministry of Railway</option>
                                                   <option value="10">Other</option>`);
      scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
      $('#scholarship-name-select select').html(`<option>Post Matric Scholarships Scheme for Minorities</option>
                                                 <option>Merit Cum Means Scholarship For Professional and Technical Courses CS</option>`);
      scholarship_name = $("#scholarship-name-select select option:selected").html();
    }
    else if(scholarship_scheme_no == 2)
    {
      $('#scholarship-agency-select select').html(`<option value="1">University Grants Commission -MHRD</option>
                                                   <option value ="2">Other</option>`);
      scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
      $('#scholarship-name-select select').html(`<option value="1">ISHAN UDAY - Special Scholarship Scheme For North Eastern Region</option>
                                                 <option value="2">PG INDIRA GANDHI SCHOLARSHIP FOR SINGLE GIRL CHILD</option>
                                                 <option value="3">PG SCHOLARSHIP FOR UNIVERSITY RANK HOLDERS(Ist and IInd RANK HOLDERS)</option>
                                                 <option value="4">PG SCHOLARSHIP SCHEME FOR SC ST STUDENTS FOR PERSUING PROFESSIONAL COURSES</option>`);
      scholarship_name = $("#scholarship-name-select select option:selected").html();
    }
    else if(scholarship_scheme_no == 3)
    {
      $('#scholarship-agency-select select').html(`<option value="1">Ministry Of Human Resource Development - AICTE</option>
                                                   <option value="2">Other</option>`);
      scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
      $('#scholarship-name-select select').html(`<option value="1">PRAGATI SCHOLARSHIP SCHEME FOR GIRLS (DEGREE) For Technical education</option>
                                                  <option value="2">PRAGATI SCHOLARSHIP SCHEME FOR GIRLS (DIPLOMA) For Technical education</option>
                                                  <option value="3">SAKSHAM SCHOLARSHIP SCHEME FOR DIFFERENTLY ABLED STUDENTS (DEGREE) For Technical education</option>
                                                  <option value="4">SAKSHAM SCHOLARSHIP SCHEME FOR DIFFERENTLY ABLED STUDENTS (DIPLOMA) For Technical education</option>`);
      scholarship_name = $("#scholarship-name-select select option:selected").html();
    }
    else if(scholarship_scheme_no == 4)
    {
      $('#scholarship-agency-select select').html(`<option value="1">Assam</option>
                                                   <option value="2">Chandigarh</option>
                                                   <option value="3">Bihar</option>
                                                   <option value="4">Uttarakhand</option>
                                                   <option value="5">Tripura</option>
                                                   <option value="6">Karnataka</option>
                                                   <option value="7">Meghalaya</option>
                                                   <option value="8">Arunachal Pradesh</option>`);
      scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
      $('#scholarship-name-select select').html(`<option value="1">POST MATRIC SCHOLARSHIP FOR SC STUDENTS - ASSAM</option>
                                                  <option value="2">POST MATRIC SCHOLARSHIP TO OBC STUDENTS - ASSAM</option>
                                                  <option value="3">POST MATRIC SCHOLARSHIP TO ST STUDENTS - ASSAM</option>
                                                  <option value="4">SAKSHAM SCHOLARSHIP SCHEME FOR DIFFERENTLY ABLED STUDENTS (DIPLOMA) For Technical education</option>`);
      scholarship_name = $("#scholarship-name-select select option:selected").html();
    }
    else if(scholarship_scheme_no == 5)
    {
      $('#scholarship-agency-select select').html(`<option value="1">Andhra Pradesh</option>
                                                   <option value="2">Chhattisgarh</option>
                                                   <option value="3">Jharkhand</option>
                                                   <option value="4">Kerala</option>
                                                   <option value="5">Madhya Pradesh</option>
                                                   <option value="6">Telangana</option>
                                                   <option value="7">Uttar Pradesh</option>
                                                   <option value="8">Rajasthan</option>
                                                   <option value="9">Other</option>`);
      scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
      $('#scholarship-name-select').removeClass("active");
      $('#scholarship-name-textbox').addClass("active");
    }
    else if(scholarship_scheme_no == 6)
    {
      $('#scholarship-agency-select select').html(`<option value="1">MNNIT Allahabad</option>
                                                   <option value="2">Other</option>`);
      scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
      $('#scholarship-name-select select').html(`<option value="1">MNNIT Allahabad</option>`);
      scholarship_name = $("#scholarship-name-select select option:selected").html();
    }
    else if(scholarship_scheme_no == 7)
    {
      $('#scholarship-agency-select select').html(`<option value="1">MNNIT Allahabad</option>
                                                   <option value="2">Other</option>`);
      scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
      $('#scholarship-name-select select').html(`<option value="1">Institute Merit Scholarship</option>`);
      scholarship_name = $("#scholarship-name-select select option:selected").html();
    }
    else if(scholarship_scheme_no == 8)
    {
      $('#scholarship-agency-select select').html(`<option value="1">OP-GEMS Scholarship</option>
                                                   <option value="2">Other</option>`);
      scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
      $('#scholarship-name-select select').html(`<option value="1">OP-GEMS Scholarship</option>`);
      scholarship_name = $("#scholarship-name-select select option:selected").html();
    }
    else if(scholarship_scheme_no == 9)
    {
      $('#scholarship-agency-textbox').addClass("active");
      $('#scholarship-name-textbox').addClass("active");
      $('#scholarship-name-select').removeClass("active");
      $('#scholarship-agency-select').removeClass("active");
    }
  });
});

// onchange of Scholarship Agency Select
$(document).ready(function(){
  $("#scholarship-agency-select select").on("change",function(){
    scholarship_scheme_no = parseInt($("#scholarship-scheme option:selected").val());
    scholarship_agency_no = parseInt($("#scholarship-agency-select select option:selected").val());
    $('#scholarship-name-select').addClass("active");
    $('#scholarship-name-textbox').removeClass("active");
    $('#scholarship-agency-textbox input').val("");
    $('#scholarship-name-textbox input').val("");
    if(scholarship_scheme_no == 1)
    {
      if(scholarship_agency_no == 1)
      {
        $('#scholarship-name-select select').html(`<option value="1">Post Matric Scholarships Scheme for Minorities</option>
                                                   <option value="2">Merit Cum Means Scholarship For Professional and Technical Courses CS</option>`);
      }
      else if(scholarship_agency_no == 2)
      {
        $('#scholarship-name-select select').html(`<option value="1">Post-matric Scholarship for Students with Disabilities</option>
                                                   <option value="2">Scholarships for Top Class Education for students with disabilities</option>`);
      }
      else if(scholarship_agency_no == 3)
      {
        $('#scholarship-name-select select').html(`<option value="1">Top Class Education Scheme for SC Students</option>`);
      }
      else if(scholarship_agency_no == 4)
      {
        $('#scholarship-name-select select').html(`<option value="1">Financial Assistance for Education of the Wards of Beedi/Cine/IOMC/LSDM Workers - Post-Matric</option>
                                                   <option value="2">Aam Aadmi Bima Yojna Scholarship for Andhra Pradesh</option>`);
      }
      else if(scholarship_agency_no == 5)
      {
        $('#scholarship-name-select select').html(`<option value="1">National Fellowship and Scholarship for Higher Education of ST Students - Scholarship (Formally Top Class Education for Schedule Tribe Students) - only for scholarships</option>`);
      }
      else if(scholarship_agency_no == 6)
      {
        $('#scholarship-name-select select').html(`<option value="1"> National Scheme of Incentive to Girls for Secondary Education(NSIGSE)</option>
                                                   <option value="2"> National Means Cum Merit Scholarship</option>`);
      }
      else if(scholarship_agency_no == 7)
      {
        $('#scholarship-name-select select').html(`<option value="1"> CENTRAL SECTOR SCHEME OF SCHOLARSHIPS FOR COLLEGE AND UNIVERSITY STUDENTS</option>`);
      }
      else if(scholarship_agency_no == 8)
      {
        $('#scholarship-name-select select').html(`<option value="1"> Prime Minister's Scholarship Scheme For Central Armed Police Forces And Assam Rifles</option>`);
      }
      else if(scholarship_agency_no == 9)
      {
        $('#scholarship-name-select select').html(`<option value="1">Prime Minister's Scholarship Scheme For RPF/RPSF</option>`);
      }
      else if(scholarship_agency_no == 10)
      {
        $('#scholarship-name-select').removeClass("active");
        $('#scholarship-name-textbox').addClass("active");
      }
    }
    else if(scholarship_scheme_no == 2)
    {
      if(scholarship_agency_no == 1)
      {
        $('#scholarship-name-select select').html(`<option value="1">ISHAN UDAY - Special Scholarship Scheme For North Eastern Region</option>
                                                    <option value="2">PG INDIRA GANDHI SCHOLARSHIP FOR SINGLE GIRL CHILD</option>
                                                    <option value="3">PG SCHOLARSHIP FOR UNIVERSITY RANK HOLDERS(Ist and IInd RANK HOLDERS)</option>
                                                    <option value="4">PG SCHOLARSHIP SCHEME FOR SC ST STUDENTS FOR PERSUING PROFESSIONAL COURSES</option>`);
      }
      else if(scholarship_agency_no == 2)
      {
        $('#scholarship-name-select').removeClass("active");
        $('#scholarship-name-textbox').addClass("active");
      }
    }
    else if(scholarship_scheme_no == 3)
    {
      if(scholarship_agency_no == 1)
      {
        $('#scholarship-name-select select').html(`<option value="1">PRAGATI SCHOLARSHIP SCHEME FOR GIRLS (DEGREE) For Technical education</option>
                                                    <option value="2">PRAGATI SCHOLARSHIP SCHEME FOR GIRLS (DIPLOMA) For Technical education</option>
                                                    <option value="3">SAKSHAM SCHOLARSHIP SCHEME FOR DIFFERENTLY ABLED STUDENTS (DEGREE) For Technical education</option>
                                                    <option value="4">SAKSHAM SCHOLARSHIP SCHEME FOR DIFFERENTLY ABLED STUDENTS (DIPLOMA) For Technical education</option>`);
      }
      else if(scholarship_agency_no == 2)
      {
        $('#scholarship-name-select').removeClass("active");
        $('#scholarship-name-textbox').addClass("active");
      }
    }
    else if(scholarship_scheme_no == 4)
    {
      if(scholarship_agency_no == 1)
      {
        $('#scholarship-name-select select').html(`<option value="1">POST MATRIC SCHOLARSHIP FOR SC STUDENTS - ASSAM</option>
                                                    <option value="2">POST MATRIC SCHOLARSHIP TO OBC STUDENTS - ASSAM</option>
                                                    <option value="3">POST MATRIC SCHOLARSHIP TO ST STUDENTS - ASSAM</option>`);
      }
      else if(scholarship_agency_no == 2)
      {
        $('#scholarship-name-select select').html(`<option value="1">POST MATRIC SCHOLARSHIP FOR SC STUDENTS-CHANDIGARH</option>
                                                    <option value="2">POST MATRIC SCHOLARSHIP SCHEME FOR TRANSGENDER STUDENTS-CHANDIGARH</option>
                                                    <option value="3">POST MATRIC SCHOLARSHIP SCHEME FOR OBC STUDENTS-CHANDIGARH</option>
                                                    <option value="4">DR.AMBEDKAR POST MATRIC SCHOLARSHIP FOR ECONOMICALLY BACKWARD CLASS STUDENTS-CHANDIGARH</option>`);
      }
      else if(scholarship_agency_no == 3)
      {
        $('#scholarship-name-select select').html(`<option value="1">BC-EBC POST MATRIC SCHOLARSHIP-BIHAR</option>
                                                    <option value="2">ST-POST MATRIC SCHOLARSHIP -BIHAR</option>
                                                    <option value="3">SC POST-MATRIC SCHOLARSHIP -BIHAR</option>`);
      }
      else if(scholarship_agency_no == 4)
      {
        $('#scholarship-name-select select').html(`<option value="1">Post Matric Scholarship for EBC Students-Uttarakhand</option>
                                                    <option value="2">Post-Matric Scholarship for ST Students-Uttarakhand</option>
                                                    <option value="3">Post-Matric Scholarship for SC Students-Uttarakhand</option>
                                                    <option value="4">Post-Matric Scholarship for OBC Students-Uttarakhand</option>`);
      }
      else if(scholarship_agency_no == 5)
      {
        $('#scholarship-name-select select').html(`<option value="1">DR.AMBEDKAR POST MATRIC SCHOLARSHIP FOR ECONOMICALLY BACKWARD CLASSES (EBC)(SECONDARY EDUCATION)-TRIPURA</option>
                                                    <option value="2">POST-MATRIC ST SCHOLARSHIP SCHEMES</option>
                                                    <option value="3">POST-MATRIC SCHOLARSHIP FOR SC STUDENTS TRIPURA</option>
                                                    <option value="4">POST MATRIC SCHOLARSHIP FOR OBC STUDENTS TRIPURA</option>
                                                    <option value="5">Dr. B.R. AMBEDKAR POST MATRIC SCHOLARSHIP FOR ECONOMICALLY BACKWARD CLASSES (EBC). - TRIPURA</option>
                                                    <option value="6">NEC Merit Scholarship Tripura</option>`);
      }
      else if(scholarship_agency_no == 6)
      {
        $('#scholarship-name-select select').html(`<option value="1">POST MATRIC SCHOLARSHIP(PMS) FOR ST STUDENTS - KARNATAKA</option>`);
      }
      else if(scholarship_agency_no == 7)
      {
        $('#scholarship-name-select select').html(`<option value="1">UMBRELLA SCHEME FOR EDUCATION OF ST CHILDREN - POST-MATRIC SCHOLARSHIP (PMS) FOR ST STUDENTS - MEGHALAYA</option>`);
      }
      else if(scholarship_agency_no == 8)
      {
        $('#scholarship-name-select select').html(`<option value="1">Umbrella Scheme for Education of ST Children -Post Matric Scholarship (PMS) for ST Students Arunachal Pradesh</option>
                                                   <option value="2">Scheme for Award of Stipend to the schedule tribe students of Arunachal Pradesh</option>`);
      }
    }
    else if(scholarship_scheme_no == 5)
    {
      $('#scholarship-name-select').removeClass("active");
      $('#scholarship-name-textbox').addClass("active");
    }
    else if(scholarship_scheme_no == 6)
    {
      if(scholarship_agency_no == 1)
      {
        $('#scholarship-name-select select').html(`<option value="1">Institute Merit Scholarship</option>`);
      }
      else if(scholarship_agency_no == 2)
      {
        $('#scholarship-name-select').removeClass("active");
        $('#scholarship-name-textbox').addClass("active");
      }
    }
    else if(scholarship_scheme_no == 7)
    {
      if(scholarship_agency_no == 1)
      {
        $('#scholarship-name-select select').html(`<option value="1">Institute Merit Scholarship</option>`);
      }
      else if(scholarship_agency_no == 2)
      {
        $('#scholarship-name-select').removeClass("active");
        $('#scholarship-name-textbox').addClass("active");
      }
    }
    else if(scholarship_scheme_no == 8)
    {
      if(scholarship_agency_no == 1)
      {
        $('#scholarship-name-select select').html(`<option value="1">OP - GEMS Scholarship</option>`);
      }
      else if(scholarship_agency_no == 2)
      {
        $('#scholarship-name-select').removeClass("active");
        $('#scholarship-name-textbox').addClass("active");
      }
    }
    else if(scholarship_scheme_no == 9)
    {
      $('#scholarship-agency-textbox').addClass("active");
      $('#scholarship-name-textbox').addClass("active");
      $('#scholarship-name-select').removeClass("active");
      $('#scholarship-agency-select').removeClass("active");
    }
  });
});

// Function to populate preview popups
function previewFreshScholarship()
{
  // Fetch all the values from textboxes and select dropdowns
  scholarship_session = $("#scholarship-session").val();
  scholarship_scheme_name = $("#scholarship-scheme option:selected").html();
  scholarship_agency_text = $("#scholarship-agency-textbox input").val();
  scholarship_name_text = $("#scholarship-name-textbox input").val();
  let agency_textbox_active = $("#scholarship-agency-textbox").attr("class");
  let name_textbox_active = $("#scholarship-name-textbox").attr("class");

  // select from either an open textbox or an opened dropdown box.
  if(scholarship_agency_text == "" && agency_textbox_active != "active")
    scholarship_agency_name = $("#scholarship-agency-select select option:selected").html();
  else
    scholarship_agency_name = scholarship_agency_text;

  if(scholarship_name_text == "" && name_textbox_active != "active")
    scholarship_name = $("#scholarship-name-select select option:selected").html();
  else
    scholarship_name = scholarship_name_text;

 // Check if all required files are selected to upload.
  var allFiles = true;
    $('.scholarship-application input[type=file]').filter('[required]').each(function(){
      if ($(this).val() === '') {
        allFiles = false;
      }
    });

  // Check if the form checkbox is checked.
  var agreement = $('.scholarship-application input[type=checkbox]').is(":checked");
  if(!scholarship_session || !scholarship_scheme_name || !scholarship_agency_name || !scholarship_name || !allFiles || !agreement)
    alert("Please Complete all the fields of the form");
  else // if all conditions are met..
  {
    popup(4); // open the preview popup.

    //Preview inputed Form data.
    $('#fresh-scholarship-form #scholarship-session-preview').html(scholarship_session);
    $('#fresh-scholarship-form #scholarship-scheme-preview').html(scholarship_scheme_name);
    $('#fresh-scholarship-form #scholarship-agency-preview').html(scholarship_agency_name);
    $('#fresh-scholarship-form #scholarship-name-preview').html(scholarship_name);

    // Preview Uploaded Files :
    pdffile=document.getElementsByName("bonafide")[0].files[0];
    pdffile_url=URL.createObjectURL(pdffile);
    $('#fresh-scholarship-form #bonafide-preview').attr('src',pdffile_url);

    pdffile1=document.getElementsByName("feereciept")[0].files[0];
    pdffile_url1=URL.createObjectURL(pdffile1);
    $('#fresh-scholarship-form #feereciept-preview').attr('src',pdffile_url1);

    pdffile2=document.getElementsByName("transcript")[0].files[0];
    pdffile_url2=URL.createObjectURL(pdffile2);
    $('#fresh-scholarship-form #transcript-preview').attr('src',pdffile_url2);

    pdffile3=document.getElementsByName("income1")[0].files[0];
    pdffile_url3=URL.createObjectURL(pdffile3);
    $('#fresh-scholarship-form #income1-preview').attr('src',pdffile_url3);
  }
}
// Function to submit fresh scholarship form
function applyFreshScholarship()
{
  $('.scholarship-application').submit();
  setTimeout(function(){
    window.location='studentprofile.html?tab=fresh-scholarship';
  }, 3);
}
//----------- Script for Fresh Scholarship Application Ends here ---------------

//---------- Script for UI Interaction NoDues (Departments) --------------------

// select all interactions (Three options)
$('#three-option .select-all').on('click', function(){
  let make_all = $(this).val();
  if(make_all == 'approve')
  {
      $('.nodue-new-request-form .select-choice').val('approve');
      $('.nodue-new-request-form .reject-reason-tb').css({'display' : 'none'});
  }
  else if(make_all == 'reject') {
    $('.nodue-new-request-form .select-choice').val('reject');
    $('.nodue-new-request-form .reject-reason-tb').css({'display' : 'block'});

  }
  else if(make_all == 'no_action') {
    $('.nodue-new-request-form .select-choice').val('no_action');
    $('.nodue-new-request-form .reject-reason-tb').css({'display' : 'none'});
  }
  $('.reject-reason-tb').val('');
});
// select all interactions (Two options)
$('#two-option .select-all').on('click', function(){
  let make_all = $(this).val();
  if(make_all == 'approve')
  {
      $('.nodue-rejected-request-form .select-choice').val('approve');
  }
  else if(make_all == 'no_action') {
    $('.nodue-rejected-request-form .select-choice').val('no_action');
  }
  $('.reject-reason-tb').val('');
});

//select single interaction
$(".select-choice").on('click', function(){
  let action = $(this).val();
  if(action == 'approve')
  {
      $(this).siblings(".reject-reason-tb").css({"display":"none"});
  }
  else if(action == 'reject') {
    $(this).siblings(".reject-reason-tb").css({"display":"block"});
  }
  else if(action == 'no_action') {
    $(this).siblings(".reject-reason-tb").css({"display":"none"});
  }
  $(this).siblings(".reject-reason-tb").val('');
});

// new no dues request tab
$('#nodue-btn-new').on('click', function(){
  $('.nodue-buttons > button').removeClass("active");
  $('#two-option').removeClass('active');
  $('#nodue-btn-new').addClass("active");

  $('.nodue-tab').removeClass("active");
  $('#three-option').addClass('active');
  $('#nodue-tab-new').addClass("active");
});

// approved request tab
$('#nodue-btn-approve').on('click', function(){
  $('.nodue-buttons > button').removeClass("active");
  $('#nodue-btn-approve').addClass("active");

  $('.nodue-tab').removeClass("active");
  $('#nodue-tab-approved').addClass("active");
  $('#three-option').removeClass('active');
  $('#two-option').removeClass('active');
});

// rejected request tab
$('#nodue-btn-reject').on('click', function(){
  $('.nodue-buttons > button').removeClass("active");
  $('#nodue-btn-reject').addClass("active");
  $('#three-option').removeClass('active');

  $('.nodue-tab').removeClass("active");
  $('#two-option').addClass('active');
  $('#nodue-tab-rejected').addClass("active");
});
//------------------------------------------------------------------------------

//------ Script to validate and process no due requests (Department) -----------
$('.nodue-new-request-form').on('submit', function(e)   // PROCESS NEW REQUESTS
{
  e.preventDefault();
  let options = $('.nodue-new-request-form .select-choice');
  let reasons = $('.nodue-new-request-form .reject-reason-tb');
  let student_requests = [];
  let valid_submission = true;
  for(let i=0; i < options.length; i++)
  {
    let student_request = {
      id : '',
      action : '',
      reason : '',
    };
    student_request.id = options[i].name;
    student_request.action = options[i].value;
    student_request.reason = reasons[i].value;

    if(options[i].value == 'reject' && reasons[i].value == '')
    {
      valid_submission = false;
      student_requests = [];
      break;
    }
    student_requests.push(student_request);
  }
  if(valid_submission)
  {
    let url = $('.nodue-new-request-form').attr('action');
    $.ajax({
      url: url,
      data: {
              student_requests : student_requests
            },
      type: 'POST',
      success: function(data)
      {
        location.reload();
      }
    });
  }
  else
  {
    alert('Fill the reason to reject No Due requests.');
  }
});

// PROCESS NEW REQUESTS for Dean Academics and PROCESS REJECTED REQUESTS for Other Nodues associated departments
$('.nodue-rejected-request-form').on('submit', function(e)
{
  e.preventDefault();
  let options = $('.nodue-rejected-request-form .select-choice');
  let student_requests = [];
  for(let i=0; i < options.length; i++)
  {
    let student_request = {
      id : '',
      action : '',
    };
    student_request.id = options[i].name;
    student_request.action = options[i].value;
    student_requests.push(student_request);
  }
  let url = $('.nodue-rejected-request-form').attr('action');
  $.ajax({
    url: url,
    data: {
            student_requests : student_requests
          },
    type: 'POST',
    success: function(data)
    {
      location.reload();
    }
  });

});
//------------------------------------------------------------------------------

//----------------------- UI Interaction Punishments (Department) --------------

$('.select-punishment select').on('click', function(){
  if($(this).val() == "yes")
  {
      $(this).siblings('.reject-reason-tb').addClass("active");
  }
  else {
    $(this).siblings('.reject-reason-tb').removeClass("active");
    $(this).siblings('.reject-reason-tb').val("No");
  }
  $(this).siblings('.reject-reason-tb').val('');
});

// Ajax reqest after student completes his/her punishment
$('.punishment-item-check input:radio').on('click', function(){
  var col = $(this).attr('name');
  var reg_no = $(this).attr('value');

  // count the incomplete punishments apart from the one selected right now.
  var incomplete_count = $('#'+reg_no).find('.punishment-item-check input:radio').length - 1;
  $.ajax({
    url: '/punishment/update/'+reg_no,
    data: {
            col : col,
            incomplete_count : incomplete_count
          },
    type: 'PUT',
    success: function(data) {
      location.reload();
    }
  });
});
//------------------------------------------------------------------------------

//----------------------- No dues fetch activities (Department) ----------------
function fetchActivity(designation, department)
{
  let query;
  let department_map = new Map()
  department_map['Account Section'] = 'AccountSection';
  department_map['Chief Proctor Office'] = 'ChiefProctorOffice';
  department_map['Library'] = 'Library';
  department_map['SAC'] = 'SAC';
  department_map['alumniassociation'] = 'alumniassociation';
  department_map['Chief Warden'] = 'chiefwarden';
  if(designation == "HeadofDepartment")
    query = "Select * from activity_log where Registration_number in (select registration_no from academic_information where department='"+department+"') and Activity Like 'No dues rejected by "+department+" :%'";
  else
    query = "select * from activity_log where Department = '"+designation+"' and Activity LIKE 'No dues rejected by "+department_map[department]+" :%'";
  $.ajax({
    url: '/ajax/fetch_results',
    data: {
            query : query
          },
    type: 'POST',
    success: function(data)
    {
      data.forEach(function(record, i)
      {
        let remark = record.Activity.split(" : ")[1];
        $(".reject-remark").eq(i).html(remark);
      });
    }
  });
}
//------------------------------------------------------------------------------

//--------------------- No due Print (Student) ---------------------------------
function printNoDue(registration_no)
{
  let query = "Select * from student_information where registration_no = '"+registration_no+"'";
  $.ajax({
    url: '/ajax/fetch_results',
    data: {
            query : query
          },
    type: 'POST',
    success: function(data)
    {
      let student = data[0];
      var doc = new jspdf.jsPDF();
      doc.addImage(dean_academics, 'JPG', 15, 5, 175, 35);
      doc.setFontSize(10);
      doc.text(13, 50, 'Phone:0532-2271046,1044. Fax:0532-2546144,2545677. Email:academics@mnnit.ac.in . website: www.mnnit.ac.in ');
      doc.line(13,51,194,51);
      doc.setFontSize(14);
      doc.text('NO DUES CERTIFICATE FOR B.Tech/M.Tech/MCA/MBA/MSW STUDENT ONLY', 105, 65, {align : 'center', maxWidth : '150'});
      doc.setFontSize(12);
      doc.text('I, '+student.student_name+' Registration No. '+student.registration_no+' am leaving the institute, as I had applied for No Dues through Dean Student Welfare portal and following deparments/offices has given approval for the same:', 15, 85, {align : 'left', maxWidth : '180', lineHeightFactor : '2'});
      doc.autoTable({
        margin: { top: 100 },
        head: [['S.No.', 'Department', 'Status']],
        body: [
          ['1', 'Concerning Head of the Department', 'No Due'],
          ['2', 'Concerning Hostel Warden and Chief Warden', 'No Due'],
          ['3', 'Deputy Registrar(Accounts)', 'No Due'],
          ['4', 'Library', 'No Due'],
          ['5', 'Dean (Student Welfare) / Chief Proctor', 'No Due'],
          ['6', 'President Student Activity Centre(SAC) / Gymkhana', 'No Due'],
          ['7', 'Alumni Association', 'No Due'],
        ],
      });
      doc.text('Permanent Address :', 13, 170);
      doc.line(13,180,194,180);
      doc.line(13,190,194,190);
      doc.line(13,200,194,200);
      doc.line(13,210,194,210);
      doc.setFontSize(10);
      doc.text('(Name and Signature of the student)', 137, 225);
      doc.line(13,240,194,240);
      doc.text('[For Office Use of Dean(Academics)]', 75, 245);
      doc.text('Checked for Dean(Student Welfare) Portal', 13, 260);
      doc.text('[Signature and Seal of Dean(Academics)]', 130, 287);
      doc.save('Test.pdf');
    }
  });
}
//------------------------------------------------------------------------------
/*------------------- Fellowship Period eligible Entries -----------------------
  - fetchBatchStudents(tab) : Invoked from HOD Dashboad, "Phd Fellowship Start Date"
  or "Mtech Fellowship Start Date" tab, after user has selected the session and
  branch of the batch for which fellowshp period is to be alloted, The aim of the
  function is to fetch Students who are eligible for the allotment of a
  "Fellowship Period".

    Elegibility Criteria for fellowship period :
      1. Mtech :
            a. Student should have attained a passing grade in the session
               for which the fellowship period is being granted.
            b. There should not be any prior fellowship period records in the database
               (Fellowship period once set cannot be changed or unset from the HOD,
                that previlage is reserved for the "superadmin")

            * Frontend Record :
               S.No.  Name   Reg.No.  Branch   Start Date

            * fellowship_period_mtech :
               reg.no.    fellowship_start_date   fellowship_end_date

      2. Ph.D. :
            a. Student should have attained a passing grade in the session
               for which the fellowship period is being granted.
            b. If there are no prior fellowship period for the Ph.D. student
                                    OR
            b. If there exists prior fellowship period record but the SRF date is
            empty, in which case there should be a 2 year gap between current date
            and JRF start date.

            * Frontend Record :
               S.No.  Name   Reg.No.  JRF Date   SRF Date

            * fellowship_period_phd :
               reg.no.  jrf_start  jrf_end  srf_start  srf_date

  - Parameters
    1. tab : From which tab the function was invoked from, can be either "phd-fellowship-start"
       or "mtech-fellowship-start".

  - Operations :
   1. Select all the students who attained a passing grade in the dropdown 'session' belonging to
      the dropdown 'branch'.
   2. If there are no matching records for the above filter display "No data found message".
   3. If (1.) returns records, iterate each record and fetch student_info and fellowship_period data
      for each student.
   4. If no records are fetched, there is no entry for current student in the fellowship period table.
      therefor fetch current student name and assign a slot in the frontend for the fellowship start
      date to be filled (JRF for Ph.D students).
   5. If records are fetched when performing (3.), only assign a slot in the frontend for that student
      if :
        a. S/he belongs to the Phd course.
        b. If JRf date is filled but Srf date is unfilled.
        c. There is a 2 year gap between the JRF date and the current date.

*/
function fetchBatchStudents(tab)
{
  let session = $('#session').val();
  let branch = $('#branch').val();
  var query;
  if(tab == "mtech-fellowship-start")     //  BUG : 2 entries for a student !!!!!
  {
    if(branch == "All")     // VERY EXPENSIVE (SYSTEM HANG EXPENSIVE), need department variable here
      query = "select registration_no,branch from result_for_fellowship where sessionn  = '"+session+"' and program='M.Tech. ' and result='P' and approve_status='1' and branch in (select branch.branch_name from branch inner join department on branch.dep_code = department.dep_code where department.dep_name = '"+department+"')";
    else query = "select registration_no, branch from result_for_fellowship where sessionn='"+session+"' and program='M.Tech.' and branch='"+branch+"' and result='P' and approve_status='1'";
  }
  else if(tab == "phd-fellowship-start")
  {
    query = "select registration_no, branch from result_for_fellowship where sessionn='"+session+"' and program='Ph.D.' and branch='"+branch+"' and result='P' and approve_status='1'";
  }
  $('.batch-result-fail').removeClass('active');
  if(tab == "mtech-fellowship-start")         // table header, should be displayed in the last ajax call.
    document.getElementById('batch-search-result').innerHTML = '<div class="table-header hide-header-sm"><h6 class="col-1">S.No.</h6><h6 class="col-3">Name</h6><h6 class="col-2">Registration No.</h6><h6 class="col-3">Branch</h6><h6 class="col-2">Start Date</h6></div>';
  else
    document.getElementById('batch-search-result').innerHTML = '<div class="table-header hide-header-sm"><h6 class="col-1">S.No.</h6><h6 class="col-3">Name</h6><h6 class="col-2">Registration No.</h6><h6 class="col-2">JRF Start Date</h6><h6 class="col-2">SRF Start Date</h6></div>';

//------------------------ Fetch Students who have passed the specified session and belong to the specified branch -----------------------------------------------------------------------
  $.ajax({
    url: '/ajax/fetch_results',
    data: {
            query : query
          },
    type: 'POST',
    success: function(data)
    {
      if(data.length > 0)
      {
        document.getElementsByClassName('batch-search-result')[0].style.display = "block";      // toggle display for the result, should be displayed in the in the last ajax call.
        document.getElementsByClassName('select-all')[0].checked = false;

        //------------------------ Iterate Each to fetch student name and fellowship period -------------------------------------
        data.forEach((record, i) => {
          var fetch_fellowship_period_query;
          if(tab == "phd-fellowship-start")
            fetch_fellowship_period_query = "select student_information.student_name, fellowship_period_phd.jrf_start, fellowship_period_phd.jrf_end, fellowship_period_phd.srf_start, fellowship_period_phd.srf_end from student_information, fellowship_period_phd where student_information.registration_no = '"+record.registration_no+"' and fellowship_period_phd.registration_no = '"+record.registration_no+"'";
          else
            fetch_fellowship_period_query = "select student_information.student_name, fellowship_period_mtech.fellowship_start_date, fellowship_period_mtech.fellowship_end_date from student_information, fellowship_period_mtech where student_information.registration_no = '"+record.registration_no+"' and fellowship_period_mtech.registration_no = '"+record.registration_no+"'";
          $.ajax({
            url: '/ajax/fetch_results',
            data: {
                    query : fetch_fellowship_period_query
                  },
            type: 'POST',
            success: function(fellowship_periods)
            {
              if(fellowship_periods.length == 0) // there are no entries for a student in the fellowship period.
              {
                //---------------------------- Fetch Student name -------------------------------------------
                var student_name_query = "SELECT student_name FROM student_information WHERE registration_no = '"+record.registration_no+"'";
                $.ajax({
                  url: '/ajax/fetch_results',
                  data: {
                          query : student_name_query
                        },
                  type: 'POST',
                  success: function(final_data)
                  {
                    //------------------------- Display record on the frontend -------------------------------------
                    if(final_data.length && tab == "mtech-fellowship-start")
                    {
                      var table_row = `<div class="row table-row">
                        <div class="col-sm-12 col-md-1"><span class="table-mobile-label">S.No. : </span>`+(i+1)+`</div>
                        <div class="col-sm-12 col-md-3"><span class="table-mobile-label">Name : </span>`+final_data[0].student_name+`</div>
                        <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Registration No. : </span>`+record.registration_no+`</div>
                        <div class="col-sm-12 col-md-3"><span class="table-mobile-label">Branch : </span>`+record.branch+`</div>
                        <div class="col-sm-12 col-md-2"><input class="start-date" type="date" id="`+record.registration_no+`" value=""/></div>
                        </div>`
                      document.getElementById('batch-search-result').innerHTML += table_row;
                    }
                    else if(final_data.length && tab == "phd-fellowship-start")
                    {
                      var table_row = `<div class="row table-row">
                        <div class="col-sm-12 col-md-1"><span class="table-mobile-label">S.No. : </span>`+(i+1)+`</div>
                        <div class="col-sm-12 col-md-3"><span class="table-mobile-label">Name : </span>`+final_data[0].student_name+`</div>
                        <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Registration No. : </span>`+record.registration_no+`</div>
                        <div class="col-sm-12 col-md-2"><input class="start-date" type="date" id="`+record.registration_no+`" value=""/></div>
                        <div class="col-sm-12 col-md-2"><input class="jrf-start-date" type="date" id="jrf-`+record.registration_no+`" value="" disabled/></div>
                        </div>`
                      document.getElementById('batch-search-result').innerHTML += table_row;
                    }
                    //--------------------- End of Display record on the frontend --------------------------------------
                  },
                  async : false
                });
                // ----------------- End of fetch student name ----------------------------------------
              }
              else  // if there are entries for a student
              {
                if(tab == "phd-fellowship-start" && fellowship_periods[0].srf_start == "0000-00-00") // only proceed forward if its PHD records and the srf data is unfilled.
                {
                  // ----- Calculating the gap between the jrf start date and current date (in months) --------------
                  var jrf_start = new Date(fellowship_periods[0].jrf_start);
                  var current_date = new Date();
                  var months;
                  months = (current_date.getFullYear() - jrf_start.getFullYear()) * 12;
                  months -= jrf_start.getMonth();
                  months += current_date.getMonth();
                  var diff = (months <= 0) ? 0 : months;
                  //---------------- End of Calculation --------------------------------------

                  if(diff > 24)   // display data if the difference between SRF date and current date is more than 2 years.
                  {
                    var table_row = `<div class="row table-row">
                      <div class="col-sm-12 col-md-1"><span class="table-mobile-label">S.No. : </span>`+(i+1)+`</div>
                      <div class="col-sm-12 col-md-3"><span class="table-mobile-label">Name : </span>`+fellowship_periods[0].student_name+`</div>
                      <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Registration No. : </span>`+record.registration_no+`</div>
                      <div class="col-sm-12 col-md-2"><input class="srf-start-date" type="date" id="`+record.registration_no+`" value="`+fellowship_periods[0].jrf_start.split('T')[0]+`" disabled/></div>
                      <div class="col-sm-12 col-md-2"><input class="jrf-start-date" type="date" id="jrf-`+record.registration_no+`" value="" /></div>
                      </div>`
                    document.getElementById('batch-search-result').innerHTML += table_row;
                  }
                }
              }
            },
            async : false
          });
        });
        //-------------------------------- End of Student Iteration -----------------------------------
        // ---------------------------------- If there are no records to display after filtering of data ------------------------
        if($('.table-row').length > 0)  // if after all the above computations, there are some display records, show the submit button.
          document.getElementById('batch-search-result').innerHTML += `<input type="button" class="btn-wide-green" value="Set Fellowship Start Date" onclick="setFellowshipStart();"/>`;
        else // if there are no records to show,
        {
          // no result placeholder
          $('.batch-search-result').css({display : "none"});
          $('#batch-search-result').html("");
          $('.batch-result-fail').addClass('active');
        }
        //---------------------------------------------------------------------------------------------------------------------------------
      }
      else  // If no record of student(of specified branch) exists who has passed the session.
      {
        // no result placeholder
        $('.batch-search-result').css({display : "none"});
        $('#batch-search-result').html("");
        $('.batch-result-fail').addClass('active');
      }
    },
    async : false
  });
  //------------------------------- End of fetch passed students records ---------------------------------
}
//-------------------------------------------------------------------------------------
//------------------------- Fellowship Start Period UI interactions -------------------
$(document).ready(function()
{
                                                                  // BUG : Reset global date state when request for new batch is submitted.
  $('.select-all').on('click', function(){
    var global_date = $('.global-date').toggleClass('active');
    if(!global_date.hasClass('active'))
    {
      // if global date is inactive then reset the global date and list dates
      $('.global-date').val("");
      var batch_list_dates = $('.start-date');
      for(var i=0; i<batch_list_dates.length; i++)
        batch_list_dates[i].value = "";
    }
  });
  $('.global-date').on('change', function(){
    // reflect this change in all the dates of the list.
    var global_date = $('.global-date').val();
    var batch_list_dates = $('.start-date');
    for(var i=0; i<batch_list_dates.length; i++)
      batch_list_dates[i].value = global_date;
  });
});
//-------------------------------------------------------------------------------------
/*--------------------- SET Fellowship Start Date for selected Students --------------
  setFellowshipStart() : set the final fellowship start period of a candidate.

  - Operations Mtech :
  1. fetch inputed start date that has been inputted.
  2. compute the end date from the start date.
  3. Send the data to the backend.

  - Operations Ph.d. :
  1. fetch all the records of eligible students on the Frontend DOM.
  2. For each record extract the registration_no, jrf_start date, srf_start date data
    a. If jrf start date is not set move on to next record.
    b. If jrf start date is set but srf start date is not set, assign the jrf end = srf start and calculate
       the srf end date based on jrf start date.
   3. Send data to backend.
*/
function setFellowshipStart()
{
  let searchParams = new URLSearchParams(window.location.search);
  searchParams.has('tab');
  let section = searchParams.get('tab');
  var backend_data = [];
  if(section == "mtech-fellowship-start")
  {
    var batch_list_dates = $('.start-date');
    for(var i=0; i<batch_list_dates.length; i++)
    {
      if(batch_list_dates[i].value != "")
      {
        var data = {
          registration_no : "",
          start_date : "",
          end_date : ""
        };
        data.registration_no = batch_list_dates[i].id;
        data.start_date = batch_list_dates[i].value;

        var start_year = data.start_date.split('-')[0];
        var start_month = data.start_date.split('-')[1];
        var start_date = data.start_date.split('-')[2];
        data.end_date = parseInt(start_year) + 2 + "-" + start_month + "-" + start_date;
        backend_data.push(data);
      }
    }
  }
  else
  {
    var batch_list_dates = $('.table-row');
    for(var i=0; i<batch_list_dates.length; i++)
    {
      var registration_no = batch_list_dates[i].children[2].innerText;
      var jrf_start = batch_list_dates[i].children[3].children[0].value;
      if(jrf_start == "") continue;  // skip to next record.

      var start_year = jrf_start.split('-')[0];
      var start_month = jrf_start.split('-')[1];
      var start_date = jrf_start.split('-')[2];

      var srf_start = batch_list_dates[i].children[4].children[0].value;
      var srf_end = "";
      var jrf_end = "";
      if(srf_start == "") // if srf date is not filled.
          jrf_end = parseInt(start_year) + 5 + "-" + start_month + "-" + start_date;
      else
      {
          jrf_end = srf_start;
          srf_end = parseInt(start_year) + 5 + "-" + start_month + "-" + start_date;
      }
      var data = {
        registration_no : registration_no,
        jrf_start: jrf_start,
        jrf_end : jrf_end,
        srf_start : srf_start,
        srf_end : srf_end
      };
      backend_data.push(data);
    }
  }
  var url;
  if(section == "mtech-fellowship-start")
    url = "/fellowship/fellowship-period/mtech";
  else
    url = "/fellowship/fellowship-period/phd";
  $.ajax({
    url: url,
    data: {
            backend_data : backend_data
          },
    type: 'POST',
    success: function(data)
    {
      location.reload();
    }
  });
}
//-------------------------------------------------------------------------------------
//----------------------------- Function to return previous session -------------------
function getPrevSession(session)
{
  var prev_session;
  var years = session.split('-');
  prev_session = (parseInt(years[0]) - 1) + '-' + years[0];
  return prev_session;
}
//-------------------------------------------------------------------------------------
/*----------------------------- Fresh Fellowship Fill/Display -------------------------
  freshFillDisplay(tab, department, sessions) : fetches fresh fellowships based on the
  session, semester, month, branch, admission type(for phd) inputed by the fellowship controll
  panel dropdown menues and displays the eligible candidates based on the prior semester's
  results.
    The fellowships of those displayed candidates can be filled out after being displayed.

  - Parameters :
    - tab : "mtech-fellowship" or "phd-fellowship"
    - department : The department for which the fellowships are to be granted.
    - sessions : session list of the course from where the function is being called from.

  - Operation :
   1. Get the parameters of last semester results based on which you will filter the eligible candidates :
    a. get the previous_semester and semester_type based on the semester, month, session for which the fellowship is
       being given.
   2. Filter the students based on the previous semester results where only the students who have attained a passing grade.
   3. If there are already records of fellowships in the fellowship table they are not considered "fresh" unless they are "save"
      action_type.
    a. The "saved" fellowships are stored in a map along with the already filled "saved" data to be populated on the frontend to
       either be edited or processed as is.
   4. Compare the "fellowship date" (date for which the fellowship is being given out for) with the candidates "blocked fellowship
      date", if there are no blocked fellowship for that candidate or the fellowship date is not within the candidates blocked
      period.
   5. Compare the "fellowship date" with the "fellowship period" of the candidate.
   6. At the end of the filter you'd have a list of fresh registration no.s of the saved as well as fresh candidates. And a map
      with the registration no and data of the saved fresh fellowship details
   7. Fetch the name and account no.s of the "eligible students" to be presented in the frontend.
   8. Populate the frontend with the entries of the eligible students or display an empty list message.
*/
function freshFillDisplay(tab, department, sessions)
{
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var session = $('#session').val();
  var eligible_students = []; // BUILD THE DATA TO be DISPLAYED ON THE FRONTEND
  var admission_mode = $('#admission-mode').val();

  var month = parseInt($('#month').val());  // fellowship month : month at which fellowship is given.
  var branch = $('#branch').val();
  var semester = parseInt($('#semester').val());

  // -------------------- Previous semester Result parameters ------------------
  var odd_start, odd_end, even_start, even_end;
  sessions.forEach((s) => {       // current session data
    if(s.session == session)
    {
      odd_start = parseInt(s.odd_start);
      odd_end = parseInt(s.odd_end);
      even_start = parseInt(s.even_start);
      even_end = parseInt(s.even_end);
    }
  });
  var semester_type_result; // semester whose exam results you need to grant fellowship (1 less than the "fellowship semester")
  var session_for_result;   // session whose exam results you need to grant fellowship same in case of even, 1 less than the "fellowship year" in case of odd

  if((odd_start < odd_end && odd_start <= month && odd_end >= month) || (odd_start > odd_end && odd_start >= month && odd_end <= month))
  {   // if fellowship month falls under "odd" check result of previous "even" semester
      semester_type_result = "Even";
      session_for_result = getPrevSession(session);   // session would be of last year.
  }
  else
  {   // vise versa.
      semester_type_result = "Odd";
      session_for_result = session; // session would be of same year.
  }
  //----------------------------------------------------------------------------
  /*
  Select students elegible for "Fresh" fellowship (Criteria):
  1. Should be an M.Tech Student / Ph.D. Student
  2. Should have a passing grade in result for previous semester, session (result_for_fellowship)
  3. Should not already have a record in (fellowship_mtech / phd_fellowship) under the fellowship semester(ongoing semester).
  4. Should fall under the duration of (fellowship_period_mtech / fellowship_period_phd)
  5. Should not fall under the duration of (blocked_fellowships_mtech / blocked_fellowships_phd)
  6. Check for the elegible students in the "fellowship tables" as well with the pending_fill = '0' and action_type = 'save'
  */
  // query to find result for the inputed fellowship criteria.
  var saved_fellowships = new Map();  // map to save the details of the elegible students with save status.
  var fellowship_results_query;
  if(tab == "mtech-fellowship")
  {
    if(branch != 'All')
      fellowship_results_query = "SELECT registration_no FROM result_for_fellowship WHERE program='M.Tech.' AND semester='"+(semester - 1)+"' AND semester_type='"+semester_type_result+"' AND sessionn='"+session_for_result+"' AND branch='"+branch+"' AND result='P' AND approve_status='1'";
    else
      fellowship_results_query = "SELECT registration_no FROM result_for_fellowship WHERE program='M.Tech.' AND semester='"+(semester - 1)+"' AND semester_type='"+semester_type_result+"' AND sessionn='"+session_for_result+"' AND result='P' AND approve_status='1'";
  }
  else
    fellowship_results_query = "SELECT result_for_fellowship.registration_no FROM result_for_fellowship, phd WHERE result_for_fellowship.registration_no = phd.registration_no AND phd.mode_of_admission='"+admission_mode+"' AND result_for_fellowship.program='Ph.D.' AND semester='"+(semester - 1)+"' AND result_for_fellowship.semester_type='"+semester_type_result+"' AND result_for_fellowship.sessionn='"+session_for_result+"' AND result_for_fellowship.branch='"+department+"' AND result_for_fellowship.result='P' AND result_for_fellowship.approve_status='1'";
    $.ajax({
  		url: '/ajax/fetch_results',
  		data: {
     		    query : fellowship_results_query
    	 	  },
  		type: 'POST',
  		success: function(results)
  		{
        if(results.length == 0)
        {
          // If there are no such results then The results have not yet been uploaded.
          alert('The results for this Fellowship period have not yet been uploaded');
        }
        else
        {
          // Filter for each student
          results.forEach(function(result)
          {
            var registration_no = result.registration_no;
            var fellowship_entry_query;
            // query to check if THIS STUDENT's fellowship for the inputted semester and month have already been alotted or not.
            if(tab == "mtech-fellowship")
              fellowship_entry_query = "SELECT * FROM fellowship_mtech WHERE registration_no='"+registration_no+"' AND month = '"+months[month]+"' AND semester='"+semester+"'";
            else
              fellowship_entry_query = "SELECT * FROM fellowship_phd WHERE registration_no='"+registration_no+"' AND month = '"+months[month]+"' AND semester='"+semester+"'";
            $.ajax({
    						url: '/ajax/fetch_results',
    						data: {
       				    			query : fellowship_entry_query
      	 			  		},
    						type: 'POST',
						success: function(entry)
						{
              // If there is no such fellowship record or a single fellowship record that is fresh filled and saved.
              if(entry.length == 0 || (entry.length == 1 && entry[0].pending_fill == '0' && entry[0].action_type == 'save'))
              {
                // insert the candidates in the saved_fellowships map to later seggrigate the fresh unsaved vs saved candidates.
                if(entry.length == 1  && entry[0].pending_fill == '0' && entry[0].action_type == 'save')
                  saved_fellowships.set(registration_no, entry[0]);

                var date = new Date();
                var current_year = date.getFullYear();  // WARNING : THIS WONT BE CURRENT YEAR, MIGHT HAVE TO EXTRACT YEAR FROM SESSION SOMEHOW, WHICH DATE TO CONSIDER ?
                                                        // POSSIBLE SOLUTION : If current year is lower then the session upper bound, use current_year else current_year = session upper bound.
                var date_str = current_year + '-' + (month+1) + '-' + date.getDate(); // fellowship date current_date-inputted month-current_year
                var fellowship_date = new Date(date_str);
                var blocked_fellowship_query;
                // query to check if the student has a fellowship block record.
                if(tab == "mtech-fellowship")
                  blocked_fellowship_query = "SELECT * FROM blocked_fellowships_mtech where registration_no='"+registration_no+"'";
                else
                  blocked_fellowship_query = "SELECT * FROM blocked_fellowships_phd where registration_no='"+registration_no+"'";
                $.ajax({
        						url: '/ajax/fetch_results',
        						data: {
           				    			query : blocked_fellowship_query
          	 			  		},
        						type: 'POST',
        						success: function(blocked_fellowship)
        						{
                      if(!blocked_fellowship.length || (fellowship_date < new Date(blocked_fellowship[0].block_start_date) && fellowship > new Date(blocked_fellowship[0].block_end_date)))
                      {
                        // if the student does not has any blocked fellowship OR if the fellowship date of the student is outside the blocked fellowship range.
                        var fellowship_period_query;
                        if(tab == "mtech-fellowship")
                          fellowship_period_query = "SELECT * FROM fellowship_period_mtech where registration_no='"+registration_no+"'";
                        else
                          fellowship_period_query = "SELECT * FROM fellowship_period_phd where registration_no='"+registration_no+"'";
                        $.ajax({
                						url: '/ajax/fetch_results',
                						data: {
                   				    			query : fellowship_period_query
                  	 			  		},
                						type: 'POST',
                						success: function(fellowship_period)
                						{
                              // if the fellowship date comes under fellowship period
                              if(tab == "mtech-fellowship")
                              {
                                if(fellowship_period.length && fellowship_date >= new Date(fellowship_period[0].fellowship_start_date) && fellowship_date <= new Date(fellowship_period[0].fellowship_end_date))
                                  eligible_students.push(registration_no);
                              }
                              else if(tab == "phd-fellowship" && fellowship_period.length)
                              {
                                // SRF/JRF Logic
                                var start_date, end_date;
                                start_date = new Date(fellowship_period[0].jrf_start);
                                if(fellowship_period[0].srf_end == "0000-00-00")
                                  end_date = new Date(fellowship_period[0].jrf_end);
                                else
                                  end_date = new Date(fellowship_period[0].srf_end);

                                if(fellowship_date >= start_date && fellowship_date <= end_date)
                                  eligible_students.push(registration_no);
                              }
                            },
                            async : false
                        }); // close ajax : fellowship_period_query
                      }
                    },
                    async : false
                  }); // close ajax : blocked_fellowship_query
                }
              },
              async : false
            }); // close ajax : fellowship_entry_query
          }); // close forEach : eligible strudent
        }
      },
      async : false
  });

  //---------------- Display the BUILT DATA on the FRONTEND --------------------
  var frontend_data = [];
  eligible_students.forEach((student) => {
    // data to be assembled and sent to the backend
    var data = {    // BACKEND DATA
      registration_no : student,
      name : undefined,
      account_no : undefined,
      semester : undefined,
      no_of_days : undefined,
      leave_dates : undefined,
      deduction : undefined,
      amount : undefined,
      action_type : undefined,
      full_stipend : undefined,
      hra : undefined,
      remark : undefined
    };
    // --------- Populating saved fellowship data to Backend data --------------
    if(saved_fellowships.has(student))
    {
      data.no_of_days = saved_fellowships.get(student).no_of_days;
      data.deduction = saved_fellowships.get(student).deduction;
      data.amount = saved_fellowships.get(student).amount;
      data.action_type = saved_fellowships.get(student).action_type;
      data.remark = saved_fellowships.get(student).remark;
      //--------------------- Fellowship unauthorised dates ------------------
      data.leave_dates = saved_fellowships.get(student).leave_dates;
      var date_string_arr = [];
      if(data.leave_dates.length)
        date_string_arr = data.leave_dates.split(',');
      unauthorised_leaves.set(data.registration_no, date_string_arr);
      //----------------------------------------------------------------------
      if(tab == "phd-fellowship")
      {
        data.full_stipend = saved_fellowships.get(student).full_stipend;
        data.hra = saved_fellowships.get(student).hra;
      }
    }
    //-------------------------------------------------------------------------

    //----------- Fetch Student name and Account Number -----------------------
    var name_account_query = "SELECT student_information.student_name, student_financial_info.bank_account_no FROM student_information, student_financial_info WHERE student_information.registration_no ='"+student+"' AND student_financial_info.registration_no ='"+student+"'";
    $.ajax({
        url: '/ajax/fetch_results',
        data: {
              query : name_account_query
            },
        type: 'POST',
        success: function(fetched_data)
        {
          data.name = fetched_data[0].student_name;
          data.account_no = fetched_data[0].bank_account_no;
          data.semester = semester;
          frontend_data.push(data);
        },
        async : false
      });
  });
  //----------------------------------------------------------------------------

  //---------------------- Populate frontend ----------------------------------
  if(frontend_data.length)
  {
    $('.batch-search-result').addClass('active');
    var search_result = document.getElementsByClassName('batch-search-result')[0];
    if(tab == "mtech-fellowship")
    {
      search_result.innerHTML += `<div class="table-header hide-header-sm">
        <h6 class="col-1">S.No.</h6>
        <h6 class="col-2">Registration</h6>
        <h6 class="col-2">Name</h6>
        <h6 class="col-2">Account No.</h6>
        <h6 class="col-1">Unauthorized Leaves</h6>
        <h6 class="col-1">Deduction</h6>
        <h6 class="col-1">Payable Amount</h6>
        <h6 class="col-2">Remark</h6>
      </div>`;
      frontend_data.forEach((data, i) => {
        var no_of_days = (saved_fellowships.has(data.registration_no))? data.no_of_days : 0;
        var deduction = (saved_fellowships.has(data.registration_no))? data.deduction : 0;
        var amount = (saved_fellowships.has(data.registration_no))? data.amount : 0;
        var remark = (saved_fellowships.has(data.registration_no))? data.remark : "";
        // null checks from database.
        no_of_days = (no_of_days == null)? 0 : no_of_days;
        deduction = (deduction == null)? 0 : deduction;
        amount = (amount == null)? 0 : amount;
        remark = (remark == null)? "" : remark;
        search_result.innerHTML += `<div class="row table-row" id="`+data.registration_no+`">
          <div class="col-sm-12 col-md-1"><span class="table-mobile-label">S.No. : </span>`+(i+1)+`</div>
          <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Registration : </span>`+data.registration_no+`</div>
          <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Name : </span>`+data.name+`</div>
          <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Account No. : </span>`+data.account_no+`</div>
          <div class="col-sm-12 col-md-1"><input type="text" placeholder="Unauthorized Leaves" value="`+no_of_days+`" class="leaves" onclick="showCal('`+data.registration_no+`')"/></div>
          <div class="col-sm-12 col-md-1"><input type="text" placeholder="Deductions" value="`+deduction+`" class="deductions"/></div>
          <div class="col-sm-12 col-md-1"><span class="table-mobile-label">Payable Amount: </span><span class="fellowship-total">`+amount+`</span></div>
          <div class="col-sm-12 col-md-2"><input type="text" placeholder="Remark" value="`+remark+`" class="remark"/></div>
        </div>`;
      });
    }
    else
    {
      search_result.innerHTML += `<div class="table-header hide-header-sm">
        <h6 class="col-1">S.No.</h6>
        <h6 class="col-2">Registration</h6>
        <h6 class="col-2">Name</h6>
        <h6 class="col-2">Account No.</h6>
        <h6 class="col-2">Semester</h6>
        <h6 class="col-2">Remark</h6>
      </div>`;
      frontend_data.forEach((data, i) => {
        var no_of_days = (saved_fellowships.has(data.registration_no))? data.no_of_days : "";
        var deduction = (saved_fellowships.has(data.registration_no))? data.deduction : "";
        var amount = (saved_fellowships.has(data.registration_no))? data.amount : 0;
        var remark = (saved_fellowships.has(data.registration_no))? data.remark : "";
        var full_stipend = (saved_fellowships.has(data.registration_no))? data.full_stipend : "";
        var hra = (saved_fellowships.has(data.registration_no))? data.hra : "";
        // null checks from database.

        no_of_days = (no_of_days == null)? "" : no_of_days;
        deduction = (deduction == null)? "" : deduction;
        amount = (amount == null)? 0 : amount;
        remark = (remark == null)? "" : remark;
        full_stipend = (full_stipend == null)? "" : full_stipend;
        hra = (hra == null)? "" : hra;

        search_result.innerHTML += `
        <div class="table-row-wrapper" id="`+data.registration_no+`">
          <div class="row table-row">
            <div class="col-sm-12 col-md-1"><span class="table-mobile-label">S.No. : </span>`+(i+1)+`</div>
            <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Registration : </span>`+data.registration_no+`</div>
            <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Name : </span>`+data.name+`</div>
            <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Account No. : </span>`+data.account_no+`</div>
            <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Semester : </span><span class="phd-semester">`+data.semester+`</span></div>
            <div class="col-sm-12 col-md-2"><input type="text" placeholder="Remark" class="remark" value="`+remark+`"/></div>
          </div>
          <div class="row table-row">
            <div class="col-sm-12 col-md-2"><input type="text" placeholder="Amount" value="`+full_stipend+`" class="fellowship-amount"/></div>
            <div class="col-sm-12 col-md-2"><input type="text" placeholder="Unauthorized Leaves" value="`+no_of_days+`" class="leaves" onclick="showCal('`+data.registration_no+`')"/></div>
            <div class="col-sm-12 col-md-2"><input type="text" placeholder="HRA" value="`+hra+`" class="hra"/></div>
            <div class="col-sm-12 col-md-2"><input type="text" placeholder="Deductions" value="`+deduction+`" class="deductions"/></div>
            <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Payable Amount: </span><span class="fellowship-total">`+amount+`</span></div>
          </div>
        </div>`;
      });
    }
    search_result.innerHTML += `<div class="btn-wrapper-center">
      <button class="btn-wide-blue" style="width : 35%; margin:10px" onclick="fellowshipSubmit('`+tab+`','save','fresh');">Save</button>
      <button class="btn-wide-green" style="width : 35%; margin:10px" onclick="fellowshipSubmit('`+tab+`','freeze','fresh');">Freeze</button>
    </div>`;
  }
  else
  {
    // display "No Eligible candidate found message"
    $('.batch-result-fail').addClass('active');
  }
}
/*------------------------------- Fellowship Save/ Freeze ---------------------------------------
  FellowshipSubmit(tab, action_type, fellowship_type) : Submit the fellowships to the backend whose
  fellowship data has been filled out, Invoked after the fellowship of either all or some of the eligible
  candidates fellowship data is filled and either "saved" or "freezed".

  Parameters :
    - tab : mtech or phd
    - action_type : can be either "save" or "freeze" the selected candidates.
    - fellowship_type : "Pending" or "Fresh"

  Operation :
  1. iterate through the entire fellowship DOM rows and fetch all the values from the
     input boxes of the fellowships.
  2. Add null checks, populating the empty textboxes with zeros and assemble a JSON
     object to send to the backend.
  3. Send the data to the designated endpoint route.
*/
function fellowshipSubmit(tab, action_type, fellowship_type)
{
  var isApproved = confirm("Are you sure you want to "+action_type+" these fellowships ?");
  if(!isApproved) return;
  /*
    Fellowship object to be sent to the server :
    fellowship = [{
      registration_no : string,
      semester : string,
      leave : int,
      deduction : int,
      full_stipend : int,       // undefined for mtech
      hra : int,                // undefined for mtech
      amount : int,
      remark : string,

      session : string,
      month : string,
      action_type : string,     // save / Freeze
      fellowship_type : string  // fresh / pending
  },
  {..}, {..}, ..]
  */
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var session = $('#session').val();
  var month = months[parseInt($('#month').val())];
  var fellowships = [];
  if(tab == "mtech-fellowship")
  {
    var n = $('.table-row').length;
    for(var i=0; i<n; i++)
    {
      data = {
        registration_no : $('.table-row').eq(i).attr('id'),
        semester : $('#semester').val(),
        leave : undefined,
        deduction : undefined,
        leave_dates : "",
        amount : undefined,
        remark : $('.table-row').eq(i).find('.remark').eq(0).val(),
        session : session,
        month : month,
      };
      var leave = $('.table-row').eq(i).find('.leaves').eq(0).val();
      data.leave = (leave == "")? 0 : parseInt(leave);
      var deduction = $('.table-row').eq(i).find('.deductions').eq(0).val();
      data.deduction = (deduction == "")? 0 : parseInt(deduction);
      var amount = $('.table-row').eq(i).find('.fellowship-total').eq(0).html();
      data.amount = (amount == '0')? 0 : parseInt(amount);

      if(unauthorised_leaves.has(data.registration_no))
      {
        unauthorised_leaves.get(data.registration_no).forEach((date) => {
          data.leave_dates += date + ",";
        });
        data.leave_dates = data.leave_dates.substring(0, data.leave_dates.length - 1); // remove last comma.
      }
      fellowships.push(data);
    }
  }
  else
  {
      var n = $('.table-row-wrapper').length;
      for(var i=0; i<n; i++)
      {
        data = {
          registration_no : $('.table-row-wrapper').eq(i).attr('id'),
          semester : $('.table-row-wrapper').eq(i).find('.phd-semester').eq(0).html(),
          leave : undefined,
          deduction : undefined,
          leave_dates : "",
          amount : undefined,
          full_stipend : undefined,
          hra : undefined,
          admission_mode : $('#admission-mode').val(),
          remark : $('.table-row-wrapper').eq(i).find('.remark').eq(0).val(),
          session : session,
          month : month,
        };
        var leave = $('.table-row-wrapper').eq(i).find('.leaves').eq(0).val();
        data.leave = (leave == "")? 0 : parseInt(leave);

        var deduction = $('.table-row-wrapper').eq(i).find('.deductions').eq(0).val();
        data.deduction = (deduction == "")? 0 : parseInt(deduction);

        var full_stipend = $('.table-row-wrapper').eq(i).find('.fellowship-amount').eq(0).val();
        data.full_stipend = (full_stipend == "")? 0 : parseInt(full_stipend);

        var hra = $('.table-row-wrapper').eq(i).find('.hra').eq(0).val();
        data.hra = (hra == "")? 0 : parseInt(hra);

        var amount = $('.table-row-wrapper').eq(i).find('.fellowship-total').eq(0).html();
        data.amount = (amount == '0')? 0 : parseInt(amount);

        if(unauthorised_leaves.has(data.registration_no))
        {
          unauthorised_leaves.get(data.registration_no).forEach((date) => {
            data.leave_dates += date + ",";
          });
          data.leave_dates = data.leave_dates.substring(0, data.leave_dates.length - 1); // remove last comma.
        }
        fellowships.push(data);
      }
  }
  // endpoint = "/fellowship/:course/:fellowship_type/:action_type/:session/:month"
  // example : POST = "/fellowship/mtech-fellowship/fresh/save/2018-2019/September"
  $.ajax({
    url: "/fellowship/"+tab+"/"+fellowship_type+"/"+action_type+"/"+session+"/"+month,
    data: {
            fellowships : fellowships
          },
    type: 'POST',
    success: function(data){
      console.log(data);  // <-- print this data onto the popup.
      popup(1); // open popup
      /*------ populate Fellowship popup with the updated data. ---------

      Frontend element = #fellowship-table

      //----------------------------------------------------------------*/
    },
    async : false
  });
  // send this data to the backend and Refresh page
}
//------------------------------------------------------------------------------
/*------------------------- Fellowship Popup Table -----------------------------
printUpdatedFellowship() : generates a pdf using "fellowship-table" containing feedback
for saved/freezed entries, after entries have been successfully updated in the database.

Invoked when the user clicks on the "print fellowships" button on the "Fellowship Popup"
*/
function printUpdatedFellowship()
{

}
//------------------------------------------------------------------------------
/*-------------------- Fellowship Fill Form Interaction Script -----------------
fellowshipMonthLoad(tab) : Loads the fellowship months based on every change in the "session"
and "semester" dropdown menues in the fellowship page the session.

Parameters :
  - tab : to determine which session to pull the odd even semester data from.

Operations :
  1.  Fetch current session based on session dropdown, and find the session based on which
      the month dropdown needs to be populated.
  2.  Get the start and end months of odd and even semesters
  3.  If even start < even end then it has looped around ;
        Start printing from even start till 11th index then print from 0th to end index.
      Otherwise print from start to end.
*/
function fellowshipMonthLoad(tab) // Loads fellowship months based on odd even semester distribution in the selected session
{
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var session = $('#session').val();  // session dropdown
    var current_session;
    sessions.forEach((s, i) => {    // how is there sessions here ??
      if(s.session == session)
        current_session = s;
    });
    var month_frontend = document.getElementById('month');
    month_frontend.innerHTML = "";
    var semester = (tab == "mtech-fellowship")? parseInt($('#semester').val()) : $('#semester').val();
    var start, end;
    // populating odd even semesters start end months
    if(semester % 2 == 0)
    {
      start = current_session.even_start;
      end = current_session.even_end;
    }
    else
    {
      start = current_session.odd_start;
      end = current_session.odd_end;
    }
    // if even start < even end then it has looped around ; start printing from even start till 11th index then print from 0th to end index otherwise print from start to end
    if(start > end)
    {
      for(var i = start; i<=11; i++)
        month_frontend.innerHTML += `<option value="`+i+`">`+months[i]+`</option>`;

      for(var i = 0; i<=end; i++)
        month_frontend.innerHTML += `<option value="`+i+`">`+months[i]+`</option>`;
    }
    else
    {
      for(var i=start; i<=end; i++)
        month_frontend.innerHTML += `<option value="`+i+`">`+months[i]+`</option>`;
    }
}
//------------------------------------------------------------------------------
/*------------------ Select leave date in phd_fellowship -----------------------
  showCal(reg_no) : Invoke when the leaves textbox is clicked to display the calender
  popup to select unauthorised phd leaves.

  Parameter :
    - reg_no : Student whose calender needs to be generated.

  Operations :
  1. find the leave text box which was clicked in the dom.
  2. set the custom date elements class as the registration_no of the clicked fellowship
  3. open calender.
*/
function showCal(reg_no)
{
    popup(2);
    $('#caldiv').addClass(reg_no);
    init(); // function call to generate calendar.
}
//---------------------------- Update leave date -------------------------------
/*
  updateLeaves() : Invoked when the calender popup is closed, the leaves input box
  is populated by the no. of unauthorised leaves selected and the fellowship is
  recalculated for the student whose leave calendar was selected.

  - Operations :
    1. Close the Calender and clear the calender of the dates of the prior selected
       student.
    2. fetch the unauthorised_leaves from the unauthorised_leaves map.
    3. Update the leaves input textbox of the corresponding fellowship with the
       no. of selected leaves.
    4. Recalculate the total fellowship amount.
*/
function updateLeaves()
{
  let searchParams = new URLSearchParams(window.location.search);
  searchParams.has('tab');
  let tab = searchParams.get('tab');
  popup(2);
  let reg_no = $('#caldiv').attr('class');   // extract reg. no from here
  $('#caldiv').removeClass(reg_no);
  $('#caldiv').html('');
  let leaves = unauthorised_leaves.get(reg_no);

  var parent = $('#'+reg_no);
  var leave = leaves.length; // leave input box of the target fellowship
  var deduction = parent.find('.deductions').eq(0).val(); // Deduction input box of the target fellowship
  deduction = (deduction == "")? 0 : parseFloat(deduction);
  parent.find('.leaves').eq(0).val(leaves.length);
  var amount;
  //------------------- Recalculate Phd fellowship (old formula) -------------
  if(tab == "phd-fellowship")
  {
    var hra = parent.find('.hra').eq(0).val();;
    var full_stipend = parent.find('.fellowship-amount').eq(0).val();
    full_stipend = (full_stipend == "")? 0 : parseFloat(full_stipend);
    hra = (hra == "")? 0 : parseFloat(hra);
    amount = full_stipend - (full_stipend / 30) * leave + hra - deduction;
  }
  else
  {
    amount = 12400 - (12400 / 30)*leave - deduction;
  }
  parent.find('.fellowship-total').eq(0).html(parseInt(amount));
}
//------------------------------------------------------------------------------
/*----------------------------- Calculate Fellowship ---------------------------
amuount = a - (a/30)*b +c -e
where a = full fellowship
b = number of unauthorised leaves
c = hra
e = deduction

amount = 12400 - (12400/30)*a -c
where a = number of unauthorised leaves
c = deduction
calcFellowship() : To calculate the fellowships of individul fellowship candidates
as values are being inputted in either amount, leaves, hra or stipend input box.

- operations :
  1. find the course either phd or mtech.
  2. fetch values from the targetted fellowship.
  3. recalculate the fellowship amount of the targetted fellowship.
*/
function calcFellowship()
{
  let searchParams = new URLSearchParams(window.location.search);
  searchParams.has('tab');
  let tab = searchParams.get('tab');
  var parent = $(this).closest('.row'); // parent of the selected input box(target fellowship)
  var leave = parent.find('.leaves').eq(0).val(); // leave input box of the target fellowship
  var deduction = parent.find('.deductions').eq(0).val(); // Deduction input box of the target fellowship
  leave = (leave == "")? 0 : parseFloat(leave);
  deduction = (deduction == "")? 0 : parseFloat(deduction);
  //----------------- Phd Input Boxes ------------------
  var hra;
  var full_stipend;
  if(tab == "phd-fellowship")
  {
    full_stipend = parent.find('.fellowship-amount').eq(0).val();
    hra = parent.find('.hra').eq(0).val();

    full_stipend = (full_stipend == "")? 0 : parseFloat(full_stipend);
    hra = (hra == "")? 0 : parseFloat(hra);
  }
  //-------------------------------------------------------

  //-------------- Calculate Phd/Mtech Fellowship ---------
  var amount;
  if(tab == "mtech-fellowship")
    amount = 12400 - (12400 / 30)*leave - deduction;
  else
    amount = full_stipend - (full_stipend / 30) * leave + hra - deduction;
  parent.find('.fellowship-total').eq(0).html(parseInt(amount));
}

//- Calculate fellowships with every keypress in fellowship input box
$(document.body).on('keyup','.leaves',calcFellowship);
$(document.body).on('keyup','.deductions',calcFellowship);
$(document.body).on('keyup','.hra',calcFellowship);
$(document.body).on('keyup','.fellowship-amount',calcFellowship);
//------------------------------------------------------------------------------
/*------------------------------- Fellowship Preview ---------------------------
  previewFellowship(tab, department) : Preview Already filled "fresh" or "pending" in the
  search result area. Invoked when the "Fellowship Display Toggle" is active.

  - Parameters :
    - tab : "mtech-fellowship" or "phd_fellowship"
    - department : Department for which the fellowship is being processed.

  - Operations :
  1.  Fetch query parameters form the frontend dropdown bars.
  2. Execute the query and fetch the fellowship data.
  3. Populate the search result area with either fetched data or an empty placeholder
     if the requested fellowship data from the combination of "fellowship-controll panels"
     dropdown menus.
*/
function previewFellowship(tab, department)
{
  //--------- Fetch Query parameters from the frontend control panel ----------------------
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var session = $('#session').val();
  session = session.split('-')[1]; // store the latter half of the session (2018-2019 = 2019)
  var eligible_students = []; // BUILD THE DATA TO be DISPLAYED ON THE FRONTEND
  var admission_mode = $('#admission-mode').val();  // in case of phd.

  var month = parseInt($('#month').val());  // fellowship month : month at which fellowship is given.
  var branch = $('#branch').val();
  var semester = $('#semester').val();
  var fellowship_type = $('#fellowship-type').val();  // pending or fresh.
  var pending_fill = (fellowship_type == "fresh")? 0 : 1;
  //-----------------------------------------------------------------------------------------
  /*
  Query String : Find the data of fellowships the follow the following conditions :
  1. They belong to "fellowship_mtech" in case of mtech candidates or "phd_fellowship" in case of phd candidates.
  2. They belong to the specified "department" passed in the function parameter.
  3. They belong to the selected "semester" from the semester dropdown.
  4. They belong to the selected "month" from the month dropdown.
  5. They are either "pending" or "fresh" filled depending on the fellowship type dropdown.
  6. They belong to the selectd "session" from the session dropdown.
  7. Mtech : Branch dropdown.
  */
  //------------------------------------- Query Execution ----------------------------------
  var fellowship_results_query;
  if(tab == "mtech-fellowship")
  {
    if(branch == 'All')
      fellowship_results_query = "SELECT fellowship_mtech.registration_no, student_information.student_name, student_financial_info.bank_account_no, fellowship_mtech.no_of_days, fellowship_mtech.deduction, fellowship_mtech.amount, fellowship_mtech.remark, fellowship_mtech.Date FROM fellowship_mtech, student_information, student_financial_info, academic_information WHERE fellowship_mtech.registration_no = student_financial_info.registration_no AND fellowship_mtech.registration_no = academic_information.registration_no AND fellowship_mtech.registration_no = student_financial_info.registration_no AND student_financial_info.registration_no = student_information.registration_no AND student_financial_info.registration_no = academic_information.registration_no AND student_information.registration_no = academic_information.registration_no AND academic_information.department = '"+department+"' AND fellowship_mtech.semester='"+semester+"' AND fellowship_mtech.month='"+months[month]+"' AND fellowship_mtech.sessionn='"+session+"' AND pending_fill='"+pending_fill+"'";
    else
      fellowship_results_query = "SELECT fellowship_mtech.registration_no, student_information.student_name, student_financial_info.bank_account_no, fellowship_mtech.no_of_days, fellowship_mtech.deduction, fellowship_mtech.amount, fellowship_mtech.remark, fellowship_mtech.Date FROM fellowship_mtech, student_information, student_financial_info, academic_information WHERE fellowship_mtech.registration_no = student_financial_info.registration_no AND fellowship_mtech.registration_no = academic_information.registration_no AND fellowship_mtech.registration_no = student_financial_info.registration_no AND student_financial_info.registration_no = student_information.registration_no AND student_financial_info.registration_no = academic_information.registration_no AND student_information.registration_no = academic_information.registration_no AND academic_information.department = '"+department+"' AND academic_information.branch='"+branch+"' AND fellowship_mtech.semester='"+semester+"' AND fellowship_mtech.month='"+months[month]+"' AND fellowship_mtech.sessionn='"+session+"' AND fellowship_mtech.pending_fill='"+pending_fill+"'";
  }
  else
    fellowship_results_query = "SELECT fellowship_phd.registration_no, fellowship_phd.semester, fellowship_phd.no_of_days, fellowship_phd.hra, fellowship_phd.full_stipend, fellowship_phd.deduction, fellowship_phd.amount, fellowship_phd.remark, fellowship_phd.Date, student_information.student_name, student_financial_info.bank_account_no FROM fellowship_phd, student_information, student_financial_info, phd WHERE fellowship_phd.registration_no = student_information.registration_no AND fellowship_phd.registration_no = student_financial_info.registration_no AND fellowship_phd.registration_no = phd.registration_no AND student_information.registration_no = student_financial_info.registration_no AND student_information.registration_no = phd.registration_no AND student_financial_info.registration_no = phd.registration_no AND phd.mode_of_admission='"+admission_mode+"' AND fellowship_phd.sessionn='"+session+"' AND fellowship_phd.pending_fill='"+pending_fill+"' AND fellowship_phd.month='"+months[month]+"' AND phd.department = '"+department+"' AND fellowship_phd.semester='"+semester+"'";
  //-----------------------------------------------------------------------------------------------
  $.ajax({
      url: '/ajax/fetch_results',
      data: {
            query : fellowship_results_query
          },
      type: 'POST',
      success: function(backend_data)
      {
          var frontend_data = [];
          //----- discard all the fellowships with amount == 0 --------
          backend_data.forEach((data) => {
            if(data.amount != 0)
              frontend_data.push(data);
          });
          //------------------------------------------------------------

          //----------- Populate the frontend Search Result area ------
          if(frontend_data.length)
          {
            $('.batch-search-result').addClass('active'); // search result area display active
            var search_result = document.getElementsByClassName('batch-search-result')[0];
            if(tab == "mtech-fellowship")
            {
              //---------------- M.Tech. Search Result Header ---------------
              search_result.innerHTML += `<div class="table-header hide-header-sm">
                <h6 class="col-1">S.No.</h6>
                <h6 class="col-1">Registration</h6>
                <h6 class="col-2">Name</h6>
                <h6 class="col-2">Account No.</h6>
                <h6 class="col-1">Leaves</h6>
                <h6 class="col-1">Deduction</h6>
                <h6 class="col-1">Payable Amount</h6>
                <h6 class="col-2">Remark</h6>
                <h6 class="col-1">Date</h6>
              </div>`;
              //-------------------------------------------------------

              //--------------- M.Tech. Search Result Rows -------------------
              frontend_data.forEach((data, i) => {
                search_result.innerHTML += `<div class="row table-row" id="`+data.registration_no+`">
                  <div class="col-sm-12 col-md-1"><span class="table-mobile-label">S.No. : </span>`+(i+1)+`</div>
                  <div class="col-sm-12 col-md-1"><span class="table-mobile-label">Registration : </span>`+data.registration_no+`</div>
                  <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Name : </span>`+data.student_name+`</div>
                  <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Account No. : </span>`+data.bank_account_no+`</div>
                  <div class="col-sm-12 col-md-1"><span class="table-mobile-label">Leaves : </span>`+data.no_of_days+`</div>
                  <div class="col-sm-12 col-md-1"><span class="table-mobile-label">Deduction : </span>`+data.deduction+`</div>
                  <div class="col-sm-12 col-md-1"><span class="table-mobile-label">Payable Amount : </span>`+data.amount+`</div>
                  <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Remark : </span>`+data.remark+`</div>
                  <div class="col-sm-12 col-md-1"><span class="table-mobile-label">Date : </span>`+data.Date+`</div>
                </div>`;
              });
              //--------------------------------------------------------

              //--------------------- M.Tech. Print Button -----------------------
              search_result.innerHTML += `<div class="btn-wrapper-center">
                <button class="btn-wide-blue" style="width : 35%; margin:10px;" onclick="printFellowship('mtech-fellowship', '`+department+`');">Print</button>
              </div>`;
              //-----------------------------------------------------------
            }
            else
            {
              //----------------------- Phd Header -------------------------
              search_result.innerHTML += `<div class="table-header hide-header-sm">
                <h6 class="col-1">S.No.</h6>
                <h6 class="col-2">Registration</h6>
                <h6 class="col-2">Name</h6>
                <h6 class="col-2">Account No.</h6>
                <h6 class="col-1">Semester</h6>
                <h6 class="col-1">Date</h6>
                <h6 class="col-2">Remark</h6>
              </div>`;
              //-------------------------------------------------------------

              //----------------------- Phd Rows -----------------------------
              frontend_data.forEach((data, i) => {
                search_result.innerHTML += `
                <div class="table-row-wrapper" id="`+data.registration_no+`">
                  <div class="row table-row">
                    <div class="col-sm-12 col-md-1"><span class="table-mobile-label">S.No. : </span>`+(i+1)+`</div>
                    <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Registration : </span>`+data.registration_no+`</div>
                    <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Name : </span>`+data.student_name+`</div>
                    <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Account No. : </span>`+data.bank_account_no+`</div>
                    <div class="col-sm-12 col-md-1"><span class="table-mobile-label">Semester : </span><span class="phd-semester">`+data.semester+`</span></div>
                    <div class="col-sm-12 col-md-1"><span class="table-mobile-label">Date : </span>`+data.Date+`</div>
                    <div class="col-sm-12 col-md-2"><span class="table-mobile-label">Remark : </span>`+data.remark+`</div>
                  </div>
                  <div class="row table-row">
                    <div class="col-sm-12 col-md-2"><b>Fellowship Amount :</b> `+data.full_stipend+`</div>
                    <div class="col-sm-12 col-md-2"><b>Leave :</b> `+data.no_of_days+`</div>
                    <div class="col-sm-12 col-md-2"><b>HRA :</b> `+data.hra+`</div>
                    <div class="col-sm-12 col-md-2"><b>Deduction :</b> `+data.deduction+`</div>
                    <div class="col-sm-12 col-md-2"><b>Net Amount :</b> `+data.amount+`</div>
                  </div>
                </div>`;
              });
              //-----------------------------------------------------------------

              //-------------------- Phd Buttons -------------------------------
              search_result.innerHTML += `<div class="btn-wrapper-center">
                <button class="btn-wide-blue" style="width : 35%; margin:10px;" onclick="printFellowship('phd-fellowship', '`+department+`');">Print</button>
              </div>`;
            //---------------------------------------------------------------------
            }
          }
          else
          {
            // display "No Eligible candidate found message"
            $('.batch-result-fail').addClass('active');
          }
      },
      async : false
    });
}
//-----------------------------------------------------------------------------------------
/*--------------------------- Print Fellowship --------------------------------------------
  printFellowship(tab, department) : Creates PDF for already fresh or pending filled fellowships,
  Invoked after the fellowships are previewed on the search result display area.

  - Parameters :
    - Tab : To differentiate between the courses for which the printFellowship() is called
            for.
    - department : Department for which the print function is being called for.

  - Operations :
    1. Get the array of DOM objects from the frontend for each fellowship
        mtech : target all the .table-row classes.
        phd : target all the .table-row-wrapper

    2. Get the required data from the respective .table-row  or .table-row-wrapper children
       to populate pdf table.

    3. Set variables for different parts of the pdf depending on the pdf of it being either
       phd's or mtech's.

    4. Put the assembled table and the data on the pdf.
*/
function printFellowship(tab, department)
{
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var students;   // array of fellowship DOM objects
  if(tab == "mtech-fellowship")
    students = $(".table-row");
  else
    students = $(".table-row-wrapper");

  var print_data = [];
  // --------- Assemble the rows of pdf table from the frontend DOM data -------------------
  for(var i=0; i<students.length; i++)
  {
    var data = [];
    if(tab == "mtech-fellowship")
    {
      data.push(i+1); // serial no.
      data.push(students[i].id);    // registration_no
      data.push(students[i].children[2].innerText);  // name
      data.push(students[i].children[3].innerText);  // account no.
      var leaves = (students[i].children[4].innerText == "null")? '0' : students[i].children[4].innerText;
      var deduction = (students[i].children[5].innerText == "null")? '0' : students[i].children[5].innerText;
      var payble = (students[i].children[6].innerText == "null")? '0' : students[i].children[6].innerText;
      data.push(leaves);
      data.push(deduction);
      data.push(payble);
      data.push(students[i].children[7].innerText); // remark
      data.push(students[i].children[8].innerText); // date
    }
    else
    {
        data.push(i+1); // serial no.
        data.push(students[i].id);  // registration_no
        data.push(students[i].children[0].children[2].innerText); // name;
        data.push(students[i].children[0].children[3].innerText); // account no.
        var leaves = (students[i].children[1].children[1].lastChild.data == " null")? '0' : students[i].children[1].children[1].lastChild.data ;
        var deduction = (students[i].children[1].children[3].lastChild.data == " null")? '0' : students[i].children[1].children[3].lastChild.data;
        var hra = (students[i].children[1].children[2].lastChild.data == " null")? '0' : students[i].children[1].children[2].lastChild.data;
        var fellowship_amount = (students[i].children[1].children[0].lastChild.data == "null")? '0' : students[i].children[1].children[0].lastChild.data;
        var net_amount = students[i].children[1].children[4].lastChild.data;
        data.push(leaves);
        data.push(deduction);
        data.push(hra);
        data.push(fellowship_amount);
        data.push(net_amount);
        data.push(students[i].children[0].children[6].innerText) // remark
        data.push(students[i].children[0].children[5].innerText); //date
    }
    print_data.push(data);
  }
  //--------------------------------------------------------------------------------------------------

  //------------------------------- Assemble other pdf data. ---------------------------------
  var string1, string2, string3, header_pad, table_header, table_style, signature_text;
  if(tab == "mtech-fellowship")
  {
    string1 = "Stipend of M.Tech.("+department+") for "+months[parseInt($('#month').val())]+" "+$('#session').val();
    string2 = "The stipend of following "+print_data.length+" M.Tech. students is forwarded for payment as per details given below :";
    string3 = "It is verified that above students satisfy the conditions given in clause 14 of the Ordinance for Masters Programme.";
    table_header = [['S.No.', 'Reg. No.', 'Name', 'Account No.', 'Leaves', 'Deduction','Amount', 'Remark', 'Date']];
    table_style = {fontSize : 6, cellPadding : 2};
    signature_text = "Name and Signature of authorized signatory";
  }
  else
  {
    string1 = "Stipend of Category "+$('#admission-mode').val()+" of Ph.D.("+department+") for "+months[parseInt($('#month').val())]+" "+$('#session').val();
    string2 = "The stipend of following "+print_data.length+" Ph.D. students is forwarded for payment as per details given below :";
    string3 = "Above candidates are eligible for stipend/fellowship as per Ordinances for doctrol programme.";
    table_header = [['S.No.', 'Reg. No.', 'Name', 'Account No.', 'Leaves', 'Deduction', 'HRA', 'Full Fellowship', 'Total', 'Remark', 'Date']];
    table_style = {fontSize : 6, cellPadding : 2};
    signature_text = "Signature Convener DDPC";
  }
  //-----------------------------------------------------------------------------------------

  //---------------------------------- PDF department Banner -------------------------------
  if(department == "Computer Science and Engineering")
    header_pad = csed;
  else if(department == "Biotechnology")
    header_pad = bio_tech;
  else if(department == "Civil Engineering")
    header_pad = civil;
  else if(department == "Chemical Engineering")
    header_pad = chemical_engineering;
  else if(department == "Chemistry")
    header_pad = chemistry;
  else if(department == "Chief Proctor Office")
    header_pad = chief_proctor;
  else if(department == "Dean Student Welfare")
    header_pad = dsw;
  else if(department == "Electronics and Communication Engineering")
    header_pad = ece;
  else if(department == "Electrical Engineering")
    header_pad = ee;
  else if(department == "GIS Cell")
    header_pad = gis;
  else if(department == "Mechanical Engineering")
    header_pad = mechanical;
  else if(department == "Humanities and Social Sciences")
    header_pad = hss;
  else if(department == "Mathematics")
    header_pad = maths;
  else if(department == "Physics")
    header_pad = physics;
  else if(department == "School of Management studies")
    header_pad = sms;
//------------------------------------------------------------------------------------------

//------------------------ Putting assembled data on the pdf ------------------------------
  var doc = new jspdf.jsPDF();  // pdf object
  doc.addImage(header_pad, 'JPG', 15, 5, 175, 35);  // header image
  doc.setFontSize(10);
  doc.text(13, 50, string1);
  doc.text(13, 55, string2);
  doc.autoTable({     // pdf table
    styles : table_style,
    margin : {top : 60},
    didDrawPage: function (data) {
      doc.addImage(header_pad, 'JPG', 15, 5, 175, 35);
      data.settings.margin.top = 50;
    },
    head: table_header,
    body: print_data,
  });
  let date = new Date();
  date = date.toDateString();
  doc.text(string3, 13, doc.lastAutoTable.finalY + 7);
  doc.text(signature_text, 13, doc.lastAutoTable.finalY + 25);
  doc.text("Date : "+date, 13, doc.lastAutoTable.finalY + 30);
  doc.text("Signature Head of the Department", 143, doc.lastAutoTable.finalY + 30);
  doc.save('Test.pdf'); // save pdf
}
//------------------------------------------------------------------------------
/*--------------------- Pending Fellowship Fill/Display ------------------------
pendingFillDisplay(tab, department, sessions) : To display all the "Eligible Students"
for the pending fellowship of the specified month, semester, session, whose fellowship
amount has not reached the "max-amount" or has reached maxed amount but is saved.
  The fellowship of those displayed candidates can be filled out after being displayed.

- Parameters :
  - tab : "mtech-fellowship" or "phd-fellowship"
  - department : The department for which the fellowships are to be granted.
  - sessions : session list of the course from where the function is being called from.

- Operations :
  1. Check if there exists fellowship records of the following session, semester, and
     month.
     a. There are no pending entries : Display the no result placeholder.
     b. There can either be single or multiple fellowship entries for the specified
        time period. If there are multiple entries, only the latest entry needs to be
        fetched along with all its data since it would contain the last modified amount.
  2. The fellowships would already contain the latest state of the fellowship for a
     student this month with the latest deduction, hra, leaves data filled.
     Changing the data would modify the next fellowship state.
  3. Fellowship are either saved or frozen.
*/

function pendingFillDisplay(tab, department, sessions)
{
  var semester;
  var session;
  var month;
  var branch;
  var admission_mode;
  if(tab == "mtech-fellowship")
  {
    var fetch_query = "";
    if(branch == "All")
      fetch_query = "";
    else fetch_query = "";



  }
  else
  {

  }
}
//------------------------------------------------------------------------------
//------------------------ Fellowship Fill or Fellowship Display ---------------

/*
  fellowshipFillDisplay(tab, department, sessions) :
  - Objective : To either display a batch of filled fellowship or Fill fellowship details of
    the batch, both "pending" and "fresh".

    Parameters :
    - tab : either "mtech-fellowship" or "phd-fellowship", to determine course.
    - department : Department for which the fellowship is being filled out.
    - sessions : Session array of objects for the called course(passed in the frontend).

    Operations :
    1. Clear out the "search results" display area of prefetched data(empty placeholder, result list)
    2. Check if the "preview option" is selected and either call previewFellowship() to display fellowships
       or freshFillDisplay() and pendingFillDisplay()
*/
function fellowshipFillDisplay(tab, department, sessions)
{
  //-------------------------- Clear Result Area ----------------------------------
  var search_result = document.getElementsByClassName('batch-search-result')[0].innerHTML = "";
  $('.batch-result-fail').removeClass('active');
  $('.batch-search-result').removeClass('active');
  //-------------------------------------------------------------------------------

  //-------------------------- Either Fill or Preview ----------------------------
  var isPreview = $('#preview').prop("checked");
  var fellowship_type = $('#fellowship-type').val();  // dropdown pending, fresh
  if(isPreview == false)
  {
    if(fellowship_type == "fresh")
      freshFillDisplay(tab, department, sessions);
    else
      pendingFillDisplay(tab, department, sessions);
  }
  else
  {
    previewFellowship(tab, department);
  }
  //-------------------------------------------------------------------------
}
//------------------------------------------------------------------------------------------------
