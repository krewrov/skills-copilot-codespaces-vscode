function skillsMember() {
  var member = document.querySelector('.member');
  var memberSkills = document.querySelector('.member-skills');
  var memberSkillsClose = document.querySelector('.member-skills-close');

  member.addEventListener('click', function() {
    memberSkills.classList.add('member-skills-active');
  });

  memberSkillsClose.addEventListener('click', function() {
    memberSkills.classList.remove('member-skills-active');
  });
}