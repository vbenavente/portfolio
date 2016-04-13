var projects = [];

function Project (items) {
	this.title = items.title;
	this.category = items.category;
	this.gitUrl = items.gitUrl;
	this.publishedOn = items.publishedOn;
	this.body = items.body;
}

Project.prototype.toHtml = function() {
	var $newProject = $('article.template').clone();

	$newProject.attr('data-category', this.category);
	$newProject.find('a').attr('href', this.gitUrl);
	$newProject.find('h1').html(this.title);
	$newProject.find('article-body').html(this.body);
	$newProject.find('time').attr('datetime', this.publishedOn);

	$newProject.removeClass('template');

	return $newProject;
}