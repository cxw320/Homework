$(document).ready(function(){


// SLIDE TOGGLE SECTION

$('.slideNameMenu').hide();
$('.slideSkillMenu').hide();
$('.slideExperienceMenu').hide();
$('.slideEducationMenu').hide();
$('.slideJob1').hide();
$('.slideJob2').hide();
$('.slideJob3').hide();



	$(".menuLabel1").click(function(){
		$(".slideNameMenu").slideToggle("slow");
	});
	

	$(".menuLabel2").click(function(){
		$(".slideSkillMenu").slideToggle("slow");
	});

	$(".menuLabel3").click(function(){
		$(".slideExperienceMenu").slideToggle("slow");
	});

	$(".menuLabel4").click(function(){
		$(".slideEducationMenu").slideToggle("slow");
	});

	$(".company1Label").click(function(){
		$(".slideJob1").slideToggle("slow");
	});

	$(".company2Label").click(function(){
		$(".slideJob2").slideToggle("slow");
	});

	$(".company3Label").click(function(){
		$(".slideJob3").slideToggle("slow");
	});



// FORM SECTION



 	$(".button").click(function(e){
 		// don't submit the form
 		e.preventDefault();

 		// NAME SECTION ---------
 		var inputName = $('#inputName').val();
 		console.log(inputName);
 		if(inputName != "") {
 			$('#name').text(inputName);
 		};

 		var inputJobTitle = $('#inputJobTitle').val();
 		console.log(inputJobTitle);
 		if(inputJobTitle != "") {
 		$('#jobTitleHeader').text(inputJobTitle);
	 	};


	 	var inputEmail = $('#inputEmail').val();
 		console.log(inputEmail);
 		if(inputEmail != "") {
 		$('#email').text(inputEmail);	
 		};

 		var inputCell = $('#inputCell').val();
 		console.log(inputCell);
 		if(inputCell != "") {
 		$('#cell').text(inputCell);
 		};	

 		var inputAddress = $('#inputAddress').val();
 		console.log(inputAddress);
 		if(inputAddress != "") {
 		$('#address').text(inputAddress);	
 		};



 		 // SKILL SECTION --------
	 		
    	var inputSkill1 = $('#inputSkill1').val();
 		console.log(inputSkill1);
 		if(inputSkill1 != "") {
 		$('#skill1').text(inputSkill1);	
 		};

 		var inputSkill2 = $('#inputSkill2').val();
 		console.log(inputSkill2);
 		if(inputSkill2 != "") {
 		$('#skill2').text(inputSkill2);	
 		};

 		var inputSkill3 = $('#inputSkill3').val();
 		console.log(inputSkill3);
 		if(inputSkill3 != "") {
 		$('#skill3').text(inputSkill3);
 		};	

  		var inputSkill4 = $('#inputSkill4').val();
 		console.log(inputSkill4);
 		if(inputSkill4 != "") {
 		$('#skill4').text(inputSkill4);
 		};	
 		
 		var inputSkill5 = $('#inputSkill5').val();
 		console.log(inputSkill5);
 		if(inputSkill5 != "") {
 		$('#skill5').text(inputSkill5);
 		};	 				

 		var inputSkill6 = $('#inputSkill6').val();
 		console.log(inputSkill6);
 		if(inputSkill6 != "") {
 		$('#skill6').text(inputSkill6);	
 		};

  		var inputSkill7 = $('#inputSkill7').val();
 		console.log(inputSkill7);
 		if(inputSkill7 != "") {
 		$('#skill7').text(inputSkill7);	
 		};	

   		var inputSkill8 = $('#inputSkill8').val();
 		console.log(inputSkill8);
 		if(inputSkill8 != "") {
 		$('#skill8').text(inputSkill8);
 		};	


 		// COMPANY 1-------

 		var inputCompany1 = $('#inputCompany1').val();
 		console.log(inputCompany1);
 		if(inputCompany1 != "") {
 		$('#company1').text(inputCompany1);	
 		};

   		var inputJobTitle1 = $('#inputJobTitle1').val();
 		console.log(inputJobTitle1); 		
 		if(inputJobTitle1 != "") {
 		$('#JobTitle1').text(inputJobTitle1);		
 		};

 		var inputJobDesc1B1 = $('#inputJobDesc1B1').val();
 		console.log(inputJobDesc1B1);
 		if(inputJobDesc1B1 != "") {
 		$('#JobDesc1B1').text(inputJobDesc1B1 );
 		};


 		var inputJobDesc1B2 = $('#inputJobDesc1B2').val();
 		console.log(inputJobDesc1B2);
 		if(inputJobDesc1B2 != "") {
 		$('#JobDesc1B2').text(inputJobDesc1B2 );
 		};


 		var inputJobDesc1B3 = $('#inputJobDesc1B3').val();
 		console.log(inputJobDesc1B3);
 		if(inputJobDesc1B3 != "") {
 		$('#JobDesc1B3').text(inputJobDesc1B3);	
 		};


 		var inputJobDesc1B4 = $('#inputJobDesc1B4').val();
 		console.log(inputJobDesc1B4);
 		if(inputJobDesc1B4 != "") {
 		$('#JobDesc1B4').text(inputJobDesc1B4);
 		};	

 		var inputJobDesc1B5 = $('#inputJobDesc1B5').val();
 		console.log(inputJobDesc1B5);
 		if(inputJobDesc1B5 != "") {
 		$('#JobDesc1B5').text(inputJobDesc1B5);
 		};

 		var inputJobDesc1B6 = $('#inputJobDesc1B6').val();
 		console.log(inputJobDesc1B6);
 		if(inputJobDesc1B6 != "") {
 		$('#JobDesc1B6').text(inputJobDesc1B6);	
 		};


 		// COMPANY 2 ----------------

 		var inputCompany2 = $('#inputCompany2').val();
 		console.log(inputCompany2);
 		if(inputCompany2 != "") {
 		$('#company2').text(inputCompany2);	
 		};

   		var inputJobTitle2 = $('#inputJobTitle2').val();
 		console.log(inputJobTitle2); 		
 		if(inputJobTitle2 != "") {
 		$('#JobTitle2').text(inputJobTitle2);		
 		};

 		var inputJobDesc2B1 = $('#inputJobDesc2B1').val();
 		console.log(inputJobDesc2B1);
 		if(inputJobDesc2B1 != "") {
 		$('#JobDesc2B1').text(inputJobDesc2B1 );
 		};


 		var inputJobDesc2B2 = $('#inputJobDesc2B2').val();
 		console.log(inputJobDesc2B2);
 		if(inputJobDesc2B2 != "") {
 		$('#JobDesc2B2').text(inputJobDesc2B2 );
 		};


 		var inputJobDesc2B3 = $('#inputJobDesc2B3').val();
 		console.log(inputJobDesc2B3);
 		if(inputJobDesc2B3 != "") {
 		$('#JobDesc2B3').text(inputJobDesc2B3);	
 		};


 		var inputJobDesc2B4 = $('#inputJobDesc2B4').val();
 		console.log(inputJobDesc2B4);
 		if(inputJobDesc2B4 != "") {
 		$('#JobDesc2B4').text(inputJobDesc2B4);
 		};	

 		var inputJobDesc2B5 = $('#inputJobDesc2B5').val();
 		console.log(inputJobDesc2B5);
 		if(inputJobDesc2B5 != "") {
 		$('#JobDesc2B5').text(inputJobDesc2B5);
 		};

 		var inputJobDesc2B6 = $('#inputJobDesc2B6').val();
 		console.log(inputJobDesc2B6);
 		if(inputJobDesc2B6 != "") {
 		$('#JobDesc2B6').text(inputJobDesc2B6);	
 		};

		// COMPANY 3 ----------------

 		var inputCompany3 = $('#inputCompany3').val();
 		console.log(inputCompany3);
 		if(inputCompany3 != "") {
 		$('#company3').text(inputCompany3);	
 		};

   		var inputJobTitle3 = $('#inputJobTitle3').val();
 		console.log(inputJobTitle3); 		
 		if(inputJobTitle3 != "") {
 		$('#JobTitle3').text(inputJobTitle3);		
 		};

 		var inputJobDesc3B1 = $('#inputJobDesc3B1').val();
 		console.log(inputJobDesc3B1);
 		if(inputJobDesc3B1 != "") {
 		$('#JobDesc3B1').text(inputJobDesc3B1 );
 		};


 		var inputJobDesc3B2 = $('#inputJobDesc3B2').val();
 		console.log(inputJobDesc3B2);
 		if(inputJobDesc3B2 != "") {
 		$('#JobDesc3B2').text(inputJobDesc3B2 );
 		};


 		var inputJobDesc3B3 = $('#inputJobDesc3B3').val();
 		console.log(inputJobDesc3B3);
 		if(inputJobDesc3B3 != "") {
 		$('#JobDesc3B3').text(inputJobDesc3B3);	
 		};


 		var inputJobDesc3B4 = $('#inputJobDesc3B4').val();
 		console.log(inputJobDesc3B4);
 		if(inputJobDesc3B4 != "") {
 		$('#JobDesc3B4').text(inputJobDesc3B4);
 		};	

 		var inputJobDesc3B5 = $('#inputJobDesc3B5').val();
 		console.log(inputJobDesc3B5);
 		if(inputJobDesc3B5 != "") {
 		$('#JobDesc3B5').text(inputJobDesc3B5);
 		};

 		var inputJobDesc3B6 = $('#inputJobDesc3B6').val();
 		console.log(inputJobDesc3B6);
 		if(inputJobDesc3B6 != "") {
 		$('#JobDesc3B6').text(inputJobDesc3B6);	
 		};

 		// document.getElementById("form-horizontal").reset(); 
 		$("#form-horizontal") [0].reset();


 	});

// PLUS SECTION 

 	$(".plus").click(function(){

 	console.log(document.getElementById("form-group3").style.color);

 	if(document.getElementById("form-group3").style.display=='none'){
 		 console.log()
 		 $("#form-group2").css("display","block");

 		};
 	});

 	// $(".plus").click(function(){
 	// 	$("#form-group3").css("display","block");
 	// });

 	$(".resumeTemplate2").click(function(){
 		$(".resume1").attr("class","resume2");
 	});

 	 $(".resumeTemplate1").click(function(){
 		$(".resume2").attr("class","resume1");
 	});

 	$(".word-export").click(function(){
 		$("#export-content").wordExport();

 	});





});
    

