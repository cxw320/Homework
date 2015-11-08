$(document).ready(function(){


// SLIDE TOGGLE SECTION
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

 		// get and store inputName
 		var inputName = $('#inputName').val();
 		console.log(inputName);
 		if(inputName != "") {
 			$('.resume header h1').text(inputName);
 		};
 		

 		// get and store inputName
 		var inputJobTitle = $('#inputJobTitle').val();
 		console.log(inputJobTitle);
 		if(inputJobTitle != "") {
 		$('.resume h2').text(inputJobTitle);
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


 		var inputCompany1 = $('#inputCompany1').val();
 		console.log(inputCompany1);
 		if(inputCompany1 != "") {
 		$('#company1').text(inputCompany1);	
 		};
   		var inputJobTitle1 = $('#inputJobTitle1').val();
 		console.log(inputJobTitle1);
 		$('#JobTitle1').text(inputJobTitle1);	

 		var inputJobDesc1B1 = $('#inputJobDesc1B1').val();
 		console.log(inputJobDesc1B1);
 		$('#JobDesc1B1').text(inputJobDesc1B1 );


 		var inputJobDesc1B2 = $('#inputJobDesc1B2').val();
 		console.log(inputJobDesc1B2);
 		$('#JobDesc1B2').text(inputJobDesc1B2 );


 		var inputJobDesc1B3 = $('#inputJobDesc1B3').val();
 		console.log(inputJobDesc1B3);
 		$('#JobDesc1B3').text(inputJobDesc1B3);	


 		var inputJobDesc1B4 = $('#inputJobDesc1B4').val();
 		console.log(inputJobDesc1B4);
 		$('#JobDesc1B4').text(inputJobDesc1B4);	

 		var inputJobDesc1B5 = $('#inputJobDesc1B5').val();
 		console.log(inputJobDesc1B5);
 		$('#JobDesc1B5').text(inputJobDesc1B5);

 		 var inputJobDesc1B6 = $('#inputJobDesc1B6').val();
 		console.log(inputJobDesc1B6);
 		$('#JobDesc1B6').text(inputJobDesc1B6);	


 	});

// PLUS SECTION 

 	$(".plus").click(function(){
 		$("#form-group2").css("display","block");
 	});

 	$(".plus").click(function(){
 		$("#form-group3").css("display","block");
 	});

 	$(".change").click(function(){
 		$(".resume1").attr("class","resume2");
 	});

 	$(".word-export").click(function(){
 		$("#export-content-image").wordExport();

 	});



});
    

