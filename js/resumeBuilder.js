var bio = {

	"name": "Gage Gaskins",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "434-249-8011",
		"email": "tgg8ec@virginia.edu",
		"github": "GageGaskins",
		"twitter": "@GageGaskins",
		"location": "Charlottesville, Virginia"
	},
	"welcomeMessage": "Welcome to my resume! I program stuff.",
	"skills": [ "Java", "C/C++", "HTML", "CSS", "JavaScript", "UNIX" ],
	"bioPic": "images/fry.jpg"
};

var work = {
	"jobs" : [
		{
			"employer": "University Transit Service",
			"title": "Student Driver",
			"location": "Charlottesville, Virginia",
			"dates": "2014-",
			"description": "Student driver for University of Virginia transit service."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Intro to HTML and CSS Final Project",
			"dates": "December 2014",
			"description": "Website mockup for Udacity course using HTML and CSS.",
			"images": []
		},
		{
			"title": "JavaScript Basics Final Project",
			"dates": "December 2014",
			"description": "Resume created using HTML filled by JavaScript",
			"images": []
		},
		{
			"title": "CS 1501 Final Project",
			"dates": "December 2013",
			"description": "Global Suicide rates visualized through the use of JavaScript and the Raphael SVG library.",
			"images": []
		}
	]
};

var education = {
	"schools": [
		{
			"name": "University of Virginia",
			"location": "Charlottesville, Virginia",
			"degree": "BA",
			"majors": ["Computer Science"],
			"dates": "2012-2016",
			"url": "www.virginia.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "December 2014",
			"url": "www.Udacity.com"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "December 2014",
			"url": "www.Udacity.com"
		}
	]
};


function displayHeader(){

	var formattedheaderName = HTMLheaderName.replace("%data%", bio.name);
	var formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedheaderRole);
	$("#header").prepend(formattedheaderName);

	for(contact in bio.contacts){
		formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
		formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);
		$("#topContacts").append(formattedContact);
	}

	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").append(formattedPic);
	$("#header").append(formattedWelcomeMessage);
	
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
	
}

function displayWork(){

	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}	
}

function displayProjects(){

	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	}
}

displayHeader();
displayWork();
displayProjects();	